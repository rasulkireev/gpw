---
title: Getting data to home page with Django
dateCreated: 2020-02-20
dateUpdated: 2020-02-20
published: true
slug: django-get-context-data
icon: ./icons/dj.png
unsplashImageID: Q1p7bh3SHj8
aiImage:
aiPrompt:
keywords: [django, context, tutorial]
category: Django
type: Tutorial
twitterLink: "https://twitter.com/rasulkireev/status/1230974745644060678"
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: In this post I show how to use get_context_data(). You might need it to display 'latest posts' on your 'home page'.
---

When I was first learning Django, I decided to build a personal website first. I took [sivers.org](https://sivers.org) as an example. I loved its simplicity and directness.

I first created a blog app within my project. Then created the URL structure. `/writings/` listed all my posts and `/writings/<slug>` was for a specific post. Everything was working correctly. The next challenge was to get the latest n posts to my home page. That took me at least a week to figure out. The worst thing was that the way I did it was way too complicated. I used custom template tags to achieve that.

I wanted to write a post about it back then. Thank God I didn't. Last week I figured out a much simpler way to do that. This is what this post is about.

## Setup

### Blog app

Let's say you have a simple project setup with two apps, `pages` for static pages, and a blog for all the posts that you write.

You blog app contains a simple post model, with the following variables:

```python
class Post(MentionableMixin, models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    dateCreated = models.DateTimeField()
    dateCreated = models.DateTimeField()
    category = models.CharField(max_length=100)

    # if you are not sure what the code below does, don't worry about it.
    def __str__(self):
        return "(Draft = " + str(self.draft) + ") " + self.category + ': ' + self.title

    def get_absolute_url(self) -> str:
        return reverse('post', kwargs={'slug': self.slug})
```

Next, you have two views, one for a list of posts and one for the post itself.

```python
class PostListView(ListView):
    model = Post
    template_name = 'writings/posts/all-posts.html'
    ordering = '-dateCreated'
    ordering = '-dateCreated'

class PostDetailView(DetailView):
    model = Post
    template_name = 'writings/posts/post.html'
```

You have those views attached to specific URLs like so:

```python
urlpatterns = [
    path('posts', PostListView.as_view(), name='all_posts'),
    path('posts/<int:pk>', PostDetailView.as_view(), name='post'),
]
```

This is your blog app. The very plane, almost identical to other "Make your blog tutorials":

* by [skysilk](https://www.skysilk.com/blog/2017/how-to-make-a-blog-with-django/)
* by [djanorocks](https://www.djangorocks.com/tutorials/how-to-create-a-basic-blog-in-django/)
* by [codespeedy](https://www.codespeedy.com/how-to-create-a-basic-blog-website-in-django/)

If you are starting out I strongly recommend going through [DjangoGirls](https://djangogirls.org/) [tutorial](https://tutorial.djangogirls.org/) and [Will Vincent's tutorials](https://wsvincent.com/) and [books](https://learndjango.com/books/).

### Pages app

If you have read basic tutorials by [William Vincent](https://wsvincent.com/), then this will be familiar. If you haven't, I strongly suggest it. He has a lot of posts on his [website](https://wsvincent.com). Even better are his [books on Django](https://learndjango.com/books/). Those have been a priceless resource for me when I was learning Django (I still am).

In any case, for the static pages, William suggests to set up a 'pages' app. No need to write models. You will have views and URL routing.

Your project urls.py will route to the pages app like so:

```python
urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
]
```

And your pages app views.py will look like the so:

```python
class HomePageView(TemplateView):
    template_name = 'home.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'
```

## Getting context

At last, we can actually work on the problem at hand.

All you have to do is:
1) import the Post model from the blog app
2) add get_context method to your homepage TemplateView

That's it. Now your views.py looks like this:

```python
class HomePageView(TemplateView):
    template_name = 'home.html'

    # new
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Post.objects.filter(draft=False).order_by('-dateCreated')[0:5]
        context['posts'] = Post.objects.filter(draft=False).order_by('-dateCreated')[0:5]

        return context
```

What you can do now is use the name you've given to the new context in the templates. In you home.html all you have to do is to add a for loop like so:

```python
{% for post in posts %}
  <a href="{% url 'post' post.pk %}">
      <p>{\{ post.title }\}</p>
  </a>
{% endfor %}
```

You will now get the list of all the posts.

## Conclusion

Before I used a very complicated method to achieve the same result, I honestly don't even want to tell anyone about it. This is a much more straight forward, much more elegant solution. It requires much less additional code written.

One thing I felt when I was writing this post is a worry that people are reading this need more context. I think I will end writing a "Definitive guide to start a Django project." That way, in the future, I can always refer to the structure that already exists, as opposed to starting fresh every single time.

I hope this was helpful. Thanks for reading.
