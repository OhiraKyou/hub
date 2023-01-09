import { css, html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class BlockLinkGridCell extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				display: contents !important;
			}

			li {
				display: block;
			}
		`,
	];

	render() {
		return html`<li><slot></slot></li>`;
	}
}

customElements.define("block-link-grid-cell", BlockLinkGridCell);
