// diagnostic.js - discovery diagnostic engine + UI + engagement detail

function diagGetActiveQs() {
  return diagTier === 1 ? DIAG_Qs.filter(q => q.id !== 'moment') : DIAG_Qs;
}


function diagComputeScores() {
  const raw = {};
  const attrib = {}; // offering key → [{theme, pts}]
  Object.keys(DIAG_OFFERINGS).forEach(k => { raw[k] = 0; attrib[k] = []; });

  diagGetActiveQs().forEach(q => {
    const a = diagAns[q.id];
    if (!a || (Array.isArray(a) && a.length === 0)) return;
    const pts = q.score(a);
    const boost = (diagTier === 2 && (q.id === 'gap' || q.id === 'ai')) ? 1.5 : 1;
    const theme = (q.label.split('—')[1] || q.label).trim();
    Object.entries(pts).forEach(([k, v]) => {
      if (raw[k] !== undefined) {
        const boosted = Math.min(4, Math.round(v * boost)); // Fix 4 — boost cap at 4pts
        raw[k] += boosted;
        if (boosted > 0) attrib[k].push({ theme, pts: boosted });
      }
    });
  });

  // Post-scoring adjustments
  const gapAns    = Array.isArray(diagAns.gap)    ? diagAns.gap    : [];
  const estateAns = Array.isArray(diagAns.estate) ? diagAns.estate : [];
  const maturity  = diagAns.maturity || 0;

  // Fix 2 — Maturity gate: advanced offerings need a functioning L&D base
  if (maturity <= 2)
    ['ewai','aotm','ssr','tec'].forEach(k => { raw[k] = Math.max(0, (raw[k]||0) - 2); });

  // Fix 1 — LFR minimum-source rule: needs signal from ≥ 2 different questions to rank primary
  if (attrib.lfr.length < 2)
    raw.lfr = Math.max(0, (raw.lfr||0) - 3);

  // Existing — AI contradiction: enterprise mandate but AI not in Q4 gap
  if (diagAns.ai === 'all_workforce' && !gapAns.includes('ai_digital'))
    raw.ewai = Math.max(0, (raw.ewai||0) - 2);

  // Existing — Greenfield guard: demote AI-heavy offerings
  if (estateAns.includes('greenfield')) {
    raw.ewai = Math.max(0,(raw.ewai||0)-1);
    raw.aotm = Math.max(0,(raw.aotm||0)-1);
  }

  // Fix 6 — Enterprise scope + greenfield estate: demote governance and tech plays
  if (diagAns.scope === 'enterprise' && estateAns.includes('greenfield')) {
    raw.lsg = Math.max(0,(raw.lsg||0)-1);
    raw.tec = Math.max(0,(raw.tec||0)-1);
  }

  // Existing — High maturity + no clarity is a data problem, not a strategy problem
  if (maturity >= 4 && gapAns.includes('no_clarity'))
    raw.lfr = Math.max(0,(raw.lfr||0)-2);

  // Floor rule — drop < 3 pts
  Object.keys(raw).forEach(k => { if (raw[k] < 3) { delete raw[k]; delete attrib[k]; } });

  return { raw, attrib };
}

// ============ CONSULTING DIRECTORS ============

let diagStep          = 0;

let diagAns           = {};

let diagNotes         = {};

let diagTier          = null;

let diagExpansionNote = '';

let diagBudget        = null;


function diagIsReady(q) {
  if (!q) return false;
  if (q.type === 'scale') return diagAns[q.id] !== undefined;
  if (q.type === 'multi') return (diagAns[q.id] || []).length > 0;
  return diagAns[q.id] !== undefined;
}


function renderDiagnostic() {
  diagStep = 0; diagAns = {}; diagNotes = {}; diagTier = null; diagExpansionNote = ''; diagBudget = null;
  const container = document.getElementById('diagnostic-container');
  if (!container) return;
  container.innerHTML = '<div id="diag-inner" style="max-width:680px;margin:0 auto;"></div>';
  renderDiagStep();
}


function renderDiagStep() {
  const root = document.getElementById('diag-inner');
  if (!root) return;

  // Phase 0 — Tier Router
  if (!diagTier) {
    root.innerHTML = `
      <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-400);margin-bottom:8px;">Step 0 — Tier Router</div>
      <div style="font-size:19px;font-weight:500;color:var(--ink);line-height:1.35;margin-bottom:6px;">Where are we with this client?</div>
      <div style="font-size:13px;color:var(--grey-600);margin-bottom:20px;">This shapes which questions to run — and how to frame LFR if it surfaces.</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
        ${[
          {n:1,label:'Active engagement',  sub:"We're in the room — work is underway with this client."},
          {n:2,label:'Dormant relationship',sub:'Prior history exists. We\'ve delivered together before, but there\'s no current scope.'},
          {n:3,label:'Prospective',         sub:'First contact or early-stage outreach. We need to earn credibility before prescribing.'},
        ].map(t=>`
          <button onclick="diagSetTier(${t.n})"
            style="text-align:left;border:1px solid var(--grey-200);border-radius:10px;padding:14px 16px;font-family:inherit;cursor:pointer;background:var(--paper);transition:all .15s;"
            onmouseover="this.style.borderColor='var(--accent)';this.style.background='#FDE8F3';"
            onmouseout="this.style.borderColor='var(--grey-200)';this.style.background='var(--paper)';">
            <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent-deep);margin-bottom:3px;">Tier ${t.n}</div>
            <div style="font-size:14px;font-weight:500;color:var(--ink);margin-bottom:2px;">${t.label}</div>
            <div style="font-size:12px;color:var(--grey-600);">${t.sub}</div>
          </button>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--grey-400);line-height:1.5;"><strong style="color:var(--grey-600);">Decision rule:</strong> Name 3 stakeholders by role + active work in flight → Tier 1. Prior delivery, no current scope → Tier 2. Everything from public sources → Tier 3.</div>`;
    return;
  }

  // Phase 1 — Expansion probe (Tier 1 only)
  if (diagTier === 1 && diagStep === -1) {
    root.innerHTML = `
      <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-400);margin-bottom:8px;">Tier 1 · Expansion Probe</div>
      <div style="font-size:19px;font-weight:500;color:var(--ink);line-height:1.35;margin-bottom:6px;">What scope or population isn't being reached by the current work?</div>
      <div style="font-size:13px;color:var(--grey-600);margin-bottom:16px;">Run this before the diagnostic. It locates the expansion surface — not the existing engagement.</div>
      <div style="background:var(--grey-50);border-left:2px solid #FBAFD4;border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:20px;">
        <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent-deep);margin-bottom:4px;">How to use this</div>
        <div style="font-size:12px;color:var(--grey-600);line-height:1.55;">Points to a new function or region → treat that population as Tier 2 in the questions below. Points to depth within current scope → route on Q4/Q7. <strong>Do not use LFR as a fresh wedge — use Pulse Check framing.</strong></div>
      </div>
      <textarea id="expansion-note-field" placeholder="What they said, exact population, scope gap identified…"
        style="width:100%;border:1px solid var(--grey-200);border-radius:8px;padding:10px 12px;font-size:13px;font-family:inherit;color:var(--ink);background:var(--paper);resize:vertical;min-height:80px;outline:none;line-height:1.5;margin-bottom:20px;">${diagExpansionNote}</textarea>
      <div style="display:flex;gap:8px;">
        <button onclick="diagTier=null;renderDiagStep();" style="padding:9px 20px;border-radius:8px;font-size:13px;cursor:pointer;border:1px solid var(--grey-200);background:var(--paper);color:var(--ink);font-family:inherit;">← Change tier</button>
        <button onclick="const f=document.getElementById('expansion-note-field');diagExpansionNote=f?f.value:'';diagStep=0;renderDiagStep();"
          style="padding:9px 22px;border-radius:8px;font-size:13px;cursor:pointer;border:none;background:var(--accent);color:#fff;font-family:inherit;font-weight:500;">Start diagnostic →</button>
      </div>`;
    return;
  }

  const activeQs   = diagGetActiveQs();
  const totalSteps = activeQs.length;

  // Phase 2 — Questions
  if (diagStep < totalSteps) {
    const q = DIAG_Qs[diagStep] ? activeQs[diagStep] : null;
    if (!q) { submitDiagnostic(); return; }

    const segs = activeQs.map((_,i) =>
      `<div style="height:3px;flex:1;border-radius:2px;background:${i<diagStep?'var(--accent)':i===diagStep?'#FBAFD4':'var(--grey-200)'};transition:background .2s;"></div>`
    ).join('');

    let chips = '';
    if (q.type === 'scale') {
      const cur = diagAns[q.id];
      chips = `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem;">` +
        q.opts.map(o => {
          const sel = cur == o.v;
          return `<button onclick="diagPickScale('${q.id}',${o.v})"
            style="border:1px solid ${sel?'var(--accent)':'var(--grey-200)'};border-radius:8px;padding:12px 0;width:72px;font-family:inherit;cursor:pointer;text-align:center;background:${sel?'#FDE8F3':'var(--paper)'};transition:all .15s;">
            <div style="font-size:20px;font-weight:500;color:${sel?'var(--accent)':'var(--ink)'};">${o.n}</div>
            <div style="font-size:10px;color:${sel?'var(--accent)':'var(--grey-600)'};margin-top:3px;">${o.t}</div>
          </button>`;
        }).join('') +
        `</div><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--grey-400);margin-top:-8px;margin-bottom:1.25rem;max-width:${72*5+8*4}px;"><span>Reactive</span><span>Strategic</span></div>`;
    } else {
      const isMulti  = q.type === 'multi';
      const maxSel   = q.maxSelect || 99;
      const cur      = isMulti ? (diagAns[q.id] || []) : null;
      const selCount = isMulti ? cur.length : 0;
      const hint     = isMulti ? (q.maxSelect ? ` · pick up to ${q.maxSelect}` : ' · select all that apply') : '';
      chips = `${isMulti?`<div style="font-size:12px;color:var(--grey-600);margin-bottom:10px;">Select${hint}</div>`:''}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:1.25rem;">` +
        q.opts.map(o => {
          const sel   = isMulti ? cur.includes(o.v) : diagAns[q.id] === o.v;
          const atMax = isMulti && !sel && selCount >= maxSel;
          const fn    = isMulti ? `diagToggleMulti('${q.id}','${o.v}',${maxSel})` : `diagPick('${q.id}','${o.v}')`;
          return `<button onclick="${fn}" ${atMax?'disabled':''}
            style="border:1px solid ${sel?'var(--accent)':'var(--grey-200)'};border-radius:100px;padding:8px 16px;font-family:inherit;font-size:13px;cursor:${atMax?'not-allowed':'pointer'};background:${sel?'#FDE8F3':atMax?'var(--grey-50)':'var(--paper)'};color:${sel?'var(--accent-deep)':atMax?'var(--grey-400)':'var(--ink)'};font-weight:${sel?'600':'400'};opacity:${atMax?.5:1};transition:all .15s;white-space:nowrap;">
            ${o.t}
          </button>`;
        }).join('') + `</div>`;
    }

    const ready   = diagIsReady(q);
    const isFirst = diagStep === 0;
    const isLast  = diagStep === totalSteps - 1;

    root.innerHTML = `
      <div style="display:flex;gap:3px;margin-bottom:24px;">${segs}</div>
      <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-400);margin-bottom:8px;">${diagStep+1} of ${totalSteps} — ${q.label.split('—')[1]?.trim()||q.label}</div>
      <div style="font-size:19px;font-weight:500;color:var(--ink);line-height:1.35;margin-bottom:6px;">${q.head}</div>
      <div style="font-size:13px;color:var(--grey-600);margin-bottom:16px;">${q.sub}</div>
      <div style="background:var(--grey-50);border-left:2px solid #FBAFD4;border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:20px;">
        <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent-deep);margin-bottom:4px;">Probe</div>
        <div style="font-size:12px;color:var(--grey-600);line-height:1.55;">${q.probe}</div>
      </div>
      ${chips}
      <div style="margin-top:4px;margin-bottom:16px;">
        <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-400);margin-bottom:6px;">Notes <span style="font-weight:400;text-transform:none;letter-spacing:0;">— optional</span></div>
        <textarea id="diag-note-field" onblur="saveNote()" placeholder="Exact words they used, context worth remembering…"
          style="width:100%;border:1px solid var(--grey-200);border-radius:8px;padding:10px 12px;font-size:13px;font-family:inherit;color:var(--ink);background:var(--paper);resize:vertical;min-height:64px;outline:none;line-height:1.5;">${diagNotes[q.id]||''}</textarea>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <button onclick="diagBack()" style="padding:9px 20px;border-radius:8px;font-size:13px;cursor:pointer;border:1px solid var(--grey-200);background:var(--paper);color:var(--ink);font-family:inherit;opacity:${isFirst?.4:1};" ${isFirst?'disabled':''}>← Back</button>
        <button onclick="diagNext()" ${!ready?'disabled':''}
          style="padding:9px 22px;border-radius:8px;font-size:13px;cursor:pointer;border:none;background:${ready?'var(--accent)':'var(--grey-200)'};color:${ready?'#fff':'var(--grey-400)'};font-family:inherit;font-weight:500;">
          ${isLast?'Budget check →':'Next →'}
        </button>
      </div>`;
    return;
  }

  // Phase 3 — Budget constraint (sizing only, not routing)
  if (diagStep === totalSteps) {
    const allSegs = activeQs.map(() => `<div style="height:3px;flex:1;border-radius:2px;background:var(--accent);"></div>`).join('');
    const budgetOpts = [
      {v:'exploratory',    t:'Exploratory — they want a picture before committing'},
      {v:'targeted',       t:'Targeted programme — defined scope, single stream'},
      {v:'transformation', t:'Significant transformation — multi-stream, multi-year'},
      {v:'unknown',        t:"Budget conversation hasn't happened yet"},
    ];
    root.innerHTML = `
      <div style="display:flex;gap:3px;margin-bottom:24px;">${allSegs}</div>
      <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-400);margin-bottom:8px;">Budget check — sizing constraint</div>
      <div style="font-size:19px;font-weight:500;color:var(--ink);line-height:1.35;margin-bottom:6px;">What does the investment appetite look like?</div>
      <div style="font-size:13px;color:var(--grey-600);margin-bottom:20px;">Not a routing question — this shapes sequencing and how you frame scope in the room.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
        ${budgetOpts.map(o => {
          const sel = diagBudget === o.v;
          return `<button onclick="diagBudget='${o.v}';renderDiagStep();"
            style="text-align:left;border:1px solid ${sel?'var(--accent)':'var(--grey-200)'};border-radius:10px;padding:12px 16px;font-family:inherit;font-size:13px;cursor:pointer;background:${sel?'#FDE8F3':'var(--paper)'};color:${sel?'var(--accent-deep)':'var(--ink)'};font-weight:${sel?'600':'400'};transition:all .15s;">${o.t}</button>`;
        }).join('')}
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="diagStep=${totalSteps-1};renderDiagStep();" style="padding:9px 20px;border-radius:8px;font-size:13px;cursor:pointer;border:1px solid var(--grey-200);background:var(--paper);color:var(--ink);font-family:inherit;">← Back</button>
        <button onclick="diagStep=${totalSteps+1};renderDiagStep();"
          style="padding:9px 22px;border-radius:8px;font-size:13px;cursor:pointer;border:none;background:var(--accent);color:#fff;font-family:inherit;font-weight:500;">See results →</button>
      </div>`;
    return;
  }

  // Phase 4 — Results
  submitDiagnostic();
}


function saveNote() {
  const el = document.getElementById('diag-note-field');
  const q  = diagGetActiveQs()[diagStep];
  if (el && q) diagNotes[q.id] = el.value;
}

function diagSetTier(n)           { diagTier = n; diagStep = n===1 ? -1 : 0; renderDiagStep(); }

function diagPick(id, v)          { diagAns[id] = v; renderDiagStep(); }

function diagPickScale(id, v)     { diagAns[id] = +v; renderDiagStep(); }

function diagToggleMulti(id, v, max) {
  let arr = [...(diagAns[id] || [])];
  arr = arr.includes(v) ? arr.filter(x => x !== v) : (arr.length < (max||99) ? [...arr, v] : arr);
  diagAns[id] = arr; renderDiagStep();
}

function diagNext() {
  saveNote();
  const qs = diagGetActiveQs();
  if (diagStep < qs.length) { diagStep++; renderDiagStep(); }
}

function diagBack() {
  saveNote();
  if (diagStep > 0)                         { diagStep--; renderDiagStep(); }
  else if (diagStep === 0 && diagTier === 1) { diagStep = -1; renderDiagStep(); }
  else if (diagStep === 0)                   { diagTier = null; renderDiagStep(); }
}


function submitDiagnostic() {
  const { raw: scores, attrib } = diagComputeScores();
  const ranked = Object.entries(scores)
    .map(([k, s]) => ({ key:k, ...DIAG_OFFERINGS[k], score:s }))
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) ranked.push({ key:'lfr', ...DIAG_OFFERINGS.lfr, score:0 });

  // Fix 8 — Weighted signal strength (Q4 + Q6 count double — most discriminating)
  const activeQs      = diagGetActiveQs();
  const Q_WEIGHT      = {gap:2, ai:2};
  const totalWeight   = activeQs.reduce((s,q) => s + (Q_WEIGHT[q.id]||1), 0);
  const answeredWeight= activeQs.filter(q => {
    const a = diagAns[q.id]; return a !== undefined && a !== null && !(Array.isArray(a) && a.length===0);
  }).reduce((s,q) => s + (Q_WEIGHT[q.id]||1), 0);
  const answeredCount = activeQs.filter(q => {
    const a = diagAns[q.id]; return a !== undefined && a !== null && !(Array.isArray(a) && a.length===0);
  }).length;
  const signalRatio  = answeredWeight / (totalWeight || 1);
  const signalLevel  = signalRatio >= 0.7 ? 'strong' : signalRatio >= 0.4 ? 'moderate' : 'weak';

  // Fix 5 — Relative supporting window: expands when signal is thin
  const supportWindow = signalLevel === 'strong' ? 2 : signalLevel === 'moderate' ? 3 : 4;

  const primary    = ranked[0];
  const supporting = ranked.slice(1).filter(o => o.score >= primary.score - supportWindow).slice(0, 2);

  // Conflict rules
  const rules      = [];
  const maturity   = diagAns.maturity || 0;
  const gapAns     = Array.isArray(diagAns.gap)    ? diagAns.gap    : [];
  const momentAns  = Array.isArray(diagAns.moment) ? diagAns.moment : [];
  const estateAns  = Array.isArray(diagAns.estate) ? diagAns.estate : [];
  const scopeAns   = diagAns.scope;
  const aiAns      = diagAns.ai;

  if (aiAns === 'all_workforce' && !gapAns.includes('ai_digital'))
    rules.push('AI mandate stated but AI/digital readiness not in the primary gap — EW-AI signal discounted. Worth probing the disconnect in the room.');
  if ((maturity === 1 || maturity === 2) && momentAns.includes('transform'))
    rules.push("Low L&D maturity + transformation mandate → LFR must precede any transformation play. Sequence them, don't choose.");
  if (scopeAns === 'ld_itself' && gapAns.some(g => ['ai_digital','future_skills','leadership'].includes(g)))
    rules.push('Scope is the L&D function itself — workforce capability plays are supporting, not primary.');
  if (ranked.length >= 2 && ranked[0].score - ranked[1].score <= 2)
    rules.push(`${ranked[0].name} and ${ranked[1].name} are within 2 points — sequence them rather than choose.`);
  if (diagTier === 1 && primary.key === 'lfr')
    rules.push('Tier 1 (Active): LFR surfaces here — frame as a Pulse Check, not a fresh wedge.');
  if (estateAns.includes('greenfield') && (primary.key === 'ewai' || primary.key === 'aotm'))
    rules.push('Greenfield estate + AI as primary — the infrastructure may not be ready. Consider LFR first to set the foundation.');
  if (diagAns.scope === 'enterprise' && estateAns.includes('greenfield'))
    rules.push('Enterprise scope on a greenfield estate — LFR or Capability Building must precede any governance or technology play. The infrastructure is not there yet.');
  if (maturity >= 4 && gapAns.includes('no_clarity'))
    rules.push('High-maturity function flagging "no clarity on gap" — likely a data or measurement problem, not a strategy problem. LAM should feature.');

  // Sequencing note
  const pk = primary.key;
  const sk = supporting.map(s => s.key);
  const seqMap = {
    'lfr+lft':   'LFR (3–4 months) → LFT as 12–18 month follow-on once the diagnostic sets direction.',
    'lfr+ewai':  'LFR to establish the mandate and infrastructure plan → EW-AI to scale across the workforce.',
    'saf+ssr':   'SAF first (build the common skills language) → SSR to set the multi-year strategic roadmap.',
    'ssr+saf':   "SAF in parallel — it gives SSR the language it runs on. Don't skip it.",
    'tec+lsg':   'TEC + LSG in parallel — tech rationalisation without governance reverts in 18 months.',
    'lam+po':    'LAM first (build the evidence layer) → PO to rationalise the portfolio based on what the data shows.',
    'lam+ljp':   'LAM to instrument and diagnose the behaviour change gap → LJP to redesign the experience.',
    'ljp+acad':  'LJP architecture (months 1–4) → ACAD for brand and institution design (months 3–9). Overlap is intentional.',
    'ewai+aotm': 'EW-AI for the workforce + AI-OTM for the L&D function in parallel — one without the other creates a gap.',
  };
  let seqNote = null;
  for (const s of sk) { seqNote = seqMap[`${pk}+${s}`]; if (seqNote) break; }
  if (!seqNote && (maturity === 1 || maturity === 2) && momentAns.includes('transform'))
    seqNote = "LFR is required before this play — low maturity means the function isn't ready to absorb transformation yet.";

  // Signal strength display meta (signal already computed above)
  const signalMeta    = {
    strong:   { label:'Strong signal',                        bg:'#E1F5EE', fg:'#085041' },
    moderate: { label:'Moderate signal',                      bg:'#FFF3CD', fg:'#7D5A00' },
    weak:     { label:'Weak signal — treat as directional',   bg:'#FEE2E2', fg:'#9B1C1C' },
  }[signalLevel];

  // Unanswered probes
  const unanswered = activeQs.filter(q => { const a = diagAns[q.id]; return !a || (Array.isArray(a) && a.length === 0); });

  // Display helpers
  const tierLabels    = {1:'Active engagement', 2:'Dormant relationship', 3:'Prospective'};
  const tierBg        = {1:'#E1F5EE', 2:'#FFF3CD', 3:'#D6EAF8'};
  const tierFg        = {1:'#085041', 2:'#7D5A00', 3:'#1A3A5C'};
  const budgetLabels  = {exploratory:'Exploratory',targeted:'Targeted single stream',transformation:'Multi-year transformation',unknown:'Budget not yet defined'};
  const isPulseCheck  = diagTier === 1 && primary.key === 'lfr';
  const badgeColor    = i => i===0?'background:#FDE8F3;color:var(--accent-deep);':'background:#E1F5EE;color:#085041;';

  const cards = [primary, ...supporting].map((o, i) => {
    const e = ENGAGEMENTS[o.id];
    const drivers = (attrib[o.key] || []).sort((a,b)=>b.pts-a.pts).slice(0,3).map(d=>`${d.theme} <span style="color:var(--grey-400);font-weight:400;">${d.pts}pt</span>`).join(' &middot; ');
    return `<div style="border:${i===0?'1.5px solid var(--accent)':'1px solid var(--grey-200)'};border-radius:12px;padding:1rem 1.25rem;margin-bottom:.65rem;background:var(--paper);cursor:${e?'pointer':'default'};" ${e?`onclick="openEngagement('${o.id}')"`:''}">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:.5rem;flex-wrap:wrap;">
        <span style="font-size:11px;font-weight:600;padding:2px 9px;border-radius:6px;${badgeColor(i)}">${i===0?'Primary':'Supporting'}</span>
        ${o.cluster?`<span style="font-size:11px;color:var(--grey-400);">${o.cluster}</span>`:''}
        <span style="margin-left:auto;font-size:12px;font-weight:600;color:var(--accent-deep);background:#FDE8F3;padding:2px 9px;border-radius:20px;">${o.score} pts</span>
      </div>
      <div style="font-size:15px;font-weight:500;color:var(--ink);margin-bottom:.2rem;">${isPulseCheck&&i===0?'Pulse Check — '+o.name:o.name}</div>
      <div style="font-size:12px;color:var(--grey-600);margin-bottom:.4rem;line-height:1.45;">${o.outcome||o.tag}</div>
      ${drivers?`<div style="font-size:11px;color:var(--grey-500);margin-bottom:.3rem;"><span style="font-weight:600;color:var(--grey-400);text-transform:uppercase;font-size:10px;letter-spacing:.05em;">Driven by</span> &nbsp;${drivers}</div>`:''}
      ${e?`<div style="font-size:12px;color:var(--grey-400);margin-top:4px;">Open engagement page →</div>`:''}
    </div>`;
  }).join('');

  const seqHtml = seqNote ? `
    <div style="background:#F0FBF7;border:1px solid #A8DFC9;border-radius:8px;padding:12px 14px;margin-bottom:1rem;">
      <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#085041;margin-bottom:4px;">Sequencing note</div>
      <div style="font-size:13px;color:#085041;line-height:1.5;">${seqNote}</div>
    </div>` : '';

  const rulesHtml = rules.length ? `
    <div style="background:var(--grey-50);border-radius:8px;padding:12px 14px;margin-bottom:1rem;">
      <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-600);margin-bottom:8px;">Rules fired</div>
      ${rules.map(r=>`<div style="font-size:12px;color:var(--grey-600);margin-bottom:6px;padding-left:10px;border-left:2px solid #FBAFD4;line-height:1.45;">${r}</div>`).join('')}
    </div>` : '';

  // Fix 7 — Q4 dropped-selection note (capped at 2, remind consultant other signals exist)
  const gapAnswered  = Array.isArray(diagAns.gap) ? diagAns.gap : [];
  const q4DropNote   = gapAnswered.length >= 2
    ? `<div style="margin-bottom:8px;padding-left:10px;border-left:2px solid #FBBF24;">
        <div style="font-size:11px;font-weight:600;color:var(--grey-500);margin-bottom:2px;">Primary Capability Gap — ranked top 2 only</div>
        <div style="font-size:12px;color:var(--grey-600);line-height:1.45;">If other gaps came up, they were dropped from scoring. Note them here — probe whether they shift the priority next call.</div>
      </div>` : '';

  const probesHtml = (unanswered.length || q4DropNote) ? `
    <div style="background:var(--grey-50);border-radius:8px;padding:12px 14px;margin-bottom:1rem;">
      <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-600);margin-bottom:8px;">Still to probe — ask next call</div>
      ${q4DropNote}
      ${unanswered.map(q=>`<div style="margin-bottom:8px;padding-left:10px;border-left:2px solid var(--grey-300);">
        <div style="font-size:11px;font-weight:600;color:var(--grey-500);margin-bottom:2px;">${(q.label.split('—')[1]||q.label).trim()}</div>
        <div style="font-size:12px;color:var(--grey-600);line-height:1.45;">${q.probe}</div>
      </div>`).join('')}
    </div>` : '';

  const notesHtml = Object.values(diagNotes).some(v=>v?.trim()) ? `
    <div style="height:0.5px;background:var(--grey-200);margin:1.5rem 0;"></div>
    <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-600);margin-bottom:.75rem;">Notes from the conversation</div>
    ${activeQs.filter(q=>diagNotes[q.id]?.trim()).map(q=>`
      <div style="margin-bottom:10px;">
        <div style="font-size:11px;color:var(--grey-400);margin-bottom:3px;">${q.label}</div>
        <div style="font-size:13px;color:var(--ink);background:var(--grey-50);border-radius:6px;padding:8px 12px;line-height:1.5;">${diagNotes[q.id]}</div>
      </div>`).join('')}
    ${diagExpansionNote?`<div style="margin-bottom:10px;"><div style="font-size:11px;color:var(--grey-400);margin-bottom:3px;">Tier 1 — Expansion probe</div><div style="font-size:13px;color:var(--ink);background:var(--grey-50);border-radius:6px;padding:8px 12px;line-height:1.5;">${diagExpansionNote}</div></div>`:''}
  ` : '';

  const body = document.getElementById('diag-results-body');
  body.innerHTML = `
    <div class="crumb">
      <a onclick="nav('home')">Home</a><span class="sep">/</span>
      <a onclick="nav('live')">Discover</a><span class="sep">/</span>
      <span>Results</span>
    </div>
    <div class="move-detail-hero">
      <span class="eyebrow"><span class="dot"></span>Live diagnostic · v2 · Recommendation</span>
      <h1>${isPulseCheck?'Current engagement — expansion signal.':'Here\'s where this client points.'}</h1>
      <p class="lede">${isPulseCheck?'You\'re inside an active engagement. Use Pulse Check framing to open the next scope conversation.':'One primary, up to two supporting — sequence them rather than choose.'}</p>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:1.25rem;flex-wrap:wrap;align-items:center;">
      <span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:6px;background:${tierBg[diagTier]||'#eee'};color:${tierFg[diagTier]||'#333'};">Tier ${diagTier} · ${tierLabels[diagTier]||''}</span>
      ${diagBudget?`<span style="font-size:11px;padding:3px 10px;border-radius:6px;background:var(--grey-100);color:var(--grey-600);">${budgetLabels[diagBudget]||diagBudget}</span>`:''}
      <span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:6px;background:${signalMeta.bg};color:${signalMeta.fg};margin-left:auto;">${answeredCount}/${activeQs.length} questions · ${signalMeta.label}</span>
    </div>
    ${cards}
    ${seqHtml}
    ${rulesHtml}
    ${probesHtml}
    ${notesHtml}
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:1.5rem;">
      <button class="btn-secondary" onclick="renderDiagnostic()">← Redo diagnostic</button>
      <button class="btn-primary" onclick="nav('post')">Set up the handoff →</button>
    </div>
  `;
  showPage('page-diag-results');
  setTopNav('live');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============ ENGAGEMENT DETAIL ============

function openEngagement(id) {
  const e = ENGAGEMENTS[id]; if (!e) return;
  const body = document.getElementById('engagement-detail-body');

  body.innerHTML = `
    <div class="crumb">
      <a onclick="nav('home')">Home</a>
      <span class="sep">/</span>
      <a onclick="nav('live')">Engagements</a>
      <span class="sep">/</span>
      <span>${e.cluster}</span>
    </div>

    <div class="move-detail-hero">
      <span class="eyebrow"><span class="dot"></span>${e.cluster}  ·  ${e.type}  ·  ${e.duration}</span>
      <h1>${e.title}</h1>
      <p class="lede">${e.short}</p>
    </div>

    <div class="detail-grid">
      <div class="detail-block">
        <div class="label">Engagement type</div>
        <p>${e.type}</p>
      </div>
      <div class="detail-block">
        <div class="label">Typical duration</div>
        <p>${e.duration}</p>
      </div>
      <div class="detail-block">
        <div class="label">Delivery format</div>
        <p>${e.format}</p>
      </div>
      <div class="detail-block">
        <div class="label">Scope tailored to</div>
        <p>Client context &amp; complexity</p>
      </div>
    </div>

    <h3 class="h3" style="margin-top:24px; margin-bottom:24px;">Challenges this solves</h3>
    <div class="detail-block" style="margin-bottom:48px;">
      <ul>${e.challenges.map((c,i)=>`<li><span class="n">0${i+1}</span><span>${c}</span></li>`).join('')}</ul>
    </div>

    <h3 class="h3" style="margin-bottom:24px;">Our approach</h3>
    <div class="moves" style="margin-bottom:48px;">
      ${e.approach.map((a,i)=>`
        <div class="move-card" style="cursor:default;">
          <div class="move-num">STEP 0${i+1}</div>
          <div class="move-title">${a.t}</div>
          <div class="move-sub">${a.d}</div>
        </div>
      `).join('')}
    </div>

    <h3 class="h3" style="margin-bottom:24px;">Outcomes &amp; deliverables</h3>
    <div class="detail-block" style="margin-bottom:48px;">
      <ul>${e.outcomes.map((o,i)=>`<li><span class="n">0${i+1}</span><span>${o}</span></li>`).join('')}</ul>
    </div>

    <h3 class="h3" style="margin-bottom:24px;">Case studies</h3>
    ${e.cases.map(c => `
      <div class="email-card" style="margin-bottom:24px;">
        <div class="label">${c.client}</div>
        <div class="subject" style="font-size:18px;">${c.headline}</div>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:24px; padding-top:8px;">
          <div><div style="font-size:10px; font-weight:600; letter-spacing:0.14em; color:var(--grey-400); text-transform:uppercase; margin-bottom:8px;">Challenge</div><p style="font-size:13.5px; line-height:1.55; color:var(--ink-soft);">${c.challenge}</p></div>
          <div><div style="font-size:10px; font-weight:600; letter-spacing:0.14em; color:var(--grey-400); text-transform:uppercase; margin-bottom:8px;">What we did</div><p style="font-size:13.5px; line-height:1.55; color:var(--ink-soft);">${c.work}</p></div>
          <div><div style="font-size:10px; font-weight:600; letter-spacing:0.14em; color:var(--accent); text-transform:uppercase; margin-bottom:8px;">Outcome</div><p style="font-size:13.5px; line-height:1.55; color:var(--ink);">${c.outcome}</p></div>
        </div>
      </div>
    `).join('')}

    <h3 class="h3" style="margin-top:48px; margin-bottom:24px;">Selected clients we have done this for</h3>
    <div class="related-grid" style="margin-bottom:48px;">
      ${e.clients.map(cl => `<div class="related-card" style="cursor:default;"><div class="t">${cl}</div></div>`).join('')}
    </div>
    <p class="muted small" style="margin-bottom:48px;">Each engagement page shows 10 curated clients most relevant to that engagement type. Full client list varies by page.</p>

    <div style="margin-top:48px; display:flex; gap:12px;">
      <button class="btn-secondary" onclick="nav('live')">← Diagnostic</button>
      <button class="btn-primary" style="flex:0 0 auto;" onclick="nav('post')">Connect with a CD  →</button>
    </div>
  `;
  showPage('page-engagement');
  setTopNav('live');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============ CD DIRECTORY (Post-Call) ============
