---
title: "Markdown metadata format"
category: Markdown
id: ec313b313484422698ea5a79aee0dd93
parent_id: d72df40868934c5096cac36244a8928c
created_at: 1583182118331
---

[**MultiMarkdown Metadata**](https://stackoverflow.com/questions/44215896/markdown-metadata-format)

The older and simpler [MultiMarkdown Metadata](http://fletcher.github.io/MultiMarkdown-5/metadata.html) is actually incorporated into a few Markdown parsers. While it has more recently been updated to optionally support YAML deliminators, traditionally, the metadata ends and the Markdown document begins upon the first blank line (if the first line was blank, then no metadata). And while the syntax looks very similar to YAML, only key-value pairs are supported with no implied types. Here is an example from the MultiMarkdown docs:

    Title:    A Sample MultiMarkdown Document  
    Author:   Fletcher T. Penney  
    Date:     February 9, 2011  
    Comment:  This is a comment intended to demonstrate  
              metadata that spans multiple lines, yet  
              is treated as a single value.  
    CSS:      http://example.com/standard.css

The MultiMarkdown parser includes a bunch of additional options which are unique to that parser, but the key-value metadata is used across multiple parsers. Unfortunately, I have never seen any two which behaved exactly the same. Without the Markdown rules defining such a format everyone has done their own slightly different interpretation resulting in a lot of variety.

The one thing that is more common is the support for YAML deliminators and basic key-value definitions.

---



Most Markdown renderers seem to support this YAML format for metadata at the top of the file:

```
---
layout: post
published-on: 1 January 2000
title: Blogging Like a Boss
---

Content goes here.
```

    