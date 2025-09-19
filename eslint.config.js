import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config([
    globalIgnores(['dist', 'node_modules', 'build', 'coverage']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            eslintConfigPrettier
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            import: importPlugin
        },
        rules: {
            'no-console': 'error',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before'
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after'
                        }
                    ],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always'
                }
            ]
        }
    }
])
