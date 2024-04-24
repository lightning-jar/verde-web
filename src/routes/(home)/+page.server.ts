import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	const { content } = locals;

	// get home content
	const { billboard, blog, meta, resources, solutions, values } = content.home;
	const { latestNews } = content.news;
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
