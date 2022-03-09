module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended'    
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'eqeqeq': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'indent': ['error', 2],
    'quotes': ['error','single'],
    'semi': ['error', 'always'],
    'prefer-const': 'error',
    //'no-alert': 'error',,
  },
};
