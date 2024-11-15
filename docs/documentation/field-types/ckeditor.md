# CKEditor

The `CKEditor` field type allows you to **fill text** in **CKEditor** is a widely used open-source WYSIWYG editor provided by [https://ckeditor.com/](https://ckeditor.com/).

::: details How to fill text in the `ckeditor-4` editor with `Javascript`?

```js
const editor = CKEDITOR.instances["editornya"];
editor.setData("Value");
```

:::

## Field Value

You can provide `content/value` directly in the field's [`default value`](/documentation/form-fields/field-settings#if-excel-column-value-is-empty-then-fill-this-default-value) option.

## Example of CKEditor

- [https://demos.webdevpuneet.com/demos/demos0/demo2/](https://demos.webdevpuneet.com/demos/demos0/demo2/).
- [https://ckeditor.com/ckeditor-4/](https://ckeditor.com/ckeditor-4/)
