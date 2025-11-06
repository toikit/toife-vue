# 🧩 Component: `TBackButton`

## Overview
Back button with fallback behavior priority: custom `onBack` attr, `router.back()` if there is a previous screen, otherwise `router.push(to)`.

---

## Props

| Name | Type | Default | Description |
|-----|------|----------|-------------|
| `to` | `any` | `-` | Route to push if cannot go back. |
| `router` | `any` | `-` | Optional router instance to use instead of `useRouter()`. |

---

## Events/Attrs
- Attr `onBack` (from `useAttrs`) will be called instead of default navigation when provided.

---

## Usage
```vue
<t-back-button />
<t-back-button :to="{ name: 'home' }" />
```
