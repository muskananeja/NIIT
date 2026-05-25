// discover.js - Discover page: theme expand

function toggleTheme(i) {
  const panel = document.getElementById('theme-expand');
  const cards = document.querySelectorAll('#themes-grid .v2-theme');
  if (!panel) return;
  const t = THEMES[i];
  const isOpen = panel.classList.contains('open') && panel.dataset.idx == String(i);
  cards.forEach(c => c.classList.remove('active'));
  if (isOpen) {
    panel.classList.remove('open');
    panel.dataset.idx = '';
    return;
  }
  cards[i].classList.add('active');
  panel.dataset.idx = String(i);
  panel.innerHTML = `
    <div class="v2-theme-expand-head">
      <div>
        <span class="v2-theme-expand-num">Theme 0${t.n} · ${t.name}</span>
        <h3 class="v2-theme-expand-q">${t.q}</h3>
        <p class="v2-theme-expand-probe">${t.probe}</p>
      </div>
      <button class="v2-theme-expand-close" onclick="toggleTheme(${i})" aria-label="Close">×</button>
    </div>
    <div class="v2-theme-expand-listen">
      <div class="v2-theme-expand-label">What you might hear</div>
      <div class="v2-theme-options">${t.opts.map(o => `<div class="v2-theme-opt">${o}</div>`).join('')}</div>
    </div>
  `;
  panel.classList.add('open');
  setTimeout(() => panel.scrollIntoView({behavior:'smooth', block:'nearest'}), 50);
}
