---
title: Online RegEx Testing
lang: en-US
---

<script setup>
import { onMounted, onUnmounted } from 'vue'
import TestingRegEx from "./template/TestingRegEx.vue"
</script>

<style>
.no-nav .VPSidebar {
  display: none;
}
</style>

# RegEx

Check Real Time RegEx String.

## Testing RegEx

<TestingRegEx />

## Pattens

| RegEx          | Description                       |
| -------------- | --------------------------------- |
| .              | Any character except **newline**  |
| ^              | beginning `(match start of line)` |
| $              | end `(match end of line)`         |
| `\w` `\d` `\s` | word, digit, whitespace           |
| `\W` `\D` `\S` | not word, digit, whitespace       |
| `\.` `\*` `\\` | escaped special characters        |
| [abc]          | any of a, b, or c                 |
| [^abc]         | not a, b, or c                    |
| [a-z]          | character between a & z           |
| [A-Z]          | character between A & Z           |
| [0-9]          | number between 0 & 9              |
| ^abc$          | start / end of the string         |
| (abc)          | Capture group                     |
| `a{5}` `a{2,}` | exactly five, two or more         |
| `a{1,3}`       | between one & three               |
| ab&#124;cd     | match ab or cd                    |

### Basic Pattens

| RegEx               | URL/String                                             | Result                   |
| ------------------- | ------------------------------------------------------ | ------------------------ |
| ^r                  | rabbit <br> parrot                                     | ✅ <br> ❌               |
| t$                  | rabbit <br> trap                                       | ✅ <br> ❌               |
| (\d+)               | 45 <br> 45A <br> 45/A                                  | ✅ <br> ✅<br> ✅        |
| (\d+$)              | 45 <br> 45A <br> 45/A                                  | ✅ <br> ❌<br> ❌        |
| (\d{2}/\d{2}/\d{4}) | 05/09/2024 <br> 5/09/2024 <br> 05/9/2024 <br> 05/9/224 | ✅ <br> ❌<br> ❌<br> ❌ |

### Advance Pattens

| RegEx                             | URL/String                                                                                          | Result            |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------- |
| https://demo.in/form/page/(\d+$)  | https://demo.in/form/page/45 <br> https://demo.in/form/page/45A <br> https://demo.in/form/page/45/A | ✅ <br> ❌<br> ❌ |
| https://demo.in/form/(\d+)/(\d+$) | https://demo.in/form/02/45 <br> https://demo.in/form/02Q/45A <br> https://demo.in/form/02/45/A      | ✅ <br> ❌<br> ❌ |
| param=[^&]+&param2=([^&]+)$       | param=Data%20saved&param2=124045 <br>param=Data%20saved&param2=124045&param3=done                   | ✅ <br> ❌        |
