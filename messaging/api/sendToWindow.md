---
sidebar_position: 4
---

# sendToWindow

This is used to send the data to content script with `ExecutionWorld.MAIN`. this function is used only in content script with `ExecutionWorld.ISOLATED`
It enables you to send messages from various extension components (background script, popup, etc.) to content scripts injected with `ExecutionWorld.ISOLATED`.


### Purpose

- Initiates message sending specifically to the main window content script, which can then interact with isolated content scripts.

## Parameters

### `eventName` (String)
- The identifier for the message being sent. This helps categorize and route messages within the Messaging library.

### `eventData` (Object/Any)
An optional data payload that you want to transmit along with the message. This data can be any format suitable for your communication needs (objects, strings, arrays, etc.).


```js title="./content-script-isolated.js"
import { sendToWindow } from "@ext-browser/messaging/content";

sendToWindow("USER_SETTINGS", { hello: "world" });
```

## Return Value

This function is not have this feature