---
title: "Books with Jupyter - The Executable Book Project"
category: Writing
id: b201d1e188cd454788623b1944f5da02
parent_id: f6914a5e6a2144999678118f5bedbeae
created_at: 1597426342403
---

08/14/2020

https://jupyterbook.org/intro.html

Jupyter Book is an open source project for building beautiful, publication-quality books and documents from computational material.

Here are some of the features of Jupyter Book:

Write publication-quality content in markdown
You can write in either Jupyter markdown, or an extended flavor of markdown with publishing features. This includes support for rich syntax such as citations and cross-references, math and equations, and figures.

Write content in Jupyter Notebooks
This allows you to include your code and outputs in your book. You can also write notebooks entirely in markdown to execute when you build your book.

Execute and cache your book’s content
For .ipynb and markdown notebooks, execute code and insert the latest outputs into your book. In addition, cache and re-use outputs to be used later.

Insert notebook outputs into your content
Generate outputs as you build your documentation, and insert them in-line with your content across pages.

Add interactivity to your book
You can toggle cell visibility, include interactive outputs from Jupyter, and connect with online services like Binder.

Generate a variety of outputs
This includes single- and multi-page websites, as well as PDF outputs.

Build books with a simple command-line interface
You can quickly generate your books with one command, like so: jupyter-book build mybook/

This website is built with Jupyter Book! You can browse its contents to the left to see what is possible.

---


The Executable Book Project¶

This is the public-facing site for ExecutableBookProject, an international collaboration to build open source tools that facilitate publishing computational narratives using the Jupyter ecosystem

The EBP’s technical goals¶

The goal of the EBP is to build tools that facilitate creating professional computational narratives (books, lecture series, articles, etc.) using open source tools. We want users in the scientific, academic, and data science communities to be able to do the following:

    Write their content in either markdown text files, or Jupyter Notebooks. These files include rich content - outputs from running code, references and cross-references, equations, etc.

    Execute content and cache the results. Intelligent caching means that only modified code cells are re-run.

    Combine cached outputs with content files with a document model. Using the excellent Sphinx documentation stack, documents can include many features for publishing, such as equations, cross-references, and citations.

    Build interactive HTML or publication-quality PDF outputs. Sometimes users wish to create rich and interactive websites, other times they want to send a high-quality PDF to a publisher. This system will treat both as equal citizens.

    Control everything above with a simple command-line interface. Most users should not have to know anything about Sphinx, caching, etc. A simple user interface will hide most of the complexity of this process.

    