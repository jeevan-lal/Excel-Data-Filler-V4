import{_ as e}from"./chunks/form-01.mro9GGmJ.js";import{_ as i,c as r,a2 as o,o as a}from"./chunks/framework.BLxugvkI.js";const n="/image/insert-site-form-manually-01.png",l="/image/form-url-with-regex.png",s="/image/copy_site_id.png",h="/image/insert-site-form-01.png",w=JSON.parse('{"title":"Site Form","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/form/form.md","filePath":"documentation/form/form.md","lastUpdated":1731689622000}'),m={name:"documentation/form/form.md"};function d(f,t,p,c,u,g){return a(),r("div",null,t[0]||(t[0]=[o('<h1 id="site-form" tabindex="-1">Site Form <a class="header-anchor" href="#site-form" aria-label="Permalink to &quot;Site Form&quot;">​</a></h1><p>The part of the site on which you want to execute the extension is called a form. This form is inserted in the <a href="/documentation/site/site.html">site</a>.</p><img src="'+e+'" alt="Form"><h2 id="insert-site-form" tabindex="-1">Insert Site Form <a class="header-anchor" href="#insert-site-form" aria-label="Permalink to &quot;Insert Site Form&quot;">​</a></h2><p>First we have to <a href="/documentation/site/site.html#insert-site">insert the site</a>, after that by editing the site, you can also insert the form of the site, in this you can also insert <strong>multiple</strong> forms.</p><ul><li>First <a href="/documentation/site/site.html#insert-site">Insert Site</a>.</li><li>Click the edit site button.</li><li>Open <strong>Site Form Pages</strong> tab and click insert form button and fill page <strong>Page URL</strong> and <a href="#form-url-match-types"><strong>URL Match Type</strong></a>.</li><li>Click Save Button.</li><li>DONE 🎉</li></ul><img src="'+n+'" alt="Insert Site Manually"><br><ul><li>Page URL</li><li>Match URL Types</li><li>Description</li><li>Active/Deactivate</li><li>Move Up/Down</li><li>Form Fields</li><li>Edit Form</li><li>Duplicate</li><li>Copy Form</li><li>Paste Form</li><li>Delete Form</li></ul><h4 id="form-url-match-types" tabindex="-1">Form URL Match Types <a class="header-anchor" href="#form-url-match-types" aria-label="Permalink to &quot;Form URL Match Types&quot;">​</a></h4><ul><li>Match with Full URL</li><li>Match with URL pathname</li><li>Match with URL hostname</li><li>Match with RegEx</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Match with RegEx (Two RegEx)</p><ul><li>(:any)</li><li>(:any(:end))</li></ul></div><table tabindex="0"><thead><tr><th>SITE FORM URL WITH REGEX</th><th>SITE FORM URL</th><th>IS MATCHED</th></tr></thead><tbody><tr><td><a href="http://demo.in/new/(:any)/edit" target="_blank" rel="noreferrer">http://demo.in/new/(:any)/edit</a></td><td><a href="http://demo.in/new/jK33k3ui/edit" target="_blank" rel="noreferrer">http://demo.in/new/jK33k3ui/edit</a></td><td>✔</td></tr><tr><td><a href="http://demo.in/new/(:any(:end)" target="_blank" rel="noreferrer">http://demo.in/new/(:any(:end)</a>)</td><td><a href="http://demo.in/new/jK33k3ui" target="_blank" rel="noreferrer">http://demo.in/new/jK33k3ui</a></td><td>✔</td></tr></tbody></table><img src="'+l+'" width="500" height="500" alt="RegEx"><blockquote><p><a href="/documentation/regex.html">Online Test RegEx</a></p></blockquote><h2 id="insert-multiple-form" tabindex="-1">Insert Multiple Form <a class="header-anchor" href="#insert-multiple-form" aria-label="Permalink to &quot;Insert Multiple Form&quot;">​</a></h2><p>If your site has multiple forms, then you can insert all the forms in the same site, for this you have to first <a href="/documentation/site/site.html#insert-site">insert the main form of the site</a>.</p><p>After the site is inserted, you will have to copy the id of the site with the help of the image given below.</p><img src="'+s+'" width="350" height="350" alt="Copy Site ID"><p>After the site id is copied, you will open the form which you have to insert, after opening, right click on the icon of Extension and select the option of <strong>Insert Form</strong> like the image given below.</p><img src="'+h+'" width="350" height="350" alt="Insert Site Form"><p>After this, you have to paste the site id in the prompt box and press it ok, your form will be inserted in that site.</p><p>DONE 🎉</p><h2 id="insert-form-field" tabindex="-1">Insert Form Field <a class="header-anchor" href="#insert-form-field" aria-label="Permalink to &quot;Insert Form Field&quot;">​</a></h2><p>After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field. <a href="/documentation/form-fields/field.html">more details</a></p>',25)]))}const F=i(m,[["render",d]]);export{w as __pageData,F as default};