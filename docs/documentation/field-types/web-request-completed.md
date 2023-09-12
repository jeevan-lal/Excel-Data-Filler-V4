# Web Request Completed

If you want to check whether the web request has been completed then you can use this field type. These fields wait until the web request is completed.

Before using this, you have to provide the web request URL in the extension [settings](https://efiller.netlify.app/settings#form-filler-settings), only then the extension can check that URL.

<img src="/image/settings-01.png" alt="Image">

## Field Options

### Request URL Type

- Match with Full URL
- Match with RegEx

### Request Method

- GET
- POST
- PUT
- PATCH
- DELETE
- OPTIONS
- HEAD

### Timeout to Match Web Request (Minutes)

If the Web Request does not match after the time given in this option is over, then the field returns **False**.

### Delete the web request data after completing this field

If you want to check single web request then keep this option on and if you want to check multiple web requests then this option has to be kept off but in the last web request this option has to be kept on.