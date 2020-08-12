---
title: "My NGINX server setup for Lychee (photos hosting)"
category: Computers-Servers
id: 4821f2d1ae874d23aae72f444daf7cbf
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1586616709052
---

lychee.conf

Note: the setting for large file upload.

```
server {
        server_name  photos.rasulkireev.com;

        root /var/www/Lychee;
        index  index.php index.html index.htm;

        charset utf-8;
        gzip on;
        gzip_types text/css application/javascript text/javascript application/x-javascript image/svg+xml text/plain text/xsd text/xsl text/xml image/x-icon;

        location / {
                  try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                  client_max_body_size 10M;
                  include fastcgi.conf;
                  include fastcgi_params;
                  fastcgi_split_path_info ^(.+\.php)(/.+)$;
                  fastcgi_index index.php;
                  fastcgi_pass unix:/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                  deny all;
        }
```
                