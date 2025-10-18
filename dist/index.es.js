import { createElementBlock as p, openBlock as c, renderSlot as b, defineComponent as h, ref as v, computed as w, reactive as ie, watch as D, onMounted as G, Fragment as N, withDirectives as H, createCommentVNode as C, normalizeStyle as x, normalizeClass as S, vShow as F, createElementVNode as $, createVNode as U, createBlock as E, withCtx as V, toDisplayString as R, renderList as K, createTextVNode as q, createApp as j, h as J, provide as ue, unref as A, onUnmounted as re, resolveDynamicComponent as he, markRaw as ke, inject as de, useAttrs as $e, nextTick as le } from "vue";
import { gesture as ne } from "@toife/gesture";
import { useRouter as pe, useRoute as we } from "vue-router";
const xe = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), Te = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, Se = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !xe(t.target) && Te();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, g = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, r] of o)
    e[s] = r;
  return e;
}, Be = {}, ze = { class: "t-app" };
function Ce(t, o) {
  return c(), p("div", ze, [
    b(t.$slots, "default")
  ]);
}
const Ie = /* @__PURE__ */ g(Be, [["render", Ce]]), Ee = /* @__PURE__ */ h({
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
  setup(t, { expose: o, emit: e }) {
    const s = v(0), r = v(!1), l = v(), d = v(), a = t, f = e, y = w(() => r.value || a.keepalive), i = ie({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), n = (m) => {
      a.backdrop ? m?.backdropOpacity && (i["--t-present-backdrop-opacity"] = m.backdropOpacity) : i["--t-present-backdrop-opacity"] = "0", m?.transition && (i["--t-present-transition"] = m.transition, i["--t-present-transition"] = m.transition), m?.contentTransform && (i["--t-present-content-transform"] = m.contentTransform), m?.contentOpacity && (i["--t-present-content-opacity"] = m.contentOpacity);
    }, u = () => {
      n({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, _ = () => {
      let m = "0px", W = "1";
      a.placement == "bottom" || a.placement == "right" ? m = "100%" : a.placement == "top" || a.placement == "left" ? m = "-100%" : a.placement == "center" && (m = "0px", W = "0"), n({
        contentTransform: m,
        transition: "0.2s",
        contentOpacity: W,
        backdropOpacity: "0"
      });
    };
    D(() => a.visible, () => {
      a.visible ? (r.value = !0, s.value = Fe.getNewIndex(), setTimeout(() => {
        u();
      }, 50)) : (_(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: n,
      open: u,
      close: _
    });
    const k = (m) => {
      m.preventDefault(), f("dismiss", "backdrop");
    };
    return G(() => {
      a.visible ? u() : _();
    }), (m, W) => (c(), p(N, null, [
      y.value ? H((c(), p("div", {
        key: 0,
        class: S(["t-present", [{ [m.placement]: !0 }, a.class]]),
        ref_key: "present",
        ref: d,
        style: x([i, { zIndex: s.value }, a.style])
      }, [
        b(m.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [F, r.value]
      ]) : C("", !0),
      y.value ? H((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: k,
        ref_key: "backdrop",
        ref: l,
        style: x([i, { zIndex: s.value - 1 }, a.style])
      }, null, 4)), [
        [F, r.value]
      ]) : C("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ g(Ee, [["__scopeId", "data-v-e26ede54"]]), Ve = /* @__PURE__ */ h({
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
      style: x({
        width: t.size,
        height: t.size,
        borderTopColor: t.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), Q = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-7c463303"]]), Pe = { class: "t-button-content" }, Re = {
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
    return (s, r) => (c(), p("button", {
      class: S(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: x(e.value)
    }, [
      H($("span", Pe, [
        b(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [F, !o.loading]
      ]),
      o.loading ? (c(), p("span", Re, [
        U(Q, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : C("", !0)
    ], 6));
  }
}), Z = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-185a9e49"]]), Xe = {
  key: 0,
  class: "t-alert-header"
}, Oe = { class: "t-alert-content" }, De = { class: "t-alert-footer" }, We = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, r = v(!1), l = e, d = v(), a = v(!1), f = () => {
      r.value = !0;
    }, y = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, i = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return o({
      open: f
    }), (n, u) => (c(), E(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: i
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          b(n.$slots, "header", {}, () => [
            s.title ? (c(), p("div", Xe, R(s.title), 1)) : C("", !0)
          ], !0),
          b(n.$slots, "content", {}, () => [
            $("div", Oe, R(s.message), 1)
          ], !0),
          b(n.$slots, "footer", {}, () => [
            $("div", De, [
              (c(!0), p(N, null, K(s.actions, (_) => (c(), E(Z, {
                color: _.color,
                variant: _.variant,
                onClick: (k) => y(_)
              }, {
                default: V(() => [
                  q(R(_.text), 1)
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
}), fe = /* @__PURE__ */ g(We, [["__scopeId", "data-v-05d0c578"]]), wo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), r = v();
      e.appendChild(s);
      const l = j({
        render() {
          return J(fe, {
            ...t,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
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
  setup(t, { expose: o, emit: e }) {
    const s = t, r = v(!1), l = e, d = v(), a = v(!1), f = () => {
      r.value = !0;
    }, y = (n) => {
      r.value = !1, n.handler && n.handler(), l("dismiss", "choose", n?.data);
    }, i = (n) => {
      s.dismiss && s.dismiss.includes(n) ? (r.value = !1, l("dismiss", n)) : n == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return D(() => s.visible, (n) => {
      n ? f() : close();
    }), o({
      open: f,
      close
    }), (n, u) => (c(), E(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: i
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: d
        }, [
          (c(!0), p(N, null, K(s.actions, (_) => (c(), p("div", null, [
            (c(!0), p(N, null, K(_, (k) => (c(), E(Z, {
              color: k.color,
              size: k.size,
              variant: k.variant,
              onClick: (m) => y(k),
              block: ""
            }, {
              default: V(() => [
                q(R(k.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), qe = /* @__PURE__ */ g(Ne, [["__scopeId", "data-v-9fc077a4"]]), xo = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), r = v();
      e.appendChild(s);
      const l = j({
        render() {
          return J(qe, {
            ...t,
            ref: r,
            onDismiss: (d, a) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: d, data: a });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Me = { class: "t-loading" }, Le = /* @__PURE__ */ h({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, r = v(!1);
    return o({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), (a, f) => (c(), E(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: V(() => [
        $("div", Me, [
          b(a.$slots, "default", {}, () => [
            U(Q, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), He = /* @__PURE__ */ g(Le, [["__scopeId", "data-v-8f84c14e"]]), To = (t = {}) => {
  const o = v(), e = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        e && (r = document.createElement("div"), e.appendChild(r), s = j({
          render() {
            return J(He, {
              ...t,
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
}, ce = v(1e3), Fe = {
  getNewIndex() {
    return ce.value += 2, ce.value;
  }
}, X = ie([]), Y = v(!0), z = v(!1), P = v(-1), B = w(() => X[P.value]), M = w(() => X[P.value + 1] || void 0), I = w(() => X[X.length - 2]), me = w(() => !z.value && Y.value && I.value), O = (t = !0) => {
  let e = B.value.target.closest(".t-app").offsetWidth;
  return t ? e + "px" : e;
}, ee = {
  reset() {
    z.value = !0;
    const t = O(), o = B.value.target, e = I.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      z.value = !1;
    }, 400);
  },
  move(t) {
    if (!me.value) return;
    const o = O(!1), e = o + "px", s = t / o * 100, r = B.value.target, l = I.value.target;
    t > 15 && t <= o && (r.style.transition = "transform 0s ease", r.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s}))) scale(${0.5 + 0.5 / 100 * s}) perspective(${e}) rotateY(${30 - 30 / 100 * s}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!I.value) return;
    const o = O();
    B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = `translateX(${o}) scale(1)`, I.value.target.style.transition = "transform 0.35s ease", I.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), z.value = !0, setTimeout(() => {
      ae(), z.value = !1, P.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!M.value) return;
    if (P.value == -1) {
      P.value += 1, t && t();
      return;
    }
    z.value = !0;
    const o = M.value.target, e = O();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), B.value && (B.value.target.style.transitionOrigin = "left center", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1)) scale(0.5) perspective(${e}) rotateY(30deg)`), setTimeout(() => {
        z.value = !1, P.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, te = {
  reset() {
    z.value = !0;
    const t = O(), o = B.value.target, e = I.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      z.value = !1;
    }, 400);
  },
  move(t) {
    const o = O(!1), e = o + "px", s = t / o * 100, r = B.value.target, l = I.value.target;
    t > 15 && t <= o && (r.style.transition = "transform 0s ease", r.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!I.value) return;
    const o = O();
    B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = `translateX(${o}) scale(1)`, I.value.target.style.transition = "transform 0.35s ease", I.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), z.value = !0, setTimeout(() => {
      ae(), z.value = !1, P.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!M.value) return;
    if (P.value == -1) {
      P.value += 1, t && t();
      return;
    }
    z.value = !0;
    const o = M.value.target, e = O();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), B.value && (B.value.target.style.transitionOrigin = "left center", B.value.target.style.transition = "transform 0.35s ease", B.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1))`), setTimeout(() => {
        z.value = !1, P.value += 1, t && t();
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
  Y.value = !1;
}, Je = () => {
  Y.value = !0;
}, Qe = (t, o) => {
  t == "scale" && ee.next(o), t == "transform" && te.next(o);
}, Ze = (t, o) => {
  t == "scale" && ee.back(o), t == "transform" && te.back(o);
}, Ye = (t, o) => {
  t == "scale" && ee.move(o), t == "transform" && te.move(o);
}, et = (t) => {
  t == "scale" && ee.reset(), t == "transform" && te.reset();
}, T = {
  isBusy: z,
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
  swipeable: Y,
  currentScreen: B,
  lastScreen: I,
  nextScreen: M
}, tt = { class: "t-toast-content" }, ot = /* @__PURE__ */ h({
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
    const s = t, r = e, l = v(!1), d = v(!1), a = v(!1), f = () => {
      d.value = !0, a.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, y = () => {
      a.value = !0, setTimeout(() => {
        d.value = !1, l.value = !1, r("dismiss");
      }, 300);
    };
    D(() => s.visible, (n) => {
      n ? f() : y();
    });
    const i = w(() => {
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
      close: y
    }), (n, u) => d.value ? (c(), p("div", {
      key: 0,
      class: S(["t-toast", { [s.placement]: !0, open: l.value, closing: a.value }]),
      style: x({ "--space": s.space, ...i.value })
    }, [
      b(n.$slots, "content", {}, () => [
        $("div", tt, R(s.message), 1)
      ], !0)
    ], 6)) : C("", !0);
  }
}), ve = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-2802d43f"]]), So = (t = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const e = document.createElement("div"), s = v();
    o.appendChild(e);
    const r = j({
      render() {
        return J(ve, {
          ...t,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              r.unmount(), e.remove();
            }, 300);
          }
        });
      }
    });
    r.mount(e), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, t.duration + 10);
    }, 50);
  }
}), st = v(0);
function ye() {
  return {
    height: st
  };
}
const rt = /* @__PURE__ */ h({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const o = t, { height: e } = ye();
    return ue("cableState", {
      placement: o.placement
    }), (s, r) => (c(), p("div", {
      class: S(["t-cable", { keyboard: o.keyboard && A(e) > 0, [o.placement]: !0 }]),
      style: x({ "--t-keyboard-height": A(e) + "px", "--t-keyboard-transition": A(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), nt = /* @__PURE__ */ g(rt, [["__scopeId", "data-v-6cae224b"]]), at = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-card",
      style: x(e.value)
    }, [
      b(s.$slots, "default")
    ], 4));
  }
}), lt = {}, ct = { class: "t-content" };
function it(t, o) {
  return c(), p("div", ct, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const _e = /* @__PURE__ */ g(lt, [["render", it], ["__scopeId", "data-v-ce0031a0"]]), ut = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(t, { emit: o }) {
    const e = o, s = t, r = v(0), l = v(!1), d = v();
    let a, f = !1;
    const y = () => {
      l.value = !1, r.value = 0, f = !1;
    }, i = () => {
      f = !0, l.value = !0, r.value = s.threshold, e("refresh", y);
    }, n = () => {
      r.value = 0, l.value = !1, f = !1, e("cancel");
    };
    return D(() => d.value, () => {
      a && a.destroy();
      let u = d.value.closest(".t-content");
      u && (a = ne(u, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(u.scrollTop > 0);
        },
        down() {
          l.value || f || e("start");
        },
        move({ deltaY: _, initialDirection: k }) {
          if (l.value || f || k != "down") return;
          if (s.variant == "max" && _ >= s.threshold) {
            i();
            return;
          }
          const m = _ < 0 ? 0 : _;
          r.value = m, e("move", m);
        },
        up({ deltaY: _, initialDirection: k }) {
          l.value || f || k != "down" || (s.variant == "up" && _ >= s.threshold ? i() : n());
        },
        cancel() {
          l.value || f || n();
        }
      }, {
        passive: !1
      }));
    }), re(() => {
      a && a.destroy();
    }), (u, _) => H((c(), p("div", {
      class: S(["t-refresher", { safe: u.safe }]),
      ref_key: "container",
      ref: d
    }, [
      b(u.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [F, r.value > 0]
    ]);
  }
}), dt = /* @__PURE__ */ g(ut, [["__scopeId", "data-v-c77146a5"]]), pt = {}, ft = { class: "t-screen" };
function mt(t, o) {
  return c(), p("div", ft, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const ge = /* @__PURE__ */ g(pt, [["render", mt], ["__scopeId", "data-v-c2a3436c"]]), vt = /* @__PURE__ */ h({
  __name: "t-swipe-screen",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    let e = {};
    const s = o, r = t;
    let l;
    const d = r.router || pe(), a = r.route || we(), f = d.getRoutes();
    for (let n of f)
      e[n.name] = n.component || n.components;
    const y = (n) => {
      n && T.addScreen({
        name: n,
        target: null,
        component: ke(e[n] || null)
      });
    }, i = (n, u) => {
      !u || T.screens[n].target || (T.addScreenEl(n, u.$el), T.nextScreen && T.next(r.variant, () => {
        s("change");
      }));
    };
    return D(() => a.name, (n, u) => {
      n != T.currentScreen.value?.name && (T.lastScreen.value?.name == n ? T.back(r.variant, () => {
        s("change");
      }) : y(a.name));
    }), G(() => {
      y(a.name), l = ne(document.body, {
        beforeEvent(n) {
          return !!T.isSwipeable.value;
        },
        fast({ initialDirection: n }) {
          T.lastScreen.value && n == "right" && d.back();
        },
        move({ deltaX: n, initialDirection: u }) {
          u == "right" && T.move(r.variant, n);
        },
        up({ deltaX: n, initialDirection: u }) {
          if (u != "right") {
            T.reset(r.variant);
            return;
          }
          const _ = window.innerWidth;
          n / _ * 100 >= 50 ? d.back() : T.reset(r.variant);
        },
        cancel() {
          T.reset(r.variant);
        }
      });
    }), re(() => {
      l && l.destroy(), T.removeAllScreen();
    }), (n, u) => (c(), p(N, null, [
      (c(!0), p(N, null, K(A(T).screens, (_, k) => (c(), E(ge, {
        ref_for: !0,
        ref: (m) => i(k, m),
        style: x({ zIndex: k + (k == A(T).screens.length - 1 ? 2 : 1) }),
        key: k
      }, {
        default: V(() => [
          (c(), E(he(_.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: x({ zIndex: A(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), yt = /* @__PURE__ */ g(vt, [["__scopeId", "data-v-23e0cfda"]]), _t = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = de("cableState"), s = w(() => o?.placement || e?.placement);
    return (r, l) => (c(), p("div", {
      class: S(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: x({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
        b(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), gt = /* @__PURE__ */ g(_t, [["__scopeId", "data-v-1ee9866d"]]), bt = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(t) {
    const o = t, e = $e(), s = o.router || pe(), r = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      T.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, d) => l.to || A(T).lastScreen ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: r
    }, [
      b(l.$slots, "default", {}, () => [
        d[0] || (d[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : C("", !0);
  }
}), ht = /* @__PURE__ */ g(bt, [["__scopeId", "data-v-dcf9d363"]]), kt = /* @__PURE__ */ h({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => {
      let s, r = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (c(), p("span", {
      class: "t-text",
      style: x(e.value)
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), se = /* @__PURE__ */ g(kt, [["__scopeId", "data-v-f0f94f05"]]), $t = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (c(), p("div", {
      class: S(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), be = /* @__PURE__ */ g($t, [["__scopeId", "data-v-ed8f7308"]]), wt = /* @__PURE__ */ h({
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
    const e = t, s = o, r = v(), l = v(), d = v(!1);
    let a = null;
    const f = w(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), y = (n) => {
      s("dismiss", n);
    }, i = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return D(() => r.value, (n) => {
      n && (a = ne(r.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(u) {
          return !(d.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: u }) {
          i(), u == f.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: u, deltaX: _, initialDirection: k }) {
          if (k != f.value) return;
          let m = 0;
          e.placement == "bottom" || e.placement == "top" ? m = u : m = _, e.placement == "bottom" && (m = u > 0 ? u : 0), e.placement == "top" && (m = u < 0 ? u : 0), e.placement == "left" && (m = _ < 0 ? _ : 0), e.placement == "right" && (m = _ > 0 ? _ : 0), (e.placement == "bottom" && (m >= 10 || this.isMoving) || e.placement == "top" && (m <= -10 || this.isMoving) || e.placement == "left" && (m <= -10 || this.isMoving) || e.placement == "right" && (m >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: m + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: u, deltaX: _, initialDirection: k }) {
          if (this.isMoving = !1, i(), k != f.value) {
            l.value.open();
            return;
          }
          let m, W, oe;
          e.placement == "bottom" || e.placement == "top" ? (m = r.value.offsetHeight, oe = u) : (m = r.value.offsetWidth, oe = _), W = oe / m * 100, W > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, i(), l.value.open();
        }
      }));
    }), re(() => {
      a && a.destroy();
    }), (n, u) => (c(), E(L, {
      ref_key: "present",
      ref: l,
      class: S(e.class),
      placement: e.placement,
      backdrop: n.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: y,
      style: x(e.style)
    }, {
      default: V(() => [
        e.gesture && e.indicator && e.placement != "center" ? (c(), E(be, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : C("", !0),
        $("div", {
          class: S(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: n.rounded, radius: e.radius }]),
          style: x({ "--background": e.background }),
          ref_key: "sheet",
          ref: r
        }, [
          b(n.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-27e04f6f"]]), Tt = { class: "t-input-label" }, St = { class: "t-input-content" }, Bt = ["placeholder", "value", "type", "readonly"], zt = /* @__PURE__ */ h({
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
    const e = t, s = o, r = v(!1), l = v(null), d = w(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), a = (i) => {
      s("update:modelValue", i.target.value);
    }, f = async (i) => {
      r.value = !0;
    }, y = () => {
      r.value = !1;
    };
    return (i, n) => (c(), p("div", {
      class: S(["t-input", {
        rounded: i.rounded,
        ["size-" + i.size]: !0,
        ["variant-" + i.variant]: !0,
        focus: r.value,
        "has-value": d.value,
        readonly: i.readonly
      }])
    }, [
      $("label", null, [
        $("span", Tt, R(i.label), 1),
        $("div", St, [
          b(i.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: i.placeholder,
            value: i.modelValue,
            type: i.type,
            onInput: a,
            onFocus: f,
            onBlur: y,
            readonly: i.readonly
          }, null, 40, Bt),
          b(i.$slots, "end", {}, void 0, !0)
        ])
      ]),
      i.error ? (c(), E(se, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          q(R(i.error), 1)
        ]),
        _: 1
      })) : i.help ? (c(), E(se, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          q(R(i.help), 1)
        ]),
        _: 1
      })) : C("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ g(zt, [["__scopeId", "data-v-11ddaa71"]]), It = {};
function Et(t, o) {
  return c(), p("textarea");
}
const Vt = /* @__PURE__ */ g(It, [["render", Et]]), Pt = {};
function Rt(t, o) {
  return c(), p("div");
}
const At = /* @__PURE__ */ g(Pt, [["render", Rt]]), Xt = {}, Ot = { class: "t-grid" };
function Dt(t, o) {
  return c(), p("div", Ot);
}
const Wt = /* @__PURE__ */ g(Xt, [["render", Dt]]), Nt = {}, qt = { class: "t-grid-item" };
function Mt(t, o) {
  return c(), p("div", qt);
}
const Lt = /* @__PURE__ */ g(Nt, [["render", Mt]]), Ht = /* @__PURE__ */ h({
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
}), Ft = /* @__PURE__ */ g(Ht, [["__scopeId", "data-v-47ee8991"]]), Kt = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = v(!1), l = v(), d = w(() => {
      let y = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (y = `var(--t-color-status-${e.color})`), {
        "--color": y
      };
    }), a = () => l.value?.parentElement?.querySelector?.("input");
    G(() => {
      let y = a();
      y && (r.value = y.type != "password", s("change", r.value));
    });
    const f = () => {
      let y = a();
      y && (r.value = !r.value, r.value ? y.type = "text" : y.type = "password", s("change", r.value));
    };
    return (y, i) => (c(), p("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: x(d.value),
      onClick: f
    }, [
      r.value ? b(y.$slots, "on", { key: 0 }, () => [
        i[0] || (i[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : C("", !0),
      r.value ? C("", !0) : b(y.$slots, "off", { key: 1 }, () => [
        i[1] || (i[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ g(Kt, [["__scopeId", "data-v-3268e9e3"]]), Ut = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = w(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, r) => (c(), p("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: x({ "--size": e.value })
    }, [
      b(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), jt = /* @__PURE__ */ g(Ut, [["__scopeId", "data-v-24384c2f"]]), Jt = { class: "t-collapse-title" }, Qt = {
  key: 0,
  class: "icon"
}, Zt = {
  key: 1,
  class: "icon"
}, Yt = { class: "t-collapse-content" }, eo = /* @__PURE__ */ h({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = v(!1), l = v(""), d = v(), a = () => {
      r.value = !r.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (f, y) => (c(), p("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: x({ "--height": l.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        b(f.$slots, "icon"),
        $("div", Jt, [
          b(f.$slots, "title", {}, () => [
            q(R(e.title), 1)
          ])
        ]),
        b(f.$slots, "toggle", {}, () => [
          r.value ? (c(), p("div", Qt, [...y[0] || (y[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Zt, [...y[1] || (y[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", Yt, [
        $("div", {
          ref_key: "content",
          ref: d
        }, [
          b(f.$slots, "content", {}, () => [
            b(f.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), to = /* @__PURE__ */ h({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = () => {
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
      class: S(["t-switch", { on: e.modelValue }]),
      style: x(l.value),
      onClick: r
    }, [...a[0] || (a[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), oo = /* @__PURE__ */ g(to, [["__scopeId", "data-v-3616970e"]]), so = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = de("tabsState"), s = w(() => e.activeValue.value === o.value), r = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, d) => (c(), p("li", {
      class: S(["t-tab", { active: s.value }])
    }, [
      U(Z, {
        variant: "text",
        onClick: r,
        size: A(e).size,
        color: s.value ? A(e).color.text : void 0
      }, {
        default: V(() => [
          b(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), ro = /* @__PURE__ */ g(so, [["__scopeId", "data-v-4b7f4e98"]]), no = /* @__PURE__ */ h({
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
    const e = t, s = o, r = v("0px"), l = v(0), d = v(0), a = v(), f = w(() => {
      let n = "", u = "";
      return e.variant == "text" && (n = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? u = `var(--t-color-status-${e.color})` : u = e.color), e.variant == "border-under" && (u = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? n = `var(--t-color-status-${e.color})` : n = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (n = `var(--t-color-status-${e.color})`, u = `var(--t-color-status-${e.color}-text)`) : (n = e.color, u = "currentColor")), { background: n, text: u };
    }), y = w(() => e.variant == "border-under" ? {
      "--transform": r.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": d.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": r.value,
      "--radius": e.radius + "px"
    } : {}), i = () => {
      if (e.variant == "border-under") {
        let n = a.value.querySelector(".active");
        if (n) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let u = n.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft, _ = n.offsetWidth / 2;
            r.value = u + _ - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let u = n.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop, _ = n.offsetHeight / 2;
            r.value = u + _ - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let n = a.value.querySelector(".active");
        if (n) {
          let u = n.offsetWidth, _ = n.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let k = n.getBoundingClientRect().left - a.value.getBoundingClientRect().left + a.value.scrollLeft;
            r.value = k + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let k = n.getBoundingClientRect().top - a.value.getBoundingClientRect().top + a.value.scrollTop;
            r.value = k + "px";
          }
          l.value = u, d.value = _;
        }
      }
    };
    return ue("tabsState", {
      activeValue: w(() => e.modelValue),
      color: f.value,
      size: e.size,
      variant: e.variant,
      setValue: (n) => {
        s("update:modelValue", n);
      }
    }), D(() => e.modelValue, async () => {
      await le(), i();
    }), G(async () => {
      await le(), i();
    }), (n, u) => (c(), p("ul", {
      ref_key: "container",
      ref: a,
      class: S(["t-tabs", { [n.placement]: !0, [`variant-${n.variant}`]: !0 }]),
      style: x([{ "--background": f.value.background, "--color": f.value.text }, y.value])
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ao = /* @__PURE__ */ g(no, [["__scopeId", "data-v-8d370631"]]), lo = /* @__PURE__ */ h({
  __name: "t-loading-app",
  setup(t) {
    return (o, e) => (c(), E(_e, null, {
      default: V(() => [
        U(Q, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), co = /* @__PURE__ */ g(lo, [["__scopeId", "data-v-1436aa9f"]]), io = { key: 0 }, uo = {
  key: 0,
  class: "t-checkbox-label"
}, po = /* @__PURE__ */ h({
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
    const e = t, s = o, r = w(() => {
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
      class: S(["t-checkbox", { active: l.value }]),
      style: x(r.value),
      onClick: d
    }, [
      $("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", io)) : C("", !0),
        a.type == "check" ? b(a.$slots, "icon", { key: 1 }, () => [
          f[0] || (f[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : C("", !0)
      ], 2),
      b(a.$slots, "label", {}, () => [
        a.label ? (c(), p("span", uo, R(e.label), 1)) : C("", !0)
      ], !0)
    ], 6));
  }
}), fo = /* @__PURE__ */ g(po, [["__scopeId", "data-v-0e13abc3"]]), mo = /* @__PURE__ */ h({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = ye();
    return (e, s) => (c(), p("div", {
      class: "t-keyboard-space",
      style: x({ "--height": A(o) + "px" })
    }, null, 4));
  }
}), vo = /* @__PURE__ */ g(mo, [["__scopeId", "data-v-4b06018d"]]), yo = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-skeleton",
      style: x(e.value)
    }, null, 4));
  }
}), _o = /* @__PURE__ */ g(yo, [["__scopeId", "data-v-877bbdb5"]]), go = /* @__PURE__ */ h({
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
    return (s, r) => (c(), p("div", {
      class: "t-ripple",
      style: x(e.value)
    }, null, 4));
  }
}), bo = /* @__PURE__ */ g(go, [["__scopeId", "data-v-42cb3d71"]]), Bo = () => ({
  install: (t) => {
    Se(), t.component("t-app", Ie), t.component("t-screen", ge), t.component("t-swipe-screen", yt), t.component("t-cable", nt), t.component("t-toolbar", gt), t.component("t-content", _e), t.component("t-card", at), t.component("t-refresher", dt), t.component("t-button", Z), t.component("t-back-button", ht), t.component("t-present", L), t.component("t-text", se), t.component("t-sheet", xt), t.component("t-gesture-indicator", be), t.component("t-input", Ct), t.component("t-textarea", Vt), t.component("t-rich-text", At), t.component("t-grid", Wt), t.component("t-grid-item", Lt), t.component("t-divider", Ft), t.component("t-toggle-password", Gt), t.component("t-loading-icon", Q), t.component("t-alert", fe), t.component("t-avatar", jt), t.component("t-collapse", eo), t.component("t-toast", ve), t.component("t-switch", oo), t.component("t-tab", ro), t.component("t-tabs", ao), t.component("t-loading-app", co), t.component("t-checkbox", fo), t.component("t-keyboard-space", vo), t.component("t-skeleton", _o), t.component("t-ripple", bo);
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
  T as screenController,
  ye as useKeyboard
};
