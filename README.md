# XP Drilling

A modern React + TypeScript + Vite project for drilling operations management.

**Live Site:** [xpdrilling.com](https://xpdrilling.com/)  
**Author:** [matchoudi](https://github.com/LionRouge1/)

## Overview

This project provides a minimal yet powerful setup for building production-ready React applications with TypeScript, Vite, HMR (Hot Module Replacement), and ESLint configuration.

## Available Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Fast Refresh with Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Fast Refresh with SWC

## ESLint Configuration

For production applications, enable type-aware lint rules:

**Step 1:** Update `parserOptions` in your ESLint config:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

**Step 2:** Replace recommended configs:
- Use `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`

**Step 3:** Install and configure React ESLint plugin:

```js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

