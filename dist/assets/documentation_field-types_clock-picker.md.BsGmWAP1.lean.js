import{_ as t,c as o,a2 as r,o as i}from"./chunks/framework.BLxugvkI.js";const c="/image/clock-picker-01.png",p=JSON.parse('{"title":"Clock Picker","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/clock-picker.md","filePath":"documentation/field-types/clock-picker.md","lastUpdated":1731430424000}'),a={name:"documentation/field-types/clock-picker.md"};function l(n,e,d,s,m,k){return i(),o("div",null,e[0]||(e[0]=[r('<h1 id="clock-picker" tabindex="-1">Clock Picker <a class="header-anchor" href="#clock-picker" aria-label="Permalink to &quot;Clock Picker&quot;">​</a></h1><p>The <code>Clock Picker</code> is a specialized field type, select time in the clock picker field. This guide details the configuration options available to customize the Clock Picker field type according to your requirements.</p><img src="'+c+'" alt="Image"><h2 id="field-options" tabindex="-1">Field Options <a class="header-anchor" href="#field-options" aria-label="Permalink to &quot;Field Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>Clock Time Format</strong></td><td>Specifies the format for displaying the selected time.</td><td><code>hh:mm:ss A</code> for a 12-hour format with AM/PM display.</td></tr><tr><td><strong><a href="#clock-picker-library-name">Clock Picker Library Name</a></strong></td><td>Selects the time selection library or component used for the Clock Picker field.</td><td>Choose from predefined libraries or <code>&quot;Other&quot;</code> for custom configurations.</td></tr><tr><td><strong>Clock Hand Selector Address</strong></td><td>CSS selector identifying the clock hand element used for selecting time components in custom clock implementations.</td><td></td></tr><tr><td><strong>Clock Meridiem List Selector Address</strong></td><td>CSS selector for the element managing <code>AM/PM</code> selection in the Clock Picker field.</td><td></td></tr><tr><td><strong>Active Clock Components</strong></td><td>Defines the components <code>(hours, minutes, seconds, meridiem)</code> that are enabled in the Clock Picker field.</td><td>Select <code>hours</code>, <code>minutes</code>, <code>meridiem</code> and <code>seconds</code>.</td></tr><tr><td><strong>Address of the button to open the clock</strong></td><td>CSS selector for the button that triggers the clock interface for selecting time.</td><td></td></tr><tr><td><strong>Enter Timer Submit Button Selector Address</strong></td><td>CSS selector for the submit button used to confirm the selected time in the Clock Picker field.</td><td></td></tr></tbody></table><h2 id="additional-options" tabindex="-1">Additional Options <a class="header-anchor" href="#additional-options" aria-label="Permalink to &quot;Additional Options&quot;">​</a></h2><ul><li><strong>Enable Button to Open Clock:</strong> Activates the specified button to open the clock.</li><li><strong>Submit Button After Time Selection:</strong> Automatically submits the selected time into the form when enabled.</li></ul><h2 id="clock-picker-library-name" tabindex="-1">Clock Picker Library Name <a class="header-anchor" href="#clock-picker-library-name" aria-label="Permalink to &quot;Clock Picker Library Name&quot;">​</a></h2><ul><li>MUI-V4 Time Picker</li><li>MUI-X Time Picker (React)</li></ul><h2 id="examples-of-clock-picker-libraries" tabindex="-1">Examples of Clock Picker Libraries <a class="header-anchor" href="#examples-of-clock-picker-libraries" aria-label="Permalink to &quot;Examples of Clock Picker Libraries&quot;">​</a></h2><ul><li><a href="https://mui.com/x/react-date-pickers/" target="_blank" rel="noreferrer">https://mui.com/x/react-date-pickers/</a></li><li><a href="https://mui.com/x/react-date-pickers/time-picker/#available-components" target="_blank" rel="noreferrer">https://mui.com/x/react-date-pickers/time-picker/#available-components</a></li><li><a href="https://v5-0-6.mui.com/components/time-picker/" target="_blank" rel="noreferrer">https://v5-0-6.mui.com/components/time-picker/</a></li><li><a href="https://weareoutman.github.io/clockpicker/" target="_blank" rel="noreferrer">https://weareoutman.github.io/clockpicker/</a></li><li><a href="https://buefy.org/documentation/clockpicker/" target="_blank" rel="noreferrer">https://buefy.org/documentation/clockpicker/</a></li></ul>',11)]))}const u=t(a,[["render",l]]);export{p as __pageData,u as default};