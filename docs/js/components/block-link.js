import { css, html, LitElement, nothing } from "../lib/lit.js";
import { resetStyles } from "./style/reset-css.js";

export class BlockLink extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-block_link-height: 2.5em;
				--comp-block_link-border_radius: var(
					--sys-block_link-border_radius
				);
				--comp-block_link-border: var(--sys-border-block_link);
				--comp-block_link-border_hover: var(
					--sys-block_link-border_hover
				);
				--comp-block_link-border_width: var(
					--sys-block_link-border_width
				);
				--comp-block_link-border_color_all: var(
					--sys-block_link-border_color_all
				);
				--comp-block_link-border_color_all_hover: var(
					--sys-block_link-border_color_all_hover
				);
				--comp-block_link-border_color_all_active: var(
					--sys-block_link-border_color_all_active
				);
				--comp-block_link-border_style: var(
					--sys-block_link-border_style
				);
				--comp-block_link-color: var(--sys-color-link);
				--comp-block_link-background_hover: var(
					--sys-block_link-background_hover
				);
				--comp-block_link-background_active: var(
					--sys-block_link-background_active
				);
				--comp-block_link-font_weight: var(
					--sys-block_link-font-weight
				);
			}

			.tree-link,
			.tree-link:visited {
				/*display: flex;*/
				display: grid;
				grid-template-columns: 1fr auto 1fr;
				grid-gap: 1em;
				align-items: center;

				line-height: var(--comp-block_link-height);

				color: var(--comp-block_link-color);
				font-weight: var(--comp-block_link-font_weight);

				border-style: var(--comp-block_link-border_style);
				border-color: var(--comp-block_link-border_color_all);
				border-width: var(--comp-block_link-border_width);
				border-radius: var(--comp-block_link-border_radius);
			}

			.tree-link:hover,
			.tree-link:focus {
				border-color: var(--comp-block_link-border_color_all_hover);
				border-width: var(--comp-block_link-border_width);

				background: var(--comp-block_link-background_hover);
				text-decoration: underline;
			}

			.tree-link:focus-visible {
				outline: var(--sys-outline-focus);
			}

			.tree-link:active {
				border-color: var(--comp-block_link-border_color_all_active);
				background: var(--comp-block_link-background_active);
			}
		`,
	];

	static properties = {
		href: { type: String },
		me: { type: Boolean },
		external: { type: Boolean },
	};

	getRel() {
		let rel = [];

		if (this.external) rel.push("noopener");
		if (this.me) rel.push("me");

		if (rel.length > 0) return rel.join(" ");
		else return nothing;
	}

	// Note: do not open external links in a new tab, for accessibility.
	// This is especially important on mobile, with difficult tab management.
	render() {
		return html`<a
			href="${this.href}"
			class="tree-link"
			rel="${this.getRel()}"
			><slot></slot
		></a>`;
	}
}

customElements.define("block-link", BlockLink);
