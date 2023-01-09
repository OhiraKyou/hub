import { css, html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";
import { styleVariables } from "./style/style-variables.js";
import "./internal/page-meta.js";
import "./internal/main-content-link.js";
import "./internal/site-footer.js";
import "./internal/site-header.js";
import "./internal/center-column.js";
import "./internal/content-block-column.js";

export class PageGeneral extends LitElement {
	static styles = [
		resetStyles,
		styleVariables,
		css`
			/* This applies to the light DOM element, which affects slotted elements */
			:host {
				--comp-page_general-color_back: var(--sys-color-page_back);
				--comp-page_general-color_fore: var(--sys-color-fore);

				font-size: 1em;
				line-height: 1.5;
				font-family: "Roboto", "Droid Sans", "Lato", "Helvetica Neue",
					Helvetica, Arial, sans-serif;
				color: var(--comp-page_general-color_fore);
				cursor: auto;
			}

			/* Column layout */
			.page-container {
				display: grid;
				grid-auto-rows: auto 1fr auto;
				gap: var(--sys-gap-site_block);

				padding: var(--sys-gap-site_block);
				padding-bottom: 0;

				/* Using min-height here instead of height fixes unstyled boxes
				appearing when bars (like dev tools or mobile top and bottom
				bars) are present. */
				min-height: 100vh;

				background: var(--comp-page_general-color_back);
			}
		`,
	];

	static properties = {
		pageTitle: { type: String },
		description: { type: String },
	};

	handleSkipClick(event) {
		event.preventDefault();
		console.log("Clicked skip!");
		var mainElement = this.shadowRoot.getElementById("main");
		mainElement.scrollIntoView();
		mainElement.focus();
	}

	render() {
		return html`
			<page-meta
				pagetitle="${this.pageTitle}"
				description="${this.description}"
			></page-meta>

			<div class="page-container">
				<site-header></site-header>
				<main>
					<center-column>
						<content-block-column>
							<slot></slot>
						</content-block-column>
					</center-column>
				</main>
				<site-footer></site-footer>
			</div>
		`;
	}
}

customElements.define("page-general", PageGeneral);
