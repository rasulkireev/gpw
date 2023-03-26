---
title: Creating a Maker Widget with TailwindCSS
dateCreated: 2019-12-17
dateUpdated: 2019-12-17
published: true
slug: tailwindcss-maker-widget
icon: ./icons/tailwindcss.jpg
unsplashImageID: U-Z4P2H3KFE
aiImage:
aiPrompt:
keywords: [builtwithdjango, tailwindcss, html, css, design]
category: Design
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: In this post we are making a simple Maker Widget with TailwindCSS.
---

I recently built a [Built with Django](https://builtwithdjango.com) website to highlight projects that were built with Django. [Made with Vue](https://madewithvuejs.com/) has been a great inspiration for me. One of the cool features on this website is the Maker widget. You can see that [Armin](https://twitter.com/arminulrich) and [Melanie](https://twitter.com/_feloidea) built this website.

![MakerWidget](https://i.imgur.com/MlifcG7.png)

You can also see all their social links.

![MakerWidget Extended](https://i.imgur.com/JtDzXQs.png)

This is actually another project [they made](https://makerwidget.com). They make it easy to create your own widget. Kudos.

Then I stumbled upon [Makerrank](https://makerrank.co/) built by [Pieter Levels](https://levels.io/), where he made a similar widget with plain HTML & CSS.

![Pieter Widget](https://i.imgur.com/xdHLq8U.png)

I decided to go for simplicity and used Pieter's "widget" as a template/inspiration and rebuilt it with TailwindCSS.

## Building the Widget

```html
<a class="fixed bottom-0 right-0 z-10 px-2 py-1 font-semibold text-gray-900 no-underline bg-yellow-300 border-t border-l border-white border-solid rounded-tl-lg" href="#">
    <img class="inline w-4 align-middle rounded" src="{ link to your image }" alt="">
    <p class="inline m-0 ml-1 font-bold align-middle">by Rasul</p>
</a>
```

![Widget by Rasul](https://i.imgur.com/yHqj19F.png)

You can use this on any website you have built. You can direct users to any link you would like. The cool think about this is that it can also be used as a Feedback button. This is useful because it is always there, users can always see it. Yet, it is not right in your face. You would simply need to change the link and the text. For the link, you can make a TypeForm to collect feedback.

## Final Notes

You could combine the two widgets on one page. It will look something like this.

![Double Widget by Rasul](https://i.imgur.com/tmo7Gbu.png)

You are a judge on this one. For me, this looks alright. Not great, just alright. Here is the code that will get you those:

```html
 <a class="fixed bottom-0 right-0 z-10 px-2 py-1 font-semibold text-gray-900 no-underline bg-yellow-300 border-t border-l border-white border-solid rounded-tl-lg" href="#">
        <img class="inline w-4 align-middle rounded" src="{ link to your image }" alt="">
        <p class="inline m-0 ml-1 font-bold align-middle">by Rasul</p>
      </a>

      <a class="fixed bottom-0 left-0 z-10 px-2 py-1 font-semibold text-gray-900 no-underline bg-yellow-300 border-t border-r border-white border-solid rounded-tr-lg" href="#">
        <img class="inline w-4 align-middle rounded" src="{ link to your image }" alt="">
        <p class="inline m-0 ml-1 font-bold align-middle">Feedback</p>
      </a>
```

I hope that is useful.
