## ChangeLog

- Insert a quick guide how to use extension with `auto` and `manually` mode.
- `HTML Editor` - https://ckeditor.com/ckeditor-4/
  ```js
  var editor = CKEDITOR.instances["editornya"];
  editor.setData($entry.fieldValue);
  ```
- Added: Segment settings `View Element in Tab`
  - Loop
    - Field Option: `If this field is being used in a loop and the field has multiple elements`
- If using `jquery inputMask` then trigger only `paste` event, (if value not fill in input)

- Autocomplete Dropdown: https://mui.com/material-ui/react-autocomplete/
  - `Options` ul > li.MuiAutocomplete-option
- Dropdown: https://mui.com/material-ui/react-select/ - `Open`
  ```js
  let synteticEvent = new MouseEvent("mousedown", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  document.querySelector("input").parentNode.querySelector("div").dispatchEvent(synteticEvent);
  ```
  -`Options`ul.MuiMenu-list > li[role="option"] -`document.querySelector("div.MuiSelect-select").dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));`
  - `Close Already Open Dropdown` div.MuiModal-root[role='presentation'] > div
- `Material Select`
  - https://harvesthq.github.io/chosen/
- Added: Dropdown Option `MUI Select` and `MUI Autocomplete`
- `Dropdown List` - https://react-select.com/home
  - Open Dropdown Selector: `div[class*='-indicatorContainer']` with `['mousedown', 'click', 'mouseup']` events.
  - Options Selector: `div[class*='-menu'] div[class*='-option']`
- Advise: Dropdown `kendo-ui`
  - Don't use javascript event.
- Dropdown: https://harvesthq.github.io/chosen/
  - Open Click Event: `await runMouseEvents(option, ["mouseup"])`
- Added: External Library in `Material Single Select`.
  - `PrimeNG` (https://primeng.org)
- Added: External Library in `Material Single Select`.
  - `MUI Select` (https://mui.com/)
  - `Chosen` (https://harvesthq.github.io/chosen/)
  - `React Select` (https://react-select.com/home)
- Fixed: Dropdown: `https://mui.com/material-ui/react-select/`
- Added: External Library in `Material Single Select`.
  - `PrimeNG` (https://primeng.org)
- Added: New option in field type `Material Single Select` and `Material Multiple Select`.
  - `Trigger event on dropdown matched option`.
  - `Before selecting the dropdown option, check that option is already selected?`.
    - **Action**: Check Attribute in the Option Element
      - **Value**: `attribute_name|attribute_value`
  - `Before selecting the dropdown option, uncheck the already selected options`.
- Added: `ng-multiselect-dropdown` dropdown in the `Material Single/Multiple Select` Field Type.