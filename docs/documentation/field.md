# Form Field

Form Field which you can fill automatically through excel template

## Insert Field

After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field.

### Types of Field

- Text
- Select
- Multiple Select
- Checkbox (Multiple Selection)
- Radio (Single Selection)
- Date
- Button
- [Upload File](#upload-file)
- Material Single Select
- Material Multiple Select
- [👩‍💻 Javascript Code](#execute-javascript)
- [🚀 Function](/documentation/functions.html#predefined-function)
- [🔑 Keys](/documentation/keys.html#special-key)
- Fetch Text (Scraper Data)
- Fetch HTML (Scraper Data)
- Fetch Simple Table Data (Scraper Data)
- Insert HTML
- [URL Matching](#url-matching)
- [URL Open](#url-open)

:::warning
Material field type works on Material framework like **Vuetify, MUI, React Material, Angular Material**, etc.
:::

### Upload File

To select the file by extension, you must first install a program in the pc. Which can be downloaded from the link given below.

- [For Windows](/install-edf-file-picker.exe)

### Execute Javascript

You can use Javascript code in any field or you can give any field only in **Javascript type**. We have used [Monaco Editor](https://microsoft.github.io/monaco-editor/) to edit Javascript code. 🚀

```js
// Where your code is ending, add this line only then the form will run further.
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", "1");
```

#### Editor Shortcut keys

- `F11` = Full Screen
- `Ctrl + S` = Save
- `Ctrl + Z` = Word Wrap
- `Shift + Alt + L` = Debug Console Log

### URL Matching

Check that the opened URL matches your URL. You can also add data from excel column in URL. as per the image below. And you can also use [variable key](/documentation/keys.html#variable-keys) in it.

<img src="/image/url-matching-01.png" width="400" height="400" alt="URL Matching">

### URL Open

If you are opening a url. You can also add data from an Excel column to Open URL. as per the image below. And you can also use [variable key](/documentation/keys.html#variable-keys) in it.

<img src="/image/url-open-01.png" width="400" height="400" alt="URL Open">

## Field Response Action

After form field running, we get two types of response **success** and **error**. You can get the action executed according to the response of any field through this option.

### Field Success Response Action

<br>
<img src="/image/field-success-response-action-01.png" width="400" height="400" alt="Field Success Response Action">

### Field Error Response Action

<br>
<img src="/image/field-error-response-action-01.png" width="400" height="400" alt="Field Error Response Action">

## Entry Response

After filling the entry, you can set what output comes from the server side after submitting the entry. There are two types of response to entry, either the entry will be successfully saved or there is an error in the entry.

![Entry Response](/image/entry-response-01.png)

If the response of the entry comes in the form of **javascript dialog** (alert), then you can also set how the response of the entry comes in the site or in the form of dialog and you can hide the dialog from [extension settings](/documentation/extension.html#settings).
