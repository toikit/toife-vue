import { createElementBlock as m, openBlock as i, renderSlot as b, defineComponent as T, ref as y, computed as S, reactive as te, watch as R, onUnmounted as N, Fragment as A, withDirectives as W, createCommentVNode as z, normalizeStyle as w, normalizeClass as I, vShow as Y, createElementVNode as k, createVNode as K, createBlock as E, withCtx as B, toDisplayString as P, renderList as H, createTextVNode as X, createApp as U, h as j, unref as D, onMounted as M, resolveDynamicComponent as le, markRaw as ce, inject as ie, resolveComponent as ue, provide as de } from "vue";
import { gesture as V } from "@toife/gesture";
import { useRouter as oe, useRoute as pe } from "vue-router";
const O = (t) => t && (t.tagName == "INPUT" || t.tagName == "TEXTAREA" || t.isContentEditable), q = () => {
  const t = document.activeElement;
  t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) && t.blur();
}, fe = () => {
  document.addEventListener("contextmenu", (t) => t.preventDefault()), document.addEventListener("selectstart", (t) => t.preventDefault()), document.addEventListener("pointerup", (t) => {
    !O(t.target) && q();
  });
}, g = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, r] of n)
    o[e] = r;
  return o;
}, me = {}, ve = { class: "t-app" };
function _e(t, n) {
  return i(), m("div", ve, [
    b(t.$slots, "default")
  ]);
}
const ye = /* @__PURE__ */ g(me, [["render", _e]]), ge = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = y(0), r = y(!1), a = y(), l = y(), c = t, u = o, d = S(() => r.value || c.keepalive), v = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), _ = (p) => {
      c.backdrop ? p?.backdropOpacity && (v["--t-present-backdrop-opacity"] = p.backdropOpacity) : v["--t-present-backdrop-opacity"] = "0", p?.transition && (v["--t-present-transition"] = p.transition, v["--t-present-transition"] = p.transition), p?.contentTransform && (v["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (v["--t-present-content-opacity"] = p.contentOpacity);
    }, s = () => {
      _({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, f = () => {
      let p = "0px", x = "1";
      c.placement == "bottom" || c.placement == "right" ? p = "100%" : c.placement == "top" || c.placement == "left" ? p = "-100%" : c.placement == "center" && (p = "0px", x = "0"), _({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: x,
        backdropOpacity: "0"
      });
    };
    R(() => c.visible, () => {
      c.visible ? (r.value = !0, e.value = Be.getNewIndex(), setTimeout(() => {
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
    }), f(), (p, x) => (i(), m(A, null, [
      d.value ? W((i(), m("div", {
        key: 0,
        class: I(["t-present", { [p.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: w({ ...v, zIndex: e.value })
      }, [
        b(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [Y, r.value]
      ]) : z("", !0),
      d.value ? W((i(), m("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: w({ ...v, zIndex: e.value - 1 })
      }, null, 4)), [
        [Y, r.value]
      ]) : z("", !0)
    ], 64));
  }
}), L = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-dc2a4bc9"]]), be = /* @__PURE__ */ T({
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
    return (n, o) => (i(), m("span", {
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
}), J = /* @__PURE__ */ g(be, [["__scopeId", "data-v-7c463303"]]), he = {
  key: 0,
  class: "loader"
}, ke = /* @__PURE__ */ T({
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
    return (e, r) => (i(), m("button", {
      class: I(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0 }]),
      style: w(o.value)
    }, [
      W(k("span", null, [
        b(e.$slots, "default", {}, void 0, !0)
      ], 512), [
        [Y, !n.loading]
      ]),
      n.loading ? (i(), m("span", he, [
        K(J, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), Q = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-07bf1b8d"]]), $e = {
  key: 0,
  class: "t-alert-header"
}, Te = { class: "t-alert-content" }, we = { class: "t-alert-footer" }, xe = /* @__PURE__ */ T({
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
    let c;
    const u = y(!1), d = () => {
      r.value = !0;
    }, v = (s) => {
      r.value = !1, s.handler && s.handler(), a("dismiss", "choose", s?.data);
    }, _ = (s) => {
      e.dismiss && e.dismiss.includes(s) ? (r.value = !1, a("dismiss", s)) : s == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (s) => {
      s && (c = V(l.value, {
        beforeEvent(f) {
          return f.stopPropagation(), O(f.target) || (f.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      c && c.destroy();
    }), (s, f) => (i(), E(L, {
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
            e.title ? (i(), m("div", $e, P(e.title), 1)) : z("", !0)
          ], !0),
          b(s.$slots, "content", {}, () => [
            k("div", Te, P(e.message), 1)
          ], !0),
          b(s.$slots, "footer", {}, () => [
            k("div", we, [
              (i(!0), m(A, null, H(e.actions, (h) => (i(), E(Q, {
                color: h.color,
                variant: h.variant,
                onClick: (p) => v(h)
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
}), ne = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-5cf415ec"]]), Yt = (t = {}) => ({
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
            onDismiss: (l, c) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(c);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Ie = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(t, { expose: n, emit: o }) {
    const e = t, r = y(!1), a = o, l = y();
    let c;
    const u = y(!1), d = () => {
      r.value = !0;
    }, v = (s) => {
      r.value = !1, s.handler && s.handler(), a("dismiss", "choose", s?.data);
    }, _ = (s) => {
      e.dismiss && e.dismiss.includes(s) ? (r.value = !1, a("dismiss", s)) : s == "backdrop" && (u.value = !0, setTimeout(() => {
        u.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), R(() => l.value, (s) => {
      s && (c = V(l.value, {
        beforeEvent(f) {
          return f.stopPropagation(), O(f.target) || (f.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      c && c.destroy();
    }), (s, f) => (i(), E(L, {
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
          (i(!0), m(A, null, H(e.actions, (h) => (i(), m("div", null, [
            (i(!0), m(A, null, H(h, (p) => (i(), E(Q, {
              color: p.color,
              size: p.size,
              variant: p.variant,
              onClick: (x) => v(p),
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
}), Se = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-73339adc"]]), Ht = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), r = y();
      o.appendChild(e);
      const a = U({
        render() {
          return j(Se, {
            ...t,
            ref: r,
            onDismiss: (l, c) => {
              setTimeout(() => {
                a.unmount(), e.remove();
              }, 300), n(c);
            }
          });
        }
      });
      a.mount(e), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), ze = /* @__PURE__ */ T({
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
        beforeEvent(v) {
          return v.stopPropagation(), O(v.target) || (v.preventDefault(), q()), !1;
        }
      }));
    }), N(() => {
      l && l.destroy();
    }), (d, v) => (i(), E(L, {
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
            K(J, {
              type: e.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ee = /* @__PURE__ */ g(ze, [["__scopeId", "data-v-d048a41d"]]), Ut = (t = {}) => {
  const n = y(), o = document.body.querySelector(".t-app");
  let e = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        o && (r = document.createElement("div"), o.appendChild(r), e = U({
          render() {
            return j(Ee, {
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
}, Z = y(1e3), Be = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, C = te([]), Ce = (t) => {
  C.push(t);
}, Pe = (t) => {
  t || C.pop();
}, $ = {
  screens: C,
  addScreen: Ce,
  removeScreen: Pe,
  hasPrevious: S(() => C.length > 1),
  currentScreen: S(() => C[C.length - 1]),
  lastScreen: S(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, De = /* @__PURE__ */ T({
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
    const e = t, r = o, a = y(!1), l = y(!1), c = y(!1), u = () => {
      l.value = !0, c.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        d();
      }, e.duration + 10);
    }, d = () => {
      c.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, r("dismiss");
      }, 300);
    }, v = S(() => {
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
    }), (_, s) => l.value ? (i(), m("div", {
      key: 0,
      class: I(["t-toast", { [e.placement]: !0, open: a.value, closing: c.value }]),
      style: w({ "--space": e.space, ...v.value })
    }, P(e.message), 7)) : z("", !0);
  }
}), re = /* @__PURE__ */ g(De, [["__scopeId", "data-v-98e8be37"]]), jt = (t = {}) => ({
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
}), Re = y(0);
function Ve() {
  return {
    height: Re
  };
}
const Ae = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const n = t, { height: o } = Ve();
    return (e, r) => (i(), m("div", {
      class: I(["t-cable", { keyboard: n.keyboard && D(o) > 0, [n.placement]: !0 }]),
      style: w({ "--t-keyboard-height": D(o) + "px", "--t-keyboard-transition": D(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ne = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-ecb72421"]]), Oe = /* @__PURE__ */ T({
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
    return (e, r) => (i(), m("div", {
      class: "t-card",
      style: w(o.value)
    }, [
      b(e.$slots, "default")
    ], 4));
  }
}), qe = {}, Xe = { class: "t-content" };
function Le(t, n) {
  return i(), m("div", Xe, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const We = /* @__PURE__ */ g(qe, [["render", Le], ["__scopeId", "data-v-9a833657"]]), ee = 80, Ye = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(t, { emit: n }) {
    const o = n, e = y(0), r = y(!1), a = y();
    let l, c = !1;
    const u = () => {
      r.value = !1, e.value = 0, l && l.cancel(), setTimeout(() => {
        c = !1;
      }, 2e3);
    }, d = () => {
      c = !0, r.value = !0, e.value = ee, o("refresh", u);
    };
    return R(() => a.value, () => {
      l && l.destroy();
      let v = a.value.closest(".t-content");
      v && (l = V(v, {
        options: {
          minDist: 60
        },
        move({ dy: _ }) {
          r.value || c || _ < 0 || (_ >= 120 ? d() : e.value = _);
        },
        up({ dy: _ }) {
          r.value || c || (_ > ee ? d() : e.value = 0);
        },
        cancel() {
          r.value = !1, e.value = 0;
        }
      }));
    }), N(() => {
      l && l.destroy();
    }), (v, _) => W((i(), m("div", {
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
}), He = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-688c5394"]]), Ue = {}, je = { class: "t-screen" };
function Fe(t, n) {
  return i(), m("div", je, [
    b(t.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ g(Ue, [["render", Fe], ["__scopeId", "data-v-66ea8649"]]), Ge = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(t, { emit: n }) {
    let o = {};
    const e = oe(), r = pe(), a = e.getRoutes(), l = y(!1), c = n;
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
          c("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, v = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), c("change"), l.value = !1;
      }, 400);
    };
    u(r.name), R(() => r.name, (s, f) => {
      s != $.currentScreen.value.name && ($.lastScreen.value?.name == s ? v() : u(s));
    });
    const _ = () => {
      l.value = !0;
      const s = $.currentScreen.value.target, f = $.lastScreen.value.target;
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", f.style.transition = "transform 0.35s ease", f.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return M(() => {
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
    }), (s, f) => (i(), m(A, null, [
      (i(!0), m(A, null, H(D($).screens, (h, p) => (i(), E(se, {
        ref_for: !0,
        ref: (x) => d(p, x),
        style: w({ zIndex: p + (p == D($).screens.length - 1 ? 2 : 1) }),
        key: p
      }, {
        default: B(() => [
          (i(), E(le(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: D($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ke = /* @__PURE__ */ g(Ge, [["__scopeId", "data-v-a048cc07"]]), Me = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (i(), m("div", {
      class: I(["t-toolbar", { [n.placement]: !0 }]),
      style: w({ "--t-size-toolbar": n.size })
    }, [
      k("div", null, [
        b(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Je = /* @__PURE__ */ g(Me, [["__scopeId", "data-v-3b3a7896"]]), Qe = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(t) {
    const n = oe(), o = t, e = () => {
      $.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (r, a) => r.to || D($).hasPrevious ? (i(), m("button", {
      key: 0,
      class: "t-back-button",
      onClick: e
    }, [
      b(r.$slots, "default", {}, () => [
        a[0] || (a[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Ze = /* @__PURE__ */ g(Qe, [["__scopeId", "data-v-ed626a3d"]]), et = /* @__PURE__ */ T({
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
    return (e, r) => (i(), m("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), G = /* @__PURE__ */ g(et, [["__scopeId", "data-v-f0f94f05"]]), tt = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (n, o) => (i(), m("div", {
      class: I(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-daa38c85"]]), ot = /* @__PURE__ */ T({
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
    let c = null;
    const u = S(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), d = (_) => {
      e("dismiss", _);
    }, v = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return R(() => r.value, (_) => {
      _ && (c = V(r.value, {
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
          v(), s == u.value ? e("dismiss", "gesture") : a.value.open();
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
          if (v(), h != u.value) {
            a.value.open();
            return;
          }
          let p, x, F;
          o.placement == "bottom" || o.placement == "top" ? (p = r.value.offsetHeight, F = s) : (p = r.value.offsetWidth, F = f), x = F / p * 100, x > 50 ? e("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          v(), a.value.open();
        }
      }));
    }), N(() => {
      c && c.destroy();
    }), (_, s) => (i(), E(L, {
      ref_key: "present",
      ref: a,
      placement: o.placement,
      backdrop: _.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: d
    }, {
      default: B(() => [
        o.gesture && o.placement != "center" ? (i(), E(ae, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : z("", !0),
        o.closeButton && o.placement == "center" ? (i(), m("button", {
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
}), nt = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-14b7fc93"]]), rt = { class: "t-input-label" }, st = { class: "t-input-content" }, at = ["type", "placeholder", "value"], lt = /* @__PURE__ */ T({
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
    return (a, l) => (i(), m("div", {
      class: I(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", rt, P(a.label), 1),
        k("div", st, [
          b(a.$slots, "start", {}, void 0, !0),
          k("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, at),
          b(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (i(), E(G, {
        key: 0,
        color: "danger"
      }, {
        default: B(() => [
          X(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (i(), E(G, {
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
}), ct = /* @__PURE__ */ g(lt, [["__scopeId", "data-v-1a9425cf"]]), it = {};
function ut(t, n) {
  return i(), m("textarea");
}
const dt = /* @__PURE__ */ g(it, [["render", ut]]), pt = {};
function ft(t, n) {
  return i(), m("div");
}
const mt = /* @__PURE__ */ g(pt, [["render", ft]]), vt = {}, _t = { class: "t-grid" };
function yt(t, n) {
  return i(), m("div", _t);
}
const gt = /* @__PURE__ */ g(vt, [["render", yt]]), bt = {}, ht = { class: "t-grid-item" };
function kt(t, n) {
  return i(), m("div", ht);
}
const $t = /* @__PURE__ */ g(bt, [["render", kt]]), Tt = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (i(), m("div", {
      class: I(["t-divider", { [n.direction]: !0 }])
    }, null, 2));
  }
}), wt = /* @__PURE__ */ g(Tt, [["__scopeId", "data-v-47ee8991"]]), xt = /* @__PURE__ */ T({
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
    }), c = () => a.value?.parentElement?.querySelector?.("input");
    M(() => {
      let d = c();
      d && (r.value = d.type != "password", e("change", r.value));
    });
    const u = () => {
      let d = c();
      d && (r.value = !r.value, r.value ? d.type = "text" : d.type = "password", e("change", r.value));
    };
    return (d, v) => (i(), m("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: w(l.value),
      onClick: u
    }, [
      r.value ? b(d.$slots, "on", { key: 0 }, () => [
        v[0] || (v[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      r.value ? z("", !0) : b(d.$slots, "off", { key: 1 }, () => [
        v[1] || (v[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), It = /* @__PURE__ */ g(xt, [["__scopeId", "data-v-3268e9e3"]]), St = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = S(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (e, r) => (i(), m("div", {
      class: I(["t-avatar", { square: e.square }]),
      style: w({ "--size": o.value })
    }, [
      b(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), zt = /* @__PURE__ */ g(St, [["__scopeId", "data-v-24384c2f"]]), Et = { class: "t-collapse-title" }, Bt = {
  key: 0,
  class: "icon"
}, Ct = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, Dt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, r = y(!1), a = y(""), l = y(), c = () => {
      r.value = !r.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, e("change", r.value);
    };
    return e("change", r.value), (u, d) => (i(), m("div", {
      class: I(["t-collapse", { open: r.value }]),
      style: w({ "--height": a.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: c
      }, [
        b(u.$slots, "icon"),
        k("div", Et, [
          b(u.$slots, "title", {}, () => [
            X(P(o.title), 1)
          ])
        ]),
        b(u.$slots, "toggle", {}, () => [
          r.value ? (i(), m("div", Bt, [...d[0] || (d[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (i(), m("div", Ct, [...d[1] || (d[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Pt, [
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
}), Rt = /* @__PURE__ */ T({
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
    return (l, c) => (i(), m("div", {
      class: I(["t-switch", { on: o.modelValue }]),
      style: w(a.value),
      onClick: r
    }, [...c[0] || (c[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Vt = /* @__PURE__ */ g(Rt, [["__scopeId", "data-v-3616970e"]]), At = /* @__PURE__ */ T({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, o = ie("tabsState"), e = S(() => o.active.value === n.value), r = () => {
      o.setActive(n.value);
    };
    return (a, l) => {
      const c = ue("t-button");
      return i(), m("li", {
        class: I(["t-tab", { active: e.value }])
      }, [
        K(c, {
          variant: "text",
          onClick: r,
          color: e.value && D(o).variant == "text" ? D(o).color : void 0
        }, {
          default: B(() => [
            b(a.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["color"])
      ], 2);
    };
  }
}), Nt = /* @__PURE__ */ g(At, [["__scopeId", "data-v-17b98a3f"]]), Ot = /* @__PURE__ */ T({
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
    }), c = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().left - a.value.getBoundingClientRect().left, v = u.offsetWidth / 2;
            r.value = d + v - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let u = a.value.querySelector(".active");
          if (u) {
            let d = u.getBoundingClientRect().top - a.value.getBoundingClientRect().top, v = u.offsetHeight / 2;
            r.value = d + v - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return de("tabsState", {
      active: S(() => o.modelValue),
      color: l.value,
      variant: o.variant,
      setActive: (u) => {
        e("update:modelValue", u), c();
      }
    }), M(() => {
      c();
    }), (u, d) => (i(), m("ul", {
      ref_key: "container",
      ref: a,
      class: I(["t-tabs", { [u.placement]: !0, [u.variant]: !0 }]),
      style: w({ "--color": l.value, "--transform": r.value, "--border": u.border + "px" })
    }, [
      b(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), qt = /* @__PURE__ */ g(Ot, [["__scopeId", "data-v-2f040d31"]]), Ft = () => ({
  install: (t) => {
    fe(), t.component("t-app", ye), t.component("t-screen", se), t.component("t-swipe-screen", Ke), t.component("t-cable", Ne), t.component("t-toolbar", Je), t.component("t-content", We), t.component("t-card", Oe), t.component("t-refresher", He), t.component("t-button", Q), t.component("t-back-button", Ze), t.component("t-present", L), t.component("t-text", G), t.component("t-sheet", nt), t.component("t-pull-signal", ae), t.component("t-input", ct), t.component("t-textarea", dt), t.component("t-rich-text", mt), t.component("t-grid", gt), t.component("t-grid-item", $t), t.component("t-divider", wt), t.component("t-toggle-password", It), t.component("t-loading-icon", J), t.component("t-alert", ne), t.component("t-avatar", zt), t.component("t-collapse", Dt), t.component("t-toast", re), t.component("t-switch", Vt), t.component("t-tab", Nt), t.component("t-tabs", qt);
  }
});
export {
  q as blurCurrentActive,
  Ht as createAction,
  Yt as createAlert,
  Ut as createLoading,
  jt as createToast,
  Ft as createToife,
  O as isFormElement,
  Be as presentController,
  $ as screenController,
  Ve as useKeyboard
};
