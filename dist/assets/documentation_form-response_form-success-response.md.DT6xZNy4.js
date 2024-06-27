import{_ as a,D as n,c as i,I as o,a3 as t,o as r,aU as c,aV as h,aO as e,aW as l,aX as g,aR as u,aY as d}from"./chunks/framework.CcvpjY6B.js";const k=JSON.parse('{"title":"Form Success Response","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/form-response/form-success-response.md","filePath":"documentation/form-response/form-success-response.md","lastUpdated":1710002641000}'),m={name:"documentation/form-response/form-success-response.md"},p=t('<h1 id="form-success-response" tabindex="-1">Form Success Response <a class="header-anchor" href="#form-success-response" aria-label="Permalink to &quot;Form Success Response&quot;">​</a></h1><p>Through this option, you can match the success response (returned from server), when a entry is submitted, When It matches with given success response, entry will be marked as <strong>Entry Saved</strong> and You can also set the <a href="#action">action</a></p><img src="'+c+'" width="400" height="400" alt="Form Success Response"><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><a href="#success-page-url">Success Page URL</a></td><td>The URL of the page on which the entry success message appears.</td></tr><tr><td><a href="#match-url-types">Match URL Types</a></td><td>What is the type of Success Page URL given above is given in this.</td></tr><tr><td><a href="#success-response-type">Success Response Type</a></td><td>The type of success message appears on the page is given in this option.</td></tr><tr><td><a href="#enter-success-message">Enter Success Message</a></td><td>The success message that comes after the entry is saved is given.</td></tr><tr><td><a href="#delay-time-before-run-action">Delay Time Before Run Action</a></td><td>Time delay before the <a href="#action">action</a> is executed.</td></tr><tr><td><a href="#action">Action</a></td><td>If the given <a href="#success-response-type">Success Response Type</a> matches, then this action is executed.</td></tr></tbody></table><h2 id="additional-options" tabindex="-1">Additional Options <a class="header-anchor" href="#additional-options" aria-label="Permalink to &quot;Additional Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Completed the entry if the success response matches</td><td>If <strong>multiple forms</strong> are being used in the site then it is necessary to keep this option on.</td></tr><tr><td>If excel data is not found then don&#39;t execute the action</td><td>Even if there is no data in Excel, the <a href="#action">action</a> is still executing, then you can turn it off with this option.</td></tr><tr><td>If last excel entry completed then don&#39;t execute the action</td><td>If the last entry of excel has been saved and you do not want the <a href="#action">action</a> not to be executed after the last entry, then you can do it by turning on this option.</td></tr><tr><td>If there is no Excel data, update only scraper data in Excel</td><td>If you are <a href="/documentation/form-fields/field-types.html#scraper-data">scraping data</a> from the site and you are not using Excel template in the extension, then the data being scraped from that option will be saved in the extension.</td></tr><tr><td>Can success message be anything in this element</td><td>If the success message of the entry is always changing then using this option matches <strong>any type of message</strong> in the given element.</td></tr></tbody></table><h2 id="success-page-url" tabindex="-1">Success Page URL <a class="header-anchor" href="#success-page-url" aria-label="Permalink to &quot;Success Page URL&quot;">​</a></h2><p>Fill in the URL of the page on which you want to match the success response.</p><h2 id="match-url-types" tabindex="-1">Match URL Types <a class="header-anchor" href="#match-url-types" aria-label="Permalink to &quot;Match URL Types&quot;">​</a></h2><p>How you want to match with <a href="#success-page-url">Success Page URL</a></p><ul><li>Match with Full URL</li><li>Match with URL <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname" target="_blank" rel="noreferrer">pathname</a></li><li>Match with URL <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname" target="_blank" rel="noreferrer">hostname</a></li><li>Match with RegEx</li></ul><h2 id="success-response-type" tabindex="-1">Success Response Type <a class="header-anchor" href="#success-response-type" aria-label="Permalink to &quot;Success Response Type&quot;">​</a></h2><p>It is about, How server returns Success Response to User.</p><ol><li><a href="#matching-message-in-page">Matching Message In Page</a></li><li><a href="#matching-message-in-alert-message">Matching Message In Browser Alert</a></li><li><a href="#matching-message-in-page-element-value">Matching Message In Page Element Value</a></li><li><a href="#checking-element-exists-in-page">Checking Element Exists In Page</a></li><li><a href="#matching-success-page-url">Matching Success Page URL</a></li></ol><h3 id="matching-message-in-page" tabindex="-1">Matching Message In Page <a class="header-anchor" href="#matching-message-in-page" aria-label="Permalink to &quot;Matching Message In Page&quot;">​</a></h3><p>If the success message is visible in the page after the entry is saved, then you can choose that option. Message can be like this. The text of this message is given in the <a href="#enter-success-message">Enter Success Message</a> option.</p><img src="'+h+'" alt="Form Success Response"><p>You can also give the address of the element of success message. By default success message is searched in the entire page. If you want the Success Message to be searched only in the element given by you, then you can give the Selector Query of that message in the <em>Message Selector Query</em> Field.</p><img src="'+e+'" width="500" height="500" alt="Image"><h3 id="matching-message-in-alert-message" tabindex="-1">Matching Message In Alert Message <a class="header-anchor" href="#matching-message-in-alert-message" aria-label="Permalink to &quot;Matching Message In Alert Message&quot;">​</a></h3><p>If the response of the entry comes in the form of <strong>javascript dialog</strong> (Browser Alert), you can hide the dialog from <a href="/documentation/extension.html#hide-javascript-dialog">extension settings</a> and fetch the response to match against given <a href="#enter-success-message">Enter Success Message</a>.</p><img src="'+l+'" alt="Alert Dialog"><h3 id="matching-message-in-page-element-value" tabindex="-1">Matching Message In Page Element Value <a class="header-anchor" href="#matching-message-in-page-element-value" aria-label="Permalink to &quot;Matching Message In Page Element Value&quot;">​</a></h3><p>If the Success Message appears in the page itself but in the Form Field (<strong>InputBox</strong>), then you can use it. The message has to be given in <a href="#enter-success-message">Enter Success Message</a> and the selector query of that field is given in the option given below.</p><img src="'+e+'" width="500" height="500" alt="Image"><h3 id="checking-element-exists-in-page" tabindex="-1">Checking Element Exists In Page <a class="header-anchor" href="#checking-element-exists-in-page" aria-label="Permalink to &quot;Checking Element Exists In Page&quot;">​</a></h3><p>If you want to check only the element in the page then you can use this option. But keep in mind that element should not already be present in the page and should come only after the entry is saved. Selector query of that element is given in the option given below.</p><img src="'+e+'" width="500" height="500" alt="Image"><h3 id="matching-success-page-url" tabindex="-1">Matching Success Page URL <a class="header-anchor" href="#matching-success-page-url" aria-label="Permalink to &quot;Matching Success Page URL&quot;">​</a></h3><p>If you only want to check that the <a href="#success-page-url">Success Page URL</a> given by you matches only this, then you can use this option. But keep in mind that both the entry page URL and the success page URL should be different.</p><h2 id="enter-success-message" tabindex="-1">Enter Success Message <a class="header-anchor" href="#enter-success-message" aria-label="Permalink to &quot;Enter Success Message&quot;">​</a></h2><p>If Server returns something back to user after form is successfully submitted, Then you can use it along with <strong>Success Response Type</strong> to check If form is really saved.</p><p>Here you can have multiple messages. If any of the given messages is matched, then the extension will mark the current entry as <strong>saved</strong> and after that, it will execute the <a href="#action">Action</a> given by you.</p><p>Example:</p><img src="'+g+'" alt="Form Success Response"><details class="details custom-block"><summary>Will the success message be checked across the page?</summary><p><strong>Yes</strong>. By Default success messages are checked across the page. With <strong>Message Selector Query</strong> Option, you can give selector query of any element of the page, and <strong>success messages</strong> will only be checked in that selector query scope.</p><img src="'+u+'" alt="Form Success Response"><br></details><details class="details custom-block"><summary>Will the entry be filled, if the success message is already present in the page?</summary><p>If any success message is present in the page <strong>before</strong> submitting the form, then the extension will have a match against the given <strong>success messages</strong> before the entry and the <strong>entry will not be filled</strong>.</p></details><details class="details custom-block"><summary>How to fill dynamic success message?</summary><p>If server response is dynamic or changes every time or It has some data from any column from excel, then you can use variable like this.</p><img src="'+d+'" width="400" height="400" alt="Entry Response"><p>Apart from this, if you only give <strong>&quot;OTP number send to this mobile&quot;</strong> in the success message, it will also work.</p></details><h2 id="delay-time-before-run-action" tabindex="-1">Delay Time Before Run Action <a class="header-anchor" href="#delay-time-before-run-action" aria-label="Permalink to &quot;Delay Time Before Run Action&quot;">​</a></h2><p>Time delay before the <a href="#action">action</a> is executed. Set time in the Milliseconds.</p>',41),f=t('<h2 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h2><p>If the given <a href="#success-response-type">Success Response Type</a> matches, then this action is executed.</p><ul><li>Redirect to Page</li><li>Re-Execute Form</li><li>Click on Button</li><li>Page Reload</li><li>Execute Segment</li></ul>',3);function y(b,_,x,v,S,R){const s=n("Badge");return r(),i("div",null,[p,o(s,{type:"tip",text:"1 seconds = 1000 milliseconds"}),f])}const P=a(m,[["render",y]]);export{k as __pageData,P as default};
