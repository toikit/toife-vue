import { createElementBlock as d, openBlock as c, renderSlot as g, defineComponent as b, ref as m, computed as w, reactive as ce, watch as O, Fragment as X, withDirectives as W, createCommentVNode as E, normalizeStyle as k, normalizeClass as T, vShow as H, createElementVNode as h, createVNode as U, createBlock as C, withCtx as P, toDisplayString as R, renderList as G, createTextVNode as N, createApp as j, h as F, provide as ie, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as de, useRoute as $e } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), xe = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Te = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && xe();
  });
}, v = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, Se = {}, ze = { class: "t-app" };
function Ie(e, o) {
  return c(), d("div", ze, [
    g(e.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ v(Se, [["render", Ie]]), Be = /* @__PURE__ */ b({
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
  setup(e, { expose: o, emit: t }) {
    const s = m(0), n = m(!1), a = m(), i = m(), l = e, u = t, p = w(() => n.value || l.keepalive), _ = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), r = (f) => {
      l.backdrop ? f?.backdropOpacity && (_["--t-present-backdrop-opacity"] = f.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", f?.transition && (_["--t-present-transition"] = f.transition, _["--t-present-transition"] = f.transition), f?.contentTransform && (_["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (_["--t-present-content-opacity"] = f.contentOpacity);
    }, y = () => {
      r({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, $ = () => {
      let f = "0px", D = "1";
      l.placement == "bottom" || l.placement == "right" ? f = "100%" : l.placement == "top" || l.placement == "left" ? f = "-100%" : l.placement == "center" && (f = "0px", D = "0"), r({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: D,
        backdropOpacity: "0"
      });
    };
    O(() => l.visible, () => {
      l.visible ? (n.value = !0, s.value = He.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : ($(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), o({
      render: r,
      open: y,
      close: $
    });
    const S = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return $(), (f, D) => (c(), d(X, null, [
      p.value ? W((c(), d("div", {
        key: 0,
        class: T(["t-present", [{ [f.placement]: !0 }, l.class]]),
        ref_key: "present",
        ref: i,
        style: k([_, { zIndex: s.value }, l.style])
      }, [
        g(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, n.value]
      ]) : E("", !0),
      p.value ? W((c(), d("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: S,
        ref_key: "backdrop",
        ref: a,
        style: k([_, { zIndex: s.value - 1 }, l.style])
      }, null, 4)), [
        [H, n.value]
      ]) : E("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ v(Be, [["__scopeId", "data-v-8eb6e6e4"]]), Ce = /* @__PURE__ */ b({
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
  setup(e) {
    return (o, t) => (c(), d("span", {
      class: "t-loading-icon",
      style: k({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ v(Ce, [["__scopeId", "data-v-7c463303"]]), Ve = { class: "t-button-content" }, Pe = {
  key: 0,
  class: "loader"
}, Ae = /* @__PURE__ */ b({
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
  setup(e) {
    const o = e, t = w(() => {
      let s;
      return o.variant == "default" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + "-text)",
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": o.color
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), o.variant == "text" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : s = {
        "--border": "none",
        "--color": o.color,
        "--background": "transparent"
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o.variant == "outline" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--border": "0.55px solid var(--t-color-status-" + o.color + ")",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : s = {
        "--border": "0.55px solid " + o.color,
        "--color": o.color,
        "--background": "transparent"
      } : s = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s;
    });
    return (s, n) => (c(), d("button", {
      class: T(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: k(t.value)
    }, [
      W(h("span", Ve, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !o.loading]
      ]),
      o.loading ? (c(), d("span", Pe, [
        U(K, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ v(Ae, [["__scopeId", "data-v-185a9e49"]]), Re = {
  key: 0,
  class: "t-alert-header"
}, Me = { class: "t-alert-content" }, De = { class: "t-alert-footer" }, Xe = /* @__PURE__ */ b({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, n = m(!1), a = t, i = m(), l = m(!1), u = () => {
      n.value = !0;
    }, p = (r) => {
      n.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, _ = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, a("dismiss", r)) : r == "backdrop" && (l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300));
    };
    return o({
      open: u
    }), (r, y) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: P(() => [
        h("div", {
          class: T(["t-alert", { pop: l.value }]),
          ref_key: "container",
          ref: i
        }, [
          g(r.$slots, "header", {}, () => [
            s.title ? (c(), d("div", Re, R(s.title), 1)) : E("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            h("div", Me, R(s.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            h("div", De, [
              (c(!0), d(X, null, G(s.actions, ($) => (c(), C(J, {
                color: $.color,
                variant: $.variant,
                onClick: (S) => p($)
              }, {
                default: P(() => [
                  N(R($.text), 1)
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
}), pe = /* @__PURE__ */ v(Xe, [["__scopeId", "data-v-05d0c578"]]), $o = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), n = m();
      t.appendChild(s);
      const a = j({
        render() {
          return F(pe, {
            ...e,
            ref: n,
            onDismiss: (i, l) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), o({ type: i, data: l });
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Oe = /* @__PURE__ */ b({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, n = m(!1), a = t, i = m(), l = m(!1), u = () => {
      n.value = !0;
    }, p = (r) => {
      n.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, _ = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, a("dismiss", r)) : r == "backdrop" && (l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300));
    };
    return O(() => s.visible, (r) => {
      r ? u() : close();
    }), o({
      open: u,
      close
    }), (r, y) => (c(), C(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: P(() => [
        h("div", {
          class: T(["t-action", { pop: l.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), d(X, null, G(s.actions, ($) => (c(), d("div", null, [
            (c(!0), d(X, null, G($, (S) => (c(), C(J, {
              color: S.color,
              size: S.size,
              variant: S.variant,
              onClick: (f) => p(S),
              block: ""
            }, {
              default: P(() => [
                N(R(S.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ne = /* @__PURE__ */ v(Oe, [["__scopeId", "data-v-e693a02a"]]), wo = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), n = m();
      t.appendChild(s);
      const a = j({
        render() {
          return F(Ne, {
            ...e,
            ref: n,
            onDismiss: (i, l) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), o({ type: i, data: l });
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), qe = { class: "t-loading" }, Le = /* @__PURE__ */ b({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, n = m(!1);
    return o({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (l, u) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        h("div", qe, [
          g(l.$slots, "default", {}, () => [
            U(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ v(Le, [["__scopeId", "data-v-8f84c14e"]]), xo = (e = {}) => {
  const o = m(), t = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((a) => {
        t && (n = document.createElement("div"), t.appendChild(n), s = j({
          render() {
            return F(We, {
              ...e,
              ref: o
            });
          }
        }), s.mount(n), setTimeout(() => {
          o.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        o.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), n?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, ae = m(1e3), He = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, M = ce([]), Q = m(!0), I = m(!1), A = m(-1), z = w(() => M[A.value]), q = w(() => M[A.value + 1] || void 0), B = w(() => M[M.length - 2]), fe = w(() => !I.value && Q.value && B.value), Z = {
  reset() {
    I.value = !0;
    const e = z.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!fe.value) return;
    const o = window.innerWidth, t = e / o * 100, s = z.value.target, n = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t}))) scale(${0.5 + 0.5 / 100 * t}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * t}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      re(), I.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!q.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    I.value = !0;
    let o = q.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Y = {
  reset() {
    I.value = !0;
    const e = z.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    const o = window.innerWidth, t = e / o * 100, s = z.value.target, n = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      re(), I.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!q.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    I.value = !0;
    let o = q.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Ge = (e) => {
  M.push(e);
}, Ue = (e, o) => {
  M[e].target = o;
}, re = (e) => {
  e || M.pop();
}, je = () => {
  M.splice(0, M.length);
}, Fe = () => {
  Q.value = !1;
}, Ke = () => {
  Q.value = !0;
}, Je = (e, o) => {
  e == "scale" && Z.next(o), e == "transform" && Y.next(o);
}, Qe = (e, o) => {
  e == "scale" && Z.back(o), e == "transform" && Y.back(o);
}, Ze = (e, o) => {
  e == "scale" && Z.move(o), e == "transform" && Y.move(o);
}, Ye = (e) => {
  e == "scale" && Z.reset(), e == "transform" && Y.reset();
}, x = {
  isBusy: I,
  isSwipeable: fe,
  reset: Ye,
  next: Je,
  back: Qe,
  move: Ze,
  screens: M,
  addScreen: Ge,
  addScreenEl: Ue,
  removeScreen: re,
  removeAllScreen: je,
  lockSwipe: Fe,
  unlockSwipe: Ke,
  swipeable: Q,
  currentScreen: z,
  lastScreen: B,
  nextScreen: q
}, et = { class: "t-toast-content" }, tt = /* @__PURE__ */ b({
  __name: "t-toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    color: { default: null },
    variant: { default: "default" },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, n = t, a = m(!1), i = m(!1), l = m(!1), u = () => {
      i.value = !0, l.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10);
    }, p = () => {
      l.value = !0, setTimeout(() => {
        i.value = !1, a.value = !1, n("dismiss");
      }, 300);
    };
    O(() => s.visible, (r) => {
      r ? u() : p();
    });
    const _ = w(() => {
      let r;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? r = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + s.color + "-rgb), 1)"
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? r = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : r = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? r = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : r = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : r = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), r;
    });
    return o({
      open: u,
      close: p
    }), (r, y) => i.value ? (c(), d("div", {
      key: 0,
      class: T(["t-toast", { [s.placement]: !0, open: a.value, closing: l.value }]),
      style: k({ "--space": s.space, ..._.value })
    }, [
      g(r.$slots, "content", {}, () => [
        h("div", et, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), me = /* @__PURE__ */ v(tt, [["__scopeId", "data-v-7011351e"]]), To = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const t = document.createElement("div"), s = m();
    o.appendChild(t);
    const n = j({
      render() {
        return F(me, {
          ...e,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), t.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(t), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, e.duration + 10);
    }, 50);
  }
}), ot = m(0);
function ve() {
  return {
    height: ot
  };
}
const st = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const o = e, { height: t } = ve();
    return ie("cableState", {
      placement: o.placement
    }), (s, n) => (c(), d("div", {
      class: T(["t-cable", { keyboard: o.keyboard && V(t) > 0, [o.placement]: !0 }]),
      style: k({ "--t-keyboard-height": V(t) + "px", "--t-keyboard-transition": V(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ v(st, [["__scopeId", "data-v-6cae224b"]]), rt = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const o = e, t = w(() => {
      let s;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--background": o.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), d("div", {
      class: "t-card",
      style: k(t.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, o) {
  return c(), d("div", lt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ v(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), le = 80, it = /* @__PURE__ */ b({
  __name: "t-refresher",
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: o }) {
    const t = o, s = m(0), n = m(!1), a = m();
    let i, l = !1;
    const u = () => {
      n.value = !1, s.value = 0, i && i.cancel(), setTimeout(() => {
        l = !1;
      }, 2e3);
    }, p = () => {
      l = !0, n.value = !0, s.value = le, t("refresh", u);
    };
    return O(() => a.value, () => {
      i && i.destroy();
      let _ = a.value.closest(".t-content");
      _ && (i = ne(_, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, t("start");
        },
        move({ deltaY: r, initialDirection: y }) {
          n.value || l || y != "down" || (r >= 120 ? (this.isMoving = !1, p()) : (r > 10 || this.isMoving) && (this.isMoving = !0, s.value = r > 0 ? r : 0, t("move", r)));
        },
        up({ deltaY: r, initialDirection: y }) {
          this.isMoving = !1, !(n.value || l) && (r > le && y == "down" ? p() : (s.value = 0, t("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(n.value || l) && (n.value = !1, s.value = 0, t("cancel"));
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      i && i.destroy();
    }), (_, r) => W((c(), d("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: k({ height: `${s.value}px` })
    }, [
      h("img", {
        class: T({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, s.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ v(it, [["__scopeId", "data-v-abd4007f"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, o) {
  return c(), d("div", pt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ v(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ b({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    let t = {};
    const s = o, n = e;
    let a;
    const i = n.router || de(), l = n.route || $e(), u = i.getRoutes();
    for (let r of u)
      t[r.name] = r.component || r.components;
    const p = (r) => {
      r && x.addScreen({
        name: r,
        target: null,
        component: he(t[r] || null)
      });
    }, _ = (r, y) => {
      !y || x.screens[r].target || (x.addScreenEl(r, y.$el), x.nextScreen && x.next(n.variant, () => {
        s("change");
      }));
    };
    return O(() => l.name, (r, y) => {
      r != x.currentScreen.value?.name && (x.lastScreen.value?.name == r ? x.back(n.variant, () => {
        s("change");
      }) : p(l.name));
    }), se(() => {
      p(l.name), a = ne(document.body, {
        beforeEvent(r) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: r }) {
          x.lastScreen.value && r == "right" && i.back();
        },
        move({ deltaX: r, initialDirection: y }) {
          y == "right" && x.move(n.variant, r);
        },
        up({ deltaX: r, initialDirection: y }) {
          if (y != "right") {
            x.reset(n.variant);
            return;
          }
          const $ = window.innerWidth;
          r / $ * 100 >= 50 ? i.back() : x.reset(n.variant);
        },
        cancel() {
          x.reset(n.variant);
        }
      });
    }), oe(() => {
      a && a.destroy(), x.removeAllScreen();
    }), (r, y) => (c(), d(X, null, [
      (c(!0), d(X, null, G(V(x).screens, ($, S) => (c(), C(ye, {
        ref_for: !0,
        ref: (f) => _(S, f),
        style: k({ zIndex: S + (S == V(x).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: P(() => [
          (c(), C(be($.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: k({ zIndex: V(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), vt = /* @__PURE__ */ v(mt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e, t = ue("cableState"), s = w(() => o?.placement || t?.placement);
    return (n, a) => (c(), d("div", {
      class: T(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: k({ "--t-size-toolbar": o.size })
    }, [
      h("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), yt = /* @__PURE__ */ v(_t, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const o = e, t = ke(), s = o.router || de(), n = (a) => {
      if (t.onBack) {
        t.onBack(a);
        return;
      }
      x.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (a, i) => a.to || V(x).lastScreen ? (c(), d("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(a.$slots, "default", {}, () => [
        i[0] || (i[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), bt = /* @__PURE__ */ v(gt, [["__scopeId", "data-v-dcf9d363"]]), ht = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = w(() => {
      let s, n = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (n = `var(--t-color-status-${o.color})`), {
        "--color": n,
        "--font-size": s
      };
    });
    return (s, n) => (c(), d("span", {
      class: "t-text",
      style: k(t.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ v(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, t) => (c(), d("div", {
      class: T(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ge = /* @__PURE__ */ v(kt, [["__scopeId", "data-v-ed8f7308"]]), $t = /* @__PURE__ */ b({
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
  setup(e, { emit: o }) {
    const t = e, s = o, n = m(), a = m(), i = m(!1);
    let l = null;
    const u = w(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), p = (r) => {
      s("dismiss", r);
    }, _ = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return O(() => n.value, (r) => {
      r && (l = ne(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(i.value || !t.gesture || t.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == u.value ? s("dismiss", "gesture") : a.value.open();
        },
        move({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (S != u.value) return;
          let f = 0;
          t.placement == "bottom" || t.placement == "top" ? f = y : f = $, t.placement == "bottom" && (f = y > 0 ? y : 0), t.placement == "top" && (f = y < 0 ? y : 0), t.placement == "left" && (f = $ < 0 ? $ : 0), t.placement == "right" && (f = $ > 0 ? $ : 0), (t.placement == "bottom" && (f >= 10 || this.isMoving) || t.placement == "top" && (f <= -10 || this.isMoving) || t.placement == "left" && (f <= -10 || this.isMoving) || t.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, a.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (this.isMoving = !1, _(), S != u.value) {
            a.value.open();
            return;
          }
          let f, D, ee;
          t.placement == "bottom" || t.placement == "top" ? (f = n.value.offsetHeight, ee = y) : (f = n.value.offsetWidth, ee = $), D = ee / f * 100, D > 50 ? s("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), a.value.open();
        }
      }));
    }), oe(() => {
      l && l.destroy();
    }), (r, y) => (c(), C(L, {
      ref_key: "present",
      ref: a,
      class: T(t.class),
      placement: t.placement,
      backdrop: r.backdrop,
      visible: t.visible,
      keepalive: t.keepalive,
      onDismiss: p,
      style: k(t.style)
    }, {
      default: P(() => [
        t.gesture && t.indicator && t.placement != "center" ? (c(), C(ge, {
          key: 0,
          placement: t.placement
        }, null, 8, ["placement"])) : E("", !0),
        h("div", {
          class: T(["t-sheet", { fullscreen: t.fullscreen, [t.placement]: !0, rounded: r.rounded, radius: t.radius }]),
          style: k({ "--background": t.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(r.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ v($t, [["__scopeId", "data-v-71a5b877"]]), xt = { class: "t-input-label" }, Tt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ b({
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
  setup(e, { emit: o }) {
    const t = e, s = o, n = (a) => {
      s("update:modelValue", a.target.value);
    };
    return (a, i) => (c(), d("div", {
      class: T(["t-input", { rounded: t.rounded, ["size-" + t.size]: !0, ["variant-" + t.variant]: !0 }])
    }, [
      h("label", null, [
        h("span", xt, R(a.label), 1),
        h("div", Tt, [
          g(a.$slots, "start", {}, void 0, !0),
          h("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: n
          }, null, 40, St),
          g(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      t.error ? (c(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          N(R(t.error), 1)
        ]),
        _: 1
      })) : t.help ? (c(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          N(R(t.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ v(zt, [["__scopeId", "data-v-1a9425cf"]]), Et = {};
function Bt(e, o) {
  return c(), d("textarea");
}
const Ct = /* @__PURE__ */ v(Et, [["render", Bt]]), Vt = {};
function Pt(e, o) {
  return c(), d("div");
}
const At = /* @__PURE__ */ v(Vt, [["render", Pt]]), Rt = {}, Mt = { class: "t-grid" };
function Dt(e, o) {
  return c(), d("div", Mt);
}
const Xt = /* @__PURE__ */ v(Rt, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, o) {
  return c(), d("div", Nt);
}
const Lt = /* @__PURE__ */ v(Ot, [["render", qt]]), Wt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (t, s) => (c(), d("div", {
      class: T(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ v(Wt, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, n = m(!1), a = m(), i = w(() => {
      let p = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (p = `var(--t-color-status-${t.color})`), {
        "--color": p
      };
    }), l = () => a.value?.parentElement?.querySelector?.("input");
    se(() => {
      let p = l();
      p && (n.value = p.type != "password", s("change", n.value));
    });
    const u = () => {
      let p = l();
      p && (n.value = !n.value, n.value ? p.type = "text" : p.type = "password", s("change", n.value));
    };
    return (p, _) => (c(), d("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: k(i.value),
      onClick: u
    }, [
      n.value ? g(p.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      n.value ? E("", !0) : g(p.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ v(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, n) => (c(), d("div", {
      class: T(["t-avatar", { square: s.square }]),
      style: k({ "--size": t.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ft = /* @__PURE__ */ v(jt, [["__scopeId", "data-v-24384c2f"]]), Kt = { class: "t-collapse-title" }, Jt = {
  key: 0,
  class: "icon"
}, Qt = {
  key: 1,
  class: "icon"
}, Zt = { class: "t-collapse-content" }, Yt = /* @__PURE__ */ b({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, n = m(!1), a = m(""), i = m(), l = () => {
      n.value = !n.value, a.value = `calc(${i.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (u, p) => (c(), d("div", {
      class: T(["t-collapse", { open: n.value }]),
      style: k({ "--height": a.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: l
      }, [
        g(u.$slots, "icon"),
        h("div", Kt, [
          g(u.$slots, "title", {}, () => [
            N(R(t.title), 1)
          ])
        ]),
        g(u.$slots, "toggle", {}, () => [
          n.value ? (c(), d("div", Jt, [...p[0] || (p[0] = [
            h("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), d("div", Qt, [...p[1] || (p[1] = [
            h("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      h("div", Zt, [
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
}), eo = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o, n = () => {
      s("update:modelValue", !t.modelValue);
    }, a = w(() => {
      let i = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (i = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), i;
    });
    return (i, l) => (c(), d("div", {
      class: T(["t-switch", { on: t.modelValue }]),
      style: k(a.value),
      onClick: n
    }, [...l[0] || (l[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ v(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, t = ue("tabsState"), s = w(() => t.active.value === o.value), n = () => {
      t.setActive(o.value);
    };
    return (a, i) => (c(), d("li", {
      class: T(["t-tab", { active: s.value }])
    }, [
      U(J, {
        variant: "text",
        onClick: n,
        size: V(t).size,
        color: s.value && V(t).variant == "text" ? V(t).color : void 0
      }, {
        default: P(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), so = /* @__PURE__ */ v(oo, [["__scopeId", "data-v-f810d905"]]), no = /* @__PURE__ */ b({
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
  setup(e, { emit: o }) {
    const t = e, s = o, n = m("0px"), a = m(), i = w(() => {
      let u = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), l = () => {
      setTimeout(() => {
        if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft, _ = u.offsetWidth / 2;
            n.value = p + _ - t.border / 2 + "px";
          }
        } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop, _ = u.offsetHeight / 2;
            n.value = p + _ - t.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: w(() => t.modelValue),
      color: i.value,
      size: t.size,
      variant: t.variant,
      setActive: (u) => {
        s("update:modelValue", u), l();
      }
    }), se(() => {
      l();
    }), (u, p) => (c(), d("ul", {
      ref_key: "container",
      ref: a,
      class: T(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: k({ "--color": i.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ro = /* @__PURE__ */ v(no, [["__scopeId", "data-v-3a46d2df"]]), ao = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(e) {
    return (o, t) => (c(), C(_e, null, {
      default: P(() => [
        U(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), lo = /* @__PURE__ */ v(ao, [["__scopeId", "data-v-1436aa9f"]]), co = { key: 0 }, io = {
  key: 0,
  class: "t-checkbox-label"
}, uo = /* @__PURE__ */ b({
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
  setup(e, { emit: o }) {
    const t = e, s = o, n = w(() => {
      let l = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (l = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), l;
    }), a = w(() => t.multiple ? t.modelValue.includes(t.value) : t.value === void 0 ? t.modelValue : t.modelValue == t.value), i = () => {
      if (t.multiple) {
        let l = t.modelValue;
        t.modelValue.includes(t.value) ? l.splice(l.indexOf(t.value), 1) : l.push(t.value), s("update:modelValue", l);
      } else t.value === void 0 ? s("update:modelValue", !t.modelValue) : s("update:modelValue", t.value);
    };
    return (l, u) => (c(), d("div", {
      class: T(["t-checkbox", { active: a.value }]),
      style: k(n.value),
      onClick: i
    }, [
      h("div", {
        class: T(`t-checkbox-${l.type}`)
      }, [
        l.type == "radio" ? (c(), d("div", co)) : E("", !0),
        l.type == "check" ? g(l.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      l.label ? (c(), d("span", io, R(t.label), 1)) : E("", !0)
    ], 6));
  }
}), po = /* @__PURE__ */ v(uo, [["__scopeId", "data-v-d558d0b0"]]), fo = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(e) {
    const { height: o } = ve();
    return (t, s) => (c(), d("div", {
      class: "t-keyboard",
      style: k({ "--height": V(o) + "px" })
    }, null, 4));
  }
}), mo = /* @__PURE__ */ v(fo, [["__scopeId", "data-v-5d3fa1da"]]), vo = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(e) {
    const o = e, t = w(() => ({
      "--width": o.width,
      "--height": o.height,
      "--radius": o.radius
    }));
    return (s, n) => (c(), d("div", {
      class: "t-skeleton",
      style: k(t.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ v(vo, [["__scopeId", "data-v-877bbdb5"]]), yo = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const o = e, t = w(() => {
      let s = {};
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--color": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--color": o.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), d("div", {
      class: "t-ripple",
      style: k(t.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ v(yo, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
  install: (e) => {
    Te(), e.component("t-app", Ee), e.component("t-screen", ye), e.component("t-swipe-screen", vt), e.component("t-cable", nt), e.component("t-toolbar", yt), e.component("t-content", _e), e.component("t-card", rt), e.component("t-refresher", ut), e.component("t-button", J), e.component("t-back-button", bt), e.component("t-present", L), e.component("t-text", te), e.component("t-sheet", wt), e.component("t-gesture-indicator", ge), e.component("t-input", It), e.component("t-textarea", Ct), e.component("t-rich-text", At), e.component("t-grid", Xt), e.component("t-grid-item", Lt), e.component("t-divider", Ht), e.component("t-toggle-password", Ut), e.component("t-loading-icon", K), e.component("t-alert", pe), e.component("t-avatar", Ft), e.component("t-collapse", Yt), e.component("t-toast", me), e.component("t-switch", to), e.component("t-tab", so), e.component("t-tabs", ro), e.component("t-loading-app", lo), e.component("t-checkbox", po), e.component("t-keyboard", mo), e.component("t-skeleton", _o), e.component("t-ripple", go);
  }
});
export {
  xe as blurCurrentActive,
  wo as createAction,
  $o as createAlert,
  xo as createLoading,
  To as createToast,
  So as createToife,
  we as isFormElement,
  He as presentController,
  x as screenController,
  ve as useKeyboard
};
