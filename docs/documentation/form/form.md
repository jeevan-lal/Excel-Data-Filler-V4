# Site Form

The part of the site on which you want to execute the extension is called a form. This form is inserted in the [site](/documentation/site/site).

<img src="/image/form-01.png" alt="Form">

## Insert Site Form

First we have to [insert the site](/documentation/site/site#insert-site), after that by editing the site, you can also insert the form of the site, in this you can also insert **multiple** forms.

- First [Insert Site](/documentation/site/site#insert-site).
- Click the edit site button.
- Open **Site Form Pages** tab and click insert form button and fill page **Page URL** and [**URL Match Type**](#form-url-match-types).
- Click Save Button.
- DONE 🎉

<img src="/image/insert-site-form-manually-01.png" alt="Insert Site Manually">
<br>

- Page URL
- Match URL Types
- Description
- Active/Inactive
- Move Up/Down
- Form Fields
- Edit Form
- Duplicate
- Copy Form
- Paste Form
- Delete Form

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

> [Online Test RegEx](/documentation/regex)

## Insert Multiple Form

If your site has multiple forms, then you can insert all the forms in the same site, for this you have to first [insert the main form of the site](/documentation/site/site#insert-site).

After the site is inserted, you will have to copy the id of the site with the help of the image given below.

<img src="/image/copy_site_id.png" width="350" height="350" alt="Copy Site ID">

After the site id is copied, you will open the form which you have to insert, after opening, right click on the icon of Extension and select the option of **Insert Form** like the image given below.

<img src="/image/insert-site-form-01.png" width="350" height="350" alt="Insert Site Form">

After this, you have to paste the site id in the prompt box and press it ok, your form will be inserted in that site.

DONE 🎉

## Insert Form Field

After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field. [more details](/documentation/form-fields/field)
