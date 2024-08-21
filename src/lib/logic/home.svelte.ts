import { fetchHomePage } from "$lib/fetch/fetchHomePage.svelte";

console.log("fetching home page content");
const homePageData = (await fetchHomePage(true)) as HomePageContent;

export function createHome() {
	const data = homePageData;

	return {
		get page() {
			return data;
		},
	};
}

export const homeContent = createHome();
