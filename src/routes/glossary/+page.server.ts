import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { header, meta } = content.glossaryPage as GlossaryPageContent;
	const glossaryEntries = content.glossaryPage?.glossaryEntries ?? [];

	return {
		glossaryEntries,
		header,
		meta,
	};
};
