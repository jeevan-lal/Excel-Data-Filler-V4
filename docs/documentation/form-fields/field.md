# Form Field

Form Field which you can fill automatically through excel template

<img src="/image/field-01.png" alt="Field">

## Insert Field

After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field.

| Field Options (Important) | Required |
| ------------------------- | -------- |
| **Field Name**            | **Yes**  |
| **Field Type**            | **Yes**  |
| **Field Selector Type**   | **Yes**  |
| **Field Selector Query**  | **Yes**  |
| **Active/InActive**       | **Yes**  |

## Field Options

### Field Name

Field name is important. Whatever name you give to the field, the same name will be seen in your Excel Sheet when you download the Excel template of that site. Keep in mind that all field names in a site must be unique so that while filling data in Excel we must know which field we are filling.

### Field Type

The type of field of the form is defined in it. First you should know what is the [type of field](/documentation/form-fields/field-types).

### Field Selector Type

To fill data in the field, field selector query has to be given which is of many types, hence first the type of field selector query is defined.

1. Selector
2. Id
3. XPath

### Field Selector Query

Selector Query is given to fill data in the field. This is the unique address of the field.

::: tip
You can use `JS Path` directly in the field selector query. Starting with `$.`.

```js
$.document.querySelector("#container");
$.document.querySelector("#container").parentNode;
$.document.querySelector("#container").shadowRoot.querySelector("#full_name");
```
:::

#### [How to generate field selector query?](/documentation/locate-element)

<br>

#### How to copy field selector query?

To copy the Field Selector Query, after installing the extension, you can copy the Field Selector Query by right clicking on the field from the option given in the picture below.

<img src="/image/field-settings-10.png" alt="Field">

### Active/InActive

It is used to activate and deactivate the field. If the field is deactivated then the column of that field is not created in the excel sheet.
