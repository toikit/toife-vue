import { createElementBlock as f, openBlock as i, renderSlot as _, defineComponent as h, ref as m, computed as x, reactive as ie, watch as W, onMounted as L, Fragment as q, withDirectives as j, createCommentVNode as E, normalizeStyle as T, vShow as G, normalizeClass as B, createElementVNode as $, createVNode as ue, createBlock as C, withCtx as N, toDisplayString as A, renderList as K, createTextVNode as M, createApp as J, h as Q, provide as de, unref as O, onUnmounted as se, resolveDynamicComponent as ke, markRaw as $e, inject as pe, useAttrs as xe, nextTick as le } from "vue";
import { gesture as re } from "@toife/gesture";
import { useRouter as fe, useRoute as Te } from "vue-router";
const g = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, r] of o)
    e[s] = r;
  return e;
}, we = {}, Se = { class: "t-app" };
function Be(t, o) {
  return i(), f("div", Se, [
    _(t.$slots, "default")
  ]);
}
const ze = /* @__PURE__ */ g(we, [["render", Be]]), Ie = /* @__PURE__ */ h({
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
    const s = m(0), r = m(!1), l = m(), u = m(), n = t, p = e, v = x(() => r.value || n.keepalive), d = m(!1), a = ie({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), c = x(() => n.duration / 1e3 + "s"), y = (k) => {
      n.backdrop ? k?.backdropOpacity && (a["--t-present-backdrop-opacity"] = k.backdropOpacity) : a["--t-present-backdrop-opacity"] = "0", k.transition && (a["--t-present-transition"] = k.transition), k.contentTransform && (a["--t-present-content-transform"] = k.contentTransform), k.contentOpacity && (a["--t-present-content-opacity"] = k.contentOpacity);
    }, w = () => {
      if (n.bounce !== void 0 && !d.value) {
        d.value = !0;
        let k = n.bounce;
        (n.placement == "bottom" || n.placement == "right") && (k = `calc(${n.bounce} * -1)`), y({
          contentTransform: k,
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          y({
            contentTransform: "0px"
          });
        }, n.duration);
      } else
        y({
          contentTransform: "0px",
          transition: c.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, b = () => {
      let k = "0px", U = "1";
      n.placement == "bottom" || n.placement == "right" ? k = "100%" : n.placement == "top" || n.placement == "left" ? k = "-100%" : n.placement == "center" && (k = "0px", U = "0"), y({
        contentTransform: k,
        transition: c.value,
        contentOpacity: U,
        backdropOpacity: "0"
      });
    };
    W(() => n.visible, () => {
      n.visible ? (d.value = !1, r.value = !0, s.value = Me.getNewIndex(), setTimeout(() => {
        w();
      }, 50)) : (b(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: y,
      open: w,
      close: b
    });
    const P = (k) => {
      k.preventDefault(), p("dismiss", "backdrop");
    };
    return L(() => {
      n.visible ? w() : b();
    }), (k, U) => (i(), f(q, null, [
      v.value ? j((i(), f("div", {
        key: 0,
        class: "t-present-backdrop",
        onPointerup: P,
        ref_key: "backdrop",
        ref: l,
        style: T([a, { zIndex: s.value - 1 }, n.style])
      }, null, 36)), [
        [G, r.value]
      ]) : E("", !0),
      v.value ? j((i(), f("div", {
        key: 1,
        class: B(["t-present", [{ [k.placement]: !0 }, n.class]]),
        ref_key: "present",
        ref: u,
        style: T([a, { zIndex: s.value }, n.style])
      }, [
        _(k.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [G, r.value]
      ]) : E("", !0)
    ], 64));
  }
}), F = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-b910ec38"]]), Ee = /* @__PURE__ */ h({
  __name: "t-icon-spinner",
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
      class: "t-icon-spinner",
      style: T({
        width: t.size,
        height: t.size,
        borderTopColor: t.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), ne = /* @__PURE__ */ g(Ee, [["__scopeId", "data-v-6192deb4"]]), Pe = { class: "t-button-content" }, Ve = {
  key: 0,
  class: "loader"
}, Ce = /* @__PURE__ */ h({
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
    return (s, r) => (i(), f("button", {
      class: B(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: T(e.value)
    }, [
      j($("span", Pe, [
        _(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [G, !o.loading]
      ]),
      o.loading ? (i(), f("span", Ve, [
        ue(ne, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), Z = /* @__PURE__ */ g(Ce, [["__scopeId", "data-v-f1db05a6"]]), Re = {
  key: 0,
  class: "t-alert-header"
}, Ae = { class: "t-alert-content" }, Oe = { class: "t-alert-footer" }, Ne = /* @__PURE__ */ h({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, r = e, l = m(!1), u = m(), n = m(!1), p = () => {
      l.value = !0;
    }, v = (a) => {
      l.value = !1, a.handler && a.handler(), r("dismiss", "choose", a?.data);
    }, d = (a) => {
      s.dismiss && s.dismiss.includes(a) ? (l.value = !1, r("dismiss", a)) : a == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), (a, c) => (i(), C(F, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: l.value,
      onDismiss: d
    }, {
      default: N(() => [
        $("div", {
          class: B(["t-alert", { pop: n.value }]),
          ref_key: "container",
          ref: u
        }, [
          _(a.$slots, "header", {}, () => [
            s.title ? (i(), f("div", Re, A(s.title), 1)) : E("", !0)
          ], !0),
          _(a.$slots, "content", {}, () => [
            $("div", Ae, A(s.message), 1)
          ], !0),
          _(a.$slots, "footer", {}, () => [
            $("div", Oe, [
              (i(!0), f(q, null, K(s.actions, (y) => (i(), C(Z, {
                color: y.color,
                variant: y.variant,
                onPointerup: (w) => v(y)
              }, {
                default: N(() => [
                  M(A(y.text), 1)
                ]),
                _: 2
              }, 1032, ["color", "variant", "onPointerup"]))), 256))
            ])
          ], !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), me = /* @__PURE__ */ g(Ne, [["__scopeId", "data-v-9786ec4e"]]), _o = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), r = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(me, {
            ...t,
            ref: r,
            onDismiss: (u, n) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: n });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Xe = /* @__PURE__ */ h({
  __name: "t-action",
  props: {
    actions: { default: () => [] },
    visible: { type: Boolean, default: !1 },
    dismiss: { default: () => [] }
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = t, r = e, l = m(!1), u = m(), n = m(!1), p = () => {
      l.value = !0;
    }, v = () => {
      l.value = !1;
    }, d = (c) => {
      v(), c.handler && c.handler(), r("dismiss", "choose", c?.data);
    }, a = (c) => {
      s.dismiss && s.dismiss.includes(c) ? (v(), r("dismiss", c)) : c === "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return W(() => s.visible, (c) => {
      c ? p() : v();
    }, { immediate: !0 }), o({
      open: p,
      close: v
    }), (c, y) => (i(), C(F, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: l.value,
      onDismiss: a
    }, {
      default: N(() => [
        $("div", {
          class: B(["t-action", { pop: n.value }]),
          ref_key: "container",
          ref: u
        }, [
          (i(!0), f(q, null, K(s.actions, (w, b) => (i(), f("div", { key: b }, [
            (i(!0), f(q, null, K(w, (P, k) => (i(), C(Z, {
              key: P.key ?? `${b}-${k}`,
              color: P.color,
              size: P.size,
              variant: P.variant,
              onPointerup: (U) => d(P),
              block: ""
            }, {
              default: N(() => [
                M(A(P.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onPointerup"]))), 128))
          ]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), De = /* @__PURE__ */ g(Xe, [["__scopeId", "data-v-b089000d"]]), go = (t = {}) => ({
  open() {
    return new Promise((o) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const s = document.createElement("div"), r = m();
      e.appendChild(s);
      const l = J({
        render() {
          return Q(De, {
            ...t,
            ref: r,
            onDismiss: (u, n) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), o({ type: u, data: n });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), We = { class: "t-loading" }, qe = /* @__PURE__ */ h({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(t, { expose: o, emit: e }) {
    const s = m(!1);
    return o({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (u, n) => (i(), C(F, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value
    }, {
      default: N(() => [
        $("div", We, [
          _(u.$slots, "default", {}, () => [
            u.type === "spinner" ? (i(), C(ne, { key: 0 })) : E("", !0)
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), ve = /* @__PURE__ */ g(qe, [["__scopeId", "data-v-598c3462"]]), bo = (t = {}) => {
  const o = m(), e = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((l) => {
        e && (r = document.createElement("div"), e.appendChild(r), s = J({
          render() {
            return Q(ve, {
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
}, ce = m(1e3), Me = {
  getNewIndex() {
    return ce.value += 2, ce.value;
  }
}, X = ie([]), Y = m(!0), I = m(!1), R = m(-1), z = x(() => X[R.value]), H = x(() => X[R.value + 1] || void 0), V = x(() => X[X.length - 2]), ye = x(() => !I.value && Y.value && V.value), D = (t = !0) => {
  let e = z.value.target.closest(".t-app").offsetWidth;
  return t ? e + "px" : e;
}, ee = {
  reset() {
    I.value = !0;
    const t = D(), o = z.value.target, e = V.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(t) {
    if (!ye.value) return;
    const o = D(!1), e = o + "px", s = t / o * 100, r = z.value.target, l = V.value.target;
    t > 15 && t <= o && (r.style.transition = "transform 0s ease", r.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s}))) scale(${0.5 + 0.5 / 100 * s}) perspective(${e}) rotateY(${30 - 30 / 100 * s}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!V.value) return;
    const o = D();
    z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(${o}) scale(1)`, V.value.target.style.transition = "transform 0.35s ease", V.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ae(), I.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!H.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    I.value = !0;
    const o = H.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1)) scale(0.5) perspective(${e}) rotateY(30deg)`), setTimeout(() => {
        I.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, te = {
  reset() {
    I.value = !0;
    const t = D(), o = z.value.target, e = V.value.target;
    o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", e.style.transition = "transform 0.35s ease", e.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      I.value = !1;
    }, 400);
  },
  move(t) {
    const o = D(!1), e = o + "px", s = t / o * 100, r = z.value.target, l = V.value.target;
    t > 15 && t <= o && (r.style.transition = "transform 0s ease", r.style.transform = `translateX(${t}px)`, l.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), l.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${s})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * s}`));
  },
  back(t) {
    if (!V.value) return;
    const o = D();
    z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(${o}) scale(1)`, V.value.target.style.transition = "transform 0.35s ease", V.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), I.value = !0, setTimeout(() => {
      ae(), I.value = !1, R.value -= 1, t && t();
    }, 400);
  },
  next(t) {
    if (!H.value) return;
    if (R.value == -1) {
      R.value += 1, t && t();
      return;
    }
    I.value = !0;
    const o = H.value.target, e = D();
    o.style.transform = `translateX(${e})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.35s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.35s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1))`), setTimeout(() => {
        I.value = !1, R.value += 1, t && t();
      }, 400);
    }, 100);
  }
}, He = (t) => {
  X.push(t);
}, Le = (t, o) => {
  X[t].target = o;
}, ae = (t) => {
  t || X.pop();
}, Fe = () => {
  X.splice(0, X.length);
}, Ue = () => {
  Y.value = !1;
}, je = () => {
  Y.value = !0;
}, Ge = (t, o) => {
  t == "scale" && ee.next(o), t == "transform" && te.next(o);
}, Ke = (t, o) => {
  t == "scale" && ee.back(o), t == "transform" && te.back(o);
}, Je = (t, o) => {
  t == "scale" && ee.move(o), t == "transform" && te.move(o);
}, Qe = (t) => {
  t == "scale" && ee.reset(), t == "transform" && te.reset();
}, S = {
  isBusy: I,
  isSwipeable: ye,
  reset: Qe,
  next: Ge,
  back: Ke,
  move: Je,
  screens: X,
  addScreen: He,
  addScreenEl: Le,
  removeScreen: ae,
  removeAllScreen: Fe,
  lockSwipe: Ue,
  unlockSwipe: je,
  swipeable: Y,
  currentScreen: z,
  lastScreen: V,
  nextScreen: H
}, Ze = { class: "t-toast-content" }, Ye = /* @__PURE__ */ h({
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
    const s = t, r = e, l = m(!1), u = m(!1), n = m(!1), p = () => {
      u.value = !0, n.value = !1, setTimeout(() => {
        l.value = !0;
      }, 10);
    }, v = () => {
      n.value = !0, setTimeout(() => {
        u.value = !1, l.value = !1, r("dismiss");
      }, 300);
    };
    W(() => s.visible, (a) => {
      a ? p() : v();
    });
    const d = x(() => {
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
      open: p,
      close: v
    }), (a, c) => u.value ? (i(), f("div", {
      key: 0,
      class: B(["t-toast", { [s.placement]: !0, open: l.value, closing: n.value }]),
      style: T({ "--space": s.space, ...d.value })
    }, [
      _(a.$slots, "content", {}, () => [
        $("div", Ze, A(s.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), _e = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-bac1506b"]]), ho = (t = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const e = document.createElement("div"), s = m();
    o.appendChild(e);
    const r = J({
      render() {
        return Q(_e, {
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
}), et = m(0);
function ge() {
  return {
    height: et
  };
}
const tt = /* @__PURE__ */ h({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const o = t, { height: e } = ge();
    return de("cableState", {
      placement: o.placement
    }), (s, r) => (i(), f("div", {
      class: B(["t-cable", { keyboard: o.keyboard && O(e) > 0, [o.placement]: !0 }]),
      style: T({ "--t-keyboard-height": O(e) + "px", "--t-keyboard-transition": O(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ot = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-27e0d794"]]), st = /* @__PURE__ */ h({
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
    return (s, r) => (i(), f("div", {
      class: "t-card",
      style: T(e.value)
    }, [
      _(s.$slots, "default")
    ], 4));
  }
}), rt = {}, nt = { class: "t-content" };
function at(t, o) {
  return i(), f("div", nt, [
    _(t.$slots, "default", {}, void 0, !0)
  ]);
}
const lt = /* @__PURE__ */ g(rt, [["render", at], ["__scopeId", "data-v-ce0031a0"]]), ct = /* @__PURE__ */ h({
  __name: "t-refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(t, { emit: o }) {
    const e = o, s = t, r = m(0), l = m(!1), u = m();
    let n, p = !1;
    const v = () => {
      l.value = !1, r.value = 0, p = !1;
    }, d = () => {
      p = !0, l.value = !0, r.value = s.threshold, e("refresh", v);
    }, a = () => {
      r.value = 0, l.value = !1, p = !1, e("cancel");
    };
    return W(() => u.value, () => {
      n && n.destroy();
      let c = u.value.closest(".t-content");
      c && (n = re(c, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(c.scrollTop > 0);
        },
        down() {
          l.value || p || e("start");
        },
        move({ deltaY: y, initialDirection: w }) {
          if (l.value || p || w != "down") return;
          if (s.variant == "max" && y >= s.threshold) {
            d();
            return;
          }
          const b = y < 0 ? 0 : y;
          r.value = b, e("move", b);
        },
        up({ deltaY: y, initialDirection: w }) {
          l.value || p || w != "down" || (s.variant == "up" && y >= s.threshold ? d() : a());
        },
        cancel() {
          l.value || p || a();
        }
      }, {
        passive: !1
      }));
    }), se(() => {
      n && n.destroy();
    }), (c, y) => j((i(), f("div", {
      class: B(["t-refresher", { safe: c.safe }]),
      ref_key: "container",
      ref: u
    }, [
      _(c.$slots, "default", {
        offset: r.value,
        refreshing: l.value
      }, void 0, !0)
    ], 2)), [
      [G, r.value > 0]
    ]);
  }
}), it = /* @__PURE__ */ g(ct, [["__scopeId", "data-v-c77146a5"]]), ut = {}, dt = { class: "t-screen" };
function pt(t, o) {
  return i(), f("div", dt, [
    _(t.$slots, "default", {}, void 0, !0)
  ]);
}
const be = /* @__PURE__ */ g(ut, [["render", pt], ["__scopeId", "data-v-c2a3436c"]]), ft = /* @__PURE__ */ h({
  __name: "t-screen-router",
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
    const u = r.router || fe(), n = r.route || Te(), p = u.getRoutes(), v = m();
    for (let c of p)
      e[c.name] = c.component || c.components;
    const d = (c) => {
      c && S.addScreen({
        name: c,
        target: null,
        component: $e(e[c] || null)
      });
    }, a = (c, y) => {
      !y || S.screens[c].target || (S.addScreenEl(c, y.$el), S.nextScreen && S.next(r.variant, () => {
        s("change");
      }));
    };
    return W(() => n.name, (c, y) => {
      c != S.currentScreen.value?.name && (S.lastScreen.value?.name == c ? S.back(r.variant, () => {
        s("change");
      }) : d(n.name));
    }), L(() => {
      d(n.name), l = re(document.body, {
        beforeEvent(c) {
          return !!S.isSwipeable.value;
        },
        fast({ initialDirection: c }) {
          S.lastScreen.value && c == "right" && u.back();
        },
        move({ deltaX: c, initialDirection: y }) {
          y == "right" && S.move(r.variant, c);
        },
        up({ deltaX: c, initialDirection: y }) {
          if (y != "right") {
            S.reset(r.variant);
            return;
          }
          const w = v.value.offsetParent.offsetWidth;
          c / w * 100 >= 50 ? u.back() : S.reset(r.variant);
        },
        cancel() {
          S.reset(r.variant);
        }
      });
    }), se(() => {
      l && l.destroy(), S.removeAllScreen();
    }), (c, y) => (i(), f(q, null, [
      (i(!0), f(q, null, K(O(S).screens, (w, b) => (i(), C(be, {
        ref_for: !0,
        ref: (P) => a(b, P),
        style: T({ zIndex: b + (b == O(S).screens.length - 1 ? 2 : 1) }),
        key: b
      }, {
        default: N(() => [
          (i(), C(ke(w.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-screen-router-backdrop",
        ref_key: "backdrop",
        ref: v,
        style: T({ zIndex: O(S).screens.length })
      }, null, 4)
    ], 64));
  }
}), mt = /* @__PURE__ */ g(ft, [["__scopeId", "data-v-2d6fbfe1"]]), vt = /* @__PURE__ */ h({
  __name: "t-toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(t) {
    const o = t, e = pe("cableState"), s = x(() => o?.placement || e?.placement);
    return (r, l) => (i(), f("div", {
      class: B(["t-toolbar", { [s.value]: !0, safe: o.safe }]),
      style: T({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
        _(r.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), yt = /* @__PURE__ */ g(vt, [["__scopeId", "data-v-1ee9866d"]]), _t = /* @__PURE__ */ h({
  __name: "t-back-button",
  props: {
    to: {},
    router: {}
  },
  setup(t) {
    const o = t, e = xe(), s = o.router || fe(), r = (l) => {
      if (e.onBack) {
        e.onBack(l);
        return;
      }
      S.lastScreen.value ? s?.back?.() : o.to && s?.push?.(o.to);
    };
    return (l, u) => l.to || O(S).lastScreen ? (i(), f("button", {
      key: 0,
      class: "t-back-button",
      onPointerup: r
    }, [
      _(l.$slots, "default", {}, () => [
        u[0] || (u[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ], 32)) : E("", !0);
  }
}), gt = /* @__PURE__ */ g(_t, [["__scopeId", "data-v-eb92b1fe"]]), bt = /* @__PURE__ */ h({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = x(() => {
      let s, r = o.color;
      return o.size == "standard" ? s = "var(--t-fs-10)" : o.size == "small" ? s = "var(--t-fs-08)" : o.size == "large" ? s = "var(--t-fs-12)" : s = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (i(), f("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), oe = /* @__PURE__ */ g(bt, [["__scopeId", "data-v-f0f94f05"]]), ht = /* @__PURE__ */ h({
  __name: "t-gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (o, e) => (i(), f("div", {
      class: B(["t-gesture-indicator", { [o.placement]: !0 }])
    }, null, 2));
  }
}), he = /* @__PURE__ */ g(ht, [["__scopeId", "data-v-ed8f7308"]]), kt = /* @__PURE__ */ h({
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
    const e = t, s = o, r = m(), l = m(), u = m(!1);
    let n = null;
    const p = x(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), v = (a) => {
      s("dismiss", a);
    }, d = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return W(() => r.value, (a) => {
      a && (n = re(r.value, {
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
          d(), c == p.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: c, deltaX: y, initialDirection: w }) {
          if (w != p.value) return;
          let b = 0;
          e.placement == "bottom" || e.placement == "top" ? b = c : b = y, e.placement == "bottom" && (b = c > 0 ? c : 0), e.placement == "top" && (b = c < 0 ? c : 0), e.placement == "left" && (b = y < 0 ? y : 0), e.placement == "right" && (b = y > 0 ? y : 0), (e.placement == "bottom" && (b >= 10 || this.isMoving) || e.placement == "top" && (b <= -10 || this.isMoving) || e.placement == "left" && (b <= -10 || this.isMoving) || e.placement == "right" && (b >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: b + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: c, deltaX: y, initialDirection: w }) {
          if (this.isMoving = !1, d(), w != p.value) {
            l.value.open();
            return;
          }
          let b, P, k;
          e.placement == "bottom" || e.placement == "top" ? (b = r.value.offsetHeight, k = c) : (b = r.value.offsetWidth, k = y), P = k / b * 100, P > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, d(), l.value.open();
        }
      }));
    }), se(() => {
      n && n.destroy();
    }), (a, c) => (i(), C(F, {
      ref_key: "present",
      ref: l,
      duration: e.duration,
      bounce: e.bounce,
      class: B(e.class),
      placement: e.placement,
      backdrop: a.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: v,
      style: T(e.style)
    }, {
      default: N(() => [
        e.gesture && e.indicator && e.placement != "center" ? (i(), C(he, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : E("", !0),
        $("div", {
          class: B(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: a.rounded }]),
          style: T({ "--background": e.background }),
          ref_key: "sheet",
          ref: r
        }, [
          _(a.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["duration", "bounce", "class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), $t = /* @__PURE__ */ g(kt, [["__scopeId", "data-v-dcfbb6a3"]]), xt = { class: "t-input-label" }, Tt = { class: "t-input-content" }, wt = ["placeholder", "value", "type", "readonly"], St = /* @__PURE__ */ h({
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
    const e = t, s = o, r = m(!1), l = m(null), u = x(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), n = (d) => {
      s("update:modelValue", d.target.value);
    }, p = async (d) => {
      r.value = !0;
    }, v = () => {
      r.value = !1;
    };
    return (d, a) => (i(), f("div", {
      class: B(["t-input", {
        rounded: d.rounded,
        ["size-" + d.size]: !0,
        ["variant-" + d.variant]: !0,
        focus: r.value,
        "has-value": u.value,
        readonly: d.readonly
      }])
    }, [
      $("label", null, [
        $("span", xt, A(d.label), 1),
        $("div", Tt, [
          _(d.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: l,
            class: "t-input-editable",
            placeholder: d.placeholder,
            value: d.modelValue,
            type: d.type,
            onInput: n,
            onFocus: p,
            onBlur: v,
            readonly: d.readonly
          }, null, 40, wt),
          _(d.$slots, "end", {}, void 0, !0)
        ])
      ]),
      d.error ? (i(), C(oe, {
        key: 0,
        color: "danger"
      }, {
        default: N(() => [
          M(A(d.error), 1)
        ]),
        _: 1
      })) : d.help ? (i(), C(oe, {
        key: 1,
        color: "secondary"
      }, {
        default: N(() => [
          M(A(d.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ g(St, [["__scopeId", "data-v-11ddaa71"]]), zt = {};
function It(t, o) {
  return i(), f("textarea");
}
const Et = /* @__PURE__ */ g(zt, [["render", It]]), Pt = {};
function Vt(t, o) {
  return i(), f("div");
}
const Ct = /* @__PURE__ */ g(Pt, [["render", Vt]]), Rt = /* @__PURE__ */ h({
  __name: "t-grid",
  props: {
    gap: { default: 0 },
    template: { default: "repeat(1, 1fr) / repeat(1, 1fr)" }
  },
  setup(t) {
    const o = t, e = x(() => isNaN(o.gap) ? o.gap : `var(--t-size-${o.gap})`);
    return (s, r) => (i(), f("div", {
      class: "t-grid",
      style: T({ "--gap": e.value, "--template": o.template })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), At = /* @__PURE__ */ g(Rt, [["__scopeId", "data-v-eeba6473"]]), Ot = /* @__PURE__ */ h({
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
}), Nt = /* @__PURE__ */ g(Ot, [["__scopeId", "data-v-47ee8991"]]), Xt = /* @__PURE__ */ h({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = m(!1), l = m(), u = x(() => {
      let v = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (v = `var(--t-color-status-${e.color})`), {
        "--color": v
      };
    }), n = () => l.value?.parentElement?.querySelector?.("input");
    L(() => {
      let v = n();
      v && (r.value = v.type != "password", s("change", r.value));
    });
    const p = () => {
      let v = n();
      v && (r.value = !r.value, r.value ? v.type = "text" : v.type = "password", s("change", r.value));
    };
    return (v, d) => (i(), f("button", {
      ref_key: "toggle",
      ref: l,
      class: "t-toggle-password",
      style: T(u.value),
      onPointerup: p
    }, [
      r.value ? _(v.$slots, "on", { key: 0 }, () => [
        d[0] || (d[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      r.value ? E("", !0) : _(v.$slots, "off", { key: 1 }, () => [
        d[1] || (d[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 36));
  }
}), Dt = /* @__PURE__ */ g(Xt, [["__scopeId", "data-v-e5aa6028"]]), Wt = /* @__PURE__ */ h({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const o = t, e = x(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (s, r) => (i(), f("div", {
      class: B(["t-avatar", { square: s.square }]),
      style: T({ "--size": e.value })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qt = /* @__PURE__ */ g(Wt, [["__scopeId", "data-v-1d223827"]]), Mt = { class: "t-collapse-title" }, Ht = {
  key: 0,
  class: "icon"
}, Lt = {
  key: 1,
  class: "icon"
}, Ft = { class: "t-collapse-content" }, Ut = /* @__PURE__ */ h({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = m(!1), l = m(""), u = m(), n = () => {
      r.value = !r.value, l.value = `calc(${u.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (p, v) => (i(), f("div", {
      class: B(["t-collapse", { open: r.value }]),
      style: T({ "--height": l.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onPointerup: n
      }, [
        _(p.$slots, "icon"),
        $("div", Mt, [
          _(p.$slots, "title", {}, () => [
            M(A(e.title), 1)
          ])
        ]),
        _(p.$slots, "toggle", {}, () => [
          r.value ? (i(), f("div", Ht, [...v[0] || (v[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), f("div", Lt, [...v[1] || (v[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ], 32),
      $("div", Ft, [
        $("div", {
          ref_key: "content",
          ref: u
        }, [
          _(p.$slots, "content", {}, () => [
            _(p.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), jt = /* @__PURE__ */ h({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, s = o, r = () => {
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
    return (u, n) => (i(), f("div", {
      class: B(["t-switch", { on: e.modelValue }]),
      style: T(l.value),
      onPointerup: r
    }, [...n[0] || (n[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 38));
  }
}), Gt = /* @__PURE__ */ g(jt, [["__scopeId", "data-v-ac24f5cf"]]), Kt = /* @__PURE__ */ h({
  __name: "t-tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, e = pe("tabsState"), s = x(() => e.activeValue.value === o.value), r = () => {
      o.disabled || e.setValue(o.value);
    };
    return (l, u) => (i(), f("li", {
      class: B(["t-tab", { active: s.value }])
    }, [
      ue(Z, {
        variant: "text",
        onPointerup: r,
        size: O(e).size,
        color: s.value ? O(e).color.text : void 0
      }, {
        default: N(() => [
          _(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Jt = /* @__PURE__ */ g(Kt, [["__scopeId", "data-v-d25a3a3e"]]), Qt = /* @__PURE__ */ h({
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
    const e = t, s = o, r = m("0px"), l = m(0), u = m(0), n = m(), p = x(() => {
      let a = "", c = "";
      return e.variant == "text" && (a = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? c = `var(--t-color-status-${e.color})` : c = e.color), e.variant == "border-under" && (c = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? a = `var(--t-color-status-${e.color})` : a = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (a = `var(--t-color-status-${e.color})`, c = `var(--t-color-status-${e.color}-text)`) : (a = e.color, c = "currentColor")), { background: a, text: c };
    }), v = x(() => e.variant == "border-under" ? {
      "--transform": r.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": u.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": r.value,
      "--radius": e.radius + "px"
    } : {}), d = () => {
      if (e.variant == "border-under") {
        let a = n.value.querySelector(".active");
        if (a) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let c = a.getBoundingClientRect().left - n.value.getBoundingClientRect().left + n.value.scrollLeft, y = a.offsetWidth / 2;
            r.value = c + y - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let c = a.getBoundingClientRect().top - n.value.getBoundingClientRect().top + n.value.scrollTop, y = a.offsetHeight / 2;
            r.value = c + y - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let a = n.value.querySelector(".active");
        if (a) {
          let c = a.offsetWidth, y = a.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let w = a.getBoundingClientRect().left - n.value.getBoundingClientRect().left + n.value.scrollLeft;
            r.value = w + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let w = a.getBoundingClientRect().top - n.value.getBoundingClientRect().top + n.value.scrollTop;
            r.value = w + "px";
          }
          l.value = c, u.value = y;
        }
      }
    };
    return de("tabsState", {
      activeValue: x(() => e.modelValue),
      color: p.value,
      size: e.size,
      variant: e.variant,
      setValue: (a) => {
        s("update:modelValue", a);
      }
    }), W(() => e.modelValue, async () => {
      await le(), d();
    }), L(async () => {
      await le(), d();
    }), (a, c) => (i(), f("ul", {
      ref_key: "container",
      ref: n,
      class: B(["t-tabs", { [a.placement]: !0, [`variant-${a.variant}`]: !0 }]),
      style: T([{ "--background": p.value.background, "--color": p.value.text }, v.value])
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Zt = /* @__PURE__ */ g(Qt, [["__scopeId", "data-v-b512ed8e"]]), Yt = { key: 0 }, eo = {
  key: 0,
  class: "t-checkbox-label"
}, to = /* @__PURE__ */ h({
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
    const e = t, s = o, r = x(() => {
      let n = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (n = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), n;
    }), l = x(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), u = (n) => {
      if (n.preventDefault(), n.stopPropagation(), e.multiple) {
        let p = e.modelValue;
        e.modelValue.includes(e.value) ? p.splice(p.indexOf(e.value), 1) : p.push(e.value), s("update:modelValue", p);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    };
    return (n, p) => (i(), f("div", {
      class: B(["t-checkbox", { active: l.value }]),
      style: T(r.value),
      onPointerup: u
    }, [
      $("div", {
        class: B(`t-checkbox-${n.type}`)
      }, [
        n.type == "radio" ? (i(), f("div", Yt)) : E("", !0),
        n.type == "check" ? _(n.$slots, "icon", { key: 1 }, () => [
          p[0] || (p[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      _(n.$slots, "label", {}, () => [
        n.label ? (i(), f("span", eo, A(e.label), 1)) : E("", !0)
      ], !0)
    ], 38));
  }
}), oo = /* @__PURE__ */ g(to, [["__scopeId", "data-v-b1f8b112"]]), so = /* @__PURE__ */ h({
  __name: "t-keyboard-space",
  setup(t) {
    const { height: o } = ge();
    return (e, s) => (i(), f("div", {
      class: "t-keyboard-space",
      style: T({ "--height": O(o) + "px" })
    }, null, 4));
  }
}), ro = /* @__PURE__ */ g(so, [["__scopeId", "data-v-4b06018d"]]), no = /* @__PURE__ */ h({
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
    return (s, r) => (i(), f("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), ao = /* @__PURE__ */ g(no, [["__scopeId", "data-v-877bbdb5"]]), lo = /* @__PURE__ */ h({
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
    return (s, r) => (i(), f("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), co = /* @__PURE__ */ g(lo, [["__scopeId", "data-v-42cb3d71"]]), io = /* @__PURE__ */ h({
  __name: "t-flex",
  props: {
    gap: { default: 0 },
    direction: { default: "row" }
  },
  setup(t) {
    const o = t, e = x(() => isNaN(o.gap) ? o.gap : `var(--t-size-${o.gap})`);
    return (s, r) => (i(), f("div", {
      class: "t-flex",
      style: T({ "--gap": e.value, "--direction": o.direction })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), uo = /* @__PURE__ */ g(io, [["__scopeId", "data-v-e83facf5"]]), po = ["src"], fo = /* @__PURE__ */ h({
  __name: "t-image",
  props: {
    defaultSrc: {},
    src: {}
  },
  setup(t) {
    const o = m(""), e = () => {
      t.defaultSrc && (o.value = t.defaultSrc);
    };
    return L(() => {
      o.value = t.src;
    }), (s, r) => (i(), f("img", {
      onError: e,
      src: o.value
    }, null, 40, po));
  }
}), ko = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), $o = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, xo = () => ({
  install: (t) => {
    t.component("t-app", ze), t.component("t-screen", be), t.component("t-screen-router", mt), t.component("t-cable", ot), t.component("t-toolbar", yt), t.component("t-content", lt), t.component("t-card", st), t.component("t-refresher", it), t.component("t-button", Z), t.component("t-back-button", gt), t.component("t-present", F), t.component("t-text", oe), t.component("t-sheet", $t), t.component("t-gesture-indicator", he), t.component("t-input", Bt), t.component("t-textarea", Et), t.component("t-rich-text", Ct), t.component("t-grid", At), t.component("t-divider", Nt), t.component("t-toggle-password", Dt), t.component("t-icon-spinner", ne), t.component("t-alert", me), t.component("t-avatar", qt), t.component("t-collapse", Ut), t.component("t-toast", _e), t.component("t-switch", Gt), t.component("t-tab", Jt), t.component("t-tabs", Zt), t.component("t-checkbox", oo), t.component("t-keyboard-space", ro), t.component("t-skeleton", ao), t.component("t-ripple", co), t.component("t-loading", ve), t.component("t-flex", uo), t.component("t-image", fo);
  }
});
export {
  $o as blurCurrentActive,
  go as createAction,
  _o as createAlert,
  bo as createLoading,
  ho as createToast,
  xo as createToife,
  ko as isFormElement,
  Me as presentController,
  S as screenController,
  ge as useKeyboard
};
