module.exports = {
  extends: ['plugin:import/errors'],
  plugins: ['react', 'react-hooks'],
  settings: {
    pragma: 'React',
    version: 'detect',
  },
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    process: true,
    require: true,
    module: true,
    exports: true,
    __DEV__: true,
    __PROD__: true,
    __APP_VERSION__: true,
    __APP_QUERY_SELECTOR__: true,
    clients: true,
    Promise: true,
    _loader: true,
    __webpack_public_path__: true,
  },
  rules: {
    // "indent": [2, 4, { "SwitchCase": 1 }],
    // TODO: Temporary disable 'indent' to fix build
    indent: 'off',
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    semi: [2, 'always'],
    'valid-typeof': 2,
    'keyword-spacing': 2,
    'space-infix-ops': 2,
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': [2, 'always'],
    'eol-last': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'no-multi-spaces': 2,
    'no-var': 2,
    'no-debugger': 2,
    'no-undef': 2,
    'no-empty': 2,
    'no-extra-semi': 2,
    'no-unreachable': 2,
    'no-extra-boolean-cast': 2,
    'no-unused-expressions': [2, { allowTernary: true }],
    'no-inner-declarations': 2,
    'no-irregular-whitespace': 2,
    'no-extra-parens': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-unused-vars': [2, { args: 'none' }],
    // 'multiline-comment-style': [2, 'separate-lines'],
    'operator-linebreak': [2, 'after'],
    eqeqeq: 2,
    'padded-blocks': [2, 'never'],
    'no-trailing-spaces': 2,
    // 'no-ramda-path': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/no-unknown-property': [2],
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 2, // Checks effect dependencies
  },
};
