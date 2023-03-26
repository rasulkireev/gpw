---
title: Managing a Django Project with Poetry
dateCreated: 2020-10-31
dateUpdated: 2022-02-22
published: true
slug: managing-Django-with-poetry
icon: ./icons/broken_link.png
unsplashImageID: PDxYfXVlK2M
aiImage:
aiPrompt:
keywords:
 - Python
 - Django
category: Django
type: Tutorial
twitterLink: "https://twitter.com/rasulkireev/status/1322499651732385792"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: Poetry is relatively new packaging and dependency manager. It makes it very easy to upload libraries to PyPI, manage dependencies visually, and has a couple of handy features. Today, I'm not going to do a deep dive into how Poetry works and all its features. Today I just want to focus on how to configure it for a Django project.
---

Update (02/03/2022): I wrote an [updated guide on how to create a django project with poetry](https://builtwithdjango.com/blog/basic-django-setup) for the builtwithdjango site. It focuses on creating a project with poetry. In the future I will also write a guide on how to migrate a project to poetry.

Poetry is relatively new packaging and dependency manager. It makes it very easy to upload libraries to [PyPI](https://pypi.org/), manage dependencies visually, and has a couple of handy features. Today, I'm not going to do a deep dive into how [Poetry](https://python-poetry.org/) works and all its features. Today I just want to focus on configuring a [Django](https://www.djangoproject.com/) project.

## 1. Install Poetry

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

## 2. Create a Directory for you Django Project

```bash
mkdir django_poetry_example && cd django_poetry_example
```

## 3. Initiate a Poetry Project

```bash
poetry init
```

You will be asked to confirm the information about your project. You can skip through most of it.

```
This command will guide you through creating your pyproject.toml config.

Package name [django_poetry_example]:
Version [0.1.0]:
Description []:
Author [Rasul Kireev <rasul.kireev@guycarp.com>, n to skip]:
License []:
Compatible Python versions [^3.7]:

Would you like to define your main dependencies interactively? (yes/no) [yes] no
Would you like to define your development dependencies interactively? (yes/no) [yes] no
Generated file

[tool.poetry]
name = "django_poetry_example"
version = "0.1.0"
description = ""
authors = []

[tool.poetry.dependencies]
python = "^3.7"

[tool.poetry.dev-dependencies]

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"


Do you confirm generation? (yes/no) [yes]
```

## 4. Add the Necessary Dependencies

Run `poetry add django` in your terminal. Poetry will add `django` to the `pyproject.toml` file under the dependencies section. A virtual environment will also be created for you.

## 5. Start you Django Project

```
poetry run django-admin startproject django_poetry_example .
```

## 6. Working on your Django Project

When you need to run any python function (for example, `python manage.py createsuperuser`) you have two options.

1. You can leverage `poetry run`, which will run against the current project's dependencies. The command will be this: `poetry run python manage.py createsuperuser`.
2. You can activate the virtual environment with a `poetry shell` command. Now you can run python commands, as is. They will be run with dependencies you have installed.

I prefer the first method, for an explicit approach.

## Bonus. Export dependencies to a requirements.txt

If you need to have the `requirements.txt` file with all the dependencies, you can run `poetry export -f requirements.txt --output requirements.txt`. If you have configured a CI/CD job that auto deploys your project, you can add this function as a step, which will generate the updated version on each update.

## Bonus II. Video

If you prefer a more visual approach, I have made a video that shows how to start a Django project with Poetry.

https://www.youtube.com/watch?v=-c8DASfFNZM
