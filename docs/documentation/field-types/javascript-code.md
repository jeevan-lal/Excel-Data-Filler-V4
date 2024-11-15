# Javascript Code

You can use Javascript code in any field or you can give any field only in **Javascript type**. We have used [Monaco Editor](https://microsoft.github.io/monaco-editor/) to edit Javascript code.

```js
// Where your code is ending, add this line only then the form will run further.
$fns.return("1");
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
$fns.return(JSON.stringify(response));
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

## Custom Javascript Code

### Fill value in `jQuery Slider`

https://jqueryui.com/slider/

```js
$slider = $(".bar");
$slider.slider("value", 100);
$slider.slider("option", "slide").apply($slider, [null, { value: $slider.slider("value") }]);
```

### Override Existing JavaScript Code

How to modify or replace existing JavaScript code within the target website. This is useful for scenarios where you need to change the `behavior` of a button, function, or any other code snippet on the page.

```js
function submitAction() {
  alert("Submitted.");
}

function resetAction() {
  alert("Reset.");
}

/**
  [METHOD-01] If using `onclick` attribute in the element
*/
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) {
//   submitbtn.removeAttribute('onclick');
//   submitbtn.addEventListener("click", submitAction)
// }

/**
  [METHOD-02] Remove Button and Inject New Button HTML
*/
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) submitbtn.remove();
// var container = document.querySelector("#container")
// if (container) container.insertAdjacentHTML("afterbegin", '<button class="btn btn-success" type="submit" id="submit">Submit</button>')
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) {
//   submitbtn.addEventListener("click", submitAction);
// }

/**
  [METHOD-03] Override JS Code
*/
var actualCode = `
  function submitAction() {
    alert("Submitted.")
  }
`;

var script = document.createElement("script");
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.remove();

// Return
$fns.return("1");
```
