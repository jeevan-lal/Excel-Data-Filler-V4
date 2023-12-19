<script setup>
import CloseBrowserTabDetailsTable from './../template/CloseBrowserTabDetailsTable.vue'
import SetDownloadItemFileNameDetailsTable from './../template/SetDownloadItemFileNameDetailsTable.vue'
</script>

# Browser Action

Browser actions.

## Capture Tab

If you want to take a screenshot of the page then you can use this.

:::info
Will capture the `entire page` if you are using `Firefox` browser.
:::

## Go Back to Previous Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Go Forward to Next Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Reload Tab

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Close Browser Tab

This field type can be used to **close** the browser tab.

<CloseBrowserTabDetailsTable/>

## Set Download Item File Name

If you want to change the name of the file being downloaded in the browser, then use it before clicking on the download button.

<SetDownloadItemFileNameDetailsTable/>

## Insert CSS

Inserts a CSS stylesheet into page.