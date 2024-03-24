# Save as PDF

To save the page in PDF format, you can use this field type which is done through Print option.

## Options

| Options                                                                                         |
| ----------------------------------------------------------------------------------------------- |
| [Press Ctrl + P](#press-ctrl-p)                                                                 |
| [Do not identify print window as per image](#do-not-identify-print-window-as-per-image)         |
| [Set Image Path to Identify Print Window](#set-image-path-to-identify-print-window)             |
| [Set delay time after opening print window](#set-delay-time-after-opening-print-window)         |
| [Direct Save Page to PDF (ONLY FIREFOX BROWSER)](#direct-save-page-to-pdf-only-firefox-browser) |
| [Field Value](#field-value)                                                                     |

## Press Ctrl + P

If your file/PDF is downloaded after clicking on any button, then you can give the selector query of that button in the field. But if you want to save the page through `Ctrl + P` then you can turn on this option so that you will not need to press `Ctl + P` buttons.

## Do not identify print window as per image

When we `print` a page, its print preview comes first. To identify that `print preview window`, the option given below is done, but if you do not want this, then you can turn on that option.

## Set Image Path to Identify Print Window

To identify the print preview window, we have to save an image of that print preview window in the PC and give the path of that image in this option. Due to the size of the page, the print window opens quite late, hence this option is used so that the extension waits until the image is visible on the screen.

Image can be of this type.

<img src="/image/print-window-01.png" alt="Image">

## Set delay time after opening print window

After opening the print window and before saving the page, delay time can be given in this option.

## Direct Save Page to PDF (ONLY FIREFOX BROWSER)

This option is used only in `Firefox Browser` to save the file directly.

## Field Value

If you want to change the name of the file then you can give the name of the file in the value of the field.

:::tip
Set field value if file defined by specific name
```
text-{{date.today[x]}}
```
:::