// nav.js - routing, page transitions, nav history

let _navHistory = [];


function navBack() {
  if (_navHistory.length < 2) {
    nav('home');
    return;
  }
  _navHistory.pop(); // remove current
  const prev = _navHistory.pop(); // pop previous — handler below will re-push
  if (typeof prev === 'string' && prev.startsWith('move:')) {
    openMove(prev.slice(5));
  } else if (typeof prev === 'string' && prev.startsWith('offering:')) {
    openOffering(prev.slice(9));
  } else if (typeof prev === 'string') {
    nav(prev);
  } else {
    nav('home');
  }
}


function _updateBackBtn() {
  const btn = document.getElementById('nav-back-btn');
  if (!btn) return;
  const current = _navHistory[_navHistory.length - 1];
  btn.style.display = (current && current !== 'home') ? 'flex' : 'none';
}


function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
  const el = document.getElementById(pageId);
  if (el) {
    el.classList.remove('hidden');
    el.classList.remove('page-enter');
    // force reflow so the animation re-triggers
    void el.offsetWidth;
    el.classList.add('page-enter');
  }
}


function setTopNav(navKey) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === navKey);
  });
}


function nav(target) {
  const route = ROUTES[target] || ROUTES.home;
  showPage(route.page);
  setTopNav(route.topNav);
  _navHistory.push(target);
  _updateBackBtn();
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Section-specific side effects
  if (target === 'tier1')  showPulse(currentPulseId);
  if (target === 'pre')    { renderIndustryGrid(); setTimeout(()=>{ const g=document.getElementById('industry-grid'); if(g) g.scrollIntoView({behavior:'smooth', block:'center'}); }, 120); }
  if (target === 'live')   renderDiagnostic();
  if (target === 'post')   renderCDDirectory();
  if (target === 'saled')  renderIndustryGrid(); // harmless prefetch
  if (target === 'offerings') renderOfferingsGrid();
}

// ============ THEME EXPAND (Discover page) ============

function goSaledTiers() {
  nav('saled');
  setTimeout(() => {
    const el = document.getElementById('playbook-tiers');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}
