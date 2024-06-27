# Javascript Code

You can use Javascript code in any field or you can give any field only in **Javascript type**. We have used [Monaco Editor](https://microsoft.github.io/monaco-editor/) to edit Javascript code.

```js
// Where your code is ending, add this line only then the form will run further.
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", "1");
```

- You can set `default value` in the field type.

## Global Variable

Use `$entry` variable in the javascript code for access entry and excel data.

```js
// ACCESS ENTRY DATA [OBJECT]
console.log($entry);

// PREDEFINE FUNCTIONS [OBJECT]
console.log($fns);

// [1]: STORE DATA IN THE SCRAPER EXCEL (PORTRAIT MODE)
// DATA TYPE: ARRAY
var response = { storeDataInScraper: [] };

// [2]: STORE DATA IN THE CURRENT ENTRY EXCEL ROW (LANDSCAPE MODE)
// DATA TYPE: OBJECT AND ALL OBJECT KEY NAME IS UNIQUE
var response = { storeDataInEntry: {} };

// [3] STORE DATA IN THE ACTIVE/CURRENT FIELD VALUE
var response = { storeDataInField: "String" };

// [4]: SKIP CURRENT FORM
var response = { skipForm: true };

// [5]: SKIP SEGMENT
var response = { skipSegment: true };

// [6]: STOP LOOP
var response = { loopStop: true };

// [7]: RETURN ERROR RESPONSE (BY DEFAULT SET SUCCESS RESPONSE)
var response = { status: false, message: "Error Message" };

// RETURN RESPONSE
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", JSON.stringify(response));
```

## Editor Shortcut keys

- `F11` = Full Screen
- `Ctrl + S` = Save
- `Ctrl + Z` = Word Wrap
- `Shift + Alt + L` = Debug Console Log

## Predefine Functions

- `triggerEvent`

```js
await $fns.triggerEvent(element, ["change", "focus"]);
```

- `triggerMouseEvent`

```js
await $fns.triggerMouseEvent(element, ["mousedown", "mouseup"]);
```

- `wait`

```js
await $fns.wait(1000);
```

- `trim`

```js
await $fns.trim(text, isRemoveAllSpace: Boolean, isLowerCase: Boolean, {
  isUpperCase: Boolean,
  isRemoveSpecialChar: Boolean,
  isRemoveExtraSpace: Boolean,
  replaceChar: Array[2]
});
```

- `randomHexColor`

```js
await $fns.randomHexColor();
```

- `getRandomString`

```js
await $fns.getRandomString(length: Number);
```

- `randomBoolean`

```js
await $fns.randomBoolean();
```

- `randomUniqueID`

```js
await $fns.randomUniqueID(length: Number);
```

- `randomInteger`

```js
await $fns.randomInteger(min: Number, max: Number);
```

- `randomFloat`

```js
await $fns.randomFloat(min: Number, max: Number, fixed: Number);
```

