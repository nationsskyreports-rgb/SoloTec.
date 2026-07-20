# SoloTec — Portfolio Site

One-page bilingual (EN/AR) portfolio for SoloTec, built as static HTML/CSS/JS.

## Structure

```
solotec-site/
├── index.html          # الصفحة الرئيسية
├── styles.css          # كل الستايلات
├── script.js           # تبديل اللغة + الحركات
├── README.md           # هذا الملف
└── assets/
    ├── logo-mark.png       # اللوجو mark فقط (512×512) — للـ hero
    ├── logo-wordmark.png   # اللوجو + كلمة SoloTec (1200×360) — للـ nav والـ footer
    ├── favicon.png         # 64×64 — أيقونة المتصفح
    ├── apple-touch-icon.png # 180×180 — أيقونة iOS
    └── og-image.png        # 1200×630 — كارت مشاركة السوشيال
```

## Update before publishing

الملفات جاهزة بالمعلومات دي:

- **رقم الواتساب:** `+20 111 150 9666`
- **الإيميل:** `Soloever2@gmail.com`

اللي محتاج تحدّثه فقط:

1. **`index.html` → قسم `.socials`:**
   بدّل `href="#"` بلينكات صفحاتك الحقيقية على Facebook، Instagram، TikTok بعد ما تعمل الصفحات.

2. **`index.html` → meta `og:image` (اختياري):**
   لما ترفع على GitHub Pages بدومين نهائي، أضف URL كامل عشان مشاركات السوشيال تشتغل صح:
   ```html
   <meta property="og:url" content="https://YOUR-USERNAME.github.io/solotec/">
   ```

## Publish on GitHub Pages

1. اعمل repo جديد باسم `solotec` (أو أي اسم).
2. ارفع كل محتوى المجلد ده (بما فيهم مجلد `assets`).
3. من الـ repo → Settings → Pages → Branch: `main` (أو `master`) → Save.
4. الموقع هيشتغل خلال دقيقة على: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Local preview

مفيش build step. افتح `index.html` مباشرة في المتصفح، أو استخدم أي static server:

```bash
# لو عندك Python:
python3 -m http.server 8000
# ثم افتح http://localhost:8000
```

## What powers what

- **Language toggle** — الزرار "ع / EN" في الـ nav. القاموس في `script.js` جوّا `i18n`. تعديل النصوص بيتم من هنا لكل من العربية والإنجليزية.
- **Scroll reveal** — الكروت بتظهر تدريجياً مع الـ scroll (`IntersectionObserver`).
- **Reduced motion** — لو المستخدم مفعّل `prefers-reduced-motion`, الحركات كلها بتتلغى تلقائي.
- **Language persistence** — الاختيار بيتحفظ في `localStorage`، أول زيارة بتاخد لغة المتصفح.

## Regenerating assets

كل صور المجلد `assets/` أُنتجت من سكريبت Python واحد. لو حبيت تعدّل اللوجو (لون، حجم، شكل السداسي)، عدّل السكريبت وشغّله عشان تحدّث كل الأصول مرة واحدة بدل ما تعدّل كل صورة على حدة.

## Brand tokens

```
Teal:    #00B69B
Blue:    #0EA5E9
BG:      #0B1220
Surface: #111A2C
Text:    #F1F5F9
Muted:   #8CA0B8
```

الـ gradient الأساسي: `linear-gradient(135deg, #00B69B, #0EA5E9)` — يظهر في الأزرار الأساسية، حرف S داخل السداسي، وحرف c في كلمة SoloTec.
