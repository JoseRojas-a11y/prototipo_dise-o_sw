---
name: Merchant Hub B2B
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#0a0054'
  on-tertiary: '#ffffff'
  tertiary-container: '#18008f'
  on-tertiary-container: '#8481ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3323cc'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.75rem
  margin: 1rem
  margin-tablet: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered specifically for fast-paced commercial wholesale merchants operating within active textile epicenters. The brand personality balances unyielding commercial stability with energetic, contemporary merchant efficiency. It must inspire immediate trust, decisive operation under bright ambient market light or rushed interactions, and proud ownership of business metrics.

The visual style blends **Corporate / Modern utilitarianism** with **tactile clarity**. Every screen relies on clear spatial chunking, high visual contrast, deliberate hierarchy, and zero ambiguity. Visual elements evoke the feeling of a dependable, high-precision physical counter terminal transposed to a pocket device: crisp card surfaces, definitive status switches, punchy metric callouts, and forgiving tap targets designed for one-handed thumb interaction on the move.

## Colors

The palette establishes an immediate sense of institutional reliability paired with unmistakable operational states:

- **Primary (`#1E293B` - Deep Slate Navy)**: Anchors structural navigation, top app bars, primary actionable surfaces, and dominant numerical metrics. Conveys permanence, financial integrity, and high-contrast readability against light backgrounds.
- **Secondary (`#10B981` - Emerald Commerce)**: Dedicated to active positive business states: the physical store status toggle ("Abierto / Recibiendo Pedidos"), upward growth trends (`+18.4%`), confirmed payment indicators, and primary inventory availability pills.
- **Tertiary (`#4F46E5` - Royal Indigo Accent)**: Serves as the dynamic textile/B2B accent for featured actions, batch order dispatches, wholesale client tiers, active tab underlines, and high-priority interactive badges.
- **Neutral (`#64748B` - Slate Neutral)**: Powers secondary labels, metadata captions, inactive icons, and structural divider borders.
- **Supporting Functional Colors**:
  - Danger / Alert (`#EF4444`): Closed store toggle ("Cerrado"), stock depletion warnings, and disputed wholesale orders.
  - Surface Foundation (`#F8FAFC`): Clean, cool off-white foundation reducing glare while preserving maximum contrast against white (`#FFFFFF`) card containers.
  - Surface Highlight Warmth (`#FFFBEB`): Used sparingly for pending cash/voucher reconciliations.

## Typography

The type system pairs the punchy, geometric friendliness of **Plus Jakarta Sans** for headlines and commercial figures with the hyper-legible, functional neutral mechanics of **Inter** for dense transactional tables, data rows, and UI controls.

- **Display & Metrics**: Key performance indicators (such as daily sales totals in S/., units moved, or live wholesale orders) use `display-metric` with tight line heights and prominent bold weights to ensure scanning from an arm's length.
- **Titles & Headers**: `headline-lg` and `headline-md` establish strong sections on merchant viewports, separating store controls from ledger tables.
- **Labels & Micro-copy**: `label-sm` and `label-md` enforce uppercase tracking (`letterSpacing: +0.02em`) for status badges, SKUs, and metric percentage differentials.

## Layout & Spacing

The layout is built primarily around a mobile-first, fluid column structure tailored to quick thumb gestures:

- **Mobile Viewport (up to 599px)**: 4-column fluid layout with `1rem` outer canvas margin and `0.75rem` internal gutters. Critical interactive modules span all 4 columns; comparison KPI cards span 2 columns each.
- **Tablet / Counter POS Viewport (600px - 1024px)**: 8-column layout with `1.5rem` outer canvas margin and `1rem` gutters. Accommodates dual-pane operational splits (e.g., active orders stream on the left, customer bill detail on the right).
- **Rhythm**: All spacing follows an 8pt base grid (`0.5rem`, `1rem`, `1.5rem`, `2rem`), reserving `0.25rem` strictly for tight vertical pairings (metric value + metric subtitle).
- **Touch Target Enclosure**: Interactive rows, navigation anchors, and status selectors are clamped to a minimum height of 48px, with high-frequency triggers reaching 56px to prevent mis-taps during hurried store transactions.

## Elevation & Depth

Visual hierarchy employs a **tonal layering and crisp low-contrast border** approach rather than heavy muddy dropshadows, ensuring maximum clarity under direct fluorescent or outdoor sunlight:

- **Canvas Base (`#F8FAFC`)**: Sits at base elevation level 0.
- **Card Containers (`#FFFFFF`)**: Elevated using a crisp `1px solid #E2E8F0` border accompanied by an ultra-subtle ambient shadow: `box-shadow: 0 1px 3px 0 rgba(30, 41, 59, 0.05)`.
- **Active State Toggles & Focus Cards**: Highlighted with an amplified ambient glow tinted to the respective state, e.g., for store status active: `0 4px 12px -2px rgba(16, 185, 129, 0.20)`.
- **Bottom Navigation Bar & Modals**: Grounded at highest surface tier with a clean upward diffused cutoff: `box-shadow: 0 -4px 16px 0 rgba(30, 41, 59, 0.06)` combined with a `1px` top border in `#E2E8F0`.

## Shapes

The design system implements **Roundedness 2 (Rounded)**:
- Standard structural elements, input fields, order detail rows, and KPI cards leverage `0.5rem` (8px) corner radii.
- Larger group surfaces and bottom sheet modal presentations utilize `rounded-lg` (`1rem` / 16px).
- Status badges, operational pill buttons, filter chips, and the primary "Abierto/Cerrado" toggle thumb adopt fully rounded pill geometry (`rounded-full`) to immediately signal active tappability and distinct contrast against card blocks.

## Components

### Buttons & Quick Triggers
- **Primary Action (Wholesale Dispatch, New Sale)**: Deep slate navy `#1E293B` background with white text, 52px height, `rounded-md` (8px), bold typography, and minimum 16px horizontal internal padding.
- **Accent Action (Catalog Share, Bulk WhatsApp Link)**: Tertiary `#4F46E5` background with white text, providing distinct separation from system operations.
- **Secondary / Ghost**: White background with `1.5px` border in `#E2E8F0`, dark slate text `#1E293B`, and active tap feedback via `#F1F5F9` background fill.

### Store Status Toggle ("Abierto / Cerrado")
- A high-visibility segmented switch positioned at the top right of the Merchant Panel.
- **Active State ("Abierto")**: Vivid emerald `#10B981` background, white bold text, pulsing live status dot (`#FFFFFF`), and emerald glow.
- **Inactive State ("Cerrado")**: Slate gray `#64748B` or crimson red `#EF4444` background indicating orders are paused.
- Large physical hit area: minimum 48px height × 130px width.

### KPI & Performance Cards
- Pure white container, 16px padding, subtle outline.
- Layout: Small uppercase category label (`label-sm`), bold numerical currency display (`display-metric` or `headline-md`), paired immediately with an inline growth badge (`+14.2%` in `#10B981` on `#ECFDF5` rounded pill).

### Order & Inventory Lists
- Card-encapsulated rows with minimum 56px row height.
- High-contrast textile attributes (e.g., "Algodón Pima 30/1 - 120 Rollos") with prominent order status tags (Pendiente, Despachado, Pagado).
- Chevrons and action icons rendered with 24px icon boxes and `#64748B` stroke.

### Input Fields & Search Bars
- 48px height, `#FFFFFF` surface with `1.5px solid #CBD5E1` border.
- Focused state expands to `#1E293B` or `#4F46E5` border with `2px` focus ring.
- Integrated quick-clear and scanner triggers for barcode/SKU input.

### Bottom Navigation Bar
- Fixed to viewport bottom, 64px height with safe area inset padding.
- Four primary sections: Inicio (Dashboard), Pedidos (Orders), Inventario (Catalog), and Finanzas (Ledger).
- Inactive items rendered in `#64748B`; active tab highlighted in `#1E293B` (or `#4F46E5`) with an active accent dot indicator beneath the 24px icon.