module.exports = {
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'expo',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    plugins: ['reactotron', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { semi: true }],
        // TypeScript Rules
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/ban-ts-comment': ['warn'], // Allow but discourage
        '@typescript-eslint/no-explicit-any': ['warn'], // Warn instead of disabling
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-var-requires': 'off',
        // ESLint
        'no-use-before-define': 'off',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    { name: 'react', importNames: ['default'], message: "Import named exports from 'react' instead." },
                ],
            },
        ],
        // React Rules
        'react/prop-types': 'off',
        // React Native Rules
        'react-native/no-raw-text': ['error', { skip: ['Text', 'TranslatableText'] }],
        // Reactotron
        'reactotron/no-tron-in-production': 'error',
        // Standard Config Overrides
        'comma-dangle': 'off',
        'no-global-assign': 'off',
        quotes: 'off',
        'space-before-function-paren': 'off',
    },
};
