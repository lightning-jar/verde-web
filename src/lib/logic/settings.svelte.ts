// import YAML
import YAML from "yaml";

// import raw data
import { default as settingsDataRaw } from "$data/settings.yaml?raw";

// parse raw data
const settingsData = YAML.parse(settingsDataRaw) as Settings;

export function createSettings() {
	const data = settingsData;

	return {
		get data() {
			return data;
		},
	};
}

export const settingsObject = createSettings();
export const settings = settingsObject.data;
