---
sidebar_position: 4
---

# Concept

The Messaging library empowers seamless communication between various components that make up your browser extension. Here's a breakdown of supported components and how they interact through Messaging:

## Import

To utilize Messaging within a component, import the necessary functions using clear naming conventions:

```js
import { onMessage, sendMessage } from "@ext-browser/messaging/{{extensionComponent}}";
```

#### ExtensionComponent

Below are supported `extensionComponent`

- background
- content
- devtools
- popup
- sidepanel

Each supported component provides two essential functions for communication:

### onMessage(`eventName`, `callback`)
Registers a listener function (callback) that is invoked whenever a message with the specified eventName is received from any component. The callback function typically receives the message data as an argument.

```js
import { onMessage } from "@ext-browser/messaging/popup";

onMessage("EXTENSION_SETTINGS_UPDATED", (data) => {
    console.log(data);
})

```

### sendMessage(`extensionComponent`, `eventName`, `data`)
Sends a message to a specific component identified by recipient. The eventName acts as a message identifier, and the data parameter carries the information you want to transmit.

```js
import { sendMessage } from "@ext-browser/messaging/background";

sendMessage("popup", "EXTENSION_SETTINGS_UPDATED", { theme: "dark" })

```


## contentWindow
