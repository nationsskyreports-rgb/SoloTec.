/* ═══════════════════════════════════════════════════
   SoloTec / Kareem — main.js
   Handles:
     - Language toggle (persists in localStorage)
     - Mobile bottom nav active state
     - Hamburger sheet menu
     - Hero banner particle rendering (lightweight)
   ═══════════════════════════════════════════════════ */


/* ─── i18n dictionary (only what changes across pages) ─── */
const i18n = {
  en: {
    // Navigation
    nav_home:     'Home',
    nav_projects: 'Projects',
    nav_about:    'About',
    nav_contact:  'Contact',
    nav_menu:     'Menu',

    // Home hero
    hero_eyebrow: 'SOFTWARE DEVELOPER · CAIRO',
    hero_name:    'Kareem Rashad',
    hero_lede:    'I build the internal software teams actually open every morning — WhatsApp platforms, HR systems, portals, and mobile apps. Mostly alone, mostly for people I work with.',
    hero_meta_role:  'Customer experience & workforce lead at Nations of Sky',
    hero_meta_studio:'Running SoloTec on the side',
    cta_wa:       'WhatsApp me',
    cta_work:     'See the projects',
    portrait_badge: 'CAIRO · EG',

    // Stats
    stat1_l: 'tables in the HRIS I built',
    stat2_l: 'featured internal platforms',
    stat3_l: 'app live on the App Store',
    stat4_l: 'shipped from a browser',

    // Projects preview
    projects_eyebrow: 'FEATURED WORK',
    projects_title:   'Four projects I keep coming back to',
    projects_note:    'Every project below is a real internal tool used daily. Live links are private, so this site is where the stories live.',

    // Quick about + CTA
    q_about_eyebrow: 'ABOUT',
    q_about_title:   'I build the things I wish existed',
    q_about_body:    'Day job is customer experience and workforce management. Real hobby is shipping the tool before somebody else does. Read the story →',
    q_cta_title:     'Have something you want built?',
    q_cta_body:      'Fastest way is WhatsApp — same-day reply.',

    // Sheet menu
    menu_title:   'More',
    menu_lang:    'Language: العربية',
    menu_github:  'GitHub',
    menu_linkedin:'LinkedIn',
    menu_email:   'Email',

    // Footer
    footer_note:  'Built by Kareem, in the browser, from Cairo.',

    portrait_alt: 'Kareem Rashad'
  },

  ar: {
    nav_home:     'الرئيسية',
    nav_projects: 'المشاريع',
    nav_about:    'عني',
    nav_contact:  'تواصل',
    nav_menu:     'القائمة',

    hero_eyebrow: 'مطوّر برمجيات · القاهرة',
    hero_name:    'كريم رشاد',
    hero_lede:    'ببني السوفتوير اللي الفرق بتفتحه كل صباح — منصات واتساب، أنظمة موارد بشرية، بوابات، وتطبيقات موبايل. غالباً لوحدي، وغالباً لناس بشتغل معاهم.',
    hero_meta_role:  'مسؤول تجربة العملاء وإدارة القوى البشرية في Nations of Sky',
    hero_meta_studio:'وبأدير SoloTec على الجنب',
    cta_wa:       'كلمني على واتساب',
    cta_work:     'شوف المشاريع',
    portrait_badge: 'القاهرة · مصر',

    stat1_l: 'جدول في نظام الـ HR اللي بنيته',
    stat2_l: 'منصات داخلية بارزة',
    stat3_l: 'تطبيق على الـ App Store',
    stat4_l: 'اتسلّم من المتصفح',

    projects_eyebrow: 'أعمال بارزة',
    projects_title:   'أربع مشاريع بأفتخر بيهم',
    projects_note:    'كل مشروع تحت ده أداة داخلية حقيقية شغّالة يومياً. اللينكات خاصة، فالموقع ده هو مكان القصص.',

    q_about_eyebrow: 'عني',
    q_about_title:   'ببني الحاجات اللي بتمنى إنها موجودة',
    q_about_body:    'شغلي الرسمي تجربة عملاء وإدارة قوى بشرية. هوايتي الحقيقية إني أكتب الأداة قبل ما حد تاني يفكر فيها. اقرا القصة ←',
    q_cta_title:     'عندك حاجة عايز تبنيها؟',
    q_cta_body:      'أسرع طريقة واتساب — رد في نفس اليوم.',

    menu_title:   'المزيد',
    menu_lang:    'اللغة: English',
    menu_github:  'GitHub',
    menu_linkedin:'LinkedIn',
    menu_email:   'إيميل',

    footer_note:  'بنَاه كريم، من المتصفح، من القاهرة.',

    portrait_alt: 'كريم رشاد'
  }
};


/* ─── Apply language ─── */
function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key]) el.setAttribute('alt', dict[key]);
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = (lang === 'ar') ? 'EN' : 'ع';

  try { localStorage.setItem('solotec-lang', lang); } catch (e) { /* ignore */ }
}

function toggleLang() {
  const next = (document.documentElement.lang === 'ar') ? 'en' : 'ar';
  applyLang(next);
}

/* Init language on load */
(function () {
  let saved = null;
  try { saved = localStorage.getItem('solotec-lang'); } catch (e) { /* ignore */ }
  const browserAr = (navigator.language || '').toLowerCase().startsWith('ar');
  applyLang(saved || (browserAr ? 'ar' : 'en'));

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', toggleLang);
})();


/* ─── Sheet menu (hamburger from bottom nav) ─── */
(function () {
  const trigger  = document.getElementById('sheetTrigger');
  const sheet    = document.getElementById('sheet');
  const backdrop = document.getElementById('sheetBackdrop');
  if (!trigger || !sheet) return;

  function open() {
    sheet.classList.add('open');
    backdrop && backdrop.classList.add('open');
  }
  function close() {
    sheet.classList.remove('open');
    backdrop && backdrop.classList.remove('open');
  }

  trigger.addEventListener('click', open);
  backdrop && backdrop.addEventListener('click', close);

  // Language switch inside sheet
  const langBtn = document.getElementById('sheetLangBtn');
  if (langBtn) langBtn.addEventListener('click', function () {
    toggleLang();
    close();
  });
})();


/* ─── Hero banner: floating code symbols + particles ─── */
(function () {
  const banner = document.getElementById('heroBanner');
  if (!banner) return;

  // Symbols and their randomized initial positions
  const symbols = ['{ }', '< />', '=>', '( )', '[ ]', ';', '//', '&&', '||', '??', 'const', 'async'];
  const symbolCount = window.innerWidth < 700 ? 6 : 10;

  for (let i = 0; i < symbolCount; i++) {
    const el = document.createElement('div');
    el.className = 'banner-symbol';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left    = Math.random() * 90 + '%';
    el.style.top     = Math.random() * 80 + '%';
    el.style.fontSize = (14 + Math.random() * 18) + 'px';
    el.style.animationDelay    = -(Math.random() * 20) + 's';
    el.style.animationDuration = (16 + Math.random() * 12) + 's';
    banner.appendChild(el);
  }

  // Glowing particles
  const particleCount = window.innerWidth < 700 ? 8 : 14;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'banner-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top  = Math.random() * 100 + '%';
    p.style.animationDelay = -(Math.random() * 15) + 's';
    p.style.animationDuration = (10 + Math.random() * 10) + 's, ' + (2 + Math.random() * 3) + 's';
    // Vary the color slightly for depth
    if (Math.random() > 0.6) p.style.background = 'var(--blue)';
    if (Math.random() > 0.85) p.style.background = 'var(--purple)';
    banner.appendChild(p);
  }
})();
