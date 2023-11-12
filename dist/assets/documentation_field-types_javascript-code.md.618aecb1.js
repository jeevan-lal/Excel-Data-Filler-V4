import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.ed6abfc6.js";const S=JSON.parse('{"title":"Javascript Code","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/javascript-code.md","filePath":"documentation/field-types/javascript-code.md","lastUpdated":1681787575000}'),p={name:"documentation/field-types/javascript-code.md"},o=l(`<h1 id="javascript-code" tabindex="-1">Javascript Code <a class="header-anchor" href="#javascript-code" aria-label="Permalink to &quot;Javascript Code&quot;">​</a></h1><p>You can use Javascript code in any field or you can give any field only in <strong>Javascript type</strong>. We have used <a href="https://microsoft.github.io/monaco-editor/" target="_blank" rel="noreferrer">Monaco Editor</a> to edit Javascript code.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Where your code is ending, add this line only then the form will run further.</span></span>
<span class="line"><span style="color:#E1E4E8;">localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Where your code is ending, add this line only then the form will run further.</span></span>
<span class="line"><span style="color:#24292E;">localStorage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="global-variable" tabindex="-1">Global Variable <a class="header-anchor" href="#global-variable" aria-label="Permalink to &quot;Global Variable&quot;">​</a></h2><p>Use <code>$entry</code> variable in the javascript code for access entry and excel data.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ACCESS ENTRY DATA [OBJECT]</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">($entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// PREDEFINE FUNCTIONS [OBJECT]</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">($fns);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1]: STORE DATA IN THE SCRAPER EXCEL (PORTRAIT MODE)</span></span>
<span class="line"><span style="color:#6A737D;">// DATA TYPE: ARRAY</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { storeDataInScraper: [] };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [2]: STORE DATA IN THE CURRENT ENTRY EXCEL ROW (LANDSCAPE MODE)</span></span>
<span class="line"><span style="color:#6A737D;">// DATA TYPE: OBJECT AND ALL OBJECT KEY NAME IS UNIQUE</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { storeDataInEntry: {} };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [3]: SKIP CURRENT FORM</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { skipForm: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [4]: SKIP SEGMENT</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { skipSegment: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [5]: STOP LOOP</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { loopStop: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [6]: RETURN ERROR RESPONSE (BY DEFAULT SET SUCCESS RESPONSE)</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { status: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;Error Message&quot;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// RETURN RESPONSE</span></span>
<span class="line"><span style="color:#E1E4E8;">localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(response));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ACCESS ENTRY DATA [OBJECT]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">($entry);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// PREDEFINE FUNCTIONS [OBJECT]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">($fns);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1]: STORE DATA IN THE SCRAPER EXCEL (PORTRAIT MODE)</span></span>
<span class="line"><span style="color:#6A737D;">// DATA TYPE: ARRAY</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { storeDataInScraper: [] };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [2]: STORE DATA IN THE CURRENT ENTRY EXCEL ROW (LANDSCAPE MODE)</span></span>
<span class="line"><span style="color:#6A737D;">// DATA TYPE: OBJECT AND ALL OBJECT KEY NAME IS UNIQUE</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { storeDataInEntry: {} };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [3]: SKIP CURRENT FORM</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { skipForm: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [4]: SKIP SEGMENT</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { skipSegment: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [5]: STOP LOOP</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { loopStop: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [6]: RETURN ERROR RESPONSE (BY DEFAULT SET SUCCESS RESPONSE)</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { status: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;Error Message&quot;</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// RETURN RESPONSE</span></span>
<span class="line"><span style="color:#24292E;">localStorage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(response));</span></span></code></pre></div><h2 id="editor-shortcut-keys" tabindex="-1">Editor Shortcut keys <a class="header-anchor" href="#editor-shortcut-keys" aria-label="Permalink to &quot;Editor Shortcut keys&quot;">​</a></h2><ul><li><code>F11</code> = Full Screen</li><li><code>Ctrl + S</code> = Save</li><li><code>Ctrl + Z</code> = Word Wrap</li><li><code>Shift + Alt + L</code> = Debug Console Log</li></ul>`,8),e=[o];function t(c,r,E,i,y,d){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{S as __pageData,C as default};
