---
sidebar_position: 2
---

# sendMessage

Sends a message to a specific recipient component within your extension.

```js
import { sendMessage } from "@ext-browser/messaging/{{extensionComponent}}";

sendMessage("EVENT_NAME", { hello: "world" });
```


## Parameters

### `recipient` (String)
- The identifier of the component you want to send the message to `background`, `content:{tabId}`, `devtools:{tabId}`, `popup`, `sidepanel`

Ex:
- `content:1234` // Send Message to content script in tab id 1234
- `content:active` // Use `active` tab id so it will send data to active tab

### `eventName` (String)
- The name assigned to the message, used for categorization and routing within the Messaging library.

### `eventData` (Object/Any)
An optional data payload that you want to transmit along with the message. This data can be any format suitable for your communication needs (objects, strings, arrays, etc.).

## Return Value

If the Messaging library is configured for asynchronous communication, `sendMessage` returns a Promise object. This allows you to handle the response message asynchronously, providing a mechanism for two-way communication.

### Handling Errors and Timeouts in sendMessage

#### Case 1: Recipient Not Found (Timeout)

- **Scenario:** The recipient component (background script, popup, etc.) is unavailable or not listening for the message within a specified timeframe. Timeout is `30` seconds`.

#### Case 2: Recipient Function Throws Error

- **Scenario:** The recipient component receives the message but encounters an error while processing it.

