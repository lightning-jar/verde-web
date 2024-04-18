// import svelte store functions
import { writable } from "svelte/store";

// import data types
import type { NavDataItem } from "lj-svelte-ui";

// menu data
class NavDatum {
	label: string;
	type?: string;
	hover?: string;
	items?: NavDataItem[] = [];
	parentMenu?: string;
	relativePath?: string;
	externalUrl?: string;
	constructor(label: string) {
		this.label = label;
	}
}

const solutionsMenuItems: NavDataItem[] = [
	{
		label: "Our Portfolio",
		relativePath: "/portfolio",
	},
	{
		label: "For Investors",
		relativePath: "/investors",
	},
	{
		label: "For Developers",
		relativePath: "/developers",
	},
	{
		label: "How Carbon Streaming Works",
		relativePath: "/carbon-streaming",
	},
];

const resourcesMenuItems: NavDataItem[] = [
	{
		label: "Blog",
		type: "link",
		relativePath: "/blog",
	},
	{
		label: "News",
		type: "link",
		relativePath: "/news",
	},
	{
		label: "FAQs",
		type: "link",
		relativePath: "/faqs",
	},
	{
		label: "Glossary",
		type: "link",
		relativePath: "/glossary",
	},
];

export const navData: NavDataItem[] = [
	// {
	// 	label: "Solutions",
	// 	type: "menu",
	// 	mobileLabel: "Solutions",
	// 	items: solutionsMenuItems,
	// },
	{
		label: "Carbon Credits",
		type: "link",
		relativePath: "/#purchasing-carbon-credits",
	},
	{
		label: "Projects",
		type: "link",
		relativePath: "/#marketing-carbon-credits",
	},
	// {
	// 	label: "Portfolio",
	// 	type: "link",
	// 	relativePath: "/carbon-credits",
	// },
	// {
	// 	label: "About",
	// 	type: "link",
	// 	relativePath: "/about",
	// },
	// {
	// 	label: "Resources",
	// 	type: "menu",
	// 	items: resourcesMenuItems,
	// },
	{
		label: "Contact",
		type: "button",
		title: "Get in touch with SecureLogix",
		relativePath: "/contact",
	},
];

// function get all objects where type == "flyout" from navData
export const flyoutNavItems = navData.filter(
	(item) => item.type === "flyout" || (item.items && item.items.length > 0),
);

// nav content
export const navContent = writable(navData);

// mobile menu state
export const mobileMenuOpen = writable(false);

export const visiblePanel = writable("primary");
