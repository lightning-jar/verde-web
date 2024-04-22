import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { billboard, blog, meta, resources, solutions, values } = content.home;
	const { latestNews } = content;
	const { latestBlogArticles } = content;

	return {
		billboard,
		blog,
		latestBlogArticles,
		latestNews,
		meta,
		resources,
		solutions,
		values,
	};
};
