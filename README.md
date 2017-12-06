# eslint-config-moqada

[![Greenkeeper badge](https://badges.greenkeeper.io/moqada/eslint-config.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![License][license-image]][license-url]


My personal ESLint configurations.

## Installation

```
npm install --save-dev eslint eslint-config-moqada
```

## Usage

Add `.eslintrc` (YAML).

### Summary

- **Base**
  - `moqada`: ES2015
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

```yaml
extends:
  - moqada
  - moqada/node
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-node
```

#### ES5 (Browser)

```yaml
extends:
  - moqada/es5
  - moqada/browser
```

#### CLI

```yaml
extends:
  - moqada
  - moqada/cli
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-node
```

#### React

```yaml
extends:
  - moqada
  - moqada/browser
  - moqada/react
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

#### React Native

```yaml
extends:
  - moqada
  - moqada/react-native
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```


#### React Native with Flow

```yaml
extends:
  - moqada
  - moqada/react-native
  - moqada/flow
  - moqada/flow-jsdoc
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
