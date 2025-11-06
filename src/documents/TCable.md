# 🧩 Component: `TCable`

## Overview
Sticky container attached to an edge (bottom/top/left/right), optionally adjusting for keyboard height.

---

## Props

| Name | Type | Default | Description |
|-----|------|----------|-------------|
| `keyboard` | `boolean` | `false` | Pushes content based on keyboard height. |
| `placement` | `string` | `"bottom"` | `bottom`, `top`, `left`, `right`. |

---

## Usage
```vue
<t-cable keyboard placement="bottom">
  <t-toolbar />
</t-cable>
```
