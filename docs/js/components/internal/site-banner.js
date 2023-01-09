import { css, html, LitElement } from "../../lib/lit.js";
import { resetStyles } from "../style/reset-css.js";
import { siteTitle } from "../../meta-data.js";
import "./block-extrusion.js";

export class SiteBanner extends LitElement {
	static styles = [
		resetStyles,
		css`
			:host {
				--comp-site_avatar-color_back: var(--sys-color-content_back);
				--comp-site_avatar-shadow: var(--sys-shadow-card);

				--comp-site_avatar-border_width: var(--sys-padding-extrusion);
				--comp-site_avatar-outer_size: 96px;
				--comp-site_avatar-outer_size_half: calc(
					var(--comp-site_avatar-outer_size) / 2
				);

				/* Title/tagline/bio */
				--comp-site_bio-color_back: var(--sys-color-content_back);
				--comp-site_bio-border_radius: var(--sys-border_radius-card);
				--comp-site_bio-shadow: var(--sys-shadow-card);
				--comp-site_bio-width: 480px;
				--comp-site_bio-underlay_offset: 32px;

				--comp-site_bio-padding_horizontal: var(--sys-padding-article);
				--comp-site_bio-padding_vertical: var(--sys-padding-extrusion);

				display: contents !important;
			}

			/* Link */
			.banner-link {
				display: flex;
				flex-flow: row nowrap;

				/* Use left edge of avatar itself for vertical alignment */
				margin-left: calc(var(--comp-site_avatar-border_width) * -1);
			}

			.banner-link:hover,
			.banner-link:focus {
				color: var(--sys-color-link);
			}

			.banner-link:focus-visible {
				outline: var(--sys-outline-focus);
			}

			/* Avatar */
			.site-avatar-container {
				/* Center vertically, in case the header is taller */
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.site-avatar {
				display: flex;
				flex-shrink: 0;

				width: var(--comp-site_avatar-outer_size);
				height: var(--comp-site_avatar-outer_size);

				background: url("../../images/avatar.svg");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;

				border: var(--comp-site_avatar-border_width) solid
					var(--comp-site_avatar-color_back);
				border-radius: 50%;

				/* Render on top of site title extrusion */
				z-index: 1;

				/* A title-overlapping shadow improves click affordance. */
				filter: var(--comp-site_avatar-shadow);
			}

			/* This header row cell enables easy content alignment. */
			.title-extrusion-container {
				/* Center vertically */
				display: flex;
				flex-direction: column;
				justify-content: center;

				/* Shift behind avatar, horizontally */
				margin-left: calc(var(--comp-site_avatar-outer_size_half) * -1);

				height: 100%;
			}

			.title-extrusion {
				filter: var(--comp-site_bio-shadow);
			}

			.title-text {
				/* Align with the avatar itself rather than its border. */
				/* With this, the avatar border overlaps the padding. */
				padding-left: calc(
					var(--comp-site_avatar-outer_size_half) -
						var(--comp-site_avatar-border_width)
				);
			}
		`,
	];

	render() {
		return html`
			<a href="/" class="banner-link">
				<div class="site-avatar-container">
					<span class="site-avatar"></span>
				</div>

				<div class="title-extrusion-container">
					<block-extrusion class="title-extrusion"
						><p class="title-text">${siteTitle}</p>
					</block-extrusion>
				</div>
			</a>
		`;
	}
}

customElements.define("site-banner", SiteBanner);
