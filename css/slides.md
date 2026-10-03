---
theme: default
background: '#F7F8FA'
title: CSS Fundamentals
info: A readable introduction to CSS, linking stylesheets, selectors, and combinators.
class: text-left
drawings:
  persist: false
transition: none
aspectRatio: '16/9'
canvasWidth: 1400
colorSchema: 'light'
fonts:
  sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
  mono: 'JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace'
---

<style>
@import './styles/index.css';
</style>

<!-- 1 -->
<div class="cover-slide">
  <h1>Cascading<br><span>Style Sheets</span></h1>
  <p class="cover-subtitle">A practical guide to styling HTML with rules, selectors, and reusable patterns.</p>
  <div class="code-chip"><span class="pink">h1</span> <span class="muted">{</span> <span class="blue">color</span><span class="muted">:</span> <span class="orange">#2563eb</span><span class="muted">;</span> <span class="muted">}</span></div>
</div>

---
layout: default
title: What CSS does
---

<div class="slide-head"><div class="eyebrow">01 / THE BIG IDEA</div><h2>CSS makes structure presentable</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block">
    <p class="lead">HTML describes what a page contains. CSS controls how that content looks and behaves on screen.</p>
    <p>CSS stands for <strong>Cascading Style Sheets</strong>. A stylesheet turns plain document structure into a readable interface by defining visual rules.</p>
  </div>
  <div class="stack-diagram">
    <div class="layer html-layer"><strong>HTML</strong><span>Structure and meaning</span></div>
    <div class="layer css-layer"><strong>CSS</strong><span>Presentation and layout</span></div>
    <div class="layer js-layer"><strong>JavaScript</strong><span>Interaction and behavior</span></div>
  </div>
</div>

---
layout: default
title: External stylesheet
---

<div class="slide-head"><div class="eyebrow">02 / CONNECT CSS</div><h2>External stylesheet</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">Keep CSS in its own file and link it from the HTML document.</p><p>This is the usual choice for real projects because one stylesheet can serve many pages.</p><div class="bottom-note">HTML loads the file with <code>&lt;link&gt;</code>.</div></div>
  <div class="connection-code"><div class="preview-label">index.html</div><pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    <span class="code-highlight">&lt;link rel=&quot;stylesheet&quot;
      href=&quot;style.css&quot;&gt;</span>
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello CSS&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
</div>

---
layout: default
title: Internal stylesheet
---

<div class="slide-head"><div class="eyebrow">03 / CONNECT CSS</div><h2>Internal stylesheet</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">Put a <code>&lt;style&gt;</code> block inside the HTML document.</p><p>Internal CSS keeps a small, page-specific style close to the markup it changes.</p><div class="bottom-note">Place the style block in <code>&lt;head&gt;</code>.</div></div>
  <div class="connection-code"><div class="preview-label">index.html</div><pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    <span class="code-highlight">&lt;style&gt;
      h1 { color: blue; }
    &lt;/style&gt;</span>
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello CSS&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
</div>

---
layout: default
title: Inline style
---

<div class="slide-head"><div class="eyebrow">04 / CONNECT CSS</div><h2>Inline style</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">Add a <code>style</code> attribute directly to one HTML element.</p><p>Inline CSS is useful for a one-off test, but repeated inline styles become difficult to maintain.</p><div class="bottom-note">Use it sparingly when the style belongs to one element only.</div></div>
  <div class="connection-code"><div class="preview-label">index.html</div><pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;body&gt;
    <span class="code-highlight">&lt;h1 style=&quot;color: blue;&quot;&gt;</span>
      Hello CSS
    &lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
</div>

---
layout: default
title: Anatomy of a CSS rule
---

<div class="slide-head"><div class="eyebrow">05 / THE SYNTAX</div><h2>A CSS rule has three parts</h2></div>

<div class="rule-layout">
  <div class="rule-code">
    <div class="code-line"><span class="pink">h1</span> <span class="muted">{</span></div>
    <div class="code-line indent"><span class="blue">color</span><span class="muted">:</span> <span class="orange">blue</span><span class="muted">;</span></div>
    <div class="code-line indent"><span class="blue">font-size</span><span class="muted">:</span> <span class="orange">2rem</span><span class="muted">;</span></div>
    <div class="code-line"><span class="muted">}</span></div>
  </div>
  <div class="rule-parts">
    <div><span class="part-dot pink-bg">1</span><div><strong>Selector</strong><p>Chooses the elements to style.</p></div></div>
    <div><span class="part-dot blue-bg">2</span><div><strong>Property</strong><p>Names the visual feature to change.</p></div></div>
    <div><span class="part-dot orange-bg">3</span><div><strong>Value</strong><p>Sets the result for that property.</p></div></div>
  </div>
</div>

---
layout: default
title: CSS selector families
---

<div class="slide-head"><div class="eyebrow">06 / SELECTORS</div><h2>Selectors choose what gets styled</h2></div>

<div class="selector-map">
  <div class="selector-row"><span class="selector-symbol">*</span><div><strong>Universal</strong><p>Every element on the page</p></div><code>* { }</code></div>
  <div class="selector-row"><span class="selector-symbol">E</span><div><strong>Type</strong><p>Every element of a given type</p></div><code>h1 { }</code></div>
  <div class="selector-row"><span class="selector-symbol">.</span><div><strong>Class</strong><p>Elements sharing a class name</p></div><code>.title { }</code></div>
  <div class="selector-row"><span class="selector-symbol">#</span><div><strong>ID</strong><p>The element with one unique id</p></div><code>#heading { }</code></div>
</div>

---
layout: default
title: Universal and type selectors
---

<div class="slide-head"><div class="eyebrow">07 / BASIC SELECTORS</div><h2>Start with the element itself</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Universal selector</div><pre><code>* {
  box-sizing: border-box;
}</code></pre><p>Useful for a small global reset or a rule that should apply everywhere.</p></div>
  <div class="selector-example"><div class="example-label">Type selector</div><pre><code>h1 {
  color: #2563eb;
}</code></pre><p>Targets every element with that HTML tag, such as every <code>&lt;h1&gt;</code>.</p></div>
</div>

<div class="callout"><strong>Tip:</strong> Type selectors are clear and predictable, but they can be broad. Add a class when a rule needs a narrower target.</div>

---
layout: default
title: Class, ID, and attribute selectors
---

<div class="slide-head"><div class="eyebrow">08 / PRECISE TARGETING</div><h2>Use names and attributes for control</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Class</div><pre><code>.title {
  font-weight: 700;
}</code></pre><p>Reusable. Multiple elements can share one class.</p></div>
  <div class="selector-example"><div class="example-label">ID</div><pre><code>#heading {
  margin-top: 0;
}</code></pre><p>Specific. Use one id only once per page.</p></div>
  <div class="selector-example"><div class="example-label">Attribute</div><pre><code>a[href="hello.html"] {
  color: green;
}</code></pre><p>Matches elements with a specific attribute value.</p></div>
</div>

---
layout: default
title: Grouping selectors
---

<div class="slide-head"><div class="eyebrow">09 / LESS REPETITION</div><h2>One rule can style several targets</h2></div>

<div class="grouping-layout">
  <div class="rule-code large"><div><span class="pink">h1</span><span class="muted">,</span> <span class="pink">p</span><span class="muted">,</span> <span class="pink">.link</span><span class="muted">,</span> <span class="pink">#title</span> <span class="muted">{</span></div><div class="indent"><span class="blue">font-family</span><span class="muted">:</span> <span class="orange">sans-serif</span><span class="muted">;</span></div><div class="indent"><span class="blue">color</span><span class="muted">:</span> <span class="orange">#172033</span><span class="muted">;</span></div><div><span class="muted">}</span></div></div>
  <div class="copy-block"><p class="lead">Separate selectors with commas when they should share the same declarations.</p><p>Grouping keeps related rules together and makes a stylesheet easier to scan.</p></div>
</div>

---
layout: default
title: Descendant and child selectors
---

<div class="slide-head"><div class="eyebrow">10 / RELATIONSHIPS</div><h2>Selectors can describe structure</h2></div>

<div class="two-col">
  <div class="relationship"><div class="relationship-title"><code>main p</code><span>Descendant</span></div><pre><code>main p {
  line-height: 1.7;
}</code></pre><p>Matches every paragraph inside <code>&lt;main&gt;</code>, even when nested deeper.</p></div>
  <div class="relationship"><div class="relationship-title"><code>p &gt; span</code><span>Direct child</span></div><pre><code>p &gt; span {
  color: #db2777;
}</code></pre><p>Matches only a <code>&lt;span&gt;</code> that is a direct child of a paragraph.</p></div>
</div>

---
layout: default
title: Common pseudo-classes
---

<div class="slide-head"><div class="eyebrow">11 / PSEUDO-CLASSES</div><h2>Common interaction pseudo-classes</h2></div>

<div class="pseudo-grid">
  <div class="pseudo-card"><code>:hover</code><p>When the pointer is over an element</p><pre><code>button:hover {
  background: blue;
}</code></pre></div>
  <div class="pseudo-card"><code>:focus</code><p>When an input receives focus</p><pre><code>input:focus {
  outline: 2px solid blue;
}</code></pre></div>
  <div class="pseudo-card"><code>:active</code><p>While an element is being pressed</p><pre><code>button:active {
  transform: scale(.98);
}</code></pre></div>
</div>

---
layout: default
title: Structural pseudo-classes
---

<div class="slide-head"><div class="eyebrow">12 / PSEUDO-CLASSES</div><h2>Common structural pseudo-classes</h2></div>

<div class="pseudo-grid">
  <div class="pseudo-card"><code>:first-child</code><p>Targets the first child in a parent</p><pre><code>li:first-child {
  font-weight: 700;
}</code></pre></div>
  <div class="pseudo-card"><code>:nth-child()</code><p>Targets a chosen child position</p><pre><code>li:nth-child(2) {
  color: purple;
}</code></pre></div>
  <div class="pseudo-card"><code>:last-child</code><p>Targets the final child in a parent</p><pre><code>li:last-child {
  border-bottom: 0;
}</code></pre></div>
</div>

---
layout: default
title: Common pseudo-elements
---

<div class="slide-head"><div class="eyebrow">13 / PSEUDO-ELEMENTS</div><h2>Useful pseudo-elements</h2></div>

<div class="pseudo-grid">
  <div class="pseudo-card"><code>::before</code><p>Insert content before an element</p><pre><code>.note::before {
  content: "Tip: ";
}</code></pre></div>
  <div class="pseudo-card"><code>::after</code><p>Insert content after an element</p><pre><code>.link::after {
  content: " ↗";
}</code></pre></div>
  <div class="pseudo-card"><code>::first-letter</code><p>Style the first letter</p><pre><code>p::first-letter {
  font-size: 2rem;
}</code></pre></div>
</div>

---
layout: default
title: Common pseudo-elements
---

<div class="slide-head"><div class="eyebrow">14 / PSEUDO-ELEMENTS</div><h2>Useful pseudo-elements</h2></div>

<div class="pseudo-grid pseudo-grid-two">
  <div class="pseudo-card"><code>::first-line</code><p>Style the first line of text</p><pre><code>p::first-line {
  font-weight: 700;
}</code></pre></div>
  <div class="pseudo-card"><code>::selection</code><p>Style text selected by the user</p><pre><code>::selection {
  background: gold;
}</code></pre></div>
</div>

---
layout: default
title: CSS fundamentals recap
---

<div class="slide-head"><div class="eyebrow">15 / RECAP</div><h2>From document structure to visual design</h2></div>

<div class="recap">
  <div><span>01</span><strong>Connect</strong><p>Prefer an external stylesheet for shared styles.</p></div>
  <div><span>02</span><strong>Write rules</strong><p>Pair a selector with property and value.</p></div>
  <div><span>03</span><strong>Target carefully</strong><p>Use type, class, id, attribute, and relationship selectors with intent.</p></div>
</div>

<div class="closing-code"><span class="pink">.next-step</span> <span class="muted">{</span> <span class="blue">keep-practicing</span><span class="muted">:</span> <span class="orange">true</span><span class="muted">;</span> <span class="muted">}</span></div>
