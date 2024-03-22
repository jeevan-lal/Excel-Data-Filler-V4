<script setup>
import TodayDate from '../components/TodayDate.vue'
</script>

# Variable

You have to use these variables inside curly braces. like this

:::v-pre
{{variable_name}}

## Page Location Variable

| Variable Name         | Description       |
| --------------------- | ----------------- |
| **location.href**     | Page URL          |
| **location.host**     | Site Host Name    |
| **location.hostname** | Site Hostname     |
| **location.origin**   | Site Origin       |
| **location.pathname** | Page URL Pathname |

## Generate Random Value

| Variable Name                                                                 | Description                                                                                                                 | Output                                   |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| random.integer[0][12]                                                         | Generate random integer value form **0** to **12**.                                                                         | 7 <br> 11,..                              |
| random.float[0][12][2]                                                        | Generate random float value form **0** to **12** with **2** digit precision.                                                | 7.45 <br> 11.90,..                        |
| random.string[a,A,0][7] <br> random.string[a,0][7] <br> random.string[a,A][7] | Generate random string of **7** chars with **a-z,A-Z,0-9** character set                                                    | A0bAur8,.. <br> ud7dhe6 <br> AuYctTd,..   |
| random.email[gmail.com]                                                       | Generate random email address with custom **domain** name.                                                                  | abeu@gmail.com                            |
| date.today[DD-MM-YYYY]                                                        | Generate today date for given format                                                                                        | <TodayDate/>                              |
| random.date[YYYY-MM-DD][1994][2012]                                           | Generate random date for given format within **1994**-**2012**                                                              | 2012-09-12 <br> 1993-12-01,..             |
| random.mobile[10][6,7,8,9]                                                    | Generate random mobile number.<br> - Mobile Number Length **[10]**<br> - Mobile Number Which Is Starting With **[6,7,8,9]** | 9567893476<br>7590556721<br>6534980345,.. |

- [Check All Date Formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats)

## Calculation

| Variable Name           | Description             | Output |
| ----------------------- | ----------------------- | ------- |
| calculation.increase[2] | To increase the number. | 3       |
| calculation.decrease[3] | To decrease the number. | 2       |

:::v-pre
:::tip

- Using other variable - `calculation.increase[{{random.integer[9][12]}}]`
- Nested - `calculation.increase[{{random.integer[9][{{random.integer[19][112]}}]}}]`

:::

## Loop Variable

| Variable Name         | Description                                                                                                                                                                                                | Output |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| loop.index[FieldName] | If you are using Field Type [Loop](/documentation/field-types/loop) and you need the index of the Loop then you can use this variable. In this variable you only have to give the name of Field Type Loop. |   Number      |

:::v-pre
:::tip

- You can increase/decrease loop index. `calculation.increase[{{loop.index[FieldName]}}]`
- Use variable like this: `https://example.com/list?page={{loop.index[Loop]}}`

:::
