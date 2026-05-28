import { defineConfig } from "eslint/config";
import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
//import prettier from 'eslint-config-prettier/flat'
//import perfectionist from 'eslint-plugin-perfectionist'
import tseslint from 'typescript-eslint'
import ts from "typescript";

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    //prettier,
    //perfectionist.configs['recommended-natural'],
]);
