import { createElementBlock as _, openBlock as c, renderSlot as b, defineComponent as T, ref as y, computed as I, reactive as te, watch as R, Fragment as V, withDirectives as W, createCommentVNode as z, normalizeStyle as w, normalizeClass as x, vShow as Y, createElementVNode as h, createVNode as M, onUnmounted as L, createBlock as B, withCtx as C, toDisplayString as P, renderList as H, createTextVNode as N, createApp as U, h as j, unref as D, onMounted as J, resolveDynamicComponent as le, markRaw as ce, inject as ie, provide as ue } from "vue";
import { gesture as A } from "@toife/gesture";
import { useRouter as oe, useRoute as de } from "vue-router";
const O = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), q = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, pe = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("selectstart", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !O(t.target) && q();
  });
}, g = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, fe = {}, me = { class: "t-app" };
function ve(t, n) {
  return c(), _("div", me, [
    b(t.$slots, "default")
  ]);
}
const _e = /* @__PURE__ */ g(fe, [["render", ve]]), ye = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = y(0), s = y(!1), a = y(), l = y(), i = t, u = o, d = I(() => s.value || i.keepalive), p = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), v = (f) => {
      i.backdrop ? f?.backdropOpacity && (p["--t-present-backdrop-opacity"] = f.backdropOpacity) : p["--t-present-backdrop-opacity"] = "0", f?.transition && (p["--t-present-transition"] = f.transition, p["--t-present-transition"] = f.transition), f?.contentTransform && (p["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (p["--t-present-content-opacity"] = f.contentOpacity);
    }, r = () => {
      v({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, m = () => {
      let f = "0px", S = "1";
      i.placement == "bottom" || i.placement == "right" ? f = "100%" : i.placement == "top" || i.placement == "left" ? f = "-100%" : i.placement == "center" && (f = "0px", S = "0"), v({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    R(() => i.visible, () => {
      i.visible ? (s.value = !0, e.value = Be.getNewIndex(), setTimeout(() => {
        r();
      }, 50)) : (m(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), n({
      render: v,
      open: r,
      close: m
    });
    const k = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return m(), (f, S) => (c(), _(V, null, [
      d.value ? W((c(), _("div", {
        key: 0,
        class: x(["t-present", { [f.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: w({ ...p, zIndex: e.value })
      }, [
        b(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [Y, s.value]
      ]) : z("", !0),
      d.value ? W((c(), _("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: k,
        ref_key: "backdrop",
        ref: a,
        style: w({ ...p, zIndex: e.value - 1 })
      }, null, 4)), [
        [Y, s.value]
      ]) : z("", !0)
    ], 64));
  }
}), X = /* @__PURE__ */ g(ye, [["__scopeId", "data-v-0ec92514"]]), ge = /* @__PURE__ */ T({
  __name: "t-loading-icon",
  props: {
    size: {
      type: String,
      default: "24px"
    },
    color: {
      type: String,
      default: "var(--t-color-text)"
    }
  },
  setup(t) {
    return (n, o) => (c(), _("span", {
      class: "t-loading-icon",
      style: w({
        width: t.size,
        height: t.size,
        borderTopColor: t.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), Q = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-7c463303"]]), be = {
  key: 0,
  class: "loader"
}, he = /* @__PURE__ */ T({
  __name: "t-button",
  props: {
    color: { default: null },
    size: { default: "standard" },
    rounded: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingType: { default: "spinner" },
    variant: { default: "default" },
    activeBackground: { type: Boolean, default: !1 }
  },
  setup(t) {
    const n = t, o = I(() => {
      let e;
      return n.variant == "default" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "none",
        "--color": "var(--t-color-status-" + n.color + "-text)",
        "--background": "var(--t-color-status-" + n.color + ")"
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": n.color
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), n.variant == "text" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "none",
        "--color": "var(--t-color-status-" + n.color + ")",
        "--background": "transparent"
      } : e = {
        "--border": "none",
        "--color": n.color,
        "--background": "transparent"
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), n.variant == "outline" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "0.55px solid var(--t-color-status-" + n.color + ")",
        "--color": "var(--t-color-status-" + n.color + ")",
        "--background": "transparent"
      } : e = {
        "--border": "0.55px solid " + n.color,
        "--color": n.color,
        "--background": "transparent"
      } : e = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e;
    });
    return (e, s) => (c(), _("button", {
      class: x(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0 }]),
      style: w(o.value)
    }, [
      W(h("span", null, [
        b(e.$slots, "default", {}, void 0, !0)
      ], 512), [
        [Y, !n.loading]
      ]),
      n.loading ? (c(), _("span", be, [
        M(Q, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), F = /* @__PURE__ */ g(he, [["__scopeId", "data-v-07bf1b8d"]]), ke = {
  key: 0,
  class: "t-alert-header"
}, $e = { class: "t-alert-content" }, Te = { class: "t-alert-footer" }, we = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = y(!1), a = o, l = y();
    let i;
    const u = y(!1), d = () => {
      s.value = !0;
    }, p = (r) => {
      s.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, v = (r) => {
      e.dismiss && e.dismiss.includes(r) ? (s.value = !1, a("dismiss", r)) : r == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (r) => {
      r && (i = A(l.value, {
        beforeEvent(m) {
          return m.stopPropagation(), O(m.target) || (m.preventDefault(), q()), !1;
        }
      }));
    }), L(() => {
      i && i.destroy();
    }), (r, m) => (c(), B(X, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: v
    }, {
      default: C(() => [
        h("div", {
          class: x(["t-alert", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          b(r.$slots, "header", {}, () => [
            e.title ? (c(), _("div", ke, P(e.title), 1)) : z("", !0)
          ], !0),
          b(r.$slots, "content", {}, () => [
            h("div", $e, P(e.message), 1)
          ], !0),
          b(r.$slots, "footer", {}, () => [
            h("div", Te, [
              (c(!0), _(V, null, H(e.actions, (k) => (c(), B(F, {
                color: k.color,
                variant: k.variant,
                onClick: (f) => p(k)
              }, {
                default: C(() => [
                  N(P(k.text), 1)
                ]),
                _: 2
              }, 1032, ["color", "variant", "onClick"]))), 256))
            ])
          ], !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), ne = /* @__PURE__ */ g(we, [["__scopeId", "data-v-5cf415ec"]]), Wt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = y();
      o.appendChild(e);
      const a = U({
        render() {
          return j(ne, {
            ...t,
            ref: s,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), xe = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = y(!1), a = o, l = y();
    let i;
    const u = y(!1), d = () => {
      s.value = !0;
    }, p = (r) => {
      s.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, v = (r) => {
      e.dismiss && e.dismiss.includes(r) ? (s.value = !1, a("dismiss", r)) : r == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (r) => {
      r && (i = A(l.value, {
        beforeEvent(m) {
          return m.stopPropagation(), O(m.target) || (m.preventDefault(), q()), !1;
        }
      }));
    }), L(() => {
      i && i.destroy();
    }), (r, m) => (c(), B(X, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: v
    }, {
      default: C(() => [
        h("div", {
          class: x(["t-action", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), _(V, null, H(e.actions, (k) => (c(), _("div", null, [
            (c(!0), _(V, null, H(k, (f) => (c(), B(F, {
              color: f.color,
              size: f.size,
              variant: f.variant,
              onClick: (S) => p(f),
              block: ""
            }, {
              default: C(() => [
                N(P(f.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-73339adc"]]), Yt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = y();
      o.appendChild(e);
      const a = U({
        render() {
          return j(Ie, {
            ...t,
            ref: s,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), Se = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = y(!1), a = y();
    let l;
    return n({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), R(() => a.value, (d) => {
      d && (l = A(a.value, {
        beforeEvent(p) {
          return p.stopPropagation(), O(p.target) || (p.preventDefault(), q()), !1;
        }
      }));
    }), L(() => {
      l && l.destroy();
    }), (d, p) => (c(), B(X, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value
    }, {
      default: C(() => [
        h("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          b(d.$slots, "default", {}, () => [
            M(Q, {
              type: e.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), ze = /* @__PURE__ */ g(Se, [["__scopeId", "data-v-d048a41d"]]), Ht = (t = {}) => {
  const n = y(), o = document.body.querySelector(".t-app");
  let e = null, s = null;
  return {
    open() {
      return new Promise((a) => {
        o && (s = document.createElement("div"), o.appendChild(s), e = U({
          render() {
            return j(ze, {
              ...t,
              ref: n
            });
          }
        }), e.mount(s), setTimeout(() => {
          n.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        n.value?.close?.(), setTimeout(() => {
          e?.unmount?.(), s?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, Z = y(1e3), Be = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, E = te([]), Ce = (t) => {
  E.push(t);
}, Ee = (t) => {
  t || E.pop();
}, $ = {
  screens: E,
  addScreen: Ce,
  removeScreen: Ee,
  hasPrevious: I(() => E.length > 1),
  currentScreen: I(() => E[E.length - 1]),
  lastScreen: I(() => {
    if (!(E.length < 2))
      return E[E.length - 2];
  })
}, Pe = /* @__PURE__ */ T({
  __name: "t-toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    duration: { default: 2e3 },
    color: { default: null },
    variant: { default: "default" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = o, a = y(!1), l = y(!1), i = y(!1), u = () => {
      l.value = !0, i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        d();
      }, e.duration + 10);
    }, d = () => {
      i.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, s("dismiss");
      }, 300);
    }, p = I(() => {
      let v;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + e.color + "-rgb), 0.6)"
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": e.color
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "0.55px solid var(--t-color-status-" + e.color + ")",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), v;
    });
    return n({
      open: u
    }), (v, r) => l.value ? (c(), _("div", {
      key: 0,
      class: x(["t-toast", { [e.placement]: !0, open: a.value, closing: i.value }]),
      style: w({ "--space": e.space, ...p.value })
    }, P(e.message), 7)) : z("", !0);
  }
}), se = /* @__PURE__ */ g(Pe, [["__scopeId", "data-v-98e8be37"]]), Ut = (t = {}) => ({
  open() {
    let n = document.body.querySelector(".t-app");
    if (!n) return;
    const o = document.createElement("div"), e = y();
    n.appendChild(o);
    const s = U({
      render() {
        return j(se, {
          ...t,
          ref: e,
          onDismiss: () => {
            setTimeout(() => {
              s.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    s.mount(o), setTimeout(() => {
      e.value?.open?.();
    }, 50);
  }
}), De = y(0);
function Re() {
  return {
    height: De
  };
}
const Ve = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const n = t, { height: o } = Re();
    return (e, s) => (c(), _("div", {
      class: x(["t-cable", { keyboard: n.keyboard && D(o) > 0, [n.placement]: !0 }]),
      style: w({ "--t-keyboard-height": D(o) + "px", "--t-keyboard-transition": D(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ae = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-ecb72421"]]), Ne = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(t) {
    const n = t, o = I(() => {
      let e;
      return n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--background": "var(--t-color-status-" + n.color + ")"
      } : e = {
        "--background": n.color
      } : e = {
        "--background": "var(--t-color-surface)"
      }, e;
    });
    return (e, s) => (c(), _("div", {
      class: "t-card",
      style: w(o.value)
    }, [
      b(e.$slots, "default")
    ], 4));
  }
}), Le = {}, Oe = { class: "t-content" };
function qe(t, n) {
  return c(), _("div", Oe, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Xe = /* @__PURE__ */ g(Le, [["render", qe], ["__scopeId", "data-v-9a833657"]]), ee = 80, We = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(t, { emit: n }) {
    const o = n, e = y(0), s = y(!1), a = y();
    let l, i = !1;
    const u = () => {
      s.value = !1, e.value = 0, l && l.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, d = () => {
      i = !0, s.value = !0, e.value = ee, o("refresh", u);
    };
    return R(() => a.value, () => {
      l && l.destroy();
      let p = a.value.closest(".t-content");
      p && (l = A(p, {
        options: {
          minDist: 60
        },
        move({ dy: v, e: r }) {
          s.value || i || v < 0 || (v > 5 && p.scrollTop == 0 && (r.preventDefault(), p.classList.add("refresh-pulling")), v >= 120 ? d() : e.value = v);
        },
        up({ dy: v, e: r }) {
          p.classList.remove("refresh-pulling"), !(s.value || i) && (v > ee ? d() : e.value = 0);
        },
        cancel() {
          p.classList.remove("refresh-pulling"), s.value = !1, e.value = 0;
        }
      }, {
        passive: !1
      }));
    }), L(() => {
      l && l.destroy();
    }), (p, v) => W((c(), _("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: w({ height: `${e.value}px` })
    }, [
      h("img", {
        class: x({ spiner: s.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [Y, e.value > 0]
    ]);
  }
}), Ye = /* @__PURE__ */ g(We, [["__scopeId", "data-v-d68a6adf"]]), He = {}, Ue = { class: "t-screen" };
function je(t, n) {
  return c(), _("div", Ue, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ g(He, [["render", je], ["__scopeId", "data-v-66ea8649"]]), Fe = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(t, { emit: n }) {
    let o = {};
    const e = oe(), s = de(), a = e.getRoutes(), l = y(!1), i = n;
    for (let r of a)
      o[r.name] = r.components;
    const u = (r) => {
      r && $.addScreen({
        name: r,
        target: null,
        component: ce(o[r] || null)
      });
    }, d = (r, m) => {
      !m || $.screens[r].target || ($.screens[r].target = m.$el, r > 0 && (l.value = !0, m.$el.style.transform = "translateX(100vw)", m.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        m.$el.style.transition = "transform 0.35s ease", m.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, p = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), i("change"), l.value = !1;
      }, 400);
    };
    u(s.name), R(() => s.name, (r, m) => {
      r != $.currentScreen.value.name && ($.lastScreen.value?.name == r ? p() : u(r));
    });
    const v = () => {
      l.value = !0;
      const r = $.currentScreen.value.target, m = $.lastScreen.value.target;
      r.style.transition = "transform 0.35s ease", r.style.transform = "translateX(0px)", m.style.transition = "transform 0.35s ease", m.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return J(() => {
      A(document, {
        pointerId: null,
        beforeEvent(r) {
          return l.value || $.screens.length < 2 ? !1 : (r.type == "pointerdown" && !this.pointerId && (this.pointerId = r.pointerId), this.pointerId == r.pointerId);
        },
        afterEvent(r) {
          (r.type == "pointerup" || r.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          r == "right" && e.back();
        },
        move({ dx: r }) {
          const m = window.innerWidth, k = r / m * 100, f = $.currentScreen.value.target, S = $.lastScreen?.value?.target;
          if (r > 0 && r <= m) {
            f.style.transition = "transform 0s ease", f.style.transform = `translateX(${r}px)`, S.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), S.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${k}))) scale(${0.5 + 0.5 / 100 * k}) perspective(100vw) rotateY(${30 - 30 / 100 * k}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * k}`);
            return;
          }
        },
        up({ dx: r }) {
          const m = window.innerWidth;
          r / m * 100 >= 50 ? e.back() : v();
        },
        cancel() {
          v();
        }
      });
    }), (r, m) => (c(), _(V, null, [
      (c(!0), _(V, null, H(D($).screens, (k, f) => (c(), B(re, {
        ref_for: !0,
        ref: (S) => d(f, S),
        style: w({ zIndex: f + (f == D($).screens.length - 1 ? 2 : 1) }),
        key: f
      }, {
        default: C(() => [
          (c(), B(le(k.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: D($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ge = /* @__PURE__ */ g(Fe, [["__scopeId", "data-v-a934ea26"]]), Ke = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), _("div", {
      class: x(["t-toolbar", { [n.placement]: !0 }]),
      style: w({ "--t-size-toolbar": n.size })
    }, [
      h("div", null, [
        b(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Me = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-3b3a7896"]]), Je = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(t) {
    const n = oe(), o = t, e = () => {
      $.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (s, a) => s.to || D($).hasPrevious ? (c(), _("button", {
      key: 0,
      class: "t-back-button",
      onClick: e
    }, [
      b(s.$slots, "default", {}, () => [
        a[0] || (a[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Qe = /* @__PURE__ */ g(Je, [["__scopeId", "data-v-ed626a3d"]]), Ze = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = I(() => {
      let e, s = n.color;
      return n.size == "standard" ? e = "var(--t-fs-10)" : n.size == "small" ? e = "var(--t-fs-08)" : n.size == "large" ? e = "var(--t-fs-12)" : e = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (s = `var(--t-color-status-${n.color})`), {
        "--color": s,
        "--font-size": e
      };
    });
    return (e, s) => (c(), _("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), K = /* @__PURE__ */ g(Ze, [["__scopeId", "data-v-f0f94f05"]]), et = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (n, o) => (c(), _("div", {
      class: x(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ g(et, [["__scopeId", "data-v-daa38c85"]]), tt = /* @__PURE__ */ T({
  __name: "t-sheet",
  props: {
    background: { default: "var(--t-color-surface)" },
    visible: { type: Boolean, default: !1 },
    gesture: { type: Boolean, default: !0 },
    fullscreen: { type: Boolean, default: !1 },
    placement: { default: "bottom" },
    keepalive: { type: Boolean, default: !0 },
    backdrop: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    radius: { type: Boolean, default: !0 },
    closeButton: { type: Boolean, default: !0 }
  },
  emits: ["dismiss"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y(), a = y(), l = y(!1);
    let i = null;
    const u = I(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), d = (v) => {
      e("dismiss", v);
    }, p = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return R(() => s.value, (v) => {
      v && (i = A(s.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(r) {
          let m = !1, k = !1;
          return l.value || !o.gesture || o.placement == "center" ? m = !0 : this.pointerId ? (m = !0, k = this.pointerId == r.pointerId) : r.type == "pointerdown" && (this.pointerId = r.pointerId, m = !0, k = !0), m && (r.stopPropagation(), O(r.target) || (r.preventDefault(), q())), k;
        },
        afterEvent(r) {
          (r.type == "pointerup" || r.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          p(), r == u.value ? e("dismiss", "gesture") : a.value.open();
        },
        move({ dy: r, dx: m, d: k }) {
          if (k != u.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = r : f = m, a.value.render({
            contentTransform: f + "px",
            transition: "0s"
          });
        },
        up({ dy: r, dx: m, d: k }) {
          if (p(), k != u.value) {
            a.value.open();
            return;
          }
          let f, S, G;
          o.placement == "bottom" || o.placement == "top" ? (f = s.value.offsetHeight, G = r) : (f = s.value.offsetWidth, G = m), S = G / f * 100, S > 50 ? e("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          p(), a.value.open();
        }
      }));
    }), L(() => {
      i && i.destroy();
    }), (v, r) => (c(), B(X, {
      ref_key: "present",
      ref: a,
      placement: o.placement,
      backdrop: v.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: d
    }, {
      default: C(() => [
        o.gesture && o.placement != "center" ? (c(), B(ae, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : z("", !0),
        o.closeButton && o.placement == "center" ? (c(), _("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: r[0] || (r[0] = (m) => d("close-button"))
        }, [
          b(v.$slots, "close-icon", {}, () => [
            r[1] || (r[1] = h("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : z("", !0),
        h("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: v.rounded, radius: o.radius }]),
          style: w({ "--background": o.background }),
          ref_key: "sheet",
          ref: s
        }, [
          b(v.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), ot = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-14b7fc93"]]), nt = { class: "t-input-label" }, st = { class: "t-input-content" }, rt = ["type", "placeholder", "value"], at = /* @__PURE__ */ T({
  __name: "t-input",
  props: {
    size: { default: "standard" },
    rounded: { type: Boolean, default: !1 },
    label: { default: "" },
    placeholder: { default: "" },
    type: { default: "text" },
    help: {},
    error: {},
    modelValue: { default: "" },
    variant: { default: "default" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = (a) => {
      e("update:modelValue", a.target.value);
    };
    return (a, l) => (c(), _("div", {
      class: x(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }])
    }, [
      h("label", null, [
        h("span", nt, P(a.label), 1),
        h("div", st, [
          b(a.$slots, "start", {}, void 0, !0),
          h("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: s
          }, null, 40, rt),
          b(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (c(), B(K, {
        key: 0,
        color: "danger"
      }, {
        default: C(() => [
          N(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (c(), B(K, {
        key: 1,
        color: "secondary"
      }, {
        default: C(() => [
          N(P(o.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ g(at, [["__scopeId", "data-v-1a9425cf"]]), ct = {};
function it(t, n) {
  return c(), _("textarea");
}
const ut = /* @__PURE__ */ g(ct, [["render", it]]), dt = {};
function pt(t, n) {
  return c(), _("div");
}
const ft = /* @__PURE__ */ g(dt, [["render", pt]]), mt = {}, vt = { class: "t-grid" };
function _t(t, n) {
  return c(), _("div", vt);
}
const yt = /* @__PURE__ */ g(mt, [["render", _t]]), gt = {}, bt = { class: "t-grid-item" };
function ht(t, n) {
  return c(), _("div", bt);
}
const kt = /* @__PURE__ */ g(gt, [["render", ht]]), $t = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), _("div", {
      class: x(["t-divider", { [n.direction]: !0 }])
    }, null, 2));
  }
}), Tt = /* @__PURE__ */ g($t, [["__scopeId", "data-v-47ee8991"]]), wt = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y(!1), a = y(), l = I(() => {
      let d = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = `var(--t-color-status-${o.color})`), {
        "--color": d
      };
    }), i = () => a.value?.parentElement?.querySelector?.("input");
    J(() => {
      let d = i();
      d && (s.value = d.type != "password", e("change", s.value));
    });
    const u = () => {
      let d = i();
      d && (s.value = !s.value, s.value ? d.type = "text" : d.type = "password", e("change", s.value));
    };
    return (d, p) => (c(), _("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: w(l.value),
      onClick: u
    }, [
      s.value ? b(d.$slots, "on", { key: 0 }, () => [
        p[0] || (p[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      s.value ? z("", !0) : b(d.$slots, "off", { key: 1 }, () => [
        p[1] || (p[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-3268e9e3"]]), It = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = I(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (e, s) => (c(), _("div", {
      class: x(["t-avatar", { square: e.square }]),
      style: w({ "--size": o.value })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), St = /* @__PURE__ */ g(It, [["__scopeId", "data-v-24384c2f"]]), zt = { class: "t-collapse-title" }, Bt = {
  key: 0,
  class: "icon"
}, Ct = {
  key: 1,
  class: "icon"
}, Et = { class: "t-collapse-content" }, Pt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y(!1), a = y(""), l = y(), i = () => {
      s.value = !s.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, e("change", s.value);
    };
    return e("change", s.value), (u, d) => (c(), _("div", {
      class: x(["t-collapse", { open: s.value }]),
      style: w({ "--height": a.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        b(u.$slots, "icon"),
        h("div", zt, [
          b(u.$slots, "title", {}, () => [
            N(P(o.title), 1)
          ])
        ]),
        b(u.$slots, "toggle", {}, () => [
          s.value ? (c(), _("div", Bt, [...d[0] || (d[0] = [
            h("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), _("div", Ct, [...d[1] || (d[1] = [
            h("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      h("div", Et, [
        h("div", {
          ref_key: "content",
          ref: l
        }, [
          b(u.$slots, "content", {}, () => [
            b(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Dt = /* @__PURE__ */ T({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = () => {
      e("update:modelValue", !o.modelValue);
    }, a = I(() => {
      let l = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (l = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), l;
    });
    return (l, i) => (c(), _("div", {
      class: x(["t-switch", { on: o.modelValue }]),
      style: w(a.value),
      onClick: s
    }, [...i[0] || (i[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Rt = /* @__PURE__ */ g(Dt, [["__scopeId", "data-v-3616970e"]]), Vt = /* @__PURE__ */ T({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, o = ie("tabsState"), e = I(() => o.active.value === n.value), s = () => {
      o.setActive(n.value);
    };
    return (a, l) => (c(), _("li", {
      class: x(["t-tab", { active: e.value }])
    }, [
      M(F, {
        variant: "text",
        onClick: s,
        color: e.value && D(o).variant == "text" ? D(o).color : void 0
      }, {
        default: C(() => [
          b(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color"])
    ], 2));
  }
}), At = /* @__PURE__ */ g(Vt, [["__scopeId", "data-v-059bab6e"]]), Nt = /* @__PURE__ */ T({
  __name: "t-tabs",
  props: {
    placement: { default: "top-start" },
    variant: { default: "border-under" },
    color: { default: "primary" },
    modelValue: {},
    border: { default: 30 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y("0px"), a = y(), l = I(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), i = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().left - a.value.getBoundingClientRect().left, p = u.offsetWidth / 2;
            s.value = d + p - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().top - a.value.getBoundingClientRect().top, p = u.offsetHeight / 2;
            s.value = d + p - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ue("tabsState", {
      active: I(() => o.modelValue),
      color: l.value,
      variant: o.variant,
      setActive: (u) => {
        e("update:modelValue", u), i();
      }
    }), J(() => {
      i();
    }), (u, d) => (c(), _("ul", {
      ref_key: "container",
      ref: a,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": l.value, "--transform": s.value, "--border": u.border + "px" })
    }, [
      b(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Lt = /* @__PURE__ */ g(Nt, [["__scopeId", "data-v-2f040d31"]]), jt = () => ({
  install: (t) => {
    pe(), t.component("t-app", _e), t.component("t-screen", re), t.component("t-swipe-screen", Ge), t.component("t-cable", Ae), t.component("t-toolbar", Me), t.component("t-content", Xe), t.component("t-card", Ne), t.component("t-refresher", Ye), t.component("t-button", F), t.component("t-back-button", Qe), t.component("t-present", X), t.component("t-text", K), t.component("t-sheet", ot), t.component("t-pull-signal", ae), t.component("t-input", lt), t.component("t-textarea", ut), t.component("t-rich-text", ft), t.component("t-grid", yt), t.component("t-grid-item", kt), t.component("t-divider", Tt), t.component("t-toggle-password", xt), t.component("t-loading-icon", Q), t.component("t-alert", ne), t.component("t-avatar", St), t.component("t-collapse", Pt), t.component("t-toast", se), t.component("t-switch", Rt), t.component("t-tab", At), t.component("t-tabs", Lt);
  }
});
export {
  q as blurCurrentActive,
  Yt as createAction,
  Wt as createAlert,
  Ht as createLoading,
  Ut as createToast,
  jt as createToife,
  O as isFormElement,
  Be as presentController,
  $ as screenController,
  Re as useKeyboard
};
