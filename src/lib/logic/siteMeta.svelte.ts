import { dev, version } from "$app/environment";

export function createSiteMeta() {
	let data = $state.frozen({
		dev,
		version,
	});

	return {
		get data() {
			return data;
		},
	};
}

const siteMetaObject = createSiteMeta();
export const siteMeta = siteMetaObject.data;
