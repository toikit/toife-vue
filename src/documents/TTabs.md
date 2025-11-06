# 🧩 Component: `TTabs`

## Tổng quan
Danh sách tab với 3 biến thể: `border-under`, `text`, `tag`; hỗ trợ nhiều vị trí (top/bottom/left/right) và căn lề.

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định |
|-----|------|----------|
| `placement` | `string` | `"top-start"` |
| `variant` | `string` | `"border-under"` |
| `color` | `string` | `"primary"` |
| `modelValue` | `string` | `-` |
| `border` | `number` | `30` |
| `size` | `string` | `"standard"` |
| `margin` | `any` | `[0,0]` |
| `radius` | `number` | `4` |

---

## 🔄 Sự kiện
- `update:modelValue` – phát khi chọn tab.

---

## Slot
- default – chứa các `TTab` con.

---

## Cách dùng
```vue
<t-tabs v-model="active" variant="tag" placement="top-center">
  <t-tab value="home">Home</t-tab>
  <t-tab value="profile">Profile</t-tab>
</t-tabs>
```
