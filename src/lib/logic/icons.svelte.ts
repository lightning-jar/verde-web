// import YAML
import YAML from "yaml";

interface IconSubElement {
	tag: string;
	d: string;
}

interface IconData {
	classes: string;
	height: string;
	width: string;
	icons: { [key: string]: IconSubElement[] };
}

// import raw data
import { default as iconsDataRaw } from "$data/icons.yaml?raw";

// parse raw data
const iconsData = YAML.parse(iconsDataRaw) as IconData;

export function createIcons() {
	const data = iconsData;
	const height = data.height;
	const width = data.width;
	const classes = data.classes;

	function buildIcon(iconName: string): string {
		const icon = data.icons[iconName];
		const svg = icon
			? `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="${classes}"
        height="${height}"
        width="${width}"
        viewBox="0 0 ${width} ${height}">
        ${icon
					.map((subIcon) => {
						return `<${subIcon.tag} d="${subIcon.d}" />`;
					})
					.join("")}
      </svg>`
			: "";
		return svg;
	}

	return {
		get data() {
			return data;
		},
		buildIcon,
	};
}

export const iconsObject = createIcons();
export const icons = iconsObject.data;
