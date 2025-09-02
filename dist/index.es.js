import { createElementBlock as f, openBlock as c, renderSlot as h, defineComponent as $, ref as v, computed as z, reactive as ee, watch as L, Fragment as A, withDirectives as O, createCommentVNode as I, normalizeStyle as w, normalizeClass as x, vShow as N, createElementVNode as k, createVNode as W, createBlock as B, withCtx as V, toDisplayString as M, renderList as q, createTextVNode as R, createApp as H, h as U, unref as E, onUnmounted as G, onMounted as K, resolveDynamicComponent as ce, markRaw as ie, inject as ue, provide as de } from "vue";
import { gesture as J } from "@toife/gesture";
import { useRouter as te, useRoute as pe } from "vue-router";
const fe = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), me = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, ve = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !fe(o.target) && me();
  });
}, g = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, _e = {}, ge = { class: "t-app" };
function ye(o, s) {
  return c(), f("div", ge, [
    h(o.$slots, "default")
  ]);
}
const he = /* @__PURE__ */ g(_e, [["render", ye]]), be = /* @__PURE__ */ $({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = v(0), n = v(!1), r = v(), i = v(), a = o, d = e, m = z(() => n.value || a.keepalive), _ = ee({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (p) => {
      a.backdrop ? p?.backdropOpacity && (_["--t-present-backdrop-opacity"] = p.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", p?.transition && (_["--t-present-transition"] = p.transition, _["--t-present-transition"] = p.transition), p?.contentTransform && (_["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (_["--t-present-content-opacity"] = p.contentOpacity);
    }, y = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, u = () => {
      let p = "0px", S = "1";
      a.placement == "bottom" || a.placement == "right" ? p = "100%" : a.placement == "top" || a.placement == "left" ? p = "-100%" : a.placement == "center" && (p = "0px", S = "0"), l({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    L(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Me.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : (u(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: y,
      close: u
    });
    const b = (p) => {
      p.preventDefault(), d("dismiss", "backdrop");
    };
    return u(), (p, S) => (c(), f(A, null, [
      m.value ? O((c(), f("div", {
        key: 0,
        class: x(["t-present", { [p.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: w({ ..._, zIndex: t.value })
      }, [
        h(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      m.value ? O((c(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: b,
        ref_key: "backdrop",
        ref: r,
        style: w({ ..._, zIndex: t.value - 1 })
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), D = /* @__PURE__ */ g(be, [["__scopeId", "data-v-3d0c3227"]]), ke = /* @__PURE__ */ $({
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
    return (s, e) => (c(), f("span", {
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
}), X = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-7c463303"]]), $e = {
  key: 0,
  class: "loader"
}, Te = /* @__PURE__ */ $({
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
    return (t, n) => (c(), f("button", {
      class: x(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: w(e.value)
    }, [
      O(k("span", null, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), f("span", $e, [
        W(X, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), j = /* @__PURE__ */ g(Te, [["__scopeId", "data-v-74d8380d"]]), we = {
  key: 0,
  class: "t-alert-header"
}, xe = { class: "t-alert-content" }, Se = { class: "t-alert-footer" }, ze = /* @__PURE__ */ $({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), d = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, _ = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, y) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: V(() => [
        k("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          h(l.$slots, "header", {}, () => [
            t.title ? (c(), f("div", we, M(t.title), 1)) : I("", !0)
          ], !0),
          h(l.$slots, "content", {}, () => [
            k("div", xe, M(t.message), 1)
          ], !0),
          h(l.$slots, "footer", {}, () => [
            k("div", Se, [
              (c(!0), f(A, null, q(t.actions, (u) => (c(), B(j, {
                color: u.color,
                variant: u.variant,
                onClick: (b) => m(u)
              }, {
                default: V(() => [
                  R(M(u.text), 1)
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
}), oe = /* @__PURE__ */ g(ze, [["__scopeId", "data-v-05d0c578"]]), Yt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
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
}), Ie = /* @__PURE__ */ $({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), d = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, _ = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, y) => (c(), B(D, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: V(() => [
        k("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), f(A, null, q(t.actions, (u) => (c(), f("div", null, [
            (c(!0), f(A, null, q(u, (b) => (c(), B(j, {
              color: b.color,
              size: b.size,
              variant: b.variant,
              onClick: (p) => m(b),
              block: ""
            }, {
              default: V(() => [
                R(M(b.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Be = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-c6bccffb"]]), eo = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
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
}), Ce = { class: "t-loading" }, Ee = /* @__PURE__ */ $({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1);
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, d) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: V(() => [
        k("div", Ce, [
          h(a.$slots, "default", {}, () => [
            W(X, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ve = /* @__PURE__ */ g(Ee, [["__scopeId", "data-v-8f84c14e"]]), to = (o = {}) => {
  const s = v(), e = document.body.querySelector(".t-app");
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
}, Z = v(1e3), Me = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, C = ee([]), Pe = (o) => {
  C.push(o);
}, Ae = (o) => {
  o || C.pop();
}, Re = () => {
  C.splice(0, C.length);
}, T = {
  screens: C,
  addScreen: Pe,
  removeScreen: Ae,
  removeAllScreen: Re,
  hasPrevious: z(() => C.length > 1),
  currentScreen: z(() => C[C.length - 1]),
  lastScreen: z(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, De = /* @__PURE__ */ $({
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
    const t = o, n = e, r = v(!1), i = v(!1), a = v(!1), d = () => {
      i.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        m();
      }, t.duration + 10);
    }, m = () => {
      a.value = !0, setTimeout(() => {
        i.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, _ = z(() => {
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
      open: d
    }), (l, y) => i.value ? (c(), f("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ..._.value })
    }, M(t.message), 7)) : I("", !0);
  }
}), se = /* @__PURE__ */ g(De, [["__scopeId", "data-v-61960e03"]]), oo = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = v();
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
}), Oe = v(0);
function ne() {
  return {
    height: Oe
  };
}
const Ne = /* @__PURE__ */ $({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = ne();
    return (t, n) => (c(), f("div", {
      class: x(["t-cable", { keyboard: s.keyboard && E(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": E(e) + "px", "--t-keyboard-transition": E(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qe = /* @__PURE__ */ g(Ne, [["__scopeId", "data-v-ecb72421"]]), Le = /* @__PURE__ */ $({
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
    return (t, n) => (c(), f("div", {
      class: "t-card",
      style: w(e.value)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), We = {}, He = { class: "t-content" };
function Ue(o, s) {
  return c(), f("div", He, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ g(We, [["render", Ue], ["__scopeId", "data-v-3fd76212"]]), Y = 80, Xe = /* @__PURE__ */ $({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = v(0), n = v(!1), r = v();
    let i, a = !1;
    const d = () => {
      n.value = !1, t.value = 0, i && i.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, m = () => {
      a = !0, n.value = !0, t.value = Y, e("refresh", d);
    };
    return L(() => r.value, () => {
      i && i.destroy();
      let _ = r.value.closest(".t-content");
      _ && (i = J(_, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaY: l, initialDirection: y }) {
          n.value || a || y != "down" || (l >= 120 ? (this.isMoving = !1, m()) : (l > 10 || this.isMoving) && (this.isMoving = !0, t.value = l > 0 ? l : 0));
        },
        up({ deltaY: l, initialDirection: y }) {
          this.isMoving = !1, !(n.value || a) && (l > Y && y == "down" ? m() : t.value = 0);
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), G(() => {
      i && i.destroy();
    }), (_, l) => O((c(), f("div", {
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
      [N, t.value > 0]
    ]);
  }
}), je = /* @__PURE__ */ g(Xe, [["__scopeId", "data-v-c6364c14"]]), Fe = {}, Ge = { class: "t-screen" };
function Ke(o, s) {
  return c(), f("div", Ge, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ g(Fe, [["render", Ke], ["__scopeId", "data-v-c2a3436c"]]), Je = /* @__PURE__ */ $({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = te(), n = pe(), r = t.getRoutes(), i = v(!1), a = s;
    for (let u of r)
      e[u.name] = u.components;
    const d = (u) => {
      u && T.addScreen({
        name: u,
        target: null,
        component: ie(e[u] || null)
      });
    }, m = (u, b) => {
      !b || T.screens[u].target || (T.screens[u].target = b.$el, u > 0 && (i.value = !0, b.$el.style.transform = "translateX(var(--t-app-width))", b.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        b.$el.style.transition = "transform 0.35s ease", b.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), T.screens.length > 1 && (T.lastScreen.value.target.style.transitionOrigin = "left center", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, _ = () => {
      T.currentScreen.value.target.style.transition = "transform 0.35s ease", T.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        T.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    d(n.name), L(() => n.name, (u, b) => {
      u != T.currentScreen.value.name && (T.lastScreen.value?.name == u ? _() : d(u));
    });
    const l = () => {
      i.value = !0;
      const u = T.currentScreen.value.target, b = T.lastScreen.value.target;
      u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(0px)", b.style.transition = "transform 0.35s ease", b.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let y;
    return K(() => {
      y = J(document.body, {
        isMoving: !1,
        beforeEvent(u) {
          return !(i.value || T.screens.length < 2);
        },
        fast({ initialDirection: u }) {
          u == "right" && t.back();
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaX: u, initialDirection: b }) {
          if (b != "right") return;
          const p = window.innerWidth, S = u / p * 100, P = T.currentScreen.value.target, Q = T.lastScreen?.value?.target;
          (u > 15 && u <= p || this.isMoving) && (u = u > 0 ? u : 0, this.isMoving = !0, P.style.transition = "transform 0s ease", P.style.transform = `translateX(${u}px)`, Q.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), Q.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${S}))) scale(${0.5 + 0.5 / 100 * S}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * S}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * S}`));
        },
        up({ deltaX: u, initialDirection: b }) {
          this.isMoving = !1, b != "right" && l();
          const p = window.innerWidth;
          u / p * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          this.isMoving = !1, l();
        }
      });
    }), G(() => {
      y && y.destroy(), T.removeAllScreen();
    }), (u, b) => (c(), f(A, null, [
      (c(!0), f(A, null, q(E(T).screens, (p, S) => (c(), B(ae, {
        ref_for: !0,
        ref: (P) => m(S, P),
        style: w({ zIndex: S + (S == E(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: V(() => [
          (c(), B(ce(p.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: E(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), Qe = /* @__PURE__ */ g(Je, [["__scopeId", "data-v-c652a864"]]), Ze = /* @__PURE__ */ $({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), f("div", {
      class: x(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: w({ "--t-size-toolbar": s.size })
    }, [
      k("div", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Ye = /* @__PURE__ */ g(Ze, [["__scopeId", "data-v-db1924b1"]]), et = /* @__PURE__ */ $({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = te(), e = o, t = () => {
      T.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || E(T).hasPrevious ? (c(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(n.$slots, "default", {}, () => [
        r[0] || (r[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), tt = /* @__PURE__ */ g(et, [["__scopeId", "data-v-ed626a3d"]]), ot = /* @__PURE__ */ $({
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
    return (t, n) => (c(), f("span", {
      class: "t-text",
      style: w(e.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), F = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-f0f94f05"]]), st = /* @__PURE__ */ $({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), f("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), le = /* @__PURE__ */ g(st, [["__scopeId", "data-v-daa38c85"]]), nt = /* @__PURE__ */ $({
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
    const e = o, t = s, n = v(), r = v(), i = v(!1);
    let a = null;
    const d = z(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), m = (l) => {
      t("dismiss", l);
    }, _ = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return L(() => n.value, (l) => {
      l && (a = J(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == d.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ deltaY: y, deltaX: u, initialDirection: b }) {
          if (b != d.value) return;
          let p = 0;
          e.placement == "bottom" || e.placement == "top" ? p = y : p = u, e.placement == "bottom" && (p = y > 0 ? y : 0), e.placement == "top" && (p = y < 0 ? y : 0), e.placement == "left" && (p = u < 0 ? y : 0), e.placement == "right" && (p = u > 0 ? y : 0), (e.placement == "bottom" && (p >= 10 || this.isMoving) || e.placement == "top" && (p <= -10 || this.isMoving) || e.placement == "left" && (p >= 10 || this.isMoving) || e.placement == "right" && (p <= -10 || this.isMoving)) && (this.isMoving = !0, r.value.render({
            contentTransform: p + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: u, initialDirection: b }) {
          if (this.isMoving = !1, _(), b != d.value) {
            r.value.open();
            return;
          }
          let p, S, P;
          e.placement == "bottom" || e.placement == "top" ? (p = n.value.offsetHeight, P = y) : (p = n.value.offsetWidth, P = u), S = P / p * 100, S > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), r.value.open();
        }
      }));
    }), G(() => {
      a && a.destroy();
    }), (l, y) => (c(), B(D, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: m
    }, {
      default: V(() => [
        e.gesture && e.placement != "center" ? (c(), B(le, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        e.closeButton && e.placement == "center" ? (c(), f("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: y[0] || (y[0] = (u) => m("close-button"))
        }, [
          h(l.$slots, "close-icon", {}, () => [
            y[1] || (y[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          h(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), rt = /* @__PURE__ */ g(nt, [["__scopeId", "data-v-0ff00a13"]]), at = { class: "t-input-label" }, lt = { class: "t-input-content" }, ct = ["type", "placeholder", "value"], it = /* @__PURE__ */ $({
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
    return (r, i) => (c(), f("div", {
      class: x(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", at, M(r.label), 1),
        k("div", lt, [
          h(r.$slots, "start", {}, void 0, !0),
          k("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, ct),
          h(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(F, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          R(M(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(F, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          R(M(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ g(it, [["__scopeId", "data-v-1a9425cf"]]), dt = {};
function pt(o, s) {
  return c(), f("textarea");
}
const ft = /* @__PURE__ */ g(dt, [["render", pt]]), mt = {};
function vt(o, s) {
  return c(), f("div");
}
const _t = /* @__PURE__ */ g(mt, [["render", vt]]), gt = {}, yt = { class: "t-grid" };
function ht(o, s) {
  return c(), f("div", yt);
}
const bt = /* @__PURE__ */ g(gt, [["render", ht]]), kt = {}, $t = { class: "t-grid-item" };
function Tt(o, s) {
  return c(), f("div", $t);
}
const wt = /* @__PURE__ */ g(kt, [["render", Tt]]), xt = /* @__PURE__ */ $({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), f("div", {
      class: x(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), St = /* @__PURE__ */ g(xt, [["__scopeId", "data-v-47ee8991"]]), zt = /* @__PURE__ */ $({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(), i = z(() => {
      let m = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (m = `var(--t-color-status-${e.color})`), {
        "--color": m
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    K(() => {
      let m = a();
      m && (n.value = m.type != "password", t("change", n.value));
    });
    const d = () => {
      let m = a();
      m && (n.value = !n.value, n.value ? m.type = "text" : m.type = "password", t("change", n.value));
    };
    return (m, _) => (c(), f("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(i.value),
      onClick: d
    }, [
      n.value ? h(m.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : h(m.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), It = /* @__PURE__ */ g(zt, [["__scopeId", "data-v-3268e9e3"]]), Bt = /* @__PURE__ */ $({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = z(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), f("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ct = /* @__PURE__ */ g(Bt, [["__scopeId", "data-v-24384c2f"]]), Et = { class: "t-collapse-title" }, Vt = {
  key: 0,
  class: "icon"
}, Mt = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, At = /* @__PURE__ */ $({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(""), i = v(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (d, m) => (c(), f("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: w({ "--height": r.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        h(d.$slots, "icon"),
        k("div", Et, [
          h(d.$slots, "title", {}, () => [
            R(M(e.title), 1)
          ])
        ]),
        h(d.$slots, "toggle", {}, () => [
          n.value ? (c(), f("div", Vt, [...m[0] || (m[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), f("div", Mt, [...m[1] || (m[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Pt, [
        k("div", {
          ref_key: "content",
          ref: i
        }, [
          h(d.$slots, "content", {}, () => [
            h(d.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Rt = /* @__PURE__ */ $({
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
    return (i, a) => (c(), f("div", {
      class: x(["t-switch", { on: e.modelValue }]),
      style: w(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Dt = /* @__PURE__ */ g(Rt, [["__scopeId", "data-v-3616970e"]]), Ot = /* @__PURE__ */ $({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = ue("tabsState"), t = z(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), f("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      W(j, {
        variant: "text",
        onClick: n,
        size: E(e).size,
        color: t.value && E(e).variant == "text" ? E(e).color : void 0
      }, {
        default: V(() => [
          h(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Nt = /* @__PURE__ */ g(Ot, [["__scopeId", "data-v-36c12a50"]]), qt = /* @__PURE__ */ $({
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
    const e = o, t = s, n = v("0px"), r = v(), i = z(() => {
      let d = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(d) && (d = `var(--t-color-status-${d})`), d;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, _ = d.offsetWidth / 2;
            n.value = m + _ - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, _ = d.offsetHeight / 2;
            n.value = m + _ - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return de("tabsState", {
      active: z(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (d) => {
        t("update:modelValue", d), a();
      }
    }), K(() => {
      a();
    }), (d, m) => (c(), f("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [d.placement]: !0, [d.variant]: !0 }]),
      style: w({ "--color": i.value, "--transform": n.value, "--border": d.border + "px" })
    }, [
      h(d.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Lt = /* @__PURE__ */ g(qt, [["__scopeId", "data-v-65a2c74c"]]), Wt = /* @__PURE__ */ $({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(re, null, {
      default: V(() => [
        W(X, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Ht = /* @__PURE__ */ g(Wt, [["__scopeId", "data-v-1436aa9f"]]), Ut = { key: 0 }, Xt = {
  key: 0,
  class: "t-checkbox-label"
}, jt = /* @__PURE__ */ $({
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
    return (a, d) => (c(), f("div", {
      class: x(["t-checkbox", { active: r.value }]),
      style: w(n.value),
      onClick: i
    }, [
      k("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), f("div", Ut)) : I("", !0),
        a.type == "check" ? h(a.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), f("span", Xt, M(e.label), 1)) : I("", !0)
    ], 6));
  }
}), Ft = /* @__PURE__ */ g(jt, [["__scopeId", "data-v-d558d0b0"]]), Gt = /* @__PURE__ */ $({
  __name: "t-keyboard",
  setup(o) {
    const { height: s } = ne();
    return (e, t) => (c(), f("div", {
      class: "t-keyboard",
      style: w({ "--height": E(s) + "px" })
    }, null, 4));
  }
}), Kt = /* @__PURE__ */ g(Gt, [["__scopeId", "data-v-5d3fa1da"]]), so = () => ({
  install: (o) => {
    ve(), o.component("t-app", he), o.component("t-screen", ae), o.component("t-swipe-screen", Qe), o.component("t-cable", qe), o.component("t-toolbar", Ye), o.component("t-content", re), o.component("t-card", Le), o.component("t-refresher", je), o.component("t-button", j), o.component("t-back-button", tt), o.component("t-present", D), o.component("t-text", F), o.component("t-sheet", rt), o.component("t-pull-signal", le), o.component("t-input", ut), o.component("t-textarea", ft), o.component("t-rich-text", _t), o.component("t-grid", bt), o.component("t-grid-item", wt), o.component("t-divider", St), o.component("t-toggle-password", It), o.component("t-loading-icon", X), o.component("t-alert", oe), o.component("t-avatar", Ct), o.component("t-collapse", At), o.component("t-toast", se), o.component("t-switch", Dt), o.component("t-tab", Nt), o.component("t-tabs", Lt), o.component("t-loading-app", Ht), o.component("t-checkbox", Ft), o.component("t-keyboard", Kt);
  }
});
export {
  me as blurCurrentActive,
  eo as createAction,
  Yt as createAlert,
  to as createLoading,
  oo as createToast,
  so as createToife,
  fe as isFormElement,
  Me as presentController,
  T as screenController,
  ne as useKeyboard
};
