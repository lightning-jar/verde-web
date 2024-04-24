interface Data {
	[key: string]: string | object | undefined;
}

// import YAML
import YAML from "yaml";

// import raw data
import { default as contactPageDataRaw } from "$data/contactPage.yaml?raw";

// parse raw data
const headerData = YAML.parse(contactPageDataRaw);

export function createContactPage() {
	let data = $state(headerData);

	return {
		get data() {
			return data;
		},
	};
}

export const contactPage = createContactPage();
