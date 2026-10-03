---
theme: default
background: '#F7F8FA'
title: HTML5 Fundamentals
info: HTML slide content reconstructed from the supplied Keynote deck.
class: text-left
drawings:
  persist: false
transition: none
aspectRatio: '16/9'
canvasWidth: 1400
colorSchema: light
fonts:
  sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
  mono: 'JetBrains Mono, SFMono-Regular, Consolas, Liberation Mono, monospace'
---

<style>
@import './styles/index.css';
</style>

<div class="cover-slide">
  <h1>HTML<span>5</span></h1>
  <p class="cover-subtitle">Hyper Text Markup Language</p>
  <div class="code-chip"><span class="pink">&lt;html&gt;</span></div>
</div>

---
layout: default
title: HTML page structure
---

<div class="slide-head"><div class="eyebrow">01 / THE BIG IDEA</div><h2>HTML give a page structure</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block">
    <p class="lead">HTML gives a page structure. CSS gives it visual style. JavaScript lets it respond.</p>
    <p>JavaScript can read information, make decisions, update the page, and react when someone clicks, types, or submits a form.</p>
  </div>
  <div class="stack-diagram">
    <div class="layer html-layer"><strong>HTML</strong><span>Structure and meaning</span></div>
    <div class="layer css-layer"><strong>CSS</strong><span>Presentation and layout</span></div>
    <div class="layer js-layer"><strong>JavaScript</strong><span>Behavior and interaction</span></div>
  </div>
</div>

layout: default
title: Heading examples
---

<div class="slide-head"><div class="eyebrow">02 / HEADING LEVELS</div><h2>Heading elements from h1 to h6</h2></div>

<p class="lead">Use the six heading levels to represent page titles and subheadings.</p>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">H1 · Main title</div><pre><code><span class="blue">&lt;h1&gt;</span><span class="orange">Main title</span><span class="blue">&lt;/h1&gt;</span></code></pre></div>
  <div class="selector-example"><div class="example-label">H2 · Subtitle</div><pre><code><span class="blue">&lt;h2&gt;</span><span class="orange">Subtitle</span><span class="blue">&lt;/h2&gt;</span></code></pre></div>
  <div class="selector-example"><div class="example-label">H3 · Section</div><pre><code><span class="blue">&lt;h3&gt;</span><span class="orange">Section</span><span class="blue">&lt;/h3&gt;</span></code></pre></div>
  <div class="selector-example"><div class="example-label">H4 · Subsection</div><pre><code><span class="blue">&lt;h4&gt;</span><span class="orange">Subsection</span><span class="blue">&lt;/h4&gt;</span></code></pre></div>
  <div class="selector-example"><div class="example-label">H5 · Detail</div><pre><code><span class="blue">&lt;h5&gt;</span><span class="orange">Detail</span><span class="blue">&lt;/h5&gt;</span></code></pre></div>
  <div class="selector-example"><div class="example-label">H6 · Smaller heading</div><pre><code><span class="blue">&lt;h6&gt;</span><span class="orange">Smaller heading</span><span class="blue">&lt;/h6&gt;</span></code></pre></div>
</div>

---
layout: default
title: HTML document structure
---

<div class="slide-head"><div class="eyebrow">03 / DOCUMENT STRUCTURE</div><h2>An HTML document</h2></div>

<div class="context-layout">
  <div class="copy-block"><p class="lead">Start with the document type, then the root, head, and body.</p><p>The head contains page information. The body contains the elements shown on the web page.</p></div>
  <div><div class="preview-label">Document outline</div><pre><code><span class="blue">&lt;!DOCTYPE html&gt;</span>
<span class="blue">&lt;html</span> <span class="pink">lang</span>=<span class="orange">"en"</span><span class="blue">&gt;</span>
  <span class="blue">&lt;head&gt;</span>
    <span class="blue">&lt;meta</span> <span class="pink">charset</span>=<span class="orange">"UTF-8"</span><span class="blue">&gt;</span>
    <span class="blue">&lt;title&gt;</span><span class="orange">Profile</span><span class="blue">&lt;/title&gt;</span>
    <span class="blue">&lt;link</span> <span class="pink">rel</span>=<span class="orange">"stylesheet"</span> <span class="pink">href</span>=<span class="orange">"style.css"</span><span class="blue">&gt;</span>
  <span class="blue">&lt;/head&gt;</span>
  <span class="blue">&lt;body&gt;</span>
    <span class="muted">&lt;!-- more elements here --&gt;</span>
  <span class="blue">&lt;/body&gt;</span>
<span class="blue">&lt;/html&gt;</span></code></pre></div>
</div>

---
layout: default
title: What is HTML?
---

<div class="slide-head"><div class="eyebrow">04 / PAGE STRUCTURE</div><h2>What is <span class="cover-topic">HTML</span>?</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block">
    <p class="lead">HTML stands for Hyper Text Markup Language.</p>
    <p>It describes the structure and content of a web page.</p>
    <div class="three-col compact">
      <div class="selector-example"><div class="example-label">Hyper Text</div><p>Links connect pages.</p></div>
      <div class="selector-example"><div class="example-label">Markup</div><p>Tags describe content.</p></div>
      <div class="selector-example"><div class="example-label">Language</div><p>Elements form a document.</p></div>
    </div>
  </div>
  <div class="stack-diagram">
    <div class="example-label">A web page</div>
    <div class="layer html-layer"><strong>Root</strong><span>&lt;html&gt;</span></div>
    <div class="layer css-layer"><strong>Head</strong><span>&lt;meta&gt;, &lt;title&gt;, &lt;link&gt;</span></div>
    <div class="layer js-layer"><strong>Body</strong><span>Text, images, buttons, video, audio</span></div>
  </div>
</div>

---
layout: default
title: HTML element
---

<div class="slide-head"><div class="eyebrow">05 / ELEMENTS</div><h2>An HTML element</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">An element combines tags and content.</p><div class="rule-parts"><div><span class="part-dot pink-bg">1</span><div><strong>Opening tag</strong><p>Starts the element and can hold attributes.</p></div></div><div><span class="part-dot blue-bg">2</span><div><strong>Content</strong><p>Text or other nested elements.</p></div></div><div><span class="part-dot orange-bg">3</span><div><strong>Closing tag</strong><p>A slash marks the end.</p></div></div></div></div>
  <div class="connection-code"><div class="preview-label">Element example</div><pre><code><span class="blue">&lt;h1&gt;</span><span class="orange">Hello, World</span><span class="blue">&lt;/h1&gt;</span></code></pre><div class="three-col compact"><div class="selector-example"><div class="example-label">Opening</div><p><code>&lt;h1&gt;</code></p></div><div class="selector-example"><div class="example-label">Content</div><p>Hello, World</p></div><div class="selector-example"><div class="example-label">Closing</div><p><code>&lt;/h1&gt;</code></p></div></div></div>
</div>

---
layout: default
title: Unordered list
---

<div class="slide-head"><div class="eyebrow">07 / LISTS</div><h2>Unordered list</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">Use <code>&lt;ul&gt;</code> for a list whose items do not have a required order.</p><p>List items are written inside <code>&lt;li&gt;</code> elements.</p></div>
  <div class="context-layout"><div class="selector-example"><div class="preview-label">HTML</div><pre><code><span class="blue">&lt;ul&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">HTML</span><span class="blue">&lt;/li&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">CSS</span><span class="blue">&lt;/li&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">JavaScript</span><span class="blue">&lt;/li&gt;</span>
<span class="blue">&lt;/ul&gt;</span></code></pre></div><div class="selector-example"><div class="preview-label">List</div><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></div></div>
</div>

---
layout: default
title: Ordered list
---

<div class="slide-head"><div class="eyebrow">08 / LISTS</div><h2>Ordered list</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">Use <code>&lt;ol&gt;</code> when the order of the list matters.</p><p>Place each item in an <code>&lt;li&gt;</code> element.</p></div>
  <div class="context-layout"><div class="selector-example"><div class="preview-label">HTML</div><pre><code><span class="blue">&lt;ol&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">First</span><span class="blue">&lt;/li&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">Second</span><span class="blue">&lt;/li&gt;</span>
  <span class="blue">&lt;li&gt;</span><span class="orange">Third</span><span class="blue">&lt;/li&gt;</span>
<span class="blue">&lt;/ol&gt;</span></code></pre></div><div class="selector-example"><div class="preview-label">List</div><ol><li>First</li><li>Second</li><li>Third</li></ol></div></div>
</div>

---
layout: default
title: Table element
---

<div class="slide-head"><div class="eyebrow">09 / TABLES</div><h2>Table element</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">A table organizes data into rows and columns.</p><p><code>&lt;tr&gt;</code> creates a row. Cells hold the data and headings.</p><div class="bottom-note">Choose a table for tabular data.</div></div>
  <div class="two-col compact"><div class="selector-example"><div class="example-label">&lt;table&gt;</div><h3>Table</h3><p>Organizes tabular data.</p></div><div class="selector-example"><div class="example-label">&lt;tr&gt;</div><h3>Table row</h3><p>Groups cells in a row.</p></div><div class="selector-example"><div class="example-label">&lt;th&gt;</div><h3>Heading cell</h3><p>Names a column.</p></div><div class="selector-example"><div class="example-label">&lt;td&gt;</div><h3>Data cell</h3><p>Holds a value.</p></div></div>
</div>

---
layout: default
title: Table code
---

<div class="slide-head"><div class="eyebrow">10 / TABLES</div><h2>Table code</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">Build a table with a heading row and data rows.</p><p>Keep each value in the appropriate heading or data cell.</p></div>
  <div class="connection-code"><div class="preview-label">HTML</div><pre><code><span class="blue">&lt;table&gt;</span>
  <span class="blue">&lt;thead&gt;</span>
    <span class="blue">&lt;tr&gt;</span><span class="blue">&lt;th&gt;</span><span class="orange">ID</span><span class="blue">&lt;/th&gt;</span><span class="blue">&lt;th&gt;</span><span class="orange">Title</span><span class="blue">&lt;/th&gt;</span><span class="blue">&lt;th&gt;</span><span class="orange">Total</span><span class="blue">&lt;/th&gt;</span><span class="blue">&lt;/tr&gt;</span>
  <span class="blue">&lt;/thead&gt;</span>
  <span class="blue">&lt;tbody&gt;</span>
    <span class="blue">&lt;tr&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">1</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">Apple</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">$10</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;/tr&gt;</span>
    <span class="blue">&lt;tr&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">2</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">Mango</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;td&gt;</span><span class="orange">$15</span><span class="blue">&lt;/td&gt;</span><span class="blue">&lt;/tr&gt;</span>
  <span class="blue">&lt;/tbody&gt;</span>
<span class="blue">&lt;/table&gt;</span></code></pre></div>
</div>

---
layout: default
title: Image element
---

<div class="slide-head"><div class="eyebrow">11 / MEDIA</div><h2>Image element</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">Use an image element to place an image on a web page.</p><p><code>src</code> identifies the source path. <code>alt</code> provides alternative text.</p></div>
  <div class="connection-code"><div class="preview-label">Image markup</div><pre><code><span class="blue">&lt;img</span> <span class="pink">src</span>=<span class="orange">"/images/test.png"</span>
     <span class="pink">alt</span>=<span class="orange">"Test Image"</span> <span class="blue">/&gt;</span></code></pre><div class="selector-example"><div class="example-label">Image attributes</div><p><code>src</code> — source path</p><p><code>alt</code> — alternative text</p></div></div>
</div>

---
layout: default
title: Anchor element
---

<div class="slide-head"><div class="eyebrow">12 / LINKS</div><h2>Anchor element</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">The <code>&lt;a&gt;</code> element links to a destination.</p><p>Use a web address, email address, phone number, file, or page section as a destination.</p></div>
  <div class="connection-code"><div class="preview-label">Link examples</div><pre><code><span class="blue">&lt;a</span> <span class="pink">href</span>=<span class="orange">"https://hello.com"</span><span class="blue">&gt;</span><span class="orange">Website</span><span class="blue">&lt;/a&gt;</span>
<span class="blue">&lt;a</span> <span class="pink">href</span>=<span class="orange">"mailto:contact@example.com"</span><span class="blue">&gt;</span><span class="orange">Email</span><span class="blue">&lt;/a&gt;</span>
<span class="blue">&lt;a</span> <span class="pink">href</span>=<span class="orange">"tel:+959123456"</span><span class="blue">&gt;</span><span class="orange">Call</span><span class="blue">&lt;/a&gt;</span>
<span class="blue">&lt;a</span> <span class="pink">href</span>=<span class="orange">"myprofile.png"</span> <span class="pink">download</span><span class="blue">&gt;</span><span class="orange">Download picture</span><span class="blue">&lt;/a&gt;</span>
<span class="blue">&lt;a</span> <span class="pink">href</span>=<span class="orange">"#heading"</span><span class="blue">&gt;</span><span class="orange">Jump to heading</span><span class="blue">&lt;/a&gt;</span></code></pre></div>
</div>

---
layout: default
title: Form element
---

<div class="slide-head"><div class="eyebrow">13 / FORMS</div><h2>Form element</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">A form groups controls that collect user information.</p><p>The form uses <code>action</code> and <code>method</code> attributes. The Keynote names <code>GET</code> and <code>POST</code>.</p></div>
  <div class="connection-code"><div class="preview-label">Form structure</div><pre><code><span class="blue">&lt;form</span> <span class="pink">action</span>=<span class="orange">""</span> <span class="pink">method</span>=<span class="orange">"GET"</span><span class="blue">&gt;</span>
  <span class="muted">&lt;!-- input controls --&gt;</span>
<span class="blue">&lt;/form&gt;</span></code></pre><div class="three-col compact"><div class="selector-example"><div class="example-label">action</div><p>Form destination</p></div><div class="selector-example"><div class="example-label">method</div><p>GET or POST</p></div></div></div>
</div>

---
layout: default
title: Input element
---

<div class="slide-head"><div class="eyebrow">14 / FORMS</div><h2>Input element</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">The input type determines the kind of value a field accepts.</p><p>The Keynote examples include text, email, password, number, radio, and checkbox.</p></div>
  <div class="three-col compact">
    <div class="selector-example"><div class="example-label">Text</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"text"</span><span class="blue">&gt;</span></code></pre></div>
    <div class="selector-example"><div class="example-label">Email</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"email"</span><span class="blue">&gt;</span></code></pre></div>
    <div class="selector-example"><div class="example-label">Password</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"password"</span><span class="blue">&gt;</span></code></pre></div>
    <div class="selector-example"><div class="example-label">Number</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"number"</span><span class="blue">&gt;</span></code></pre></div>
    <div class="selector-example"><div class="example-label">Radio</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"radio"</span><span class="blue">&gt;</span></code></pre></div>
    <div class="selector-example"><div class="example-label">Checkbox</div><pre><code><span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"checkbox"</span><span class="blue">&gt;</span></code></pre></div>
  </div>
</div>

---
layout: default
title: Select element
---

<div class="slide-head"><div class="eyebrow">15 / FORMS</div><h2>Select element</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">A select element presents a dropdown list of choices.</p><p>Add each choice as an <code>&lt;option&gt;</code> inside <code>&lt;select&gt;</code>.</p></div>
  <div class="connection-code"><div class="preview-label">Dropdown choices</div><pre><code><span class="blue">&lt;select&gt;</span>
  <span class="blue">&lt;option</span> <span class="pink">value</span>=<span class="orange">"html"</span><span class="blue">&gt;</span><span class="orange">HTML</span><span class="blue">&lt;/option&gt;</span>
  <span class="blue">&lt;option</span> <span class="pink">value</span>=<span class="orange">"css"</span><span class="blue">&gt;</span><span class="orange">CSS</span><span class="blue">&lt;/option&gt;</span>
  <span class="blue">&lt;option</span> <span class="pink">value</span>=<span class="orange">"js"</span><span class="blue">&gt;</span><span class="orange">JavaScript</span><span class="blue">&lt;/option&gt;</span>
<span class="blue">&lt;/select&gt;</span></code></pre></div>
</div>

---
layout: default
title: Label element
---

<div class="slide-head"><div class="eyebrow">16 / FORMS</div><h2>Label element</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">A label names an input field.</p><p>Connect the label’s <code>for</code> value to the input’s <code>id</code>.</p></div>
  <div class="connection-code"><div class="preview-label">Label and input</div><pre><code><span class="blue">&lt;label</span> <span class="pink">for</span>=<span class="orange">"firstname"</span><span class="blue">&gt;</span><span class="orange">Firstname</span><span class="blue">&lt;/label&gt;</span>
<span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"text"</span>
       <span class="pink">id</span>=<span class="orange">"firstname"</span>
       <span class="pink">placeholder</span>=<span class="orange">"Enter your name"</span><span class="blue">&gt;</span></code></pre></div>
</div>

---
layout: default
title: Semantic elements
---

<div class="slide-head"><div class="eyebrow">17 / ELEMENTS</div><h2>More semantic elements</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">Semantic elements name the role of each part of a page.</p><p>The Keynote example groups a logo and menu, page navigation, main content, a section, sidebar, article, and footer.</p></div>
  <div class="operator-grid"><div class="selector-example"><div class="example-label">&lt;header&gt;</div><p>Website header: logo and menu.</p></div><div class="selector-example"><div class="example-label">&lt;nav&gt;</div><p>Navigation links.</p></div><div class="selector-example"><div class="example-label">&lt;main&gt;</div><p>Main page content.</p></div><div class="selector-example"><div class="example-label">&lt;section&gt;</div><p>Grouped page content.</p></div><div class="selector-example"><div class="example-label">&lt;aside&gt;</div><p>Sidebar content.</p></div><div class="selector-example"><div class="example-label">&lt;article&gt;</div><p>Article content.</p></div><div class="selector-example"><div class="example-label">&lt;footer&gt;</div><p>Contact and copyright.</p></div></div>
</div>

---
layout: default
title: Form submitting
---

<div class="slide-head"><div class="eyebrow">18 / FORMS</div><h2>Form submitting</h2></div>

<div class="two-col wide-gap">
  <div class="copy-block"><p class="lead">A submit control sends the form’s values.</p><p>Use an input or button inside the form to let the user submit it.</p></div>
  <div class="connection-code"><div class="preview-label">Form controls</div><pre><code><span class="blue">&lt;form</span> <span class="pink">action</span>=<span class="orange">""</span> <span class="pink">method</span>=<span class="orange">"GET"</span><span class="blue">&gt;</span>
  <span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"text"</span> <span class="pink">name</span>=<span class="orange">"name"</span><span class="blue">&gt;</span>
  <span class="blue">&lt;input</span> <span class="pink">type</span>=<span class="orange">"submit"</span> <span class="pink">value</span>=<span class="orange">"Submit"</span><span class="blue">&gt;</span>
  <span class="blue">&lt;button</span> <span class="pink">type</span>=<span class="orange">"submit"</span><span class="blue">&gt;</span><span class="orange">Submit</span><span class="blue">&lt;/button&gt;</span>
<span class="blue">&lt;/form&gt;</span></code></pre></div>
</div>

---
layout: default
title: The End
---

<div class="section-divider"><div class="eyebrow">HTML5</div><h2>The End</h2><p>HTML — Hyper Text Markup Language</p></div>
