# 🧩 Component: `TPresent`

## Overview
`TPresent` presents content as an overlay/modal container at `top`, `bottom`, `left`, `right`, or `center`, with a backdrop and configurable transitions.

---

## Props

| Name | Type | Default | Description |
|-----|------|----------|-------------|
| `keepalive` | `boolean` | `true` | Keep DOM when hidden (`v-show`) to avoid re-mount. |
| `visible` | `boolean` | `false` | Visibility state. |
| `backdrop` | `boolean` | `true` | Enable/disable dimmed backdrop. |
| `placement` | `string` | `"bottom"` | Position: `top`, `left`, `right`, `center`, `bottom`. |
| `style` | `any` | `-` | Style object for root. |
| `class` | `any` | `-` | Extra class for root. |
| `bounce` | `any` | `-` | Initial bounce distance (e.g. `20px`). Auto-inverted by placement. |
| `duration` | `number` | `200` | Animation duration (ms). |

---

## Emits

| Name | Params | Description |
|-----|--------|-------------|
| `dismiss` | `(type: 'backdrop')` | Fired when user taps the backdrop.

---

## Internal CSS Variables
- `--t-present-backdrop-opacity` (defaults to `0.4` when open)
- `--t-present-transition`
- `--t-present-content-transform`
- `--t-present-content-opacity`

Values are updated via `render()` during open/close.

---

## Exposed API
- `open()` – applies open styles, supports one-time `bounce` until closed
- `close()` – applies close styles based on `placement`
- `render(partial)` – override transition/opacity/transform/backdropOpacity

> `isRender` is true if `visible` or `keepalive = true` to keep DOM.

---

## Usage

```vue
<template>
  <t-present
    :visible="show"
    placement="bottom"
    :backdrop="true"
    :duration="250"
    :keepalive="false"
    :bounce="'24px'"
    @dismiss="onDismiss"
  >
    <div class="sheet">
      <h3>My Sheet</h3>
      <p>Any content...</p>
    </div>
  </t-present>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const onDismiss = () => {
  show.value = false;
};
</script>
```

---

## Notes
- With `placement = 'center'`, closing uses opacity instead of translation.
- When `backdrop = false`, `--t-present-backdrop-opacity = 0` is applied.
- `z-index` is managed by `presentController.getNewIndex()` to stack correctly.
