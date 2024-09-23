# authentication utils package

[![npm version](https://badge.fury.io/js/my-nestjs-package.svg)](https://badge.fury.io/js/my-nestjs-package)

A utility function to extract Bearer token from HTTP headers in a NestJS application.

## Installation

You can install the package using npm or yarn:

```sh
npm install my-nestjs-package
```

or

```sh
yarn add my-nestjs-package
```

## Usage

To use the `getTokenFromHeaders` function in your NestJS project, follow the steps below:

1. **Import the Function**:

```typescript
import { getTokenFromHeaders } from 'authentication-utils';
```

2. **Use the Function**:

Assuming you have an HTTP headers object, you can extract the Bearer token like this:

```typescript
const headers = new Headers({
  'Authorization': 'Bearer my-jwt-token',
});

const token = getTokenFromHeaders(headers);
console.log(token); // Outputs: 'my-jwt-token'
```

### Example with NestJS Controller

Here's an example of using `getTokenFromHeaders` in a NestJS controller:

```typescript
import { Controller, Get, Headers } from '@nestjs/common';
import { getTokenFromHeaders } from 'authentication-utils';

@Controller('example')
export class ExampleController {
  @Get()
  getExample(@Headers() headers: Headers): string {
    const token = getTokenFromHeaders(headers);
    return `Extracted token: ${token}`;
  }
}
```

## API

### `getTokenFromHeaders(headers: Headers): string | null`

#### Parameters
- `headers`: An instance of the `Headers` object containing your HTTP headers.

#### Returns
- A `string` representing the extracted Bearer token if present, or `null` if not found.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.