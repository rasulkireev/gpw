---
title: "Joplin: open-source note-taking at its best"
dateCreated: 2020-02-05
dateUpdated: 2020-02-05
published: true
slug: joplin
icon: ./icons/joplin.jpg
unsplashImageID: gVtJgTyi2iI
aiImage:
aiPrompt:
keywords: [joplin, notetaking, opensource, productivity]
category: Productivity
type: article
twitterLink: "https://twitter.com/rasulkireev/status/1225152107487137792"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: I use Joplin to take note. I use it for my personal life and for my projects. This post explains why you should use it too.
---

Note taking apps are everywhere. Just to seem more credible I have to list a few:

* [Apple Notes](https://www.onenote.com)
* [Notion](https://notion.so)
* [Things](https://culturedcode.com/things/)
* [Todoist](https://todoist.com/)
* [Evernote](https://evernote.com)
* [OneNote](https://www.onenote.com)
* [Trello](https://trello.com)

By no means this is a comprehensive list, there are a ton of other similar apps, each offering some little difference from one another.

My argument is that you, as a user, don't need, or shouldn't care about those small differences. There is a list of core requirements for a note-taking application that will be good enough for the majority of people.

Some people will argue with that statement, and that's fine. As long as some people agree with me on this, I consider the point valid.

These are the features are think would count to a core requirement of a note-taking app:

* Available offline
* Sync across all major devices (macOS, Linux, Windows, Android, iOS)
* Has the basic structuring functionality:
  * Folders
  * Subfolders
  * Tagging
* Can import/export notes (folders)
* Web clipper
* Free (or at least not expensive)

That's about it. Not too much to ask. Usually, you would expect that one would begin listing all the negatives of most projects and why they don't fit the criteria. I don't want to do that, or at least I don't want to start with that. Instead, I want to focus on why I think Joplin is the tool that you should use, or at least give a try.

## Structure

Joplin has its basics in a solid-state. You are free to create a structure that suits you best. This is mine:

![4965ab17cbd441739616b97391b0fe04.png](https://dj-pw-static.s3.amazonaws.com/media/images/uploads/2020/02/05/ed13ecad2f-4965ab17cbd441739616b97391b0fe04.png)

* Create **folders, sub-folders, sub-sub-folder**, and so on.
* If you are a fan of **tagging**, that is pretty simple to do in Joplin.

> Personally, I don't do tags. I just don't understand them.

* There is a **Web clipper** plugin for most browsers.
* If you are migrating from/to Joplin, it has robust features for that. You can quickly **export** your notes, folder, subfolders, or the whole account to Markdown, JSON, CSV, and other formats. You can similarly **import** those formats into Joplin.

## Open Source

One of the most significant advantages, in my opinion, is that this piece of software is [open source](https://github.com/laurent22/joplin). This means:

* It is **free**
* It **belongs to the public**, no one is sharing your data
* If it is popular, then you get a lot of different people working on it, continually improving the product. (It currently has 12.4k stars on Github)
* If you know how to code you can easily add functionality that you need
* If you run into a bug or some sort of error, there will be someone who can help you. There are a [ton of forums](https://discourse.joplinapp.org/)and issue trackers.

One of the recent news from the Joplin core team was that they will participate in [Google's Summer of Code 2020](https://joplinapp.org/gsoc2020/). To me, this indicates further improvement. This means long term sustainability.

## Data Ownership

The way Joplin works is simple. You install an app and start taking notes. Notes are saved in your computer. No servers. If you need to access through a different device, you simply connect to Dropbox. You own the data!

Actually, there are a lot of sync options, besides Dropbox. Additionally, adding more options is in the roadmap.

If you don't need to sync between devices, you can simply host it on your computer. All the contents are stored in a folder. It is extremely easy to setup.

## Multi-device

We already covered the fact that you can sync via Dropbox and other similar solutions. The cool thing is that there is a functioning app for every major platform.

The only platform that Joplin is not on is the Web.

## Custom, yet simple

Each entry can be a "Note" or a "Todo." These are very similar, but the Todo allows you to check the entry off to be hidden but saved.

You can easily convert between the two modes without fear of losing data or breaking anything.

## CLI

If you are a fan of doing everything in your command line, Joplin has integration for that too. I realize that this is not for the general public. However, if you are an enthusiast and love using computers through a Terminal, then this could undoubtedly be a feature you enjoy.

## Use cases

### Writing

I personally find Joplin perfect for writing blog posts. Recently, I have been exploring various tools to build up a writing habit.

I tried services that let you write, draft, and post in the same interface as [Ghost](https://ghost.org/). I tried online tools like [Notion](https://notion.so), [Coda](https://coda.io/welcome), and [DraftIn](https://draftin.com/). But currently, I've stopped my searches. I'm using Joplin full time. I like it for its simplicity and reliability.

I can simply weep out my phone whenever I have a thought. It doesn't matter if I have internet access, it's just ways going to work.

I am actually writing this post in Joplin.

![0d0d25a6a4ae4868aebb2441ebb15473.png](https://dj-pw-static.s3.amazonaws.com/media/images/uploads/2020/02/05/5fc2a3b6d8-0d0d25a6a4ae4868aebb2441ebb15473.png)

### Project Management

If you work in a big team, tools like [Basecamp](https://basecamp.com/) and [Asana](https://asana.com) are probably the way to go. However, if you are a single maker, like me, Joplin is going to be perfect for you.

This is my current setup for projects:
![d51dae93b9a74727a314ab52434a723a.png](https://dj-pw-static.s3.amazonaws.com/media/images/uploads/2020/02/05/a91d8b1e5e-d51dae93b9a74727a314ab52434a723a.png)

As you can see, I have a separate folder for the project, which has a bunch of subfolders for each specific project. After a couple of iterations, I ended up with 3 more subfolders for each project (it might change a little in the future).

One folder is to note all the ideas I might have for a given project. The other two folders are for short-term and long-term tasks. Essentially this is a simple separation between tasks that will take a while and tasks that are quick to complete.

I find that there is no need for a kanban style of management. This is super simple yet effective.

You might prefer to work with a tool like Trello, and that would be perfectly fine. In my case, for the sake of keeping everything under one roof and for the purpose of simplicity, I keep everything in Joplin.


### To-do lists

You can have to-do lists that are set up in two ways.

1. Have a folder where you keep to-do style notes only. Like so:

    ![4c1c2027665a42c48e92d01dfaaf3fc3.png](https://dj-pw-static.s3.amazonaws.com/media/images/uploads/2020/02/05/741ec53ef2-4c1c2027665a42c48e92d01dfaaf3fc3.png)

    Check them off once you are done, and that's it, they will disappear (of you tell the program to do that).

2. Within a note use Markdown syntax for checkboxes, `"- [ ]"`.

![60b5d255afbc494a8b75773bee7f81a2.png](https://dj-pw-static.s3.amazonaws.com/media/images/uploads/2020/02/05/52f494d835-60b5d255afbc494a8b75773bee7f81a2.png)

> I don't use method two. I find it time-consuming.


## Conclusion

That's it. That is all there is to Joplin.

If you are still in search of an excellent and straightforward note-taking application, I encourage you to check out Joplin. If I have convinced you that will make me very happy. If you are a developer, I highly encourage you to join the ranks of people who help develop this tool. If you are not a developer, you can also help. Let people know (on the [forum](https://discourse.joplinapp.org/) or on [github issues](https://github.com/laurent22/joplin/issues))

There are a ton more features I have yet to explore. Whenever I find anything else useful, I will updateCreated this post and will send you an update if you are subscribed.
There are a ton more features I have yet to explore. Whenever I find anything else useful, I will updateCreated this post and will send you an update if you are subscribed.

Have a great day.
