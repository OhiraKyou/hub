import { html, LitElement } from "../lib/lit.js";

export class NytroItchWidget extends LitElement {
	render() {
		return html`<iframe
			title="Nytro on itch.io"
			src="https://itch.io/embed/132425"
			frameborder="0"
			width="100%"
			height="167"
			><a href="https://ohirakyou.itch.io/nytro"
				>Nytro by OhiraKyou</a
			></iframe
		>`;
	}
}

customElements.define("nytro-itch-widget", NytroItchWidget);
