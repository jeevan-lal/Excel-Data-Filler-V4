# Table Advance Options

When using this field type, the following buttons will be inserted at the top of the table.

<img src="/image/table-advance-options-01.png" alt="Image">

- **Export to Excel**
- **Export All Table to Excel:** This option allows you to export all the data from the table into a single Excel sheet.
- **Print Table:** This option lets you print the table data directly from the page.

## Field Element Selector Options

These options allow users to specify the type and query for selecting element.

| Option         | Description                                                                                                               | Example                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Selector Type  | Specifies the type of selector being used. Available types may include Selector or other types, depending on the context. | `Selector`, `#ID`, `XPath` |
| Selector Query | Defines the `query` or `CSS` selector to target the specific element.                                                     |                            |

## Element Query Behavior

If you don't specify an element query, the field action will apply to **all tables** on the page.

This means that any actions associated with this field, like exporting or printing, will be performed on all tables.

If you want to target a specific table, you'll need to provide an element query. This query will define which table (or tables) the action should be applied to.

For more information on how to find the correct element query, please refer to the documentation on [How to Find Element Selector Query](/documentation/locate-element).

## Field Options

| Option                                                                               | Description                                                                                                                                                            |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visible all rows in excel sheet?**                                                 | If enabled, all visible rows in the table will be exported to the Excel sheet. If disabled, only the rows that are currently displayed on the screen will be exported. |
| **Do you want to skip any sheets having sheet while downloading all table data?**    | If enabled, you can specify a list of sheet names to exclude from the export process.                                                                                  |
| **Do you want to include any sheets having sheet while downloading all table data?** | If enabled, you can specify a list of sheet names to include in the export process, even if they are not currently visible.                                            |
| **Print action automatically trigger when print window is open?**                    | If enabled, the print action will be automatically triggered as soon as the print window is opened.                                                                    |
| **Do need to set a delay on the print action?**                                      | If enabled, you can specify a delay in seconds before the print action is triggered.                                                                                   |
| **Print window automatic close after print done?**                                   | If enabled, the print window will be automatically closed after the print action is completed.                                                                         |
| **Do need to set custom url on the print window?**                                   | If enabled, you can specify a custom URL to be opened in the print window.                                                                                             |
| **Would you to add custom styles to the print window?**                              | If enabled, you can specify custom CSS styles to be applied to the print window.                                                                                       |
| **Print Popup Window Options**                                                       |                                                                                                                                                                        |
| **Open print window in pop up window?**                                              | If enabled, the print window will be opened in a separate popup window.                                                                                                |
| **Do need to set print window height, width and window features?**                   | If enabled, you can specify the height, width, and other features of the popup print window.                                                                           |
