import { createElementBlock as d, openBlock as c, renderSlot as g, defineComponent as b, ref as m, computed as w, reactive as ce, watch as O, Fragment as X, withDirectives as W, createCommentVNode as E, normalizeStyle as k, normalizeClass as T, vShow as H, createElementVNode as h, createVNode as U, createBlock as C, withCtx as P, toDisplayString as R, renderList as G, createTextVNode as N, createApp as j, h as F, provide as ie, unref as V, onUnmounted as se, onMounted as oe, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as de, useRoute as $e } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), xe = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Te = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && xe();
  });
}, v = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of s)
    t[o] = n;
  return t;
}, Se = {}, ze = { class: "t-app" };
function Ie(e, s) {
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
  setup(e, { expose: s, emit: t }) {
    const o = m(0), n = m(!1), l = m(), u = m(), a = e, i = t, p = w(() => n.value || a.keepalive), _ = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), r = (f) => {
      a.backdrop ? f?.backdropOpacity && (_["--t-present-backdrop-opacity"] = f.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", f?.transition && (_["--t-present-transition"] = f.transition, _["--t-present-transition"] = f.transition), f?.contentTransform && (_["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (_["--t-present-content-opacity"] = f.contentOpacity);
    }, y = () => {
      r({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, $ = () => {
      let f = "0px", D = "1";
      a.placement == "bottom" || a.placement == "right" ? f = "100%" : a.placement == "top" || a.placement == "left" ? f = "-100%" : a.placement == "center" && (f = "0px", D = "0"), r({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: D,
        backdropOpacity: "0"
      });
    };
    O(() => a.visible, () => {
      a.visible ? (n.value = !0, o.value = He.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : ($(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: r,
      open: y,
      close: $
    });
    const S = (f) => {
      f.preventDefault(), i("dismiss", "backdrop");
    };
    return $(), (f, D) => (c(), d(X, null, [
      p.value ? W((c(), d("div", {
        key: 0,
        class: T(["t-present", [{ [f.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: u,
        style: k([_, { zIndex: o.value }, a.style])
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
        ref: l,
        style: k([_, { zIndex: o.value - 1 }, a.style])
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
    return (s, t) => (c(), d("span", {
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
    const s = e, t = w(() => {
      let o;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? o = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "var(--t-color-status-" + s.color + ")"
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? o = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : o = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? o = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : o = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : o = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o;
    });
    return (o, n) => (c(), d("button", {
      class: T(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: k(t.value)
    }, [
      W(h("span", Ve, [
        g(o.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !s.loading]
      ]),
      s.loading ? (c(), d("span", Pe, [
        U(K, {
          color: "var(--color)",
          type: s.loadingType
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
  setup(e, { expose: s, emit: t }) {
    const o = e, n = m(!1), l = t, u = m(), a = m(!1), i = () => {
      n.value = !0;
    }, p = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, _ = (r) => {
      o.dismiss && o.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: i
    }), (r, y) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: P(() => [
        h("div", {
          class: T(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          g(r.$slots, "header", {}, () => [
            o.title ? (c(), d("div", Re, R(o.title), 1)) : E("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            h("div", Me, R(o.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            h("div", De, [
              (c(!0), d(X, null, G(o.actions, ($) => (c(), C(J, {
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
}), pe = /* @__PURE__ */ v(Xe, [["__scopeId", "data-v-05d0c578"]]), ks = (e = {}) => ({
  open() {
    return new Promise((s) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const o = document.createElement("div"), n = m();
      t.appendChild(o);
      const l = j({
        render() {
          return F(pe, {
            ...e,
            ref: n,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), o.remove();
              }, 300), s({ type: u, data: a });
            }
          });
        }
      });
      l.mount(o), setTimeout(() => {
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
  setup(e, { expose: s, emit: t }) {
    const o = e, n = m(!1), l = t, u = m(), a = m(!1), i = () => {
      n.value = !0;
    }, p = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, _ = (r) => {
      o.dismiss && o.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return O(() => o.visible, (r) => {
      r ? i() : close();
    }), s({
      open: i,
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
          class: T(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          (c(!0), d(X, null, G(o.actions, ($) => (c(), d("div", null, [
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
}), Ne = /* @__PURE__ */ v(Oe, [["__scopeId", "data-v-e693a02a"]]), $s = (e = {}) => ({
  open() {
    return new Promise((s) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const o = document.createElement("div"), n = m();
      t.appendChild(o);
      const l = j({
        render() {
          return F(Ne, {
            ...e,
            ref: n,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), o.remove();
              }, 300), s({ type: u, data: a });
            }
          });
        }
      });
      l.mount(o), setTimeout(() => {
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
  setup(e, { expose: s, emit: t }) {
    const o = e, n = m(!1);
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, i) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        h("div", qe, [
          g(a.$slots, "default", {}, () => [
            U(K, {
              type: o.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ v(Le, [["__scopeId", "data-v-8f84c14e"]]), ws = (e = {}) => {
  const s = m(), t = document.body.querySelector(".t-app");
  let o = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        t && (n = document.createElement("div"), t.appendChild(n), o = j({
          render() {
            return F(We, {
              ...e,
              ref: s
            });
          }
        }), o.mount(n), setTimeout(() => {
          s.value?.open?.(), l(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((l) => {
        s.value?.close?.(), setTimeout(() => {
          o?.unmount?.(), n?.remove?.(), l(!0);
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
    const e = z.value.target, s = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!fe.value) return;
    const s = window.innerWidth, t = e / s * 100, o = z.value.target, n = B.value.target;
    e > 15 && e <= s && (e = e > 0 ? e : 0, o.style.transition = "transform 0s ease", o.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t}))) scale(${0.5 + 0.5 / 100 * t}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * t}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
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
    let s = q.value.target;
    s.style.transform = "translateX(var(--t-app-width))", s.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Y = {
  reset() {
    I.value = !0;
    const e = z.value.target, s = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    const s = window.innerWidth, t = e / s * 100, o = z.value.target, n = B.value.target;
    e > 15 && e <= s && (e = e > 0 ? e : 0, o.style.transition = "transform 0s ease", o.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
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
    let s = q.value.target;
    s.style.transform = "translateX(var(--t-app-width))", s.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Ge = (e) => {
  M.push(e);
}, Ue = (e, s) => {
  M[e].target = s;
}, re = (e) => {
  e || M.pop();
}, je = () => {
  M.splice(0, M.length);
}, Fe = () => {
  Q.value = !1;
}, Ke = () => {
  Q.value = !0;
}, Je = (e, s) => {
  e == "scale" && Z.next(s), e == "transform" && Y.next(s);
}, Qe = (e, s) => {
  e == "scale" && Z.back(s), e == "transform" && Y.back(s);
}, Ze = (e, s) => {
  e == "scale" && Z.move(s), e == "transform" && Y.move(s);
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
  setup(e, { expose: s, emit: t }) {
    const o = e, n = t, l = m(!1), u = m(!1), a = m(!1), i = () => {
      u.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, p = () => {
      a.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    O(() => o.visible, (r) => {
      r ? i() : p();
    });
    const _ = w(() => {
      let r;
      return o.variant == "default" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? r = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + o.color + "-rgb), 1)"
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": o.color
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), o.variant == "text" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? r = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : r = {
        "--border": "none",
        "--color": o.color,
        "--background": "transparent"
      } : r = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o.variant == "outline" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? r = {
        "--border": "0.55px solid var(--t-color-status-" + o.color + ")",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : r = {
        "--border": "0.55px solid " + o.color,
        "--color": o.color,
        "--background": "transparent"
      } : r = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), r;
    });
    return s({
      open: i,
      close: p
    }), (r, y) => u.value ? (c(), d("div", {
      key: 0,
      class: T(["t-toast", { [o.placement]: !0, open: l.value, closing: a.value }]),
      style: k({ "--space": o.space, ..._.value })
    }, [
      g(r.$slots, "content", {}, () => [
        h("div", et, R(o.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), me = /* @__PURE__ */ v(tt, [["__scopeId", "data-v-7011351e"]]), xs = (e = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const t = document.createElement("div"), o = m();
    s.appendChild(t);
    const n = j({
      render() {
        return F(me, {
          ...e,
          ref: o,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), t.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(t), setTimeout(() => {
      o.value?.open?.(), setTimeout(() => {
        o.value?.close?.();
      }, e.duration + 10);
    }, 50);
  }
}), st = m(0);
function ve() {
  return {
    height: st
  };
}
const ot = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const s = e, { height: t } = ve();
    return ie("cableState", {
      placement: s.placement
    }), (o, n) => (c(), d("div", {
      class: T(["t-cable", { keyboard: s.keyboard && V(t) > 0, [s.placement]: !0 }]),
      style: k({ "--t-keyboard-height": V(t) + "px", "--t-keyboard-transition": V(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ v(ot, [["__scopeId", "data-v-6cae224b"]]), rt = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const s = e, t = w(() => {
      let o;
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? o = {
        "--background": "var(--t-color-status-" + s.color + ")"
      } : o = {
        "--background": s.color
      } : o = {
        "--background": "var(--t-color-surface)"
      }, o;
    });
    return (o, n) => (c(), d("div", {
      class: "t-card",
      style: k(t.value)
    }, [
      g(o.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, s) {
  return c(), d("div", lt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ v(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), le = 80, it = /* @__PURE__ */ b({
  __name: "t-refresher",
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: s }) {
    const t = s, o = m(0), n = m(!1), l = m();
    let u, a = !1;
    const i = () => {
      n.value = !1, o.value = 0, u && u.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, p = () => {
      a = !0, n.value = !0, o.value = le, t("refresh", i);
    };
    return O(() => l.value, () => {
      u && u.destroy();
      let _ = l.value.closest(".t-content");
      _ && (u = ne(_, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, t("start");
        },
        move({ deltaY: r, initialDirection: y }) {
          n.value || a || y != "down" || (r >= 120 ? (this.isMoving = !1, p()) : (r > 10 || this.isMoving) && (this.isMoving = !0, o.value = r > 0 ? r : 0, t("move", r)));
        },
        up({ deltaY: r, initialDirection: y }) {
          this.isMoving = !1, !(n.value || a) && (r > le && y == "down" ? p() : (o.value = 0, t("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, o.value = 0, t("cancel"));
        }
      }, {
        passive: !1
      }));
    }), se(() => {
      u && u.destroy();
    }), (_, r) => W((c(), d("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: l,
      style: k({ height: `${o.value}px` })
    }, [
      h("img", {
        class: T({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, o.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ v(it, [["__scopeId", "data-v-abd4007f"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, s) {
  return c(), d("div", pt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ v(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ b({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" }
  },
  emits: ["change"],
  setup(e, { emit: s }) {
    let t = {};
    const o = de(), n = $e(), l = o.getRoutes(), u = s, a = e;
    let i;
    for (let r of l)
      t[r.name] = r.components;
    const p = (r) => {
      r && x.addScreen({
        name: r,
        target: null,
        component: he(t[r] || null)
      });
    }, _ = (r, y) => {
      !y || x.screens[r].target || (x.addScreenEl(r, y.$el), x.nextScreen && x.next(a.variant, () => {
        u("change");
      }));
    };
    return O(() => n.name, (r, y) => {
      r != x.currentScreen.value.name && (x.lastScreen.value?.name == r ? x.back(a.variant, () => {
        u("change");
      }) : p(n.name));
    }), oe(() => {
      i = ne(document.body, {
        beforeEvent(r) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: r }) {
          x.lastScreen.value && r == "right" && o.back();
        },
        move({ deltaX: r, initialDirection: y }) {
          y == "right" && x.move(a.variant, r);
        },
        up({ deltaX: r, initialDirection: y }) {
          if (y != "right") {
            x.reset(a.variant);
            return;
          }
          const $ = window.innerWidth;
          r / $ * 100 >= 50 ? o.back() : x.reset(a.variant);
        },
        cancel() {
          x.reset(a.variant);
        }
      });
    }), se(() => {
      i && i.destroy(), x.removeAllScreen();
    }), p(n.name), (r, y) => (c(), d(X, null, [
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
}), vt = /* @__PURE__ */ v(mt, [["__scopeId", "data-v-b6917f76"]]), _t = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const s = e, t = ue("cableState"), o = w(() => s?.placement || t?.placement);
    return (n, l) => (c(), d("div", {
      class: T(["t-toolbar", { [o.value]: !0, safe: s.safe }]),
      style: k({ "--t-size-toolbar": s.size })
    }, [
      h("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), yt = /* @__PURE__ */ v(_t, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const s = de(), t = e, o = ke(), n = (l) => {
      if (o.onBack) {
        o.onBack(l);
        return;
      }
      x.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    };
    return (l, u) => l.to || V(x).lastScreen ? (c(), d("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        u[0] || (u[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), bt = /* @__PURE__ */ v(gt, [["__scopeId", "data-v-25ab48bb"]]), ht = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const s = e, t = w(() => {
      let o, n = s.color;
      return s.size == "standard" ? o = "var(--t-fs-10)" : s.size == "small" ? o = "var(--t-fs-08)" : s.size == "large" ? o = "var(--t-fs-12)" : o = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": o
      };
    });
    return (o, n) => (c(), d("span", {
      class: "t-text",
      style: k(t.value)
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ v(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (s, t) => (c(), d("div", {
      class: T(["t-gesture-indicator", { [s.placement]: !0 }])
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
  setup(e, { emit: s }) {
    const t = e, o = s, n = m(), l = m(), u = m(!1);
    let a = null;
    const i = w(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), p = (r) => {
      o("dismiss", r);
    }, _ = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return O(() => n.value, (r) => {
      r && (a = ne(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(u.value || !t.gesture || t.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == i.value ? o("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (S != i.value) return;
          let f = 0;
          t.placement == "bottom" || t.placement == "top" ? f = y : f = $, t.placement == "bottom" && (f = y > 0 ? y : 0), t.placement == "top" && (f = y < 0 ? y : 0), t.placement == "left" && (f = $ < 0 ? $ : 0), t.placement == "right" && (f = $ > 0 ? $ : 0), (t.placement == "bottom" && (f >= 10 || this.isMoving) || t.placement == "top" && (f <= -10 || this.isMoving) || t.placement == "left" && (f <= -10 || this.isMoving) || t.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (this.isMoving = !1, _(), S != i.value) {
            l.value.open();
            return;
          }
          let f, D, ee;
          t.placement == "bottom" || t.placement == "top" ? (f = n.value.offsetHeight, ee = y) : (f = n.value.offsetWidth, ee = $), D = ee / f * 100, D > 50 ? o("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), l.value.open();
        }
      }));
    }), se(() => {
      a && a.destroy();
    }), (r, y) => (c(), C(L, {
      ref_key: "present",
      ref: l,
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
  setup(e, { emit: s }) {
    const t = e, o = s, n = (l) => {
      o("update:modelValue", l.target.value);
    };
    return (l, u) => (c(), d("div", {
      class: T(["t-input", { rounded: t.rounded, ["size-" + t.size]: !0, ["variant-" + t.variant]: !0 }])
    }, [
      h("label", null, [
        h("span", xt, R(l.label), 1),
        h("div", Tt, [
          g(l.$slots, "start", {}, void 0, !0),
          h("input", {
            type: l.type,
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: n
          }, null, 40, St),
          g(l.$slots, "end", {}, void 0, !0)
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
function Bt(e, s) {
  return c(), d("textarea");
}
const Ct = /* @__PURE__ */ v(Et, [["render", Bt]]), Vt = {};
function Pt(e, s) {
  return c(), d("div");
}
const At = /* @__PURE__ */ v(Vt, [["render", Pt]]), Rt = {}, Mt = { class: "t-grid" };
function Dt(e, s) {
  return c(), d("div", Mt);
}
const Xt = /* @__PURE__ */ v(Rt, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, s) {
  return c(), d("div", Nt);
}
const Lt = /* @__PURE__ */ v(Ot, [["render", qt]]), Wt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const s = e;
    return (t, o) => (c(), d("div", {
      class: T(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ v(Wt, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: s }) {
    const t = e, o = s, n = m(!1), l = m(), u = w(() => {
      let p = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (p = `var(--t-color-status-${t.color})`), {
        "--color": p
      };
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    oe(() => {
      let p = a();
      p && (n.value = p.type != "password", o("change", n.value));
    });
    const i = () => {
      let p = a();
      p && (n.value = !n.value, n.value ? p.type = "text" : p.type = "password", o("change", n.value));
    };
    return (p, _) => (c(), d("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: k(u.value),
      onClick: i
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
    const s = e, t = w(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (o, n) => (c(), d("div", {
      class: T(["t-avatar", { square: o.square }]),
      style: k({ "--size": t.value })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
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
  setup(e, { emit: s }) {
    const t = e, o = s, n = m(!1), l = m(""), u = m(), a = () => {
      n.value = !n.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, o("change", n.value);
    };
    return o("change", n.value), (i, p) => (c(), d("div", {
      class: T(["t-collapse", { open: n.value }]),
      style: k({ "--height": l.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(i.$slots, "icon"),
        h("div", Kt, [
          g(i.$slots, "title", {}, () => [
            N(R(t.title), 1)
          ])
        ]),
        g(i.$slots, "toggle", {}, () => [
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
          ref: u
        }, [
          g(i.$slots, "content", {}, () => [
            g(i.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), es = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = e, o = s, n = () => {
      o("update:modelValue", !t.modelValue);
    }, l = w(() => {
      let u = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (u = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), u;
    });
    return (u, a) => (c(), d("div", {
      class: T(["t-switch", { on: t.modelValue }]),
      style: k(l.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), ts = /* @__PURE__ */ v(es, [["__scopeId", "data-v-3616970e"]]), ss = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const s = e, t = ue("tabsState"), o = w(() => t.active.value === s.value), n = () => {
      t.setActive(s.value);
    };
    return (l, u) => (c(), d("li", {
      class: T(["t-tab", { active: o.value }])
    }, [
      U(J, {
        variant: "text",
        onClick: n,
        size: V(t).size,
        color: o.value && V(t).variant == "text" ? V(t).color : void 0
      }, {
        default: P(() => [
          g(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), os = /* @__PURE__ */ v(ss, [["__scopeId", "data-v-f810d905"]]), ns = /* @__PURE__ */ b({
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
  setup(e, { emit: s }) {
    const t = e, o = s, n = m("0px"), l = m(), u = w(() => {
      let i = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(i) && (i = `var(--t-color-status-${i})`), i;
    }), a = () => {
      setTimeout(() => {
        if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
          let i = l.value.querySelector(".active");
          if (i) {
            let p = i.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, _ = i.offsetWidth / 2;
            n.value = p + _ - t.border / 2 + "px";
          }
        } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
          let i = l.value.querySelector(".active");
          if (i) {
            let p = i.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, _ = i.offsetHeight / 2;
            n.value = p + _ - t.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: w(() => t.modelValue),
      color: u.value,
      size: t.size,
      variant: t.variant,
      setActive: (i) => {
        o("update:modelValue", i), a();
      }
    }), oe(() => {
      a();
    }), (i, p) => (c(), d("ul", {
      ref_key: "container",
      ref: l,
      class: T(["t-tabs", { [i.placement]: !0, [i.variant]: !0 }]),
      style: k({ "--color": u.value, "--transform": n.value, "--border": i.border + "px" })
    }, [
      g(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), rs = /* @__PURE__ */ v(ns, [["__scopeId", "data-v-3a46d2df"]]), as = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(e) {
    return (s, t) => (c(), C(_e, null, {
      default: P(() => [
        U(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), ls = /* @__PURE__ */ v(as, [["__scopeId", "data-v-1436aa9f"]]), cs = { key: 0 }, is = {
  key: 0,
  class: "t-checkbox-label"
}, us = /* @__PURE__ */ b({
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
  setup(e, { emit: s }) {
    const t = e, o = s, n = w(() => {
      let a = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (a = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), a;
    }), l = w(() => t.multiple ? t.modelValue.includes(t.value) : t.value === void 0 ? t.modelValue : t.modelValue == t.value), u = () => {
      if (t.multiple) {
        let a = t.modelValue;
        t.modelValue.includes(t.value) ? a.splice(a.indexOf(t.value), 1) : a.push(t.value), o("update:modelValue", a);
      } else t.value === void 0 ? o("update:modelValue", !t.modelValue) : o("update:modelValue", t.value);
    };
    return (a, i) => (c(), d("div", {
      class: T(["t-checkbox", { active: l.value }]),
      style: k(n.value),
      onClick: u
    }, [
      h("div", {
        class: T(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), d("div", cs)) : E("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          i[0] || (i[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      a.label ? (c(), d("span", is, R(t.label), 1)) : E("", !0)
    ], 6));
  }
}), ds = /* @__PURE__ */ v(us, [["__scopeId", "data-v-d558d0b0"]]), ps = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(e) {
    const { height: s } = ve();
    return (t, o) => (c(), d("div", {
      class: "t-keyboard",
      style: k({ "--height": V(s) + "px" })
    }, null, 4));
  }
}), fs = /* @__PURE__ */ v(ps, [["__scopeId", "data-v-5d3fa1da"]]), ms = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(e) {
    const s = e, t = w(() => ({
      "--width": s.width,
      "--height": s.height,
      "--radius": s.radius
    }));
    return (o, n) => (c(), d("div", {
      class: "t-skeleton",
      style: k(t.value)
    }, null, 4));
  }
}), vs = /* @__PURE__ */ v(ms, [["__scopeId", "data-v-877bbdb5"]]), _s = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const s = e, t = w(() => {
      let o = {};
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? o = {
        "--color": "var(--t-color-status-" + s.color + ")"
      } : o = {
        "--color": s.color
      } : o = {
        "--color": "var(--t-color-surface)"
      }, o;
    });
    return (o, n) => (c(), d("div", {
      class: "t-ripple",
      style: k(t.value)
    }, null, 4));
  }
}), ys = /* @__PURE__ */ v(_s, [["__scopeId", "data-v-42cb3d71"]]), Ts = () => ({
  install: (e) => {
    Te(), e.component("t-app", Ee), e.component("t-screen", ye), e.component("t-swipe-screen", vt), e.component("t-cable", nt), e.component("t-toolbar", yt), e.component("t-content", _e), e.component("t-card", rt), e.component("t-refresher", ut), e.component("t-button", J), e.component("t-back-button", bt), e.component("t-present", L), e.component("t-text", te), e.component("t-sheet", wt), e.component("t-gesture-indicator", ge), e.component("t-input", It), e.component("t-textarea", Ct), e.component("t-rich-text", At), e.component("t-grid", Xt), e.component("t-grid-item", Lt), e.component("t-divider", Ht), e.component("t-toggle-password", Ut), e.component("t-loading-icon", K), e.component("t-alert", pe), e.component("t-avatar", Ft), e.component("t-collapse", Yt), e.component("t-toast", me), e.component("t-switch", ts), e.component("t-tab", os), e.component("t-tabs", rs), e.component("t-loading-app", ls), e.component("t-checkbox", ds), e.component("t-keyboard", fs), e.component("t-skeleton", vs), e.component("t-ripple", ys);
  }
});
export {
  xe as blurCurrentActive,
  $s as createAction,
  ks as createAlert,
  ws as createLoading,
  xs as createToast,
  Ts as createToife,
  we as isFormElement,
  He as presentController,
  x as screenController,
  ve as useKeyboard
};
