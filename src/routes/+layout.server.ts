// set to prerender = true to enable prerendering
export const prerender = true;

// types
import type { LayoutServerLoad } from "./$types";

// load function
export const load: LayoutServerLoad = async function ({ url, locals }) {
	// get pathname
	const pathname = url.pathname;

	// get slug
	const slug = pathname.split("/").pop();

	// unpack locals
	const { content, redirects, settings, siteMeta, utils } = locals;

	//redirects
	redirects.forEach((item) => {
		if (pathname == item[0] || pathname.slice(0, -1) == item[0]) {
			throw utils.redirect(301, item[1]);
		}
	});

	// unpack site meta
	const { dev, version } = siteMeta;

	// unpack settings
	const { siteDomain, siteName } = settings;

	// unpack content
	const { headerWC, footerWC } = content;

	return {
		dev,
		// domain,
		headerWC,
		footerWC,
		version,
		pathname,
		siteDomain,
		siteName,
		slug,
	};
};
