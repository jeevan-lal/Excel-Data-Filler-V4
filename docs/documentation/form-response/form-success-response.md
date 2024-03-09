# Form Success Response

Through this option, you can match the success response (returned from server), when a entry is submitted,
When It matches with given success response, entry will be marked as **Entry Saved** and You can also set the [action](#action)

<img src="/image/entry-response-02.png" width="400" height="400" alt="Form Success Response">

## Options

| Option                                                        | Description                                                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Success Page URL](#success-page-url)                         | The URL of the page on which the entry success message appears.                                     |
| [Match URL Types](#match-url-types)                           | What is the type of Success Page URL given above is given in this.                                  |
| [Success Response Type](#success-response-type)               | The type of success message appears on the page is given in this option.                            |
| [Enter Success Message](#enter-success-message)               | The success message that comes after the entry is saved is given.                                   |
| [Delay Time Before Run Action](#delay-time-before-run-action) | Time delay before the [action](#action) is executed.                                                |
| [Action](#action)                                             | If the given [Success Response Type](#success-response-type) matches, then this action is executed. |

## Additional Options

| Option                                                       | Description                                                                                                                                                                                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Completed the entry if the success response matches          | If **multiple forms** are being used in the site then it is necessary to keep this option on.                                                                                                                                     |
| If excel data is not found then don't execute the action     | Even if there is no data in Excel, the [action](#action) is still executing, then you can turn it off with this option.                                                                                                           |
| If last excel entry completed then don't execute the action  | If the last entry of excel has been saved and you do not want the [action](#action) not to be executed after the last entry, then you can do it by turning on this option.                                                        |
| If there is no Excel data, update only scraper data in Excel | If you are [scraping data](/documentation/form-fields/field-types#scraper-data) from the site and you are not using Excel template in the extension, then the data being scraped from that option will be saved in the extension. |
| Can success message be anything in this element              | If the success message of the entry is always changing then using this option matches **any type of message** in the given element.                                                                                               |

## Success Page URL

Fill in the URL of the page on which you want to match the success response.

## Match URL Types

How you want to match with [Success Page URL](#success-page-url)

- Match with Full URL
- Match with URL [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
- Match with URL [hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname)
- Match with RegEx

## Success Response Type

It is about, How server returns Success Response to User.

1. [Matching Message In Page](#matching-message-in-page)
2. [Matching Message In Browser Alert](#matching-message-in-alert-message)
3. [Matching Message In Page Element Value](#matching-message-in-page-element-value)
4. [Checking Element Exists In Page](#checking-element-exists-in-page)
5. [Matching Success Page URL](#matching-success-page-url)

### Matching Message In Page

If the success message is visible in the page after the entry is saved, then you can choose that option. Message can be like this. The text of this message is given in the [Enter Success Message](#enter-success-message) option.

<img src="/image/entry-response-05.png" alt="Form Success Response">

You can also give the address of the element of success message. By default success message is searched in the entire page. If you want the Success Message to be searched only in the element given by you, then you can give the Selector Query of that message in the _Message Selector Query_ Field.

<img src="/image/entry-response-06.png" width="500" height="500" alt="Image">

### Matching Message In Alert Message

If the response of the entry comes in the form of **javascript dialog** (Browser Alert), you can hide the dialog from [extension settings](/documentation/extension#hide-javascript-dialog) and fetch the response to match against given [Enter Success Message](#enter-success-message).

<img src="/image/js-alert-dialog.png" alt="Alert Dialog">

### Matching Message In Page Element Value

If the Success Message appears in the page itself but in the Form Field (**InputBox**), then you can use it. The message has to be given in [Enter Success Message](#enter-success-message) and the selector query of that field is given in the option given below.

<img src="/image/entry-response-06.png" width="500" height="500" alt="Image">

### Checking Element Exists In Page

If you want to check only the element in the page then you can use this option. But keep in mind that element should not already be present in the page and should come only after the entry is saved. Selector query of that element is given in the option given below.

<img src="/image/entry-response-06.png" width="500" height="500" alt="Image">

### Matching Success Page URL

If you only want to check that the [Success Page URL](#success-page-url) given by you matches only this, then you can use this option. But keep in mind that both the entry page URL and the success page URL should be different.

## Enter Success Message

If Server returns something back to user after form is successfully submitted, Then you can use it along with **Success Response Type** to check If form is really saved.

Here you can have multiple messages. If any of the given messages is matched, then the extension will mark the current entry as **saved** and after that, it will execute the [Action](#action) given by you.

Example:

<img src="/image/entry-response-07.png" alt="Form Success Response">

::: details Will the success message be checked across the page?

**Yes**. By Default success messages are checked across the page. With **Message Selector Query** Option, you can give selector query of any element of the page, and **success messages** will only be checked in that selector query scope.

<img src="/image/entry-response-04.png" alt="Form Success Response">
<br>

:::

::: details Will the entry be filled, if the success message is already present in the page?

If any success message is present in the page **before** submitting the form, then the extension will have a match against the given **success messages** before the entry and the **entry will not be filled**.

:::

::: details How to fill dynamic success message?

If server response is dynamic or changes every time or It has some data from any column from excel, then you can use variable like this.

<img src="/image/dynamic-response-msg-01.png" width="400" height="400" alt="Entry Response">

Apart from this, if you only give **"OTP number send to this mobile"** in the success message, it will also work.
:::

## Delay Time Before Run Action

Time delay before the [action](#action) is executed. Set time in the Milliseconds.

<Badge type="tip" text="1 seconds = 1000 milliseconds" />

## Action

If the given [Success Response Type](#success-response-type) matches, then this action is executed.

- Redirect to Page
- Re-Execute Form
- Click on Button
- Page Reload
- Execute Segment
