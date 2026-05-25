// pulse.js - Tier 1 pulse check tool

const pulseScores = {};

let currentPulseId = 'opmodel';


function renderPulsePicker() {
  const container = document.getElementById('pulse-picker');
  if (!container) return;
  container.innerHTML = PULSE_ORDER.map(id =>
    `<button class="pulse-tab ${id === currentPulseId ? 'active' : ''}" onclick="showPulse('${id}')">${PULSES[id].title.replace(/^.*?·\s*/, '').replace(' Pulse', '').replace(' Stress Test', '').replace(' Check', '').replace(' Confidence', '')}</button>`
  ).join('');
}


function showPulse(id) {
  currentPulseId = id;
  if (!pulseScores[id]) pulseScores[id] = {};
  renderPulsePicker();
  renderPulse(id);
}


function renderPulse(id) {
  const d = PULSES[id];
  const scores = pulseScores[id] || {};
  const answered = Object.keys(scores).length;
  const total = answered === d.statements.length ? Object.values(scores).reduce((a,b)=>a+b,0) : null;

  let resultBand = null;
  if (total !== null) {
    for (const b of d.bands) {
      if (total >= b.min) { resultBand = b; break; }
    }
  }

  const container = document.getElementById('pulse-container');
  if (!container) return;

  container.innerHTML = `
    <div class="pulse-card">
      <div class="pulse-card-head">
        <div>
          <span class="eyebrow"><span class="dot"></span>NIIT Consulting &amp; Advisory  ·  Mini Diagnostic</span>
          <h3>${d.title}</h3>
        </div>
        <div class="badge">${d.badge}</div>
      </div>

      <div class="pulse-intro">${d.intro}</div>

      ${d.statements.map((stmt, i) => `
        <div class="pulse-statement">
          <div class="pulse-num">${String(i+1).padStart(2,'0')}</div>
          <div class="pulse-text">${stmt}</div>
          <div class="pulse-scale">
            ${[1,2,3,4,5].map(v => `
              <button class="pulse-scale-btn ${scores[i] === v ? 'sel' : ''}" onclick="scoreStatement('${id}', ${i}, ${v})">${v}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}

      ${resultBand ? `
        <div class="pulse-result">
          <div class="pulse-result-score" style="color: ${resultBand.color};">${total}</div>
          <div class="pulse-result-body">
            <div class="label" style="color: ${resultBand.color};">${resultBand.label}</div>
            <div class="desc">${resultBand.desc}</div>
          </div>
          <span class="pulse-reset" onclick="resetPulse('${id}')">Reset</span>
        </div>
      ` : answered > 0 ? `
        <div class="pulse-progress">${answered} of ${d.statements.length} rated  ·  Complete all to see your result</div>
      ` : ''}

      <div class="pulse-footer">
        <div class="line">${d.outreach}</div>
        <button onclick="copyPulseOutreach('${id}')">Copy outreach line</button>
      </div>
    </div>
  `;
}


function scoreStatement(id, idx, val) {
  if (!pulseScores[id]) pulseScores[id] = {};
  pulseScores[id][idx] = val;
  renderPulse(id);
}


function resetPulse(id) {
  pulseScores[id] = {};
  renderPulse(id);
}


function copyPulseOutreach(id) {
  navigator.clipboard.writeText(PULSES[id].outreach).then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = orig, 1600);
  });
}
