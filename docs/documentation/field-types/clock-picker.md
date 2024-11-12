# Clock Picker

The `Clock Picker` is a specialized field type, select time in the clock picker field. This guide details the configuration options available to customize the Clock Picker field type according to your requirements.

<img src="/image/clock-picker-01.png" alt="Image">

## Field Options

| Option                                                      | Description                                                                                                         | Example                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Clock Time Format**                                       | Specifies the format for displaying the selected time.                                                              | `hh:mm:ss A` for a 12-hour format with AM/PM display.                    |
| **[Clock Picker Library Name](#clock-picker-library-name)** | Selects the time selection library or component used for the Clock Picker field.                                    | Choose from predefined libraries or `"Other"` for custom configurations. |
| **Clock Hand Selector Address**                             | CSS selector identifying the clock hand element used for selecting time components in custom clock implementations. |                                                                          |
| **Clock Meridiem List Selector Address**                    | CSS selector for the element managing `AM/PM` selection in the Clock Picker field.                                    |                                                                          |
| **Active Clock Components**                                 | Defines the components `(hours, minutes, seconds, meridiem)` that are enabled in the Clock Picker field.            | Select `hours`, `minutes`, `meridiem` and `seconds`.                     |
| **Address of the button to open the clock**                 | CSS selector for the button that triggers the clock interface for selecting time.                                   |                                                                          |
| **Enter Timer Submit Button Selector Address**              | CSS selector for the submit button used to confirm the selected time in the Clock Picker field.                     |                                                                          |

## Additional Options

- **Enable Button to Open Clock:** Activates the specified button to open the clock.
- **Submit Button After Time Selection:** Automatically submits the selected time into the form when enabled.

## Clock Picker Library Name

- MUI-V4 Time Picker
- MUI-X Time Picker (React)

## Examples of Clock Picker Libraries

- https://mui.com/x/react-date-pickers/
- https://mui.com/x/react-date-pickers/time-picker/#available-components
- https://v5-0-6.mui.com/components/time-picker/
- https://weareoutman.github.io/clockpicker/
- https://buefy.org/documentation/clockpicker/
