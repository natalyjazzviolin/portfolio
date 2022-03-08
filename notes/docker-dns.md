---
title: 'Docker DNS Error'
date: '2022-02-26'
tags: docker, laravel, macOS
blog: false
---
I ran into an issue when running Docker on Mac, and got this error: `DNS_PROBE_FINISHED_NXDOMAIN`

You'll need to edit the hosts file to fix this, here are the steps:

1. Open a terminal and type 
```shell
sudo nano /etc/hosts
```

2. Find the #Added by Docker Section and add 
```shell
127.0.0.1 your_url_goes_here
```
3. Hit `Ctrl + O` to save, then `Enter`
4. Hit `Ctrl + X` to exit.

Now you're all set!