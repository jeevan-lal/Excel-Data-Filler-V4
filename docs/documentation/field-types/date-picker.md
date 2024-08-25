# Date Picker

When any form field opens a calendar and expect user to select any date, You can configure the field to automatically select date.

::: info
This form field is generally used when **Date** Form Field is not working
:::

<br>
<img src="/image/date-picker-01.png" width="400" alt="Image">

## Field Options

### Calendar Date Format

How date is being displayed by calendar. likes (YYY-MM-DD, DD-MM-YYYY,.)

<img src="/image/date-picker-02.png" alt="Calendar Date Format">

[List of date format](https://day.js.org/docs/en/display/format#list-of-all-available-formats)

### Calendar Previous Button Selector Address

Calendar button which we can use to navigate to previous month.

<img src="/image/date-picker-03.png" width="300" alt="Previous Button">

### Calendar Next Button Selector Address

Calendar button which we can use to navigate to next month.

<img src="/image/date-picker-04.png" width="300" alt="Next Button">

### Calendar Days Selector Address

An Element or Layer inside calendar view, which contains list of all days.

<img src="/image/date-picker-05.gif" alt="Gif">

### Calendar Already Selected Date

In some date pickers, when you click on the date field, the date gets inserted in the input field, but in some date pickers this does not happen. as per the picture below

<img src="/image/date-picker-06.gif" width="300" alt="Gif">

If the date is not shown in the field after clicking on the date picker field, then you will have to fill the date of the date picker in this option. As the already selected date of the date picker given above is **2023-04-22**

### Generate Calendar Already Selected Date

If the selected date always changes at any time in the date picker then set this "Create a calendar with an already selected date" option.

### Open Calendar Button Selector Address

If calendar do not open when we click on input field because it is attached to a button, then use this option.

<img src="/image/date-picker-07.gif" width="400" alt="Gif">

### Set the wait time between Previous/Next month Action

### After picking the date, press the button to set the date in form

## Supported

- [flatpickr](https://github.com/flatpickr/flatpickr)

::: info
If using `flatpickr` date picker then set only one js event `change` in the field settings.
:::

- [date-picker](https://github.com/duetds/date-picker)
- [react-multi-date-picker](https://github.com/shahabyazdi/react-multi-date-picker)
- more..
