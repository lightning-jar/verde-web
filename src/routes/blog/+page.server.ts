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
	const { articles, page }: { articles: Article[]; page: Page } =
		locals.content.blog;

	return {
		articles,
		header: page.header,
		meta: page.meta,
	};
};
