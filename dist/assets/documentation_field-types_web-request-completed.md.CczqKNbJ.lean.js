import{_ as t,c as a,a2 as i,o}from"./chunks/framework.BLxugvkI.js";const s="/image/settings-01.png",m=JSON.parse('{"title":"Web Request Completed","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/web-request-completed.md","filePath":"documentation/field-types/web-request-completed.md","lastUpdated":1694538006000}'),l={name:"documentation/field-types/web-request-completed.md"};function r(n,e,h,u,d,p){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="web-request-completed" tabindex="-1">Web Request Completed <a class="header-anchor" href="#web-request-completed" aria-label="Permalink to &quot;Web Request Completed&quot;">​</a></h1><p>If you want to check whether the web request has been completed then you can use this field type. These fields wait until the web request is completed.</p><p>Before using this, you have to provide the web request URL in the extension <a href="https://efiller.netlify.app/settings#form-filler-settings" target="_blank" rel="noreferrer">settings</a>, only then the extension can check that URL.</p><img src="'+s+'" alt="Image"><h2 id="field-options" tabindex="-1">Field Options <a class="header-anchor" href="#field-options" aria-label="Permalink to &quot;Field Options&quot;">​</a></h2><h3 id="request-url-type" tabindex="-1">Request URL Type <a class="header-anchor" href="#request-url-type" aria-label="Permalink to &quot;Request URL Type&quot;">​</a></h3><ul><li>Match with Full URL</li><li>Match with RegEx</li></ul><h3 id="request-method" tabindex="-1">Request Method <a class="header-anchor" href="#request-method" aria-label="Permalink to &quot;Request Method&quot;">​</a></h3><ul><li>GET</li><li>POST</li><li>PUT</li><li>PATCH</li><li>DELETE</li><li>OPTIONS</li><li>HEAD</li></ul><h3 id="timeout-to-match-web-request-minutes" tabindex="-1">Timeout to Match Web Request (Minutes) <a class="header-anchor" href="#timeout-to-match-web-request-minutes" aria-label="Permalink to &quot;Timeout to Match Web Request (Minutes)&quot;">​</a></h3><p>If the Web Request does not match after the time given in this option is over, then the field returns <strong>False</strong>.</p><h3 id="delete-the-web-request-data-after-completing-this-field" tabindex="-1">Delete the web request data after completing this field <a class="header-anchor" href="#delete-the-web-request-data-after-completing-this-field" aria-label="Permalink to &quot;Delete the web request data after completing this field&quot;">​</a></h3><p>If you want to check single web request then keep this option on and if you want to check multiple web requests then this option has to be kept off but in the last web request this option has to be kept on.</p>',13)]))}const f=t(l,[["render",r]]);export{m as __pageData,f as default};