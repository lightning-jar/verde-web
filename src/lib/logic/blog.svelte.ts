import { fetchBlogPage } from "$lib/fetch/fetchBlog.svelte";

console.log("fetching blog page content");
const blogPageData = (await fetchBlogPage(true)) as ArticlesPage;

export function createBlog() {
	let header = $state(blogPageData.header);
	let meta = $state(blogPageData.meta);
	let articles = $state(blogPageData.articles);

	return {
		get articles() {
			return articles;
		},
		set articles(value: Article[]) {
			if (!value) return;
			articles = value;
			return;
		},
		get latestBlog() {
			return articles.slice(0, 20)?.map((article: Link) => {
				return {
					headline: article.headline,
					url: article.slug,
					image: article.image,
				};
			});
		},
		get page() {
			return {
				header,
				meta,
				articles,
			};
		},
	};
}

export const blogContent = createBlog();
