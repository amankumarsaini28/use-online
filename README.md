# @thejsguy/use-online

A lightweight custom React hook for tracking the user's online/offline status using the `useSyncExternalStore` API.

## Installation

You can install the package via npm or yarn:

```bash
npm install @thejsguy/use-online
```

or

```bash
yarn add @thejsguy/use-online
```

## Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

Make sure these are installed in your project.

## Usage


```typescript
import { useOnline } from '@thejsguy/use-online';

function MyComponent() {
  const isOnline = useOnline();

  return (
    <div>
      {isOnline ? 'You are connected to internet' : 'You are offline'}
    </div>
  );
}
```

## API

### `useOnline()`

Returns a boolean indicating whether the user is currently online (true) or offline (false).

## License

### ISC

Copyright 2024, Aman Kumar Saini

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
