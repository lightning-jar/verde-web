interface Data {
	[key: string]: string | object | undefined;
}

// import YAML
import YAML from "yaml";

// import raw data
import { default as headerDataRaw } from "$data/header.yaml?raw";

// parse raw data
const headerData = YAML.parse(headerDataRaw);

export function createHeader() {
	// constants
	const name = "site-header";
	const url = `https://cdn.lj.dev/e/wc/${name}@0.1.1.min.js`;
	const attributes = [
		"border-bottom-color",
		"border-bottom-size",
		"brand-image-alt",
		"brand-image-url",
		"brand-link-title",
		"button-link-label",
		"button-link-title",
		"button-link-url",
		"color-accent",
		"color-background",
		"color-primary",
		"container-height",
		"menus-data",
		"stylesheet",
	];

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

	let data = $state(headerData);

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

export const headerContent = createHeader();
