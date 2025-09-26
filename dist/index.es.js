import { createElementBlock as p, openBlock as i, renderSlot as g, defineComponent as h, ref as m, computed as w, reactive as ce, watch as X, onMounted as G, Fragment as N, withDirectives as W, createCommentVNode as E, normalizeStyle as T, normalizeClass as S, vShow as F, createElementVNode as k, createVNode as U, createBlock as C, withCtx as P, toDisplayString as R, renderList as H, createTextVNode as q, createApp as j, h as K, provide as ie, unref as V, onUnmounted as se, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke, nextTick as ae } from "vue";
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
  return i(), p("div", ze, [
    g(e.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ v(Se, [["render", Ie]]), Be = /* @__PURE__ */ h({
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
    const s = m(0), n = m(!1), l = m(), d = m(), r = e, u = o, c = w(() => n.value || r.keepalive), y = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), a = (f) => {
      r.backdrop ? f?.backdropOpacity && (y["--t-present-backdrop-opacity"] = f.backdropOpacity) : y["--t-present-backdrop-opacity"] = "0", f?.transition && (y["--t-present-transition"] = f.transition, y["--t-present-transition"] = f.transition), f?.contentTransform && (y["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (y["--t-present-content-opacity"] = f.contentOpacity);
    }, _ = () => {
      a({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, b = () => {
      let f = "0px", O = "1";
      r.placement == "bottom" || r.placement == "right" ? f = "100%" : r.placement == "top" || r.placement == "left" ? f = "-100%" : r.placement == "center" && (f = "0px", O = "0"), a({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: O,
        backdropOpacity: "0"
      });
    };
    X(() => r.visible, () => {
      r.visible ? (n.value = !0, s.value = Fe.getNewIndex(), setTimeout(() => {
        _();
      }, 50)) : (b(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), t({
      render: a,
      open: _,
      close: b
    });
    const $ = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return G(() => {
      r.visible ? _() : b();
    }), (f, O) => (i(), p(N, null, [
      c.value ? W((i(), p("div", {
        key: 0,
        class: S(["t-present", [{ [f.placement]: !0 }, r.class]]),
        ref_key: "present",
        ref: d,
        style: T([y, { zIndex: s.value }, r.style])
      }, [
        g(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [F, n.value]
      ]) : E("", !0),
      c.value ? W((i(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: $,
        ref_key: "backdrop",
        ref: l,
        style: T([y, { zIndex: s.value - 1 }, r.style])
      }, null, 4)), [
        [F, n.value]
      ]) : E("", !0)
    ], 64));
  }
}), M = /* @__PURE__ */ v(Be, [["__scopeId", "data-v-1b25059f"]]), Ce = /* @__PURE__ */ h({
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
    return (t, o) => (i(), p("span", {
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
}), J = /* @__PURE__ */ v(Ce, [["__scopeId", "data-v-7c463303"]]), Ve = { class: "t-button-content" }, Pe = {
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
    return (s, n) => (i(), p("button", {
      class: S(["t-button", { "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0 }]),
      style: T(o.value)
    }, [
      W(k("span", Ve, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [F, !t.loading]
      ]),
      t.loading ? (i(), p("span", Pe, [
        U(J, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), Q = /* @__PURE__ */ v(Ae, [["__scopeId", "data-v-185a9e49"]]), Re = {
  key: 0,
  class: "t-alert-header"
}, De = { class: "t-alert-content" }, Xe = { class: "t-alert-footer" }, Oe = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = m(!1), l = o, d = m(), r = m(!1), u = () => {
      n.value = !0;
    }, c = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, y = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return t({
      open: u
    }), (a, _) => (i(), C(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-alert", { pop: r.value }]),
          ref_key: "container",
          ref: d
        }, [
          g(a.$slots, "header", {}, () => [
            s.title ? (i(), p("div", Re, R(s.title), 1)) : E("", !0)
          ], !0),
          g(a.$slots, "content", {}, () => [
            k("div", De, R(s.message), 1)
          ], !0),
          g(a.$slots, "footer", {}, () => [
            k("div", Xe, [
              (i(!0), p(N, null, H(s.actions, (b) => (i(), C(Q, {
                color: b.color,
                variant: b.variant,
                onClick: ($) => c(b)
              }, {
                default: P(() => [
                  q(R(b.text), 1)
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
}), pe = /* @__PURE__ */ v(Oe, [["__scopeId", "data-v-05d0c578"]]), $o = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = j({
        render() {
          return K(pe, {
            ...e,
            ref: n,
            onDismiss: (d, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: r });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
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
    const s = e, n = m(!1), l = o, d = m(), r = m(!1), u = () => {
      n.value = !0;
    }, c = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, y = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return X(() => s.visible, (a) => {
      a ? u() : close();
    }), t({
      open: u,
      close
    }), (a, _) => (i(), C(M, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-action", { pop: r.value }]),
          ref_key: "container",
          ref: d
        }, [
          (i(!0), p(N, null, H(s.actions, (b) => (i(), p("div", null, [
            (i(!0), p(N, null, H(b, ($) => (i(), C(Q, {
              color: $.color,
              size: $.size,
              variant: $.variant,
              onClick: (f) => c($),
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
}), qe = /* @__PURE__ */ v(Ne, [["__scopeId", "data-v-844fb240"]]), wo = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = j({
        render() {
          return K(qe, {
            ...e,
            ref: n,
            onDismiss: (d, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: r });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Le = { class: "t-loading" }, Me = /* @__PURE__ */ h({
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
    }), (r, u) => (i(), C(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        k("div", Le, [
          g(r.$slots, "default", {}, () => [
            U(J, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ v(Me, [["__scopeId", "data-v-8f84c14e"]]), To = (e = {}) => {
  const t = m(), o = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        o && (n = document.createElement("div"), o.appendChild(n), s = j({
          render() {
            return K(We, {
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
}, le = m(1e3), Fe = {
  getNewIndex() {
    return le.value += 2, le.value;
  }
}, D = ce([]), Z = m(!0), I = m(!1), A = m(-1), z = w(() => D[A.value]), L = w(() => D[A.value + 1] || void 0), B = w(() => D[D.length - 2]), fe = w(() => !I.value && Z.value && B.value), Y = {
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
}, ee = {
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
}, Ge = (e, t) => {
  D[e].target = t;
}, re = (e) => {
  e || D.pop();
}, Ue = () => {
  D.splice(0, D.length);
}, je = () => {
  Z.value = !1;
}, Ke = () => {
  Z.value = !0;
}, Je = (e, t) => {
  e == "scale" && Y.next(t), e == "transform" && ee.next(t);
}, Qe = (e, t) => {
  e == "scale" && Y.back(t), e == "transform" && ee.back(t);
}, Ze = (e, t) => {
  e == "scale" && Y.move(t), e == "transform" && ee.move(t);
}, Ye = (e) => {
  e == "scale" && Y.reset(), e == "transform" && ee.reset();
}, x = {
  isBusy: I,
  isSwipeable: fe,
  reset: Ye,
  next: Je,
  back: Qe,
  move: Ze,
  screens: D,
  addScreen: He,
  addScreenEl: Ge,
  removeScreen: re,
  removeAllScreen: Ue,
  lockSwipe: je,
  unlockSwipe: Ke,
  swipeable: Z,
  currentScreen: z,
  lastScreen: B,
  nextScreen: L
}, et = { class: "t-toast-content" }, tt = /* @__PURE__ */ h({
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
    const s = e, n = o, l = m(!1), d = m(!1), r = m(!1), u = () => {
      d.value = !0, r.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, c = () => {
      r.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    X(() => s.visible, (a) => {
      a ? u() : c();
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
      open: u,
      close: c
    }), (a, _) => d.value ? (i(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: r.value }]),
      style: T({ "--space": s.space, ...y.value })
    }, [
      g(a.$slots, "content", {}, () => [
        k("div", et, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), me = /* @__PURE__ */ v(tt, [["__scopeId", "data-v-2802d43f"]]), xo = (e = {}) => ({
  open() {
    let t = document.body.querySelector(".t-app");
    if (!t) return;
    const o = document.createElement("div"), s = m();
    t.appendChild(o);
    const n = j({
      render() {
        return K(me, {
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
const st = /* @__PURE__ */ h({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const t = e, { height: o } = ve();
    return ie("cableState", {
      placement: t.placement
    }), (s, n) => (i(), p("div", {
      class: S(["t-cable", { keyboard: t.keyboard && V(o) > 0, [t.placement]: !0 }]),
      style: T({ "--t-keyboard-height": V(o) + "px", "--t-keyboard-transition": V(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ v(st, [["__scopeId", "data-v-6cae224b"]]), rt = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-card",
      style: T(o.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, t) {
  return i(), p("div", lt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ v(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), it = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: t }) {
    const o = t, s = e, n = m(0), l = m(!1), d = m();
    let r, u = !1;
    const c = () => {
      l.value = !1, n.value = 0, r && r.cancel(), u = !1;
    }, y = () => {
      u = !0, l.value = !0, n.value = s.threshold, o("refresh", c);
    }, a = () => {
      n.value = 0, l.value = !1, u = !1, o("cancel");
    };
    return X(() => d.value, () => {
      r && r.destroy();
      let _ = d.value.closest(".t-content");
      _ && (r = ne(_, {
        options: {
          minDist: 60
        },
        down() {
          l.value || u || o("start");
        },
        move({ deltaY: b, initialDirection: $ }) {
          if (l.value || u || $ != "down") return;
          if (s.variant == "max" && b >= s.threshold) {
            y();
            return;
          }
          const f = b < 0 ? 0 : b;
          n.value = f, o("move", f);
        },
        up({ deltaY: b, initialDirection: $ }) {
          l.value || u || $ != "down" || (s.variant == "up" && b >= s.threshold ? y() : a());
        },
        cancel() {
          l.value || u || a();
        }
      }, {
        passive: !1
      }));
    }), se(() => {
      r && r.destroy();
    }), (_, b) => W((i(), p("div", {
      class: S(["t-refresher", { safe: _.safe }]),
      ref_key: "container",
      ref: d
    }, [
      g(_.$slots, "default", {
        offset: n.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [F, n.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ v(it, [["__scopeId", "data-v-1d52477a"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, t) {
  return i(), p("div", pt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ v(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ h({
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
    const d = n.router || de(), r = n.route || $e(), u = d.getRoutes();
    for (let a of u)
      o[a.name] = a.component || a.components;
    const c = (a) => {
      a && x.addScreen({
        name: a,
        target: null,
        component: he(o[a] || null)
      });
    }, y = (a, _) => {
      !_ || x.screens[a].target || (x.addScreenEl(a, _.$el), x.nextScreen && x.next(n.variant, () => {
        s("change");
      }));
    };
    return X(() => r.name, (a, _) => {
      a != x.currentScreen.value?.name && (x.lastScreen.value?.name == a ? x.back(n.variant, () => {
        s("change");
      }) : c(r.name));
    }), G(() => {
      c(r.name), l = ne(document.body, {
        beforeEvent(a) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: a }) {
          x.lastScreen.value && a == "right" && d.back();
        },
        move({ deltaX: a, initialDirection: _ }) {
          _ == "right" && x.move(n.variant, a);
        },
        up({ deltaX: a, initialDirection: _ }) {
          if (_ != "right") {
            x.reset(n.variant);
            return;
          }
          const b = window.innerWidth;
          a / b * 100 >= 50 ? d.back() : x.reset(n.variant);
        },
        cancel() {
          x.reset(n.variant);
        }
      });
    }), se(() => {
      l && l.destroy(), x.removeAllScreen();
    }), (a, _) => (i(), p(N, null, [
      (i(!0), p(N, null, H(V(x).screens, (b, $) => (i(), C(_e, {
        ref_for: !0,
        ref: (f) => y($, f),
        style: T({ zIndex: $ + ($ == V(x).screens.length - 1 ? 2 : 1) }),
        key: $
      }, {
        default: P(() => [
          (i(), C(be(b.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: V(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), vt = /* @__PURE__ */ v(mt, [["__scopeId", "data-v-23e0cfda"]]), yt = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const t = e, o = ue("cableState"), s = w(() => t?.placement || o?.placement);
    return (n, l) => (i(), p("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: t.safe }]),
      style: T({ "--t-size-toolbar": t.size })
    }, [
      k("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), _t = /* @__PURE__ */ v(yt, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ h({
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
      x.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    };
    return (l, d) => l.to || V(x).lastScreen ? (i(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        d[0] || (d[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), bt = /* @__PURE__ */ v(gt, [["__scopeId", "data-v-dcf9d363"]]), ht = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("span", {
      class: "t-text",
      style: T(o.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), oe = /* @__PURE__ */ v(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: S(["t-gesture-indicator", { [t.placement]: !0 }])
    }, null, 2));
  }
}), ge = /* @__PURE__ */ v(kt, [["__scopeId", "data-v-ed8f7308"]]), $t = /* @__PURE__ */ h({
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
    const o = e, s = t, n = m(), l = m(), d = m(!1);
    let r = null;
    const u = w(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), c = (a) => {
      s("dismiss", a);
    }, y = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return X(() => n.value, (a) => {
      a && (r = ne(n.value, {
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
          y(), _ == u.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if ($ != u.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = _ : f = b, o.placement == "bottom" && (f = _ > 0 ? _ : 0), o.placement == "top" && (f = _ < 0 ? _ : 0), o.placement == "left" && (f = b < 0 ? b : 0), o.placement == "right" && (f = b > 0 ? b : 0), (o.placement == "bottom" && (f >= 10 || this.isMoving) || o.placement == "top" && (f <= -10 || this.isMoving) || o.placement == "left" && (f <= -10 || this.isMoving) || o.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if (this.isMoving = !1, y(), $ != u.value) {
            l.value.open();
            return;
          }
          let f, O, te;
          o.placement == "bottom" || o.placement == "top" ? (f = n.value.offsetHeight, te = _) : (f = n.value.offsetWidth, te = b), O = te / f * 100, O > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, y(), l.value.open();
        }
      }));
    }), se(() => {
      r && r.destroy();
    }), (a, _) => (i(), C(M, {
      ref_key: "present",
      ref: l,
      class: S(o.class),
      placement: o.placement,
      backdrop: a.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: c,
      style: T(o.style)
    }, {
      default: P(() => [
        o.gesture && o.indicator && o.placement != "center" ? (i(), C(ge, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: a.rounded, radius: o.radius }]),
          style: T({ "--background": o.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ v($t, [["__scopeId", "data-v-6f7063f0"]]), Tt = { class: "t-input-label" }, xt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ h({
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
    const o = e, s = t, n = m(!1), l = w(() => !(o.modelValue === "" || o.modelValue === null || o.modelValue === void 0)), d = (c) => {
      s("update:modelValue", c.target.value);
    }, r = () => {
      n.value = !0;
    }, u = () => {
      n.value = !1;
    };
    return (c, y) => (i(), p("div", {
      class: S(["t-input", { rounded: c.rounded, ["size-" + c.size]: !0, ["variant-" + c.variant]: !0, focus: n.value, "has-value": l.value }])
    }, [
      k("label", null, [
        k("span", Tt, R(c.label), 1),
        k("div", xt, [
          g(c.$slots, "start", {}, void 0, !0),
          k("input", {
            type: c.type,
            placeholder: c.variant == "default" ? c.placeholder : "",
            value: c.modelValue,
            onInput: d,
            onFocus: r,
            onBlur: u
          }, null, 40, St),
          g(c.$slots, "end", {}, void 0, !0)
        ])
      ]),
      c.error ? (i(), C(oe, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          q(R(c.error), 1)
        ]),
        _: 1
      })) : c.help ? (i(), C(oe, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          q(R(c.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ v(zt, [["__scopeId", "data-v-fd2173ab"]]), Et = {};
function Bt(e, t) {
  return i(), p("textarea");
}
const Ct = /* @__PURE__ */ v(Et, [["render", Bt]]), Vt = {};
function Pt(e, t) {
  return i(), p("div");
}
const At = /* @__PURE__ */ v(Vt, [["render", Pt]]), Rt = {}, Dt = { class: "t-grid" };
function Xt(e, t) {
  return i(), p("div", Dt);
}
const Ot = /* @__PURE__ */ v(Rt, [["render", Xt]]), Nt = {}, qt = { class: "t-grid-item" };
function Lt(e, t) {
  return i(), p("div", qt);
}
const Mt = /* @__PURE__ */ v(Nt, [["render", Lt]]), Wt = /* @__PURE__ */ h({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p("div", {
      class: S(["t-divider", { [t.direction]: !0 }])
    }, null, 2));
  }
}), Ft = /* @__PURE__ */ v(Wt, [["__scopeId", "data-v-47ee8991"]]), Ht = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(!1), l = m(), d = w(() => {
      let c = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (c = `var(--t-color-status-${o.color})`), {
        "--color": c
      };
    }), r = () => l.value?.parentElement?.querySelector?.("input");
    G(() => {
      let c = r();
      c && (n.value = c.type != "password", s("change", n.value));
    });
    const u = () => {
      let c = r();
      c && (n.value = !n.value, n.value ? c.type = "text" : c.type = "password", s("change", n.value));
    };
    return (c, y) => (i(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(d.value),
      onClick: u
    }, [
      n.value ? g(c.$slots, "on", { key: 0 }, () => [
        y[0] || (y[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      n.value ? E("", !0) : g(c.$slots, "off", { key: 1 }, () => [
        y[1] || (y[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ v(Ht, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = w(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, n) => (i(), p("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: T({ "--size": o.value })
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
}, Zt = { class: "t-collapse-content" }, Yt = /* @__PURE__ */ h({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(!1), l = m(""), d = m(), r = () => {
      n.value = !n.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (u, c) => (i(), p("div", {
      class: S(["t-collapse", { open: n.value }]),
      style: T({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: r
      }, [
        g(u.$slots, "icon"),
        k("div", Kt, [
          g(u.$slots, "title", {}, () => [
            q(R(o.title), 1)
          ])
        ]),
        g(u.$slots, "toggle", {}, () => [
          n.value ? (i(), p("div", Jt, [...c[0] || (c[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), p("div", Qt, [...c[1] || (c[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Zt, [
        k("div", {
          ref_key: "content",
          ref: d
        }, [
          g(u.$slots, "content", {}, () => [
            g(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), eo = /* @__PURE__ */ h({
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
      let d = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), d;
    });
    return (d, r) => (i(), p("div", {
      class: S(["t-switch", { on: o.modelValue }]),
      style: T(l.value),
      onClick: n
    }, [...r[0] || (r[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ v(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const t = e, o = ue("tabsState"), s = w(() => o.active.value === t.value), n = () => {
      o.setActive(t.value);
    };
    return (l, d) => (i(), p("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      U(Q, {
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
}), so = /* @__PURE__ */ v(oo, [["__scopeId", "data-v-f810d905"]]), no = /* @__PURE__ */ h({
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
    const o = e, s = t, n = m("0px"), l = m(), d = w(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    });
    ie("tabsState", {
      active: w(() => o.modelValue),
      color: d.value,
      size: o.size,
      variant: o.variant,
      setActive: (u) => {
        s("update:modelValue", u);
      }
    });
    const r = () => {
      requestAnimationFrame(() => {
        const u = l.value?.querySelector(".active");
        if (u)
          if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
            const c = u.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, y = u.offsetWidth / 2;
            n.value = c + y - o.border / 2 + "px";
          } else {
            const c = u.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, y = u.offsetHeight / 2;
            n.value = c + y - o.border / 2 + "px";
          }
      });
    };
    return G(async () => {
      await ae(), r();
    }), X(() => o.modelValue, async () => {
      await ae(), r();
    }), (u, c) => (i(), p("ul", {
      ref_key: "container",
      ref: l,
      class: S(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: T({ "--color": d.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ro = /* @__PURE__ */ v(no, [["__scopeId", "data-v-82e77e4e"]]), ao = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (i(), C(ye, null, {
      default: P(() => [
        U(J, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), lo = /* @__PURE__ */ v(ao, [["__scopeId", "data-v-1436aa9f"]]), co = { key: 0 }, io = {
  key: 0,
  class: "t-checkbox-label"
}, uo = /* @__PURE__ */ h({
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
    }), l = w(() => o.multiple ? o.modelValue.includes(o.value) : o.value === void 0 ? o.modelValue : o.modelValue == o.value), d = () => {
      if (o.multiple) {
        let r = o.modelValue;
        o.modelValue.includes(o.value) ? r.splice(r.indexOf(o.value), 1) : r.push(o.value), s("update:modelValue", r);
      } else o.value === void 0 ? s("update:modelValue", !o.modelValue) : s("update:modelValue", o.value);
    };
    return (r, u) => (i(), p("div", {
      class: S(["t-checkbox", { active: l.value }]),
      style: T(n.value),
      onClick: d
    }, [
      k("div", {
        class: S(`t-checkbox-${r.type}`)
      }, [
        r.type == "radio" ? (i(), p("div", co)) : E("", !0),
        r.type == "check" ? g(r.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      g(r.$slots, "label", {}, () => [
        r.label ? (i(), p("span", io, R(o.label), 1)) : E("", !0)
      ], !0)
    ], 6));
  }
}), po = /* @__PURE__ */ v(uo, [["__scopeId", "data-v-0e13abc3"]]), fo = /* @__PURE__ */ h({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = ve();
    return (o, s) => (i(), p("div", {
      class: "t-keyboard",
      style: T({ "--height": V(t) + "px" })
    }, null, 4));
  }
}), mo = /* @__PURE__ */ v(fo, [["__scopeId", "data-v-5d3fa1da"]]), vo = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-skeleton",
      style: T(o.value)
    }, null, 4));
  }
}), yo = /* @__PURE__ */ v(vo, [["__scopeId", "data-v-877bbdb5"]]), _o = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-ripple",
      style: T(o.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ v(_o, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
  install: (e) => {
    xe(), e.component("t-app", Ee), e.component("t-screen", _e), e.component("t-swipe-screen", vt), e.component("t-cable", nt), e.component("t-toolbar", _t), e.component("t-content", ye), e.component("t-card", rt), e.component("t-refresher", ut), e.component("t-button", Q), e.component("t-back-button", bt), e.component("t-present", M), e.component("t-text", oe), e.component("t-sheet", wt), e.component("t-gesture-indicator", ge), e.component("t-input", It), e.component("t-textarea", Ct), e.component("t-rich-text", At), e.component("t-grid", Ot), e.component("t-grid-item", Mt), e.component("t-divider", Ft), e.component("t-toggle-password", Gt), e.component("t-loading-icon", J), e.component("t-alert", pe), e.component("t-avatar", jt), e.component("t-collapse", Yt), e.component("t-toast", me), e.component("t-switch", to), e.component("t-tab", so), e.component("t-tabs", ro), e.component("t-loading-app", lo), e.component("t-checkbox", po), e.component("t-keyboard", mo), e.component("t-skeleton", yo), e.component("t-ripple", go);
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
  Fe as presentController,
  x as screenController,
  ve as useKeyboard
};
