---
name: The Good Ol' Boys
description: Sun-warmed acoustic Americana, country, and blues from 's-Hertogenbosch.
colors:
  parchment: "#fdf8ef"
  parchment-deep: "#f5ead0"
  card-cream: "#faf3e6"
  brown-deep: "#2c1810"
  brown: "#5c3218"
  brown-mid: "#7a4422"
  amber: "#b06c1f"
  gold: "#c17b2e"
  gold-dark: "#9a5e16"
  text-soft: "#4a2e1a"
  text-muted: "#7a5a40"
  white: "#ffffff"
  black: "#000000"
  warm-white: "#fff9f0"
typography:
  display:
    fontFamily: "Rye, cursive"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.04em"
  body:
    fontFamily: "Crimson Pro, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Stint Ultra Expanded, serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "2px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "6rem 2rem"
components:
  nav-social:
    backgroundColor: "rgba(176,108,31,0.06)"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.85rem"
  member-card:
    backgroundColor: "{colors.card-cream}"
    textColor: "{colors.brown-deep}"
    rounded: "{rounded.sm}"
    padding: "2.5rem 1.5rem"
  event-card:
    backgroundColor: "{colors.card-cream}"
    textColor: "{colors.brown-deep}"
    rounded: "{rounded.sm}"
    padding: "2.5rem"
  gallery-card:
    backgroundColor: "{colors.card-cream}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.sm}"
    padding: "1rem"
---

# Design System: The Good Ol' Boys

## Overview

**Creative North Star: "The Roadhouse Songbook"**

The current visual system reads as a sun-warmed, print-inspired music identity: parchment surfaces, dark brown ink, amber highlights, and real photography create the feeling of a familiar setlist passed around a live venue. It is nostalgic without becoming theatrical, and local, personal copy keeps the experience grounded.

Typography supplies the character. Rye gives section headings and names a hand-lettered Americana voice, Crimson Pro carries long-form reading with warmth, and Stint Ultra Expanded handles small uppercase metadata like a printed show card. Layout stays centered and calm, then makes room for asymmetric photography and gentle hover movement.

**Key Characteristics:**
- Parchment and cream tonal layering with dark brown text.
- Amber used as a scarce musical accent for rules, links, dates, and states.
- Display typography with a hand-lettered Western reference, supported by an editorial serif body.
- Fine borders, nearly square card corners, circular portraits, and soft ambient shadows.
- Real people, venues, live photographs, and video lead the experience.

## Colors

The palette is earthy and low-glare: warm paper carries most surfaces, brown establishes hierarchy, and amber marks attention and interaction.

### Primary
- **Burnished Amber** (#b06c1f): Primary accent for links, dividers, dates, labels, hover states, and small decorative marks.
- **Sunlit Gold** (#c17b2e): Brighter accent used in gradients, hero atmosphere, and warm image framing.

### Secondary
- **Deep Brown** (#2c1810): Primary ink for headings, navigation, song titles, and strong text.
- **Mid Brown** (#5c3218): Supporting brown for gradients and structural accents.
- **Terracotta Brown** (#7a4422): Secondary structural accent and image-frame shading.

### Neutral
- **Parchment** (#fdf8ef): Main page background and lightbox image border context.
- **Parchment Deep** (#f5ead0): Alternate tonal surface and gallery atmosphere.
- **Card Cream** (#faf3e6): Cards, setlist backing, event surfaces, and video framing.
- **Soft Text Brown** (#4a2e1a): Comfortable paragraph and supporting copy color.
- **Muted Text Brown** (#7a5a40): Metadata, captions, and secondary labels.
- **Warm White** (#fff9f0): Text over dark image overlays.

### Named Rules
**The Amber Signal Rule.** Amber is an accent, not a fill for every surface. Reserve it for orientation, interaction, dates, and small moments of emphasis.

## Typography

**Display Font:** Rye (with cursive fallback)
**Body Font:** Crimson Pro (with Georgia, serif fallback)
**Label/Mono Font:** Stint Ultra Expanded (with serif fallback)

**Character:** The pairing combines a recognizable Americana display face with a literary serif for warmth and readability. Stint Ultra Expanded creates the compact, all-caps language of a printed ticket, setlist, or venue placard.

### Hierarchy
- **Display** (regular, `clamp(2rem, 5vw, 3rem)`, approximately 1.2 line-height): Section titles, member names, event names, and image captions.
- **Headline** (regular, `clamp(1.15rem, 2.7vw, 1.5rem)`): Countdown event name and prominent live-performance labels.
- **Title** (600, `1.05rem`): Song titles and other high-priority body-level names.
- **Body** (400, `18px`, `1.7` line-height): Main reading copy; feature text expands to `1.15rem` with a more generous `1.9` line-height.
- **Label** (regular, `0.7rem` to `0.85rem`, `0.11em` to `0.16em` tracking, uppercase): Navigation, dates, roles, metadata, countdown copy, and footer actions.

### Named Rules
**The Three-Voice Rule.** Use Rye for identity and names, Crimson Pro for reading, and Stint Ultra Expanded for compact metadata. Do not introduce a fourth display voice without replacing an existing role deliberately.

## Layout

The page is a centered single-column sequence with a maximum content width of 1100px for standard sections and 1200px for image-heavy sections. Sections use `6rem 2rem` vertical and horizontal padding on larger screens, reducing to `4rem 1.2rem` below 768px. The fixed navigation uses a 1200px inner bar with `0.6rem 2rem` padding.

The primary content rhythm is stacked and centered: the About section uses a centered reading measure and three member cards; the repertoire is a 700px setlist; performances use a responsive grid capped at 900px; the gallery changes from a 12-column asymmetric composition to a single-column 16:9 stack below 768px. The navigation becomes a 280px right-side drawer below 768px. Content-heavy sections use `content-visibility: auto` below the hero.

## Elevation & Depth

The system is layered and lightly lifted. Tonal shifts, fine translucent borders, gradients, image overlays, and the paper-like noise texture provide most of the depth. Shadows stay soft and brown-tinted, appearing on cards, media frames, portraits, hover states, and the lightbox image rather than as a universal card treatment.

### Shadow Vocabulary
- **Card rest:** `0 14px 34px rgba(44,24,16,0.08)` for gallery cards and similar media surfaces.
- **Card hover:** `0 8px 30px rgba(44,24,16,0.06)` for member and event cards; gallery hover increases to `0 20px 44px rgba(44,24,16,0.14)`.
- **Media frame:** `0 14px 36px rgba(44,24,16,0.08)` for the promo video and `0 14px 40px rgba(44,24,16,0.05)` for the gallery introduction.
- **Portrait:** `0 10px 26px rgba(44,24,16,0.12)` around circular member portraits.
- **Lightbox:** `0 25px 60px rgba(0,0,0,0.4)` for the enlarged photograph.

### Named Rules
**The Paper-First Rule.** Establish hierarchy with parchment layers and borders before adding a shadow; depth should feel ambient and tactile, never glossy or floating.

## Shapes

Most cards and media frames use a restrained `2px` radius, keeping the visual language close to printed paper and framed photographs. Circular geometry is reserved for member portraits and the compact Instagram navigation chip. Borders are usually `1px` and translucent brown or amber. Image cards clip their media and overlays to the same small radius; lightbox close controls are circular while navigation controls remain nearly square.

## Components

### Navigation
- **Shape:** Fixed translucent parchment bar with a fine brown divider; mobile becomes a right-side 280px drawer.
- **Typography:** Crimson Pro is not used here; links use compact uppercase labels at `0.85rem`, `0.15em` tracking, and 600 weight.
- **Default:** Deep brown at `0.6` opacity.
- **Hover:** Amber color, full opacity, and a 1px underline that grows from zero width.
- **Social variant:** Amber text inside a lightly tinted amber pill with a 1px border; the Instagram icon is 16px.
- **Mobile:** Three-line toggle becomes an X, and links stack with `1.5rem` gaps.

### Cards / Containers
- **Corner Style:** `2px` radius for member, event, countdown, setlist, gallery, and video containers.
- **Background:** Card Cream (#faf3e6), sometimes layered with Parchment Deep (#f5ead0) gradients.
- **Border:** 1px translucent Deep Brown, becoming warmer on hover.
- **Internal Padding:** `2.5rem` for desktop member/event cards, `1.8rem` on mobile; `2rem` for gallery intro; `1rem` around the video.
- **State:** Hover lifts interactive cards 3px to 6px and increases the ambient shadow; event cards reveal a 3px amber-to-brown edge.

### Setlist
- **Shape:** Centered 700px paper-backed list with fine dotted leader lines.
- **Rows:** `0.85rem 1.5rem` padding, separated by 1px translucent rules.
- **State:** Hover shifts the row background to a faint gold wash and increases left padding.
- **Responsive:** Song artist labels wrap and rows become flexible below 480px.

### Gallery
- **Shape:** Asymmetric 12-column composition with clipped image cards and caption overlays.
- **Color:** Real photographs are darkened by a brown bottom gradient so white captions remain legible.
- **State:** Hover lifts, rotates by `-0.3deg`, scales the image to `1.05`, and strengthens the overlay.
- **Behavior:** Cards open a dark, blurred lightbox with circular close control, nearly square previous/next controls, a counter, keyboard arrows, and mobile swipe support.

### Links
- **Primary action:** Amber text with a short translucent amber underline, uppercase `0.1em` tracking, and 2px bottom padding.
- **Hover:** Shifts to Gold Dark (#9a5e16) and strengthens the underline.
- **Use:** Contact, venue details, Instagram, and in-page discovery actions remain text-led rather than pill-heavy.

### Media
- **Promo video:** 16:9 video inside a cream gradient frame with 1rem padding, a 1px inner border, and a black player surface.
- **Portraits:** 200px circular image frames on desktop and 180px on mobile, using a warm diagonal gradient ring and a 2px parchment border.

## Do's and Don'ts

### Do:
- **Do** preserve the parchment, deep brown, and amber relationship when extending the interface.
- **Do** use the existing Rye, Crimson Pro, and Stint Ultra Expanded roles consistently.
- **Do** let real band photography, performance dates, venues, and the promo video carry credibility.
- **Do** use 1px translucent borders, restrained `2px` corners, and soft brown-tinted shadows.
- **Do** keep interaction motion gentle and honor the existing reduced-motion media query.
- **Do** make the centered layout and asymmetric gallery collapse cleanly at the existing 768px and 480px breakpoints.

### Don't:
- **Don't** replace the warm paper identity with a generic white, neon, or dark-mode system without an explicit redesign request.
- **Don't** turn every action into a rounded pill; the incumbent uses pills only for the social navigation variant.
- **Don't** introduce additional display fonts that compete with Rye or use Stint Ultra Expanded for paragraphs.
- **Don't** fabricate event details, testimonials, clients, metrics, or booking claims.
- **Don't** use heavy shadows, glossy gradients, or decorative UI that overwhelms the real music and photography.