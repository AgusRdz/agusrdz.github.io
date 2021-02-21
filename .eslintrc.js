const RULES = {
  OFF: 'off',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'import/no-dynamic-require': RULES.WARN
    // 'no-unused-vars': RULES.OFF
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
