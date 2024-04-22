import { footerContent } from "$lib/logic/footer.svelte";
import { headerContent } from "$lib/logic/header.svelte";
import { homeContent } from "$lib/logic/home.svelte";
import { newsContent } from "$logic/news.svelte";
import { blogContent } from "$logic/blog.svelte";

export const content = {
	headerWC: {
		component: headerContent.component ?? "",
		url: headerContent.url ?? "",
	},
	footerWC: {
		component: footerContent.component ?? "",
		url: footerContent.url ?? "",
	},
	home: homeContent.data ?? {},
	latestNews: newsContent.latestNews ?? [],
	latestBlogArticles: blogContent.latestBlogArticles ?? {},
	blog: blogContent.data ?? {},
};
export default content;
type Content = typeof content;
