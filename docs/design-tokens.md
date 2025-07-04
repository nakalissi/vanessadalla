# Design Tokens

## Overview
Design tokens are the single source of truth for color, spacing, typography, border-radius, shadows, and other style values used throughout the application.

## Tokens

### Colors
- `primary`: #1D4ED8
- `secondary`: #64748B
- `accent`: #F59E42
- `background`: #FFFFFF (light), #18181B (dark)
- `surface`: #F3F4F6 (light), #27272A (dark)
- `error`: #DC2626
- `success`: #16A34A
- `warning`: #F59E42
- `info`: #2563EB
- `on-primary`: #FFFFFF
- `on-background`: #18181B

### Spacing
- `space-xxs`: 2px
- `space-xs`: 4px
- `space-sm`: 8px
- `space-md`: 16px
- `space-lg`: 24px
- `space-xl`: 32px
- `space-xxl`: 48px

### Typography
- `font-family-base`: 'Inter', sans-serif
- `font-size-xs`: 12px
- `font-size-sm`: 14px
- `font-size-md`: 16px
- `font-size-lg`: 20px
- `font-size-xl`: 24px
- `font-size-xxl`: 32px
- `font-weight-regular`: 400
- `font-weight-medium`: 500
- `font-weight-bold`: 700

### Border Radius
- `radius-xs`: 2px
- `radius-sm`: 4px
- `radius-md`: 8px
- `radius-lg`: 16px
- `radius-full`: 9999px

### Shadows
- `shadow-xs`: 0 1px 2px 0 rgba(0,0,0,0.05)
- `shadow-sm`: 0 1px 3px 0 rgba(0,0,0,0.1)
- `shadow-md`: 0 4px 6px -1px rgba(0,0,0,0.1)
- `shadow-lg`: 0 10px 15px -3px rgba(0,0,0,0.1)

---

# filepath: /docs/components.md
# Component Library

## Overview
This document describes the reusable components available in the project, their props, and usage guidelines.

## Atoms
- **Button**: Primary, secondary, icon, loading states.
- **Input**: Text, password, textarea, with validation.
- **Avatar**: User image or initials.

## Molecules
- **FormField**: Label + Input + Error message.
- **Card**: Container with shadow, padding, and optional header/footer.
- **Modal**: Dialog with overlay, close button, and content slot.

## Organisms
- **Navbar**: Responsive navigation bar with logo, links, and user menu.
- **Sidebar**: Collapsible navigation for dashboard layouts.
- **DataTable**: Table with sorting, filtering, and pagination.

## Usage Example

```jsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="md">Save</Button>
```

---

# filepath: /docs/theming.md
# Theming Guidelines

## Overview
Theming enables support for light/dark modes and custom color schemes.

## Implementation

- **Theme Provider**: Use a React context to manage theme state (`light`, `dark`, `system`).
- **CSS Variables**: Define color tokens as CSS variables in `:root` and `[data-theme="dark"]`.
- **Tailwind Config**: Reference CSS variables in `tailwind.config.js` for dynamic theming.

## Example

```css
:root {
  --color-primary: #1D4ED8;
  --color-background: #FFFFFF;
}
[data-theme="dark"] {
  --color-primary: #60A5FA;
  --color-background: #18181B;
}
```

## Usage

```jsx
<div className="bg-primary text-on-primary">
  Themed content
</div>
```

---

# filepath: /docs/style-guide.md
# Visual Style Guide

## Color Palette

| Name        | Light         | Dark          |
|-------------|--------------|---------------|
| Primary     | #1D4ED8      | #60A5FA       |
| Background  | #FFFFFF      | #18181B       |
| Surface     | #F3F4F6      | #27272A       |
| Error       | #DC2626      | #F87171       |

## Typography

- **Font Family:** 'Inter', sans-serif
- **Font Sizes:** 12px, 14px, 16px, 20px, 24px, 32px
- **Font Weights:** 400, 500, 700

## Spacing

- Use multiples of 4px for margin and padding.
- Consistent vertical rhythm between sections.

## Border Radius

- Use `radius-md` (8px) for cards and modals.
- Use `radius-full` for avatars and circular buttons.

## Shadows

- Use `shadow-md` for cards.
- Use `shadow-lg` for modals.

---

# filepath: /docs/README.md
# Design Documentation Index

- [Design Tokens](./design-tokens.md)
- [Component Library](./components.md)
- [Theming Guidelines](./theming.md)
- [Visual Style Guide](./style-guide.md)