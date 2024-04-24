import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	interface Page {
		header: {
			headline: string;
			text: string;
		};
		meta: PageMeta;
	}

	// get content
	const { content } = locals;
	const { articles, page }: { articles: Article[]; page: Page } = content.blog;

	return {
		articles,
		header: page.header,
		meta: page.meta,
	};
};
