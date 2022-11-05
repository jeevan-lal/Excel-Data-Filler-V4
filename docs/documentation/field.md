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
- [👩‍💻 Javascript Code](#execute-javascript)
- [🚀 Function](/documentation/functions.html#predefined-function)
- [🔑 Keys](/documentation/keys.html#special-key) 

## Execute Javascript

You can use Javascript code in any field or you can give any field only in **Javascript type**. We have used [Monaco Editor](https://microsoft.github.io/monaco-editor/) to edit Javascript code. 🚀 

```js
// Where your code is ending, add this line only then the form will run further.
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", "1");
```

### Editor Shortcut keys

* `F11` = Full Screen
* `Ctrl + S` = Save
* `Ctrl + Z` = Word Wrap
* `Shift + Alt + L` = Debug Console Log

## Entry Response

After filling the entry, you can set what output comes from the server side after submitting the entry. There are two types of response to entry, either the entry will be successfully saved or there is an error in the entry.

![Entry Response](/image/entry-response-01.png)

If the response of the entry comes in the form of **javascript dialog** (alert), then you can also set how the response of the entry comes in the site or in the form of dialog and you can hide the dialog from [extension settings](/documentation/extension.html#settings).