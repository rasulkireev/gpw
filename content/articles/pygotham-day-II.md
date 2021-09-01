---
title: "PyGotham 2019: Day 2"
dateCreated: 2019-10-15
dateUpdated: 2019-10-15
published: true
slug: pygotham-day-two
icon: ./icons/pygotham.png
unsplashImageID: uf2nnANWa8Q
keywords: [conference, networking, pygotham, talks]
category: Conferences
type: article
description: Second Day of my first conference ever. I tried to make good notes during the talks I attended.
---

Day 2 of the PyGotham conference was on Saturday. I expected there to be way more people, but surprisingly, the opposite has happened. Day 2 count was twice as small, or at least that is how it felt. Below are the note from Day 2.

You can see Day 1 notes [here](pygotham-2019-day-1)

_Please note: I took some pictures, but am not able to upload that as of this second. As soon as I can, I will updateCreated the post._
_Please note: I took some pictures, but am not able to upload that as of this second. As soon as I can, I will updateCreated the post._

***
# 1000x faster data manipulation: vectorizing with Pandas and Numpy
## Nathan Cheever @AdvancedMD Ds
* For loop vs vectorization
* Vectorization working with array or series without for loops, rather all at once.
  * You are probably already doing that to some degree
* To perform conditional vectorization do: **numpy.where()**
* Numpy.vectorize()
* Numpy.select() for multiple ifs / elifs
* Pd.shift() to create anoer plumn with values shofted
* talked about Dask
* Kubernetes shirt

***
# Using Dash to Create Interactive Web Apps for Non Technical Audience
## [Joseph Willi](https://www.linkedin.com/in/joseph-willi-38b7883b/), @[underwriters labarotory](https://www.ul.com/)
### AZV Dashboard (Arizona Vortex)
* Great company, mission oriented
* Their job is to fire staff and gather data
* Somehow connected physical devices such that the plotly days gathers data from the device and inputs it to the dashboard

***
# Distributed Machine Learning with Python
## [Brad Miro](http://https://www.linkedin.com/in/brad-miro/) @google
* Latest ml updateCreateds,: Gpu, Tensorflow unit
* Latest ml updateCreateds,: Gpu, Tensorflow unit
* Kubeflow, marries Tensorflow and Kubernetes

***
# Pull Requests: Merging good practices into your project
## [Luca Bezerra](mailto:lucabezerra@gmail.com) - vinta
* Code review , even if unwanted adds greatly to the project
* Best practices:
  * Pull request template.md on github
  * Status checks prevent branches merging without checks
  * Contributing .md for collaboration
  * Enforce approval/merge rules : codeowners.nd
  * Using **gitflow** makes sure your branches are always up to dateCreated
  * Using **gitflow** makes sure your branches are always up to dateCreated
    * Branches are cheap and great flexibility
  * Keep pr size as small as possible
  * More clear commit messages (talk about what and how ),
  * Use linters when possible
* Tips & tools
  * Refined GitHub
  * Deploy Previews (Netlify)
* Check Vinta checklist

***
# Jane Doe will help you improve your project
## Rebecca Sarai - Vinta
* Netflix prizes - challenge
* Talk is about anonimization
* Psedonymization - is personal data , but you hide the data in a particular manner , includes
  * Tokenization, etc.
* Anonimization no data that considered personal and can be sued to identify a person
  * Static
  * Dynamic
  * Synthetic

***
# The Cat's Alive! Add Some Weirdness To Your Code With Quantum Computing
## Jorn Mossel, Marianne Hoogeveen
* Classical computer works with 0 and 1
* Qubit can be a bit of both (circular form)

***
# Oh, the Humanities! Interdisciplinary Thinking in Python
## [Lisa Tagliaferri](https://lisatagliaferri.org) - wrote tutorials for Digital Ocean
* Research on how women men are described in certain ages.
* Text from Gutenberg projects were analyzed
* Very interesting
* Text analysis might not be that scary after all. It never was , bit now it is certainly interesting enough to give it a try
* Gender novels project
* [Caterina.io](https://Caterina.io)
* [Hacktober fest](https://hacktoberfest.digitalocean.com/)

***
# Serverless Deep Learning with Python
## [Alizishaan Khatri](https://www.linkedin.com/in/alizishaan-khatri-32a20637/) @Kony Machine Learning Engineer
* Kony builds applications for banks
* Unfortunately I do not follow at all

***
# Airflow in Practice: How I Learned to Stop Worrying and Love DAGs
## [Sarah Schattschneider](https://www.linkedin.com/in/sarahschattschneider/) - software engineer @[blue apron](https://www.blueapron.com/) - hiring
* One of advantages is the more advanced alerting system
* Good cli and UI
* Open Sourced by Airbnb
