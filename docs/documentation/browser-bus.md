# Browser Bus

A simple javascript code to `communicate` data between browser `tabs`.

## Features

- **Data Sharing:** Allows sharing data between open tabs of the same origin or not.
- **Real-Time Updates:** Data changes are reflected across all connected tabs.

## How it works

1. **Data Sending:**

   - Sets data in `localStorage` with a predefined key.

   ```js
   // SET DATA
   localStorage.setItem("EDF4-REALTIME-STORE-DATA", "SEND DATA");
   ```

2. **Data Receiving:**

   - Listens for messages on the `window` object using `window.addEventListener('message', ...)`.

   ```js
   // GET DATA
   window.addEventListener("message", (event) => {
     if (event.data && event.data.type === "EDF4-REALTIME-STORE-DATA") {
       // console.log("Received Data: ", event.data.data);
       console.log("Received JSON Data: ", JSON.parse(event.data.data));

       // STOP LISTENER
       // localStorage.setItem("EDF4-REALTIME-STORE-DATA-STOP-LISTENER", "1");

       // REMOVE LISTENER
       // localStorage.setItem("EDF4-REALTIME-STORE-DATA-REMOVE-LISTENER", "1");
     }
   });
   ```

## Stop and Remove Listener

Sets a flag in `localStorage` to indicate that the listener should stop processing messages. This helps to prevent unnecessary processing when data is no longer needed.

```js
// STOP
localStorage.setItem("EDF4-REALTIME-STORE-DATA-STOP-LISTENER", "1");
```

```js
// REMOVE
localStorage.setItem("EDF4-REALTIME-STORE-DATA-REMOVE-LISTENER", "1");
```
