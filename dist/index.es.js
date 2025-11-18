import { defineComponent as k, createElementBlock as _, openBlock as i, normalizeClass as p, renderSlot as $, ref as u, computed as b, reactive as ce, watch as C, onMounted as V, Fragment as q, withDirectives as K, createCommentVNode as z, normalizeStyle as w, vShow as G, createElementVNode as S, createVNode as ye, createBlock as A, withCtx as X, renderList as U, createTextVNode as ie, toDisplayString as R, createApp as te, h as re, onUnmounted as M, markRaw as pe, resolveDynamicComponent as Ie, useAttrs as fe, provide as J, inject as Q, nextTick as le } from "vue";
import { useRouter as Z, useRoute as me } from "vue-router";
import { gesture as L } from "@toife/gesture";
const Oe = /* @__PURE__ */ k({
  __name: "app",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}), Be = {
  class: /* @__PURE__ */ p({ "toife-app": !0 })
};
function ze(r, o, t, e, s, n) {
  return i(), _("div", Be, [
    $(r.$slots, "default")
  ]);
}
const x = (r, o) => {
  const t = r.__vccOpts || r;
  for (const [e, s] of o)
    t[e] = s;
  return t;
}, Ce = /* @__PURE__ */ x(Oe, [["render", ze]]), _e = u(1e3), ve = () => (_e.value += 2, _e.value), Ee = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    const e = u(0), s = u(!1), n = u(), l = u(), a = r, c = t, d = b(() => s.value || a.keepalive), v = u(!1), g = ce({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), y = b(() => a.duration / 1e3 + "s"), m = (T) => {
      a.backdrop ? T?.backdropOpacity && (g["--t-present-backdrop-opacity"] = T.backdropOpacity) : g["--t-present-backdrop-opacity"] = "0", T.transition && (g["--t-present-transition"] = T.transition), T.contentTransform && (g["--t-present-content-transform"] = T.contentTransform), T.contentOpacity && (g["--t-present-content-opacity"] = T.contentOpacity);
    }, h = () => {
      if (a.bounce !== void 0 && !v.value) {
        v.value = !0;
        let T = a.bounce;
        (a.placement == "bottom" || a.placement == "right") && (T = `calc(${a.bounce} * -1)`), m({
          contentTransform: T,
          transition: y.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        }), setTimeout(() => {
          m({
            contentTransform: "0px"
          });
        }, a.duration);
      } else
        m({
          contentTransform: "0px",
          transition: y.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, f = () => {
      let T = "0px", W = "1";
      a.placement == "bottom" || a.placement == "right" ? T = "100%" : a.placement == "top" || a.placement == "left" ? T = "-100%" : a.placement == "center" && (T = "0px", W = "0"), m({
        contentTransform: T,
        transition: y.value,
        contentOpacity: W,
        backdropOpacity: "0"
      });
    };
    C(() => a.visible, () => {
      a.visible ? (v.value = !1, s.value = !0, e.value = ve(), setTimeout(() => {
        h();
      }, 50)) : (f(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), o({
      render: m,
      open: h,
      close: f
    });
    const I = (T) => {
      T.preventDefault(), c("dismiss", "backdrop");
    };
    V(() => {
      a.visible ? h() : f();
    });
    const P = { zIndex: e, isShow: s, backdrop: n, present: l, props: a, emit: c, isRender: d, isBounced: v, styles: g, time: y, render: m, open: h, close: f, onClickBackdrop: I, computed: b, onMounted: V, reactive: ce, ref: u, watch: C, get getNewPresentIndex() {
      return ve;
    } };
    return Object.defineProperty(P, "__isScriptSetup", { enumerable: !1, value: !0 }), P;
  }
});
function je(r, o, t, e, s, n) {
  return i(), _(q, null, [
    e.isRender ? K((i(), _("div", {
      key: 0,
      class: p({ "toife-present-backdrop": !0 }),
      onPointerup: e.onClickBackdrop,
      ref: "backdrop",
      style: w([e.styles, { zIndex: e.zIndex - 1 }, e.props.style])
    }, null, 36)), [
      [G, e.isShow]
    ]) : z("", !0),
    e.isRender ? K((i(), _("div", {
      key: 1,
      ref: "present",
      class: p([{ "toife-present": !0, [t.placement]: !0 }, e.props.class]),
      style: w([e.styles, { zIndex: e.zIndex }, e.props.style])
    }, [
      $(r.$slots, "default", {}, void 0, !0)
    ], 6)), [
      [G, e.isShow]
    ]) : z("", !0)
  ], 64);
}
const H = /* @__PURE__ */ x(Ee, [["render", je], ["__scopeId", "data-v-84ae4056"]]), Re = /* @__PURE__ */ k({
  __name: "icon-spinner",
  props: {
    size: { default: "24px" },
    color: { default: "var(--t-color-text)" }
  },
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
});
function Ve(r, o, t, e, s, n) {
  return i(), _("span", {
    class: p({ "toife-icon-spinner": !0 }),
    style: w({
      width: t.size,
      height: t.size,
      borderTopColor: t.color
    }),
    role: "status",
    "aria-label": "Loading..."
  }, null, 4);
}
const ue = /* @__PURE__ */ x(Re, [["render", Ve], ["__scopeId", "data-v-86bf1193"]]), Ae = /* @__PURE__ */ k({
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
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "var(--t-color-status-" + t.color + ")"
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), n;
    }), s = { props: t, styles: e, computed: b, get IconSpinner() {
      return ue;
    } };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}), De = {
  class: /* @__PURE__ */ p({ "toife-button-content": !0 })
}, Ne = {
  key: 0,
  class: "loader"
};
function Xe(r, o, t, e, s, n) {
  return i(), _("button", {
    style: w(e.styles),
    class: p({ "toife-button": !0, "active-background": e.props.activeBackground, rounded: e.props.rounded, block: e.props.block, ["size-" + e.props.size]: !0 })
  }, [
    K(S("span", De, [
      $(r.$slots, "default", {}, void 0, !0)
    ], 512), [
      [G, !e.props.loading]
    ]),
    e.props.loading ? (i(), _("span", Ne, [
      ye(e.IconSpinner, {
        color: "var(--color)",
        type: e.props.loadingType
      }, null, 8, ["type"])
    ])) : z("", !0)
  ], 6);
}
const oe = /* @__PURE__ */ x(Ae, [["render", Xe], ["__scopeId", "data-v-847b59bd"]]), We = /* @__PURE__ */ k({
  __name: "action",
  props: {
    actions: { default: () => [] },
    visible: { type: Boolean, default: !1 },
    dismiss: { default: () => [] }
  },
  emits: ["dismiss"],
  setup(r, { expose: o, emit: t }) {
    const e = r, s = t, n = u(!1), l = u(), a = u(!1), c = () => {
      n.value = !0;
    }, d = () => {
      n.value = !1;
    }, v = (m) => {
      d(), m.handler && m.handler(), s("dismiss", "choose", m?.data);
    }, g = (m) => {
      e.dismiss && e.dismiss.includes(m) ? (d(), s("dismiss", m)) : m === "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    C(() => e.visible, (m) => {
      m ? c() : d();
    }, { immediate: !0 }), o({
      open: c,
      close: d
    });
    const y = { props: e, emit: s, _visible: n, container: l, pop: a, open: c, close: d, choose: v, onDismiss: g, ref: u, watch: C, get TPresent() {
      return H;
    }, get TButton() {
      return oe;
    } };
    return Object.defineProperty(y, "__isScriptSetup", { enumerable: !1, value: !0 }), y;
  }
});
function qe(r, o, t, e, s, n) {
  return i(), A(e.TPresent, {
    placement: "bottom",
    backdrop: !0,
    keepalive: !1,
    visible: e._visible,
    onDismiss: e.onDismiss
  }, {
    default: X(() => [
      S("div", {
        class: p({ pop: e.pop, "toife-action": !0 }),
        ref: "container"
      }, [
        (i(!0), _(q, null, U(e.props.actions, (l, a) => (i(), _("div", { key: a }, [
          (i(!0), _(q, null, U(l, (c, d) => (i(), A(e.TButton, {
            key: c.key ?? `${a}-${d}`,
            color: c.color,
            size: c.size,
            variant: c.variant,
            onPointerup: (v) => e.choose(c),
            block: ""
          }, {
            default: X(() => [
              ie(R(c.text), 1)
            ]),
            _: 2
          }, 1032, ["color", "size", "variant", "onPointerup"]))), 128))
        ]))), 128))
      ], 2)
    ]),
    _: 1
  }, 8, ["visible"]);
}
const be = /* @__PURE__ */ x(We, [["render", qe], ["__scopeId", "data-v-f5dbe511"]]), oo = (r = {}, o) => ({
  open() {
    return new Promise((t) => {
      let e = document.body.querySelector(".toife-app");
      if (!e) return;
      const s = document.createElement("div"), n = u();
      e.appendChild(s);
      const l = te({
        render() {
          return re(o || be, {
            ...r,
            ref: n,
            onDismiss: (a, c) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: a, data: c });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Me = /* @__PURE__ */ k({
  __name: "alert",
  props: {
    title: { default: "" },
    message: { default: "" },
    actions: { default: () => [] },
    dismiss: { default: () => [] }
  },
  emits: ["dismiss"],
  setup(r, { expose: o, emit: t }) {
    const e = r, s = t, n = u(!1), l = u(), a = u(!1), c = () => {
      n.value = !0;
    }, d = (y) => {
      n.value = !1, y.handler && y.handler(), s("dismiss", "choose", y?.data);
    }, v = (y) => {
      e.dismiss && e.dismiss.includes(y) ? (n.value = !1, s("dismiss", y)) : y == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    o({
      open: c
    });
    const g = { props: e, emit: s, visible: n, container: l, pop: a, open: c, choose: d, onDismiss: v, ref: u, get Present() {
      return H;
    }, get CustomButton() {
      return oe;
    } };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}), Le = {
  key: 0,
  class: /* @__PURE__ */ p({ "toife-alert-header": !0 })
}, Fe = {
  class: /* @__PURE__ */ p({ "toife-alert-content": !0 })
}, He = {
  class: /* @__PURE__ */ p({ "toife-alert-footer": !0 })
};
function Ke(r, o, t, e, s, n) {
  return i(), A(e.Present, {
    placement: "center",
    backdrop: !0,
    keepalive: !1,
    visible: e.visible,
    onDismiss: e.onDismiss
  }, {
    default: X(() => [
      S("div", {
        class: p({ pop: e.pop, "toife-alert": !0 }),
        ref: "container"
      }, [
        $(r.$slots, "header", {}, () => [
          e.props.title ? (i(), _("div", Le, R(e.props.title), 1)) : z("", !0)
        ], !0),
        $(r.$slots, "content", {}, () => [
          S("div", Fe, R(e.props.message), 1)
        ], !0),
        $(r.$slots, "footer", {}, () => [
          S("div", He, [
            (i(!0), _(q, null, U(e.props.actions, (l) => (i(), A(e.CustomButton, {
              color: l.color,
              variant: l.variant,
              onPointerup: (a) => e.choose(l)
            }, {
              default: X(() => [
                ie(R(l.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "variant", "onPointerup"]))), 256))
          ])
        ], !0)
      ], 2)
    ]),
    _: 3
  }, 8, ["visible"]);
}
const ge = /* @__PURE__ */ x(Me, [["render", Ke], ["__scopeId", "data-v-64e5ebe5"]]), no = (r = {}, o) => ({
  open() {
    return new Promise((t) => {
      let e = document.body.querySelector(".toife-app");
      if (!e) return;
      const s = document.createElement("div"), n = u();
      e.appendChild(s);
      const l = te({
        render() {
          return re(o || ge, {
            ...r,
            ref: n,
            onDismiss: (a, c) => {
              setTimeout(() => {
                l.unmount(), s.remove();
              }, 300), t({ type: a, data: c });
            }
          });
        }
      });
      l.mount(s), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ge = /* @__PURE__ */ k({
  __name: "avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size), s = { props: t, width: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Ue(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ square: t.square, "toife-avatar": !0 }),
    style: w({ "--size": e.width })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 6);
}
const Je = /* @__PURE__ */ x(Ge, [["render", Ue], ["__scopeId", "data-v-32c57a0d"]]), Qe = /* @__PURE__ */ k({
  __name: "screen",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}), Ze = {
  class: /* @__PURE__ */ p({ "toife-screen": !0 })
};
function Ye(r, o, t, e, s, n) {
  return i(), _("div", Ze, [
    $(r.$slots, "default", {}, void 0, !0)
  ]);
}
const he = /* @__PURE__ */ x(Qe, [["render", Ye], ["__scopeId", "data-v-59be2187"]]), D = ce([]), ne = u(!0), B = u(!1), j = u(-1), O = b(() => D[j.value]), F = b(() => D[j.value + 1] || void 0), E = b(() => D[D.length - 2]), ke = b(() => !B.value && ne.value && E.value), N = (r = !0) => {
  let t = O.value.target.closest(".toife-app").offsetWidth;
  return r ? t + "px" : t;
}, se = {
  reset() {
    B.value = !0;
    const r = N(), o = O.value.target, t = E.value.target;
    o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", t.style.transition = "transform 0.25s ease", t.style.transform = `translateX(calc(${r} / 100 * 30 * -1)) scale(0.5) perspective(${r}) rotateY(30deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      B.value = !1;
    }, 400);
  },
  move(r) {
    if (!ke.value) return;
    const o = N(!1), t = o + "px", e = r / o * 100, s = O.value.target, n = E.value.target;
    r > 15 && r <= o && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((${t} / 100 * 30 * -1) + ((${t} / 100 * 30) / 100 * ${e}))) scale(${0.5 + 0.5 / 100 * e}) perspective(${t}) rotateY(${30 - 30 / 100 * e}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * e}`));
  },
  back(r) {
    if (!E.value) return;
    const o = N();
    O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.25s ease", E.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), B.value = !0, setTimeout(() => {
      de(), B.value = !1, j.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!F.value) return;
    if (j.value == -1) {
      j.value += 1, r && r();
      return;
    }
    B.value = !0;
    const o = F.value.target, t = N();
    o.style.transform = `translateX(${t})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), O.value && (O.value.target.style.transitionOrigin = "left center", O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`), setTimeout(() => {
        B.value = !1, j.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, ae = {
  reset() {
    B.value = !0;
    const r = N(), o = O.value.target, t = E.value.target;
    o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", t.style.transition = "transform 0.25s ease", t.style.transform = `translateX(calc(${r} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      B.value = !1;
    }, 400);
  },
  move(r) {
    const o = N(!1), t = o + "px", e = r / o * 100, s = O.value.target, n = E.value.target;
    r > 15 && r <= o && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((${t} / 100 * 30 * -1) + ((${t} / 100 * 30) / 100 * ${e})))`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * e}`));
  },
  back(r) {
    if (!E.value) return;
    const o = N();
    O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.25s ease", E.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), B.value = !0, setTimeout(() => {
      de(), B.value = !1, j.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!F.value) return;
    if (j.value == -1) {
      j.value += 1, r && r();
      return;
    }
    B.value = !0;
    const o = F.value.target, t = N();
    o.style.transform = `translateX(${t})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), O.value && (O.value.target.style.transitionOrigin = "left center", O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`), setTimeout(() => {
        B.value = !1, j.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, et = (r) => {
  D.push(r);
}, tt = (r, o) => {
  D[r].target = o;
}, de = (r) => {
  r || D.pop();
}, rt = () => {
  D.splice(0, D.length);
}, ot = () => {
  ne.value = !1;
}, nt = () => {
  ne.value = !0;
}, st = (r, o) => {
  r == "scale" && se.next(o), r == "transform" && ae.next(o);
}, at = (r, o) => {
  r == "scale" && se.back(o), r == "transform" && ae.back(o);
}, lt = (r, o) => {
  r == "scale" && se.move(o), r == "transform" && ae.move(o);
}, ct = (r) => {
  r == "scale" && se.reset(), r == "transform" && ae.reset();
}, Y = () => ({
  isBusy: B,
  isSwipeable: ke,
  reset: ct,
  next: st,
  back: at,
  move: lt,
  screens: D,
  addScreen: et,
  addScreenEl: tt,
  removeScreen: de,
  removeAllScreen: rt,
  lockSwipe: ot,
  unlockSwipe: nt,
  swipeable: ne,
  currentScreen: O,
  lastScreen: E,
  nextScreen: F
}), it = /* @__PURE__ */ k({
  __name: "screen-router",
  props: {
    variant: { default: "scale" },
    router: {},
    route: {}
  },
  emits: ["change"],
  setup(r, { expose: o, emit: t }) {
    o();
    let e = {};
    const s = t, n = r;
    let l;
    const a = n.router || Z(), c = n.route || me(), d = a.getRoutes(), v = Y(), g = u();
    for (let f of d)
      e[f.name] = f.component || f.components;
    const y = (f) => {
      f && v.addScreen({
        name: f,
        target: null,
        component: pe(e[f] || null)
      });
    }, m = (f, I) => {
      !I || v.screens[f].target || (v.addScreenEl(f, I.$el), v.nextScreen && v.next(n.variant, () => {
        s("change");
      }));
    };
    C(() => c.name, (f, I) => {
      f != v.currentScreen.value?.name && (v.lastScreen.value?.name == f ? v.back(n.variant, () => {
        s("change");
      }) : y(c.name));
    }), V(() => {
      y(c.name), l = L(document.body, {
        beforeEvent(f) {
          return !!v.isSwipeable.value;
        },
        fast({ initialDirection: f }) {
          v.lastScreen.value && f == "right" && a.back();
        },
        move({ deltaX: f, initialDirection: I }) {
          I == "right" && v.move(n.variant, f);
        },
        up({ deltaX: f, initialDirection: I }) {
          if (I != "right") {
            v.reset(n.variant);
            return;
          }
          const P = g.value.offsetParent.offsetWidth;
          f / P * 100 >= 50 ? a.back() : v.reset(n.variant);
        },
        cancel() {
          v.reset(n.variant);
        }
      });
    }), M(() => {
      l && l.destroy(), v.removeAllScreen();
    });
    const h = { get routeComponents() {
      return e;
    }, set routeComponents(f) {
      e = f;
    }, emit: s, props: n, get ges() {
      return l;
    }, set ges(f) {
      l = f;
    }, _router: a, _route: c, routes: d, screenRouter: v, backdrop: g, addScreen: y, addScreenRef: m, markRaw: pe, onMounted: V, onUnmounted: M, ref: u, watch: C, get useRoute() {
      return me;
    }, get useRouter() {
      return Z;
    }, get gesture() {
      return L;
    }, get Screen() {
      return he;
    }, get useScreenRouter() {
      return Y;
    } };
    return Object.defineProperty(h, "__isScriptSetup", { enumerable: !1, value: !0 }), h;
  }
});
function ut(r, o, t, e, s, n) {
  return i(), _(q, null, [
    (i(!0), _(q, null, U(e.screenRouter.screens, (l, a) => (i(), A(e.Screen, {
      ref_for: !0,
      ref: (c) => e.addScreenRef(a, c),
      style: w({ zIndex: a + (a == e.screenRouter.screens.length - 1 ? 2 : 1) }),
      key: a
    }, {
      default: X(() => [
        (i(), A(Ie(l.component.default)))
      ]),
      _: 2
    }, 1032, ["style"]))), 128)),
    S("div", {
      class: p({ "toife-screen-router-backdrop": !0 }),
      ref: "backdrop",
      style: w({ zIndex: e.screenRouter.screens.length })
    }, null, 4)
  ], 64);
}
const dt = /* @__PURE__ */ x(it, [["render", ut], ["__scopeId", "data-v-c7ff05f0"]]), pt = /* @__PURE__ */ k({
  __name: "back-button",
  props: {
    to: {},
    router: {}
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = fe(), s = t.router || Z(), n = Y(), a = { props: t, attrs: e, router: s, screenRouter: n, onClick: (c) => {
      if (e.onBack) {
        e.onBack(c);
        return;
      }
      n.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    }, useAttrs: fe, get useRouter() {
      return Z;
    }, get useScreenRouter() {
      return Y;
    } };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
});
function ft(r, o, t, e, s, n) {
  return t.to || e.screenRouter.lastScreen ? (i(), _("button", {
    key: 0,
    class: p({ "toife-back-button": !0 }),
    onPointerup: e.onClick
  }, [
    $(r.$slots, "default", {}, () => [
      o[0] || (o[0] = S("i", { class: "ri-arrow-left-s-line" }, null, -1))
    ], !0)
  ], 32)) : z("", !0);
}
const mt = /* @__PURE__ */ x(pt, [["render", ft], ["__scopeId", "data-v-acb94acb"]]), _t = u(0);
function ee() {
  return {
    height: _t
  };
}
const vt = /* @__PURE__ */ k({
  __name: "keyboard-space",
  setup(r, { expose: o }) {
    o();
    const { height: t } = ee(), e = { height: t, get useKeyboard() {
      return ee;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
});
function yt(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-keyboard-space": !0 }),
    style: w({ "--height": e.height + "px" })
  }, null, 4);
}
const bt = /* @__PURE__ */ x(vt, [["render", yt], ["__scopeId", "data-v-ae883ffe"]]), gt = /* @__PURE__ */ k({
  __name: "cable",
  props: {
    keyboard: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, { height: e } = ee();
    J("cableState", {
      placement: t.placement
    });
    const s = { props: t, height: e, provide: J, get useKeyboard() {
      return ee;
    } };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function ht(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-cable": !0, keyboard: e.props.keyboard && e.height > 0, [e.props.placement]: !0 }),
    style: w({ "--t-keyboard-height": e.height + "px", "--t-keyboard-transition": e.height > 0 ? "0.3s" : "0.1s" })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 6);
}
const kt = /* @__PURE__ */ x(gt, [["render", ht], ["__scopeId", "data-v-2c9cb2cf"]]), xt = /* @__PURE__ */ k({
  __name: "card",
  props: {
    color: { default: null }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n;
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--background": "var(--t-color-status-" + t.color + ")"
      } : n = {
        "--background": t.color
      } : n = {
        "--background": "var(--t-color-surface)"
      }, n;
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function $t(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-card": !0 }),
    style: w(e.styles)
  }, [
    $(r.$slots, "default")
  ], 4);
}
const St = /* @__PURE__ */ x(xt, [["render", $t]]), wt = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = b(() => {
      let d = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (d = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), d;
    }), l = b(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), c = { props: e, emit: s, styles: n, isActive: l, onToggle: (d) => {
      if (d.preventDefault(), d.stopPropagation(), e.multiple) {
        let v = e.modelValue;
        e.modelValue.includes(e.value) ? v.splice(v.indexOf(e.value), 1) : v.push(e.value), s("update:modelValue", v);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    }, computed: b };
    return Object.defineProperty(c, "__isScriptSetup", { enumerable: !1, value: !0 }), c;
  }
}), Pt = { key: 0 }, Tt = {
  key: 0,
  class: /* @__PURE__ */ p({ "toife-checkbox-label": !0 })
};
function It(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-checkbox": !0, active: e.isActive }),
    style: w(e.styles),
    onPointerup: e.onToggle
  }, [
    S("div", {
      class: p({ [`toife-checkbox-${t.type}`]: !0 })
    }, [
      t.type == "radio" ? (i(), _("div", Pt)) : z("", !0),
      t.type == "check" ? $(r.$slots, "icon", { key: 1 }, () => [
        o[0] || (o[0] = S("i", { class: "ri-check-line" }, null, -1))
      ], !0) : z("", !0)
    ], 2),
    $(r.$slots, "label", {}, () => [
      t.label ? (i(), _("span", Tt, R(e.props.label), 1)) : z("", !0)
    ], !0)
  ], 38);
}
const Ot = /* @__PURE__ */ x(wt, [["render", It], ["__scopeId", "data-v-14345567"]]), Bt = /* @__PURE__ */ k({
  __name: "collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u(!1), l = u(""), a = u(), c = () => {
      n.value = !n.value, l.value = `calc(${a.value.offsetHeight}px + 2rem)`, s("change", n.value);
    };
    s("change", n.value);
    const d = { props: e, emit: s, isOpen: n, height: l, content: a, onToggle: c, ref: u };
    return Object.defineProperty(d, "__isScriptSetup", { enumerable: !1, value: !0 }), d;
  }
}), zt = {
  class: /* @__PURE__ */ p({ "toife-collapse-title": !0 })
}, Ct = {
  key: 0,
  class: "icon"
}, Et = {
  key: 1,
  class: "icon"
}, jt = {
  class: /* @__PURE__ */ p({ "toife-collapse-content": !0 })
}, Rt = { ref: "content" };
function Vt(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-collapse": !0, open: e.isOpen }),
    style: w({ "--height": e.height })
  }, [
    S("div", {
      class: p({ "toife-collapse-header": !0 }),
      onPointerup: e.onToggle
    }, [
      $(r.$slots, "icon"),
      S("div", zt, [
        $(r.$slots, "title", {}, () => [
          ie(R(e.props.title), 1)
        ])
      ]),
      $(r.$slots, "toggle", {}, () => [
        e.isOpen ? (i(), _("div", Ct, [...o[0] || (o[0] = [
          S("i", { class: "ri-arrow-up-s-line" }, null, -1)
        ])])) : (i(), _("div", Et, [...o[1] || (o[1] = [
          S("i", { class: "ri-arrow-down-s-line" }, null, -1)
        ])]))
      ])
    ], 32),
    S("div", jt, [
      S("div", Rt, [
        $(r.$slots, "content", {}, () => [
          $(r.$slots, "default")
        ])
      ], 512)
    ])
  ], 6);
}
const At = /* @__PURE__ */ x(Bt, [["render", Vt]]), Dt = /* @__PURE__ */ k({
  __name: "content",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}), Nt = {
  class: /* @__PURE__ */ p({ "toife-content": !0 })
};
function Xt(r, o, t, e, s, n) {
  return i(), _("div", Nt, [
    $(r.$slots, "default", {}, void 0, !0)
  ]);
}
const Wt = /* @__PURE__ */ x(Dt, [["render", Xt], ["__scopeId", "data-v-90d3a187"]]), qt = /* @__PURE__ */ k({
  __name: "divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(r, { expose: o }) {
    o();
    const e = { props: r };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
});
function Mt(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-divider": !0, [e.props.direction]: !0 })
  }, null, 2);
}
const Lt = /* @__PURE__ */ x(qt, [["render", Mt], ["__scopeId", "data-v-1fcdf04e"]]), Ft = /* @__PURE__ */ k({
  __name: "flex",
  props: {
    gap: { default: 0 },
    direction: { default: "row" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => isNaN(t.gap) ? t.gap : `var(--t-size-${t.gap})`), s = { props: t, _gap: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Ht(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-flex": !0 }),
    style: w({ "--gap": e._gap, "--direction": e.props.direction })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const Kt = /* @__PURE__ */ x(Ft, [["render", Ht], ["__scopeId", "data-v-a25bbd90"]]), Gt = /* @__PURE__ */ k({
  __name: "gesture-indicator",
  props: {
    placement: { default: "bottom" }
  },
  setup(r, { expose: o }) {
    o();
    const e = { props: r };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
});
function Ut(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-gesture-indicator": !0, [t.placement]: !0 })
  }, null, 2);
}
const xe = /* @__PURE__ */ x(Gt, [["render", Ut], ["__scopeId", "data-v-65133446"]]), Jt = /* @__PURE__ */ k({
  __name: "grid",
  props: {
    gap: { default: 0 },
    template: { default: "repeat(1, 1fr) / repeat(1, 1fr)" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => isNaN(t.gap) ? t.gap : `var(--t-size-${t.gap})`), s = { props: t, _gap: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Qt(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-grid": !0 }),
    style: w({ "--gap": e._gap, "--template": e.props.template })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const Zt = /* @__PURE__ */ x(Jt, [["render", Qt], ["__scopeId", "data-v-72c2df27"]]), Yt = /* @__PURE__ */ k({
  __name: "image",
  props: {
    defaultSrc: {},
    src: {}
  },
  setup(r, { expose: o }) {
    o();
    const t = u(""), e = () => {
      r.defaultSrc && (t.value = r.defaultSrc);
    };
    V(() => {
      t.value = r.src;
    });
    const s = { _src: t, handleError: e, onMounted: V, ref: u };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}), er = ["src"];
function tr(r, o, t, e, s, n) {
  return i(), _("img", {
    onError: e.handleError,
    src: e._src
  }, null, 40, er);
}
const rr = /* @__PURE__ */ x(Yt, [["render", tr], ["__scopeId", "data-v-0eed0f1f"]]), or = /* @__PURE__ */ k({
  __name: "text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n, l = t.color;
      return t.size == "standard" ? n = "var(--t-fs-10)" : t.size == "small" ? n = "var(--t-fs-08)" : t.size == "large" ? n = "var(--t-fs-12)" : n = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (l = `var(--t-color-status-${t.color})`), {
        "--color": l,
        "--font-size": n
      };
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function nr(r, o, t, e, s, n) {
  return i(), _("span", {
    class: p({ "toife-text": !0 }),
    style: w(e.styles)
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const $e = /* @__PURE__ */ x(or, [["render", nr], ["__scopeId", "data-v-cd7f9609"]]), sr = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u(!1), l = u(null), a = b(
      () => !(e.modelValue === "" || e.modelValue == null)
    ), g = { props: e, emit: s, isFocus: n, editable: l, hasValue: a, onInput: (y) => {
      s("update:modelValue", y.target.value);
    }, focus: async (y) => {
      n.value = !0;
    }, blur: () => {
      n.value = !1;
    }, ref: u, computed: b, get Text() {
      return $e;
    } };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}), ar = {
  class: /* @__PURE__ */ p({ "toife-input-label": !0 })
}, lr = {
  class: /* @__PURE__ */ p({ "toife-input-content": !0 })
}, cr = ["placeholder", "value", "type", "readonly"], ir = {
  key: 0,
  color: "danger"
}, ur = {
  key: 1,
  color: "secondary"
};
function dr(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({
      "toife-input": !0,
      rounded: t.rounded,
      ["size-" + t.size]: !0,
      ["variant-" + t.variant]: !0,
      focus: e.isFocus,
      "has-value": e.hasValue,
      readonly: t.readonly
    })
  }, [
    S("label", null, [
      S("span", ar, R(t.label), 1),
      S("div", lr, [
        $(r.$slots, "start", {}, void 0, !0),
        S("input", {
          ref: "editable",
          class: p({ "toife-input-editable": !0 }),
          placeholder: t.placeholder,
          value: t.modelValue,
          type: t.type,
          onInput: e.onInput,
          onFocus: e.focus,
          onBlur: e.blur,
          readonly: t.readonly
        }, null, 40, cr),
        $(r.$slots, "end", {}, void 0, !0)
      ])
    ]),
    t.error ? (i(), _("text", ir, R(t.error), 1)) : t.help ? (i(), _("text", ur, R(t.help), 1)) : z("", !0)
  ], 2);
}
const pr = /* @__PURE__ */ x(sr, [["render", dr], ["__scopeId", "data-v-f7768bea"]]), fr = /* @__PURE__ */ k({
  __name: "loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(r, { expose: o, emit: t }) {
    const e = r, s = u(!1), n = t;
    let l;
    const a = () => {
      s.value = !0;
    }, c = () => {
      s.value = !1;
    };
    o({
      open: a,
      close: c
    });
    const d = { props: e, visible: s, emit: n, get ges() {
      return l;
    }, set ges(v) {
      l = v;
    }, open: a, close: c, get Present() {
      return H;
    }, get IconSpinner() {
      return ue;
    }, ref: u };
    return Object.defineProperty(d, "__isScriptSetup", { enumerable: !1, value: !0 }), d;
  }
}), mr = {
  class: /* @__PURE__ */ p({ "toife-loading": !0 })
};
function _r(r, o, t, e, s, n) {
  return i(), A(e.Present, {
    placement: "center",
    backdrop: !0,
    keepalive: !1,
    visible: e.visible
  }, {
    default: X(() => [
      S("div", mr, [
        $(r.$slots, "default", {}, () => [
          t.type === "spinner" ? (i(), A(e.IconSpinner, { key: 0 })) : z("", !0)
        ], !0)
      ])
    ]),
    _: 3
  }, 8, ["visible"]);
}
const Se = /* @__PURE__ */ x(fr, [["render", _r], ["__scopeId", "data-v-188d5e1b"]]), so = (r = {}, o) => {
  const t = u(), e = document.body.querySelector(".toife-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        e && (n = document.createElement("div"), e.appendChild(n), s = te({
          render() {
            return re(o || Se, {
              ...r,
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
}, vr = /* @__PURE__ */ k({
  __name: "refresher",
  props: {
    threshold: { default: 120 },
    safe: { type: Boolean, default: !1 },
    variant: { default: "max" }
  },
  emits: ["refresh", "move", "cancel", "start"],
  setup(r, { expose: o, emit: t }) {
    o();
    const e = t, s = r, n = u(0), l = u(!1), a = u();
    let c, d = !1;
    const v = () => {
      l.value = !1, n.value = 0, d = !1;
    }, g = () => {
      d = !0, l.value = !0, n.value = s.threshold, e("refresh", v);
    }, y = () => {
      n.value = 0, l.value = !1, d = !1, e("cancel");
    };
    C(() => a.value, () => {
      c && c.destroy();
      let h = a.value.closest(".toife-content");
      h && (c = L(h, {
        options: {
          minMove: 20
        },
        beforeEvent() {
          return !(h.scrollTop > 0);
        },
        down() {
          l.value || d || e("start");
        },
        move({ deltaY: f, initialDirection: I }) {
          if (l.value || d || I != "down") return;
          if (s.variant == "max" && f >= s.threshold) {
            g();
            return;
          }
          const P = f < 0 ? 0 : f;
          n.value = P, e("move", P);
        },
        up({ deltaY: f, initialDirection: I }) {
          l.value || d || I != "down" || (s.variant == "up" && f >= s.threshold ? g() : y());
        },
        cancel() {
          l.value || d || y();
        }
      }, {
        passive: !1
      }));
    }), M(() => {
      c && c.destroy();
    });
    const m = { emit: e, props: s, offset: n, refreshing: l, container: a, get cleanup() {
      return c;
    }, set cleanup(h) {
      c = h;
    }, get locked() {
      return d;
    }, set locked(h) {
      d = h;
    }, close: v, start: g, cancel: y, ref: u, onUnmounted: M, watch: C, get gesture() {
      return L;
    } };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: !1, value: !0 }), m;
  }
});
function yr(r, o, t, e, s, n) {
  return K((i(), _("div", {
    class: p({ "toife-refresher": !0, safe: t.safe }),
    ref: "container"
  }, [
    $(r.$slots, "default", {
      offset: e.offset,
      refreshing: e.refreshing
    }, void 0, !0)
  ], 2)), [
    [G, e.offset > 0]
  ]);
}
const br = /* @__PURE__ */ x(vr, [["render", yr], ["__scopeId", "data-v-69af4f52"]]), gr = /* @__PURE__ */ k({
  __name: "richtext",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
});
function hr(r, o, t, e, s, n) {
  return i(), _("div");
}
const kr = /* @__PURE__ */ x(gr, [["render", hr], ["__scopeId", "data-v-90f4e19d"]]), xr = /* @__PURE__ */ k({
  __name: "ripple",
  props: {
    color: { default: "primary" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n = {};
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--color": "var(--t-color-status-" + t.color + ")"
      } : n = {
        "--color": t.color
      } : n = {
        "--color": "var(--t-color-surface)"
      }, n;
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function $r(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-ripple": !0 }),
    style: w(e.styles)
  }, null, 4);
}
const Sr = /* @__PURE__ */ x(xr, [["render", $r], ["__scopeId", "data-v-48ab3caf"]]), wr = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u(), l = u(), a = u(!1);
    let c = null;
    const d = b(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), v = (m) => {
      s("dismiss", m);
    }, g = () => {
      a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300);
    };
    C(() => n.value, (m) => {
      m && (c = L(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(h) {
          return !(a.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: h }) {
          g(), h == d.value ? s("dismiss", "gesture") : l.value.open();
        },
        move({ deltaY: h, deltaX: f, initialDirection: I }) {
          if (I != d.value) return;
          let P = 0;
          e.placement == "bottom" || e.placement == "top" ? P = h : P = f, e.placement == "bottom" && (P = h > 0 ? h : 0), e.placement == "top" && (P = h < 0 ? h : 0), e.placement == "left" && (P = f < 0 ? f : 0), e.placement == "right" && (P = f > 0 ? f : 0), (e.placement == "bottom" && (P >= 10 || this.isMoving) || e.placement == "top" && (P <= -10 || this.isMoving) || e.placement == "left" && (P <= -10 || this.isMoving) || e.placement == "right" && (P >= 10 || this.isMoving)) && (this.isMoving = !0, l.value.render({
            contentTransform: P + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: h, deltaX: f, initialDirection: I }) {
          if (this.isMoving = !1, g(), I != d.value) {
            l.value.open();
            return;
          }
          let P, T, W;
          e.placement == "bottom" || e.placement == "top" ? (P = n.value.offsetHeight, W = h) : (P = n.value.offsetWidth, W = f), T = W / P * 100, T > 50 ? s("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          this.isMoving = !1, g(), l.value.open();
        }
      }));
    }), M(() => {
      c && c.destroy();
    });
    const y = { props: e, emit: s, sheet: n, present: l, isBusy: a, get ges() {
      return c;
    }, set ges(m) {
      c = m;
    }, gestureDir: d, close: v, busy: g, computed: b, onUnmounted: M, ref: u, watch: C, get gesture() {
      return L;
    }, get Present() {
      return H;
    }, get GestureIndicator() {
      return xe;
    } };
    return Object.defineProperty(y, "__isScriptSetup", { enumerable: !1, value: !0 }), y;
  }
});
function Pr(r, o, t, e, s, n) {
  return i(), A(e.present, {
    ref: "present",
    duration: e.props.duration,
    bounce: e.props.bounce,
    class: p(e.props.class),
    placement: e.props.placement,
    backdrop: t.backdrop,
    visible: e.props.visible,
    keepalive: e.props.keepalive,
    onDismiss: e.close,
    style: w(e.props.style)
  }, {
    default: X(() => [
      e.props.gesture && e.props.indicator && e.props.placement != "center" ? (i(), A(e.GestureIndicator, {
        key: 0,
        placement: e.props.placement
      }, null, 8, ["placement"])) : z("", !0),
      S("div", {
        ref: "sheet",
        class: p({ "toife-sheet": !0, fullscreen: e.props.fullscreen, [e.props.placement]: !0, rounded: t.rounded }),
        style: w({ "--background": e.props.background })
      }, [
        $(r.$slots, "default", {}, void 0, !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["duration", "bounce", "class", "placement", "backdrop", "visible", "keepalive", "style"]);
}
const Tr = /* @__PURE__ */ x(wr, [["render", Pr], ["__scopeId", "data-v-3c6159e0"]]), Ir = /* @__PURE__ */ k({
  __name: "skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => ({
      "--width": t.width,
      "--height": t.height,
      "--radius": t.radius
    })), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Or(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-skeleton": !0 }),
    style: w(e.styles)
  }, null, 4);
}
const Br = /* @__PURE__ */ x(Ir, [["render", Or], ["__scopeId", "data-v-08e291f4"]]), zr = /* @__PURE__ */ k({
  __name: "switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = () => {
      s("update:modelValue", !e.modelValue);
    }, l = b(() => {
      let c = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (c = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), c;
    }), a = { props: e, emit: s, onSwitch: n, styles: l, computed: b };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
});
function Cr(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-switch": !0, on: e.props.modelValue }),
    style: w(e.styles),
    onPointerup: e.onSwitch
  }, [...o[0] || (o[0] = [
    S("div", {
      class: p({ "toife-switch-icon": !0 })
    }, null, -1)
  ])], 38);
}
const Er = /* @__PURE__ */ x(zr, [["render", Cr], ["__scopeId", "data-v-4d1f50af"]]), jr = /* @__PURE__ */ k({
  __name: "tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = Q("tabsState"), s = b(() => e.activeValue.value === t.value), l = { props: t, tabs: e, isActive: s, handleClick: () => {
      t.disabled || e.setValue(t.value);
    }, inject: Q, computed: b, get TButton() {
      return oe;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
});
function Rr(r, o, t, e, s, n) {
  return i(), _("li", {
    class: p({ "toife-tab": !0, active: e.isActive })
  }, [
    ye(e.TButton, {
      variant: "text",
      onPointerup: e.handleClick,
      size: e.tabs.size,
      color: e.isActive ? e.tabs.color.text : void 0
    }, {
      default: X(() => [
        $(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "color"])
  ], 2);
}
const Vr = /* @__PURE__ */ x(jr, [["render", Rr], ["__scopeId", "data-v-1747b1ef"]]), Ar = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u("0px"), l = u(0), a = u(0), c = u(), d = b(() => {
      let m = "", h = "";
      return e.variant == "text" && (m = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? h = `var(--t-color-status-${e.color})` : h = e.color), e.variant == "border-under" && (h = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? m = `var(--t-color-status-${e.color})` : m = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (m = `var(--t-color-status-${e.color})`, h = `var(--t-color-status-${e.color}-text)`) : (m = e.color, h = "currentColor")), { background: m, text: h };
    }), v = b(() => e.variant == "border-under" ? {
      "--transform": n.value,
      "--border": e.border + "px"
    } : e.variant == "tag" ? {
      "--top": e.margin[0] + "px",
      "--height": a.value - e.margin[0] * 2 + "px",
      "--left": e.margin[1] + "px",
      "--width": l.value - e.margin[1] * 2 + "px",
      "--transform": n.value,
      "--radius": e.radius + "px"
    } : {}), g = () => {
      if (e.variant == "border-under") {
        let m = c.value.querySelector(".active");
        if (m) {
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let h = m.getBoundingClientRect().left - c.value.getBoundingClientRect().left + c.value.scrollLeft, f = m.offsetWidth / 2;
            n.value = h + f - e.border / 2 + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let h = m.getBoundingClientRect().top - c.value.getBoundingClientRect().top + c.value.scrollTop, f = m.offsetHeight / 2;
            n.value = h + f - e.border / 2 + "px";
          }
        }
      }
      if (e.variant == "tag") {
        let m = c.value.querySelector(".active");
        if (m) {
          let h = m.offsetWidth, f = m.offsetHeight;
          if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
            let I = m.getBoundingClientRect().left - c.value.getBoundingClientRect().left + c.value.scrollLeft;
            n.value = I + "px";
          } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
            let I = m.getBoundingClientRect().top - c.value.getBoundingClientRect().top + c.value.scrollTop;
            n.value = I + "px";
          }
          l.value = h, a.value = f;
        }
      }
    };
    J("tabsState", {
      activeValue: b(() => e.modelValue),
      color: d.value,
      size: e.size,
      variant: e.variant,
      setValue: (m) => {
        s("update:modelValue", m);
      }
    }), C(() => e.modelValue, async () => {
      await le(), g();
    }), V(async () => {
      await le(), g();
    });
    const y = { props: e, emit: s, transform: n, width: l, height: a, container: c, __color: d, styles: v, calcTransform: g, nextTick: le, onMounted: V, provide: J, ref: u, watch: C, computed: b };
    return Object.defineProperty(y, "__isScriptSetup", { enumerable: !1, value: !0 }), y;
  }
});
function Dr(r, o, t, e, s, n) {
  return i(), _("ul", {
    ref: "container",
    class: p({ "toife-tabs": !0, [t.placement]: !0, [`variant-${t.variant}`]: !0 }),
    style: w([{ "--background": e.__color.background, "--color": e.__color.text }, e.styles])
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 6);
}
const Nr = /* @__PURE__ */ x(Ar, [["render", Dr], ["__scopeId", "data-v-665bdcad"]]), Xr = /* @__PURE__ */ k({
  __name: "textarea",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}), Wr = {
  class: /* @__PURE__ */ p({ "toife-textarea": !0 })
};
function qr(r, o, t, e, s, n) {
  return i(), _("div", Wr, [...o[0] || (o[0] = [
    S("textarea", null, null, -1)
  ])]);
}
const Mr = /* @__PURE__ */ x(Xr, [["render", qr], ["__scopeId", "data-v-9e74bf55"]]), Lr = /* @__PURE__ */ k({
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
  setup(r, { expose: o, emit: t }) {
    const e = r, s = t, n = u(!1), l = u(!1), a = u(!1), c = () => {
      l.value = !0, a.value = !1, setTimeout(() => {
        n.value = !0;
      }, 10);
    }, d = () => {
      a.value = !0, setTimeout(() => {
        l.value = !1, n.value = !1, s("dismiss");
      }, 300);
    };
    C(() => e.visible, (y) => {
      y ? c() : d();
    });
    const v = b(() => {
      let y;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? y = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + e.color + "-rgb), 1)"
      } : y = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": e.color
      } : y = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 1)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? y = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : y = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : y = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? y = {
        "--border": "0.55px solid var(--t-color-status-" + e.color + ")",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : y = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : y = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), y;
    });
    o({
      open: c,
      close: d
    });
    const g = { props: e, emit: s, _visible: n, isRender: l, isClosing: a, open: c, close: d, styles: v, computed: b, ref: u, watch: C };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}), Fr = {
  class: /* @__PURE__ */ p({ "toife-toast-content": !0 })
};
function Hr(r, o, t, e, s, n) {
  return e.isRender ? (i(), _("div", {
    key: 0,
    class: p({ "toife-toast": !0, [e.props.placement]: !0, open: e._visible, closing: e.isClosing }),
    style: w({ "--space": e.props.space, ...e.styles })
  }, [
    $(r.$slots, "content", {}, () => [
      S("div", Fr, R(e.props.message), 1)
    ], !0)
  ], 6)) : z("", !0);
}
const we = /* @__PURE__ */ x(Lr, [["render", Hr], ["__scopeId", "data-v-6809c497"]]), ao = (r = {}, o) => ({
  open() {
    let t = document.body.querySelector(".toife-app");
    if (!t) return;
    const e = document.createElement("div"), s = u();
    t.appendChild(e);
    const n = te({
      render() {
        return re(o || we, {
          ...r,
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
      }, (r.duration || 2e3) + 10);
    }, 50);
  }
}), Kr = /* @__PURE__ */ k({
  __name: "toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u(!1), l = u(), a = b(() => {
      let g = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (g = `var(--t-color-status-${e.color})`), {
        "--color": g
      };
    }), c = () => l.value?.parentElement?.querySelector?.("input");
    V(() => {
      let g = c();
      g && (n.value = g.type != "password", s("change", n.value));
    });
    const v = { props: e, emit: s, isShow: n, toggle: l, style: a, el: c, onClick: () => {
      let g = c();
      g && (n.value = !n.value, n.value ? g.type = "text" : g.type = "password", s("change", n.value));
    }, computed: b, onMounted: V, ref: u };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: !1, value: !0 }), v;
  }
});
function Gr(r, o, t, e, s, n) {
  return i(), _("button", {
    ref: "toggle",
    class: p({ "toife-toggle-password": !0 }),
    style: w(e.style),
    onPointerup: e.onClick
  }, [
    e.isShow ? $(r.$slots, "on", { key: 0 }, () => [
      o[0] || (o[0] = S("i", { class: "ri-eye-line" }, null, -1))
    ], !0) : z("", !0),
    e.isShow ? z("", !0) : $(r.$slots, "off", { key: 1 }, () => [
      o[1] || (o[1] = S("i", { class: "ri-eye-off-line" }, null, -1))
    ], !0)
  ], 36);
}
const Ur = /* @__PURE__ */ x(Kr, [["render", Gr], ["__scopeId", "data-v-db98bdc9"]]), Jr = /* @__PURE__ */ k({
  __name: "toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = Q("cableState"), s = b(() => t?.placement || e?.placement), n = { props: t, cable: e, placement: s, computed: b, inject: Q };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: !1, value: !0 }), n;
  }
});
function Qr(r, o, t, e, s, n) {
  return i(), _("div", {
    class: p({ "toife-toolbar": !0, [e.placement]: !0, safe: e.props.safe }),
    style: w({ "--t-size-toolbar": e.props.size })
  }, [
    S("div", null, [
      $(r.$slots, "default", {}, void 0, !0)
    ])
  ], 6);
}
const Zr = /* @__PURE__ */ x(Jr, [["render", Qr], ["__scopeId", "data-v-24f79d25"]]), lo = (r) => {
  const o = r?.prefix || "t-";
  return {
    install: (t) => {
      t.component(o + "app", Ce), t.component(o + "action", be), t.component(o + "screen", he), t.component(o + "screen-router", dt), t.component(o + "cable", kt), t.component(o + "toolbar", Zr), t.component(o + "content", Wt), t.component(o + "card", St), t.component(o + "refresher", br), t.component(o + "button", oe), t.component(o + "back-button", mt), t.component(o + "present", H), t.component(o + "text", $e), t.component(o + "sheet", Tr), t.component(o + "gesture-indicator", xe), t.component(o + "input", pr), t.component(o + "textarea", Mr), t.component(o + "richtext", kr), t.component(o + "grid", Zt), t.component(o + "divider", Lt), t.component(o + "toggle-password", Ur), t.component(o + "icon-spinner", ue), t.component(o + "alert", ge), t.component(o + "avatar", Je), t.component(o + "collapse", At), t.component(o + "toast", we), t.component(o + "switch", Er), t.component(o + "tab", Vr), t.component(o + "tabs", Nr), t.component(o + "checkbox", Ot), t.component(o + "keyboard-space", bt), t.component(o + "skeleton", Br), t.component(o + "ripple", Sr), t.component(o + "loading", Se), t.component(o + "flex", Kt), t.component(o + "image", rr);
    }
  };
}, Pe = (r) => r && (r.tagName == "INPUT" || r.tagName == "TEXTAREA" || r.isContentEditable), Te = () => {
  const r = document.activeElement;
  r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable) && r.blur();
}, Yr = () => {
  document.addEventListener("contextmenu", (r) => r.preventDefault()), document.addEventListener("pointerup", (r) => {
    !Pe(r.target) && Te();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blurCurrentActive: Te,
  isFormElement: Pe,
  preventDefault: Yr
}, Symbol.toStringTag, { value: "Module" }));
export {
  be as Action,
  ge as Alert,
  Ce as App,
  Je as Avatar,
  mt as BackButton,
  oe as Button,
  kt as Cable,
  St as Card,
  Ot as Checkbox,
  At as Collapse,
  Wt as Content,
  Lt as Divider,
  Kt as Flex,
  xe as GestureIndicator,
  Zt as Grid,
  ue as IconSpinner,
  rr as Image,
  pr as Input,
  bt as KeyboardSpace,
  Se as Loading,
  H as Present,
  br as Refresher,
  kr as Richtext,
  Sr as Ripple,
  he as Screen,
  dt as ScreenRouter,
  Tr as Sheet,
  Br as Skeleton,
  Er as Switch,
  Vr as Tab,
  Nr as Tabs,
  $e as Text,
  Mr as Textarea,
  we as Toast,
  Ur as TogglePassword,
  Zr as Toolbar,
  oo as createAction,
  no as createAlert,
  so as createLoading,
  ao as createToast,
  lo as createToife,
  ve as getNewPresentIndex,
  ee as useKeyboard,
  Y as useScreenRouter,
  co as utils
};
