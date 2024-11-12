<script setup>
import CloseBrowserTabDetailsTable from './../template/CloseBrowserTabDetailsTable.vue'
import SetDownloadItemFileNameDetailsTable from './../template/SetDownloadItemFileNameDetailsTable.vue'
</script>

# Browser Action

Browser actions.

## Open a new Tab

Open a new tab in browser then use this field type and you can set tab `url` in the field value.

## Get Tab ID

This field type retrieves the ID of a specific tab within the browser. It allows you to identify the desired tab based on its `title` and `URL`.

| Options                                     | Description                                                                              |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Tab URL**                                 | Specify the URL of the tab you want to identify.                                         |
| **Tab Title**                               | Specify the title of the tab you want to identify.                                       |
| **Timeout**                                 | Set a maximum time limit (in minute) to wait for the tab to be found.                    |
| **Wait until the tab URL or title matches** | Enable this option to make the field wait until the specified tab URL or title is found. |

**Example:**

To get the ID of a tab with the title "Example Page" and URL "https://example.com", you would configure the field as follows:

- **Tab Title:** Example Page
- **Tab URL:** https://example.com
- **Timeout:** 3 (minute)
- **Wait until the tab URL or title matches:** Checked

**Usage:**

The field's value will be the ID of the identified tab. You can use this ID in other browser actions, such as `Focus Tab`, `Close Browser Tab`, or `Reload Tab`.

**Note:**

- If multiple tabs match the specified criteria, the ID of the first matching tab will be returned.
- If no tab matches within the timeout limit, the field's value will be `null`.

## Capture Tab

If you want to take a screenshot of the page then you can use this.

:::info
Will capture the `entire page` if you are using `Firefox` browser.
:::

## Update Tab

Action on Active Tab.

- `active`
- `autoDiscardable`
- `highlighted`
- `muted`
- `pinned`
- `url`

## Go Back to Previous Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Go Forward to Next Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Check Downloads

This field type allows you to monitor the status of download items in the browser. It provides a way to pause your automation flow until a specific download status is reached.

### Options

| Options                                           | Description                                                                                                                                                                                                |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Downloads Item Status**                         | Specify the desired download item status you are waiting for. Choose from the following options:                                                                                                           |
|                                                   | - **Progress:** The download is in progress.                                                                                                                                                               |
|                                                   | - **Complete:** The download is complete.                                                                                                                                                                  |
|                                                   | - **Broke Connection:** The download has encountered a broken connection.                                                                                                                                  |
| **Wait until the download items stratus matches** | This option determines whether the field waits until the specified download item status is reached. If unchecked, the field will simply report the current download item status without pausing execution. |

### Usage

1. **Set the desired download item status.** Choose from the available options: `Progress`, `Complete`, or `Broke Connection`.
2. **Optionally, enable the "Wait until the download items status matches" option.** This will pause the automation flow until the specified status is reached.

### Example

If you want to wait for a specific download to complete, configure the field as follows:

- **Downloads Item Status:** Complete
- **Wait until the download items stratus matches:** Checked

## Reload Tab

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Focus Tab

It is used to focus the browser's _tab_.

| Options         | Description                                                                                                                                                                            | Required |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then focus active tab.<br>**-** If field value is **false** then skip focus tab action.<br>**-** You can also set the **Tab Id** in the field value. | No       |

## Focus Window

It is used to focus the browser's _window_.

| Options         | Description                                                                                                                                                                                     | Required |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then focus active window.<br>**-** If field value is **false** then skip focus window action.<br>**-** You can also set the **Window Id** in the field value. | No       |

## Close Browser Tab

This field type can be used to **close** the browser **Tab**.

<CloseBrowserTabDetailsTable/>

::: tip NOTE
Whichever tab you want to close, enter Tab id in the field default value. If no Tab ID is given then that tab will be closed in which form this field is present.
:::

### Options

| Option                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| [Match the tab with the tab title and tab URL and then close it.](#match-the-tab-with-the-tab-title-and-tab-url-and-then-close-it) |

#### Match the tab with the tab title and tab URL and then close it.

- Tab URL
- Tab Title
- Timeout
- Wait until the tab url or title matches

## Close Browser Window

This field type can be used to **close** the browser **Window**.

| Options         | Description                                                                                                                                                                                     | Required |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then close active window.<br>**-** If field value is **false** then skip close window action.<br>**-** You can also set the **Window Id** in the field value. | No       |

## Set Download Item File Name

If you want to change the name of the file being downloaded in the browser, then use it before clicking on the download button.

<SetDownloadItemFileNameDetailsTable/>

::: warning
This field type only uses single file rename at a time, does not work on multiple tabs and multiple files.
:::

## Insert CSS

Inserts a CSS stylesheet into page.

## Set Local Data

It is used to store any **data** in **browser storage**. The data is stored in a **unique key**. With this unique key you can [Get/Fetch](#get-local-data) or [Remove](#remove-local-data) that data.

## Get Local Data

We can **fetch** the data stored through [Set Local Data](#set-local-data) through the **unique key** of that data.

### Settings

- Wait until the given key data is received
- Delete the data after getting the key data

## Remove Local Data

We can **delete** the data stored through [Set Local Data](#set-local-data) through the **unique key** of that data.
