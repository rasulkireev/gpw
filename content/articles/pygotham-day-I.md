---
title: "PyGotham 2019: Day 1"
dateCreated: 2019-10-05
dateUpdated: 2019-10-05
published: true
slug: pygotham-day-one
icon: ./icons/pygotham.png
unsplashImageID: uf2nnANWa8Q
keywords: [conference, networking, pygotham, talks]
category: Conferences
type: article
description: First Day of my first conference. I tried to make good notes during the talks I attended.
---

This is a first conference I have ever attended. If I had to describe it in one word, it would be 'great'. Here is why:

* I've met a lot of people with similar interest personality types, which is hard to do in regular setting.
* I've made a number of "useful" contacts that might help me find a good job.
* I've seen a lot of interesting presentations that have sparked my interest in programming (in Python) even more.

During the event I took notes with [Joplin](https://joplinapp.org/) , which is a great open-source note-taking app. I strongly recommended to everyone. **Not a sponsor**.

The general structure of the notes you are about to read is the same:

# Name of the talk
## Author
* Notes are going to be bullet points.
`If i have any notes above the bullet point above, I will leave them in this grey {code} block`
* I will try to leave find as links as possible, so you don't have to google everything.


So, without further ado, here are the notes I've taken during the first day of the event.
***

# Python use spectrum
## Kojo Idrissa
* More speakers always needed.
`This makes me want to make a talk to present at one of the conferences, seems totally doable and great for portfolio.`
* Volunteers always needed
`Certainly feel I should have been volunteering at this event. Will try to consider volunteering much more often`
* [Defna.org](http://Defna.org) - Django organization

***
# Eita! Why internalization and localization matter
## Nicolle Cysneiros [@Labcodes](https://labcodes.com.br/) - (Web Design Agency whos tech stack is python, django and js)
### Differences in formats across countries
* Date Formats (mm/dd/yyy vs. dd/mm/yyyy, etc)
* Number Formats (123,123 vs 123.123)
* Currency, [Bidirectional Text](https://en.wikipedia.org/wiki/Bidirectional_Text)  & [Unicode Characters](https://www.rapidtables.com/code/text/unicode-characters.html) differ from country to country.
### Python library to deal with that
* GNU [`gettext`](https://www.gnu.org/software/gettext/)
  * This piece of software essentially is helping you to create a 'list' of text blocks that will need to be translated.
* [`locale`](https://docs.python.org/3.7/library/locale.html) module.
  * This module helps change the formats of the above mentioned differences.
* Apparently Django makes it super easy.

***
# Can you keep a secret?
## [Aaron Bassett](https://www.gitshowcase.com/aaronbassett) @[Nexmo](https://www.nexmo.com/)
* [Git-Secret](https://git-secret.io/)
  * Uses [pgp](https://en.wikipedia.org/wiki/Pretty_Good_Privacy)

***
# Absolutely Awesome Automated APIs
## [Timothy Allen](https://www.linkedin.com/in/flipperpa/) - @[WRDS](https://wrds-web.wharton.upenn.edu/wrds/index.cfm?) (uses Django)
### -@flipperpa -djangonaut -hockey_fan_flyers -guitarist -loves_icecream
* WRDS developed and open sourced [Automagic-Rest](https://pypi.org/project/automagic-rest/)
* [Drf renderer xlsx](https://github.com/wharton/drf-renderer-xlsx) - open source library to convert API endpoint to excel file

***
# Recreating "The Clock" with Machine Learning and Web Scraping
## [Kirk Kaiser](https://www.linkedin.com/in/k-p-kaiser-94500124/) @[datadog](https://www.datadoghq.com/product/)
* [Tate modern - the clock](https://www.tate.org.uk/whats-on/tate-modern/exhibition/christian-marclay-clock)
* To start, simplify: try kubernetes locally - Ubuntu + Nvidia, [ngc.nvidia.com](https://ngc.nvidia.com)
* [Dab & t-pose controlling light](https://github.com/burningion/dab-and-tpose-controlled-lights)
* [Jetson nano gpu accelerated machine 99$](https://amzn.to/2oyUSsS)
* Datadog is hiring

***
# To comment or not? A data-driven look at attitudes toward code comments
## [Veronica Hanus](https://www.linkedin.com/in/veronicahanus/)
* Funny, good presenter
* The general consensus is that comments are good and you should leave them

***
# Learning with Limited Labeled Data
## Shioulin Sam @cloudera
* Very clear and great presenter
* **Active learning** has been here for a while, but only now got integrated with ...
* Random sample data points to label (good, but not optimal)
* [Margin Sampling](https://link.springer.com/chapter/10.1007/978-3-662-45646-0_13)
* [activelearner.fastforwardlabs.com](https://activelearner.fastforwardlabs.com)
* [Twiml and Ai podcast](https://twimlai.com/)

***
# Introduction to Generative Adversarial Networks (GANs): hands-on to making new data (and some pretty pictures)
## [Nabeel Seedat](http://nabeelseedat.com/)
* [Dirpfakes](https://twitter.com/realderpfakes?lang=en)
* [Deep Convolutional GAN](https://medium.com/@jonathan_hui/gan-dcgan-deep-convolutional-generative-adversarial-networks-df855c438f)
* [Fashion Mnist](https://github.com/zalandoresearch/fashion-mnist)
* [Gan Zoo](https://github.com/hindupuravinash/the-gan-zoo)

***
# What physics can teach us about learning
## [Marianne Hoogeveen](https://www.linkedin.com/in/marianne-hoogeveen/)
* Neutral network can approximate any smooth function - [Universal approximation function](https://en.wikipedia.org/wiki/Universal_approximation_theorem)
* Scales matter when it comes to identifying patterns (neural networks) - [renormalization group](https://en.wikipedia.org/wiki/Renormalization_group) i.e. compression

***
# Django + ElasticSearch without invalidation logic
## [Flávio Juvenal](https://twitter.com/flaviojuvenal?lang=en) @[vinta](https://www.vinta.com.br/)
* Most popular search engine
* Why use search engine
  * Tokenization
  * Fuzzy similarity
  * Cleaning
* Elastic search built ins
* Less than million rows of Data can be searched with postgres built-in capabilities (check Django postgres search ) if more than 1m than implement elastic search
* [Haystack library](Haystack library) for search in Django
* [Zombodb](https://github.com/zombodb/zombodb) works with postgres (via access method API) (Django-zombodb)
  * will Soon work with postgres 11

***
# Static Typing in Python
## [Dustin Ingram](https://dustingram.com/) @Google @di_codes
* type errors happen
  * When Python expects a list received a string and converts that to a list , ugly list
* Python originally is dynamically typed, but can also be static. Which is a great strength
* Pep 3107 fucntions
  * Def Foo() <- max(2,9)
  * Foo.__annotations
* [Mypy](http://www.mypy-lang.org/) from PhD introduced on pycon us 2013
  * Experimental variant of Python that is statically typed
  * After talking to Guido decided to implement to pure Python
* pep 483 theory of type hints
  * Optional typing (+gradual typing)
  * Variable annotation
* Check data science from scratch again, it has some static type instructions
* Pep 484 type hints
* `Pip install mypy`
* When not to use : never
* When to use : as much as possible (Start early)
  * When code is confusing
  * When for public consumption
  * Before big migrations and refactoring
* Start early
* Note : not a replacement for unit test

***
# Convincing an entire engineering org to use (and like) mypy
## [Annie Cook](https://www.linkedin.com/in/annielcook/) @[nylas](https://www.nylas.com/) - hiring
* [Mypy](http://www.mypy-lang.org/) is a static typechecker , type of documention (self documenting )
```python
#pep 484type hints
Def Foo(type: str)  -> str
  Return
```
* With mypy linters work better
* Captures a large category of errors
* Union is a multiple type
* _learn x in y minutes_ . Saw some guy in the talk use this website, seemed interesting


***
# ministry of silly talks

## [in-toto](https://www.In-toto.io) - securing the whole software supply chain
### nyu , njit, Santiago Torres Aria's, Hammad Afzali, etc.
* Not rely clear, probably hard to implement
* Sounds scary where people can attack software, need to check if that actually happens


## Test your failures with xfail
### [Paul Ganssle](https://ganssle.io/)
* Decorate a test that you expect to fail with
`@pytest.mark.xtest`

## Experimental features in [Scikit-Learn](https://scikit-learn.org/)
### [Thomas J Fan](https://www.linkedin.com/in/thomasjpfan/) - scikit learn core devoler
* Deprecations?
* Use columntrasformer to transformer some of the dataframe

## Why your tech company from recruit from philosophy department
### [Katherine Hartling](http://www.katbelle.com/) - @KatOnceSaid
* [Jackpocket.com](https://jackpocket.com/)
* [Plato's concept of classes](https://oregonstate.edu/instruct/phl201/modules/Philosophers/Plato/plato_on_women_in_the_ideal_state_part_I_the_context.html)

## Greed an homage
### Julian, @[julian](https://github.com/Julian) - GitHub, @[julianwastaken](https://twitter.com/julianwastaken?lang=en) on Twitter
* Algortim of change in supermarket, greedy algorithm
* when does it work
  * When you can take Independent choices within each step
  * [Matroids](https://en.wikipedia.org/wiki/Matroid)

## Change just one thing
### Timothy Allen , same guy as WRDS talk in API
* Dealed with alcohol addiction problem!
* Ask help, people are willing to help, especially the Python and Django communities


## Structured logging in Python
### [Jonathan Meier](https://jonathanmeier.io/) software engineer @[openslate](https://www.openslate.com/)
* Structured logging is writing consistent logs that are easy for computers to read (JSON)
* [Python-json-logger](https://github.com/madzak/python-json-logger) or structlog

## Restructuring Data in Python
### Mahmoud Hashemi @ sedimental.org
* Flat is good vs namespaces are good. Tim Peters - Pep20
* Nested data is bad. Tim Peters
* [Glom library](https://glom.readthedocs.io/en/latest/) - Python data nester
* Good presenter.

## Ministry of silly runtime: Vintage Python on cloud run
### Dustin Ingram @Google @di_codes
* Run stateless http container
* Docker images as a service
* Installed old Python (1.0.1) on  cloud run
* Good presenter
