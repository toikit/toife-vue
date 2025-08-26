import { createElementBlock as v, openBlock as c, renderSlot as b, defineComponent as T, ref as y, computed as S, reactive as te, watch as R, onUnmounted as N, Fragment as A, withDirectives as W, createCommentVNode as z, normalizeStyle as w, normalizeClass as I, vShow as Y, createElementVNode as k, createVNode as M, createBlock as E, withCtx as B, toDisplayString as P, renderList as H, createTextVNode as X, createApp as U, h as j, unref as D, onMounted as J, resolveDynamicComponent as le, markRaw as ce, inject as ie, provide as ue } from "vue";
import { gesture as V } from "@toife/gesture";
import { useRouter as oe, useRoute as de } from "vue-router";
const O = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), q = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, pe = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("selectstart", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !O(t.target) && q();
  });
}, g = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, r] of n)
    o[e] = r;
  return o;
}, fe = {}, me = { class: "t-app" };
function ve(t, n) {
  return c(), v("div", me, [
    b(t.$slots, "default")
  ]);
}
const _e = /* @__PURE__ */ g(fe, [["render", ve]]), ye = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = y(0), r = y(!1), a = y(), l = y(), i = t, u = o, d = S(() => r.value || i.keepalive), m = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), _ = (p) => {
      i.backdrop ? p?.backdropOpacity && (m["--t-present-backdrop-opacity"] = p.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", p?.transition && (m["--t-present-transition"] = p.transition, m["--t-present-transition"] = p.transition), p?.contentTransform && (m["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (m["--t-present-content-opacity"] = p.contentOpacity);
    }, s = () => {
      _({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, f = () => {
      let p = "0px", x = "1";
      i.placement == "bottom" || i.placement == "right" ? p = "100%" : i.placement == "top" || i.placement == "left" ? p = "-100%" : i.placement == "center" && (p = "0px", x = "0"), _({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: x,
        backdropOpacity: "0"
      });
    };
    R(() => i.visible, () => {
      i.visible ? (r.value = !0, e.value = Ee.getNewIndex(), setTimeout(() => {
        s();
      }, 50)) : (f(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), n({
      render: _,
      open: s,
      close: f
    });
    let h;
    return R(() => a.value, (p) => {
      p && (h = V(a.value, {
        beforeEvent(x) {
          return x.stopPropagation(), O(x.target) || (x.preventDefault(), q()), x.type == "pointerup";
        },
        up() {
          u("dismiss", "backdrop");
        }
      }));
    }), N(() => {
      h && h.destroy();
    }), f(), (p, x) => (c(), v(A, null, [
      d.value ? W((c(), v("div", {
        key: 0,
        class: I(["t-present", { [p.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: w({ ...m, zIndex: e.value })
      }, [
        b(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [Y, r.value]
      ]) : z("", !0),
      d.value ? W((c(), v("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: w({ ...m, zIndex: e.value - 1 })
      }, null, 4)), [
        [Y, r.value]
      ]) : z("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ g(ye, [["__scopeId", "data-v-dc2a4bc9"]]), ge = /* @__PURE__ */ T({
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
}), Q = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-7c463303"]]), be = {
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
    const n = t, o = S(() => {
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
    return (e, r) => (c(), v("button", {
      class: I(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0 }]),
      style: w(o.value)
    }, [
      W(k("span", null, [
        b(e.$slots, "default", {}, void 0, !0)
      ], 512), [
        [Y, !n.loading]
      ]),
      n.loading ? (c(), v("span", be, [
        M(Q, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), F = /* @__PURE__ */ g(he, [["__scopeId", "data-v-07bf1b8d"]]), ke = {
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
    const e = t, r = y(!1), a = o, l = y();
    let i;
    const u = y(!1), d = () => {
      r.value = !0;
    }, m = (s) => {
      r.value = !1, s.handler && s.handler(), a("dismiss", "choose", s?.data);
    }, _ = (s) => {
      e.dismiss && e.dismiss.includes(s) ? (r.value = !1, a("dismiss", s)) : s == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (s) => {
      s && (i = V(l.value, {
        beforeEvent(f) {
          return f.stopPropagation(), O(f.target) || (f.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (s, f) => (c(), E(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: _
    }, {
      default: B(() => [
        k("div", {
          class: I(["t-alert", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          b(s.$slots, "header", {}, () => [
            e.title ? (c(), v("div", ke, P(e.title), 1)) : z("", !0)
          ], !0),
          b(s.$slots, "content", {}, () => [
            k("div", $e, P(e.message), 1)
          ], !0),
          b(s.$slots, "footer", {}, () => [
            k("div", Te, [
              (c(!0), v(A, null, H(e.actions, (h) => (c(), E(F, {
                color: h.color,
                variant: h.variant,
                onClick: (p) => m(h)
              }, {
                default: B(() => [
                  X(P(h.text), 1)
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
}), ne = /* @__PURE__ */ g(we, [["__scopeId", "data-v-5cf415ec"]]), Wt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), r = y();
      o.appendChild(e);
      const a = U({
        render() {
          return j(ne, {
            ...t,
            ref: r,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        r.value?.open?.();
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
    const e = t, r = y(!1), a = o, l = y();
    let i;
    const u = y(!1), d = () => {
      r.value = !0;
    }, m = (s) => {
      r.value = !1, s.handler && s.handler(), a("dismiss", "choose", s?.data);
    }, _ = (s) => {
      e.dismiss && e.dismiss.includes(s) ? (r.value = !1, a("dismiss", s)) : s == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (s) => {
      s && (i = V(l.value, {
        beforeEvent(f) {
          return f.stopPropagation(), O(f.target) || (f.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (s, f) => (c(), E(L, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: _
    }, {
      default: B(() => [
        k("div", {
          class: I(["t-action", { pop: u.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), v(A, null, H(e.actions, (h) => (c(), v("div", null, [
            (c(!0), v(A, null, H(h, (p) => (c(), E(F, {
              color: p.color,
              size: p.size,
              variant: p.variant,
              onClick: (x) => m(p),
              block: ""
            }, {
              default: B(() => [
                X(P(p.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-73339adc"]]), Yt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), r = y();
      o.appendChild(e);
      const a = U({
        render() {
          return j(Ie, {
            ...t,
            ref: r,
            onDismiss: (l, i) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        r.value?.open?.();
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
    const e = t, r = y(!1), a = y();
    let l;
    return n({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), R(() => a.value, (d) => {
      d && (l = V(a.value, {
        beforeEvent(m) {
          return m.stopPropagation(), O(m.target) || (m.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      l && l.destroy();
    }), (d, m) => (c(), E(L, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: B(() => [
        k("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          b(d.$slots, "default", {}, () => [
            M(Q, {
              type: e.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), ze = /* @__PURE__ */ g(Se, [["__scopeId", "data-v-d048a41d"]]), Ht = (t = {}) => {
  const n = y(), o = document.body.querySelector(".t-app");
  let e = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        o && (r = document.createElement("div"), o.appendChild(r), e = U({
          render() {
            return j(ze, {
              ...t,
              ref: n
            });
          }
        }), e.mount(r), setTimeout(() => {
          n.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        n.value?.close?.(), setTimeout(() => {
          e?.unmount?.(), r?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, Z = y(1e3), Ee = {
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
  hasPrevious: S(() => C.length > 1),
  currentScreen: S(() => C[C.length - 1]),
  lastScreen: S(() => {
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
    const e = t, r = o, a = y(!1), l = y(!1), i = y(!1), u = () => {
      l.value = !0, i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        d();
      }, e.duration + 10);
    }, d = () => {
      i.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, r("dismiss");
      }, 300);
    }, m = S(() => {
      let _;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? _ = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + e.color + "-rgb), 0.6)"
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": e.color
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? _ = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : _ = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : _ = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? _ = {
        "--border": "0.55px solid var(--t-color-status-" + e.color + ")",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : _ = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : _ = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), _;
    });
    return n({
      open: u
    }), (_, s) => l.value ? (c(), v("div", {
      key: 0,
      class: I(["t-toast", { [e.placement]: !0, open: a.value, closing: i.value }]),
      style: w({ "--space": e.space, ...m.value })
    }, P(e.message), 7)) : z("", !0);
  }
}), re = /* @__PURE__ */ g(Pe, [["__scopeId", "data-v-98e8be37"]]), Ut = (t = {}) => ({
  open() {
    let n = document.body.querySelector(".t-app");
    if (!n) return;
    const o = document.createElement("div"), e = y();
    n.appendChild(o);
    const r = U({
      render() {
        return j(re, {
          ...t,
          ref: e,
          onDismiss: () => {
            setTimeout(() => {
              r.unmount(), o.remove();
            }, 300);
          }
        });
      }
    });
    r.mount(o), setTimeout(() => {
      e.value?.open?.();
    }, 50);
  }
}), De = y(0);
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
    return (e, r) => (c(), v("div", {
      class: I(["t-cable", { keyboard: n.keyboard && D(o) > 0, [n.placement]: !0 }]),
      style: w({ "--t-keyboard-height": D(o) + "px", "--t-keyboard-transition": D(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ae = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-ecb72421"]]), Ne = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(t) {
    const n = t, o = S(() => {
      let e;
      return n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? e = {
        "--background": "var(--t-color-status-" + n.color + ")"
      } : e = {
        "--background": n.color
      } : e = {
        "--background": "var(--t-color-surface)"
      }, e;
    });
    return (e, r) => (c(), v("div", {
      class: "t-card",
      style: w(o.value)
    }, [
      b(e.$slots, "default")
    ], 4));
  }
}), Oe = {}, qe = { class: "t-content" };
function Xe(t, n) {
  return c(), v("div", qe, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Le = /* @__PURE__ */ g(Oe, [["render", Xe], ["__scopeId", "data-v-9a833657"]]), ee = 80, We = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(t, { emit: n }) {
    const o = n, e = y(0), r = y(!1), a = y();
    let l, i = !1;
    const u = () => {
      r.value = !1, e.value = 0, l && l.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, d = () => {
      i = !0, r.value = !0, e.value = ee, o("refresh", u);
    };
    return R(() => a.value, () => {
      l && l.destroy();
      let m = a.value.closest(".t-content");
      m && (l = V(m, {
        options: {
          minDist: 60
        },
        move({ dy: _, e: s }) {
          r.value || i || _ < 0 || (_ >= 120 ? d() : (s.target.scrollTop === 0 && m.scrollTop === 0 && s.preventDefault(), e.value = _));
        },
        up({ dy: _, e: s }) {
          r.value || i || (_ > ee ? d() : e.value = 0);
        },
        cancel() {
          r.value = !1, e.value = 0;
        }
      }, {
        passive: !1
      }));
    }), N(() => {
      l && l.destroy();
    }), (m, _) => W((c(), v("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: w({ height: `${e.value}px` })
    }, [
      k("img", {
        class: I({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [Y, e.value > 0]
    ]);
  }
}), Ye = /* @__PURE__ */ g(We, [["__scopeId", "data-v-b93e9405"]]), He = {}, Ue = { class: "t-screen" };
function je(t, n) {
  return c(), v("div", Ue, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ g(He, [["render", je], ["__scopeId", "data-v-66ea8649"]]), Fe = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(t, { emit: n }) {
    let o = {};
    const e = oe(), r = de(), a = e.getRoutes(), l = y(!1), i = n;
    for (let s of a)
      o[s.name] = s.components;
    const u = (s) => {
      s && $.addScreen({
        name: s,
        target: null,
        component: ce(o[s] || null)
      });
    }, d = (s, f) => {
      !f || $.screens[s].target || ($.screens[s].target = f.$el, s > 0 && (l.value = !0, f.$el.style.transform = "translateX(100vw)", f.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        f.$el.style.transition = "transform 0.35s ease", f.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), i("change"), l.value = !1;
      }, 400);
    };
    u(r.name), R(() => r.name, (s, f) => {
      s != $.currentScreen.value.name && ($.lastScreen.value?.name == s ? m() : u(s));
    });
    const _ = () => {
      l.value = !0;
      const s = $.currentScreen.value.target, f = $.lastScreen.value.target;
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", f.style.transition = "transform 0.35s ease", f.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return J(() => {
      V(document, {
        pointerId: null,
        beforeEvent(s) {
          return l.value || $.screens.length < 2 ? !1 : (s.type == "pointerdown" && !this.pointerId && (this.pointerId = s.pointerId), this.pointerId == s.pointerId);
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          s == "right" && e.back();
        },
        move({ dx: s }) {
          const f = window.innerWidth, h = s / f * 100, p = $.currentScreen.value.target, x = $.lastScreen?.value?.target;
          if (s > 0 && s <= f) {
            p.style.transition = "transform 0s ease", p.style.transform = `translateX(${s}px)`, x.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), x.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${h}))) scale(${0.5 + 0.5 / 100 * h}) perspective(100vw) rotateY(${30 - 30 / 100 * h}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * h}`);
            return;
          }
        },
        up({ dx: s }) {
          const f = window.innerWidth;
          s / f * 100 >= 50 ? e.back() : _();
        },
        cancel() {
          _();
        }
      });
    }), (s, f) => (c(), v(A, null, [
      (c(!0), v(A, null, H(D($).screens, (h, p) => (c(), E(se, {
        ref_for: !0,
        ref: (x) => d(p, x),
        style: w({ zIndex: p + (p == D($).screens.length - 1 ? 2 : 1) }),
        key: p
      }, {
        default: B(() => [
          (c(), E(le(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: D($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ge = /* @__PURE__ */ g(Fe, [["__scopeId", "data-v-a048cc07"]]), Ke = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), v("div", {
      class: I(["t-toolbar", { [n.placement]: !0 }]),
      style: w({ "--t-size-toolbar": n.size })
    }, [
      k("div", null, [
        b(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Me = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-3b3a7896"]]), Je = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(t) {
    const n = oe(), o = t, e = () => {
      $.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (r, a) => r.to || D($).hasPrevious ? (c(), v("button", {
      key: 0,
      class: "t-back-button",
      onClick: e
    }, [
      b(r.$slots, "default", {}, () => [
        a[0] || (a[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Qe = /* @__PURE__ */ g(Je, [["__scopeId", "data-v-ed626a3d"]]), Ze = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = S(() => {
      let e, r = n.color;
      return n.size == "standard" ? e = "var(--t-fs-10)" : n.size == "small" ? e = "var(--t-fs-08)" : n.size == "large" ? e = "var(--t-fs-12)" : e = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (r = `var(--t-color-status-${n.color})`), {
        "--color": r,
        "--font-size": e
      };
    });
    return (e, r) => (c(), v("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), K = /* @__PURE__ */ g(Ze, [["__scopeId", "data-v-f0f94f05"]]), et = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (n, o) => (c(), v("div", {
      class: I(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ g(et, [["__scopeId", "data-v-daa38c85"]]), tt = /* @__PURE__ */ T({
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
    const o = t, e = n, r = y(), a = y(), l = y(!1);
    let i = null;
    const u = S(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), d = (_) => {
      e("dismiss", _);
    }, m = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return R(() => r.value, (_) => {
      _ && (i = V(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(s) {
          let f = !1, h = !1;
          return l.value || !o.gesture || o.placement == "center" ? f = !0 : this.pointerId ? (f = !0, h = this.pointerId == s.pointerId) : s.type == "pointerdown" && (this.pointerId = s.pointerId, f = !0, h = !0), f && (s.stopPropagation(), O(s.target) || (s.preventDefault(), q())), h;
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          m(), s == u.value ? e("dismiss", "gesture") : a.value.open();
        },
        move({ dy: s, dx: f, d: h }) {
          if (h != u.value) return;
          let p = 0;
          o.placement == "bottom" || o.placement == "top" ? p = s : p = f, a.value.render({
            contentTransform: p + "px",
            transition: "0s"
          });
        },
        up({ dy: s, dx: f, d: h }) {
          if (m(), h != u.value) {
            a.value.open();
            return;
          }
          let p, x, G;
          o.placement == "bottom" || o.placement == "top" ? (p = r.value.offsetHeight, G = s) : (p = r.value.offsetWidth, G = f), x = G / p * 100, x > 50 ? e("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          m(), a.value.open();
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (_, s) => (c(), E(L, {
      ref_key: "present",
      ref: a,
      placement: o.placement,
      backdrop: _.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: d
    }, {
      default: B(() => [
        o.gesture && o.placement != "center" ? (c(), E(ae, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : z("", !0),
        o.closeButton && o.placement == "center" ? (c(), v("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: s[0] || (s[0] = (f) => d("close-button"))
        }, [
          b(_.$slots, "close-icon", {}, () => [
            s[1] || (s[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : z("", !0),
        k("div", {
          class: I(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: _.rounded, radius: o.radius }]),
          style: w({ "--background": o.background }),
          ref_key: "sheet",
          ref: r
        }, [
          b(_.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), ot = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-14b7fc93"]]), nt = { class: "t-input-label" }, rt = { class: "t-input-content" }, st = ["type", "placeholder", "value"], at = /* @__PURE__ */ T({
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
    const o = t, e = n, r = (a) => {
      e("update:modelValue", a.target.value);
    };
    return (a, l) => (c(), v("div", {
      class: I(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", nt, P(a.label), 1),
        k("div", rt, [
          b(a.$slots, "start", {}, void 0, !0),
          k("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, st),
          b(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (c(), E(K, {
        key: 0,
        color: "danger"
      }, {
        default: B(() => [
          X(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (c(), E(K, {
        key: 1,
        color: "secondary"
      }, {
        default: B(() => [
          X(P(o.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ g(at, [["__scopeId", "data-v-1a9425cf"]]), ct = {};
function it(t, n) {
  return c(), v("textarea");
}
const ut = /* @__PURE__ */ g(ct, [["render", it]]), dt = {};
function pt(t, n) {
  return c(), v("div");
}
const ft = /* @__PURE__ */ g(dt, [["render", pt]]), mt = {}, vt = { class: "t-grid" };
function _t(t, n) {
  return c(), v("div", vt);
}
const yt = /* @__PURE__ */ g(mt, [["render", _t]]), gt = {}, bt = { class: "t-grid-item" };
function ht(t, n) {
  return c(), v("div", bt);
}
const kt = /* @__PURE__ */ g(gt, [["render", ht]]), $t = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (c(), v("div", {
      class: I(["t-divider", { [n.direction]: !0 }])
    }, null, 2));
  }
}), Tt = /* @__PURE__ */ g($t, [["__scopeId", "data-v-47ee8991"]]), wt = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, r = y(!1), a = y(), l = S(() => {
      let d = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = `var(--t-color-status-${o.color})`), {
        "--color": d
      };
    }), i = () => a.value?.parentElement?.querySelector?.("input");
    J(() => {
      let d = i();
      d && (r.value = d.type != "password", e("change", r.value));
    });
    const u = () => {
      let d = i();
      d && (r.value = !r.value, r.value ? d.type = "text" : d.type = "password", e("change", r.value));
    };
    return (d, m) => (c(), v("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: w(l.value),
      onClick: u
    }, [
      r.value ? b(d.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      r.value ? z("", !0) : b(d.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ g(wt, [["__scopeId", "data-v-3268e9e3"]]), It = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = S(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (e, r) => (c(), v("div", {
      class: I(["t-avatar", { square: e.square }]),
      style: w({ "--size": o.value })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), St = /* @__PURE__ */ g(It, [["__scopeId", "data-v-24384c2f"]]), zt = { class: "t-collapse-title" }, Et = {
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
    const o = t, e = n, r = y(!1), a = y(""), l = y(), i = () => {
      r.value = !r.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, e("change", r.value);
    };
    return e("change", r.value), (u, d) => (c(), v("div", {
      class: I(["t-collapse", { open: r.value }]),
      style: w({ "--height": a.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        b(u.$slots, "icon"),
        k("div", zt, [
          b(u.$slots, "title", {}, () => [
            X(P(o.title), 1)
          ])
        ]),
        b(u.$slots, "toggle", {}, () => [
          r.value ? (c(), v("div", Et, [...d[0] || (d[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), v("div", Bt, [...d[1] || (d[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Ct, [
        k("div", {
          ref_key: "content",
          ref: l
        }, [
          b(u.$slots, "content", {}, () => [
            b(u.$slots, "default")
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
    const o = t, e = n, r = () => {
      e("update:modelValue", !o.modelValue);
    }, a = S(() => {
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
      class: I(["t-switch", { on: o.modelValue }]),
      style: w(a.value),
      onClick: r
    }, [...i[0] || (i[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Rt = /* @__PURE__ */ g(Dt, [["__scopeId", "data-v-3616970e"]]), Vt = /* @__PURE__ */ T({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, o = ie("tabsState"), e = S(() => o.active.value === n.value), r = () => {
      o.setActive(n.value);
    };
    return (a, l) => (c(), v("li", {
      class: I(["t-tab", { active: e.value }])
    }, [
      M(F, {
        variant: "text",
        onClick: r,
        color: e.value && D(o).variant == "text" ? D(o).color : void 0
      }, {
        default: B(() => [
          b(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color"])
    ], 2));
  }
}), At = /* @__PURE__ */ g(Vt, [["__scopeId", "data-v-059bab6e"]]), Nt = /* @__PURE__ */ T({
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
    const o = t, e = n, r = y("0px"), a = y(), l = S(() => {
      let u = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(u) && (u = `var(--t-color-status-${u})`), u;
    }), i = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().left - a.value.getBoundingClientRect().left, m = u.offsetWidth / 2;
            r.value = d + m - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().top - a.value.getBoundingClientRect().top, m = u.offsetHeight / 2;
            r.value = d + m - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ue("tabsState", {
      active: S(() => o.modelValue),
      color: l.value,
      variant: o.variant,
      setActive: (u) => {
        e("update:modelValue", u), i();
      }
    }), J(() => {
      i();
    }), (u, d) => (c(), v("ul", {
      ref_key: "container",
      ref: a,
      class: I(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": l.value, "--transform": r.value, "--border": u.border + "px" })
    }, [
      b(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ot = /* @__PURE__ */ g(Nt, [["__scopeId", "data-v-2f040d31"]]), jt = () => ({
  install: (t) => {
    pe(), t.component("t-app", _e), t.component("t-screen", se), t.component("t-swipe-screen", Ge), t.component("t-cable", Ae), t.component("t-toolbar", Me), t.component("t-content", Le), t.component("t-card", Ne), t.component("t-refresher", Ye), t.component("t-button", F), t.component("t-back-button", Qe), t.component("t-present", L), t.component("t-text", K), t.component("t-sheet", ot), t.component("t-pull-signal", ae), t.component("t-input", lt), t.component("t-textarea", ut), t.component("t-rich-text", ft), t.component("t-grid", yt), t.component("t-grid-item", kt), t.component("t-divider", Tt), t.component("t-toggle-password", xt), t.component("t-loading-icon", Q), t.component("t-alert", ne), t.component("t-avatar", St), t.component("t-collapse", Pt), t.component("t-toast", re), t.component("t-switch", Rt), t.component("t-tab", At), t.component("t-tabs", Ot);
  }
});
export {
  q as blurCurrentActive,
  Yt as createAction,
  Wt as createAlert,
  Ht as createLoading,
  Ut as createToast,
  jt as createToife,
  O as isFormElement,
  Ee as presentController,
  $ as screenController,
  Re as useKeyboard
};
