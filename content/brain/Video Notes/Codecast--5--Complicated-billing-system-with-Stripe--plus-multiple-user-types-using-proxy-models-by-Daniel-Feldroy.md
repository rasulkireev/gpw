---
title: "Codecast #5: Complicated billing system with Stripe, plus multiple user types using proxy models by Daniel Feldroy"
category: Video Notes
id: c97d2fc4af9544deb47988e8a62bce90
parent_id: 2fb116253bed4bd697e23a727a9edcd2
created_at: 1594230764659
---


[01:22:00]
07/09/2020
*models.py*

```
from model_utils.models import TimeStampedModel

class Invoice(TimeStampedModel):
 pass
```

Regular model, bu provides automatice create at and modified at timestamps.

[02:15:17]
07/12/2020
You can access Custom User Field via request. For instance, to check if user has Stripe ID do this in **views.py**:

```python
class Something(LoginRequiredMixin, View):
	def post(self, request, *args, **kwargs):
		if request.user.stripe_user_id:
			do something
		
```
                