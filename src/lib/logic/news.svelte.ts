// import YAML
import YAML from "yaml";

// import raw data
import { default as newsDataRaw } from "$data/news.yaml?raw";

// parse raw data
const newsData = YAML.parse(newsDataRaw);

export function createNews() {
	let data = $state(newsData);

	let footerNews = $derived.by(() => {
		const latest = data.slice(0, 3);

		const links: Link[] = latest.map((news: Link) => {
			return {
				label: news.headline,
				url: news.slug,
			} as Link;
		});

		return links;
	});

	return {
		get data() {
			return data;
		},
		get footerNews() {
			return footerNews;
		},
	};
}

export const newsContent = createNews();