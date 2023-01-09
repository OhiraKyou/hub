import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";

export class ContentBlockColumn extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				display: contents !important;
			}

			.content-block-column-container {
				display: flex;
				flex-flow: column nowrap;
				gap: var(--sys-gap-site_block);

				min-width: 0;
			}
		`,
	];

	render() {
		return html`
			<div class="content-block-column-container">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("content-block-column", ContentBlockColumn);
