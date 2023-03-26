---
title: Migrating to a Custom User Model mid-project in Django
dateCreated: 2020-11-19
dateUpdated: 2020-11-19
published: true
slug: custom-user-model-mid-project-django
icon: ./icons/bird.png
unsplashImageID: FiMvNM44-IE
aiImage:
aiPrompt:
keywords:
    - django
    - python
    - database
    - authentication
    - migration
category: Django
type: Tutorial
twitterLink: "https://twitter.com/rasulkireev/status/1329393168840871936"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: Whenever you building a site with Django that will have user authentication, it is recommended to create a Custom User Model, before the first migration. Sometimes you forget to do that. In this case you have to follow a strict procedure, which I'll show you in the post.
---

Whenever you are building a site with [Django](https://www.djangoproject.com) that will have user authentication, it is recommended to create a [Custom User Model](https://docs.djangoproject.com/en/dev/topics/auth/customizing/) before the first migration. Sometimes you forget to do that. In this case, you have to follow a strict procedure, which I'll show you in the post.

This was [Issue was discussed at length](https://code.djangoproject.com/ticket/25313) by the Django community. There is now a consensus about the best and the least painful way to do that. I'd like to take that discussion and summarize it into a set of actionable steps.

### 1. Create the `users` app

Make sure you are inside your project directory.
```bash
python manage.py startapp users
```

Then, add the following to the models.py:
```python
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    class Meta:
        db_table = 'auth_user'

```

If you don't specify the name, you'll receive an error:
> django.db.utils.OperationalError: no such table: users_customuser

Then, register the new Model in the admin panel:

```python
# In users/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)
```

### 2. Update `settings.py` file
* In `settings.py` add to `INSTALLED_APPS` (`"users.apps.UsersConfig",`)
* Add a `AUTH_USER_MODEL = 'users.CustomUser'` line to the bottom of the `setting.py` file.

### 3. Replace User imports
In your project code, replace all imports of the Django User model:
```python
from django.contrib.auth.models import User
```
with the new, custom one:
```
from users.models import User
```

### 4. Delete Old Migrations
Run the following two commands in your terminal, from the root of your project:

1. `find . -path "*/migrations/*.py" -not -name "__init__.py" -delete`
2. `find . -path "*/migrations/*.pyc" -delete`

### 5. Create New Migrations
```
python manage.py makemigrations
```

### 6. Truncate (delete) contents of the migrations table

You will need to do this manually by going inside your database (Postgres, sqlite3, MySQL, etc.).

I was using sqlite3 at the time, so I had to do the following:
```
# login into the sqlite database
sqlite3 db.sqlite
# Then run the following
> DELETE FROM django_migrations;
> .quit
```

If you are using Postgres, you will have to first login into your database and then run:

```
TRUNCATE TABLE django_migrations;
```

### 7. Fake apply new migrations
```bash
python manage.py migrate --fake
```

### 8. Test
```bash
python manage.py runserver
```

This should be it. If you went through each step sequentially, your app should be using a Custom User Model. Congrats!

## Bonus Video

If you prefer a more visual approach, I've made a video that shows how to migrate to a Custom User Model mid-project.

https://www.youtube.com/watch?v=k0GwrwC5uuo
