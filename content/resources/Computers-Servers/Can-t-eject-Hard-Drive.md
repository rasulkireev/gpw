---
title: "Can't eject Hard Drive"
category: Computers-Servers
id: 79751f3e83224bd0809601c7ac93aef0
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1587257905815
---

https://apple.stackexchange.com/questions/104842/the-volume-cant-be-ejected-because-its-currently-in-use

---

`sudo lsof /Volumes/myDrive` to check current porccesses assoiciated with this Volume.

Then run the following starting with first and moving to the next if the previous did not work:

```
kill 2158
sudo kill 2158
sudo kill -INT 2158
sudo kill -KILL 2158
```

Also, sometimes the base command sudo lsof /Volumes/myDrive won't find anything. If that happens, try adding the +D argument (i.e. sudo lsof +D /Volumes/myDrive). That will do a top down scan of the disk. It'll take longer, but it should pick up anything that's causing the disk to be un-ejectable.

---
Find out which application is using external hard drive in order to eject it

http://www.alecjacobson.com/weblog/?p=649
                