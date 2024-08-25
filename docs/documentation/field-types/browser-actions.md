<script setup>
import CloseBrowserTabDetailsTable from './../template/CloseBrowserTabDetailsTable.vue'
import SetDownloadItemFileNameDetailsTable from './../template/SetDownloadItemFileNameDetailsTable.vue'
</script>

# Browser Action

Browser actions.

## Open a new Tab

Open a new tab in browser then use this field type and you can set tab `url` in the field value.

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
