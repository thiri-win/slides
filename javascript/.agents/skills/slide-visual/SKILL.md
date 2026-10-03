---
name: slide-visual
description: Apply the established visual system when creating or editing Slidev decks that match the JavaScript deck, including canvas sizing, typography, code styling, layout, and content fit.
---

# Slide visual system

Use this skill when a Slidev deck should match the JavaScript deck in this workspace. Treat the reference deck's `slides.md` and `styles/index.css` as the implementation source of truth; inspect them before changing shared styling. Preserve the existing design unless the user asks for a new direction.

## Slidev configuration contract

- Match the reference deck's frontmatter, not only its CSS. Keep `background: '#F7F8FA'`, `class: text-left`, `transition: none`, `aspectRatio: '16/9'`, `canvasWidth: 1400`, and `colorSchema: light`.
- Declare the same font families in frontmatter: Inter with system sans-serif fallbacks for prose and JetBrains Mono with monospace fallbacks for code.
- Import the shared stylesheet explicitly before slide content with `<style>@import './styles/index.css';</style>`.
- If a new deck looks larger, heavier, or differently cropped than the reference, check these frontmatter settings and the stylesheet import before changing component CSS. A matching stylesheet alone does not guarantee matching rendered scale or type.

## Canvas and content fit

- Keep slide content top-aligned with the deck's normal inset padding. The cover may remain vertically centered; ordinary content slides should not be vertically centered.
- Use a clear heading area followed by a well-spaced content layout. Reuse the existing layout classes (`two-col`, `three-col`, `operator-grid`, and related components) where they fit.
- Keep all content inside the slide canvas. If material does not fit at the established readable sizes, continue it on another slide with the same visible title and a balanced layout; do not shrink text to force a fit.
- Choose columns according to the number and complexity of examples. Keep cards aligned and spacing consistent; avoid a stranded card or excessive unused space when a more balanced column count is practical.
- Reuse the reference deck's established topic grouping and divider pattern when organizing a matching lesson.

## Type and emphasis

- Use the existing minor-third type scale as the base for hierarchy and spacing.
- Preserve the established requested sizes: slide `h2` headings are `39.81px`; paragraph and code text are `16px` (`1rem`); preview labels are `16px`. The cover and `h3` sizing have existing overrides in the stylesheet; avoid broad changes to those rules unless asked.
- Use the sans family already defined by the deck for prose and headings: Inter with system sans-serif fallbacks. Use JetBrains Mono with the existing monospace fallbacks for code and operator symbols.
- Keep heading ink dark, supporting text muted, and small section/preview labels bold and purple/blue as established. Use weight for hierarchy (strong labels and section markers), not to bold whole paragraphs or code indiscriminately.
- Keep literal operator characters legible: disable font ligatures for code and operator displays so pairs such as `!=`, `!==`, `=>`, and `<=` remain visibly separate characters.

## Styling and implementation

- Follow the established palette and card/code treatment: pale gradient canvas, white cards with light borders, dark navy code panels, and restrained purple, pink, blue, and orange syntax accents.
- Keep code examples readable and syntactically faithful. Use the existing syntax-color spans and code-panel styles; do not replace source operators with typographic lookalike glyphs.
- Prefer a small, local layout adjustment over changing shared CSS. When shared styling must change, check similar slide components so the rule does not create inconsistent typography or overflow elsewhere.
- Preserve the lesson's existing content and sequence except where the user explicitly requests content changes.

## Verification

- After editing, inspect the affected slide source and check that content fits the slide at the established sizes; split overflow rather than compressing it.
- Run the deck's available build command from this folder when source or style changes could affect the presentation, and report any build limitation clearly.
