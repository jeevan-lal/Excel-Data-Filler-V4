# Predefined Function

You can use validation and condition while filling the form using predefined function. The predefined function can be added to the field of the form.

You can also use [variables](variable) in the value of predefined functions. like this

```
{{excel_column_name}}
```

## checkAttributeExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element whether the attribute is in the element or not also check attribute value match or not match, then you can use it.

| Params                   | Required | Description               | Value                                          |
| ------------------------ | -------- | ------------------------- | ---------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                |
| Selector Query           | true     | Element Selector Query    |                                                |
| Field Value              | true     | Fill Value with Condition | [attribute_name][attribute_value][force_check] |
| Wait Until Element Found | false    |                           |                                                |

- **Field Value** - [string][string][boolean]

## checkAttributeNotExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element not exists also check attribute value match or not match, then you can use it.

| Params                   | Required | Description               | Value                                          |
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

| Params                   | Required | Description               | Value                                     |
| ------------------------ | -------- | ------------------------- | ----------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                           |
| Selector Query           | true     | Element Selector Query    |                                           |
| Field Value              | true     | Fill Value with Condition | [comparison_operators][text][force_check] |
| Wait Until Element Found | false    |                           |                                           |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][text][wait until text matches]**
- **[operator][string][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (==, !=, >, <, <=, >=)
:::

## checkElementLength

To match the **length** of an element according to the condition, then you can use this function.

| Params                   | Required | Description               | Value                                              |
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

| Params                   | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementDestroy

If you want to check an element whether the element is in the page or not, then you can use it.

| Params                   | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementVisible

If you want to check an element whether the element is there in the page or not and the element is visible to us then you can use this.

| Params                   | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## checkElementInvisible

If you want to check an element whether the element is in the page or not and the element is invisible then you can use this.

| Params                   | Required |
| ------------------------ | -------- |
| Selector Type            | true     |
| Selector Query           | true     |
| Wait Until Element Found | false    |

## removeElement

If you want to remove element from page.

| Params         | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## cleanSessionStorage

This method removes all the Session Storage Object item for this domain.

## cleanLocalStorage

This method removes all the Local Storage Object item for this domain.

## countTableRows

You can check the rows of the table according to the condition.

| Params                   | Required | Description               | Value                             |
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

## downloadFile

Wait for download (file) to complete and perform given action when download is done, also you can attach this function with given button

:::info
Suppose you have a button when clicked, some file starts downloading and you want to wait until this downloading is done
and perform some action after it.
:::

[Demo](https://formfiller.ctechhindi.in/example/example-24.php)

| Params                   | Required | Description            | Value |
| ------------------------ | -------- | ---------------------- | ----- |
| Selector Type            | false    | Element Selector Type  |       |
| Selector Query           | false    | Element Selector Query |       |
| Trigger Javascript Event | true     | Enter Event Name       | click |

## insertClassName

The `insertClassName` method adds one or more CSS class names to the element. This method does not remove existing class attributes, it only adds one or more class names to the class attribute.

| Params                   | Required | Description            | Value                   |
| ------------------------ | -------- | ---------------------- | ----------------------- |
| Selector Type            | true     | Element Selector Type  |                         |
| Selector Query           | true     | Element Selector Query |                         |
| Field Value              | true     | Fill css class name    | bg-danger,text-white,.. |
| Wait Until Element Found | false    |                        |                         |

## removeClassName

This `removeClassName` method removes one or more the element CSS class name.

| Params                   | Required | Description            | Value                   |
| ------------------------ | -------- | ---------------------- | ----------------------- |
| Selector Type            | true     | Element Selector Type  |                         |
| Selector Query           | true     | Element Selector Query |                         |
| Field Value              | true     | Fill CSS class name    | bg-danger,text-white,.. |
| Wait Until Element Found | false    |                        |                         |

:::info
If you want to remove all element classes then set value `remove-all-classes`.
:::

## insertCSSText

The `insertCSSText` method sets the text of the element's inline style. This method removes the existing inline style.

| Params                   | Required | Description            | Value                       |
| ------------------------ | -------- | ---------------------- | --------------------------- |
| Selector Type            | true     | Element Selector Type  |                             |
| Selector Query           | true     | Element Selector Query |                             |
| Field Value              | true     | Fill CSS style name    | float:left;margin-top:75px; |
| Wait Until Element Found | false    |                        |                             |

## removeCSSText

The `removeCSSText` method remove the text of the element's inline style.

| Params                   | Required | Description            | Value               |
| ------------------------ | -------- | ---------------------- | ------------------- |
| Selector Type            | true     | Element Selector Type  |                     |
| Selector Query           | true     | Element Selector Query |                     |
| Field Value              | true     | Fill CSS style name    | float,margin-top,.. |
| Wait Until Element Found | false    |                        |                     |

:::info
If you want to remove all element style then set value `remove-all-css-text`.
:::

## insertElementAttribute

The `insertElementAttribute` method sets the value of an attribute on the element. If the attribute already exists, the value is updated otherwise a new attribute is added with the specified **name** and **value**.

| Params                   | Required | Description                   | Value            |
| ------------------------ | -------- | ----------------------------- | ---------------- |
| Selector Type            | true     | Element Selector Type         |                  |
| Selector Query           | true     | Element Selector Query        |                  |
| Field Value              | true     | Fill attribute name and value | attName,attValue |
| Wait Until Element Found | false    |                               |                  |

## removeElementAttribute

If you want to remove the attribute of an element then you can use it one or more.

| Params                   | Required | Description            | Value                       |
| ------------------------ | -------- | ---------------------- | --------------------------- |
| Selector Type            | true     | Element Selector Type  |                             |
| Selector Query           | true     | Element Selector Query |                             |
| Field Value              | true     | Fill attribute name    | attName,attName,attName,... |
| Wait Until Element Found | false    |                        |                             |

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

| Params                   | Required | Description                                                                                  |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------- |
| Selector Type            | true     | Element Selector Type                                                                        |
| Selector Query           | true     | Element Selector Query                                                                       |
| Field Value              | true     | [Params](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters) |
| Wait Until Element Found | false    |                                                                                              |

## playSound

If you use this function, then the tab in which the sound is playing will not pause.

## waitSeconds

If you want to wait for some time, then you can wait by giving value in seconds through this function.

| Params      | Required | Description  |
| ----------- | -------- | ------------ |
| Field Value | true     | Fill seconds |

## getPageTitle

If you want to get page title string.

## setPageTitle

If you want to **set/change** page title.

| Params      | Required | Description       |
| ----------- | -------- | ----------------- |
| Field Value | true     | Fill Title String |
