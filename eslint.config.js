import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Marks variables used when referenced in JSX (e.g. <motion.span />),
// which core no-unused-vars does not do without eslint-plugin-react.
const jsxVars = {
  plugins: {},
  rules: {
    'jsx-uses-vars': {
      create: (context) => ({
        JSXOpeningElement(node) {
          const mark = (name) => context.sourceCode.markVariableAsUsed(name, node)
          if (node.name.type === 'JSXIdentifier') {
            if (/^[a-z]/.test(node.name.name)) return
            mark(node.name.name)
          } else if (node.name.type === 'JSXMemberExpression') {
            let obj = node.name.object
            while (obj.type === 'JSXMemberExpression') obj = obj.object
            if (obj.type === 'JSXIdentifier') mark(obj.name)
          }
        },
      }),
    },
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      local: jsxVars,
    },
    rules: {
      'local/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
