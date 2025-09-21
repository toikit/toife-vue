import { createElementBlock as p, openBlock as u, renderSlot as b, defineComponent as h, ref as m, computed as w, reactive as le, watch as N, Fragment as O, withDirectives as W, createCommentVNode as E, normalizeStyle as T, normalizeClass as S, vShow as H, createElementVNode as k, createVNode as G, createBlock as C, withCtx as P, toDisplayString as R, renderList as F, createTextVNode as q, createApp as U, h as j, provide as ce, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as ge, markRaw as be, inject as ie, useAttrs as he } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRouter as ue, useRoute as ke } from "vue-router";
const $e = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), we = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Te = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !$e(e.target) && we();
  });
}, v = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, xe = {}, Se = { class: "t-app" };
function ze(e, t) {
  return u(), p("div", Se, [
    b(e.$slots, "default")
  ]);
}
const Ie = /* @__PURE__ */ v(xe, [["render", ze]]), Ee = /* @__PURE__ */ h({
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
    const s = m(0), r = m(!1), l = m(), d = m(), n = e, c = o, i = w(() => r.value || n.keepalive), _ = le({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), a = (f) => {
      n.backdrop ? f?.backdropOpacity && (_["--t-present-backdrop-opacity"] = f.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", f?.transition && (_["--t-present-transition"] = f.transition, _["--t-present-transition"] = f.transition), f?.contentTransform && (_["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (_["--t-present-content-opacity"] = f.contentOpacity);
    }, y = () => {
      a({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, g = () => {
      let f = "0px", X = "1";
      n.placement == "bottom" || n.placement == "right" ? f = "100%" : n.placement == "top" || n.placement == "left" ? f = "-100%" : n.placement == "center" && (f = "0px", X = "0"), a({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: X,
        backdropOpacity: "0"
      });
    };
    N(() => n.visible, () => {
      n.visible ? (r.value = !0, s.value = We.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : (g(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), t({
      render: a,
      open: y,
      close: g
    });
    const $ = (f) => {
      f.preventDefault(), c("dismiss", "backdrop");
    };
    return g(), (f, X) => (u(), p(O, null, [
      i.value ? W((u(), p("div", {
        key: 0,
        class: S(["t-present", [{ [f.placement]: !0 }, n.class]]),
        ref_key: "present",
        ref: d,
        style: T([_, { zIndex: s.value }, n.style])
      }, [
        b(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, r.value]
      ]) : E("", !0),
      i.value ? W((u(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: $,
        ref_key: "backdrop",
        ref: l,
        style: T([_, { zIndex: s.value - 1 }, n.style])
      }, null, 4)), [
        [H, r.value]
      ]) : E("", !0)
    ], 64));
  }
}), M = /* @__PURE__ */ v(Ee, [["__scopeId", "data-v-8eb6e6e4"]]), Be = /* @__PURE__ */ h({
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
}), K = /* @__PURE__ */ v(Be, [["__scopeId", "data-v-7c463303"]]), Ce = { class: "t-button-content" }, Ve = {
  key: 0,
  class: "loader"
}, Pe = /* @__PURE__ */ h({
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
      W(k("span", Ce, [
        b(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (u(), p("span", Ve, [
        G(K, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ v(Pe, [["__scopeId", "data-v-185a9e49"]]), Ae = {
  key: 0,
  class: "t-alert-header"
}, Re = { class: "t-alert-content" }, De = { class: "t-alert-footer" }, Xe = /* @__PURE__ */ h({
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
    }, _ = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (r.value = !1, l("dismiss", a)) : a == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return t({
      open: c
    }), (a, y) => (u(), C(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: _
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-alert", { pop: n.value }]),
          ref_key: "container",
          ref: d
        }, [
          b(a.$slots, "header", {}, () => [
            s.title ? (u(), p("div", Ae, R(s.title), 1)) : E("", !0)
          ], !0),
          b(a.$slots, "content", {}, () => [
            k("div", Re, R(s.message), 1)
          ], !0),
          b(a.$slots, "footer", {}, () => [
            k("div", De, [
              (u(!0), p(O, null, F(s.actions, (g) => (u(), C(J, {
                color: g.color,
                variant: g.variant,
                onClick: ($) => i(g)
              }, {
                default: P(() => [
                  q(R(g.text), 1)
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
}), de = /* @__PURE__ */ v(Xe, [["__scopeId", "data-v-05d0c578"]]), ko = (e = {}) => ({
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
}), Oe = /* @__PURE__ */ h({
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
    }, _ = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (r.value = !1, l("dismiss", a)) : a == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return N(() => s.visible, (a) => {
      a ? c() : close();
    }), t({
      open: c,
      close
    }), (a, y) => (u(), C(M, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: _
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-action", { pop: n.value }]),
          ref_key: "container",
          ref: d
        }, [
          (u(!0), p(O, null, F(s.actions, (g) => (u(), p("div", null, [
            (u(!0), p(O, null, F(g, ($) => (u(), C(J, {
              color: $.color,
              size: $.size,
              variant: $.variant,
              onClick: (f) => i($),
              block: ""
            }, {
              default: P(() => [
                q(R($.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ne = /* @__PURE__ */ v(Oe, [["__scopeId", "data-v-e693a02a"]]), $o = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(Ne, {
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
}), qe = { class: "t-loading" }, Le = /* @__PURE__ */ h({
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
        k("div", qe, [
          b(n.$slots, "default", {}, () => [
            G(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Me = /* @__PURE__ */ v(Le, [["__scopeId", "data-v-8f84c14e"]]), wo = (e = {}) => {
  const t = m(), o = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        o && (r = document.createElement("div"), o.appendChild(r), s = U({
          render() {
            return j(Me, {
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
}, ae = m(1e3), We = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, D = le([]), Q = m(!0), I = m(!1), A = m(-1), z = w(() => D[A.value]), L = w(() => D[A.value + 1] || void 0), B = w(() => D[D.length - 2]), pe = w(() => !I.value && Q.value && B.value), Z = {
  reset() {
    I.value = !0;
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!pe.value) return;
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o}))) scale(${0.5 + 0.5 / 100 * o}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * o}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ne(), I.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    I.value = !0;
    let t = L.value.target;
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
    const t = window.innerWidth, o = e / t * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= t && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${o})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ne(), I.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    I.value = !0;
    let t = L.value.target;
    t.style.transform = "translateX(var(--t-app-width))", t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        I.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, He = (e) => {
  D.push(e);
}, Fe = (e, t) => {
  D[e].target = t;
}, ne = (e) => {
  e || D.pop();
}, Ge = () => {
  D.splice(0, D.length);
}, Ue = () => {
  Q.value = !1;
}, je = () => {
  Q.value = !0;
}, Ke = (e, t) => {
  e == "scale" && Z.next(t), e == "transform" && Y.next(t);
}, Je = (e, t) => {
  e == "scale" && Z.back(t), e == "transform" && Y.back(t);
}, Qe = (e, t) => {
  e == "scale" && Z.move(t), e == "transform" && Y.move(t);
}, Ze = (e) => {
  e == "scale" && Z.reset(), e == "transform" && Y.reset();
}, x = {
  isBusy: I,
  isSwipeable: pe,
  reset: Ze,
  next: Ke,
  back: Je,
  move: Qe,
  screens: D,
  addScreen: He,
  addScreenEl: Fe,
  removeScreen: ne,
  removeAllScreen: Ge,
  lockSwipe: Ue,
  unlockSwipe: je,
  swipeable: Q,
  currentScreen: z,
  lastScreen: B,
  nextScreen: L
}, Ye = { class: "t-toast-content" }, et = /* @__PURE__ */ h({
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
    N(() => s.visible, (a) => {
      a ? c() : i();
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
      open: c,
      close: i
    }), (a, y) => d.value ? (u(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: n.value }]),
      style: T({ "--space": s.space, ..._.value })
    }, [
      b(a.$slots, "content", {}, () => [
        k("div", Ye, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), fe = /* @__PURE__ */ v(et, [["__scopeId", "data-v-7011351e"]]), To = (e = {}) => ({
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
}), tt = m(0);
function me() {
  return {
    height: tt
  };
}
const ot = /* @__PURE__ */ h({
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
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), st = /* @__PURE__ */ v(ot, [["__scopeId", "data-v-6cae224b"]]), rt = /* @__PURE__ */ h({
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
      b(s.$slots, "default")
    ], 4));
  }
}), nt = {}, at = { class: "t-content" };
function lt(e, t) {
  return u(), p("div", at, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ve = /* @__PURE__ */ v(nt, [["render", lt], ["__scopeId", "data-v-af750e89"]]), ct = /* @__PURE__ */ h({
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
      l.value = !1, r.value = 0, n && n.cancel(), setTimeout(() => {
        c = !1;
      }, 2e3);
    }, _ = () => {
      c = !0, l.value = !0, r.value = s.threshold, o("refresh", i);
    }, a = () => {
      r.value = 0, l.value = !1, c = !1, o("cancel");
    };
    return N(() => d.value, () => {
      n && n.destroy();
      let y = d.value.closest(".t-content");
      y && (n = re(y, {
        options: {
          minDist: 60
        },
        down() {
          l.value || c || o("start");
        },
        move({ deltaY: g, initialDirection: $ }) {
          if (!(l.value || c || $ != "down")) {
            if (s.variant == "max" && g >= s.threshold) {
              _();
              return;
            }
            g > 10 && (r.value = g > 0 ? g : 0, o("move", g));
          }
        },
        up({ deltaY: g, initialDirection: $ }) {
          l.value || c || $ != "down" || (s.variant == "up" && g >= s.threshold ? _() : a());
        },
        cancel() {
          l.value || c || a();
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      n && n.destroy();
    }), (y, g) => W((u(), p("div", {
      class: S(["t-refresher", { safe: y.safe }]),
      ref_key: "container",
      ref: d
    }, [
      b(y.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [H, r.value > 0]
    ]);
  }
}), it = /* @__PURE__ */ v(ct, [["__scopeId", "data-v-80ef3d39"]]), ut = {}, dt = { class: "t-screen" };
function pt(e, t) {
  return u(), p("div", dt, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ v(ut, [["render", pt], ["__scopeId", "data-v-c2a3436c"]]), ft = /* @__PURE__ */ h({
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
    const d = r.router || ue(), n = r.route || ke(), c = d.getRoutes();
    for (let a of c)
      o[a.name] = a.component || a.components;
    const i = (a) => {
      a && x.addScreen({
        name: a,
        target: null,
        component: be(o[a] || null)
      });
    }, _ = (a, y) => {
      !y || x.screens[a].target || (x.addScreenEl(a, y.$el), x.nextScreen && x.next(r.variant, () => {
        s("change");
      }));
    };
    return N(() => n.name, (a, y) => {
      a != x.currentScreen.value?.name && (x.lastScreen.value?.name == a ? x.back(r.variant, () => {
        s("change");
      }) : i(n.name));
    }), se(() => {
      i(n.name), l = re(document.body, {
        beforeEvent(a) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: a }) {
          x.lastScreen.value && a == "right" && d.back();
        },
        move({ deltaX: a, initialDirection: y }) {
          y == "right" && x.move(r.variant, a);
        },
        up({ deltaX: a, initialDirection: y }) {
          if (y != "right") {
            x.reset(r.variant);
            return;
          }
          const g = window.innerWidth;
          a / g * 100 >= 50 ? d.back() : x.reset(r.variant);
        },
        cancel() {
          x.reset(r.variant);
        }
      });
    }), oe(() => {
      l && l.destroy(), x.removeAllScreen();
    }), (a, y) => (u(), p(O, null, [
      (u(!0), p(O, null, F(V(x).screens, (g, $) => (u(), C(_e, {
        ref_for: !0,
        ref: (f) => _($, f),
        style: T({ zIndex: $ + ($ == V(x).screens.length - 1 ? 2 : 1) }),
        key: $
      }, {
        default: P(() => [
          (u(), C(ge(g.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: V(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), mt = /* @__PURE__ */ v(ft, [["__scopeId", "data-v-23e0cfda"]]), vt = /* @__PURE__ */ h({
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
        b(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), _t = /* @__PURE__ */ v(vt, [["__scopeId", "data-v-1ee9866d"]]), yt = /* @__PURE__ */ h({
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
      b(l.$slots, "default", {}, () => [
        d[0] || (d[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), gt = /* @__PURE__ */ v(yt, [["__scopeId", "data-v-dcf9d363"]]), bt = /* @__PURE__ */ h({
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
      b(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ v(bt, [["__scopeId", "data-v-f0f94f05"]]), ht = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (u(), p("div", {
      class: S(["t-gesture-indicator", { [t.placement]: !0 }])
    }, null, 2));
  }
}), ye = /* @__PURE__ */ v(ht, [["__scopeId", "data-v-ed8f7308"]]), kt = /* @__PURE__ */ h({
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
    }, _ = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return N(() => r.value, (a) => {
      a && (n = re(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(d.value || !o.gesture || o.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == c.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: y, deltaX: g, initialDirection: $ }) {
          if ($ != c.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = y : f = g, o.placement == "bottom" && (f = y > 0 ? y : 0), o.placement == "top" && (f = y < 0 ? y : 0), o.placement == "left" && (f = g < 0 ? g : 0), o.placement == "right" && (f = g > 0 ? g : 0), (o.placement == "bottom" && (f >= 10 || this.isMoving) || o.placement == "top" && (f <= -10 || this.isMoving) || o.placement == "left" && (f <= -10 || this.isMoving) || o.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: g, initialDirection: $ }) {
          if (this.isMoving = !1, _(), $ != c.value) {
            l.value.open();
            return;
          }
          let f, X, ee;
          o.placement == "bottom" || o.placement == "top" ? (f = r.value.offsetHeight, ee = y) : (f = r.value.offsetWidth, ee = g), X = ee / f * 100, X > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), l.value.open();
        }
      }));
    }), oe(() => {
      n && n.destroy();
    }), (a, y) => (u(), C(M, {
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
        o.gesture && o.indicator && o.placement != "center" ? (u(), C(ye, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: a.rounded, radius: o.radius }]),
          style: T({ "--background": o.background }),
          ref_key: "sheet",
          ref: r
        }, [
          b(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), $t = /* @__PURE__ */ v(kt, [["__scopeId", "data-v-71a5b877"]]), wt = { class: "t-input-label" }, Tt = { class: "t-input-content" }, xt = ["type", "placeholder", "value"], St = /* @__PURE__ */ h({
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
    return (i, _) => (u(), p("div", {
      class: S(["t-input", { rounded: i.rounded, ["size-" + i.size]: !0, ["variant-" + i.variant]: !0, focus: r.value, "has-value": l.value }])
    }, [
      k("label", null, [
        k("span", wt, R(i.label), 1),
        k("div", Tt, [
          b(i.$slots, "start", {}, void 0, !0),
          k("input", {
            type: i.type,
            placeholder: i.variant == "default" ? i.placeholder : "",
            value: i.modelValue,
            onInput: d,
            onFocus: n,
            onBlur: c
          }, null, 40, xt),
          b(i.$slots, "end", {}, void 0, !0)
        ])
      ]),
      i.error ? (u(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          q(R(i.error), 1)
        ]),
        _: 1
      })) : i.help ? (u(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          q(R(i.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ v(St, [["__scopeId", "data-v-fffdda84"]]), It = {};
function Et(e, t) {
  return u(), p("textarea");
}
const Bt = /* @__PURE__ */ v(It, [["render", Et]]), Ct = {};
function Vt(e, t) {
  return u(), p("div");
}
const Pt = /* @__PURE__ */ v(Ct, [["render", Vt]]), At = {}, Rt = { class: "t-grid" };
function Dt(e, t) {
  return u(), p("div", Rt);
}
const Xt = /* @__PURE__ */ v(At, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, t) {
  return u(), p("div", Nt);
}
const Lt = /* @__PURE__ */ v(Ot, [["render", qt]]), Mt = /* @__PURE__ */ h({
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
}), Wt = /* @__PURE__ */ v(Mt, [["__scopeId", "data-v-47ee8991"]]), Ht = /* @__PURE__ */ h({
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
    se(() => {
      let i = n();
      i && (r.value = i.type != "password", s("change", r.value));
    });
    const c = () => {
      let i = n();
      i && (r.value = !r.value, r.value ? i.type = "text" : i.type = "password", s("change", r.value));
    };
    return (i, _) => (u(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(d.value),
      onClick: c
    }, [
      r.value ? b(i.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      r.value ? E("", !0) : b(i.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ft = /* @__PURE__ */ v(Ht, [["__scopeId", "data-v-3268e9e3"]]), Gt = /* @__PURE__ */ h({
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
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ut = /* @__PURE__ */ v(Gt, [["__scopeId", "data-v-24384c2f"]]), jt = { class: "t-collapse-title" }, Kt = {
  key: 0,
  class: "icon"
}, Jt = {
  key: 1,
  class: "icon"
}, Qt = { class: "t-collapse-content" }, Zt = /* @__PURE__ */ h({
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
        b(c.$slots, "icon"),
        k("div", jt, [
          b(c.$slots, "title", {}, () => [
            q(R(o.title), 1)
          ])
        ]),
        b(c.$slots, "toggle", {}, () => [
          r.value ? (u(), p("div", Kt, [...i[0] || (i[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (u(), p("div", Jt, [...i[1] || (i[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Qt, [
        k("div", {
          ref_key: "content",
          ref: d
        }, [
          b(c.$slots, "content", {}, () => [
            b(c.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Yt = /* @__PURE__ */ h({
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
}), eo = /* @__PURE__ */ v(Yt, [["__scopeId", "data-v-3616970e"]]), to = /* @__PURE__ */ h({
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
          b(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), oo = /* @__PURE__ */ v(to, [["__scopeId", "data-v-f810d905"]]), so = /* @__PURE__ */ h({
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
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let c = l.value.querySelector(".active");
          if (c) {
            let i = c.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, _ = c.offsetWidth / 2;
            r.value = i + _ - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let c = l.value.querySelector(".active");
          if (c) {
            let i = c.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, _ = c.offsetHeight / 2;
            r.value = i + _ - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ce("tabsState", {
      active: w(() => o.modelValue),
      color: d.value,
      size: o.size,
      variant: o.variant,
      setActive: (c) => {
        s("update:modelValue", c), n();
      }
    }), se(() => {
      n();
    }), (c, i) => (u(), p("ul", {
      ref_key: "container",
      ref: l,
      class: S(["t-tabs", { [c.placement]: !0, [c.variant]: !0 }]),
      style: T({ "--color": d.value, "--transform": r.value, "--border": c.border + "px" })
    }, [
      b(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ro = /* @__PURE__ */ v(so, [["__scopeId", "data-v-3a46d2df"]]), no = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (u(), C(ve, null, {
      default: P(() => [
        G(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), ao = /* @__PURE__ */ v(no, [["__scopeId", "data-v-1436aa9f"]]), lo = { key: 0 }, co = {
  key: 0,
  class: "t-checkbox-label"
}, io = /* @__PURE__ */ h({
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
        n.type == "radio" ? (u(), p("div", lo)) : E("", !0),
        n.type == "check" ? b(n.$slots, "icon", { key: 1 }, () => [
          c[0] || (c[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      b(n.$slots, "label", {}, () => [
        n.label ? (u(), p("span", co, R(o.label), 1)) : E("", !0)
      ], !0)
    ], 6));
  }
}), uo = /* @__PURE__ */ v(io, [["__scopeId", "data-v-0e13abc3"]]), po = /* @__PURE__ */ h({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = me();
    return (o, s) => (u(), p("div", {
      class: "t-keyboard",
      style: T({ "--height": V(t) + "px" })
    }, null, 4));
  }
}), fo = /* @__PURE__ */ v(po, [["__scopeId", "data-v-5d3fa1da"]]), mo = /* @__PURE__ */ h({
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
}), vo = /* @__PURE__ */ v(mo, [["__scopeId", "data-v-877bbdb5"]]), _o = /* @__PURE__ */ h({
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
}), yo = /* @__PURE__ */ v(_o, [["__scopeId", "data-v-42cb3d71"]]), xo = () => ({
  install: (e) => {
    Te(), e.component("t-app", Ie), e.component("t-screen", _e), e.component("t-swipe-screen", mt), e.component("t-cable", st), e.component("t-toolbar", _t), e.component("t-content", ve), e.component("t-card", rt), e.component("t-refresher", it), e.component("t-button", J), e.component("t-back-button", gt), e.component("t-present", M), e.component("t-text", te), e.component("t-sheet", $t), e.component("t-gesture-indicator", ye), e.component("t-input", zt), e.component("t-textarea", Bt), e.component("t-rich-text", Pt), e.component("t-grid", Xt), e.component("t-grid-item", Lt), e.component("t-divider", Wt), e.component("t-toggle-password", Ft), e.component("t-loading-icon", K), e.component("t-alert", de), e.component("t-avatar", Ut), e.component("t-collapse", Zt), e.component("t-toast", fe), e.component("t-switch", eo), e.component("t-tab", oo), e.component("t-tabs", ro), e.component("t-loading-app", ao), e.component("t-checkbox", uo), e.component("t-keyboard", fo), e.component("t-skeleton", vo), e.component("t-ripple", yo);
  }
});
export {
  we as blurCurrentActive,
  $o as createAction,
  ko as createAlert,
  wo as createLoading,
  To as createToast,
  xo as createToife,
  $e as isFormElement,
  We as presentController,
  x as screenController,
  me as useKeyboard
};
