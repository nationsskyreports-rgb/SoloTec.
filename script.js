/* Kareem Rashad / SoloTec — language toggle only.
   No scroll reveals, no fake terminal, no rotating decorations.
   The site should feel like a static page, because it is. */

const i18n = {
  en: {
    nav_work:    'Work',
    nav_about:   'About',
    nav_contact: 'Contact',

    hero_eyebrow:     'SOFTWARE DEVELOPER · CAIRO',
    hero_name:        'Kareem Rashad',
    hero_lede:        "I build the internal software teams actually open every morning — WhatsApp platforms, HR systems, portals, and mobile apps. Mostly alone, mostly for people I work with.",
    hero_meta_role:   'Customer experience & workforce lead at Nations of Sky',
    hero_meta_studio: 'Running SoloTec on the side',
    cta_wa:           'WhatsApp me',
    cta_work:         'Look at the work',
    portrait_note:    'PHOTO COMING SOON',

    stat1: 'tables in the HRIS I built',
    stat2: 'platforms shipped for one company',
    stat3: 'app live on the App Store',
    stat4: 'self-taught, shipped from a browser',

    work_eyebrow: 'SELECTED WORK',
    work_title:   'Three that I keep coming back to',

    c1_year:  '2025 · in production',
    c1_title: 'NOS Contact Center — a WhatsApp platform',
    c1_lede:  'Our team was paying for a third-party WhatsApp tool with limits I kept hitting. I replaced it with a platform we own — inbox, routing, campaigns, and reporting.',
    c1_fact1_k: 'Stack',
    c1_fact1_v: 'Next.js · Supabase · WhatsApp Business API · Vercel',
    c1_fact2_k: 'Built',
    c1_fact2_v: 'Shared inbox with race-safe routing, agent permissions matrix, five live reporting views, campaign manager',
    c1_fact3_k: 'Notable',
    c1_fact3_v: 'Three-layer notifications (sound + toast + browser), all permissions flow through one Terms & Roles matrix',

    c2_year:  '2024–2025 · in production',
    c2_title: 'Tawreedat HRIS — Egyptian payroll from scratch',
    c2_lede:  "A full HR platform for a client who was still on spreadsheets. Twenty-six tables, a payroll engine that understands Egyptian progressive tax and social insurance, and a mobile app so people can check in from wherever they actually are.",
    c2_fact1_k: 'Stack',
    c2_fact1_v: 'Supabase · PWA · GPS-based attendance',
    c2_fact2_k: 'Built',
    c2_fact2_v: 'Employees, attendance, leave, payroll — plus a full admin dashboard and a mobile PWA',
    c2_fact3_k: 'Notable',
    c2_fact3_v: 'Progressive-tax engine and insurance calculations built to match how Egyptian payroll actually works, not how the textbooks describe it',

    c3_year:  '2024–2026 · live on the App Store',
    c3_title: 'Align with Enjy — an iOS app I built without a Mac',
    c3_lede:  'A yoga studio was running bookings on WhatsApp. I built them a booking app for iOS — from first line of code to App Store release, without owning a Mac. The whole toolchain runs in the browser and in cloud CI.',
    c3_fact1_k: 'Stack',
    c3_fact1_v: 'Capacitor · Codemagic · Supabase · APNs',
    c3_fact2_k: 'Built',
    c3_fact2_v: 'Class schedule, bookings, payments, and push notifications; ported the PWA into a native iOS shell',
    c3_fact3_k: 'Notable',
    c3_fact3_v: '"Copy last week" for the studio owner, so nobody has to re-type the schedule at midnight every Sunday',

    other_eyebrow: 'EVERYTHING ELSE',
    other_title:   "Other things I've shipped",
    o1_n: 'NOS Admin Portal',   o1_m: 'workforce management · Vanilla JS + Supabase',
    o2_n: 'NOS Agent Portal',   o2_m: 'day-to-day dashboard for agents · Vanilla JS',
    o3_n: 'NOS Campaigns Portal', o3_m: 'outbound campaign runner with call scripts · Realtime',
    o4_n: 'NOS Medical Network',  o4_m: 'PDF-scraped provider directory with maps · PWA',
    o5_n: 'Nuweiba Hub',          o5_m: 'tourism guide app for the town · React Native · Cloudflare',
    o6_n: 'Shift Swap & break tracking', o6_m: 'Google Sheets + Apps Script tools for the WFM team',

    about_eyebrow: 'ABOUT',
    about_title:   'Quick honesty about how I work',
    about_p1: "My day job is customer experience and workforce management at Nations of Sky, a real-estate developer in Cairo. My real hobby is fixing \"wouldn't it be nice if…\" complaints by writing the thing before someone else does. That's how most of the projects above got started.",
    about_p2: "I don't have a computer science degree. I learned by shipping, breaking things, and rewriting them cleaner the next weekend. Everything I build runs entirely from a browser — I don't own a Mac or a development laptop. Whatever I hand you was made in GitHub's web editor, deployed on Vercel or GitHub Pages, with Supabase doing the heavy lifting behind it.",
    about_p3: "<strong>SoloTec</strong> is the studio name. It's a promise: you talk to the person writing the code, and one person owns the whole thing end-to-end. No handoffs, no translation loss, no team meetings about meetings.",

    ct_eyebrow: 'CONTACT',
    ct_title:   'If you have something you want built, message me.',
    ct_sub:     'Fastest way is WhatsApp. I read messages the same day.',
    ct_wa:      'WhatsApp: +20 111 150 9666',

    footer_line: 'Built by Kareem, in the browser, from Cairo.'
  },

  ar: {
    nav_work:    'الأعمال',
    nav_about:   'عني',
    nav_contact: 'تواصل',

    hero_eyebrow:     'مطوّر برمجيات · القاهرة',
    hero_name:        'كريم رشاد',
    hero_lede:        'ببني السوفتوير اللي الفرق بتفتحه فعلاً كل صباح — منصات واتساب، أنظمة موارد بشرية، بوابات، وتطبيقات موبايل. غالباً لوحدي، وغالباً لناس بشتغل معاهم.',
    hero_meta_role:   'مسؤول تجربة العملاء وإدارة القوى البشرية في Nations of Sky',
    hero_meta_studio: 'وبأدير SoloTec على الجنب',
    cta_wa:           'كلمني على واتساب',
    cta_work:         'شوف الأعمال',
    portrait_note:    'الصورة قريباً',

    stat1: 'جدول في نظام الـ HR اللي بنيته',
    stat2: 'منصات سلمتها لشركة واحدة',
    stat3: 'تطبيق على الـ App Store',
    stat4: 'تعلّم ذاتي، وشغل كامل من المتصفح',

    work_eyebrow: 'أعمال مختارة',
    work_title:   'تلاتة بفتخر بيهم',

    c1_year:  '2025 · شغّالة الآن',
    c1_title: 'NOS Contact Center — منصة واتساب كاملة',
    c1_lede:  'كنا بندفع لأداة واتساب من طرف تالت وحدودها كانت بتضايقني. بنيت بديل نمتلكه — صندوق موحد، توجيه، حملات، وتقارير.',
    c1_fact1_k: 'الـ Stack',
    c1_fact1_v: 'Next.js · Supabase · WhatsApp Business API · Vercel',
    c1_fact2_k: 'بنيت',
    c1_fact2_v: 'صندوق موحد مع توجيه محمي من race conditions، مصفوفة صلاحيات للوكلاء، خمس شاشات تقارير حية، ومدير حملات',
    c1_fact3_k: 'المميز',
    c1_fact3_v: 'إشعارات ثلاثية الطبقات (صوت + toast + المتصفح)، وكل الصلاحيات بتمر عبر مصفوفة Terms & Roles واحدة',

    c2_year:  '2024–2025 · شغّال الآن',
    c2_title: 'Tawreedat HRIS — رواتب مصرية من الصفر',
    c2_lede:  'نظام موارد بشرية كامل لعميل كان لسه على ملفات إكسل. 26 جدول، محرك رواتب بيفهم الضريبة التصاعدية والتأمينات المصرية، وتطبيق موبايل يخلي الناس تسجل حضورها من مكانها الفعلي.',
    c2_fact1_k: 'الـ Stack',
    c2_fact1_v: 'Supabase · PWA · حضور بالـ GPS',
    c2_fact2_k: 'بنيت',
    c2_fact2_v: 'موظفين، حضور، إجازات، رواتب — بجانب لوحة تحكم إدارية كاملة وتطبيق موبايل PWA',
    c2_fact3_k: 'المميز',
    c2_fact3_v: 'محرك ضريبة تصاعدية وحسابات تأمينات بيوافق طريقة عمل الرواتب المصرية الفعلية، مش وصفة الكتب',

    c3_year:  '2024–2026 · على الـ App Store',
    c3_title: 'Align with Enjy — تطبيق iOS بنيته بدون Mac',
    c3_lede:  'استوديو يوجا كان بيدير الحجوزات على واتساب. بنيتلهم تطبيق حجز على iOS — من أول سطر كود لحد النشر على الـ App Store، من غير ما يبقى عندي Mac. كل الـ toolchain شغال من المتصفح ومن CI في الـ Cloud.',
    c3_fact1_k: 'الـ Stack',
    c3_fact1_v: 'Capacitor · Codemagic · Supabase · APNs',
    c3_fact2_k: 'بنيت',
    c3_fact2_v: 'جدول الحصص، الحجوزات، المدفوعات، وإشعارات push؛ نقلت الـ PWA إلى shell أصلي لـ iOS',
    c3_fact3_k: 'المميز',
    c3_fact3_v: '"Copy Last Week" لصاحبة الاستوديو، عشان محدش يعيد كتابة الجدول كل أحد بعد نص الليل',

    other_eyebrow: 'باقي الشغل',
    other_title:   'حاجات تانية سلمتها',
    o1_n: 'NOS Admin Portal',        o1_m: 'إدارة القوى البشرية · Vanilla JS + Supabase',
    o2_n: 'NOS Agent Portal',        o2_m: 'لوحة الوكيل اليومية · Vanilla JS',
    o3_n: 'NOS Campaigns Portal',    o3_m: 'مشغل الحملات الصادرة مع سكريبتات المكالمات · Realtime',
    o4_n: 'NOS Medical Network',     o4_m: 'دليل شبكة طبية مستخرج من PDF بالخرائط · PWA',
    o5_n: 'Nuweiba Hub',             o5_m: 'دليل سياحي للمدينة · React Native · Cloudflare',
    o6_n: 'Shift Swap & متابعة البريكات', o6_m: 'أدوات Google Sheets + Apps Script لفريق الـ WFM',

    about_eyebrow: 'عني',
    about_title:   'كلام صريح عن طريقة شغلي',
    about_p1: 'شغلي الرسمي في Nations of Sky، شركة تطوير عقاري بالقاهرة، كمسؤول تجربة عملاء وإدارة قوى بشرية. هوايتي الحقيقية: أصلح شكاوى الـ "يا ريت لو…" بأني أكتب الحل قبل ما حد تاني يفكر فيه. معظم المشاريع فوق بدأت كده.',
    about_p2: 'مش عندي شهادة علوم حاسب. اتعلمت بأني بأشتغل، بأكسر حاجات، وبأعيد كتابتها بشكل أنضف الأسبوع اللي بعده. كل حاجة ببنيها بتشتغل من متصفح فقط — مش عندي Mac ولا laptop تطوير. أي حاجة بأسلمها اتعملت في GitHub Web Editor، اتنشرت على Vercel أو GitHub Pages، مع Supabase شغالة تحت.',
    about_p3: '<strong>SoloTec</strong> هو اسم الاستوديو. وهو وعد: بتكلم الشخص اللي بيكتب الكود، وشخص واحد بيمسك المشروع من أوله لآخره. من غير وسطاء، من غير حاجة تضيع في النقل، من غير اجتماعات عن اجتماعات.',

    ct_eyebrow: 'تواصل',
    ct_title:   'لو عندك حاجة عايز تبنيها، كلمني.',
    ct_sub:     'أسرع طريقة واتساب. بأقرأ الرسائل في نفس اليوم.',
    ct_wa:      'واتساب: 9666 150 111 20+',

    footer_line: 'بنَاه كريم، من المتصفح، من القاهرة.'
  }
};

const langToggle = document.getElementById('langToggle');

function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  if (langToggle) langToggle.textContent = (lang === 'ar') ? 'EN' : 'ع';
  try { localStorage.setItem('solotec-lang', lang); } catch (e) { /* private mode */ }
}

if (langToggle) {
  langToggle.addEventListener('click', function () {
    const next = (document.documentElement.lang === 'ar') ? 'en' : 'ar';
    applyLang(next);
  });
}

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('solotec-lang'); } catch (e) { /* ignore */ }
  const browserAr = (navigator.language || '').toLowerCase().startsWith('ar');
  applyLang(saved || (browserAr ? 'ar' : 'en'));
})();
