module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'array-bracket-newline': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { before: false, after: true }],
        'indent': ['error', 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'linebreak-style': [0, 'error', 'windows'],
        'max-len': ['error', { code: 120 }],
        'no-duplicate-imports': ['error', {
            includeExports: true
        }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'space-in-parens': ['error', 'never']
    }
};
