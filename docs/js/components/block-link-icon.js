import { css, html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class BlockLinkIcon extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-tree_link_icon-base_size: 1.25em;

				display: contents !important;
			}

			.icon-container {
				display: flex;
				justify-self: end;

				width: var(--comp-tree_link_icon-base_size);
				height: var(--comp-tree_link_icon-base_size);

				text-align: center;
			}
		`,
	];

	render() {
		return html`<span class="icon-container" aria-hidden="true"
			><slot></slot
		></span>`;
	}
}

customElements.define("block-link-icon", BlockLinkIcon);
