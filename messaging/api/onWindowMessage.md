---
sidebar_position: 3
---

# onWindowMessage

This function used in communication scenarios involving isolated content scripts and main content script. this function is used only in content script with `ExecutionWorld.ISOLATED`

### Purpose

- Listens for messages sent from the main window (where background script and non-isolated content scripts reside).
- Allows isolated content scripts to receive information and potentially trigger actions based on messages from other components.

## Parameters

### `eventName` (String)
- The identifier for the message you want to listen for. Messages can be categorized using custom event names to differentiate between different communication purposes.

### `callback` (Function)
- The function that will be called when a message with the specified `eventName` is received. This callback typically receives two arguments:

    - `eventData`: The data payload contained within the received message. This data can be any type of information (strings, objects, arrays, etc.) that the sender wants to communicate.


```js title="./content-script-isolated.js"
import { onWindowMessage } from "@ext-browser/messaging/content";

// Listen for messages from the main window (can be filtered by eventName)
onWindowMessage("BUTTON_CLICKED", (eventData) => {
  // Process the received data from the main window
  console.log("Received message:", eventData);
});
```

## Return Value

`onWindowMessage` itself doesn't return a value.

