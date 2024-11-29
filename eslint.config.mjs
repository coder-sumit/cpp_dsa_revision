// @ts-check

import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    eslint.configs.recommended, // Base ESLint config
    {
        files: ['**/*.ts', '**/*.tsx'], // Apply to TypeScript files
        languageOptions: {
            parser: tsParser, // Use TypeScript parser
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json', // Ensure this points to your tsconfig.json
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            // Override and ensure the rule is correctly set
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
            'no-undef': 'off', // To fix 'console' is not defined issue
            'no-console': 'error',
            'dot-notation': 'error',
        },
    },
    {
        ignores: [
            'dist',
            'node_modules',
            'eslint.config.mjs',
            'jest.config.js',
        ], // Ignore dist and node_modules
    },
];
