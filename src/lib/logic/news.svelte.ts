// import YAML
import YAML from "yaml";

// import raw data
import { default as newsArticlesDataRawYAML } from "$data/news.yaml?raw";
import { default as newsPageDataRawYAML } from "$data/newsPage.yaml?raw";

// parse raw data
const newsArticlesData: Article[] = YAML.parse(newsArticlesDataRawYAML);
const newsPageData = YAML.parse(newsPageDataRawYAML);

export function createNews() {
	let data = $state(newsArticlesData);
	let page = $state(newsPageData);

	let footerNews = $derived.by(() => {
		const latest = data.slice(0, 3);

		const links: Link[] = latest.map((news: Link) => {
			return {
				label: news.headline,
				url: `news/${news.slug}`,
			} as Link;
		});

		return links;
	});

	let latestNews = $derived.by(() => {
		const latest = data.slice(0, 2);

		const links = latest.map((news: Link) => {
			return {
				headline: news.headline,
				url: news.slug,
				image: news.image,
			};
		});

		return links;
	});

	return {
		get articles() {
			return data;
		},
		set articles(value: Article[]) {
			if (!value) return;
			console.log("setting articles");
			data = value;
			console.log(data);
			return;
		},
		get footerNews() {
			return footerNews;
		},
		get latestNews() {
			return latestNews;
		},
		get page() {
			return page;
		},
	};
}

export const newsContent = createNews();
