import jsdocPlugin from 'eslint-plugin-jsdoc';

export default [
  {
    plugins: {jsdoc: jsdocPlugin},
    rules: {
      /**
       * jsdoc
       */
      // https://github.com/gajus/eslint-plugin-jsdoc#check-types
      // 型名(number, string, etc...)が正しいか確認
      'jsdoc/check-types': 0,
      // https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
      // @paramにtypeを強制
      'jsdoc/require-param-type': 0
    }
  }
];
