import { createElementBlock as p, openBlock as i, renderSlot as g, defineComponent as b, ref as m, computed as w, reactive as ce, watch as O, Fragment as X, withDirectives as W, createCommentVNode as E, normalizeStyle as k, normalizeClass as x, vShow as H, createElementVNode as h, createVNode as G, createBlock as C, withCtx as P, toDisplayString as R, renderList as F, createTextVNode as N, createApp as U, h as j, provide as ie, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as be, markRaw as he, inject as ue, useAttrs as ke } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as de, useRoute as $e } from "vue-router";
const we = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), Te = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, xe = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !we(e.target) && Te();
  });
}, _ = (e, t) => {
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
const Ee = /* @__PURE__ */ _(Se, [["render", Ie]]), Be = /* @__PURE__ */ b({
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
    const s = m(0), n = m(!1), l = m(), d = m(), a = e, u = o, c = w(() => n.value || a.keepalive), v = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), r = (f) => {
      a.backdrop ? f?.backdropOpacity && (v["--t-present-backdrop-opacity"] = f.backdropOpacity) : v["--t-present-backdrop-opacity"] = "0", f?.transition && (v["--t-present-transition"] = f.transition, v["--t-present-transition"] = f.transition), f?.contentTransform && (v["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (v["--t-present-content-opacity"] = f.contentOpacity);
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
      a.visible ? (n.value = !0, s.value = He.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : ($(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), t({
      render: r,
      open: y,
      close: $
    });
    const S = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return $(), (f, D) => (i(), p(X, null, [
      c.value ? W((i(), p("div", {
        key: 0,
        class: x(["t-present", [{ [f.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: k([v, { zIndex: s.value }, a.style])
      }, [
        g(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, n.value]
      ]) : E("", !0),
      c.value ? W((i(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: S,
        ref_key: "backdrop",
        ref: l,
        style: k([v, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [H, n.value]
      ]) : E("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ _(Be, [["__scopeId", "data-v-8eb6e6e4"]]), Ce = /* @__PURE__ */ b({
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
    return (s, n) => (i(), p("button", {
      class: x(["t-button", { "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0 }]),
      style: k(o.value)
    }, [
      W(h("span", Ve, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (i(), p("span", Pe, [
        G(K, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ _(Ae, [["__scopeId", "data-v-185a9e49"]]), Re = {
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
    const s = e, n = m(!1), l = o, d = m(), a = m(!1), u = () => {
      n.value = !0;
    }, c = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, v = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return t({
      open: u
    }), (r, y) => (i(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: v
    }, {
      default: P(() => [
        h("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          g(r.$slots, "header", {}, () => [
            s.title ? (i(), p("div", Re, R(s.title), 1)) : E("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            h("div", Me, R(s.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            h("div", De, [
              (i(!0), p(X, null, F(s.actions, ($) => (i(), C(J, {
                color: $.color,
                variant: $.variant,
                onClick: (S) => c($)
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
}), pe = /* @__PURE__ */ _(Xe, [["__scopeId", "data-v-05d0c578"]]), $o = (e = {}) => ({
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
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: a });
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
    const s = e, n = m(!1), l = o, d = m(), a = m(!1), u = () => {
      n.value = !0;
    }, c = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, v = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return O(() => s.visible, (r) => {
      r ? u() : close();
    }), t({
      open: u,
      close
    }), (r, y) => (i(), C(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: v
    }, {
      default: P(() => [
        h("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (i(!0), p(X, null, F(s.actions, ($) => (i(), p("div", null, [
            (i(!0), p(X, null, F($, (S) => (i(), C(J, {
              color: S.color,
              size: S.size,
              variant: S.variant,
              onClick: (f) => c(S),
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
}), Ne = /* @__PURE__ */ _(Oe, [["__scopeId", "data-v-e693a02a"]]), wo = (e = {}) => ({
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
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: d, data: a });
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
    }), (a, u) => (i(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        h("div", qe, [
          g(a.$slots, "default", {}, () => [
            G(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), We = /* @__PURE__ */ _(Le, [["__scopeId", "data-v-8f84c14e"]]), To = (e = {}) => {
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
    const s = e, n = o, l = m(!1), d = m(!1), a = m(!1), u = () => {
      d.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, c = () => {
      a.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    O(() => s.visible, (r) => {
      r ? u() : c();
    });
    const v = w(() => {
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
    return t({
      open: u,
      close: c
    }), (r, y) => d.value ? (i(), p("div", {
      key: 0,
      class: x(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: k({ "--space": s.space, ...v.value })
    }, [
      g(r.$slots, "content", {}, () => [
        h("div", et, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), me = /* @__PURE__ */ _(tt, [["__scopeId", "data-v-7011351e"]]), xo = (e = {}) => ({
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
    }), (s, n) => (i(), p("div", {
      class: x(["t-cable", { keyboard: t.keyboard && V(o) > 0, [t.placement]: !0 }]),
      style: k({ "--t-keyboard-height": V(o) + "px", "--t-keyboard-transition": V(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ _(st, [["__scopeId", "data-v-6cae224b"]]), rt = /* @__PURE__ */ b({
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
      style: k(o.value)
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
const _e = /* @__PURE__ */ _(at, [["render", ct], ["__scopeId", "data-v-af750e89"]]), le = 80, it = /* @__PURE__ */ b({
  __name: "t-refresher",
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: t }) {
    const o = t, s = m(0), n = m(!1), l = m();
    let d, a = !1;
    const u = () => {
      n.value = !1, s.value = 0, d && d.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, c = () => {
      a = !0, n.value = !0, s.value = le, o("refresh", u);
    };
    return O(() => l.value, () => {
      d && d.destroy();
      let v = l.value.closest(".t-content");
      v && (d = ne(v, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, o("start");
        },
        move({ deltaY: r, initialDirection: y }) {
          n.value || a || y != "down" || (r >= 120 ? (this.isMoving = !1, c()) : (r > 10 || this.isMoving) && (this.isMoving = !0, s.value = r > 0 ? r : 0, o("move", r)));
        },
        up({ deltaY: r, initialDirection: y }) {
          this.isMoving = !1, !(n.value || a) && (r > le && y == "down" ? c() : (s.value = 0, o("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, s.value = 0, o("cancel"));
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      d && d.destroy();
    }), (v, r) => W((i(), p("div", {
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
}), ut = /* @__PURE__ */ _(it, [["__scopeId", "data-v-abd4007f"]]), dt = {}, pt = { class: "t-screen" };
function ft(e, t) {
  return i(), p("div", pt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ye = /* @__PURE__ */ _(dt, [["render", ft], ["__scopeId", "data-v-c2a3436c"]]), mt = /* @__PURE__ */ b({
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
    const d = n.router || de(), a = n.route || $e(), u = d.getRoutes();
    for (let r of u)
      o[r.name] = r.component || r.components;
    const c = (r) => {
      r && T.addScreen({
        name: r,
        target: null,
        component: he(o[r] || null)
      });
    }, v = (r, y) => {
      !y || T.screens[r].target || (T.addScreenEl(r, y.$el), T.nextScreen && T.next(n.variant, () => {
        s("change");
      }));
    };
    return O(() => a.name, (r, y) => {
      r != T.currentScreen.value?.name && (T.lastScreen.value?.name == r ? T.back(n.variant, () => {
        s("change");
      }) : c(a.name));
    }), se(() => {
      c(a.name), l = ne(document.body, {
        beforeEvent(r) {
          return !!T.isSwipeable.value;
        },
        fast({ initialDirection: r }) {
          T.lastScreen.value && r == "right" && d.back();
        },
        move({ deltaX: r, initialDirection: y }) {
          y == "right" && T.move(n.variant, r);
        },
        up({ deltaX: r, initialDirection: y }) {
          if (y != "right") {
            T.reset(n.variant);
            return;
          }
          const $ = window.innerWidth;
          r / $ * 100 >= 50 ? d.back() : T.reset(n.variant);
        },
        cancel() {
          T.reset(n.variant);
        }
      });
    }), oe(() => {
      l && l.destroy(), T.removeAllScreen();
    }), (r, y) => (i(), p(X, null, [
      (i(!0), p(X, null, F(V(T).screens, ($, S) => (i(), C(ye, {
        ref_for: !0,
        ref: (f) => v(S, f),
        style: k({ zIndex: S + (S == V(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: P(() => [
          (i(), C(be($.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      h("div", {
        class: "t-swipe-backdrop",
        style: k({ zIndex: V(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), vt = /* @__PURE__ */ _(mt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const t = e, o = ue("cableState"), s = w(() => t?.placement || o?.placement);
    return (n, l) => (i(), p("div", {
      class: x(["t-toolbar", { [s.value]: !0, safe: t.safe }]),
      style: k({ "--t-size-toolbar": t.size })
    }, [
      h("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), yt = /* @__PURE__ */ _(_t, [["__scopeId", "data-v-1ee9866d"]]), gt = /* @__PURE__ */ b({
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
    return (l, d) => l.to || V(T).lastScreen ? (i(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        d[0] || (d[0] = h("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), bt = /* @__PURE__ */ _(gt, [["__scopeId", "data-v-dcf9d363"]]), ht = /* @__PURE__ */ b({
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
      style: k(o.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-f0f94f05"]]), kt = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: x(["t-gesture-indicator", { [t.placement]: !0 }])
    }, null, 2));
  }
}), ge = /* @__PURE__ */ _(kt, [["__scopeId", "data-v-ed8f7308"]]), $t = /* @__PURE__ */ b({
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
    let a = null;
    const u = w(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), c = (r) => {
      s("dismiss", r);
    }, v = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return O(() => n.value, (r) => {
      r && (a = ne(n.value, {
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
          v(), y == u.value ? s("dismiss", "gesture") : l.value.open();
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
          if (this.isMoving = !1, v(), S != u.value) {
            l.value.open();
            return;
          }
          let f, D, ee;
          o.placement == "bottom" || o.placement == "top" ? (f = n.value.offsetHeight, ee = y) : (f = n.value.offsetWidth, ee = $), D = ee / f * 100, D > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, v(), l.value.open();
        }
      }));
    }), oe(() => {
      a && a.destroy();
    }), (r, y) => (i(), C(L, {
      ref_key: "present",
      ref: l,
      class: x(o.class),
      placement: o.placement,
      backdrop: r.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: c,
      style: k(o.style)
    }, {
      default: P(() => [
        o.gesture && o.indicator && o.placement != "center" ? (i(), C(ge, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        h("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: r.rounded, radius: o.radius }]),
          style: k({ "--background": o.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(r.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), wt = /* @__PURE__ */ _($t, [["__scopeId", "data-v-71a5b877"]]), Tt = { class: "t-input-label" }, xt = { class: "t-input-content" }, St = ["type", "placeholder", "value"], zt = /* @__PURE__ */ b({
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
    }, a = () => {
      n.value = !0;
    }, u = () => {
      n.value = !1;
    };
    return (c, v) => (i(), p("div", {
      class: x(["t-input", { rounded: c.rounded, ["size-" + c.size]: !0, ["variant-" + c.variant]: !0, focus: n.value, "has-value": l.value }])
    }, [
      h("label", null, [
        h("span", Tt, R(c.label), 1),
        h("div", xt, [
          g(c.$slots, "start", {}, void 0, !0),
          h("input", {
            type: c.type,
            placeholder: c.variant == "default" ? c.placeholder : "",
            value: c.modelValue,
            onInput: d,
            onFocus: a,
            onBlur: u
          }, null, 40, St),
          g(c.$slots, "end", {}, void 0, !0)
        ])
      ]),
      c.error ? (i(), C(te, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          N(R(c.error), 1)
        ]),
        _: 1
      })) : c.help ? (i(), C(te, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          N(R(c.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ _(zt, [["__scopeId", "data-v-fffdda84"]]), Et = {};
function Bt(e, t) {
  return i(), p("textarea");
}
const Ct = /* @__PURE__ */ _(Et, [["render", Bt]]), Vt = {};
function Pt(e, t) {
  return i(), p("div");
}
const At = /* @__PURE__ */ _(Vt, [["render", Pt]]), Rt = {}, Mt = { class: "t-grid" };
function Dt(e, t) {
  return i(), p("div", Mt);
}
const Xt = /* @__PURE__ */ _(Rt, [["render", Dt]]), Ot = {}, Nt = { class: "t-grid-item" };
function qt(e, t) {
  return i(), p("div", Nt);
}
const Lt = /* @__PURE__ */ _(Ot, [["render", qt]]), Wt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p("div", {
      class: x(["t-divider", { [t.direction]: !0 }])
    }, null, 2));
  }
}), Ht = /* @__PURE__ */ _(Wt, [["__scopeId", "data-v-47ee8991"]]), Ft = /* @__PURE__ */ b({
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
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    se(() => {
      let c = a();
      c && (n.value = c.type != "password", s("change", n.value));
    });
    const u = () => {
      let c = a();
      c && (n.value = !n.value, n.value ? c.type = "text" : c.type = "password", s("change", n.value));
    };
    return (c, v) => (i(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: k(d.value),
      onClick: u
    }, [
      n.value ? g(c.$slots, "on", { key: 0 }, () => [
        v[0] || (v[0] = h("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      n.value ? E("", !0) : g(c.$slots, "off", { key: 1 }, () => [
        v[1] || (v[1] = h("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ _(Ft, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = w(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, n) => (i(), p("div", {
      class: x(["t-avatar", { square: s.square }]),
      style: k({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ _(Ut, [["__scopeId", "data-v-24384c2f"]]), Kt = { class: "t-collapse-title" }, Jt = {
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
    const o = e, s = t, n = m(!1), l = m(""), d = m(), a = () => {
      n.value = !n.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (u, c) => (i(), p("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: k({ "--height": l.value })
    }, [
      h("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(u.$slots, "icon"),
        h("div", Kt, [
          g(u.$slots, "title", {}, () => [
            N(R(o.title), 1)
          ])
        ]),
        g(u.$slots, "toggle", {}, () => [
          n.value ? (i(), p("div", Jt, [...c[0] || (c[0] = [
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
      let d = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), d;
    });
    return (d, a) => (i(), p("div", {
      class: x(["t-switch", { on: o.modelValue }]),
      style: k(l.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      h("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), to = /* @__PURE__ */ _(eo, [["__scopeId", "data-v-3616970e"]]), oo = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const t = e, o = ue("tabsState"), s = w(() => o.active.value === t.value), n = () => {
      o.setActive(t.value);
    };
    return (l, d) => (i(), p("li", {
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
}), so = /* @__PURE__ */ _(oo, [["__scopeId", "data-v-f810d905"]]), no = /* @__PURE__ */ b({
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
    }), a = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, v = u.offsetWidth / 2;
            n.value = c + v - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, v = u.offsetHeight / 2;
            n.value = c + v - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ie("tabsState", {
      active: w(() => o.modelValue),
      color: d.value,
      size: o.size,
      variant: o.variant,
      setActive: (u) => {
        s("update:modelValue", u), a();
      }
    }), se(() => {
      a();
    }), (u, c) => (i(), p("ul", {
      ref_key: "container",
      ref: l,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: k({ "--color": d.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ro = /* @__PURE__ */ _(no, [["__scopeId", "data-v-3a46d2df"]]), ao = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (i(), C(_e, null, {
      default: P(() => [
        G(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), lo = /* @__PURE__ */ _(ao, [["__scopeId", "data-v-1436aa9f"]]), co = { key: 0 }, io = {
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
      let a = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (a = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), a;
    }), l = w(() => o.multiple ? o.modelValue.includes(o.value) : o.value === void 0 ? o.modelValue : o.modelValue == o.value), d = () => {
      if (o.multiple) {
        let a = o.modelValue;
        o.modelValue.includes(o.value) ? a.splice(a.indexOf(o.value), 1) : a.push(o.value), s("update:modelValue", a);
      } else o.value === void 0 ? s("update:modelValue", !o.modelValue) : s("update:modelValue", o.value);
    };
    return (a, u) => (i(), p("div", {
      class: x(["t-checkbox", { active: l.value }]),
      style: k(n.value),
      onClick: d
    }, [
      h("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (i(), p("div", co)) : E("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = h("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      g(a.$slots, "label", {}, () => [
        a.label ? (i(), p("span", io, R(o.label), 1)) : E("", !0)
      ], !0)
    ], 6));
  }
}), po = /* @__PURE__ */ _(uo, [["__scopeId", "data-v-0e13abc3"]]), fo = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = ve();
    return (o, s) => (i(), p("div", {
      class: "t-keyboard",
      style: k({ "--height": V(t) + "px" })
    }, null, 4));
  }
}), mo = /* @__PURE__ */ _(fo, [["__scopeId", "data-v-5d3fa1da"]]), vo = /* @__PURE__ */ b({
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
      style: k(o.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ _(vo, [["__scopeId", "data-v-877bbdb5"]]), yo = /* @__PURE__ */ b({
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
      style: k(o.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ _(yo, [["__scopeId", "data-v-42cb3d71"]]), So = () => ({
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
