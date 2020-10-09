---
title: Migrating to a Custom User Model mid-project in Django
date: 2020-09-24
published: true
slug: custom-user-model-mid-project-django
icon: ./icons/room.png
unsplashImageID: AW5MxlFDVzc
keywords: 
    - django
    - python
    - database
    - authentication
    - migration
category: Django
description: Whenever you building a site with Django that will have user authentication, it is recommended to create a Custom User Model, before the first migration. Sometimes you forget to do that. In this case you have to follow a strict procedure, which I'll show you in the post.
---

Whenever you building a site with Django that will have user authentication, it is recommended to create a Custom User Model, before the first migration. Sometimes you forget to do that. In this case you have to follow a strict procedure, which I'll show you in the post.

### 1. create the `users` app 
- `python manage.py startapp users`
- add the following to the models.py
```
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
	class Meta:
        db_table = 'auth_user'

```

if you don't specify the name you'll receive an error:
> django.db.utils.OperationalError: no such table: users_customuser

add following to admin.py
```
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)
```

### 2. Update `settings.py`
* In `settings.py` add to `INSTALLED_APPS` (`"users.apps.UsersConfig",`)
* add `AUTH_USER_MODEL = 'users.CustomUser'` to the bottom

### 3. Replace User imports (doesn't apply to me)
In your project code, replace all imports of the Django user model:
`from django.contrib.auth.models import User`
with the new, custom one:
`from Accounts.models import User`

### 4. Delete old migrations
`find . -path "*/migrations/*.py" -not -name "__init__.py" -delete`
`find . -path "*/migrations/*.pyc" -delete`

### 5. Create new migrations
`python manage.py makemigrations`
