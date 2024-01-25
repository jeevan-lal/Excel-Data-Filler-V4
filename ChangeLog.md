## ChangeLog

- Insert a quick guide how to use extension with `auto` and `manually` mode.
- Advise: Dropdown `kendo-ui`
  - Don't use javascript event.
- Doc
  - Set which one `Required Options` (Required Field Type Options) in the all field types.
  - Create a new page for show useful field `options` like (before timeout, after timeout,.. etc.).
  - How to use predefine variable in the field options (before timeout, after timeout,.. etc.).
  - `Loop` is group of Action's.
- Changed: Use variable in the `waitSeconds` function value `{{random.integer[0][12]}}`.
- Changed: Use variable in the field `before/after` timeout setting.
- `Dropdown List` - https://react-select.com/home
  - Open Dropdown Selector: `div[class*='-indicatorContainer']` with `['mousedown', 'click', 'mouseup']` events.
  - Options Selector: `div[class*='-menu'] div[class*='-option']`
- `HTML Editor` - https://ckeditor.com/ckeditor-4/
  ```js
  var editor = CKEDITOR.instances["editornya"];
  editor.setData($entry.fieldValue);
  ```
- `Material Select`
  - https://harvesthq.github.io/chosen/
- Added: Dropdown Option `MUI Select` and `MUI Autocomplete`
- Added: Segment settings `View Element in Tab`