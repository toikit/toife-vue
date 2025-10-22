import { createElementBlock as p, openBlock as c, renderSlot as g, defineComponent as b, ref as m, computed as w, reactive as ie, watch as N, onMounted as U, Fragment as q, withDirectives as F, createCommentVNode as I, normalizeStyle as T, normalizeClass as B, vShow as K, createElementVNode as k, createVNode as j, createBlock as V, withCtx as P, toDisplayString as A, renderList as G, createTextVNode as M, createApp as J, h as Q, provide as ue, unref as O, onUnmounted as ne, resolveDynamicComponent as he, markRaw as ke, inject as de, useAttrs as $e, nextTick as le } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRouter as pe, useRoute as we } from "vue-router";
const xe = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), Te = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, Se = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !xe(t.target) && Te();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of o)
    e[s] = n;
  return e;
}, Be = {}, ze = { class: "t-app" };
function Ce(t, o) {
  return c(), p("div", ze, [
    g(t.$slots, "default")
  ]);
}
const Ie = /* @__PURE__ */ _(Be, [["render", Ce]]), Ee = /* @__PURE__ */ b({
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
    const s = m(0), n = m(!1), l = m(), d = m(), a = t, f = e, v = w(() => n.value || a.keepalive), u = ie({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), r = w(() => a.duration / 1e3 + "s"), i = ($) => {
      a.backdrop ? $?.backdropOpacity && (u["--t-present-backdrop-opacity"] = $.backdropOpacity) : u["--t-present-backdrop-opacity"] = "0", $?.transition && (u["--t-present-transition"] = $.transition), $?.contentTransform && (u["--t-present-content-transform"] = $.contentTransform), $?.contentOpacity && (u["--t-present-content-opacity"] = $.contentOpacity);
    }, y = () => {
      if (a.bounce !== void 0) {
        let $ = a.bounce;
        (a.placement == "bottom" || a.placement == "right") && ($ = `calc(${a.bounce} * -1)`), i({
          contentTransform: $,
          transition: r.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          i({
            contentTransform: "0px"
          });
        }, a.duration);
      } else
        i({
          contentTransform: "0px",
          transition: r.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, h = () => {
      let $ = "0px", W = "1";
      a.placement == "bottom" || a.placement == "right" ? $ = "100%" : a.placement == "top" || a.placement == "left" ? $ = "-100%" : a.placement == "center" && ($ = "0px", W = "0"), i({
        contentTransform: $,
        transition: r.value,
        contentOpacity: W,
        backdropOpacity: "0"
      });
    };
    N(() => a.visible, () => {
      a.visible ? (n.value = !0, s.value = Fe.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : (h(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), o({
      render: i,
      open: y,
      close: h
    });
    const x = ($) => {
      $.preventDefault(), f("dismiss", "backdrop");
    };
    return U(() => {
      a.visible ? y() : h();
    }), ($, W) => (c(), p(q, null, [
      v.value ? F((c(), p("div", {
        key: 0,
        class: B(["t-present", [{ [$.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: T([u, { zIndex: s.value }, a.style])
      }, [
        g($.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [K, n.value]
      ]) : I("", !0),
      v.value ? F((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: x,
        ref_key: "backdrop",
        ref: l,
        style: T([u, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [K, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), H = /* @__PURE__ */ _(Ee, [["__scopeId", "data-v-68114639"]]), Ve = /* @__PURE__ */ b({
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
}), Z = /* @__PURE__ */ _(Ve, [["__scopeId", "data-v-7c463303"]]), Pe = { class: "t-button-content" }, Re = {
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
    return (s, n) => (c(), p("button", {
      class: B(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: T(e.value)
    }, [
      F(k("span", Pe, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [K, !o.loading]
      ]),
      o.loading ? (c(), p("span", Re, [
        j(Z, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), Y = /* @__PURE__ */ _(Ae, [["__scopeId", "data-v-185a9e49"]]), Oe = {
  key: 0,
  class: "t-alert-header"
}, Xe = { class: "t-alert-content" }, De = { class: "t-alert-footer" }, We = /* @__PURE__ */ b({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, d = m(), a = m(!1), f = () => {
      n.value = !0;
    }, v = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, u = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: f
    }), (r, i) => (c(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: u
    }, {
      default: P(() => [
        k("div", {
          class: B(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          g(r.$slots, "header", {}, () => [
            s.title ? (c(), p("div", Oe, A(s.title), 1)) : I("", !0)
          ], !0),
          g(r.$slots, "content", {}, () => [
            k("div", Xe, A(s.message), 1)
          ], !0),
          g(r.$slots, "footer", {}, () => [
            k("div", De, [
              (c(!0), p(q, null, G(s.actions, (y) => (c(), V(Y, {
                color: y.color,
                variant: y.variant,
                onClick: (h) => v(y)
              }, {
                default: P(() => [
                  M(A(y.text), 1)
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
}), fe = /* @__PURE__ */ _(We, [["__scopeId", "data-v-05d0c578"]]), wo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(fe, {
            ...t,
            ref: n,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ne = /* @__PURE__ */ b({
  __name: "t-action",
  props: {
    actions: {},
    visible: { type: Boolean, default: !1 },
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, n = m(!1), l = e, d = m(), a = m(!1), f = () => {
      n.value = !0;
    }, v = (r) => {
      n.value = !1, r.handler && r.handler(), l("dismiss", "choose", r?.data);
    }, u = (r) => {
      s.dismiss && s.dismiss.includes(r) ? (n.value = !1, l("dismiss", r)) : r == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return N(() => s.visible, (r) => {
      r ? f() : close();
    }), o({
      open: f,
      close
    }), (r, i) => (c(), V(H, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: u
    }, {
      default: P(() => [
        k("div", {
          class: B(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (c(!0), p(q, null, G(s.actions, (y) => (c(), p("div", null, [
            (c(!0), p(q, null, G(y, (h) => (c(), V(Y, {
              color: h.color,
              size: h.size,
              variant: h.variant,
              onClick: (x) => v(h),
              block: ""
            }, {
              default: P(() => [
                M(A(h.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), qe = /* @__PURE__ */ _(Ne, [["__scopeId", "data-v-9fc077a4"]]), xo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), n = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(qe, {
            ...t,
            ref: n,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Me = { class: "t-loading" }, Le = /* @__PURE__ */ b({
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
    }), (a, f) => (c(), V(H, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: P(() => [
        k("div", Me, [
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
}), He = /* @__PURE__ */ _(Le, [["__scopeId", "data-v-8f84c14e"]]), To = (t = {}) => {
  const o = m(), e = document.body.querySelector(".t-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        e && (n = document.createElement("div"), e.appendChild(n), s = J({
          render() {
            return Q(He, {
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
}, ce = m(1e3), Fe = {
  getNewIndex() {
    return ce.value += 2, ce.value;
  }
}, X = ie([]), ee = m(!0), C = m(!1), R = m(-1), z = w(() => X[R.value]), L = w(() => X[R.value + 1] || void 0), E = w(() => X[X.length - 2]), me = w(() => !C.value && ee.value && E.value), D = (t = !0) => {
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
    if (!me.value) return;
    const o = D(!1), e = o + "px", s = t / o * 100, n = z.value.target, l = E.value.target;
    t > 15 && t <= o && (n.style.transition = "transform 0s ease", n.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s}))) scale(${0.5 + 0.5 / 100 * s}) perspective(${e}) rotateY(${30 - 30 / 100 * s}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!E.value) return;
    const o = D();
    z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.35s ease", E.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), C.value = !0, setTimeout(() => {
      ae(), C.value = !1, R.value -= 1, t && t();
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
      ae(), C.value = !1, R.value -= 1, t && t();
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
}, Ke = (t) => {
  X.push(t);
}, Ge = (t, o) => {
  X[t].target = o;
}, ae = (t) => {
  t || X.pop();
}, Ue = () => {
  X.splice(0, X.length);
}, je = () => {
  ee.value = !1;
}, Je = () => {
  ee.value = !0;
}, Qe = (t, o) => {
  t == "scale" && te.next(o), t == "transform" && oe.next(o);
}, Ze = (t, o) => {
  t == "scale" && te.back(o), t == "transform" && oe.back(o);
}, Ye = (t, o) => {
  t == "scale" && te.move(o), t == "transform" && oe.move(o);
}, et = (t) => {
  t == "scale" && te.reset(), t == "transform" && oe.reset();
}, S = {
  isBusy: C,
  isSwipeable: me,
  reset: et,
  next: Qe,
  back: Ze,
  move: Ye,
  screens: X,
  addScreen: Ke,
  addScreenEl: Ge,
  removeScreen: ae,
  removeAllScreen: Ue,
  lockSwipe: je,
  unlockSwipe: Je,
  swipeable: ee,
  currentScreen: z,
  lastScreen: E,
  nextScreen: L
}, tt = { class: "t-toast-content" }, ot = /* @__PURE__ */ b({
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
    const s = t, n = e, l = m(!1), d = m(!1), a = m(!1), f = () => {
      d.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, v = () => {
      a.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, n("dismiss");
      }, 300);
    };
    N(() => s.visible, (r) => {
      r ? f() : v();
    });
    const u = w(() => {
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
    }), (r, i) => d.value ? (c(), p("div", {
      key: 0,
      class: B(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: T({ "--space": s.space, ...u.value })
    }, [
      g(r.$slots, "content", {}, () => [
        k("div", tt, A(s.message), 1)
      ], !0)
    ], 6)) : I("", !0);
  }
}), ve = /* @__PURE__ */ _(ot, [["__scopeId", "data-v-2802d43f"]]), So = (t = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const e = document.createElement("div"), s = m();
    o.appendChild(e);
    const n = J({
      render() {
        return Q(ve, {
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
}), st = m(0);
function ye() {
  return {
    height: st
  };
}
const nt = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const o = t, { height: e } = ye();
    return ue("cableState", {
      placement: o.placement
    }), (s, n) => (c(), p("div", {
      class: B(["t-cable", { keyboard: o.keyboard && O(e) > 0, [o.placement]: !0 }]),
      style: T({ "--t-keyboard-height": O(e) + "px", "--t-keyboard-transition": O(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), rt = /* @__PURE__ */ _(nt, [["__scopeId", "data-v-6cae224b"]]), at = /* @__PURE__ */ b({
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
    return (s, n) => (c(), p("div", {
      class: "t-card",
      style: T(e.value)
    }, [
      g(s.$slots, "default")
    ], 4));
  }
}), lt = {}, ct = { class: "t-content" };
function it(t, o) {
  return c(), p("div", ct, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ _(lt, [["render", it], ["__scopeId", "data-v-ce0031a0"]]), ut = /* @__PURE__ */ b({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(t, { emit: o }) {
    const e = o, s = t, n = m(0), l = m(!1), d = m();
    let a, f = !1;
    const v = () => {
      l.value = !1, n.value = 0, f = !1;
    }, u = () => {
      f = !0, l.value = !0, n.value = s.threshold, e("refresh", v);
    }, r = () => {
      n.value = 0, l.value = !1, f = !1, e("cancel");
    };
    return N(() => d.value, () => {
      a && a.destroy();
      let i = d.value.closest(".t-content");
      i && (a = re(i, {
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
            u();
            return;
          }
          const x = y < 0 ? 0 : y;
          n.value = x, e("move", x);
        },
        up({ deltaY: y, initialDirection: h }) {
          l.value || f || h != "down" || (s.variant == "up" && y >= s.threshold ? u() : r());
        },
        cancel() {
          l.value || f || r();
        }
      }, {
        passive: !1
      }));
    }), ne(() => {
      a && a.destroy();
    }), (i, y) => F((c(), p("div", {
      class: B(["t-refresher", { safe: i.safe }]),
      ref_key: "container",
      ref: d
    }, [
      g(i.$slots, "default", {
        offset: n.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [K, n.value > 0]
    ]);
  }
}), dt = /* @__PURE__ */ _(ut, [["__scopeId", "data-v-c77146a5"]]), pt = {}, ft = { class: "t-screen" };
function mt(t, o) {
  return c(), p("div", ft, [
    g(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ge = /* @__PURE__ */ _(pt, [["render", mt], ["__scopeId", "data-v-c2a3436c"]]), vt = /* @__PURE__ */ b({
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
    const d = n.router || pe(), a = n.route || we(), f = d.getRoutes();
    for (let r of f)
      e[r.name] = r.component || r.components;
    const v = (r) => {
      r && S.addScreen({
        name: r,
        target: null,
        component: ke(e[r] || null)
      });
    }, u = (r, i) => {
      !i || S.screens[r].target || (S.addScreenEl(r, i.$el), S.nextScreen && S.next(n.variant, () => {
        s("change");
      }));
    };
    return N(() => a.name, (r, i) => {
      r != S.currentScreen.value?.name && (S.lastScreen.value?.name == r ? S.back(n.variant, () => {
        s("change");
      }) : v(a.name));
    }), U(() => {
      v(a.name), l = re(document.body, {
        beforeEvent(r) {
          return !!S.isSwipeable.value;
        },
        fast({ initialDirection: r }) {
          S.lastScreen.value && r == "right" && d.back();
        },
        move({ deltaX: r, initialDirection: i }) {
          i == "right" && S.move(n.variant, r);
        },
        up({ deltaX: r, initialDirection: i }) {
          if (i != "right") {
            S.reset(n.variant);
            return;
          }
          const y = window.innerWidth;
          r / y * 100 >= 50 ? d.back() : S.reset(n.variant);
        },
        cancel() {
          S.reset(n.variant);
        }
      });
    }), ne(() => {
      l && l.destroy(), S.removeAllScreen();
    }), (r, i) => (c(), p(q, null, [
      (c(!0), p(q, null, G(O(S).screens, (y, h) => (c(), V(ge, {
        ref_for: !0,
        ref: (x) => u(h, x),
        style: T({ zIndex: h + (h == O(S).screens.length - 1 ? 2 : 1) }),
        key: h
      }, {
        default: P(() => [
          (c(), V(he(y.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: O(S).screens.length })
      }, null, 4)
    ], 64));
  }
}), yt = /* @__PURE__ */ _(vt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = de("cableState"), s = w(() => o?.placement || e?.placement);
    return (n, l) => (c(), p("div", {
      class: B(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: T({ "--t-size-toolbar": o.size })
    }, [
      k("div", null, [
        g(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), gt = /* @__PURE__ */ _(_t, [["__scopeId", "data-v-1ee9866d"]]), bt = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(t) {
    const o = t, e = $e(), s = o.router || pe(), n = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      S.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, d) => l.to || O(S).lastScreen ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      g(l.$slots, "default", {}, () => [
        d[0] || (d[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), ht = /* @__PURE__ */ _(bt, [["__scopeId", "data-v-dcf9d363"]]), kt = /* @__PURE__ */ b({
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
    return (s, n) => (c(), p("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), se = /* @__PURE__ */ _(kt, [["__scopeId", "data-v-f0f94f05"]]), $t = /* @__PURE__ */ b({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (c(), p("div", {
      class: B(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), be = /* @__PURE__ */ _($t, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ b({
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
    const e = t, s = o, n = m(), l = m(), d = m(!1);
    let a = null;
    const f = w(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), v = (r) => {
      s("dismiss", r);
    }, u = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return N(() => n.value, (r) => {
      r && (a = re(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(i) {
          return !(d.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: i }) {
          u(), i == f.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: i, deltaX: y, initialDirection: h }) {
          if (h != f.value) return;
          let x = 0;
          e.placement == "bottom" || e.placement == "top" ? x = i : x = y, e.placement == "bottom" && (x = i > 0 ? i : 0), e.placement == "top" && (x = i < 0 ? i : 0), e.placement == "left" && (x = y < 0 ? y : 0), e.placement == "right" && (x = y > 0 ? y : 0), (e.placement == "bottom" && (x >= 10 || this.isMoving) || e.placement == "top" && (x <= -10 || this.isMoving) || e.placement == "left" && (x <= -10 || this.isMoving) || e.placement == "right" && (x >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: x + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: i, deltaX: y, initialDirection: h }) {
          if (this.isMoving = !1, u(), h != f.value) {
            l.value.open();
            return;
          }
          let x, $, W;
          e.placement == "bottom" || e.placement == "top" ? (x = n.value.offsetHeight, W = i) : (x = n.value.offsetWidth, W = y), $ = W / x * 100, $ > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, u(), l.value.open();
        }
      }));
    }), ne(() => {
      a && a.destroy();
    }), (r, i) => (c(), V(H, {
      ref_key: "present",
      ref: l,
      class: B(e.class),
      placement: e.placement,
      backdrop: r.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: v,
      style: T(e.style)
    }, {
      default: P(() => [
        e.gesture && e.indicator && e.placement != "center" ? (c(), V(be, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        k("div", {
          class: B(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: r.rounded, radius: e.radius }]),
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
}), xt = /* @__PURE__ */ _(wt, [["__scopeId", "data-v-27e04f6f"]]), Tt = { class: "t-input-label" }, St = { class: "t-input-content" }, Bt = ["placeholder", "value", "type", "readonly"], zt = /* @__PURE__ */ b({
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
    const e = t, s = o, n = m(!1), l = m(null), d = w(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), a = (u) => {
      s("update:modelValue", u.target.value);
    }, f = async (u) => {
      n.value = !0;
    }, v = () => {
      n.value = !1;
    };
    return (u, r) => (c(), p("div", {
      class: B(["t-input", {
        rounded: u.rounded,
        ["size-" + u.size]: !0,
        ["variant-" + u.variant]: !0,
        focus: n.value,
        "has-value": d.value,
        readonly: u.readonly
      }])
    }, [
      k("label", null, [
        k("span", Tt, A(u.label), 1),
        k("div", St, [
          g(u.$slots, "start", {}, void 0, !0),
          k("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: u.placeholder,
            value: u.modelValue,
            type: u.type,
            onInput: a,
            onFocus: f,
            onBlur: v,
            readonly: u.readonly
          }, null, 40, Bt),
          g(u.$slots, "end", {}, void 0, !0)
        ])
      ]),
      u.error ? (c(), V(se, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          M(A(u.error), 1)
        ]),
        _: 1
      })) : u.help ? (c(), V(se, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          M(A(u.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ _(zt, [["__scopeId", "data-v-11ddaa71"]]), It = {};
function Et(t, o) {
  return c(), p("textarea");
}
const Vt = /* @__PURE__ */ _(It, [["render", Et]]), Pt = {};
function Rt(t, o) {
  return c(), p("div");
}
const At = /* @__PURE__ */ _(Pt, [["render", Rt]]), Ot = {}, Xt = { class: "t-grid" };
function Dt(t, o) {
  return c(), p("div", Xt);
}
const Wt = /* @__PURE__ */ _(Ot, [["render", Dt]]), Nt = {}, qt = { class: "t-grid-item" };
function Mt(t, o) {
  return c(), p("div", qt);
}
const Lt = /* @__PURE__ */ _(Nt, [["render", Mt]]), Ht = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const o = t;
    return (e, s) => (c(), p("div", {
      class: B(["t-divider", { [o.direction]: !0 }])
    }, null, 2));
  }
}), Ft = /* @__PURE__ */ _(Ht, [["__scopeId", "data-v-47ee8991"]]), Kt = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(), d = w(() => {
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
    return (v, u) => (c(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(d.value),
      onClick: f
    }, [
      n.value ? g(v.$slots, "on", { key: 0 }, () => [
        u[0] || (u[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : g(v.$slots, "off", { key: 1 }, () => [
        u[1] || (u[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ _(Kt, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, n) => (c(), p("div", {
      class: B(["t-avatar", { square: s.square }]),
      style: T({ "--size": e.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ _(Ut, [["__scopeId", "data-v-24384c2f"]]), Jt = { class: "t-collapse-title" }, Qt = {
  key: 0,
  class: "icon"
}, Zt = {
  key: 1,
  class: "icon"
}, Yt = { class: "t-collapse-content" }, eo = /* @__PURE__ */ b({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, n = m(!1), l = m(""), d = m(), a = () => {
      n.value = !n.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    return s("change", n.value), (f, v) => (c(), p("div", {
      class: B(["t-collapse", { open: n.value }]),
      style: T({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        g(f.$slots, "icon"),
        k("div", Jt, [
          g(f.$slots, "title", {}, () => [
            M(A(e.title), 1)
          ])
        ]),
        g(f.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", Qt, [...v[0] || (v[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Zt, [...v[1] || (v[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Yt, [
        k("div", {
          ref_key: "content",
          ref: d
        }, [
          g(f.$slots, "content", {}, () => [
            g(f.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), to = /* @__PURE__ */ b({
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
      let d = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (d = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), d;
    });
    return (d, a) => (c(), p("div", {
      class: B(["t-switch", { on: e.modelValue }]),
      style: T(l.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), oo = /* @__PURE__ */ _(to, [["__scopeId", "data-v-3616970e"]]), so = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = de("tabsState"), s = w(() => e.activeValue.value === o.value), n = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, d) => (c(), p("li", {
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
}), no = /* @__PURE__ */ _(so, [["__scopeId", "data-v-4b7f4e98"]]), ro = /* @__PURE__ */ b({
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
    const e = t, s = o, n = m("0px"), l = m(0), d = m(0), a = m(), f = w(() => {
      let r = "", i = "";
      return e.variant == "text" && (r = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? i = `var(--t-color-status-${e.color})` : i = e.color), e.variant == "border-under" && (i = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? r = `var(--t-color-status-${e.color})` : r = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (r = `var(--t-color-status-${e.color})`, i = `var(--t-color-status-${e.color}-text)`) : (r = e.color, i = "currentColor")), { background: r, text: i };
    }), v = w(() => e.variant == "border-under" ? {
      "--transform": n.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": d.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": n.value,
      "--radius": e.radius + "px"
    } : {}), u = () => {
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
          l.value = i, d.value = y;
        }
      }
    };
    return ue("tabsState", {
      activeValue: w(() => e.modelValue),
      color: f.value,
      size: e.size,
      variant: e.variant,
      setValue: (r) => {
        s("update:modelValue", r);
      }
    }), N(() => e.modelValue, async () => {
      await le(), u();
    }), U(async () => {
      await le(), u();
    }), (r, i) => (c(), p("ul", {
      ref_key: "container",
      ref: a,
      class: B(["t-tabs", { [r.placement]: !0, [`variant-${r.variant}`]: !0 }]),
      style: T([{ "--background": f.value.background, "--color": f.value.text }, v.value])
    }, [
      g(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ao = /* @__PURE__ */ _(ro, [["__scopeId", "data-v-8d370631"]]), lo = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(t) {
    return (o, e) => (c(), V(_e, null, {
      default: P(() => [
        j(Z, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), co = /* @__PURE__ */ _(lo, [["__scopeId", "data-v-1436aa9f"]]), io = { key: 0 }, uo = {
  key: 0,
  class: "t-checkbox-label"
}, po = /* @__PURE__ */ b({
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
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), l = w(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), d = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), s("update:modelValue", a);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    };
    return (a, f) => (c(), p("div", {
      class: B(["t-checkbox", { active: l.value }]),
      style: T(n.value),
      onClick: d
    }, [
      k("div", {
        class: B(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", io)) : I("", !0),
        a.type == "check" ? g(a.$slots, "icon", { key: 1 }, () => [
          f[0] || (f[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      g(a.$slots, "label", {}, () => [
        a.label ? (c(), p("span", uo, A(e.label), 1)) : I("", !0)
      ], !0)
    ], 6));
  }
}), fo = /* @__PURE__ */ _(po, [["__scopeId", "data-v-0e13abc3"]]), mo = /* @__PURE__ */ b({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = ye();
    return (e, s) => (c(), p("div", {
      class: "t-keyboard-space",
      style: T({ "--height": O(o) + "px" })
    }, null, 4));
  }
}), vo = /* @__PURE__ */ _(mo, [["__scopeId", "data-v-4b06018d"]]), yo = /* @__PURE__ */ b({
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
    return (s, n) => (c(), p("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ _(yo, [["__scopeId", "data-v-877bbdb5"]]), go = /* @__PURE__ */ b({
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
    return (s, n) => (c(), p("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), bo = /* @__PURE__ */ _(go, [["__scopeId", "data-v-42cb3d71"]]), Bo = () => ({
  install: (t) => {
    Se(), t.component("t-app", Ie), t.component("t-screen", ge), t.component("t-swipe-screen", yt), t.component("t-cable", rt), t.component("t-toolbar", gt), t.component("t-content", _e), t.component("t-card", at), t.component("t-refresher", dt), t.component("t-button", Y), t.component("t-back-button", ht), t.component("t-present", H), t.component("t-text", se), t.component("t-sheet", xt), t.component("t-gesture-indicator", be), t.component("t-input", Ct), t.component("t-textarea", Vt), t.component("t-rich-text", At), t.component("t-grid", Wt), t.component("t-grid-item", Lt), t.component("t-divider", Ft), t.component("t-toggle-password", Gt), t.component("t-loading-icon", Z), t.component("t-alert", fe), t.component("t-avatar", jt), t.component("t-collapse", eo), t.component("t-toast", ve), t.component("t-switch", oo), t.component("t-tab", no), t.component("t-tabs", ao), t.component("t-loading-app", co), t.component("t-checkbox", fo), t.component("t-keyboard-space", vo), t.component("t-skeleton", _o), t.component("t-ripple", bo);
  }
});
export {
  Te as blurCurrentActive,
  xo as createAction,
  wo as createAlert,
  To as createLoading,
  So as createToast,
  Bo as createToife,
  xe as isFormElement,
  Fe as presentController,
  S as screenController,
  ye as useKeyboard
};
