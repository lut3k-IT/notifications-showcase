module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    semi: ['warn', 'always'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react', '^@?\\w'],
          [
            '^(@|@company|@ui|components|utils|hooks|assets|config|api|types|vendored-lib|context)(/.*|$)',
          ],
          ['^\\u0000'],
          ['^components'],
          ['^\\u0000'],
          [
            '^src(\\/.*|$)',
            '^features(\\/.*|$)',
            '^assets(\\/.*|$)',
            '^components(\\/.*|$)',
          ],
          ['^\\u0000'],
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          ['^.+\\.s?css$'],
          ['^.+\\.(jpg|jpeg|png|svg)$'],
        ],
      },
    ],
  },
};
