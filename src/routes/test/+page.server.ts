import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function () {
	return {
		message: "test",
	};
};
