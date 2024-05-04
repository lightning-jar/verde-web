import { get } from "svelte/store";
import { redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import sluggo from "$utils/sluggo";
import deslugify from "$utils/deslugify";
import titleCase from "$utils/titleCase";
export const utils = {
	deslugify,
	get,
	redirect,
	error,
	sluggo,
	titleCase,
};
export default utils;
export type Utils = typeof utils;
