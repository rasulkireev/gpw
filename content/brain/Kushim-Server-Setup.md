---
title: "Kushim Server Setup"
category: Computers-Servers
id: 51c7a56fce0b421297cf72ff88d6a913
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1587843382660
---

NGINX kushim
```
#server {
#    server_name kushim.io www.kushim.io kushim.rasulkireev.com;
#
#    location = /favicon.ico { access_log off; log_not_found off; }
#
#    location /static/ {
#        root /var/www/kushim;
#    }
#
#    location /media/ {
#        root /var/www/kushim;
#    }
#
#    location / {
#        include proxy_params;
#        proxy_pass http://unix:/run/kushim.gunicorn.sock;
#    }
#
#
#    listen 443 ssl; # managed by Certbot
#    ssl_certificate /etc/letsencrypt/live/kushim.io/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/kushim.io/privkey.pem; # managed by Certbot
#    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
#    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
#
#}
#server {
#    if ($host = kushim.rasulkireev.com) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    if ($host = www.kushim.io) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    if ($host = kushim.io) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    server_name kushim.io www.kushim.io kushim.rasulkireev.com;
#    listen 80;
#    return 404; # managed by Certbot
#
#}
```

kushim.gunicorn.service
```
#[Unit]
#Description=gunicorn daemon
#Requires=kushim.gunicorn.socket
#After=network.target
#
#[Service]
#User=rasulkireev
#Group=www-data
#WorkingDirectory=/var/www/kushim
#ExecStart=/var/www/kushim/venv/bin/gunicorn \
#          --access-logfile - \
#          --workers 3 \
#          --bind unix:/run/kushim.gunicorn.sock \
#          kushim.wsgi:application
#
#
#[Install]
#WantedBy=multi-user.target
```

kushim.gunicorn.socket
```
#[Unit]
#Description=gunicorn socket
#
#[Socket]
#ListenStream=/run/kushim.gunicorn.sock
#
#[Install]
#WantedBy=sockets.target
#
```

.env
```

DEBUG=off

SECRET_KEY=s=yl4plm=jp&c0@y8_4gdmnt&kl#7$e9-j@x+1(6p8@wwd*0p1

DATABASE_URL=psql://rasulkireev:password@localhost/kushim

ALLOWED_HOSTS=localhost,www.kushim.io,kushim.io,kushim.rasulkireev.com

dsn=https://974acdaa705049d886ce5f5afff967d9@sentry.io/1795794

# Analytics
ANALYTICAL_INTERNAL_IPS=69.120.122.200
GOOGLE_ANALYTICS_PROPERTY_ID=UA-143847424-2

# Stripe
STRIPE_LIVE_PUBLIC_KEY=''
STRIPE_LIVE_SECRET_KEY=''
STRIPE_TEST_PUBLIC_KEY=''
STRIPE_TEST_SECRET_KEY=''
STRIPE_LIVE_MODE=False
DJSTRIPE_WEBHOOK_SECRET=""
```
    