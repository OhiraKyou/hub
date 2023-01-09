import { html, LitElement } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class BlockLinkLabel extends LitElement {
	static styles = [resetStyles];

	render() {
		return html`<slot></slot>`;
	}
}

customElements.define("block-link-label", BlockLinkLabel);
