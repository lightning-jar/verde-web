import { dev, version } from "$app/environment";

export function createSiteMeta() {
	const data = {
		dev,
		version,
	};

	return {
		get data() {
			return data;
		},
	};
}

const siteMetaObject = createSiteMeta();
export const siteMeta = siteMetaObject.data;
