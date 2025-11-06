# 🧩 Component: `TTab`

## Tổng quan
Mục tab đơn, làm việc cùng `TTabs`.

---

## ⚙️ Thuộc tính (`props`)

| Tên | Kiểu | Mặc định |
|-----|------|----------|
| `value` | `string` | `-` |
| `disabled` | `boolean` | `false` |

---

## Ghi chú
- Nhận state từ `provide('tabsState')` của `TTabs`.

---

## Cách dùng
```vue
<t-tabs v-model="active">
  <t-tab value="a">Tab A</t-tab>
  <t-tab value="b">Tab B</t-tab>
</t-tabs>
```
