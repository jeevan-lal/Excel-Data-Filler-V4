# Predefined Function

You can use validation and condition while filling the form using predefined function. The predefined function can be added to the field of the form.

You can also use [variables](variable) in the value of predefined functions. like this

```
{$excel_column_name$}
```

## checkAttributeExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element whether the attribute is in the element or not also check attribute value match or not match, then you can use it.

| Options                  | Required | Description               | Value                                          |
| ------------------------ | -------- | ------------------------- | ---------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                |
| Selector Query           | true     | Element Selector Query    |                                                |
| Field Value              | true     | Fill Value with Condition | [attribute_name][attribute_value][force_check] |
| Wait Until Element Found | false    |                           |                                                |

- **Field Value** - [string][string][boolean]

## checkAttributeNotExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element not exists also check attribute value match or not match, then you can use it.

| Options                  | Required | Description               | Value                                          |
| ------------------------ | -------- | ------------------------- | ---------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                |
| Selector Query           | true     | Element Selector Query    |                                                |
| Field Value              | true     | Fill Value with Condition | [attribute_name][attribute_value][force_check] |
| Wait Until Element Found | false    |                           |                                                |

- **Field Value** - [string][string][boolean]
- `[name][][true]`, if name attribute not exists in element then return true
- `[name][username][true]`, if name attribute exists in element but attribute value is not username then return true

## checkElementText

To match the **text/value** of an element according to the condition, then you can use this function.

| Options                                                 | Required | Description               | Value                                     |
| ------------------------------------------------------- | -------- | ------------------------- | ----------------------------------------- |
| Selector Type                                           | true     | Element Selector Type     |                                           |
| Selector Query                                          | true     | Element Selector Query    |                                           |
| Field Value                                             | true     | Fill Value with Condition | [comparison_operators][text][force_check] |
| Wait Until Element Found                                | false    |                           |                                           |
| Execute the action of the function on multiple elements | false    |                           |                                           |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][text][wait until text matches]**
- **[operator][string][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (==, !=, >, <, <=, >=)
:::

## checkElementLength

To match the **length** of an element according to the condition, then you can use this function.

| Options                  | Required | Description               | Value                                              |
| ------------------------ | -------- | ------------------------- | -------------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                    |
| Selector Query           | true     | Element Selector Query    |                                                    |
| Field Value              | true     | Fill Value with Condition | [comparison_operators][length_number][force_check] |
| Wait Until Element Found | false    |                           |                                                    |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][length_number][wait until length matches]**
- **[operator][string][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (==, !=, >, <, <=, >=)
:::

### Value Example

- [==][20][true]
- [>][3][false]

## checkElementExists

If you want to check an element whether the element is in the page or not, then you can use it.

| Options                  | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementDestroy

If you want to check an element whether the element is in the page or not, then you can use it.

| Options                  | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementVisible

If you want to check an element whether the element is there in the page or not and the element is visible to us then you can use this.

| Options                  | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementInvisible

If you want to check an element whether the element is in the page or not and the element is invisible then you can use this.

| Options                  | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## removeElement

If you want to remove element from page.

| Options        | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## cleanSessionStorage

This method removes all the Session Storage Object item for this domain.

## cleanLocalStorage

This method removes all the Local Storage Object item for this domain.

## countCharLength

You can count given character in the element string.

| Options                  | Required | Description               | Value                      |
| ------------------------ | -------- | ------------------------- | -------------------------- |
| Selector Type            | true     | Element Selector Type     |                            |
| Selector Query           | true     | Element Selector Query    |                            |
| Field Value              | true     | Fill Value with Condition | [a][true] <br> [In][false] |
| Wait Until Element Found | false    |                           |                            |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[string matching][case-sensitive]**
- **[string][boolean]**

::: info Example
If element string is `"Indian"` and field value is `"[i][true]"` then this function return 2;

Indian => [i][true] => 2 <br>
Indian => [i][false] => 1 <br>
Indian => [In][false] => 1 <br>
Indian => [A][false] => 0 <br>
:::

## countCharsLength

You can count total characters in string.

| Options                  | Required | Description            | Value |
| ------------------------ | -------- | ---------------------- | ----- |
| Selector Type            | true     | Element Selector Type  |       |
| Selector Query           | true     | Element Selector Query |       |
| Wait Until Element Found | false    |                        |       |

::: info Example
If element string is `"India"` then this function return 5;
:::

## countSplitArrayLength

You can count split array length.

| Options                  | Required | Description            | Value        |
| ------------------------ | -------- | ---------------------- | ------------ |
| Selector Type            | true     | Element Selector Type  |              |
| Selector Query           | true     | Element Selector Query |              |
| Field Value              | true     | Split String           | ,, <br> \r\n |
| Wait Until Element Found | false    |                        |              |

::: info Example
If element string is `"India,,Israel"` and field value is `",,"` then this function return 2;
:::

::: warning NOTE
If there are values ​​in new line then use this `\r\n` for split values.
:::

## countTableRows

You can check the rows of the table according to the condition.

| Options                  | Required | Description               | Value                             |
| ------------------------ | -------- | ------------------------- | --------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                   |
| Selector Query           | true     | Element Selector Query    |                                   |
| Field Value              | true     | Fill Value with Condition | [==][2][true] <br> [<=][3][false] |
| Wait Until Element Found | false    |                           |                                   |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][number of rows][wait until row matches]**
- **[string][number][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (>, <, ==, !=, <=, >=)
:::

## checkDropdownValue

If you want to check for a string in the dropdown element options value, then you can use it. If string matched then field return option text.

| Options        | Required | Description               | Value                           |
| -------------- | -------- | ------------------------- | ------------------------------- |
| Selector Type  | true     | Element Selector Type     |                                 |
| Selector Query | true     | Element Selector Query    |                                 |
| Field Value    | true     | Fill Value with Condition | [option1][true] <br> [M][false] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[search string][wait until string matches]**
- **[string][boolean]**

## checkDropdownText

If you want to check for a string in the dropdown element options name, then you can use it. If string matched then field return option value.

| Options        | Required | Description               | Value                           |
| -------------- | -------- | ------------------------- | ------------------------------- |
| Selector Type  | true     | Element Selector Type     |                                 |
| Selector Query | true     | Element Selector Query    |                                 |
| Field Value    | true     | Fill Value with Condition | [option1][true] <br> [M][false] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[search string][wait until string matches]**
- **[string][boolean]**

## downloadFile

Wait for download (file) to complete and perform given action when download is done, also you can attach this function with given button

:::info
Suppose you have a button when clicked, some file starts downloading and you want to wait until this downloading is done
and perform some action after it.
:::

[Demo](https://formfiller.ctechhindi.in/example/example-24.php)

| Options                  | Required | Description            | Value |
| ------------------------ | -------- | ---------------------- | ----- |
| Selector Type            | false    | Element Selector Type  |       |
| Selector Query           | false    | Element Selector Query |       |
| Trigger Javascript Event | true     | Enter Event Name       | click |

## insertClassName

The `insertClassName` method adds one or more CSS class names to the element. This method does not remove existing class attributes, it only adds one or more class names to the class attribute.

| Options                                                 | Required | Description            | Value                   |
| ------------------------------------------------------- | -------- | ---------------------- | ----------------------- |
| Selector Type                                           | true     | Element Selector Type  |                         |
| Selector Query                                          | true     | Element Selector Query |                         |
| Field Value                                             | true     | Fill css class name    | bg-danger,text-white,.. |
| Wait Until Element Found                                | false    |                        |                         |
| Execute the action of the function on multiple elements | false    |                        |                         |

## removeClassName

This `removeClassName` method removes one or more the element CSS class name.

| Options                                                 | Required | Description            | Value                   |
| ------------------------------------------------------- | -------- | ---------------------- | ----------------------- |
| Selector Type                                           | true     | Element Selector Type  |                         |
| Selector Query                                          | true     | Element Selector Query |                         |
| Field Value                                             | true     | Fill CSS class name    | bg-danger,text-white,.. |
| Wait Until Element Found                                | false    |                        |                         |
| Execute the action of the function on multiple elements | false    |                        |                         |

:::info
If you want to remove all element classes then set value `remove-all-classes`.
:::

## insertCSSText

The `insertCSSText` method sets the text of the element's inline style. This method removes the existing inline style.

| Options                                                 | Required | Description            | Value                       |
| ------------------------------------------------------- | -------- | ---------------------- | --------------------------- |
| Selector Type                                           | true     | Element Selector Type  |                             |
| Selector Query                                          | true     | Element Selector Query |                             |
| Field Value                                             | true     | Fill CSS style name    | float:left;margin-top:75px; |
| Wait Until Element Found                                | false    |                        |                             |
| Execute the action of the function on multiple elements | false    |                        |                             |

## removeCSSText

The `removeCSSText` method remove the text of the element's inline style.

| Options                                                 | Required | Description            | Value               |
| ------------------------------------------------------- | -------- | ---------------------- | ------------------- |
| Selector Type                                           | true     | Element Selector Type  |                     |
| Selector Query                                          | true     | Element Selector Query |                     |
| Field Value                                             | true     | Fill CSS style name    | float,margin-top,.. |
| Wait Until Element Found                                | false    |                        |                     |
| Execute the action of the function on multiple elements | false    |                        |                     |

:::info
If you want to remove all element style then set value `remove-all-css-text`.
:::

## insertElementAttribute

The `insertElementAttribute` method sets the value of an attribute on the element. If the attribute already exists, the value is updated otherwise a new attribute is added with the specified **name** and **value**.

| Options                                                 | Required | Description                   | Value            |
| ------------------------------------------------------- | -------- | ----------------------------- | ---------------- |
| Selector Type                                           | true     | Element Selector Type         |                  |
| Selector Query                                          | true     | Element Selector Query        |                  |
| Field Value                                             | true     | Fill attribute name and value | attName,attValue |
| Wait Until Element Found                                | false    |                               |                  |
| Execute the action of the function on multiple elements | false    |                               |                  |

## removeElementAttribute

If you want to remove the attribute of an element then you can use it one or more.

| Options                                                 | Required | Description            | Value                       |
| ------------------------------------------------------- | -------- | ---------------------- | --------------------------- |
| Selector Type                                           | true     | Element Selector Type  |                             |
| Selector Query                                          | true     | Element Selector Query |                             |
| Field Value                                             | true     | Fill attribute name    | attName,attName,attName,... |
| Wait Until Element Found                                | false    |                        |                             |
| Execute the action of the function on multiple elements | false    |                        |                             |

## scrollToTopLeft

Use this method to scroll the page from top to left.

## scrollToTopRight

Use this method to scroll the page from top to right.

## scrollToBottomLeft

Use this method to scroll the page from bottom to left.

## scrollToBottomRight

Use this method to scroll the page from bottom to right.

## scrollIntoView

The `scrollIntoView` method scrolls an element into the visible area of the browser window.

- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

| Options                  | Required | Description                                                                                  |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------- |
| Selector Type            | true     | Element Selector Type                                                                        |
| Selector Query           | true     | Element Selector Query                                                                       |
| Field Value              | true     | [Params](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters) |
| Wait Until Element Found | false    |                                                                                              |

## playSound

If you use this function, then the tab in which the sound is playing will not pause.

## waitSeconds

If you want to wait for some time, then you can wait by giving value in seconds through this function.

| Options     | Required | Description  |
| ----------- | -------- | ------------ |
| Field Value | true     | Fill seconds |

:::v-pre
:::tip
Use variable `{{random.integer[0][12]}}` for random seconds.
:::

## getPageTitle

If you want to get page title string.

## setPageTitle

If you want to **set/change** page title.

| Options     | Required | Description       |
| ----------- | -------- | ----------------- |
| Field Value | true     | Fill Title String |
