import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...typescriptEslint.configs.recommended.rules,
            ...react.configs.recommended.rules,
        },
    },
    {
        files: ["**/*.test.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];