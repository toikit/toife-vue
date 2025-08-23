import { createElementBlock as m, openBlock as c, renderSlot as h, defineComponent as T, ref as _, computed as S, reactive as Z, watch as D, onUnmounted as A, Fragment as V, withDirectives as Y, createCommentVNode as E, normalizeStyle as x, normalizeClass as I, vShow as U, createElementVNode as k, createVNode as ee, createBlock as z, withCtx as P, toDisplayString as C, renderList as W, createTextVNode as X, createApp as F, h as G, unref as R, onMounted as te, resolveDynamicComponent as le, markRaw as ce } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as oe, useRoute as ie } from "vue-router";
const O = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), L = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ue = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !O(e.target) && L();
  });
}, g = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, r] of o)
    n[t] = r;
  return n;
}, de = {}, pe = { class: "t-app" };
function fe(e, o) {
  return c(), m("div", pe, [
    h(e.$slots, "default")
  ]);
}
const me = /* @__PURE__ */ g(de, [["render", fe]]), ve = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: n }) {
    const t = _(0), r = _(!1), a = _(), l = _(), i = e, y = n, p = S(() => r.value || i.keepalive), v = Z({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), f = (u) => {
      i.backdrop ? u?.backdropOpacity && (v["--t-present-backdrop-opacity"] = u.backdropOpacity) : v["--t-present-backdrop-opacity"] = "0", u?.transition && (v["--t-present-transition"] = u.transition, v["--t-present-transition"] = u.transition), u?.contentTransform && (v["--t-present-content-transform"] = u.contentTransform), u?.contentOpacity && (v["--t-present-content-opacity"] = u.contentOpacity);
    }, s = () => {
      f({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let u = "0px", w = "1";
      i.placement == "bottom" || i.placement == "right" ? u = "100%" : i.placement == "top" || i.placement == "left" ? u = "-100%" : i.placement == "center" && (u = "0px", w = "0"), f({
        contentTransform: u,
        transition: "0.2s",
        contentOpacity: w,
        backdropOpacity: "0"
      });
    };
    D(() => i.visible, () => {
      i.visible ? (r.value = !0, t.value = Se.getNewIndex(), setTimeout(() => {
        s();
      }, 50)) : (d(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: f,
      open: s,
      close: d
    });
    let b;
    return D(() => a.value, (u) => {
      u && (b = N(a.value, {
        beforeEvent(w) {
          return w.stopPropagation(), O(w.target) || (w.preventDefault(), L()), w.type == "pointerup";
        },
        up() {
          y("dismiss", "backdrop");
        }
      }));
    }), A(() => {
      b && b.destroy();
    }), d(), (u, w) => (c(), m(V, null, [
      p.value ? Y((c(), m("div", {
        key: 0,
        class: I(["t-present", { [u.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: x({ ...v, zIndex: t.value })
      }, [
        h(u.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [U, r.value]
      ]) : E("", !0),
      p.value ? Y((c(), m("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: x({ ...v, zIndex: t.value - 1 })
      }, null, 4)), [
        [U, r.value]
      ]) : E("", !0)
    ], 64));
  }
}), q = /* @__PURE__ */ g(ve, [["__scopeId", "data-v-dc2a4bc9"]]), _e = /* @__PURE__ */ T({
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
    return (o, n) => (c(), m("span", {
      class: "t-loading-icon",
      style: x({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ g(_e, [["__scopeId", "data-v-7c463303"]]), ye = {
  key: 0,
  class: "loader"
}, ge = /* @__PURE__ */ T({
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
    const o = e, n = S(() => {
      let t;
      return o.variant == "default" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + "-text)",
        "--background": "var(--t-color-status-" + o.color + ")"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": o.color
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), o.variant == "text" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": o.color,
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), o.variant == "outline" && (o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? t = {
        "--border": "0.55px solid var(--t-color-status-" + o.color + ")",
        "--color": "var(--t-color-status-" + o.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid " + o.color,
        "--color": o.color,
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t;
    });
    return (t, r) => (c(), m("button", {
      class: I(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0 }]),
      style: x(n.value)
    }, [
      Y(k("span", null, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [U, !o.loading]
      ]),
      o.loading ? (c(), m("span", ye, [
        ee(K, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-07bf1b8d"]]), be = {
  key: 0,
  class: "t-alert-header"
}, he = { class: "t-alert-content" }, ke = { class: "t-alert-footer" }, $e = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = _(!1), a = n, l = _();
    let i;
    const y = _(!1), p = () => {
      r.value = !0;
    }, v = (s) => {
      r.value = !1, s.handler && s.handler(), a("close", s?.data);
    }, f = (s) => {
      s == "backdrop" && (y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (s) => {
      s && (i = N(l.value, {
        beforeEvent(d) {
          return d.stopPropagation(), O(d.target) || (d.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (s, d) => (c(), z(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: f
    }, {
      default: P(() => [
        k("div", {
          class: I(["t-alert", { pop: y.value }]),
          ref_key: "container",
          ref: l
        }, [
          h(s.$slots, "header", {}, () => [
            t.title ? (c(), m("div", be, C(t.title), 1)) : E("", !0)
          ], !0),
          h(s.$slots, "content", {}, () => [
            k("div", he, C(t.message), 1)
          ], !0),
          h(s.$slots, "footer", {}, () => [
            k("div", ke, [
              (c(!0), m(V, null, W(t.actions, (b) => (c(), z(M, {
                color: b.color,
                variant: b.variant,
                onClick: (u) => v(b)
              }, {
                default: P(() => [
                  X(C(b.text), 1)
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
}), ne = /* @__PURE__ */ g($e, [["__scopeId", "data-v-5b4773ce"]]), Vt = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let n = document.body.querySelector(".t-app");
      if (!n) return;
      const t = document.createElement("div"), r = _();
      n.appendChild(t);
      const a = F({
        render() {
          return G(ne, {
            ...e,
            ref: r,
            onClose: (l) => {
              setTimeout(() => {
                a.unmount(), t.remove();
              }, 300), o(l);
            }
          });
        }
      });
      a.mount(t), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Te = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = _(!1), a = n, l = _();
    let i;
    const y = _(!1), p = () => {
      r.value = !0;
    }, v = (s) => {
      r.value = !1, s.handler && s.handler(), a("close", s?.data);
    }, f = (s) => {
      s == "backdrop" && (y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (s) => {
      s && (i = N(l.value, {
        beforeEvent(d) {
          return d.stopPropagation(), O(d.target) || (d.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (s, d) => (c(), z(q, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: f
    }, {
      default: P(() => [
        k("div", {
          class: I(["t-action", { pop: y.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), m(V, null, W(t.actions, (b) => (c(), m("div", null, [
            (c(!0), m(V, null, W(b, (u) => (c(), z(M, {
              color: u.color,
              size: u.size,
              variant: u.variant,
              onClick: (w) => v(u),
              block: ""
            }, {
              default: P(() => [
                X(C(u.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), we = /* @__PURE__ */ g(Te, [["__scopeId", "data-v-42000b04"]]), At = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let n = document.body.querySelector(".t-app");
      if (!n) return;
      const t = document.createElement("div"), r = _();
      n.appendChild(t);
      const a = F({
        render() {
          return G(we, {
            ...e,
            ref: r,
            onClose: (l) => {
              setTimeout(() => {
                a.unmount(), t.remove();
              }, 300), o(l);
            }
          });
        }
      });
      a.mount(t), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), xe = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = _(!1), a = _();
    let l;
    return o({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), D(() => a.value, (p) => {
      p && (l = N(a.value, {
        beforeEvent(v) {
          return v.stopPropagation(), O(v.target) || (v.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      l && l.destroy();
    }), (p, v) => (c(), z(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: P(() => [
        k("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          h(p.$slots, "default", {}, () => [
            ee(K, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-96624ceb"]]), Ot = (e = {}) => {
  const o = _(), n = document.body.querySelector(".t-app");
  let t = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        n && (r = document.createElement("div"), n.appendChild(r), t = F({
          render() {
            return G(Ie, {
              ...e,
              ref: o
            });
          }
        }), t.mount(r), setTimeout(() => {
          o.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        o.value?.close?.(), setTimeout(() => {
          t?.unmount?.(), r?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, J = _(1e3), Se = {
  getNewIndex() {
    return J.value += 2, J.value;
  }
}, B = Z([]), Ee = (e) => {
  B.push(e);
}, ze = (e) => {
  e || B.pop();
}, $ = {
  screens: B,
  addScreen: Ee,
  removeScreen: ze,
  hasPrevious: S(() => B.length > 1),
  currentScreen: S(() => B[B.length - 1]),
  lastScreen: S(() => {
    if (!(B.length < 2))
      return B[B.length - 2];
  })
}, Be = /* @__PURE__ */ T({
  __name: "t-toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    duration: { default: 2e3 },
    color: { default: null },
    variant: { default: "default" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = n, a = _(!1), l = _(!1), i = _(!1), y = () => {
      l.value = !0, i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, t.duration + 10);
    }, p = () => {
      i.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, r("close");
      }, 300);
    }, v = S(() => {
      let f;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? f = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 0.6)"
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? f = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : f = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? f = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : f = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : f = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), f;
    });
    return o({
      open: y
    }), (f, s) => l.value ? (c(), m("div", {
      key: 0,
      class: I(["t-toast", { [t.placement]: !0, open: a.value, closing: i.value }]),
      style: x({ "--space": t.space, ...v.value })
    }, C(t.message), 7)) : E("", !0);
  }
}), re = /* @__PURE__ */ g(Be, [["__scopeId", "data-v-5159a3c5"]]), Lt = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const n = document.createElement("div"), t = _();
    o.appendChild(n);
    const r = F({
      render() {
        return G(re, {
          ...e,
          ref: t,
          onClose: () => {
            setTimeout(() => {
              r.unmount(), n.remove();
            }, 300);
          }
        });
      }
    });
    r.mount(n), setTimeout(() => {
      t.value?.open?.();
    }, 50);
  }
}), Ce = _(0);
function Pe() {
  return {
    height: Ce
  };
}
const De = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const o = e, { height: n } = Pe();
    return (t, r) => (c(), m("div", {
      class: I(["t-cable", { keyboard: o.keyboard && R(n) > 0, [o.placement]: !0 }]),
      style: x({ "--t-keyboard-height": R(n) + "px", "--t-keyboard-transition": R(n) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Re = /* @__PURE__ */ g(De, [["__scopeId", "data-v-ecb72421"]]), Ne = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(e) {
    const o = e, n = S(() => {
      let t;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? t = {
        "--background": "var(--t-color-status-" + o.color + ")"
      } : t = {
        "--background": o.color
      } : t = {
        "--background": "var(--t-color-surface)"
      }, t;
    });
    return (t, r) => (c(), m("div", {
      class: "t-card",
      style: x(n.value)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), Ve = {}, Ae = { class: "t-content" };
function Oe(e, o) {
  return c(), m("div", Ae, [
    h(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Le = /* @__PURE__ */ g(Ve, [["render", Oe], ["__scopeId", "data-v-9a833657"]]), Q = 80, Xe = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: o }) {
    const n = o, t = _(0), r = _(!1), a = _();
    let l, i = !1;
    const y = () => {
      r.value = !1, t.value = 0, l && l.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, p = () => {
      i = !0, r.value = !0, t.value = Q, n("refresh", y);
    };
    return D(() => a.value, () => {
      l && l.destroy();
      let v = a.value.closest(".t-screen");
      l = N(v, {
        options: {
          minDist: 60
        },
        move({ dy: f }) {
          r.value || i || f < 0 || (f >= 120 ? p() : t.value = f);
        },
        up({ dy: f }) {
          r.value || i || (f > Q ? p() : t.value = 0);
        },
        cancel() {
          r.value = !1, t.value = 0;
        }
      });
    }), A(() => {
      l && l.destroy();
    }), (v, f) => Y((c(), m("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: x({ height: `${t.value}px` })
    }, [
      k("img", {
        class: I({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [U, t.value > 0]
    ]);
  }
}), qe = /* @__PURE__ */ g(Xe, [["__scopeId", "data-v-7f97bb1a"]]), Ye = {}, Ue = { class: "t-screen" };
function We(e, o) {
  return c(), m("div", Ue, [
    h(e.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ g(Ye, [["render", We], ["__scopeId", "data-v-66ea8649"]]), Fe = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: o }) {
    let n = {};
    const t = oe(), r = ie(), a = t.getRoutes(), l = _(!1), i = o;
    for (let s of a)
      n[s.name] = s.components;
    const y = (s) => {
      s && $.addScreen({
        name: s,
        target: null,
        component: ce(n[s] || null)
      });
    }, p = (s, d) => {
      !d || $.screens[s].target || ($.screens[s].target = d.$el, s > 0 && (l.value = !0, d.$el.style.transform = "translateX(100vw)", d.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        d.$el.style.transition = "transform 0.35s ease", d.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, v = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), i("change"), l.value = !1;
      }, 400);
    };
    y(r.name), D(() => r.name, (s, d) => {
      s != $.currentScreen.value.name && ($.lastScreen.value?.name == s ? v() : y(s));
    });
    const f = () => {
      l.value = !0;
      const s = $.currentScreen.value.target, d = $.lastScreen.value.target;
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return te(() => {
      N(document, {
        pointerId: null,
        beforeEvent(s) {
          return l.value || $.screens.length < 2 ? !1 : (s.type == "pointerdown" && !this.pointerId && (this.pointerId = s.pointerId), this.pointerId == s.pointerId);
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          s == "right" && t.back();
        },
        move({ dx: s }) {
          const d = window.innerWidth, b = s / d * 100, u = $.currentScreen.value.target, w = $.lastScreen?.value?.target;
          if (s > 0 && s <= d) {
            u.style.transition = "transform 0s ease", u.style.transform = `translateX(${s}px)`, w.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), w.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${b}))) scale(${0.5 + 0.5 / 100 * b}) perspective(100vw) rotateY(${30 - 30 / 100 * b}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * b}`);
            return;
          }
        },
        up({ dx: s }) {
          const d = window.innerWidth;
          s / d * 100 >= 50 ? t.back() : f();
        },
        cancel() {
          f();
        }
      });
    }), (s, d) => (c(), m(V, null, [
      (c(!0), m(V, null, W(R($).screens, (b, u) => (c(), z(se, {
        ref_for: !0,
        ref: (w) => p(u, w),
        style: x({ zIndex: u + (u == R($).screens.length - 1 ? 2 : 1) }),
        key: u
      }, {
        default: P(() => [
          (c(), z(le(b.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: x({ zIndex: R($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ge = /* @__PURE__ */ g(Fe, [["__scopeId", "data-v-a048cc07"]]), He = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e;
    return (n, t) => (c(), m("div", {
      class: I(["t-toolbar", { [o.placement]: !0 }]),
      style: x({ "--t-size-toolbar": o.size })
    }, [
      k("div", null, [
        h(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), je = /* @__PURE__ */ g(He, [["__scopeId", "data-v-3b3a7896"]]), Ke = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const o = oe(), n = e, t = () => {
      $.hasPrevious.value ? o?.back?.() : n.to && o?.push?.(n.to);
    };
    return (r, a) => r.to || R($).hasPrevious ? (c(), m("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(r.$slots, "default", {}, () => [
        a[0] || (a[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), Me = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-ed626a3d"]]), Je = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, n = S(() => {
      let t, r = o.color;
      return o.size == "standard" ? t = "var(--t-fs-10)" : o.size == "small" ? t = "var(--t-fs-08)" : o.size == "large" ? t = "var(--t-fs-12)" : t = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": t
      };
    });
    return (t, r) => (c(), m("span", {
      class: "t-text",
      style: x(n.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), j = /* @__PURE__ */ g(Je, [["__scopeId", "data-v-f0f94f05"]]), Qe = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, n) => (c(), m("div", {
      class: I(["t-pull-bar", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ g(Qe, [["__scopeId", "data-v-daa38c85"]]), Ze = /* @__PURE__ */ T({
  __name: "t-sheet",
  props: {
    background: { default: "var(--t-color-surface)" },
    visible: { type: Boolean, default: !1 },
    gesture: { type: Boolean, default: !0 },
    fullscreen: { type: Boolean, default: !1 },
    placement: { default: "bottom" },
    keepalive: { type: Boolean, default: !0 },
    backdrop: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !0 },
    radius: { type: Boolean, default: !0 },
    closeButton: { type: Boolean, default: !0 }
  },
  emits: ["dismiss"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = _(), a = _(), l = _(!1);
    let i = null;
    const y = S(() => {
      if (n.placement == "bottom") return "down";
      if (n.placement == "top") return "up";
      if (n.placement == "left") return "left";
      if (n.placement == "right") return "right";
    }), p = (f) => {
      t("dismiss", f);
    }, v = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return D(() => r.value, (f) => {
      f && (i = N(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(s) {
          let d = !1, b = !1;
          return l.value || !n.gesture || n.placement == "center" ? d = !0 : this.pointerId ? (d = !0, b = this.pointerId == s.pointerId) : s.type == "pointerdown" && (this.pointerId = s.pointerId, d = !0, b = !0), d && (s.stopPropagation(), O(s.target) || (s.preventDefault(), L())), b;
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          v(), s == y.value ? t("dismiss", "gesture") : a.value.open();
        },
        move({ dy: s, dx: d, d: b }) {
          if (b != y.value) return;
          let u = 0;
          n.placement == "bottom" || n.placement == "top" ? u = s : u = d, a.value.render({
            contentTransform: u + "px",
            transition: "0s"
          });
        },
        up({ dy: s, dx: d, d: b }) {
          if (v(), b != y.value) {
            a.value.open();
            return;
          }
          let u, w, H;
          n.placement == "bottom" || n.placement == "top" ? (u = r.value.offsetHeight, H = s) : (u = r.value.offsetWidth, H = d), w = H / u * 100, w > 50 ? t("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          v(), a.value.open();
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (f, s) => (c(), z(q, {
      ref_key: "present",
      ref: a,
      placement: n.placement,
      backdrop: f.backdrop,
      visible: n.visible,
      keepalive: n.keepalive,
      onDismiss: p
    }, {
      default: P(() => [
        n.gesture && n.placement != "center" ? (c(), z(ae, {
          key: 0,
          placement: n.placement
        }, null, 8, ["placement"])) : E("", !0),
        n.closeButton && n.placement == "center" ? (c(), m("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: s[0] || (s[0] = (d) => p("close-button"))
        }, [
          h(f.$slots, "close-icon", {}, () => [
            s[1] || (s[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : E("", !0),
        k("div", {
          class: I(["t-sheet", { fullscreen: n.fullscreen, [n.placement]: !0, rounded: f.rounded, radius: n.radius }]),
          style: x({ "--background": n.background }),
          ref_key: "sheet",
          ref: r
        }, [
          h(f.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), et = /* @__PURE__ */ g(Ze, [["__scopeId", "data-v-14b7fc93"]]), tt = { class: "t-input-label" }, ot = { class: "t-input-content" }, nt = ["type", "placeholder", "value"], rt = /* @__PURE__ */ T({
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
    variant: { default: "normal" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = (a) => {
      t("update:modelValue", a.target.value);
    };
    return (a, l) => (c(), m("div", {
      class: I(["t-input", { rounded: n.rounded, ["size-" + n.size]: !0 }])
    }, [
      k("label", null, [
        k("span", tt, C(a.label), 1),
        k("div", ot, [
          h(a.$slots, "start", {}, void 0, !0),
          k("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, nt),
          h(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      n.error ? (c(), z(j, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          X(C(n.error), 1)
        ]),
        _: 1
      })) : n.help ? (c(), z(j, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          X(C(n.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ g(rt, [["__scopeId", "data-v-75bf0d19"]]), at = {};
function lt(e, o) {
  return c(), m("textarea");
}
const ct = /* @__PURE__ */ g(at, [["render", lt]]), it = {};
function ut(e, o) {
  return c(), m("div");
}
const dt = /* @__PURE__ */ g(it, [["render", ut]]), pt = {}, ft = { class: "t-grid" };
function mt(e, o) {
  return c(), m("div", ft);
}
const vt = /* @__PURE__ */ g(pt, [["render", mt]]), _t = {}, yt = { class: "t-grid-item" };
function gt(e, o) {
  return c(), m("div", yt);
}
const bt = /* @__PURE__ */ g(_t, [["render", gt]]), ht = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (n, t) => (c(), m("div", {
      class: I(["t-divider", { [o.type]: !0 }])
    }, null, 2));
  }
}), kt = /* @__PURE__ */ g(ht, [["__scopeId", "data-v-816784be"]]), $t = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = _(!1), a = _(), l = S(() => {
      let p = n.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (p = `var(--t-color-status-${n.color})`), {
        "--color": p
      };
    }), i = () => a.value?.parentElement?.querySelector?.("input");
    te(() => {
      let p = i();
      p && (r.value = p.type != "password", t("change", r.value));
    });
    const y = () => {
      let p = i();
      p && (r.value = !r.value, r.value ? p.type = "text" : p.type = "password", t("change", r.value));
    };
    return (p, v) => (c(), m("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: x(l.value),
      onClick: y
    }, [
      r.value ? h(p.$slots, "on", { key: 0 }, () => [
        v[0] || (v[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      r.value ? E("", !0) : h(p.$slots, "off", { key: 1 }, () => [
        v[1] || (v[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Tt = /* @__PURE__ */ g($t, [["__scopeId", "data-v-3268e9e3"]]), wt = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, n = S(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (t, r) => (c(), m("div", {
      class: I(["t-avatar", { square: t.square }]),
      style: x({ "--size": n.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-24384c2f"]]), It = { class: "t-collapse-title" }, St = {
  key: 0,
  class: "icon"
}, Et = {
  key: 1,
  class: "icon"
}, zt = { class: "t-collapse-content" }, Bt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = _(!1), a = _(""), l = _(), i = () => {
      r.value = !r.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, t("change", r.value);
    };
    return t("change", r.value), (y, p) => (c(), m("div", {
      class: I(["t-collapse", { open: r.value }]),
      style: x({ "--height": a.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        h(y.$slots, "icon"),
        k("div", It, [
          h(y.$slots, "title", {}, () => [
            X(C(n.title), 1)
          ])
        ]),
        h(y.$slots, "toggle", {}, () => [
          r.value ? (c(), m("div", St, [...p[0] || (p[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), m("div", Et, [...p[1] || (p[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", zt, [
        k("div", {
          ref_key: "content",
          ref: l
        }, [
          h(y.$slots, "content", {}, () => [
            h(y.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Ct = /* @__PURE__ */ T({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = () => {
      t("update:modelValue", !n.modelValue);
    }, a = S(() => {
      let l = {
        "--background": n.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (l = {
        "--background": `var(--t-color-status-${n.color})`,
        "--color": `var(--t-color-status-${n.color}-text)`
      }), l;
    });
    return (l, i) => (c(), m("div", {
      class: I(["t-switch", { on: n.modelValue }]),
      style: x(a.value),
      onClick: r
    }, [...i[0] || (i[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Pt = /* @__PURE__ */ g(Ct, [["__scopeId", "data-v-3616970e"]]), Xt = () => ({
  install: (e) => {
    ue(), e.component("t-app", me), e.component("t-screen", se), e.component("t-swipe-screen", Ge), e.component("t-cable", Re), e.component("t-toolbar", je), e.component("t-content", Le), e.component("t-card", Ne), e.component("t-refresher", qe), e.component("t-button", M), e.component("t-back-button", Me), e.component("t-present", q), e.component("t-text", j), e.component("t-sheet", et), e.component("t-pull-signal", ae), e.component("t-input", st), e.component("t-textarea", ct), e.component("t-rich-text", dt), e.component("t-grid", vt), e.component("t-grid-item", bt), e.component("t-divider", kt), e.component("t-toggle-password", Tt), e.component("t-loading-icon", K), e.component("t-alert", ne), e.component("t-avatar", xt), e.component("t-collapse", Bt), e.component("t-toast", re), e.component("t-switch", Pt);
  }
});
export {
  L as blurCurrentActive,
  At as createAction,
  Vt as createAlert,
  Ot as createLoading,
  Lt as createToast,
  Xt as createToife,
  O as isFormElement,
  Se as presentController,
  $ as screenController,
  Pe as useKeyboard
};
