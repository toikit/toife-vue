# 🧩 Component: `TButton`

## Overview
`TButton` is a customizable button with three variants: `default`, `text`, `outline`. Supports sizes, loading state, rounded corners, full-width, and active background effect.

---

## Props

| Name | Type | Default | Description |
|-----|------|----------|------|
| `color` | `string \| null` | `null` | Color or system color name: `primary`, `secondary`, `success`, `warning`, `info`, `danger`. |
| `size` | `string` | `"standard"` | Size: `small`, `standard`, `large`. |
| `rounded` | `boolean` | `false` | 8px rounded corners. |
| `block` | `boolean` | `false` | Full width of the parent. |
| `loading` | `boolean` | `false` | Shows loading spinner and hides content. |
| `loadingType` | `string` | `"spinner"` | Spinner type for `TLoadingIcon`. |
| `variant` | `string` | `"default"` | Variant: `default`, `text`, `outline`. |
| `activeBackground` | `boolean` | `false` | Add subtle pressed background on active/focus. |

---

## Dynamic CSS Variables
Component sets CSS variables based on `variant` and `color`:
- `--border`
- `--color`
- `--background`

System colors map to `var(--t-color-status-<name>)` and `var(--t-color-status-<name>-text)`.

---

## Behavior
- When `loading = true`, shows `<t-icon-spinner>` overlay.
- When `activeBackground = true`, adds a light overlay on press/focus.
- Size class is auto-attached: `size-small | size-standard | size-large`.

---

## Usage

```vue
<template>
  <div class="stack">
    <t-button>Default</t-button>

    <t-button color="primary">Primary</t-button>
    <t-button color="#5b21b6">Custom Hex</t-button>

    <t-button variant="text" color="danger">Text Danger</t-button>
    <t-button variant="outline" color="success">Outline Success</t-button>

    <t-button size="small">Small</t-button>
    <t-button size="large" rounded block>Large Block</t-button>

    <t-button :loading="true" loadingType="spinner" color="secondary">Loading</t-button>

    <t-button activeBackground>Tap Effect</t-button>
  </div>
</template>
```

---

## Dependencies
- `TLoadingIcon`

---

## Notes
- Prefer system color names for theme consistency.
- Use `block` for mobile layouts; combine with `rounded` for action cards.
