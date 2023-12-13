# Form Success Response

Through this option, you can match the success response (returned from server), when a **form/entry** is submitted,
When It matches with given **success response**, **entry** will be marked as **Entry Saved** and You can also set the [action](#action)

<img src="/image/entry-response-02.png" width="400" height="400" alt="Form Success Response">

## Options

### Success Page URL

Fill in the URL of the page on which you want to match the success response.
+ It may be full URL
+ It may be URL with Regular Expression


### Match URL Types

How you want to match with **Success Page URL**

- Match with Full URL
- Match with URL [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
- Match with URL [hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname)
- Match with RegEx

### Success Response Type

It is about, How server returns Success Response to User.

1. Matching Message In Page
2. [Matching Message In Browser Alert](#matching-message-in-alert-message)
3. Matching Message In Page Element Value
4. Checking Element Exists In Page

#### Matching Message In Alert Message

If the response of the entry comes in the form of **javascript dialog** (Browser Alert), you can hide the dialog from [extension settings](/documentation/extension#hide-javascript-dialog) and fetch the response to match against given **Enter Success Message**

### Enter Success Message

If Server returns something back to user after form is successfully submitted, Then you can use it along with **Success Response Type** to check If form is really saved.

Here you can have multiple messages. If any of the given messages is matched, then the extension will mark the current entry as **saved** and after that, it will execute the [action](#action) given by you.

Example:- Success messages

<img src="/image/entry-response-05.png" alt="Form Success Response">
<br>

> #### Will the success message be checked across the page?

**Yes**. By Default success messages are checked across the page. With **Message Selector Query** Option, you can give selector query of any element of the page, and **success messages** will only be checked in that selector query scope.

<img src="/image/entry-response-04.png" alt="Form Success Response">
<br>

> #### Will the entry be filled, if the success message is already present in the page?

If any success message is present in the page **before** submitting the form, then the extension will have a match against the given **success messages** before the entry and the **entry will not be filled**.

### Delay Time Before Run Action

Time delay before the action is executed. Set time in the Milliseconds. (1 seconds = 1000 milliseconds)

### Action

- Redirect to Page
- Re-Execute Form
- Click on Button

## Dynamic Success Message

If server response is dynamic or changes every time or It has some data from any column from excel, then you can use variable like this.

<img src="/image/dynamic-response-msg-01.png" width="400" height="400" alt="Entry Response">

Apart from this, if you only give **"OTP number send to this mobile"** in the success message, it will also work.