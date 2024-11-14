# Browser Bus

A simple javascript code to `communicate` data between browser `tabs`.

## Features

- **Data Sharing:** Allows sharing data between open tabs of the same origin or not.
- **Real-Time Updates:** Data changes are reflected across all connected tabs.

## How it works

1. **Request Sending:**

   ```js
   // SEND REQUEST
   $fns.connection.send("SEND REQUEST");
   ```

2. **Request Receiving:**

   ```js
   // RECEIVER
   $fns.connection.receive((data) => {
     console.log("REQUEST DATA: ", data);

     // STOP LISTENER
     // $fns.connection.listener.stop();

     // REMOVE LISTENER
     // $fns.connection.listener.remove();
   });
   ```

## Stop and Remove Listener

This helps to prevent unnecessary processing when data is no longer needed.

```js
// STOP
$fns.connection.listener.stop();
```

```js
// REMOVE
$fns.connection.listener.remove();
```

## Reset Listener

If the listener is removed or stopped, the receiver will no longer function. To restart the receiver, you can reset the listener.

```js
// RESET LISTENER
$fns.connection.listener.reset();
```

## Settings

Connection default settings -

```json
{
  // Is allow connection in iframe
  "allow_iframe": false,
  // URLs of the page to send the connection from.
  "senderURLs": [],
  // URL of the page to receive the connection data.
  "receiverTab": {}
}
```

| Setting        | Description                                                                                                                                                                   | Value               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `allow_iframe` | Indicates whether the application allows connections within an iframe.                                                                                                        | `false`             |
| `senderURLs`   | An array containing the URLs of the pages from which the connection is sent. <br><br> If there are multiple `iframes` on the page, you can specify the `URL` for iframe here. | `[]` (empty array)  |
| `receiverTab`  | An object containing the URL of the page that will receive the connection data.                                                                                               | `{}` (empty object) |

If the `senderURLs` data is empty, the connection send request from all iframes if the site has iframes.

If the `receiverTab` data is empty, the connection is triggered to all tabs. If you want to customize this behavior, you can use the parameters provided in the Chrome extension API, specifically the tabs API.

For more information on how to use these parameters, you can refer to the [Chrome Extension Tabs API](https://developer.chrome.com/docs/extensions/reference/api/tabs?hl=en#parameters_19).

### How to Set Settings

These settings should be established before `sending` a connection request.

```js
// SETTINGS
$fns.connection.settings({
  allow_iframe: false,
  senderURLs: ["https://temp-mail.org/en/"],
  receiverTab: {
    url: "https://formfiller.ctechhindi.in/*",
  },
});

// Then use `connection.send`
```

- **allow_iframe**: This setting is set to `false`, which means that the connection will not be allowed within an iframe.
- **senderURLs**: In this case, the only allowed sender URL is `https://temp-mail.org/en/`. This means that only requests originating from this URL will be able to send connection data.
- **receiverTab**: The specified URL is `https://formfiller.ctechhindi.in/*`, which indicates that any page under this domain can receive the connection.
