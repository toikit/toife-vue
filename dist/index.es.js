import { createElementBlock as v, openBlock as p, normalizeClass as f, renderSlot as g, ref as y, defineComponent as h, computed as w, reactive as le, watch as X, onMounted as q, Fragment as W, withDirectives as L, createCommentVNode as E, normalizeStyle as S, vShow as H, createElementVNode as $, createVNode as ce, unref as B, createBlock as O, withCtx as N, renderList as j, createTextVNode as ee, toDisplayString as R, createApp as F, h as K, onUnmounted as te, resolveDynamicComponent as xe, markRaw as we, useAttrs as Te, provide as ie, inject as ue, nextTick as ne } from "vue";
import { useRouter as de, useRoute as Se } from "vue-router";
import { gesture as oe } from "@toife/gesture";
const b = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, Be = {}, ze = {
  class: /* @__PURE__ */ f({ "toife-app": !0 })
};
function Pe(r, t) {
  return p(), v("div", ze, [
    g(r.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ b(Be, [["render", Pe]]), ae = y(1e3), Ie = () => (ae.value += 2, ae.value), Ve = /* @__PURE__ */ h({
  __name: "present",
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
  setup(r, { expose: t, emit: e }) {
    const o = y(0), s = y(!1), a = y(), u = y(), n = r, d = e, i = w(() => s.value || n.keepalive), m = y(!1), l = le({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), _ = w(() => n.duration / 1e3 + "s"), c = (k) => {
      n.backdrop ? k?.backdropOpacity && (l["--t-present-backdrop-opacity"] = k.backdropOpacity) : l["--t-present-backdrop-opacity"] = "0", k.transition && (l["--t-present-transition"] = k.transition), k.contentTransform && (l["--t-present-content-transform"] = k.contentTransform), k.contentOpacity && (l["--t-present-content-opacity"] = k.contentOpacity);
    }, T = () => {
      if (n.bounce !== void 0 && !m.value) {
        m.value = !0;
        let k = n.bounce;
        (n.placement == "bottom" || n.placement == "right") && (k = `calc(${n.bounce} * -1)`), c({
          contentTransform: k,
          transition: _.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          c({
            contentTransform: "0px"
          });
        }, n.duration);
      } else
        c({
          contentTransform: "0px",
          transition: _.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, x = () => {
      let k = "0px", Y = "1";
      n.placement == "bottom" || n.placement == "right" ? k = "100%" : n.placement == "top" || n.placement == "left" ? k = "-100%" : n.placement == "center" && (k = "0px", Y = "0"), c({
        contentTransform: k,
        transition: _.value,
        contentOpacity: Y,
        backdropOpacity: "0"
      });
    };
    X(() => n.visible, () => {
      n.visible ? (m.value = !1, s.value = !0, o.value = Ie(), setTimeout(() => {
        T();
      }, 50)) : (x(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), t({
      render: c,
      open: T,
      close: x
    });
    const V = (k) => {
      k.preventDefault(), d("dismiss", "backdrop");
    };
    return q(() => {
      n.visible ? T() : x();
    }), (k, Y) => (p(), v(W, null, [
      i.value ? L((p(), v("div", {
        key: 0,
        class: f({ "toife-present-backdrop": !0 }),
        onPointerup: V,
        ref_key: "backdrop",
        ref: a,
        style: S([l, { zIndex: o.value - 1 }, n.style])
      }, null, 36)), [
        [H, s.value]
      ]) : E("", !0),
      i.value ? L((p(), v("div", {
        key: 1,
        ref_key: "present",
        ref: u,
        class: f([{ "toife-present": !0, [k.placement]: !0 }, n.class]),
        style: S([l, { zIndex: o.value }, n.style])
      }, [
        g(k.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, s.value]
      ]) : E("", !0)
    ], 64));
  }
}), U = /* @__PURE__ */ b(Ve, [["__scopeId", "data-v-446246d1"]]), Ce = /* @__PURE__ */ h({
  __name: "icon-spinner",
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
  setup(r) {
    return (t, e) => (p(), v("span", {
      class: f({ "toife-icon-spinner": !0 }),
      style: S({
        width: r.size,
        height: r.size,
        borderTopColor: r.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), re = /* @__PURE__ */ b(Ce, [["__scopeId", "data-v-1b6da8b6"]]), Re = {
  class: /* @__PURE__ */ f({ "toife-button-content": !0 })
}, Oe = {
  key: 0,
  class: "loader"
}, Ae = /* @__PURE__ */ h({
  __name: "button",
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
  setup(r) {
    const t = r, e = w(() => {
      let o;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? o = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "var(--t-color-status-" + t.color + ")"
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? o = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : o = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : o = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? o = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : o = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : o = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o;
    });
    return (o, s) => (p(), v("button", {
      style: S(e.value),
      class: f({ "toife-button": !0, "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0 })
    }, [
      L($("span", Re, [
        g(o.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !t.loading]
      ]),
      t.loading ? (p(), v("span", Oe, [
        ce(B(re), {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), G = /* @__PURE__ */ b(Ae, [["__scopeId", "data-v-93f58984"]]), De = /* @__PURE__ */ h({
  __name: "action",
  props: {
    actions: { default: () => [] },
    visible: { type: Boolean, default: !1 },
    dismiss: { default: () => [] }
  },
  emits: ["dismiss"],
  setup(r, { expose: t, emit: e }) {
    const o = r, s = e, a = y(!1), u = y(), n = y(!1), d = () => {
      a.value = !0;
    }, i = () => {
      a.value = !1;
    }, m = (c) => {
      i(), c.handler && c.handler(), s("dismiss", "choose", c?.data);
    }, l = (c) => {
      o.dismiss && o.dismiss.includes(c) ? (i(), s("dismiss", c)) : c === "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    X(() => o.visible, (c) => {
      c ? d() : i();
    }, { immediate: !0 }), t({
      open: d,
      close: i
    });
    const _ = { props: o, emit: s, _visible: a, container: u, pop: n, open: d, close: i, choose: m, onDismiss: l, ref: y, watch: X, get TPresent() {
      return U;
    }, get TButton() {
      return G;
    } };
    return Object.defineProperty(_, "__isScriptSetup", { enumerable: !1, value: !0 }), _;
  }
});
function Xe(r, t, e, o, s, a) {
  return p(), O(o.TPresent, {
    placement: "bottom",
    backdrop: !0,
    keepalive: !1,
    visible: o._visible,
    onDismiss: o.onDismiss
  }, {
    default: N(() => [
      $("div", {
        class: f({ pop: o.pop, "toife-action": !0 }),
        ref: "container"
      }, [
        (p(!0), v(W, null, j(o.props.actions, (u, n) => (p(), v("div", { key: n }, [
          (p(!0), v(W, null, j(u, (d, i) => (p(), O(o.TButton, {
            key: d.key ?? `${n}-${i}`,
            color: d.color,
            size: d.size,
            variant: d.variant,
            onPointerup: (m) => o.choose(d),
            block: ""
          }, {
            default: N(() => [
              ee(R(d.text), 1)
            ]),
            _: 2
          }, 1032, ["color", "size", "variant", "onPointerup"]))), 128))
        ]))), 128))
      ], 2)
    ]),
    _: 1
  }, 8, ["visible"]);
}
const pe = /* @__PURE__ */ b(De, [["render", Xe], ["__scopeId", "data-v-f5dbe511"]]), wo = (r = {}, t) => ({
  open() {
    return new Promise((e) => {
      let o = document.body.querySelector(".toife-app");
      if (!o) return;
      const s = document.createElement("div"), a = y();
      o.appendChild(s);
      const u = F({
        render() {
          return K(t || pe, {
            ...r,
            ref: a,
            onDismiss: (n, d) => {
              setTimeout(() => {
                u.unmount(), s.remove();
              }, 300), e({ type: n, data: d });
            }
          });
        }
      });
      u.mount(s), setTimeout(() => {
        a.value?.open?.();
      }, 50);
    });
  }
}), Ne = {
  key: 0,
  class: /* @__PURE__ */ f({ "toife-alert-header": !0 })
}, We = {
  class: /* @__PURE__ */ f({ "toife-alert-content": !0 })
}, Me = {
  class: /* @__PURE__ */ f({ "toife-alert-footer": !0 })
}, qe = /* @__PURE__ */ h({
  __name: "alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(r, { expose: t, emit: e }) {
    const o = r, s = e, a = y(!1), u = y(), n = y(!1), d = () => {
      a.value = !0;
    }, i = (l) => {
      a.value = !1, l.handler && l.handler(), s("dismiss", "choose", l?.data);
    }, m = (l) => {
      o.dismiss && o.dismiss.includes(l) ? (a.value = !1, s("dismiss", l)) : l == "backdrop" && (n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 300));
    };
    return t({
      open: d
    }), (l, _) => (p(), O(B(U), {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: a.value,
      onDismiss: m
    }, {
      default: N(() => [
        $("div", {
          class: f({ pop: n.value, "toife-alert": !0 }),
          ref_key: "container",
          ref: u
        }, [
          g(l.$slots, "header", {}, () => [
            o.title ? (p(), v("div", Ne, R(o.title), 1)) : E("", !0)
          ], !0),
          g(l.$slots, "content", {}, () => [
            $("div", We, R(o.message), 1)
          ], !0),
          g(l.$slots, "footer", {}, () => [
            $("div", Me, [
              (p(!0), v(W, null, j(o.actions, (c) => (p(), O(B(G), {
                color: c.color,
                variant: c.variant,
                onPointerup: (T) => i(c)
              }, {
                default: N(() => [
                  ee(R(c.text), 1)
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
}), fe = /* @__PURE__ */ b(qe, [["__scopeId", "data-v-0e39cc1e"]]), To = (r = {}, t) => ({
  open() {
    return new Promise((e) => {
      let o = document.body.querySelector(".toife-app");
      if (!o) return;
      const s = document.createElement("div"), a = y();
      o.appendChild(s);
      const u = F({
        render() {
          return K(t || fe, {
            ...r,
            ref: a,
            onDismiss: (n, d) => {
              setTimeout(() => {
                u.unmount(), s.remove();
              }, 300), e({ type: n, data: d });
            }
          });
        }
      });
      u.mount(s), setTimeout(() => {
        a.value?.open?.();
      }, 50);
    });
  }
}), Le = /* @__PURE__ */ h({
  __name: "avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(r) {
    const t = r, e = w(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (o, s) => (p(), v("div", {
      class: f({ square: o.square, "toife-avatar": !0 }),
      style: S({ "--size": e.value })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), He = /* @__PURE__ */ b(Le, [["__scopeId", "data-v-ceac14a1"]]), je = {}, Fe = {
  class: /* @__PURE__ */ f({ "toife-screen": !0 })
};
function Ke(r, t) {
  return p(), v("div", Fe, [
    g(r.$slots, "default", {}, void 0, !0)
  ]);
}
const me = /* @__PURE__ */ b(je, [["render", Ke], ["__scopeId", "data-v-fe00f417"]]), A = le([]), J = y(!0), P = y(!1), C = y(-1), z = w(() => A[C.value]), M = w(() => A[C.value + 1] || void 0), I = w(() => A[A.length - 2]), ve = w(() => !P.value && J.value && I.value), D = (r = !0) => {
  let e = z.value.target.closest(".toife-app").offsetWidth;
  return r ? e + "px" : e;
}, Q = {
  reset() {
    P.value = !0;
    const r = D(), t = z.value.target, e = I.value.target;
    t.style.transition = "transform 0.25s ease", t.style.transform = "translateX(0px)", e.style.transition = "transform 0.25s ease", e.style.transform = `translateX(calc(${r} / 100 * 30 * -1)) scale(0.5) perspective(${r}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      P.value = !1;
    }, 400);
  },
  move(r) {
    if (!ve.value) return;
    const t = D(!1), e = t + "px", o = r / t * 100, s = z.value.target, a = I.value.target;
    r > 15 && r <= t && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, a.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), a.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${o}))) scale(${0.5 + 0.5 / 100 * o}) perspective(${e}) rotateY(${30 - 30 / 100 * o}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(r) {
    if (!I.value) return;
    const t = D();
    z.value.target.style.transition = "transform 0.25s ease", z.value.target.style.transform = `translateX(${t}) scale(1)`, I.value.target.style.transition = "transform 0.25s ease", I.value.target.style.transform = `translateX(0px) scale(1) perspective(${t}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), P.value = !0, setTimeout(() => {
      se(), P.value = !1, C.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!M.value) return;
    if (C.value == -1) {
      C.value += 1, r && r();
      return;
    }
    P.value = !0;
    const t = M.value.target, e = D();
    t.style.transform = `translateX(${e})`, t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.25s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.25s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1)) scale(0.5) perspective(${e}) rotateY(30deg)`), setTimeout(() => {
        P.value = !1, C.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, Z = {
  reset() {
    P.value = !0;
    const r = D(), t = z.value.target, e = I.value.target;
    t.style.transition = "transform 0.25s ease", t.style.transform = "translateX(0px)", e.style.transition = "transform 0.25s ease", e.style.transform = `translateX(calc(${r} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      P.value = !1;
    }, 400);
  },
  move(r) {
    const t = D(!1), e = t + "px", o = r / t * 100, s = z.value.target, a = I.value.target;
    r > 15 && r <= t && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, a.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), a.style.transform = `translateX(calc((${e} / 100 * 30 * -1) + ((${e} / 100 * 30) / 100 * ${o})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * o}`));
  },
  back(r) {
    if (!I.value) return;
    const t = D();
    z.value.target.style.transition = "transform 0.25s ease", z.value.target.style.transform = `translateX(${t}) scale(1)`, I.value.target.style.transition = "transform 0.25s ease", I.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), P.value = !0, setTimeout(() => {
      se(), P.value = !1, C.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!M.value) return;
    if (C.value == -1) {
      C.value += 1, r && r();
      return;
    }
    P.value = !0;
    const t = M.value.target, e = D();
    t.style.transform = `translateX(${e})`, t.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      t.style.transition = "transform 0.25s ease", t.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), z.value && (z.value.target.style.transitionOrigin = "left center", z.value.target.style.transition = "transform 0.25s ease", z.value.target.style.transform = `translateX(calc(${e} / 100 * 30 * -1))`), setTimeout(() => {
        P.value = !1, C.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, Ue = (r) => {
  A.push(r);
}, Ge = (r, t) => {
  A[r].target = t;
}, se = (r) => {
  r || A.pop();
}, Je = () => {
  A.splice(0, A.length);
}, Qe = () => {
  J.value = !1;
}, Ze = () => {
  J.value = !0;
}, Ye = (r, t) => {
  r == "scale" && Q.next(t), r == "transform" && Z.next(t);
}, et = (r, t) => {
  r == "scale" && Q.back(t), r == "transform" && Z.back(t);
}, tt = (r, t) => {
  r == "scale" && Q.move(t), r == "transform" && Z.move(t);
}, ot = (r) => {
  r == "scale" && Q.reset(), r == "transform" && Z.reset();
}, ye = () => ({
  isBusy: P,
  isSwipeable: ve,
  reset: ot,
  next: Ye,
  back: et,
  move: tt,
  screens: A,
  addScreen: Ue,
  addScreenEl: Ge,
  removeScreen: se,
  removeAllScreen: Je,
  lockSwipe: Qe,
  unlockSwipe: Ze,
  swipeable: J,
  currentScreen: z,
  lastScreen: I,
  nextScreen: M
}), rt = /* @__PURE__ */ h({
  __name: "screen-router",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(r, { emit: t }) {
    let e = {};
    const o = t, s = r;
    let a;
    const u = s.router || de(), n = s.route || Se(), d = u.getRoutes(), i = ye(), m = y();
    for (let c of d)
      e[c.name] = c.component || c.components;
    const l = (c) => {
      c && i.addScreen({
        name: c,
        target: null,
        component: we(e[c] || null)
      });
    }, _ = (c, T) => {
      !T || i.screens[c].target || (i.addScreenEl(c, T.$el), i.nextScreen && i.next(s.variant, () => {
        o("change");
      }));
    };
    return X(() => n.name, (c, T) => {
      c != i.currentScreen.value?.name && (i.lastScreen.value?.name == c ? i.back(s.variant, () => {
        o("change");
      }) : l(n.name));
    }), q(() => {
      l(n.name), a = oe(document.body, {
        beforeEvent(c) {
          return !!i.isSwipeable.value;
        },
        fast({ initialDirection: c }) {
          i.lastScreen.value && c == "right" && u.back();
        },
        move({ deltaX: c, initialDirection: T }) {
          T == "right" && i.move(s.variant, c);
        },
        up({ deltaX: c, initialDirection: T }) {
          if (T != "right") {
            i.reset(s.variant);
            return;
          }
          const x = m.value.offsetParent.offsetWidth;
          c / x * 100 >= 50 ? u.back() : i.reset(s.variant);
        },
        cancel() {
          i.reset(s.variant);
        }
      });
    }), te(() => {
      a && a.destroy(), i.removeAllScreen();
    }), (c, T) => (p(), v(W, null, [
      (p(!0), v(W, null, j(B(i).screens, (x, V) => (p(), O(B(me), {
        ref_for: !0,
        ref: (k) => _(V, k),
        style: S({ zIndex: V + (V == B(i).screens.length - 1 ? 2 : 1) }),
        key: V
      }, {
        default: N(() => [
          (p(), O(xe(x.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: f({ "toife-screen-router-backdrop": !0 }),
        ref_key: "backdrop",
        ref: m,
        style: S({ zIndex: B(i).screens.length })
      }, null, 4)
    ], 64));
  }
}), st = /* @__PURE__ */ b(rt, [["__scopeId", "data-v-cc1582f6"]]), nt = /* @__PURE__ */ h({
  __name: "back-button",
  props: {
    to: {},
    router: {}
  },
  setup(r) {
    const t = r, e = Te(), o = t.router || de(), s = ye(), a = (u) => {
      if (e.onBack) {
        e.onBack(u);
        return;
      }
      s.lastScreen.value ? o?.back?.() : t.to && o?.push?.(t.to);
    };
    return (u, n) => u.to || B(s).lastScreen ? (p(), v("button", {
      key: 0,
      class: f({ "toife-back-button": !0 }),
      onPointerup: a
    }, [
      g(u.$slots, "default", {}, () => [
        n[0] || (n[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ], 32)) : E("", !0);
  }
}), at = /* @__PURE__ */ b(nt, [["__scopeId", "data-v-6f57cb01"]]), lt = y(0);
function _e() {
  return {
    height: lt
  };
}
const ct = /* @__PURE__ */ h({
  __name: "keyboard-space",
  setup(r) {
    const { height: t } = _e();
    return (e, o) => (p(), v("div", {
      class: f({ "toife-keyboard-space": !0 }),
      style: S({ "--height": B(t) + "px" })
    }, null, 4));
  }
}), it = /* @__PURE__ */ b(ct, [["__scopeId", "data-v-052c04ff"]]), ut = /* @__PURE__ */ h({
  __name: "cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(r) {
    const t = r, { height: e } = _e();
    return ie("cableState", {
      placement: t.placement
    }), (o, s) => (p(), v("div", {
      class: f({ "toife-cable": !0, keyboard: t.keyboard && B(e) > 0, [t.placement]: !0 }),
      style: S({ "--t-keyboard-height": B(e) + "px", "--t-keyboard-transition": B(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), dt = /* @__PURE__ */ b(ut, [["__scopeId", "data-v-f4979837"]]), pt = /* @__PURE__ */ h({
  __name: "card",
  props: {
    color: { default: null }
  },
  setup(r) {
    const t = r, e = w(() => {
      let o;
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? o = {
        "--background": "var(--t-color-status-" + t.color + ")"
      } : o = {
        "--background": t.color
      } : o = {
        "--background": "var(--t-color-surface)"
      }, o;
    });
    return (o, s) => (p(), v("div", {
      class: f({ "toife-card": !0 }),
      style: S(e.value)
    }, [
      g(o.$slots, "default")
    ], 4));
  }
}), ft = { key: 0 }, mt = {
  key: 0,
  class: /* @__PURE__ */ f({ "toife-checkbox-label": !0 })
}, vt = /* @__PURE__ */ h({
  __name: "checkbox",
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
  setup(r, { emit: t }) {
    const e = r, o = t, s = w(() => {
      let n = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (n = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), n;
    }), a = w(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), u = (n) => {
      if (n.preventDefault(), n.stopPropagation(), e.multiple) {
        let d = e.modelValue;
        e.modelValue.includes(e.value) ? d.splice(d.indexOf(e.value), 1) : d.push(e.value), o("update:modelValue", d);
      } else e.value === void 0 ? o("update:modelValue", !e.modelValue) : o("update:modelValue", e.value);
    };
    return (n, d) => (p(), v("div", {
      class: f({ "toife-checkbox": !0, active: a.value }),
      style: S(s.value),
      onPointerup: u
    }, [
      $("div", {
        class: f({ [`toife-checkbox-${n.type}`]: !0 })
      }, [
        n.type == "radio" ? (p(), v("div", ft)) : E("", !0),
        n.type == "check" ? g(n.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : E("", !0)
      ], 2),
      g(n.$slots, "label", {}, () => [
        n.label ? (p(), v("span", mt, R(e.label), 1)) : E("", !0)
      ], !0)
    ], 38));
  }
}), yt = /* @__PURE__ */ b(vt, [["__scopeId", "data-v-9686b9ed"]]), _t = {
  class: /* @__PURE__ */ f({ "toife-collapse-title": !0 })
}, gt = {
  key: 0,
  class: "icon"
}, bt = {
  key: 1,
  class: "icon"
}, ht = {
  class: /* @__PURE__ */ f({ "toife-collapse-content": !0 })
}, kt = /* @__PURE__ */ h({
  __name: "collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(r, { emit: t }) {
    const e = r, o = t, s = y(!1), a = y(""), u = y(), n = () => {
      s.value = !s.value, a.value = `calc(${u.value.offsetHeight}px + 2rem)`, o("change", s.value);
    };
    return o("change", s.value), (d, i) => (p(), v("div", {
      class: f({ "toife-collapse": !0, open: s.value }),
      style: S({ "--height": a.value })
    }, [
      $("div", {
        class: f({ "toife-collapse-header": !0 }),
        onPointerup: n
      }, [
        g(d.$slots, "icon"),
        $("div", _t, [
          g(d.$slots, "title", {}, () => [
            ee(R(e.title), 1)
          ])
        ]),
        g(d.$slots, "toggle", {}, () => [
          s.value ? (p(), v("div", gt, [...i[0] || (i[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (p(), v("div", bt, [...i[1] || (i[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ], 32),
      $("div", ht, [
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
}), $t = {}, xt = {
  class: /* @__PURE__ */ f({ "toife-content": !0 })
};
function wt(r, t) {
  return p(), v("div", xt, [
    g(r.$slots, "default", {}, void 0, !0)
  ]);
}
const Tt = /* @__PURE__ */ b($t, [["render", wt], ["__scopeId", "data-v-2b50d668"]]), St = /* @__PURE__ */ h({
  __name: "divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(r) {
    const t = r;
    return (e, o) => (p(), v("div", {
      class: f({ "toife-divider": !0, [t.direction]: !0 })
    }, null, 2));
  }
}), Bt = /* @__PURE__ */ b(St, [["__scopeId", "data-v-53f8aa07"]]), zt = /* @__PURE__ */ h({
  __name: "flex",
  props: {
    gap: { default: 0 },
    direction: { default: "row" }
  },
  setup(r) {
    const t = r, e = w(() => isNaN(t.gap) ? t.gap : `var(--t-size-${t.gap})`);
    return (o, s) => (p(), v("div", {
      class: f({ "toife-flex": !0 }),
      style: S({ "--gap": e.value, "--direction": t.direction })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Pt = /* @__PURE__ */ b(zt, [["__scopeId", "data-v-1c5e20c0"]]), Et = /* @__PURE__ */ h({
  __name: "gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(r) {
    return (t, e) => (p(), v("div", {
      class: f({ "toife-gesture-indicator": !0, [t.placement]: !0 })
    }, null, 2));
  }
}), ge = /* @__PURE__ */ b(Et, [["__scopeId", "data-v-2bf3c59b"]]), It = /* @__PURE__ */ h({
  __name: "grid",
  props: {
    gap: { default: 0 },
    template: { default: "repeat(1, 1fr) / repeat(1, 1fr)" }
  },
  setup(r) {
    const t = r, e = w(() => isNaN(t.gap) ? t.gap : `var(--t-size-${t.gap})`);
    return (o, s) => (p(), v("div", {
      class: f({ "toife-grid": !0 }),
      style: S({ "--gap": e.value, "--template": t.template })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Vt = /* @__PURE__ */ b(It, [["__scopeId", "data-v-83472d05"]]), Ct = ["src"], Rt = /* @__PURE__ */ h({
  __name: "image",
  props: {
    defaultSrc: {},
    src: {}
  },
  setup(r) {
    const t = y(""), e = () => {
      r.defaultSrc && (t.value = r.defaultSrc);
    };
    return q(() => {
      t.value = r.src;
    }), (o, s) => (p(), v("img", {
      onError: e,
      src: t.value
    }, null, 40, Ct));
  }
}), Ot = {
  class: /* @__PURE__ */ f({ "toife-input-label": !0 })
}, At = {
  class: /* @__PURE__ */ f({ "toife-input-content": !0 })
}, Dt = ["placeholder", "value", "type", "readonly"], Xt = {
  key: 0,
  color: "danger"
}, Nt = {
  key: 1,
  color: "secondary"
}, Wt = /* @__PURE__ */ h({
  __name: "input",
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
  setup(r, { emit: t }) {
    const e = r, o = t, s = y(!1), a = y(null), u = w(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), n = (m) => {
      o("update:modelValue", m.target.value);
    }, d = async (m) => {
      s.value = !0;
    }, i = () => {
      s.value = !1;
    };
    return (m, l) => (p(), v("div", {
      class: f({
        "toife-input": !0,
        rounded: m.rounded,
        ["size-" + m.size]: !0,
        ["variant-" + m.variant]: !0,
        focus: s.value,
        "has-value": u.value,
        readonly: m.readonly
      })
    }, [
      $("label", null, [
        $("span", Ot, R(m.label), 1),
        $("div", At, [
          g(m.$slots, "start", {}, void 0, !0),
          $("input", {
            ref_key: "editable",
            ref: a,
            class: f({ "toife-input-editable": !0 }),
            placeholder: m.placeholder,
            value: m.modelValue,
            type: m.type,
            onInput: n,
            onFocus: d,
            onBlur: i,
            readonly: m.readonly
          }, null, 40, Dt),
          g(m.$slots, "end", {}, void 0, !0)
        ])
      ]),
      m.error ? (p(), v("text", Xt, R(m.error), 1)) : m.help ? (p(), v("text", Nt, R(m.help), 1)) : E("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ b(Wt, [["__scopeId", "data-v-09588426"]]), qt = {
  class: /* @__PURE__ */ f({ "toife-loading": !0 })
}, Lt = /* @__PURE__ */ h({
  __name: "loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(r, { expose: t, emit: e }) {
    const o = y(!1);
    return t({
      open: () => {
        o.value = !0;
      },
      close: () => {
        o.value = !1;
      }
    }), (u, n) => (p(), O(B(U), {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: o.value
    }, {
      default: N(() => [
        $("div", qt, [
          g(u.$slots, "default", {}, () => [
            u.type === "spinner" ? (p(), O(B(re), { key: 0 })) : E("", !0)
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), be = /* @__PURE__ */ b(Lt, [["__scopeId", "data-v-ac73fa86"]]), So = (r = {}, t) => {
  const e = y(), o = document.body.querySelector(".toife-app");
  let s = null, a = null;
  return {
    open() {
      return new Promise((u) => {
        o && (a = document.createElement("div"), o.appendChild(a), s = F({
          render() {
            return K(t || be, {
              ...r,
              ref: e
            });
          }
        }), s.mount(a), setTimeout(() => {
          e.value?.open?.(), u(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((u) => {
        e.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), a?.remove?.(), u(!0);
        }, 300);
      });
    }
  };
}, Ht = /* @__PURE__ */ h({
  __name: "refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(r, { emit: t }) {
    const e = t, o = r, s = y(0), a = y(!1), u = y();
    let n, d = !1;
    const i = () => {
      a.value = !1, s.value = 0, d = !1;
    }, m = () => {
      d = !0, a.value = !0, s.value = o.threshold, e("refresh", i);
    }, l = () => {
      s.value = 0, a.value = !1, d = !1, e("cancel");
    };
    return X(() => u.value, () => {
      n && n.destroy();
      let _ = u.value.closest(".toife-content");
      _ && (n = oe(_, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(_.scrollTop > 0);
        },
        down() {
          a.value || d || e("start");
        },
        move({ deltaY: c, initialDirection: T }) {
          if (a.value || d || T != "down") return;
          if (o.variant == "max" && c >= o.threshold) {
            m();
            return;
          }
          const x = c < 0 ? 0 : c;
          s.value = x, e("move", x);
        },
        up({ deltaY: c, initialDirection: T }) {
          a.value || d || T != "down" || (o.variant == "up" && c >= o.threshold ? m() : l());
        },
        cancel() {
          a.value || d || l();
        }
      }, {
        passive: !1
      }));
    }), te(() => {
      n && n.destroy();
    }), (_, c) => L((p(), v("div", {
      class: f({ "toife-refresher": !0, safe: _.safe }),
      ref_key: "container",
      ref: u
    }, [
      g(_.$slots, "default", {
        offset: s.value,
        refreshing: a.value
      }, void 0, !0)
    ], 2)), [
      [H, s.value > 0]
    ]);
  }
}), jt = /* @__PURE__ */ b(Ht, [["__scopeId", "data-v-5e42600b"]]), Ft = {};
function Kt(r, t) {
  return p(), v("div");
}
const Ut = /* @__PURE__ */ b(Ft, [["render", Kt]]), Gt = /* @__PURE__ */ h({
  __name: "ripple",
  props: {
    color: { default: "primary" }
  },
  setup(r) {
    const t = r, e = w(() => {
      let o = {};
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? o = {
        "--color": "var(--t-color-status-" + t.color + ")"
      } : o = {
        "--color": t.color
      } : o = {
        "--color": "var(--t-color-surface)"
      }, o;
    });
    return (o, s) => (p(), v("div", {
      class: f({ "toife-ripple": !0 }),
      style: S(e.value)
    }, null, 4));
  }
}), Jt = /* @__PURE__ */ b(Gt, [["__scopeId", "data-v-bc943069"]]), Qt = /* @__PURE__ */ h({
  __name: "sheet",
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
  setup(r, { emit: t }) {
    const e = r, o = t, s = y(), a = y(), u = y(!1);
    let n = null;
    const d = w(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), i = (l) => {
      o("dismiss", l);
    }, m = () => {
      u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300);
    };
    return X(() => s.value, (l) => {
      l && (n = oe(s.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(_) {
          return !(u.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: _ }) {
          m(), _ == d.value ? o("dismiss", "gesture") : a.value.open();
        },
        move({ deltaY: _, deltaX: c, initialDirection: T }) {
          if (T != d.value) return;
          let x = 0;
          e.placement == "bottom" || e.placement == "top" ? x = _ : x = c, e.placement == "bottom" && (x = _ > 0 ? _ : 0), e.placement == "top" && (x = _ < 0 ? _ : 0), e.placement == "left" && (x = c < 0 ? c : 0), e.placement == "right" && (x = c > 0 ? c : 0), (e.placement == "bottom" && (x >= 10 || this.isMoving) || e.placement == "top" && (x <= -10 || this.isMoving) || e.placement == "left" && (x <= -10 || this.isMoving) || e.placement == "right" && (x >= 10 || this.isMoving)) && (this.isMoving = !0, a.value.render({
            contentTransform: x + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: _, deltaX: c, initialDirection: T }) {
          if (this.isMoving = !1, m(), T != d.value) {
            a.value.open();
            return;
          }
          let x, V, k;
          e.placement == "bottom" || e.placement == "top" ? (x = s.value.offsetHeight, k = _) : (x = s.value.offsetWidth, k = c), V = k / x * 100, V > 50 ? o("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          this.isMoving = !1, m(), a.value.open();
        }
      }));
    }), te(() => {
      n && n.destroy();
    }), (l, _) => (p(), O(B(a), {
      ref_key: "present",
      ref: a,
      duration: e.duration,
      bounce: e.bounce,
      class: f(e.class),
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: i,
      style: S(e.style)
    }, {
      default: N(() => [
        e.gesture && e.indicator && e.placement != "center" ? (p(), O(B(ge), {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : E("", !0),
        $("div", {
          ref_key: "sheet",
          ref: s,
          class: f({ "toife-sheet": !0, fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded }),
          style: S({ "--background": e.background })
        }, [
          g(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["duration", "bounce", "class", "placement", "backdrop", "visible", "keepalive", "style"]));
  }
}), Zt = /* @__PURE__ */ b(Qt, [["__scopeId", "data-v-55a9e475"]]), Yt = /* @__PURE__ */ h({
  __name: "skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(r) {
    const t = r, e = w(() => ({
      "--width": t.width,
      "--height": t.height,
      "--radius": t.radius
    }));
    return (o, s) => (p(), v("div", {
      class: f({ "toife-skeleton": !0 }),
      style: S(e.value)
    }, null, 4));
  }
}), eo = /* @__PURE__ */ b(Yt, [["__scopeId", "data-v-c1d4cbb8"]]), to = /* @__PURE__ */ h({
  __name: "switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: t }) {
    const e = r, o = t, s = () => {
      o("update:modelValue", !e.modelValue);
    }, a = w(() => {
      let u = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (u = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), u;
    });
    return (u, n) => (p(), v("div", {
      class: f({ "toife-switch": !0, on: e.modelValue }),
      style: S(a.value),
      onPointerup: s
    }, [...n[0] || (n[0] = [
      $("div", {
        class: f({ "toife-switch-icon": !0 })
      }, null, -1)
    ])], 38));
  }
}), oo = /* @__PURE__ */ b(to, [["__scopeId", "data-v-179eb5a5"]]), ro = /* @__PURE__ */ h({
  __name: "tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(r) {
    const t = r, e = ue("tabsState"), o = w(() => e.activeValue.value === t.value), s = () => {
      t.disabled || e.setValue(t.value);
    };
    return (a, u) => (p(), v("li", {
      class: f({ "toife-tab": !0, active: o.value })
    }, [
      ce(B(G), {
        variant: "text",
        onPointerup: s,
        size: B(e).size,
        color: o.value ? B(e).color.text : void 0
      }, {
        default: N(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), so = /* @__PURE__ */ b(ro, [["__scopeId", "data-v-81f2788b"]]), no = /* @__PURE__ */ h({
  __name: "tabs",
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
  setup(r, { emit: t }) {
    const e = r, o = t, s = y("0px"), a = y(0), u = y(0), n = y(), d = w(() => {
      let l = "", _ = "";
      return e.variant == "text" && (l = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? _ = `var(--t-color-status-${e.color})` : _ = e.color), e.variant == "border-under" && (_ = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? l = `var(--t-color-status-${e.color})` : l = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (l = `var(--t-color-status-${e.color})`, _ = `var(--t-color-status-${e.color}-text)`) : (l = e.color, _ = "currentColor")), { background: l, text: _ };
    }), i = w(() => e.variant == "border-under" ? {
      "--transform": s.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": u.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": a.value - e.margin[1] * 2 + "px",
      "--transform": s.value,
      "--radius": e.radius + "px"
    } : {}), m = () => {
      if (e.variant == "border-under") {
        let l = n.value.querySelector(".active");
        if (l) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let _ = l.getBoundingClientRect().left - n.value.getBoundingClientRect().left + n.value.scrollLeft, c = l.offsetWidth / 2;
            s.value = _ + c - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let _ = l.getBoundingClientRect().top - n.value.getBoundingClientRect().top + n.value.scrollTop, c = l.offsetHeight / 2;
            s.value = _ + c - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let l = n.value.querySelector(".active");
        if (l) {
          let _ = l.offsetWidth, c = l.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let T = l.getBoundingClientRect().left - n.value.getBoundingClientRect().left + n.value.scrollLeft;
            s.value = T + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let T = l.getBoundingClientRect().top - n.value.getBoundingClientRect().top + n.value.scrollTop;
            s.value = T + "px";
          }
          a.value = _, u.value = c;
        }
      }
    };
    return ie("tabsState", {
      activeValue: w(() => e.modelValue),
      color: d.value,
      size: e.size,
      variant: e.variant,
      setValue: (l) => {
        o("update:modelValue", l);
      }
    }), X(() => e.modelValue, async () => {
      await ne(), m();
    }), q(async () => {
      await ne(), m();
    }), (l, _) => (p(), v("ul", {
      ref_key: "container",
      ref: n,
      class: f({ "toife-tabs": !0, [l.placement]: !0, [`variant-${l.variant}`]: !0 }),
      style: S([{ "--background": d.value.background, "--color": d.value.text }, i.value])
    }, [
      g(l.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ao = /* @__PURE__ */ b(no, [["__scopeId", "data-v-1df2614f"]]), lo = /* @__PURE__ */ h({
  __name: "text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(r) {
    const t = r, e = w(() => {
      let o, s = t.color;
      return t.size == "standard" ? o = "var(--t-fs-10)" : t.size == "small" ? o = "var(--t-fs-08)" : t.size == "large" ? o = "var(--t-fs-12)" : o = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (s = `var(--t-color-status-${t.color})`), {
        "--color": s,
        "--font-size": o
      };
    });
    return (o, s) => (p(), v("span", {
      class: f({ "toife-text": !0 }),
      style: S(e.value)
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), co = /* @__PURE__ */ b(lo, [["__scopeId", "data-v-b5b57893"]]), io = {}, uo = {
  class: /* @__PURE__ */ f({ "toife-textarea": !0 })
};
function po(r, t) {
  return p(), v("div", uo, [...t[0] || (t[0] = [
    $("textarea", null, null, -1)
  ])]);
}
const fo = /* @__PURE__ */ b(io, [["render", po]]), mo = {
  class: /* @__PURE__ */ f({ "toife-toast-content": !0 })
}, vo = /* @__PURE__ */ h({
  __name: "toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    color: { default: null },
    variant: { default: "default" },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["dismiss"],
  setup(r, { expose: t, emit: e }) {
    const o = r, s = e, a = y(!1), u = y(!1), n = y(!1), d = () => {
      u.value = !0, n.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10);
    }, i = () => {
      n.value = !0, setTimeout(() => {
        u.value = !1, a.value = !1, s("dismiss");
      }, 300);
    };
    X(() => o.visible, (l) => {
      l ? d() : i();
    });
    const m = w(() => {
      let l;
      return o.variant == "default" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + o.color + "-rgb), 1)"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": o.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), o.variant == "text" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": o.color,
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o.variant == "outline" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? l = {
        "--border": "0.55px solid var(--t-color-status-" + o.color + ")",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid " + o.color,
        "--color": o.color,
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), l;
    });
    return t({
      open: d,
      close: i
    }), (l, _) => u.value ? (p(), v("div", {
      key: 0,
      class: f({ "toife-toast": !0, [o.placement]: !0, open: a.value, closing: n.value }),
      style: S({ "--space": o.space, ...m.value })
    }, [
      g(l.$slots, "content", {}, () => [
        $("div", mo, R(o.message), 1)
      ], !0)
    ], 6)) : E("", !0);
  }
}), he = /* @__PURE__ */ b(vo, [["__scopeId", "data-v-dcf5106c"]]), Bo = (r = {}, t) => ({
  open() {
    let e = document.body.querySelector(".toife-app");
    if (!e) return;
    const o = document.createElement("div"), s = y();
    e.appendChild(o);
    const a = F({
      render() {
        return K(t || he, {
          ...r,
          ref: s,
          onDismiss: () => {
            setTimeout(() => {
              a.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    a.mount(o), setTimeout(() => {
      s.value?.open?.(), setTimeout(() => {
        s.value?.close?.();
      }, (r.duration || 2e3) + 10);
    }, 50);
  }
}), yo = /* @__PURE__ */ h({
  __name: "toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(r, { emit: t }) {
    const e = r, o = t, s = y(!1), a = y(), u = w(() => {
      let i = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (i = `var(--t-color-status-${e.color})`), {
        "--color": i
      };
    }), n = () => a.value?.parentElement?.querySelector?.("input");
    q(() => {
      let i = n();
      i && (s.value = i.type != "password", o("change", s.value));
    });
    const d = () => {
      let i = n();
      i && (s.value = !s.value, s.value ? i.type = "text" : i.type = "password", o("change", s.value));
    };
    return (i, m) => (p(), v("button", {
      ref_key: "toggle",
      ref: a,
      class: f({ "toife-toggle-password": !0 }),
      style: S(u.value),
      onPointerup: d
    }, [
      s.value ? g(i.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      s.value ? E("", !0) : g(i.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 36));
  }
}), _o = /* @__PURE__ */ b(yo, [["__scopeId", "data-v-145545ff"]]), go = /* @__PURE__ */ h({
  __name: "toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(r) {
    const t = r, e = ue("cableState"), o = w(() => t?.placement || e?.placement);
    return (s, a) => (p(), v("div", {
      class: f({ "toife-toolbar": !0, [o.value]: !0, safe: t.safe }),
      style: S({ "--t-size-toolbar": t.size })
    }, [
      $("div", null, [
        g(s.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), bo = /* @__PURE__ */ b(go, [["__scopeId", "data-v-8c7c2937"]]), zo = (r) => {
  const t = r?.prefix || "t-";
  return {
    install: (e) => {
      r?.declare && (e.component(t + "app", Ee), e.component(t + "action", pe), e.component(t + "screen", me), e.component(t + "screen-router", st), e.component(t + "cable", dt), e.component(t + "toolbar", bo), e.component(t + "content", Tt), e.component(t + "card", pt), e.component(t + "refresher", jt), e.component(t + "button", G), e.component(t + "back-button", at), e.component(t + "present", U), e.component(t + "text", co), e.component(t + "sheet", Zt), e.component(t + "gesture-indicator", ge), e.component(t + "input", Mt), e.component(t + "textarea", fo), e.component(t + "richtext", Ut), e.component(t + "grid", Vt), e.component(t + "divider", Bt), e.component(t + "toggle-password", _o), e.component(t + "icon-spinner", re), e.component(t + "alert", fe), e.component(t + "avatar", He), e.component(t + "collapse", kt), e.component(t + "toast", he), e.component(t + "switch", oo), e.component(t + "tab", so), e.component(t + "tabs", ao), e.component(t + "checkbox", yt), e.component(t + "keyboard-space", it), e.component(t + "skeleton", eo), e.component(t + "ripple", Jt), e.component(t + "loading", be), e.component(t + "flex", Pt), e.component(t + "image", Rt));
    }
  };
}, ke = (r) => r && (r.tagName == "INPUT" || r.tagName == "TEXTAREA" || r.isContentEditable), $e = () => {
  const r = document.activeElement;
  r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable) && r.blur();
}, ho = () => {
  document.addEventListener("contextmenu", (r) => r.preventDefault()), document.addEventListener("pointerup", (r) => {
    !ke(r.target) && $e();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blurCurrentActive: $e,
  isFormElement: ke,
  preventDefault: ho
}, Symbol.toStringTag, { value: "Module" }));
export {
  pe as Action,
  fe as Alert,
  Ee as App,
  He as Avatar,
  at as BackButton,
  G as Button,
  dt as Cable,
  pt as Card,
  yt as Checkbox,
  kt as Collapse,
  Tt as Content,
  Bt as Divider,
  Pt as Flex,
  ge as GestureIndicator,
  Vt as Grid,
  re as IconSpinner,
  Rt as Image,
  Mt as Input,
  it as KeyboardSpace,
  be as Loading,
  U as Present,
  jt as Refresher,
  Ut as Richtext,
  Jt as Ripple,
  me as Screen,
  st as ScreenRouter,
  Zt as Sheet,
  eo as Skeleton,
  oo as Switch,
  so as Tab,
  ao as Tabs,
  co as Text,
  fo as Textarea,
  he as Toast,
  _o as TogglePassword,
  bo as Toolbar,
  wo as createAction,
  To as createAlert,
  So as createLoading,
  Bo as createToast,
  zo as createToife,
  Ie as getNewPresentIndex,
  _e as useKeyboard,
  ye as useScreenRouter,
  Po as utils
};
