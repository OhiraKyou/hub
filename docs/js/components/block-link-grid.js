import { css, html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class LinkGrid extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-link_grid-gap: var(--sys-padding-article);

				display: contents !important;
			}

			.block-link-grid-container {
				display: grid;
				/* A max of 0fr results in fixed-width items that wrap. */
				/* A max of 1fr stretches items to fill remaining space. */
				/* This could be toggled with a checkbox, if necessary. */
				grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
				grid-gap: var(--comp-link_grid-gap);
			}
		`,
	];

	render() {
		return html`<ul class="block-link-grid-container"
			><slot></slot
		></ul>`;
	}
}

customElements.define("block-link-grid", LinkGrid);
