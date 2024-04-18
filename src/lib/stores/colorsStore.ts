import { readable } from "svelte/store";

// utils
import { generateRGBShades, oklchToRGB } from "./../utils/colorUtils";

export const penn = generateRGBShades(0.1, 260, 25);

// penn.white = generateOKLCHColor(100, 0.1, 260);
const penn_1 = oklchToRGB(1, 0.1, 260);
penn["1"] = `rgb(${penn_1[0]}, ${penn_1[1]}, ${penn_1[2]})`;
const penn_5 = oklchToRGB(0.995, 0.1, 260);
penn["5"] = `rgb(${penn_5[0]}, ${penn_5[1]}, ${penn_5[2]})`;
const penn_10 = oklchToRGB(0.99, 0.1, 260);
penn["10"] = `rgb(${penn_10[0]}, ${penn_10[1]}, ${penn_10[2]})`;
const penn_25 = oklchToRGB(0.975, 0.1, 260);
penn["25"] = `rgb(${penn_25[0]}, ${penn_25[1]}, ${penn_25[2]})`;
penn.black = penn["925"];
penn.DEFAULT = penn["750"];

export const slimy = generateRGBShades(0.2, 144, 25);
const slimy_1 = oklchToRGB(1, 0.2, 144);
slimy["1"] = `rgb(${slimy_1[0]}, ${slimy_1[1]}, ${slimy_1[2]})`;
const slimy_5 = oklchToRGB(0.995, 0.2, 144);
slimy["5"] = `rgb(${slimy_5[0]}, ${slimy_5[1]}, ${slimy_5[2]})`;
const slimy_10 = oklchToRGB(0.99, 0.2, 144);
slimy["10"] = `rgb(${slimy_10[0]}, ${slimy_10[1]}, ${slimy_10[2]})`;
const slimy_25 = oklchToRGB(0.975, 0.2, 144);
slimy["25"] = `rgb(${slimy_25[0]}, ${slimy_25[1]}, ${slimy_25[2]})`;
slimy.black = slimy["925"];
slimy.DEFAULT = slimy["750"];

export const colors = readable({
	penn: penn,
	slimy: slimy,
});
