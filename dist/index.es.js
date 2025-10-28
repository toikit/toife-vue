import { createElementBlock as f, openBlock as i, renderSlot as g, defineComponent as b, ref as v, computed as w, reactive as ue, watch as N, onMounted as j, Fragment as q, withDirectives as F, createCommentVNode as z, normalizeStyle as x, normalizeClass as B, vShow as K, createElementVNode as $, createVNode as G, createBlock as V, withCtx as P, toDisplayString as A, renderList as U, createTextVNode as M, createApp as J, h as Q, provide as de, unref as O, onUnmounted as re, resolveDynamicComponent as ke, markRaw as $e, inject as pe, useAttrs as Te, nextTick as ce } from "vue";
import { gesture as ae } from "@toife/gesture";
import { useRouter as fe, useRoute as we } from "vue-router";
const xe = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), Se = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, Be = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !xe(t.target) && Se();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, Ce = {}, Ie = { class: "t-app" };
function ze(t, o) {
  return i(), f("div", Ie, [
    g(t.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ _(Ce, [["render", ze]]), Ve = /* @__PURE__ */ b({
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
    const s = v(0), n = v(!1), l = v(), u = v(), r = t, d = e, y = w(() => n.value || r.keepalive), p = v(!1), a = ue({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), c = w(() => r.duration / 1e3 + "s"), m = (T) => {
      r.backdrop ? T?.backdropOpacity && (a["--t-present-backdrop-opacity"] = T.backdropOpacity) : a["--t-present-backdrop-opacity"] = "0", T.transition && (a["--t-present-transition"] = T.transition), T.contentTransform && (a["--t-present-content-transform"] = T.contentTransform), T.contentOpacity && (a["--t-present-content-opacity"] = T.contentOpacity);
    }, k = () => {
      if (r.bounce !== void 0 && !p.value) {
        p.value = !0;
        let T = r.bounce;
        (r.placement == "bottom" || r.placement == "right") && (T = `calc(${r.bounce} * -1)`), m({
          contentTransform: T,
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          m({
            contentTransform: "0px"
          });
        }, r.duration);
      } else
        m({
          contentTransform: "0px",
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, h = () => {
      let T = "0px", se = "1";
      r.placement == "bottom" || r.placement == "right" ? T = "100%" : r.placement == "top" || r.placement == "left" ? T = "-100%" : r.placement == "center" && (T = "0px", se = "0"), m({
        contentTransform: T,
        transition: c.value,
        contentOpacity: se,
        backdropOpacity: "0"
      });
    };
    N(() => r.visible, () => {
      r.visible ? (p.value = !1, n.value = !0, s.value = Ke.getNewIndex(), setTimeout(() => {
        k();
      }, 50)) : (h(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), o({
      render: m,
      open: k,
      close: h
    });
    const W = (T) => {
      T.preventDefault(), d("dismiss", "backdrop");
    };
    return j(() => {
      r.visible ? k() : h();
    }), (T, se) => (i(), f(q, null, [
      y.value ? F((i(), f("div", {
        key: 0,
        class: B(["t-present", [{ [T.placement]: !0 }, r.class]]),
        ref_key: "present",
        ref: u,
        style: x([a, { zIndex: s.value }, r.style])
      }, [
        g(T.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [K, n.value]
      ]) : z("", !0),
      y.value ? F((i(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: W,
        onTouchend: W,
        ref_key: "backdrop",
        ref: l,
        style: x([a, { zIndex: s.value - 1 }, r.style])
      }, null, 36)), [
        [K, n.value]
      ]) : z("", !0)
    ], 64));
  }
}), H = /* @__PURE__ */ _(Ve, [["__scopeId", "data-v-b7870f48"]]), Pe = /* @__PURE__ */ b({
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
    return (o, e) => (i(), f("span", {
      class: "t-loading-icon",
      style: x({
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
    const o = t, e = w(() => {
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
    return (s, n) => (i(), f("button", {
      class: B(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: x(e.value)
    }, [
      F($("span", Re, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [K, !o.loading]
      ]),
      o.loading ? (i(), f("span", Ae, [
        G(Z, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), Y = /* @__PURE__ */ _(Oe, [["__scopeId", "data-v-d8c9aca1"]]), Xe = {
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
    const s = t, n = e, l = v(!1), u = v(), r = v(!1), d = () => {
      l.value = !0;
    }, y = (a) => {
      l.value = !1, a.handler && a.handler(), n("dismiss", "choose", a?.data);
    }, p = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (l.value = !1, n("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return o({
      open: d
    }), (a, c) => (i(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: l.value,
      onDismiss: p
    }, {
      default: P(() => [
        $("div", {
          class: B(["t-alert", { pop: r.value }]),
          ref_key: "container",
          ref: u
        }, [
          g(a.$slots, "header", {}, () => [
            s.title ? (i(), f("div", Xe, A(s.title), 1)) : z("", !0)
          ], !0),
          g(a.$slots, "content", {}, () => [
            $("div", De, A(s.message), 1)
          ], !0),
          g(a.$slots, "footer", {}, () => [
            $("div", We, [
              (i(!0), f(q, null, U(s.actions, (m) => (i(), V(Y, {
                color: m.color,
                variant: m.variant,
                onClick: (k) => y(m)
              }, {
                default: P(() => [
                  M(A(m.text), 1)
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
}), me = /* @__PURE__ */ _(Ne, [["__scopeId", "data-v-fe19a4e9"]]), bo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = v();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(me, {
            ...t,
            ref: n,
            onDismiss: (u, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: r });
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
    const s = t, n = e, l = v(!1), u = v(), r = v(!1), d = () => {
      l.value = !0;
    }, y = (a) => {
      l.value = !1, a.handler && a.handler(), n("dismiss", "choose", a?.data);
    }, p = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (l.value = !1, n("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return N(() => s.visible, (a) => {
      a ? d() : close();
    }), o({
      open: d,
      close
    }), (a, c) => (i(), V(H, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: l.value,
      onDismiss: p
    }, {
      default: P(() => [
        $("div", {
          class: B(["t-action", { pop: r.value }]),
          ref_key: "container",
          ref: u
        }, [
          (i(!0), f(q, null, U(s.actions, (m) => (i(), f("div", null, [
            (i(!0), f(q, null, U(m, (k) => (i(), V(Y, {
              color: k.color,
              size: k.size,
              variant: k.variant,
              onClick: (h) => y(k),
              block: ""
            }, {
              default: P(() => [
                M(A(k.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Me = /* @__PURE__ */ _(qe, [["__scopeId", "data-v-7db152ee"]]), ho = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = v();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(Me, {
            ...t,
            ref: n,
            onDismiss: (u, r) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: r });
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
    const s = t, n = v(!1);
    return o({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (r, d) => (i(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        $("div", Le, [
          g(r.$slots, "default", {}, () => [
            G(Z, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Fe = /* @__PURE__ */ _(He, [["__scopeId", "data-v-8f84c14e"]]), ko = (t = {}) => {
  const o = v(), e = document.body.querySelector(".t-app");
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
}, ie = v(1e3), Ke = {
  getNewIndex() {
    return ie.value += 2, ie.value;
  }
}, X = ue([]), ee = v(!0), I = v(!1), R = v(-1), C = w(() => X[R.value]), L = w(() => X[R.value + 1] || void 0), E = w(() => X[X.length - 2]), ve = w(() => !I.value && ee.value && E.value), D = (t = !0) => {
  let e = C.value.target.closest(".t-app").offsetWidth;
  return t ? e + "px" : e;
}, te = {
  reset() {
    I.value = !0;
    const t = D(), o = C.value.target, e = E.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(t) {
    if (!ve.value) return;
    const o = D(!1), e = o + "px", s = t / o * 100, n = C.value.target, l = E.value.target;
    t > 15 && t <= o && (n.style.transition = "transform 0s ease", n.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s}))) scale(${0.5 + 0.5 / 100 * s}) perspective(${e}) rotateY(${30 - 30 / 100 * s}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!E.value) return;
    const o = D();
    C.value.target.style.transition = "transform 0.35s ease", C.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.35s ease", E.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      le(), I.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    I.value = !0;
    const o = L.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), C.value && (C.value.target.style.transitionOrigin = "left center", C.value.target.style.transition = "transform 0.35s ease", C.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1)) scale(0.5) perspective(${e}) rotateY(30deg)`), setTimeout(() => {
        I.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, oe = {
  reset() {
    I.value = !0;
    const t = D(), o = C.value.target, e = E.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(t) {
    const o = D(!1), e = o + "px", s = t / o * 100, n = C.value.target, l = E.value.target;
    t > 15 && t <= o && (n.style.transition = "transform 0s ease", n.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!E.value) return;
    const o = D();
    C.value.target.style.transition = "transform 0.35s ease", C.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.35s ease", E.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      le(), I.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    I.value = !0;
    const o = L.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), C.value && (C.value.target.style.transitionOrigin = "left center", C.value.target.style.transition = "transform 0.35s ease", C.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1))`), setTimeout(() => {
        I.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, Ue = (t) => {
  X.push(t);
}, je = (t, o) => {
  X[t].target = o;
}, le = (t) => {
  t || X.pop();
}, Ge = () => {
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
}, S = {
  isBusy: I,
  isSwipeable: ve,
  reset: tt,
  next: Ze,
  back: Ye,
  move: et,
  screens: X,
  addScreen: Ue,
  addScreenEl: je,
  removeScreen: le,
  removeAllScreen: Ge,
  lockSwipe: Je,
  unlockSwipe: Qe,
  swipeable: ee,
  currentScreen: C,
  lastScreen: E,
  nextScreen: L
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
    const s = t, n = e, l = v(!1), u = v(!1), r = v(!1), d = () => {
      u.value = !0, r.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, y = () => {
      r.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    N(() => s.visible, (a) => {
      a ? d() : y();
    });
    const p = w(() => {
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
    return o({
      open: d,
      close: y
    }), (a, c) => u.value ? (i(), f("div", {
      key: 0,
      class: B(["t-toast", { [s.placement]: !0, open: l.value, closing: r.value }]),
      style: x({ "--space": s.space, ...p.value })
    }, [
      g(a.$slots, "content", {}, () => [
        $("div", ot, A(s.message), 1)
      ], !0)
    ], 6)) : z("", !0);
  }
}), ye = /* @__PURE__ */ _(st, [["__scopeId", "data-v-2802d43f"]]), $o = (t = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const e = document.createElement("div"), s = v();
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
}), nt = v(0);
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
    }), (s, n) => (i(), f("div", {
      class: B(["t-cable", { keyboard: o.keyboard && O(e) > 0, [o.placement]: !0 }]),
      style: x({ "--t-keyboard-height": O(e) + "px", "--t-keyboard-transition": O(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), at = /* @__PURE__ */ _(rt, [["__scopeId", "data-v-27e0d794"]]), lt = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(t) {
    const o = t, e = w(() => {
      let s;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--background": o.color
      } : s = {
        "--background": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (i(), f("div", {
      class: "t-card",
      style: x(e.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), ct = {}, it = { class: "t-content" };
function ut(t, o) {
  return i(), f("div", it, [
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
    const e = o, s = t, n = v(0), l = v(!1), u = v();
    let r, d = !1;
    const y = () => {
      l.value = !1, n.value = 0, d = !1;
    }, p = () => {
      d = !0, l.value = !0, n.value = s.threshold, e("refresh", y);
    }, a = () => {
      n.value = 0, l.value = !1, d = !1, e("cancel");
    };
    return N(() => u.value, () => {
      r && r.destroy();
      let c = u.value.closest(".t-content");
      c && (r = ae(c, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(c.scrollTop > 0);
        },
        down() {
          l.value || d || e("start");
        },
        move({ deltaY: m, initialDirection: k }) {
          if (l.value || d || k != "down") return;
          if (s.variant == "max" && m >= s.threshold) {
            p();
            return;
          }
          const h = m < 0 ? 0 : m;
          n.value = h, e("move", h);
        },
        up({ deltaY: m, initialDirection: k }) {
          l.value || d || k != "down" || (s.variant == "up" && m >= s.threshold ? p() : a());
        },
        cancel() {
          l.value || d || a();
        }
      }, {
        passive: !1
      }));
    }), re(() => {
      r && r.destroy();
    }), (c, m) => F((i(), f("div", {
      class: B(["t-refresher", { safe: c.safe }]),
      ref_key: "container",
      ref: u
    }, [
      g(c.$slots, "default", {
        offset: n.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [K, n.value > 0]
    ]);
  }
}), pt = /* @__PURE__ */ _(dt, [["__scopeId", "data-v-c77146a5"]]), ft = {}, mt = { class: "t-screen" };
function vt(t, o) {
  return i(), f("div", mt, [
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
    const u = n.router || fe(), r = n.route || we(), d = u.getRoutes(), y = v();
    for (let c of d)
      e[c.name] = c.component || c.components;
    const p = (c) => {
      c && S.addScreen({
        name: c,
        target: null,
        component: $e(e[c] || null)
      });
    }, a = (c, m) => {
      !m || S.screens[c].target || (S.addScreenEl(c, m.$el), S.nextScreen && S.next(n.variant, () => {
        s("change");
      }));
    };
    return N(() => r.name, (c, m) => {
      c != S.currentScreen.value?.name && (S.lastScreen.value?.name == c ? S.back(n.variant, () => {
        s("change");
      }) : p(r.name));
    }), j(() => {
      p(r.name), l = ae(document.body, {
        beforeEvent(c) {
          return !!S.isSwipeable.value;
        },
        fast({ initialDirection: c }) {
          S.lastScreen.value && c == "right" && u.back();
        },
        move({ deltaX: c, initialDirection: m }) {
          m == "right" && S.move(n.variant, c);
        },
        up({ deltaX: c, initialDirection: m }) {
          if (m != "right") {
            S.reset(n.variant);
            return;
          }
          const k = y.value.offsetParent.offsetWidth;
          c / k * 100 >= 50 ? u.back() : S.reset(n.variant);
        },
        cancel() {
          S.reset(n.variant);
        }
      });
    }), re(() => {
      l && l.destroy(), S.removeAllScreen();
    }), (c, m) => (i(), f(q, null, [
      (i(!0), f(q, null, U(O(S).screens, (k, h) => (i(), V(be, {
        ref_for: !0,
        ref: (W) => a(h, W),
        style: x({ zIndex: h + (h == O(S).screens.length - 1 ? 2 : 1) }),
        key: h
      }, {
        default: P(() => [
          (i(), V(ke(k.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        ref_key: "backdrop",
        ref: y,
        style: x({ zIndex: O(S).screens.length })
      }, null, 4)
    ], 64));
  }
}), _t = /* @__PURE__ */ _(yt, [["__scopeId", "data-v-4d584b03"]]), gt = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = pe("cableState"), s = w(() => o?.placement || e?.placement);
    return (n, l) => (i(), f("div", {
      class: B(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: x({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
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
    const o = t, e = Te(), s = o.router || fe(), n = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      S.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, u) => l.to || O(S).lastScreen ? (i(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        u[0] || (u[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), kt = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-437fb635"]]), $t = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => {
      let s, n = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (n = `var(--t-color-status-${o.color})`), {
        "--color": n,
        "--font-size": s
      };
    });
    return (s, n) => (i(), f("span", {
      class: "t-text",
      style: x(e.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ne = /* @__PURE__ */ _($t, [["__scopeId", "data-v-f0f94f05"]]), Tt = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (i(), f("div", {
      class: B(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), he = /* @__PURE__ */ _(Tt, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ b({
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
    rounded: { type: Boolean, default: !1 },
    indicator: { type: Boolean, default: !0 },
    duration: { default: 200 },
    bounce: {},
    style: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = v(), l = v(), u = v(!1);
    let r = null;
    const d = w(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), y = (a) => {
      s("dismiss", a);
    }, p = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return N(() => n.value, (a) => {
      a && (r = ae(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(c) {
          return !(u.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: c }) {
          p(), c == d.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: c, deltaX: m, initialDirection: k }) {
          if (k != d.value) return;
          let h = 0;
          e.placement == "bottom" || e.placement == "top" ? h = c : h = m, e.placement == "bottom" && (h = c > 0 ? c : 0), e.placement == "top" && (h = c < 0 ? c : 0), e.placement == "left" && (h = m < 0 ? m : 0), e.placement == "right" && (h = m > 0 ? m : 0), (e.placement == "bottom" && (h >= 10 || this.isMoving) || e.placement == "top" && (h <= -10 || this.isMoving) || e.placement == "left" && (h <= -10 || this.isMoving) || e.placement == "right" && (h >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: h + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: c, deltaX: m, initialDirection: k }) {
          if (this.isMoving = !1, p(), k != d.value) {
            l.value.open();
            return;
          }
          let h, W, T;
          e.placement == "bottom" || e.placement == "top" ? (h = n.value.offsetHeight, T = c) : (h = n.value.offsetWidth, T = m), W = T / h * 100, W > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, p(), l.value.open();
        }
      }));
    }), re(() => {
      r && r.destroy();
    }), (a, c) => (i(), V(H, {
      ref_key: "present",
      ref: l,
      duration: e.duration,
      bounce: e.bounce,
      class: B(e.class),
      placement: e.placement,
      backdrop: a.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: y,
      style: x(e.style)
    }, {
      default: P(() => [
        e.gesture && e.indicator && e.placement != "center" ? (i(), V(he, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : z("", !0),
        $("div", {
          class: B(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: a.rounded }]),
          style: x({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["duration", "bounce", "class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), xt = /* @__PURE__ */ _(wt, [["__scopeId", "data-v-dcfbb6a3"]]), St = { class: "t-input-label" }, Bt = { class: "t-input-content" }, Ct = ["placeholder", "value", "type", "readonly"], It = /* @__PURE__ */ b({
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
    const e = t, s = o, n = v(!1), l = v(null), u = w(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), r = (p) => {
      s("update:modelValue", p.target.value);
    }, d = async (p) => {
      n.value = !0;
    }, y = () => {
      n.value = !1;
    };
    return (p, a) => (i(), f("div", {
      class: B(["t-input", {
        rounded: p.rounded,
        ["size-" + p.size]: !0,
        ["variant-" + p.variant]: !0,
        focus: n.value,
        "has-value": u.value,
        readonly: p.readonly
      }])
    }, [
      $("label", null, [
        $("span", St, A(p.label), 1),
        $("div", Bt, [
          g(p.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: p.placeholder,
            value: p.modelValue,
            type: p.type,
            onInput: r,
            onFocus: d,
            onBlur: y,
            readonly: p.readonly
          }, null, 40, Ct),
          g(p.$slots, "end", {}, void 0, !0)
        ])
      ]),
      p.error ? (i(), V(ne, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          M(A(p.error), 1)
        ]),
        _: 1
      })) : p.help ? (i(), V(ne, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          M(A(p.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ _(It, [["__scopeId", "data-v-11ddaa71"]]), Et = {};
function Vt(t, o) {
  return i(), f("textarea");
}
const Pt = /* @__PURE__ */ _(Et, [["render", Vt]]), Rt = {};
function At(t, o) {
  return i(), f("div");
}
const Ot = /* @__PURE__ */ _(Rt, [["render", At]]), Xt = { class: "t-grid" }, Dt = /* @__PURE__ */ b({
  __name: "t-grid",
  props: {
    gap: { default: 0 },
    template: { default: 1 }
  },
  setup(t) {
    return (o, e) => (i(), f("div", Xt));
  }
}), Wt = /* @__PURE__ */ _(Dt, [["__scopeId", "data-v-93ba455c"]]), Nt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const o = t;
    return (e, s) => (i(), f("div", {
      class: B(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), qt = /* @__PURE__ */ _(Nt, [["__scopeId", "data-v-47ee8991"]]), Mt = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = v(!1), l = v(), u = w(() => {
      let y = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (y = `var(--t-color-status-${e.color})`), {
        "--color": y
      };
    }), r = () => l.value?.parentElement?.querySelector?.("input");
    j(() => {
      let y = r();
      y && (n.value = y.type != "password", s("change", n.value));
    });
    const d = () => {
      let y = r();
      y && (n.value = !n.value, n.value ? y.type = "text" : y.type = "password", s("change", n.value));
    };
    return (y, p) => (i(), f("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: x(u.value),
      onClick: d
    }, [
      n.value ? g(y.$slots, "on", { key: 0 }, () => [
        p[0] || (p[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      n.value ? z("", !0) : g(y.$slots, "off", { key: 1 }, () => [
        p[1] || (p[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Lt = /* @__PURE__ */ _(Mt, [["__scopeId", "data-v-3268e9e3"]]), Ht = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, n) => (i(), f("div", {
      class: B(["t-avatar", { square: s.square }]),
      style: x({ "--size": e.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ft = /* @__PURE__ */ _(Ht, [["__scopeId", "data-v-1d223827"]]), Kt = { class: "t-collapse-title" }, Ut = {
  key: 0,
  class: "icon"
}, jt = {
  key: 1,
  class: "icon"
}, Gt = { class: "t-collapse-content" }, Jt = /* @__PURE__ */ b({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = v(!1), l = v(""), u = v(), r = () => {
      n.value = !n.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (d, y) => (i(), f("div", {
      class: B(["t-collapse", { open: n.value }]),
      style: x({ "--height": l.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: r
      }, [
        g(d.$slots, "icon"),
        $("div", Kt, [
          g(d.$slots, "title", {}, () => [
            M(A(e.title), 1)
          ])
        ]),
        g(d.$slots, "toggle", {}, () => [
          n.value ? (i(), f("div", Ut, [...y[0] || (y[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), f("div", jt, [...y[1] || (y[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", Gt, [
        $("div", {
          ref_key: "content",
          ref: u
        }, [
          g(d.$slots, "content", {}, () => [
            g(d.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Qt = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = () => {
      s("update:modelValue", !e.modelValue);
    }, l = w(() => {
      let u = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (u = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), u;
    });
    return (u, r) => (i(), f("div", {
      class: B(["t-switch", { on: e.modelValue }]),
      style: x(l.value),
      onClick: n
    }, [...r[0] || (r[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Zt = /* @__PURE__ */ _(Qt, [["__scopeId", "data-v-3616970e"]]), Yt = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = pe("tabsState"), s = w(() => e.activeValue.value === o.value), n = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, u) => (i(), f("li", {
      class: B(["t-tab", { active: s.value }])
    }, [
      G(Y, {
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
}), eo = /* @__PURE__ */ _(Yt, [["__scopeId", "data-v-4b7f4e98"]]), to = /* @__PURE__ */ b({
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
    const e = t, s = o, n = v("0px"), l = v(0), u = v(0), r = v(), d = w(() => {
      let a = "", c = "";
      return e.variant == "text" && (a = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? c = `var(--t-color-status-${e.color})` : c = e.color), e.variant == "border-under" && (c = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? a = `var(--t-color-status-${e.color})` : a = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (a = `var(--t-color-status-${e.color})`, c = `var(--t-color-status-${e.color}-text)`) : (a = e.color, c = "currentColor")), { background: a, text: c };
    }), y = w(() => e.variant == "border-under" ? {
      "--transform": n.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": u.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": n.value,
      "--radius": e.radius + "px"
    } : {}), p = () => {
      if (e.variant == "border-under") {
        let a = r.value.querySelector(".active");
        if (a) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let c = a.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, m = a.offsetWidth / 2;
            n.value = c + m - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let c = a.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, m = a.offsetHeight / 2;
            n.value = c + m - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let a = r.value.querySelector(".active");
        if (a) {
          let c = a.offsetWidth, m = a.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let k = a.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft;
            n.value = k + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let k = a.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop;
            n.value = k + "px";
          }
          l.value = c, u.value = m;
        }
      }
    };
    return de("tabsState", {
      activeValue: w(() => e.modelValue),
      color: d.value,
      size: e.size,
      variant: e.variant,
      setValue: (a) => {
        s("update:modelValue", a);
      }
    }), N(() => e.modelValue, async () => {
      await ce(), p();
    }), j(async () => {
      await ce(), p();
    }), (a, c) => (i(), f("ul", {
      ref_key: "container",
      ref: r,
      class: B(["t-tabs", { [a.placement]: !0, [`variant-${a.variant}`]: !0 }]),
      style: x([{ "--background": d.value.background, "--color": d.value.text }, y.value])
    }, [
      g(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), oo = /* @__PURE__ */ _(to, [["__scopeId", "data-v-8d370631"]]), so = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(t) {
    return (o, e) => (i(), V(ge, null, {
      default: P(() => [
        G(Z, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), no = /* @__PURE__ */ _(so, [["__scopeId", "data-v-1436aa9f"]]), ro = { key: 0 }, ao = {
  key: 0,
  class: "t-checkbox-label"
}, lo = /* @__PURE__ */ b({
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
    const e = t, s = o, n = w(() => {
      let r = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (r = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), r;
    }), l = w(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), u = (r) => {
      if (r.preventDefault(), r.stopPropagation(), e.multiple) {
        let d = e.modelValue;
        e.modelValue.includes(e.value) ? d.splice(d.indexOf(e.value), 1) : d.push(e.value), s("update:modelValue", d);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    };
    return (r, d) => (i(), f("div", {
      class: B(["t-checkbox", { active: l.value }]),
      style: x(n.value),
      onClick: u,
      onTouchend: u
    }, [
      $("div", {
        class: B(`t-checkbox-${r.type}`)
      }, [
        r.type == "radio" ? (i(), f("div", ro)) : z("", !0),
        r.type == "check" ? g(r.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : z("", !0)
      ], 2),
      g(r.$slots, "label", {}, () => [
        r.label ? (i(), f("span", ao, A(e.label), 1)) : z("", !0)
      ], !0)
    ], 38));
  }
}), co = /* @__PURE__ */ _(lo, [["__scopeId", "data-v-0f5d6aae"]]), io = /* @__PURE__ */ b({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = _e();
    return (e, s) => (i(), f("div", {
      class: "t-keyboard-space",
      style: x({ "--height": O(o) + "px" })
    }, null, 4));
  }
}), uo = /* @__PURE__ */ _(io, [["__scopeId", "data-v-4b06018d"]]), po = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(t) {
    const o = t, e = w(() => ({
      "--width": o.width,
      "--height": o.height,
      "--radius": o.radius
    }));
    return (s, n) => (i(), f("div", {
      class: "t-skeleton",
      style: x(e.value)
    }, null, 4));
  }
}), fo = /* @__PURE__ */ _(po, [["__scopeId", "data-v-877bbdb5"]]), mo = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(t) {
    const o = t, e = w(() => {
      let s = {};
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? s = {
        "--color": "var(--t-color-status-" + o.color + ")"
      } : s = {
        "--color": o.color
      } : s = {
        "--color": "var(--t-color-surface)"
      }, s;
    });
    return (s, n) => (i(), f("div", {
      class: "t-ripple",
      style: x(e.value)
    }, null, 4));
  }
}), vo = /* @__PURE__ */ _(mo, [["__scopeId", "data-v-42cb3d71"]]), To = () => ({
  install: (t) => {
    Be(), t.component("t-app", Ee), t.component("t-screen", be), t.component("t-swipe-screen", _t), t.component("t-cable", at), t.component("t-toolbar", bt), t.component("t-content", ge), t.component("t-card", lt), t.component("t-refresher", pt), t.component("t-button", Y), t.component("t-back-button", kt), t.component("t-present", H), t.component("t-text", ne), t.component("t-sheet", xt), t.component("t-gesture-indicator", he), t.component("t-input", zt), t.component("t-textarea", Pt), t.component("t-rich-text", Ot), t.component("t-grid", Wt), t.component("t-divider", qt), t.component("t-toggle-password", Lt), t.component("t-loading-icon", Z), t.component("t-alert", me), t.component("t-avatar", Ft), t.component("t-collapse", Jt), t.component("t-toast", ye), t.component("t-switch", Zt), t.component("t-tab", eo), t.component("t-tabs", oo), t.component("t-loading-app", no), t.component("t-checkbox", co), t.component("t-keyboard-space", uo), t.component("t-skeleton", fo), t.component("t-ripple", vo);
  }
});
export {
  Se as blurCurrentActive,
  ho as createAction,
  bo as createAlert,
  ko as createLoading,
  $o as createToast,
  To as createToife,
  xe as isFormElement,
  Ke as presentController,
  S as screenController,
  _e as useKeyboard
};
