interface Data {
	[key: string]: string | object | undefined;
}

// import news store
import { newsContent } from "$logic/news.svelte";

// import YAML
import YAML from "yaml";

// import raw data
import { default as dataFooterRaw } from "$data/footer.yaml?raw";

// parse raw data
const footerData = YAML.parse(dataFooterRaw);

export function createFooter() {
	// constants
	const name = "site-footer-fat";
	const url = `https://cdn.lj.dev/e/wc/${name}@0.1.1.min.js`;
	const attributes = [
		"attribution-data",
		"color-accent",
		"color-background",
		"color-primary",
		"color-secondary",
		"copyright-text",
		"buttons-data",
		"latest-news-data",
		"legal-links-data",
		"link-lists-col-1-data",
		"link-lists-col-2-data",
		"news-stories-data",
	];

	let news = newsContent.footerNews;

	function buildAttribute(att: string, data: Data) {
		if (data[att] && typeof data[att] === "object") {
			return `${att}='${JSON.stringify(data[att])}'`;
		} else if (data[att] && typeof data[att] === "string") {
			return `${att}="${data[att]}"`;
		}
	}

	function buildAttributes(data: Data) {
		return attributes.map((att) => buildAttribute(att, data)).join(", ");
	}

	function mergeData() {
		return { ...footerData, "news-stories-data": news };
	}

	let data = $state(mergeData());
	let component = $derived(`<${name} ${buildAttributes(data)}></${name}>`);

	return {
		get attributes() {
			return attributes;
		},
		get data() {
			return data;
		},
		get component() {
			return component;
		},
		get url() {
			return url;
		},
	};
}

export const footerContent = createFooter();
