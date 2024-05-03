import type { Config } from "tailwindcss";

// custom color palette with shades of each color was generated from base colors
// then stored in json file: src/lib/settings/twColors.json
// colors can be re-generated using the following function
// base colors used in the function are defined in settings: src/lib/settings/colors.json
// this approach also uses OKLCH colors with PostCSS plugin to provide fallbacks
// see: https://1902.studio/en/journal/using-oklch-colors-in-tailwind-css#:~:text=In%20Tailwind%20it%20is%20not%20possible%20to%20define,to%20classes%20like%20this%3A%20bg-primary%20supports-%20%5Bcolor%3Aoklch%20%280_0_0%29%5D%3Abg-primary-oklch
// import { generateAllTailwindCustomColors } from "./src/lib/utils/colorUtils";
// const customColors = generateAllTailwindCustomColors();

// declarations
const fontSizePxClasses0to50 = buildFontSizePxClasses(0, 51, 1);
const fontSizePxClasses50to500 = buildFontSizePxClasses(50, 501, 10);
const fontWeightClasses = buildFontWeightClasses();

//- config
const config: Config = {
	//- allow tailwind classes to have priority over other css
	//- put "tw" on the root tag
	content: ["./src/**/*.{html,pug,js,ts,svelte,md,json,jason5,yaml}"],
	theme: {
		extend: {
			colors: {
				penn: {
					1: "rgb(216, 255, 255)",
					5: "rgb(214, 255, 255)",
					10: "rgb(213, 254, 255)",
					25: "rgb(208, 249, 255)",
					50: "rgb(200, 240, 255)",
					75: "rgb(191, 232, 255)",
					100: "rgb(183, 224, 255)",
					125: "rgb(175, 215, 255)",
					150: "rgb(168, 207, 255)",
					175: "rgb(160, 199, 255)",
					200: "rgb(152, 191, 254)",
					225: "rgb(144, 183, 246)",
					250: "rgb(137, 175, 237)",
					275: "rgb(129, 167, 229)",
					300: "rgb(122, 159, 221)",
					325: "rgb(114, 151, 212)",
					350: "rgb(107, 144, 204)",
					375: "rgb(100, 136, 196)",
					400: "rgb(92, 128, 188)",
					425: "rgb(85, 121, 180)",
					450: "rgb(78, 114, 172)",
					475: "rgb(71, 106, 164)",
					500: "rgb(64, 99, 156)",
					525: "rgb(58, 92, 148)",
					550: "rgb(51, 84, 140)",
					575: "rgb(44, 77, 132)",
					600: "rgb(37, 70, 125)",
					625: "rgb(31, 63, 117)",
					650: "rgb(24, 56, 110)",
					675: "rgb(18, 50, 102)",
					700: "rgb(11, 43, 95)",
					725: "rgb(5, 36, 87)",
					750: "rgb(1, 29, 80)",
					775: "rgb(0, 22, 73)",
					800: "rgb(0, 15, 66)",
					825: "rgb(0, 8, 59)",
					850: "rgb(0, 2, 52)",
					875: "rgb(0, 0, 45)",
					900: "rgb(0, 0, 38)",
					925: "rgb(2, 0, 31)",
					950: "rgb(2, 0, 25)",
					DEFAULT: "rgb(1, 29, 80)",
					black: "rgb(2, 0, 31)",
				},
				slimy: {
					1: "rgb(163, 255, 163)",
					5: "rgb(161, 255, 162)",
					10: "rgb(159, 255, 160)",
					25: "rgb(154, 255, 155)",
					50: "rgb(146, 255, 147)",
					75: "rgb(137, 255, 139)",
					100: "rgb(128, 255, 131)",
					125: "rgb(120, 247, 122)",
					150: "rgb(111, 238, 114)",
					175: "rgb(102, 230, 106)",
					200: "rgb(93, 221, 98)",
					225: "rgb(84, 213, 90)",
					250: "rgb(75, 205, 81)",
					275: "rgb(65, 197, 73)",
					300: "rgb(55, 188, 64)",
					325: "rgb(44, 180, 55)",
					350: "rgb(30, 172, 46)",
					375: "rgb(10, 164, 36)",
					400: "rgb(0, 156, 24)",
					425: "rgb(0, 148, 7)",
					450: "rgb(0, 140, 0)",
					475: "rgb(0, 133, 0)",
					500: "rgb(0, 125, 0)",
					525: "rgb(0, 117, 0)",
					550: "rgb(0, 110, 0)",
					575: "rgb(0, 102, 0)",
					600: "rgb(0, 95, 0)",
					625: "rgb(0, 87, 0)",
					650: "rgb(0, 80, 0)",
					675: "rgb(0, 73, 0)",
					700: "rgb(0, 65, 0)",
					725: "rgb(0, 58, 0)",
					750: "rgb(0, 51, 0)",
					775: "rgb(0, 44, 0)",
					800: "rgb(0, 37, 0)",
					825: "rgb(0, 30, 0)",
					850: "rgb(0, 24, 0)",
					875: "rgb(0, 17, 0)",
					900: "rgb(0, 10, 0)",
					925: "rgb(0, 5, 0)",
					950: "rgb(0, 3, 0)",
					black: "rgb(0, 5, 0)",
					DEFAULT: "rgb(10, 164, 36)",
				},
			},
			fontWeight: {
				...fontWeightClasses,
			},
			fontFamily: {
				mulish: [
					"Mulish",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				montserrat: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"sans-serif",
				],
			},
			fontSize: {
				...fontSizePxClasses0to50,
				...fontSizePxClasses50to500,
			},
		},
	},
};

export default config;

// helper functions for config
function buildFontSizePxClasses(min?: number, max?: number, step?: number) {
	max = max ?? 51;
	min = min ?? 0;
	step = step ?? 1;
	const obj: { [key: string]: string } = {};
	for (let i = min; i < max; i += step) {
		const key = `${i}`;
		const value = `${i}px`;
		obj[key] = value;
	}
	return obj;
}

function buildFontWeightClasses() {
	const obj: { [key: string]: string } = {};
	for (let i = 100; i < 1000; i += 100) {
		const key = `${i}`;
		const value = `${i}`;
		obj[key] = value;
	}
	return obj;
}
