import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { header, meta, sidebar } = content.contactPage;

	return {
		header,
		meta,
		sidebar,
	};
};
