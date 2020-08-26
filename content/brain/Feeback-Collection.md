---
title: "Feeback Collection"
category: Project Ideas
id: bd3d636d78b14267afc07b944011b36b
parent_id: cf710e097645477c9695efb32f07de22
created_at: 1594391030496
---

Super Simple Django / JS app.

Idea:
User creates a "room" for his feeback product. He sends the link to people who need to review this. Then users (don't need to log in) go into this room and leave feeback by pressing "Add Feedback button" (pure JS), one form/input line per suggestion. When the user is ready he presses "Send feedback" button.

Potential porblems:
Can I send multiple forms from one page with django?
Would it be multiple forms or multople input fields?

Resolved:
Upon each feedback point send an API request to the server DRF Post, then the user can add another feedback point, by adding another form. That means that I need to send a request with axios or something like that.
    