import { createElementBlock as p, openBlock as c, renderSlot as g, defineComponent as b, ref as m, computed as x, reactive as ue, watch as W, onMounted as U, Fragment as N, withDirectives as F, createCommentVNode as I, normalizeStyle as T, normalizeClass as S, vShow as K, createElementVNode as k, createVNode as j, createBlock as V, withCtx as P, toDisplayString as A, renderList as G, createTextVNode as q, createApp as J, h as Q, provide as de, unref as O, onUnmounted as re, resolveDynamicComponent as ke, markRaw as $e, inject as pe, useAttrs as we, nextTick as ce } from "vue";
import { gesture as ae } from "@toife/gesture";
import { useRouter as fe, useRoute as xe } from "vue-router";
const Te = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), Be = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, Se = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !Te(t.target) && Be();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, ze = {}, Ce = { class: "t-app" };
function Ie(t, o) {
  return c(), p("div", Ce, [
    g(t.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ _(ze, [["render", Ie]]), Ve = /* @__PURE__ */ b({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" },
    style: {},
    class: {},
    bounce: {},
    duration: { default: 200 }
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = m(0), n = m(!1), l = m(), u = m(), a = t, f = e, v = x(() => n.value || a.keepalive), d = m(!1), r = ue({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), i = x(() => a.duration / 1e3 + "s"), y = (w) => {
      a.backdrop ? w?.backdropOpacity && (r["--t-present-backdrop-opacity"] = w.backdropOpacity) : r["--t-present-backdrop-opacity"] = "0", w?.transition && (r["--t-present-transition"] = w.transition), w?.contentTransform && (r["--t-present-content-transform"] = w.contentTransform), w?.contentOpacity && (r["--t-present-content-opacity"] = w.contentOpacity);
    }, h = () => {
      if (a.bounce !== void 0 && !d.value) {
        d.value = !0;
        let w = a.bounce;
        (a.placement == "bottom" || a.placement == "right") && (w = `calc(${a.bounce} * -1)`), y({
          contentTransform: w,
          transition: i.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          y({
            contentTransform: "0px"
          });
        }, a.duration);
      } else
        y({
          contentTransform: "0px",
          transition: i.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, $ = () => {
      let w = "0px", se = "1";
      a.placement == "bottom" || a.placement == "right" ? w = "100%" : a.placement == "top" || a.placement == "left" ? w = "-100%" : a.placement == "center" && (w = "0px", se = "0"), y({
        contentTransform: w,
        transition: i.value,
        contentOpacity: se,
        backdropOpacity: "0"
      });
    };
    W(() => a.visible, () => {
      a.visible ? (d.value = !1, n.value = !0, s.value = Ke.getNewIndex(), setTimeout(() => {
        h();
      }, 50)) : ($(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), o({
      render: y,
      open: h,
      close: $
    });
    const H = (w) => {
      w.preventDefault(), f("dismiss", "backdrop");
    };
    return U(() => {
      a.visible ? h() : $();
    }), (w, se) => (c(), p(N, null, [
      v.value ? F((c(), p("div", {
        key: 0,
        class: S(["t-present", [{ [w.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: u,
        style: T([r, { zIndex: s.value }, a.style])
      }, [
        g(w.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [K, n.value]
      ]) : I("", !0),
      v.value ? F((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: H,
        ref_key: "backdrop",
        ref: l,
        style: T([r, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [K, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ _(Ve, [["__scopeId", "data-v-51935b1a"]]), Pe = /* @__PURE__ */ b({
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
  setup(t) {
    return (o, e) => (c(), p("span", {
      class: "t-loading-icon",
      style: T({
        width: t.size,
        height: t.size,
        borderTopColor: t.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), Z = /* @__PURE__ */ _(Pe, [["__scopeId", "data-v-7c463303"]]), Re = { class: "t-button-content" }, Ae = {
  key: 0,
  class: "loader"
}, Oe = /* @__PURE__ */ b({
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
  setup(t) {
    const o = t, e = x(() => {
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
    return (s, n) => (c(), p("button", {
      class: S(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: T(e.value)
    }, [
      F(k("span", Re, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [K, !o.loading]
      ]),
      o.loading ? (c(), p("span", Ae, [
        j(Z, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), Y = /* @__PURE__ */ _(Oe, [["__scopeId", "data-v-185a9e49"]]), Xe = {
  key: 0,
  class: "t-alert-header"
}, De = { class: "t-alert-content" }, We = { class: "t-alert-footer" }, Ne = /* @__PURE__ */ b({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, u = m(), a = m(!1), f = () => {
      n.value = !0;
    }, v = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, d = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: f
    }), (r, i) => (c(), V(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: d
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          g(r.$slots, "header", {}, () => [
            s.title ? (c(), p("div", Xe, A(s.title), 1)) : I("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            k("div", De, A(s.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            k("div", We, [
              (c(!0), p(N, null, G(s.actions, (y) => (c(), V(Y, {
                color: y.color,
                variant: y.variant,
                onClick: (h) => v(y)
              }, {
                default: P(() => [
                  q(A(y.text), 1)
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
}), me = /* @__PURE__ */ _(Ne, [["__scopeId", "data-v-05d0c578"]]), xo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(me, {
            ...t,
            ref: n,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), qe = /* @__PURE__ */ b({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, u = m(), a = m(!1), f = () => {
      n.value = !0;
    }, v = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, d = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return W(() => s.visible, (r) => {
      r ? f() : close();
    }), o({
      open: f,
      close
    }), (r, i) => (c(), V(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: d
    }, {
      default: P(() => [
        k("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: u
        }, [
          (c(!0), p(N, null, G(s.actions, (y) => (c(), p("div", null, [
            (c(!0), p(N, null, G(y, (h) => (c(), V(Y, {
              color: h.color,
              size: h.size,
              variant: h.variant,
              onClick: ($) => v(h),
              block: ""
            }, {
              default: P(() => [
                q(A(h.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Me = /* @__PURE__ */ _(qe, [["__scopeId", "data-v-9fc077a4"]]), To = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(Me, {
            ...t,
            ref: n,
            onDismiss: (u, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Le = { class: "t-loading" }, He = /* @__PURE__ */ b({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1);
    return o({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, f) => (c(), V(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        k("div", Le, [
          g(a.$slots, "default", {}, () => [
            j(Z, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Fe = /* @__PURE__ */ _(He, [["__scopeId", "data-v-8f84c14e"]]), Bo = (t = {}) => {
  const o = m(), e = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        e && (n = document.createElement("div"), e.appendChild(n), s = J({
          render() {
            return Q(Fe, {
              ...t,
              ref: o
            });
          }
        }), s.mount(n), setTimeout(() => {
          o.value?.open?.(), l(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((l) => {
        o.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), n?.remove?.(), l(!0);
        }, 300);
      });
    }
  };
}, ie = m(1e3), Ke = {
  getNewIndex() {
    return ie.value += 2, ie.value;
  }
}, X = ue([]), ee = m(!0), C = m(!1), R = m(-1), z = x(() => X[R.value]), M = x(() => X[R.value + 1] || void 0), E = x(() => X[X.length - 2]), ve = x(() => !C.value && ee.value && E.value), D = (t = !0) => {
  let e = z.value.target.closest(".t-app").offsetWidth;
  return t ? e + "px" : e;
}, te = {
  reset() {
    C.value = !0;
    const t = D(), o = z.value.target, e = E.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      C.value = !1;
    }, 400);
  },
  move(t) {
    if (!ve.value) return;
    const o = D(!1), e = o + "px", s = t / o * 100, n = z.value.target, l = E.value.target;
    t > 15 && t <= o && (n.style.transition = "transform 0s ease", n.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s}))) scale(${0.5 + 0.5 / 100 * s}) perspective(${e}) rotateY(${30 - 30 / 100 * s}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!E.value) return;
    const o = D();
    z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.35s ease", E.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), C.value = !0, setTimeout(() => {
      le(), C.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!M.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    C.value = !0;
    const o = M.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1)) scale(0.5) perspective(${e}) rotateY(30deg)`), setTimeout(() => {
        C.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, oe = {
  reset() {
    C.value = !0;
    const t = D(), o = z.value.target, e = E.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      C.value = !1;
    }, 400);
  },
  move(t) {
    const o = D(!1), e = o + "px", s = t / o * 100, n = z.value.target, l = E.value.target;
    t > 15 && t <= o && (n.style.transition = "transform 0s ease", n.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!E.value) return;
    const o = D();
    z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.35s ease", E.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), C.value = !0, setTimeout(() => {
      le(), C.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!M.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    C.value = !0;
    const o = M.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1))`), setTimeout(() => {
        C.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, Ge = (t) => {
  X.push(t);
}, Ue = (t, o) => {
  X[t].target = o;
}, le = (t) => {
  t || X.pop();
}, je = () => {
  X.splice(0, X.length);
}, Je = () => {
  ee.value = !1;
}, Qe = () => {
  ee.value = !0;
}, Ze = (t, o) => {
  t == "scale" && te.next(o), t == "transform" && oe.next(o);
}, Ye = (t, o) => {
  t == "scale" && te.back(o), t == "transform" && oe.back(o);
}, et = (t, o) => {
  t == "scale" && te.move(o), t == "transform" && oe.move(o);
}, tt = (t) => {
  t == "scale" && te.reset(), t == "transform" && oe.reset();
}, B = {
  isBusy: C,
  isSwipeable: ve,
  reset: tt,
  next: Ze,
  back: Ye,
  move: et,
  screens: X,
  addScreen: Ge,
  addScreenEl: Ue,
  removeScreen: le,
  removeAllScreen: je,
  lockSwipe: Je,
  unlockSwipe: Qe,
  swipeable: ee,
  currentScreen: z,
  lastScreen: E,
  nextScreen: M
}, ot = { class: "t-toast-content" }, st = /* @__PURE__ */ b({
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
  setup(t, { expose: o, emit: e }) {
    const s = t, n = e, l = m(!1), u = m(!1), a = m(!1), f = () => {
      u.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, v = () => {
      a.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    W(() => s.visible, (r) => {
      r ? f() : v();
    });
    const d = x(() => {
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
    return o({
      open: f,
      close: v
    }), (r, i) => u.value ? (c(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: T({ "--space": s.space, ...d.value })
    }, [
      g(r.$slots, "content", {}, () => [
        k("div", ot, A(s.message), 1)
      ], !0)
    ], 6)) : I("", !0);
  }
}), ye = /* @__PURE__ */ _(st, [["__scopeId", "data-v-2802d43f"]]), So = (t = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const e = document.createElement("div"), s = m();
    o.appendChild(e);
    const n = J({
      render() {
        return Q(ye, {
          ...t,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), e.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(e), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, t.duration + 10);
    }, 50);
  }
}), nt = m(0);
function _e() {
  return {
    height: nt
  };
}
const rt = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const o = t, { height: e } = _e();
    return de("cableState", {
      placement: o.placement
    }), (s, n) => (c(), p("div", {
      class: S(["t-cable", { keyboard: o.keyboard && O(e) > 0, [o.placement]: !0 }]),
      style: T({ "--t-keyboard-height": O(e) + "px", "--t-keyboard-transition": O(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), at = /* @__PURE__ */ _(rt, [["__scopeId", "data-v-6cae224b"]]), lt = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(t) {
    const o = t, e = x(() => {
      let s;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--background": o.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), p("div", {
      class: "t-card",
      style: T(e.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), ct = {}, it = { class: "t-content" };
function ut(t, o) {
  return c(), p("div", it, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ge = /* @__PURE__ */ _(ct, [["render", ut], ["__scopeId", "data-v-ce0031a0"]]), dt = /* @__PURE__ */ b({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(t, { emit: o }) {
    const e = o, s = t, n = m(0), l = m(!1), u = m();
    let a, f = !1;
    const v = () => {
      l.value = !1, n.value = 0, f = !1;
    }, d = () => {
      f = !0, l.value = !0, n.value = s.threshold, e("refresh", v);
    }, r = () => {
      n.value = 0, l.value = !1, f = !1, e("cancel");
    };
    return W(() => u.value, () => {
      a && a.destroy();
      let i = u.value.closest(".t-content");
      i && (a = ae(i, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(i.scrollTop > 0);
        },
        down() {
          l.value || f || e("start");
        },
        move({ deltaY: y, initialDirection: h }) {
          if (l.value || f || h != "down") return;
          if (s.variant == "max" && y >= s.threshold) {
            d();
            return;
          }
          const $ = y < 0 ? 0 : y;
          n.value = $, e("move", $);
        },
        up({ deltaY: y, initialDirection: h }) {
          l.value || f || h != "down" || (s.variant == "up" && y >= s.threshold ? d() : r());
        },
        cancel() {
          l.value || f || r();
        }
      }, {
        passive: !1
      }));
    }), re(() => {
      a && a.destroy();
    }), (i, y) => F((c(), p("div", {
      class: S(["t-refresher", { safe: i.safe }]),
      ref_key: "container",
      ref: u
    }, [
      g(i.$slots, "default", {
        offset: n.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [K, n.value > 0]
    ]);
  }
}), pt = /* @__PURE__ */ _(dt, [["__scopeId", "data-v-c77146a5"]]), ft = {}, mt = { class: "t-screen" };
function vt(t, o) {
  return c(), p("div", mt, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const be = /* @__PURE__ */ _(ft, [["render", vt], ["__scopeId", "data-v-c2a3436c"]]), yt = /* @__PURE__ */ b({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    let e = {};
    const s = o, n = t;
    let l;
    const u = n.router || fe(), a = n.route || xe(), f = u.getRoutes();
    for (let r of f)
      e[r.name] = r.component || r.components;
    const v = (r) => {
      r && B.addScreen({
        name: r,
        target: null,
        component: $e(e[r] || null)
      });
    }, d = (r, i) => {
      !i || B.screens[r].target || (B.addScreenEl(r, i.$el), B.nextScreen && B.next(n.variant, () => {
        s("change");
      }));
    };
    return W(() => a.name, (r, i) => {
      r != B.currentScreen.value?.name && (B.lastScreen.value?.name == r ? B.back(n.variant, () => {
        s("change");
      }) : v(a.name));
    }), U(() => {
      v(a.name), l = ae(document.body, {
        beforeEvent(r) {
          return !!B.isSwipeable.value;
        },
        fast({ initialDirection: r }) {
          B.lastScreen.value && r == "right" && u.back();
        },
        move({ deltaX: r, initialDirection: i }) {
          i == "right" && B.move(n.variant, r);
        },
        up({ deltaX: r, initialDirection: i }) {
          if (i != "right") {
            B.reset(n.variant);
            return;
          }
          const y = window.innerWidth;
          r / y * 100 >= 50 ? u.back() : B.reset(n.variant);
        },
        cancel() {
          B.reset(n.variant);
        }
      });
    }), re(() => {
      l && l.destroy(), B.removeAllScreen();
    }), (r, i) => (c(), p(N, null, [
      (c(!0), p(N, null, G(O(B).screens, (y, h) => (c(), V(be, {
        ref_for: !0,
        ref: ($) => d(h, $),
        style: T({ zIndex: h + (h == O(B).screens.length - 1 ? 2 : 1) }),
        key: h
      }, {
        default: P(() => [
          (c(), V(ke(y.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: O(B).screens.length })
      }, null, 4)
    ], 64));
  }
}), _t = /* @__PURE__ */ _(yt, [["__scopeId", "data-v-23e0cfda"]]), gt = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = pe("cableState"), s = x(() => o?.placement || e?.placement);
    return (n, l) => (c(), p("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: T({ "--t-size-toolbar": o.size })
    }, [
      k("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), bt = /* @__PURE__ */ _(gt, [["__scopeId", "data-v-1ee9866d"]]), ht = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(t) {
    const o = t, e = we(), s = o.router || fe(), n = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      B.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, u) => l.to || O(B).lastScreen ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        u[0] || (u[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), kt = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-dcf9d363"]]), $t = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = x(() => {
      let s, n = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (n = `var(--t-color-status-${o.color})`), {
        "--color": n,
        "--font-size": s
      };
    });
    return (s, n) => (c(), p("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ne = /* @__PURE__ */ _($t, [["__scopeId", "data-v-f0f94f05"]]), wt = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (c(), p("div", {
      class: S(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), he = /* @__PURE__ */ _(wt, [["__scopeId", "data-v-ed8f7308"]]), xt = /* @__PURE__ */ b({
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
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(), l = m(), u = m(!1);
    let a = null;
    const f = x(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), v = (r) => {
      s("dismiss", r);
    }, d = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return W(() => n.value, (r) => {
      r && (a = ae(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(i) {
          return !(u.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: i }) {
          d(), i == f.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: i, deltaX: y, initialDirection: h }) {
          if (h != f.value) return;
          let $ = 0;
          e.placement == "bottom" || e.placement == "top" ? $ = i : $ = y, e.placement == "bottom" && ($ = i > 0 ? i : 0), e.placement == "top" && ($ = i < 0 ? i : 0), e.placement == "left" && ($ = y < 0 ? y : 0), e.placement == "right" && ($ = y > 0 ? y : 0), (e.placement == "bottom" && ($ >= 10 || this.isMoving) || e.placement == "top" && ($ <= -10 || this.isMoving) || e.placement == "left" && ($ <= -10 || this.isMoving) || e.placement == "right" && ($ >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: $ + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: i, deltaX: y, initialDirection: h }) {
          if (this.isMoving = !1, d(), h != f.value) {
            l.value.open();
            return;
          }
          let $, H, w;
          e.placement == "bottom" || e.placement == "top" ? ($ = n.value.offsetHeight, w = i) : ($ = n.value.offsetWidth, w = y), H = w / $ * 100, H > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, d(), l.value.open();
        }
      }));
    }), re(() => {
      a && a.destroy();
    }), (r, i) => (c(), V(L, {
      ref_key: "present",
      ref: l,
      class: S(e.class),
      placement: e.placement,
      backdrop: r.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: v,
      style: T(e.style)
    }, {
      default: P(() => [
        e.gesture && e.indicator && e.placement != "center" ? (c(), V(he, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: r.rounded, radius: e.radius }]),
          style: T({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(r.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), Tt = /* @__PURE__ */ _(xt, [["__scopeId", "data-v-27e04f6f"]]), Bt = { class: "t-input-label" }, St = { class: "t-input-content" }, zt = ["placeholder", "value", "type", "readonly"], Ct = /* @__PURE__ */ b({
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
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(null), u = x(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), a = (d) => {
      s("update:modelValue", d.target.value);
    }, f = async (d) => {
      n.value = !0;
    }, v = () => {
      n.value = !1;
    };
    return (d, r) => (c(), p("div", {
      class: S(["t-input", {
        rounded: d.rounded,
        ["size-" + d.size]: !0,
        ["variant-" + d.variant]: !0,
        focus: n.value,
        "has-value": u.value,
        readonly: d.readonly
      }])
    }, [
      k("label", null, [
        k("span", Bt, A(d.label), 1),
        k("div", St, [
          g(d.$slots, "start", {}, void 0, !0),
          k("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: d.placeholder,
            value: d.modelValue,
            type: d.type,
            onInput: a,
            onFocus: f,
            onBlur: v,
            readonly: d.readonly
          }, null, 40, zt),
          g(d.$slots, "end", {}, void 0, !0)
        ])
      ]),
      d.error ? (c(), V(ne, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          q(A(d.error), 1)
        ]),
        _: 1
      })) : d.help ? (c(), V(ne, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          q(A(d.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ _(Ct, [["__scopeId", "data-v-11ddaa71"]]), Et = {};
function Vt(t, o) {
  return c(), p("textarea");
}
const Pt = /* @__PURE__ */ _(Et, [["render", Vt]]), Rt = {};
function At(t, o) {
  return c(), p("div");
}
const Ot = /* @__PURE__ */ _(Rt, [["render", At]]), Xt = {}, Dt = { class: "t-grid" };
function Wt(t, o) {
  return c(), p("div", Dt);
}
const Nt = /* @__PURE__ */ _(Xt, [["render", Wt]]), qt = {}, Mt = { class: "t-grid-item" };
function Lt(t, o) {
  return c(), p("div", Mt);
}
const Ht = /* @__PURE__ */ _(qt, [["render", Lt]]), Ft = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const o = t;
    return (e, s) => (c(), p("div", {
      class: S(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Kt = /* @__PURE__ */ _(Ft, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(), u = x(() => {
      let v = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (v = `var(--t-color-status-${e.color})`), {
        "--color": v
      };
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    U(() => {
      let v = a();
      v && (n.value = v.type != "password", s("change", n.value));
    });
    const f = () => {
      let v = a();
      v && (n.value = !n.value, n.value ? v.type = "text" : v.type = "password", s("change", n.value));
    };
    return (v, d) => (c(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(u.value),
      onClick: f
    }, [
      n.value ? g(v.$slots, "on", { key: 0 }, () => [
        d[0] || (d[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : g(v.$slots, "off", { key: 1 }, () => [
        d[1] || (d[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ _(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = x(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, n) => (c(), p("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: T({ "--size": e.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Jt = /* @__PURE__ */ _(jt, [["__scopeId", "data-v-24384c2f"]]), Qt = { class: "t-collapse-title" }, Zt = {
  key: 0,
  class: "icon"
}, Yt = {
  key: 1,
  class: "icon"
}, eo = { class: "t-collapse-content" }, to = /* @__PURE__ */ b({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(""), u = m(), a = () => {
      n.value = !n.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (f, v) => (c(), p("div", {
      class: S(["t-collapse", { open: n.value }]),
      style: T({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(f.$slots, "icon"),
        k("div", Qt, [
          g(f.$slots, "title", {}, () => [
            q(A(e.title), 1)
          ])
        ]),
        g(f.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", Zt, [...v[0] || (v[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Yt, [...v[1] || (v[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", eo, [
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
}), oo = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = () => {
      s("update:modelValue", !e.modelValue);
    }, l = x(() => {
      let u = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (u = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), u;
    });
    return (u, a) => (c(), p("div", {
      class: S(["t-switch", { on: e.modelValue }]),
      style: T(l.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), so = /* @__PURE__ */ _(oo, [["__scopeId", "data-v-3616970e"]]), no = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = pe("tabsState"), s = x(() => e.activeValue.value === o.value), n = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, u) => (c(), p("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      j(Y, {
        variant: "text",
        onClick: n,
        size: O(e).size,
        color: s.value ? O(e).color.text : void 0
      }, {
        default: P(() => [
          g(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), ro = /* @__PURE__ */ _(no, [["__scopeId", "data-v-4b7f4e98"]]), ao = /* @__PURE__ */ b({
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
  setup(t, { emit: o }) {
    const e = t, s = o, n = m("0px"), l = m(0), u = m(0), a = m(), f = x(() => {
      let r = "", i = "";
      return e.variant == "text" && (r = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? i = `var(--t-color-status-${e.color})` : i = e.color), e.variant == "border-under" && (i = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? r = `var(--t-color-status-${e.color})` : r = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (r = `var(--t-color-status-${e.color})`, i = `var(--t-color-status-${e.color}-text)`) : (r = e.color, i = "currentColor")), { background: r, text: i };
    }), v = x(() => e.variant == "border-under" ? {
      "--transform": n.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": u.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": n.value,
      "--radius": e.radius + "px"
    } : {}), d = () => {
      if (e.variant == "border-under") {
        let r = a.value.querySelector(".active");
        if (r) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let i = r.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft, y = r.offsetWidth / 2;
            n.value = i + y - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let i = r.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop, y = r.offsetHeight / 2;
            n.value = i + y - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let r = a.value.querySelector(".active");
        if (r) {
          let i = r.offsetWidth, y = r.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let h = r.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft;
            n.value = h + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let h = r.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop;
            n.value = h + "px";
          }
          l.value = i, u.value = y;
        }
      }
    };
    return de("tabsState", {
      activeValue: x(() => e.modelValue),
      color: f.value,
      size: e.size,
      variant: e.variant,
      setValue: (r) => {
        s("update:modelValue", r);
      }
    }), W(() => e.modelValue, async () => {
      await ce(), d();
    }), U(async () => {
      await ce(), d();
    }), (r, i) => (c(), p("ul", {
      ref_key: "container",
      ref: a,
      class: S(["t-tabs", { [r.placement]: !0, [`variant-${r.variant}`]: !0 }]),
      style: T([{ "--background": f.value.background, "--color": f.value.text }, v.value])
    }, [
      g(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), lo = /* @__PURE__ */ _(ao, [["__scopeId", "data-v-8d370631"]]), co = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(t) {
    return (o, e) => (c(), V(ge, null, {
      default: P(() => [
        j(Z, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), io = /* @__PURE__ */ _(co, [["__scopeId", "data-v-1436aa9f"]]), uo = { key: 0 }, po = {
  key: 0,
  class: "t-checkbox-label"
}, fo = /* @__PURE__ */ b({
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
  setup(t, { emit: o }) {
    const e = t, s = o, n = x(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), l = x(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), u = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), s("update:modelValue", a);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    };
    return (a, f) => (c(), p("div", {
      class: S(["t-checkbox", { active: l.value }]),
      style: T(n.value),
      onClick: u
    }, [
      k("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", uo)) : I("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          f[0] || (f[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      g(a.$slots, "label", {}, () => [
        a.label ? (c(), p("span", po, A(e.label), 1)) : I("", !0)
      ], !0)
    ], 6));
  }
}), mo = /* @__PURE__ */ _(fo, [["__scopeId", "data-v-0e13abc3"]]), vo = /* @__PURE__ */ b({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = _e();
    return (e, s) => (c(), p("div", {
      class: "t-keyboard-space",
      style: T({ "--height": O(o) + "px" })
    }, null, 4));
  }
}), yo = /* @__PURE__ */ _(vo, [["__scopeId", "data-v-4b06018d"]]), _o = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(t) {
    const o = t, e = x(() => ({
      "--width": o.width,
      "--height": o.height,
      "--radius": o.radius
    }));
    return (s, n) => (c(), p("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ _(_o, [["__scopeId", "data-v-877bbdb5"]]), bo = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(t) {
    const o = t, e = x(() => {
      let s = {};
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--color": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--color": o.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (c(), p("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), ho = /* @__PURE__ */ _(bo, [["__scopeId", "data-v-42cb3d71"]]), zo = () => ({
  install: (t) => {
    Se(), t.component("t-app", Ee), t.component("t-screen", be), t.component("t-swipe-screen", _t), t.component("t-cable", at), t.component("t-toolbar", bt), t.component("t-content", ge), t.component("t-card", lt), t.component("t-refresher", pt), t.component("t-button", Y), t.component("t-back-button", kt), t.component("t-present", L), t.component("t-text", ne), t.component("t-sheet", Tt), t.component("t-gesture-indicator", he), t.component("t-input", It), t.component("t-textarea", Pt), t.component("t-rich-text", Ot), t.component("t-grid", Nt), t.component("t-grid-item", Ht), t.component("t-divider", Kt), t.component("t-toggle-password", Ut), t.component("t-loading-icon", Z), t.component("t-alert", me), t.component("t-avatar", Jt), t.component("t-collapse", to), t.component("t-toast", ye), t.component("t-switch", so), t.component("t-tab", ro), t.component("t-tabs", lo), t.component("t-loading-app", io), t.component("t-checkbox", mo), t.component("t-keyboard-space", yo), t.component("t-skeleton", go), t.component("t-ripple", ho);
  }
});
export {
  Be as blurCurrentActive,
  To as createAction,
  xo as createAlert,
  Bo as createLoading,
  So as createToast,
  zo as createToife,
  Te as isFormElement,
  Ke as presentController,
  B as screenController,
  _e as useKeyboard
};
