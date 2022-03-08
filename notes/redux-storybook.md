---
title: 'Add Redux Store to Storybook'
date: '2022-03-08'
tags: react, storybook, redux
blog: false
---

Here's how to add Redux as a global decorator to Storybook in React:

1. Make sure the store is in a separate component.
2. Then in `.storybook/preview.js` add:
```jsx
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../path/to/store";

export const decorators = [
  (Story) => (
    <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
    </Provider>
  ),
];
```

**Bonus:**
the MemoryRouter component will resolve any issues your stories might have with Link and react-router-dom.