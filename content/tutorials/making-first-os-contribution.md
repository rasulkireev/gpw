---
title: Making your first Open Source Contribution
dateCreated: 2019-08-19
dateUpdated: 2019-08-19
published: true
slug: open-source-contributions
icon: ./icons/open_source.svg
unsplashImageID: R-HXWCbCBGU
aiImage:
aiPrompt:
keywords: [opensource, contribution, github, git]
category: Open Source
type: Tutorial
twitterLink: ""
hnLink: ""
redditLink: ""
indiehackersLink: ""
description: Making your first open source contribution. There is nothing to be scared about! We'll got through this together.
---

I have been working with Git and GitHub for a while now, mostly to push (a.k.a "upload") my projects to my repository, then pull (a.k.a "download") on the Virtual Private Server. Basically I am using GitHub like Dropbox or Google Drive. I am ashamed to say that I have not done any contribution to the open-source projects, mainly because I am scared of screwing the project up (even though I know that the Git Workflow makes it impossible to do). Additionally, learning new terminology like "Fork" and "Checkout".

**All of that changed today and if you have been fillind similar fears will change for you too.**

All you need to do is to head out the [first-contribution repository](https://github.com/firstcontributions/first-contributions) on GitHub and follow the direction. This will be sufficient enough. For the sake of learning the material further and additionally learning to explain myself clearly I will write a short instruction here. You are welcome to follow it and if you have any comments please let me know at on of the Social Networks under the site title. Thanks, enjoy!

1. Go to the [first-contribution repository](https://github.com/firstcontributions/first-contributions) on GitHub.

2. Fork the Github by pressing the "Fork" button on the top right corner.
This will copy over the repository to your account. That way you can make any changes you want.
_Apologies for the lack of images. I have yet to resolve the issue with image uploads on Markdown editor for Django._

3. Head over to the repository on you account and press the `Clone or Download` button (It is loacted in the top rights and is filled in with Green).
You will be provided with the link to clone the repository to your computer. Copy that link.

4. Go to the "Terminal" (on Mac) or the Promt Shell (on Windows, search for "cmd" and press enter), navigate to the folder you want to keep your GitHub repositories, by using `cd` command. I suggest making a GitHub folder by runnning `mkdir GitHub` command on the Mac machine and `md GitHub` on Windows.

5. Run `git clone <link you copied earlier>`.
If you do not yet have git installed on your machine, head over to the [Git Install tutorial page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and then to the [GitHub setup page](https://help.github.com/en/articles/setting-your-username-in-git).
This will download the repository to your computer. There is one more thing you need to do before you can change the contents.

6. Navigate to the downloaded folder with `cd first-contributions` and create a new branch with `git checkout -b <add-your-new-branch-name>`
Branch will spearate your corrections fomr the original repository, which you can later submit. The owner of the original repository will decide if your additions should be "pulled".

7. Add your name to the "Contributors.MD" in text-editor of your choosing. [Atom](https://atom.io/) for me.

8. Commit the changes you made with the following commands:
```
git add contributors.md
git commit -m "{write your message}"
git push origin <add-your-new-branch-name>
```

9. Head over to your account on github to the "first-contributions" repository. Click on the `Compare & pull request` button. Then press on `Create Pull Request`.

**Congratulations, you just submitted your first contribution to an open-source project.**

If you run into any issues or have any questions please do not hesitate to contact me at any of the Social Links located under the website title.
Also, if you have any suggestions for the website layout/design, please let me know. I'm always happy to hear any suggestions.
