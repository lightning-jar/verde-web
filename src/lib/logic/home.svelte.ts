// import YAML
import YAML from "yaml";

// import raw data
import { default as homeDataRaw } from "$data/home.yaml?raw";

// parse raw data
const homeData = YAML.parse(homeDataRaw) as HomeContent;

export function createHome() {
	let data = $state(homeData);

	return {
		get data() {
			return data;
		},
	};
}

export const homeContent = createHome();
