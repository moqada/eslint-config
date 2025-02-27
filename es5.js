import mainConfig from './index.js';

export default [
  ...mainConfig,
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script'
    },
    rules: {
      /**
       * Possible Errors
       */
      // top-level 以外の関数定義禁止 (ES2015 or later)
      // http://eslint.org/docs/rules/no-inner-declarations
      'no-inner-declarations': 0,

      /**
       * Best Practices
       */
      // var をスコープ最上部に強制
      // http://eslint.org/docs/rules/vars-on-top
      'vars-on-top': 2,
      // マジックナンバー禁止
      // http://eslint.org/docs/rules/no-magic-numbers
      'no-magic-numbers': [2, {enforceConst: false}], // const 縛りを解除

      /**
       * Variables
       */
      // 変数定義のスタイル
      // http://eslint.org/docs/rules/init-declarations
      'init-declarations': 0,

      /**
       * Stylistic Issues
       */
      // 関数名を持たせるための function 式を強制
      // http://eslint.org/docs/rules/func-names
      'func-names': 0,

      /**
       * ECMAScript 6
       */
      // arrow function body の中括弧スタイル
      // http://eslint.org/docs/rules/arrow-body-style
      'arrow-body-style': 0,
      // arrow function の括弧スタイル
      // http://eslint.org/docs/rules/arrow-parens
      'arrow-parens': 0,
      // arrow function の空白スタイル
      // http://eslint.org/docs/rules/arrow-spacing
      'arrow-spacing': 0,
      // コンストラクタの super 有無
      // http://eslint.org/docs/rules/constructor-super
      'constructor-super': 0,
      // generator の * の空白スタイル
      // http://eslint.org/docs/rules/generator-star-spacing
      'generator-star-spacing': 0,
      // class への再代入禁止
      // http://eslint.org/docs/rules/no-class-assign
      'no-class-assign': 0,
      // 条件式とまぎらわしいarrow functionを警告
      // http://eslint.org/docs/rules/no-confusing-arrow
      'no-confusing-arrow': 0,
      // const への再代入禁止
      // http://eslint.org/docs/rules/no-const-assign
      'no-const-assign': 0,
      // クラスメンバ名の重複禁止
      // http://eslint.org/docs/rules/no-dupe-class-members
      'no-dupe-class-members': 0,
      // importの重複禁止
      // http://eslint.org/docs/rules/no-duplicate-imports
      'no-duplicate-imports': 0,
      // コンストラクタ内 super の前の this 禁止
      // http://eslint.org/docs/rules/no-this-before-super
      'no-this-before-super': 0,
      // 不要なcomputed propertiesを禁止
      // http://eslint.org/docs/rules/no-useless-computed-key
      'no-useless-computed-key': 0,
      // 不要なコンストラクタ関数の禁止
      // http://eslint.org/docs/rules/no-useless-constructor
      'no-useless-constructor': 0,
      // import/export/destructuredでの不要なリネーム禁止
      // http://eslint.org/docs/rules/no-useless-rename
      'no-useless-rename': 0,
      // var 禁止
      // http://eslint.org/docs/rules/no-var
      'no-var': 0,
      // ES6 のオブジェクト省略表現
      // http://eslint.org/docs/rules/object-shorthand
      'object-shorthand': 0,
      // コールバックに arrow function の利用提案
      // http://eslint.org/docs/rules/prefer-arrow-callback
      'prefer-arrow-callback': 0,
      // const の利用提案
      // http://eslint.org/docs/rules/prefer-const
      'prefer-const': 0,
      // 分割代入の利用提案
      // https://eslint.org/docs/rules/prefer-destructuring
      'prefer-destructuring': 0,
      // 定数値のparseIntで数値リテラルの利用を提案
      // http://eslint.org/docs/rules/prefer-numeric-literals
      'prefer-numeric-literals': 0,
      // Reflect メソッドの利用提案
      // http://eslint.org/docs/rules/prefer-reflect
      'prefer-reflect': 0,
      // rest-paramsの利用提案 (arguments禁止)
      // http://eslint.org/docs/rules/prefer-rest-params
      'prefer-rest-params': 0,
      // Spread オペレータの利用提案
      // http://eslint.org/docs/rules/prefer-spread
      'prefer-spread': 0,
      // 文字列連結にテンプレートリテラルの利用提案
      // http://eslint.org/docs/rules/prefer-template
      'prefer-template': 0,
      // yield の必須化
      // http://eslint.org/docs/rules/require-yield
      'require-yield': 0,
      // spread演算子とrest演算子の空白スタイル
      // http://eslint.org/docs/rules/rest-spread-spacing
      'rest-spread-spacing': 0,
      // Symbolの第一引数(説明)を強制
      // http://eslint.org/docs/rules/symbol-description
      'symbol-description': 0,
      // テンプレートリテラルの`${..}`の空白スタイル
      // http://eslint.org/docs/rules/template-curly-spacing
      'template-curly-spacing': 0,
      // yieldの*まわりの空白スタイル
      // http://eslint.org/docs/rules/yield-star-spacing
      'yield-star-spacing': 0
    }
  }
];
