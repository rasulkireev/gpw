---
title: "MySQL / MariaDB - Plugin 'InnoDB' error"
category: Databases
id: 7077ea99ac20457294c4afc90bd71da0
parent_id: 9b25af2004a74b3bb25339d0e64011f5
created_at: 1585663605248
---

[Getting error “Plugin 'InnoDB' registration as a STORAGE ENGINE failed” when starting MySQL](https://stackoverflow.com/questions/26439742/getting-error-plugin-innodb-registration-as-a-storage-engine-failed-when-sta#29556491)

---
## Problem

Here are free command status: free -m

             total       used       free     shared    buffers     cached
Mem:          3743       3631        111          0       2705         21
-/+ buffers/cache:        905       2838
Swap:         2047          0       2047

---
## Solution

I have the same problems, this my solution:

    Add more RAM to the server

    Decrease the value of innodb-buffer-pool size in the config file /etc/mysql/my.cnf:

    innodb_buffer_pool_size = 10M

After save my.cnf, restart mysql service.

    