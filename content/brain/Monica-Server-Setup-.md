---
title: "Monica Server Setup "
category: Computers-Servers
id: 91001ec884f44b3bb574b76a13714529
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1587843523051
---

NGINX monica.conf
```
#server {
#
#    root /var/www/monica/public;
#    index index.php;
#
#    server_name pdb.rasulkireev.com;
#
#    location / {
#        try_files $uri $uri/ /index.php?$args;
#    }
#
#    location ~ \.php$ {
#        include snippets/fastcgi-php.conf;
#        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
#    }
#
#    listen [::]:443 ssl; # managed by Certbot
#    listen 443 ssl; # managed by Certbot
#    ssl_certificate /etc/letsencrypt/live/pdb.rasulkireev.com/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/pdb.rasulkireev.com/privkey.pem; # managed by Certbot
#    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
#    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
#
#}
#server {
#    if ($host = pdb.rasulkireev.com) {
#        return 301 https://$host$request_uri;
#    } # managed by Certbot
#
#
#    listen 80;
#    listen [::]:80;
#
#    server_name pdb.rasulkireev.com;
#    return 404; # managed by Certbot
#}
```

.env
```
# The URL of your application.
APP_URL=https://pdb.rasulkireev.com

# Database information
# To keep this information secure, we urge you to change the default password
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
# You can use mysql unix socket if available, it overrides DB_HOST and DB_PORT values.
#DB_UNIX_SOCKET=/var/run/mysqld/mysqld.sock
DB_DATABASE=pdb
DB_USERNAME=rasulkireev
DB_PASSWORD=
DB_PREFIX=
DB_TEST_HOST=127.0.0.1
DB_TEST_DATABASE=monica_test
DB_TEST_USERNAME=homestead
DB_TEST_PASSWORD=

# Mail credentials used to send emails from the application.
MAIL_DRIVER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=kireevr1996@gmail.com
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
# Outgoing emails will be sent with these identity
MAIL_FROM_ADDRESS=kireevr1996@gmail.com
MAIL_FROM_NAME="Rasul Kireev"
# New registration notification sent to this email
APP_EMAIL_NEW_USERS_NOTIFICATION=kireevr1996@gmail.com

# API key for geolocation services
# We use LocationIQ (https://locationiq.com/) to translate addresses to
# latitude/longitude coordinates. We could use Google instead but we don't
# want to give anything to Google, ever.
# LocationIQ offers 10,000 free requests per day.
LOCATION_IQ_API_KEY=
```
    