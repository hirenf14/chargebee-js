# Chargebee.js ES Module

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/chargebee-js.svg)](https://www.npmjs.com/package/chargebee-js)
[![NPM Downloads](https://img.shields.io/npm/dt/chargebee-js.svg)](https://www.npmjs.com/package/chargebee-js)
![GitHub Repo stars](https://img.shields.io/github/stars/hirenf14/chargebee-js)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/hirenf14/chargebee-js)


`chargebee-js` is npm package to include [Chargebee](https://www.chargebee.com/checkout-portal-docs/settingup-api-ref.html#introduction)'s browser script, instead of adding it as script tag in HTML pages for JS frameworks.
Use [Chargebee.js](https://www.chargebee.com/checkout-portal-docs/api-how-to.html#setting-up-chargebee-js) as an ES module.

Note: To be PCI compliant, you must load Chargebee.js directly from https://js.chargebee.com. You cannot include it in a bundle or host it yourself. This package wraps the global Chargebee function provided by the Chargebee.js script as an ES module.

Calling `loadChargebee` always loads the latest version of Chargebee.js, regardless of which version of `chargebee-js` you use. Updates for this package only impact tooling around the `loadChargebee` helper itself and the TypeScript type definitions provided for Chargebee.js. Updates do not affect runtime availability of features of Chargebee.js.


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