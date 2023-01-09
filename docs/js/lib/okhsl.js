import { okhsl_to_srgb } from "../../lib/oklab.js";

// This module is an internal bridge to an unwieldy, external library.

function clamp(number, min, max) {
	return Math.max(min, Math.min(number, max));
}

function quantize(component) {
	return clamp(Math.round(component), 0, 255);
}

function quantizeRGB(...rgb) {
	let [r, g, b] = rgb;
	return [quantize(r), quantize(g), quantize(b)];
}

/**
 * Converts [0, 1] HSLA to a [0, 255] RGB color string with a [0, 1] alpha.
 *
 * @param {*} h Hue, [0, 1]
 * @param {*} s Saturation, [0, 1]
 * @param {*} l Lightness, [0, 1]
 * @param {*} a Alpha, [0, 1]
 * @returns A css-compatible [0, 255] rgba() string.
 */
export function okhslaToColor(h, s, l, a = 1) {
	let rgb = okhsl_to_srgb(h, s, l);
	let [r, g, b] = quantizeRGB(...rgb);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}
