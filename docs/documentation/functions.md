# Predefined Function

You can use validation and condition while filling the form using predefined function. The predefined function can be added to the field of the form.

## forceCheckElementExists

If you want to check an element whether the element is in the page or not, then you can use it, this function returns only if the element is in the page otherwise the entry will be stopped.

| Params         | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## forceCheckElementDestroy

If you want to check an element whether the element is in the page or not, then you can use it, this function returns only if the element is not in the page. Until the element is destroyed from the page, further field work will not be done.

| Params         | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## cleanSessionStorage

This method removes all the Session Storage Object item for this domain.

## cleanLocalStorage

This method removes all the Local Storage Object item for this domain.

## waitSeconds

If you want to wait for some time, then you can wait by giving value in seconds through this function.

| Params      | Required |
| ----------- | -------- |
| Field Value | true     |
