// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs20.x",
};

// svelte functions
import { sequence } from "@sveltejs/kit/hooks";

// // Sentry
// import * as Sentry from "@sentry/sveltekit";
// import { handleErrorWithSentry } from "@sentry/sveltekit";

// // initialize sentry
// Sentry.init({
// 	dsn: "https://4a8d945bea35470285e30b0de3d5580a@o4505247956860928.ingest.sentry.io/4505561997246464",
// 	// Performance Monitoring
// 	tracesSampleRate: 0, // Capture 100% of the transactions. Adjust this value in production as necessary.
// });

// // handle errors with sentry
// export const handleError = handleErrorWithSentry();

// handle function
import type { Handle } from "@sveltejs/kit";

// reach out to data source to refresh content
import { updateNews } from "$lib/fetch/fetchNews.server";
updateNews(true);

// import collections
import content from "$collections/content.svelte";
import redirects from "$collections/redirects";
import settings from "$collections/settings";
import siteMeta from "$collections/siteMeta";
import utils from "$collections/utils";

export const handle: Handle =
	// sentry
	// Sentry.sentryHandle()
	// null,

	async ({ event, resolve }) => {
		// pass data to locals
		event.locals = {
			content,
			redirects,
			settings,
			siteMeta,
			utils,
		};

		const response = await resolve(event);
		return response;
	};
