# ChargebeeJS Browser SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/chargebee-js.svg)](https://www.npmjs.com/package/chargebee-js)
[![NPM Downloads](https://img.shields.io/npm/dt/chargebee-js.svg)](https://www.npmjs.com/package/chargebee-js)
![GitHub Repo stars](https://img.shields.io/github/stars/hirenf14/chargebee-js)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/hirenf14/chargebee-js)

**[Example](https://github.com/hirenf14/chargebee-js/tree/main/examples/react-example)**
| **[CHANGELOG](https://github.com/hirenf14/chargebee-js/blob/main/CHANGELOG.md)**

`chargebee-js` is npm package to include [Chargebee](https://www.chargebee.com/checkout-portal-docs/settingup-api-ref.html#introduction)'s browser script, instead of adding it as script tag in HTML pages for JS frameworks.

## Installation

You can install the library using npm or yarn:

```sh
npm install chargebee-js
# or
yarn add chargebee-js

```

## How to use

Inside your JavaScript code, initialize chargebee and get Chargebee instance object. This object can further be used for enabling payment integrations, analytics like Google Analytics and Facebook pixel tracking, checkout and portal integrations and more.



```js
import { loadChargebee } from "chargebee-js";

const cbInstance = loadChargebee({
    site: "site-name", // your test site
    domain: "https://mybilling.acme.com" // this is an optional parameter.
})
```


## Documentation
- For more information and usage, refer to [Chargebee documentation](https://www.chargebee.com/checkout-portal-docs/cb-library-api-ref.html#init).

Made with ❤️ by [Hiren F](https://hiren.codes/) | [GitHub](https://github.com/hirenf14/chargebee-js)