# Site

The site where you have to fill the form automatically.

## Insert Site

To insert the site, you can also do it by right-clicking on the form with the mouse, apart from this, you can also manually insert the site from the options page of the extension, in this you can also insert **multiple** sites.

- Open extension options page.
- Click **Insert a new Site** Button.
- Enter site **title** and site **description**.
- Click Save Button.
- DONE 🎉

## Insert Site Form

First we have to [insert the site](#insert-site), after that by editing the site, you can also insert the form of the site, in this you can also insert **multiple** forms.

- First [Insert Site](#insert-site).
- Click the edit site button.
- Open **Site Form Pages** tab and click insert form button and fill page **Form URL** and [**URL Match Type**](#form-url-match-types).
- Click Save Button.
- DONE 🎉

<br>

#### Form URL Match Types

- Match with Full URL
- Match with URL pathname
- Match with URL hostname
- Match with RegEx

::: tip

Match with RegEx (Two RegEx)

- (:any)
- (:any(:end))

:::

| SITE FORM URL WITH REGEX        | SITE FORM URL                    | IS MATCHED |
| ------------------------------- | -------------------------------- | ---------- |
| http://demo.in/new/(:any)/edit  | http://demo.in/new/jK33k3ui/edit | ✔          |
| http://demo.in/new/(:any(:end)) | http://demo.in/new/jK33k3ui      | ✔          |

<img src="/image/form-url-with-regex.png" width="500" height="500" alt="RegEx">

## Insert Multiple Form

If your site has multiple forms, then you can insert all the forms in the same site, for this you have to first [insert the main form of the site](#insert-site).

After the site is inserted, you will have to copy the id of the site with the help of the image given below.

<img src="/image/copy_site_id.png" width="350" height="350" alt="Copy Site ID">

After the site id is copied, you will open the form which you have to insert, after opening, right click on the icon of Extension and select the option of **Insert Form** like the image given below.

<img src="/image/insert-site-form-01.png" width="350" height="350" alt="Insert Site Form">

After this, you have to paste the site id in the prompt box and press it ok, your form will be inserted in that site.

DONE 🎉

## Insert Form Field

After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field. [more details](/documentation/field.html#insert-field)

## Download Excel Template

Before download Excel Template of any site, you have to insert the Site's Form and Form Field. Excel sheet can be downloaded only if the field is present in the form. You can download the excel sheet from the image given below. 📥

<img src="/image/download-excel-template-01.png" width="350" height="350" alt="Download Excel Template">

## Scraper Data

If you are scraping data from the site and the scraped data of one of your entries is in **multiple rows**, then it is stored with this option and is downloaded from here only.

::: tip
The data of these field types is downloaded from this option only.

- Fetch Simple Table Data (Scraper Data)

:::

## Settings

Customization site settings.

### Excel Date Format

If you are using date in excel sheet, then you can set the format of date in the site through this option.

::: tip
Default Date Format: yyyy-mm-dd
:::

The following date formats are used:

- YYYY-MM-DD[T]HH:mm:ss
- MM-DD-YYYY
- YYYY-MM-DD

### View Excel Column Data

This option is used when you upload an excel sheet and to see the view of the excel sheet, open the tab of **View Excel Data**, then you see the excel data in the form of a table. If you want to see the data of an excel column or not, then you can set it in this option.

### Export Site Data

To backup the data of the site, which you can [import](/documentation/extension.html#export-import-settings) from the extension settings page.
