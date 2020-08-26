---
title: "Installing psycopg2"
category: Django
id: ed02e01e0a554d8a843324b82997119f
parent_id: 598e539fe93a4f35ac917630ae7ef6c2
created_at: 1593443955652
---

https://stackoverflow.com/questions/39767810/cant-install-psycopg2-package-through-pip-install-is-this-because-of-sierra/58722268#58722268

A lot pf the times the psycopg2 install gives out a lot of errors. This helped me:

```
brew reinstall openssl

export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/opt/openssl/lib/
```
    