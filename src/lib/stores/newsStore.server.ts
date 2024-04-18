// store functions
import { derived, readable } from "svelte/store";

// import data
import rawNewsData from "$lib/data/news.json";

// main store
export const newsStore = readable(rawNewsData);

// footer latest news store
export const footerNewsStore = derived(newsStore, ($newsStore) => {
	const latest = $newsStore.slice(0, 3);

	const links: Link[] = latest.map((news) => {
		return {
			label: news.headline,
			url: news.slug,
		} as Link;
	});

	return links;
});

// types
export type NewsStore = typeof newsStore;
export type FooterNewsStore = typeof footerNewsStore;
