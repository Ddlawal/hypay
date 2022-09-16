module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'header', 'testing-library', 'jest-dom', 'no-only-tests'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
        'next/core-web-vitals',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-expect-error': 'allow-with-description',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        'no-only-tests/no-only-tests': 'error',
        'react/jsx-no-target-blank': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        curly: 'error',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}
