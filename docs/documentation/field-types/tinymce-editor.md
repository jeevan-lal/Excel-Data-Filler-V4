# TinyMCE Editor

The `TinyMCE Editor` field type allows you to **fill text** in **TinyMCE Editor** provided by [https://www.tiny.cloud/](https://www.tiny.cloud/).

## Options

| Option                      | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| TinyMCE Editor ID           | The ID of the TinyMCE editor element. This is used to identify the editor instance.                                            |
| TinyMCE Editor Index Number | This is used to specify the index number of the editor if you have multiple editors on the same page. The index starts from 1. |

## Fill with JavaScript

```js
tinymce.get("description1").setContent("<p>Your content here</p>");
```

## Examples of TinyMCE

- [https://www.tiny.cloud/docs/tinymce/latest/introduction-to-tinymce/](https://www.tiny.cloud/docs/tinymce/latest/introduction-to-tinymce/)
