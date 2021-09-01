---
title: Creating Ethereum Tokens with Python
dateCreated: 2021-09-01
dateUpdated: 2021-09-01
published: true
slug: creating-ehtereum-token-with-python
icon: ./icons/ethereum.png
unsplashImageID: uNXmhzcQjxg
keywords:
  - blockchain
  - ethereum
  - erc20
  - crypto
  - python
  - vyper
category: Ethereum
type: Tutorial
description: In this tutorial we will create an Ethereum token on the Polygon Network from scratch. To create our token we will use Python and Python like programming languages. By the end of this tutorial you will have a personal token on a real Polygon network and hopefully a better understanding of how everything works on the Ethereum network.
---

In this tutorial we will create an Ethereum token on the Polygon Network from scratch. To create our token we will use Python and Python like programming languages ([Brownie](https://eth-brownie.readthedocs.io/en/stable/toctree.html) and [Vyper](https://vyper.readthedocs.io/en/latest/), we will learn more about the later). By the end of this tutorial you will have a personal token on a real Polygon network and hopefully a better understanding of how everything works on the Ethereum network.

I have decided to call my token razzle-dazzle for unimportant reasons. Even though it doesn't matter too much, but I encourage you to come up with a fun, short name that will be somewhat personal to you. My code is going to be available at my [github repo](https://github.com/rasulkireev/razzle-dazzle). If you have questions feel free to create an issue in that repo.


## Prerequisites

In this tutorial we are going to use a lot of cool Python related libraies, so it would be great if you had some experience with Python. Even if you didn't you should be fine, but if you run into any issue, it will be harder for you to debug. Furthermore, if you didn't have any Python experience, it would make more sense for you to learn Ethereum related development with Javascript, as it is more popular, offers more tutorials and support. This tutorial is done for people who love developing with Python and would love to learn more about the crypto development space with the language that they already know and love.

> Python is in my ♥️

Now that we have the basic knowledge out of the way let's talk about technical things. I will be developing on a MacOS with the following technologies:
### Poetry
[Poetry](https://python-poetry.org/docs/) is the new, hot tool that helps with dependency management and deployment. It is awesome. If you haven't worked with it before, than you are in for a treat. You can install poetry by running this script in your terminal `curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -`

### Pyenv
[Pyenv](https://github.com/pyenv/pyenv). Pyenv helps us to manage multiple versions on Python on our machine. It is a great tool that will make you life easier as you develop different Python projects. I recommend installing pyenv via Homebrew. If you have Homebrew installed just run `brew install pyenv` in your terminal.
> If you don't have Homebrew, use [this tutorial](https://setapp.com/how-to/install-homebrew-on-mac) to get it working.

### Pipx
[Pipx](https://pypa.github.io/pipx/). Pipx is a tool that allows us to install python libraries on your local machine without worrying about virtual environments and version mismatches. Pipx can also be installed with Homebrew. Just run `brew install pipx` in your terminal.

### Brownie
[Brownie](https://eth-brownie.readthedocs.io/en/stable/toctree.html). Brownie is a Python based framework that will make it a lot easier for us to develop and test smart contracts on the Ethereum network. Brownie will need to be installed via pipx. So, make sure you install that first. Once you are ready, run `pipx install eth-brownie` in your terminal.


Alright! If all went well, you can pat yourself on the back. Take a breath or two and start reading the next part of the tutorial. This is where all the meat is.

## Creating you Token

### 1. Creating Project Folder

The first thing that comes in handy is the brownie installation. Brownie, has a lot of cool templates that we can use to quickstart our development. To see the list of template (mixes), look in [their repo](https://github.com/brownie-mix/). We are going to use the [vyper-token-mix](https://github.com/brownie-mix/vyper-token-mix), since we are going to "write" out smart contracts in Vyper (a Python like language to write smart contracts. Solidity competitor).

So, to use the template we are first going to the folder where you host all your code. I like to keep my project under `code` folder. This makes it very neat. If you have a folder of your preference, "go there" in you terminal via `cd {folder of your choice}`. If you don't have a centralized location for all you code, do this:

1. Run `mkdir ~/code` in your terminal. This will create a `code` folder insude your home directory.
2. cd into that new folder via `cd ~/code` command in your terminal

Now in that folder run the following command `brownie bake vyper-token`. This will scaffold a project folder for you that will work in. The created folder will be called `vyper-token`. Feel free to change the name of this folder to the name you have decided to give your project. Mine is called `razzle-dazzle`.

**From now on I'm going to refer to this folder as `razzle-dazzle`. So, whenever you see this name, replace it with your own.**

#### Getting familiar

If you looks under the contracts folder there is a file called `Token.vy`. This is the general ERC-20 type smart contract that will layout the basic token requirements. You don't have to do anything more. The core functionality is already there. In fact, we are not going to do any other Vyper related work in this tutorial. Just more brownie and python.


### 2. Setting up Dependencies and Versions

#### Poetry

This is the part where we start using Poetry. First open up your project folder in VS Code or other code editor of your choice (ideally, it should have a terminal built-in). From the terminal of your code editor run `poetry init` to start the poetry project. In reality, running this function will just help you with creating the `pyproject.toml` file where we will keep note of the dependencies we are using.

Once you run `poetry init` you will be asked for some inputs, like the project name, project description, etc. Feel free to use the defaults or to change them up. **The only thing that I want you to be careful with is the python version we are going to use. The default is likely to be `^3.7`, but I want you to change it to `^3.8` and press enter.** If for some reason yo ucan accidentaly, pressed enter at the Python version stage, don't worry you can change it later, directly in the `pyproject.toml` file.

When you are asked if you want to set dependencies programatically, enter `no`. Finally the script will ask you to confirm the creation of the toml file, to which you should respond `yes`!

> This is where you would manually change `^3.7` to `^3.8` on the python version line.

#### Pyenv

Another really important part is the actual python version we are going to use in our project. What we did a second ago in the pyproject.toml file is that we said what is the minimum python version we are willing to work with, but now we actually need to set the python version we are going to use. Pyenv will help us with that.

So from the inside of you project directory, run the folowing command in your terminal `pyenv install 3.9.6`. This will install python 3.9.6 version on your machine. Once it finishes installing (it might take a minute or two, be patient :) ), run `pyenv local 3.9.6`. This will set the python version inside you project directory. Test this, by running `python -V`, you should be able to see the `3.9.6` response.

If this step was successfull, let's move to the next one.

#### Dependencies

**Pytest**. The one annoying thing with brownie is that it is very pick with package versions. For instance, by default poetry adds a pytest version that is incompatible with brownie. In order to fix that we are going to run `poetry add -D pytest@latest` in your terminal. This will install the latest pytest version. Once this command finishes running you should be able to see the change that happened in your `pyproject.toml` file.

**Brownie**. Next, let's add brownie as a dependency in our project. You can do this by running `poetry add eth-brownie` in your terminal. This should run nicely.

**Vyper**. Next, let's add vyper as a dependency. As you can guess, you can do that with a `poetry add vyper` command. Here, there might be a cathc with versions. If not you are lucky, otherwise here is what it might look like. By far the most common issue you can get at this point is that if poetry throws an error that will sound something like this:

> `eth-brownie` depends on `vyper {version something, something}`

If you see this than all you need to do is to run `poetry add vyper@^{required version}` instead of just vyper. That tells poetry to add a specific version of vyper to your project that `eth-brownie` package likes.

#### Testing the environment

Now that we did all the groundwork, let's test if all the installations are working nicely with each other. Try running `poetry run brownie console` in your terminal. If the console doesn't throw any error at you and you can actually see something that looks like a Python interpreter, than good job, we can move to next steps! If you are running into some issue make sure to DM me on [Twitter](https://twitter.com/rasulkireev), I'll help you debug your issues.

> The reason we are running commands with `poetry run` before them is that this way we are telling our console to run using poetry. This way poetry will create a virtual environment for us and we don't have to think about these things anymore.

Try playing around with the console. Type `accounts` and press `Enter`. This should display the 10 wallet addresses that brownie created for us in the test network. To see other things you can do in brownie console, check out [their docs](https://eth-brownie.readthedocs.io/en/stable/toctree.html) (they are excellent).

### Connecting to real Ethereum Networks

In order to create a token on one of the Ethereum networks we will have to connect to those networks. The


### Other things

1.  open up the brownie console
	1. Open up ganache ui ([download link](https://www.trufflesuite.com/ganache))
	2. see what port is the server on.
	3. in `brownie-config.yaml` modify the following block:
		```yaml
		networks:
			default: development
			development:
				...
				cmd_settings: null
		```
				to this
		```yaml
		networks:
			default: development
			development:
				...
				cmd_settings:
				  port: 7545
		```


2. created a project on infura.io, created a new wallet on metamask
3. created a .env file in the root of the project and added it to .gitignore
4. added the infura.io project id and metamask wallet private key as env variables in .env file
5. added python-dotenv dependency to make it easy to work with env variables
	> Note: if you ever run into an issue with dependency versioning like below try installing the exact version that is "requested". This is because `eth-brownie` is somewhat strict on versions it uses for some packages.![[poetry versioning error 202108301718.png]]

5. added `wallets` key to the brownie-config file to be able to access private_key in the console. Add via ${PRIVATE_KEY} syntax.
	> ! Warning it will be seen in console when compiled
6. Add the account [locally](https://eth-brownie.readthedocs.io/en/stable/account-management.html#local-accounts) like this `poetry run brownie accounts new {account name you want}`. Replace `{account name you want}` with an account name you want. You will be asked for a PRIVATE_KEY and PASSWORD. For the PRIVATE_KEY use the the key that you saved in .env file. For password, come up with a password (preferrably with a password generator like BitWarden and save it).
7. added unlock key to brownie config to "unlock" the new account, in development:
```yaml
networks:
    default: development
    development:
        cmd_settings:
          port: 7545
          unlock: # new
            - 0x7E1E3334130355799F833ffec2D731BCa3E68aF6 # new
```

1. Now also, let's load the wallet we have created into the token creation script like so:
	```python
#!/usr/bin/python3
import os

from brownie import Token, accounts

def main():
    account = accounts.load('razzle-dazzle-wallet') #new
    return Token.deploy("Razzle Dazzle", "RD", 18, 1e20, {"from": account})
	```
> Note: 18 in the function above refers to the number of digits the token will have and the second number refers to the amount of token you want to be produced. In my case there should be 100 tokens created.
1. Let's test this on the Rankeby network. Run `poetry run brownie run token.py --network rinkeby` in your terminal. You will be asked for the wallet password that we created earlier.
2. Once the request completes, take the address from `Token deployed at:`line and copy it. Go to your Metamask wallet and click on Add Token. There enter token address and other info should auto populate. Click Add and Et Voila! You have created a token!
3. If you are happy with how this turned out you can try deploying your token on the Polygon Network, next.
4. To do that first run on the polygon test networks like so `poetry run brownie run token.py --network polygon-test`
	1. if you receving an error like this:
	> HTTPError: 403 Client Error: Forbidden for url: https://polygon-mumbai.infura.io/v3/0f07ea70a44c46a8b5b205226e91750f

	This could be one of two things.
			1. You have to enable the Polygon PoS Addon in your Infura account plan ([link](https://infura.io/payment))
			2. because infura server is experienceing latency issues. Give this another try a little later, or check their status page ([link](https://status.infura.io))

1. When you can finally run this you will probably get the error that you don't have enough gas. To resolve this go the [following lijnk](https://blog.pods.finance/guide-connecting-mumbai-testnet-to-your-metamask-87978071aca8) and stup the mumbai test polygon network and add some MATIC to the wallet and then repeat. You should be good to go.
2. Next is to try deploying to Polygon Network.
