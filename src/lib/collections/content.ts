import { footerContent } from "$lib/logic/footer.svelte";
import { headerContent } from "$lib/logic/header.svelte";
import { homeContent } from "$lib/logic/home.svelte";

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
};
export default content;
type Content = typeof content;
