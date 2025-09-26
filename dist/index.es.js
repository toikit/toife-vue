import { createElementBlock as d, openBlock as i, renderSlot as g, defineComponent as h, ref as m, computed as T, reactive as le, watch as X, onMounted as G, Fragment as N, withDirectives as W, createCommentVNode as E, normalizeStyle as w, normalizeClass as S, vShow as H, createElementVNode as k, createVNode as U, createBlock as V, withCtx as P, toDisplayString as A, renderList as F, createTextVNode as q, createApp as j, h as K, provide as ce, unref as C, onUnmounted as se, resolveDynamicComponent as ge, markRaw as be, inject as ie, useAttrs as he, nextTick as ke } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRouter as ue, useRoute as $e } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), Te = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, xe = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && Te();
  });
}, y = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of o)
    t[s] = r;
  return t;
}, Se = {}, ze = { class: "t-app" };
function Ie(e, o) {
  return i(), d("div", ze, [
    g(e.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ y(Se, [["render", Ie]]), Be = /* @__PURE__ */ h({
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
    const s = m(0), r = m(!1), l = m(), u = m(), a = e, f = t, c = T(() => r.value || a.keepalive), v = le({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), n = (p) => {
      a.backdrop ? p?.backdropOpacity && (v["--t-present-backdrop-opacity"] = p.backdropOpacity) : v["--t-present-backdrop-opacity"] = "0", p?.transition && (v["--t-present-transition"] = p.transition, v["--t-present-transition"] = p.transition), p?.contentTransform && (v["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (v["--t-present-content-opacity"] = p.contentOpacity);
    }, _ = () => {
      n({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, b = () => {
      let p = "0px", O = "1";
      a.placement == "bottom" || a.placement == "right" ? p = "100%" : a.placement == "top" || a.placement == "left" ? p = "-100%" : a.placement == "center" && (p = "0px", O = "0"), n({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: O,
        backdropOpacity: "0"
      });
    };
    X(() => a.visible, () => {
      a.visible ? (r.value = !0, s.value = He.getNewIndex(), setTimeout(() => {
        _();
      }, 50)) : (b(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: n,
      open: _,
      close: b
    });
    const $ = (p) => {
      p.preventDefault(), f("dismiss", "backdrop");
    };
    return G(() => {
      a.visible ? _() : b();
    }), (p, O) => (i(), d(N, null, [
      c.value ? W((i(), d("div", {
        key: 0,
        class: S(["t-present", [{ [p.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: u,
        style: w([v, { zIndex: s.value }, a.style])
      }, [
        g(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, r.value]
      ]) : E("", !0),
      c.value ? W((i(), d("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: $,
        ref_key: "backdrop",
        ref: l,
        style: w([v, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [H, r.value]
      ]) : E("", !0)
    ], 64));
  }
}), M = /* @__PURE__ */ y(Be, [["__scopeId", "data-v-1b25059f"]]), Ve = /* @__PURE__ */ h({
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
    return (o, t) => (i(), d("span", {
      class: "t-loading-icon",
      style: w({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), J = /* @__PURE__ */ y(Ve, [["__scopeId", "data-v-7c463303"]]), Ce = { class: "t-button-content" }, Pe = {
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
    const o = e, t = T(() => {
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
    return (s, r) => (i(), d("button", {
      class: S(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: w(t.value)
    }, [
      W(k("span", Ce, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !o.loading]
      ]),
      o.loading ? (i(), d("span", Pe, [
        U(J, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), Q = /* @__PURE__ */ y(Re, [["__scopeId", "data-v-185a9e49"]]), Ae = {
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
  setup(e, { expose: o, emit: t }) {
    const s = e, r = m(!1), l = t, u = m(), a = m(!1), f = () => {
      r.value = !0;
    }, c = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, v = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: f
    }), (n, _) => (i(), V(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: v
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          g(n.$slots, "header", {}, () => [
            s.title ? (i(), d("div", Ae, A(s.title), 1)) : E("", !0)
          ], !0),
          g(n.$slots, "content", {}, () => [
            k("div", De, A(s.message), 1)
          ], !0),
          g(n.$slots, "footer", {}, () => [
            k("div", Xe, [
              (i(!0), d(N, null, F(s.actions, (b) => (i(), V(Q, {
                color: b.color,
                variant: b.variant,
                onClick: ($) => c(b)
              }, {
                default: P(() => [
                  q(A(b.text), 1)
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
}), de = /* @__PURE__ */ y(Oe, [["__scopeId", "data-v-05d0c578"]]), $o = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = m();
      t.appendChild(s);
      const l = j({
        render() {
          return K(de, {
            ...e,
            ref: r,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: a });
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
    const s = e, r = m(!1), l = t, u = m(), a = m(!1), f = () => {
      r.value = !0;
    }, c = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, v = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return X(() => s.visible, (n) => {
      n ? f() : close();
    }), o({
      open: f,
      close
    }), (n, _) => (i(), V(M, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: v
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          (i(!0), d(N, null, F(s.actions, (b) => (i(), d("div", null, [
            (i(!0), d(N, null, F(b, ($) => (i(), V(Q, {
              color: $.color,
              size: $.size,
              variant: $.variant,
              onClick: (p) => c($),
              block: ""
            }, {
              default: P(() => [
                q(A($.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), qe = /* @__PURE__ */ y(Ne, [["__scopeId", "data-v-844fb240"]]), wo = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = m();
      t.appendChild(s);
      const l = j({
        render() {
          return K(qe, {
            ...e,
            ref: r,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Le = { class: "t-loading" }, Me = /* @__PURE__ */ h({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = m(!1);
    return o({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (a, f) => (i(), V(M, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: P(() => [
        k("div", Le, [
          g(a.$slots, "default", {}, () => [
            U(J, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ y(Me, [["__scopeId", "data-v-8f84c14e"]]), To = (e = {}) => {
  const o = m(), t = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        t && (r = document.createElement("div"), t.appendChild(r), s = j({
          render() {
            return K(We, {
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
}, ae = m(1e3), He = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, D = le([]), Z = m(!0), I = m(!1), R = m(-1), z = T(() => D[R.value]), L = T(() => D[R.value + 1] || void 0), B = T(() => D[D.length - 2]), pe = T(() => !I.value && Z.value && B.value), Y = {
  reset() {
    I.value = !0;
    const e = z.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!pe.value) return;
    const o = window.innerWidth, t = e / o * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t}))) scale(${0.5 + 0.5 / 100 * t}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * t}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ne(), I.value = !1, R.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, e && e();
      return;
    }
    I.value = !0;
    let o = L.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        I.value = !1, R.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, ee = {
  reset() {
    I.value = !0;
    const e = z.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    const o = window.innerWidth, t = e / o * 100, s = z.value.target, r = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ne(), I.value = !1, R.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, e && e();
      return;
    }
    I.value = !0;
    let o = L.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        I.value = !1, R.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Fe = (e) => {
  D.push(e);
}, Ge = (e, o) => {
  D[e].target = o;
}, ne = (e) => {
  e || D.pop();
}, Ue = () => {
  D.splice(0, D.length);
}, je = () => {
  Z.value = !1;
}, Ke = () => {
  Z.value = !0;
}, Je = (e, o) => {
  e == "scale" && Y.next(o), e == "transform" && ee.next(o);
}, Qe = (e, o) => {
  e == "scale" && Y.back(o), e == "transform" && ee.back(o);
}, Ze = (e, o) => {
  e == "scale" && Y.move(o), e == "transform" && ee.move(o);
}, Ye = (e) => {
  e == "scale" && Y.reset(), e == "transform" && ee.reset();
}, x = {
  isBusy: I,
  isSwipeable: pe,
  reset: Ye,
  next: Je,
  back: Qe,
  move: Ze,
  screens: D,
  addScreen: Fe,
  addScreenEl: Ge,
  removeScreen: ne,
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
  setup(e, { expose: o, emit: t }) {
    const s = e, r = t, l = m(!1), u = m(!1), a = m(!1), f = () => {
      u.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, c = () => {
      a.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, r("dismiss");
      }, 300);
    };
    X(() => s.visible, (n) => {
      n ? f() : c();
    });
    const v = T(() => {
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
      close: c
    }), (n, _) => u.value ? (i(), d("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: w({ "--space": s.space, ...v.value })
    }, [
      g(n.$slots, "content", {}, () => [
        k("div", et, A(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), fe = /* @__PURE__ */ y(tt, [["__scopeId", "data-v-2802d43f"]]), xo = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const t = document.createElement("div"), s = m();
    o.appendChild(t);
    const r = j({
      render() {
        return K(fe, {
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
}), ot = m(0);
function me() {
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
    const o = e, { height: t } = me();
    return ce("cableState", {
      placement: o.placement
    }), (s, r) => (i(), d("div", {
      class: S(["t-cable", { keyboard: o.keyboard && C(t) > 0, [o.placement]: !0 }]),
      style: w({ "--t-keyboard-height": C(t) + "px", "--t-keyboard-transition": C(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), rt = /* @__PURE__ */ y(st, [["__scopeId", "data-v-6cae224b"]]), nt = /* @__PURE__ */ h({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const o = e, t = T(() => {
      let s;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--background": o.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, r) => (i(), d("div", {
      class: "t-card",
      style: w(t.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, o) {
  return i(), d("div", lt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ve = /* @__PURE__ */ y(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), it = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: o }) {
    const t = o, s = e, r = m(0), l = m(!1), u = m();
    let a, f = !1;
    const c = () => {
      l.value = !1, r.value = 0, a && a.cancel(), f = !1;
    }, v = () => {
      f = !0, l.value = !0, r.value = s.threshold, t("refresh", c);
    }, n = () => {
      r.value = 0, l.value = !1, f = !1, t("cancel");
    };
    return X(() => u.value, () => {
      a && a.destroy();
      let _ = u.value.closest(".t-content");
      _ && (a = re(_, {
        options: {
          minDist: 60
        },
        down() {
          l.value || f || t("start");
        },
        move({ deltaY: b, initialDirection: $ }) {
          if (l.value || f || $ != "down") return;
          if (s.variant == "max" && b >= s.threshold) {
            v();
            return;
          }
          const p = b < 0 ? 0 : b;
          r.value = p, t("move", p);
        },
        up({ deltaY: b, initialDirection: $ }) {
          l.value || f || $ != "down" || (s.variant == "up" && b >= s.threshold ? v() : n());
        },
        cancel() {
          l.value || f || n();
        }
      }, {
        passive: !1
      }));
    }), se(() => {
      a && a.destroy();
    }), (_, b) => W((i(), d("div", {
      class: S(["t-refresher", { safe: _.safe }]),
      ref_key: "container",
      ref: u
    }, [
      g(_.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [H, r.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ y(it, [["__scopeId", "data-v-1d52477a"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, o) {
  return i(), d("div", pt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ y(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ h({
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
    const u = r.router || ue(), a = r.route || $e(), f = u.getRoutes();
    for (let n of f)
      t[n.name] = n.component || n.components;
    const c = (n) => {
      n && x.addScreen({
        name: n,
        target: null,
        component: be(t[n] || null)
      });
    }, v = (n, _) => {
      !_ || x.screens[n].target || (x.addScreenEl(n, _.$el), x.nextScreen && x.next(r.variant, () => {
        s("change");
      }));
    };
    return X(() => a.name, (n, _) => {
      n != x.currentScreen.value?.name && (x.lastScreen.value?.name == n ? x.back(r.variant, () => {
        s("change");
      }) : c(a.name));
    }), G(() => {
      c(a.name), l = re(document.body, {
        beforeEvent(n) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: n }) {
          x.lastScreen.value && n == "right" && u.back();
        },
        move({ deltaX: n, initialDirection: _ }) {
          _ == "right" && x.move(r.variant, n);
        },
        up({ deltaX: n, initialDirection: _ }) {
          if (_ != "right") {
            x.reset(r.variant);
            return;
          }
          const b = window.innerWidth;
          n / b * 100 >= 50 ? u.back() : x.reset(r.variant);
        },
        cancel() {
          x.reset(r.variant);
        }
      });
    }), se(() => {
      l && l.destroy(), x.removeAllScreen();
    }), (n, _) => (i(), d(N, null, [
      (i(!0), d(N, null, F(C(x).screens, (b, $) => (i(), V(ye, {
        ref_for: !0,
        ref: (p) => v($, p),
        style: w({ zIndex: $ + ($ == C(x).screens.length - 1 ? 2 : 1) }),
        key: $
      }, {
        default: P(() => [
          (i(), V(ge(b.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: C(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), vt = /* @__PURE__ */ y(mt, [["__scopeId", "data-v-23e0cfda"]]), yt = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e, t = ie("cableState"), s = T(() => o?.placement || t?.placement);
    return (r, l) => (i(), d("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: w({ "--t-size-toolbar": o.size })
    }, [
      k("div", null, [
        g(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), _t = /* @__PURE__ */ y(yt, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const o = e, t = he(), s = o.router || ue(), r = (l) => {
      if (t.onBack) {
        t.onBack(l);
        return;
      }
      x.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, u) => l.to || C(x).lastScreen ? (i(), d("button", {
      key: 0,
      class: "t-back-button",
      onClick: r
    }, [
      g(l.$slots, "default", {}, () => [
        u[0] || (u[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), bt = /* @__PURE__ */ y(gt, [["__scopeId", "data-v-dcf9d363"]]), ht = /* @__PURE__ */ h({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = T(() => {
      let s, r = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (i(), d("span", {
      class: "t-text",
      style: w(t.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), oe = /* @__PURE__ */ y(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, t) => (i(), d("div", {
      class: S(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), _e = /* @__PURE__ */ y(kt, [["__scopeId", "data-v-ed8f7308"]]), $t = /* @__PURE__ */ h({
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
    const t = e, s = o, r = m(), l = m(), u = m(!1);
    let a = null;
    const f = T(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), c = (n) => {
      s("dismiss", n);
    }, v = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return X(() => r.value, (n) => {
      n && (a = re(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(_) {
          return !(u.value || !t.gesture || t.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: _ }) {
          v(), _ == f.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if ($ != f.value) return;
          let p = 0;
          t.placement == "bottom" || t.placement == "top" ? p = _ : p = b, t.placement == "bottom" && (p = _ > 0 ? _ : 0), t.placement == "top" && (p = _ < 0 ? _ : 0), t.placement == "left" && (p = b < 0 ? b : 0), t.placement == "right" && (p = b > 0 ? b : 0), (t.placement == "bottom" && (p >= 10 || this.isMoving) || t.placement == "top" && (p <= -10 || this.isMoving) || t.placement == "left" && (p <= -10 || this.isMoving) || t.placement == "right" && (p >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: p + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: _, deltaX: b, initialDirection: $ }) {
          if (this.isMoving = !1, v(), $ != f.value) {
            l.value.open();
            return;
          }
          let p, O, te;
          t.placement == "bottom" || t.placement == "top" ? (p = r.value.offsetHeight, te = _) : (p = r.value.offsetWidth, te = b), O = te / p * 100, O > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, v(), l.value.open();
        }
      }));
    }), se(() => {
      a && a.destroy();
    }), (n, _) => (i(), V(M, {
      ref_key: "present",
      ref: l,
      class: S(t.class),
      placement: t.placement,
      backdrop: n.backdrop,
      visible: t.visible,
      keepalive: t.keepalive,
      onDismiss: c,
      style: w(t.style)
    }, {
      default: P(() => [
        t.gesture && t.indicator && t.placement != "center" ? (i(), V(_e, {
          key: 0,
          placement: t.placement
        }, null, 8, ["placement"])) : E("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: t.fullscreen, [t.placement]: !0, rounded: n.rounded, radius: t.radius }]),
          style: w({ "--background": t.background }),
          ref_key: "sheet",
          ref: r
        }, [
          g(n.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ y($t, [["__scopeId", "data-v-6f7063f0"]]), Tt = { class: "t-input-label" }, xt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ h({
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
    const t = e, s = o, r = m(!1), l = T(() => !(t.modelValue === "" || t.modelValue === null || t.modelValue === void 0)), u = (c) => {
      s("update:modelValue", c.target.value);
    }, a = () => {
      r.value = !0;
    }, f = () => {
      r.value = !1;
    };
    return (c, v) => (i(), d("div", {
      class: S(["t-input", { rounded: c.rounded, ["size-" + c.size]: !0, ["variant-" + c.variant]: !0, focus: r.value, "has-value": l.value }])
    }, [
      k("label", null, [
        k("span", Tt, A(c.label), 1),
        k("div", xt, [
          g(c.$slots, "start", {}, void 0, !0),
          k("input", {
            type: c.type,
            placeholder: c.variant == "default" ? c.placeholder : "",
            value: c.modelValue,
            onInput: u,
            onFocus: a,
            onBlur: f
          }, null, 40, St),
          g(c.$slots, "end", {}, void 0, !0)
        ])
      ]),
      c.error ? (i(), V(oe, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          q(A(c.error), 1)
        ]),
        _: 1
      })) : c.help ? (i(), V(oe, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          q(A(c.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ y(zt, [["__scopeId", "data-v-fd2173ab"]]), Et = {};
function Bt(e, o) {
  return i(), d("textarea");
}
const Vt = /* @__PURE__ */ y(Et, [["render", Bt]]), Ct = {};
function Pt(e, o) {
  return i(), d("div");
}
const Rt = /* @__PURE__ */ y(Ct, [["render", Pt]]), At = {}, Dt = { class: "t-grid" };
function Xt(e, o) {
  return i(), d("div", Dt);
}
const Ot = /* @__PURE__ */ y(At, [["render", Xt]]), Nt = {}, qt = { class: "t-grid-item" };
function Lt(e, o) {
  return i(), d("div", qt);
}
const Mt = /* @__PURE__ */ y(Nt, [["render", Lt]]), Wt = /* @__PURE__ */ h({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (t, s) => (i(), d("div", {
      class: S(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ y(Wt, [["__scopeId", "data-v-47ee8991"]]), Ft = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = m(!1), l = m(), u = T(() => {
      let c = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (c = `var(--t-color-status-${t.color})`), {
        "--color": c
      };
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    G(() => {
      let c = a();
      c && (r.value = c.type != "password", s("change", r.value));
    });
    const f = () => {
      let c = a();
      c && (r.value = !r.value, r.value ? c.type = "text" : c.type = "password", s("change", r.value));
    };
    return (c, v) => (i(), d("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: w(u.value),
      onClick: f
    }, [
      r.value ? g(c.$slots, "on", { key: 0 }, () => [
        v[0] || (v[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      r.value ? E("", !0) : g(c.$slots, "off", { key: 1 }, () => [
        v[1] || (v[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ y(Ft, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = T(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, r) => (i(), d("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: w({ "--size": t.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ y(Ut, [["__scopeId", "data-v-24384c2f"]]), Kt = { class: "t-collapse-title" }, Jt = {
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
  setup(e, { emit: o }) {
    const t = e, s = o, r = m(!1), l = m(""), u = m(), a = () => {
      r.value = !r.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (f, c) => (i(), d("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: w({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(f.$slots, "icon"),
        k("div", Kt, [
          g(f.$slots, "title", {}, () => [
            q(A(t.title), 1)
          ])
        ]),
        g(f.$slots, "toggle", {}, () => [
          r.value ? (i(), d("div", Jt, [...c[0] || (c[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), d("div", Qt, [...c[1] || (c[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Zt, [
        k("div", {
          ref_key: "content",
          ref: u
        }, [
          g(f.$slots, "content", {}, () => [
            g(f.$slots, "default")
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
  setup(e, { emit: o }) {
    const t = e, s = o, r = () => {
      s("update:modelValue", !t.modelValue);
    }, l = T(() => {
      let u = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (u = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), u;
    });
    return (u, a) => (i(), d("div", {
      class: S(["t-switch", { on: t.modelValue }]),
      style: w(l.value),
      onClick: r
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ y(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, t = ie("tabsState"), s = T(() => t.activeValue.value === o.value), r = () => {
      t.setValue(o.value);
    };
    return X(() => s.value, async (l) => {
      l && (await ke(), t.actived());
    }), (l, u) => (i(), d("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      U(Q, {
        variant: "text",
        onClick: r,
        size: C(t).size,
        color: s.value && C(t).variant == "text" ? C(t).color : void 0
      }, {
        default: P(() => [
          g(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), so = /* @__PURE__ */ y(oo, [["__scopeId", "data-v-2d9c86bb"]]), ro = /* @__PURE__ */ h({
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
    const t = e, s = o, r = m("0px"), l = m(), u = m(""), a = T(() => {
      let c = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(c) && (c = `var(--t-color-status-${c})`), c;
    }), f = () => {
      if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
        let c = l.value.querySelector(".active");
        if (c) {
          let v = c.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, n = c.offsetWidth / 2;
          r.value = v + n - t.border / 2 + "px";
        }
      } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
        let c = l.value.querySelector(".active");
        if (c) {
          let v = c.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, n = c.offsetHeight / 2;
          r.value = v + n - t.border / 2 + "px";
        }
      }
    };
    return ce("tabsState", {
      activeValue: u,
      color: a.value,
      size: t.size,
      variant: t.variant,
      setValue: (c) => {
        s("update:modelValue", c);
      },
      actived() {
        f();
      }
    }), X(() => t.modelValue, async () => {
      u.value = t.modelValue;
    }), G(() => {
      u.value = t.modelValue;
    }), (c, v) => (i(), d("ul", {
      ref_key: "container",
      ref: l,
      class: S(["t-tabs", { [c.placement]: !0, [c.variant]: !0 }]),
      style: w({ "--color": a.value, "--transform": r.value, "--border": c.border + "px" })
    }, [
      g(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), no = /* @__PURE__ */ y(ro, [["__scopeId", "data-v-4fd2c700"]]), ao = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(e) {
    return (o, t) => (i(), V(ve, null, {
      default: P(() => [
        U(J, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), lo = /* @__PURE__ */ y(ao, [["__scopeId", "data-v-1436aa9f"]]), co = { key: 0 }, io = {
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
  setup(e, { emit: o }) {
    const t = e, s = o, r = T(() => {
      let a = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (a = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), a;
    }), l = T(() => t.multiple ? t.modelValue.includes(t.value) : t.value === void 0 ? t.modelValue : t.modelValue == t.value), u = () => {
      if (t.multiple) {
        let a = t.modelValue;
        t.modelValue.includes(t.value) ? a.splice(a.indexOf(t.value), 1) : a.push(t.value), s("update:modelValue", a);
      } else t.value === void 0 ? s("update:modelValue", !t.modelValue) : s("update:modelValue", t.value);
    };
    return (a, f) => (i(), d("div", {
      class: S(["t-checkbox", { active: l.value }]),
      style: w(r.value),
      onClick: u
    }, [
      k("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (i(), d("div", co)) : E("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          f[0] || (f[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      g(a.$slots, "label", {}, () => [
        a.label ? (i(), d("span", io, A(t.label), 1)) : E("", !0)
      ], !0)
    ], 6));
  }
}), po = /* @__PURE__ */ y(uo, [["__scopeId", "data-v-0e13abc3"]]), fo = /* @__PURE__ */ h({
  __name: "t-keyboard",
  setup(e) {
    const { height: o } = me();
    return (t, s) => (i(), d("div", {
      class: "t-keyboard",
      style: w({ "--height": C(o) + "px" })
    }, null, 4));
  }
}), mo = /* @__PURE__ */ y(fo, [["__scopeId", "data-v-5d3fa1da"]]), vo = /* @__PURE__ */ h({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(e) {
    const o = e, t = T(() => ({
      "--width": o.width,
      "--height": o.height,
      "--radius": o.radius
    }));
    return (s, r) => (i(), d("div", {
      class: "t-skeleton",
      style: w(t.value)
    }, null, 4));
  }
}), yo = /* @__PURE__ */ y(vo, [["__scopeId", "data-v-877bbdb5"]]), _o = /* @__PURE__ */ h({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const o = e, t = T(() => {
      let s = {};
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--color": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--color": o.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, r) => (i(), d("div", {
      class: "t-ripple",
      style: w(t.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ y(_o, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
  install: (e) => {
    xe(), e.component("t-app", Ee), e.component("t-screen", ye), e.component("t-swipe-screen", vt), e.component("t-cable", rt), e.component("t-toolbar", _t), e.component("t-content", ve), e.component("t-card", nt), e.component("t-refresher", ut), e.component("t-button", Q), e.component("t-back-button", bt), e.component("t-present", M), e.component("t-text", oe), e.component("t-sheet", wt), e.component("t-gesture-indicator", _e), e.component("t-input", It), e.component("t-textarea", Vt), e.component("t-rich-text", Rt), e.component("t-grid", Ot), e.component("t-grid-item", Mt), e.component("t-divider", Ht), e.component("t-toggle-password", Gt), e.component("t-loading-icon", J), e.component("t-alert", de), e.component("t-avatar", jt), e.component("t-collapse", Yt), e.component("t-toast", fe), e.component("t-switch", to), e.component("t-tab", so), e.component("t-tabs", no), e.component("t-loading-app", lo), e.component("t-checkbox", po), e.component("t-keyboard", mo), e.component("t-skeleton", yo), e.component("t-ripple", go);
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
  x as screenController,
  me as useKeyboard
};
