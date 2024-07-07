# Image Actions

Actions for image and file.

## Get Image/File Base64 String

Returns a `base64` string with a URI header. Can be used on all files, not just images.

### Field Value

- If you have given `file/image` element query in this field then scrape url from element.
- If you haven't provided an element query then you must specify url/path in the `field value`.

## Get Image Width

Get image width.

### Field Value

- If you have given `image` element query in this field then scrape url from element.
- If you haven't provided an element query then you must specify `url` in the `field value`.

## Get Image Height

Get image height.

### Field Value

- If you have given `image` element query in this field then scrape url from element.
- If you haven't provided an element query then you must specify `url` in the `field value`.

## Download Image/File

Save as `image/file` in the pc.

### Output File Name

- By default downloaded file location is window `Documents` folder.
  - if this field type option `Output File Name` values -
    - Value is `empty` : Then download a file with a default name.
    - Value is `\pic\` : Then download a file with a default name in `pic` folder.
    - Value is `\pict\0` : Then filename to save the filename as 1.jpg, 2.jpg, 3.jpg... in `pic` folder. (Only For Image)
