---
title: "Integrate Vue into Django"
category: Django
id: 5ea4aef376a34a0a8b09516ab2f82285
parent_id: 598e539fe93a4f35ac917630ae7ef6c2
created_at: 1590168311292
---

https://github.com/michaelbukachi/django-vuejs-tutorial/wiki/Django-Vue.js-Integration-Tutorial

Killer post!


Pair it with the following StackOverflow question to make sure you have correct version and the flow functions as expected. https://stackoverflow.com/questions/49464756/getting-a-webpack-error-when-trying-to-run-yarn-run-build-assets



> Try to install the earlier version of the packages such as django-webpack-loader==0.6.0 and webpack-bundle-tracker@0.2.1. Then run yarn serve or npm run serve for npm users to create the webpack-stats.json on the frontend directory.

> Packages with version, django-webpack-loader==0.7.0, and webpack-bundle-tracker@1.0.0-alpha.1 cannot automatically generate webpack-stats.json and will likely to cause OSError.

> For projects using Django==3.0.6 and @vue/cli 4.3.1.

    