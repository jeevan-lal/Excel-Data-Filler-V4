import{_ as e,c as t,o as i,a4 as n}from"./chunks/framework.CRCV4hx_.js";const o="/image/field-settings-01.png",a="/image/field-settings-02.png",s="/image/site-settings-01.png",l="/image/replace-field-value-01.png",h="/image/field-settings-03.png",r="/image/field-settings-04.png",d="/image/field-settings-05.png",c="/image/field-settings-06.png",f="/image/field-settings-07.png",u="/image/field-settings-11.png",g="/image/field-settings-12.png",p="/image/field-settings-08.png",m="/image/field-settings-09.png",v="/image/skip-field-01.png",P=JSON.parse('{"title":"Field Settings","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/form-fields/field-settings.md","filePath":"documentation/form-fields/field-settings.md","lastUpdated":1724588028000}'),b={name:"documentation/form-fields/field-settings.md"},y=n('<h1 id="field-settings" tabindex="-1">Field Settings <a class="header-anchor" href="#field-settings" aria-label="Permalink to &quot;Field Settings&quot;">​</a></h1><p>When you <strong>edit</strong> the field, a sidebar opens like the picture given below, it contains the settings of the field. Some field settings are for a particular <a href="/documentation/form-fields/field.html">field type</a> only.</p><img src="'+o+'" width="500" height="500" alt="Field Settings"><h2 id="fill-the-values-​​like-a-typing-tutor" tabindex="-1">Fill the values ​​like a typing tutor <a class="header-anchor" href="#fill-the-values-​​like-a-typing-tutor" aria-label="Permalink to &quot;Fill the values ​​like a typing tutor&quot;">​</a></h2><p>Through this, you can type the value in the <strong>Input Field</strong> like a <strong>Typing Tutor</strong> and you can also set the speed of typing.</p><h2 id="if-form-is-aspx-then-remove-input-behavior" tabindex="-1">If Form is ASPX then Remove Input Behavior <a class="header-anchor" href="#if-form-is-aspx-then-remove-input-behavior" aria-label="Permalink to &quot;If Form is ASPX then Remove Input Behavior&quot;">​</a></h2><p>This field setting removes the <strong>behavior</strong> of the element in the <strong>.aspx</strong> form.</p><h2 id="before-filling-the-value-in-the-field-clear-the-value-of-the-field" tabindex="-1">Before filling the value in the field, clear the value of the field <a class="header-anchor" href="#before-filling-the-value-in-the-field-clear-the-value-of-the-field" aria-label="Permalink to &quot;Before filling the value in the field, clear the value of the field&quot;">​</a></h2><p>If you want to <strong>clear</strong> the value of that field before filling the value in the field, then you can give that <strong>clear value</strong> in this setting.</p><h2 id="if-excel-column-value-is-empty-then-fill-this-default-value" tabindex="-1">If excel column value is empty then fill this default value <a class="header-anchor" href="#if-excel-column-value-is-empty-then-fill-this-default-value" aria-label="Permalink to &quot;If excel column value is empty then fill this default value&quot;">​</a></h2><p>If the value of the field is not in the excel sheet then the value given in this setting is set in that field.</p><p>If you want to check in which field the default value is set, then you can find out from the <strong>color</strong> of the <strong>edit button</strong> of the field. If the color of the edit button is <strong>green</strong> then the default value is set in that field and if the color of the edit button is <strong>yellow</strong> then that Field does not have default value set. By the image below.</p><img src="'+a+'" width="" height="" alt="Field Default Value"><p>If the default value is already set in multiple fields and you do not want the default value to be set in the field, then you can remove the default value in <strong>two</strong> ways -</p><ol><li>You can edit the fields in which Default Value is present and turn off the Default Settings.</li><li>To ignore the default value from all the fields of the site, you can turn on the option of <code>Ignore field default value</code> in <strong>Site Settings</strong>. By the image below</li></ol><img src="'+s+'" width="400" height="400" alt="Site Settings"><h2 id="take-the-value-of-this-field-from-another-excel-column" tabindex="-1">Take the value of this field from another excel column <a class="header-anchor" href="#take-the-value-of-this-field-from-another-excel-column" aria-label="Permalink to &quot;Take the value of this field from another excel column&quot;">​</a></h2><p>If there are two fields in your form in which the same value is filled, then you can create only one column in Excel Template and you can give the name of that column in this setting of the second field, then the second field value will be replaced by first field value.</p><h2 id="replace-the-field-value-according-to-the-custom-values" tabindex="-1">Replace the field value according to the custom values <a class="header-anchor" href="#replace-the-field-value-according-to-the-custom-values" aria-label="Permalink to &quot;Replace the field value according to the custom values&quot;">​</a></h2><p>Through this setting you can <strong>replace</strong> the field value with multiple custom values. See the image given below, it has multiple rows and each row has two fields, <strong>Field Value</strong> and <strong>Custom Values</strong>.</p><img src="'+l+'" width="400" height="400" alt="Site Settings"><p>In the field in which we have turned on this setting, if the value of that field is <strong><code>&quot;Yes/Y&quot;</code></strong> then the Field Value will change to <strong><code>&quot;0&quot;</code></strong> and if the value of the field is <strong><code>&quot;No/N&quot;</code></strong> then the Field Value will change to <strong><code>&quot;1&quot;</code></strong>.</p><p>Through this you can change the <strong>Field Value</strong> in <strong>Excel Template</strong> as per your choice.</p><p>The custom value you set in setting will appear in the <code>Field Custom Values</code> column in the <code>HELPING</code> sheet of the Excel template. Like the image given below.</p><img src="'+h+'" width="600" height="600" alt="Site Settings"><h2 id="paste-copied-value" tabindex="-1">Paste Copied Value <a class="header-anchor" href="#paste-copied-value" aria-label="Permalink to &quot;Paste Copied Value&quot;">​</a></h2><p>Before using this setting, you will have to use <a href="/documentation/field-types/copy.html">Copy Field Type</a>, only after this you can paste the value of the copy.</p><p>Before pasting, you can also modify the copied text through the options in the image given below.</p><img src="'+r+'" width="500" height="500" alt="Site Settings"><h2 id="wait-until-element-is-found-in-the-page" tabindex="-1">Wait until element is found in the page <a class="header-anchor" href="#wait-until-element-is-found-in-the-page" aria-label="Permalink to &quot;Wait until element is found in the page&quot;">​</a></h2><p>This setting does not allow the <strong>action</strong> of the field to proceed until the element given in the field is <strong>found</strong> in the page.</p><h2 id="wait-until-element-is-visible-in-the-page" tabindex="-1">Wait until element is visible in the page <a class="header-anchor" href="#wait-until-element-is-visible-in-the-page" aria-label="Permalink to &quot;Wait until element is visible in the page&quot;">​</a></h2><p>This setting does not allow the <strong>action</strong> of the field to proceed until the element given in the field is <strong>found</strong> and <strong>visible</strong> in the page.</p><h2 id="trigger-javascript-event" tabindex="-1">Trigger Javascript Event <a class="header-anchor" href="#trigger-javascript-event" aria-label="Permalink to &quot;Trigger Javascript Event&quot;">​</a></h2><p>When you <strong>press</strong> keyboard key or <strong>click</strong> mouse button on the page or any element, JavaScript Events are <strong>executed</strong>, which you can trigger through this setting.</p><p>Every action has different events. <a href="https://www.javatpoint.com/javascript-events" target="_blank" rel="noreferrer">More Details</a></p><img src="'+d+'" width="500" height="500" alt="Site Settings"><h2 id="trigger-javascript-mouse-event" tabindex="-1">Trigger Javascript Mouse Event <a class="header-anchor" href="#trigger-javascript-mouse-event" aria-label="Permalink to &quot;Trigger Javascript Mouse Event&quot;">​</a></h2><p>Trigger any javascript mouse event through this setting.</p><img src="'+c+'" width="500" height="500" alt="Site Settings"><h2 id="skip-field-action-if-any-condition-is-true" tabindex="-1">Skip field action if any condition is true <a class="header-anchor" href="#skip-field-action-if-any-condition-is-true" aria-label="Permalink to &quot;Skip field action if any condition is true&quot;">​</a></h2><p>If any of the conditions given in this setting are <strong>true</strong> then the action of that field will not be executed.</p><img src="'+f+'" width="500" height="500" alt="Site Settings"><h2 id="wait-until-the-response-status-of-the-given-element-change-fields-comes" tabindex="-1">Wait until the response status of the given element change fields comes <a class="header-anchor" href="#wait-until-the-response-status-of-the-given-element-change-fields-comes" aria-label="Permalink to &quot;Wait until the response status of the given element change fields comes&quot;">​</a></h2><p>In this Settings, only the Field Name of <a href="/documentation/field-types/element-change.html">Element Change</a> Field Type can be given. This setting checks the status of the given field <code>(After Field/Before Field)</code> and if the field status is <em>true</em>, the filler proceeds.</p><img src="'+u+'" alt="Site Settings"><h2 id="wait-until-the-response-status-of-the-given-request-monitor-fields-comes" tabindex="-1">Wait until the response status of the given request monitor fields comes <a class="header-anchor" href="#wait-until-the-response-status-of-the-given-request-monitor-fields-comes" aria-label="Permalink to &quot;Wait until the response status of the given request monitor fields comes&quot;">​</a></h2><p>In this Settings, only the Field Name of <a href="/documentation/field-types/request-monitor.html">Request Monitor</a> Field Type can be given. This setting checks the status of the given field <code>(After Field/Before Field)</code> and if the field status is <em>true</em>, the filler proceeds.</p><img src="'+g+'" alt="Site Settings"><h2 id="if-element-value-matches-then-fill-the-value-otherwise-skip-the-field" tabindex="-1">If element value matches then fill the value otherwise skip the field <a class="header-anchor" href="#if-element-value-matches-then-fill-the-value-otherwise-skip-the-field" aria-label="Permalink to &quot;If element value matches then fill the value otherwise skip the field&quot;">​</a></h2><p>If the value of the <strong>element</strong> of the field matches with the <strong>values</strong> given in this setting then the Field <em>Action</em> will be executed but if the value does not match then the action of that field will be <strong>skipped</strong>.</p><img src="'+p+'" width="500" height="500" alt="Site Settings"><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If the value of the element is to be checked <strong>empty</strong> then the empty value will be represented by <strong><code>&#39;&#39;</code></strong>.</p></div><h2 id="skip-field-action-if-condition-is-true" tabindex="-1">Skip field action if condition is true <a class="header-anchor" href="#skip-field-action-if-condition-is-true" aria-label="Permalink to &quot;Skip field action if condition is true&quot;">​</a></h2><p>If any of the conditions given in this setting are <strong>true</strong> then the action of that field will not be executed.</p><img src="'+m+'" width="500" height="500" alt="Site Settings"><h3 id="conditions" tabindex="-1">Conditions <a class="header-anchor" href="#conditions" aria-label="Permalink to &quot;Conditions&quot;">​</a></h3><ul><li>Element Visible</li><li>Element Not Visible</li><li>Element Exists</li><li>Element Not Exists</li><li>Element Value Matched</li><li>Element Text Matched</li><li>Element Attribute Matched</li><li>Element HTML Matched</li><li>Image File Name Matched</li></ul><h2 id="skip-field-action-if-given-field-value-matches" tabindex="-1">Skip field action if given field value matches <a class="header-anchor" href="#skip-field-action-if-given-field-value-matches" aria-label="Permalink to &quot;Skip field action if given field value matches&quot;">​</a></h2><p>If value of the given field is present in the <code>Field Values</code> given below then the field will be <code>skipped</code> in that case.</p><img src="'+v+'" width="500" height="500" alt="Site Settings"><p>If value of the field <code>(Does the Beneficiary have Aadhaar Card?)</code> is <code>No/N</code> in Excel then the field in which this condition is given will be <code>skipped</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you want to set blank/empty value then fill it with <code>&#39;&#39;</code>.</p></div><h2 id="is-this-field-required" tabindex="-1">Is this field Required <a class="header-anchor" href="#is-this-field-required" aria-label="Permalink to &quot;Is this field Required&quot;">​</a></h2><p>If the field is required in the form then you can turn on this setting. If you have used <a href="/documentation/keys.html#public-keys">Public Key</a> <strong><code>{FORM-FILLED}</code></strong> to submit the form, then this key checks only <em>Required Fields</em>. If all the Required Fields are filled then <strong>{FORM-FILLED}</strong> Key will submit the Form, otherwise not.</p><h2 id="field-success-response-action" tabindex="-1">Field Success Response Action <a class="header-anchor" href="#field-success-response-action" aria-label="Permalink to &quot;Field Success Response Action&quot;">​</a></h2><p>After running the field, if the <strong>response</strong> of the field is <code>success</code> then this setting is executed.</p><p><a href="/documentation/form-fields/field-response-action.html#field-success-response-action">Field Response Action</a></p><h2 id="field-error-response-action" tabindex="-1">Field Error Response Action <a class="header-anchor" href="#field-error-response-action" aria-label="Permalink to &quot;Field Error Response Action&quot;">​</a></h2><p>After running the field, if the <strong>response</strong> of the field is <code>error</code> then this setting is executed.</p><p><a href="/documentation/form-fields/field-response-action.html#field-error-response-action">Field Response Action</a></p><h2 id="field-skip-response-action" tabindex="-1">Field Skip Response Action <a class="header-anchor" href="#field-skip-response-action" aria-label="Permalink to &quot;Field Skip Response Action&quot;">​</a></h2><p>After running the field, if the <strong>response</strong> of the field is <code>skip</code> then this setting is executed.</p><p><a href="/documentation/form-fields/field-response-action.html#field-skip-response-action">Field Skip Action</a></p><h2 id="if-error-response-is-coming-in-the-field-then-stop-filler" tabindex="-1">If error response is coming in the field then stop filler <a class="header-anchor" href="#if-error-response-is-coming-in-the-field-then-stop-filler" aria-label="Permalink to &quot;If error response is coming in the field then stop filler&quot;">​</a></h2><p>If the <strong>Action Response</strong> of the field in which this setting is on comes in <code>error</code>, then the Filler Extension will <strong>stop</strong>.</p><h2 id="if-success-response-is-coming-in-the-field-then-stop-filler" tabindex="-1">If success response is coming in the field then stop filler <a class="header-anchor" href="#if-success-response-is-coming-in-the-field-then-stop-filler" aria-label="Permalink to &quot;If success response is coming in the field then stop filler&quot;">​</a></h2><p>If the <strong>Action Response</strong> of the field in which this setting is on comes in <code>success</code>, then the Filler Extension will <strong>stop</strong>.</p><h2 id="search-strings-and-execute-field-action" tabindex="-1">Search Strings and Execute Field Action <a class="header-anchor" href="#search-strings-and-execute-field-action" aria-label="Permalink to &quot;Search Strings and Execute Field Action&quot;">​</a></h2><h2 id="execute-action-on-fields-like-row-type" tabindex="-1">Execute Action on fields like Row Type <a class="header-anchor" href="#execute-action-on-fields-like-row-type" aria-label="Permalink to &quot;Execute Action on fields like Row Type&quot;">​</a></h2><h2 id="if-this-field-is-being-used-in-a-loop-and-the-field-has-multiple-elements" tabindex="-1">If this field is being used in a loop and the field has multiple elements <a class="header-anchor" href="#if-this-field-is-being-used-in-a-loop-and-the-field-has-multiple-elements" aria-label="Permalink to &quot;If this field is being used in a loop and the field has multiple elements&quot;">​</a></h2><p>If the field is being used in <a href="/documentation/field-types/loop.html">Loop</a> Field Type, then after turning on this setting, if the element given in the field is <strong>multiple</strong> in the page, then we will get one element through the <strong>index</strong> of the loop.</p><h2 id="do-not-fill-the-status-color-element-of-this-field" tabindex="-1">Do not fill the Status Color, element of this field <a class="header-anchor" href="#do-not-fill-the-status-color-element-of-this-field" aria-label="Permalink to &quot;Do not fill the Status Color, element of this field&quot;">​</a></h2><h2 id="ignore-this-field-details-in-the-excel-template" tabindex="-1">Ignore this field details in the Excel Template <a class="header-anchor" href="#ignore-this-field-details-in-the-excel-template" aria-label="Permalink to &quot;Ignore this field details in the Excel Template&quot;">​</a></h2><p>After turning on this setting the field will not be inserted in the <strong>excel template</strong>.</p><h2 id="delay-time-before-this-field-is-run" tabindex="-1">Delay Time Before this field is Run <a class="header-anchor" href="#delay-time-before-this-field-is-run" aria-label="Permalink to &quot;Delay Time Before this field is Run&quot;">​</a></h2><p>Delay Time <strong>(Milliseconds)</strong> before the field runs.</p><div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want random delay time then you can use <a href="/documentation/variable.html#generate-random-value">Random Integer Variable</a>. Use variable <code>{{random.integer[1000][2000]}}</code> for random milliseconds.</p></div></div><h2 id="delay-time-after-this-field-is-run" tabindex="-1">Delay Time After this field is Run <a class="header-anchor" href="#delay-time-after-this-field-is-run" aria-label="Permalink to &quot;Delay Time After this field is Run&quot;">​</a></h2><p>Delay Time <strong>(Milliseconds)</strong> after the field runs.</p><div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want random delay time then you can use <a href="/documentation/variable.html#generate-random-value">Random Integer Variable</a>. Use variable <code>{{random.integer[1000][2000]}}</code> for random milliseconds.</p></div></div>',91),k=[y];function q(w,x,S,I,_,F){return i(),t("div",null,k)}const E=e(b,[["render",q]]);export{P as __pageData,E as default};
