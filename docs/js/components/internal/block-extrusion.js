import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";

export class BlockExtrusion extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-block_extrusion-padding_vertical: var(
					--sys-padding-extrusion
				);
				--comp-block_extrusion-padding_horizontal: var(
					--sys-padding-article
				);
				--comp-block_extrusion-background: var(
					--sys-color-content_back
				);
				--comp-block_extrusion-border_radius: var(
					--sys-border_radius-card
				);

				display: contents !important;
			}

			.container {
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;

				min-height: 0;
				min-width: 0;

				padding: var(--comp-block_extrusion-padding_vertical)
					var(--comp-block_extrusion-padding_horizontal);

				background: var(--comp-block_extrusion-background);
				border-radius: var(--comp-block_extrusion-border_radius);
			}
		`,
	];

	render() {
		return html`<div class="container"><slot></slot></div>`;
	}
}

customElements.define("block-extrusion", BlockExtrusion);
