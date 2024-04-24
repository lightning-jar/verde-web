import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params, url }) {
	const { slug } = params;

	// get content
	const { content, utils } = locals;
	const { articles }: { articles: Article[] } = content.blog;

	// get article
	const article = articles.find((article) => article.slug === slug);
	//console.log(article);

	// if article not found, return 404
	if (!article) {
		return utils.redirect(404);
	}

	const meta = {
		title: article.headline,
		description: article.excerpt,
		robotsFollow: true,
		plausibleAnalytics: true,
	};

	return {
		article,
		meta,
	};
};
