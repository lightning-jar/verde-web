import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

// from eslint-config-prettier, rules to override ESLint formatting rules that might conflict with Prettier
import prettier from "eslint-config-prettier";
const prettierRules = prettier.rules;

// oxlint
import oxlint from "eslint-plugin-oxlint";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs["flat/recommended"],
	oxlint.configs["flat/recommended"],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		rules: {
			...prettierRules,
			//- these are problems with pug syntax in svelte components
			"@typescript-eslint/no-unused-vars": "off",
			"svelte/valid-compile": "off",
			"svelte/no-at-html-tags": "warn",
		},
	},
	{
		ignores: [
			"**/vite.config.js",
			"**/.*",
			"**/.svelte-kit/**",
			"**/output/**",
			"**/.vercel/**",
			"**/build/**",
			"**/package/**",
			"**/yarn.lock",
			"**/package-lock.json",
			"**/pnpm-lock.yaml",
			"**/static/**",
			"**/dist/**",
		],
	},
];

export default config;
