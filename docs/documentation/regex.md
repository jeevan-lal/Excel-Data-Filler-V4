---
title: Online RegEx Testing
lang: en-US
---

<script setup>
import TestingRegEx from "./template/TestingRegEx.vue"
</script>

# RegEx

## Testing RegEx

<TestingRegEx />

## Pattens

### Basic Pattens

| RegEx               | URL/String                                             | Output                   |
| ------------------- | ------------------------------------------------------ | ------------------------ |
| (\d+)               | 45 <br> 45A <br> 45/A                                  | ✅ <br> ✅<br> ✅        |
| (\d+$)              | 45 <br> 45A <br> 45/A                                  | ✅ <br> ❌<br> ❌        |
| (\d{2}/\d{2}/\d{4}) | 05/09/2024 <br> 5/09/2024 <br> 05/9/2024 <br> 05/9/224 | ✅ <br> ❌<br> ❌<br> ❌ |

### Advance Pattens

| RegEx                             | URL/String                                                                                          | Output            |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------- |
| https://demo.in/form/page/(\d+$)  | https://demo.in/form/page/45 <br> https://demo.in/form/page/45A <br> https://demo.in/form/page/45/A | ✅ <br> ❌<br> ❌ |
| https://demo.in/form/(\d+)/(\d+$) | https://demo.in/form/02/45 <br> https://demo.in/form/02Q/45A <br> https://demo.in/form/02/45/A      | ✅ <br> ❌<br> ❌ |
| param=[^&]+&param2=([^&]+)$       | param=Data%20saved&param2=124045 <br>param=Data%20saved&param2=124045&param3=done                   | ✅ <br> ❌        |
