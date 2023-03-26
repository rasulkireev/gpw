---
title: Using Virtual Environment with Jupyter Notebook
dateCreated: 2019-08-26
dateUpdated: 2019-08-26
published: true
slug: jupyter-venv
icon: ./icons/jupyter.jpg
unsplashImageID: fDV3geJ2HwM
aiImage:
aiPrompt:
keywords: [virtualenvironment, jupyter]
category: Python
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: If you are using a virtual environment, you might have ome issues with Jupyter Notebook. In this post we go through proper Jupyter Setup with venv.
---

I decided to try replacing the [Anaconda distribution](https://www.anaconda.com/distribution/) with a custom virtual environemnt, just for the purposes of learning, keeping the environemnts more lightweight and removing the unnecessary libraries.

## That is how I started:

```python
# Create a directory where Virtual Environments will reside
mkdir venvs
cd venvs

# Create a virtual environent
# DS stands for Data Science
python3 -m venv DS

# Activate in Mac (& Linux)
source DS/bin/activate

# Activate in Windows
.\DS\Scripts\actvate.bat
```

Now our virtual environment is active and we can install any libraries that we want to. One of the libraries is [**jupyterlab**](https://jupyterlab.readthedocs.io/en/stable/). Actually, I always install it outside any virtaul environment (globally).

For the display purposes let's install a couple of libraries
```python
pip install jupyterlab numpy pandas scikit-learn plotly
```

After the installation is complete lets fire up the jupyterlab from the desktop directory
```
# To go back to the home direcotry
cd

#Now to the Desktop
cd Desktop

jupyter lab
```

Hopefully the Jupyterlab is launched and ready go. Let's create a new notebook by pressing `Python 3` button under `Notebook` section.

Once that is done, let's import a couple of packages in the first cell.
```python
import pandas as pd
import numpy as np
```
 ![Import Error. Oops!](https://i.imgur.com/a0PBMyp.png)

Alright, jupyterlab is not seeing the pandas library, probably because it is not working with the environment. Let's exit the JupyterLab in Terminal by pressing Cmd+C (Ctrl+C).

Now we need to install a package that will help us deal with the error we got earlier.
```
pip install ipykernel

#replace project name with the name of your virtual environment
ipython kernel install --user --name=projectname
```

 ![Import is successful!](https://i.imgur.com/2tSJzjM.png)
Nice!

Now you can use Jupyter Lab with a specific environment of your choosing.

If you have any questions, do not hesitate to [email me](mailto:kireevr1996@gmail.com) about it.
