---
name: News Syndicate
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#b02d21'
  on-secondary: '#ffffff'
  secondary-container: '#fc6451'
  on-secondary-container: '#650001'
  tertiary: '#1a0b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#381d00'
  on-tertiary-container: '#ae835a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#8e130c'
  tertiary-fixed: '#ffdcbe'
  tertiary-fixed-dim: '#eebd90'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#613f1c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style
The design system for this product is built on the pillars of editorial authority, uncompromising clarity, and institutional trust. Targeting a globally-minded audience that values accuracy and depth, the UI evokes the reliability of traditional broadsheet journalism translated into a high-performance digital experience.

The design style is **Corporate / Modern** with a strong **Minimalist** influence. It prioritizes content hierarchy above all else, utilizing heavy white space and a structured grid to manage information density. The visual language is sober and direct, avoiding decorative flourishes to ensure the news remains the focal point. High-contrast elements and a disciplined color application reinforce a sense of urgency and importance.

## Colors
This design system utilizes a high-contrast palette to ensure legibility and establish brand presence.

*   **Primary (Dominant Blue):** Used for navigation backgrounds, primary headings, and structural elements to ground the interface in professionalism.
*   **Secondary (Accent Red):** Reserved for high-urgency indicators, "Breaking News" labels, active states, and call-to-action highlights. It must be used sparingly to maintain its impact.
*   **Neutral:** A range of cool grays provides soft backgrounds for article containers, while pure white is used for the primary reading surface to maximize contrast.
*   **Success/Error:** Standard functional colors are tuned to match the saturation of the primary palette for visual cohesion.

## Typography
The typography is the core of the identity. **Source Serif 4** is used for both headlines and body text to provide a sophisticated, book-like reading experience that signals deep-dive journalism.

**Inter** is introduced as a secondary functional typeface for UI labels, metadata, and navigation elements. This sans-serif pairing ensures that utility-driven information is distinct from editorial content. 

Scale is used aggressively to create a clear information hierarchy. Long-form articles should prioritize the `body-lg` setting with a generous line height to reduce eye fatigue. Labels should frequently use uppercase with increased letter spacing to provide a modern, "news-ticker" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a classic editorial column feel, transitioning to a fluid model for mobile devices.

*   **Desktop:** 12-column grid, 1280px max-width, 24px gutters. Content is often centered with wide margins to focus the reader’s eye.
*   **Tablet:** 8-column grid with 32px side margins.
*   **Mobile:** 4-column grid with 16px side margins.

Vertical rhythm is strictly managed in multiples of 8px. Use generous padding (48px+) between major news sections to provide "breathing room," preventing the interface from feeling cluttered or overwhelming.

## Elevation & Depth
To maintain a professional and flat editorial feel, this design system avoids heavy shadows. Depth is communicated primarily through **Tonal Layers** and **Low-contrast outlines**.

*   **Surface Hierarchy:** The base layer is white (#FFFFFF). Cards or secondary content sections sit on a subtle neutral-tinted background (#F8F9FA).
*   **Outlines:** Use 1px solid borders in a light gray (#E1E4E8) to separate content modules. 
*   **Elevation:** Only the primary navigation bar and modal overlays use a subtle, highly diffused ambient shadow (0px 4px 20px rgba(0,0,0,0.05)) to indicate they sit above the content plane.

## Shapes
The shape language is conservative and structural. A **Soft (0.25rem)** roundedness is applied to buttons and input fields to prevent the UI from feeling too sharp or aggressive, while maintaining a serious tone.

*   **Images:** Keep 0px radius (Sharp) for editorial photography to preserve the "printed page" aesthetic.
*   **Interactive Elements:** Use a 4px (Soft) radius for buttons and form fields.
*   **Tags/Chips:** May use a full pill-shape (3) only when indicating categories or topics to differentiate them from actionable buttons.

## Components
Consistent component styling reinforces the authoritative nature of the platform:

*   **Buttons:** Primary buttons use the Dominant Blue background with white text. They are rectangular with a 4px corner radius. Secondary buttons use a 1px border.
*   **Input Fields:** High-contrast borders (1px solid) that darken on focus. Use Inter for input text to ensure clarity in data entry.
*   **Cards:** Avoid heavy shadows; use 1px borders or subtle background color shifts. Headlines within cards should use Source Serif 4.
*   **Article Header:** A dominant component featuring the Accent Red for the category label, followed by a Display-sized headline.
*   **Data Lists:** Used for stock tickers or sports scores, utilizing Inter for high legibility at small sizes.
*   **Byline & Timestamp:** Always rendered in Inter, uppercase, with 0.05em letter spacing to denote secondary metadata.