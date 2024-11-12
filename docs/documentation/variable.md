<script setup>
import TodayDate from '../components/TodayDate.vue'
</script>

# Variable

:::v-pre
You have to use these variables inside curly braces `{{}}` and `{$variable_name$}`. You can use any `Field Name` as a variable through `{$field_name$}`.

## Example

| Variable                                   |
| ------------------------------------------ |
| `{$field_name$}`                           |
| `{{calculation.increase[20]}}`             |
| `{{calculation.increase[{$field_name$}]}}` |

## Page Location Variable

:::v-pre
Use this variable in the format `{{variable_name}}`

| Variable Name         | Description       |
| --------------------- | ----------------- |
| **location.href**     | Page URL          |
| **location.host**     | Site Host Name    |
| **location.hostname** | Site Hostname     |
| **location.origin**   | Site Origin       |
| **location.pathname** | Page URL Pathname |

## Generate Random Value

:::v-pre
Use this variable in the format `{{variable_name}}`

| Variable Name                                                                 | Description                                                                                                                 | Output                                    |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| random.integer[0][12]                                                         | Generate random integer value form **0** to **12**.                                                                         | 7 <br> 11,..                              |
| random.float[0][12][2]                                                        | Generate random float value form **0** to **12** with **2** digit precision.                                                | 7.45 <br> 11.90,..                        |
| random.string[a,A,0][7] <br> random.string[a,0][7] <br> random.string[a,A][7] | Generate random string of **7** chars with **a-z,A-Z,0-9** character set                                                    | A0bAur8,.. <br> ud7dhe6 <br> AuYctTd,..   |
| random.email[gmail.com]                                                       | Generate random email address with custom **domain** name.                                                                  | abeu@gmail.com                            |
| date.today[DD-MM-YYYY]                                                        | Generate today date for given format                                                                                        | <TodayDate/>                              |
| date.today[x]                                                                 | Generate today date and time timestamp                                                                                      | <TodayDate/>                              |
| random.date[YYYY-MM-DD][1994][2012]                                           | Generate random date for given format within **1994**-**2012**                                                              | 2012-09-12 <br> 1993-12-01,..             |
| random.mobile[10][6,7,8,9]                                                    | Generate random mobile number.<br> - Mobile Number Length **[10]**<br> - Mobile Number Which Is Starting With **[6,7,8,9]** | 9567893476<br>7590556721<br>6534980345,.. |
| random.year[1994][2012]                                                       | Generate random year value form **1994** to **2012**.                                                                       | 2001 <br> 1998,..                         |
| random.choose[red,green,blue][,] <br> `random.choose[string][divider]`        | Generate random string value from `red,green,blue`                                                                          | red <br> green <br> blue,..               |
| [random.month[format][lang]](#random-month-format-lang)                       | Generate random month in specified format and language.                                                                     |
| [random.day[format][lang]](#random-day-format-lang)                           | Generate random day in specified format and language.                                                                       |

- [Check All Date Formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats)

### random.month[format][lang]

| Format | Description                                      | Example   |
| ------ | ------------------------------------------------ | --------- |
| `n`    | Returns a numeric month without padding, 1-12    | `1`       |
| `nn`   | Returns a numeric month with zero-padding, 01-12 | `01`      |
| `s`    | Capitalized short month name (e.g., Jan)         | `Jan`     |
| `ss`   | Lowercase short month name (e.g., jan)           | `jan`     |
| `su`   | Uppercase short month name (e.g., JAN)           | `JAN`     |
| `f`    | Capitalized full month name (e.g., January)      | `January` |
| `fs`   | Lowercase full month name (e.g., january)        | `january` |
| `fu`   | Uppercase full month name (e.g., JANUARY)        | `JANUARY` |

### random.day[format][lang]

| Format | Description                                    | Example  |
| ------ | ---------------------------------------------- | -------- |
| n      | Returns a numeric day without padding, 1-7     | `1`      |
| nn     | Returns a numeric day with zero-padding, 01-07 | `01`     |
| s      | Capitalized short day name (e.g., Sun)         | `Sun`    |
| ss     | Lowercase short day name (e.g., sun)           | `sun`    |
| su     | Uppercase short day name (e.g., SUN)           | `SUN`    |
| f      | Capitalized full day name (e.g., Sunday)       | `Sunday` |
| fs     | Lowercase full day name (e.g., sunday)         | `sunday` |
| fu     | Uppercase full day name (e.g., SUNDAY)         | `SUNDAY` |

#### Language

| Language Symbol | Language Name |
| --------------- | ------------- |
| `en`              | English       |
| `es`              | Spanish       |
| `fr`              | French        |
| `de`              | German        |
| `it`              | Italian       |
| `pt`              | Portuguese    |
| `ru`              | Russian       |

## Calculation

:::v-pre
Use this variable in the format `{{variable_name}}`

| Variable Name           | Description             | Output |
| ----------------------- | ----------------------- | ------ |
| calculation.increase[2] | To increase the number. | 3      |
| calculation.decrease[3] | To decrease the number. | 2      |

:::v-pre
:::tip

- Using other variable - `calculation.increase[{{random.integer[9][12]}}]`
- Nested - `calculation.increase[{{random.integer[9][{{random.integer[19][112]}}]}}]`

:::

## Entry Variable

:::v-pre
Use this variable in the format `{{variable_name}}`

| Variable Name | Description                        |
| ------------- | ---------------------------------- |
| entry.index   | Get Current Active Excel Entry No. |
| entry.length  | Get Total Excel Entry No.          |

## Loop Variable

:::v-pre
Use this variable in the format `{{variable_name}}`

| Variable Name          | Description                                                                                                                                                                                                      | Output |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| loop.index[FieldName]  | If you are using Field Type [Loop](/documentation/field-types/loop) and you need the index of the Loop then you can use this variable. In this variable you only have to give the name of Field Type Loop.       | Number |
| loop.length[FieldName] | If you are using Field Type [Loop](/documentation/field-types/loop) and you need the loop length of the Loop then you can use this variable. In this variable you only have to give the name of Field Type Loop. | Number |

::: warning
If Loop setting `Store Loop Index` is `on` then return actual Loop index but if loop setting `Store Loop Index` is `off` then return `current active loop` index.
:::

:::v-pre
:::tip

- You can increase/decrease loop index. `calculation.increase[{{loop.index[FieldName]}}]`
- Use variable like this: `https://example.com/list?page={{loop.index[Loop]}}`

:::
