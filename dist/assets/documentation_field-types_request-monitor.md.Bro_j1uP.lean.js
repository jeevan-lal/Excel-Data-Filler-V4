import{_ as t,c as o,a2 as i,o as r}from"./chunks/framework.BLxugvkI.js";const q=JSON.parse('{"title":"Request Monitor","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/request-monitor.md","filePath":"documentation/field-types/request-monitor.md","lastUpdated":1710002641000}'),a={name:"documentation/field-types/request-monitor.md"};function s(n,e,h,u,l,d){return r(),o("div",null,e[0]||(e[0]=[i('<h1 id="request-monitor" tabindex="-1">Request Monitor <a class="header-anchor" href="#request-monitor" aria-label="Permalink to &quot;Request Monitor&quot;">​</a></h1><p>The request running in the background of the page can be detected through this field type.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th></tr></thead><tbody><tr><td><a href="#request-url">Request URL</a></td></tr><tr><td><a href="#request-url-type">Request URL Type</a></td></tr><tr><td><a href="#request-method">Request Method</a></td></tr><tr><td><a href="#timeout-to-monitor-request">Timeout to Monitor Request</a></td></tr><tr><td><a href="#if-you-want-to-check-the-request-status-code">If you want to check the Request Status Code</a></td></tr><tr><td><a href="#monitor-request-in-the-background-process">Monitor Request in the background process</a></td></tr></tbody></table><h2 id="request-url" tabindex="-1">Request URL <a class="header-anchor" href="#request-url" aria-label="Permalink to &quot;Request URL&quot;">​</a></h2><p>The URL of the request is given in the value of this field. You can also give the URL in the <strong>default value</strong> of the field.</p><h2 id="request-url-type" tabindex="-1">Request URL Type <a class="header-anchor" href="#request-url-type" aria-label="Permalink to &quot;Request URL Type&quot;">​</a></h2><p>The type of the given URL is given in this option.</p><ul><li>Match with Full URL</li><li>Match with RegEx</li></ul><h2 id="request-method" tabindex="-1">Request Method <a class="header-anchor" href="#request-method" aria-label="Permalink to &quot;Request Method&quot;">​</a></h2><p>The type of method of the request is given in it.</p><ul><li>GET</li><li>POST</li><li>PUT</li><li>PATCH</li><li>DELETE</li><li>OPTIONS</li><li>HEAD</li></ul><h2 id="timeout-to-monitor-request" tabindex="-1">Timeout to Monitor Request <a class="header-anchor" href="#timeout-to-monitor-request" aria-label="Permalink to &quot;Timeout to Monitor Request&quot;">​</a></h2><p>After completion of the time given in this, this field returns false. In this the time is given in <strong>seconds</strong>.</p><h2 id="if-you-want-to-check-the-request-status-code" tabindex="-1">If you want to check the Request Status Code <a class="header-anchor" href="#if-you-want-to-check-the-request-status-code" aria-label="Permalink to &quot;If you want to check the Request Status Code&quot;">​</a></h2><p>After the request is completed, you can check the status code of that request through that option.</p><h2 id="monitor-request-in-the-background-process" tabindex="-1">Monitor Request in the background process <a class="header-anchor" href="#monitor-request-in-the-background-process" aria-label="Permalink to &quot;Monitor Request in the background process&quot;">​</a></h2><p>By default this field waits for the request to be completed and the filler does not proceed until something changes to the element. But after turning on this option, it checks the completion of the request in the <strong>background</strong> and executes the filler next field.</p><details class="details custom-block"><summary>After turning on this option, it checks the request in the background, then how to check whether the request has completed or not?</summary><p>Next in which field do you want to check whether the request has been completed or not, you can use the option given below in the settings of the field in which you want to check.</p><p><a href="/documentation/form-fields/field-settings.html#wait-until-the-response-status-of-the-given-request-monitor-fields-comes">Wait until the response status of the given request monitor fields comes</a></p></details>',19)]))}const f=t(a,[["render",s]]);export{q as __pageData,f as default};
