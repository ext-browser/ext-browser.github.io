---
sidebar_position: 2
---

# Installation

```bash npm2yarn
npm install --save @ext-browser/messaging
```

## Background Script

The Messaging library relies on a background script as the central communication point for all messages exchanged between different components (popup, content script, devtool, etc.) in your extension.

### Do You Already Have a Background Script?

If you already have a background script in your project, simply import the initMessaging function from the `@ext-browser/messaging/background` module:

```jsx
import { initMessaging } from "@ext-browser/messaging/background";

// Call this function at the top of your background script file:
initMessaging();

// Your background script code goes here
```

### New to Background Scripts?

Here's a quick guide to setting up a background script for both Chrome and Firefox extensions:


### Chrome

Register an Extension Service Worker

Chrome uses service workers for background functionality. In your `manifest.json` file, under the `background` field, use the `service_worker` key to specify the JavaScript file that acts as your background script.

`manifest.json` Example:

```json
{
  "name": "Awesome Test Extension",
  // ... other manifest properties
  "background": {
    "service_worker": "service-worker.js"
  },
  // ...
}
```

`service-worker.js` Example:

```js
import { initMessaging } from "@ext-browser/messaging/background";

initMessaging();
```


### Firefox

Include Background Script

Firefox uses traditional background scripts. In your `manifest.json` file, under the `background` field, use the `scripts` key to specify an array of JavaScript files containing your background script logic.

`manifest.json` Example:

```json
{
  "name": "Awesome Test Extension",
  // ... other manifest properties
  "background": {
    "scripts": ["background-script.js"]
  },
  // ...
}
```

`background-script.js` Example:

```js
import { initMessaging } from "@ext-browser/messaging/background";

initMessaging();
```


:::tip[Remember]

Regardless of the browser, call initMessaging() in your background script to initialize the Messaging library.
This centralized approach ensures smooth and efficient communication throughout your extension's components.

:::

