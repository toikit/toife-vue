# 🧩 Component: `TAvatar`

## Overview
Displays a circular or square avatar with flexible sizing.

---

## Props

| Name | Type | Default | Description |
|-----|------|----------|------|
| `square` | `boolean` | `false` | Square corners (default is circle). |
| `size` | `any` | `"standard"` | `small` (24px), `standard` (40px), `large` (60px), or any CSS size. |

---

## Usage
```vue
<t-avatar>
  <img src="/path/avatar.png" alt="" />
</t-avatar>

<t-avatar square size="large">
  <img src="/path/avatar.png" alt="" />
</t-avatar>
```
