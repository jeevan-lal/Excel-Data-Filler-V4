# TinyMCE Editor

The `TinyMCE Editor` field type allows you to **fill text** in **TinyMCE Editor** provided by [https://www.tiny.cloud/](https://www.tiny.cloud/).

## Options

| Option                      | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| TinyMCE Editor ID           | The ID of the TinyMCE editor element. This is used to identify the editor instance.                                            |
| TinyMCE Editor Index Number | This is used to specify the index number of the editor if you have multiple editors on the same page. The index starts from 1. |

::: details How to fill text in the `TinyMCE` editor with `Javascript`?

```js
tinymce.get("description1").setContent("<p>Your content here</p>");
```

:::

## Field Value

You can provide `content/value` directly in the field's [`default value`](/documentation/form-fields/field-settings#if-excel-column-value-is-empty-then-fill-this-default-value) option.

## Examples of TinyMCE

- [https://www.tiny.cloud/docs/tinymce/latest/introduction-to-tinymce/](https://www.tiny.cloud/docs/tinymce/latest/introduction-to-tinymce/)
