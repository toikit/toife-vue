import { createElementBlock as p, openBlock as c, renderSlot as b, defineComponent as g, ref as v, computed as x, reactive as te, watch as L, Fragment as A, withDirectives as O, createCommentVNode as I, normalizeStyle as T, normalizeClass as S, vShow as N, createElementVNode as w, createVNode as W, createBlock as B, withCtx as V, toDisplayString as M, renderList as q, createTextVNode as R, createApp as G, h as H, provide as oe, unref as E, onUnmounted as F, onMounted as K, resolveDynamicComponent as de, markRaw as pe, inject as se, useAttrs as fe } from "vue";
import { gesture as J } from "@toife/gesture";
import { useRouter as ne, useRoute as me } from "vue-router";
const ve = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), _e = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, ye = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !ve(o.target) && _e();
  });
}, _ = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, ge = {}, he = { class: "t-app" };
function be(o, s) {
  return c(), p("div", he, [
    b(o.$slots, "default")
  ]);
}
const ke = /* @__PURE__ */ _(ge, [["render", be]]), $e = /* @__PURE__ */ g({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" },
    style: {},
    class: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = v(0), n = v(!1), r = v(), i = v(), a = o, u = e, m = x(() => n.value || a.keepalive), y = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (f) => {
      a.backdrop ? f?.backdropOpacity && (y["--t-present-backdrop-opacity"] = f.backdropOpacity) : y["--t-present-backdrop-opacity"] = "0", f?.transition && (y["--t-present-transition"] = f.transition, y["--t-present-transition"] = f.transition), f?.contentTransform && (y["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (y["--t-present-content-opacity"] = f.contentOpacity);
    }, k = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let f = "0px", z = "1";
      a.placement == "bottom" || a.placement == "right" ? f = "100%" : a.placement == "top" || a.placement == "left" ? f = "-100%" : a.placement == "center" && (f = "0px", z = "0"), l({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: z,
        backdropOpacity: "0"
      });
    };
    L(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Re.getNewIndex(), setTimeout(() => {
        k();
      }, 50)) : (d(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: k,
      close: d
    });
    const h = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return d(), (f, z) => (c(), p(A, null, [
      m.value ? O((c(), p("div", {
        key: 0,
        class: S(["t-present", [{ [f.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: i,
        style: T([y, { zIndex: t.value }, a.style])
      }, [
        b(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      m.value ? O((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: h,
        ref_key: "backdrop",
        ref: r,
        style: T([y, { zIndex: t.value - 1 }, a.style])
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), D = /* @__PURE__ */ _($e, [["__scopeId", "data-v-8eb6e6e4"]]), we = /* @__PURE__ */ g({
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
      style: T({
        width: o.size,
        height: o.size,
        borderTopColor: o.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), U = /* @__PURE__ */ _(we, [["__scopeId", "data-v-7c463303"]]), Te = { class: "t-button-content" }, xe = {
  key: 0,
  class: "loader"
}, Se = /* @__PURE__ */ g({
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
    const s = o, e = x(() => {
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
      class: S(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: T(e.value)
    }, [
      O(w("span", Te, [
        b(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), p("span", xe, [
        W(U, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), X = /* @__PURE__ */ _(Se, [["__scopeId", "data-v-185a9e49"]]), ze = {
  key: 0,
  class: "t-alert-header"
}, Ie = { class: "t-alert-content" }, Be = { class: "t-alert-footer" }, Ce = /* @__PURE__ */ g({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), u = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, y = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: u
    }), (l, k) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: V(() => [
        w("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          b(l.$slots, "header", {}, () => [
            t.title ? (c(), p("div", ze, M(t.title), 1)) : I("", !0)
          ], !0),
          b(l.$slots, "content", {}, () => [
            w("div", Ie, M(t.message), 1)
          ], !0),
          b(l.$slots, "footer", {}, () => [
            w("div", Be, [
              (c(!0), p(A, null, q(t.actions, (d) => (c(), B(X, {
                color: d.color,
                variant: d.variant,
                onClick: (h) => m(d)
              }, {
                default: V(() => [
                  R(M(d.text), 1)
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
}), re = /* @__PURE__ */ _(Ce, [["__scopeId", "data-v-05d0c578"]]), co = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
      e.appendChild(t);
      const r = G({
        render() {
          return H(re, {
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
}), Ee = /* @__PURE__ */ g({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), u = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, y = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: u
    }), (l, k) => (c(), B(D, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: V(() => [
        w("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), p(A, null, q(t.actions, (d) => (c(), p("div", null, [
            (c(!0), p(A, null, q(d, (h) => (c(), B(X, {
              color: h.color,
              size: h.size,
              variant: h.variant,
              onClick: (f) => m(h),
              block: ""
            }, {
              default: V(() => [
                R(M(h.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ve = /* @__PURE__ */ _(Ee, [["__scopeId", "data-v-c6bccffb"]]), io = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
      e.appendChild(t);
      const r = G({
        render() {
          return H(Ve, {
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
}), Me = { class: "t-loading" }, Pe = /* @__PURE__ */ g({
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
    }), (a, u) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: V(() => [
        w("div", Me, [
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
}), Ae = /* @__PURE__ */ _(Pe, [["__scopeId", "data-v-8f84c14e"]]), uo = (o = {}) => {
  const s = v(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = G({
          render() {
            return H(Ae, {
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
}, Y = v(1e3), Re = {
  getNewIndex() {
    return Y.value += 2, Y.value;
  }
}, C = te([]), Q = v(!0), De = (o) => {
  C.push(o);
}, Oe = (o) => {
  o || C.pop();
}, Ne = () => {
  C.splice(0, C.length);
}, qe = () => {
  Q.value = !1;
}, Le = () => {
  Q.value = !0;
}, $ = {
  screens: C,
  addScreen: De,
  removeScreen: Oe,
  removeAllScreen: Ne,
  lockSwipe: qe,
  unlockSwipe: Le,
  swipeable: Q,
  hasPrevious: x(() => C.length > 1),
  currentScreen: x(() => C[C.length - 1]),
  lastScreen: x(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, We = /* @__PURE__ */ g({
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
    const t = o, n = e, r = v(!1), i = v(!1), a = v(!1), u = () => {
      i.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        m();
      }, t.duration + 10);
    }, m = () => {
      a.value = !0, setTimeout(() => {
        i.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, y = x(() => {
      let l;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 1)"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
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
    }), (l, k) => i.value ? (c(), p("div", {
      key: 0,
      class: S(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: T({ "--space": t.space, ...y.value })
    }, M(t.message), 7)) : I("", !0);
  }
}), ae = /* @__PURE__ */ _(We, [["__scopeId", "data-v-e6895831"]]), po = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = v();
    s.appendChild(e);
    const n = G({
      render() {
        return H(ae, {
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
}), Ge = v(0);
function le() {
  return {
    height: Ge
  };
}
const He = /* @__PURE__ */ g({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = le();
    return oe("cableState", {
      placement: s.placement
    }), (t, n) => (c(), p("div", {
      class: S(["t-cable", { keyboard: s.keyboard && E(e) > 0, [s.placement]: !0 }]),
      style: T({ "--t-keyboard-height": E(e) + "px", "--t-keyboard-transition": E(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ue = /* @__PURE__ */ _(He, [["__scopeId", "data-v-5234450f"]]), Xe = /* @__PURE__ */ g({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = x(() => {
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
      style: T(e.value)
    }, [
      b(t.$slots, "default")
    ], 4));
  }
}), je = {}, Fe = { class: "t-content" };
function Ke(o, s) {
  return c(), p("div", Fe, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ce = /* @__PURE__ */ _(je, [["render", Ke], ["__scopeId", "data-v-af750e89"]]), ee = 80, Je = /* @__PURE__ */ g({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = v(0), n = v(!1), r = v();
    let i, a = !1;
    const u = () => {
      n.value = !1, t.value = 0, i && i.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, m = () => {
      a = !0, n.value = !0, t.value = ee, e("refresh", u);
    };
    return L(() => r.value, () => {
      i && i.destroy();
      let y = r.value.closest(".t-content");
      y && (i = J(y, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaY: l, initialDirection: k }) {
          n.value || a || k != "down" || (l >= 120 ? (this.isMoving = !1, m()) : (l > 10 || this.isMoving) && (this.isMoving = !0, t.value = l > 0 ? l : 0));
        },
        up({ deltaY: l, initialDirection: k }) {
          this.isMoving = !1, !(n.value || a) && (l > ee && k == "down" ? m() : t.value = 0);
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), F(() => {
      i && i.destroy();
    }), (y, l) => O((c(), p("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: T({ height: `${t.value}px` })
    }, [
      w("img", {
        class: S({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [N, t.value > 0]
    ]);
  }
}), Qe = /* @__PURE__ */ _(Je, [["__scopeId", "data-v-c6364c14"]]), Ze = {}, Ye = { class: "t-screen" };
function et(o, s) {
  return c(), p("div", Ye, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ie = /* @__PURE__ */ _(Ze, [["render", et], ["__scopeId", "data-v-c2a3436c"]]), tt = /* @__PURE__ */ g({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = ne(), n = me(), r = t.getRoutes(), i = v(!1), a = s;
    for (let d of r)
      e[d.name] = d.components;
    const u = (d) => {
      d && $.addScreen({
        name: d,
        target: null,
        component: pe(e[d] || null)
      });
    }, m = (d, h) => {
      !h || $.screens[d].target || ($.screens[d].target = h.$el, d > 0 && (i.value = !0, h.$el.style.transform = "translateX(var(--t-app-width))", h.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        h.$el.style.transition = "transform 0.35s ease", h.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, y = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        $.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    u(n.name), L(() => n.name, (d, h) => {
      d != $.currentScreen.value.name && ($.lastScreen.value?.name == d ? y() : u(d));
    });
    const l = () => {
      i.value = !0;
      const d = $.currentScreen.value.target, h = $.lastScreen.value.target;
      d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(0px)", h.style.transition = "transform 0.35s ease", h.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let k;
    return K(() => {
      k = J(document.body, {
        isMoving: !1,
        beforeEvent(d) {
          return !(i.value || !$.swipeable.value || $.screens.length < 2);
        },
        fast({ initialDirection: d }) {
          d == "right" && t.back();
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaX: d, initialDirection: h }) {
          if (h != "right") return;
          const f = window.innerWidth, z = d / f * 100, P = $.currentScreen.value.target, Z = $.lastScreen?.value?.target;
          (d > 15 && d <= f || this.isMoving) && (d = d > 0 ? d : 0, this.isMoving = !0, P.style.transition = "transform 0s ease", P.style.transform = `translateX(${d}px)`, Z.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), Z.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${z}))) scale(${0.5 + 0.5 / 100 * z}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * z}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * z}`));
        },
        up({ deltaX: d, initialDirection: h }) {
          this.isMoving = !1, h != "right" && l();
          const f = window.innerWidth;
          d / f * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          this.isMoving = !1, l();
        }
      });
    }), F(() => {
      k && k.destroy(), $.removeAllScreen();
    }), (d, h) => (c(), p(A, null, [
      (c(!0), p(A, null, q(E($).screens, (f, z) => (c(), B(ie, {
        ref_for: !0,
        ref: (P) => m(z, P),
        style: T({ zIndex: z + (z == E($).screens.length - 1 ? 2 : 1) }),
        key: z
      }, {
        default: V(() => [
          (c(), B(de(f.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      w("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: E($).screens.length })
      }, null, 4)
    ], 64));
  }
}), ot = /* @__PURE__ */ _(tt, [["__scopeId", "data-v-abea77ec"]]), st = /* @__PURE__ */ g({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o, e = se("cableState"), t = x(() => s?.placement || e?.placement);
    return (n, r) => (c(), p("div", {
      class: S(["t-toolbar", { [t.value]: !0, safe: s.safe }]),
      style: T({ "--t-size-toolbar": s.size })
    }, [
      w("div", null, [
        b(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), nt = /* @__PURE__ */ _(st, [["__scopeId", "data-v-1ee9866d"]]), rt = /* @__PURE__ */ g({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = ne(), e = o, t = fe(), n = (r) => {
      if (t.onBack) {
        t.onBack(r);
        return;
      }
      $.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (r, i) => r.to || E($).hasPrevious ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      b(r.$slots, "default", {}, () => [
        i[0] || (i[0] = w("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), at = /* @__PURE__ */ _(rt, [["__scopeId", "data-v-c36ac784"]]), lt = /* @__PURE__ */ g({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = x(() => {
      let t, n = s.color;
      return s.size == "standard" ? t = "var(--t-fs-10)" : s.size == "small" ? t = "var(--t-fs-08)" : s.size == "large" ? t = "var(--t-fs-12)" : t = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": t
      };
    });
    return (t, n) => (c(), p("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), j = /* @__PURE__ */ _(lt, [["__scopeId", "data-v-f0f94f05"]]), ct = /* @__PURE__ */ g({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), p("div", {
      class: S(["t-gesture-indicator", { [s.placement]: !0 }])
    }, null, 2));
  }
}), ue = /* @__PURE__ */ _(ct, [["__scopeId", "data-v-ed8f7308"]]), it = /* @__PURE__ */ g({
  __name: "t-sheet",
  props: {
    background: { default: "var(--t-color-surface)" },
    class: {},
    visible: { type: Boolean, default: !1 },
    gesture: { type: Boolean, default: !0 },
    fullscreen: { type: Boolean, default: !1 },
    placement: { default: "bottom" },
    keepalive: { type: Boolean, default: !0 },
    backdrop: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    radius: { type: Boolean, default: !0 },
    indicator: { type: Boolean, default: !0 },
    style: {}
  },
  emits: ["dismiss"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(), r = v(), i = v(!1);
    let a = null;
    const u = x(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), m = (l) => {
      t("dismiss", l);
    }, y = () => {
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
        beforeEvent(k) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: k }) {
          y(), k == u.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ deltaY: k, deltaX: d, initialDirection: h }) {
          if (h != u.value) return;
          let f = 0;
          e.placement == "bottom" || e.placement == "top" ? f = k : f = d, e.placement == "bottom" && (f = k > 0 ? k : 0), e.placement == "top" && (f = k < 0 ? k : 0), e.placement == "left" && (f = d < 0 ? k : 0), e.placement == "right" && (f = d > 0 ? k : 0), (e.placement == "bottom" && (f >= 10 || this.isMoving) || e.placement == "top" && (f <= -10 || this.isMoving) || e.placement == "left" && (f >= 10 || this.isMoving) || e.placement == "right" && (f <= -10 || this.isMoving)) && (this.isMoving = !0, r.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: k, deltaX: d, initialDirection: h }) {
          if (this.isMoving = !1, y(), h != u.value) {
            r.value.open();
            return;
          }
          let f, z, P;
          e.placement == "bottom" || e.placement == "top" ? (f = n.value.offsetHeight, P = k) : (f = n.value.offsetWidth, P = d), z = P / f * 100, z > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          this.isMoving = !1, y(), r.value.open();
        }
      }));
    }), F(() => {
      a && a.destroy();
    }), (l, k) => (c(), B(D, {
      ref_key: "present",
      ref: r,
      class: S(e.class),
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: m,
      style: T(e.style)
    }, {
      default: V(() => [
        e.gesture && e.indicator && e.placement != "center" ? (c(), B(ue, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        w("div", {
          class: S(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: T({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          b(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), ut = /* @__PURE__ */ _(it, [["__scopeId", "data-v-fb411896"]]), dt = { class: "t-input-label" }, pt = { class: "t-input-content" }, ft = ["type", "placeholder", "value"], mt = /* @__PURE__ */ g({
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
      class: S(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      w("label", null, [
        w("span", dt, M(r.label), 1),
        w("div", pt, [
          b(r.$slots, "start", {}, void 0, !0),
          w("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, ft),
          b(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(j, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          R(M(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(j, {
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
}), vt = /* @__PURE__ */ _(mt, [["__scopeId", "data-v-1a9425cf"]]), _t = {};
function yt(o, s) {
  return c(), p("textarea");
}
const gt = /* @__PURE__ */ _(_t, [["render", yt]]), ht = {};
function bt(o, s) {
  return c(), p("div");
}
const kt = /* @__PURE__ */ _(ht, [["render", bt]]), $t = {}, wt = { class: "t-grid" };
function Tt(o, s) {
  return c(), p("div", wt);
}
const xt = /* @__PURE__ */ _($t, [["render", Tt]]), St = {}, zt = { class: "t-grid-item" };
function It(o, s) {
  return c(), p("div", zt);
}
const Bt = /* @__PURE__ */ _(St, [["render", It]]), Ct = /* @__PURE__ */ g({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), p("div", {
      class: S(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), Et = /* @__PURE__ */ _(Ct, [["__scopeId", "data-v-47ee8991"]]), Vt = /* @__PURE__ */ g({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(), i = x(() => {
      let m = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (m = `var(--t-color-status-${e.color})`), {
        "--color": m
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    K(() => {
      let m = a();
      m && (n.value = m.type != "password", t("change", n.value));
    });
    const u = () => {
      let m = a();
      m && (n.value = !n.value, n.value ? m.type = "text" : m.type = "password", t("change", n.value));
    };
    return (m, y) => (c(), p("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: T(i.value),
      onClick: u
    }, [
      n.value ? b(m.$slots, "on", { key: 0 }, () => [
        y[0] || (y[0] = w("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : b(m.$slots, "off", { key: 1 }, () => [
        y[1] || (y[1] = w("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Mt = /* @__PURE__ */ _(Vt, [["__scopeId", "data-v-3268e9e3"]]), Pt = /* @__PURE__ */ g({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = x(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), p("div", {
      class: S(["t-avatar", { square: t.square }]),
      style: T({ "--size": e.value })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), At = /* @__PURE__ */ _(Pt, [["__scopeId", "data-v-24384c2f"]]), Rt = { class: "t-collapse-title" }, Dt = {
  key: 0,
  class: "icon"
}, Ot = {
  key: 1,
  class: "icon"
}, Nt = { class: "t-collapse-content" }, qt = /* @__PURE__ */ g({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(""), i = v(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (u, m) => (c(), p("div", {
      class: S(["t-collapse", { open: n.value }]),
      style: T({ "--height": r.value })
    }, [
      w("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        b(u.$slots, "icon"),
        w("div", Rt, [
          b(u.$slots, "title", {}, () => [
            R(M(e.title), 1)
          ])
        ]),
        b(u.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", Dt, [...m[0] || (m[0] = [
            w("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Ot, [...m[1] || (m[1] = [
            w("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      w("div", Nt, [
        w("div", {
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
}), Lt = /* @__PURE__ */ g({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = x(() => {
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
      class: S(["t-switch", { on: e.modelValue }]),
      style: T(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      w("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Wt = /* @__PURE__ */ _(Lt, [["__scopeId", "data-v-3616970e"]]), Gt = /* @__PURE__ */ g({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = se("tabsState"), t = x(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), p("li", {
      class: S(["t-tab", { active: t.value }])
    }, [
      W(X, {
        variant: "text",
        onClick: n,
        size: E(e).size,
        color: t.value && E(e).variant == "text" ? E(e).color : void 0
      }, {
        default: V(() => [
          b(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Ht = /* @__PURE__ */ _(Gt, [["__scopeId", "data-v-36c12a50"]]), Ut = /* @__PURE__ */ g({
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
    const e = o, t = s, n = v("0px"), r = v(), i = x(() => {
      let u = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let u = r.value.querySelector(".active");
          if (u) {
            let m = u.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, y = u.offsetWidth / 2;
            n.value = m + y - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let u = r.value.querySelector(".active");
          if (u) {
            let m = u.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, y = u.offsetHeight / 2;
            n.value = m + y - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return oe("tabsState", {
      active: x(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (u) => {
        t("update:modelValue", u), a();
      }
    }), K(() => {
      a();
    }), (u, m) => (c(), p("ul", {
      ref_key: "container",
      ref: r,
      class: S(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: T({ "--color": i.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      b(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Xt = /* @__PURE__ */ _(Ut, [["__scopeId", "data-v-65a2c74c"]]), jt = /* @__PURE__ */ g({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(ce, null, {
      default: V(() => [
        W(U, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Ft = /* @__PURE__ */ _(jt, [["__scopeId", "data-v-1436aa9f"]]), Kt = { key: 0 }, Jt = {
  key: 0,
  class: "t-checkbox-label"
}, Qt = /* @__PURE__ */ g({
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
    const e = o, t = s, n = x(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = x(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), i = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else e.value === void 0 ? t("update:modelValue", !e.modelValue) : t("update:modelValue", e.value);
    };
    return (a, u) => (c(), p("div", {
      class: S(["t-checkbox", { active: r.value }]),
      style: T(n.value),
      onClick: i
    }, [
      w("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", Kt)) : I("", !0),
        a.type == "check" ? b(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = w("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), p("span", Jt, M(e.label), 1)) : I("", !0)
    ], 6));
  }
}), Zt = /* @__PURE__ */ _(Qt, [["__scopeId", "data-v-d558d0b0"]]), Yt = /* @__PURE__ */ g({
  __name: "t-keyboard",
  setup(o) {
    const { height: s } = le();
    return (e, t) => (c(), p("div", {
      class: "t-keyboard",
      style: T({ "--height": E(s) + "px" })
    }, null, 4));
  }
}), eo = /* @__PURE__ */ _(Yt, [["__scopeId", "data-v-5d3fa1da"]]), to = /* @__PURE__ */ g({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(o) {
    const s = o, e = x(() => ({
      "--width": s.width,
      "--height": s.height,
      "--radius": s.radius
    }));
    return (t, n) => (c(), p("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), oo = /* @__PURE__ */ _(to, [["__scopeId", "data-v-877bbdb5"]]), so = /* @__PURE__ */ g({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(o) {
    const s = o, e = x(() => {
      let t = {};
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--color": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--color": s.color
      } : t = {
        "--color": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (c(), p("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), no = /* @__PURE__ */ _(so, [["__scopeId", "data-v-42cb3d71"]]), fo = () => ({
  install: (o) => {
    ye(), o.component("t-app", ke), o.component("t-screen", ie), o.component("t-swipe-screen", ot), o.component("t-cable", Ue), o.component("t-toolbar", nt), o.component("t-content", ce), o.component("t-card", Xe), o.component("t-refresher", Qe), o.component("t-button", X), o.component("t-back-button", at), o.component("t-present", D), o.component("t-text", j), o.component("t-sheet", ut), o.component("t-gesture-indicator", ue), o.component("t-input", vt), o.component("t-textarea", gt), o.component("t-rich-text", kt), o.component("t-grid", xt), o.component("t-grid-item", Bt), o.component("t-divider", Et), o.component("t-toggle-password", Mt), o.component("t-loading-icon", U), o.component("t-alert", re), o.component("t-avatar", At), o.component("t-collapse", qt), o.component("t-toast", ae), o.component("t-switch", Wt), o.component("t-tab", Ht), o.component("t-tabs", Xt), o.component("t-loading-app", Ft), o.component("t-checkbox", Zt), o.component("t-keyboard", eo), o.component("t-skeleton", oo), o.component("t-ripple", no);
  }
});
export {
  _e as blurCurrentActive,
  io as createAction,
  co as createAlert,
  uo as createLoading,
  po as createToast,
  fo as createToife,
  ve as isFormElement,
  Re as presentController,
  $ as screenController,
  le as useKeyboard
};
