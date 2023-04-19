module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': [
      'error',
      { ignore: ['eslint-enable'] }
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'unicorn/filename-case': [
      'error',
      {
        'ignore': [
          'vite-env.d.ts'
        ],
        'cases': {
          'camelCase': true,
          'pascalCase': true
        }
      }
    ],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ProcessEnv: true,
          env: true
        }
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  }
};
