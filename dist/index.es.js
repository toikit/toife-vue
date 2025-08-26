import { createElementBlock as v, openBlock as c, renderSlot as h, defineComponent as T, ref as g, computed as I, reactive as te, watch as R, onUnmounted as O, Fragment as N, withDirectives as Y, createCommentVNode as z, normalizeStyle as w, normalizeClass as x, vShow as H, createElementVNode as k, createVNode as M, createBlock as E, withCtx as B, toDisplayString as P, renderList as U, createTextVNode as L, createApp as j, h as F, unref as D, onMounted as J, resolveDynamicComponent as le, markRaw as ce, inject as ie, provide as ue } from "vue";
import { gesture as A } from "@toife/gesture";
import { useRouter as oe, useRoute as de } from "vue-router";
const q = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), X = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, pe = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("selectstart", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !q(t.target) && X();
  });
}, b = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, fe = {}, me = { class: "t-app" };
function ve(t, n) {
  return c(), v("div", me, [
    h(t.$slots, "default")
  ]);
}
const _e = /* @__PURE__ */ b(fe, [["render", ve]]), ye = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = g(0), s = g(!1), a = g(), l = g(), i = t, u = o, p = I(() => s.value || i.keepalive), _ = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), f = (d) => {
      i.backdrop ? d?.backdropOpacity && (_["--t-present-backdrop-opacity"] = d.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", d?.transition && (_["--t-present-transition"] = d.transition, _["--t-present-transition"] = d.transition), d?.contentTransform && (_["--t-present-content-transform"] = d.contentTransform), d?.contentOpacity && (_["--t-present-content-opacity"] = d.contentOpacity);
    }, r = () => {
      f({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, m = () => {
      let d = "0px", S = "1";
      i.placement == "bottom" || i.placement == "right" ? d = "100%" : i.placement == "top" || i.placement == "left" ? d = "-100%" : i.placement == "center" && (d = "0px", S = "0"), f({
        contentTransform: d,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    R(() => i.visible, () => {
      i.visible ? (s.value = !0, e.value = Ee.getNewIndex(), setTimeout(() => {
        r();
      }, 50)) : (m(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), n({
      render: f,
      open: r,
      close: m
    });
    let y;
    return R(() => a.value, (d) => {
      d && (y = A(a.value, {
        beforeEvent(S, V) {
          return V.stopPropagation(), q(V.target) || (V.preventDefault(), X()), S == "down";
        },
        up() {
          u("dismiss", "backdrop");
        }
      }));
    }), O(() => {
      y && y.destroy();
    }), m(), (d, S) => (c(), v(N, null, [
      p.value ? Y((c(), v("div", {
        key: 0,
        class: x(["t-present", { [d.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: w({ ..._, zIndex: e.value })
      }, [
        h(d.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, s.value]
      ]) : z("", !0),
      p.value ? Y((c(), v("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: w({ ..._, zIndex: e.value - 1 })
      }, null, 4)), [
        [H, s.value]
      ]) : z("", !0)
    ], 64));
  }
}), W = /* @__PURE__ */ b(ye, [["__scopeId", "data-v-913d428f"]]), ge = /* @__PURE__ */ T({
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
    return (n, o) => (c(), v("span", {
      class: "t-loading-icon",
      style: w({
        width: t.size,
        height: t.size,
        borderTopColor: t.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), Q = /* @__PURE__ */ b(ge, [["__scopeId", "data-v-7c463303"]]), be = {
  key: 0,
  class: "loader"
}, he = /* @__PURE__ */ T({
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
    const n = t, o = I(() => {
      let e;
      return n.variant == "default" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "none",
        "--color": "var(--t-color-status-" + n.color + "-text)",
        "--background": "var(--t-color-status-" + n.color + ")"
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": n.color
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), n.variant == "text" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "none",
        "--color": "var(--t-color-status-" + n.color + ")",
        "--background": "transparent"
      } : e = {
        "--border": "none",
        "--color": n.color,
        "--background": "transparent"
      } : e = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), n.variant == "outline" && (n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--border": "0.55px solid var(--t-color-status-" + n.color + ")",
        "--color": "var(--t-color-status-" + n.color + ")",
        "--background": "transparent"
      } : e = {
        "--border": "0.55px solid " + n.color,
        "--color": n.color,
        "--background": "transparent"
      } : e = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e;
    });
    return (e, s) => (c(), v("button", {
      class: x(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0 }]),
      style: w(o.value)
    }, [
      Y(k("span", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !n.loading]
      ]),
      n.loading ? (c(), v("span", be, [
        M(Q, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), G = /* @__PURE__ */ b(he, [["__scopeId", "data-v-07bf1b8d"]]), ke = {
  key: 0,
  class: "t-alert-header"
}, $e = { class: "t-alert-content" }, Te = { class: "t-alert-footer" }, we = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = g(!1), a = o, l = g();
    let i;
    const u = g(!1), p = () => {
      s.value = !0;
    }, _ = (r) => {
      s.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, f = (r) => {
      e.dismiss && e.dismiss.includes(r) ? (s.value = !1, a("dismiss", r)) : r == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: p
    }), R(() => l.value, (r) => {
      r && (i = A(l.value, {
        beforeEvent(m, y) {
          return y.stopPropagation(), q(y.target) || (y.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      i && i.destroy();
    }), (r, m) => (c(), E(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: f
    }, {
      default: B(() => [
        k("div", {
          class: x(["t-alert", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          h(r.$slots, "header", {}, () => [
            e.title ? (c(), v("div", ke, P(e.title), 1)) : z("", !0)
          ], !0),
          h(r.$slots, "content", {}, () => [
            k("div", $e, P(e.message), 1)
          ], !0),
          h(r.$slots, "footer", {}, () => [
            k("div", Te, [
              (c(!0), v(N, null, U(e.actions, (y) => (c(), E(G, {
                color: y.color,
                variant: y.variant,
                onClick: (d) => _(y)
              }, {
                default: B(() => [
                  L(P(y.text), 1)
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
}), ne = /* @__PURE__ */ b(we, [["__scopeId", "data-v-ca660c5d"]]), Wt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = g();
      o.appendChild(e);
      const a = j({
        render() {
          return F(ne, {
            ...t,
            ref: s,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), xe = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = g(!1), a = o, l = g();
    let i;
    const u = g(!1), p = () => {
      s.value = !0;
    }, _ = (r) => {
      s.value = !1, r.handler && r.handler(), a("dismiss", "choose", r?.data);
    }, f = (r) => {
      e.dismiss && e.dismiss.includes(r) ? (s.value = !1, a("dismiss", r)) : r == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: p
    }), R(() => l.value, (r) => {
      r && (i = A(l.value, {
        beforeEvent(m, y) {
          return y.stopPropagation(), q(y.target) || (y.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      i && i.destroy();
    }), (r, m) => (c(), E(W, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: f
    }, {
      default: B(() => [
        k("div", {
          class: x(["t-action", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), v(N, null, U(e.actions, (y) => (c(), v("div", null, [
            (c(!0), v(N, null, U(y, (d) => (c(), E(G, {
              color: d.color,
              size: d.size,
              variant: d.variant,
              onClick: (S) => _(d),
              block: ""
            }, {
              default: B(() => [
                L(P(d.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ b(xe, [["__scopeId", "data-v-972de12a"]]), Yt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = g();
      o.appendChild(e);
      const a = j({
        render() {
          return F(Ie, {
            ...t,
            ref: s,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), Se = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = g(!1), a = g();
    let l;
    return n({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), R(() => a.value, (p) => {
      p && (l = A(a.value, {
        beforeEvent(_, f) {
          return f.stopPropagation(), q(f.target) || (f.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      l && l.destroy();
    }), (p, _) => (c(), E(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value
    }, {
      default: B(() => [
        k("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          h(p.$slots, "default", {}, () => [
            M(Q, {
              type: e.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), ze = /* @__PURE__ */ b(Se, [["__scopeId", "data-v-77aa517f"]]), Ht = (t = {}) => {
  const n = g(), o = document.body.querySelector(".t-app");
  let e = null, s = null;
  return {
    open() {
      return new Promise((a) => {
        o && (s = document.createElement("div"), o.appendChild(s), e = j({
          render() {
            return F(ze, {
              ...t,
              ref: n
            });
          }
        }), e.mount(s), setTimeout(() => {
          n.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        n.value?.close?.(), setTimeout(() => {
          e?.unmount?.(), s?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, Z = g(1e3), Ee = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, C = te([]), Be = (t) => {
  C.push(t);
}, Ce = (t) => {
  t || C.pop();
}, $ = {
  screens: C,
  addScreen: Be,
  removeScreen: Ce,
  hasPrevious: I(() => C.length > 1),
  currentScreen: I(() => C[C.length - 1]),
  lastScreen: I(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Pe = /* @__PURE__ */ T({
  __name: "t-toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    duration: { default: 2e3 },
    color: { default: null },
    variant: { default: "default" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, s = o, a = g(!1), l = g(!1), i = g(!1), u = () => {
      l.value = !0, i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, e.duration + 10);
    }, p = () => {
      i.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, s("dismiss");
      }, 300);
    }, _ = I(() => {
      let f;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? f = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + e.color + "-rgb), 0.6)"
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": e.color
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? f = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : f = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : f = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? f = {
        "--border": "0.55px solid var(--t-color-status-" + e.color + ")",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : f = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : f = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), f;
    });
    return n({
      open: u
    }), (f, r) => l.value ? (c(), v("div", {
      key: 0,
      class: x(["t-toast", { [e.placement]: !0, open: a.value, closing: i.value }]),
      style: w({ "--space": e.space, ..._.value })
    }, P(e.message), 7)) : z("", !0);
  }
}), se = /* @__PURE__ */ b(Pe, [["__scopeId", "data-v-98e8be37"]]), Ut = (t = {}) => ({
  open() {
    let n = document.body.querySelector(".t-app");
    if (!n) return;
    const o = document.createElement("div"), e = g();
    n.appendChild(o);
    const s = j({
      render() {
        return F(se, {
          ...t,
          ref: e,
          onDismiss: () => {
            setTimeout(() => {
              s.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    s.mount(o), setTimeout(() => {
      e.value?.open?.();
    }, 50);
  }
}), De = g(0);
function Re() {
  return {
    height: De
  };
}
const Ve = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const n = t, { height: o } = Re();
    return (e, s) => (c(), v("div", {
      class: x(["t-cable", { keyboard: n.keyboard && D(o) > 0, [n.placement]: !0 }]),
      style: w({ "--t-keyboard-height": D(o) + "px", "--t-keyboard-transition": D(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ae = /* @__PURE__ */ b(Ve, [["__scopeId", "data-v-ecb72421"]]), Ne = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(t) {
    const n = t, o = I(() => {
      let e;
      return n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--background": "var(--t-color-status-" + n.color + ")"
      } : e = {
        "--background": n.color
      } : e = {
        "--background": "var(--t-color-surface)"
      }, e;
    });
    return (e, s) => (c(), v("div", {
      class: "t-card",
      style: w(o.value)
    }, [
      h(e.$slots, "default")
    ], 4));
  }
}), Oe = {}, qe = { class: "t-content" };
function Xe(t, n) {
  return c(), v("div", qe, [
    h(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Le = /* @__PURE__ */ b(Oe, [["render", Xe], ["__scopeId", "data-v-9a833657"]]), ee = 80, We = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(t, { emit: n }) {
    const o = n, e = g(0), s = g(!1), a = g();
    let l, i = !1;
    const u = () => {
      s.value = !1, e.value = 0, l && l.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, p = () => {
      i = !0, s.value = !0, e.value = ee, o("refresh", u);
    };
    return R(() => a.value, () => {
      l && l.destroy();
      let _ = a.value.closest(".t-content");
      _ && (l = A(_, {
        options: {
          minDist: 60
        },
        move({ dy: f, e: r }) {
          s.value || i || f < 0 || (f > 0 && _.scrollTop == 0 && r.preventDefault(), f >= 120 ? p() : e.value = f);
        },
        up({ dy: f, e: r }) {
          s.value || i || (f > ee ? p() : e.value = 0);
        },
        cancel() {
          s.value = !1, e.value = 0;
        }
      }, {
        passive: !1
      }));
    }), O(() => {
      l && l.destroy();
    }), (_, f) => Y((c(), v("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: w({ height: `${e.value}px` })
    }, [
      k("img", {
        class: x({ spiner: s.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, e.value > 0]
    ]);
  }
}), Ye = /* @__PURE__ */ b(We, [["__scopeId", "data-v-c7533515"]]), He = {}, Ue = { class: "t-screen" };
function je(t, n) {
  return c(), v("div", Ue, [
    h(t.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ b(He, [["render", je], ["__scopeId", "data-v-66ea8649"]]), Fe = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(t, { emit: n }) {
    let o = {};
    const e = oe(), s = de(), a = e.getRoutes(), l = g(!1), i = n;
    for (let r of a)
      o[r.name] = r.components;
    const u = (r) => {
      r && $.addScreen({
        name: r,
        target: null,
        component: ce(o[r] || null)
      });
    }, p = (r, m) => {
      !m || $.screens[r].target || ($.screens[r].target = m.$el, r > 0 && (l.value = !0, m.$el.style.transform = "translateX(100vw)", m.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        m.$el.style.transition = "transform 0.35s ease", m.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, _ = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), i("change"), l.value = !1;
      }, 400);
    };
    u(s.name), R(() => s.name, (r, m) => {
      r != $.currentScreen.value.name && ($.lastScreen.value?.name == r ? _() : u(r));
    });
    const f = () => {
      l.value = !0;
      const r = $.currentScreen.value.target, m = $.lastScreen.value.target;
      r.style.transition = "transform 0.35s ease", r.style.transform = "translateX(0px)", m.style.transition = "transform 0.35s ease", m.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return J(() => {
      A(document, {
        pointerId: null,
        beforeEvent(r, m) {
          return l.value || $.screens.length < 2 ? !1 : (r == "down" && !this.pointerId && (this.pointerId = m.pointerId), this.pointerId == m.pointerId);
        },
        afterEvent(r, m) {
          (r == "up" || r == "cancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          r == "right" && e.back();
        },
        move({ dx: r }) {
          const m = window.innerWidth, y = r / m * 100, d = $.currentScreen.value.target, S = $.lastScreen?.value?.target;
          if (r > 0 && r <= m) {
            d.style.transition = "transform 0s ease", d.style.transform = `translateX(${r}px)`, S.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), S.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${y}))) scale(${0.5 + 0.5 / 100 * y}) perspective(100vw) rotateY(${30 - 30 / 100 * y}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * y}`);
            return;
          }
        },
        up({ dx: r }) {
          const m = window.innerWidth;
          r / m * 100 >= 50 ? e.back() : f();
        },
        cancel() {
          f();
        }
      });
    }), (r, m) => (c(), v(N, null, [
      (c(!0), v(N, null, U(D($).screens, (y, d) => (c(), E(re, {
        ref_for: !0,
        ref: (S) => p(d, S),
        style: w({ zIndex: d + (d == D($).screens.length - 1 ? 2 : 1) }),
        key: d
      }, {
        default: B(() => [
          (c(), E(le(y.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: D($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ge = /* @__PURE__ */ b(Fe, [["__scopeId", "data-v-d226eac9"]]), Ke = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), v("div", {
      class: x(["t-toolbar", { [n.placement]: !0 }]),
      style: w({ "--t-size-toolbar": n.size })
    }, [
      k("div", null, [
        h(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Me = /* @__PURE__ */ b(Ke, [["__scopeId", "data-v-3b3a7896"]]), Je = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(t) {
    const n = oe(), o = t, e = () => {
      $.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (s, a) => s.to || D($).hasPrevious ? (c(), v("button", {
      key: 0,
      class: "t-back-button",
      onClick: e
    }, [
      h(s.$slots, "default", {}, () => [
        a[0] || (a[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Qe = /* @__PURE__ */ b(Je, [["__scopeId", "data-v-ed626a3d"]]), Ze = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = I(() => {
      let e, s = n.color;
      return n.size == "standard" ? e = "var(--t-fs-10)" : n.size == "small" ? e = "var(--t-fs-08)" : n.size == "large" ? e = "var(--t-fs-12)" : e = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (s = `var(--t-color-status-${n.color})`), {
        "--color": s,
        "--font-size": e
      };
    });
    return (e, s) => (c(), v("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), K = /* @__PURE__ */ b(Ze, [["__scopeId", "data-v-f0f94f05"]]), et = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (n, o) => (c(), v("div", {
      class: x(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ b(et, [["__scopeId", "data-v-daa38c85"]]), tt = /* @__PURE__ */ T({
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
  setup(t, { emit: n }) {
    const o = t, e = n, s = g(), a = g(), l = g(!1);
    let i = null;
    const u = I(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), p = (f) => {
      e("dismiss", f);
    }, _ = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return R(() => s.value, (f) => {
      f && (i = A(s.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(r, m) {
          let y = !1, d = !1;
          return l.value || !o.gesture || o.placement == "center" ? y = !0 : this.pointerId ? (y = !0, d = this.pointerId == m.pointerId) : r == "down" && (this.pointerId = m.pointerId, y = !0, d = !0), y && (m.stopPropagation(), q(m.target) || (m.preventDefault(), X())), d;
        },
        afterEvent(r, m) {
          (r == "up" || r == "cancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          _(), r == u.value ? e("dismiss", "gesture") : a.value.open();
        },
        move({ dy: r, dx: m, d: y }) {
          if (y != u.value) return;
          let d = 0;
          o.placement == "bottom" || o.placement == "top" ? d = r : d = m, a.value.render({
            contentTransform: d + "px",
            transition: "0s"
          });
        },
        up({ dy: r, dx: m, d: y }) {
          if (_(), y != u.value) {
            a.value.open();
            return;
          }
          let d, S, V;
          o.placement == "bottom" || o.placement == "top" ? (d = s.value.offsetHeight, V = r) : (d = s.value.offsetWidth, V = m), S = V / d * 100, S > 50 ? e("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          _(), a.value.open();
        }
      }));
    }), O(() => {
      i && i.destroy();
    }), (f, r) => (c(), E(W, {
      ref_key: "present",
      ref: a,
      placement: o.placement,
      backdrop: f.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: p
    }, {
      default: B(() => [
        o.gesture && o.placement != "center" ? (c(), E(ae, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : z("", !0),
        o.closeButton && o.placement == "center" ? (c(), v("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: r[0] || (r[0] = (m) => p("close-button"))
        }, [
          h(f.$slots, "close-icon", {}, () => [
            r[1] || (r[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : z("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: f.rounded, radius: o.radius }]),
          style: w({ "--background": o.background }),
          ref_key: "sheet",
          ref: s
        }, [
          h(f.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), ot = /* @__PURE__ */ b(tt, [["__scopeId", "data-v-f44cd02e"]]), nt = { class: "t-input-label" }, st = { class: "t-input-content" }, rt = ["type", "placeholder", "value"], at = /* @__PURE__ */ T({
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
    variant: { default: "default" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = (a) => {
      e("update:modelValue", a.target.value);
    };
    return (a, l) => (c(), v("div", {
      class: x(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", nt, P(a.label), 1),
        k("div", st, [
          h(a.$slots, "start", {}, void 0, !0),
          k("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: s
          }, null, 40, rt),
          h(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (c(), E(K, {
        key: 0,
        color: "danger"
      }, {
        default: B(() => [
          L(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (c(), E(K, {
        key: 1,
        color: "secondary"
      }, {
        default: B(() => [
          L(P(o.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ b(at, [["__scopeId", "data-v-1a9425cf"]]), ct = {};
function it(t, n) {
  return c(), v("textarea");
}
const ut = /* @__PURE__ */ b(ct, [["render", it]]), dt = {};
function pt(t, n) {
  return c(), v("div");
}
const ft = /* @__PURE__ */ b(dt, [["render", pt]]), mt = {}, vt = { class: "t-grid" };
function _t(t, n) {
  return c(), v("div", vt);
}
const yt = /* @__PURE__ */ b(mt, [["render", _t]]), gt = {}, bt = { class: "t-grid-item" };
function ht(t, n) {
  return c(), v("div", bt);
}
const kt = /* @__PURE__ */ b(gt, [["render", ht]]), $t = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), v("div", {
      class: x(["t-divider", { [n.direction]: !0 }])
    }, null, 2));
  }
}), Tt = /* @__PURE__ */ b($t, [["__scopeId", "data-v-47ee8991"]]), wt = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = g(!1), a = g(), l = I(() => {
      let p = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (p = `var(--t-color-status-${o.color})`), {
        "--color": p
      };
    }), i = () => a.value?.parentElement?.querySelector?.("input");
    J(() => {
      let p = i();
      p && (s.value = p.type != "password", e("change", s.value));
    });
    const u = () => {
      let p = i();
      p && (s.value = !s.value, s.value ? p.type = "text" : p.type = "password", e("change", s.value));
    };
    return (p, _) => (c(), v("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: w(l.value),
      onClick: u
    }, [
      s.value ? h(p.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      s.value ? z("", !0) : h(p.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ b(wt, [["__scopeId", "data-v-3268e9e3"]]), It = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = I(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (e, s) => (c(), v("div", {
      class: x(["t-avatar", { square: e.square }]),
      style: w({ "--size": o.value })
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), St = /* @__PURE__ */ b(It, [["__scopeId", "data-v-24384c2f"]]), zt = { class: "t-collapse-title" }, Et = {
  key: 0,
  class: "icon"
}, Bt = {
  key: 1,
  class: "icon"
}, Ct = { class: "t-collapse-content" }, Pt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = g(!1), a = g(""), l = g(), i = () => {
      s.value = !s.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, e("change", s.value);
    };
    return e("change", s.value), (u, p) => (c(), v("div", {
      class: x(["t-collapse", { open: s.value }]),
      style: w({ "--height": a.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        h(u.$slots, "icon"),
        k("div", zt, [
          h(u.$slots, "title", {}, () => [
            L(P(o.title), 1)
          ])
        ]),
        h(u.$slots, "toggle", {}, () => [
          s.value ? (c(), v("div", Et, [...p[0] || (p[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), v("div", Bt, [...p[1] || (p[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Ct, [
        k("div", {
          ref_key: "content",
          ref: l
        }, [
          h(u.$slots, "content", {}, () => [
            h(u.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Dt = /* @__PURE__ */ T({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = () => {
      e("update:modelValue", !o.modelValue);
    }, a = I(() => {
      let l = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (l = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), l;
    });
    return (l, i) => (c(), v("div", {
      class: x(["t-switch", { on: o.modelValue }]),
      style: w(a.value),
      onClick: s
    }, [...i[0] || (i[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Rt = /* @__PURE__ */ b(Dt, [["__scopeId", "data-v-3616970e"]]), Vt = /* @__PURE__ */ T({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, o = ie("tabsState"), e = I(() => o.active.value === n.value), s = () => {
      o.setActive(n.value);
    };
    return (a, l) => (c(), v("li", {
      class: x(["t-tab", { active: e.value }])
    }, [
      M(G, {
        variant: "text",
        onClick: s,
        color: e.value && D(o).variant == "text" ? D(o).color : void 0
      }, {
        default: B(() => [
          h(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color"])
    ], 2));
  }
}), At = /* @__PURE__ */ b(Vt, [["__scopeId", "data-v-059bab6e"]]), Nt = /* @__PURE__ */ T({
  __name: "t-tabs",
  props: {
    placement: { default: "top-start" },
    variant: { default: "border-under" },
    color: { default: "primary" },
    modelValue: {},
    border: { default: 30 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = g("0px"), a = g(), l = I(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), i = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().left - a.value.getBoundingClientRect().left, _ = u.offsetWidth / 2;
            s.value = p + _ - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let p = u.getBoundingClientRect().top - a.value.getBoundingClientRect().top, _ = u.offsetHeight / 2;
            s.value = p + _ - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ue("tabsState", {
      active: I(() => o.modelValue),
      color: l.value,
      variant: o.variant,
      setActive: (u) => {
        e("update:modelValue", u), i();
      }
    }), J(() => {
      i();
    }), (u, p) => (c(), v("ul", {
      ref_key: "container",
      ref: a,
      class: x(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": l.value, "--transform": s.value, "--border": u.border + "px" })
    }, [
      h(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ot = /* @__PURE__ */ b(Nt, [["__scopeId", "data-v-2f040d31"]]), jt = () => ({
  install: (t) => {
    pe(), t.component("t-app", _e), t.component("t-screen", re), t.component("t-swipe-screen", Ge), t.component("t-cable", Ae), t.component("t-toolbar", Me), t.component("t-content", Le), t.component("t-card", Ne), t.component("t-refresher", Ye), t.component("t-button", G), t.component("t-back-button", Qe), t.component("t-present", W), t.component("t-text", K), t.component("t-sheet", ot), t.component("t-pull-signal", ae), t.component("t-input", lt), t.component("t-textarea", ut), t.component("t-rich-text", ft), t.component("t-grid", yt), t.component("t-grid-item", kt), t.component("t-divider", Tt), t.component("t-toggle-password", xt), t.component("t-loading-icon", Q), t.component("t-alert", ne), t.component("t-avatar", St), t.component("t-collapse", Pt), t.component("t-toast", se), t.component("t-switch", Rt), t.component("t-tab", At), t.component("t-tabs", Ot);
  }
});
export {
  X as blurCurrentActive,
  Yt as createAction,
  Wt as createAlert,
  Ht as createLoading,
  Ut as createToast,
  jt as createToife,
  q as isFormElement,
  Ee as presentController,
  $ as screenController,
  Re as useKeyboard
};
