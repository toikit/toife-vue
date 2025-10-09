import { createElementBlock as p, openBlock as c, renderSlot as b, defineComponent as h, ref as v, computed as w, reactive as ce, watch as D, onMounted as G, Fragment as W, withDirectives as L, createCommentVNode as z, normalizeStyle as x, normalizeClass as S, vShow as H, createElementVNode as $, createVNode as U, createBlock as E, withCtx as V, toDisplayString as R, renderList as F, createTextVNode as N, createApp as j, h as K, provide as ie, unref as A, onUnmounted as re, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke, withModifiers as $e, nextTick as oe } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as de, useRoute as we } from "vue-router";
const xe = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), Te = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Se = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !xe(e.target) && Te();
  });
}, g = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of o)
    t[s] = r;
  return t;
}, Be = {}, Ce = { class: "t-app" };
function ze(e, o) {
  return c(), p("div", Ce, [
    b(e.$slots, "default")
  ]);
}
const Ie = /* @__PURE__ */ g(Be, [["render", ze]]), Ee = /* @__PURE__ */ h({
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
    const s = v(0), r = v(!1), l = v(), d = v(), a = e, f = t, y = w(() => r.value || a.keepalive), u = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), n = (m) => {
      a.backdrop ? m?.backdropOpacity && (u["--t-present-backdrop-opacity"] = m.backdropOpacity) : u["--t-present-backdrop-opacity"] = "0", m?.transition && (u["--t-present-transition"] = m.transition, u["--t-present-transition"] = m.transition), m?.contentTransform && (u["--t-present-content-transform"] = m.contentTransform), m?.contentOpacity && (u["--t-present-content-opacity"] = m.contentOpacity);
    }, i = () => {
      n({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, _ = () => {
      let m = "0px", O = "1";
      a.placement == "bottom" || a.placement == "right" ? m = "100%" : a.placement == "top" || a.placement == "left" ? m = "-100%" : a.placement == "center" && (m = "0px", O = "0"), n({
        contentTransform: m,
        transition: "0.2s",
        contentOpacity: O,
        backdropOpacity: "0"
      });
    };
    D(() => a.visible, () => {
      a.visible ? (r.value = !0, s.value = Fe.getNewIndex(), setTimeout(() => {
        i();
      }, 50)) : (_(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: n,
      open: i,
      close: _
    });
    const k = (m) => {
      m.preventDefault(), f("dismiss", "backdrop");
    };
    return G(() => {
      a.visible ? i() : _();
    }), (m, O) => (c(), p(W, null, [
      y.value ? L((c(), p("div", {
        key: 0,
        class: S(["t-present", [{ [m.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: x([u, { zIndex: s.value }, a.style])
      }, [
        b(m.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, r.value]
      ]) : z("", !0),
      y.value ? L((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: k,
        ref_key: "backdrop",
        ref: l,
        style: x([u, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [H, r.value]
      ]) : z("", !0)
    ], 64));
  }
}), q = /* @__PURE__ */ g(Ee, [["__scopeId", "data-v-1b25059f"]]), Ve = /* @__PURE__ */ h({
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
    return (o, t) => (c(), p("span", {
      class: "t-loading-icon",
      style: x({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), J = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-7c463303"]]), Pe = { class: "t-button-content" }, Re = {
  key: 0,
  class: "loader"
}, Ae = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("button", {
      class: S(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: x(t.value)
    }, [
      L($("span", Pe, [
        b(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !o.loading]
      ]),
      o.loading ? (c(), p("span", Re, [
        U(J, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), Q = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-185a9e49"]]), Xe = {
  key: 0,
  class: "t-alert-header"
}, De = { class: "t-alert-content" }, Oe = { class: "t-alert-footer" }, We = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = v(!1), l = t, d = v(), a = v(!1), f = () => {
      r.value = !0;
    }, y = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, u = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: f
    }), (n, i) => (c(), E(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: u
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          b(n.$slots, "header", {}, () => [
            s.title ? (c(), p("div", Xe, R(s.title), 1)) : z("", !0)
          ], !0),
          b(n.$slots, "content", {}, () => [
            $("div", De, R(s.message), 1)
          ], !0),
          b(n.$slots, "footer", {}, () => [
            $("div", Oe, [
              (c(!0), p(W, null, F(s.actions, (_) => (c(), E(Q, {
                color: _.color,
                variant: _.variant,
                onClick: (k) => y(_)
              }, {
                default: V(() => [
                  N(R(_.text), 1)
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
}), pe = /* @__PURE__ */ g(We, [["__scopeId", "data-v-05d0c578"]]), wo = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = v();
      t.appendChild(s);
      const l = j({
        render() {
          return K(pe, {
            ...e,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Ne = /* @__PURE__ */ h({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = v(!1), l = t, d = v(), a = v(!1), f = () => {
      r.value = !0;
    }, y = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, u = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return D(() => s.visible, (n) => {
      n ? f() : close();
    }), o({
      open: f,
      close
    }), (n, i) => (c(), E(q, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: u
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (c(!0), p(W, null, F(s.actions, (_) => (c(), p("div", null, [
            (c(!0), p(W, null, F(_, (k) => (c(), E(Q, {
              color: k.color,
              size: k.size,
              variant: k.variant,
              onClick: (m) => y(k),
              block: ""
            }, {
              default: V(() => [
                N(R(k.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Me = /* @__PURE__ */ g(Ne, [["__scopeId", "data-v-844fb240"]]), xo = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = v();
      t.appendChild(s);
      const l = j({
        render() {
          return K(Me, {
            ...e,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), qe = { class: "t-loading" }, Le = /* @__PURE__ */ h({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = v(!1);
    return o({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (a, f) => (c(), E(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: V(() => [
        $("div", qe, [
          b(a.$slots, "default", {}, () => [
            U(J, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), He = /* @__PURE__ */ g(Le, [["__scopeId", "data-v-8f84c14e"]]), To = (e = {}) => {
  const o = v(), t = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        t && (r = document.createElement("div"), t.appendChild(r), s = j({
          render() {
            return K(He, {
              ...e,
              ref: o
            });
          }
        }), s.mount(r), setTimeout(() => {
          o.value?.open?.(), l(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((l) => {
        o.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), r?.remove?.(), l(!0);
        }, 300);
      });
    }
  };
}, le = v(1e3), Fe = {
  getNewIndex() {
    return le.value += 2, le.value;
  }
}, X = ce([]), Z = v(!0), C = v(!1), P = v(-1), B = w(() => X[P.value]), M = w(() => X[P.value + 1] || void 0), I = w(() => X[X.length - 2]), fe = w(() => !C.value && Z.value && I.value), Y = {
  reset() {
    C.value = !0;
    const e = B.value.target, o = I.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      C.value = !1;
    }, 400);
  },
  move(e) {
    if (!fe.value) return;
    const o = window.innerWidth, t = e / o * 100, s = B.value.target, r = I.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t}))) scale(${0.5 + 0.5 / 100 * t}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * t}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    I.value && (B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", I.value.target.style.transition = "transform 0.35s ease", I.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), C.value = !0, setTimeout(() => {
      ae(), C.value = !1, P.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!M.value) return;
    if (P.value == -1) {
      P.value += 1, e && e();
      return;
    }
    C.value = !0;
    let o = M.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), B.value && (B.value.target.style.transitionOrigin = "left center", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        C.value = !1, P.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, ee = {
  reset() {
    C.value = !0;
    const e = B.value.target, o = I.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      C.value = !1;
    }, 400);
  },
  move(e) {
    const o = window.innerWidth, t = e / o * 100, s = B.value.target, r = I.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    I.value && (B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", I.value.target.style.transition = "transform 0.35s ease", I.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), C.value = !0, setTimeout(() => {
      ae(), C.value = !1, P.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!M.value) return;
    if (P.value == -1) {
      P.value += 1, e && e();
      return;
    }
    C.value = !0;
    let o = M.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), B.value && (B.value.target.style.transitionOrigin = "left center", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        C.value = !1, P.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Ge = (e) => {
  X.push(e);
}, Ue = (e, o) => {
  X[e].target = o;
}, ae = (e) => {
  e || X.pop();
}, je = () => {
  X.splice(0, X.length);
}, Ke = () => {
  Z.value = !1;
}, Je = () => {
  Z.value = !0;
}, Qe = (e, o) => {
  e == "scale" && Y.next(o), e == "transform" && ee.next(o);
}, Ze = (e, o) => {
  e == "scale" && Y.back(o), e == "transform" && ee.back(o);
}, Ye = (e, o) => {
  e == "scale" && Y.move(o), e == "transform" && ee.move(o);
}, et = (e) => {
  e == "scale" && Y.reset(), e == "transform" && ee.reset();
}, T = {
  isBusy: C,
  isSwipeable: fe,
  reset: et,
  next: Qe,
  back: Ze,
  move: Ye,
  screens: X,
  addScreen: Ge,
  addScreenEl: Ue,
  removeScreen: ae,
  removeAllScreen: je,
  lockSwipe: Ke,
  unlockSwipe: Je,
  swipeable: Z,
  currentScreen: B,
  lastScreen: I,
  nextScreen: M
}, tt = { class: "t-toast-content" }, ot = /* @__PURE__ */ h({
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
    const s = e, r = t, l = v(!1), d = v(!1), a = v(!1), f = () => {
      d.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, y = () => {
      a.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, r("dismiss");
      }, 300);
    };
    D(() => s.visible, (n) => {
      n ? f() : y();
    });
    const u = w(() => {
      let n;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? n = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + s.color + "-rgb), 1)"
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? n = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? n = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), n;
    });
    return o({
      open: f,
      close: y
    }), (n, i) => d.value ? (c(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: x({ "--space": s.space, ...u.value })
    }, [
      b(n.$slots, "content", {}, () => [
        $("div", tt, R(s.message), 1)
      ], !0)
    ], 6)) : z("", !0);
  }
}), me = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-2802d43f"]]), So = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const t = document.createElement("div"), s = v();
    o.appendChild(t);
    const r = j({
      render() {
        return K(me, {
          ...e,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              r.unmount(), t.remove();
            }, 300);
          }
        });
      }
    });
    r.mount(t), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, e.duration + 10);
    }, 50);
  }
}), st = v(0);
function ve() {
  return {
    height: st
  };
}
const rt = /* @__PURE__ */ h({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const o = e, { height: t } = ve();
    return ie("cableState", {
      placement: o.placement
    }), (s, r) => (c(), p("div", {
      class: S(["t-cable", { keyboard: o.keyboard && A(t) > 0, [o.placement]: !0 }]),
      style: x({ "--t-keyboard-height": A(t) + "px", "--t-keyboard-transition": A(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ g(rt, [["__scopeId", "data-v-6cae224b"]]), at = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-card",
      style: x(t.value)
    }, [
      b(s.$slots, "default")
    ], 4));
  }
}), lt = {}, ct = { class: "t-content" };
function it(e, o) {
  return c(), p("div", ct, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ g(lt, [["render", it], ["__scopeId", "data-v-af750e89"]]), ut = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: o }) {
    const t = o, s = e, r = v(0), l = v(!1), d = v();
    let a, f = !1;
    const y = () => {
      l.value = !1, r.value = 0, a && a.cancel(), f = !1;
    }, u = () => {
      f = !0, l.value = !0, r.value = s.threshold, t("refresh", y);
    }, n = () => {
      r.value = 0, l.value = !1, f = !1, t("cancel");
    };
    return D(() => d.value, () => {
      a && a.destroy();
      let i = d.value.closest(".t-content");
      i && (a = ne(i, {
        options: {
          minDist: 60
        },
        down() {
          l.value || f || t("start");
        },
        move({ deltaY: _, initialDirection: k }) {
          if (l.value || f || k != "down") return;
          if (s.variant == "max" && _ >= s.threshold) {
            u();
            return;
          }
          const m = _ < 0 ? 0 : _;
          r.value = m, t("move", m);
        },
        up({ deltaY: _, initialDirection: k }) {
          l.value || f || k != "down" || (s.variant == "up" && _ >= s.threshold ? u() : n());
        },
        cancel() {
          l.value || f || n();
        }
      }, {
        passive: !1
      }));
    }), re(() => {
      a && a.destroy();
    }), (i, _) => L((c(), p("div", {
      class: S(["t-refresher", { safe: i.safe }]),
      ref_key: "container",
      ref: d
    }, [
      b(i.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [H, r.value > 0]
    ]);
  }
}), dt = /* @__PURE__ */ g(ut, [["__scopeId", "data-v-1d52477a"]]), pt = {}, ft = { class: "t-screen" };
function mt(e, o) {
  return c(), p("div", ft, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ g(pt, [["render", mt], ["__scopeId", "data-v-c2a3436c"]]), vt = /* @__PURE__ */ h({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    let t = {};
    const s = o, r = e;
    let l;
    const d = r.router || de(), a = r.route || we(), f = d.getRoutes();
    for (let n of f)
      t[n.name] = n.component || n.components;
    const y = (n) => {
      n && T.addScreen({
        name: n,
        target: null,
        component: he(t[n] || null)
      });
    }, u = (n, i) => {
      !i || T.screens[n].target || (T.addScreenEl(n, i.$el), T.nextScreen && T.next(r.variant, () => {
        s("change");
      }));
    };
    return D(() => a.name, (n, i) => {
      n != T.currentScreen.value?.name && (T.lastScreen.value?.name == n ? T.back(r.variant, () => {
        s("change");
      }) : y(a.name));
    }), G(() => {
      y(a.name), l = ne(document.body, {
        beforeEvent(n) {
          return !!T.isSwipeable.value;
        },
        fast({ initialDirection: n }) {
          T.lastScreen.value && n == "right" && d.back();
        },
        move({ deltaX: n, initialDirection: i }) {
          i == "right" && T.move(r.variant, n);
        },
        up({ deltaX: n, initialDirection: i }) {
          if (i != "right") {
            T.reset(r.variant);
            return;
          }
          const _ = window.innerWidth;
          n / _ * 100 >= 50 ? d.back() : T.reset(r.variant);
        },
        cancel() {
          T.reset(r.variant);
        }
      });
    }), re(() => {
      l && l.destroy(), T.removeAllScreen();
    }), (n, i) => (c(), p(W, null, [
      (c(!0), p(W, null, F(A(T).screens, (_, k) => (c(), E(_e, {
        ref_for: !0,
        ref: (m) => u(k, m),
        style: x({ zIndex: k + (k == A(T).screens.length - 1 ? 2 : 1) }),
        key: k
      }, {
        default: V(() => [
          (c(), E(be(_.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: x({ zIndex: A(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), yt = /* @__PURE__ */ g(vt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e, t = ue("cableState"), s = w(() => o?.placement || t?.placement);
    return (r, l) => (c(), p("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: x({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
        b(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), gt = /* @__PURE__ */ g(_t, [["__scopeId", "data-v-1ee9866d"]]), bt = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const o = e, t = ke(), s = o.router || de(), r = (l) => {
      if (t.onBack) {
        t.onBack(l);
        return;
      }
      T.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, d) => l.to || A(T).lastScreen ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: r
    }, [
      b(l.$slots, "default", {}, () => [
        d[0] || (d[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), ht = /* @__PURE__ */ g(bt, [["__scopeId", "data-v-dcf9d363"]]), kt = /* @__PURE__ */ h({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = w(() => {
      let s, r = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (c(), p("span", {
      class: "t-text",
      style: x(t.value)
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), se = /* @__PURE__ */ g(kt, [["__scopeId", "data-v-f0f94f05"]]), $t = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, t) => (c(), p("div", {
      class: S(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ge = /* @__PURE__ */ g($t, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ h({
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
    const t = e, s = o, r = v(), l = v(), d = v(!1);
    let a = null;
    const f = w(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), y = (n) => {
      s("dismiss", n);
    }, u = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return D(() => r.value, (n) => {
      n && (a = ne(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(i) {
          return !(d.value || !t.gesture || t.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: i }) {
          u(), i == f.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: i, deltaX: _, initialDirection: k }) {
          if (k != f.value) return;
          let m = 0;
          t.placement == "bottom" || t.placement == "top" ? m = i : m = _, t.placement == "bottom" && (m = i > 0 ? i : 0), t.placement == "top" && (m = i < 0 ? i : 0), t.placement == "left" && (m = _ < 0 ? _ : 0), t.placement == "right" && (m = _ > 0 ? _ : 0), (t.placement == "bottom" && (m >= 10 || this.isMoving) || t.placement == "top" && (m <= -10 || this.isMoving) || t.placement == "left" && (m <= -10 || this.isMoving) || t.placement == "right" && (m >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: m + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: i, deltaX: _, initialDirection: k }) {
          if (this.isMoving = !1, u(), k != f.value) {
            l.value.open();
            return;
          }
          let m, O, te;
          t.placement == "bottom" || t.placement == "top" ? (m = r.value.offsetHeight, te = i) : (m = r.value.offsetWidth, te = _), O = te / m * 100, O > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, u(), l.value.open();
        }
      }));
    }), re(() => {
      a && a.destroy();
    }), (n, i) => (c(), E(q, {
      ref_key: "present",
      ref: l,
      class: S(t.class),
      placement: t.placement,
      backdrop: n.backdrop,
      visible: t.visible,
      keepalive: t.keepalive,
      onDismiss: y,
      style: x(t.style)
    }, {
      default: V(() => [
        t.gesture && t.indicator && t.placement != "center" ? (c(), E(ge, {
          key: 0,
          placement: t.placement
        }, null, 8, ["placement"])) : z("", !0),
        $("div", {
          class: S(["t-sheet", { fullscreen: t.fullscreen, [t.placement]: !0, rounded: n.rounded, radius: t.radius }]),
          style: x({ "--background": t.background }),
          ref_key: "sheet",
          ref: r
        }, [
          b(n.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-6f7063f0"]]), Tt = { class: "t-input-label" }, St = { class: "t-input-content" }, Bt = ["placeholder", "value"], Ct = /* @__PURE__ */ h({
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
    variant: { default: "default" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v(!1), l = v(null), d = w(
      () => !(t.modelValue === "" || t.modelValue == null)
    ), a = (u) => {
      s("update:modelValue", u.target.textContent);
    }, f = async (u) => {
      r.value = !0, await oe();
      const n = l.value;
      if (n) {
        const i = document.createRange(), _ = window.getSelection();
        i.selectNodeContents(n), i.collapse(!1), _?.removeAllRanges(), _?.addRange(i), n.focus();
      }
    }, y = () => {
      r.value = !1;
    };
    return (u, n) => (c(), p("div", {
      class: S(["t-input", {
        rounded: u.rounded,
        ["size-" + u.size]: !0,
        ["variant-" + u.variant]: !0,
        focus: r.value,
        "has-value": d.value,
        readonly: u.readonly
      }])
    }, [
      $("label", null, [
        $("span", Tt, R(u.label), 1),
        $("div", St, [
          b(u.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            contenteditable: "true",
            placeholder: u.placeholder,
            value: u.modelValue,
            onInput: a,
            onTouchstart: $e(f, ["prevent"]),
            onMousedown: f,
            onBlur: y
          }, null, 40, Bt),
          b(u.$slots, "end", {}, void 0, !0)
        ])
      ]),
      u.error ? (c(), E(se, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          N(R(u.error), 1)
        ]),
        _: 1
      })) : u.help ? (c(), E(se, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          N(R(u.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ g(Ct, [["__scopeId", "data-v-d0096fa6"]]), It = {};
function Et(e, o) {
  return c(), p("textarea");
}
const Vt = /* @__PURE__ */ g(It, [["render", Et]]), Pt = {};
function Rt(e, o) {
  return c(), p("div");
}
const At = /* @__PURE__ */ g(Pt, [["render", Rt]]), Xt = {}, Dt = { class: "t-grid" };
function Ot(e, o) {
  return c(), p("div", Dt);
}
const Wt = /* @__PURE__ */ g(Xt, [["render", Ot]]), Nt = {}, Mt = { class: "t-grid-item" };
function qt(e, o) {
  return c(), p("div", Mt);
}
const Lt = /* @__PURE__ */ g(Nt, [["render", qt]]), Ht = /* @__PURE__ */ h({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (t, s) => (c(), p("div", {
      class: S(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Ft = /* @__PURE__ */ g(Ht, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v(!1), l = v(), d = w(() => {
      let y = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (y = `var(--t-color-status-${t.color})`), {
        "--color": y
      };
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    G(() => {
      let y = a();
      y && (r.value = y.type != "password", s("change", r.value));
    });
    const f = () => {
      let y = a();
      y && (r.value = !r.value, r.value ? y.type = "text" : y.type = "password", s("change", r.value));
    };
    return (y, u) => (c(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: x(d.value),
      onClick: f
    }, [
      r.value ? b(y.$slots, "on", { key: 0 }, () => [
        u[0] || (u[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      r.value ? z("", !0) : b(y.$slots, "off", { key: 1 }, () => [
        u[1] || (u[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ g(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, r) => (c(), p("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: x({ "--size": t.value })
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Kt = /* @__PURE__ */ g(jt, [["__scopeId", "data-v-24384c2f"]]), Jt = { class: "t-collapse-title" }, Qt = {
  key: 0,
  class: "icon"
}, Zt = {
  key: 1,
  class: "icon"
}, Yt = { class: "t-collapse-content" }, eo = /* @__PURE__ */ h({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v(!1), l = v(""), d = v(), a = () => {
      r.value = !r.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (f, y) => (c(), p("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: x({ "--height": l.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        b(f.$slots, "icon"),
        $("div", Jt, [
          b(f.$slots, "title", {}, () => [
            N(R(t.title), 1)
          ])
        ]),
        b(f.$slots, "toggle", {}, () => [
          r.value ? (c(), p("div", Qt, [...y[0] || (y[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Zt, [...y[1] || (y[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", Yt, [
        $("div", {
          ref_key: "content",
          ref: d
        }, [
          b(f.$slots, "content", {}, () => [
            b(f.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), to = /* @__PURE__ */ h({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = () => {
      s("update:modelValue", !t.modelValue);
    }, l = w(() => {
      let d = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (d = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), d;
    });
    return (d, a) => (c(), p("div", {
      class: S(["t-switch", { on: t.modelValue }]),
      style: x(l.value),
      onClick: r
    }, [...a[0] || (a[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), oo = /* @__PURE__ */ g(to, [["__scopeId", "data-v-3616970e"]]), so = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = ue("tabsState"), s = w(() => t.activeValue.value === o.value), r = () => {
      o.disabled || t.setValue(o.value);
    };
    return (l, d) => (c(), p("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      U(Q, {
        variant: "text",
        onClick: r,
        size: A(t).size,
        color: s.value ? A(t).color.text : void 0
      }, {
        default: V(() => [
          b(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), ro = /* @__PURE__ */ g(so, [["__scopeId", "data-v-4b7f4e98"]]), no = /* @__PURE__ */ h({
  __name: "t-tabs",
  props: {
    placement: { default: "top-start" },
    variant: { default: "border-under" },
    color: { default: "primary" },
    modelValue: {},
    border: { default: 30 },
    size: { default: "standard" },
    margin: { default: [0, 0] },
    radius: { default: 4 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v("0px"), l = v(0), d = v(0), a = v(), f = w(() => {
      let n = "", i = "";
      return t.variant == "text" && (n = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? i = `var(--t-color-status-${t.color})` : i = t.color), t.variant == "border-under" && (i = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = `var(--t-color-status-${t.color})` : n = t.color), t.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? (n = `var(--t-color-status-${t.color})`, i = `var(--t-color-status-${t.color}-text)`) : (n = t.color, i = "currentColor")), { background: n, text: i };
    }), y = w(() => t.variant == "border-under" ? {
      "--transform": r.value,
      "--border": t.border + "px"
    } : t.variant == "tag" ? {
      "--top": t.margin[0] + "px",
      "--height": d.value - t.margin[0] * 2 + "px",
      "--left": t.margin[1] + "px",
      "--width": l.value - t.margin[1] * 2 + "px",
      "--transform": r.value,
      "--radius": t.radius + "px"
    } : {}), u = () => {
      if (t.variant == "border-under") {
        let n = a.value.querySelector(".active");
        if (n) {
          if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
            let i = n.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft, _ = n.offsetWidth / 2;
            r.value = i + _ - t.border / 2 + "px";
          } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
            let i = n.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop, _ = n.offsetHeight / 2;
            r.value = i + _ - t.border / 2 + "px";
          }
        }
      }
      if (t.variant == "tag") {
        let n = a.value.querySelector(".active");
        if (n) {
          let i = n.offsetWidth, _ = n.offsetHeight;
          if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
            let k = n.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft;
            r.value = k + "px";
          } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
            let k = n.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop;
            r.value = k + "px";
          }
          l.value = i, d.value = _;
        }
      }
    };
    return ie("tabsState", {
      activeValue: w(() => t.modelValue),
      color: f.value,
      size: t.size,
      variant: t.variant,
      setValue: (n) => {
        s("update:modelValue", n);
      }
    }), D(() => t.modelValue, async () => {
      await oe(), u();
    }), G(async () => {
      await oe(), u();
    }), (n, i) => (c(), p("ul", {
      ref_key: "container",
      ref: a,
      class: S(["t-tabs", { [n.placement]: !0, [`variant-${n.variant}`]: !0 }]),
      style: x([{ "--background": f.value.background, "--color": f.value.text }, y.value])
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ao = /* @__PURE__ */ g(no, [["__scopeId", "data-v-8d370631"]]), lo = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(e) {
    return (o, t) => (c(), E(ye, null, {
      default: V(() => [
        U(J, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), co = /* @__PURE__ */ g(lo, [["__scopeId", "data-v-1436aa9f"]]), io = { key: 0 }, uo = {
  key: 0,
  class: "t-checkbox-label"
}, po = /* @__PURE__ */ h({
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
    const t = e, s = o, r = w(() => {
      let a = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (a = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), a;
    }), l = w(() => t.multiple ? t.modelValue.includes(t.value) : t.value === void 0 ? t.modelValue : t.modelValue == t.value), d = () => {
      if (t.multiple) {
        let a = t.modelValue;
        t.modelValue.includes(t.value) ? a.splice(a.indexOf(t.value), 1) : a.push(t.value), s("update:modelValue", a);
      } else t.value === void 0 ? s("update:modelValue", !t.modelValue) : s("update:modelValue", t.value);
    };
    return (a, f) => (c(), p("div", {
      class: S(["t-checkbox", { active: l.value }]),
      style: x(r.value),
      onClick: d
    }, [
      $("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", io)) : z("", !0),
        a.type == "check" ? b(a.$slots, "icon", { key: 1 }, () => [
          f[0] || (f[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : z("", !0)
      ], 2),
      b(a.$slots, "label", {}, () => [
        a.label ? (c(), p("span", uo, R(t.label), 1)) : z("", !0)
      ], !0)
    ], 6));
  }
}), fo = /* @__PURE__ */ g(po, [["__scopeId", "data-v-0e13abc3"]]), mo = /* @__PURE__ */ h({
  __name: "t-keyboard-space",
  setup(e) {
    const { height: o } = ve();
    return (t, s) => (c(), p("div", {
      class: "t-keyboard-space",
      style: x({ "--height": A(o) + "px" })
    }, null, 4));
  }
}), vo = /* @__PURE__ */ g(mo, [["__scopeId", "data-v-4b06018d"]]), yo = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-skeleton",
      style: x(t.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ g(yo, [["__scopeId", "data-v-877bbdb5"]]), go = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-ripple",
      style: x(t.value)
    }, null, 4));
  }
}), bo = /* @__PURE__ */ g(go, [["__scopeId", "data-v-42cb3d71"]]), Bo = () => ({
  install: (e) => {
    Se(), e.component("t-app", Ie), e.component("t-screen", _e), e.component("t-swipe-screen", yt), e.component("t-cable", nt), e.component("t-toolbar", gt), e.component("t-content", ye), e.component("t-card", at), e.component("t-refresher", dt), e.component("t-button", Q), e.component("t-back-button", ht), e.component("t-present", q), e.component("t-text", se), e.component("t-sheet", xt), e.component("t-gesture-indicator", ge), e.component("t-input", zt), e.component("t-textarea", Vt), e.component("t-rich-text", At), e.component("t-grid", Wt), e.component("t-grid-item", Lt), e.component("t-divider", Ft), e.component("t-toggle-password", Ut), e.component("t-loading-icon", J), e.component("t-alert", pe), e.component("t-avatar", Kt), e.component("t-collapse", eo), e.component("t-toast", me), e.component("t-switch", oo), e.component("t-tab", ro), e.component("t-tabs", ao), e.component("t-loading-app", co), e.component("t-checkbox", fo), e.component("t-keyboard-space", vo), e.component("t-skeleton", _o), e.component("t-ripple", bo);
  }
});
export {
  Te as blurCurrentActive,
  xo as createAction,
  wo as createAlert,
  To as createLoading,
  So as createToast,
  Bo as createToife,
  xe as isFormElement,
  Fe as presentController,
  T as screenController,
  ve as useKeyboard
};
