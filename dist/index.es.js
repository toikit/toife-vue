import { createElementBlock as p, openBlock as c, renderSlot as b, defineComponent as k, ref as _, computed as S, reactive as Z, watch as X, Fragment as R, withDirectives as O, createCommentVNode as I, normalizeStyle as w, normalizeClass as x, vShow as N, createElementVNode as h, createVNode as W, createBlock as B, withCtx as E, toDisplayString as V, renderList as q, createTextVNode as D, createApp as Y, h as H, unref as P, onUnmounted as G, onMounted as K, resolveDynamicComponent as ae, markRaw as le, inject as ce, provide as ie } from "vue";
import { gesture as M } from "@toife/gesture";
import { useRouter as ee, useRoute as ue } from "vue-router";
const de = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), pe = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, fe = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !de(o.target) && pe();
  });
}, y = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, me = {}, ve = { class: "t-app" };
function _e(o, s) {
  return c(), p("div", ve, [
    b(o.$slots, "default")
  ]);
}
const ye = /* @__PURE__ */ y(me, [["render", _e]]), ge = /* @__PURE__ */ k({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = _(0), n = _(!1), r = _(), i = _(), a = o, u = e, f = S(() => n.value || a.keepalive), m = Z({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (v) => {
      a.backdrop ? v?.backdropOpacity && (m["--t-present-backdrop-opacity"] = v.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", v?.transition && (m["--t-present-transition"] = v.transition, m["--t-present-transition"] = v.transition), v?.contentTransform && (m["--t-present-content-transform"] = v.contentTransform), v?.contentOpacity && (m["--t-present-content-opacity"] = v.contentOpacity);
    }, T = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let v = "0px", z = "1";
      a.placement == "bottom" || a.placement == "right" ? v = "100%" : a.placement == "top" || a.placement == "left" ? v = "-100%" : a.placement == "center" && (v = "0px", z = "0"), l({
        contentTransform: v,
        transition: "0.2s",
        contentOpacity: z,
        backdropOpacity: "0"
      });
    };
    X(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Ee.getNewIndex(), setTimeout(() => {
        T();
      }, 50)) : (d(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: T,
      close: d
    });
    const g = (v) => {
      v.preventDefault(), u("dismiss", "backdrop");
    };
    return d(), (v, z) => (c(), p(R, null, [
      f.value ? O((c(), p("div", {
        key: 0,
        class: x(["t-present", { [v.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: w({ ...m, zIndex: t.value })
      }, [
        b(v.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      f.value ? O((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: g,
        ref_key: "backdrop",
        ref: r,
        style: w({ ...m, zIndex: t.value - 1 })
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ y(ge, [["__scopeId", "data-v-3d0c3227"]]), be = /* @__PURE__ */ k({
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
    return (s, e) => (c(), p("span", {
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
}), U = /* @__PURE__ */ y(be, [["__scopeId", "data-v-7c463303"]]), he = {
  key: 0,
  class: "loader"
}, ke = /* @__PURE__ */ k({
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
    return (t, n) => (c(), p("button", {
      class: x(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: w(e.value)
    }, [
      O(h("span", null, [
        b(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), p("span", he, [
        W(U, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), j = /* @__PURE__ */ y(ke, [["__scopeId", "data-v-74d8380d"]]), $e = {
  key: 0,
  class: "t-alert-header"
}, Te = { class: "t-alert-content" }, we = { class: "t-alert-footer" }, xe = /* @__PURE__ */ k({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = _(!1), r = e, i = _(), a = _(!1), u = () => {
      n.value = !0;
    }, f = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, m = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: u
    }), (l, T) => (c(), B(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: E(() => [
        h("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          b(l.$slots, "header", {}, () => [
            t.title ? (c(), p("div", $e, V(t.title), 1)) : I("", !0)
          ], !0),
          b(l.$slots, "content", {}, () => [
            h("div", Te, V(t.message), 1)
          ], !0),
          b(l.$slots, "footer", {}, () => [
            h("div", we, [
              (c(!0), p(R, null, q(t.actions, (d) => (c(), B(j, {
                color: d.color,
                variant: d.variant,
                onClick: (g) => f(d)
              }, {
                default: E(() => [
                  D(V(d.text), 1)
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
}), te = /* @__PURE__ */ y(xe, [["__scopeId", "data-v-05d0c578"]]), Mt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = _();
      e.appendChild(t);
      const r = Y({
        render() {
          return H(te, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s({ type: i, data: a });
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Se = /* @__PURE__ */ k({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = _(!1), r = e, i = _(), a = _(!1), u = () => {
      n.value = !0;
    }, f = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, m = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: u
    }), (l, T) => (c(), B(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: E(() => [
        h("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), p(R, null, q(t.actions, (d) => (c(), p("div", null, [
            (c(!0), p(R, null, q(d, (g) => (c(), B(j, {
              color: g.color,
              size: g.size,
              variant: g.variant,
              onClick: (v) => f(g),
              block: ""
            }, {
              default: E(() => [
                D(V(g.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), ze = /* @__PURE__ */ y(Se, [["__scopeId", "data-v-c6bccffb"]]), Jt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = _();
      e.appendChild(t);
      const r = Y({
        render() {
          return H(ze, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s({ type: i, data: a });
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ie = { class: "t-loading" }, Be = /* @__PURE__ */ k({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = _(!1);
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, u) => (c(), B(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: E(() => [
        h("div", Ie, [
          b(a.$slots, "default", {}, () => [
            W(U, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ce = /* @__PURE__ */ y(Be, [["__scopeId", "data-v-8f84c14e"]]), Qt = (o = {}) => {
  const s = _(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = Y({
          render() {
            return H(Ce, {
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
}, J = _(1e3), Ee = {
  getNewIndex() {
    return J.value += 2, J.value;
  }
}, C = Z([]), Ve = (o) => {
  C.push(o);
}, Pe = (o) => {
  o || C.pop();
}, Ae = () => {
  C.splice(0, C.length);
}, $ = {
  screens: C,
  addScreen: Ve,
  removeScreen: Pe,
  removeAllScreen: Ae,
  hasPrevious: S(() => C.length > 1),
  currentScreen: S(() => C[C.length - 1]),
  lastScreen: S(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Re = /* @__PURE__ */ k({
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
    const t = o, n = e, r = _(!1), i = _(!1), a = _(!1), u = () => {
      i.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        f();
      }, t.duration + 10);
    }, f = () => {
      a.value = !0, setTimeout(() => {
        i.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, m = S(() => {
      let l;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 0.6)"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), l;
    });
    return s({
      open: u
    }), (l, T) => i.value ? (c(), p("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ...m.value })
    }, V(t.message), 7)) : I("", !0);
  }
}), oe = /* @__PURE__ */ y(Re, [["__scopeId", "data-v-61960e03"]]), Zt = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = _();
    s.appendChild(e);
    const n = Y({
      render() {
        return H(oe, {
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
}), De = _(0);
function Le() {
  return {
    height: De
  };
}
const Oe = /* @__PURE__ */ k({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = Le();
    return (t, n) => (c(), p("div", {
      class: x(["t-cable", { keyboard: s.keyboard && P(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": P(e) + "px", "--t-keyboard-transition": P(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ne = /* @__PURE__ */ y(Oe, [["__scopeId", "data-v-ecb72421"]]), qe = /* @__PURE__ */ k({
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
    return (t, n) => (c(), p("div", {
      class: "t-card",
      style: w(e.value)
    }, [
      b(t.$slots, "default")
    ], 4));
  }
}), Xe = {}, We = { class: "t-content" };
function Ye(o, s) {
  return c(), p("div", We, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ y(Xe, [["render", Ye], ["__scopeId", "data-v-d58accf4"]]), Q = 80, He = /* @__PURE__ */ k({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = _(0), n = _(!1), r = _();
    let i, a = !1;
    const u = () => {
      n.value = !1, t.value = 0, i && i.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, f = () => {
      a = !0, n.value = !0, t.value = Q, e("refresh", u);
    };
    return X(() => r.value, () => {
      i && i.destroy();
      let m = r.value.closest(".t-content");
      m && (i = M(m, {
        options: {
          minDist: 60
        },
        move({ dy: l, e: T }) {
          n.value || a || l < 0 || (l > 10 && m.scrollTop == 0 && m.classList.add("scroll-hidden"), l >= 120 ? f() : l > 10 && (t.value = l));
        },
        up({ dy: l, e: T }) {
          m.classList.remove("scroll-hidden"), !(n.value || a) && (l > Q ? f() : t.value = 0);
        },
        cancel() {
          m.classList.remove("scroll-hidden"), !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), G(() => {
      i && i.destroy();
    }), (m, l) => O((c(), p("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: w({ height: `${t.value}px` })
    }, [
      h("img", {
        class: x({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [N, t.value > 0]
    ]);
  }
}), Ue = /* @__PURE__ */ y(He, [["__scopeId", "data-v-ddbfcb76"]]), je = {}, Fe = { class: "t-screen" };
function Ge(o, s) {
  return c(), p("div", Fe, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ne = /* @__PURE__ */ y(je, [["render", Ge], ["__scopeId", "data-v-c2a3436c"]]), Ke = /* @__PURE__ */ k({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = ee(), n = ue(), r = t.getRoutes(), i = _(!1), a = s;
    for (let d of r)
      e[d.name] = d.components;
    const u = (d) => {
      d && $.addScreen({
        name: d,
        target: null,
        component: le(e[d] || null)
      });
    }, f = (d, g) => {
      !g || $.screens[d].target || ($.screens[d].target = g.$el, d > 0 && (i.value = !0, g.$el.style.transform = "translateX(var(--t-app-width))", g.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        g.$el.style.transition = "transform 0.35s ease", g.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        $.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    u(n.name), X(() => n.name, (d, g) => {
      d != $.currentScreen.value.name && ($.lastScreen.value?.name == d ? m() : u(d));
    });
    const l = () => {
      i.value = !0;
      const d = $.currentScreen.value.target, g = $.lastScreen.value.target;
      d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(0px)", g.style.transition = "transform 0.35s ease", g.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let T;
    return K(() => {
      T = M(document, {
        pointerId: null,
        beforeEvent(d) {
          return !(i.value || $.screens.length < 2);
        },
        fast({ d }) {
          d == "right" && t.back();
        },
        move({ dx: d }) {
          const g = window.innerWidth, v = d / g * 100, z = $.currentScreen.value.target, A = $.lastScreen?.value?.target;
          if (d > 15 && d <= g) {
            z.style.transition = "transform 0s ease", z.style.transform = `translateX(${d}px)`, A.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), A.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${v}))) scale(${0.5 + 0.5 / 100 * v}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * v}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * v}`);
            return;
          }
        },
        up({ dx: d }) {
          const g = window.innerWidth;
          d / g * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          l();
        }
      });
    }), G(() => {
      T && T.destroy(), $.removeAllScreen();
    }), (d, g) => (c(), p(R, null, [
      (c(!0), p(R, null, q(P($).screens, (v, z) => (c(), B(ne, {
        ref_for: !0,
        ref: (A) => f(z, A),
        style: w({ zIndex: z + (z == P($).screens.length - 1 ? 2 : 1) }),
        key: z
      }, {
        default: E(() => [
          (c(), B(ae(v.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: P($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Me = /* @__PURE__ */ y(Ke, [["__scopeId", "data-v-a3b41f81"]]), Je = /* @__PURE__ */ k({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), p("div", {
      class: x(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: w({ "--t-size-toolbar": s.size })
    }, [
      h("div", null, [
        b(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Qe = /* @__PURE__ */ y(Je, [["__scopeId", "data-v-db1924b1"]]), Ze = /* @__PURE__ */ k({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = ee(), e = o, t = () => {
      $.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || P($).hasPrevious ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      b(n.$slots, "default", {}, () => [
        r[0] || (r[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), et = /* @__PURE__ */ y(Ze, [["__scopeId", "data-v-ed626a3d"]]), tt = /* @__PURE__ */ k({
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
    return (t, n) => (c(), p("span", {
      class: "t-text",
      style: w(e.value)
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), F = /* @__PURE__ */ y(tt, [["__scopeId", "data-v-f0f94f05"]]), ot = /* @__PURE__ */ k({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), p("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), re = /* @__PURE__ */ y(ot, [["__scopeId", "data-v-daa38c85"]]), st = /* @__PURE__ */ k({
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
    const e = o, t = s, n = _(), r = _(), i = _(!1);
    let a = null;
    const u = S(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), f = (l) => {
      t("dismiss", l);
    }, m = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return X(() => n.value, (l) => {
      l && (a = M(n.value, {
        options: {
          minDist: 30
        },
        beforeEvent(T) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        fast({ d: T }) {
          m(), T == u.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ dy: T, dx: d, d: g }) {
          if (g != u.value) return;
          let v = 0;
          e.placement == "bottom" || e.placement == "top" ? v = T : v = d, r.value.render({
            contentTransform: v + "px",
            transition: "0s"
          });
        },
        up({ dy: T, dx: d, d: g }) {
          if (m(), g != u.value) {
            r.value.open();
            return;
          }
          let v, z, A;
          e.placement == "bottom" || e.placement == "top" ? (v = n.value.offsetHeight, A = T) : (v = n.value.offsetWidth, A = d), z = A / v * 100, z > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          m(), r.value.open();
        }
      }));
    }), G(() => {
      a && a.destroy();
    }), (l, T) => (c(), B(L, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: f
    }, {
      default: E(() => [
        e.gesture && e.placement != "center" ? (c(), B(re, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        e.closeButton && e.placement == "center" ? (c(), p("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: T[0] || (T[0] = (d) => f("close-button"))
        }, [
          b(l.$slots, "close-icon", {}, () => [
            T[1] || (T[1] = h("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        h("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          b(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), nt = /* @__PURE__ */ y(st, [["__scopeId", "data-v-8f224e75"]]), rt = { class: "t-input-label" }, at = { class: "t-input-content" }, lt = ["type", "placeholder", "value"], ct = /* @__PURE__ */ k({
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
    return (r, i) => (c(), p("div", {
      class: x(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      h("label", null, [
        h("span", rt, V(r.label), 1),
        h("div", at, [
          b(r.$slots, "start", {}, void 0, !0),
          h("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, lt),
          b(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(F, {
        key: 0,
        color: "danger"
      }, {
        default: E(() => [
          D(V(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(F, {
        key: 1,
        color: "secondary"
      }, {
        default: E(() => [
          D(V(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ y(ct, [["__scopeId", "data-v-1a9425cf"]]), ut = {};
function dt(o, s) {
  return c(), p("textarea");
}
const pt = /* @__PURE__ */ y(ut, [["render", dt]]), ft = {};
function mt(o, s) {
  return c(), p("div");
}
const vt = /* @__PURE__ */ y(ft, [["render", mt]]), _t = {}, yt = { class: "t-grid" };
function gt(o, s) {
  return c(), p("div", yt);
}
const bt = /* @__PURE__ */ y(_t, [["render", gt]]), ht = {}, kt = { class: "t-grid-item" };
function $t(o, s) {
  return c(), p("div", kt);
}
const Tt = /* @__PURE__ */ y(ht, [["render", $t]]), wt = /* @__PURE__ */ k({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), p("div", {
      class: x(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), xt = /* @__PURE__ */ y(wt, [["__scopeId", "data-v-47ee8991"]]), St = /* @__PURE__ */ k({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = _(!1), r = _(), i = S(() => {
      let f = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (f = `var(--t-color-status-${e.color})`), {
        "--color": f
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    K(() => {
      let f = a();
      f && (n.value = f.type != "password", t("change", n.value));
    });
    const u = () => {
      let f = a();
      f && (n.value = !n.value, n.value ? f.type = "text" : f.type = "password", t("change", n.value));
    };
    return (f, m) => (c(), p("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(i.value),
      onClick: u
    }, [
      n.value ? b(f.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : b(f.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), zt = /* @__PURE__ */ y(St, [["__scopeId", "data-v-3268e9e3"]]), It = /* @__PURE__ */ k({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = S(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), p("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Bt = /* @__PURE__ */ y(It, [["__scopeId", "data-v-24384c2f"]]), Ct = { class: "t-collapse-title" }, Et = {
  key: 0,
  class: "icon"
}, Vt = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, At = /* @__PURE__ */ k({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = _(!1), r = _(""), i = _(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (u, f) => (c(), p("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: w({ "--height": r.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        b(u.$slots, "icon"),
        h("div", Ct, [
          b(u.$slots, "title", {}, () => [
            D(V(e.title), 1)
          ])
        ]),
        b(u.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", Et, [...f[0] || (f[0] = [
            h("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Vt, [...f[1] || (f[1] = [
            h("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      h("div", Pt, [
        h("div", {
          ref_key: "content",
          ref: i
        }, [
          b(u.$slots, "content", {}, () => [
            b(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Rt = /* @__PURE__ */ k({
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
      let i = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (i = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), i;
    });
    return (i, a) => (c(), p("div", {
      class: x(["t-switch", { on: e.modelValue }]),
      style: w(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Dt = /* @__PURE__ */ y(Rt, [["__scopeId", "data-v-3616970e"]]), Lt = /* @__PURE__ */ k({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = ce("tabsState"), t = S(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), p("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      W(j, {
        variant: "text",
        onClick: n,
        size: P(e).size,
        color: t.value && P(e).variant == "text" ? P(e).color : void 0
      }, {
        default: E(() => [
          b(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Ot = /* @__PURE__ */ y(Lt, [["__scopeId", "data-v-36c12a50"]]), Nt = /* @__PURE__ */ k({
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
    const e = o, t = s, n = _("0px"), r = _(), i = S(() => {
      let u = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let u = r.value.querySelector(".active");
          if (u) {
            let f = u.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, m = u.offsetWidth / 2;
            n.value = f + m - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let u = r.value.querySelector(".active");
          if (u) {
            let f = u.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, m = u.offsetHeight / 2;
            n.value = f + m - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: S(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (u) => {
        t("update:modelValue", u), a();
      }
    }), K(() => {
      a();
    }), (u, f) => (c(), p("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": i.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      b(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qt = /* @__PURE__ */ y(Nt, [["__scopeId", "data-v-65a2c74c"]]), Xt = /* @__PURE__ */ k({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(se, null, {
      default: E(() => [
        W(U, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Wt = /* @__PURE__ */ y(Xt, [["__scopeId", "data-v-1436aa9f"]]), Yt = { key: 0 }, Ht = {
  key: 0,
  class: "t-checkbox-label"
}, Ut = /* @__PURE__ */ k({
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
    }), r = S(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), i = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else e.value === void 0 ? t("update:modelValue", !e.modelValue) : t("update:modelValue", e.value);
    };
    return (a, u) => (c(), p("div", {
      class: x(["t-checkbox", { active: r.value }]),
      style: w(n.value),
      onClick: i
    }, [
      h("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", Yt)) : I("", !0),
        a.type == "check" ? b(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), p("span", Ht, V(e.label), 1)) : I("", !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ y(Ut, [["__scopeId", "data-v-d558d0b0"]]), eo = () => ({
  install: (o) => {
    fe(), o.component("t-app", ye), o.component("t-screen", ne), o.component("t-swipe-screen", Me), o.component("t-cable", Ne), o.component("t-toolbar", Qe), o.component("t-content", se), o.component("t-card", qe), o.component("t-refresher", Ue), o.component("t-button", j), o.component("t-back-button", et), o.component("t-present", L), o.component("t-text", F), o.component("t-sheet", nt), o.component("t-pull-signal", re), o.component("t-input", it), o.component("t-textarea", pt), o.component("t-rich-text", vt), o.component("t-grid", bt), o.component("t-grid-item", Tt), o.component("t-divider", xt), o.component("t-toggle-password", zt), o.component("t-loading-icon", U), o.component("t-alert", te), o.component("t-avatar", Bt), o.component("t-collapse", At), o.component("t-toast", oe), o.component("t-switch", Dt), o.component("t-tab", Ot), o.component("t-tabs", qt), o.component("t-loading-app", Wt), o.component("t-checkbox", jt);
  }
});
export {
  pe as blurCurrentActive,
  Jt as createAction,
  Mt as createAlert,
  Qt as createLoading,
  Zt as createToast,
  eo as createToife,
  de as isFormElement,
  Ee as presentController,
  $ as screenController,
  Le as useKeyboard
};
