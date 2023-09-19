module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint',
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'react/no-deprecated': 'off'
    },
    globals: {
        __IS_DEV__: true,
    },
}
