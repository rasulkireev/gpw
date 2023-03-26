---
title: First Javascript Experience
dateCreated: 2019-08-28
dateUpdated: 2019-08-28
published: true
slug: first-javascript-experience
icon: ./icons/js.png
unsplashImageID: O99bWwDMBa8
aiImage:
aiPrompt:
keywords: [webapp, javascript, html]
category: Javascript
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: Sharing my first epxerience with Javascript. Had to add some action to my new web app.
---

I have been reading a [JavaScript book](https://amzn.to/2KPIsoQ) for a couple of months now... I didn't learn much, unfortunately. I know this is becasue all reading need to be supplemented with some sorts of exercise, preferrably real world projects. Luckily, I have an idea for a project that will require some JavaSript.

So, instead of reading a book, I will start by formulating an idea and Googling it (or rather StackOverflowing it). In this post I will go over my first (baby) steps in JavaScript.

As far as I understand you can either write some JavaScrip (JS) directly in the html code, like so (the example is from [W3Schoools](https://www.w3schools.com/js/default.asp):
```
<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>
```
This will display the current time, after you click the button.

Another way is to create a separate javascript file and reference it in the html code, like so:
```
<script type="text/javascript" src="path-to-javascript-file.js"></script>
```
Usually, links scripts are referenced in the end of the `<head>` tag.

I am going to resort to the second option, since I feel like this is much cleaner and minimal.

So, what do I need? What is the first thing I am going to ateempt first?

## Creating a form/input field with a press of a button

After googling for a bit I found that the way to create new html using javascript is with the function `createElement`. So this is what I am going to write in my main.js:

```javascript
function inputJournal() {
  var z = document.createElement("FORM");
  z.setAttribute("id", "myForm");
  document.getElementById("new-journal").appendChild(z);

  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Hello World!");
  x.setAttribute("id", "new-journal-name");
  document.getElementById("myForm").appendChild(x);

  var y = document.createElement("A");
  y.setAttribute("id", "add-button");
  var t = document.createTextNode("Add");
  y.appendChild(t);
  document.getElementById("myForm").appendChild(y);
}
```
Let's go over what happened here:

* I called my function "inputJournal"
* created a variable z, which is a `<form>` with `id=myForm`
* attached the form tag to the existing div with `id=new-journal`
* Repeated the process for the `<input>` field and `<a>` field
* Attached those 2 to the previously created form using `document.getElementById("myForm").appendChild(y);`

In my html file in the `<head>` section I will add:
```
<script type="text/javascript" src="main.js"></script>
```
And will create a "button" with an `onClick tag to load the javascript function noce the button pressed:

```
<p onclick="inputJournal(); this.onclick=null;">Press Here!</p>

<div id="new-journal"></div>
```
I've also added `this.onclick=null` to make sure that the code is only run once, otherwise we will create a ton of forms by pressing the button multiple number of times.

Finally, the `div` block is there, because we told the javascript code to `getElementId("new-journal")` and everything that is vreated with our coe wil be contained within this `div`, so that we can style it with CSS.

I think this covers it all. Everything is working for me. If you followed along, I hope it is working for you too.

If you have any questions please let me know at any of the social lin ks on the top left.

Thanks for reading.
