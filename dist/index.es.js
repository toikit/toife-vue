import { createElementBlock as f, openBlock as l, renderSlot as h, defineComponent as $, ref as y, computed as S, reactive as te, watch as R, Fragment as A, withDirectives as X, createCommentVNode as I, normalizeStyle as w, normalizeClass as x, vShow as W, createElementVNode as k, createVNode as H, onUnmounted as O, createBlock as B, withCtx as E, toDisplayString as V, renderList as Y, createTextVNode as L, createApp as U, h as j, unref as P, onMounted as Q, resolveDynamicComponent as ce, markRaw as ie, inject as ue, provide as de } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as oe, useRoute as pe } from "vue-router";
const F = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), G = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, fe = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !F(o.target) && G();
  });
}, g = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, me = {}, ve = { class: "t-app" };
function _e(o, s) {
  return l(), f("div", ve, [
    h(o.$slots, "default")
  ]);
}
const ye = /* @__PURE__ */ g(me, [["render", _e]]), ge = /* @__PURE__ */ $({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = y(0), n = y(!1), r = y(), c = y(), a = o, i = e, v = S(() => n.value || a.keepalive), _ = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), m = (p) => {
      a.backdrop ? p?.backdropOpacity && (_["--t-present-backdrop-opacity"] = p.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", p?.transition && (_["--t-present-transition"] = p.transition, _["--t-present-transition"] = p.transition), p?.contentTransform && (_["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (_["--t-present-content-opacity"] = p.contentOpacity);
    }, u = () => {
      m({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let p = "0px", z = "1";
      a.placement == "bottom" || a.placement == "right" ? p = "100%" : a.placement == "top" || a.placement == "left" ? p = "-100%" : a.placement == "center" && (p = "0px", z = "0"), m({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: z,
        backdropOpacity: "0"
      });
    };
    R(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Ee.getNewIndex(), setTimeout(() => {
        u();
      }, 50)) : (d(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: m,
      open: u,
      close: d
    });
    const b = (p) => {
      p.preventDefault(), i("dismiss", "backdrop");
    };
    return d(), (p, z) => (l(), f(A, null, [
      v.value ? X((l(), f("div", {
        key: 0,
        class: x(["t-present", { [p.placement]: !0 }]),
        ref_key: "present",
        ref: c,
        style: w({ ..._, zIndex: t.value })
      }, [
        h(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [W, n.value]
      ]) : I("", !0),
      v.value ? X((l(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: b,
        ref_key: "backdrop",
        ref: r,
        style: w({ ..._, zIndex: t.value - 1 })
      }, null, 4)), [
        [W, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), q = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-3d0c3227"]]), be = /* @__PURE__ */ $({
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
  setup(o) {
    return (s, e) => (l(), f("span", {
      class: "t-loading-icon",
      style: w({
        width: o.size,
        height: o.size,
        borderTopColor: o.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ g(be, [["__scopeId", "data-v-7c463303"]]), he = {
  key: 0,
  class: "loader"
}, ke = /* @__PURE__ */ $({
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
  setup(o) {
    const s = o, e = S(() => {
      let t;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t;
    });
    return (t, n) => (l(), f("button", {
      class: x(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: w(e.value)
    }, [
      X(k("span", null, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [W, !s.loading]
      ]),
      s.loading ? (l(), f("span", he, [
        H(K, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-74d8380d"]]), $e = {
  key: 0,
  class: "t-alert-header"
}, Te = { class: "t-alert-content" }, we = { class: "t-alert-footer" }, xe = /* @__PURE__ */ $({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1), r = e, c = y();
    let a;
    const i = y(!1), v = () => {
      n.value = !0;
    }, _ = (u) => {
      n.value = !1, u.handler && u.handler(), r("dismiss", "choose", u?.data);
    }, m = (u) => {
      t.dismiss && t.dismiss.includes(u) ? (n.value = !1, r("dismiss", u)) : u == "backdrop" && (i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300));
    };
    return s({
      open: v
    }), R(() => c.value, (u) => {
      u && (a = N(c.value, {
        beforeEvent(d) {
          return d.stopPropagation(), F(d.target) || (d.preventDefault(), G()), !0;
        }
      }));
    }), O(() => {
      a && a.destroy();
    }), (u, d) => (l(), B(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: E(() => [
        k("div", {
          class: x(["t-alert", { pop: i.value }]),
          ref_key: "container",
          ref: c
        }, [
          h(u.$slots, "header", {}, () => [
            t.title ? (l(), f("div", $e, V(t.title), 1)) : I("", !0)
          ], !0),
          h(u.$slots, "content", {}, () => [
            k("div", Te, V(t.message), 1)
          ], !0),
          h(u.$slots, "footer", {}, () => [
            k("div", we, [
              (l(!0), f(A, null, Y(t.actions, (b) => (l(), B(M, {
                color: b.color,
                variant: b.variant,
                onClick: (p) => _(b)
              }, {
                default: E(() => [
                  L(V(b.text), 1)
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
}), se = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-8811290a"]]), Mt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = y();
      e.appendChild(t);
      const r = U({
        render() {
          return j(se, {
            ...o,
            ref: n,
            onDismiss: (c, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s(a);
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Se = /* @__PURE__ */ $({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1), r = e, c = y();
    let a;
    const i = y(!1), v = () => {
      n.value = !0;
    }, _ = (u) => {
      n.value = !1, u.handler && u.handler(), r("dismiss", "choose", u?.data);
    }, m = (u) => {
      t.dismiss && t.dismiss.includes(u) ? (n.value = !1, r("dismiss", u)) : u == "backdrop" && (i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300));
    };
    return s({
      open: v
    }), R(() => c.value, (u) => {
      u && (a = N(c.value, {
        beforeEvent(d) {
          return d.stopPropagation(), F(d.target) || (d.preventDefault(), G()), !0;
        }
      }));
    }), O(() => {
      a && a.destroy();
    }), (u, d) => (l(), B(q, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: E(() => [
        k("div", {
          class: x(["t-action", { pop: i.value }]),
          ref_key: "container",
          ref: c
        }, [
          (l(!0), f(A, null, Y(t.actions, (b) => (l(), f("div", null, [
            (l(!0), f(A, null, Y(b, (p) => (l(), B(M, {
              color: p.color,
              size: p.size,
              variant: p.variant,
              onClick: (z) => _(p),
              block: ""
            }, {
              default: E(() => [
                L(V(p.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), ze = /* @__PURE__ */ g(Se, [["__scopeId", "data-v-290cf925"]]), Jt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = y();
      e.appendChild(t);
      const r = U({
        render() {
          return j(ze, {
            ...o,
            ref: n,
            onDismiss: (c, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s(a);
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ie = { class: "t-loading" }, Be = /* @__PURE__ */ $({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1);
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, i) => (l(), B(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: E(() => [
        k("div", Ie, [
          h(a.$slots, "default", {}, () => [
            H(K, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ce = /* @__PURE__ */ g(Be, [["__scopeId", "data-v-8f84c14e"]]), Qt = (o = {}) => {
  const s = y(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = U({
          render() {
            return j(Ce, {
              ...o,
              ref: s
            });
          }
        }), t.mount(n), setTimeout(() => {
          s.value?.open?.(), r(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((r) => {
        s.value?.close?.(), setTimeout(() => {
          t?.unmount?.(), n?.remove?.(), r(!0);
        }, 300);
      });
    }
  };
}, Z = y(1e3), Ee = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, C = te([]), Ve = (o) => {
  C.push(o);
}, Pe = (o) => {
  o || C.pop();
}, De = () => {
  C.splice(0, C.length);
}, T = {
  screens: C,
  addScreen: Ve,
  removeScreen: Pe,
  removeAllScreen: De,
  hasPrevious: S(() => C.length > 1),
  currentScreen: S(() => C[C.length - 1]),
  lastScreen: S(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Ae = /* @__PURE__ */ $({
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
  setup(o, { expose: s, emit: e }) {
    const t = o, n = e, r = y(!1), c = y(!1), a = y(!1), i = () => {
      c.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        v();
      }, t.duration + 10);
    }, v = () => {
      a.value = !0, setTimeout(() => {
        c.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, _ = S(() => {
      let m;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? m = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 0.6)"
      } : m = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : m = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? m = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : m = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : m = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? m = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : m = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : m = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), m;
    });
    return s({
      open: i
    }), (m, u) => c.value ? (l(), f("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ..._.value })
    }, V(t.message), 7)) : I("", !0);
  }
}), ne = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-61960e03"]]), Zt = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = y();
    s.appendChild(e);
    const n = U({
      render() {
        return j(ne, {
          ...o,
          ref: t,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), e.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(e), setTimeout(() => {
      t.value?.open?.();
    }, 50);
  }
}), Re = y(0);
function Le() {
  return {
    height: Re
  };
}
const Oe = /* @__PURE__ */ $({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = Le();
    return (t, n) => (l(), f("div", {
      class: x(["t-cable", { keyboard: s.keyboard && P(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": P(e) + "px", "--t-keyboard-transition": P(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ne = /* @__PURE__ */ g(Oe, [["__scopeId", "data-v-ecb72421"]]), qe = /* @__PURE__ */ $({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = S(() => {
      let t;
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--background": s.color
      } : t = {
        "--background": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (l(), f("div", {
      class: "t-card",
      style: w(e.value)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), Xe = {}, We = { class: "t-content" };
function Ye(o, s) {
  return l(), f("div", We, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ g(Xe, [["render", Ye], ["__scopeId", "data-v-d58accf4"]]), ee = 80, He = /* @__PURE__ */ $({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = y(0), n = y(!1), r = y();
    let c, a = !1;
    const i = () => {
      n.value = !1, t.value = 0, c && c.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, v = () => {
      a = !0, n.value = !0, t.value = ee, e("refresh", i);
    };
    return R(() => r.value, () => {
      c && c.destroy();
      let _ = r.value.closest(".t-content");
      _ && (c = N(_, {
        options: {
          minDist: 60
        },
        move({ dy: m, e: u }) {
          n.value || a || m < 0 || (m > 5 && _.scrollTop == 0 && (u.preventDefault(), _.classList.add("scroll-hidden")), m >= 120 ? v() : m > 10 && (t.value = m));
        },
        up({ dy: m, e: u }) {
          _.classList.remove("scroll-hidden"), !(n.value || a) && (m > ee ? v() : t.value = 0);
        },
        cancel() {
          _.classList.remove("scroll-hidden"), !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), O(() => {
      c && c.destroy();
    }), (_, m) => X((l(), f("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: w({ height: `${t.value}px` })
    }, [
      k("img", {
        class: x({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [W, t.value > 0]
    ]);
  }
}), Ue = /* @__PURE__ */ g(He, [["__scopeId", "data-v-ac2b2370"]]), je = {}, Fe = { class: "t-screen" };
function Ge(o, s) {
  return l(), f("div", Fe, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ g(je, [["render", Ge], ["__scopeId", "data-v-c2a3436c"]]), Ke = /* @__PURE__ */ $({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = oe(), n = pe(), r = t.getRoutes(), c = y(!1), a = s;
    for (let d of r)
      e[d.name] = d.components;
    const i = (d) => {
      d && T.addScreen({
        name: d,
        target: null,
        component: ie(e[d] || null)
      });
    }, v = (d, b) => {
      !b || T.screens[d].target || (T.screens[d].target = b.$el, d > 0 && (c.value = !0, b.$el.style.transform = "translateX(var(--t-app-width))", b.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        b.$el.style.transition = "transform 0.35s ease", b.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), T.screens.length > 1 && (T.lastScreen.value.target.style.transitionOrigin = "left center", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), c.value = !1;
        }, 400);
      }, 100)));
    }, _ = () => {
      T.currentScreen.value.target.style.transition = "transform 0.35s ease", T.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), c.value = !0, setTimeout(() => {
        T.removeScreen(), a("change"), c.value = !1;
      }, 400);
    };
    i(n.name), R(() => n.name, (d, b) => {
      d != T.currentScreen.value.name && (T.lastScreen.value?.name == d ? _() : i(d));
    });
    const m = () => {
      c.value = !0;
      const d = T.currentScreen.value.target, b = T.lastScreen.value.target;
      d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(0px)", b.style.transition = "transform 0.35s ease", b.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        c.value = !1;
      }, 400);
    };
    let u;
    return Q(() => {
      u = N(document, {
        pointerId: null,
        beforeEvent(d) {
          if (c.value || T.screens.length < 2) return !1;
        },
        fast({ d }) {
          d == "right" && t.back();
        },
        move({ dx: d }) {
          const b = window.innerWidth, p = d / b * 100, z = T.currentScreen.value.target, D = T.lastScreen?.value?.target;
          if (d > 15 && d <= b) {
            z.style.transition = "transform 0s ease", z.style.transform = `translateX(${d}px)`, D.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), D.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${p}))) scale(${0.5 + 0.5 / 100 * p}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * p}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * p}`);
            return;
          }
        },
        up({ dx: d }) {
          const b = window.innerWidth;
          d / b * 100 >= 50 ? t.back() : m();
        },
        cancel() {
          m();
        }
      });
    }), O(() => {
      u && u.destroy(), T.removeAllScreen();
    }), (d, b) => (l(), f(A, null, [
      (l(!0), f(A, null, Y(P(T).screens, (p, z) => (l(), B(ae, {
        ref_for: !0,
        ref: (D) => v(z, D),
        style: w({ zIndex: z + (z == P(T).screens.length - 1 ? 2 : 1) }),
        key: z
      }, {
        default: E(() => [
          (l(), B(ce(p.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: P(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), Me = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-78300bc9"]]), Je = /* @__PURE__ */ $({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (l(), f("div", {
      class: x(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: w({ "--t-size-toolbar": s.size })
    }, [
      k("div", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Qe = /* @__PURE__ */ g(Je, [["__scopeId", "data-v-db1924b1"]]), Ze = /* @__PURE__ */ $({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = oe(), e = o, t = () => {
      T.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || P(T).hasPrevious ? (l(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(n.$slots, "default", {}, () => [
        r[0] || (r[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), et = /* @__PURE__ */ g(Ze, [["__scopeId", "data-v-ed626a3d"]]), tt = /* @__PURE__ */ $({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = S(() => {
      let t, n = s.color;
      return s.size == "standard" ? t = "var(--t-fs-10)" : s.size == "small" ? t = "var(--t-fs-08)" : s.size == "large" ? t = "var(--t-fs-12)" : t = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": t
      };
    });
    return (t, n) => (l(), f("span", {
      class: "t-text",
      style: w(e.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), J = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-f0f94f05"]]), ot = /* @__PURE__ */ $({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (l(), f("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), le = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-daa38c85"]]), st = /* @__PURE__ */ $({
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
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(), r = y(), c = y(!1);
    let a = null;
    const i = S(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), v = (m) => {
      t("dismiss", m);
    }, _ = () => {
      c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 300);
    };
    return R(() => n.value, (m) => {
      m && (a = N(n.value, {
        options: {
          minDist: 30
        },
        beforeEvent(u) {
          return c.value || !e.gesture || e.placement == "center" ? !1 : (u.stopPropagation(), F(u.target) || (u.preventDefault(), G()), !0);
        },
        fast({ d: u }) {
          _(), u == i.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ dy: u, dx: d, d: b }) {
          if (b != i.value) return;
          let p = 0;
          e.placement == "bottom" || e.placement == "top" ? p = u : p = d, r.value.render({
            contentTransform: p + "px",
            transition: "0s"
          });
        },
        up({ dy: u, dx: d, d: b }) {
          if (_(), b != i.value) {
            r.value.open();
            return;
          }
          let p, z, D;
          e.placement == "bottom" || e.placement == "top" ? (p = n.value.offsetHeight, D = u) : (p = n.value.offsetWidth, D = d), z = D / p * 100, z > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          _(), r.value.open();
        }
      }));
    }), O(() => {
      a && a.destroy();
    }), (m, u) => (l(), B(q, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: m.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: v
    }, {
      default: E(() => [
        e.gesture && e.placement != "center" ? (l(), B(le, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        e.closeButton && e.placement == "center" ? (l(), f("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: u[0] || (u[0] = (d) => v("close-button"))
        }, [
          h(m.$slots, "close-icon", {}, () => [
            u[1] || (u[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: m.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          h(m.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), nt = /* @__PURE__ */ g(st, [["__scopeId", "data-v-ac41da28"]]), rt = { class: "t-input-label" }, at = { class: "t-input-content" }, lt = ["type", "placeholder", "value"], ct = /* @__PURE__ */ $({
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
  setup(o, { emit: s }) {
    const e = o, t = s, n = (r) => {
      t("update:modelValue", r.target.value);
    };
    return (r, c) => (l(), f("div", {
      class: x(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", rt, V(r.label), 1),
        k("div", at, [
          h(r.$slots, "start", {}, void 0, !0),
          k("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, lt),
          h(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (l(), B(J, {
        key: 0,
        color: "danger"
      }, {
        default: E(() => [
          L(V(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (l(), B(J, {
        key: 1,
        color: "secondary"
      }, {
        default: E(() => [
          L(V(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ g(ct, [["__scopeId", "data-v-1a9425cf"]]), ut = {};
function dt(o, s) {
  return l(), f("textarea");
}
const pt = /* @__PURE__ */ g(ut, [["render", dt]]), ft = {};
function mt(o, s) {
  return l(), f("div");
}
const vt = /* @__PURE__ */ g(ft, [["render", mt]]), _t = {}, yt = { class: "t-grid" };
function gt(o, s) {
  return l(), f("div", yt);
}
const bt = /* @__PURE__ */ g(_t, [["render", gt]]), ht = {}, kt = { class: "t-grid-item" };
function $t(o, s) {
  return l(), f("div", kt);
}
const Tt = /* @__PURE__ */ g(ht, [["render", $t]]), wt = /* @__PURE__ */ $({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (l(), f("div", {
      class: x(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-47ee8991"]]), St = /* @__PURE__ */ $({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(!1), r = y(), c = S(() => {
      let v = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (v = `var(--t-color-status-${e.color})`), {
        "--color": v
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    Q(() => {
      let v = a();
      v && (n.value = v.type != "password", t("change", n.value));
    });
    const i = () => {
      let v = a();
      v && (n.value = !n.value, n.value ? v.type = "text" : v.type = "password", t("change", n.value));
    };
    return (v, _) => (l(), f("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(c.value),
      onClick: i
    }, [
      n.value ? h(v.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : h(v.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), zt = /* @__PURE__ */ g(St, [["__scopeId", "data-v-3268e9e3"]]), It = /* @__PURE__ */ $({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = S(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (l(), f("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Bt = /* @__PURE__ */ g(It, [["__scopeId", "data-v-24384c2f"]]), Ct = { class: "t-collapse-title" }, Et = {
  key: 0,
  class: "icon"
}, Vt = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, Dt = /* @__PURE__ */ $({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(!1), r = y(""), c = y(), a = () => {
      n.value = !n.value, r.value = `calc(${c.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (i, v) => (l(), f("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: w({ "--height": r.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        h(i.$slots, "icon"),
        k("div", Ct, [
          h(i.$slots, "title", {}, () => [
            L(V(e.title), 1)
          ])
        ]),
        h(i.$slots, "toggle", {}, () => [
          n.value ? (l(), f("div", Et, [...v[0] || (v[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (l(), f("div", Vt, [...v[1] || (v[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Pt, [
        k("div", {
          ref_key: "content",
          ref: c
        }, [
          h(i.$slots, "content", {}, () => [
            h(i.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), At = /* @__PURE__ */ $({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = S(() => {
      let c = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (c = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), c;
    });
    return (c, a) => (l(), f("div", {
      class: x(["t-switch", { on: e.modelValue }]),
      style: w(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Rt = /* @__PURE__ */ g(At, [["__scopeId", "data-v-3616970e"]]), Lt = /* @__PURE__ */ $({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = ue("tabsState"), t = S(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, c) => (l(), f("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      H(M, {
        variant: "text",
        onClick: n,
        size: P(e).size,
        color: t.value && P(e).variant == "text" ? P(e).color : void 0
      }, {
        default: E(() => [
          h(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Ot = /* @__PURE__ */ g(Lt, [["__scopeId", "data-v-36c12a50"]]), Nt = /* @__PURE__ */ $({
  __name: "t-tabs",
  props: {
    placement: { default: "top-start" },
    variant: { default: "border-under" },
    color: { default: "primary" },
    modelValue: {},
    border: { default: 30 },
    size: { default: "standard" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y("0px"), r = y(), c = S(() => {
      let i = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(i) && (i = `var(--t-color-status-${i})`), i;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let i = r.value.querySelector(".active");
          if (i) {
            let v = i.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, _ = i.offsetWidth / 2;
            n.value = v + _ - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let i = r.value.querySelector(".active");
          if (i) {
            let v = i.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, _ = i.offsetHeight / 2;
            n.value = v + _ - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return de("tabsState", {
      active: S(() => e.modelValue),
      color: c.value,
      size: e.size,
      variant: e.variant,
      setActive: (i) => {
        t("update:modelValue", i), a();
      }
    }), Q(() => {
      a();
    }), (i, v) => (l(), f("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [i.placement]: !0, [i.variant]: !0 }]),
      style: w({ "--color": c.value, "--transform": n.value, "--border": i.border + "px" })
    }, [
      h(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qt = /* @__PURE__ */ g(Nt, [["__scopeId", "data-v-65a2c74c"]]), Xt = /* @__PURE__ */ $({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (l(), B(re, null, {
      default: E(() => [
        H(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Wt = /* @__PURE__ */ g(Xt, [["__scopeId", "data-v-1436aa9f"]]), Yt = { key: 0 }, Ht = {
  key: 0,
  class: "t-checkbox-label"
}, Ut = /* @__PURE__ */ $({
  __name: "t-checkbox",
  props: {
    label: { default: "" },
    modelValue: { default: !1 },
    variant: {},
    type: { default: "check" },
    multiple: { type: Boolean, default: !1 },
    value: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = S(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = S(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), c = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else e.value === void 0 ? t("update:modelValue", !e.modelValue) : t("update:modelValue", e.value);
    };
    return (a, i) => (l(), f("div", {
      class: x(["t-checkbox", { active: r.value }]),
      style: w(n.value),
      onClick: c
    }, [
      k("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (l(), f("div", Yt)) : I("", !0),
        a.type == "check" ? h(a.$slots, "icon", { key: 1 }, () => [
          i[0] || (i[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (l(), f("span", Ht, V(e.label), 1)) : I("", !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ g(Ut, [["__scopeId", "data-v-d558d0b0"]]), eo = () => ({
  install: (o) => {
    fe(), o.component("t-app", ye), o.component("t-screen", ae), o.component("t-swipe-screen", Me), o.component("t-cable", Ne), o.component("t-toolbar", Qe), o.component("t-content", re), o.component("t-card", qe), o.component("t-refresher", Ue), o.component("t-button", M), o.component("t-back-button", et), o.component("t-present", q), o.component("t-text", J), o.component("t-sheet", nt), o.component("t-pull-signal", le), o.component("t-input", it), o.component("t-textarea", pt), o.component("t-rich-text", vt), o.component("t-grid", bt), o.component("t-grid-item", Tt), o.component("t-divider", xt), o.component("t-toggle-password", zt), o.component("t-loading-icon", K), o.component("t-alert", se), o.component("t-avatar", Bt), o.component("t-collapse", Dt), o.component("t-toast", ne), o.component("t-switch", Rt), o.component("t-tab", Ot), o.component("t-tabs", qt), o.component("t-loading-app", Wt), o.component("t-checkbox", jt);
  }
});
export {
  G as blurCurrentActive,
  Jt as createAction,
  Mt as createAlert,
  Qt as createLoading,
  Zt as createToast,
  eo as createToife,
  F as isFormElement,
  Ee as presentController,
  T as screenController,
  Le as useKeyboard
};
