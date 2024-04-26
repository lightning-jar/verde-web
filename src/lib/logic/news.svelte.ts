// import YAML
import YAML from "yaml";

import { fetchNewsPage } from "$lib/fetch/fetchNews.svelte";

console.log("fetching news articles");
const newsPageData = (await fetchNewsPage(true)) as ArticlesPage;

export function createNews() {
	let header = $state(newsPageData.header);
	let meta = $state(newsPageData.meta);
	let articles = $state(newsPageData.articles);

	return {
		get articles() {
			return articles;
		},
		set articles(value: Article[]) {
			if (!value) return;
			articles = value;
			return;
		},
		get footerNews() {
			return articles.slice(0, 3)?.map((news: Link) => {
				return {
					label: news.headline,
					url: news.slug,
				};
			});
		},
		get latestNews() {
			return articles.slice(0, 3)?.map((news: Link) => {
				return {
					headline: news.headline,
					url: news.slug,
					image: news.image,
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

export const newsContent = createNews();
