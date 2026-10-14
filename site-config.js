// ==== LAUNCH PLACEHOLDERS: swap these in ONE place ====
window.SITE = {
  NAME: '[Site Name]',                                  // PLACEHOLDER: site name not chosen yet
  EMAIL: 'hello@example-golf-directory.com',            // PLACEHOLDER: mockup contact address (example domain)
  EMAIL_IS_PLACEHOLDER: true,                           // set false once the real address is live
  UPDATED: 'October 14, 2026'                           // "Last updated" date on legal pages
};
document.addEventListener('DOMContentLoaded', function () {
  var S = window.SITE;
  document.querySelectorAll('[data-site-name]').forEach(function (e) { e.textContent = S.NAME; });
  document.querySelectorAll('[data-updated]').forEach(function (e) { e.textContent = S.UPDATED; });
  document.querySelectorAll('[data-email]').forEach(function (e) {
    e.textContent = S.EMAIL; e.href = 'mailto:' + S.EMAIL;
    if (S.EMAIL_IS_PLACEHOLDER) { var t = document.createElement('span'); t.className = 'ph'; t.textContent = ' (placeholder address, not yet monitored)'; e.after(t); }
  });
});
