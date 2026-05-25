// offerings.js - Storefront: grid + offering landing pages + case study modal

function renderOfferingsGrid() {
  const el = document.getElementById('offerings-grid');
  if (!el || typeof DIAG_OFFERINGS === 'undefined') return;
  const clusterClass = {
    'Wedge':'c-wedge',
    'AI & Digital':'c-ai',
    'Learning Function Design':'c-fn',
    'Capability & Skills':'c-cap',
    'Portfolio & Governance':'c-port',
    'Skills Intelligence':'c-skill',
    'Analytics & Technology':'c-anly'
  };
  const order = ['Wedge','AI & Digital','Learning Function Design','Capability & Skills','Portfolio & Governance','Skills Intelligence','Analytics & Technology'];
  const groups = {};
  Object.entries(DIAG_OFFERINGS).forEach(([key, o]) => {
    if (!groups[o.cluster]) groups[o.cluster] = [];
    groups[o.cluster].push({key, ...o});
  });
  el.innerHTML = order.filter(k => groups[k]).map(k => {
    const items = groups[k];
    const cls = clusterClass[k] || '';
    return `
      <div class="v2-cluster ${cls}">
        <div class="v2-cluster-head">
          <div class="v2-cluster-title">${k}</div>
          <div class="v2-cluster-count">${items.length} offering${items.length>1?'s':''}</div>
        </div>
        <div class="v2-offerings-grid">
          ${items.map(o => {
            const hasDetail = OFFERING_DETAILS && OFFERING_DETAILS[o.key];
            return `
              <div class="v2-off-card ${hasDetail ? 'has-detail' : ''}" onclick="${hasDetail ? `openOffering('${o.key}')` : ''}">
                <div class="v2-off-name">${o.name}</div>
                <div class="v2-off-outcome">${o.outcome}</div>
                ${hasDetail ? '<div class="v2-off-cta">Open landing page →</div>' : '<div class="v2-off-cta" style="color:var(--grey-400);">Coming soon</div>'}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ============ OFFERING LANDING PAGES ============

function openOffering(key) {
  const o = (typeof DIAG_OFFERINGS !== 'undefined') ? DIAG_OFFERINGS[key] : null;
  const d = OFFERING_DETAILS[key];
  if (!o || !d) return;

  const ledeText = d.lede || o.outcome;
  const cd = d.cd ? _findCD(d.cd) : null;

  const body = document.getElementById('offering-detail-body');
  body.innerHTML = `
    <header class="off-ed-header">
      <div class="off-ed-cluster">${o.cluster}</div>
      <h1 class="off-ed-title">${o.name}</h1>
      <p class="off-ed-lede">${_md(ledeText)}</p>
    </header>

    <div class="off-ed-grid">
      <!-- LEFT: Problem + Perspective + Process -->
      <div class="off-ed-col">
        <section class="off-ed-card">
          <h2>The problem</h2>
          <p>${_md(d.challenge)}</p>
        </section>

        <section class="off-ed-card off-ed-card-pov">
          <h2>Our perspective</h2>
          <p>${_md(d.whatWeDo)}</p>
        </section>

        <section class="off-ed-card">
          <h2>The work</h2>
          <ol class="off-ed-steps-inline">
            ${d.process.map((p, i) => `
              <li>
                <span class="off-ed-step-num">${String(i+1).padStart(2,'0')}</span>
                <div class="off-ed-step-body">
                  <div class="off-ed-step-name">${_md(p.t)}</div>
                  <div class="off-ed-step-desc">${_md(p.d)}</div>
                </div>
              </li>
            `).join('')}
          </ol>
        </section>
      </div>

      <!-- RIGHT: Case studies (priority) → Outcomes → CD -->
      <div class="off-ed-col">
        <section class="off-ed-cases">
          <div class="off-ed-cases-head">
            <h2>Client stories</h2>
            <span class="off-ed-cases-count">${d.stories.length} case${d.stories.length>1?'s':''}</span>
          </div>
          <div class="off-ed-cases-grid">
            ${d.stories.map((s, i) => `
              <div class="off-ed-case-card">
                <div class="off-ed-case-card-head">
                  <span class="off-ed-case-card-industry">${s.industry}</span>
                  <span class="off-ed-case-card-client">${s.client}</span>
                </div>
                <div class="off-ed-case-card-hook">${_md(_outcomeHook(s.outcome))}</div>
                <button class="off-ed-case-card-cta" onclick="openCaseStudy('${key}', ${i})">Read full case →</button>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="off-ed-card off-ed-card-accent">
          <h2>What changes</h2>
          <ul class="off-ed-outcomes-compact">
            ${d.outcomes.slice(0, 5).map(out => `<li>${_md(out)}</li>`).join('')}
          </ul>
        </section>

        ${cd ? `
          <section class="off-ed-cd">
            <div class="off-ed-cd-avatar">${cd.initials}</div>
            <div class="off-ed-cd-body">
              <div class="off-ed-cd-label">Lead on this offering</div>
              <div class="off-ed-cd-name">${cd.name}</div>
              <div class="off-ed-cd-role">${cd.role}</div>
            </div>
            <button class="off-ed-cd-cta" onclick="nav('post')" title="Reach out to ${cd.name}">Talk →</button>
          </section>
        ` : ''}
      </div>
    </div>

    <footer class="off-ed-footer-compact">
      <a class="off-ed-link" onclick="nav('offerings')">← All offerings</a>
      <a class="off-ed-link off-ed-link-primary" onclick="nav('post')">Book a 30-min conversation →</a>
    </footer>

    <!-- Case study modal -->
    <div id="case-modal" class="case-modal" onclick="if(event.target===this)closeCaseStudy()">
      <div class="case-modal-inner" id="case-modal-inner"></div>
    </div>
  `;

  showPage('page-offering-detail');
  setTopNav('offerings');
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Register in nav history
  const histKey = 'offering:' + key;
  if (_navHistory[_navHistory.length-1] !== histKey) _navHistory.push(histKey);
  _updateBackBtn();
}


function openCaseStudy(offeringKey, storyIdx) {
  const d = OFFERING_DETAILS[offeringKey];
  if (!d || !d.stories[storyIdx]) return;
  const s = d.stories[storyIdx];
  const o = DIAG_OFFERINGS[offeringKey];

  const inner = document.getElementById('case-modal-inner');
  inner.innerHTML = `
    <button class="case-modal-close" onclick="closeCaseStudy()" aria-label="Close">×</button>
    <div class="case-modal-header">
      <div class="case-modal-meta">
        <span class="case-modal-industry">${s.industry}</span>
        <span class="case-modal-offering">${o ? o.name : ''}</span>
      </div>
      <h2 class="case-modal-client">${s.client}</h2>
      <div class="case-modal-title">${s.title}</div>
    </div>

    ${_hasRealMetrics(s.metrics) ? `
      <div class="case-modal-metrics">
        ${s.metrics.filter(m => /\d/.test(m.v)).map(m => `
          <div class="case-modal-metric">
            <div class="case-modal-metric-v">${m.v}</div>
            <div class="case-modal-metric-l">${m.l}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div class="case-modal-pullquote">${_md(_outcomeHook(s.outcome))}</div>

    <div class="case-modal-body">
      <section class="case-modal-section">
        <h3>The situation</h3>
        <p>${_md(s.challenge)}</p>
      </section>

      <section class="case-modal-section">
        <h3>What we did</h3>
        <ol class="case-modal-actions">
          ${s.did.map(x => `<li>${_md(x)}</li>`).join('')}
        </ol>
      </section>

      <section class="case-modal-section case-modal-outcome">
        <h3>The outcome</h3>
        <p>${_md(s.outcome)}</p>
      </section>
    </div>

    <div class="case-modal-footer">
      <button class="off-ed-link" onclick="closeCaseStudy()">← Back to offering</button>
      <button class="off-ed-link off-ed-link-primary" onclick="closeCaseStudy(); nav('post')">Book a 30-min conversation →</button>
    </div>
  `;
  document.getElementById('case-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}


function closeCaseStudy() {
  const m = document.getElementById('case-modal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

// ============ INDUSTRY DATA ============
