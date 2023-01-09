import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import "./center-column.js";

export class SiteFooter extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-site_footer-color_back: var(--sys-color-content_back);
				--comp-site_footer-color_fore: var(--sys-color-content_fore);
				--comp-site_footer-border_radius: var(--sys-border_radius-card);
				--comp-site_footer-shadow: var(--sys-shadow-card);

				--comp-site_footer-padding_horizontal: var(
					--sys-padding-article
				);
				--comp-site_footer-padding_vertical: var(
					--sys-padding-extrusion
				);

				display: contents !important;
			}

			.site-footer-container {
				display: flex;
				flex: 0;
			}

			.site-footer {
				margin: 0 auto;
				padding: var(--comp-site_footer-padding_vertical)
					var(--comp-site_footer-padding_horizontal);
				border-radius: var(--comp-site_footer-border_radius);
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;

				background: var(--comp-site_footer-color_back);

				color: var(--comp-site_footer-color_fore);
				font-size: 0.9em;
				text-align: center;

				filter: var(--comp-site_footer-shadow);
			}
		`,
	];

	render() {
		return html`
			<center-column>
				<div class="site-footer-container">
					<footer class="site-footer">
						<p
							>Copyright © 2022&ndash;present All rights
							reserved.</p
						>
					</footer>
				</div>
			</center-column>
		`;
	}
}

customElements.define("site-footer", SiteFooter);
