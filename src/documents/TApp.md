# 🧱 Component: `TApp`

## Overview
`TApp` is the root container of the application. It:
- Sets the application frame size using global CSS variables
- Ensures stable positioning, background, and layout
- Acts as a wrapper for child components via `<slot>`

---

## Structure

```vue
<template>
  <div class="t-app"><slot/></div>
</template>
```

> A single wrapper `<div>` with class `.t-app` that renders slot content.

---

## CSS

```css
.t-app {
  height: var(--t-app-height);
  width: var(--t-app-width);
  max-height: var(--t-app-max-height);
  max-width: var(--t-app-max-width);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: var(--t-color-background);
}
```

Explanation:
| Property | Meaning |
|----------|---------|
| `height`, `width` | App frame size via global variables |
| `max-height`, `max-width` | Limits for large devices |
| `position: absolute` | Pins container to top-left |
| `overflow: hidden` | Hides overflow content |
| `background-color` | App background color |

---

## CSS Variables

| Variable | Description |
|----------|-------------|
| `--t-app-height` | Overall app height |
| `--t-app-width` | Overall app width |
| `--t-app-max-height` | Max height limit |
| `--t-app-max-width` | Max width limit |
| `--t-color-background` | App background color |

---

## Usage

```vue
<template>
  <t-app>
    <main-view />
  </t-app>
</template>

<script setup>
import TApp from '@/components/t-app.vue';
import MainView from '@/views/MainView.vue';
</script>
```

> Place all primary UI (header, content, modals, etc.) inside `TApp` to keep layout and sizing consistent.

---

## Notes
- Use `TApp` as the root layout in Vue/hybrid apps
- `--t-app-*` variables can be adapted per device for responsive layouts
- Commonly paired with header/content/footer components in the same design system
