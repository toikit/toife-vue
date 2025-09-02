import { createElementBlock as p, openBlock as c, renderSlot as g, defineComponent as k, ref as _, computed as z, reactive as ee, watch as W, Fragment as R, withDirectives as O, createCommentVNode as I, normalizeStyle as w, normalizeClass as x, vShow as N, createElementVNode as h, createVNode as X, createBlock as B, withCtx as V, toDisplayString as P, renderList as q, createTextVNode as D, createApp as H, h as U, unref as E, onUnmounted as K, onMounted as M, resolveDynamicComponent as ce, markRaw as ie, inject as ue, provide as de } from "vue";
import { gesture as Y } from "@toife/gesture";
import { useRouter as te, useRoute as pe } from "vue-router";
const fe = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), me = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, ve = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !fe(o.target) && me();
  });
}, y = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, _e = {}, ye = { class: "t-app" };
function ge(o, s) {
  return c(), p("div", ye, [
    g(o.$slots, "default")
  ]);
}
const be = /* @__PURE__ */ y(_e, [["render", ge]]), he = /* @__PURE__ */ k({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = _(0), n = _(!1), r = _(), i = _(), a = o, u = e, f = z(() => n.value || a.keepalive), m = ee({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (v) => {
      a.backdrop ? v?.backdropOpacity && (m["--t-present-backdrop-opacity"] = v.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", v?.transition && (m["--t-present-transition"] = v.transition, m["--t-present-transition"] = v.transition), v?.contentTransform && (m["--t-present-content-transform"] = v.contentTransform), v?.contentOpacity && (m["--t-present-content-opacity"] = v.contentOpacity);
    }, $ = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let v = "0px", S = "1";
      a.placement == "bottom" || a.placement == "right" ? v = "100%" : a.placement == "top" || a.placement == "left" ? v = "-100%" : a.placement == "center" && (v = "0px", S = "0"), l({
        contentTransform: v,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    W(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Pe.getNewIndex(), setTimeout(() => {
        $();
      }, 50)) : (d(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: $,
      close: d
    });
    const b = (v) => {
      v.preventDefault(), u("dismiss", "backdrop");
    };
    return d(), (v, S) => (c(), p(R, null, [
      f.value ? O((c(), p("div", {
        key: 0,
        class: x(["t-present", { [v.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: w({ ...m, zIndex: t.value })
      }, [
        g(v.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      f.value ? O((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: b,
        ref_key: "backdrop",
        ref: r,
        style: w({ ...m, zIndex: t.value - 1 })
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ y(he, [["__scopeId", "data-v-3d0c3227"]]), ke = /* @__PURE__ */ k({
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
}), j = /* @__PURE__ */ y(ke, [["__scopeId", "data-v-7c463303"]]), $e = {
  key: 0,
  class: "loader"
}, Te = /* @__PURE__ */ k({
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
    const s = o, e = z(() => {
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
        g(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), p("span", $e, [
        X(j, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), F = /* @__PURE__ */ y(Te, [["__scopeId", "data-v-74d8380d"]]), we = {
  key: 0,
  class: "t-alert-header"
}, xe = { class: "t-alert-content" }, Se = { class: "t-alert-footer" }, ze = /* @__PURE__ */ k({
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
    }), (l, $) => (c(), B(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: V(() => [
        h("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          g(l.$slots, "header", {}, () => [
            t.title ? (c(), p("div", we, P(t.title), 1)) : I("", !0)
          ], !0),
          g(l.$slots, "content", {}, () => [
            h("div", xe, P(t.message), 1)
          ], !0),
          g(l.$slots, "footer", {}, () => [
            h("div", Se, [
              (c(!0), p(R, null, q(t.actions, (d) => (c(), B(F, {
                color: d.color,
                variant: d.variant,
                onClick: (b) => f(d)
              }, {
                default: V(() => [
                  D(P(d.text), 1)
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
}), oe = /* @__PURE__ */ y(ze, [["__scopeId", "data-v-05d0c578"]]), Zt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = _();
      e.appendChild(t);
      const r = H({
        render() {
          return U(oe, {
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
}), Ie = /* @__PURE__ */ k({
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
    }), (l, $) => (c(), B(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: m
    }, {
      default: V(() => [
        h("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), p(R, null, q(t.actions, (d) => (c(), p("div", null, [
            (c(!0), p(R, null, q(d, (b) => (c(), B(F, {
              color: b.color,
              size: b.size,
              variant: b.variant,
              onClick: (v) => f(b),
              block: ""
            }, {
              default: V(() => [
                D(P(b.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Be = /* @__PURE__ */ y(Ie, [["__scopeId", "data-v-c6bccffb"]]), eo = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = _();
      e.appendChild(t);
      const r = H({
        render() {
          return U(Be, {
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
}), Ce = { class: "t-loading" }, Ee = /* @__PURE__ */ k({
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
      default: V(() => [
        h("div", Ce, [
          g(a.$slots, "default", {}, () => [
            X(j, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ve = /* @__PURE__ */ y(Ee, [["__scopeId", "data-v-8f84c14e"]]), to = (o = {}) => {
  const s = _(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = H({
          render() {
            return U(Ve, {
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
}, Q = _(1e3), Pe = {
  getNewIndex() {
    return Q.value += 2, Q.value;
  }
}, C = ee([]), Ae = (o) => {
  C.push(o);
}, Re = (o) => {
  o || C.pop();
}, De = () => {
  C.splice(0, C.length);
}, T = {
  screens: C,
  addScreen: Ae,
  removeScreen: Re,
  removeAllScreen: De,
  hasPrevious: z(() => C.length > 1),
  currentScreen: z(() => C[C.length - 1]),
  lastScreen: z(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Le = /* @__PURE__ */ k({
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
    }, m = z(() => {
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
    }), (l, $) => i.value ? (c(), p("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ...m.value })
    }, P(t.message), 7)) : I("", !0);
  }
}), se = /* @__PURE__ */ y(Le, [["__scopeId", "data-v-61960e03"]]), oo = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = _();
    s.appendChild(e);
    const n = H({
      render() {
        return U(se, {
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
}), Oe = _(0);
function ne() {
  return {
    height: Oe
  };
}
const Ne = /* @__PURE__ */ k({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = ne();
    return (t, n) => (c(), p("div", {
      class: x(["t-cable", { keyboard: s.keyboard && E(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": E(e) + "px", "--t-keyboard-transition": E(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qe = /* @__PURE__ */ y(Ne, [["__scopeId", "data-v-ecb72421"]]), We = /* @__PURE__ */ k({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = z(() => {
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
      g(t.$slots, "default")
    ], 4));
  }
}), Xe = {}, He = { class: "t-content" };
function Ue(o, s) {
  return c(), p("div", He, [
    g(o.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ y(Xe, [["render", Ue], ["__scopeId", "data-v-3fd76212"]]), Z = 80, je = /* @__PURE__ */ k({
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
      a = !0, n.value = !0, t.value = Z, e("refresh", u);
    };
    return W(() => r.value, () => {
      i && i.destroy();
      let m = r.value.closest(".t-content");
      m && (i = Y(m, {
        options: {
          minDist: 60
        },
        move({ deltaY: l, initialDirection: $ }) {
          n.value || a || $ != "down" || (l > 10 && m.scrollTop == 0 && m.classList.add("scroll-hidden"), l >= 120 ? f() : l > 10 && (t.value = l));
        },
        up({ deltaY: l, initialDirection: $ }) {
          m.classList.remove("scroll-hidden"), !(n.value || a) && (l > Z && $ == "down" ? f() : t.value = 0);
        },
        cancel() {
          m.classList.remove("scroll-hidden"), !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), K(() => {
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
}), Fe = /* @__PURE__ */ y(je, [["__scopeId", "data-v-18e337db"]]), Ge = {}, Ke = { class: "t-screen" };
function Me(o, s) {
  return c(), p("div", Ke, [
    g(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ y(Ge, [["render", Me], ["__scopeId", "data-v-c2a3436c"]]), Ye = /* @__PURE__ */ k({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = te(), n = pe(), r = t.getRoutes(), i = _(!1), a = s;
    for (let d of r)
      e[d.name] = d.components;
    const u = (d) => {
      d && T.addScreen({
        name: d,
        target: null,
        component: ie(e[d] || null)
      });
    }, f = (d, b) => {
      !b || T.screens[d].target || (T.screens[d].target = b.$el, d > 0 && (i.value = !0, b.$el.style.transform = "translateX(var(--t-app-width))", b.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        b.$el.style.transition = "transform 0.35s ease", b.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), T.screens.length > 1 && (T.lastScreen.value.target.style.transitionOrigin = "left center", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      T.currentScreen.value.target.style.transition = "transform 0.35s ease", T.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        T.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    u(n.name), W(() => n.name, (d, b) => {
      d != T.currentScreen.value.name && (T.lastScreen.value?.name == d ? m() : u(d));
    });
    const l = () => {
      i.value = !0;
      const d = T.currentScreen.value.target, b = T.lastScreen.value.target;
      d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(0px)", b.style.transition = "transform 0.35s ease", b.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let $;
    return M(() => {
      $ = Y(document.body, {
        pointerId: null,
        beforeEvent(d) {
          return !(i.value || T.screens.length < 2);
        },
        fast({ initialDirection: d }) {
          d == "right" && t.back();
        },
        move({ deltaX: d, initialDirection: b }) {
          if (b != "right") return;
          const v = window.innerWidth, S = d / v * 100, A = T.currentScreen.value.target, J = T.lastScreen?.value?.target;
          if (d > 15 && d <= v) {
            A.style.transition = "transform 0s ease", A.style.transform = `translateX(${d}px)`, J.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), J.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${S}))) scale(${0.5 + 0.5 / 100 * S}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * S}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * S}`);
            return;
          }
        },
        up({ deltaX: d, initialDirection: b }) {
          b != "right" && l();
          const v = window.innerWidth;
          d / v * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          l();
        }
      });
    }), K(() => {
      $ && $.destroy(), T.removeAllScreen();
    }), (d, b) => (c(), p(R, null, [
      (c(!0), p(R, null, q(E(T).screens, (v, S) => (c(), B(ae, {
        ref_for: !0,
        ref: (A) => f(S, A),
        style: w({ zIndex: S + (S == E(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: V(() => [
          (c(), B(ce(v.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: E(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), Je = /* @__PURE__ */ y(Ye, [["__scopeId", "data-v-89bd38c0"]]), Qe = /* @__PURE__ */ k({
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
        g(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Ze = /* @__PURE__ */ y(Qe, [["__scopeId", "data-v-db1924b1"]]), et = /* @__PURE__ */ k({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = te(), e = o, t = () => {
      T.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || E(T).hasPrevious ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      g(n.$slots, "default", {}, () => [
        r[0] || (r[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), tt = /* @__PURE__ */ y(et, [["__scopeId", "data-v-ed626a3d"]]), ot = /* @__PURE__ */ k({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = z(() => {
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
      g(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), G = /* @__PURE__ */ y(ot, [["__scopeId", "data-v-f0f94f05"]]), st = /* @__PURE__ */ k({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), p("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), le = /* @__PURE__ */ y(st, [["__scopeId", "data-v-daa38c85"]]), nt = /* @__PURE__ */ k({
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
    const u = z(() => {
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
    return W(() => n.value, (l) => {
      l && (a = Y(n.value, {
        options: {
          minDist: 30
        },
        beforeEvent($) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        fast({ initialDirection: $ }) {
          m(), $ == u.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ deltaY: $, deltaX: d, initialDirection: b }) {
          if (b != u.value) return;
          let v = 0;
          e.placement == "bottom" || e.placement == "top" ? v = $ : v = d, r.value.render({
            contentTransform: v + "px",
            transition: "0s"
          });
        },
        up({ deltaY: $, deltaX: d, initialDirection: b }) {
          if (m(), b != u.value) {
            r.value.open();
            return;
          }
          let v, S, A;
          e.placement == "bottom" || e.placement == "top" ? (v = n.value.offsetHeight, A = $) : (v = n.value.offsetWidth, A = d), S = A / v * 100, S > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          m(), r.value.open();
        }
      }));
    }), K(() => {
      a && a.destroy();
    }), (l, $) => (c(), B(L, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: f
    }, {
      default: V(() => [
        e.gesture && e.placement != "center" ? (c(), B(le, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        e.closeButton && e.placement == "center" ? (c(), p("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: $[0] || ($[0] = (d) => f("close-button"))
        }, [
          g(l.$slots, "close-icon", {}, () => [
            $[1] || ($[1] = h("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        h("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), rt = /* @__PURE__ */ y(nt, [["__scopeId", "data-v-ce0e1428"]]), at = { class: "t-input-label" }, lt = { class: "t-input-content" }, ct = ["type", "placeholder", "value"], it = /* @__PURE__ */ k({
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
        h("span", at, P(r.label), 1),
        h("div", lt, [
          g(r.$slots, "start", {}, void 0, !0),
          h("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, ct),
          g(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(G, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          D(P(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(G, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          D(P(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ y(it, [["__scopeId", "data-v-1a9425cf"]]), dt = {};
function pt(o, s) {
  return c(), p("textarea");
}
const ft = /* @__PURE__ */ y(dt, [["render", pt]]), mt = {};
function vt(o, s) {
  return c(), p("div");
}
const _t = /* @__PURE__ */ y(mt, [["render", vt]]), yt = {}, gt = { class: "t-grid" };
function bt(o, s) {
  return c(), p("div", gt);
}
const ht = /* @__PURE__ */ y(yt, [["render", bt]]), kt = {}, $t = { class: "t-grid-item" };
function Tt(o, s) {
  return c(), p("div", $t);
}
const wt = /* @__PURE__ */ y(kt, [["render", Tt]]), xt = /* @__PURE__ */ k({
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
}), St = /* @__PURE__ */ y(xt, [["__scopeId", "data-v-47ee8991"]]), zt = /* @__PURE__ */ k({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = _(!1), r = _(), i = z(() => {
      let f = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (f = `var(--t-color-status-${e.color})`), {
        "--color": f
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    M(() => {
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
      n.value ? g(f.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : g(f.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), It = /* @__PURE__ */ y(zt, [["__scopeId", "data-v-3268e9e3"]]), Bt = /* @__PURE__ */ k({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = z(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), p("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      g(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ct = /* @__PURE__ */ y(Bt, [["__scopeId", "data-v-24384c2f"]]), Et = { class: "t-collapse-title" }, Vt = {
  key: 0,
  class: "icon"
}, Pt = {
  key: 1,
  class: "icon"
}, At = { class: "t-collapse-content" }, Rt = /* @__PURE__ */ k({
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
        g(u.$slots, "icon"),
        h("div", Et, [
          g(u.$slots, "title", {}, () => [
            D(P(e.title), 1)
          ])
        ]),
        g(u.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", Vt, [...f[0] || (f[0] = [
            h("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Pt, [...f[1] || (f[1] = [
            h("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      h("div", At, [
        h("div", {
          ref_key: "content",
          ref: i
        }, [
          g(u.$slots, "content", {}, () => [
            g(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Dt = /* @__PURE__ */ k({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = z(() => {
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
}), Lt = /* @__PURE__ */ y(Dt, [["__scopeId", "data-v-3616970e"]]), Ot = /* @__PURE__ */ k({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = ue("tabsState"), t = z(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), p("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      X(F, {
        variant: "text",
        onClick: n,
        size: E(e).size,
        color: t.value && E(e).variant == "text" ? E(e).color : void 0
      }, {
        default: V(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Nt = /* @__PURE__ */ y(Ot, [["__scopeId", "data-v-36c12a50"]]), qt = /* @__PURE__ */ k({
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
    const e = o, t = s, n = _("0px"), r = _(), i = z(() => {
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
    return de("tabsState", {
      active: z(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (u) => {
        t("update:modelValue", u), a();
      }
    }), M(() => {
      a();
    }), (u, f) => (c(), p("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": i.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Wt = /* @__PURE__ */ y(qt, [["__scopeId", "data-v-65a2c74c"]]), Xt = /* @__PURE__ */ k({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(re, null, {
      default: V(() => [
        X(j, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Ht = /* @__PURE__ */ y(Xt, [["__scopeId", "data-v-1436aa9f"]]), Ut = { key: 0 }, jt = {
  key: 0,
  class: "t-checkbox-label"
}, Ft = /* @__PURE__ */ k({
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
    const e = o, t = s, n = z(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = z(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), i = () => {
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
        a.type == "radio" ? (c(), p("div", Ut)) : I("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), p("span", jt, P(e.label), 1)) : I("", !0)
    ], 6));
  }
}), Gt = /* @__PURE__ */ y(Ft, [["__scopeId", "data-v-d558d0b0"]]), Kt = /* @__PURE__ */ k({
  __name: "t-keyboard",
  setup(o) {
    const { height: s } = ne();
    return (e, t) => (c(), p("div", {
      class: "t-keyboard",
      style: w({ "--height": E(s) + "px" })
    }, null, 4));
  }
}), Mt = /* @__PURE__ */ y(Kt, [["__scopeId", "data-v-5d3fa1da"]]), so = () => ({
  install: (o) => {
    ve(), o.component("t-app", be), o.component("t-screen", ae), o.component("t-swipe-screen", Je), o.component("t-cable", qe), o.component("t-toolbar", Ze), o.component("t-content", re), o.component("t-card", We), o.component("t-refresher", Fe), o.component("t-button", F), o.component("t-back-button", tt), o.component("t-present", L), o.component("t-text", G), o.component("t-sheet", rt), o.component("t-pull-signal", le), o.component("t-input", ut), o.component("t-textarea", ft), o.component("t-rich-text", _t), o.component("t-grid", ht), o.component("t-grid-item", wt), o.component("t-divider", St), o.component("t-toggle-password", It), o.component("t-loading-icon", j), o.component("t-alert", oe), o.component("t-avatar", Ct), o.component("t-collapse", Rt), o.component("t-toast", se), o.component("t-switch", Lt), o.component("t-tab", Nt), o.component("t-tabs", Wt), o.component("t-loading-app", Ht), o.component("t-checkbox", Gt), o.component("t-keyboard", Mt);
  }
});
export {
  me as blurCurrentActive,
  eo as createAction,
  Zt as createAlert,
  to as createLoading,
  oo as createToast,
  so as createToife,
  fe as isFormElement,
  Pe as presentController,
  T as screenController,
  ne as useKeyboard
};
