interface Data {
	[key: string]: string | object | undefined;
}

// import YAML
import YAML from "yaml";

// import raw data
import { default as footerDataRawYAML } from "$data/footer.yaml?raw";

// import news data
import { newsContent } from "$logic/news.svelte";

// parse raw data
const footerDataRaw = YAML.parse(footerDataRawYAML);

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

	const data = footerDataRaw;
	const mergedData = {
		...data,
		"news-stories-data": newsContent.footerNews,
	};

	function buildAttributes(data: Data) {
		return attributes.map((att) => buildAttribute(att, data)).join(", ");
	}

	function buildAttribute(att: string, data: Data) {
		if (data[att] && typeof data[att] === "object") {
			return `${att}='${JSON.stringify(data[att])}'`;
		} else if (data[att] && typeof data[att] === "string") {
			return `${att}="${data[att]}"`;
		}
	}

	return {
		get attributes() {
			return attributes;
		},
		get data() {
			return data;
		},
		get component() {
			return `<${name} ${buildAttributes(mergedData)}></${name}>`;
		},
		get url() {
			return url;
		},
		get footerWC() {
			return {
				component: this.component,
				url: this.url,
			};
		},
	};
}

export const footerContent = createFooter();
