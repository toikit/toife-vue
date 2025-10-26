# 🧱 Component: `TApp`

## Tổng quan
`TApp` là component gốc (root container) của toàn bộ ứng dụng, chịu trách nhiệm:
- Đặt **kích thước khung ứng dụng** theo biến toàn cục CSS.
- Đảm bảo **vị trí, nền và bố cục ổn định** cho toàn bộ giao diện.
- Là **wrapper** chứa các component con thông qua `<slot>`.

---

## 🖼️ Cấu trúc tổng thể

```vue
<template>
  <div class="t-app"><slot/></div>
</template>
```

> Component chỉ gồm một thẻ bao `<div>` với class `.t-app`, bên trong hiển thị nội dung được truyền qua slot.

---

## 🎨 CSS

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

### Giải thích:
| Thuộc tính | Mô tả |
|-------------|-------|
| `height`, `width` | Xác định kích thước khung ứng dụng dựa vào biến toàn cục. |
| `max-height`, `max-width` | Giới hạn kích thước tối đa của ứng dụng. |
| `position: absolute` | Cố định container tại góc trên bên trái màn hình. |
| `overflow: hidden` | Ẩn nội dung tràn ra ngoài khung hiển thị. |
| `background-color` | Thiết lập màu nền tổng thể của ứng dụng. |

---

## ⚙️ Biến CSS sử dụng

| Biến | Mô tả |
|------|-------|
| `--t-app-height` | Chiều cao tổng thể của ứng dụng. |
| `--t-app-width` | Chiều rộng tổng thể của ứng dụng. |
| `--t-app-max-height` | Giới hạn chiều cao tối đa (dành cho các thiết bị lớn). |
| `--t-app-max-width` | Giới hạn chiều rộng tối đa. |
| `--t-color-background` | Màu nền chính của ứng dụng. |

---

## 💡 Cách sử dụng

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

> Tất cả các component chính (header, footer, content, modal...) nên được bao bên trong `TApp` để đảm bảo thống nhất bố cục và giới hạn kích thước.

---

## 📘 Ghi chú mở rộng

- `TApp` thường được dùng làm **layout gốc** trong các dự án Vue hoặc hybrid app.
- Các biến CSS (`--t-app-*`) có thể được cập nhật theo kích thước thiết bị để hỗ trợ **responsive layout**.
- Thường kết hợp với các component như `THeader`, `TMain`, `TFooter` trong cùng hệ thống giao diện.
