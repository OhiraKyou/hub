import { css, html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class FullPageContent extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-content_full_page-color_back: var(
					--sys-color-content_back
				);
				--comp-content_full_page-width: var(--sys-layout-content_width);
				--comp-content_full_page-shadow: var(--sys-shadow-card);
				--comp-content_full_page-border_radius: var(
					--sys-border_radius-full_width_content
				);
				--comp-content_full_page-padding: var(--sys-padding-article);

				display: flex;
				flex-grow: 1;

				filter: var(--comp-content_full_page-shadow);
			}

			/* Actual content */
			.content-item {
				flex-basis: var(--comp-content_full_page-width);

				margin: 0 auto;
				padding: var(--comp-content_full_page-padding);

				border-radius: var(--comp-content_full_page-border_radius);

				background: var(--comp-content_full_page-color_back);
			}
		`,
	];

	render() {
		return html` <article class="content-item"
			><slot><p>Content not found.</p></slot></article
		>`;
	}
}

customElements.define("content-full-page", FullPageContent);
