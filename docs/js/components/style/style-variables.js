import { css, unsafeCSS } from "../../lib/lit.js";
import * as Okhsl from "../../lib/okhsl.js";

const okhsl = (h, s, l) => {
	return unsafeCSS(Okhsl.okhslaToColor(h, s, l));
};

/* Technical blue */
const brandGutterColor = okhsl(235 / 360, 0.3, 0.5);

/* Subtly purple black */
const brandTextColor = okhsl(280 / 360, 0.2, 0.2);

/* Dark, for better contrast against both gutter and content background */
const brandFocusColor = okhsl(270 / 360, 1, 0.05);

/**
 * Reference variables provide shortcuts for values, like brand colors.
 * Name format: ref-type_name-variable_name
 */
const referenceStyleTokens = css`
	:host {
		/* Brand (internal) */
		--ref-rgb-brand_link: 0, 112, 224;
		--ref-color-brand_link: rgb(var(--ref-rgb-brand_link));

		--ref-color-brand_press: #21272d;

		--ref-shadow-level_1: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));

		/* Third-party brands */
		--ref-color-discord_blurple: #5865f2;
		--ref-color-itchy_carnation: #fa5c5c;
		--ref-color-mastodon_purple: #563acc;
		--ref-color-patreon_primary: #ff424d;
		--ref-color-reddit_orangered: #ff4500;
		--ref-color-twitter_blue: #1d9bf0;
	}
`;

/**
 * System variables match an abstract intent, referenced by components.
 * Name format: sys-type_name-variable_name
 */
const systemStyleTokens = css`
	:host {
		/* General content */
		--sys-color-page_back: ${brandGutterColor};
		--sys-color-content_back: #fff;
		--sys-color-fore: ${brandTextColor};

		--sys-gap-site_block: 32px;
		--sys-padding-extrusion: 8px;
		--sys-padding-article: 24px;

		--sys-border_radius-card: 16px;
		--sys-border_radius-full_width_content: var(--sys-border_radius-card);

		--sys-shadow-card: var(--ref-shadow-level_1);

		/* Links */
		--sys-rgb-link: var(--ref-rgb-brand_link);
		--sys-color-link: var(--ref-color-brand_link);

		/* Block link */
		--sys-block_link-font-weight: normal;

		--sys-block_link-border_radius: 8px;
		--sys-block_link-border_width: 1px;
		--sys-block_link-border_style: solid;

		--ref-block_link-border_color: var(--sys-color-link);
		--sys-block_link-border_color_all: transparent transparent
			var(--ref-block_link-border_color) transparent;
		--sys-block_link-border_color_all_hover: var(
			--ref-block_link-border_color
		);
		--sys-block_link-border_color_all_active: var(
			--ref-block_link-border_color
		);

		--sys-block_link-background_hover: transparent;
		--sys-block_link-background_active: transparent;

		--sys-outline-focus: 4px dashed ${brandFocusColor};
	}

	/* Content width system variable override response */
	:host {
		--sys-layout-content_width: 960px;
	}
	@media only screen and (max-width: 960px) {
		:host {
			/* Flatten border radius as content width touches the screen edge */
			/* Variables are not supported in media queries. */
			--sys-border_radius-full_width_content: 0;
		}
	}
`;

export const styleVariables = [referenceStyleTokens, systemStyleTokens];
