import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params, url }) {
	const { slug } = params;

	// get content
	const { content, utils } = locals;
	const { articles }: { articles: Article[] } = content.news;

	// get article
	// const article = articles.find((article) => article.slug === slug);
	const articleIndex = articles.findIndex((article) => article.slug === slug);
	const article = articles[articleIndex];
	const nextArticle = articles[articleIndex + 1];
	const nextArticleSlug = nextArticle ? nextArticle.slug : articles[0].slug;
	const nextArticleTitle = nextArticle
		? nextArticle.headline
		: articles[0].headline;

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
		nextArticleSlug,
		nextArticleTitle,
		meta,
	};
};
