var extend = require('extend');
var react = require('./react');

module.exports = extend(true, {}, react, {
  'plugins': ['react', 'react-native'],
  'globals': {
    '__DEV__': true
  },
  'rules': {
    // 未利用のStyleを警告
    // https://github.com/intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 2,
    // Android/iOS用のコンポーネントの分離を推奨
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 2
  }
});
