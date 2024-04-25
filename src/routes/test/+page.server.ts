import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function () {
	console.log("test");

	return {
		message: "test",
	};
};
