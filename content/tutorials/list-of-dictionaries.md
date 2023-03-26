---
title: Adding a dictionary to a list of dictionaries in Python
dateCreated: 2020-02-13
dateUpdated: 2020-02-13
published: true
slug: list-of-dicts
icon: ./icons/python.svg
unsplashImageID: ./images/reading-on-kindle.jpg
aiImage:
aiPrompt:
keywords: [webscraping, dictionaries, python, webscraping]
category: Python
type: Tutorial
twitterLink: "https://twitter.com/rasulkireev/status/1228083171092238337"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: I have encountered a problem where I was not able to append a dictionary to a list. In this post, I will explore this issue and show how to bypass that.
---

In my most recent project, I have encountered a problem where I was not able to append a dictionary to a list using `list_data.append(data_dict).` The result was a list of the same dictionaries.

In this post, I will explore this issue and show how to bypass that.

## Setup

Just so that we are on the same page, this is my setup.

I am parsing a page that has an entry for each day of each month.

```
<div id="january">
    <h2>January</h2>
    <p class="subtitle">1</p>
    <p>blah</p>

    <p class="subtitle">2</p>
    <p>blah blah</p>

    <p class="subtitle">3</p>
    <p>blah blah blah</p>
    etc...
</div>

<div id="february">
    <h2>February</h2>
    <p class="subtitle">1</p>
    <p>blah</p>

    <p class="subtitle">2</p>
    <p>blah blah</p>

    <p class="subtitle">3</p>
    <p>blah blah blah</p>
    etc...
</div>

```

I want to parse this info into a dictionary that will look like that:

```
[{'month': 'January', 'day': '1'},
 {'month': 'January', 'day': '2'},
 {'month': 'January', 'day': '3'}]
```

The code below was my first attempt to get this:

```python
from bs4 import BeautifulSoup

data = []
day_dict = {}
months = ['january', 'february','march',...]

# go through each month in the month list
for month in months:
    month_block = soup.find(id=month)
    month_name = month_block.find('h2').string

    days = []
    # going through each day in a month
    for i in month_block.find_all(class_="subtitle"):

        day = i.string.strip()

        # adding info about current day to a dictionary
        day_dict['month'] = month_name
        day_dict['day'] = day

        # adding the dicitonary to a list
        data.append(day_dict)
```

This resulted in the `data` list to look like that:
```
[{'month': 'December', 'day': '31'},
 {'month': 'December', 'day': '31'},
 {'month': 'December', 'day': '31'}]
```

It was essentially saving the last dictionary over end over.


## Solution

This is going to be pretty straightforward, actually.

You will need to save a "copy" of the current dictionary, rather than a reference to an original dictionary. The way to do that is to use `.copy()` method.

```python
    data.append(day_dict) # Replace this line with the next one
    data.append(day_dict.copy())
```