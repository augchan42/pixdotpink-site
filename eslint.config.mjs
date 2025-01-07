import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylisticPlugin from '@stylistic/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "*.min.js",
    ]
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      '@stylistic': stylisticPlugin,
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: '18.2',
        runtime: 'automatic'
      }
    },
    rules: {
      // React rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Next.js rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      // Stylistic rules
      "@stylistic/indent": ["error", 2, { "SwitchCase": 1 }],
      "@stylistic/no-tabs": "error",
      "@stylistic/member-delimiter-style": ["error", {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }]      
    }
  }
];

export default eslintConfig;