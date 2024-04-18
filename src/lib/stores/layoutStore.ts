// store for tracking window state
import { readable } from "svelte/store";

// window width store
export const pageXPadding = readable("px-6 sm:px-10 lg:px-16 xl:px-24");
export const pageYPadding = readable("py-6 sm:py-10 lg:py-16 xl:py-18");
