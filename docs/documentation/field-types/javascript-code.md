# Javascript Code

You can use Javascript code in any field or you can give any field only in **Javascript type**. We have used [Monaco Editor](https://microsoft.github.io/monaco-editor/) to edit Javascript code.

```js
// Where your code is ending, add this line only then the form will run further.
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", "1");
```

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

// [3]: SKIP CURRENT FORM
var response = { skipForm: true };

// [4]: SKIP SEGMENT
var response = { skipSegment: true };

// [5]: STOP LOOP
var response = { loopStop: true };

// [6]: RETURN ERROR RESPONSE (BY DEFAULT SET SUCCESS RESPONSE)
var response = { status: false, message: "Error Message" };

// RETURN RESPONSE
localStorage.setItem("EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE", JSON.stringify(response));
```

## Editor Shortcut keys

- `F11` = Full Screen
- `Ctrl + S` = Save
- `Ctrl + Z` = Word Wrap
- `Shift + Alt + L` = Debug Console Log
