import { createElementBlock as p, openBlock as i, renderSlot as y, defineComponent as g, ref as v, computed as $, reactive as ce, watch as O, Fragment as X, withDirectives as W, createCommentVNode as I, normalizeStyle as k, normalizeClass as T, vShow as H, createElementVNode as h, createVNode as U, createBlock as C, withCtx as P, toDisplayString as R, renderList as G, createTextVNode as N, createApp as j, h as F, provide as ie, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRoute as $e, useRouter as de } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), xe = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Te = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && xe();
  });
}, _ = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of o)
    t[s] = r;
  return t;
}, Se = {}, ze = { class: "t-app" };
function Ie(e, o) {
  return i(), p("div", ze, [
    y(e.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ _(Se, [["render", Ie]]), Be = /* @__PURE__ */ g({
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
    const s = v(0), r = v(!1), n = v(), d = v(), a = e, u = t, c = $(() => r.value || a.keepalive), f = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (m) => {
      a.backdrop ? m?.backdropOpacity && (f["--t-present-backdrop-opacity"] = m.backdropOpacity) : f["--t-present-backdrop-opacity"] = "0", m?.transition && (f["--t-present-transition"] = m.transition, f["--t-present-transition"] = m.transition), m?.contentTransform && (f["--t-present-content-transform"] = m.contentTransform), m?.contentOpacity && (f["--t-present-content-opacity"] = m.contentOpacity);
    }, b = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, w = () => {
      let m = "0px", D = "1";
      a.placement == "bottom" || a.placement == "right" ? m = "100%" : a.placement == "top" || a.placement == "left" ? m = "-100%" : a.placement == "center" && (m = "0px", D = "0"), l({
        contentTransform: m,
        transition: "0.2s",
        contentOpacity: D,
        backdropOpacity: "0"
      });
    };
    O(() => a.visible, () => {
      a.visible ? (r.value = !0, s.value = He.getNewIndex(), setTimeout(() => {
        b();
      }, 50)) : (w(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: l,
      open: b,
      close: w
    });
    const E = (m) => {
      m.preventDefault(), u("dismiss", "backdrop");
    };
    return w(), (m, D) => (i(), p(X, null, [
      c.value ? W((i(), p("div", {
        key: 0,
        class: T(["t-present", [{ [m.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: k([f, { zIndex: s.value }, a.style])
      }, [
        y(m.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, r.value]
      ]) : I("", !0),
      c.value ? W((i(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: E,
        ref_key: "backdrop",
        ref: n,
        style: k([f, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [H, r.value]
      ]) : I("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ _(Be, [["__scopeId", "data-v-8eb6e6e4"]]), Ce = /* @__PURE__ */ g({
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
    return (o, t) => (i(), p("span", {
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
}), K = /* @__PURE__ */ _(Ce, [["__scopeId", "data-v-7c463303"]]), Ve = { class: "t-button-content" }, Pe = {
  key: 0,
  class: "loader"
}, Ae = /* @__PURE__ */ g({
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
    const o = e, t = $(() => {
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
    return (s, r) => (i(), p("button", {
      class: T(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: k(t.value)
    }, [
      W(h("span", Ve, [
        y(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !o.loading]
      ]),
      o.loading ? (i(), p("span", Pe, [
        U(K, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ _(Ae, [["__scopeId", "data-v-185a9e49"]]), Re = {
  key: 0,
  class: "t-alert-header"
}, Me = { class: "t-alert-content" }, De = { class: "t-alert-footer" }, Xe = /* @__PURE__ */ g({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = v(!1), n = t, d = v(), a = v(!1), u = () => {
      r.value = !0;
    }, c = (l) => {
      r.value = !1, l.handler && l.handler(), n("dismiss", "choose", l?.data);
    }, f = (l) => {
      s.dismiss && s.dismiss.includes(l) ? (r.value = !1, n("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: u
    }), (l, b) => (i(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: f
    }, {
      default: P(() => [
        h("div", {
          class: T(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          y(l.$slots, "header", {}, () => [
            s.title ? (i(), p("div", Re, R(s.title), 1)) : I("", !0)
          ], !0),
          y(l.$slots, "content", {}, () => [
            h("div", Me, R(s.message), 1)
          ], !0),
          y(l.$slots, "footer", {}, () => [
            h("div", De, [
              (i(!0), p(X, null, G(s.actions, (w) => (i(), C(J, {
                color: w.color,
                variant: w.variant,
                onClick: (E) => c(w)
              }, {
                default: P(() => [
                  N(R(w.text), 1)
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
}), pe = /* @__PURE__ */ _(Xe, [["__scopeId", "data-v-05d0c578"]]), $o = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = v();
      t.appendChild(s);
      const n = j({
        render() {
          return F(pe, {
            ...e,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                n.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      n.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Oe = /* @__PURE__ */ g({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const s = e, r = v(!1), n = t, d = v(), a = v(!1), u = () => {
      r.value = !0;
    }, c = (l) => {
      r.value = !1, l.handler && l.handler(), n("dismiss", "choose", l?.data);
    }, f = (l) => {
      s.dismiss && s.dismiss.includes(l) ? (r.value = !1, n("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return O(() => s.visible, (l) => {
      l ? u() : close();
    }), o({
      open: u,
      close
    }), (l, b) => (i(), C(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: f
    }, {
      default: P(() => [
        h("div", {
          class: T(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (i(!0), p(X, null, G(s.actions, (w) => (i(), p("div", null, [
            (i(!0), p(X, null, G(w, (E) => (i(), C(J, {
              color: E.color,
              size: E.size,
              variant: E.variant,
              onClick: (m) => c(E),
              block: ""
            }, {
              default: P(() => [
                N(R(E.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ne = /* @__PURE__ */ _(Oe, [["__scopeId", "data-v-e693a02a"]]), wo = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const s = document.createElement("div"), r = v();
      t.appendChild(s);
      const n = j({
        render() {
          return F(Ne, {
            ...e,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                n.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      n.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), qe = { class: "t-loading" }, Le = /* @__PURE__ */ g({
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
    }), (a, u) => (i(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: P(() => [
        h("div", qe, [
          y(a.$slots, "default", {}, () => [
            U(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ _(Le, [["__scopeId", "data-v-8f84c14e"]]), xo = (e = {}) => {
  const o = v(), t = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((n) => {
        t && (r = document.createElement("div"), t.appendChild(r), s = j({
          render() {
            return F(We, {
              ...e,
              ref: o
            });
          }
        }), s.mount(r), setTimeout(() => {
          o.value?.open?.(), n(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((n) => {
        o.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), r?.remove?.(), n(!0);
        }, 300);
      });
    }
  };
}, ae = v(1e3), He = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, M = ce([]), Q = v(!0), z = v(!1), A = v(-1), S = $(() => M[A.value]), q = $(() => M[A.value + 1] || void 0), B = $(() => M[M.length - 2]), fe = $(() => !z.value && Q.value && B.value), Z = {
  reset() {
    z.value = !0;
    const e = S.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      z.value = !1;
    }, 400);
  },
  move(e) {
    if (!fe.value) return;
    const o = window.innerWidth, t = e / o * 100, s = S.value.target, r = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t}))) scale(${0.5 + 0.5 / 100 * t}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * t}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (S.value.target.style.transition = "transform 0.35s ease", S.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), z.value = !0, setTimeout(() => {
      ne(), z.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!q.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    z.value = !0;
    let o = q.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), S.value && (S.value.target.style.transitionOrigin = "left center", S.value.target.style.transition = "transform 0.35s ease", S.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
        z.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Y = {
  reset() {
    z.value = !0;
    const e = S.value.target, o = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      z.value = !1;
    }, 400);
  },
  move(e) {
    const o = window.innerWidth, t = e / o * 100, s = S.value.target, r = B.value.target;
    e > 15 && e <= o && (e = e > 0 ? e : 0, s.style.transition = "transform 0s ease", s.style.transform = `translateX(${e}px)`, r.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), r.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${t})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * t}`));
  },
  back(e) {
    B.value && (S.value.target.style.transition = "transform 0.35s ease", S.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), z.value = !0, setTimeout(() => {
      ne(), z.value = !1, A.value -= 1, e && e();
    }, 400));
  },
  next(e) {
    if (!q.value) return;
    if (A.value == -1) {
      A.value += 1, e && e();
      return;
    }
    z.value = !0;
    let o = q.value.target;
    o.style.transform = "translateX(var(--t-app-width))", o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), S.value && (S.value.target.style.transitionOrigin = "left center", S.value.target.style.transition = "transform 0.35s ease", S.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1))"), setTimeout(() => {
        z.value = !1, A.value += 1, e && e();
      }, 400);
    }, 100);
  }
}, Ge = (e) => {
  M.push(e);
}, Ue = (e, o) => {
  M[e].target = o;
}, ne = (e) => {
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
  isBusy: z,
  isSwipeable: fe,
  reset: Ye,
  next: Je,
  back: Qe,
  move: Ze,
  screens: M,
  addScreen: Ge,
  addScreenEl: Ue,
  removeScreen: ne,
  removeAllScreen: je,
  lockSwipe: Fe,
  unlockSwipe: Ke,
  swipeable: Q,
  currentScreen: S,
  lastScreen: B,
  nextScreen: q
}, et = { class: "t-toast-content" }, tt = /* @__PURE__ */ g({
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
    const s = e, r = t, n = v(!1), d = v(!1), a = v(!1), u = () => {
      d.value = !0, a.value = !1, setTimeout(() => {
        n.value = !0;
      }, 10);
    }, c = () => {
      a.value = !0, setTimeout(() => {
        d.value = !1, n.value = !1, r("dismiss");
      }, 300);
    };
    O(() => s.visible, (l) => {
      l ? u() : c();
    });
    const f = $(() => {
      let l;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + s.color + "-rgb), 1)"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? l = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), l;
    });
    return o({
      open: u,
      close: c
    }), (l, b) => d.value ? (i(), p("div", {
      key: 0,
      class: T(["t-toast", { [s.placement]: !0, open: n.value, closing: a.value }]),
      style: k({ "--space": s.space, ...f.value })
    }, [
      y(l.$slots, "content", {}, () => [
        h("div", et, R(s.message), 1)
      ], !0)
    ], 6)) : I("", !0);
  }
}), me = /* @__PURE__ */ _(tt, [["__scopeId", "data-v-7011351e"]]), To = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const t = document.createElement("div"), s = v();
    o.appendChild(t);
    const r = j({
      render() {
        return F(me, {
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
}), ot = v(0);
function ve() {
  return {
    height: ot
  };
}
const st = /* @__PURE__ */ g({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const o = e, { height: t } = ve();
    return ie("cableState", {
      placement: o.placement
    }), (s, r) => (i(), p("div", {
      class: T(["t-cable", { keyboard: o.keyboard && V(t) > 0, [o.placement]: !0 }]),
      style: k({ "--t-keyboard-height": V(t) + "px", "--t-keyboard-transition": V(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      y(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), rt = /* @__PURE__ */ _(st, [["__scopeId", "data-v-6cae224b"]]), nt = /* @__PURE__ */ g({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const o = e, t = $(() => {
      let s;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--background": o.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, r) => (i(), p("div", {
      class: "t-card",
      style: k(t.value)
    }, [
      y(s.$slots, "default")
    ], 4));
  }
}), at = {}, lt = { class: "t-content" };
function ct(e, o) {
  return i(), p("div", lt, [
    y(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ _(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), le = 80, it = /* @__PURE__ */ g({
  __name: "t-refresher",
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: o }) {
    const t = o, s = v(0), r = v(!1), n = v();
    let d, a = !1;
    const u = () => {
      r.value = !1, s.value = 0, d && d.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, c = () => {
      a = !0, r.value = !0, s.value = le, t("refresh", u);
    };
    return O(() => n.value, () => {
      d && d.destroy();
      let f = n.value.closest(".t-content");
      f && (d = re(f, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, t("start");
        },
        move({ deltaY: l, initialDirection: b }) {
          r.value || a || b != "down" || (l >= 120 ? (this.isMoving = !1, c()) : (l > 10 || this.isMoving) && (this.isMoving = !0, s.value = l > 0 ? l : 0, t("move", l)));
        },
        up({ deltaY: l, initialDirection: b }) {
          this.isMoving = !1, !(r.value || a) && (l > le && b == "down" ? c() : (s.value = 0, t("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(r.value || a) && (r.value = !1, s.value = 0, t("cancel"));
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      d && d.destroy();
    }), (f, l) => W((i(), p("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: n,
      style: k({ height: `${s.value}px` })
    }, [
      h("img", {
        class: T({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, s.value > 0]
    ]);
  }
}), ut = /* @__PURE__ */ _(it, [["__scopeId", "data-v-abd4007f"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, o) {
  return i(), p("div", pt, [
    y(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ _(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ g({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: { default: de() },
    route: { default: $e() }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    let t = {};
    const s = o, r = e;
    let n;
    const d = r.router.getRoutes();
    for (let c of d)
      t[c.name] = c.components;
    const a = (c) => {
      c && x.addScreen({
        name: c,
        target: null,
        component: he(t[c] || null)
      });
    }, u = (c, f) => {
      !f || x.screens[c].target || (x.addScreenEl(c, f.$el), x.nextScreen && x.next(r.variant, () => {
        s("change");
      }));
    };
    return O(() => r.route.name, (c, f) => {
      c != x.currentScreen.value.name && (x.lastScreen.value?.name == c ? x.back(r.variant, () => {
        s("change");
      }) : a(r.route.name));
    }), se(() => {
      n = re(document.body, {
        beforeEvent(c) {
          return !!x.isSwipeable.value;
        },
        fast({ initialDirection: c }) {
          x.lastScreen.value && c == "right" && r.router.back();
        },
        move({ deltaX: c, initialDirection: f }) {
          f == "right" && x.move(r.variant, c);
        },
        up({ deltaX: c, initialDirection: f }) {
          if (f != "right") {
            x.reset(r.variant);
            return;
          }
          const l = window.innerWidth;
          c / l * 100 >= 50 ? r.router.back() : x.reset(r.variant);
        },
        cancel() {
          x.reset(r.variant);
        }
      });
    }), oe(() => {
      n && n.destroy(), x.removeAllScreen();
    }), a(r.route.name), (c, f) => (i(), p(X, null, [
      (i(!0), p(X, null, G(V(x).screens, (l, b) => (i(), C(ye, {
        ref_for: !0,
        ref: (w) => u(b, w),
        style: k({ zIndex: b + (b == V(x).screens.length - 1 ? 2 : 1) }),
        key: b
      }, {
        default: P(() => [
          (i(), C(be(l.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: k({ zIndex: V(x).screens.length })
      }, null, 4)
    ], 64));
  }
}), vt = /* @__PURE__ */ _(mt, [["__scopeId", "data-v-26b1aa07"]]), _t = /* @__PURE__ */ g({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e, t = ue("cableState"), s = $(() => o?.placement || t?.placement);
    return (r, n) => (i(), p("div", {
      class: T(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: k({ "--t-size-toolbar": o.size })
    }, [
      h("div", null, [
        y(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), yt = /* @__PURE__ */ _(_t, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ g({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const o = e, t = ke(), s = o.router || de(), r = (n) => {
      if (t.onBack) {
        t.onBack(n);
        return;
      }
      x.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (n, d) => n.to || V(x).lastScreen ? (i(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: r
    }, [
      y(n.$slots, "default", {}, () => [
        d[0] || (d[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), bt = /* @__PURE__ */ _(gt, [["__scopeId", "data-v-dcf9d363"]]), ht = /* @__PURE__ */ g({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = $(() => {
      let s, r = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (i(), p("span", {
      class: "t-text",
      style: k(t.value)
    }, [
      y(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ g({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, t) => (i(), p("div", {
      class: T(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ge = /* @__PURE__ */ _(kt, [["__scopeId", "data-v-ed8f7308"]]), $t = /* @__PURE__ */ g({
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
    const t = e, s = o, r = v(), n = v(), d = v(!1);
    let a = null;
    const u = $(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), c = (l) => {
      s("dismiss", l);
    }, f = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return O(() => r.value, (l) => {
      l && (a = re(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(b) {
          return !(d.value || !t.gesture || t.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: b }) {
          f(), b == u.value ? s("dismiss", "gesture") : n.value.open();
        },
        move({ deltaY: b, deltaX: w, initialDirection: E }) {
          if (E != u.value) return;
          let m = 0;
          t.placement == "bottom" || t.placement == "top" ? m = b : m = w, t.placement == "bottom" && (m = b > 0 ? b : 0), t.placement == "top" && (m = b < 0 ? b : 0), t.placement == "left" && (m = w < 0 ? w : 0), t.placement == "right" && (m = w > 0 ? w : 0), (t.placement == "bottom" && (m >= 10 || this.isMoving) || t.placement == "top" && (m <= -10 || this.isMoving) || t.placement == "left" && (m <= -10 || this.isMoving) || t.placement == "right" && (m >= 10 || this.isMoving)) && (this.isMoving = !0, n.value.render({
            contentTransform: m + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: b, deltaX: w, initialDirection: E }) {
          if (this.isMoving = !1, f(), E != u.value) {
            n.value.open();
            return;
          }
          let m, D, ee;
          t.placement == "bottom" || t.placement == "top" ? (m = r.value.offsetHeight, ee = b) : (m = r.value.offsetWidth, ee = w), D = ee / m * 100, D > 50 ? s("dismiss", "gesture") : n.value.open();
        },
        cancel() {
          this.isMoving = !1, f(), n.value.open();
        }
      }));
    }), oe(() => {
      a && a.destroy();
    }), (l, b) => (i(), C(L, {
      ref_key: "present",
      ref: n,
      class: T(t.class),
      placement: t.placement,
      backdrop: l.backdrop,
      visible: t.visible,
      keepalive: t.keepalive,
      onDismiss: c,
      style: k(t.style)
    }, {
      default: P(() => [
        t.gesture && t.indicator && t.placement != "center" ? (i(), C(ge, {
          key: 0,
          placement: t.placement
        }, null, 8, ["placement"])) : I("", !0),
        h("div", {
          class: T(["t-sheet", { fullscreen: t.fullscreen, [t.placement]: !0, rounded: l.rounded, radius: t.radius }]),
          style: k({ "--background": t.background }),
          ref_key: "sheet",
          ref: r
        }, [
          y(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ _($t, [["__scopeId", "data-v-71a5b877"]]), xt = { class: "t-input-label" }, Tt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ g({
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
    const t = e, s = o, r = (n) => {
      s("update:modelValue", n.target.value);
    };
    return (n, d) => (i(), p("div", {
      class: T(["t-input", { rounded: t.rounded, ["size-" + t.size]: !0, ["variant-" + t.variant]: !0 }])
    }, [
      h("label", null, [
        h("span", xt, R(n.label), 1),
        h("div", Tt, [
          y(n.$slots, "start", {}, void 0, !0),
          h("input", {
            type: n.type,
            placeholder: n.placeholder,
            value: n.modelValue,
            onInput: r
          }, null, 40, St),
          y(n.$slots, "end", {}, void 0, !0)
        ])
      ]),
      t.error ? (i(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          N(R(t.error), 1)
        ]),
        _: 1
      })) : t.help ? (i(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          N(R(t.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ _(zt, [["__scopeId", "data-v-1a9425cf"]]), Et = {};
function Bt(e, o) {
  return i(), p("textarea");
}
const Ct = /* @__PURE__ */ _(Et, [["render", Bt]]), Vt = {};
function Pt(e, o) {
  return i(), p("div");
}
const At = /* @__PURE__ */ _(Vt, [["render", Pt]]), Rt = {}, Mt = { class: "t-grid" };
function Dt(e, o) {
  return i(), p("div", Mt);
}
const Xt = /* @__PURE__ */ _(Rt, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, o) {
  return i(), p("div", Nt);
}
const Lt = /* @__PURE__ */ _(Ot, [["render", qt]]), Wt = /* @__PURE__ */ g({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (t, s) => (i(), p("div", {
      class: T(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ _(Wt, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ g({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v(!1), n = v(), d = $(() => {
      let c = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (c = `var(--t-color-status-${t.color})`), {
        "--color": c
      };
    }), a = () => n.value?.parentElement?.querySelector?.("input");
    se(() => {
      let c = a();
      c && (r.value = c.type != "password", s("change", r.value));
    });
    const u = () => {
      let c = a();
      c && (r.value = !r.value, r.value ? c.type = "text" : c.type = "password", s("change", r.value));
    };
    return (c, f) => (i(), p("button", {
      ref_key: "toggle",
      ref: n,
      class: "t-toggle-password",
      style: k(d.value),
      onClick: u
    }, [
      r.value ? y(c.$slots, "on", { key: 0 }, () => [
        f[0] || (f[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      r.value ? I("", !0) : y(c.$slots, "off", { key: 1 }, () => [
        f[1] || (f[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ _(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ g({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = $(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, r) => (i(), p("div", {
      class: T(["t-avatar", { square: s.square }]),
      style: k({ "--size": t.value })
    }, [
      y(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ft = /* @__PURE__ */ _(jt, [["__scopeId", "data-v-24384c2f"]]), Kt = { class: "t-collapse-title" }, Jt = {
  key: 0,
  class: "icon"
}, Qt = {
  key: 1,
  class: "icon"
}, Zt = { class: "t-collapse-content" }, Yt = /* @__PURE__ */ g({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = v(!1), n = v(""), d = v(), a = () => {
      r.value = !r.value, n.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (u, c) => (i(), p("div", {
      class: T(["t-collapse", { open: r.value }]),
      style: k({ "--height": n.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        y(u.$slots, "icon"),
        h("div", Kt, [
          y(u.$slots, "title", {}, () => [
            N(R(t.title), 1)
          ])
        ]),
        y(u.$slots, "toggle", {}, () => [
          r.value ? (i(), p("div", Jt, [...c[0] || (c[0] = [
            h("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), p("div", Qt, [...c[1] || (c[1] = [
            h("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      h("div", Zt, [
        h("div", {
          ref_key: "content",
          ref: d
        }, [
          y(u.$slots, "content", {}, () => [
            y(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), eo = /* @__PURE__ */ g({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = o, r = () => {
      s("update:modelValue", !t.modelValue);
    }, n = $(() => {
      let d = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (d = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), d;
    });
    return (d, a) => (i(), p("div", {
      class: T(["t-switch", { on: t.modelValue }]),
      style: k(n.value),
      onClick: r
    }, [...a[0] || (a[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ _(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ g({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const o = e, t = ue("tabsState"), s = $(() => t.active.value === o.value), r = () => {
      t.setActive(o.value);
    };
    return (n, d) => (i(), p("li", {
      class: T(["t-tab", { active: s.value }])
    }, [
      U(J, {
        variant: "text",
        onClick: r,
        size: V(t).size,
        color: s.value && V(t).variant == "text" ? V(t).color : void 0
      }, {
        default: P(() => [
          y(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), so = /* @__PURE__ */ _(oo, [["__scopeId", "data-v-f810d905"]]), ro = /* @__PURE__ */ g({
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
    const t = e, s = o, r = v("0px"), n = v(), d = $(() => {
      let u = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), a = () => {
      setTimeout(() => {
        if (t.placement.startsWith("top-") || t.placement.startsWith("bottom-")) {
          let u = n.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().left - n.value.getBoundingClientRect().left + n.value.scrollLeft, f = u.offsetWidth / 2;
            r.value = c + f - t.border / 2 + "px";
          }
        } else if (t.placement.startsWith("left-") || t.placement.startsWith("right-")) {
          let u = n.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().top - n.value.getBoundingClientRect().top + n.value.scrollTop, f = u.offsetHeight / 2;
            r.value = c + f - t.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: $(() => t.modelValue),
      color: d.value,
      size: t.size,
      variant: t.variant,
      setActive: (u) => {
        s("update:modelValue", u), a();
      }
    }), se(() => {
      a();
    }), (u, c) => (i(), p("ul", {
      ref_key: "container",
      ref: n,
      class: T(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: k({ "--color": d.value, "--transform": r.value, "--border": u.border + "px" })
    }, [
      y(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), no = /* @__PURE__ */ _(ro, [["__scopeId", "data-v-3a46d2df"]]), ao = /* @__PURE__ */ g({
  __name: "t-loading-app",
  setup(e) {
    return (o, t) => (i(), C(_e, null, {
      default: P(() => [
        U(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), lo = /* @__PURE__ */ _(ao, [["__scopeId", "data-v-1436aa9f"]]), co = { key: 0 }, io = {
  key: 0,
  class: "t-checkbox-label"
}, uo = /* @__PURE__ */ g({
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
    const t = e, s = o, r = $(() => {
      let a = {
        "--background": t.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (a = {
        "--background": `var(--t-color-status-${t.color})`,
        "--color": `var(--t-color-status-${t.color}-text)`
      }), a;
    }), n = $(() => t.multiple ? t.modelValue.includes(t.value) : t.value === void 0 ? t.modelValue : t.modelValue == t.value), d = () => {
      if (t.multiple) {
        let a = t.modelValue;
        t.modelValue.includes(t.value) ? a.splice(a.indexOf(t.value), 1) : a.push(t.value), s("update:modelValue", a);
      } else t.value === void 0 ? s("update:modelValue", !t.modelValue) : s("update:modelValue", t.value);
    };
    return (a, u) => (i(), p("div", {
      class: T(["t-checkbox", { active: n.value }]),
      style: k(r.value),
      onClick: d
    }, [
      h("div", {
        class: T(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (i(), p("div", co)) : I("", !0),
        a.type == "check" ? y(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (i(), p("span", io, R(t.label), 1)) : I("", !0)
    ], 6));
  }
}), po = /* @__PURE__ */ _(uo, [["__scopeId", "data-v-d558d0b0"]]), fo = /* @__PURE__ */ g({
  __name: "t-keyboard",
  setup(e) {
    const { height: o } = ve();
    return (t, s) => (i(), p("div", {
      class: "t-keyboard",
      style: k({ "--height": V(o) + "px" })
    }, null, 4));
  }
}), mo = /* @__PURE__ */ _(fo, [["__scopeId", "data-v-5d3fa1da"]]), vo = /* @__PURE__ */ g({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(e) {
    const o = e, t = $(() => ({
      "--width": o.width,
      "--height": o.height,
      "--radius": o.radius
    }));
    return (s, r) => (i(), p("div", {
      class: "t-skeleton",
      style: k(t.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ _(vo, [["__scopeId", "data-v-877bbdb5"]]), yo = /* @__PURE__ */ g({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const o = e, t = $(() => {
      let s = {};
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--color": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--color": o.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, r) => (i(), p("div", {
      class: "t-ripple",
      style: k(t.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ _(yo, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
  install: (e) => {
    Te(), e.component("t-app", Ee), e.component("t-screen", ye), e.component("t-swipe-screen", vt), e.component("t-cable", rt), e.component("t-toolbar", yt), e.component("t-content", _e), e.component("t-card", nt), e.component("t-refresher", ut), e.component("t-button", J), e.component("t-back-button", bt), e.component("t-present", L), e.component("t-text", te), e.component("t-sheet", wt), e.component("t-gesture-indicator", ge), e.component("t-input", It), e.component("t-textarea", Ct), e.component("t-rich-text", At), e.component("t-grid", Xt), e.component("t-grid-item", Lt), e.component("t-divider", Ht), e.component("t-toggle-password", Ut), e.component("t-loading-icon", K), e.component("t-alert", pe), e.component("t-avatar", Ft), e.component("t-collapse", Yt), e.component("t-toast", me), e.component("t-switch", to), e.component("t-tab", so), e.component("t-tabs", no), e.component("t-loading-app", lo), e.component("t-checkbox", po), e.component("t-keyboard", mo), e.component("t-skeleton", _o), e.component("t-ripple", go);
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
