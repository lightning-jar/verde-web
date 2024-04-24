import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { entries, page } = content.glossary;

	return {
		entries,
		page,
	};
};
