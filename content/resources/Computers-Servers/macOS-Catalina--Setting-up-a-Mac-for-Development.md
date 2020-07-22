---
title: "macOS Catalina: Setting up a Mac for Development"
category: Computers-Servers
id: dc6d2ef3295541f696bc9f57f48e9b0a
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1594059569193
---

[macOS Catalina: Setting up a Mac for Development](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/)

06/07/2020

Most of the points are well made by Tania. In this note I want make certain additions that work for me personally.

---

## In Install Apps and extensions via brew 

`brew install pre-commit`
`brew update && brew install azure-cli`
`brew tap heroku/brew && brew install heroku`

`brew cask install joplin`
`brew install stripe/stripe-cli/stripe`

---

## SSH

In .ssh/config:

```
Host myssh
  HostName example.com
  User user
  IdentityFile ~/.ssh/key.pem
```

## Python Setup

### Install pyenv

`brew install pyenv`

`echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc`

`pyenv install 3.7.7`
`pyenv globab 3.7.7`


### Install poetry

`curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python`

---

## Utilities

Appstorrent unless specified.

Alfred4
CleanMyMac
Toggl
[CommandE](https://getcommande.com/)
ScreenFlow
Bartender
GhostNote
BusyCal
Dash (+alfredapp)

---

## VS Code Setup

(8f628b9d3860454b880e349a86af9834)

---

## Spark

`brew cask install java`
`brew install scala`
`brew install apache-spark`






                