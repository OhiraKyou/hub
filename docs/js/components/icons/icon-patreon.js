import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import { iconStyles } from "./icon-styles.js";

export class IconPatreon extends LitElement {
	static styles = [
		resetStyles,
		iconStyles,
		css`
			:host {
				color: var(--ref-color-patreon_primary);
			}
		`,
	];

	render() {
		// Source: https://materialdesignicons.com/
		return html`<svg viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z"
			/>
		</svg>`;
	}
}

customElements.define("icon-patreon", IconPatreon);
