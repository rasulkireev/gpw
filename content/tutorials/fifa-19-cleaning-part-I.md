---
title: Analyzing FIFA 19 data (I). Data Cleaning with Pandas and Numpy
dateCreated: 2019-08-19
dateUpdated: 2019-08-19
published: true
slug: fifa-data-cleaning
icon: ./icons/football.svg
unsplashImageID: eCktzGjC-iU
aiImage:
aiPrompt:
keywords: [jupyter, pandas, numpy]
category: Data Analysis
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: My first start-to-end Data Science project. I am going to be looking at FIFA 19 player database. In this part I talk about Data Cleaning.
---

You can find all the code to this project [here](https://github.com/rasulkireev/fifa19-data-analysis). You can review the code in this post in [1.0-preparing-data-for-ml.ipynb](https://github.com/rasulkireev/fifa19-data-analysis/blob/master/1.0-preparing-data-for-ml.ipynb).

Data comes from [Kaggle FIFA19 Dataset](https://www.kaggle.com/karangadiya/fifa19). Thanks to [Karan Gadiya](https://www.kaggle.com/karangadiya).

All the exploratory analysis is done with [Jupyter Notebook](https://jupyter.org/).

## Goal
My goal with this project is to learn/improve essential data science/analysis skills as well as gain a better understanding of FIFA rating and ranking rules. I am using this dataset as a proxy to the real world data to see if it would make sense to spend considerable amount of time and effort to acquire real world data.

The first thing we need to do with a big and messy table of players' data is to "clean" and make it usable for further analysis.


## Cleaning
Let's start with package import, basic settings and actual data import, that's pretty standard.
```python
import pandas as pd
import numpy as np

# Display all floats with 2 decimals
pd.options.display.float_format = '{:.2f}'.format

df = pd.read_csv('data.csv', index_col=0)
```
The reason I added `index_col=0` is because the dataset already had an index column, no need to create another one.

### Exploring
Run `df.sample(5)` to view 5 random rows from the dataset to get the feel for how it look and what might be wrong with it. Additionally, we want to run `df.info()` to see what types of data we are working with as well as counts, which are useful for spotting any columns with missing values.

#### Positions
I see that there are Postitions that are not necesssary for my application. For example, I don't need LS ('Left Striker'), since it is almost the same as ST ("Striker"). Grouping players in similar Positions will increase number of dat points, which hypothetically should make the results more [confident](https://towardsdatascience.com/a-very-friendly-introduction-to-confidence-intervals-9add126e714).
Run `df.Position.unique()`to see all positions.

```python
df['Position'] = df['Position'].map({'GK': 'GK', 'CAM': 'CAM','CB': 'CB', 'CDM': 'CDM',
                                      'CM': 'CM','LB': 'LB','LM': 'LM','LW': 'LW',
                                      'RB': 'RB','RM': 'RM','RW': 'RW','ST': 'ST',
                                      'CF': 'ST','LAM': 'CAM','LCB': 'CB','LCM': 'CM',
                                      'LDM': 'CDM','LF': 'LW','LS': 'ST', 'LWB': 'LB',
                                      'RAM': 'CAM', 'RCB': 'CB','RCM': 'CM', 'RDM': 'CDM',
                                      'RF': 'RW', 'RS': 'ST','RWB': 'RB'})

# Remove rows with Position = NaN
df.dropna(subset=['Position'], inplace=True)
```
Code above will map existing positions to the ones we want. (i.e. LF -> LW)
_Note: we also need to map "good" positions._

#### Value, Wage & Release Clause
```python
# Function that turn a string variable "€100M" to 100,000,000
def money_string_replace(variable_name):
    df[variable_name] = (df[variable_name].str[1:].replace(r'[KM]+$', '', regex=True).astype(float) *
                 df[variable_name].str.extract(r'[\d\.]+([KM]+)', expand=False)
                 .fillna(1)
                 .replace(['K','M'], [10**3, 10**6]).astype(int))

money_string_replace('Value')
money_string_replace('Wage')
money_string_replace('Release Clause')
```

#### Preferred Foot

```python
# Creating a dummy variable to identify if a player is left footed or not
df.loc[df['Preferred Foot'] == "Left", 'Preferred Foot = Left'] = 1
df.loc[df['Preferred Foot'] == "Right", 'Preferred Foot = Left'] = 0
```

#### Work Rates
Current work rates are in the format of "High/Low", where the first word refers to Attacking Work Rate and the second refers to Defensive Work Rate. I want to split the value into two values and create column for each attacking work rate and defensive work rate.

```python
# Splitting the work rate column into attacking and defensive rates.
df['Work Rates'] = df['Work Rate'].str.split('/')

# Allocating each list item into the according work type
df['Attacking Rate'] = df['Work Rates'].str.get(0)

# Removing any whitespace
df['Attacking Rate'] = df['Attacking Rate'].str.strip()

# Creating a numeric variable for each work type
df.loc[df['Attacking Rate'] == "Low", 'Attacking Rate'] = 1
df.loc[df['Attacking Rate'] == "Medium", 'Attacking Rate'] = 2
df.loc[df['Attacking Rate'] == "High", 'Attacking Rate'] = 3

df['Defensive Rate'] = df['Work Rates'].str.get(1)
df['Defensive Rate'] = df['Defensive Rate'].str.strip()
df.loc[df['Defensive Rate'] == "Low", 'Defensive Rate'] = 1
df.loc[df['Defensive Rate'] == "Medium", 'Defensive Rate'] = 2
df.loc[df['Defensive Rate'] == "High", 'Defensive Rate'] = 3
```

#### Height and Weight
Kilograms and Centimeteres are a little more intuitive for me and slightly easier to use, so I am going to convert values.

```python
# Converting pounds to kg
df["Weight"] = df["Weight"].str[:3].astype(float) /2.205

## Converting Feet and Inches string to a CM value
# Splitting Feet from Inches
df['HeightCM'] = df['Height'].str.split("'")

# Further split of feet and inches
df['feet'] = df['HeightCM'].str.get(0).astype(float)
df['inch'] = df['HeightCM'].str.get(1).astype(float)

# Replcaing Old string with new CM value
df['Height'] = (df['feet']*12+df['inch'])*2.54
```

#### Body Type
There are generally 3 body type: Lean, Normal and Stocky. There are exceptions, however. More specifically, several players have bosy type of their own, for example Messi, Cristiano Ronaldo and Akinfenwa. Those are outliers and I have decided to use my own judgement when assigning new values to them. Since ther was a row with Body Weight of an unknown type we will simply remove it from data, that shouldn't affect results.
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""

```python
df.loc[df['Body Type'] == "Lean", 'Body Type'] = 1
df.loc[df['Body Type'] == "Normal", 'Body Type'] = 2
df.loc[df['Body Type'] == "Stocky", 'Body Type'] = 3
df.loc[df['Body Type'] == "Messi", 'Body Type'] = 2
df.loc[df['Body Type'] == "C. Ronaldo", 'Body Type'] = 2
df.loc[df['Body Type'] == "Neymar", 'Body Type'] = 1
df.loc[df['Body Type'] == "Courtois", 'Body Type'] = 2
df.loc[df['Body Type'] == "Shaqiri", 'Body Type'] = 3
df.loc[df['Body Type'] == "Akinfenwa", 'Body Type'] = 3

df.loc[df['Body Type'] == "PLAYER_BODY_TYPE_25", 'Body Type'] = np.nan
df.dropna(subset=['Body Type'], inplace=True)
df['Body Type'].astype('int64')
```

#### Droping unnecessary columns

Now for the final step, let's remove the unnecessary columns, anything non-integer, except for the position column which we will certainly need.

```python
# Dropping unneccesary columns
df.drop(["Name","Nationality",'Club','Joined','Contract Valid Until','Release Clause',
        "Photo","Flag","Club Logo","Special","ID",'Preferred Foot','Real Face',
        'Jersey Number','Loaned From','LS','ST','RS','LW','LF','CF',
        'RF','RW','LAM','CAM','RAM','LM', 'LB','LCB','CB','RCB',
        'RB','LCM','CM','RCM','RM','LWB','LDM','CDM','RDM','RWB',
        'Work Rate','Work Rates', 'HeightCM', 'feet', 'inch'],
        axis=1, inplace=True)
```

## Export to CSV

Let's make varibale names lower case so it is a little easier to work with in the future.
```python
df.columns = map(str.lower, df.columns)
```

Finally, run the following code to export this dataset to csv. We are going to use it in the next part:
```python
df.to_csv('data/processed/reduced_clean_data.csv')`
```
