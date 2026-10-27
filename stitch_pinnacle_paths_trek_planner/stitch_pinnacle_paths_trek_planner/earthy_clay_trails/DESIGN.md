---
name: Earthy Clay Trails
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#43483d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#74796c'
  outline-variant: '#c4c8ba'
  surface-tint: '#486730'
  primary: '#486730'
  on-primary: '#ffffff'
  primary-container: '#87a96b'
  on-primary-container: '#213d0b'
  inverse-primary: '#aed18f'
  secondary: '#775843'
  on-secondary: '#ffffff'
  secondary-container: '#ffd4ba'
  on-secondary-container: '#7a5a45'
  tertiary: '#8a5100'
  on-tertiary: '#ffffff'
  tertiary-container: '#de8c27'
  on-tertiary-container: '#512d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9eea9'
  primary-fixed-dim: '#aed18f'
  on-primary-fixed: '#0b2000'
  on-primary-fixed-variant: '#314e1b'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#e7bea5'
  on-secondary-fixed: '#2c1607'
  on-secondary-fixed-variant: '#5d412d'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#ffb86d'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#683c00'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system pairs the physical warmth of tactile claymorphism with the restrained clarity of modern editorial minimalism. Designed for outdoor exploration, mindful trail discovery, and nature-first lifestyle interfaces, it grounds digital interaction in organic, tangible textures.

The UI avoids flat sterility, favoring soft, pillowy volumes, matte clay extrusions, and generous negative space. Every surface appears gently molded by hand, invoking grounded reassurance, calm focus, and sensory tactile feedback without sacrificing usability or accessibility.

## Colors
The palette derives directly from wild loam, sunlit clay paths, and high-altitude vegetation.

- **Primary (`#87A96B` - Sage Green):** Used for focal interactive controls, selected states, and botanical accents.
- **Secondary (`#5A3E2B` - Walnut Brown):** Anchors high-contrast typographic hierarchy, iconography, and critical framing.
- **Tertiary (`#D5851F` - Amber Glow):** Reserved for waypoint badges, state highlights, warnings, and warm ambient touches.
- **Neutral Canvas (`#FBF9F5` - Soft Alabaster):** The base matte canvas.
- **Surface Containers:** Stacked depth relies on `#F3EFEA` (Layer 1 Container) and `#EBE5DC` (Layer 2 Floating Pillows).

Never use pure black (`#000000`) or cold grays; all borders, shadows, and subtle lines are tinted with warm umber and earth tones.

## Typography
Typographic scale enforces deliberate editorial restraint: low copy density, prominent natural titles, and calm readability.

- **Headlines:** Set in **Epilogue**, delivering structured, earthy character with humanistic geometric cuts.
- **Body & Labels:** Set in **Plus Jakarta Sans**, offering soft, rounded aperture geometry that mirrors the curved forms of the clay containers.

Text layers always default to Walnut Brown (`#5A3E2B`) at varying opacities (100% for titles, 75% for body, 55% for micro-labels) to retain warm cohesion.

## Layout & Spacing
The layout model employs a fluid 12-column grid on desktop/tablet and a single-to-dual column flow on mobile screens. Layouts prioritize generous breathing room around inflated clay components, preventing visual crowding caused by shadow spreads.

- **Desktop (1024px+):** 12 columns, 48px canvas margin, 24px gutters.
- **Tablet (768px - 1023px):** 8 columns, 32px canvas margin, 20px gutters.
- **Mobile (under 768px):** 4 columns, 20px canvas margin, 16px gutters.

Inner container padding defaults to `space-lg` (1.5rem) to ensure the 3D interior bevels never collide with label contents.

## Elevation & Depth
Depth is realized through dual-light claymorphic volumes rather than sharp digital elevation drops. Each interactive surface relies on a combination of ambient under-shadows and pillowy inner-light bevels:

- **Ambient Drop Shadow:** A low-frequency, warm-tinted shadow cast downward and outward: `0 12px 24px -6px rgba(90, 62, 43, 0.12), 0 4px 8px -2px rgba(90, 62, 43, 0.06)`.
- **Top-Left Inner Highlight:** Simulates a natural zenith sun hitting soft clay: `inset 2px 2px 4px 0 rgba(255, 255, 255, 0.75)`.
- **Bottom-Right Inner Shade:** Creates tactile volume: `inset -2px -2px 6px 0 rgba(90, 62, 43, 0.08)`.
- **Pressed State Elevation:** On active engagement, external blur collapses to `0 2px 4px rgba(90, 62, 43, 0.1)`, while inner shadows invert to simulate a thumb pressing into soft earthenware.

## Shapes
Forms throughout this design system are rounded and pillowy, echoing smooth river stones, rounded trail blazes, and hand-formed pottery.

- Standard buttons, badges, chips, and small tags use strict pill profiles (`rounded-full`).
- Cards, panels, bottom sheets, and modal frames use extreme rounded radii (`rounded-2xl` at 2rem to `rounded-3xl` at 3rem).
- Sharp angles and hard right angles are strictly avoided to preserve the soft, organic clay aesthetic.

## Components

### Buttons
- **Primary:** Background in Sage Green (`#87A96B`), text in White (`#FFFFFF`). Rendered with top-left white inner bevel and diffuse warm drop shadow.
- **Secondary / Soft Clay:** Background in `#EBE5DC`, text in Walnut Brown (`#5A3E2B`). Matte exterior with pill-shaped volume.
- **Pressed Feedback:** 100ms spring transition with subtle scale reduction (`scale(0.98)`) and inset top shadow.

### Chips & Trail Tags
- Compact pill-shaped containers with `#F3EFEA` background, a 1px soft border in `#EBE5DC`, and Walnut Brown text.
- Selected state activates Amber Glow (`#D5851F`) tint or Sage Green fill with pillowy depth.

### Cards & Waypoint Tiles
- Constructed using layered clay containers (`#F3EFEA` base or `#FFFFFF` overlay).
- Corner radius locked to 2rem (`rounded-2xl`).
- High-whitespace padding (`space-lg`), generous gaps between imagery and micro-labels. Minimal borders; structure is defined entirely by clay shadow volumes.

### Inputs & Search Bars
- Recessed/debossed clay treatment: inverted inner shadow simulating an indented tray (`inset 2px 2px 5px rgba(90, 62, 43, 0.08), inset -2px -2px 5px rgba(255, 255, 255, 0.8)`).
- Background in `#F3EFEA` with Walnut Brown placeholder text at 45% opacity.

### Selection Controls (Switches, Checkboxes, Radios)
- Toggle tracks are deeply inset clay troughs.
- Thumbs/handles are elevated circular clay pebbles that slide smoothly with physical weight and ease.

### Trail Waypoint Floating Markers
- Circular clay tokens elevated via Amber Glow ambient outer halos, marking elevation spikes or scenic lookout nodes on map layouts.