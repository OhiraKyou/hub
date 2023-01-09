import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";

export class CenterColumn extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				display: contents !important;
			}

			.container {
				display: grid;
				grid-template-columns:
					1fr [content-start] minmax(
						0,
						var(--sys-layout-content_width)
					)
					[content-end] 1fr;
			}

			.content {
				grid-column-start: content-start;
				grid-column-end: content-end;
			}
		`,
	];

	render() {
		return html`
			<div class="container">
				<div class="content"><slot></slot></div>
			</div>
		`;
	}
}

customElements.define("center-column", CenterColumn);
