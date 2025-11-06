# 🧩 Component: `TAction`

## Overview
`TAction` is an Action Sheet component that shows groups of actions (buttons) at the bottom of the screen, similar to iOS/Android action sheets. It supports:
- Multiple button groups (nested arrays)
- A subtle "pop" effect when clicking outside
- Open/close by props or exposed methods

---

## Structure

```vue
<t-present
  placement="bottom"
  :backdrop="true"
  :keepalive="false"
  :visible="_visible"
  @dismiss="onDismiss"
>
  <div class="t-action" :class="{ pop }" ref="container">
    <div v-for="(buttons, groupIndex) in props.actions" :key="groupIndex">
      <t-button
        v-for="(btn, btnIndex) in buttons"
        :key="btn.key ?? `${groupIndex}-${btnIndex}`"
        :color="btn.color"
        :size="btn.size"
        :variant="btn.variant"
        @pointerup="choose(btn)"
        block
      >
        {{ btn.text }}
      </t-button>
    </div>
  </div>
</t-present>
```

---

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `Array<any>` | `[]` | List of button groups. Each group is an array of button objects. |
| `visible` | `boolean` | `false` | Controls visibility. |
| `dismiss` | `Array<any>` | `[]` | List of `dismiss` values that will close the sheet. |

Example `actions` structure:

```js
actions: [
  [
    { text: 'Take Photo', color: 'primary', size: 'large', handler: takePhoto },
    { text: 'Choose from Library', color: 'secondary', handler: pickFromGallery }
  ],
  [
    { text: 'Cancel', color: 'error', handler: cancel }
  ]
]
```

---

## Emits

| Name | Params | Description |
|------|--------|-------------|
| `dismiss` | `(type: string, data?: any)` | Emitted when a button is chosen or user clicks outside. |

Possible `type` values:
- `"choose"` – when a button is selected
- `"backdrop"` – clicking outside (if not included in `props.dismiss`)
- Other values you pass in `props.dismiss`

---

## State & Logic

| Name | Type | Description |
|------|------|-------------|
| `_visible` | `Ref<boolean>` | Actual open/close state of the sheet. |
| `container` | `Ref<Element>` | DOM ref of `.t-action`. |
| `pop` | `Ref<boolean>` | Controls the subtle pop animation when clicking backdrop. |

---

## Internal Methods

### `open()`
Opens the action sheet.
```ts
const open = () => { _visible.value = true }
```

### `choose(btn)`
Closes the sheet and runs `btn.handler()` if provided. Emits `dismiss` with `"choose"`.
```ts
const choose = (btn) => {
  _visible.value = false
  btn.handler && btn.handler()
  emit('dismiss', 'choose', btn?.data)
}
```

### `onDismiss(val)`
Handle backdrop or other `dismiss` triggers from `<t-present>`. If `val` is in `props.dismiss`, the sheet closes. If `val` is `"backdrop"`, the `pop` effect is played.

### `watch(props.visible)`
Reactively open/close based on `visible`.

### `defineExpose({ open, close })`
Expose methods to the parent via `ref`.

---

## Styles (SCSS)

```scss
.t-action {
  width: var(--t-app-width);
  max-width: var(--t-app-max-width);
  margin-bottom: var(--t-safe-area-bottom);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background-color: var(--t-color-surface);
    max-width: var(--t-overlay-max-width);

    &:last-child {
      margin-bottom: 1rem !important;
    }
  }

  &.pop {
    animation: pop 0.3s ease-in-out;
  }
}

@keyframes pop {
  0%, 70%, 100% { transform: scale(1); }
  50%, 80% { transform: scale(1.1); }
}
```

Notes:
- `.t-action` wraps button groups
- `> div` is each group block
- `.pop` triggers a subtle bounce when clicking the backdrop

---

## Usage

```vue
<template>
  <t-action
    ref="actionSheet"
    :actions="actionList"
    :visible="show"
    :dismiss="['choose', 'cancel']"
    @dismiss="handleDismiss"
  />
</template>

<script setup>
import { ref } from 'vue';
import TAction from '@/components/t-action.vue';

const show = ref(false);
const actionSheet = ref();

const actionList = [
  [
    { text: 'Take Photo', color: 'primary', handler: () => console.log('Take Photo') },
    { text: 'Pick from Library', color: 'secondary', handler: () => console.log('Pick Photo') }
  ],
  [{ text: 'Cancel', color: 'error' }]
];

const handleDismiss = (type, data) => {
  console.log('Dismissed:', type, data);
};

// JS open
// actionSheet.value.open();
</script>
```

---

## Dependencies

| Name | Description |
|------|-------------|
| `TPresent` | Overlay container that controls visibility and placement. |
| `TButton` | Button component with color/size variants. |

---

## Notes
- Use `TAction` for confirmations, quick actions, or media pickers at the bottom of the screen.
- Can be paired with `v-model:visible` for 2-way binding.
- You can customize the pop animation by extending `.pop`.
