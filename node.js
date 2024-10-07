import globals from 'globals';
import nPlugin from 'eslint-plugin-n';

export default [
  {
    languageOptions: {globals: globals.node},
    plugins: {n: nPlugin},
    rules: {
      // exportsスタイル強制
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
      'n/exports-style': [2, 'module.exports'],
      // depreactedなAPIを警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
      'n/no-deprecated-api': 2,
      // package.jsonにないモジュールのimportを禁止
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
      'n/no-extraneous-import': 2,
      // package.jsonにないモジュールのrequireを禁止
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
      'n/no-extraneous-require': 2,
      // import先が存在しない場合警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
      'n/no-missing-import': 2,
      // require先が存在しない場合警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
      'n/no-missing-require': 2,
      // binがpackage.jsonのfilesにない場合に警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
      'n/no-unpublished-bin': 2,
      // publishされないモジュールをimportした場合警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
      'n/no-unpublished-import': 2,
      // publishされないモジュールをrequireeした場合警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
      'n/no-unpublished-require': 2,
      // 当該Node.jsバージョンで未サポートのSyntaxを警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
      'n/no-unsupported-features/es-syntax': 2,
      // 当該Node.jsバージョンで未サポートの組み込みAPIを警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
      'n/no-unsupported-features/node-builtins': 2,
      // shebangが不正に利用されていた場合警告
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
      'n/shebang': 2
    }
  }
];
