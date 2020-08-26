---
title: "CI CD Continious Deployment to VPS via Github Actions"
category: Computers-Servers
id: f4a6db52c21144198dc8050221856ebc
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1596430234325
---

08/03/2020

https://dev.to/knowbee/how-to-setup-continuous-deployment-of-a-website-on-a-vps-using-github-actions-54im


```yaml
name: Deploy

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1

    - name: Copy repository contents via scp
      uses: appleboy/scp-action@master
      env:
        HOST: ${{ secrets.HOST }}
        USERNAME: ${{ secrets.USERNAME }}
        PORT: ${{ secrets.PORT }}
        KEY: ${{ secrets.SSHKEY }}
      with:
        source: "."
        target: "/var/www/mywebsite"

    - name: Executing remote command
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        USERNAME: ${{ secrets.USERNAME }}
        PORT: ${{ secrets.PORT }}
        KEY: ${{ secrets.SSHKEY }}
        script: ls
```
    