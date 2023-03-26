---
title: Multiple Graphql Queries on a Single Page with Gridsome
dateCreated: 2020-07-23
dateUpdated: 2020-07-23
published: true
slug: multiple-gridsome-queries
icon: ./icons/unknown_status.png
unsplashImageID: xVQ7j3G7FSU
aiImage:
aiPrompt:
keywords: [gridsome, graphql, html]
category: Gridsome
type: Tutorial
twitterLink: "https://twitter.com/rasulkireev/status/1286433227960463360"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: Ever wonder how include multiple queries on the same page, when using Gridsome? Well, this is how.
---

Let's say you have the following queries:

```javascript
// query details about the current blog post
query Post ($path: String!) {
  post: post (path: $path) {
    title
    dateCreated (format: "MMMM D, Y")
    dateCreated (format: "MMMM D, Y")
    content
    path
  }
```
and

```javascript
// query to pull all the webmentions on a specific post
query($path: String!) {
    mentions: allWebMention(filter: { wmTarget: { regex: $path } }) {
      edges {
        node {
          wmId
          wmProperty
          content {
            text
          }
          author {
            name
          }
        }
      }
    }
  }
```

The question is: How do you get both of those queries in your `Post.vue` template?

I was going to give you all the options that I tried before making this work, but that would be the waste of your time. So here is he working version:

```javascript
<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    dateCreated (format: "MMMM D, Y")
    dateCreated (format: "MMMM D, Y")
    content
    path
  }
  mentions: allWebMention (filter: { wmTarget: { regex: $path } }) {
    totalCount
    edges {
      node {
        wmId
        wmProperty
        content {
          text
        }
        author {
          name
        }
      }
    }
  }
}
</page-query>
```

Then you can access these queries like this:

```html
<div>{{ $page.post.title }}</div>

<div
v-for="mention in $page.mentions.edges"
:key="mention.node.wmId"
>
	<p>{{ mention.node.wmProperty }}</p>
	<p>{{ mention.node.content.text }}</p>
</div>
```