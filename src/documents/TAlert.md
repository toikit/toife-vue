# ⚠️ Component: `TAlert`

## Overview
`TAlert` is a centered alert dialog component, typically used for confirmations, warnings, or important messages. It consists of:
- Header: title (or custom slot)
- Content: message body
- Footer: action buttons (OK, Cancel, etc.)

---

## Structure

```vue
<t-present placement="center" :backdrop="true" :keepalive="false" :visible="visible" @dismiss="onDismiss">
  <div class="t-alert" :class="{pop}" ref="container">
    <slot name="header">
      <div class="t-alert-header" v-if="props.title">{{ props.title }}</div>
    </slot>
    <slot name="content">
      <div class="t-alert-content">{{ props.message }}</div>
    </slot>
    <slot name="footer">
      <div class="t-alert-footer">
        <t-button v-for="btn in props.actions" :color="btn.color" :variant="btn.variant" @pointerup="choose(btn)">
          {{ btn.text }}
        </t-button>
      </div>
    </slot>
  </div>
</t-present>
```

---

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | No | Dialog title |
| `message` | `string` | Yes | Message body |
| `actions` | `Array<any>` | Yes | List of action buttons for the footer |
| `dismiss` | `Array<any>` | No | List of `dismiss` values that should close the dialog |

Example `actions`:
```js
actions: [
  { text: 'Confirm', color: 'primary', handler: onConfirm },
  { text: 'Cancel', color: 'secondary', handler: onCancel }
]
```

---

## Emits

| Name | Params | Description |
|------|--------|-------------|
| `dismiss` | `(type: string, data?: any)` | Emitted when an action is selected or user clicks outside |

Possible `type` values:
- `"choose"` – when an action button is clicked
- `"backdrop"` – clicking outside (if not permitted by `props.dismiss`)
- Others as defined in `props.dismiss`

---

## State & Logic

| Name | Type | Description |
|------|------|-------------|
| `visible` | `Ref<boolean>` | Controls dialog visibility |
| `container` | `Ref<Element>` | DOM ref of `.t-alert` |
| `pop` | `Ref<boolean>` | Triggers subtle pop animation on backdrop click |

---

## Internal Methods

### `open()`
Open the alert.
```ts
const open = () => {
  visible.value = true;
}
```

### `choose(btn)`
Close the alert and run `btn.handler()` if present, then emit `dismiss`.
```ts
const choose = (btn:any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}
```

### `onDismiss(val)`
Handle outside click or dismiss from `t-present`. If `val` is in `props.dismiss`, the dialog will close. If `val` is `"backdrop"`, play the `pop` animation for 300ms.

---

## Exposed Methods

```ts
defineExpose({
  open
});
```
> Allows parent to call `ref.value.open()` to open programmatically.

---

## Styles (SCSS)

```scss
.t-alert {
  border-radius: 8px;
  background-color: var(--t-color-surface);
  position: relative;
  width: 270px;
  overflow: hidden;

  .t-alert-header {
    padding: var(--t-size-2);
    border-bottom: 0.55px solid var(--t-color-separate);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .t-alert-content {
    padding: var(--t-size-2);
  }

  .t-alert-footer {
    display: flex;
    flex-direction: row;
    border-top: 0.55px solid var(--t-color-separate);

    > * {
      flex: 1;
    }

    .t-button {
      font-weight: 600;
    }
  }

  &.pop {
    animation: pop 0.3s ease-in-out;
  }
}

@keyframes pop {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  70%  { transform: scale(1); }
  80%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

Notes:
- `.t-alert`: main wrapper
- `.t-alert-header`: title / custom header slot
- `.t-alert-content`: message area
- `.t-alert-footer`: action buttons
- `.pop`: subtle bounce on backdrop click

---

## Usage

```vue
<template>
  <t-alert
    ref="alertRef"
    :title="'Delete confirmation'"
    :message="'Are you sure you want to delete this item?'"
    :actions="alertActions"
    :dismiss="['choose', 'cancel']"
    @dismiss="handleDismiss"
  />
</template>

<script setup>
import { ref } from 'vue';
import TAlert from '@/components/t-alert.vue';

const alertRef = ref();

const alertActions = [
  { text: 'Confirm', color: 'primary', handler: () => console.log('Confirmed!') },
  { text: 'Cancel', color: 'secondary' }
];

const handleDismiss = (type, data) => {
  console.log('Alert dismissed:', type, data);
};

// Programmatic
// alertRef.value.open();
</script>
```

---

## Dependencies

| Name | Description |
|-----|-------------|
| `TPresent` | Centered modal/overlay presenter |
| `TButton` | Reusable button with variants and colors |

---

## Notes
- Great for user confirmation flows.
- Can be wrapped in a Promise to act like `confirm()`.
- Supports header/content/footer customization via slots.
