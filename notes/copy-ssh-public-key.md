---
title: 'Manually copy an SSH key in WSL2'
date: '2022-08-21'
tags: windows, wsl2, GitHub, SSH, authentication
blog: false
---

GitHub has deprecated their [password authentication](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) as of August 2021 and that means I'm having to switch over to SSH. I don't usually code on Windows machines anymore, but decided to take my Surface Go on a long-haul flight because of its compact size.  

Here I ran into an issue: while setting up the new connection, I **could not copy the generated public key from the WSL2 instance to the browser in Windows because `pbcopy` does not work.** 

The [instructions on GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account/) simply say to 'locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.' Here's how I did this:

1. To view hidden files and directories within the folder -
```shell
ls -a
``` 
The `-a` flag stands for 'all' and literally shows all the files. Now we know we're in the correct folder.

2. Navigate into `.ssh`:
```shell
cd .ssh
```

3. Now let's open the key in a text editor:
```shell
vim id_ed25519.pub
```
SSH keys are generated in pairs, and you want the public one, the file with the `.pub` extension.

4. Copy the contents of that file and quit vim, easy! Juuust kidding, let's quit vim:
```shell
# press Esc
:q
# press Enter
```
