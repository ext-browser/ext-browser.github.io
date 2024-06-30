---
sidebar_position: 1
---

# onMessage

Registers a callback function to be invoked whenever a message with a matching eventName is received.

```js
import { onMessage } from "@ext-browser/messaging/{{extensionComponent}}";

onMessage("EVENT_NAME", async (data) => {
    console.log(data)
})
```

## Parameters

### `eventName` (String)
- The identifier for the message you want to listen for. Messages can be categorized using custom event names to differentiate between different communication purposes.

### `callback` (Function)
- The function that will be called when a message with the specified `eventName` is received. This callback typically receives two arguments:

    - `eventData`: The data payload contained within the received message. This data can be any type of information (strings, objects, arrays, etc.) that the sender wants to communicate.
    - `event` (Object): The entire message object, including details like the sender identifier and any other information included in the message.

## Send Response

This returned value from the callback becomes the data sent back in the response message.

```js
import { onMessage } from "@ext-browser/messaging/{{extensionComponent}}";

onMessage("EVENT_NAME", async (data) => {
    return { newData: { hello: "world" } } // This is the returned value
})
```

### Important Considerations
- If your callback function doesn't explicitly return a value, the response message will be empty.
- The data type of the returned value should be compatible with what the receiving component expects.
- You can use async/await within your callback for asynchronous operations, but remember that the onMessage function itself remains asynchronous.

#### Example with Sending Component:

```js
// In the component sending the message
const response = await sendMessage("extensionComponent", "EVENT_NAME");

console.log("Received response:", response); // Here you'll receive the `{ newData: { hello: "world" } }` object
```

