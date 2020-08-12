---
title: "Getting rid of \n when using .readlines()"
category: Python
id: 332a4c0dd7db4329b40855986057204d
parent_id: 73db0710603b41609d6ac9a2a4d17dc8
created_at: 1589914451967
---

https://stackoverflow.com/questions/15233340/getting-rid-of-n-when-using-readlines



This should do what you want (file contents in a list, by line, without \n)

```python
with open(filename) as f:
    mylist = f.read().splitlines() 
```
                