import type { PageServerLoad } from "./$types";

// import { newsContent } from "$logic/news.svelte";
// const latestNews = newsContent.latestNews;

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { billboard, blog, messaging, meta, resources, solutions } =
		content.home;
	const { latestBlog } = content.blog;
	const { latestNews } = content.news;

	return {
		billboard,
		blog,
		latestBlog,
		latestNews,
		messaging,
		meta,
		resources,
		solutions,
	};
};
