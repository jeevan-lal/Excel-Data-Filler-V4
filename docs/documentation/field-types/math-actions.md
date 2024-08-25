# Math Actions

## Sum (+)

| Options                      | Required | Description            |
| ---------------------------- | -------- | ---------------------- |
| Selector Type                | true     | Element Selector Type  |
| Selector Query               | true     | Element Selector Query |
| Field Value                  | true     | Sum Number             |
| Fetch the numbers to Sum     | true     |                        |
| Is convert string to number? | false    |                        |
| Is the number in decimal?    | false    |                        |

## Subtract (-)

| Options                       | Required | Description            |
| ----------------------------- | -------- | ---------------------- |
| Selector Type                 | true     | Element Selector Type  |
| Selector Query                | true     | Element Selector Query |
| Field Value                   | true     | Subtract Number        |
| Fetch the numbers to Subtract | true     |                        |
| Is convert string to number?  | false    |                        |
| Is the number in decimal?     | false    |                        |

## Multiply (\*)

| Options                       | Required | Description            |
| ----------------------------- | -------- | ---------------------- |
| Selector Type                 | true     | Element Selector Type  |
| Selector Query                | true     | Element Selector Query |
| Field Value                   | true     | Multiply Number        |
| Fetch the numbers to Multiply | true     |                        |
| Is convert string to number?  | false    |                        |
| Is the number in decimal?     | false    |                        |

## Divide (÷)

| Options                      | Required | Description            |
| ---------------------------- | -------- | ---------------------- |
| Selector Type                | true     | Element Selector Type  |
| Selector Query               | true     | Element Selector Query |
| Field Value                  | true     | Divide Number          |
| Fetch the numbers to Divide  | true     |                        |
| Is convert string to number? | false    |                        |
| Is the number in decimal?    | false    |                        |

## Count

| Options                      | Required | Description            |
| ---------------------------- | -------- | ---------------------- |
| Selector Type                | true     | Element Selector Type  |
| Selector Query               | true     | Element Selector Query |
| Field Value                  | true     | Value                  |
| Which one should be counted? | true     |                        |
| What do you want to count?   | true     |                        |
| Convert to Lowercase         | false    |                        |
| Remove Extra Space           | false    |                        |
| Remove All Space             | false    |                        |
| Trim                         | false    |                        |

::: warning NOTE
If there are values ​​in new line then use this `\r\n` for split values.
:::

## Calculate Math Query

Calculate math query with this field type.

| Options     | Required | Description |
| ----------- | -------- | ----------- |
| Field Value | true     | Value       |

- 2 + 3 \* 4
- (2 + 3) \* 4
- 2 + {$variable$} \* 4

::: warning Operators
https://mathjs.org/docs/expressions/syntax.html#operators
:::
