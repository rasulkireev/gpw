---
title: "Debugging mariadb/mysql db issues"
category: Databases
id: 635a43ef843d4d7098a1b456b818d5b5
parent_id: 9b25af2004a74b3bb25339d0e64011f5
created_at: 1585568079830
---

To "debug":
https://mariadb.com/kb/en/what-to-do-if-mariadb-doesnt-start/

```
mysqld --help --verbose | grep 'log-error' | tail -1
```

```
mysqld --help --verbose | grep 'datadir' | tail -1
```


                