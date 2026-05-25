// app.js - bootstrap and event listeners

function renderCDDirectory() {
  const container = document.getElementById('cd-directory');
  if (!container) return;
  container.innerHTML = CDS.map(cd => `
    <div class="move-card" style="cursor:default;">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
        <div style="width:40px; height:40px; background:var(--ink); color:#fff; font-size:13px; font-weight:600; display:flex; align-items:center; justify-content:center; letter-spacing:0.04em;">${cd.initials}</div>
        <div class="move-num" style="margin-bottom:0;">${cd.focus}</div>
      </div>
      <div class="move-title">${cd.name}</div>
      <div class="move-sub">${cd.role}</div>
      <div class="move-foot">
        <span>Reach out via Slack or email</span>
        <span class="open">Book a conversation <span class="arrow">→</span></span>
      </div>
    </div>
  `).join('');
}

// ============ INIT ============
renderTierMoves(1, 'tier1-moves');
renderTierMoves(2, 'tier2-moves');
renderTierMoves(3, 'tier3-moves');
renderIndustryGrid();
renderCDDirectory();
setTopNav('home'); // start on Home

// Keyboard: Esc closes case modal first, else returns Home
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const m = document.getElementById('case-modal');
    if (m && m.classList.contains('open')) { closeCaseStudy(); return; }
    nav('home');
  }
});
