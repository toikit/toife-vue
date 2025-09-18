import { createElementBlock as d, openBlock as c, renderSlot as g, defineComponent as b, ref as m, computed as w, reactive as ce, watch as O, Fragment as X, withDirectives as W, createCommentVNode as E, normalizeStyle as k, normalizeClass as x, vShow as H, createElementVNode as h, createVNode as G, createBlock as C, withCtx as P, toDisplayString as R, renderList as F, createTextVNode as N, createApp as U, h as j, provide as ie, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as de, useRoute as $e } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), Te = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, xe = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && Te();
  });
}, v = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Se = {}, ze = { class: "t-app" };
function Ie(e, t) {
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
  setup(e, { expose: t, emit: o }) {
    const s = m(0), n = m(!1), l = m(), i = m(), r = e, u = o, p = w(() => n.value || r.keepalive), _ = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), a = (f) => {
      r.backdrop ? f?.backdropOpacity && (_["--t-present-backdrop-opacity"] = f.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", f?.transition && (_["--t-present-transition"] = f.transition, _["--t-present-transition"] = f.transition), f?.contentTransform && (_["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (_["--t-present-content-opacity"] = f.contentOpacity);
    }, y = () => {
      a({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, $ = () => {
      let f = "0px", D = "1";
      r.placement == "bottom" || r.placement == "right" ? f = "100%" : r.placement == "top" || r.placement == "left" ? f = "-100%" : r.placement == "center" && (f = "0px", D = "0"), a({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: D,
        backdropOpacity: "0"
      });
    };
    O(() => r.visible, () => {
      r.visible ? (n.value = !0, s.value = He.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : ($(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), t({
      render: a,
      open: y,
      close: $
    });
    const S = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return $(), (f, D) => (c(), d(X, null, [
      p.value ? W((c(), d("div", {
        key: 0,
        class: x(["t-present", [{ [f.placement]: !0 }, r.class]]),
        ref_key: "present",
        ref: i,
        style: k([_, { zIndex: s.value }, r.style])
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
        style: k([_, { zIndex: s.value - 1 }, r.style])
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
    return (t, o) => (c(), d("span", {
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
    const t = e, o = w(() => {
      let s;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "var(--t-color-status-" + t.color + ")"
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : s = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : s = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : s = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : s = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s;
    });
    return (s, n) => (c(), d("button", {
      class: x(["t-button", { "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0 }]),
      style: k(o.value)
    }, [
      W(h("span", Ve, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (c(), d("span", Pe, [
        G(K, {
          color: "var(--color)",
          type: t.loadingType
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
  setup(e, { expose: t, emit: o }) {
    const s = e, n = m(!1), l = o, i = m(), r = m(!1), u = () => {
      n.value = !0;
    }, p = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, _ = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return t({
      open: u
    }), (a, y) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: P(() => [
        h("div", {
          class: x(["t-alert", { pop: r.value }]),
          ref_key: "container",
          ref: i
        }, [
          g(a.$slots, "header", {}, () => [
            s.title ? (c(), d("div", Re, R(s.title), 1)) : E("", !0)
          ], !0),
          g(a.$slots, "content", {}, () => [
            h("div", Me, R(s.message), 1)
          ], !0),
          g(a.$slots, "footer", {}, () => [
            h("div", De, [
              (c(!0), d(X, null, F(s.actions, ($) => (c(), C(J, {
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
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(pe, {
            ...e,
            ref: n,
            onDismiss: (i, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: i, data: r });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
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
  setup(e, { expose: t, emit: o }) {
    const s = e, n = m(!1), l = o, i = m(), r = m(!1), u = () => {
      n.value = !0;
    }, p = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, _ = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return O(() => s.visible, (a) => {
      a ? u() : close();
    }), t({
      open: u,
      close
    }), (a, y) => (c(), C(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: P(() => [
        h("div", {
          class: x(["t-action", { pop: r.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), d(X, null, F(s.actions, ($) => (c(), d("div", null, [
            (c(!0), d(X, null, F($, (S) => (c(), C(J, {
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
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(Ne, {
            ...e,
            ref: n,
            onDismiss: (i, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: i, data: r });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
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
  setup(e, { expose: t, emit: o }) {
    const s = e, n = m(!1);
    return t({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (r, u) => (c(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        h("div", qe, [
          g(r.$slots, "default", {}, () => [
            G(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ v(Le, [["__scopeId", "data-v-8f84c14e"]]), To = (e = {}) => {
  const t = m(), o = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        o && (n = document.createElement("div"), o.appendChild(n), s = U({
          render() {
            return j(We, {
              ...e,
              ref: t
            });
          }
        }), s.mount(n), setTimeout(() => {
          t.value?.open?.(), l(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((l) => {
        t.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), n?.remove?.(), l(!0);
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
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!fe.value) return;
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, n = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o}))) scale(${0.5 + 0.5 / 100 * o}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * o}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
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
    let t = q.value.target;
    t.style.transform = "translateX(var(--t-app-width))", t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Y = {
  reset() {
    I.value = !0;
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, n = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
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
    let t = q.value.target;
    t.style.transform = "translateX(var(--t-app-width))", t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Fe = (e) => {
  M.push(e);
}, Ge = (e, t) => {
  M[e].target = t;
}, re = (e) => {
  e || M.pop();
}, Ue = () => {
  M.splice(0, M.length);
}, je = () => {
  Q.value = !1;
}, Ke = () => {
  Q.value = !0;
}, Je = (e, t) => {
  e == "scale" && Z.next(t), e == "transform" && Y.next(t);
}, Qe = (e, t) => {
  e == "scale" && Z.back(t), e == "transform" && Y.back(t);
}, Ze = (e, t) => {
  e == "scale" && Z.move(t), e == "transform" && Y.move(t);
}, Ye = (e) => {
  e == "scale" && Z.reset(), e == "transform" && Y.reset();
}, T = {
  isBusy: I,
  isSwipeable: fe,
  reset: Ye,
  next: Je,
  back: Qe,
  move: Ze,
  screens: M,
  addScreen: Fe,
  addScreenEl: Ge,
  removeScreen: re,
  removeAllScreen: Ue,
  lockSwipe: je,
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
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, l = m(!1), i = m(!1), r = m(!1), u = () => {
      i.value = !0, r.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, p = () => {
      r.value = !0, setTimeout(() => {
        i.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    O(() => s.visible, (a) => {
      a ? u() : p();
    });
    const _ = w(() => {
      let a;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? a = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + s.color + "-rgb), 1)"
      } : a = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : a = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? a = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : a = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : a = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? a = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : a = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : a = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), a;
    });
    return t({
      open: u,
      close: p
    }), (a, y) => i.value ? (c(), d("div", {
      key: 0,
      class: x(["t-toast", { [s.placement]: !0, open: l.value, closing: r.value }]),
      style: k({ "--space": s.space, ..._.value })
    }, [
      g(a.$slots, "content", {}, () => [
        h("div", et, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), me = /* @__PURE__ */ v(tt, [["__scopeId", "data-v-7011351e"]]), xo = (e = {}) => ({
  open() {
    let t = document.body.querySelector(".t-app");
    if (!t) return;
    const o = document.createElement("div"), s = m();
    t.appendChild(o);
    const n = U({
      render() {
        return j(me, {
          ...e,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(o), setTimeout(() => {
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
    const t = e, { height: o } = ve();
    return ie("cableState", {
      placement: t.placement
    }), (s, n) => (c(), d("div", {
      class: x(["t-cable", { keyboard: t.keyboard && V(o) > 0, [t.placement]: !0 }]),
      style: k({ "--t-keyboard-height": V(o) + "px", "--t-keyboard-transition": V(o) > 0 ? "0.3s" : "0.1s" })
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
    const t = e, o = w(() => {
      let s;
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--background": "var(--t-color-status-" + t.color + ")"
      } : s = {
        "--background": t.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), d("div", {
      class: "t-card",
      style: k(o.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, t) {
  return c(), d("div", lt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ v(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), le = 80, it = /* @__PURE__ */ b({
  __name: "t-refresher",
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: t }) {
    const o = t, s = m(0), n = m(!1), l = m();
    let i, r = !1;
    const u = () => {
      n.value = !1, s.value = 0, i && i.cancel(), setTimeout(() => {
        r = !1;
      }, 2e3);
    }, p = () => {
      r = !0, n.value = !0, s.value = le, o("refresh", u);
    };
    return O(() => l.value, () => {
      i && i.destroy();
      let _ = l.value.closest(".t-content");
      _ && (i = ne(_, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, o("start");
        },
        move({ deltaY: a, initialDirection: y }) {
          n.value || r || y != "down" || (a >= 120 ? (this.isMoving = !1, p()) : (a > 10 || this.isMoving) && (this.isMoving = !0, s.value = a > 0 ? a : 0, o("move", a)));
        },
        up({ deltaY: a, initialDirection: y }) {
          this.isMoving = !1, !(n.value || r) && (a > le && y == "down" ? p() : (s.value = 0, o("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(n.value || r) && (n.value = !1, s.value = 0, o("cancel"));
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      i && i.destroy();
    }), (_, a) => W((c(), d("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: l,
      style: k({ height: `${s.value}px` })
    }, [
      h("img", {
        class: x({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, s.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ v(it, [["__scopeId", "data-v-abd4007f"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, t) {
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
  setup(e, { emit: t }) {
    let o = {};
    const s = t, n = e;
    let l;
    const i = n.router || de(), r = n.route || $e(), u = i.getRoutes();
    for (let a of u)
      o[a.name] = a.component || a.components;
    const p = (a) => {
      a && T.addScreen({
        name: a,
        target: null,
        component: he(o[a] || null)
      });
    }, _ = (a, y) => {
      !y || T.screens[a].target || (T.addScreenEl(a, y.$el), T.nextScreen && T.next(n.variant, () => {
        s("change");
      }));
    };
    return O(() => r.name, (a, y) => {
      a != T.currentScreen.value?.name && (T.lastScreen.value?.name == a ? T.back(n.variant, () => {
        s("change");
      }) : p(r.name));
    }), se(() => {
      p(r.name), l = ne(document.body, {
        beforeEvent(a) {
          return !!T.isSwipeable.value;
        },
        fast({ initialDirection: a }) {
          T.lastScreen.value && a == "right" && i.back();
        },
        move({ deltaX: a, initialDirection: y }) {
          y == "right" && T.move(n.variant, a);
        },
        up({ deltaX: a, initialDirection: y }) {
          if (y != "right") {
            T.reset(n.variant);
            return;
          }
          const $ = window.innerWidth;
          a / $ * 100 >= 50 ? i.back() : T.reset(n.variant);
        },
        cancel() {
          T.reset(n.variant);
        }
      });
    }), oe(() => {
      l && l.destroy(), T.removeAllScreen();
    }), (a, y) => (c(), d(X, null, [
      (c(!0), d(X, null, F(V(T).screens, ($, S) => (c(), C(ye, {
        ref_for: !0,
        ref: (f) => _(S, f),
        style: k({ zIndex: S + (S == V(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: P(() => [
          (c(), C(be($.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: k({ zIndex: V(T).screens.length })
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
    const t = e, o = ue("cableState"), s = w(() => t?.placement || o?.placement);
    return (n, l) => (c(), d("div", {
      class: x(["t-toolbar", { [s.value]: !0, safe: t.safe }]),
      style: k({ "--t-size-toolbar": t.size })
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
    const t = e, o = ke(), s = t.router || de(), n = (l) => {
      if (o.onBack) {
        o.onBack(l);
        return;
      }
      T.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    };
    return (l, i) => l.to || V(T).lastScreen ? (c(), d("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
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
    const t = e, o = w(() => {
      let s, n = t.color;
      return t.size == "standard" ? s = "var(--t-fs-10)" : t.size == "small" ? s = "var(--t-fs-08)" : t.size == "large" ? s = "var(--t-fs-12)" : s = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (n = `var(--t-color-status-${t.color})`), {
        "--color": n,
        "--font-size": s
      };
    });
    return (s, n) => (c(), d("span", {
      class: "t-text",
      style: k(o.value)
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
    return (t, o) => (c(), d("div", {
      class: x(["t-gesture-indicator", { [t.placement]: !0 }])
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
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(), l = m(), i = m(!1);
    let r = null;
    const u = w(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), p = (a) => {
      s("dismiss", a);
    }, _ = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return O(() => n.value, (a) => {
      a && (r = ne(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(i.value || !o.gesture || o.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == u.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (S != u.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = y : f = $, o.placement == "bottom" && (f = y > 0 ? y : 0), o.placement == "top" && (f = y < 0 ? y : 0), o.placement == "left" && (f = $ < 0 ? $ : 0), o.placement == "right" && (f = $ > 0 ? $ : 0), (o.placement == "bottom" && (f >= 10 || this.isMoving) || o.placement == "top" && (f <= -10 || this.isMoving) || o.placement == "left" && (f <= -10 || this.isMoving) || o.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: $, initialDirection: S }) {
          if (this.isMoving = !1, _(), S != u.value) {
            l.value.open();
            return;
          }
          let f, D, ee;
          o.placement == "bottom" || o.placement == "top" ? (f = n.value.offsetHeight, ee = y) : (f = n.value.offsetWidth, ee = $), D = ee / f * 100, D > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), l.value.open();
        }
      }));
    }), oe(() => {
      r && r.destroy();
    }), (a, y) => (c(), C(L, {
      ref_key: "present",
      ref: l,
      class: x(o.class),
      placement: o.placement,
      backdrop: a.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: p,
      style: k(o.style)
    }, {
      default: P(() => [
        o.gesture && o.indicator && o.placement != "center" ? (c(), C(ge, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        h("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: a.rounded, radius: o.radius }]),
          style: k({ "--background": o.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ v($t, [["__scopeId", "data-v-71a5b877"]]), Tt = { class: "t-input-label" }, xt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ b({
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
  setup(e, { emit: t }) {
    const o = t, s = m(!1), n = (r) => {
      o("update:modelValue", r.target.value);
    }, l = () => {
      s.value = !0;
    }, i = () => {
      s.value = !1;
    };
    return (r, u) => (c(), d("div", {
      class: x(["t-input", { rounded: r.rounded, ["size-" + r.size]: !0, ["variant-" + r.variant]: !0, focus: s.value, "has-value": !!r.modelValue && r.modelValue !== "0" }])
    }, [
      h("label", null, [
        h("span", Tt, R(r.label), 1),
        h("div", xt, [
          g(r.$slots, "start", {}, void 0, !0),
          h("input", {
            type: r.type,
            placeholder: r.variant == "default" ? r.placeholder : "",
            value: r.modelValue,
            onInput: n,
            onFocus: l,
            onBlur: i
          }, null, 40, St),
          g(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      r.error ? (c(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          N(R(r.error), 1)
        ]),
        _: 1
      })) : r.help ? (c(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          N(R(r.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ v(zt, [["__scopeId", "data-v-838831c5"]]), Et = {};
function Bt(e, t) {
  return c(), d("textarea");
}
const Ct = /* @__PURE__ */ v(Et, [["render", Bt]]), Vt = {};
function Pt(e, t) {
  return c(), d("div");
}
const At = /* @__PURE__ */ v(Vt, [["render", Pt]]), Rt = {}, Mt = { class: "t-grid" };
function Dt(e, t) {
  return c(), d("div", Mt);
}
const Xt = /* @__PURE__ */ v(Rt, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, t) {
  return c(), d("div", Nt);
}
const Lt = /* @__PURE__ */ v(Ot, [["render", qt]]), Wt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (c(), d("div", {
      class: x(["t-divider", { [t.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ v(Wt, [["__scopeId", "data-v-47ee8991"]]), Ft = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(!1), l = m(), i = w(() => {
      let p = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (p = `var(--t-color-status-${o.color})`), {
        "--color": p
      };
    }), r = () => l.value?.parentElement?.querySelector?.("input");
    se(() => {
      let p = r();
      p && (n.value = p.type != "password", s("change", n.value));
    });
    const u = () => {
      let p = r();
      p && (n.value = !n.value, n.value ? p.type = "text" : p.type = "password", s("change", n.value));
    };
    return (p, _) => (c(), d("button", {
      ref_key: "toggle",
      ref: l,
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
}), Gt = /* @__PURE__ */ v(Ft, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = w(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, n) => (c(), d("div", {
      class: x(["t-avatar", { square: s.square }]),
      style: k({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ v(Ut, [["__scopeId", "data-v-24384c2f"]]), Kt = { class: "t-collapse-title" }, Jt = {
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
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(!1), l = m(""), i = m(), r = () => {
      n.value = !n.value, l.value = `calc(${i.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (u, p) => (c(), d("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: k({ "--height": l.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: r
      }, [
        g(u.$slots, "icon"),
        h("div", Kt, [
          g(u.$slots, "title", {}, () => [
            N(R(o.title), 1)
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
  setup(e, { emit: t }) {
    const o = e, s = t, n = () => {
      s("update:modelValue", !o.modelValue);
    }, l = w(() => {
      let i = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (i = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), i;
    });
    return (i, r) => (c(), d("div", {
      class: x(["t-switch", { on: o.modelValue }]),
      style: k(l.value),
      onClick: n
    }, [...r[0] || (r[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ v(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const t = e, o = ue("tabsState"), s = w(() => o.active.value === t.value), n = () => {
      o.setActive(t.value);
    };
    return (l, i) => (c(), d("li", {
      class: x(["t-tab", { active: s.value }])
    }, [
      G(J, {
        variant: "text",
        onClick: n,
        size: V(o).size,
        color: s.value && V(o).variant == "text" ? V(o).color : void 0
      }, {
        default: P(() => [
          g(l.$slots, "default", {}, void 0, !0)
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
  setup(e, { emit: t }) {
    const o = e, s = t, n = m("0px"), l = m(), i = w(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), r = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, _ = u.offsetWidth / 2;
            n.value = p + _ - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, _ = u.offsetHeight / 2;
            n.value = p + _ - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: w(() => o.modelValue),
      color: i.value,
      size: o.size,
      variant: o.variant,
      setActive: (u) => {
        s("update:modelValue", u), r();
      }
    }), se(() => {
      r();
    }), (u, p) => (c(), d("ul", {
      ref_key: "container",
      ref: l,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: k({ "--color": i.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ro = /* @__PURE__ */ v(no, [["__scopeId", "data-v-3a46d2df"]]), ao = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (c(), C(_e, null, {
      default: P(() => [
        G(K, { type: "spinner" })
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
  setup(e, { emit: t }) {
    const o = e, s = t, n = w(() => {
      let r = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), r;
    }), l = w(() => o.multiple ? o.modelValue.includes(o.value) : o.value === void 0 ? o.modelValue : o.modelValue == o.value), i = () => {
      if (o.multiple) {
        let r = o.modelValue;
        o.modelValue.includes(o.value) ? r.splice(r.indexOf(o.value), 1) : r.push(o.value), s("update:modelValue", r);
      } else o.value === void 0 ? s("update:modelValue", !o.modelValue) : s("update:modelValue", o.value);
    };
    return (r, u) => (c(), d("div", {
      class: x(["t-checkbox", { active: l.value }]),
      style: k(n.value),
      onClick: i
    }, [
      h("div", {
        class: x(`t-checkbox-${r.type}`)
      }, [
        r.type == "radio" ? (c(), d("div", co)) : E("", !0),
        r.type == "check" ? g(r.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      r.label ? (c(), d("span", io, R(o.label), 1)) : E("", !0)
    ], 6));
  }
}), po = /* @__PURE__ */ v(uo, [["__scopeId", "data-v-05513114"]]), fo = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = ve();
    return (o, s) => (c(), d("div", {
      class: "t-keyboard",
      style: k({ "--height": V(t) + "px" })
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
    const t = e, o = w(() => ({
      "--width": t.width,
      "--height": t.height,
      "--radius": t.radius
    }));
    return (s, n) => (c(), d("div", {
      class: "t-skeleton",
      style: k(o.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ v(vo, [["__scopeId", "data-v-877bbdb5"]]), yo = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const t = e, o = w(() => {
      let s = {};
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--color": "var(--t-color-status-" + t.color + ")"
      } : s = {
        "--color": t.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), d("div", {
      class: "t-ripple",
      style: k(o.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ v(yo, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
  install: (e) => {
    xe(), e.component("t-app", Ee), e.component("t-screen", ye), e.component("t-swipe-screen", vt), e.component("t-cable", nt), e.component("t-toolbar", yt), e.component("t-content", _e), e.component("t-card", rt), e.component("t-refresher", ut), e.component("t-button", J), e.component("t-back-button", bt), e.component("t-present", L), e.component("t-text", te), e.component("t-sheet", wt), e.component("t-gesture-indicator", ge), e.component("t-input", It), e.component("t-textarea", Ct), e.component("t-rich-text", At), e.component("t-grid", Xt), e.component("t-grid-item", Lt), e.component("t-divider", Ht), e.component("t-toggle-password", Gt), e.component("t-loading-icon", K), e.component("t-alert", pe), e.component("t-avatar", jt), e.component("t-collapse", Yt), e.component("t-toast", me), e.component("t-switch", to), e.component("t-tab", so), e.component("t-tabs", ro), e.component("t-loading-app", lo), e.component("t-checkbox", po), e.component("t-keyboard", mo), e.component("t-skeleton", _o), e.component("t-ripple", go);
  }
});
export {
  Te as blurCurrentActive,
  wo as createAction,
  $o as createAlert,
  To as createLoading,
  xo as createToast,
  So as createToife,
  we as isFormElement,
  He as presentController,
  T as screenController,
  ve as useKeyboard
};
