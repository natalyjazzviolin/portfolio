---
title: 'Global CSS in Storybook'
date: '2022-03-09'
tags: react, storybook, css, bootstrap
blog: false
---

To add global styles to Storybook, import them into `.storybook/preview.js` :

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../path/to/app.css"
```
This is the way to connect a UI framework such as Bootstrap to Storybook.