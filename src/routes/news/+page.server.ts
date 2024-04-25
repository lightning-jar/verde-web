import type { PageServerLoad } from "./$types";
import { newsContent } from "$logic/news.svelte";

export const load: PageServerLoad = async function ({ locals }) {
	interface Page {
		header: {
			headline: string;
			text: string;
		};
		meta: PageMeta;
	}

	// get content
	const { articles, page }: { articles: Article[]; page: Page } = newsContent;

	return {
		articles,
		header: page.header,
		meta: page.meta,
	};
};
