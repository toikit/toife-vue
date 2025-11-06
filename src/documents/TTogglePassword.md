# 🧩 Component: `TTogglePassword`

## Tổng quan
Nút bật/tắt hiển thị mật khẩu, tự động tìm `input` trong phần tử cha.

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định |
|-----|------|----------|
| `color` | `any` | `"warning"` |

---

## 🔄 Sự kiện
- `change` `(isShow: boolean)` – khi trạng thái hiển thị thay đổi.

---

## Slots
- `on` – icon khi đang hiện
- `off` – icon khi đang ẩn

---

## Cách dùng
```vue
<div class="password-field">
  <input type="password" />
  <t-toggle-password />
</div>
```
