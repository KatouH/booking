module.exports = {
  extends: ['plugin:@magicspace/default', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
};
