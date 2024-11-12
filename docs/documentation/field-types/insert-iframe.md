# Insert Iframe

This field type allows you to embed an `iframe` into your page. You can provide the URL of the iframe, customize its appearance with optional ID and style attributes, and control whether it is printed or hidden by default.

<img src="/image/insert-iframe-01.png" alt="Image">

## Field Options

| Option                                                | Description                                                                        |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Provide the URL for the iframe?**                   | Enter the URL of the iframe you want to embed.                                     |
| **Shall we give id attribute for iframe element?**    | Add an id attribute to the iframe element for easier identification and styling.   |
| **Shall we give style attribute for iframe element?** | Set CSS styles for the iframe, controlling its size, borders, etc.                 |
| **Print iframe?**                                     | Whether to print the content of the iframe when the document is printed.           |
| **Print Delay (Millisecond)**                         | The delay in `milliseconds` before the iframe content is printed.                  |
| **Do you want to keep the iframe hidden?**            | Hide the iframe by default and display it on demand, potentially using JavaScript. |

## Iframe Content

You can provide content directly in the field's `default value` option. This allows you to pre-populate the iframe with content, making it easier to set up and use.

You can also use [variables](/documentation/variable#variable) in the iframe content. This is especially useful when you need to dynamically adjust the iframe's content based on other data or user input.
