// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['src/**/*.{js,ts,tsx}'], // Target .js, .ts, and .tsx files in src/*
        ignorePatterns: ['reportWebVitals.ts'], // Ignore the specified file
        ...tseslint.config(
            eslint.configs.recommended,
            ...tseslint.configs.strict,
            ...tseslint.configs.stylistic,
        ),
    },
];
