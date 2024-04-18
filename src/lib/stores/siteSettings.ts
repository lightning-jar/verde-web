import { readable, get } from "svelte/store";

export const siteName = readable("Verde Climate Solutions");
export const siteAuthor = readable("Verde Staff");
export const siteSettings = readable({
	siteName: get(siteName),
	siteAuthor: get(siteAuthor),
	siteCanonicalUrl: "https://verdeclimatesolutions.com",
});
