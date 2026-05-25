// moves.js - Get in the Room: tier moves + move detail + Outlook + account router

function renderTierMoves(tier, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const ids = TIER_ORDER[tier];
  container.innerHTML = ids.map((id, i) => {
    const m = MOVES[id];
    const num = String(i + 1).padStart(2, '0');
    return `
      <div class="move-card" onclick="openMove('${id}')">
        <div class="move-num">MOVE ${num}</div>
        <div class="move-title">${m.title}</div>
        <div class="move-sub">${m.sub}</div>
        <div class="move-foot">
          <span>Email template inside</span>
          <span class="open">Open <span class="arrow">→</span></span>
        </div>
      </div>
    `;
  }).join('');
}

// ============ MOVE DETAIL ============

function openMove(id) {
  const m = MOVES[id];
  if (!m) return;
  const tierName = m.tier === 1 ? 'Active' : m.tier === 2 ? 'Dormant' : 'Prospective';
  const tierColor = m.tier === 1 ? 'var(--tier1)' : m.tier === 2 ? 'var(--tier2)' : 'var(--tier3)';
  const body = document.getElementById('move-detail-body');

  const emailBodyHtml = m.email.body.replace(/\{([^}]+)\}/g, '<span class="var">{$1}</span>').replace(/\n/g, '<br/>');
  const subjectHtml = m.email.subject.replace(/\{([^}]+)\}/g, '<span class="var">{$1}</span>');

  const related = m.related.map(rid => {
    const rm = MOVES[rid];
    if (!rm) return '';
    return `<div class="related-card" onclick="openMove('${rid}')"><div class="t">${rm.title}</div><div class="arr">Open  →</div></div>`;
  }).join('');

  body.innerHTML = `
    <div class="move-v2">
      <div class="move-v2-head">
        <div class="move-v2-eyebrow"><span class="move-v2-dot" style="background:${tierColor};"></span>Tier 0${m.tier} · ${tierName} · Outreach move</div>
        <h1 class="move-v2-title">${m.title}</h1>
        <p class="move-v2-sub">${m.sub}</p>
      </div>

      <div class="move-v2-grid">
        <div class="move-v2-left">
          <div class="move-v2-cards">
            <div class="move-v2-card">
              <div class="move-v2-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
                When to use
              </div>
              <p>${m.when}</p>
            </div>
            <div class="move-v2-card">
              <div class="move-v2-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7c.7.7 1 1.6 1 2.5V18h6v-.8c0-.9.3-1.8 1-2.5A7 7 0 0012 2z"/></svg>
                Why it works
              </div>
              <p>${m.why}</p>
            </div>
            <div class="move-v2-card">
              <div class="move-v2-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="1"/><polyline points="9 11 12 14 15 11"/><line x1="12" y1="5" x2="12" y2="14"/></svg>
                What you leave behind
              </div>
              <p>${m.leave}</p>
            </div>
            <div class="move-v2-card">
              <div class="move-v2-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg>
                How to run it
              </div>
              <ol class="move-v2-steps">${m.steps.map((s,i)=>`<li><span>${i+1}</span><span>${s}</span></li>`).join('')}</ol>
            </div>
          </div>
        </div>

        <div class="move-v2-right">
          <div class="move-v2-email">
            <div class="move-v2-email-head">
              <div class="move-v2-label" style="margin:0;">Email template</div>
              <button class="move-v2-copy" onclick="openInOutlook('${id}', this)" title="Opens your default mail app (Outlook) with subject and body pre-filled">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="margin-right:6px; vertical-align:-2px;"><path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Open in Outlook
              </button>
            </div>
            <div class="move-v2-subject"><span>SUBJECT</span> ${subjectHtml}</div>
            <div class="move-v2-body">${emailBodyHtml}</div>
            <div class="move-v2-note">Pink fields are placeholders — replace them in Outlook before sending.</div>
          </div>
        </div>
      </div>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'instant' });
  showPage('page-move');
  setTopNav('saled');
  // Register in nav history so Back works
  const key = 'move:' + id;
  if (_navHistory[_navHistory.length-1] !== key) _navHistory.push(key);
  _updateBackBtn();
}


function openInOutlook(id, btn) {
  const m = MOVES[id];
  if (!m) return;
  btn = btn || (typeof event !== 'undefined' ? event.currentTarget || event.target : null);
  const subj = encodeURIComponent(m.email.subject);
  // Outlook web deeplink ignores OS default-mail handler entirely — opens directly in Outlook.
  // body uses %0A line breaks which Outlook web renders as newlines.
  const body = encodeURIComponent(m.email.body);
  const url = `https://outlook.office.com/mail/deeplink/compose?subject=${subj}&body=${body}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = 'Opening Outlook…';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2200);
  }
}

// Secondary handler — uses the Windows Outlook app protocol (only works if Outlook desktop
// is installed and registered as the ms-outlook handler).

function openInOutlookDesktop(id) {
  const m = MOVES[id];
  if (!m) return;
  const subj = encodeURIComponent(m.email.subject);
  const body = encodeURIComponent(m.email.body.replace(/\n/g, '\r\n'));
  const url = `ms-outlook://compose?subject=${subj}&body=${body}`;
  window.location.href = url;
}

// Backwards-compat alias in case old onclick still references copyEmail

function copyEmail(id, btn) { return openInOutlook(id, btn); }

// ============ ACCOUNT BRIEF LOGIC ============

let currentRecommendedMoveId = null;


function generateBrief() {
  const account = document.getElementById('b-account').value.trim() || 'this account';
  const industry = document.getElementById('b-industry').value || '';
  const relationship = document.getElementById('b-relationship').value;
  const pressure = document.getElementById('b-pressure').value;
  const signal = document.getElementById('b-signal').value.trim();

  let moveId, angle, why, who;

  // ROUTING — 12 rules, top-to-bottom. First match wins.
  // Tier 1 = Active, Tier 2 = Dormant, Tier 3 = Prospective

  // 1. Active consulting → Tier 1: convert before close
  if (relationship === 'active-consulting') {
    moveId = 't1-whatcomesnext';
    angle = `You\'re already in the room at ${account}. The work now is to convert this engagement into the next one before it closes.`;
    why = `The highest-conversion moment in a NIIT engagement is the last fortnight — access, trust, and context are at their peak. Use it before the SOW closes.`;
    who = `The EM owns the "what comes next" conversation. Bring the CD into the working session.`;
  }
  // 2. Active MS → Tier 3: warm path into consulting
  else if (relationship === 'active-ms') {
    moveId = 't3-ms-activate';
    angle = `Activate the consulting conversation from inside the active Managed Services engagement at ${account}.`;
    why = `An existing MS relationship is the highest-conversion path into Tier 3. The delivery team already has trust and inside view — the gap is the structured handoff to consulting before the SOW closes.`;
    who = `The Managed Services EM briefs the relevant Consulting Director. CD makes first contact with a specific observation, not a generic intro.`;
  }
  // 3. Dormant + signal → Tier 2: return with perspective
  else if (relationship === 'past-consulting' && signal.length > 10) {
    moveId = 't2-perspective';
    angle = `Re-enter ${account} with the specific observation you\'ve heard, framed as a perspective on what\'s changed for them.`;
    why = `Dormant accounts ignore "checking in." A grounded hypothesis about their environment reads as continued attention and earns the next conversation.`;
    who = `The CD who anchored the previous engagement. If they\'re no longer in the role, the EM nominates a CD with the closest practice fit.`;
  }
  // 4. Dormant + leadership event → Tier 2: new stakeholder
  else if (relationship === 'past-consulting' && pressure === 'leadership-event') {
    moveId = 't2-newstakeholder';
    angle = `The original sponsor may have moved. Approach the new mandate-holder at ${account} with our existing organisational context.`;
    why = `Competitors will treat this as a cold intro. We have institutional memory they don\'t — what was tried, what worked, who\'s been involved. That context is the reason to talk.`;
    who = `Original EM if still in role, otherwise a senior CD with the most relevant practice area.`;
  }
  // 5. Dormant (other) → Tier 2: CD-led
  else if (relationship === 'past-consulting') {
    moveId = 't2-cd';
    angle = `Introduce a Consulting Director into ${account} as a standalone reason to reconnect — not tied to a project.`;
    why = `Dormant accounts upgrade through people, not offerings. A CD\'s presence signals investment in the relationship and creates a senior-to-senior conversation that the working-level relationship can\'t reach.`;
    who = `The EM makes the introduction. The CD\'s perspective on the client\'s current pressure is the substance of the first call.`;
  }
  // 6. Past MS only → Tier 3: still activate from MS
  else if (relationship === 'past-ms') {
    moveId = 't3-ms-activate';
    angle = `The Managed Services context at ${account} is recent enough to be the warm path in. Re-engage delivery contacts first.`;
    why = `Even with the MS engagement closed, delivery team relationships and inside view persist. Activating those is faster than building consulting context from scratch.`;
    who = `The MS EM who closed the account briefs the CD. CD makes the consulting contact.`;
  }
  // 7. Cold + signal → Tier 3: publicly stated priority
  else if (signal.length > 10) {
    moveId = 't3-public';
    angle = `Lead with the specific signal at ${account} — it\'s the most credible cold opener you have.`;
    why = `A generic outreach wastes the advantage of having a specific observation. Engaging directly with what you\'ve heard or seen signals attention that\'s hard to ignore.`;
    who = `Whoever is closest to the signal. CD attends the first call if accepted.`;
  }
  // 8. Cold + AI pressure → Tier 3: inflection
  else if (pressure === 'ai-workforce') {
    moveId = 't3-inflection';
    angle = `Open with the AI inflection in ${industry || 'their sector'} — and what it means for the L&D function specifically.`;
    why = `AI is the universal C-suite ask hitting CLOs right now. A sharp NIIT perspective on what it means for capability building earns a 30-minute call almost every time.`;
    who = `Jonathan or the CD anchored on AI Operating Model Transformation leads. EM owns the follow-up sequence.`;
  }
  // 9. Cold + leadership event → Tier 3: inflection
  else if (pressure === 'leadership-event') {
    moveId = 't3-inflection';
    angle = `Anchor the outreach to the leadership change or restructure at ${account}.`;
    why = `Inflection points reset what an L&D function needs to be. A timely outreach during a transition lands as relevant rather than opportunistic — especially for a new leader looking to understand what they\'ve inherited.`;
    who = `Senior CD with the closest sector experience. EM handles introduction and follow-up.`;
  }
  // 10. Cold + don't know yet → Tier 3: LFR
  else if (pressure === 'unknown') {
    moveId = 't3-lfr';
    angle = `Offer the Learning Function Review as a no-commitment diagnostic — the cheapest way for a new client to experience NIIT.`;
    why = `When you can\'t yet name the client\'s specific problem, neither can they. The LFR is the structured external read that gives both sides a starting point — and it\'s the door that almost every Tier 3 conversion passes through.`;
    who = `EM opens with the offer. CD scopes the LFR if it\'s accepted.`;
  }
  // 11. Cold + cluster pressure → Tier 3: public priority
  else if (['skills', 'operating-model', 'portfolio', 'measurement', 'tech', 'academy'].includes(pressure)) {
    moveId = 't3-public';
    angle = `Lead with what we know about their stated priority — and connect it directly to NIIT\'s thinking.`;
    why = `Engaging with a CLO\'s specific pressure (not a generic offering) signals you\'ve done the homework. It positions the call as expert-to-expert, not vendor-to-buyer.`;
    who = `CD with the matching practice area is the right voice. EM handles introduction.`;
  }
  // 12. Cold + nothing → Tier 3: benchmark (fallback)
  else {
    moveId = 't3-benchmark';
    angle = `Share the 2026 Global Learning Benchmark as a clean, non-commercial opener.`;
    why = `With limited intelligence on the account, research is the safest entry point. It positions NIIT as a research-backed practice rather than a vendor, and gives the CLO a low-stakes reason to respond.`;
    who = `EM sends the opener. Bring the CD into the first call if accepted.`;
  }

  currentRecommendedMoveId = moveId;

  const move = MOVES[moveId];
  const tierNum = move.tier;
  const tierLabel = tierNum === 1 ? 'Active' : tierNum === 2 ? 'Dormant' : 'Prospective';
  const tierColor = tierNum === 1 ? 'var(--tier1)' : tierNum === 2 ? 'var(--tier2)' : 'var(--tier3)';
  const relLabel = getRelationshipLabel(relationship);
  const pressureLabels = {
    'unknown':'unknown pressure','ai-workforce':'AI workforce pressure','skills':'skills gap',
    'operating-model':'operating model','portfolio':'portfolio/cost','measurement':'measurement',
    'tech':'tech stack','academy':'academy build','leadership-event':'leadership change'
  };
  const pressureLabel = pressureLabels[pressure] || pressure;
  const routePath = signal.length > 10
    ? `${relLabel}  +  specific signal  →  Tier ${tierNum} · ${tierLabel}  →  ${move.title}`
    : `${relLabel}  +  ${pressureLabel}  →  Tier ${tierNum} · ${tierLabel}  →  ${move.title}`;

  const subtitleBits = [industry, relLabel].filter(Boolean);
  document.getElementById('brief-title').textContent = account;
  document.getElementById('brief-subtitle').textContent = subtitleBits.join('  ·  ');

  const badge = document.getElementById('brief-tier-badge');
  badge.textContent = `Tier ${tierNum}  ·  ${tierLabel}`;
  badge.style.background = tierColor;

  document.getElementById('brief-route-path').textContent = `Routing: ${routePath}`;
  document.getElementById('brief-angle').textContent = angle;
  document.getElementById('brief-why').textContent = why;
  document.getElementById('brief-who').textContent = who;
  document.getElementById('brief-cta').innerHTML = `<span>${move.title}</span><span>→</span>`;

  document.getElementById('brief-output').classList.add('visible');
  setTimeout(() => {
    document.getElementById('brief-output').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 80);
}

// ============ PULSE CHECK LOGIC (Tier 1) ============

function openRecommendedMove() {
  if (currentRecommendedMoveId) openMove(currentRecommendedMoveId);
}


function resetBrief() {
  document.getElementById('b-account').value = '';
  document.getElementById('b-industry').value = '';
  document.getElementById('b-relationship').value = 'cold';
  document.getElementById('b-pressure').value = 'unknown';
  document.getElementById('b-signal').value = '';
  document.getElementById('brief-output').classList.remove('visible');
  currentRecommendedMoveId = null;
}

// ============ UNIFIED NAVIGATION ============
// One nav function, every page. Top nav highlight follows the SECTION the user
// is in — so even when deep on a move detail or engagement page, the "Sales
// education" or "During a call" link in the top bar stays lit.


function toggleLogicMap() {
  const body = document.getElementById('logic-map-body');
  const note = document.getElementById('logic-map-note');
  const btn  = document.getElementById('logic-toggle');
  const open = body.style.display === 'none';
  body.style.display = open ? 'block' : 'none';
  note.style.display = open ? 'block' : 'none';
  btn.textContent   = open ? 'Hide rules ↑' : 'Show all rules ↓';
}

// ============ DIAGNOSTIC v2 — Tier-aware scoring engine (8 questions) ============
// Weighted scoring: STRONG=3pts, MODERATE=2pts, WEAK=1pt. Boost capped at 4pts.
// Tier 1 skips Q1 (7 active). Tier 2 boosts Q4+Q6 ×1.5. Floor: <3pts dropped.
// Guards: maturity gate, LFR min-source, AI contradiction, greenfield, enterprise+greenfield, high-maturity+no-clarity.
