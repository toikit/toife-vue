# 🧩 Component: `TAction`

## Tổng quan
`TAction` là một **Action Sheet Component** được sử dụng để hiển thị danh sách các hành động (button) ở phía **dưới màn hình**, tương tự như các modal hành động trong iOS hoặc Android.  
Component này hỗ trợ:
- Hiển thị nhiều nhóm nút (theo dạng mảng lồng nhau).
- Hiệu ứng "pop" khi người dùng click ra ngoài vùng nội dung.
- Tương tác mở/đóng bằng props hoặc hàm bên ngoài.

---

## 🖼️ Cấu trúc tổng thể

```vue
<t-present
  placement="bottom"
  :backdrop="true"
  :keepalive="false"
  :visible="_visible"
  @dismiss="onDismiss"
>
  <div class="t-action" :class="{ pop }" ref="container">
    <div v-for="buttons in props.actions">
      <t-button
        v-for="btn in buttons"
        :color="btn.color"
        :size="btn.size"
        :variant="btn.variant"
        @click="choose(btn)"
        block
      >
        {{ btn.text }}
      </t-button>
    </div>
  </div>
</t-present>
```

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định | Mô tả |
|-----|------|-----------|-------|
| `actions` | `Array<any>` | `[]` | Danh sách các nhóm nút. Mỗi nhóm là một mảng chứa các đối tượng nút. |
| `visible` | `boolean` | `false` | Xác định trạng thái hiển thị của Action Sheet. |
| `dismiss` | `Array<any>` | `[]` | Danh sách các giá trị sự kiện `dismiss` được phép đóng modal. |

**Ví dụ cấu trúc `actions`:**

```js
actions: [
  [
    { text: 'Chụp ảnh', color: 'primary', size: 'large', handler: takePhoto },
    { text: 'Chọn từ thư viện', color: 'secondary', handler: pickFromGallery }
  ],
  [
    { text: 'Hủy', color: 'error', handler: cancel }
  ]
]
```

---

## 🔄 Sự kiện (`emits`)

| Tên | Tham số | Mô tả |
|-----|----------|-------|
| `dismiss` | `(type: string, data?: any)` | Gửi ra khi người dùng chọn một nút hoặc click ra ngoài modal. |

**Các giá trị có thể của `type`:**
- `"choose"` → Khi người dùng click vào một nút hành động.
- `"backdrop"` → Khi click ra ngoài (nếu không nằm trong `props.dismiss`).
- Các giá trị khác tùy theo nội dung trong `props.dismiss`.

---

## 🧠 Biến trạng thái (`ref` & logic)

| Biến | Kiểu | Mô tả |
|------|------|-------|
| `_visible` | `Ref<boolean>` | Trạng thái mở/đóng thực tế của modal. |
| `container` | `Ref<Element>` | Tham chiếu DOM của phần tử `.t-action`. |
| `pop` | `Ref<boolean>` | Dùng để thêm hiệu ứng `pop` khi người dùng click ra ngoài. |

---

## 🧩 Hàm nội bộ

### `open()`
Mở Action Sheet.  
```ts
const open = () => { _visible.value = true }
```

### `choose(btn)`
Đóng Action Sheet và gọi `btn.handler()` nếu có.  
Emit sự kiện `dismiss` với tham số `"choose"`.  
```ts
const choose = (btn) => {
  _visible.value = false
  btn.handler && btn.handler()
  emit('dismiss', 'choose', btn?.data)
}
```

### `onDismiss(val)`
Xử lý khi click ra ngoài hoặc các hành động khác gửi từ `<t-present>`.  
Nếu `val` nằm trong `props.dismiss`, modal sẽ đóng lại.  
Nếu `val` là `"backdrop"`, thì chạy hiệu ứng `pop`.

### `watch(props.visible)`
Lắng nghe sự thay đổi của prop `visible` để tự động mở/đóng component.

### `defineExpose({ open, close })`
Cho phép gọi `open()` và `close()` từ bên ngoài thông qua `ref`.

---

## 🎨 CSS / SCSS

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

### Giải thích:
- `.t-action`: chứa toàn bộ nhóm button.
- `> div`: mỗi nhóm button (block).
- `.pop`: kích hoạt hiệu ứng rung nhẹ khi click ngoài vùng modal.
- `@keyframes pop`: tạo hiệu ứng "phồng nhẹ" để tăng tính tương tác.

---

## 💡 Cách sử dụng

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
    { text: 'Chụp ảnh', color: 'primary', handler: () => console.log('Take Photo') },
    { text: 'Chọn từ thư viện', color: 'secondary', handler: () => console.log('Pick Photo') }
  ],
  [{ text: 'Hủy', color: 'error' }]
];

const handleDismiss = (type, data) => {
  console.log('Dismissed:', type, data);
};

// Có thể gọi mở bằng JS
// actionSheet.value.open();
</script>
```

---

## 🧱 Phụ thuộc

| Tên | Mô tả |
|-----|-------|
| `TPresent` | Component nền (modal overlay), điều khiển hiển thị phần tử con. |
| `TButton` | Component nút tùy biến, hỗ trợ màu sắc và kích thước. |

---

## 📘 Ghi chú mở rộng

- `TAction` nên được sử dụng trong các context yêu cầu **xác nhận hành động**, **chọn lựa ảnh**, hoặc **chức năng nhanh** ở phần dưới màn hình.
- Có thể kết hợp với `v-model:visible` để điều khiển trực tiếp từ cha.
- Có thể thêm hiệu ứng hoặc animation khác bằng cách mở rộng class `.pop`.
