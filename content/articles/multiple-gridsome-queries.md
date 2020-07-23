---
title: Multiple Graphql Queries on a Single Page with Gridsome
date: 2020-07-23
published: true
slug: multiple-gridsome-queries
icon: ./icons/unknown_status.png
unsplashImageID: xVQ7j3G7FSU
keywords: [gridsome, graphql, html]
category: Gridsome
description: Ever wonder how include multiple queries on the same page, when using Gridsome? Well, this is how.
---

Let's say you have the following queries:

```
// query details about the current blog post 
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    path
  }
```
and

```
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

```graphql
<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
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
v-for="mention in wmArray.edges"
:key="mention.node.wmId"
>
	<p>{{ mention.node.wmProperty }}</p>
	<p>{{ mention.node.content.text }}</p>
</div>
```
