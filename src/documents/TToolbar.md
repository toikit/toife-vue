# 🧩 Component: `TToolbar`

## Tổng quan
Thanh công cụ bốn cạnh, auto safe-area, bố trí hàng/cột theo vị trí.

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định |
|-----|------|----------|
| `placement` | `any` | `null` (kế thừa từ `TCable` nếu có) |
| `safe` | `boolean` | `true` |
| `size` | `any` | `"50px"` |

---

## Cách dùng
```vue
<t-cable placement="bottom">
  <t-toolbar>
    <div>
      <div>Left</div>
      <div>Center</div>
      <div>Right</div>
    </div>
  </t-toolbar>
</t-cable>
```
