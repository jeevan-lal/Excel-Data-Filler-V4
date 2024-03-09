# Field Settings

When you **edit** the field, a sidebar opens like the picture given below, it contains the settings of the field. Some field settings are for a particular [field type](/documentation/form-fields/field) only.

<img src="/image/field-settings-01.png" width="500" height="500" alt="Field Settings">

## Fill Value Just Like Typing Tutor

Through this, you can type the value in the **Input Field** like a **Typing Tutor** and you can also set the speed of typing.

## If Form is ASPX then Remove Input Behavior

This field setting removes the **behavior** of the element in the **.aspx** form.

## Before filling the value in the field, clear the value of the field

If you want to **clear** the value of that field before filling the value in the field, then you can give that **clear value** in this setting.

## If excel column value is empty then fill this default value

If the value of the field is not in the excel sheet then the value given in this setting is set in that field.

If you want to check in which field the default value is set, then you can find out from the **color** of the **edit button** of the field. If the color of the edit button is **green** then the default value is set in that field and if the color of the edit button is **yellow** then that Field does not have default value set. By the image below.

<img src="/image/field-settings-02.png" width="" height="" alt="Field Default Value">

If the default value is already set in multiple fields and you do not want the default value to be set in the field, then you can remove the default value in **two** ways -

1. You can edit the fields in which Default Value is present and turn off the Default Settings.
2. To ignore the default value from all the fields of the site, you can turn on the option of `Ignore field default value` in **Site Settings**. By the image below

<img src="/image/site-settings-01.png" width="400" height="400" alt="Site Settings">

## Take the value of this field from another excel column

If there are two fields in your form in which the same value is filled, then you can create only one column in Excel Template and you can give the name of that column in this setting of the second field, then the second field value will be replaced by first field value.

## Replace the field value according to the custom values

Through this setting you can **replace** the field value with multiple custom values. See the image given below, it has multiple rows and each row has two fields, **Field Value** and **Custom Values**.

<img src="/image/replace-field-value-01.png" width="400" height="400" alt="Site Settings">

In the field in which we have turned on this setting, if the value of that field is **`"Yes/Y"`** then the Field Value will change to **`"0"`** and if the value of the field is **`"No/N"`** then the Field Value will change to **`"1"`**.

Through this you can change the **Field Value** in **Excel Template** as per your choice.

The custom value you set in setting will appear in the `Field Custom Values` column in the `HELPING` sheet of the Excel template. Like the image given below.

<img src="/image/field-settings-03.png" width="600" height="600" alt="Site Settings">

## Paste Copied Value

Before using this setting, you will have to use [Copy Field Type](/documentation/field-types/copy), only after this you can paste the value of the copy.

Before pasting, you can also modify the copied text through the options in the image given below.

<img src="/image/field-settings-04.png" width="500" height="500" alt="Site Settings">

## Wait until element is found in the page

This setting does not allow the **action** of the field to proceed until the element given in the field is **found** in the page.

## Wait until element is visible in the page

This setting does not allow the **action** of the field to proceed until the element given in the field is **found** and **visible** in the page.

## Trigger Javascript Event

When you **press** keyboard key or **click** mouse button on the page or any element, JavaScript Events are **executed**, which you can trigger through this setting.

Every action has different events. [More Details](https://www.javatpoint.com/javascript-events)

<img src="/image/field-settings-05.png" width="500" height="500" alt="Site Settings">

## Trigger Javascript Mouse Event

Trigger any javascript mouse event through this setting.

<img src="/image/field-settings-06.png" width="500" height="500" alt="Site Settings">

## Skip field action if any condition is true

If any of the conditions given in this setting are **true** then the action of that field will not be executed.

<img src="/image/field-settings-07.png" width="500" height="500" alt="Site Settings">

## Wait until the response status of the given element change fields comes

In this Settings, only the Field Name of [Element Change](/documentation/field-types/element-change) Field Type can be given. This setting checks the status of the given field and if the field status is *true*, the filler proceeds.

<img src="/image/field-settings-11.png" alt="Site Settings">

## Wait until the response status of the given request monitor fields comes

In this Settings, only the Field Name of [Request Monitor](/documentation/field-types/request-monitor) Field Type can be given. This setting checks the status of the given field and if the field status is *true*, the filler proceeds.

<img src="/image/field-settings-12.png" alt="Site Settings">

## If element value matches then fill the value otherwise skip the field

If the value of the **element** of the field matches with the **values** given in this setting then the Field _Action_ will be executed but if the value does not match then the action of that field will be **skipped**.

<img src="/image/field-settings-08.png" width="500" height="500" alt="Site Settings">

:::info
If the value of the element is to be checked **empty** then the empty value will be represented by **`''`**.
:::

## Skip field action if condition is true

If any of the conditions given in this setting are **true** then the action of that field will not be executed.

<img src="/image/field-settings-09.png" width="500" height="500" alt="Site Settings">

### Conditions

- Element Visible
- Element Not Visible
- Element Exists
- Element Not Exists
- Element Value Matched
- Element Text Matched
- Element Attribute Matched
- Element HTML Matched
- Image File Name Matched

## Skip field action if given field value matches

If value of the given field is present in the `Field Values` given below then the field will be `skipped` in that case.

<img src="/image/skip-field-01.png" width="500" height="500" alt="Site Settings">

If value of the field `(Does the Beneficiary have Aadhaar Card?)` is `No/N` in Excel then the field in which this condition is given will be `skipped`.

## Is this field Required

If the field is required in the form then you can turn on this setting. If you have used [Public Key](/documentation/keys#public-keys) **`{FORM-FILLED}`** to submit the form, then this key checks only _Required Fields_. If all the Required Fields are filled then **{FORM-FILLED}** Key will submit the Form, otherwise not.

## Field Success Response Action

After running the field, if the **response** of the field is `success` then this setting is executed.

[Field Response Action](/documentation/form-fields/field-response-action)

## Field Error Response Action

After running the field, if the **response** of the field is `error` then this setting is executed.

[Field Response Action](/documentation/form-fields/field-response-action)

## If error response is coming in the field then stop filler

If the **Action Response** of the field in which this setting is on comes in `error`, then the Filler Extension will **stop**.

## If success response is coming in the field then stop filler

If the **Action Response** of the field in which this setting is on comes in `success`, then the Filler Extension will **stop**.

## Search Strings and Execute Field Action

## Execute Action on fields like Row Type

## If this field is being used in a loop and the field has multiple elements

If the field is being used in [Loop](/documentation/field-types/loop) Field Type, then after turning on this setting, if the element given in the field is **multiple** in the page, then we will get one element through the **index** of the loop.

## Do not fill the Status Color, element of this field

## Ignore this field details in the Excel Template

After turning on this setting the field will not be inserted in the **excel template**.

## Delay Time Before this field is Run

Delay Time **(Milliseconds)** before the field runs.

:::tip
If you want random delay time then you can use [Random Integer Variable](/documentation/variable#generate-random-value).
:::

## Delay Time After this field is Run

Delay Time **(Milliseconds)** after the field runs.
