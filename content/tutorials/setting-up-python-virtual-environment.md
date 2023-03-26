---
title: Setting up Python virtual environment (for a Django Project)
dateCreated: 2019-08-29
dateUpdated: 2019-08-29
published: true
slug: django-venv
icon: ./icons/python.svg
unsplashImageID: TkEPQPWr2sY
aiImage:
aiPrompt:
keywords: [virtualenvironment, python, django, project, venv]
category: Python
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: How to set up a virtual environment for your Django Project, or any other Python project, for that matter.
---

For this tutorial I will assume you have a little experience working with the command line tools like "Terminal". If you don't I promise to make a post or two about that, meanwhile you can check those two out:

* [Mac](https://www.dummies.com/computers/macs/mac-operating-systems/how-to-use-basic-unix-commands-to-work-in-terminal-on-your-mac/)
* [Windows](https://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html)


## Setting up the environment

_The first steps is here for people who don't yet have a folder where they keep all their projects._

### 1. In the Terminal or Command Prompt (cmd) create a directory (folder) where you will keep your projects and websites.
```
mkdir sites
cd sites
```
`mkdir` will create a new directory and `cd` will move into into that directory. You can call your folder whatever you want.

### 2. Creating a project folder
Once in the `sites` directory you will need run `mkdir` again to make a folder specifically for your project
```
mkdir {projectname}
cd {projectname}
```

### 3. Setting up the environment
Before we initiate a django project we need to setup a python virtual environment. This will make sure that whatever machine we are working with (Mac vs. Windows, for example) the website will work by setting up the same packages and libraries.

_Generally, having a virtual environment for each one of your projects, whether Web Dev, Data Science or General Programming, is now a standard. For one, this allows other people to help you with you projects and generally makes eveything easier in the future._

For this step you need to have Python installed. I am not going to go over the installation process and will assume you have a working version of Python 3.6 or above. To create a virtual environment python has a built-in package `venv`.
```python
# If you have multiple python versions on you computer
python3 -m venv venv

# If you have python 3.6+ installed only
python -m venv venv
```
Here the first `venv` refers to the program we are running. The second `venv` is referring to the name I gave my virtual environment. So, instead of a second `venv` you can type in whatever you want. I find the word venv pretty easy to rememeber and to type up, so that's how I usually call my virtual environments.

Let the prgoram run. Congrats you now have created a virtual environment! You can check that everything worked by checking the contents of the folder. You can do that by navigating in `Finder` or `Windows Explorer` or even better just by typing `ls` to the command prompt, this will list out all the directories in your project folder.

All there is left to do is to activate the environment to start the working process.

On Mac to activate and deactivate the virtual environment you would use the following command:
```
# to activate
source venv/bin/activate

# to deactivate
deactivate
```

On Windows:
```
# to activate
.\venv\scripts\activate.bat

# to deactivate
deactivate
```

When your virtual environemnt is active you will see the name of the virtual environment within bracket to the left of the command line. Like so:
 ![](https://i.imgur.com/mN0w7WA.png)

### 4. Create a Django project
Finally, we can create the project. Once you make sure your venv is activated, all you have to do is:
```python
# to install django within your virtual environment
pip install django

# to actually create a project
django-admin startproject {name of your peroject} .
```
Note the **dot** in the end of the command. You actually need to add it too. This will make sure that the project is created within the directory you have already created.

One last step:
```python
python manage.py runserver
```
This will start server with your Django project, If you go to [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser, you will see a welcome to Django screen.


**Congrats!** You can now develop your site with Django freely, which is a whole another topic of discussion.

If you have any questions please let me know at one of the social links on the top left.
