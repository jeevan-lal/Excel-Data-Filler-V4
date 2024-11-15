# Loop

Loops can execute a [segment](/documentation/segment) a number of times. Loops are handy, if you want to run the same segment over and over again, each time.

<img src="/image/loop-01.png" alt="Loop">

## Options

| Options                                                                                   | Required |
| ----------------------------------------------------------------------------------------- | -------- |
| [**Which segment do you want to execute**](#which-segment-do-you-want-to-execute)         | **Yes**  |
| [**How many times the segment has to be run**](#how-many-times-the-segment-has-to-be-run) | **Yes**  |
| [**If field value is multiline**](#if-field-value-is-multiline)                           | No       |
| [**Store Loop Index**](#store-loop-index)                                                 | No       |

## Which segment do you want to execute

The name of the [segment](/documentation/segment) which is to be executed in the loop comes in this option.

## How many times the segment has to be run

The number of times the loop has to be executed is given in it. In this, value can be given in the following way.

- Value
- Element Length

### Loop Starting and Ending Point

- From which number the loop has to be started? `(Default Index: 0)`
- What number should the loop end at?

:::warning NOTE
Starting number of the loop is `0`. If you give 4 numbers in the starting number then the loop will start from number 5 because the loop will start from 0. Like - `0,1,2,3,4,5,...`
:::

::: details How to run infinite loop?
To execute Infinite Loop, give `-1` in Loop Ending Value.
:::

::: details How to stop a loop when using an infinite loop?

To stop the loop, you can do it through the field settings given below.

- [Field Success Response Action](/documentation/form-fields/field-settings#field-success-response-action)
- [Field Error Response Action](/documentation/form-fields/field-settings#field-error-response-action)

:::

::: details How to skip any loop index?
To skip any loop index (1,2,3,..), use the `Field Success Response` or `Field Error Response` options in the field settings. Choice `Skip Segment` action.
:::

## If field value is multiline

## Store Loop Index

If the page on which you are using the loop is **refreshed** after the loop's action and the Loop starts from again the first number then you can use this option.

## Form Field has multiple elements

If the field is being used in `Loop` Field Type, then after turning on this [`field setting`](/documentation/form-fields/field-settings#if-this-field-is-being-used-in-a-loop-and-the-field-has-multiple-elements), if the element given in the field is multiple in the page, then we will get one element through the `index` of the loop.
