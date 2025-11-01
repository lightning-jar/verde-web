// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs20.x",
};

// import Sentry
// import * as Sentry from "@sentry/sveltekit";

// svelte functions
import { sequence } from "@sveltejs/kit/hooks";

// handle function
import type { Handle } from "@sveltejs/kit";

// import collections
import content from "$collections/content.svelte";
import redirects from "$collections/redirects";
import settings from "$collections/settings";
import siteMeta from "$collections/siteMeta";
import utils from "$collections/utils";

// Sentry.init({
// 	dsn: "https://1b34710a44c60e438486a0a0c0db3209@o4505247956860928.ingest.us.sentry.io/4507181233274880",
// 	tracesSampleRate: 1,
// });

export const handle: Handle = sequence(
	// sentry
	// Sentry.sentryHandle(),

	// locals
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
	},
);

// handle error
// export const handleError = Sentry.handleErrorWithSentry();
