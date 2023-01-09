import { LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import { sanitizeStyles } from "../style/sanitize-css.js";
import { siteTitle } from "../../meta-data.js";

export class PageMeta extends LitElement {
	static properties = {
		pageTitle: { type: String },
		description: { type: String },
	};

	connectedCallback() {
		super.connectedCallback();

		// Disconnect immediately
		this.remove();
	}

	generateHeadElements() {
		// Element creation utility function
		const add = ({ tag = "meta", innerHTML = false, ...args }) => {
			let el = document.createElement(tag);
			Object.entries(args).forEach((x) => el.setAttribute(x[0], x[1]));
			if (innerHTML) el.innerHTML = innerHTML;
			return el;
		};

		// Add document namespaces
		document.documentElement.setAttribute(
			"prefix",
			"og: https://ogp.me/ns#"
		);

		// Meta data
		const siteAppendage = " - " + siteTitle;
		const fullTitle = this.pageTitle + siteAppendage;

		// Append elements to head
		document.head.append(
			add({
				name: "charset",
				content: "utf-8",
			}),
			add({
				name: "viewport",
				content:
					"width=device-width, height=device-height, initial-scale=1.0",
			}),
			add({
				httpEquiv: "Content-Security-Policy",
				content: "script-src 'self'",
			}),
			add({
				tag: "title",
				innerHTML: fullTitle,
			}),
			add({
				name: "title",
				content: fullTitle,
			}),
			add({
				name: "description",
				content: this.description,
			}),
			add({
				property: "og:title",
				content: this.pageTitle,
			}),
			add({
				property: "og:site_name",
				content: siteTitle,
			}),
			add({
				property: "og:description",
				content: this.description,
			}),
			add({
				tag: "link",
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any",
			}),
			add({
				tag: "link",
				rel: "icon",
				href: "/favicon.svg",
				sizes: "any",
				type: "image/svg+xml",
			})
		);

		// Apply global css reset
		const styleElement = document.createElement("style");
		styleElement.innerHTML = sanitizeStyles;
		document.head.append(styleElement);
	}

	disconnectedCallback() {
		this.generateHeadElements();

		// Finish disconnecting
		super.disconnectedCallback();
	}

	constructor() {
		super();
		this.pageTitle = "Untitled Page";
	}
}

customElements.define("page-meta", PageMeta);
