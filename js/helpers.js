// helpers.js - small utilities used across modules

function getRelationshipLabel(rel) {
  return {
    'cold': 'Cold account',
    'active-ms': 'Active Managed Services',
    'past-ms': 'Past Managed Services',
    'past-consulting': 'Dormant consulting',
    'active-consulting': 'Active consulting'
  }[rel] || '';
}


function _splitSentences(text, n) {
  const parts = String(text).split(/(?<=\.)\s+/);
  return { head: parts.slice(0, n).join(' '), rest: parts.slice(n).join(' ') };
}

// Simple **bold** markdown → <strong> renderer, safe for text

function _md(text) {
  return String(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// Real metrics = at least 2 entries containing digits (not "Enterprise" / "Multi-phase")

function _hasRealMetrics(metrics) {
  if (!metrics || !metrics.length) return false;
  return metrics.filter(m => /\d/.test(m.v)).length >= 2;
}


function _findCD(initials) {
  if (typeof CDS === 'undefined') return null;
  return CDS.find(c => c.initials === initials);
}


function _outcomeHook(outcomeText) {
  // Pull a short hook: text before the first em-dash, or first sentence
  const dash = outcomeText.indexOf('—');
  if (dash > 0 && dash < 80) return outcomeText.slice(0, dash).trim();
  const first = outcomeText.split(/(?<=\.)\s+/)[0];
  return first.length > 90 ? first.slice(0, 87) + '…' : first;
}
