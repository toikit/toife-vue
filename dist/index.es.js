import { createElementBlock as v, openBlock as u, renderSlot as h, defineComponent as $, ref as y, computed as I, reactive as te, watch as A, Fragment as R, withDirectives as Y, createCommentVNode as z, normalizeStyle as w, normalizeClass as x, vShow as H, createElementVNode as k, createVNode as j, onUnmounted as L, createBlock as B, withCtx as E, toDisplayString as P, renderList as U, createTextVNode as O, createApp as F, h as G, unref as V, onMounted as Q, resolveDynamicComponent as ce, markRaw as ie, inject as ue, provide as de } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as oe, useRoute as pe } from "vue-router";
const q = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), X = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, fe = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !q(o.target) && X();
  });
}, b = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, me = {}, ve = { class: "t-app" };
function _e(o, s) {
  return u(), v("div", ve, [
    h(o.$slots, "default")
  ]);
}
const ye = /* @__PURE__ */ b(me, [["render", _e]]), ge = /* @__PURE__ */ $({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = y(0), n = y(!1), r = y(), i = y(), a = o, d = e, p = I(() => n.value || a.keepalive), f = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), _ = (m) => {
      a.backdrop ? m?.backdropOpacity && (f["--t-present-backdrop-opacity"] = m.backdropOpacity) : f["--t-present-backdrop-opacity"] = "0", m?.transition && (f["--t-present-transition"] = m.transition, f["--t-present-transition"] = m.transition), m?.contentTransform && (f["--t-present-content-transform"] = m.contentTransform), m?.contentOpacity && (f["--t-present-content-opacity"] = m.contentOpacity);
    }, c = () => {
      _({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, l = () => {
      let m = "0px", S = "1";
      a.placement == "bottom" || a.placement == "right" ? m = "100%" : a.placement == "top" || a.placement == "left" ? m = "-100%" : a.placement == "center" && (m = "0px", S = "0"), _({
        contentTransform: m,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    A(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Ce.getNewIndex(), setTimeout(() => {
        c();
      }, 50)) : (l(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: _,
      open: c,
      close: l
    });
    const g = (m) => {
      m.preventDefault(), d("dismiss", "backdrop");
    };
    return l(), (m, S) => (u(), v(R, null, [
      p.value ? Y((u(), v("div", {
        key: 0,
        class: x(["t-present", { [m.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: w({ ...f, zIndex: t.value })
      }, [
        h(m.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, n.value]
      ]) : z("", !0),
      p.value ? Y((u(), v("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: g,
        ref_key: "backdrop",
        ref: r,
        style: w({ ...f, zIndex: t.value - 1 })
      }, null, 4)), [
        [H, n.value]
      ]) : z("", !0)
    ], 64));
  }
}), W = /* @__PURE__ */ b(ge, [["__scopeId", "data-v-3d0c3227"]]), be = /* @__PURE__ */ $({
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
  setup(o) {
    return (s, e) => (u(), v("span", {
      class: "t-loading-icon",
      style: w({
        width: o.size,
        height: o.size,
        borderTopColor: o.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ b(be, [["__scopeId", "data-v-7c463303"]]), he = {
  key: 0,
  class: "loader"
}, ke = /* @__PURE__ */ $({
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
  setup(o) {
    const s = o, e = I(() => {
      let t;
      return s.variant == "default" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + "-text)",
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": s.color
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
      }), s.variant == "text" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "none",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": s.color,
        "--background": "transparent"
      } : t = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), s.variant == "outline" && (s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--border": "0.55px solid var(--t-color-status-" + s.color + ")",
        "--color": "var(--t-color-status-" + s.color + ")",
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid " + s.color,
        "--color": s.color,
        "--background": "transparent"
      } : t = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t;
    });
    return (t, n) => (u(), v("button", {
      class: x(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: w(e.value)
    }, [
      Y(k("span", null, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !s.loading]
      ]),
      s.loading ? (u(), v("span", he, [
        j(K, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ b(ke, [["__scopeId", "data-v-74d8380d"]]), $e = {
  key: 0,
  class: "t-alert-header"
}, Te = { class: "t-alert-content" }, we = { class: "t-alert-footer" }, xe = /* @__PURE__ */ $({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1), r = e, i = y();
    let a;
    const d = y(!1), p = () => {
      n.value = !0;
    }, f = (c) => {
      n.value = !1, c.handler && c.handler(), r("dismiss", "choose", c?.data);
    }, _ = (c) => {
      t.dismiss && t.dismiss.includes(c) ? (n.value = !1, r("dismiss", c)) : c == "backdrop" && (d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300));
    };
    return s({
      open: p
    }), A(() => i.value, (c) => {
      c && (a = N(i.value, {
        beforeEvent(l) {
          return l.stopPropagation(), q(l.target) || (l.preventDefault(), X()), !1;
        }
      }));
    }), L(() => {
      a && a.destroy();
    }), (c, l) => (u(), B(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: E(() => [
        k("div", {
          class: x(["t-alert", { pop: d.value }]),
          ref_key: "container",
          ref: i
        }, [
          h(c.$slots, "header", {}, () => [
            t.title ? (u(), v("div", $e, P(t.title), 1)) : z("", !0)
          ], !0),
          h(c.$slots, "content", {}, () => [
            k("div", Te, P(t.message), 1)
          ], !0),
          h(c.$slots, "footer", {}, () => [
            k("div", we, [
              (u(!0), v(R, null, U(t.actions, (g) => (u(), B(M, {
                color: g.color,
                variant: g.variant,
                onClick: (m) => f(g)
              }, {
                default: E(() => [
                  O(P(g.text), 1)
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
}), se = /* @__PURE__ */ b(xe, [["__scopeId", "data-v-5cf415ec"]]), Kt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = y();
      e.appendChild(t);
      const r = F({
        render() {
          return G(se, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s(a);
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ie = /* @__PURE__ */ $({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1), r = e, i = y();
    let a;
    const d = y(!1), p = () => {
      n.value = !0;
    }, f = (c) => {
      n.value = !1, c.handler && c.handler(), r("dismiss", "choose", c?.data);
    }, _ = (c) => {
      t.dismiss && t.dismiss.includes(c) ? (n.value = !1, r("dismiss", c)) : c == "backdrop" && (d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300));
    };
    return s({
      open: p
    }), A(() => i.value, (c) => {
      c && (a = N(i.value, {
        beforeEvent(l) {
          return l.stopPropagation(), q(l.target) || (l.preventDefault(), X()), !1;
        }
      }));
    }), L(() => {
      a && a.destroy();
    }), (c, l) => (u(), B(W, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: E(() => [
        k("div", {
          class: x(["t-action", { pop: d.value }]),
          ref_key: "container",
          ref: i
        }, [
          (u(!0), v(R, null, U(t.actions, (g) => (u(), v("div", null, [
            (u(!0), v(R, null, U(g, (m) => (u(), B(M, {
              color: m.color,
              size: m.size,
              variant: m.variant,
              onClick: (S) => f(m),
              block: ""
            }, {
              default: E(() => [
                O(P(m.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Se = /* @__PURE__ */ b(Ie, [["__scopeId", "data-v-a87baaae"]]), Mt = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = y();
      e.appendChild(t);
      const r = F({
        render() {
          return G(Se, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s(a);
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), ze = /* @__PURE__ */ $({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = y(!1), r = y();
    let i;
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), A(() => r.value, (p) => {
      p && (i = N(r.value, {
        beforeEvent(f) {
          return f.stopPropagation(), q(f.target) || (f.preventDefault(), X()), !1;
        }
      }));
    }), L(() => {
      i && i.destroy();
    }), (p, f) => (u(), B(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: E(() => [
        k("div", {
          class: "t-loading",
          ref_key: "container",
          ref: r
        }, [
          h(p.$slots, "default", {}, () => [
            j(K, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Be = /* @__PURE__ */ b(ze, [["__scopeId", "data-v-d048a41d"]]), Jt = (o = {}) => {
  const s = y(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = F({
          render() {
            return G(Be, {
              ...o,
              ref: s
            });
          }
        }), t.mount(n), setTimeout(() => {
          s.value?.open?.(), r(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((r) => {
        s.value?.close?.(), setTimeout(() => {
          t?.unmount?.(), n?.remove?.(), r(!0);
        }, 300);
      });
    }
  };
}, Z = y(1e3), Ce = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, C = te([]), Ee = (o) => {
  C.push(o);
}, Pe = (o) => {
  o || C.pop();
}, Ve = () => {
  C.splice(0, C.length);
}, T = {
  screens: C,
  addScreen: Ee,
  removeScreen: Pe,
  removeAllScreen: Ve,
  hasPrevious: I(() => C.length > 1),
  currentScreen: I(() => C[C.length - 1]),
  lastScreen: I(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, De = /* @__PURE__ */ $({
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
  setup(o, { expose: s, emit: e }) {
    const t = o, n = e, r = y(!1), i = y(!1), a = y(!1), d = () => {
      i.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, t.duration + 10);
    }, p = () => {
      a.value = !0, setTimeout(() => {
        i.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, f = I(() => {
      let _;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? _ = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 0.6)"
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? _ = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : _ = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? _ = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : _ = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : _ = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), _;
    });
    return s({
      open: d
    }), (_, c) => i.value ? (u(), v("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ...f.value })
    }, P(t.message), 7)) : z("", !0);
  }
}), ne = /* @__PURE__ */ b(De, [["__scopeId", "data-v-61960e03"]]), Qt = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = y();
    s.appendChild(e);
    const n = F({
      render() {
        return G(ne, {
          ...o,
          ref: t,
          onDismiss: () => {
            setTimeout(() => {
              n.unmount(), e.remove();
            }, 300);
          }
        });
      }
    });
    n.mount(e), setTimeout(() => {
      t.value?.open?.();
    }, 50);
  }
}), Ae = y(0);
function Re() {
  return {
    height: Ae
  };
}
const Le = /* @__PURE__ */ $({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = Re();
    return (t, n) => (u(), v("div", {
      class: x(["t-cable", { keyboard: s.keyboard && V(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": V(e) + "px", "--t-keyboard-transition": V(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ne = /* @__PURE__ */ b(Le, [["__scopeId", "data-v-ecb72421"]]), Oe = /* @__PURE__ */ $({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = I(() => {
      let t;
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--background": s.color
      } : t = {
        "--background": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (u(), v("div", {
      class: "t-card",
      style: w(e.value)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), qe = {}, Xe = { class: "t-content" };
function We(o, s) {
  return u(), v("div", Xe, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ b(qe, [["render", We], ["__scopeId", "data-v-d58accf4"]]), ee = 80, Ye = /* @__PURE__ */ $({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = y(0), n = y(!1), r = y();
    let i, a = !1;
    const d = () => {
      n.value = !1, t.value = 0, i && i.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, p = () => {
      a = !0, n.value = !0, t.value = ee, e("refresh", d);
    };
    return A(() => r.value, () => {
      i && i.destroy();
      let f = r.value.closest(".t-content");
      f && (i = N(f, {
        options: {
          minDist: 60
        },
        move({ dy: _, e: c }) {
          n.value || a || _ < 0 || (_ > 5 && f.scrollTop == 0 && (c.preventDefault(), f.classList.add("scroll-hidden")), _ >= 120 ? p() : _ > 10 && (t.value = _));
        },
        up({ dy: _, e: c }) {
          f.classList.remove("scroll-hidden"), !(n.value || a) && (_ > ee ? p() : t.value = 0);
        },
        cancel() {
          f.classList.remove("scroll-hidden"), !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), L(() => {
      i && i.destroy();
    }), (f, _) => Y((u(), v("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: w({ height: `${t.value}px` })
    }, [
      k("img", {
        class: x({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, t.value > 0]
    ]);
  }
}), He = /* @__PURE__ */ b(Ye, [["__scopeId", "data-v-ac2b2370"]]), Ue = {}, je = { class: "t-screen" };
function Fe(o, s) {
  return u(), v("div", je, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ b(Ue, [["render", Fe], ["__scopeId", "data-v-c2a3436c"]]), Ge = /* @__PURE__ */ $({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = oe(), n = pe(), r = t.getRoutes(), i = y(!1), a = s;
    for (let l of r)
      e[l.name] = l.components;
    const d = (l) => {
      l && T.addScreen({
        name: l,
        target: null,
        component: ie(e[l] || null)
      });
    }, p = (l, g) => {
      !g || T.screens[l].target || (T.screens[l].target = g.$el, l > 0 && (i.value = !0, g.$el.style.transform = "translateX(var(--t-app-width))", g.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        g.$el.style.transition = "transform 0.35s ease", g.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), T.screens.length > 1 && (T.lastScreen.value.target.style.transitionOrigin = "left center", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, f = () => {
      T.currentScreen.value.target.style.transition = "transform 0.35s ease", T.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        T.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    d(n.name), A(() => n.name, (l, g) => {
      l != T.currentScreen.value.name && (T.lastScreen.value?.name == l ? f() : d(l));
    });
    const _ = () => {
      i.value = !0;
      const l = T.currentScreen.value.target, g = T.lastScreen.value.target;
      l.style.transition = "transform 0.35s ease", l.style.transform = "translateX(0px)", g.style.transition = "transform 0.35s ease", g.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let c;
    return Q(() => {
      c = N(document, {
        pointerId: null,
        beforeEvent(l) {
          return i.value || T.screens.length < 2 ? !1 : (l.type == "pointerdown" && !this.pointerId && (this.pointerId = l.pointerId), this.pointerId == l.pointerId);
        },
        afterEvent(l) {
          (l.type == "pointerup" || l.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: l }) {
          l == "right" && t.back();
        },
        move({ dx: l }) {
          const g = window.innerWidth, m = l / g * 100, S = T.currentScreen.value.target, D = T.lastScreen?.value?.target;
          if (l > 15 && l <= g) {
            S.style.transition = "transform 0s ease", S.style.transform = `translateX(${l}px)`, D.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), D.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${m}))) scale(${0.5 + 0.5 / 100 * m}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * m}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * m}`);
            return;
          }
        },
        up({ dx: l }) {
          const g = window.innerWidth;
          l / g * 100 >= 50 ? t.back() : _();
        },
        cancel() {
          _();
        }
      });
    }), L(() => {
      c && c.destroy(), T.removeAllScreen();
    }), (l, g) => (u(), v(R, null, [
      (u(!0), v(R, null, U(V(T).screens, (m, S) => (u(), B(ae, {
        ref_for: !0,
        ref: (D) => p(S, D),
        style: w({ zIndex: S + (S == V(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: E(() => [
          (u(), B(ce(m.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: V(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ke = /* @__PURE__ */ b(Ge, [["__scopeId", "data-v-ae7abe9c"]]), Me = /* @__PURE__ */ $({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (u(), v("div", {
      class: x(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: w({ "--t-size-toolbar": s.size })
    }, [
      k("div", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Je = /* @__PURE__ */ b(Me, [["__scopeId", "data-v-db1924b1"]]), Qe = /* @__PURE__ */ $({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = oe(), e = o, t = () => {
      T.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || V(T).hasPrevious ? (u(), v("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(n.$slots, "default", {}, () => [
        r[0] || (r[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Ze = /* @__PURE__ */ b(Qe, [["__scopeId", "data-v-ed626a3d"]]), et = /* @__PURE__ */ $({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = I(() => {
      let t, n = s.color;
      return s.size == "standard" ? t = "var(--t-fs-10)" : s.size == "small" ? t = "var(--t-fs-08)" : s.size == "large" ? t = "var(--t-fs-12)" : t = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": t
      };
    });
    return (t, n) => (u(), v("span", {
      class: "t-text",
      style: w(e.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), J = /* @__PURE__ */ b(et, [["__scopeId", "data-v-f0f94f05"]]), tt = /* @__PURE__ */ $({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (u(), v("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), le = /* @__PURE__ */ b(tt, [["__scopeId", "data-v-daa38c85"]]), ot = /* @__PURE__ */ $({
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
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(), r = y(), i = y(!1);
    let a = null;
    const d = I(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), p = (_) => {
      t("dismiss", _);
    }, f = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return A(() => n.value, (_) => {
      _ && (a = N(n.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(c) {
          let l = !1, g = !1;
          return i.value || !e.gesture || e.placement == "center" ? l = !0 : this.pointerId ? (l = !0, g = this.pointerId == c.pointerId) : c.type == "pointerdown" && (this.pointerId = c.pointerId, l = !0, g = !0), l && (c.stopPropagation(), q(c.target) || (c.preventDefault(), X())), g;
        },
        afterEvent(c) {
          (c.type == "pointerup" || c.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: c }) {
          f(), c == d.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ dy: c, dx: l, d: g }) {
          if (g != d.value) return;
          let m = 0;
          e.placement == "bottom" || e.placement == "top" ? m = c : m = l, r.value.render({
            contentTransform: m + "px",
            transition: "0s"
          });
        },
        up({ dy: c, dx: l, d: g }) {
          if (f(), g != d.value) {
            r.value.open();
            return;
          }
          let m, S, D;
          e.placement == "bottom" || e.placement == "top" ? (m = n.value.offsetHeight, D = c) : (m = n.value.offsetWidth, D = l), S = D / m * 100, S > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          f(), r.value.open();
        }
      }));
    }), L(() => {
      a && a.destroy();
    }), (_, c) => (u(), B(W, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: _.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: p
    }, {
      default: E(() => [
        e.gesture && e.placement != "center" ? (u(), B(le, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : z("", !0),
        e.closeButton && e.placement == "center" ? (u(), v("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: c[0] || (c[0] = (l) => p("close-button"))
        }, [
          h(_.$slots, "close-icon", {}, () => [
            c[1] || (c[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : z("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: _.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          h(_.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), st = /* @__PURE__ */ b(ot, [["__scopeId", "data-v-e2e8445e"]]), nt = { class: "t-input-label" }, rt = { class: "t-input-content" }, at = ["type", "placeholder", "value"], lt = /* @__PURE__ */ $({
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
  setup(o, { emit: s }) {
    const e = o, t = s, n = (r) => {
      t("update:modelValue", r.target.value);
    };
    return (r, i) => (u(), v("div", {
      class: x(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", nt, P(r.label), 1),
        k("div", rt, [
          h(r.$slots, "start", {}, void 0, !0),
          k("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, at),
          h(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (u(), B(J, {
        key: 0,
        color: "danger"
      }, {
        default: E(() => [
          O(P(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (u(), B(J, {
        key: 1,
        color: "secondary"
      }, {
        default: E(() => [
          O(P(e.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ b(lt, [["__scopeId", "data-v-1a9425cf"]]), it = {};
function ut(o, s) {
  return u(), v("textarea");
}
const dt = /* @__PURE__ */ b(it, [["render", ut]]), pt = {};
function ft(o, s) {
  return u(), v("div");
}
const mt = /* @__PURE__ */ b(pt, [["render", ft]]), vt = {}, _t = { class: "t-grid" };
function yt(o, s) {
  return u(), v("div", _t);
}
const gt = /* @__PURE__ */ b(vt, [["render", yt]]), bt = {}, ht = { class: "t-grid-item" };
function kt(o, s) {
  return u(), v("div", ht);
}
const $t = /* @__PURE__ */ b(bt, [["render", kt]]), Tt = /* @__PURE__ */ $({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (u(), v("div", {
      class: x(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), wt = /* @__PURE__ */ b(Tt, [["__scopeId", "data-v-47ee8991"]]), xt = /* @__PURE__ */ $({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(!1), r = y(), i = I(() => {
      let p = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (p = `var(--t-color-status-${e.color})`), {
        "--color": p
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    Q(() => {
      let p = a();
      p && (n.value = p.type != "password", t("change", n.value));
    });
    const d = () => {
      let p = a();
      p && (n.value = !n.value, n.value ? p.type = "text" : p.type = "password", t("change", n.value));
    };
    return (p, f) => (u(), v("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(i.value),
      onClick: d
    }, [
      n.value ? h(p.$slots, "on", { key: 0 }, () => [
        f[0] || (f[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      n.value ? z("", !0) : h(p.$slots, "off", { key: 1 }, () => [
        f[1] || (f[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), It = /* @__PURE__ */ b(xt, [["__scopeId", "data-v-3268e9e3"]]), St = /* @__PURE__ */ $({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = I(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (u(), v("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), zt = /* @__PURE__ */ b(St, [["__scopeId", "data-v-24384c2f"]]), Bt = { class: "t-collapse-title" }, Ct = {
  key: 0,
  class: "icon"
}, Et = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, Vt = /* @__PURE__ */ $({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y(!1), r = y(""), i = y(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (d, p) => (u(), v("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: w({ "--height": r.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        h(d.$slots, "icon"),
        k("div", Bt, [
          h(d.$slots, "title", {}, () => [
            O(P(e.title), 1)
          ])
        ]),
        h(d.$slots, "toggle", {}, () => [
          n.value ? (u(), v("div", Ct, [...p[0] || (p[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (u(), v("div", Et, [...p[1] || (p[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Pt, [
        k("div", {
          ref_key: "content",
          ref: i
        }, [
          h(d.$slots, "content", {}, () => [
            h(d.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Dt = /* @__PURE__ */ $({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = I(() => {
      let i = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (i = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), i;
    });
    return (i, a) => (u(), v("div", {
      class: x(["t-switch", { on: e.modelValue }]),
      style: w(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), At = /* @__PURE__ */ b(Dt, [["__scopeId", "data-v-3616970e"]]), Rt = /* @__PURE__ */ $({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = ue("tabsState"), t = I(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (u(), v("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      j(M, {
        variant: "text",
        onClick: n,
        size: V(e).size,
        color: t.value && V(e).variant == "text" ? V(e).color : void 0
      }, {
        default: E(() => [
          h(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Lt = /* @__PURE__ */ b(Rt, [["__scopeId", "data-v-36c12a50"]]), Nt = /* @__PURE__ */ $({
  __name: "t-tabs",
  props: {
    placement: { default: "top-start" },
    variant: { default: "border-under" },
    color: { default: "primary" },
    modelValue: {},
    border: { default: 30 },
    size: { default: "standard" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = y("0px"), r = y(), i = I(() => {
      let d = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(d) && (d = `var(--t-color-status-${d})`), d;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let p = d.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, f = d.offsetWidth / 2;
            n.value = p + f - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let p = d.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, f = d.offsetHeight / 2;
            n.value = p + f - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return de("tabsState", {
      active: I(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (d) => {
        t("update:modelValue", d), a();
      }
    }), Q(() => {
      a();
    }), (d, p) => (u(), v("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [d.placement]: !0, [d.variant]: !0 }]),
      style: w({ "--color": i.value, "--transform": n.value, "--border": d.border + "px" })
    }, [
      h(d.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ot = /* @__PURE__ */ b(Nt, [["__scopeId", "data-v-65a2c74c"]]), qt = /* @__PURE__ */ $({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (u(), B(re, null, {
      default: E(() => [
        j(K, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Xt = /* @__PURE__ */ b(qt, [["__scopeId", "data-v-1436aa9f"]]), Wt = { key: 0 }, Yt = {
  key: 0,
  class: "t-checkbox-label"
}, Ht = /* @__PURE__ */ $({
  __name: "t-checkbox",
  props: {
    label: { default: "" },
    modelValue: { default: !1 },
    variant: {},
    type: { default: "check" },
    multiple: { type: Boolean, default: !1 },
    value: { default: !0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = I(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = I(() => e.multiple ? e.modelValue.includes(e.value) : !!e.modelValue), i = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else
        t("update:modelValue", !e.modelValue);
    };
    return (a, d) => (u(), v("div", {
      class: x(["t-checkbox", { active: r.value }]),
      style: w(n.value),
      onClick: i
    }, [
      k("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (u(), v("div", Wt)) : z("", !0),
        a.type == "check" ? h(a.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : z("", !0)
      ], 2),
      a.label ? (u(), v("span", Yt, P(e.label), 1)) : z("", !0)
    ], 6));
  }
}), Ut = /* @__PURE__ */ b(Ht, [["__scopeId", "data-v-1037f061"]]), Zt = () => ({
  install: (o) => {
    fe(), o.component("t-app", ye), o.component("t-screen", ae), o.component("t-swipe-screen", Ke), o.component("t-cable", Ne), o.component("t-toolbar", Je), o.component("t-content", re), o.component("t-card", Oe), o.component("t-refresher", He), o.component("t-button", M), o.component("t-back-button", Ze), o.component("t-present", W), o.component("t-text", J), o.component("t-sheet", st), o.component("t-pull-signal", le), o.component("t-input", ct), o.component("t-textarea", dt), o.component("t-rich-text", mt), o.component("t-grid", gt), o.component("t-grid-item", $t), o.component("t-divider", wt), o.component("t-toggle-password", It), o.component("t-loading-icon", K), o.component("t-alert", se), o.component("t-avatar", zt), o.component("t-collapse", Vt), o.component("t-toast", ne), o.component("t-switch", At), o.component("t-tab", Lt), o.component("t-tabs", Ot), o.component("t-loading-app", Xt), o.component("t-checkbox", Ut);
  }
});
export {
  X as blurCurrentActive,
  Mt as createAction,
  Kt as createAlert,
  Jt as createLoading,
  Qt as createToast,
  Zt as createToife,
  q as isFormElement,
  Ce as presentController,
  T as screenController,
  Re as useKeyboard
};
