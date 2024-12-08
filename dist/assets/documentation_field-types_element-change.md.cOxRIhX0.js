import{_ as t,c as o,a2 as n,o as i}from"./chunks/framework.BLxugvkI.js";const u=JSON.parse('{"title":"Element Change","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/element-change.md","filePath":"documentation/field-types/element-change.md","lastUpdated":1731430424000}'),a={name:"documentation/field-types/element-change.md"};function h(s,e,l,r,d,c){return i(),o("div",null,e[0]||(e[0]=[n('<h1 id="element-change" tabindex="-1">Element Change <a class="header-anchor" href="#element-change" aria-label="Permalink to &quot;Element Change&quot;">​</a></h1><p>On which element it is used, if that element <strong>changes</strong> then this Field Type returns <strong>true</strong>.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th></tr></thead><tbody><tr><td><a href="#which-dom-mutations-should-be-reported-to">Which DOM mutations should be reported to</a></td></tr><tr><td><a href="#timeout-to-check-element-change">Timeout to Check Element Change (Seconds)</a></td></tr><tr><td><a href="#whether-the-element-is-modified-or-not-do-it-in-the-background-process">Whether the element is modified or not, do it in the background process</a></td></tr></tbody></table><h2 id="which-dom-mutations-should-be-reported-to" tabindex="-1">Which DOM mutations should be reported to <a class="header-anchor" href="#which-dom-mutations-should-be-reported-to" aria-label="Permalink to &quot;Which DOM mutations should be reported to&quot;">​</a></h2><p>The part in which the change is taking place in the element is given here.</p><ul><li>attributes</li><li>childList</li><li>characterData</li><li>subtree</li></ul><h2 id="timeout-to-check-element-change" tabindex="-1">Timeout to Check Element Change <a class="header-anchor" href="#timeout-to-check-element-change" aria-label="Permalink to &quot;Timeout to Check Element Change&quot;">​</a></h2><p>After completion of the time given in this, this field returns false. In this the time is given in <strong>seconds</strong>.</p><h2 id="whether-the-element-is-modified-or-not-do-it-in-the-background-process" tabindex="-1">Whether the element is modified or not, do it in the background process <a class="header-anchor" href="#whether-the-element-is-modified-or-not-do-it-in-the-background-process" aria-label="Permalink to &quot;Whether the element is modified or not, do it in the background process&quot;">​</a></h2><p>By default it waits for the field element to change and the filler does not move forward until something changes in the element. But after turning on this option, it checks the process of element change in the <strong>background</strong> and Filler executes the next fields.</p><details class="details custom-block"><summary>After turning on this option, it checks the element change in the background, then how to check whether the element has changed or not?</summary><p>In which next field you want to check whether the element has changed, you can use the option given below in the settings of the field in which you want to check.</p><p><a href="/documentation/form-fields/field-settings.html#wait-until-the-response-status-of-the-given-element-change-fields-comes">Wait until the response status of the given element change fields comes</a></p></details><h2 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;Tips&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>If using this field type then turn off this field setting <a href="/documentation/form-fields/field-settings.html#do-not-fill-the-status-color-element-of-this-field">Do not fill the Status Color, element of this field</a>.</p></div><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>If the element changes before the extension&#39;s Element Change field type action takes place, the action on this field type will not be completed and your filler will also stop.</p></div>',15)]))}const p=t(a,[["render",h]]);export{u as __pageData,p as default};