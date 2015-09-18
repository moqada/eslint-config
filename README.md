# eslint-config-moqada

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

### ES6

```yaml
extends: moqada
```

### ES5

```yaml
extends: moqada/es5
```

### CLI

```yaml
extends: moqada/cli
```

### React

```yaml
extends: moqada/react
```

#### Additional Requirements

```
npm install --save-dev eslint-plugin-react
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
