---
title: "Change ssh passphrase"
category: Computers-Servers
id: 1e139a446f72433da928c5b2dc2fa253
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1597874138424
---

08/19/2020

https://stackoverflow.com/questions/112396/how-do-i-remove-the-passphrase-for-the-ssh-key-without-having-to-create-a-new-ke

```
$ ssh-keygen -p
```

If you would like to do it all on one line without prompts do:

```
$ ssh-keygen -p [-P old_passphrase] [-N new_passphrase] [-f keyfile]
```
    