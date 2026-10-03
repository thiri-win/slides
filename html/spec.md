# HTML Presentation Slides Specification (Slidev)

## 1. Project Overview
- **Project Title:** HTML Fundamentals: Building the Modern Web
- **Location:** `/Users/thiriwin/Foundation/slides/html`
- **Framework:** [Slidev](https://sli.dev/) (`@slidev/cli`, `@slidev/theme-default`)
- **Slide Count:** Exactly 15 slides
- **Target Audience:** Beginners to intermediate developers, students, and educators
- **Aspect Ratio & Display:** Widescreen 16:9 (`aspectRatio: '16/9'`, optimized for full-width, full-height browser presentation)
- **Typography:** Modern Sans-Serif font stack (`Inter`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `sans-serif`)
- **Color Theme:** Light, clean, and modern with HTML5 signature warm orange accents:
  - **Primary Brand / Accent:** HTML5 Orange (`#E34F26` / `#F06529`)
  - **Secondary Accent:** Deep Amber / Coral (`#DD4B25`, `#C73D18`)
  - **Background:** Crisp Light Cream / Off-White (`#FAFAFA` / `#FFFFFF`)
  - **Card / Surface:** Pure White (`#FFFFFF`) with subtle border (`#E2E8F0` / `#F1F5F9`)
  - **Text Primary:** Slate Charcoal (`#0F172A`)
  - **Text Secondary / Muted:** Slate Gray (`#64748B`)
  - **Code Background:** Light warm code box (`#F8FAFC` / `#FFF7ED`) with Prism/Shiki syntax highlighting
- **Export & Print Capabilities:**
  - Full print-to-PDF support via `@slidev/cli` export (`slidev export --format pdf`)
  - CSS print media rules (`@media print`) ensuring zero overflow clipping, proper page breaks, and high-DPI rendering

---

## 2. Project Architecture & File Structure

```
html/
├── slides.md              # Main Slidev presentation entrypoint with all 15 slides
├── package.json           # Scripts and dependencies (slidev, playwright-chromium)
├── components/            # Custom Vue components (optional visual badges/cards)
│   └── HtmlTagBadge.vue   # Visual tag representation component
├── styles/
│   └── index.css          # Custom typography, print styles, and HTML color variables
└── spec.md                # This specification document
```

---

## 3. Detailed Slide-by-Slide Content & Design Plan

### Slide 1: Title & Introduction
- **Layout:** `cover` (centered hero layout with clean gradient banner)
- **Title:** `HTML5: The Skeleton of the Web`
- **Subtitle:** *Understanding the core building blocks of every website*
- **Visuals & Highlights:**
  - Official HTML5 badge / shield accent
  - Author / Presenter info & presentation date
  - Light orange gradient badge: `<tag>content</tag>`
- **Animations:** Subtle fade-in of title, followed by slide-in for subtitle and presenter tag (`v-motion`).

---

### Slide 2: What is HTML?
- **Layout:** `two-cols` (left: conceptual breakdown; right: web triad diagram)
- **Content:**
  - **HyperText Markup Language**: What hypertext and markup mean.
  - Not a programming language, but a structural document language.
  - The Web Triad comparison:
    - **HTML**: Structure & Content (The Skeleton)
    - **CSS**: Presentation & Styling (The Skin & Clothes)
    - **JavaScript**: Behavior & Interactivity (The Muscles & Brain)
- **Animations:** Step-by-step `v-click` revealing HTML, CSS, and JS roles sequentially.

---

### Slide 3: Anatomy of an HTML Document
- **Layout:** `two-cols` (left: code snippet; right: breakdown of document nodes)
- **Content & Code:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document Title</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>
  ```
- **Key Concepts:**
  - `<!DOCTYPE html>`: Telling the browser to use modern HTML5 standards.
  - `<head>`: Machine-readable metadata (title, charset, responsive viewport).
  - `<body>`: Visible user content rendered by browser engine.
- **Animations:** `v-click` highlighting each part of the document anatomy.

---

### Slide 4: Anatomy of an HTML Element
- **Layout:** `default` (interactive diagram with visual annotation cards)
- **Content & Visual Breakdown:**
  - An element consists of:
    1. **Opening Tag**: `<tag>` (defines element name and attributes)
    2. **Element Content**: The text or nested child nodes inside
    3. **Closing Tag**: `</tag>` (signals termination)
  - **Void / Self-Closing Elements**: `<img />`, `<input />`, `<br>`, `<meta>`, `<hr>` (no closing tag, no text content).
- **Animations:** Progressive highlight showing opening tag -> content -> closing tag using `v-click`.

---

### Slide 5: HTML Attributes in Depth
- **Layout:** `two-cols` (left: attribute syntax rules; right: common attributes table)
- **Content & Code:**
  ```html
  <!-- Syntax: name="value" -->
  <a href="https://example.com" target="_blank" class="nav-link">Visit Website</a>
  ```
- **Key Attribute Types:**
  - **Global Attributes:** `id` (unique identifier), `class` (styling & JS hooks), `title` (tooltip), `hidden`, `style`.
  - **Specific Attributes:** `href` on `<a>`, `src` and `alt` on `<img>`.
  - **Boolean Attributes:** `disabled`, `required`, `checked` (true if present).
- **Animations:** Sequential `v-click` highlighting attribute name, equals sign, and quoted value.

---

### Slide 6: Essential Text Elements
- **Layout:** `two-cols` (left: typography elements; right: live rendered preview)
- **Content & Code:**
  - Headings: `<h1>` through `<h6>` (hierarchical document outline)
  - Paragraphs: `<p>`
  - Inline Emphasis: `<strong>` (semantic importance / bold), `<em>` (stress emphasis / italic)
  - Break elements: `<br>` (line break), `<hr>` (thematic horizontal rule)
- **Visuals:** Visual side-by-side comparison of raw HTML tags vs browser visual rendering.
- **Animations:** `v-click` stepping down from `<h1>` to inline text tags.

---

### Slide 7: Hyperlinks & Navigation
- **Layout:** `default` (grid of link patterns and practices)
- **Content & Code:**
  ```html
  <!-- External link -->
  <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>

  <!-- Internal page anchor link -->
  <a href="#section-contact">Jump to Contact</a>

  <!-- Email and Telephone links -->
  <a href="mailto:user@example.com">Email Us</a>
  <a href="tel:+1234567890">Call Us</a>
  ```
- **Key Concepts:** `target="_blank"`, security best practice with `rel="noopener noreferrer"`, internal hash fragment navigation.
- **Animations:** Step-by-step reveal of link behaviors.

---

### Slide 8: Working with Images & Media
- **Layout:** `two-cols` (left: code & attributes; right: accessibility & responsive practices)
- **Content & Code:**
  ```html
  <figure>
    <img 
      src="photo.jpg" 
      alt="A descriptive description for accessibility"
      width="600" 
      height="400"
      loading="lazy"
    >
    <figcaption>Figure 1: Scenic mountain view at sunrise.</figcaption>
  </figure>
  ```
- **Key Best Practices:**
  - Why `alt` text is critical for Screen Readers and fallback.
  - `loading="lazy"` for modern performance.
  - `<figure>` and `<figcaption>` for semantically captioned media.
- **Animations:** Highlight `alt` and `loading="lazy"` with `v-click`.

---

### Slide 9: Lists in HTML
- **Layout:** `two-cols` (left: list types & code; right: visual hierarchy and use cases)
- **Content & Code:**
  - **Unordered List (`<ul>`):** Bulleted, order does not matter (navigation menus, tags).
  - **Ordered List (`<ol>`):** Numbered, sequence matters (instructions, rankings).
  - **Description List (`<dl>`, `<dt>`, `<dd>`):** Terms and definitions (glossaries, key-value data).
- **Code:**
  ```html
  <ol type="1">
    <li>Parse HTML document</li>
    <li>Load external stylesheets</li>
    <li>Render visual DOM</li>
  </ol>
  ```
- **Animations:** `v-click` on list items appearing in sequence.

---

### Slide 10: Structural & Semantic HTML5
- **Layout:** `two-cols` (left: semantic tree schematic; right: Div Soup vs Semantic markup)
- **Content:**
  - The problem of `<div>` soup (`<div class="header">`, `<div class="footer">`).
  - Semantic elements introduced in HTML5:
    - `<header>`: Page or section banner
    - `<nav>`: Navigation links
    - `<main>`: Central unique content of the page
    - `<section>`: Thematic grouping of content
    - `<article>`: Self-contained composition (blog post, card)
    - `<aside>`: Tangential sidebar content
    - `<footer>`: Author, copyright, legal links
- **Benefits:** SEO ranking, accessibility (screen readers navigate by landmarks), maintainability.
- **Animations:** Comparison swap between generic divs and semantic elements with `v-click`.

---

### Slide 11: Tables for Tabular Data
- **Layout:** `two-cols` (left: table structure code; right: formatted preview card)
- **Content & Code:**
  ```html
  <table>
    <thead>
      <tr>
        <th>Tag</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&lt;th&gt;</td>
        <td>Table Header Cell</td>
      </tr>
      <tr>
        <td>&lt;td&gt;</td>
        <td>Table Standard Data Cell</td>
      </tr>
    </tbody>
  </table>
  ```
- **Key Concepts:** `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`, `colspan` & `rowspan`.
- **Note:** Clarifying that tables are for *data*, not layout!
- **Animations:** Rows highlighted one-by-one with `v-click`.

---

### Slide 12: HTML Forms & User Input
- **Layout:** `two-cols` (left: form markup; right: control gallery)
- **Content & Code:**
  ```html
  <form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter username">

    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Register</button>
  </form>
  ```
- **Key Controls:**
  - `<input>` types: `text`, `password`, `email`, `number`, `checkbox`, `radio`, `date`.
  - Associating `<label for="id">` for accessibility and tap targets.
  - Multi-line `<textarea>` and dropdown `<select>`.
- **Animations:** `v-click` showing individual input types and label association.

---

### Slide 13: Form Attributes & Validation
- **Layout:** `two-cols` (left: validation attributes; right: native browser validation feedback)
- **Content & Code:**
  - Built-in HTML5 client-side validation without JavaScript:
    - `required`: Field must not be empty.
    - `minlength` / `maxlength`: String length constraints.
    - `min` / `max`: Numeric limits.
    - `pattern="[A-Za-z]{3}"`: Regular expression matching.
    - `disabled` vs `readonly`: Difference in form submission and focus.
- **Visuals:** Clean callout card showing standard browser validation bubbles.
- **Animations:** Step-through attribute demonstrations.

---

### Slide 14: HTML Best Practices & Accessibility (a11y)
- **Layout:** `default` (3-column rule card layout)
- **Content:**
  1. **Semantic Validity**: Always use proper tags (`<button>` instead of `<div onclick="...">`).
  2. **Accessibility (a11y)**:
     - Meaningful `alt` text for images.
     - Always pair `<input>` with `<label>`.
     - Maintain logical heading order (`h1` -> `h2` -> `h3`, never skip).
  3. **Clean Markup**: Lowercase tag names, quoted attributes, correct nesting, proper indentation.
- **Visuals:** Bad vs Good code comparison panels.
- **Animations:** Bad vs Good comparison with red/green badge indicators.

---

### Slide 15: Summary, Next Steps & Resources
- **Layout:** `intro` / summary conclusion slide
- **Content:**
  - **Summary**:
    - HTML provides structure, semantics, and document hierarchy.
    - Attributes enrich elements with metadata and functionality.
    - Semantic HTML creates accessible, discoverable, and future-proof websites.
  - **Next Steps**:
    - Style with **CSS3** (Flexbox, Grid, Responsive Design).
    - Add behavior with **JavaScript / TypeScript**.
  - **Recommended Resources**:
    - MDN Web Docs (Mozilla Developer Network)
    - W3C HTML Specifications
    - web.dev Learn HTML
- **Animations:** Final checkmark summary points animated sequentially.

---

## 4. Styling, Fonts, & Layout Specifications

1. **Aspect Ratio & Sizing:**
   - Slidev standard `16/9` widescreen.
   - Fits standard 1920x1080, 1440x900, 1366x768, and 4K displays seamlessly in full-width & full-height browser view.
2. **Font Stack:**
   ```css
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   ```
3. **Color Tokens:**
   ```css
   :root {
     --html-orange: #E34F26;
     --html-orange-light: #FFF5F2;
     --html-orange-dark: #C73D18;
     --text-color: #1E293B;
     --bg-color: #FFFFFF;
     --card-bg: #F8FAFC;
     --border-color: #E2E8F0;
   }
   ```
4. **PDF Printing Optimization:**
   ```css
   @media print {
     .slidev-layout {
       background: #ffffff !important;
       color: #000000 !important;
       -webkit-print-color-adjust: exact;
     }
   }
   ```
5. **Interactive & Animated Components:**
   - Use Slidev built-in `<v-click>` tags and slide transitions (`transition: slide-left`).
   - Clean, lightweight badge components for HTML tags.

---

## 5. Implementation Steps (Upon Approval)
1. Initialize `package.json` with `@slidev/cli` and `@slidev/theme-default` in `/Users/thiriwin/Foundation/slides/html`.
2. Install dependencies via `npm install`.
3. Create `slides.md` containing all 15 slides with exact frontmatter configurations, layouts, and animations.
4. Create `styles/index.css` for custom sans-serif typography, HTML orange color scheme, and print rules.
5. Verify presentation build and preview using `npm run build` or `npx slidev --help`.
6. Test PDF export capability and browser rendering.
