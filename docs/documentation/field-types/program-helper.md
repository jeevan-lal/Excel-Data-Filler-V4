# Program Helper - Field Types

To use these fields, you will first have to install the helper program in the OS, only after that you can do this field work.

## Install Helper Program

Following **Helper Program** needs to be downloaded and installed on your computer, It is required to automatically select given file(s) from your computer.

- [For Windows](/edf-extension-helper-installer-v1.6.exe)

## Fields

### X-Focus Application Window

- Value - `ahk_exe chrome.exe`

### X-Click (Space Key)
### X-Paste Text
### X-WinAlwaysOnTop (Activate)
### X-WinAlwaysOnTop (Deactivate)
### X-Send

- Value - `{F1}`

### X-MouseClick

- Value - `left,,,1`

### X-ControlClick

- Value - `x100 y200,Untitled - Notepad`

### X-ImageSearch

### X-FileGetSize

Get file size in `Bytes`, set file path in the `field value`. 

```
# Supported URL/Path

C:\Users\P1\Pictures\photo.jpg
https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg
```

### X-FileExtension

Get file `extension`. likes `png, jpg, js,..`