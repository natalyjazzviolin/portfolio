---
title: 'Add Storybook to React'
date: '2022-02-27'
tags: react, storybook, babel
blog: false
---

I needed to add Storybook to an existing React project a few days ago. I ran into some issues with peer-dependencies, here is how I fixed them:


1. Check and see if the project has Typescript installed. It might, even if it's not being used. This is important for Storybook's initial configuration. Make sure to uninstall this dependency if it's not being used:
```shell
yarn remove typescript
```
2. Add this snippet to the end of `package.json`:
```json
"resolutions": {
    "babel-loader": "8.1.0"
  }
```
This is a [known issue.](https://github.com/storybookjs/storybook/issues/5183)

3. Remove node_modules and package-lock.json to clear up any conflicts:
```shell
rm -rf node_modules package-lock.json
```

4. Re-install everything:
```shell
yarn
```
Or if installing with npm you might need to run
```shell
npm install --legacy-peer-deps
```