import{_ as u,p as c,q as f,v as g,o as l,c as s,j as d,a3 as p,a4 as h,t as m,n as x,e as v,a as b,G as E,a2 as R}from"./chunks/framework.BLxugvkI.js";function A(a,t){if(!t||!a)return!1;t=t.replace(/[?]/g,"/"),a=a.replace(/[?]/g,"/"),a=a.replaceAll("(:any)","([a-zA-Z0-9#%=_-]*)"),a=a.replaceAll("(:any(:end))","([a-zA-Z0-9#%=_-]*$)");var e=new RegExp(a).exec(t);return e}const _={key:0,class:"pre-output"},S={__name:"TestingRegEx",setup(a){const t=c({url:"https://demo.in/form/pagea/45",regex:"https://demo.in/form/(\\w+)/(\\d+$)",isMatched:!1}),e=c([]),i=async()=>{try{return!t.value.url||!t.value.regex?!1:(e.value=A(t.value.regex,t.value.url),e.value?t.value.isMatched=!0:t.value.isMatched=!1,!0)}catch{return t.value.isMatched=!1,!1}};return f(()=>t.value,async(r,o)=>{localStorage.setItem("EX-DATA-DOCS-TESTING-REGEX-STORE",JSON.stringify({url:r.url,regex:r.regex})),i()},{deep:!0}),g(async()=>{var r=localStorage.getItem("EX-DATA-DOCS-TESTING-REGEX-STORE");r&&JSON.parse(r)&&(r=JSON.parse(r),r.url!==void 0&&(t.value.url=r.url),r.regex!==void 0&&(t.value.regex=r.regex)),i()}),(r,o)=>(l(),s("div",null,[o[2]||(o[2]=d("label",{for:"form-url"},"Form URL",-1)),p(d("textarea",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.value.url=n),placeholder:"Enter the form URL here..."},null,512),[[h,t.value.url]]),o[3]||(o[3]=d("label",{for:"form-url-regex"},"Form URL RegEx",-1)),p(d("textarea",{"onUpdate:modelValue":o[1]||(o[1]=n=>t.value.regex=n),placeholder:"Enter the form URL RegEx here..."},null,512),[[h,t.value.regex]]),d("p",{class:x({"regex-matched":t.value.isMatched,"regex-not-matched":!t.value.isMatched})},m(t.value.isMatched?"MATCHED :)":"NOT MATCHED :("),3),e.value?(l(),s("pre",_,m(e.value),1)):v("",!0)]))}},T=u(S,[["__scopeId","data-v-12fba135"]]),w=JSON.parse('{"title":"Online RegEx Testing","description":"","frontmatter":{"title":"Online RegEx Testing","lang":"en-US"},"headers":[],"relativePath":"documentation/regex.md","filePath":"documentation/regex.md","lastUpdated":1725714530000}'),y={name:"documentation/regex.md"},D=Object.assign(y,{setup(a){return(t,e)=>(l(),s("div",null,[e[0]||(e[0]=d("h1",{id:"regex",tabindex:"-1"},[b("RegEx "),d("a",{class:"header-anchor",href:"#regex","aria-label":'Permalink to "RegEx"'},"​")],-1)),e[1]||(e[1]=d("p",null,"Check Real Time RegEx String.",-1)),e[2]||(e[2]=d("h2",{id:"testing-regex",tabindex:"-1"},[b("Testing RegEx "),d("a",{class:"header-anchor",href:"#testing-regex","aria-label":'Permalink to "Testing RegEx"'},"​")],-1)),E(T),e[3]||(e[3]=R('<h2 id="pattens" tabindex="-1">Pattens <a class="header-anchor" href="#pattens" aria-label="Permalink to &quot;Pattens&quot;">​</a></h2><table tabindex="0"><thead><tr><th>RegEx</th><th>Description</th></tr></thead><tbody><tr><td>.</td><td>Any character except <strong>newline</strong></td></tr><tr><td>^</td><td>beginning <code>(match start of line)</code></td></tr><tr><td>$</td><td>end <code>(match end of line)</code></td></tr><tr><td><code>\\w</code> <code>\\d</code> <code>\\s</code></td><td>word, digit, whitespace</td></tr><tr><td><code>\\W</code> <code>\\D</code> <code>\\S</code></td><td>not word, digit, whitespace</td></tr><tr><td><code>\\.</code> <code>\\*</code> <code>\\\\</code></td><td>escaped special characters</td></tr><tr><td>[abc]</td><td>any of a, b, or c</td></tr><tr><td>[^abc]</td><td>not a, b, or c</td></tr><tr><td>[a-z]</td><td>character between a &amp; z</td></tr><tr><td>[A-Z]</td><td>character between A &amp; Z</td></tr><tr><td>[0-9]</td><td>number between 0 &amp; 9</td></tr><tr><td>^abc$</td><td>start / end of the string</td></tr><tr><td>(abc)</td><td>Capture group</td></tr><tr><td><code>a{5}</code> <code>a{2,}</code></td><td>exactly five, two or more</td></tr><tr><td><code>a{1,3}</code></td><td>between one &amp; three</td></tr><tr><td>ab|cd</td><td>match ab or cd</td></tr></tbody></table><h3 id="basic-pattens" tabindex="-1">Basic Pattens <a class="header-anchor" href="#basic-pattens" aria-label="Permalink to &quot;Basic Pattens&quot;">​</a></h3><table tabindex="0"><thead><tr><th>RegEx</th><th>URL/String</th><th>Result</th></tr></thead><tbody><tr><td>^r</td><td>rabbit <br> parrot</td><td>✅ <br> ❌</td></tr><tr><td>t$</td><td>rabbit <br> trap</td><td>✅ <br> ❌</td></tr><tr><td>(\\d+)</td><td>45 <br> 45A <br> 45/A</td><td>✅ <br> ✅<br> ✅</td></tr><tr><td>(\\d+$)</td><td>45 <br> 45A <br> 45/A</td><td>✅ <br> ❌<br> ❌</td></tr><tr><td>(\\d{2}/\\d{2}/\\d{4})</td><td>05/09/2024 <br> 5/09/2024 <br> 05/9/2024 <br> 05/9/224</td><td>✅ <br> ❌<br> ❌<br> ❌</td></tr></tbody></table><h3 id="advance-pattens" tabindex="-1">Advance Pattens <a class="header-anchor" href="#advance-pattens" aria-label="Permalink to &quot;Advance Pattens&quot;">​</a></h3><table tabindex="0"><thead><tr><th>RegEx</th><th>URL/String</th><th>Result</th></tr></thead><tbody><tr><td><a href="https://demo.in/form/page/(%5Cd+$)" target="_blank" rel="noreferrer">https://demo.in/form/page/(\\d+$)</a></td><td><a href="https://demo.in/form/page/45" target="_blank" rel="noreferrer">https://demo.in/form/page/45</a> <br> <a href="https://demo.in/form/page/45A" target="_blank" rel="noreferrer">https://demo.in/form/page/45A</a> <br> <a href="https://demo.in/form/page/45/A" target="_blank" rel="noreferrer">https://demo.in/form/page/45/A</a></td><td>✅ <br> ❌<br> ❌</td></tr><tr><td><a href="https://demo.in/form/(%5Cd+)/(%5Cd+$)" target="_blank" rel="noreferrer">https://demo.in/form/(\\d+)/(\\d+$)</a></td><td><a href="https://demo.in/form/02/45" target="_blank" rel="noreferrer">https://demo.in/form/02/45</a> <br> <a href="https://demo.in/form/02Q/45A" target="_blank" rel="noreferrer">https://demo.in/form/02Q/45A</a> <br> <a href="https://demo.in/form/02/45/A" target="_blank" rel="noreferrer">https://demo.in/form/02/45/A</a></td><td>✅ <br> ❌<br> ❌</td></tr><tr><td>param=[^&amp;]+&amp;param2=([^&amp;]+)$</td><td>param=Data%20saved&amp;param2=124045 <br>param=Data%20saved&amp;param2=124045&amp;param3=done</td><td>✅ <br> ❌</td></tr></tbody></table>',6))]))}});export{w as __pageData,D as default};