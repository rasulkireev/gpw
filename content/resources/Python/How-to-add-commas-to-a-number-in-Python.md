---
title: "How to add commas to a number in Python"
category: Python
id: 98fcf1ed23a94145910ffab37a8244be
parent_id: 73db0710603b41609d6ac9a2a4d17dc8
created_at: 1591836456430
---

06/10/2020 20:47

https://kite.com/python/answers/how-to-add-commas-to-a-number-in-python#:~:text=format%20to%20add%20commas%20to,with%20commas%20added%20to%20number%20.

How to add commas to a number in Python
Adding commas to a number makes large numbers easier to read. For example, adding commas to one million or 1000000, results in 1,000,000.


USE str.format TO ADD COMMAS TO A NUMBER
Use str.format(number) with "{:,}" as str to signal the use of a comma for a thousands separator and return a string with commas added to number.

```python
number_with_commas = "{:,}".format(1000000)

print(number_with_commas)
```

OUTPUT
`1,000,000`
                