import { createElementBlock as p, openBlock as i, renderSlot as g, defineComponent as h, ref as m, computed as w, reactive as ue, watch as W, onMounted as U, Fragment as q, withDirectives as F, createCommentVNode as I, normalizeStyle as T, normalizeClass as B, vShow as K, createElementVNode as $, createVNode as j, createBlock as V, withCtx as P, toDisplayString as A, renderList as G, createTextVNode as M, createApp as J, h as Q, provide as de, unref as O, onUnmounted as re, resolveDynamicComponent as ke, markRaw as $e, inject as pe, useAttrs as xe, nextTick as ce } from "vue";
import { gesture as ae } from "@toife/gesture";
import { useRouter as fe, useRoute as we } from "vue-router";
const Te = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), Se = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, Be = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !Te(t.target) && Se();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, ze = {}, Ce = { class: "t-app" };
function Ie(t, o) {
  return i(), p("div", Ce, [
    g(t.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ _(ze, [["render", Ie]]), Ve = /* @__PURE__ */ h({
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
    const s = m(0), n = m(!1), l = m(), u = m(), r = t, v = e, y = w(() => n.value || r.keepalive), d = m(!1), a = ue({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), c = w(() => r.duration / 1e3 + "s"), f = (x) => {
      r.backdrop ? x?.backdropOpacity && (a["--t-present-backdrop-opacity"] = x.backdropOpacity) : a["--t-present-backdrop-opacity"] = "0", x?.transition && (a["--t-present-transition"] = x.transition), x?.contentTransform && (a["--t-present-content-transform"] = x.contentTransform), x?.contentOpacity && (a["--t-present-content-opacity"] = x.contentOpacity);
    }, k = () => {
      if (r.bounce !== void 0 && !d.value) {
        d.value = !0;
        let x = r.bounce;
        (r.placement == "bottom" || r.placement == "right") && (x = `calc(${r.bounce} * -1)`), f({
          contentTransform: x,
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          f({
            contentTransform: "0px"
          });
        }, r.duration);
      } else
        f({
          contentTransform: "0px",
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, b = () => {
      let x = "0px", se = "1";
      r.placement == "bottom" || r.placement == "right" ? x = "100%" : r.placement == "top" || r.placement == "left" ? x = "-100%" : r.placement == "center" && (x = "0px", se = "0"), f({
        contentTransform: x,
        transition: c.value,
        contentOpacity: se,
        backdropOpacity: "0"
      });
    };
    W(() => r.visible, () => {
      r.visible ? (d.value = !1, n.value = !0, s.value = Ke.getNewIndex(), setTimeout(() => {
        k();
      }, 50)) : (b(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), o({
      render: f,
      open: k,
      close: b
    });
    const N = (x) => {
      x.preventDefault(), v("dismiss", "backdrop");
    };
    return U(() => {
      r.visible ? k() : b();
    }), (x, se) => (i(), p(q, null, [
      y.value ? F((i(), p("div", {
        key: 0,
        class: B(["t-present", [{ [x.placement]: !0 }, r.class]]),
        ref_key: "present",
        ref: u,
        style: T([a, { zIndex: s.value }, r.style])
      }, [
        g(x.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [K, n.value]
      ]) : I("", !0),
      y.value ? F((i(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: N,
        ref_key: "backdrop",
        ref: l,
        style: T([a, { zIndex: s.value - 1 }, r.style])
      }, null, 4)), [
        [K, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), H = /* @__PURE__ */ _(Ve, [["__scopeId", "data-v-51935b1a"]]), Pe = /* @__PURE__ */ h({
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
    return (o, e) => (i(), p("span", {
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
}, Oe = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("button", {
      class: B(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: T(e.value)
    }, [
      F($("span", Re, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [K, !o.loading]
      ]),
      o.loading ? (i(), p("span", Ae, [
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
}, De = { class: "t-alert-content" }, We = { class: "t-alert-footer" }, Ne = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, u = m(), r = m(!1), v = () => {
      n.value = !0;
    }, y = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, d = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return o({
      open: v
    }), (a, c) => (i(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: d
    }, {
      default: P(() => [
        $("div", {
          class: B(["t-alert", { pop: r.value }]),
          ref_key: "container",
          ref: u
        }, [
          g(a.$slots, "header", {}, () => [
            s.title ? (i(), p("div", Xe, A(s.title), 1)) : I("", !0)
          ], !0),
          g(a.$slots, "content", {}, () => [
            $("div", De, A(s.message), 1)
          ], !0),
          g(a.$slots, "footer", {}, () => [
            $("div", We, [
              (i(!0), p(q, null, G(s.actions, (f) => (i(), V(Y, {
                color: f.color,
                variant: f.variant,
                onClick: (k) => y(f)
              }, {
                default: P(() => [
                  M(A(f.text), 1)
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
}), me = /* @__PURE__ */ _(Ne, [["__scopeId", "data-v-05d0c578"]]), wo = (t = {}) => ({
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
}), qe = /* @__PURE__ */ h({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, u = m(), r = m(!1), v = () => {
      n.value = !0;
    }, y = (a) => {
      n.value = !1, a.handler && a.handler(), l("dismiss", "choose", a?.data);
    }, d = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (n.value = !1, l("dismiss", a)) : a == "backdrop" && (r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300));
    };
    return W(() => s.visible, (a) => {
      a ? v() : close();
    }), o({
      open: v,
      close
    }), (a, c) => (i(), V(H, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: d
    }, {
      default: P(() => [
        $("div", {
          class: B(["t-action", { pop: r.value }]),
          ref_key: "container",
          ref: u
        }, [
          (i(!0), p(q, null, G(s.actions, (f) => (i(), p("div", null, [
            (i(!0), p(q, null, G(f, (k) => (i(), V(Y, {
              color: k.color,
              size: k.size,
              variant: k.variant,
              onClick: (b) => y(k),
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
}), Le = { class: "t-loading" }, He = /* @__PURE__ */ h({
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
    }), (r, v) => (i(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        $("div", Le, [
          g(r.$slots, "default", {}, () => [
            j(Z, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Fe = /* @__PURE__ */ _(He, [["__scopeId", "data-v-8f84c14e"]]), So = (t = {}) => {
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
}, X = ue([]), ee = m(!0), C = m(!1), R = m(-1), z = w(() => X[R.value]), L = w(() => X[R.value + 1] || void 0), E = w(() => X[X.length - 2]), ve = w(() => !C.value && ee.value && E.value), D = (t = !0) => {
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
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    C.value = !0;
    const o = L.value.target, e = D();
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
    if (!L.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    C.value = !0;
    const o = L.value.target, e = D();
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
}, S = {
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
  nextScreen: L
}, ot = { class: "t-toast-content" }, st = /* @__PURE__ */ h({
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
    const s = t, n = e, l = m(!1), u = m(!1), r = m(!1), v = () => {
      u.value = !0, r.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, y = () => {
      r.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    W(() => s.visible, (a) => {
      a ? v() : y();
    });
    const d = w(() => {
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
      open: v,
      close: y
    }), (a, c) => u.value ? (i(), p("div", {
      key: 0,
      class: B(["t-toast", { [s.placement]: !0, open: l.value, closing: r.value }]),
      style: T({ "--space": s.space, ...d.value })
    }, [
      g(a.$slots, "content", {}, () => [
        $("div", ot, A(s.message), 1)
      ], !0)
    ], 6)) : I("", !0);
  }
}), ye = /* @__PURE__ */ _(st, [["__scopeId", "data-v-2802d43f"]]), Bo = (t = {}) => ({
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
const rt = /* @__PURE__ */ h({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const o = t, { height: e } = _e();
    return de("cableState", {
      placement: o.placement
    }), (s, n) => (i(), p("div", {
      class: B(["t-cable", { keyboard: o.keyboard && O(e) > 0, [o.placement]: !0 }]),
      style: T({ "--t-keyboard-height": O(e) + "px", "--t-keyboard-transition": O(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), at = /* @__PURE__ */ _(rt, [["__scopeId", "data-v-6cae224b"]]), lt = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-card",
      style: T(e.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), ct = {}, it = { class: "t-content" };
function ut(t, o) {
  return i(), p("div", it, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ge = /* @__PURE__ */ _(ct, [["render", ut], ["__scopeId", "data-v-ce0031a0"]]), dt = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(t, { emit: o }) {
    const e = o, s = t, n = m(0), l = m(!1), u = m();
    let r, v = !1;
    const y = () => {
      l.value = !1, n.value = 0, v = !1;
    }, d = () => {
      v = !0, l.value = !0, n.value = s.threshold, e("refresh", y);
    }, a = () => {
      n.value = 0, l.value = !1, v = !1, e("cancel");
    };
    return W(() => u.value, () => {
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
          l.value || v || e("start");
        },
        move({ deltaY: f, initialDirection: k }) {
          if (l.value || v || k != "down") return;
          if (s.variant == "max" && f >= s.threshold) {
            d();
            return;
          }
          const b = f < 0 ? 0 : f;
          n.value = b, e("move", b);
        },
        up({ deltaY: f, initialDirection: k }) {
          l.value || v || k != "down" || (s.variant == "up" && f >= s.threshold ? d() : a());
        },
        cancel() {
          l.value || v || a();
        }
      }, {
        passive: !1
      }));
    }), re(() => {
      r && r.destroy();
    }), (c, f) => F((i(), p("div", {
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
  return i(), p("div", mt, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const be = /* @__PURE__ */ _(ft, [["render", vt], ["__scopeId", "data-v-c2a3436c"]]), yt = /* @__PURE__ */ h({
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
    const u = n.router || fe(), r = n.route || we(), v = u.getRoutes(), y = m();
    for (let c of v)
      e[c.name] = c.component || c.components;
    const d = (c) => {
      c && S.addScreen({
        name: c,
        target: null,
        component: $e(e[c] || null)
      });
    }, a = (c, f) => {
      !f || S.screens[c].target || (S.addScreenEl(c, f.$el), S.nextScreen && S.next(n.variant, () => {
        s("change");
      }));
    };
    return W(() => r.name, (c, f) => {
      c != S.currentScreen.value?.name && (S.lastScreen.value?.name == c ? S.back(n.variant, () => {
        s("change");
      }) : d(r.name));
    }), U(() => {
      d(r.name), l = ae(document.body, {
        beforeEvent(c) {
          return !!S.isSwipeable.value;
        },
        fast({ initialDirection: c }) {
          S.lastScreen.value && c == "right" && u.back();
        },
        move({ deltaX: c, initialDirection: f }) {
          f == "right" && S.move(n.variant, c);
        },
        up({ deltaX: c, initialDirection: f }) {
          if (f != "right") {
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
    }), (c, f) => (i(), p(q, null, [
      (i(!0), p(q, null, G(O(S).screens, (k, b) => (i(), V(be, {
        ref_for: !0,
        ref: (N) => a(b, N),
        style: T({ zIndex: b + (b == O(S).screens.length - 1 ? 2 : 1) }),
        key: b
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
        style: T({ zIndex: O(S).screens.length })
      }, null, 4)
    ], 64));
  }
}), _t = /* @__PURE__ */ _(yt, [["__scopeId", "data-v-4d584b03"]]), gt = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = pe("cableState"), s = w(() => o?.placement || e?.placement);
    return (n, l) => (i(), p("div", {
      class: B(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: T({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), bt = /* @__PURE__ */ _(gt, [["__scopeId", "data-v-1ee9866d"]]), ht = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(t) {
    const o = t, e = xe(), s = o.router || fe(), n = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      S.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, u) => l.to || O(S).lastScreen ? (i(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        u[0] || (u[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), kt = /* @__PURE__ */ _(ht, [["__scopeId", "data-v-dcf9d363"]]), $t = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ne = /* @__PURE__ */ _($t, [["__scopeId", "data-v-f0f94f05"]]), xt = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (i(), p("div", {
      class: B(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), he = /* @__PURE__ */ _(xt, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ h({
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
    indicator: { type: Boolean, default: !0 },
    style: {}
  },
  emits: ["dismiss"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(), l = m(), u = m(!1);
    let r = null;
    const v = w(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), y = (a) => {
      s("dismiss", a);
    }, d = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return W(() => n.value, (a) => {
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
          d(), c == v.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: c, deltaX: f, initialDirection: k }) {
          if (k != v.value) return;
          let b = 0;
          e.placement == "bottom" || e.placement == "top" ? b = c : b = f, e.placement == "bottom" && (b = c > 0 ? c : 0), e.placement == "top" && (b = c < 0 ? c : 0), e.placement == "left" && (b = f < 0 ? f : 0), e.placement == "right" && (b = f > 0 ? f : 0), (e.placement == "bottom" && (b >= 10 || this.isMoving) || e.placement == "top" && (b <= -10 || this.isMoving) || e.placement == "left" && (b <= -10 || this.isMoving) || e.placement == "right" && (b >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: b + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: c, deltaX: f, initialDirection: k }) {
          if (this.isMoving = !1, d(), k != v.value) {
            l.value.open();
            return;
          }
          let b, N, x;
          e.placement == "bottom" || e.placement == "top" ? (b = n.value.offsetHeight, x = c) : (b = n.value.offsetWidth, x = f), N = x / b * 100, N > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, d(), l.value.open();
        }
      }));
    }), re(() => {
      r && r.destroy();
    }), (a, c) => (i(), V(H, {
      ref_key: "present",
      ref: l,
      class: B(e.class),
      placement: e.placement,
      backdrop: a.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: y,
      style: T(e.style)
    }, {
      default: P(() => [
        e.gesture && e.indicator && e.placement != "center" ? (i(), V(he, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        $("div", {
          class: B(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: a.rounded }]),
          style: T({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          g(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), Tt = /* @__PURE__ */ _(wt, [["__scopeId", "data-v-729ed53a"]]), St = { class: "t-input-label" }, Bt = { class: "t-input-content" }, zt = ["placeholder", "value", "type", "readonly"], Ct = /* @__PURE__ */ h({
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
    const e = t, s = o, n = m(!1), l = m(null), u = w(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), r = (d) => {
      s("update:modelValue", d.target.value);
    }, v = async (d) => {
      n.value = !0;
    }, y = () => {
      n.value = !1;
    };
    return (d, a) => (i(), p("div", {
      class: B(["t-input", {
        rounded: d.rounded,
        ["size-" + d.size]: !0,
        ["variant-" + d.variant]: !0,
        focus: n.value,
        "has-value": u.value,
        readonly: d.readonly
      }])
    }, [
      $("label", null, [
        $("span", St, A(d.label), 1),
        $("div", Bt, [
          g(d.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: d.placeholder,
            value: d.modelValue,
            type: d.type,
            onInput: r,
            onFocus: v,
            onBlur: y,
            readonly: d.readonly
          }, null, 40, zt),
          g(d.$slots, "end", {}, void 0, !0)
        ])
      ]),
      d.error ? (i(), V(ne, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          M(A(d.error), 1)
        ]),
        _: 1
      })) : d.help ? (i(), V(ne, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          M(A(d.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ _(Ct, [["__scopeId", "data-v-11ddaa71"]]), Et = {};
function Vt(t, o) {
  return i(), p("textarea");
}
const Pt = /* @__PURE__ */ _(Et, [["render", Vt]]), Rt = {};
function At(t, o) {
  return i(), p("div");
}
const Ot = /* @__PURE__ */ _(Rt, [["render", At]]), Xt = {}, Dt = { class: "t-grid" };
function Wt(t, o) {
  return i(), p("div", Dt);
}
const Nt = /* @__PURE__ */ _(Xt, [["render", Wt]]), qt = {}, Mt = { class: "t-grid-item" };
function Lt(t, o) {
  return i(), p("div", Mt);
}
const Ht = /* @__PURE__ */ _(qt, [["render", Lt]]), Ft = /* @__PURE__ */ h({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const o = t;
    return (e, s) => (i(), p("div", {
      class: B(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Kt = /* @__PURE__ */ _(Ft, [["__scopeId", "data-v-47ee8991"]]), Gt = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(), u = w(() => {
      let y = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (y = `var(--t-color-status-${e.color})`), {
        "--color": y
      };
    }), r = () => l.value?.parentElement?.querySelector?.("input");
    U(() => {
      let y = r();
      y && (n.value = y.type != "password", s("change", n.value));
    });
    const v = () => {
      let y = r();
      y && (n.value = !n.value, n.value ? y.type = "text" : y.type = "password", s("change", n.value));
    };
    return (y, d) => (i(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(u.value),
      onClick: v
    }, [
      n.value ? g(y.$slots, "on", { key: 0 }, () => [
        d[0] || (d[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : g(y.$slots, "off", { key: 1 }, () => [
        d[1] || (d[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Ut = /* @__PURE__ */ _(Gt, [["__scopeId", "data-v-3268e9e3"]]), jt = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, n) => (i(), p("div", {
      class: B(["t-avatar", { square: s.square }]),
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
}, eo = { class: "t-collapse-content" }, to = /* @__PURE__ */ h({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(""), u = m(), r = () => {
      n.value = !n.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (v, y) => (i(), p("div", {
      class: B(["t-collapse", { open: n.value }]),
      style: T({ "--height": l.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: r
      }, [
        g(v.$slots, "icon"),
        $("div", Qt, [
          g(v.$slots, "title", {}, () => [
            M(A(e.title), 1)
          ])
        ]),
        g(v.$slots, "toggle", {}, () => [
          n.value ? (i(), p("div", Zt, [...y[0] || (y[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), p("div", Yt, [...y[1] || (y[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", eo, [
        $("div", {
          ref_key: "content",
          ref: u
        }, [
          g(v.$slots, "content", {}, () => [
            g(v.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), oo = /* @__PURE__ */ h({
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
    return (u, r) => (i(), p("div", {
      class: B(["t-switch", { on: e.modelValue }]),
      style: T(l.value),
      onClick: n
    }, [...r[0] || (r[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), so = /* @__PURE__ */ _(oo, [["__scopeId", "data-v-3616970e"]]), no = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = pe("tabsState"), s = w(() => e.activeValue.value === o.value), n = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, u) => (i(), p("li", {
      class: B(["t-tab", { active: s.value }])
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
}), ro = /* @__PURE__ */ _(no, [["__scopeId", "data-v-4b7f4e98"]]), ao = /* @__PURE__ */ h({
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
    const e = t, s = o, n = m("0px"), l = m(0), u = m(0), r = m(), v = w(() => {
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
    } : {}), d = () => {
      if (e.variant == "border-under") {
        let a = r.value.querySelector(".active");
        if (a) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let c = a.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, f = a.offsetWidth / 2;
            n.value = c + f - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let c = a.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, f = a.offsetHeight / 2;
            n.value = c + f - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let a = r.value.querySelector(".active");
        if (a) {
          let c = a.offsetWidth, f = a.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let k = a.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft;
            n.value = k + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let k = a.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop;
            n.value = k + "px";
          }
          l.value = c, u.value = f;
        }
      }
    };
    return de("tabsState", {
      activeValue: w(() => e.modelValue),
      color: v.value,
      size: e.size,
      variant: e.variant,
      setValue: (a) => {
        s("update:modelValue", a);
      }
    }), W(() => e.modelValue, async () => {
      await ce(), d();
    }), U(async () => {
      await ce(), d();
    }), (a, c) => (i(), p("ul", {
      ref_key: "container",
      ref: r,
      class: B(["t-tabs", { [a.placement]: !0, [`variant-${a.variant}`]: !0 }]),
      style: T([{ "--background": v.value.background, "--color": v.value.text }, y.value])
    }, [
      g(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), lo = /* @__PURE__ */ _(ao, [["__scopeId", "data-v-8d370631"]]), co = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(t) {
    return (o, e) => (i(), V(ge, null, {
      default: P(() => [
        j(Z, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), io = /* @__PURE__ */ _(co, [["__scopeId", "data-v-1436aa9f"]]), uo = { key: 0 }, po = {
  key: 0,
  class: "t-checkbox-label"
}, fo = /* @__PURE__ */ h({
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
    }), l = w(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), u = () => {
      if (e.multiple) {
        let r = e.modelValue;
        e.modelValue.includes(e.value) ? r.splice(r.indexOf(e.value), 1) : r.push(e.value), s("update:modelValue", r);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    };
    return (r, v) => (i(), p("div", {
      class: B(["t-checkbox", { active: l.value }]),
      style: T(n.value),
      onClick: u
    }, [
      $("div", {
        class: B(`t-checkbox-${r.type}`)
      }, [
        r.type == "radio" ? (i(), p("div", uo)) : I("", !0),
        r.type == "check" ? g(r.$slots, "icon", { key: 1 }, () => [
          v[0] || (v[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      g(r.$slots, "label", {}, () => [
        r.label ? (i(), p("span", po, A(e.label), 1)) : I("", !0)
      ], !0)
    ], 6));
  }
}), mo = /* @__PURE__ */ _(fo, [["__scopeId", "data-v-0e13abc3"]]), vo = /* @__PURE__ */ h({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = _e();
    return (e, s) => (i(), p("div", {
      class: "t-keyboard-space",
      style: T({ "--height": O(o) + "px" })
    }, null, 4));
  }
}), yo = /* @__PURE__ */ _(vo, [["__scopeId", "data-v-4b06018d"]]), _o = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), go = /* @__PURE__ */ _(_o, [["__scopeId", "data-v-877bbdb5"]]), bo = /* @__PURE__ */ h({
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
    return (s, n) => (i(), p("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), ho = /* @__PURE__ */ _(bo, [["__scopeId", "data-v-42cb3d71"]]), zo = () => ({
  install: (t) => {
    Be(), t.component("t-app", Ee), t.component("t-screen", be), t.component("t-swipe-screen", _t), t.component("t-cable", at), t.component("t-toolbar", bt), t.component("t-content", ge), t.component("t-card", lt), t.component("t-refresher", pt), t.component("t-button", Y), t.component("t-back-button", kt), t.component("t-present", H), t.component("t-text", ne), t.component("t-sheet", Tt), t.component("t-gesture-indicator", he), t.component("t-input", It), t.component("t-textarea", Pt), t.component("t-rich-text", Ot), t.component("t-grid", Nt), t.component("t-grid-item", Ht), t.component("t-divider", Kt), t.component("t-toggle-password", Ut), t.component("t-loading-icon", Z), t.component("t-alert", me), t.component("t-avatar", Jt), t.component("t-collapse", to), t.component("t-toast", ye), t.component("t-switch", so), t.component("t-tab", ro), t.component("t-tabs", lo), t.component("t-loading-app", io), t.component("t-checkbox", mo), t.component("t-keyboard-space", yo), t.component("t-skeleton", go), t.component("t-ripple", ho);
  }
});
export {
  Se as blurCurrentActive,
  To as createAction,
  wo as createAlert,
  So as createLoading,
  Bo as createToast,
  zo as createToife,
  Te as isFormElement,
  Ke as presentController,
  S as screenController,
  _e as useKeyboard
};
