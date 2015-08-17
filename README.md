# eslint-config-moqada
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]


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

### React

```yaml
extends: moqada/react
```

#### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

[npm-url]: https://badge.fury.io/js/eslint-config-moqada
[npm-image]: https://badge.fury.io/js/eslint-config-moqada.svg
[travis-url]: https://travis-ci.org/moqada/eslint-config
[travis-image]: https://travis-ci.org/moqada/eslint-config.svg?branch=master
[daviddm-url]: https://david-dm.org/moqada/eslint-config
[daviddm-image]: https://david-dm.org/moqada/eslint-config.svg
[daviddm-dev-url]: https://david-dm.org/moqada/eslint-config#info=devDependencie
[daviddm-dev-image]: https://david-dm.org/moqada/eslint-config/dev-status.svg
