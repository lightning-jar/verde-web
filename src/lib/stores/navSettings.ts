import { readable } from "svelte/store";

export const navHeightClasses = readable(
	"h-[60px] sm:h-[70px] md:h-[72px] xl:min-h-[3.5rem] 3xl:min-h-[5rem]",
);
