---
title: "Access data in script"
category: Gridsome
id: e2a57ef8c8a546218dcdd3be62341e7e
parent_id: ad3d2daa0b26421c9e95815b1c53ae47
created_at: 1592839787905
---

06/22/2020 11:30

https://stackoverflow.com/questions/54812332/access-the-queried-data-from-vue-component-using-gridsome


So I've figured it out. I was able to access this.$page variable in the created() lifecycle hook of vue and not in the data object itself.

The code is looking like this. I first define the variables with initial value of null in the data object:
                