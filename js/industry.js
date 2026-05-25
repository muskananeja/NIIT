// industry.js - Industry Brief: grid renderer + detail page

function renderIndustryGrid() {
  const container = document.getElementById('industry-grid');
  if (!container) return;
  container.className = 'moves';
  container.innerHTML = INDUSTRY_ORDER.map(id => {
    const ind = INDUSTRIES[id];
    const icon = INDUSTRY_SVG[id] || '';
    const meta = INDUSTRY_COUNTS[id] || '';
    return `
      <div class="ind-card" onclick="openIndustry('${id}')">
        <div class="ind-icon">${icon}</div>
        <div class="ind-name">${ind.full}</div>
        <div class="ind-pitch">${ind.pitch}</div>
        <div class="ind-foot">
          <span class="ind-open">Open →</span>
        </div>
      </div>
    `;
  }).join('');
}

// ============ INDUSTRY LANDING ============

function openIndustry(id) {
  const ind = INDUSTRIES[id];
  if (!ind) return;
  const body = document.getElementById('industry-detail-body');
  const icon = INDUSTRY_SVG[id] || '';
  const meta = INDUSTRY_COUNTS[id] || '';

  const engHtml = ind.engagements.map(eid => {
    const e = ENGAGEMENTS[eid]; if (!e) return '';
    return `<div class="ind-eng-card" onclick="openEngagement('${eid}')">
      <div class="ind-eng-cluster">${e.cluster}</div>
      <div class="ind-eng-title">${e.title}</div>
      <div class="ind-eng-foot"><span>${e.duration||''}</span><span class="ind-eng-go">Open →</span></div>
    </div>`;
  }).join('');

  body.innerHTML = `
    <div class="ind-detail-head">
      <div class="ind-detail-icon">${icon}</div>
      <div class="ind-detail-head-text">
        <span class="v2-meta">Industry Brief · ${ind.short}</span>
        <h1 class="v2-title ind-detail-title">${ind.full}</h1>
        <p class="ind-detail-pitch">${ind.pitch}</p>
      </div>
      <div class="ind-detail-head-meta">${meta}</div>
    </div>

    <div class="ind-detail-grid">
      <div class="ind-detail-block">
        <div class="ind-detail-label">Trends &amp; pressures</div>
        ${ind.trends.map(tr => `
          <div class="ind-trend">
            <h4>${tr.t}</h4>
            <p>${tr.d}</p>
          </div>
        `).join('')}
      </div>
      <div class="ind-challenges-dark">
        <span class="ind-challenges-eyebrow">Common client challenges</span>
        <ol class="ind-challenges-dark-list">
          ${ind.challenges.map(c => `<li>${c}</li>`).join('')}
        </ol>
      </div>
    </div>

    <div class="ind-engs">
      <div class="ind-engs-head">
        <div class="ind-detail-label">Most-likely offerings to surface</div>
        <span class="ind-engs-count">${ind.engagements.length} relevant</span>
      </div>
      <div class="ind-eng-grid">${engHtml}</div>
    </div>

    <div class="ind-detail-cta">
      <button class="ind-btn-secondary" onclick="nav('pre')">← All industries</button>
      <button class="ind-btn-primary" onclick="nav('live')">Go to discovery →</button>
    </div>
  `;
  showPage('page-industry');
  setTopNav('pre');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============ DIAGNOSTIC v2 — state ============
