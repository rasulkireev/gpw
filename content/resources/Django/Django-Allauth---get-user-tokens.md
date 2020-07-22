---
title: "Django Allauth - get user tokens"
category: Django
id: 53adf1407d74440e9b8f45a553033fea
parent_id: 598e539fe93a4f35ac917630ae7ef6c2
created_at: 1593529747690
---

06/30/2020

https://github.com/pennersr/django-allauth/issues/122

_Sep 25, 2015_
Users can connect multiple social accounts to their user account, so there may be multiple tokens in the system.

Here is how to list all Facebook tokens, given a user:

```
from allauth.socialaccount.models import SocialToken
SocialToken.objects.filter(account__user=user, account__provider='facebook')
```

Note that allauth only stores the tokens. How they are accessed and used is project dependent and therefore beyond allauth scope.
                