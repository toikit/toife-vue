# 🧩 Component: `TToast`

## Tổng quan
Thông báo nhỏ xuất hiện trên/duới, tuỳ biến màu/biến thể, có animation vào/ra.

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định |
|-----|------|----------|
| `message` | `any` | `-` |
| `space` | `any` | `"0px"` |
| `placement` | `string` | `"bottom"` |
| `color` | `any` | `null` |
| `variant` | `string` | `"default"` (text/outline) |
| `visible` | `boolean` | `false` |

---

## 🔄 Sự kiện
- `dismiss` – sau khi đóng.

---

## API (expose)
- `open()` – mở toast
- `close()` – đóng toast

---

## Cách dùng
```vue
<t-toast :visible="show" message="Saved!" placement="top" />
```
