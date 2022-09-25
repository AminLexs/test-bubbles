module.exports = {
    root: true,
    extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {},
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-underscore-dangle': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-array-index-key': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'padding-line-between-statements': [
            2,
            // Always require blank lines after import, except between imports
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            // Always require blank lines before and after every sequence of variable declarations and export
            { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
            { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] },
            // Always require blank lines before and after class declaration, if, do/while, switch, try
            { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
            { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },
            // Always require blank lines before return statements
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'import/prefer-default-export': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'consistent-return': 'off',
        'no-restricted-imports': ['error', { patterns: ['../*'] }],
        indent: [0, 0],
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'eslint-comments', 'import'],
};