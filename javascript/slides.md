---
theme: default
background: '#F7F8FA'
title: JavaScript for Beginners
info: A practical introduction to JavaScript values, decisions, functions, and the browser.
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

<!-- 1 -->
<div class="cover-slide">
  <h1>JavaScript<br /><span>for beginners</span></h1>
  <p class="cover-subtitle">A practical first look at values, variables, decisions, functions, and browser interaction.</p>
  <div class="code-chip"><span class="pink">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Hello, web!'</span><span class="muted">)</span></div>
</div>

---
layout: default
title: What JavaScript does
---

<div class="slide-head"><div class="eyebrow">01 / THE BIG IDEA</div><h2>JavaScript adds behavior to a page</h2></div>

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

---
layout: default
title: Adding JavaScript
---

<div class="slide-head"><div class="eyebrow">02 / CONNECT JAVASCRIPT</div><h2>Start with a script file</h2></div>

<div class="connection-layout">
  <div class="copy-block"><p class="lead">Keep JavaScript in its own file and load it from HTML.</p><p>The <code>defer</code> attribute lets the browser finish reading the HTML before it runs the script.</p><div class="bottom-note">Use <code>src</code> to point to a file such as <code>app.js</code>.</div></div>
  <div class="connection-code"><div class="preview-label">index.html</div><pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;body&gt;
    &lt;button id=&quot;save&quot;&gt;Save&lt;/button&gt;
    <span class="code-highlight">&lt;script src=&quot;app.js&quot; defer&gt;&lt;/script&gt;</span>
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
</div>

---
layout: default
title: Data types
---

<div class="section-divider"><div class="eyebrow">SECTION 01</div><h2>Data types</h2><p>Primitive values and structured data</p></div>

---
layout: default
title: Primitive and non-primitive data types
---

<div class="slide-head"><div class="eyebrow">03 / DATA TYPES</div><h2>JavaScript values fall into two broad groups</h2></div>

<div class="two-col wide-gap">
  <div class="selector-example"><div class="example-label">Primitive</div><p class="lead">One simple value</p><p>Primitive values include text, numbers, booleans, <code>undefined</code>, <code>null</code>, <code>bigint</code>, and <code>symbol</code>.</p><div class="bottom-note">Primitives are immutable values.</div></div>
  <div class="selector-example"><div class="example-label">Non-primitive</div><p class="lead">A structured value</p><p>Objects, arrays, and functions can hold properties, items, or reusable behavior.</p><div class="bottom-note">Variables refer to the structure in memory.</div></div>
</div>

---
layout: default
title: Primitive data types
---

<div class="slide-head"><div class="eyebrow">04 / DATA TYPES</div><h2>Primitive types hold one simple value</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Text</div><pre><code>const name = 'Mina';</code></pre><p><code>string</code> stores text.</p></div>
  <div class="selector-example"><div class="example-label">Numbers</div><pre><code>const score = 42;</code></pre><p><code>number</code> stores numeric values.</p></div>
  <div class="selector-example"><div class="example-label">True or false</div><pre><code>const online = true;</code></pre><p><code>boolean</code> stores a yes-or-no value.</p></div>
</div>
<div class="callout"><strong>Other primitives:</strong> <code>undefined</code>, <code>null</code>, <code>bigint</code>, and <code>symbol</code>.</div>

---
layout: default
title: Non-primitive data types
---

<div class="slide-head"><div class="eyebrow">05 / DATA TYPES</div><h2>Non-primitive types organize related values</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Object</div><pre><code>const user = {
  name: 'Mina'
};</code></pre><p>Named properties describe one thing.</p></div>
  <div class="selector-example"><div class="example-label">Array</div><pre><code>const colors = ['red', 'blue'];</code></pre><p>An ordered list of values.</p></div>
  <div class="selector-example"><div class="example-label">Function</div><pre><code>function greet() {
  return 'Hi';
}</code></pre><p>Reusable behavior that can be called.</p></div>
</div>
<div class="callout"><strong>Key idea:</strong> non-primitive values can contain or group multiple pieces of data.</div>

---
layout: default
title: Operators
---

<div class="section-divider"><div class="eyebrow">SECTION 02</div><h2>Operators</h2><p>Arithmetic, comparison, logical, and assignment</p></div>

---
layout: default
title: Arithmetic operators
---

<div class="slide-head"><div class="eyebrow">06 / OPERATOR FAMILIES</div><h2>Arithmetic operators work with numbers</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Add</div><pre><code>8 <span class="pink">+</span> 4 // 12</code></pre><p><code class="pink">+</code> adds values.</p></div>
  <div class="selector-example"><div class="example-label">Subtract</div><pre><code>8 <span class="pink">-</span> 4 // 4</code></pre><p><code class="pink">-</code> subtracts the right value.</p></div>
  <div class="selector-example"><div class="example-label">Multiply</div><pre><code>8 <span class="pink">*</span> 4 // 32</code></pre><p><code class="pink">*</code> multiplies values.</p></div>
  <div class="selector-example"><div class="example-label">Divide</div><pre><code>20 <span class="pink">/</span> 4 // 5</code></pre><p><code class="pink">/</code> divides the left value.</p></div>
  <div class="selector-example"><div class="example-label">Remainder</div><pre><code>9 <span class="pink">%</span> 2 // 1</code></pre><p><code class="pink">%</code> returns what is left over.</p></div>
  <div class="selector-example"><div class="example-label">Power</div><pre><code>2 <span class="pink">**</span> 3 // 8</code></pre><p><code class="pink">**</code> raises a value to a power.</p></div>
</div>

---
layout: default
title: Comparison operators
---

<div class="slide-head"><div class="eyebrow">07 / OPERATOR FAMILIES</div><h2>Comparison operators produce a boolean</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Equal</div><pre><code>5 <span class="pink">==</span> '5' // true</code></pre><p><code class="pink">==</code> checks equal value.</p></div>
  <div class="selector-example"><div class="example-label">Greater</div><pre><code>8 <span class="pink">&gt;</span> 4 // true</code></pre><p><code class="pink">&gt;</code> means larger than.</p></div>
  <div class="selector-example"><div class="example-label">Less</div><pre><code>2 <span class="pink">&lt;</span> 6 // true</code></pre><p><code class="pink">&lt;</code> means smaller than.</p></div>
  <div class="selector-example"><div class="example-label">At least</div><pre><code>5 <span class="pink">&gt;=</span> 5 // true</code></pre><p><code class="pink">&gt;=</code> means larger or equal.</p></div>
  <div class="selector-example"><div class="example-label">At most</div><pre><code>4 <span class="pink">&lt;=</span> 4 // true</code></pre><p><code class="pink">&lt;=</code> means smaller or equal.</p></div>
</div>

---
layout: default
title: More comparison operators
---

<div class="slide-head"><div class="eyebrow">08 / OPERATOR FAMILIES</div><h2>Two operators compare inequality</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Not equal</div><pre><code>5 <span class="pink">!=</span> '5' // false</code></pre><p><code class="pink">!=</code> allows type conversion before comparing.</p></div>
  <div class="selector-example"><div class="example-label">Strictly not equal</div><pre><code>5 <span class="pink">!==</span> '5' // true</code></pre><p><code class="pink">!==</code> compares both value and type.</p></div>
</div>

---
layout: default
title: Logical operators
---

<div class="slide-head"><div class="eyebrow">09 / OPERATOR FAMILIES</div><h2>Logical operators combine conditions</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">AND</div><pre><code>true <span class="pink">&amp;&amp;</span> true // true</code></pre><p><code class="pink">&amp;&amp;</code> is true only when both sides are true.</p></div>
  <div class="selector-example"><div class="example-label">OR</div><pre><code>false <span class="pink">||</span> true // true</code></pre><p><code class="pink">||</code> is true when at least one side is true.</p></div>
  <div class="selector-example"><div class="example-label">NOT</div><pre><code><span class="pink">!</span>true // false</code></pre><p><code class="pink">!</code> flips true to false.</p></div>
</div>
<div class="callout"><strong>Example:</strong> both membership and online status can decide whether a user may see a members-only page. JavaScript has no dedicated XOR symbol.</div>

---
layout: default
title: Assignment operators
---

<div class="slide-head"><div class="eyebrow">10 / OPERATOR FAMILIES</div><h2>Assignment operators update variables</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Assign</div><pre><code>let score = 10;
score <span class="pink">=</span> 6; // 6</code></pre><p><code class="pink">=</code> assigns a value to a variable.</p></div>
  <div class="selector-example"><div class="example-label">Add and assign</div><pre><code>let score = 10;
score <span class="pink">+=</span> 3; // 13</code></pre><p><code class="pink">+=</code> adds, then assigns.</p></div>
  <div class="selector-example"><div class="example-label">Subtract and assign</div><pre><code>let score = 10;
score <span class="pink">-=</span> 3; // 7</code></pre><p><code class="pink">-=</code> subtracts, then assigns.</p></div>
</div>

---
layout: default
title: Assignment operators
---

<div class="slide-head"><div class="eyebrow">11 / OPERATOR FAMILIES · CONTINUED</div><h2>Assignment operators update variables</h2></div>

<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Multiply and assign</div><pre><code>let score = 10;
score <span class="pink">*=</span> 3; // 30</code></pre><p><code class="pink">*=</code> multiplies, then assigns.</p></div>
  <div class="selector-example"><div class="example-label">Divide and assign</div><pre><code>let score = 12;
score <span class="pink">/=</span> 3; // 4</code></pre><p><code class="pink">/=</code> divides, then assigns.</p></div>
  <div class="selector-example"><div class="example-label">Remainder and assign</div><pre><code>let score = 14;
score <span class="pink">%=</span> 4; // 2</code></pre><p><code class="pink">%=</code> assigns the remainder.</p></div>
</div>

---
layout: default
title: Control flow
---

<div class="section-divider"><div class="eyebrow">SECTION 03</div><h2>Control flow</h2><p>Make decisions and control repetition</p></div>

---
layout: default
title: If statement
---

<div class="slide-head"><div class="eyebrow">12 / CONTROL FLOW</div><h2><code>if</code> runs a block when a condition is true</h2></div>

<div class="two-col">
  <div class="rule-code large"><div><span class="pink">const</span> <span class="blue">temperature</span> <span class="muted">=</span> <span class="orange">32</span><span class="muted">;</span></div><div><span class="pink">if</span> <span class="muted">(</span><span class="blue">temperature</span> <span class="muted">&gt;</span> <span class="orange">30</span><span class="muted">) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'It is hot'</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div>
  <div class="copy-block"><p class="lead">The condition is checked first.</p><p>When it is true, JavaScript runs the code inside the braces. When it is false, JavaScript skips that block.</p></div>
</div>

---
layout: default
title: If and else
---

<div class="slide-head"><div class="eyebrow">13 / CONTROL FLOW</div><h2>Else provides a second path</h2></div>
<div class="two-col">
  <div class="rule-code large"><div><span class="pink">const</span> <span class="blue">isRaining</span> <span class="muted">=</span> <span class="orange">false</span><span class="muted">;</span></div><div><span class="pink">if</span> <span class="muted">(</span><span class="blue">isRaining</span><span class="muted">) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Take an umbrella'</span><span class="muted">);</span></div><div><span class="muted">}</span> <span class="pink">else</span> <span class="muted">{</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'No umbrella needed'</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div>
  <div class="copy-block"><p class="lead">JavaScript chooses one of two blocks.</p><p>The <code>if</code> block runs when the condition is true. The <code>else</code> block runs otherwise.</p></div>
</div>

---
layout: default
title: If else if
---

<div class="slide-head"><div class="eyebrow">14 / CONTROL FLOW</div><h2><code>else if</code> checks another condition</h2></div>

<div class="two-col">
  <div class="rule-code large"><div><span class="pink">const</span> <span class="blue">score</span> <span class="muted">=</span> <span class="orange">82</span><span class="muted">;</span></div><div><span class="pink">if</span> <span class="muted">(</span><span class="blue">score</span> <span class="muted">&gt;=</span> <span class="orange">90</span><span class="muted">) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'A'</span><span class="muted">);</span></div><div><span class="muted">}</span> <span class="pink">else if</span> <span class="muted">(</span><span class="blue">score</span> <span class="muted">&gt;=</span> <span class="orange">80</span><span class="muted">) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'B'</span><span class="muted">);</span></div><div><span class="muted">}</span> <span class="pink">else</span> <span class="muted">{</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Keep practicing'</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div>
  <div class="copy-block"><p class="lead">Conditions are checked from top to bottom.</p><p>The first true branch runs, and JavaScript skips the remaining branches. The final <code>else</code> handles every other case.</p></div>
</div>

---
layout: default
title: Ternary operator
---

<div class="slide-head"><div class="eyebrow">15 / CONTROL FLOW</div><h2>The ternary operator chooses between two values</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Two outcomes</div><div class="rule-code large"><div><span class="pink">const</span> <span class="blue">age</span> <span class="muted">=</span> <span class="orange">20</span><span class="muted">;</span></div><div><span class="pink">const</span> <span class="blue">access</span> <span class="muted">=</span> <span class="blue">age</span> <span class="muted">&gt;=</span> <span class="orange">18</span></div><div class="indent"><span class="muted">?</span> <span class="orange">'Allowed'</span></div><div class="indent"><span class="muted">:</span> <span class="orange">'Not allowed'</span><span class="muted">;</span></div></div></div>
  <div class="copy-block"><p class="lead">Syntax: condition, <code>?</code>, true value, <code>:</code>, false value.</p><p>Here, <code>access</code> becomes <code>'Allowed'</code>. Use a ternary for a short choice between two values.</p></div>
</div>

---
layout: default
title: Ternary with three outcomes
---

<div class="slide-head"><div class="eyebrow">16 / CONTROL FLOW</div><h2>Nested ternaries can choose among three outcomes</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Three outcomes</div><div class="rule-code large"><div><span class="pink">const</span> <span class="blue">score</span> <span class="muted">=</span> <span class="orange">76</span><span class="muted">;</span></div><div><span class="pink">const</span> <span class="blue">result</span> <span class="muted">=</span> <span class="blue">score</span> <span class="muted">&gt;=</span> <span class="orange">80</span></div><div class="indent"><span class="muted">?</span> <span class="orange">'Pass with merit'</span></div><div class="indent"><span class="muted">:</span> <span class="blue">score</span> <span class="muted">&gt;=</span> <span class="orange">50</span></div><div class="indent indent"><span class="muted">?</span> <span class="orange">'Pass'</span></div><div class="indent indent"><span class="muted">:</span> <span class="orange">'Try again'</span><span class="muted">;</span></div></div></div>
  <div class="copy-block"><p class="lead">The second condition runs when the first condition is false.</p><p>This example gives <code>result</code> the value <code>'Pass'</code>. For many choices, an <code>if / else if</code> chain can be easier to read.</p></div>
</div>

---
layout: default
title: Switch statement
---

<div class="slide-head"><div class="eyebrow">17 / CONTROL FLOW</div><h2><code>switch</code> matches one value against several cases</h2></div>

<div class="two-col">
  <div class="rule-code"><div><span class="pink">const</span> <span class="blue">day</span> <span class="muted">=</span> <span class="orange">'Sat'</span><span class="muted">;</span></div><div><span class="pink">switch</span> <span class="muted">(</span><span class="blue">day</span><span class="muted">) {</span></div><div class="indent"><span class="pink">case</span> <span class="orange">'Sat'</span><span class="muted">:</span></div><div class="indent"><span class="pink">case</span> <span class="orange">'Sun'</span><span class="muted">:</span></div><div class="indent indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Weekend'</span><span class="muted">);</span></div><div class="indent indent"><span class="pink">break</span><span class="muted">;</span></div><div class="indent"><span class="pink">default</span><span class="muted">:</span></div><div class="indent indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Weekday'</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div>
  <div class="copy-block"><p class="lead">Execution starts at the matching <code>case</code>.</p><p><code>break</code> exits the switch. <code>default</code> runs when no case matches.</p></div>
</div>

---
layout: default
title: While and do while loops
---

<div class="slide-head"><div class="eyebrow">18 / CONTROL FLOW</div><h2><code>while</code> repeats while a condition stays true</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">While checks first</div><div class="rule-code"><div><span class="pink">let</span> <span class="blue">count</span> <span class="muted">=</span> <span class="orange">1</span><span class="muted">;</span></div><div><span class="pink">while</span> <span class="muted">(</span><span class="blue">count</span> <span class="muted">&lt;=</span> <span class="orange">3</span><span class="muted">) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="blue">count</span><span class="muted">);</span></div><div class="indent"><span class="blue">count</span><span class="muted">++;</span></div><div><span class="muted">}</span></div></div><p>Prints 1, 2, and 3.</p></div>
  <div class="selector-example"><div class="example-label">Do while checks after</div><div class="rule-code"><div><span class="pink">let</span> <span class="blue">count</span> <span class="muted">=</span> <span class="orange">1</span><span class="muted">;</span></div><div><span class="pink">do</span> <span class="muted">{</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="blue">count</span><span class="muted">);</span></div><div class="indent"><span class="blue">count</span><span class="muted">++;</span></div><div><span class="muted">}</span> <span class="pink">while</span> <span class="muted">(</span><span class="blue">count</span> <span class="muted">&lt;=</span> <span class="orange">3</span><span class="muted">);</span></div></div><p>The body runs at least once.</p></div>
</div>

---
layout: default
title: For loop
---

<div class="slide-head"><div class="eyebrow">19 / CONTROL FLOW</div><h2>A <code>for</code> loop groups its repeat steps</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Count from zero</div><div class="rule-code"><div><span class="pink">for</span> <span class="muted">(</span><span class="pink">let</span> <span class="blue">i</span> <span class="muted">=</span> <span class="orange">0</span><span class="muted">;</span> <span class="blue">i</span> <span class="muted">&lt;</span> <span class="orange">4</span><span class="muted">;</span> <span class="blue">i</span><span class="muted">++) {</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="blue">i</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div><p>Prints 0, 1, 2, and 3.</p></div>
  <div class="copy-block"><p class="lead">The loop has three parts.</p><p><code>let i = 0</code> starts the counter. <code>i &lt; 4</code> checks whether to continue. <code>i++</code> updates the counter after each pass.</p></div>
</div>

---
layout: default
title: Break and continue
---

<div class="slide-head"><div class="eyebrow">20 / CONTROL FLOW</div><h2><code>break</code> exits a loop, <code>continue</code> skips one pass</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Break at 3</div><div class="rule-code"><div><span class="pink">for</span> <span class="muted">(</span><span class="pink">let</span> <span class="blue">i</span> <span class="muted">=</span> <span class="orange">1</span><span class="muted">;</span> <span class="blue">i</span> <span class="muted">&lt;=</span> <span class="orange">5</span><span class="muted">;</span> <span class="blue">i</span><span class="muted">++) {</span></div><div class="indent"><span class="pink">if</span> <span class="muted">(</span><span class="blue">i</span> <span class="muted">===</span> <span class="orange">3</span><span class="muted">)</span> <span class="pink">break</span><span class="muted">;</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="blue">i</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div><p>Prints 1 and 2, then exits.</p></div>
  <div class="selector-example"><div class="example-label">Skip 3</div><div class="rule-code"><div><span class="pink">for</span> <span class="muted">(</span><span class="pink">let</span> <span class="blue">i</span> <span class="muted">=</span> <span class="orange">1</span><span class="muted">;</span> <span class="blue">i</span> <span class="muted">&lt;=</span> <span class="orange">5</span><span class="muted">;</span> <span class="blue">i</span><span class="muted">++) {</span></div><div class="indent"><span class="pink">if</span> <span class="muted">(</span><span class="blue">i</span> <span class="muted">===</span> <span class="orange">3</span><span class="muted">)</span> <span class="pink">continue</span><span class="muted">;</span></div><div class="indent"><span class="blue">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="blue">i</span><span class="muted">);</span></div><div><span class="muted">}</span></div></div><p>Prints 1, 2, 4, and 5.</p></div>
</div>

---
layout: default
title: Functions
---

<div class="section-divider"><div class="eyebrow">SECTION 04</div><h2>Functions</h2><p>Define reusable behavior and call it when needed</p></div>

---
layout: default
title: Functions
---

<div class="slide-head"><div class="eyebrow">21 / REUSE LOGIC</div><h2>A normal function has a name you can call</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Define</div><div class="rule-code function-code"><div><span class="pink">function</span> <span class="blue">greet</span><span class="muted">(</span><span class="blue">name</span><span class="muted">) {</span></div><div class="indent"><span class="pink">return</span> <span class="orange">'Hello, '</span> <span class="muted">+</span> <span class="blue">name</span><span class="muted">;</span></div><div><span class="muted">}</span></div></div><p>Define it once, and pass a name in as an argument.</p></div>
  <div class="selector-example"><div class="example-label">Call</div><div class="rule-code function-code"><div><span class="blue">greet</span><span class="muted">(</span><span class="orange">'Mina'</span><span class="muted">);</span></div></div><p>Calling <code>greet</code> runs the function and returns <code>'Hello, Mina'</code>.</p></div>
</div>
<div class="callout"><strong>Good habit:</strong> choose a name that describes what the function does.</div>

---
layout: default
title: Arrow functions
---

<div class="slide-head"><div class="eyebrow">22 / REUSE LOGIC</div><h2>An arrow function is a compact function expression</h2></div>

<div class="two-col">
  <div class="selector-example"><div class="example-label">Define</div><div class="rule-code function-code"><div><span class="pink">const</span> <span class="blue">double</span> <span class="muted">= (</span><span class="blue">number</span><span class="muted">) =&gt; {</span></div><div class="indent"><span class="pink">return</span> <span class="blue">number</span> <span class="muted">*</span> <span class="orange">2</span><span class="muted">;</span></div><div><span class="muted">};</span></div></div><p>The arrow <code>=&gt;</code> connects the input to the function body.</p></div>
  <div class="selector-example"><div class="example-label">Call</div><div class="rule-code function-code"><div><span class="blue">double</span><span class="muted">(</span><span class="orange">4</span><span class="muted">);</span> <span class="muted">// 8</span></div></div><p>Calling <code>double(4)</code> returns <code>8</code>.</p></div>
</div>

---
layout: default
title: A beginner practice loop
---

<div class="slide-head"><div class="eyebrow">23 / KEEP LEARNING</div><h2>Small programs build confidence</h2></div>

<div class="two-col">
  <div class="copy-block"><p class="lead">Change one value and observe the result.</p><p>Then add one decision and one event. Small programs make each new idea visible.</p></div>
  <div class="rule-code"><div><span class="pink">console</span><span class="muted">.</span><span class="blue">log</span><span class="muted">(</span><span class="orange">'Keep experimenting'</span><span class="muted">);</span></div></div>
</div>
