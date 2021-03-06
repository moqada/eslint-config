var extend = require('extend');
var node = require('./node');

module.exports = extend(true, {}, node, {
  rules: {
    /**
     * Possible Errors
     */
    // console 禁止
    // http://eslint.org/docs/rules/no-console
    'no-console': 0,

    /**
     * Node.js
     */
    // process.exit 禁止
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 0,
  }
});
