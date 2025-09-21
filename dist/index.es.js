import { createElementBlock as p, openBlock as i, renderSlot as g, defineComponent as b, ref as m, computed as $, reactive as le, watch as O, Fragment as X, withDirectives as W, createCommentVNode as E, normalizeStyle as w, normalizeClass as x, vShow as H, createElementVNode as k, createVNode as G, createBlock as C, withCtx as P, toDisplayString as R, renderList as F, createTextVNode as N, createApp as U, h as j, provide as ce, unref as V, onUnmounted as oe, onMounted as se, resolveDynamicComponent as ge, markRaw as be, inject as ie, useAttrs as he } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as ue, useRoute as ke } from "vue-router";
const $e = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), we = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, Te = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !$e(e.target) && we();
  });
}, _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, xe = {}, Se = { class: "t-app" };
function ze(e, t) {
  return i(), p("div", Se, [
    g(e.$slots, "default")
  ]);
}
const Ie = /* @__PURE__ */ _(xe, [["render", ze]]), Ee = /* @__PURE__ */ b({
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
    const s = m(0), n = m(!1), l = m(), d = m(), a = e, u = o, c = $(() => n.value || a.keepalive), y = le({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), r = (f) => {
      a.backdrop ? f?.backdropOpacity && (y["--t-present-backdrop-opacity"] = f.backdropOpacity) : y["--t-present-backdrop-opacity"] = "0", f?.transition && (y["--t-present-transition"] = f.transition, y["--t-present-transition"] = f.transition), f?.contentTransform && (y["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (y["--t-present-content-opacity"] = f.contentOpacity);
    }, v = () => {
      r({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, h = () => {
      let f = "0px", D = "1";
      a.placement == "bottom" || a.placement == "right" ? f = "100%" : a.placement == "top" || a.placement == "left" ? f = "-100%" : a.placement == "center" && (f = "0px", D = "0"), r({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: D,
        backdropOpacity: "0"
      });
    };
    O(() => a.visible, () => {
      a.visible ? (n.value = !0, s.value = We.getNewIndex(), setTimeout(() => {
        v();
      }, 50)) : (h(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), t({
      render: r,
      open: v,
      close: h
    });
    const S = (f) => {
      f.preventDefault(), u("dismiss", "backdrop");
    };
    return h(), (f, D) => (i(), p(X, null, [
      c.value ? W((i(), p("div", {
        key: 0,
        class: x(["t-present", [{ [f.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: w([y, { zIndex: s.value }, a.style])
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
        style: w([y, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [H, n.value]
      ]) : E("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ _(Ee, [["__scopeId", "data-v-8eb6e6e4"]]), Be = /* @__PURE__ */ b({
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
      style: w({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ _(Be, [["__scopeId", "data-v-7c463303"]]), Ce = { class: "t-button-content" }, Ve = {
  key: 0,
  class: "loader"
}, Pe = /* @__PURE__ */ b({
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
    const t = e, o = $(() => {
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
      style: w(o.value)
    }, [
      W(k("span", Ce, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (i(), p("span", Ve, [
        G(K, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ _(Pe, [["__scopeId", "data-v-185a9e49"]]), Ae = {
  key: 0,
  class: "t-alert-header"
}, Re = { class: "t-alert-content" }, Me = { class: "t-alert-footer" }, De = /* @__PURE__ */ b({
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
    }, y = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return t({
      open: u
    }), (r, v) => (i(), C(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          g(r.$slots, "header", {}, () => [
            s.title ? (i(), p("div", Ae, R(s.title), 1)) : E("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            k("div", Re, R(s.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            k("div", Me, [
              (i(!0), p(X, null, F(s.actions, (h) => (i(), C(J, {
                color: h.color,
                variant: h.variant,
                onClick: (S) => c(h)
              }, {
                default: P(() => [
                  N(R(h.text), 1)
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
}), de = /* @__PURE__ */ _(De, [["__scopeId", "data-v-05d0c578"]]), ko = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(de, {
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
}), Xe = /* @__PURE__ */ b({
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
    }, y = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return O(() => s.visible, (r) => {
      r ? u() : close();
    }), t({
      open: u,
      close
    }), (r, v) => (i(), C(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: P(() => [
        k("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (i(!0), p(X, null, F(s.actions, (h) => (i(), p("div", null, [
            (i(!0), p(X, null, F(h, (S) => (i(), C(J, {
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
}), Oe = /* @__PURE__ */ _(Xe, [["__scopeId", "data-v-e693a02a"]]), $o = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), n = m();
      o.appendChild(s);
      const l = U({
        render() {
          return j(Oe, {
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
}), Ne = { class: "t-loading" }, qe = /* @__PURE__ */ b({
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
        k("div", Ne, [
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
}), Le = /* @__PURE__ */ _(qe, [["__scopeId", "data-v-8f84c14e"]]), wo = (e = {}) => {
  const t = m(), o = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        o && (n = document.createElement("div"), o.appendChild(n), s = U({
          render() {
            return j(Le, {
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
}, ae = m(1e3), We = {
  getNewIndex() {
    return ae.value += 2, ae.value;
  }
}, M = le([]), Q = m(!0), I = m(!1), A = m(-1), z = $(() => M[A.value]), q = $(() => M[A.value + 1] || void 0), B = $(() => M[M.length - 2]), pe = $(() => !I.value && Q.value && B.value), Z = {
  reset() {
    I.value = !0;
    const e = z.value.target, t = B.value.target;
    e.style.transition = "transform 0.35s ease", e.style.transform = "translateX(0px)", t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(e) {
    if (!pe.value) return;
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
}, He = (e) => {
  M.push(e);
}, Fe = (e, t) => {
  M[e].target = t;
}, re = (e) => {
  e || M.pop();
}, Ge = () => {
  M.splice(0, M.length);
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
}, T = {
  isBusy: I,
  isSwipeable: pe,
  reset: Ze,
  next: Ke,
  back: Je,
  move: Qe,
  screens: M,
  addScreen: He,
  addScreenEl: Fe,
  removeScreen: re,
  removeAllScreen: Ge,
  lockSwipe: Ue,
  unlockSwipe: je,
  swipeable: Q,
  currentScreen: z,
  lastScreen: B,
  nextScreen: q
}, Ye = { class: "t-toast-content" }, et = /* @__PURE__ */ b({
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
    const y = $(() => {
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
    }), (r, v) => d.value ? (i(), p("div", {
      key: 0,
      class: x(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: w({ "--space": s.space, ...y.value })
    }, [
      g(r.$slots, "content", {}, () => [
        k("div", Ye, R(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), fe = /* @__PURE__ */ _(et, [["__scopeId", "data-v-7011351e"]]), To = (e = {}) => ({
  open() {
    let t = document.body.querySelector(".t-app");
    if (!t) return;
    const o = document.createElement("div"), s = m();
    t.appendChild(o);
    const n = U({
      render() {
        return j(fe, {
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
}), tt = m(0);
function me() {
  return {
    height: tt
  };
}
const ot = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const t = e, { height: o } = me();
    return ce("cableState", {
      placement: t.placement
    }), (s, n) => (i(), p("div", {
      class: x(["t-cable", { keyboard: t.keyboard && V(o) > 0, [t.placement]: !0 }]),
      style: w({ "--t-keyboard-height": V(o) + "px", "--t-keyboard-transition": V(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), st = /* @__PURE__ */ _(ot, [["__scopeId", "data-v-6cae224b"]]), nt = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const t = e, o = $(() => {
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
      style: w(o.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), rt = {}, at = { class: "t-content" };
function lt(e, t) {
  return i(), p("div", at, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ve = /* @__PURE__ */ _(rt, [["render", lt], ["__scopeId", "data-v-af750e89"]]), ct = /* @__PURE__ */ b({
  __name: "t-refresher",
  props: {
    threshold: { default: 80 },
    safe: { type: Boolean, default: !1 }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(e, { emit: t }) {
    const o = t, s = e, n = m(0), l = m(!1), d = m();
    let a, u = !1;
    const c = () => {
      l.value = !1, n.value = 0, a && a.cancel(), setTimeout(() => {
        u = !1;
      }, 2e3);
    }, y = () => {
      u = !0, l.value = !0, n.value = s.threshold, o("refresh", c);
    };
    return O(() => d.value, () => {
      a && a.destroy();
      let r = d.value.closest(".t-content");
      r && (a = ne(r, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1, o("start");
        },
        move({ deltaY: v, initialDirection: h }) {
          l.value || u || h != "down" || (v >= 120 ? (this.isMoving = !1, y()) : (v > 10 || this.isMoving) && (this.isMoving = !0, n.value = v > 0 ? v : 0, o("move", v)));
        },
        up({ deltaY: v, initialDirection: h }) {
          this.isMoving = !1, !(l.value || u) && (v > s.threshold && h == "down" ? y() : (n.value = 0, o("cancel")));
        },
        cancel() {
          this.isMoving = !1, !(l.value || u) && (l.value = !1, n.value = 0, o("cancel"));
        }
      }, {
        passive: !1
      }));
    }), oe(() => {
      a && a.destroy();
    }), (r, v) => W((i(), p("div", {
      class: x(["t-refresher", { safe: r.safe }]),
      ref_key: "container",
      ref: d
    }, [
      g(r.$slots, "default", {
        offset: n.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [H, n.value > 0]
    ]);
  }
}), it = /* @__PURE__ */ _(ct, [["__scopeId", "data-v-c435c611"]]), ut = {}, dt = { class: "t-screen" };
function pt(e, t) {
  return i(), p("div", dt, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ _(ut, [["render", pt], ["__scopeId", "data-v-c2a3436c"]]), ft = /* @__PURE__ */ b({
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
    const d = n.router || ue(), a = n.route || ke(), u = d.getRoutes();
    for (let r of u)
      o[r.name] = r.component || r.components;
    const c = (r) => {
      r && T.addScreen({
        name: r,
        target: null,
        component: be(o[r] || null)
      });
    }, y = (r, v) => {
      !v || T.screens[r].target || (T.addScreenEl(r, v.$el), T.nextScreen && T.next(n.variant, () => {
        s("change");
      }));
    };
    return O(() => a.name, (r, v) => {
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
        move({ deltaX: r, initialDirection: v }) {
          v == "right" && T.move(n.variant, r);
        },
        up({ deltaX: r, initialDirection: v }) {
          if (v != "right") {
            T.reset(n.variant);
            return;
          }
          const h = window.innerWidth;
          r / h * 100 >= 50 ? d.back() : T.reset(n.variant);
        },
        cancel() {
          T.reset(n.variant);
        }
      });
    }), oe(() => {
      l && l.destroy(), T.removeAllScreen();
    }), (r, v) => (i(), p(X, null, [
      (i(!0), p(X, null, F(V(T).screens, (h, S) => (i(), C(_e, {
        ref_for: !0,
        ref: (f) => y(S, f),
        style: w({ zIndex: S + (S == V(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: P(() => [
          (i(), C(ge(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: V(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), mt = /* @__PURE__ */ _(ft, [["__scopeId", "data-v-23e0cfda"]]), vt = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(e) {
    const t = e, o = ie("cableState"), s = $(() => t?.placement || o?.placement);
    return (n, l) => (i(), p("div", {
      class: x(["t-toolbar", { [s.value]: !0, safe: t.safe }]),
      style: w({ "--t-size-toolbar": t.size })
    }, [
      k("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), _t = /* @__PURE__ */ _(vt, [["__scopeId", "data-v-1ee9866d"]]), yt = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(e) {
    const t = e, o = he(), s = t.router || ue(), n = (l) => {
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
        d[0] || (d[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), gt = /* @__PURE__ */ _(yt, [["__scopeId", "data-v-dcf9d363"]]), bt = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = $(() => {
      let s, n = t.color;
      return t.size == "standard" ? s = "var(--t-fs-10)" : t.size == "small" ? s = "var(--t-fs-08)" : t.size == "large" ? s = "var(--t-fs-12)" : s = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (n = `var(--t-color-status-${t.color})`), {
        "--color": n,
        "--font-size": s
      };
    });
    return (s, n) => (i(), p("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), te = /* @__PURE__ */ _(bt, [["__scopeId", "data-v-f0f94f05"]]), ht = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: x(["t-gesture-indicator", { [t.placement]: !0 }])
    }, null, 2));
  }
}), ye = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-ed8f7308"]]), kt = /* @__PURE__ */ b({
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
    const u = $(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), c = (r) => {
      s("dismiss", r);
    }, y = () => {
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
        beforeEvent(v) {
          return !(d.value || !o.gesture || o.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: v }) {
          y(), v == u.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: v, deltaX: h, initialDirection: S }) {
          if (S != u.value) return;
          let f = 0;
          o.placement == "bottom" || o.placement == "top" ? f = v : f = h, o.placement == "bottom" && (f = v > 0 ? v : 0), o.placement == "top" && (f = v < 0 ? v : 0), o.placement == "left" && (f = h < 0 ? h : 0), o.placement == "right" && (f = h > 0 ? h : 0), (o.placement == "bottom" && (f >= 10 || this.isMoving) || o.placement == "top" && (f <= -10 || this.isMoving) || o.placement == "left" && (f <= -10 || this.isMoving) || o.placement == "right" && (f >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: v, deltaX: h, initialDirection: S }) {
          if (this.isMoving = !1, y(), S != u.value) {
            l.value.open();
            return;
          }
          let f, D, ee;
          o.placement == "bottom" || o.placement == "top" ? (f = n.value.offsetHeight, ee = v) : (f = n.value.offsetWidth, ee = h), D = ee / f * 100, D > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, y(), l.value.open();
        }
      }));
    }), oe(() => {
      a && a.destroy();
    }), (r, v) => (i(), C(L, {
      ref_key: "present",
      ref: l,
      class: x(o.class),
      placement: o.placement,
      backdrop: r.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: c,
      style: w(o.style)
    }, {
      default: P(() => [
        o.gesture && o.indicator && o.placement != "center" ? (i(), C(ye, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: r.rounded, radius: o.radius }]),
          style: w({ "--background": o.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(r.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), $t = /* @__PURE__ */ _(kt, [["__scopeId", "data-v-71a5b877"]]), wt = { class: "t-input-label" }, Tt = { class: "t-input-content" }, xt = ["type", "placeholder", "value"], St = /* @__PURE__ */ b({
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
    const o = e, s = t, n = m(!1), l = $(() => !(o.modelValue === "" || o.modelValue === null || o.modelValue === void 0)), d = (c) => {
      s("update:modelValue", c.target.value);
    }, a = () => {
      n.value = !0;
    }, u = () => {
      n.value = !1;
    };
    return (c, y) => (i(), p("div", {
      class: x(["t-input", { rounded: c.rounded, ["size-" + c.size]: !0, ["variant-" + c.variant]: !0, focus: n.value, "has-value": l.value }])
    }, [
      k("label", null, [
        k("span", wt, R(c.label), 1),
        k("div", Tt, [
          g(c.$slots, "start", {}, void 0, !0),
          k("input", {
            type: c.type,
            placeholder: c.variant == "default" ? c.placeholder : "",
            value: c.modelValue,
            onInput: d,
            onFocus: a,
            onBlur: u
          }, null, 40, xt),
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
}), zt = /* @__PURE__ */ _(St, [["__scopeId", "data-v-fffdda84"]]), It = {};
function Et(e, t) {
  return i(), p("textarea");
}
const Bt = /* @__PURE__ */ _(It, [["render", Et]]), Ct = {};
function Vt(e, t) {
  return i(), p("div");
}
const Pt = /* @__PURE__ */ _(Ct, [["render", Vt]]), At = {}, Rt = { class: "t-grid" };
function Mt(e, t) {
  return i(), p("div", Rt);
}
const Dt = /* @__PURE__ */ _(At, [["render", Mt]]), Xt = {}, Ot = { class: "t-grid-item" };
function Nt(e, t) {
  return i(), p("div", Ot);
}
const qt = /* @__PURE__ */ _(Xt, [["render", Nt]]), Lt = /* @__PURE__ */ b({
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
}), Wt = /* @__PURE__ */ _(Lt, [["__scopeId", "data-v-47ee8991"]]), Ht = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, n = m(!1), l = m(), d = $(() => {
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
    return (c, y) => (i(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: w(d.value),
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
}), Ft = /* @__PURE__ */ _(Ht, [["__scopeId", "data-v-3268e9e3"]]), Gt = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = $(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, n) => (i(), p("div", {
      class: x(["t-avatar", { square: s.square }]),
      style: w({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ut = /* @__PURE__ */ _(Gt, [["__scopeId", "data-v-24384c2f"]]), jt = { class: "t-collapse-title" }, Kt = {
  key: 0,
  class: "icon"
}, Jt = {
  key: 1,
  class: "icon"
}, Qt = { class: "t-collapse-content" }, Zt = /* @__PURE__ */ b({
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
      style: w({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(u.$slots, "icon"),
        k("div", jt, [
          g(u.$slots, "title", {}, () => [
            N(R(o.title), 1)
          ])
        ]),
        g(u.$slots, "toggle", {}, () => [
          n.value ? (i(), p("div", Kt, [...c[0] || (c[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), p("div", Jt, [...c[1] || (c[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Qt, [
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
}), Yt = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = t, n = () => {
      s("update:modelValue", !o.modelValue);
    }, l = $(() => {
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
      style: w(l.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), eo = /* @__PURE__ */ _(Yt, [["__scopeId", "data-v-3616970e"]]), to = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(e) {
    const t = e, o = ie("tabsState"), s = $(() => o.active.value === t.value), n = () => {
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
}), oo = /* @__PURE__ */ _(to, [["__scopeId", "data-v-f810d905"]]), so = /* @__PURE__ */ b({
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
    const o = e, s = t, n = m("0px"), l = m(), d = $(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), a = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().left - l.value.getBoundingClientRect().left + l.value.scrollLeft, y = u.offsetWidth / 2;
            n.value = c + y - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = l.value.querySelector(".active");
          if (u) {
            let c = u.getBoundingClientRect().top - l.value.getBoundingClientRect().top + l.value.scrollTop, y = u.offsetHeight / 2;
            n.value = c + y - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ce("tabsState", {
      active: $(() => o.modelValue),
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
      style: w({ "--color": d.value, "--transform": n.value, "--border": u.border + "px" })
    }, [
      g(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), no = /* @__PURE__ */ _(so, [["__scopeId", "data-v-3a46d2df"]]), ro = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(e) {
    return (t, o) => (i(), C(ve, null, {
      default: P(() => [
        G(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), ao = /* @__PURE__ */ _(ro, [["__scopeId", "data-v-1436aa9f"]]), lo = { key: 0 }, co = {
  key: 0,
  class: "t-checkbox-label"
}, io = /* @__PURE__ */ b({
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
    const o = e, s = t, n = $(() => {
      let a = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (a = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), a;
    }), l = $(() => o.multiple ? o.modelValue.includes(o.value) : o.value === void 0 ? o.modelValue : o.modelValue == o.value), d = () => {
      if (o.multiple) {
        let a = o.modelValue;
        o.modelValue.includes(o.value) ? a.splice(a.indexOf(o.value), 1) : a.push(o.value), s("update:modelValue", a);
      } else o.value === void 0 ? s("update:modelValue", !o.modelValue) : s("update:modelValue", o.value);
    };
    return (a, u) => (i(), p("div", {
      class: x(["t-checkbox", { active: l.value }]),
      style: w(n.value),
      onClick: d
    }, [
      k("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (i(), p("div", lo)) : E("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          u[0] || (u[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      g(a.$slots, "label", {}, () => [
        a.label ? (i(), p("span", co, R(o.label), 1)) : E("", !0)
      ], !0)
    ], 6));
  }
}), uo = /* @__PURE__ */ _(io, [["__scopeId", "data-v-0e13abc3"]]), po = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(e) {
    const { height: t } = me();
    return (o, s) => (i(), p("div", {
      class: "t-keyboard",
      style: w({ "--height": V(t) + "px" })
    }, null, 4));
  }
}), fo = /* @__PURE__ */ _(po, [["__scopeId", "data-v-5d3fa1da"]]), mo = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(e) {
    const t = e, o = $(() => ({
      "--width": t.width,
      "--height": t.height,
      "--radius": t.radius
    }));
    return (s, n) => (i(), p("div", {
      class: "t-skeleton",
      style: w(o.value)
    }, null, 4));
  }
}), vo = /* @__PURE__ */ _(mo, [["__scopeId", "data-v-877bbdb5"]]), _o = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(e) {
    const t = e, o = $(() => {
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
      style: w(o.value)
    }, null, 4));
  }
}), yo = /* @__PURE__ */ _(_o, [["__scopeId", "data-v-42cb3d71"]]), xo = () => ({
  install: (e) => {
    Te(), e.component("t-app", Ie), e.component("t-screen", _e), e.component("t-swipe-screen", mt), e.component("t-cable", st), e.component("t-toolbar", _t), e.component("t-content", ve), e.component("t-card", nt), e.component("t-refresher", it), e.component("t-button", J), e.component("t-back-button", gt), e.component("t-present", L), e.component("t-text", te), e.component("t-sheet", $t), e.component("t-gesture-indicator", ye), e.component("t-input", zt), e.component("t-textarea", Bt), e.component("t-rich-text", Pt), e.component("t-grid", Dt), e.component("t-grid-item", qt), e.component("t-divider", Wt), e.component("t-toggle-password", Ft), e.component("t-loading-icon", K), e.component("t-alert", de), e.component("t-avatar", Ut), e.component("t-collapse", Zt), e.component("t-toast", fe), e.component("t-switch", eo), e.component("t-tab", oo), e.component("t-tabs", no), e.component("t-loading-app", ao), e.component("t-checkbox", uo), e.component("t-keyboard", fo), e.component("t-skeleton", vo), e.component("t-ripple", yo);
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
  T as screenController,
  me as useKeyboard
};
