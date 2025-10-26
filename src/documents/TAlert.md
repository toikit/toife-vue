# ⚠️ Component: `TAlert`

## Tổng quan
`TAlert` là một **Alert Dialog Component** hiển thị thông báo trung tâm màn hình, thường dùng để xác nhận, cảnh báo hoặc hiển thị thông tin quan trọng cho người dùng.  
Component này có ba phần chính:
- **Header:** Tiêu đề (hoặc slot tùy chỉnh)
- **Content:** Nội dung thông báo
- **Footer:** Các nút hành động (OK, Cancel, v.v.)

---

## 🧱 Cấu trúc tổng thể

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
        <t-button v-for="btn in props.actions" :color="btn.color" :variant="btn.variant" @click="choose(btn)">
          {{ btn.text }}
        </t-button>
      </div>
    </slot>
  </div>
</t-present>
```

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Bắt buộc | Mô tả |
|-----|------|-----------|-------|
| `title` | `string` | ❌ | Tiêu đề của Alert. |
| `message` | `string` | ✅ | Nội dung chính hiển thị trong Alert. |
| `actions` | `Array<any>` | ✅ | Danh sách các nút hành động hiển thị ở footer. |
| `dismiss` | `Array<any>` | ❌ | Danh sách giá trị sự kiện `dismiss` được phép đóng modal. |

**Ví dụ cấu trúc `actions`:**
```js
actions: [
  { text: 'Đồng ý', color: 'primary', handler: onConfirm },
  { text: 'Hủy', color: 'secondary', handler: onCancel }
]
```

---

## 🔄 Sự kiện (`emits`)

| Tên | Tham số | Mô tả |
|-----|----------|-------|
| `dismiss` | `(type: string, data?: any)` | Gửi ra khi người dùng chọn một nút hoặc click ra ngoài vùng Alert. |

**Các giá trị có thể của `type`:**
- `"choose"` → Khi người dùng chọn một trong các nút hành động.
- `"backdrop"` → Khi click ra ngoài (nếu không nằm trong `props.dismiss`).
- Các giá trị khác theo `props.dismiss`.

---

## 🧠 Biến trạng thái (`ref` & logic)

| Biến | Kiểu | Mô tả |
|------|------|-------|
| `visible` | `Ref<boolean>` | Kiểm soát hiển thị Alert. |
| `container` | `Ref<Element>` | Tham chiếu DOM của phần tử `.t-alert`. |
| `pop` | `Ref<boolean>` | Dùng để kích hoạt hiệu ứng "pop" khi click ra ngoài. |

---

## 🧩 Hàm nội bộ

### `open()`
Mở Alert.  
```ts
const open = () => {
  visible.value = true;
}
```

### `choose(btn)`
Đóng Alert và gọi `btn.handler()` nếu có, sau đó emit sự kiện `dismiss`.  
```ts
const choose = (btn:any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}
```

### `onDismiss(val)`
Xử lý khi người dùng click ra ngoài hoặc có sự kiện dismiss từ `t-present`.  
Nếu `val` nằm trong `props.dismiss`, modal sẽ đóng lại.  
Nếu `val` là `"backdrop"`, chạy hiệu ứng `pop` trong 300ms.

---

## 🧩 Hàm lộ ra ngoài (`defineExpose`)

```ts
defineExpose({
  open
});
```
> Cho phép component cha gọi `ref.value.open()` để mở Alert bằng JavaScript.

---

## 🎨 CSS / SCSS

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

**Giải thích:**
- `.t-alert`: khung chính của Alert.
- `.t-alert-header`: chứa tiêu đề hoặc slot tùy chỉnh.
- `.t-alert-content`: chứa nội dung chính.
- `.t-alert-footer`: chứa danh sách nút hành động.
- `.pop`: hiệu ứng "phồng nhẹ" khi click ra ngoài.

---

## 💡 Cách sử dụng

```vue
<template>
  <t-alert
    ref="alertRef"
    :title="'Xác nhận xóa'"
    :message="'Bạn có chắc chắn muốn xóa mục này không?'"
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
  { text: 'Đồng ý', color: 'primary', handler: () => console.log('Confirmed!') },
  { text: 'Hủy', color: 'secondary' }
];

const handleDismiss = (type, data) => {
  console.log('Alert dismissed:', type, data);
};

// Gọi thủ công bằng JS
// alertRef.value.open();
</script>
```

---

## 🧱 Phụ thuộc

| Tên | Mô tả |
|-----|-------|
| `TPresent` | Component modal nền điều khiển hiển thị trung tâm màn hình. |
| `TButton` | Component nút tái sử dụng hỗ trợ màu sắc, kích thước và variant. |

---

## 📘 Ghi chú mở rộng

- `TAlert` phù hợp cho các tình huống cần xác nhận hành động từ người dùng.  
- Có thể kết hợp với **Promise wrapper** để hiển thị như `confirm()`.  
- Hỗ trợ tùy chỉnh nội dung qua **slots** (`header`, `content`, `footer`).  
