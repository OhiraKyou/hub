import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import "./site-banner.js";
import "./center-column.js";

export class SiteHeader extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				display: contents !important;
			}

			.header-container {
				display: flex;
				flex-flow: row nowrap;

				width: 100%;
			}

			.header {
				display: flex;
				flex-flow: row nowrap;
				flex-shrink: 1;
				flex-grow: 0;
				min-width: 0;
				padding: 0 var(--sys-padding-article);
			}
		`,
	];

	render() {
		return html`
			<center-column>
				<div class="header-container">
					<header class="header">
						<site-banner></site-banner>
					</header>
				</div>
			</center-column>
		`;
	}
}

customElements.define("site-header", SiteHeader);
