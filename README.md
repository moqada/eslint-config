# eslint-config-moqada
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]


My personal ESLint configurations.

## Installation

```
npm install --save-dev eslint eslint-config-moqada
```

## Usage

Add `.eslintrc`.

### ES6

```
{
  "extends": "moqada"
}
```

### ES5

```
{
  "extends": "moqada/es5"
}
```

### React

```
{
  "extends": "moqada/react"
}
```

#### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

[npm-url]: https://badge.fury.io/js/eslint-config-moqada
[npm-image]: https://badge.fury.io/js/eslint-config-moqada.svg
[travis-url]: https://travis-ci.org/moqada/eslint-config-moqada
[travis-image]: https://travis-ci.org/moqada/eslint-config-moqada.svg?branch=master
[daviddm-url]: https://david-dm.org/moqada/eslint-config-moqada
[daviddm-image]: https://david-dm.org/moqada/eslint-config-moqada.svg
[daviddm-dev-url]: https://david-dm.org/moqada/eslint-config-moqada#info=devDependencie
[daviddm-dev-image]: https://david-dm.org/moqada/eslint-config-moqada/dev-status.svg
