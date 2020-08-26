---
title: "Multiple User Types by Daniel Feldroy"
category: Video Notes
id: ff0f52ecac944f1bb89f8463f6d24ca3
parent_id: 2fb116253bed4bd697e23a727a9edcd2
created_at: 1594099305358
---

https://youtu.be/f0hdXr2MOEA

1:00
Use proxy models for different type of users. 

```
class User (AbstractUser):
  ...

class Spy(User):
  class Meta:
    proxy=True
```

4:00
`models.TextChoices` is Enum but built for Django.

7:50
`manage.py shell_plus` creates a shell with all the imports.


    