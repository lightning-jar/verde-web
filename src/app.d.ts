import type { Content } from "$lib/_collection";
import type { Utils } from "$utils/_collection";


declare global {
	namespace App {
		interface Locals {
			content: Content;
			redirects: Readonly<string[][]>;
			settings: Readonly<Settings>;
			siteMeta: SiteMeta;
			utils: Utils;
		}
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
