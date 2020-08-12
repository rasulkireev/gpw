---
title: "Avoid being asked passphrase everytime I use ssh"
category: Computers-Servers
id: 5efeeb9cf0c64bacac997c2adcb81d00
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1585569868076
---

https://unix.stackexchange.com/questions/12195/how-to-avoid-being-asked-passphrase-each-time-i-push-to-bitbucket

---

You need to use an ssh agent. Short answer: try

```
$ ssh-add
```
                