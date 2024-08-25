import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.CRCV4hx_.js";const o="/image/print-window-01.png",m=JSON.parse('{"title":"Save as PDF","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/save-as-pdf.md","filePath":"documentation/field-types/save-as-pdf.md","lastUpdated":1711299805000}'),n={name:"documentation/field-types/save-as-pdf.md"},r=i('<h1 id="save-as-pdf" tabindex="-1">Save as PDF <a class="header-anchor" href="#save-as-pdf" aria-label="Permalink to &quot;Save as PDF&quot;">​</a></h1><p>To save the page in PDF format, you can use this field type which is done through Print option.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Options</th></tr></thead><tbody><tr><td><a href="#press-ctrl-p">Press Ctrl + P</a></td></tr><tr><td><a href="#do-not-identify-print-window-as-per-image">Do not identify print window as per image</a></td></tr><tr><td><a href="#set-image-path-to-identify-print-window">Set Image Path to Identify Print Window</a></td></tr><tr><td><a href="#set-delay-time-after-opening-print-window">Set delay time after opening print window</a></td></tr><tr><td><a href="#direct-save-page-to-pdf-only-firefox-browser">Direct Save Page to PDF (ONLY FIREFOX BROWSER)</a></td></tr><tr><td><a href="#field-value">Field Value</a></td></tr></tbody></table><h2 id="press-ctrl-p" tabindex="-1">Press Ctrl + P <a class="header-anchor" href="#press-ctrl-p" aria-label="Permalink to &quot;Press Ctrl + P&quot;">​</a></h2><p>If your file/PDF is downloaded after clicking on any button, then you can give the selector query of that button in the field. But if you want to save the page through <code>Ctrl + P</code> then you can turn on this option so that you will not need to press <code>Ctl + P</code> buttons.</p><h2 id="do-not-identify-print-window-as-per-image" tabindex="-1">Do not identify print window as per image <a class="header-anchor" href="#do-not-identify-print-window-as-per-image" aria-label="Permalink to &quot;Do not identify print window as per image&quot;">​</a></h2><p>When we <code>print</code> a page, its print preview comes first. To identify that <code>print preview window</code>, the option given below is done, but if you do not want this, then you can turn on that option.</p><h2 id="set-image-path-to-identify-print-window" tabindex="-1">Set Image Path to Identify Print Window <a class="header-anchor" href="#set-image-path-to-identify-print-window" aria-label="Permalink to &quot;Set Image Path to Identify Print Window&quot;">​</a></h2><p>To identify the print preview window, we have to save an image of that print preview window in the PC and give the path of that image in this option. Due to the size of the page, the print window opens quite late, hence this option is used so that the extension waits until the image is visible on the screen.</p><p>Image can be of this type.</p><img src="'+o+'" alt="Image"><h2 id="set-delay-time-after-opening-print-window" tabindex="-1">Set delay time after opening print window <a class="header-anchor" href="#set-delay-time-after-opening-print-window" aria-label="Permalink to &quot;Set delay time after opening print window&quot;">​</a></h2><p>After opening the print window and before saving the page, delay time can be given in this option.</p><h2 id="direct-save-page-to-pdf-only-firefox-browser" tabindex="-1">Direct Save Page to PDF (ONLY FIREFOX BROWSER) <a class="header-anchor" href="#direct-save-page-to-pdf-only-firefox-browser" aria-label="Permalink to &quot;Direct Save Page to PDF (ONLY FIREFOX BROWSER)&quot;">​</a></h2><p>This option is used only in <code>Firefox Browser</code> to save the file directly.</p><h2 id="field-value" tabindex="-1">Field Value <a class="header-anchor" href="#field-value" aria-label="Permalink to &quot;Field Value&quot;">​</a></h2><p>If you want to change the name of the file then you can give the name of the file in the value of the field.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Set field value if file defined by specific name</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>text-{{date.today[x]}}</span></span></code></pre></div></div>',19),d=[r];function s(p,h,l,f,c,u){return a(),t("div",null,d)}const g=e(n,[["render",s]]);export{m as __pageData,g as default};
