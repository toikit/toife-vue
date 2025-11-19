import { defineComponent as k, createElementBlock as y, openBlock as i, normalizeClass as p, renderSlot as $, ref as u, computed as b, reactive as ie, watch as z, onMounted as A, Fragment as q, withDirectives as G, createCommentVNode as C, normalizeStyle as w, vShow as U, createElementVNode as S, createVNode as ye, createBlock as j, withCtx as D, renderList as J, createTextVNode as F, toDisplayString as V, createApp as re, h as oe, onUnmounted as M, markRaw as pe, resolveDynamicComponent as Ie, useAttrs as fe, provide as Q, inject as Z, nextTick as ce } from "vue";
import { useRouter as Y, useRoute as me } from "vue-router";
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
function Ce(r, o, t, e, s, n) {
  return i(), y("div", Be, [
    $(r.$slots, "default")
  ]);
}
const x = (r, o) => {
  const t = r.__vccOpts || r;
  for (const [e, s] of o)
    t[e] = s;
  return t;
}, ze = /* @__PURE__ */ x(Oe, [["render", Ce]]), _e = u(1e3), ve = () => (_e.value += 2, _e.value), Ee = /* @__PURE__ */ k({
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
    const e = u(0), s = u(!1), n = u(), l = u(), a = r, c = t, d = b(() => s.value || a.keepalive), _ = u(!1), g = ie({
      "--toife-present-backdrop-opacity": "0.4",
      "--toife-present-transition": "0.2s",
      "--toife-present-content-transform": "0px",
      "--toife-present-content-opacity": "1"
    }), v = b(() => a.duration / 1e3 + "s"), m = (T) => {
      a.backdrop ? T?.backdropOpacity && (g["--toife-present-backdrop-opacity"] = T.backdropOpacity) : g["--toife-present-backdrop-opacity"] = "0", T.transition && (g["--toife-present-transition"] = T.transition), T.contentTransform && (g["--toife-present-content-transform"] = T.contentTransform), T.contentOpacity && (g["--toife-present-content-opacity"] = T.contentOpacity);
    }, h = () => {
      if (a.bounce !== void 0 && !_.value) {
        _.value = !0;
        let T = a.bounce;
        (a.placement == "bottom" || a.placement == "right") && (T = `calc(${a.bounce} * -1)`), m({
          contentTransform: T,
          transition: v.value,
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
          transition: v.value,
          backdropOpacity: "0.4",
          contentOpacity: "1"
        });
    }, f = () => {
      let T = "0px", W = "1";
      a.placement == "bottom" || a.placement == "right" ? T = "100%" : a.placement == "top" || a.placement == "left" ? T = "-100%" : a.placement == "center" && (T = "0px", W = "0"), m({
        contentTransform: T,
        transition: v.value,
        contentOpacity: W,
        backdropOpacity: "0"
      });
    };
    z(() => a.visible, () => {
      a.visible ? (_.value = !1, s.value = !0, e.value = ve(), setTimeout(() => {
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
    A(() => {
      a.visible ? h() : f();
    });
    const P = { zIndex: e, isShow: s, backdrop: n, present: l, props: a, emit: c, isRender: d, isBounced: _, styles: g, time: v, render: m, open: h, close: f, onClickBackdrop: I, computed: b, onMounted: A, reactive: ie, ref: u, watch: z, get getNewPresentIndex() {
      return ve;
    } };
    return Object.defineProperty(P, "__isScriptSetup", { enumerable: !1, value: !0 }), P;
  }
});
function je(r, o, t, e, s, n) {
  return i(), y(q, null, [
    e.isRender ? G((i(), y("div", {
      key: 0,
      class: p({ "toife-present-backdrop": !0 }),
      onPointerup: e.onClickBackdrop,
      ref: "backdrop",
      style: w([e.styles, { zIndex: e.zIndex - 1 }, e.props.style])
    }, null, 36)), [
      [U, e.isShow]
    ]) : C("", !0),
    e.isRender ? G((i(), y("div", {
      key: 1,
      ref: "present",
      class: p([{ "toife-present": !0, [t.placement]: !0 }, e.props.class]),
      style: w([e.styles, { zIndex: e.zIndex }, e.props.style])
    }, [
      $(r.$slots, "default", {}, void 0, !0)
    ], 6)), [
      [U, e.isShow]
    ]) : C("", !0)
  ], 64);
}
const K = /* @__PURE__ */ x(Ee, [["render", je], ["__scopeId", "data-v-dbddbda8"]]), Re = /* @__PURE__ */ k({
  __name: "icon-spinner",
  props: {
    size: { default: "24px" },
    color: { default: "var(--toife-color-text)" }
  },
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
});
function Ve(r, o, t, e, s, n) {
  return i(), y("span", {
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
const ue = /* @__PURE__ */ x(Re, [["render", Ve], ["__scopeId", "data-v-bddf6a6e"]]), Ae = /* @__PURE__ */ k({
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
        "--color": "var(--toife-color-status-" + t.color + "-text)",
        "--background": "var(--toife-color-status-" + t.color + ")"
      } : n = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": t.color
      } : n = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": "var(--toife-color-surface)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--border": "none",
        "--color": "var(--toife-color-status-" + t.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : n = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--border": "0.55px solid var(--toife-color-status-" + t.color + ")",
        "--color": "var(--toife-color-status-" + t.color + ")",
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : n = {
        "--border": "0.55px solid var(--toife-color-text)",
        "--color": "var(--toife-color-text)",
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
  return i(), y("button", {
    style: w(e.styles),
    class: p({ "toife-button": !0, "active-background": e.props.activeBackground, rounded: e.props.rounded, block: e.props.block, ["size-" + e.props.size]: !0 })
  }, [
    G(S("span", De, [
      $(r.$slots, "default", {}, void 0, !0)
    ], 512), [
      [U, !e.props.loading]
    ]),
    e.props.loading ? (i(), y("span", Ne, [
      ye(e.IconSpinner, {
        color: "var(--color)",
        type: e.props.loadingType
      }, null, 8, ["type"])
    ])) : C("", !0)
  ], 6);
}
const ne = /* @__PURE__ */ x(Ae, [["render", Xe], ["__scopeId", "data-v-3ab201fc"]]), We = /* @__PURE__ */ k({
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
    }, _ = (m) => {
      d(), m.handler && m.handler(), s("dismiss", "choose", m?.data);
    }, g = (m) => {
      e.dismiss && e.dismiss.includes(m) ? (d(), s("dismiss", m)) : m === "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    z(() => e.visible, (m) => {
      m ? c() : d();
    }, { immediate: !0 }), o({
      open: c,
      close: d
    });
    const v = { props: e, emit: s, _visible: n, container: l, pop: a, open: c, close: d, choose: _, onDismiss: g, ref: u, watch: z, get Present() {
      return K;
    }, get CustomButton() {
      return ne;
    } };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: !1, value: !0 }), v;
  }
});
function qe(r, o, t, e, s, n) {
  return i(), j(e.Present, {
    placement: "bottom",
    backdrop: !0,
    keepalive: !1,
    visible: e._visible,
    onDismiss: e.onDismiss
  }, {
    default: D(() => [
      S("div", {
        class: p({ pop: e.pop, "toife-action": !0 }),
        ref: "container"
      }, [
        (i(!0), y(q, null, J(e.props.actions, (l, a) => (i(), y("div", { key: a }, [
          (i(!0), y(q, null, J(l, (c, d) => (i(), j(e.CustomButton, {
            key: c.key ?? `${a}-${d}`,
            color: c.color,
            size: c.size,
            variant: c.variant,
            onPointerup: (_) => e.choose(c),
            block: ""
          }, {
            default: D(() => [
              F(V(c.text), 1)
            ]),
            _: 2
          }, 1032, ["color", "size", "variant", "onPointerup"]))), 128))
        ]))), 128))
      ], 2)
    ]),
    _: 1
  }, 8, ["visible"]);
}
const be = /* @__PURE__ */ x(We, [["render", qe], ["__scopeId", "data-v-9d4bf238"]]), to = (r = {}, o) => ({
  open() {
    return new Promise((t) => {
      let e = document.body.querySelector(".toife-app");
      if (!e) return;
      const s = document.createElement("div"), n = u();
      e.appendChild(s);
      const l = re({
        render() {
          return oe(o || be, {
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
    }, d = (v) => {
      n.value = !1, v.handler && v.handler(), s("dismiss", "choose", v?.data);
    }, _ = (v) => {
      e.dismiss && e.dismiss.includes(v) ? (n.value = !1, s("dismiss", v)) : v == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    o({
      open: c
    });
    const g = { props: e, emit: s, visible: n, container: l, pop: a, open: c, choose: d, onDismiss: _, ref: u, get Present() {
      return K;
    }, get CustomButton() {
      return ne;
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
  return i(), j(e.Present, {
    placement: "center",
    backdrop: !0,
    keepalive: !1,
    visible: e.visible,
    onDismiss: e.onDismiss
  }, {
    default: D(() => [
      S("div", {
        class: p({ pop: e.pop, "toife-alert": !0 }),
        ref: "container"
      }, [
        $(r.$slots, "header", {}, () => [
          e.props.title ? (i(), y("div", Le, V(e.props.title), 1)) : C("", !0)
        ], !0),
        $(r.$slots, "content", {}, () => [
          S("div", Fe, V(e.props.message), 1)
        ], !0),
        $(r.$slots, "footer", {}, () => [
          S("div", He, [
            (i(!0), y(q, null, J(e.props.actions, (l) => (i(), j(e.CustomButton, {
              color: l.color,
              variant: l.variant,
              onPointerup: (a) => e.choose(l)
            }, {
              default: D(() => [
                F(V(l.text), 1)
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
const ge = /* @__PURE__ */ x(Me, [["render", Ke], ["__scopeId", "data-v-64e5ebe5"]]), ro = (r = {}, o) => ({
  open() {
    return new Promise((t) => {
      let e = document.body.querySelector(".toife-app");
      if (!e) return;
      const s = document.createElement("div"), n = u();
      e.appendChild(s);
      const l = re({
        render() {
          return oe(o || ge, {
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
  return i(), y("div", {
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
  return i(), y("div", Ze, [
    $(r.$slots, "default", {}, void 0, !0)
  ]);
}
const he = /* @__PURE__ */ x(Qe, [["render", Ye], ["__scopeId", "data-v-59be2187"]]), N = ie([]), se = u(!0), B = u(!1), R = u(-1), O = b(() => N[R.value]), H = b(() => N[R.value + 1] || void 0), E = b(() => N[N.length - 2]), ke = b(() => !B.value && se.value && E.value), X = (r = !0) => {
  let t = O.value.target.closest(".toife-app").offsetWidth;
  return r ? t + "px" : t;
}, ae = {
  reset() {
    B.value = !0;
    const r = X(), o = O.value.target, t = E.value.target;
    o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", t.style.transition = "transform 0.25s ease", t.style.transform = `translateX(calc(${r} / 100 * 30 * -1)) scale(0.5) perspective(${r}) rotateY(30deg)`, document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      B.value = !1;
    }, 400);
  },
  move(r) {
    if (!ke.value) return;
    const o = X(!1), t = o + "px", e = r / o * 100, s = O.value.target, n = E.value.target;
    r > 15 && r <= o && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((${t} / 100 * 30 * -1) + ((${t} / 100 * 30) / 100 * ${e}))) scale(${0.5 + 0.5 / 100 * e}) perspective(${t}) rotateY(${30 - 30 / 100 * e}deg)`, document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * e}`));
  },
  back(r) {
    if (!E.value) return;
    const o = X();
    O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.25s ease", E.value.target.style.transform = `translateX(0px) scale(1) perspective(${o}) rotateY(0deg)`, document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0"), B.value = !0, setTimeout(() => {
      de(), B.value = !1, R.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!H.value) return;
    if (R.value == -1) {
      R.value += 1, r && r();
      return;
    }
    B.value = !0;
    const o = H.value.target, t = X();
    o.style.transform = `translateX(${t})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0.5"), O.value && (O.value.target.style.transitionOrigin = "left center", O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(calc(${t} / 100 * 30 * -1)) scale(0.5) perspective(${t}) rotateY(30deg)`), setTimeout(() => {
        B.value = !1, R.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, le = {
  reset() {
    B.value = !0;
    const r = X(), o = O.value.target, t = E.value.target;
    o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", t.style.transition = "transform 0.25s ease", t.style.transform = `translateX(calc(${r} / 100 * 30 * -1))`, document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
      B.value = !1;
    }, 400);
  },
  move(r) {
    const o = X(!1), t = o + "px", e = r / o * 100, s = O.value.target, n = E.value.target;
    r > 15 && r <= o && (s.style.transition = "transform 0s ease", s.style.transform = `translateX(${r}px)`, n.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0s"), n.style.transform = `translateX(calc((${t} / 100 * 30 * -1) + ((${t} / 100 * 30) / 100 * ${e})))`, document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * e}`));
  },
  back(r) {
    if (!E.value) return;
    const o = X();
    O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(${o}) scale(1)`, E.value.target.style.transition = "transform 0.25s ease", E.value.target.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0"), B.value = !0, setTimeout(() => {
      de(), B.value = !1, R.value -= 1, r && r();
    }, 400);
  },
  next(r) {
    if (!H.value) return;
    if (R.value == -1) {
      R.value += 1, r && r();
      return;
    }
    B.value = !0;
    const o = H.value.target, t = X();
    o.style.transform = `translateX(${t})`, o.transitionOrigin = "center", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0"), setTimeout(() => {
      o.style.transition = "transform 0.25s ease", o.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--toife-screen-backdrop-duration", "0.25s"), document.documentElement.style.setProperty("--toife-swipe-backdrop-opacity", "0.5"), O.value && (O.value.target.style.transitionOrigin = "left center", O.value.target.style.transition = "transform 0.25s ease", O.value.target.style.transform = `translateX(calc(${t} / 100 * 30 * -1))`), setTimeout(() => {
        B.value = !1, R.value += 1, r && r();
      }, 400);
    }, 100);
  }
}, et = (r) => {
  N.push(r);
}, tt = (r, o) => {
  N[r].target = o;
}, de = (r) => {
  r || N.pop();
}, rt = () => {
  N.splice(0, N.length);
}, ot = () => {
  se.value = !1;
}, nt = () => {
  se.value = !0;
}, st = (r, o) => {
  r == "scale" && ae.next(o), r == "transform" && le.next(o);
}, at = (r, o) => {
  r == "scale" && ae.back(o), r == "transform" && le.back(o);
}, lt = (r, o) => {
  r == "scale" && ae.move(o), r == "transform" && le.move(o);
}, ct = (r) => {
  r == "scale" && ae.reset(), r == "transform" && le.reset();
}, ee = () => ({
  isBusy: B,
  isSwipeable: ke,
  reset: ct,
  next: st,
  back: at,
  move: lt,
  screens: N,
  addScreen: et,
  addScreenEl: tt,
  removeScreen: de,
  removeAllScreen: rt,
  lockSwipe: ot,
  unlockSwipe: nt,
  swipeable: se,
  currentScreen: O,
  lastScreen: E,
  nextScreen: H
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
    const a = n.router || Y(), c = n.route || me(), d = a.getRoutes(), _ = ee(), g = u();
    for (let f of d)
      e[f.name] = f.component || f.components;
    const v = (f) => {
      f && _.addScreen({
        name: f,
        target: null,
        component: pe(e[f] || null)
      });
    }, m = (f, I) => {
      !I || _.screens[f].target || (_.addScreenEl(f, I.$el), _.nextScreen && _.next(n.variant, () => {
        s("change");
      }));
    };
    z(() => c.name, (f, I) => {
      f != _.currentScreen.value?.name && (_.lastScreen.value?.name == f ? _.back(n.variant, () => {
        s("change");
      }) : v(c.name));
    }), A(() => {
      v(c.name), l = L(document.body, {
        beforeEvent(f) {
          return !!_.isSwipeable.value;
        },
        fast({ initialDirection: f }) {
          _.lastScreen.value && f == "right" && a.back();
        },
        move({ deltaX: f, initialDirection: I }) {
          I == "right" && _.move(n.variant, f);
        },
        up({ deltaX: f, initialDirection: I }) {
          if (I != "right") {
            _.reset(n.variant);
            return;
          }
          const P = g.value.offsetParent.offsetWidth;
          f / P * 100 >= 50 ? a.back() : _.reset(n.variant);
        },
        cancel() {
          _.reset(n.variant);
        }
      });
    }), M(() => {
      l && l.destroy(), _.removeAllScreen();
    });
    const h = { get routeComponents() {
      return e;
    }, set routeComponents(f) {
      e = f;
    }, emit: s, props: n, get ges() {
      return l;
    }, set ges(f) {
      l = f;
    }, _router: a, _route: c, routes: d, screenRouter: _, backdrop: g, addScreen: v, addScreenRef: m, markRaw: pe, onMounted: A, onUnmounted: M, ref: u, watch: z, get useRoute() {
      return me;
    }, get useRouter() {
      return Y;
    }, get gesture() {
      return L;
    }, get Screen() {
      return he;
    }, get useScreenRouter() {
      return ee;
    } };
    return Object.defineProperty(h, "__isScriptSetup", { enumerable: !1, value: !0 }), h;
  }
});
function ut(r, o, t, e, s, n) {
  return i(), y(q, null, [
    (i(!0), y(q, null, J(e.screenRouter.screens, (l, a) => (i(), j(e.Screen, {
      ref_for: !0,
      ref: (c) => e.addScreenRef(a, c),
      style: w({ zIndex: a + (a == e.screenRouter.screens.length - 1 ? 2 : 1) }),
      key: a
    }, {
      default: D(() => [
        (i(), j(Ie(l.component.default)))
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
    const t = r, e = fe(), s = t.router || Y(), n = ee(), a = { props: t, attrs: e, router: s, screenRouter: n, onClick: (c) => {
      if (e.onBack) {
        e.onBack(c);
        return;
      }
      n.lastScreen.value ? s?.back?.() : t.to && s?.push?.(t.to);
    }, useAttrs: fe, get useRouter() {
      return Y;
    }, get useScreenRouter() {
      return ee;
    } };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
});
function ft(r, o, t, e, s, n) {
  return t.to || e.screenRouter.lastScreen ? (i(), y("button", {
    key: 0,
    class: p({ "toife-back-button": !0 }),
    onPointerup: e.onClick
  }, [
    $(r.$slots, "default", {}, () => [
      o[0] || (o[0] = S("i", { class: "ri-arrow-left-s-line" }, null, -1))
    ], !0)
  ], 32)) : C("", !0);
}
const mt = /* @__PURE__ */ x(pt, [["render", ft], ["__scopeId", "data-v-acb94acb"]]), _t = u(0);
function te() {
  return {
    height: _t
  };
}
const vt = /* @__PURE__ */ k({
  __name: "keyboard-space",
  setup(r, { expose: o }) {
    o();
    const { height: t } = te(), e = { height: t, get useKeyboard() {
      return te;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
});
function yt(r, o, t, e, s, n) {
  return i(), y("div", {
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
    const t = r, { height: e } = te();
    Q("cableState", {
      placement: t.placement
    });
    const s = { props: t, height: e, provide: Q, get useKeyboard() {
      return te;
    } };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function ht(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-cable": !0, keyboard: e.props.keyboard && e.height > 0, [e.props.placement]: !0 }),
    style: w({ "--toife-keyboard-height": e.height + "px", "--toife-keyboard-transition": e.height > 0 ? "0.3s" : "0.1s" })
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
        "--background": "var(--toife-color-status-" + t.color + ")"
      } : n = {
        "--background": t.color
      } : n = {
        "--background": "var(--toife-color-surface)"
      }, n;
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function $t(r, o, t, e, s, n) {
  return i(), y("div", {
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
        "--background": `var(--toife-color-status-${e.color})`,
        "--color": `var(--toife-color-status-${e.color}-text)`
      }), d;
    }), l = b(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), c = { props: e, emit: s, styles: n, isActive: l, onToggle: (d) => {
      if (d.preventDefault(), d.stopPropagation(), e.multiple) {
        let _ = e.modelValue;
        e.modelValue.includes(e.value) ? _.splice(_.indexOf(e.value), 1) : _.push(e.value), s("update:modelValue", _);
      } else e.value === void 0 ? s("update:modelValue", !e.modelValue) : s("update:modelValue", e.value);
    }, computed: b };
    return Object.defineProperty(c, "__isScriptSetup", { enumerable: !1, value: !0 }), c;
  }
}), Pt = { key: 0 }, Tt = {
  key: 0,
  class: /* @__PURE__ */ p({ "toife-checkbox-label": !0 })
};
function It(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-checkbox": !0, active: e.isActive }),
    style: w(e.styles),
    onPointerup: e.onToggle
  }, [
    S("div", {
      class: p({ [`toife-checkbox-${t.type}`]: !0 })
    }, [
      t.type == "radio" ? (i(), y("div", Pt)) : C("", !0),
      t.type == "check" ? $(r.$slots, "icon", { key: 1 }, () => [
        o[0] || (o[0] = S("i", { class: "ri-check-line" }, null, -1))
      ], !0) : C("", !0)
    ], 2),
    $(r.$slots, "label", {}, () => [
      t.label ? (i(), y("span", Tt, V(e.props.label), 1)) : C("", !0)
    ], !0)
  ], 38);
}
const Ot = /* @__PURE__ */ x(wt, [["render", It], ["__scopeId", "data-v-6f47434a"]]), Bt = /* @__PURE__ */ k({
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
}), Ct = {
  class: /* @__PURE__ */ p({ "toife-collapse-title": !0 })
}, zt = {
  key: 0,
  class: "icon"
}, Et = {
  key: 1,
  class: "icon"
}, jt = {
  class: /* @__PURE__ */ p({ "toife-collapse-content": !0 })
}, Rt = { ref: "content" };
function Vt(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-collapse": !0, open: e.isOpen }),
    style: w({ "--height": e.height })
  }, [
    S("div", {
      class: p({ "toife-collapse-header": !0 }),
      onPointerup: e.onToggle
    }, [
      $(r.$slots, "icon"),
      S("div", Ct, [
        $(r.$slots, "title", {}, () => [
          F(V(e.props.title), 1)
        ])
      ]),
      $(r.$slots, "toggle", {}, () => [
        e.isOpen ? (i(), y("div", zt, [...o[0] || (o[0] = [
          S("i", { class: "ri-arrow-up-s-line" }, null, -1)
        ])])) : (i(), y("div", Et, [...o[1] || (o[1] = [
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
  return i(), y("div", Nt, [
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
  return i(), y("div", {
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
    const t = r, e = b(() => isNaN(t.gap) ? t.gap : `var(--toife-size-${t.gap})`), s = { props: t, _gap: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Ht(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-flex": !0 }),
    style: w({ "--gap": e._gap, "--direction": e.props.direction })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const Kt = /* @__PURE__ */ x(Ft, [["render", Ht], ["__scopeId", "data-v-d6021f57"]]), Gt = /* @__PURE__ */ k({
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
  return i(), y("div", {
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
    const t = r, e = b(() => isNaN(t.gap) ? t.gap : `var(--toife-size-${t.gap})`), s = { props: t, _gap: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function Qt(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-grid": !0 }),
    style: w({ "--gap": e._gap, "--template": e.props.template })
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const Zt = /* @__PURE__ */ x(Jt, [["render", Qt], ["__scopeId", "data-v-797f9e41"]]), Yt = /* @__PURE__ */ k({
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
    A(() => {
      t.value = r.src;
    });
    const s = { _src: t, handleError: e, onMounted: A, ref: u };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}), er = ["src"];
function tr(r, o, t, e, s, n) {
  return i(), y("img", {
    onError: e.handleError,
    src: e._src
  }, null, 40, er);
}
const rr = /* @__PURE__ */ x(Yt, [["render", tr], ["__scopeId", "data-v-0eed0f1f"]]), or = /* @__PURE__ */ k({
  __name: "text",
  props: {
    color: { default: "var(--toife-color-text)" },
    size: { default: "standard" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n, l = t.color;
      return t.size == "standard" ? n = "var(--toife-fs-10)" : t.size == "small" ? n = "var(--toife-fs-08)" : t.size == "large" ? n = "var(--toife-fs-12)" : n = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (l = `var(--toife-color-status-${t.color})`), {
        "--color": l,
        "--font-size": n
      };
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function nr(r, o, t, e, s, n) {
  return i(), y("span", {
    class: p({ "toife-text": !0 }),
    style: w(e.styles)
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 4);
}
const $e = /* @__PURE__ */ x(or, [["render", nr], ["__scopeId", "data-v-116b375f"]]), sr = /* @__PURE__ */ k({
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
    ), g = { props: e, emit: s, isFocus: n, editable: l, hasValue: a, onInput: (v) => {
      s("update:modelValue", v.target.value);
    }, focus: async (v) => {
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
}, cr = ["placeholder", "value", "type", "readonly"];
function ir(r, o, t, e, s, n) {
  return i(), y("div", {
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
      S("span", ar, V(t.label), 1),
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
    t.error ? (i(), j(e.Text, {
      key: 0,
      color: "danger"
    }, {
      default: D(() => [
        F(V(t.error), 1)
      ]),
      _: 1
    })) : t.help ? (i(), j(e.Text, {
      key: 1,
      color: "secondary"
    }, {
      default: D(() => [
        F(V(t.help), 1)
      ]),
      _: 1
    })) : C("", !0)
  ], 2);
}
const ur = /* @__PURE__ */ x(sr, [["render", ir], ["__scopeId", "data-v-f7768bea"]]), dr = /* @__PURE__ */ k({
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
    }, set ges(_) {
      l = _;
    }, open: a, close: c, get Present() {
      return K;
    }, get IconSpinner() {
      return ue;
    }, ref: u };
    return Object.defineProperty(d, "__isScriptSetup", { enumerable: !1, value: !0 }), d;
  }
}), pr = {
  class: /* @__PURE__ */ p({ "toife-loading": !0 })
};
function fr(r, o, t, e, s, n) {
  return i(), j(e.Present, {
    placement: "center",
    backdrop: !0,
    keepalive: !1,
    visible: e.visible
  }, {
    default: D(() => [
      S("div", pr, [
        $(r.$slots, "default", {}, () => [
          t.type === "spinner" ? (i(), j(e.IconSpinner, { key: 0 })) : C("", !0)
        ], !0)
      ])
    ]),
    _: 3
  }, 8, ["visible"]);
}
const Se = /* @__PURE__ */ x(dr, [["render", fr], ["__scopeId", "data-v-188d5e1b"]]), oo = (r = {}, o) => {
  const t = u(), e = document.body.querySelector(".toife-app");
  let s = null, n = null;
  return {
    open() {
      return new Promise((l) => {
        e && (n = document.createElement("div"), e.appendChild(n), s = re({
          render() {
            return oe(o || Se, {
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
}, mr = /* @__PURE__ */ k({
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
    const _ = () => {
      l.value = !1, n.value = 0, d = !1;
    }, g = () => {
      d = !0, l.value = !0, n.value = s.threshold, e("refresh", _);
    }, v = () => {
      n.value = 0, l.value = !1, d = !1, e("cancel");
    };
    z(() => a.value, () => {
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
          l.value || d || I != "down" || (s.variant == "up" && f >= s.threshold ? g() : v());
        },
        cancel() {
          l.value || d || v();
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
    }, close: _, start: g, cancel: v, ref: u, onUnmounted: M, watch: z, get gesture() {
      return L;
    } };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: !1, value: !0 }), m;
  }
});
function _r(r, o, t, e, s, n) {
  return G((i(), y("div", {
    class: p({ "toife-refresher": !0, safe: t.safe }),
    ref: "container"
  }, [
    $(r.$slots, "default", {
      offset: e.offset,
      refreshing: e.refreshing
    }, void 0, !0)
  ], 2)), [
    [U, e.offset > 0]
  ]);
}
const vr = /* @__PURE__ */ x(mr, [["render", _r], ["__scopeId", "data-v-69af4f52"]]), yr = /* @__PURE__ */ k({
  __name: "richtext",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
});
function br(r, o, t, e, s, n) {
  return i(), y("div");
}
const gr = /* @__PURE__ */ x(yr, [["render", br], ["__scopeId", "data-v-90f4e19d"]]), hr = /* @__PURE__ */ k({
  __name: "ripple",
  props: {
    color: { default: "primary" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = b(() => {
      let n = {};
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? n = {
        "--color": "var(--toife-color-status-" + t.color + ")"
      } : n = {
        "--color": t.color
      } : n = {
        "--color": "var(--toife-color-surface)"
      }, n;
    }), s = { props: t, styles: e, computed: b };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
});
function kr(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-ripple": !0 }),
    style: w(e.styles)
  }, null, 4);
}
const xr = /* @__PURE__ */ x(hr, [["render", kr], ["__scopeId", "data-v-2f24c046"]]), $r = /* @__PURE__ */ k({
  __name: "sheet",
  props: {
    background: { default: "var(--toife-color-surface)" },
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
    }), _ = (m) => {
      s("dismiss", m);
    }, g = () => {
      a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300);
    };
    z(() => n.value, (m) => {
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
    const v = { props: e, emit: s, sheet: n, present: l, isBusy: a, get ges() {
      return c;
    }, set ges(m) {
      c = m;
    }, gestureDir: d, close: _, busy: g, computed: b, onUnmounted: M, ref: u, watch: z, get toifeGesture() {
      return L;
    }, get Present() {
      return K;
    }, get GestureIndicator() {
      return xe;
    } };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: !1, value: !0 }), v;
  }
});
function Sr(r, o, t, e, s, n) {
  return i(), j(e.Present, {
    ref: "present",
    duration: t.duration,
    bounce: t.bounce,
    class: p(t.class),
    placement: t.placement,
    backdrop: t.backdrop,
    visible: t.visible,
    keepalive: t.keepalive,
    onDismiss: e.close,
    style: w(t.style)
  }, {
    default: D(() => [
      t.gesture && t.indicator && t.placement != "center" ? (i(), j(e.GestureIndicator, {
        key: 0,
        placement: t.placement
      }, null, 8, ["placement"])) : C("", !0),
      S("div", {
        ref: "sheet",
        class: p({ "toife-sheet": !0, fullscreen: t.fullscreen, [t.placement]: !0, rounded: t.rounded }),
        style: w({ "--background": t.background })
      }, [
        $(r.$slots, "default", {}, void 0, !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["duration", "bounce", "class", "placement", "backdrop", "visible", "keepalive", "style"]);
}
const wr = /* @__PURE__ */ x($r, [["render", Sr], ["__scopeId", "data-v-0d1848cc"]]), Pr = /* @__PURE__ */ k({
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
function Tr(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-skeleton": !0 }),
    style: w(e.styles)
  }, null, 4);
}
const Ir = /* @__PURE__ */ x(Pr, [["render", Tr], ["__scopeId", "data-v-08e291f4"]]), Or = /* @__PURE__ */ k({
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
        "--background": `var(--toife-color-status-${e.color})`,
        "--color": `var(--toife-color-status-${e.color}-text)`
      }), c;
    }), a = { props: e, emit: s, onSwitch: n, styles: l, computed: b };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
});
function Br(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-switch": !0, on: e.props.modelValue }),
    style: w(e.styles),
    onPointerup: e.onSwitch
  }, [...o[0] || (o[0] = [
    S("div", {
      class: p({ "toife-switch-icon": !0 })
    }, null, -1)
  ])], 38);
}
const Cr = /* @__PURE__ */ x(Or, [["render", Br], ["__scopeId", "data-v-b571ee39"]]), zr = /* @__PURE__ */ k({
  __name: "tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = Z("tabsState"), s = b(() => e.activeValue.value === t.value), l = { props: t, tabs: e, isActive: s, handleClick: () => {
      t.disabled || e.setValue(t.value);
    }, inject: Z, computed: b, get CustomButton() {
      return ne;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
});
function Er(r, o, t, e, s, n) {
  return i(), y("li", {
    class: p({ "toife-tab": !0, active: e.isActive })
  }, [
    ye(e.CustomButton, {
      variant: "text",
      onPointerup: e.handleClick,
      size: e.tabs.size,
      color: e.isActive ? e.tabs.color.text : void 0
    }, {
      default: D(() => [
        $(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size", "color"])
  ], 2);
}
const jr = /* @__PURE__ */ x(zr, [["render", Er], ["__scopeId", "data-v-4dd31330"]]), Rr = /* @__PURE__ */ k({
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
      return e.variant == "text" && (m = "transparent", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? h = `var(--toife-color-status-${e.color})` : h = e.color), e.variant == "border-under" && (h = "currentColor", ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? m = `var(--toife-color-status-${e.color})` : m = e.color), e.variant == "tag" && (["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? (m = `var(--toife-color-status-${e.color})`, h = `var(--toife-color-status-${e.color}-text)`) : (m = e.color, h = "currentColor")), { background: m, text: h };
    }), _ = b(() => e.variant == "border-under" ? {
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
    Q("tabsState", {
      activeValue: b(() => e.modelValue),
      color: d.value,
      size: e.size,
      variant: e.variant,
      setValue: (m) => {
        s("update:modelValue", m);
      }
    }), z(() => e.modelValue, async () => {
      await ce(), g();
    }), A(async () => {
      await ce(), g();
    });
    const v = { props: e, emit: s, transform: n, width: l, height: a, container: c, __color: d, styles: _, calcTransform: g, nextTick: ce, onMounted: A, provide: Q, ref: u, watch: z, computed: b };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: !1, value: !0 }), v;
  }
});
function Vr(r, o, t, e, s, n) {
  return i(), y("ul", {
    ref: "container",
    class: p({ "toife-tabs": !0, [t.placement]: !0, [`variant-${t.variant}`]: !0 }),
    style: w([{ "--background": e.__color.background, "--color": e.__color.text }, e.styles])
  }, [
    $(r.$slots, "default", {}, void 0, !0)
  ], 6);
}
const Ar = /* @__PURE__ */ x(Rr, [["render", Vr], ["__scopeId", "data-v-c7fff5a0"]]), Dr = /* @__PURE__ */ k({
  __name: "textarea",
  setup(r, { expose: o }) {
    o();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}), Nr = {
  class: /* @__PURE__ */ p({ "toife-textarea": !0 })
};
function Xr(r, o, t, e, s, n) {
  return i(), y("div", Nr, [...o[0] || (o[0] = [
    S("textarea", null, null, -1)
  ])]);
}
const Wr = /* @__PURE__ */ x(Dr, [["render", Xr], ["__scopeId", "data-v-9e74bf55"]]), qr = /* @__PURE__ */ k({
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
    z(() => e.visible, (v) => {
      v ? c() : d();
    });
    const _ = b(() => {
      let v;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--toife-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--toife-color-status-" + e.color + "-rgb), 1)"
      } : v = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": e.color
      } : v = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": "rgba(var(--toife-color-surface-rgb), 1)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--toife-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": "var(--toife-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "0.55px solid var(--toife-color-status-" + e.color + ")",
        "--color": "var(--toife-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid var(--toife-color-text)",
        "--color": "var(--toife-color-text)",
        "--background": "transparent"
      }), v;
    });
    o({
      open: c,
      close: d
    });
    const g = { props: e, emit: s, _visible: n, isRender: l, isClosing: a, open: c, close: d, styles: _, computed: b, ref: u, watch: z };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}), Mr = {
  class: /* @__PURE__ */ p({ "toife-toast-content": !0 })
};
function Lr(r, o, t, e, s, n) {
  return e.isRender ? (i(), y("div", {
    key: 0,
    class: p({ "toife-toast": !0, [e.props.placement]: !0, open: e._visible, closing: e.isClosing }),
    style: w({ "--space": e.props.space, ...e.styles })
  }, [
    $(r.$slots, "content", {}, () => [
      S("div", Mr, V(e.props.message), 1)
    ], !0)
  ], 6)) : C("", !0);
}
const we = /* @__PURE__ */ x(qr, [["render", Lr], ["__scopeId", "data-v-931010bd"]]), no = (r = {}, o) => ({
  open() {
    let t = document.body.querySelector(".toife-app");
    if (!t) return;
    const e = document.createElement("div"), s = u();
    t.appendChild(e);
    const n = re({
      render() {
        return oe(o || we, {
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
}), Fr = /* @__PURE__ */ k({
  __name: "toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(r, { expose: o, emit: t }) {
    o();
    const e = r, s = t, n = u(!1), l = u(), a = b(() => {
      let g = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (g = `var(--toife-color-status-${e.color})`), {
        "--color": g
      };
    }), c = () => l.value?.parentElement?.querySelector?.("input");
    A(() => {
      let g = c();
      g && (n.value = g.type != "password", s("change", n.value));
    });
    const _ = { props: e, emit: s, isShow: n, toggle: l, style: a, el: c, onClick: () => {
      let g = c();
      g && (n.value = !n.value, n.value ? g.type = "text" : g.type = "password", s("change", n.value));
    }, computed: b, onMounted: A, ref: u };
    return Object.defineProperty(_, "__isScriptSetup", { enumerable: !1, value: !0 }), _;
  }
});
function Hr(r, o, t, e, s, n) {
  return i(), y("button", {
    ref: "toggle",
    class: p({ "toife-toggle-password": !0 }),
    style: w(e.style),
    onPointerup: e.onClick
  }, [
    e.isShow ? $(r.$slots, "on", { key: 0 }, () => [
      o[0] || (o[0] = S("i", { class: "ri-eye-line" }, null, -1))
    ], !0) : C("", !0),
    e.isShow ? C("", !0) : $(r.$slots, "off", { key: 1 }, () => [
      o[1] || (o[1] = S("i", { class: "ri-eye-off-line" }, null, -1))
    ], !0)
  ], 36);
}
const Kr = /* @__PURE__ */ x(Fr, [["render", Hr], ["__scopeId", "data-v-97f88bfa"]]), Gr = /* @__PURE__ */ k({
  __name: "toolbar",
  props: {
    placement: { default: null },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(r, { expose: o }) {
    o();
    const t = r, e = Z("cableState"), s = b(() => t?.placement || e?.placement), n = { props: t, cable: e, placement: s, computed: b, inject: Z };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: !1, value: !0 }), n;
  }
});
function Ur(r, o, t, e, s, n) {
  return i(), y("div", {
    class: p({ "toife-toolbar": !0, [e.placement]: !0, safe: e.props.safe }),
    style: w({ "--toife-size-toolbar": e.props.size })
  }, [
    S("div", null, [
      $(r.$slots, "default", {}, void 0, !0)
    ])
  ], 6);
}
const Jr = /* @__PURE__ */ x(Gr, [["render", Ur], ["__scopeId", "data-v-24f79d25"]]), so = (r) => ({
  install: (o) => {
    const t = r?.prefix || "t-";
    o.component(t + "app", ze), o.component(t + "action", be), o.component(t + "screen", he), o.component(t + "screen-router", dt), o.component(t + "cable", kt), o.component(t + "toolbar", Jr), o.component(t + "content", Wt), o.component(t + "card", St), o.component(t + "refresher", vr), o.component(t + "button", ne), o.component(t + "back-button", mt), o.component(t + "present", K), o.component(t + "text", $e), o.component(t + "sheet", wr), o.component(t + "gesture-indicator", xe), o.component(t + "input", ur), o.component(t + "textarea", Wr), o.component(t + "richtext", gr), o.component(t + "grid", Zt), o.component(t + "divider", Lt), o.component(t + "toggle-password", Kr), o.component(t + "icon-spinner", ue), o.component(t + "alert", ge), o.component(t + "avatar", Je), o.component(t + "collapse", At), o.component(t + "toast", we), o.component(t + "switch", Cr), o.component(t + "tab", jr), o.component(t + "tabs", Ar), o.component(t + "checkbox", Ot), o.component(t + "keyboard-space", bt), o.component(t + "skeleton", Ir), o.component(t + "ripple", xr), o.component(t + "loading", Se), o.component(t + "flex", Kt), o.component(t + "image", rr);
  }
}), Pe = (r) => r && (r.tagName == "INPUT" || r.tagName == "TEXTAREA" || r.isContentEditable), Te = () => {
  const r = document.activeElement;
  r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable) && r.blur();
}, Qr = () => {
  document.addEventListener("contextmenu", (r) => r.preventDefault()), document.addEventListener("pointerup", (r) => {
    !Pe(r.target) && Te();
  }), "virtualKeyboard" in navigator && (navigator.virtualKeyboard.overlaysContent = !0);
}, ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blurCurrentActive: Te,
  isFormElement: Pe,
  preventDefault: Qr
}, Symbol.toStringTag, { value: "Module" }));
export {
  be as Action,
  ge as Alert,
  ze as App,
  Je as Avatar,
  mt as BackButton,
  ne as Button,
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
  ur as Input,
  bt as KeyboardSpace,
  Se as Loading,
  K as Present,
  vr as Refresher,
  gr as Richtext,
  xr as Ripple,
  he as Screen,
  dt as ScreenRouter,
  wr as Sheet,
  Ir as Skeleton,
  Cr as Switch,
  jr as Tab,
  Ar as Tabs,
  $e as Text,
  Wr as Textarea,
  we as Toast,
  Kr as TogglePassword,
  Jr as Toolbar,
  to as createAction,
  ro as createAlert,
  oo as createLoading,
  no as createToast,
  so as createToife,
  ve as getNewPresentIndex,
  te as useKeyboard,
  ee as useScreenRouter,
  ao as utils
};
