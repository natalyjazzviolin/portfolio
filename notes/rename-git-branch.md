---
title: 'How to: rename local & remote git branch'
date: '2022-03-16'
tags: git, github
blog: false
---

I named a git branch incorrectly, so it was not recognized and attached to the Jira ticket I was working on. Here is what I did to correct this:



1. Made sure to checkout the branch locally:
```shell
git checkout current_branch_name
```

2. Renamed the branch locally:
```shell
git branch -m new_branch_name
```

3. Pushed the local branch to rename it remotely:
```shell
git push origin -u new_branch_name
```
4. Deleted the old branch:
```shell
git push origin --delete current_branch_name
```
Done!