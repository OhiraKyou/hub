import { css, html, LitElement, nothing } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class ContentBlock extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-content_block-color_back: var(--sys-color-content_back);
				--comp-content_block-width: var(--sys-layout-content_width);
				--comp-content_block-header_border_radius: var(
					--sys-border_radius-card
				);
				--comp-content_block-border_radius: var(
					--sys-border_radius-card
				);
				--comp-content_block-padding: var(--sys-padding-article);
				--comp-content_block-header_min_width: 200px;
				--comp-content_block-shadow: var(--sys-shadow-card);

				display: flex;
				flex-flow: column nowrap;
				flex-shrink: 1;
				min-width: 0;

				filter: var(--comp-content_block-shadow);
			}

			/* Header block column cell */
			.block-header-container {
				display: grid;
				grid-auto-columns: 1fr auto 1fr;
			}

			.block-header {
				display: block;
				flex-shrink: 1;

				min-width: var(--comp-content_block-header_min_width);
				max-width: calc(
					100% - var(--comp-content_block-border_radius) * 2
				);

				margin: 0 auto;
				padding: var(--sys-padding-extrusion);

				font-weight: normal;
				font-size: 1.4em;
				text-align: center;

				background: var(--comp-content_block-color_back);

				border-radius: var(--comp-content_block-header_border_radius);
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			/* Content block column cell */
			.block-contents {
				display: flex;
				flex-direction: column;
				flex-shrink: 1;
				min-width: 0;

				margin: 0 auto;
				padding: var(--comp-content_block-padding);

				border-radius: var(--comp-content_block-border_radius);

				background: var(--comp-content_block-color_back);
			}
		`,
	];

	static properties = {
		blockLabel: { type: String },
	};

	renderHeader() {
		return this.blockLabel
			? html`
					<div class="block-header-container">
						<h1 class="block-header">${this.blockLabel}</h1>
					</div>
			  `
			: nothing;
	}

	render() {
		return html`
			<section>
				${this.renderHeader()}
				<div class="block-contents">
					<slot><p>Content not found.</p></slot>
				</div>
			</section>
		`;
	}
}

customElements.define("content-block", ContentBlock);
