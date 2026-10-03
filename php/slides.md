---
theme: default
background: '#F7F8FA'
title: PHP for Beginners
info: A practical introduction to PHP syntax and server-side programming
class: text-left
highlighter: shiki
drawings:
  persist: false
transition: none
mdc: true
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
  <div class="eyebrow">SERVER-SIDE WEB PROGRAMMING</div>
  <h1>PHP <span>for beginners</span></h1>
  <p class="cover-subtitle">The language behind dynamic web pages, forms, APIs, and database-backed applications.</p>
  <div class="code-chip">&lt;?php echo "Hello, web"; ?&gt;</div>
</div>

---
layout: default
title: What PHP does
---

<div class="slide-head"><div class="eyebrow">01 / THE BIG PICTURE</div><h2>PHP runs on the server</h2></div>
<div class="connection-layout">
  <div class="connection-code"><pre><code><span class="pink">&lt;?php</span>
<span class="blue">$name</span> <span class="muted">=</span> <span class="orange">"Maya"</span><span class="muted">;</span>
<span class="pink">echo</span> <span class="orange">"Hello, "</span> <span class="muted">.</span> <span class="blue">$name</span><span class="muted">;</span>
<span class="pink">?&gt;</span></code></pre></div>
  <div class="copy-block"><p class="lead">The browser receives the result.</p><p>PHP executes before the response reaches the browser. The browser sees HTML, not the PHP source code.</p></div>
</div>

---
layout: default
title: A first PHP file
---

<div class="slide-head"><div class="eyebrow">02 / THE BIG PICTURE</div><h2>A PHP file mixes markup and code</h2></div>
<div class="two-col">
  <div class="rule-code large"><div><span class="muted">&lt;!doctype html&gt;</span></div><div><span class="muted">&lt;h1&gt;</span>Hello<span class="muted">&lt;/h1&gt;</span></div><div><span class="pink">&lt;?php</span> <span class="pink">echo</span> <span class="orange">date</span><span class="muted">(</span><span class="orange">'Y-m-d'</span><span class="muted">);</span> <span class="pink">?&gt;</span></div></div>
  <div class="copy-block"><p class="lead">Use <code>.php</code> for server-rendered pages.</p><p>PHP starts with <code>&lt;?php</code>. The closing tag is optional when a file contains only PHP.</p></div>
</div>

---
layout: default
title: PHP syntax
---

<div class="section-divider"><div class="eyebrow">SECTION 01</div><h2>PHP syntax</h2><p>Tags, statements, comments, and output</p></div>

---
layout: default
title: PHP statements
---

<div class="slide-head"><div class="eyebrow">03 / PHP SYNTAX</div><h2>Statements end with semicolons</h2></div>
<div class="two-col">
  <div class="rule-code large"><div><span class="pink">&lt;?php</span></div><div><span class="pink">echo</span> <span class="orange">"Ready"</span><span class="muted">;</span></div><div><span class="blue">$total</span> <span class="muted">=</span> <span class="orange">4</span> <span class="muted">+</span> <span class="orange">5</span><span class="muted">;</span></div><div><span class="pink">?&gt;</span></div></div>
  <div class="copy-block"><p class="lead">One statement, one semicolon.</p><p>Whitespace improves readability, but the semicolon tells PHP where the statement ends.</p></div>
</div>

---
layout: default
title: Comments and output
---

<div class="slide-head"><div class="eyebrow">04 / PHP SYNTAX</div><h2>Comments explain intent, output sends text</h2></div>
<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Single line</div><pre><code><span class="muted">// explain this line</span></code></pre><p>Use <code>//</code> for a short note.</p></div>
  <div class="selector-example"><div class="example-label">Alternative single line</div><pre><code><span class="muted"># also a comment</span></code></pre><p>Useful in configuration-style files.</p></div>
  <div class="selector-example"><div class="example-label">Output</div><pre><code><span class="pink">echo</span> <span class="orange">"Hello"</span><span class="muted">;</span></code></pre><p><code>echo</code> writes a value into the response.</p></div>
</div>

---
layout: default
title: Variables
---

<div class="section-divider"><div class="eyebrow">SECTION 02</div><h2>Variables</h2><p>Names that point to changing values</p></div>

---
layout: default
title: PHP variables
---

<div class="slide-head"><div class="eyebrow">05 / VARIABLES</div><h2>Variables begin with <code>$</code></h2></div>
<div class="rule-layout"><div class="rule-code large"><div><span class="blue">$name</span> <span class="muted">=</span> <span class="orange">"Maya"</span><span class="muted">;</span></div><div><span class="blue">$visits</span> <span class="muted">=</span> <span class="orange">3</span><span class="muted">;</span></div><div><span class="pink">echo</span> <span class="blue">$name</span> <span class="muted">.</span> <span class="orange">" visited "</span> <span class="muted">.</span> <span class="blue">$visits</span><span class="muted">;</span></div></div><div class="rule-parts"><div><span class="part-dot pink-bg">$</span><div><strong>Every variable starts with <code>$</code></strong><p>The name follows PHP's variable naming rules.</p></div></div><div><span class="part-dot blue-bg">=</span><div><strong>Assignment stores a value</strong><p>The type can change when you assign a new value.</p></div></div></div></div>

---
layout: default
title: Constants and scope
---

<div class="slide-head"><div class="eyebrow">06 / VARIABLES</div><h2>Constants stay fixed, scope keeps values local</h2></div>
<div class="two-col">
  <div class="selector-example"><div class="example-label">Constant</div><pre><code><span class="pink">define</span><span class="muted">(</span><span class="orange">'APP_NAME'</span><span class="muted">,</span> <span class="orange">'Atlas'</span><span class="muted">);</span>
<span class="pink">echo</span> <span class="blue">APP_NAME</span><span class="muted">;</span></code></pre><p>Constants use a name without <code>$</code>.</p></div>
  <div class="selector-example"><div class="example-label">Local scope</div><pre><code><span class="pink">function</span> <span class="blue">greet</span><span class="muted">() {</span>
  <span class="blue">$message</span> <span class="muted">=</span> <span class="orange">'Hi'</span><span class="muted">;</span>
<span class="muted">}</span></code></pre><p>A variable inside a function belongs to that function.</p></div>
</div>

---
layout: default
title: Data types
---

<div class="section-divider"><div class="eyebrow">SECTION 03</div><h2>Data types</h2><p>Values PHP can store and inspect</p></div>

---
layout: default
title: Common data types
---

<div class="slide-head"><div class="eyebrow">07 / DATA TYPES</div><h2>PHP has scalar, compound, and special values</h2></div>
<div class="three-col compact">
  <div class="selector-example"><div class="example-label">Scalar</div><pre><code><span class="blue">$age</span> <span class="muted">=</span> <span class="orange">28</span><span class="muted">;</span>
<span class="blue">$price</span> <span class="muted">=</span> <span class="orange">19.95</span><span class="muted">;</span>
<span class="blue">$live</span> <span class="muted">=</span> <span class="pink">true</span><span class="muted">;</span></code></pre><p>Integer, float, string, boolean.</p></div>
  <div class="selector-example"><div class="example-label">Compound</div><pre><code><span class="blue">$tags</span> <span class="muted">=</span> <span class="muted">[</span><span class="orange">'php'</span><span class="muted">,</span> <span class="orange">'web'</span><span class="muted">];</span></code></pre><p>Arrays and objects group values.</p></div>
  <div class="selector-example"><div class="example-label">Special</div><pre><code><span class="blue">$missing</span> <span class="muted">=</span> <span class="pink">null</span><span class="muted">;</span>
<span class="pink">var_dump</span><span class="muted">(</span><span class="blue">$missing</span><span class="muted">);</span></code></pre><p><code>null</code> represents no value.</p></div>
</div>

---
layout: default
title: Arrays
---

<div class="slide-head"><div class="eyebrow">08 / DATA TYPES</div><h2>Arrays can be indexed or associative</h2></div>
<div class="two-col">
  <div class="selector-example"><div class="example-label">Indexed array</div><pre><code><span class="blue">$colors</span> <span class="muted">=</span> <span class="muted">[</span><span class="orange">'red'</span><span class="muted">,</span> <span class="orange">'blue'</span><span class="muted">];</span>
<span class="pink">echo</span> <span class="blue">$colors</span><span class="muted">[</span><span class="orange">0</span><span class="muted">];</span></code></pre><p>Indexes start at zero.</p></div>
  <div class="selector-example"><div class="example-label">Associative array</div><pre><code><span class="blue">$user</span> <span class="muted">=</span> <span class="muted">[</span>
  <span class="orange">'name'</span> <span class="muted">=&gt;</span> <span class="orange">'Maya'</span><span class="muted">,</span>
  <span class="orange">'role'</span> <span class="muted">=&gt;</span> <span class="orange">'editor'</span>
<span class="muted">];</span></code></pre><p>Keys make the data self-describing.</p></div>
</div>

---
layout: default
title: Operators
---

<div class="section-divider"><div class="eyebrow">SECTION 04</div><h2>Operators</h2><p>Calculate, compare, combine, and assign</p></div>

---
layout: default
title: Arithmetic and concatenation
---

<div class="slide-head"><div class="eyebrow">09 / OPERATORS</div><h2>Arithmetic changes numbers, dot joins strings</h2></div>
<div class="operator-grid">
  <div class="selector-example"><div class="example-label">Add</div><pre><code><span class="orange">4</span> <span class="pink">+</span> <span class="orange">3</span> <span class="muted">// 7</span></code></pre><p>Sum two values.</p></div>
  <div class="selector-example"><div class="example-label">Multiply</div><pre><code><span class="orange">4</span> <span class="pink">*</span> <span class="orange">3</span> <span class="muted">// 12</span></code></pre><p>Multiply values.</p></div>
  <div class="selector-example"><div class="example-label">Remainder</div><pre><code><span class="orange">10</span> <span class="pink">%</span> <span class="orange">3</span> <span class="muted">// 1</span></code></pre><p>Get what remains.</p></div>
  <div class="selector-example"><div class="example-label">Concatenate</div><pre><code><span class="orange">'Hi '</span> <span class="pink">.</span> <span class="orange">'PHP'</span></code></pre><p>Join strings.</p></div>
</div>

---
layout: default
title: Comparison and logical operators
---

<div class="slide-head"><div class="eyebrow">10 / OPERATORS</div><h2>Comparisons return booleans</h2></div>
<div class="two-col">
  <div class="selector-example"><div class="example-label">Strict comparison</div><pre><code><span class="orange">5</span> <span class="pink">===</span> <span class="orange">'5'</span> <span class="muted">// false</span>
<span class="orange">5</span> <span class="pink">!==</span> <span class="orange">'5'</span> <span class="muted">// true</span></code></pre><p><code>===</code> checks value and type.</p></div>
  <div class="selector-example"><div class="example-label">Combine conditions</div><pre><code><span class="blue">$ok</span> <span class="muted">=</span> <span class="blue">$paid</span> <span class="pink">&amp;&amp;</span> <span class="blue">$inStock</span><span class="muted">;</span>
<span class="blue">$guest</span> <span class="muted">=</span> <span class="blue">$public</span> <span class="pink">||</span> <span class="blue">$signedIn</span><span class="muted">;</span></code></pre><p><code>&amp;&amp;</code> needs both; <code>||</code> needs one.</p></div>
</div>

---
layout: default
title: Control structures
---

<div class="section-divider"><div class="eyebrow">SECTION 05</div><h2>Control structures</h2><p>Choose paths and repeat work</p></div>

---
layout: default
title: If and elseif
---

<div class="slide-head"><div class="eyebrow">11 / CONTROL STRUCTURES</div><h2><code>if</code> chooses a branch</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">if</span> <span class="muted">(</span><span class="blue">$score</span> <span class="pink">&gt;=</span> <span class="orange">90</span><span class="muted">) {</span></div><div class="indent"><span class="pink">echo</span> <span class="orange">'A'</span><span class="muted">;</span></div><div><span class="muted">}</span> <span class="pink">elseif</span> <span class="muted">(</span><span class="blue">$score</span> <span class="pink">&gt;=</span> <span class="orange">80</span><span class="muted">) {</span></div><div class="indent"><span class="pink">echo</span> <span class="orange">'B'</span><span class="muted">;</span></div><div><span class="muted">}</span> <span class="pink">else</span> <span class="muted">{</span></div><div class="indent"><span class="pink">echo</span> <span class="orange">'Keep practicing'</span><span class="muted">;</span></div><div><span class="muted">}</span></div></div><div class="copy-block"><p class="lead">PHP checks from top to bottom.</p><p>The first true branch runs. The final <code>else</code> handles every remaining case.</p></div></div>

---
layout: default
title: Loops
---

<div class="slide-head"><div class="eyebrow">12 / CONTROL STRUCTURES</div><h2>Loops repeat a known pattern</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">foreach</span> <span class="muted">(</span><span class="blue">$colors</span> <span class="pink">as</span> <span class="blue">$color</span><span class="muted">) {</span></div><div class="indent"><span class="pink">echo</span> <span class="blue">$color</span> <span class="muted">.</span> <span class="orange">"\n"</span><span class="muted">;</span></div><div><span class="muted">}</span></div></div><div class="copy-block"><p class="lead"><code>foreach</code> fits collections.</p><p>Use <code>for</code> for a counter, <code>while</code> while a condition stays true, and <code>foreach</code> for each item in an array.</p></div></div>

---
layout: default
title: Functions
---

<div class="section-divider"><div class="eyebrow">SECTION 06</div><h2>Functions</h2><p>Package behavior behind a clear name</p></div>

---
layout: default
title: Define and call a function
---

<div class="slide-head"><div class="eyebrow">13 / FUNCTIONS</div><h2>Functions accept inputs and return outputs</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">function</span> <span class="blue">addTax</span><span class="muted">(</span><span class="pink">float</span> <span class="blue">$price</span><span class="muted">): </span><span class="pink">float</span> <span class="muted">{</span></div><div class="indent"><span class="pink">return</span> <span class="blue">$price</span> <span class="muted">*</span> <span class="orange">1.05</span><span class="muted">;</span></div><div><span class="muted">}</span></div><div><span class="blue">$total</span> <span class="muted">=</span> <span class="blue">addTax</span><span class="muted">(</span><span class="orange">100</span><span class="muted">);</span></div></div><div class="copy-block"><p class="lead">A function gives a repeated operation one interface.</p><p>Type declarations document the expected input and output and let PHP catch mistakes earlier.</p></div></div>

---
layout: default
title: Default and variadic parameters
---

<div class="slide-head"><div class="eyebrow">14 / FUNCTIONS</div><h2>Parameters can be optional or repeated</h2></div>
<div class="two-col"><div class="selector-example"><div class="example-label">Default value</div><pre><code><span class="pink">function</span> <span class="blue">greet</span><span class="muted">(</span><span class="blue">$name</span> <span class="muted">=</span> <span class="orange">'friend'</span><span class="muted">) {</span>
  <span class="pink">return</span> <span class="orange">"Hi, "</span> <span class="muted">.</span> <span class="blue">$name</span><span class="muted">;</span>
<span class="muted">}</span></code></pre><p>The caller may omit the argument.</p></div><div class="selector-example"><div class="example-label">Variadic values</div><pre><code><span class="pink">function</span> <span class="blue">sum</span><span class="muted">(</span><span class="pink">int</span> <span class="muted">...</span><span class="blue">$values</span><span class="muted">) {</span>
  <span class="pink">return</span> <span class="pink">array_sum</span><span class="muted">(</span><span class="blue">$values</span><span class="muted">);</span>
<span class="muted">}</span></code></pre><p><code>...</code> gathers many arguments.</p></div></div>

---
layout: default
title: Alternative syntax
---

<div class="section-divider"><div class="eyebrow">SECTION 07</div><h2>Alternative syntax</h2><p>Readable PHP inside HTML templates</p></div>

---
layout: default
title: Template-friendly control flow
---

<div class="slide-head"><div class="eyebrow">15 / ALTERNATIVE SYNTAX</div><h2>Colons make template blocks easier to scan</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">&lt;?php</span> <span class="pink">if</span> <span class="muted">(</span><span class="blue">$loggedIn</span><span class="muted">):</span> <span class="pink">?&gt;</span></div><div class="indent"><span class="muted">&lt;p&gt;</span>Welcome back<span class="muted">&lt;/p&gt;</span></div><div><span class="pink">&lt;?php</span> <span class="pink">else</span><span class="muted">:</span> <span class="pink">?&gt;</span></div><div class="indent"><span class="muted">&lt;p&gt;</span>Please sign in<span class="muted">&lt;/p&gt;</span></div><div><span class="pink">&lt;?php</span> <span class="pink">endif</span><span class="muted">;</span> <span class="pink">?&gt;</span></div></div><div class="copy-block"><p class="lead">The ending keyword closes the block.</p><p>Use <code>endif</code>, <code>endforeach</code>, <code>endfor</code>, and <code>while</code> when HTML and PHP alternate frequently.</p></div></div>

---
layout: default
title: Alternative foreach syntax
---

<div class="slide-head"><div class="eyebrow">16 / ALTERNATIVE SYNTAX</div><h2><code>foreach</code> can read like a template</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">&lt;?php</span> <span class="pink">foreach</span> <span class="muted">(</span><span class="blue">$items</span> <span class="pink">as</span> <span class="blue">$item</span><span class="muted">):</span> <span class="pink">?&gt;</span></div><div class="indent"><span class="muted">&lt;li&gt;</span><span class="pink">&lt;?=</span> <span class="blue">$item</span> <span class="pink">?&gt;</span><span class="muted">&lt;/li&gt;</span></div><div><span class="pink">&lt;?php</span> <span class="pink">endforeach</span><span class="muted">;</span> <span class="pink">?&gt;</span></div></div><div class="copy-block"><p class="lead"><code>&lt;?=</code> is shorthand for <code>echo</code>.</p><p>Keep escaping in mind when rendering untrusted values into HTML.</p></div></div>

---
layout: default
title: Superglobals
---

<div class="section-divider"><div class="eyebrow">SECTION 08</div><h2>Superglobals</h2><p>Request, session, server, and environment data</p></div>

---
layout: default
title: Request data
---

<div class="slide-head"><div class="eyebrow">17 / SUPERGLOBALS</div><h2>Superglobals are available in every scope</h2></div>
<div class="three-col compact"><div class="selector-example"><div class="example-label">Query string</div><pre><code><span class="blue">$term</span> <span class="muted">=</span> <span class="blue">$_GET</span><span class="muted">[</span><span class="orange">'q'</span><span class="muted">]</span> <span class="pink">??</span> <span class="orange">''</span><span class="muted">;</span></code></pre><p>Read URL parameters.</p></div><div class="selector-example"><div class="example-label">Form body</div><pre><code><span class="blue">$email</span> <span class="muted">=</span> <span class="blue">$_POST</span><span class="muted">[</span><span class="orange">'email'</span><span class="muted">]</span> <span class="pink">??</span> <span class="orange">''</span><span class="muted">;</span></code></pre><p>Read submitted form fields.</p></div><div class="selector-example"><div class="example-label">Session</div><pre><code><span class="blue">$_SESSION</span><span class="muted">[</span><span class="orange">'user_id'</span><span class="muted">]</span> <span class="muted">=</span> <span class="orange">42</span><span class="muted">;</span></code></pre><p>Keep state between requests.</p></div></div>

---
layout: default
title: Superglobal safety
---

<div class="slide-head"><div class="eyebrow">18 / SUPERGLOBALS</div><h2>Validate input before using it</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="blue">$email</span> <span class="muted">=</span> <span class="blue">filter_input</span><span class="muted">(</span></div><div class="indent"><span class="blue">INPUT_POST</span><span class="muted">,</span> <span class="orange">'email'</span><span class="muted">,</span></div><div class="indent"><span class="blue">FILTER_VALIDATE_EMAIL</span><span class="muted">);</span></div></div><div class="copy-block"><p class="lead">External input is always data from someone else.</p><p>Check presence, type, format, and authorization before inserting, displaying, or trusting a value.</p></div></div>

---
layout: default
title: Object-oriented PHP
---

<div class="section-divider"><div class="eyebrow">SECTION 09</div><h2>Object-oriented PHP</h2><p>Model state and behavior together</p></div>

---
layout: default
title: Classes and objects
---

<div class="slide-head"><div class="eyebrow">19 / OBJECT-ORIENTED PHP</div><h2>A class defines a reusable object shape</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">class</span> <span class="blue">User</span> <span class="muted">{</span></div><div class="indent"><span class="pink">public function</span> <span class="blue">__construct</span><span class="muted">(</span><span class="pink">public</span> <span class="pink">string</span> <span class="blue">$name</span><span class="muted">) {}</span></div><div class="indent"><span class="pink">public function</span> <span class="blue">label</span><span class="muted">(): </span><span class="pink">string</span> <span class="muted">{</span></div><div class="indent indent"><span class="pink">return</span> <span class="blue">$this</span><span class="muted">-&gt;</span><span class="blue">name</span><span class="muted">;</span></div><div class="indent"><span class="muted">}</span></div><div><span class="muted">}</span></div><div><span class="blue">$user</span> <span class="muted">=</span> <span class="pink">new</span> <span class="blue">User</span><span class="muted">(</span><span class="orange">'Maya'</span><span class="muted">);</span></div></div><div class="copy-block"><p class="lead">Objects bundle data with behavior.</p><p><code>$this</code> refers to the current object. Visibility controls which code can access a property or method.</p></div></div>

---
layout: default
title: Inheritance and interfaces
---

<div class="slide-head"><div class="eyebrow">20 / OBJECT-ORIENTED PHP</div><h2>Interfaces define contracts</h2></div>
<div class="two-col"><div class="selector-example"><div class="example-label">Interface</div><pre><code><span class="pink">interface</span> <span class="blue">Renderable</span> <span class="muted">{</span>
  <span class="pink">public function</span> <span class="blue">render</span><span class="muted">(): </span><span class="pink">string</span><span class="muted">;</span>
<span class="muted">}</span></code></pre><p>Any implementing class must provide <code>render</code>.</p></div><div class="selector-example"><div class="example-label">Inheritance</div><pre><code><span class="pink">class</span> <span class="blue">Admin</span> <span class="pink">extends</span> <span class="blue">User</span> <span class="pink">implements</span> <span class="blue">Renderable</span> <span class="muted">{}</span></code></pre><p>Reuse a base class and satisfy a contract.</p></div></div>

---
layout: default
title: PDO
---

<div class="section-divider"><div class="eyebrow">SECTION 10</div><h2>PDO</h2><p>Connect to databases with prepared statements</p></div>

---
layout: default
title: Connect with PDO
---

<div class="slide-head"><div class="eyebrow">21 / PDO</div><h2>PDO gives PHP one database interface</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="blue">$pdo</span> <span class="muted">=</span> <span class="pink">new</span> <span class="blue">PDO</span><span class="muted">(</span></div><div class="indent"><span class="orange">'mysql:host=db;dbname=app'</span><span class="muted">,</span></div><div class="indent"><span class="blue">$user</span><span class="muted">,</span> <span class="blue">$password</span><span class="muted">);</span></div><div><span class="blue">$pdo</span><span class="muted">-&gt;</span><span class="blue">setAttribute</span><span class="muted">(</span><span class="blue">PDO</span><span class="muted">::</span><span class="blue">ATTR_ERRMODE</span><span class="muted">,</span> <span class="blue">PDO</span><span class="muted">::</span><span class="blue">ERRMODE_EXCEPTION</span><span class="muted">);</span></div></div><div class="copy-block"><p class="lead">Configure failures as exceptions.</p><p>Keep credentials outside source control. Use environment variables or a secret manager in deployed applications.</p></div></div>

---
layout: default
title: Prepared statements
---

<div class="slide-head"><div class="eyebrow">22 / PDO</div><h2>Prepared statements keep data separate from SQL</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="blue">$stmt</span> <span class="muted">=</span> <span class="blue">$pdo</span><span class="muted">-&gt;</span><span class="blue">prepare</span><span class="muted">(</span><span class="orange">'SELECT * FROM users WHERE id = :id'</span><span class="muted">);</span></div><div><span class="blue">$stmt</span><span class="muted">-&gt;</span><span class="blue">execute</span><span class="muted">([</span><span class="orange">'id'</span> <span class="muted">=&gt;</span> <span class="blue">$id</span><span class="muted">]);</span></div><div><span class="blue">$user</span> <span class="muted">=</span> <span class="blue">$stmt</span><span class="muted">-&gt;</span><span class="blue">fetch</span><span class="muted">();</span></div></div><div class="copy-block"><p class="lead">Bind values through placeholders.</p><p>Never concatenate request data into SQL. Prepared statements reduce injection risk and make intent clearer.</p></div></div>

---
layout: default
title: Error handling
---

<div class="section-divider"><div class="eyebrow">SECTION 11</div><h2>Error handling</h2><p>Fail clearly, recover deliberately</p></div>

---
layout: default
title: Exceptions
---

<div class="slide-head"><div class="eyebrow">23 / ERROR HANDLING</div><h2>Exceptions separate failure from recovery</h2></div>
<div class="two-col"><div class="rule-code large"><div><span class="pink">try</span> <span class="muted">{</span></div><div class="indent"><span class="blue">$result</span> <span class="muted">=</span> <span class="blue">riskyOperation</span><span class="muted">();</span></div><div><span class="muted">}</span> <span class="pink">catch</span> <span class="muted">(</span><span class="blue">Throwable</span> <span class="blue">$error</span><span class="muted">) {</span></div><div class="indent"><span class="blue">error_log</span><span class="muted">(</span><span class="blue">$error</span><span class="muted">-&gt;</span><span class="blue">getMessage</span><span class="muted">());</span></div><div class="indent"><span class="pink">throw</span> <span class="blue">$error</span><span class="muted">;</span></div><div><span class="muted">}</span></div></div><div class="copy-block"><p class="lead">Handle what you can, surface what you cannot.</p><p>Log useful context without leaking secrets. Show users a safe message and keep detailed diagnostics for operators.</p></div></div>

---
layout: default
title: Error reporting
---

<div class="slide-head"><div class="eyebrow">24 / ERROR HANDLING</div><h2>Different environments need different detail</h2></div>
<div class="three-col compact"><div class="selector-example"><div class="example-label">Development</div><pre><code><span class="blue">error_reporting</span><span class="muted">(</span><span class="blue">E_ALL</span><span class="muted">);</span>
<span class="blue">ini_set</span><span class="muted">(</span><span class="orange">'display_errors'</span><span class="muted">,</span> <span class="orange">'1'</span><span class="muted">);</span></code></pre><p>See failures while building.</p></div><div class="selector-example"><div class="example-label">Production</div><pre><code><span class="blue">ini_set</span><span class="muted">(</span><span class="orange">'display_errors'</span><span class="muted">,</span> <span class="orange">'0'</span><span class="muted">);</span>
<span class="blue">ini_set</span><span class="muted">(</span><span class="orange">'log_errors'</span><span class="muted">,</span> <span class="orange">'1'</span><span class="muted">);</span></code></pre><p>Log details, hide them from visitors.</p></div><div class="selector-example"><div class="example-label">User message</div><pre><code><span class="pink">echo</span> <span class="orange">'Something went wrong.'</span><span class="muted">;</span></code></pre><p>Keep public messages simple.</p></div></div>

---
layout: default
title: Recap
---

<div class="slide-head"><div class="eyebrow">25 / RECAP</div><h2>PHP gets useful when the pieces connect</h2></div>
<div class="recap"><div><span>01</span><strong>Language basics</strong><p>Syntax, values, variables, operators, and branches.</p></div><div><span>02</span><strong>Application structure</strong><p>Functions, templates, objects, and request data.</p></div><div><span>03</span><strong>Reliable persistence</strong><p>PDO, prepared statements, exceptions, and logs.</p></div></div>
<div class="closing-code"><span class="pink">&lt;?php</span> <span class="pink">echo</span> <span class="orange">'Build something useful';</span> <span class="pink">?&gt;</span></div>
