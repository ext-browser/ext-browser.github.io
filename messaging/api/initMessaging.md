---
sidebar_position: 5
---

# initMessaging

The initMessaging function, provided by the Messaging library, plays a fundamental role in initializing communication infrastructure within your browser extension. It establishes the connection between your extension's components and facilitates the exchange of information between them.

## Purpose

- Sets up a communication channel with the background script, acting as a central hub for message routing within the extension.
- When initMessaging is called, it typically performs the following actions:
    - Establishes a connection to the background script using a mechanism provided by the Messaging library (e.g., chrome.runtime.connect).
    - Attaches event listeners to:
        - The connection's onDisconnect event to automatically re-initialize the connection if it drops.
        - Incoming messages from the background script to handle communication with other components.

```jsx
import { initMessaging } from "@ext-browser/messaging/background";

// Call this function at the top of your background script file:
initMessaging();

// Your background script code goes here
```

## Parameters
- The function takes a single optional argument, an object destructured with default values ({}). This object can contain two properties:

### onPortDisconnect (Function)
- An optional callback function to be invoked when a connection is disconnected.

### onPortConnect (Function)
- An optional callback function to be executed when a new connection is established.