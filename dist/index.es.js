import { createElementBlock as p, openBlock as u, renderSlot as g, defineComponent as h, ref as m, computed as w, reactive as le, watch as q, onMounted as oe, Fragment as O, withDirectives as W, createCommentVNode as I, normalizeStyle as T, normalizeClass as S, vShow as H, createElementVNode as k, createVNode as G, createBlock as C, withCtx as P, toDisplayString as R, renderList as F, createTextVNode as N, createApp as U, h as j, provide as ce, unref as V, onUnmounted as se, resolveDynamicComponent as ge, markRaw as be, inject as ie, useAttrs as he, watchEffect as ke, nextTick as $e } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRouter as ue, useRoute as we } from "vue-router";
const Te = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), xe = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Se = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !Te(e.target) && xe();
  });
}, v = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, ze = {}, Ee = { class: "t-app" };
function Ie(e, t) {
  return u(), p("div", Ee, [
    g(e.$slots, "default")
  ]);
}
const Be = /* @__PURE__ */ v(ze, [["render", Ie]]), Ce = /* @__PURE__ */ h({
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
    const s = m(0), r = m(!1), l = m(), d = m(), n = e, c = o, i = w(() => r.value || n.keepalive), y = le({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), a = (f) => {
      n.backdrop ? f?.backdropOpacity && (y["--t-present-backdrop-opacity"] = f.backdropOpacity) : y["--t-present-backdrop-opacity"] = "0", f?.transition && (y["--t-present-transition"] = f.transition, y["--t-present-transition"] = f.transition), f?.contentTransform && (y["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (y["--t-present-content-opacity"] = f.contentOpacity);
    }, _ = () => {
      a({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, b = () => {
      let f = "0px", X = "1";
      n.placement == "bottom" || n.placement == "right" ? f = "100%" : n.placement == "top" || n.placement == "left" ? f = "-100%" : n.placement == "center" && (f = "0px", X = "0"), a({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: X,
        backdropOpacity: "0"
      });
    };
    q(() => n.visible, () => {
      n.visible ? (r.value = !0, s.value = Fe.getNewIndex(), setTimeout(() => {
        _();
      }, 50)) : (b(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), t({
      render: a,
      open: _,
      close: b
    });
    const $ = (f) => {
      f.preventDefault(), c("dismiss", "backdrop");
    };
    return oe(() => {
      n.visible ? _() : b();
    }), (f, X) => (u(), p(O, null, [
      i.value ? W((u(), p("div", {
        key: 0,
        class: S(["t-present", [{ [f.placement]: !0 }, n.class]]),
        ref_key: "present",
        ref: d,
        style: T([y, { zIndex: s.value }, n.style])
      }, [
        g(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, r.value]
      ]) : I("", !0),
      i.value ? W((u(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: $,
        ref_key: "backdrop",
        ref: l,
        style: T([y, { zIndex: s.value - 1 }, n.style])
      }, null, 4)), [
        [H, r.value]
      ]) : I("", !0)
    ], 64));
  }
}), M = /* @__PURE__ */ v(Ce, [["__scopeId", "data-v-1b25059f"]]), Ve = /* @__PURE__ */ h({
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
    return (t, o) => (u(), p("span", {
      class: "t-loading-icon",
      style: T({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ v(Ve, [["__scopeId", "data-v-7c463303"]]), Pe = { class: "t-button-content" }, Ae = {
  key: 0,
  class: "loader"
}, Re = /* @__PURE__ */ h({
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
    return (s, r) => (u(), p("button", {
      class: S(["t-button", { "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0 }]),
      style: T(o.value)
    }, [
      W(k("span", Pe, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (u(), p("span", Ae, [
        G(K, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ v(Re, [["__scopeId", "data-v-185a9e49"]]), De = {
  key: 0,
  class: "t-alert-header"
}, Xe = { class: "t-alert-content" }, Oe = { class: "t-alert-footer" }, qe = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: t, emit: o }) {
    const s = e, r = m(!1), l = o, d = m(), n = m(!1), c = () => {
      r.value = !0;
    }, i = (a) => {
      r.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, y = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (r.value = !1, l("dismiss", a)) : a == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return t({
      open: c
    }), (a, _) => (u(), C(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-alert", { pop: n.value }]),
          ref_key: "container",
          ref: d
        }, [
          g(a.$slots, "header", {}, () => [
            s.title ? (u(), p("div", De, R(s.title), 1)) : I("", !0)
          ], !0),
          g(a.$slots, "content", {}, () => [
            k("div", Xe, R(s.message), 1)
          ], !0),
          g(a.$slots, "footer", {}, () => [
            k("div", Oe, [
              (u(!0), p(O, null, F(s.actions, (b) => (u(), C(J, {
                color: b.color,
                variant: b.variant,
                onClick: ($) => i(b)
              }, {
                default: P(() => [
                  N(R(b.text), 1)
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
}), de = /* @__PURE__ */ v(qe, [["__scopeId", "data-v-05d0c578"]]), wo = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(de, {
            ...e,
            ref: r,
            onDismiss: (d, n) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: n });
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
  setup(e, { expose: t, emit: o }) {
    const s = e, r = m(!1), l = o, d = m(), n = m(!1), c = () => {
      r.value = !0;
    }, i = (a) => {
      r.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, y = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (r.value = !1, l("dismiss", a)) : a == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return q(() => s.visible, (a) => {
      a ? c() : close();
    }), t({
      open: c,
      close
    }), (a, _) => (u(), C(M, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-action", { pop: n.value }]),
          ref_key: "container",
          ref: d
        }, [
          (u(!0), p(O, null, F(s.actions, (b) => (u(), p("div", null, [
            (u(!0), p(O, null, F(b, ($) => (u(), C(J, {
              color: $.color,
              size: $.size,
              variant: $.variant,
              onClick: (f) => i($),
              block: ""
            }, {
              default: P(() => [
                N(R($.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Le = /* @__PURE__ */ v(Ne, [["__scopeId", "data-v-844fb240"]]), To = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(Le, {
            ...e,
            ref: r,
            onDismiss: (d, n) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: n });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Me = { class: "t-loading" }, We = /* @__PURE__ */ h({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(e, { expose: t, emit: o }) {
    const s = e, r = m(!1);
    return t({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (n, c) => (u(), C(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: P(() => [
        k("div", Me, [
          g(n.$slots, "default", {}, () => [
            G(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), He = /* @__PURE__ */ v(We, [["__scopeId", "data-v-8f84c14e"]]), xo = (e = {}) => {
  const t = m(), o = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        o && (r = document.createElement("div"), o.appendChild(r), s = U({
          render() {
            return j(He, {
              ...e,
              ref: t
            });
          }
        }), s.mount(r), setTimeout(() => {
          t.value?.open?.(), l(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((l) => {
        t.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), r?.remove?.(), l(!0);
        }, 300);
      });
    }
  };
}, ae = m(1e3), Fe = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, D = le([]), Q = m(!0), E = m(!1), A = m(-1), z = w(() => D[A.value]), L = w(() => D[A.value + 1] || void 0), B = w(() => D[D.length - 2]), pe = w(() => !E.value && Q.value && B.value), Z = {
  reset() {
    E.value = !0;
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      E.value = !1;
    }, 400);
  },
  move(e) {
    if (!pe.value) return;
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o}))) scale(${0.5 + 0.5 / 100 * o}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * o}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), E.value = !0, setTimeout(() => {
      ne(), E.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    E.value = !0;
    let t = L.value.target;
    t.style.transform = "translateX(var(--t-app-width))", t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        E.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Y = {
  reset() {
    E.value = !0;
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      E.value = !1;
    }, 400);
  },
  move(e) {
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), E.value = !0, setTimeout(() => {
      ne(), E.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    E.value = !0;
    let t = L.value.target;
    t.style.transform = "translateX(var(--t-app-width))", t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        E.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Ge = (e) => {
  D.push(e);
}, Ue = (e, t) => {
  D[e].target = t;
}, ne = (e) => {
  e || D.pop();
}, je = () => {
  D.splice(0, D.length);
}, Ke = () => {
  Q.value = !1;
}, Je = () => {
  Q.value = !0;
}, Qe = (e, t) => {
  e == "scale" && Z.next(t), e == "transform" && Y.next(t);
}, Ze = (e, t) => {
  e == "scale" && Z.back(t), e == "transform" && Y.back(t);
}, Ye = (e, t) => {
  e == "scale" && Z.move(t), e == "transform" && Y.move(t);
}, et = (e) => {
  e == "scale" && Z.reset(), e == "transform" && Y.reset();
}, x = {
  isBusy: E,
  isSwipeable: pe,
  reset: et,
  next: Qe,
  back: Ze,
  move: Ye,
  screens: D,
  addScreen: Ge,
  addScreenEl: Ue,
  removeScreen: ne,
  removeAllScreen: je,
  lockSwipe: Ke,
  unlockSwipe: Je,
  swipeable: Q,
  currentScreen: z,
  lastScreen: B,
  nextScreen: L
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
  setup(e, { expose: t, emit: o }) {
    const s = e, r = o, l = m(!1), d = m(!1), n = m(!1), c = () => {
      d.value = !0, n.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, i = () => {
      n.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, r("dismiss");
      }, 300);
    };
    q(() => s.visible, (a) => {
      a ? c() : i();
    });
    const y = w(() => {
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
      open: c,
      close: i
    }), (a, _) => d.value ? (u(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: n.value }]),
      style: T({ "--space": s.space, ...y.value })
    }, [
      g(a.$slots, "content", {}, () => [
        k("div", tt, R(s.message), 1)
      ], !0)
    ], 6)) : I("", !0);
  }
}), fe = /* @__PURE__ */ v(ot, [["__scopeId", "data-v-2802d43f"]]), So = (e = {}) => ({
  open() {
    let t = document.body.querySelector(".t-app");
    if (!t) return;
    const o = document.createElement("div"), s = m();
    t.appendChild(o);
    const r = U({
      render() {
        return j(fe, {
          ...e,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              r.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    r.mount(o), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, e.duration + 10);
    }, 50);
  }
}), st = m(0);
function me() {
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
    const t = e, { height: o } = me();
    return ce("cableState", {
      placement: t.placement
    }), (s, r) => (u(), p("div", {
      class: S(["t-cable", { keyboard: t.keyboard && V(o) > 0, [t.placement]: !0 }]),
      style: T({ "--t-keyboard-height": V(o) + "px", "--t-keyboard-transition": V(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ v(rt, [["__scopeId", "data-v-6cae224b"]]), at = /* @__PURE__ */ h({
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
    return (s, r) => (u(), p("div", {
      class: "t-card",
      style: T(o.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), lt = {}, ct = { class: "t-content" };
function it(e, t) {
  return u(), p("div", ct, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ve = /* @__PURE__ */ v(lt, [["render", it], ["__scopeId", "data-v-af750e89"]]), ut = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: t }) {
    const o = t, s = e, r = m(0), l = m(!1), d = m();
    let n, c = !1;
    const i = () => {
      l.value = !1, r.value = 0, n && n.cancel(), c = !1;
    }, y = () => {
      c = !0, l.value = !0, r.value = s.threshold, o("refresh", i);
    }, a = () => {
      r.value = 0, l.value = !1, c = !1, o("cancel");
    };
    return q(() => d.value, () => {
      n && n.destroy();
      let _ = d.value.closest(".t-content");
      _ && (n = re(_, {
        options: {
          minDist: 60
        },
        down() {
          l.value || c || o("start");
        },
        move({ deltaY: b, initialDirection: $ }) {
          if (l.value || c || $ != "down") return;
          if (s.variant == "max" && b >= s.threshold) {
            y();
            return;
          }
          const f = b < 0 ? 0 : b;
          r.value = f, o("move", f);
        },
        up({ deltaY: b, initialDirection: $ }) {
          l.value || c || $ != "down" || (s.variant == "up" && b >= s.threshold ? y() : a());
        },
        cancel() {
          l.value || c || a();
        }
      }, {
        passive: !1
      }));
    }), se(() => {
      n && n.destroy();
    }), (_, b) => W((u(), p("div", {
      class: S(["t-refresher", { safe: _.safe }]),
      ref_key: "container",
      ref: d
    }, [
      g(_.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [H, r.value > 0]
    ]);
  }
}), dt = /* @__PURE__ */ v(ut, [["__scopeId", "data-v-1d52477a"]]), pt = {}, ft = { class: "t-screen" };
function mt(e, t) {
  return u(), p("div", ft, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ v(pt, [["render", mt], ["__scopeId", "data-v-c2a3436c"]]), vt = /* @__PURE__ */ h({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    let o = {};
    const s = t, r = e;
    let l;
    const d = r.router || ue(), n = r.route || we(), c = d.getRoutes();
    for (let a of c)
      o[a.name] = a.component || a.components;
    const i = (a) => {
      a && x.addScreen({
        name: a,
        target: null,
        component: be(o[a] || null)
      });
    }, y = (a, _) => {
      !_ || x.screens[a].target || (x.addScreenEl(a, _.$el), x.nextScreen && x.next(r.variant, () => {
        s("change");
      }));
    };
    return q(() => n.name, (a, _) => {
      a != x.currentScreen.value?.name && (x.lastScreen.value?.name == a ? x.back(r.variant, () => {
        s("change");
      }) : i(n.name));
    }), oe(() => {
      i(n.name), l = re(document.body, {
        beforeEvent(a) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: a }) {
          x.lastScreen.value && a == "right" && d.back();
        },
        move({ deltaX: a, initialDirection: _ }) {
          _ == "right" && x.move(r.variant, a);
        },
        up({ deltaX: a, initialDirection: _ }) {
          if (_ != "right") {
            x.reset(r.variant);
            return;
          }
          const b = window.innerWidth;
          a / b * 100 >= 50 ? d.back() : x.reset(r.variant);
        },
        cancel() {
          x.reset(r.variant);
        }
      });
    }), se(() => {
      l && l.destroy(), x.removeAllScreen();
    }), (a, _) => (u(), p(O, null, [
      (u(!0), p(O, null, F(V(x).screens, (b, $) => (u(), C(ye, {
        ref_for: !0,
        ref: (f) => y($, f),
        style: T({ zIndex: $ + ($ == V(x).screens.length - 1 ? 2 : 1) }),
        key: $
      }, {
        default: P(() => [
          (u(), C(ge(b.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: V(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), yt = /* @__PURE__ */ v(vt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const t = e, o = ie("cableState"), s = w(() => t?.placement || o?.placement);
    return (r, l) => (u(), p("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: t.safe }]),
      style: T({ "--t-size-toolbar": t.size })
    }, [
      k("div", null, [
        g(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), gt = /* @__PURE__ */ v(_t, [["__scopeId", "data-v-1ee9866d"]]), bt = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const t = e, o = he(), s = t.router || ue(), r = (l) => {
      if (o.onBack) {
        o.onBack(l);
        return;
      }
      x.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    };
    return (l, d) => l.to || V(x).lastScreen ? (u(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: r
    }, [
      g(l.$slots, "default", {}, () => [
        d[0] || (d[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), ht = /* @__PURE__ */ v(bt, [["__scopeId", "data-v-dcf9d363"]]), kt = /* @__PURE__ */ h({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = w(() => {
      let s, r = t.color;
      return t.size == "standard" ? s = "var(--t-fs-10)" : t.size == "small" ? s = "var(--t-fs-08)" : t.size == "large" ? s = "var(--t-fs-12)" : s = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (r = `var(--t-color-status-${t.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (u(), p("span", {
      class: "t-text",
      style: T(o.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ v(kt, [["__scopeId", "data-v-f0f94f05"]]), $t = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (u(), p("div", {
      class: S(["t-gesture-indicator", { [t.placement]: !0 }])
    }, null, 2));
  }
}), _e = /* @__PURE__ */ v($t, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ h({
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
    const o = e, s = t, r = m(), l = m(), d = m(!1);
    let n = null;
    const c = w(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), i = (a) => {
      s("dismiss", a);
    }, y = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return q(() => r.value, (a) => {
      a && (n = re(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(_) {
          return !(d.value || !o.gesture || o.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: _ }) {
          y(), _ == c.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if ($ != c.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = _ : f = b, o.placement == "bottom" && (f = _ > 0 ? _ : 0), o.placement == "top" && (f = _ < 0 ? _ : 0), o.placement == "left" && (f = b < 0 ? b : 0), o.placement == "right" && (f = b > 0 ? b : 0), (o.placement == "bottom" && (f >= 10 || this.isMoving) || o.placement == "top" && (f <= -10 || this.isMoving) || o.placement == "left" && (f <= -10 || this.isMoving) || o.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if (this.isMoving = !1, y(), $ != c.value) {
            l.value.open();
            return;
          }
          let f, X, ee;
          o.placement == "bottom" || o.placement == "top" ? (f = r.value.offsetHeight, ee = _) : (f = r.value.offsetWidth, ee = b), X = ee / f * 100, X > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, y(), l.value.open();
        }
      }));
    }), se(() => {
      n && n.destroy();
    }), (a, _) => (u(), C(M, {
      ref_key: "present",
      ref: l,
      class: S(o.class),
      placement: o.placement,
      backdrop: a.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: i,
      style: T(o.style)
    }, {
      default: P(() => [
        o.gesture && o.indicator && o.placement != "center" ? (u(), C(_e, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : I("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: a.rounded, radius: o.radius }]),
          style: T({ "--background": o.background }),
          ref_key: "sheet",
          ref: r
        }, [
          g(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), Tt = /* @__PURE__ */ v(wt, [["__scopeId", "data-v-6f7063f0"]]), xt = { class: "t-input-label" }, St = { class: "t-input-content" }, zt = ["type", "placeholder", "value"], Et = /* @__PURE__ */ h({
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
    const o = e, s = t, r = m(!1), l = w(() => !(o.modelValue === "" || o.modelValue === null || o.modelValue === void 0)), d = (i) => {
      s("update:modelValue", i.target.value);
    }, n = () => {
      r.value = !0;
    }, c = () => {
      r.value = !1;
    };
    return (i, y) => (u(), p("div", {
      class: S(["t-input", { rounded: i.rounded, ["size-" + i.size]: !0, ["variant-" + i.variant]: !0, focus: r.value, "has-value": l.value }])
    }, [
      k("label", null, [
        k("span", xt, R(i.label), 1),
        k("div", St, [
          g(i.$slots, "start", {}, void 0, !0),
          k("input", {
            type: i.type,
            placeholder: i.variant == "default" ? i.placeholder : "",
            value: i.modelValue,
            onInput: d,
            onFocus: n,
            onBlur: c
          }, null, 40, zt),
          g(i.$slots, "end", {}, void 0, !0)
        ])
      ]),
      i.error ? (u(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          N(R(i.error), 1)
        ]),
        _: 1
      })) : i.help ? (u(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          N(R(i.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ v(Et, [["__scopeId", "data-v-fd2173ab"]]), Bt = {};
function Ct(e, t) {
  return u(), p("textarea");
}
const Vt = /* @__PURE__ */ v(Bt, [["render", Ct]]), Pt = {};
function At(e, t) {
  return u(), p("div");
}
const Rt = /* @__PURE__ */ v(Pt, [["render", At]]), Dt = {}, Xt = { class: "t-grid" };
function Ot(e, t) {
  return u(), p("div", Xt);
}
const qt = /* @__PURE__ */ v(Dt, [["render", Ot]]), Nt = {}, Lt = { class: "t-grid-item" };
function Mt(e, t) {
  return u(), p("div", Lt);
}
const Wt = /* @__PURE__ */ v(Nt, [["render", Mt]]), Ht = /* @__PURE__ */ h({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (u(), p("div", {
      class: S(["t-divider", { [t.direction]: !0 }])
    }, null, 2));
  }
}), Ft = /* @__PURE__ */ v(Ht, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = m(!1), l = m(), d = w(() => {
      let i = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (i = `var(--t-color-status-${o.color})`), {
        "--color": i
      };
    }), n = () => l.value?.parentElement?.querySelector?.("input");
    oe(() => {
      let i = n();
      i && (r.value = i.type != "password", s("change", r.value));
    });
    const c = () => {
      let i = n();
      i && (r.value = !r.value, r.value ? i.type = "text" : i.type = "password", s("change", r.value));
    };
    return (i, y) => (u(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(d.value),
      onClick: c
    }, [
      r.value ? g(i.$slots, "on", { key: 0 }, () => [
        y[0] || (y[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      r.value ? I("", !0) : g(i.$slots, "off", { key: 1 }, () => [
        y[1] || (y[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ v(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = w(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, r) => (u(), p("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: T({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Kt = /* @__PURE__ */ v(jt, [["__scopeId", "data-v-24384c2f"]]), Jt = { class: "t-collapse-title" }, Qt = {
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
  setup(e, { emit: t }) {
    const o = e, s = t, r = m(!1), l = m(""), d = m(), n = () => {
      r.value = !r.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (c, i) => (u(), p("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: T({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: n
      }, [
        g(c.$slots, "icon"),
        k("div", Jt, [
          g(c.$slots, "title", {}, () => [
            N(R(o.title), 1)
          ])
        ]),
        g(c.$slots, "toggle", {}, () => [
          r.value ? (u(), p("div", Qt, [...i[0] || (i[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (u(), p("div", Zt, [...i[1] || (i[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Yt, [
        k("div", {
          ref_key: "content",
          ref: d
        }, [
          g(c.$slots, "content", {}, () => [
            g(c.$slots, "default")
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
  setup(e, { emit: t }) {
    const o = e, s = t, r = () => {
      s("update:modelValue", !o.modelValue);
    }, l = w(() => {
      let d = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), d;
    });
    return (d, n) => (u(), p("div", {
      class: S(["t-switch", { on: o.modelValue }]),
      style: T(l.value),
      onClick: r
    }, [...n[0] || (n[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), oo = /* @__PURE__ */ v(to, [["__scopeId", "data-v-3616970e"]]), so = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const t = e, o = ie("tabsState"), s = w(() => o.active.value === t.value), r = () => {
      o.setActive(t.value);
    };
    return (l, d) => (u(), p("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      G(J, {
        variant: "text",
        onClick: r,
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
}), ro = /* @__PURE__ */ v(so, [["__scopeId", "data-v-f810d905"]]), no = /* @__PURE__ */ h({
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
    const o = e, s = t, r = m("0px"), l = m(), d = w(() => {
      let c = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(c) && (c = `var(--t-color-status-${c})`), c;
    }), n = () => {
      if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
        let c = l.value.querySelector(".active");
        if (c) {
          let i = c.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, y = c.offsetWidth / 2;
          r.value = i + y - o.border / 2 + "px";
        }
      } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
        let c = l.value.querySelector(".active");
        if (c) {
          let i = c.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, y = c.offsetHeight / 2;
          r.value = i + y - o.border / 2 + "px";
        }
      }
    };
    return ce("tabsState", {
      active: w(() => o.modelValue),
      color: d.value,
      size: o.size,
      variant: o.variant,
      setActive: (c) => {
        s("update:modelValue", c), n();
      }
    }), ke(async () => {
      await $e(), l.value?.querySelector(".active") && n();
    }), (c, i) => (u(), p("ul", {
      ref_key: "container",
      ref: l,
      class: S(["t-tabs", { [c.placement]: !0, [c.variant]: !0 }]),
      style: T({ "--color": d.value, "--transform": r.value, "--border": c.border + "px" })
    }, [
      g(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ao = /* @__PURE__ */ v(no, [["__scopeId", "data-v-d23bc112"]]), lo = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (u(), C(ve, null, {
      default: P(() => [
        G(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), co = /* @__PURE__ */ v(lo, [["__scopeId", "data-v-1436aa9f"]]), io = { key: 0 }, uo = {
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
  setup(e, { emit: t }) {
    const o = e, s = t, r = w(() => {
      let n = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (n = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), n;
    }), l = w(() => o.multiple ? o.modelValue.includes(o.value) : o.value === void 0 ? o.modelValue : o.modelValue == o.value), d = () => {
      if (o.multiple) {
        let n = o.modelValue;
        o.modelValue.includes(o.value) ? n.splice(n.indexOf(o.value), 1) : n.push(o.value), s("update:modelValue", n);
      } else o.value === void 0 ? s("update:modelValue", !o.modelValue) : s("update:modelValue", o.value);
    };
    return (n, c) => (u(), p("div", {
      class: S(["t-checkbox", { active: l.value }]),
      style: T(r.value),
      onClick: d
    }, [
      k("div", {
        class: S(`t-checkbox-${n.type}`)
      }, [
        n.type == "radio" ? (u(), p("div", io)) : I("", !0),
        n.type == "check" ? g(n.$slots, "icon", { key: 1 }, () => [
          c[0] || (c[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      g(n.$slots, "label", {}, () => [
        n.label ? (u(), p("span", uo, R(o.label), 1)) : I("", !0)
      ], !0)
    ], 6));
  }
}), fo = /* @__PURE__ */ v(po, [["__scopeId", "data-v-0e13abc3"]]), mo = /* @__PURE__ */ h({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = me();
    return (o, s) => (u(), p("div", {
      class: "t-keyboard",
      style: T({ "--height": V(t) + "px" })
    }, null, 4));
  }
}), vo = /* @__PURE__ */ v(mo, [["__scopeId", "data-v-5d3fa1da"]]), yo = /* @__PURE__ */ h({
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
    return (s, r) => (u(), p("div", {
      class: "t-skeleton",
      style: T(o.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ v(yo, [["__scopeId", "data-v-877bbdb5"]]), go = /* @__PURE__ */ h({
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
    return (s, r) => (u(), p("div", {
      class: "t-ripple",
      style: T(o.value)
    }, null, 4));
  }
}), bo = /* @__PURE__ */ v(go, [["__scopeId", "data-v-42cb3d71"]]), zo = () => ({
  install: (e) => {
    Se(), e.component("t-app", Be), e.component("t-screen", ye), e.component("t-swipe-screen", yt), e.component("t-cable", nt), e.component("t-toolbar", gt), e.component("t-content", ve), e.component("t-card", at), e.component("t-refresher", dt), e.component("t-button", J), e.component("t-back-button", ht), e.component("t-present", M), e.component("t-text", te), e.component("t-sheet", Tt), e.component("t-gesture-indicator", _e), e.component("t-input", It), e.component("t-textarea", Vt), e.component("t-rich-text", Rt), e.component("t-grid", qt), e.component("t-grid-item", Wt), e.component("t-divider", Ft), e.component("t-toggle-password", Ut), e.component("t-loading-icon", K), e.component("t-alert", de), e.component("t-avatar", Kt), e.component("t-collapse", eo), e.component("t-toast", fe), e.component("t-switch", oo), e.component("t-tab", ro), e.component("t-tabs", ao), e.component("t-loading-app", co), e.component("t-checkbox", fo), e.component("t-keyboard", vo), e.component("t-skeleton", _o), e.component("t-ripple", bo);
  }
});
export {
  xe as blurCurrentActive,
  To as createAction,
  wo as createAlert,
  xo as createLoading,
  So as createToast,
  zo as createToife,
  Te as isFormElement,
  Fe as presentController,
  x as screenController,
  me as useKeyboard
};
