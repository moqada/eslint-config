# eslint-config-moqada

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]


My personal ESLint configurations.

## Installation

```
npm install --save-dev eslint eslint-config-moqada eslint-plugin-jsdoc
```

## Usage

Add `eslint.config.js`.

### Summary

- **Base**
  - `moqada`: Default
  - `moqada/es5`: ES5
- **Optional**
  - `moqada/browser`: Browser env
  - `moqada/cli`: for CLI (Node.js env)
  - `moqada/flow`: for Flow
  - `moqada/flow-jsdoc`: for JSDoc and Flow
  - `moqada/node`: for Node.js env
  - `moqada/react`: for React
  - `moqada/react-native`: for React Native
  - `moqada/mocha`: for Testing mocha

### Examples

#### ES6 (Node.js)

```js
import configMoqada from 'eslint-config-moqada';
import configMoqadaNode from 'eslint-config-moqada/node';
export default [
  ...configMoqada,
  ...configMoqadaNode,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-node
```

#### ES5 (Browser)

```js
import configMoqadaEs5 from 'eslint-config-moqada/es5';
import configMoqadaBrowser from 'eslint-config-moqada/browser';
export default [
  ...configMoqadaEs5,
  ...configMoqadaBrowser,
];
```

#### CLI

```js
import configMoqada from 'eslint-config-moqada';
import configMoqadaCli from 'eslint-config-moqada/cli';
export default [
  ...configMoqada,
  ...configMoqadaCli,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-node
```

#### React

```js
import configMoqada from 'eslint-config-moqada';
import configMoqadaBrowser from 'eslint-config-moqada/browser';
import configMoqadaReact from 'eslint-config-moqada/react';
export default [
  ...configMoqada,
  ...configMoqadaBrowser,
  ...configMoqadaReact,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

#### React Native

```js
import configMoqada from 'eslint-config-moqada';
import configMoqadaReactNative from 'eslint-config-moqada/react-native';
export default [
  ...configMoqada,
  ...configMoqadaReactNative,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```


#### React Native with Flow

```js
import configMoqada from 'eslint-config-moqada';
import configMoqadaReactNative from 'eslint-config-moqada/react-native';
import configMoqadaFlow from 'eslint-config-moqada/flow';
import configMoqadaFlowJsdoc from 'eslint-config-moqada/flow-jsdoc';
export default [
  ...configMoqada,
  ...configMoqadaReactNative,
  ...configMoqadaFlow,
  ...configMoqadaFlowJsdoc,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-flowtype eslint-plugin-jsdoc eslint-plugin-react eslint-plugin-react-native eslint-plugin-import
```

[npm-url]: https://www.npmjs.com/package/eslint-config-moqada
[npm-image]: https://img.shields.io/npm/v/eslint-config-moqada.svg?style=flat-square
[travis-url]: https://travis-ci.org/moqada/eslint-config
[travis-image]: https://img.shields.io/travis/moqada/eslint-config.svg?style=flat-square
[daviddm-url]: https://david-dm.org/moqada/eslint-config
[daviddm-image]: https://img.shields.io/david/moqada/eslint-config.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/moqada/eslint-config#info=devDependencies
[daviddm-dev-image]: https://img.shields.io/david/dev/moqada/eslint-config.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/eslint-config-moqada.svg?style=flat-square
