import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import { iconStyles } from "./icon-styles.js";

export class IconPress extends LitElement {
	static styles = [
		resetStyles,
		iconStyles,
		css`
			:host {
				color: var(--ref-color-brand_press);
			}
		`,
	];

	render() {
		// Source: https://materialdesignicons.com/
		return html`<svg viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z"
			/>
		</svg>`;
	}
}

customElements.define("icon-press", IconPress);
