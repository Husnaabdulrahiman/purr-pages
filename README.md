# Purr & Pages — Bookstore Café Website

> **Tagline:** READ • SIP • PURR  
> **Project Type:** Fictional Bookstore Café / Graphic & Web Design Portfolio Website  
> **Tech Stack:** Semantic HTML5, CSS3, Vanilla JavaScript (ES6+)  

---

## 1. Project Overview

**Purr & Pages** is a fictional independent bookstore café designed as an art-directed portfolio piece. The website weaves together three core themes: the pleasure of literature, the comfort of handcrafted coffee, and the gentle companionship of resident rescue cats.

The design features a warm, cosy palette (`#FFF8ED`, `#EADBC8`, `#6F4E37`, `#3E2B24`, `#C99A6B`, `#A8B5A0`), soft rounded typography, subtle paper textures, responsive layouts, real published book artwork, and custom interactive features.

---

## 2. File & Directory Structure

```text
PURR&PAGES/
├── purr-and-pages.html         # Single, self-contained HTML file (all CSS & JS embedded)
├── index.html                  # Semantic modular single-page website
├── README.md                   # Project documentation & asset attributions
├── css/
│   └── style.css               # Complete styling, CSS custom properties & media queries
├── js/
│   └── script.js               # Vanilla JS controller (search, filters, lightbox, validation, cursor)
└── assets/
    ├── icons/
    │   ├── favicon.svg         # Illustrated coffee cup + cat ears + open book
    │   └── paw-cursor.svg      # Single custom paw cursor vector
    └── images/
        ├── logo/               # Official brand logo (logo.png)
        ├── hero/               # hero-main.jpg (warm bookstore café interior)
        ├── about/              # about-corner.jpg, about-books.jpg, about-coffee.jpg
        ├── cats/               # 10 distinct cat portraits (cat-mochi.jpg, cat-biscuit.jpg, etc.)
        ├── books/              # 6 genre cards + 15 real OpenLibrary book covers
        ├── menu/               # Drinks, pastries, reader's toast, and cat treats
        ├── souvenirs/          # Branded merchandise (totes, mugs, brass clips, journals, etc.)
        └── gallery/            # 8 high-resolution moments & spaces photos
```

---

## 3. How to Run the Website Locally

1. **Direct Browser Launch:**
   - Double-click `index.html` or right-click and select **Open with...** -> your preferred browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
   - No build tools, Node.js, package managers, or local server installations are required for core features.

2. **Optional Local Web Server:**
   - If using VS Code: Right-click `index.html` and click **Open with Live Server**.
   - Or with Python (if installed): Run `python -m http.server 8000` in the directory and visit `http://localhost:8000`.

---

## 4. Logo Placement & Brand Integration

The official **Purr & Pages** logo is integrated as the primary visual brand identity:

1. **Asset Location:**
   ```text
   assets/images/logo/logo.png
   ```
2. **Placements:**
   - **Navigation Header:** Sits at the top-left on a warm cream translucent header (`rgba(255, 248, 237, 0.94)`), returning users to the top of the page when clicked.
   - **Hero Section:** Positioned prominently above the hero headline, immediately establishing brand authenticity.
   - **Footer:** Displayed inside a warm cream backing card (`#FFF8ED`) to maintain high contrast, generous clear space, and preserve its exact brown colouration on the deep espresso background.
3. **Preservation:** The logo's original typography, colour, aspect ratio (~4.51:1), and cat silhouette are completely preserved without distortion, filters, or recolouring.
4. **Fallback:** Should the image asset ever be removed, an inline vector-and-text fallback badge activates automatically.

---

## 5. Summary of Interactive Features

| Feature | Description |
| :--- | :--- |
| **Custom Paw Cursor** | Single illustrated paw that follows the pointer smoothly using `requestAnimationFrame`, scales up on interactive elements, and is disabled on touch screens and reduced-motion environments. |
| **Sticky Navigation** | Fixed header with translucent warm cream background and backdrop blur; auto-highlights active section on scroll; smooth scrolling with offset. |
| **Mobile Drawer** | Accessible off-canvas navigation menu with animated hamburger toggle, keyboard Escape close, and body scroll lock. |
| **Café Menu Filter** | Instant client-side category switching across Coffee, Tea, Matcha, Pastries, Light Bites, and Cat Treats without layout jumps or page reloads. |
| **Meet Our Bookshop Cats** | 10 resident cat profiles with individual storybook portraits, personality titles, quotes, favourite spots and activities, real-time category filtering, and modal popups. |
| **Book Nook Catalogue** | Dynamic catalogue populated from `booksData` with 15 real books with genuine cover artwork, title, author, genre badge, sample price in ₹, and description. |
| **Genre Discovery Cards** | Six visual genre cards (Romance, Fantasy, Mystery, Literary Fiction, YA, Classics) that filter the catalogue when clicked. |
| **Combined Book Search** | Real-time search by title, author, or genre working together with active genre filters, complete with result counts, clear control, and an illustrated empty state. |
| **Book Preview Modal** | Accessible dialog displaying enlarged cover, complete synopsis, sample price, and clear portfolio disclaimer. |
| **Gallery Lightbox** | Modal viewer supporting click-to-zoom, previous/next image navigation, image counter, Escape key closing, and focus management. |
| **Contact Form Validation** | Client-side validation for name length, email regex, topic selection, and minimum 15-character message with character counter and honest demo feedback alert. |
| **Dynamic Copyright** | Current year automatically generated via `new Date().getFullYear()`. |

---

## 6. External Assets & Licences

All photographic and cover assets have been downloaded and verified locally within `assets/images/`:

| Asset Category | Source / API | Usage & Licence |
| :--- | :--- | :--- |
| **Café Interiors, Coffee, Cats, Gallery** | [Unsplash](https://unsplash.com/license) | Royalty-free Unsplash Free Commercial License. Photography by various creators (Clay Banks, Nathan Dumlao, Amber Kipp, Kate Stone Matheson, etc.). |
| **Book Cover Artwork** | [Open Library](https://openlibrary.org) Covers API | Real cover artwork for *Pride and Prejudice*, *1984*, *The Great Gatsby*, *The Hobbit*, *The Night Circus*, *The Name of the Wind*, *The Thursday Murder Club*, *The Shadow of the Wind*, *And Then There Were None*, *The Book Thief*, *Where the Crawdads Sing*, *The Seven Husbands of Evelyn Hugo*, *Red, White & Royal Blue*, *Six of Crows*, and *The Little Prince*. (Fair use for educational/editorial portfolio demonstration). |
| **Typography** | [Google Fonts](https://fonts.google.com) | *Quicksand*, *Fredoka*, and *Nunito* licensed under the Open Font License (OFL). |
| **Icons & Cursor** | Custom SVG vectors | Handcrafted inline SVGs and standalone SVG vectors (`assets/icons/paw-cursor.svg`, `assets/icons/favicon.svg`). |

---

## 7. Portfolio Limitations & Honest Demonstrations

- **Fictional Entity:** Purr & Pages is an imagined bookstore café concept created for design and front-end portfolio purposes.
- **No Live Commerce:** Merchandise add-to-bag buttons and book preview actions are labeled as interactive demonstrations and do not connect to real financial processors or payment gateways.
- **Form Handling:** The contact form validates all fields in the browser and displays a friendly notice that entries are validated locally without sending data to an external server.
- **Cat Treat Notice:** The cat treats section contains an explicit note that real feline treats in a cat café must be veterinarian-approved and staff-administered to protect pet health.

---

## 8. Verification & Quality Checklist

- [x] HTML5 validation: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`).
- [x] All 54 local asset images downloaded, non-empty, and verified.
- [x] Zero external runtime JS dependencies (100% Vanilla JS).
- [x] Responsive layout tested for mobile (< 576px), tablet (< 860px), laptop (< 1024px), and desktop.
- [x] Keyboard accessibility: Escape key closes modals and mobile drawer; focus indicators visible on interactive controls.
- [x] WCAG color contrast standards observed across cream, espresso, and caramel elements.
- [x] `prefers-reduced-motion` and touch screen overrides implemented.
