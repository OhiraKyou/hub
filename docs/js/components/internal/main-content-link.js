import { css, html, LitElement, nothing } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";

export class MainContentLink extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				display: contents !important;
			}
		`,
	];

	render() {
		return html`<a href="#main">Skip to main content</a>`;
	}
}

customElements.define("main-content-link", MainContentLink);
