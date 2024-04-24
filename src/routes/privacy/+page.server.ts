import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const meta = {
		title: "Verde | Privacy Policy",
		shortTitle: "Verde Home",
		description: "Privacy Policy for Verde Climate Solutions",
		robotsFollow: false,
		plausibleAnalytics: true,
	};

	return {
		meta,
	};
};
