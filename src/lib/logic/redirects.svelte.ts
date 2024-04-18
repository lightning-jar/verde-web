// import YAML
import YAML from "yaml";

// import raw data
import { default as redirectsDataRaw } from "$data/redirects.yaml?raw";

// parse raw data
const redirectsData = YAML.parse(redirectsDataRaw) as string[][];

export function createRedirects() {
	let data = $state.frozen(redirectsData);

	return {
		get data() {
			return data;
		},
	};
}

export const redirectsObject = createRedirects();
export const redirects = redirectsObject.data;
