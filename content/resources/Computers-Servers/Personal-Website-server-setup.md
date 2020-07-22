---
title: "Personal Website server setup"
category: Computers-Servers
id: c29ff3bb3ade42e38309c44f3307fb5b
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1587843180500
---

nginx dj-pw

```
#
#
#server {
#    server_name rasulkireev.com www.rasulkireev.com;
#
#    location = /favicon.ico { access_log off; log_not_found off; }
#
#    location / {
#        include proxy_params;
#        proxy_pass http://unix:/run/djpw.gunicorn.sock;
#    }
#
#    client_max_body_size 5M;
#
#    listen 443 ssl; # managed by Certbot
#    ssl_certificate /etc/letsencrypt/live/rasulkireev.com/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/rasulkireev.com/privkey.pem; # managed by Certbot
#    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
#    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
#
#
#
#
#}
#
#server {
#    if ($host = www.rasulkireev.com) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    if ($host = rasulkireev.com) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    listen 80;
#    server_name rasulkireev.com www.rasulkireev.com;
#    return 404; # managed by Certbot
#
#
#
#
#}
```

djpw.gunicorn.service
```
#[Unit]
#Description=gunicorn daemon
#Requires=djpw.gunicorn.socket
#After=network.target
#
#[Service]
#User=rasulkireev
#Group=www-data
#WorkingDirectory=/var/www/dj-pw
#ExecStart=/var/www/dj-pw/venv/bin/gunicorn \
#          --access-logfile - \
#          --workers 3 \
#          --bind unix:/run/djpw.gunicorn.sock \
#          pw.wsgi:application
#
#[Install]
#WantedBy=multi-user.target
```


djpw.gunicorn.socket
```
#[Unit]
#Description=gunicorn socket
#
#[Socket]
#ListenStream=/run/djpw.gunicorn.sock
#
#[Install]
#WantedBy=sockets.target
```

* * *
                