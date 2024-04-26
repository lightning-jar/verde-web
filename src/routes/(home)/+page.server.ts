import type { PageServerLoad } from "./$types";

import { newsContent } from "$logic/news.svelte";
const latestNews = newsContent.latestNews;

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { billboard, blog, meta, resources, solutions, values } = content.home;
	const { latestBlog } = content.blog;

	return {
		billboard,
		blog,
		latestBlog,
		latestNews,
		meta,
		resources,
		solutions,
		values,
	};
};
