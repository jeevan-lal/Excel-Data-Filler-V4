<script setup>
import TodayDate from '../components/TodayDate.vue'
</script>

# Variable

You have to use these variables inside curly braces. like this

:::v-pre
{{variable_name}}
:::

## Page Location Variable

| Variable Name         | Description       |
| --------------------- | ----------------- |
| **location.href**     | Page URL          |
| **location.host**     | Site Host Name    |
| **location.hostname** | Site Hostname     |
| **location.origin**   | Site Origin       |
| **location.pathname** | Page URL Pathname |

## Generate Random Value

| Variable Name                                                                   | Description                                                                  | Example                                 |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| random.integer[0][12]                                                           | Generate random integer value form **0** to **12**.                          | 7 <br> 11,..                            |
| random.float[0][12][2]                                                          | Generate random float value form **0** to **12** with **2** digit precision. | 7.45 <br> 11.90,..                      |
| random.string[a,A,0][7] <br> random.string[a,0][7] <br> random.string[a,A][7] | Generate random string of **7** chars with **a-z,A-Z,0-9** character set          | A0bAur8,.. <br> ud7dhe6 <br> AuYctTd,.. |
| random.email[gmail.com]                                                         | Generate random email address with custom **domain** name.                       | abeu@gmail.com                          |
| date.today[DD-MM-YYYY]                                                          | Generate today date for given format                                         | <TodayDate/>                            |
| random.date[YYYY-MM-DD][1994][2012]                                             | Generate random date for given format within **1994**-**2012**                       | 2012-09-12 <br> 1993-12-01,..           |

- [Check All Date Formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats)
