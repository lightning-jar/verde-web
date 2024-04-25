// preprocessor
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { default as sveltePreprocess } from "svelte-preprocess";
export { sveltePreprocess };

// adapter
// import adapter from '@sveltejs/adapter-auto';
import { default as adapterVercel } from "@sveltejs/adapter-vercel";
export { adapterVercel };

// svelte aliases
export const aliasList = {
	$assets: "./src/lib/assets",
	$atoms: "./src/lib/components/atoms",
	$collections: "./src/lib/collections",
	$components: "./src/lib/components",
	$data: "./src/lib/data",
	$logic: "./src/lib/logic",
	$molecules: "./src/lib/components/molecules",
	$organisms: "./src/lib/components/organisms",
	$templates: "./src/lib/components/templates",
	$pages: "./src/lib/components/pages",
	$queries: "./src/lib/queries",
	$routes: "./src/routes",
	$settings: "./src/lib/settings",
	$stores: "./src/lib/stores",
	$tools: "./src/lib/components/tools",
	$types: "./src/lib/types",
	$utils: "./src/lib/utils",
	$wc: "./src/lib/components/wc",
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterVercel(),
		alias: aliasList,
		prerender: { handleHttpError: "warn" },
	},
};

export default config;
