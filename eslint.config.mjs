// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
        rules: {
            'indent': ['error', 2, { SwitchCase: 1 }],
            'linebreak-style': ['error', 'unix'],
            'object-curly-spacing': ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'array-bracket-spacing': ['error', 'never'],
            'no-trailing-spaces': 'error',
            'space-before-function-paren': ['error', 'never'],
            'eol-last': ['error', 'always'],
            'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'no-multi-spaces': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
            'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'never', afterOpening: 'never', beforeClosing: 'never' }],
            'react/jsx-indent': ['error', 2],
            'react/jsx-indent-props': ['error', 2],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'never', prev: '*', next: 'return' },
                { blankLine: 'never', prev: '*', next: 'expression' }
            ]
        }
    }
);