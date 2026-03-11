/* ================================================
   DAYAN TIRMIZI — PORTFOLIO · script.js
   ================================================ */

/* ─── LOADER ───────────────────────────────────── */
window.onload = function() {
  var loader = document.getElementById('loader');
  var fill   = document.getElementById('loaderFill');
  var label  = document.getElementById('loaderLabel');

  if (!loader) { revealHero(); runHeroCounters(); return; }

  var pct = 0, mi = 0, done = false;
  var msgs = ['Loading…', 'Almost ready…', 'Welcome!'];

  function finishLoader() {
    if (done) return;
    done = true;
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.4s';
    setTimeout(function() {
      loader.style.display = 'none';
      revealHero();
      runHeroCounters();
    }, 420);
  }

  setTimeout(finishLoader, 2000); // hard cap

  var iv = setInterval(function() {
    pct = Math.min(pct + Math.random() * 9 + 5, 100);
    if (fill) fill.style.width = pct + '%';
    var thresh = (mi + 1) * (100 / msgs.length);
    if (pct >= thresh && mi < msgs.length - 1 && label) label.textContent = msgs[++mi];
    if (pct >= 100) { clearInterval(iv); setTimeout(finishLoader, 250); }
  }, 35);
};

/* ─── HERO ENTRANCE ────────────────────────────── */
function revealHero() {
  document.querySelectorAll('.hero .reveal-up').forEach(function(el, i) {
    setTimeout(function() { el.classList.add('in'); }, i * 130);
  });
}

/* ─── HERO STAT COUNTERS ───────────────────────── */
function runHeroCounters() {
  document.querySelectorAll('.hstat-n').forEach(function(el) {
    var target = parseInt(el.dataset.to), frame = 0, steps = 50;
    var iv = setInterval(function() {
      frame++;
      el.textContent = Math.round((1 - Math.pow(1 - frame/steps, 3)) * target);
      if (frame >= steps) { el.textContent = target; clearInterval(iv); }
    }, 30);
  });
}

/* ─── MODAL FUNCTIONS — global so onclick works ── */
var MODAL_DATA = {
  vitalmart: {
    badge: 'excel', badgeText: 'Excel Project',
    title: 'Vital Mart Business Suite',
    org: 'Built for Vital Mart (Pvt) Ltd · Karachi, Pakistan',
    desc: 'A complete, production-grade retail management system built for a real Karachi-based business. Handles automated invoice generation, inventory tracking, GST calculations, barcode-linked product data, and customer records — all inside a single structured workbook with 3,578+ invoice entries.',
    stats: [['3,578+','Invoices'], ['7','Worksheets'], ['90+','Products'], ['Real','Business']],
    sectLabel: 'What this system does:',
    features: [
      'Automated invoice generation with company header, tax breakdown, and totals',
      'Barcode-linked product database with GST (18%) calculations',
      'Full inventory and stock management with quantity tracking',
      'Customer ID system linking repeat customers to purchase history',
      'Professional invoice slip layout formatted for print and client use',
      'Used by a real private limited company as their live operational system'
    ],
    tags: ['Invoice Automation','Inventory Management','GST Calculator','Product Database','Customer Tracking','Print Layout'],
    dlLink: 'vital_mart.xlsx', dlText: 'Download File', liveLink: null
  },
  beaconhouse: {
    badge: 'excel', badgeText: 'Excel Report System',
    title: 'Beaconhouse Academic Report System',
    org: 'Built for Beaconhouse School System · Gulshan Campus, Karachi',
    desc: 'A professional student report card system generating formatted academic reports for an entire class. Tracks grades across six subjects, student profiles, age data, and PTM status — producing print-ready report cards for 300+ students from a structured data input sheet.',
    stats: [['300+','Students'], ['54','Data Columns'], ['6+','Subjects'], ['Print','Ready']],
    sectLabel: 'What this system does:',
    features: [
      'Generates formatted, print-ready report cards for 300+ students automatically',
      'Tracks performance across 6+ subjects with grade calculations',
      'Maintains student profiles: name, roll number, age, section, PTM data',
      'Two-sheet architecture: formatted report layout and raw data input',
      'Handles 54 data columns per student with clean validation',
      'Built for real school use at Beaconhouse School System, Gulshan Campus'
    ],
    tags: ['Report Generation','Grading System','Student Profiles','Print-Ready','Data Management'],
    dlLink: 'beaconhouse_dayan_report_ard_1.xlsx', dlText: 'Download File', liveLink: null
  },
  dcbloan: {
    badge: 'excel', badgeText: 'Excel Finance System',
    title: 'DCB Loan Origination System',
    org: 'Built for DCB Lending · Financial Sector · Karachi',
    desc: 'A structured financial loan origination and tracking workbook for a lending operation. Built to professional standards — managing loan applications, repayment schedules, borrower profiles, and financial summaries using a clean, formula-driven architecture.',
    stats: [['Finance','Sector'], ['Auto','Calculations'], ['Pro','Grade'], ['Full','Lifecycle']],
    sectLabel: 'What this system does:',
    features: [
      'Manages complete loan application records and borrower profiles',
      'Generates automated repayment schedules with interest calculations',
      'Tracks loan status, outstanding balances, and payment history',
      'Produces financial summary reports for management review',
      'Formula-driven calculations to minimise human error',
      'Designed to professional, banking-grade standards'
    ],
    tags: ['Loan Origination','Repayment Schedules','Borrower Records','Financial Reporting','Formula Automation'],
    dlLink: 'DCB_LOAN__ORIGNAL__Final.xlsx', dlText: 'Download File', liveLink: null
  },
  pakipc: {
    badge: 'web', badgeText: 'Live Web Project',
    title: 'PakiPC.com',
    org: 'Live Website · pakipc.com · 2024',
    desc: 'A fully live, publicly accessible technology website designed and built from the ground up. PakiPC.com is a Pakistani technology platform covering PC hardware, software, and tech topics — deployed on the web, indexed by search engines, and receiving real visitors.',
    stats: [['Live','On the Web'], ['Real','Traffic'], ['Full','Build'], ['2024','Launched']],
    sectLabel: 'What was built:',
    features: [
      'Full website designed and coded from scratch — HTML, CSS, and JavaScript',
      'Fully responsive layout across desktop, tablet, and mobile',
      'Clean, professional UI for a Pakistani technology readership',
      'Live at www.pakipc.com — a real indexed domain',
      'Receiving genuine organic traffic from search engines',
      'Complete ownership: design, build, deploy, and maintain'
    ],
    tags: ['HTML / CSS','JavaScript','Responsive Design','Live Deployment','Tech Platform','SEO'],
    dlLink: null, dlText: null, liveLink: 'https://www.pakipc.com'
  },
  portfolio: {
    badge: 'web', badgeText: 'Web Project',
    title: 'This Portfolio Website',
    org: 'Personal Project · Pure HTML5, CSS3 & JavaScript · 2025',
    desc: 'Built entirely from scratch — no frameworks, no templates. Every line of code was written by hand, including animations, modals, form validation, and responsive layout across all screen sizes.',
    stats: [['0','Frameworks'], ['100%','Hand-coded'], ['3','Files'], ['Mobile','Ready']],
    sectLabel: 'Technical features:',
    features: [
      'Zero frameworks — pure HTML5, CSS3, and vanilla JavaScript only',
      'Responsive layout using CSS Grid and Flexbox',
      'Scroll-triggered animations using IntersectionObserver',
      'Interactive project modal system with full project details',
      'Contact form with real-time JavaScript validation',
      'Works locally — open index.html in any browser, no server needed'
    ],
    tags: ['HTML5','CSS3','JavaScript','Responsive','No Frameworks','Local-Ready'],
    dlLink: null, dlText: null, liveLink: null
  }
};

function openModal(key) {
  var d = MODAL_DATA[key];
  if (!d) return;

  var statsHTML = d.stats.map(function(s) {
    return '<div class="mstat"><div class="mstat-n">' + s[0] + '</div><div class="mstat-l">' + s[1] + '</div></div>';
  }).join('');
  var featHTML = d.features.map(function(f) { return '<li>' + f + '</li>'; }).join('');
  var tagsHTML = d.tags.map(function(t) { return '<span class="ptag">' + t + '</span>'; }).join('');

  var footerHTML = '';
  if (d.liveLink) footerHTML += '<a href="' + d.liveLink + '" target="_blank" rel="noopener" class="btn btn-primary">Visit Live Site</a> ';
  if (d.dlLink)   footerHTML += '<a href="' + d.dlLink + '" download class="btn btn-primary">' + d.dlText + '</a>';
  if (key === 'portfolio') footerHTML += '<span style="font-size:.8rem;color:#4caf7d">You are viewing it now</span>';

  var body = document.getElementById('modalBody');
  if (!body) return;
  body.innerHTML =
    '<div class="modal-inner">' +
    '<span class="modal-badge ' + d.badge + '">' + d.badgeText + '</span>' +
    '<h2 class="modal-title">' + d.title + '</h2>' +
    '<p class="modal-org">' + d.org + '</p>' +
    '<p class="modal-desc">' + d.desc + '</p>' +
    '<div class="modal-stats-row">' + statsHTML + '</div>' +
    '<p class="modal-sect">' + d.sectLabel + '</p>' +
    '<ul class="modal-feature-list">' + featHTML + '</ul>' +
    '<p class="modal-sect">Technologies &amp; Skills</p>' +
    '<div class="modal-tags">' + tagsHTML + '</div>' +
    (footerHTML ? '<div class="modal-footer">' + footerHTML + '</div>' : '') +
    '</div>';

  var overlay = document.getElementById('modalOverlay');
  if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal() {
  var overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

/* ─── NAV ──────────────────────────────────────── */
(function() {
  var nav   = document.getElementById('nav');
  var ham   = document.getElementById('hamburger');
  var menu  = document.getElementById('navLinks');
  var links = document.querySelectorAll('.nl');
  var secs  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
    var cur = '';
    secs.forEach(function(s) { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    links.forEach(function(l) { l.classList.toggle('active', l.getAttribute('href') === '#' + cur); });
  }, { passive: true });

  if (ham) ham.addEventListener('click', function() {
    ham.classList.toggle('open');
    if (menu) menu.classList.toggle('open');
  });
  links.forEach(function(l) { l.addEventListener('click', function() {
    if (ham)  ham.classList.remove('open');
    if (menu) menu.classList.remove('open');
  }); });
})();

/* ─── SCROLL PROGRESS BAR ──────────────────────── */
window.addEventListener('scroll', function() {
  var el = document.getElementById('scrollBar');
  if (!el) return;
  var max = document.documentElement.scrollHeight - window.innerHeight;
  el.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}, { passive: true });

/* ─── SCROLL REVEAL ────────────────────────────── */
(function() {
  if (!window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(function(el) {
    if (!el.closest('.hero')) obs.observe(el);
  });
})();

/* ─── PROJECT FILTERS ──────────────────────────── */
(function() {
  var btns  = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.pcard');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      cards.forEach(function(c) { c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f); });
    });
  });
})();

/* ─── SMOOTH SCROLL ────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var id = a.getAttribute('href');
    if (id === '#') return;
    var t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.offsetTop - 64, behavior: 'smooth' });
  });
});

/* ─── CONTACT FORM ─────────────────────────────── */
(function() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var fname = document.getElementById('fname');
  var femail = document.getElementById('femail');
  var fservice = document.getElementById('fservice');
  var fmsg = document.getElementById('fmsg');
  var subBtn = document.getElementById('subBtn');
  var subText = document.getElementById('subBtnText');
  var success = document.getElementById('formSuccess');

  function err(el, id, msg) { el.classList.add('err'); document.getElementById(id).textContent = msg; return false; }
  function ok(el, id) { el.classList.remove('err'); document.getElementById(id).textContent = ''; return true; }

  function vName()    { return fname.value.trim().length >= 2 ? ok(fname,'fnameErr') : err(fname,'fnameErr','Enter your name.'); }
  function vEmail()   { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(femail.value.trim()) ? ok(femail,'femailErr') : err(femail,'femailErr','Enter a valid email.'); }
  function vService() { return fservice.value ? ok(fservice,'fserviceErr') : err(fservice,'fserviceErr','Select a service.'); }
  function vMsg()     { return fmsg.value.trim().length >= 10 ? ok(fmsg,'fmsgErr') : err(fmsg,'fmsgErr','Message too short.'); }

  fname.addEventListener('blur', vName);
  femail.addEventListener('blur', vEmail);
  fservice.addEventListener('change', vService);
  fmsg.addEventListener('blur', vMsg);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (![vName(), vEmail(), vService(), vMsg()].every(Boolean)) return;
    subText.textContent = 'Sending…';
    subBtn.disabled = true;
    setTimeout(function() {
      subText.textContent = 'Send Message';
      subBtn.disabled = false;
      form.reset();
      if (success) { success.classList.add('show'); setTimeout(function() { success.classList.remove('show'); }, 5000); }
    }, 1500);
  });
})();