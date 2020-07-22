---
title: "MySQL / MariaDB max_open_files more than 1024"
category: Databases
id: cbfeef301c6b456b82295ca62fff0434
parent_id: 9b25af2004a74b3bb25339d0e64011f5
created_at: 1585663696947
---

For me the issue was `MySQL max_open_files more than 1024`
https://unix.stackexchange.com/questions/152186/mysql-max-open-files-more-than-1024

---

Edit `/etc/security/limits.conf` and add the following lines

```
mysql soft nofile 65535
mysql hard nofile 65535
```

then reboot.

Then edit `/etc/systemd/system/mysqld.service` and add

```
LimitNOFILE=infinity
LimitMEMLOCK=infinity
```

Then restart the db service:

```
sudo systemctl reload mariadb.service
```

                