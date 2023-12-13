# Form Error Response

Through this option, you can match the error response (returned from server), when a **form/entry** is not submitted,
When It matches with given **error response**, **entry** will be marked as **Entry Saved** and You can also set the [action](#action)

<img src="/image/entry-response-03.png" width="400" height="400" alt="Form Error Response">

## Options

### Error Page URL

Fill in the URL of the page on which you want to match the error response.

+ It may be full URL
+ It may be URL with Regular Expression


### Match URL Types

How you want to match with **Error Page URL**

- Match with Full URL
- Match with URL [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
- Match with URL [hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname)
- Match with RegEx

### Error Response Type

It is about, How server returns Error Response to User.

1. Matching Message In Page
2. [Matching Message In Browser Alert](#matching-message-in-alert-message)
3. Matching Message In Page Element Value
4. Checking Element Exists In Page

#### Matching Message In Alert Message

If the response of the entry comes in the form of **javascript dialog** (Browser Alert), you can hide the dialog from [extension settings](/documentation/extension#hide-javascript-dialog) and fetch the response to match against given **Enter Error Message**

### Enter Error Message

If Server returns something back to user after form is not submitted, Then you can use it along with **Error Response Type** to check If form is really saved.

Here you can have multiple messages. If any of the given messages is matched, then the extension will mark the current entry as **saved** and after that, it will execute the [action](#action) given by you.

### Delay Time Before Run Action

Time delay before the action is executed. Set time in the Milliseconds. (1 seconds = 1000 milliseconds)

### Action

- Redirect to Page
- Re-Execute Form
- Click on Button