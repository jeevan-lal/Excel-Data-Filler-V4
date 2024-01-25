# Copy

It is used to copy any **text** from the page.

<img src="/image/copy-01.png" width="450" height="450" alt="Copy">

## Options

| Options                                                     | Description               | Value                                              | Required |
| ----------------------------------------------------------- | ------------------------- | -------------------------------------------------- | -------- |
| **Selector Query**                                          | Selector Query of Element | [Get element query](/documentation/locate-element) | **Yes**  |
| [**Copy Which Element Option**](#copy-which-element-option) |                           |                                                    | **Yes**  |
| [**Replace String with RegEx**](#replace-string-with-regex) |                           |                                                    | No       |
| [**Set Store Key Name**](#set-store-key-name)               |                           |                                                    | No       |

## Copy Which Element Option

- Copy Value
- Copy Text
- Copy HTML
- Copy Element Attribute
  - Element Attribute Name

## Replace String with RegEx

If you want to change this "**Ben002**" string into this "**002_g.pdf**" then you can use this type of RegEx.

<img src="/image/regex-01.jpg" width="400" height="400" alt="Copy">

## Set Store Key Name

If you have to copy **multiple strings** from one page and save them all in different keys, then this option is used so that we can access that data through the key in [Paste Option](/documentation/form-fields/field-settings#paste-copied-value).

<img src="/image/copy-02.png" width="550" height="550" alt="Copy">
