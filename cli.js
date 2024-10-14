import nodeConfig from './node.js';

export default [
  ...nodeConfig,
  {
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
      'no-process-exit': 0
    }
  }
];
