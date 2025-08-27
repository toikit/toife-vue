import { createElementBlock as _, openBlock as u, renderSlot as h, defineComponent as T, ref as y, computed as S, reactive as te, watch as A, Fragment as V, withDirectives as Y, createCommentVNode as B, normalizeStyle as w, normalizeClass as x, vShow as H, createElementVNode as $, createVNode as M, onUnmounted as N, createBlock as C, withCtx as P, toDisplayString as D, renderList as U, createTextVNode as O, createApp as j, h as F, unref as E, onMounted as J, resolveDynamicComponent as le, markRaw as ce, inject as ie, provide as ue } from "vue";
import { gesture as L } from "@toife/gesture";
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
  return u(), _("div", me, [
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
    const e = y(0), s = y(!1), r = y(), c = y(), i = t, d = o, p = S(() => s.value || i.keepalive), f = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), v = (m) => {
      i.backdrop ? m?.backdropOpacity && (f["--t-present-backdrop-opacity"] = m.backdropOpacity) : f["--t-present-backdrop-opacity"] = "0", m?.transition && (f["--t-present-transition"] = m.transition, f["--t-present-transition"] = m.transition), m?.contentTransform && (f["--t-present-content-transform"] = m.contentTransform), m?.contentOpacity && (f["--t-present-content-opacity"] = m.contentOpacity);
    }, l = () => {
      v({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, a = () => {
      let m = "0px", I = "1";
      i.placement == "bottom" || i.placement == "right" ? m = "100%" : i.placement == "top" || i.placement == "left" ? m = "-100%" : i.placement == "center" && (m = "0px", I = "0"), v({
        contentTransform: m,
        transition: "0.2s",
        contentOpacity: I,
        backdropOpacity: "0"
      });
    };
    A(() => i.visible, () => {
      i.visible ? (s.value = !0, e.value = Be.getNewIndex(), setTimeout(() => {
        l();
      }, 50)) : (a(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), n({
      render: v,
      open: l,
      close: a
    });
    const g = (m) => {
      m.preventDefault(), d("dismiss", "backdrop");
    };
    return a(), (m, I) => (u(), _(V, null, [
      p.value ? Y((u(), _("div", {
        key: 0,
        class: x(["t-present", { [m.placement]: !0 }]),
        ref_key: "present",
        ref: c,
        style: w({ ...f, zIndex: e.value })
      }, [
        h(m.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [H, s.value]
      ]) : B("", !0),
      p.value ? Y((u(), _("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: g,
        ref_key: "backdrop",
        ref: r,
        style: w({ ...f, zIndex: e.value - 1 })
      }, null, 4)), [
        [H, s.value]
      ]) : B("", !0)
    ], 64));
  }
}), W = /* @__PURE__ */ b(ye, [["__scopeId", "data-v-0ec92514"]]), ge = /* @__PURE__ */ T({
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
    return (n, o) => (u(), _("span", {
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
    return (e, s) => (u(), _("button", {
      class: x(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0 }]),
      style: w(o.value)
    }, [
      Y($("span", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ], 512), [
        [H, !n.loading]
      ]),
      n.loading ? (u(), _("span", be, [
        M(Q, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : B("", !0)
    ], 6));
  }
}), G = /* @__PURE__ */ b(he, [["__scopeId", "data-v-74d8380d"]]), ke = {
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
    const e = t, s = y(!1), r = o, c = y();
    let i;
    const d = y(!1), p = () => {
      s.value = !0;
    }, f = (l) => {
      s.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, v = (l) => {
      e.dismiss && e.dismiss.includes(l) ? (s.value = !1, r("dismiss", l)) : l == "backdrop" && (d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300));
    };
    return n({
      open: p
    }), A(() => c.value, (l) => {
      l && (i = L(c.value, {
        beforeEvent(a) {
          return a.stopPropagation(), q(a.target) || (a.preventDefault(), X()), !1;
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (l, a) => (u(), C(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: v
    }, {
      default: P(() => [
        $("div", {
          class: x(["t-alert", { pop: d.value }]),
          ref_key: "container",
          ref: c
        }, [
          h(l.$slots, "header", {}, () => [
            e.title ? (u(), _("div", ke, D(e.title), 1)) : B("", !0)
          ], !0),
          h(l.$slots, "content", {}, () => [
            $("div", $e, D(e.message), 1)
          ], !0),
          h(l.$slots, "footer", {}, () => [
            $("div", Te, [
              (u(!0), _(V, null, U(e.actions, (g) => (u(), C(G, {
                color: g.color,
                variant: g.variant,
                onClick: (m) => f(g)
              }, {
                default: P(() => [
                  O(D(g.text), 1)
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
}), ne = /* @__PURE__ */ b(we, [["__scopeId", "data-v-5cf415ec"]]), Yt = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = y();
      o.appendChild(e);
      const r = j({
        render() {
          return F(ne, {
            ...t,
            ref: s,
            onDismiss: (c, i) => {
              setTimeout(() => {
                r.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      r.mount(e), setTimeout(() => {
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
    const e = t, s = y(!1), r = o, c = y();
    let i;
    const d = y(!1), p = () => {
      s.value = !0;
    }, f = (l) => {
      s.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, v = (l) => {
      e.dismiss && e.dismiss.includes(l) ? (s.value = !1, r("dismiss", l)) : l == "backdrop" && (d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300));
    };
    return n({
      open: p
    }), A(() => c.value, (l) => {
      l && (i = L(c.value, {
        beforeEvent(a) {
          return a.stopPropagation(), q(a.target) || (a.preventDefault(), X()), !1;
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (l, a) => (u(), C(W, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: v
    }, {
      default: P(() => [
        $("div", {
          class: x(["t-action", { pop: d.value }]),
          ref_key: "container",
          ref: c
        }, [
          (u(!0), _(V, null, U(e.actions, (g) => (u(), _("div", null, [
            (u(!0), _(V, null, U(g, (m) => (u(), C(G, {
              color: m.color,
              size: m.size,
              variant: m.variant,
              onClick: (I) => f(m),
              block: ""
            }, {
              default: P(() => [
                O(D(m.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ b(xe, [["__scopeId", "data-v-73339adc"]]), Ht = (t = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const e = document.createElement("div"), s = y();
      o.appendChild(e);
      const r = j({
        render() {
          return F(Ie, {
            ...t,
            ref: s,
            onDismiss: (c, i) => {
              setTimeout(() => {
                r.unmount(), e.remove();
              }, 300), n(i);
            }
          });
        }
      });
      r.mount(e), setTimeout(() => {
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
    const e = t, s = y(!1), r = y();
    let c;
    return n({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), A(() => r.value, (p) => {
      p && (c = L(r.value, {
        beforeEvent(f) {
          return f.stopPropagation(), q(f.target) || (f.preventDefault(), X()), !1;
        }
      }));
    }), N(() => {
      c && c.destroy();
    }), (p, f) => (u(), C(W, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value
    }, {
      default: P(() => [
        $("div", {
          class: "t-loading",
          ref_key: "container",
          ref: r
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
}), ze = /* @__PURE__ */ b(Se, [["__scopeId", "data-v-d048a41d"]]), Ut = (t = {}) => {
  const n = y(), o = document.body.querySelector(".t-app");
  let e = null, s = null;
  return {
    open() {
      return new Promise((r) => {
        o && (s = document.createElement("div"), o.appendChild(s), e = j({
          render() {
            return F(ze, {
              ...t,
              ref: n
            });
          }
        }), e.mount(s), setTimeout(() => {
          n.value?.open?.(), r(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((r) => {
        n.value?.close?.(), setTimeout(() => {
          e?.unmount?.(), s?.remove?.(), r(!0);
        }, 300);
      });
    }
  };
}, Z = y(1e3), Be = {
  getNewIndex() {
    return Z.value += 2, Z.value;
  }
}, z = te([]), Ce = (t) => {
  z.push(t);
}, Ee = (t) => {
  t || z.pop();
}, Pe = () => {
  z.splice(0, z.length);
}, k = {
  screens: z,
  addScreen: Ce,
  removeScreen: Ee,
  removeAllScreen: Pe,
  hasPrevious: S(() => z.length > 1),
  currentScreen: S(() => z[z.length - 1]),
  lastScreen: S(() => {
    if (!(z.length < 2))
      return z[z.length - 2];
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
    const e = t, s = o, r = y(!1), c = y(!1), i = y(!1), d = () => {
      c.value = !0, i.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, e.duration + 10);
    }, p = () => {
      i.value = !0, setTimeout(() => {
        c.value = !1, r.value = !1, s("dismiss");
      }, 300);
    }, f = S(() => {
      let v;
      return e.variant == "default" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + e.color + "-rgb), 0.6)"
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": e.color
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), e.variant == "text" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "none",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), e.variant == "outline" && (e.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) ? v = {
        "--border": "0.55px solid var(--t-color-status-" + e.color + ")",
        "--color": "var(--t-color-status-" + e.color + ")",
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid " + e.color,
        "--color": e.color,
        "--background": "transparent"
      } : v = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), v;
    });
    return n({
      open: d
    }), (v, l) => c.value ? (u(), _("div", {
      key: 0,
      class: x(["t-toast", { [e.placement]: !0, open: r.value, closing: i.value }]),
      style: w({ "--space": e.space, ...f.value })
    }, D(e.message), 7)) : B("", !0);
  }
}), se = /* @__PURE__ */ b(De, [["__scopeId", "data-v-98e8be37"]]), jt = (t = {}) => ({
  open() {
    let n = document.body.querySelector(".t-app");
    if (!n) return;
    const o = document.createElement("div"), e = y();
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
}), Re = y(0);
function Ae() {
  return {
    height: Re
  };
}
const Ve = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(t) {
    const n = t, { height: o } = Ae();
    return (e, s) => (u(), _("div", {
      class: x(["t-cable", { keyboard: n.keyboard && E(o) > 0, [n.placement]: !0 }]),
      style: w({ "--t-keyboard-height": E(o) + "px", "--t-keyboard-transition": E(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ne = /* @__PURE__ */ b(Ve, [["__scopeId", "data-v-ecb72421"]]), Le = /* @__PURE__ */ T({
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
    return (e, s) => (u(), _("div", {
      class: "t-card",
      style: w(o.value)
    }, [
      h(e.$slots, "default")
    ], 4));
  }
}), Oe = {}, qe = { class: "t-content" };
function Xe(t, n) {
  return u(), _("div", qe, [
    h(t.$slots, "default", {}, void 0, !0)
  ]);
}
const We = /* @__PURE__ */ b(Oe, [["render", Xe], ["__scopeId", "data-v-9a833657"]]), ee = 80, Ye = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(t, { emit: n }) {
    const o = n, e = y(0), s = y(!1), r = y();
    let c, i = !1;
    const d = () => {
      s.value = !1, e.value = 0, c && c.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, p = () => {
      i = !0, s.value = !0, e.value = ee, o("refresh", d);
    };
    return A(() => r.value, () => {
      c && c.destroy();
      let f = r.value.closest(".t-content");
      f && (c = L(f, {
        options: {
          minDist: 60
        },
        move({ dy: v, e: l }) {
          s.value || i || v < 0 || (v > 5 && f.scrollTop == 0 && (l.preventDefault(), f.classList.add("scroll-hidden")), v >= 120 ? p() : v > 10 && (e.value = v));
        },
        up({ dy: v, e: l }) {
          f.classList.remove("scroll-hidden"), !(s.value || i) && (v > ee ? p() : e.value = 0);
        },
        cancel() {
          f.classList.remove("scroll-hidden"), !(s.value || i) && (s.value = !1, e.value = 0);
        }
      }, {
        passive: !1
      }));
    }), N(() => {
      c && c.destroy();
    }), (f, v) => Y((u(), _("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: w({ height: `${e.value}px` })
    }, [
      $("img", {
        class: x({ spiner: s.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [H, e.value > 0]
    ]);
  }
}), He = /* @__PURE__ */ b(Ye, [["__scopeId", "data-v-ac2b2370"]]), Ue = {}, je = { class: "t-screen" };
function Fe(t, n) {
  return u(), _("div", je, [
    h(t.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ b(Ue, [["render", Fe], ["__scopeId", "data-v-66ea8649"]]), Ge = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(t, { emit: n }) {
    let o = {};
    const e = oe(), s = de(), r = e.getRoutes(), c = y(!1), i = n;
    for (let a of r)
      o[a.name] = a.components;
    const d = (a) => {
      a && k.addScreen({
        name: a,
        target: null,
        component: ce(o[a] || null)
      });
    }, p = (a, g) => {
      !g || k.screens[a].target || (k.screens[a].target = g.$el, a > 0 && (c.value = !0, g.$el.style.transform = "translateX(100vw)", g.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        g.$el.style.transition = "transform 0.35s ease", g.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), k.screens.length > 1 && (k.lastScreen.value.target.style.transitionOrigin = "left center", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), c.value = !1;
        }, 400);
      }, 100)));
    }, f = () => {
      k.currentScreen.value.target.style.transition = "transform 0.35s ease", k.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), c.value = !0, setTimeout(() => {
        k.removeScreen(), i("change"), c.value = !1;
      }, 400);
    };
    d(s.name), A(() => s.name, (a, g) => {
      a != k.currentScreen.value.name && (k.lastScreen.value?.name == a ? f() : d(a));
    });
    const v = () => {
      c.value = !0;
      const a = k.currentScreen.value.target, g = k.lastScreen.value.target;
      a.style.transition = "transform 0.35s ease", a.style.transform = "translateX(0px)", g.style.transition = "transform 0.35s ease", g.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        c.value = !1;
      }, 400);
    };
    let l;
    return J(() => {
      l = L(document, {
        pointerId: null,
        beforeEvent(a) {
          return c.value || k.screens.length < 2 ? !1 : (a.type == "pointerdown" && !this.pointerId && (this.pointerId = a.pointerId), this.pointerId == a.pointerId);
        },
        afterEvent(a) {
          (a.type == "pointerup" || a.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: a }) {
          a == "right" && e.back();
        },
        move({ dx: a }) {
          const g = window.innerWidth, m = a / g * 100, I = k.currentScreen.value.target, R = k.lastScreen?.value?.target;
          if (a > 0 && a <= g) {
            I.style.transition = "transform 0s ease", I.style.transform = `translateX(${a}px)`, R.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), R.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${m}))) scale(${0.5 + 0.5 / 100 * m}) perspective(100vw) rotateY(${30 - 30 / 100 * m}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * m}`);
            return;
          }
        },
        up({ dx: a }) {
          const g = window.innerWidth;
          a / g * 100 >= 50 ? e.back() : v();
        },
        cancel() {
          v();
        }
      });
    }), N(() => {
      l && l.destroy(), k.removeAllScreen();
    }), (a, g) => (u(), _(V, null, [
      (u(!0), _(V, null, U(E(k).screens, (m, I) => (u(), C(re, {
        ref_for: !0,
        ref: (R) => p(I, R),
        style: w({ zIndex: I + (I == E(k).screens.length - 1 ? 2 : 1) }),
        key: I
      }, {
        default: P(() => [
          (u(), C(le(m.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: E(k).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ke = /* @__PURE__ */ b(Ge, [["__scopeId", "data-v-714c48c4"]]), Me = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (u(), _("div", {
      class: x(["t-toolbar", { [n.placement]: !0 }]),
      style: w({ "--t-size-toolbar": n.size })
    }, [
      $("div", null, [
        h(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Je = /* @__PURE__ */ b(Me, [["__scopeId", "data-v-3b3a7896"]]), Qe = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(t) {
    const n = oe(), o = t, e = () => {
      k.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (s, r) => s.to || E(k).hasPrevious ? (u(), _("button", {
      key: 0,
      class: "t-back-button",
      onClick: e
    }, [
      h(s.$slots, "default", {}, () => [
        r[0] || (r[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : B("", !0);
  }
}), Ze = /* @__PURE__ */ b(Qe, [["__scopeId", "data-v-ed626a3d"]]), et = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = S(() => {
      let e, s = n.color;
      return n.size == "standard" ? e = "var(--t-fs-10)" : n.size == "small" ? e = "var(--t-fs-08)" : n.size == "large" ? e = "var(--t-fs-12)" : e = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (s = `var(--t-color-status-${n.color})`), {
        "--color": s,
        "--font-size": e
      };
    });
    return (e, s) => (u(), _("span", {
      class: "t-text",
      style: w(o.value)
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), K = /* @__PURE__ */ b(et, [["__scopeId", "data-v-f0f94f05"]]), tt = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(t) {
    return (n, o) => (u(), _("div", {
      class: x(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ b(tt, [["__scopeId", "data-v-daa38c85"]]), ot = /* @__PURE__ */ T({
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
    const o = t, e = n, s = y(), r = y(), c = y(!1);
    let i = null;
    const d = S(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), p = (v) => {
      e("dismiss", v);
    }, f = () => {
      c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 300);
    };
    return A(() => s.value, (v) => {
      v && (i = L(s.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(l) {
          let a = !1, g = !1;
          return c.value || !o.gesture || o.placement == "center" ? a = !0 : this.pointerId ? (a = !0, g = this.pointerId == l.pointerId) : l.type == "pointerdown" && (this.pointerId = l.pointerId, a = !0, g = !0), a && (l.stopPropagation(), q(l.target) || (l.preventDefault(), X())), g;
        },
        afterEvent(l) {
          (l.type == "pointerup" || l.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: l }) {
          f(), l == d.value ? e("dismiss", "gesture") : r.value.open();
        },
        move({ dy: l, dx: a, d: g }) {
          if (g != d.value) return;
          let m = 0;
          o.placement == "bottom" || o.placement == "top" ? m = l : m = a, r.value.render({
            contentTransform: m + "px",
            transition: "0s"
          });
        },
        up({ dy: l, dx: a, d: g }) {
          if (f(), g != d.value) {
            r.value.open();
            return;
          }
          let m, I, R;
          o.placement == "bottom" || o.placement == "top" ? (m = s.value.offsetHeight, R = l) : (m = s.value.offsetWidth, R = a), I = R / m * 100, I > 50 ? e("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          f(), r.value.open();
        }
      }));
    }), N(() => {
      i && i.destroy();
    }), (v, l) => (u(), C(W, {
      ref_key: "present",
      ref: r,
      placement: o.placement,
      backdrop: v.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: p
    }, {
      default: P(() => [
        o.gesture && o.placement != "center" ? (u(), C(ae, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : B("", !0),
        o.closeButton && o.placement == "center" ? (u(), _("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: l[0] || (l[0] = (a) => p("close-button"))
        }, [
          h(v.$slots, "close-icon", {}, () => [
            l[1] || (l[1] = $("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : B("", !0),
        $("div", {
          class: x(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: v.rounded, radius: o.radius }]),
          style: w({ "--background": o.background }),
          ref_key: "sheet",
          ref: s
        }, [
          h(v.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), nt = /* @__PURE__ */ b(ot, [["__scopeId", "data-v-14b7fc93"]]), st = { class: "t-input-label" }, rt = { class: "t-input-content" }, at = ["type", "placeholder", "value"], lt = /* @__PURE__ */ T({
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
    const o = t, e = n, s = (r) => {
      e("update:modelValue", r.target.value);
    };
    return (r, c) => (u(), _("div", {
      class: x(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }])
    }, [
      $("label", null, [
        $("span", st, D(r.label), 1),
        $("div", rt, [
          h(r.$slots, "start", {}, void 0, !0),
          $("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: s
          }, null, 40, at),
          h(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (u(), C(K, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          O(D(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (u(), C(K, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          O(D(o.help), 1)
        ]),
        _: 1
      })) : B("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ b(lt, [["__scopeId", "data-v-1a9425cf"]]), it = {};
function ut(t, n) {
  return u(), _("textarea");
}
const dt = /* @__PURE__ */ b(it, [["render", ut]]), pt = {};
function ft(t, n) {
  return u(), _("div");
}
const mt = /* @__PURE__ */ b(pt, [["render", ft]]), vt = {}, _t = { class: "t-grid" };
function yt(t, n) {
  return u(), _("div", _t);
}
const gt = /* @__PURE__ */ b(vt, [["render", yt]]), bt = {}, ht = { class: "t-grid-item" };
function kt(t, n) {
  return u(), _("div", ht);
}
const $t = /* @__PURE__ */ b(bt, [["render", kt]]), Tt = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const n = t;
    return (o, e) => (u(), _("div", {
      class: x(["t-divider", { [n.direction]: !0 }])
    }, null, 2));
  }
}), wt = /* @__PURE__ */ b(Tt, [["__scopeId", "data-v-47ee8991"]]), xt = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y(!1), r = y(), c = S(() => {
      let p = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (p = `var(--t-color-status-${o.color})`), {
        "--color": p
      };
    }), i = () => r.value?.parentElement?.querySelector?.("input");
    J(() => {
      let p = i();
      p && (s.value = p.type != "password", e("change", s.value));
    });
    const d = () => {
      let p = i();
      p && (s.value = !s.value, s.value ? p.type = "text" : p.type = "password", e("change", s.value));
    };
    return (p, f) => (u(), _("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(c.value),
      onClick: d
    }, [
      s.value ? h(p.$slots, "on", { key: 0 }, () => [
        f[0] || (f[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : B("", !0),
      s.value ? B("", !0) : h(p.$slots, "off", { key: 1 }, () => [
        f[1] || (f[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), It = /* @__PURE__ */ b(xt, [["__scopeId", "data-v-3268e9e3"]]), St = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(t) {
    const n = t, o = S(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (e, s) => (u(), _("div", {
      class: x(["t-avatar", { square: e.square }]),
      style: w({ "--size": o.value })
    }, [
      h(e.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), zt = /* @__PURE__ */ b(St, [["__scopeId", "data-v-24384c2f"]]), Bt = { class: "t-collapse-title" }, Ct = {
  key: 0,
  class: "icon"
}, Et = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, Dt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(t, { emit: n }) {
    const o = t, e = n, s = y(!1), r = y(""), c = y(), i = () => {
      s.value = !s.value, r.value = `calc(${c.value.offsetHeight}px + 2rem)`, e("change", s.value);
    };
    return e("change", s.value), (d, p) => (u(), _("div", {
      class: x(["t-collapse", { open: s.value }]),
      style: w({ "--height": r.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        h(d.$slots, "icon"),
        $("div", Bt, [
          h(d.$slots, "title", {}, () => [
            O(D(o.title), 1)
          ])
        ]),
        h(d.$slots, "toggle", {}, () => [
          s.value ? (u(), _("div", Ct, [...p[0] || (p[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (u(), _("div", Et, [...p[1] || (p[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", Pt, [
        $("div", {
          ref_key: "content",
          ref: c
        }, [
          h(d.$slots, "content", {}, () => [
            h(d.$slots, "default")
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
    const o = t, e = n, s = () => {
      e("update:modelValue", !o.modelValue);
    }, r = S(() => {
      let c = {
        "--background": o.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (c = {
        "--background": `var(--t-color-status-${o.color})`,
        "--color": `var(--t-color-status-${o.color}-text)`
      }), c;
    });
    return (c, i) => (u(), _("div", {
      class: x(["t-switch", { on: o.modelValue }]),
      style: w(r.value),
      onClick: s
    }, [...i[0] || (i[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), At = /* @__PURE__ */ b(Rt, [["__scopeId", "data-v-3616970e"]]), Vt = /* @__PURE__ */ T({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, o = ie("tabsState"), e = S(() => o.active.value === n.value), s = () => {
      o.setActive(n.value);
    };
    return (r, c) => (u(), _("li", {
      class: x(["t-tab", { active: e.value }])
    }, [
      M(G, {
        variant: "text",
        onClick: s,
        size: E(o).size,
        color: e.value && E(o).variant == "text" ? E(o).color : void 0
      }, {
        default: P(() => [
          h(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Nt = /* @__PURE__ */ b(Vt, [["__scopeId", "data-v-36c12a50"]]), Lt = /* @__PURE__ */ T({
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
  setup(t, { emit: n }) {
    const o = t, e = n, s = y("0px"), r = y(), c = S(() => {
      let d = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(d) && (d = `var(--t-color-status-${d})`), d;
    }), i = () => {
      setTimeout(() => {
        if (o.placement.startsWith("top-") || o.placement.startsWith("bottom-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let p = d.getBoundingClientRect().left - r.value.getBoundingClientRect().left, f = d.offsetWidth / 2;
            s.value = p + f - o.border / 2 + "px";
          }
        } else if (o.placement.startsWith("left-") || o.placement.startsWith("right-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let p = d.getBoundingClientRect().top - r.value.getBoundingClientRect().top, f = d.offsetHeight / 2;
            s.value = p + f - o.border / 2 + "px";
          }
        }
      }, 50);
    };
    return ue("tabsState", {
      active: S(() => o.modelValue),
      color: c.value,
      size: o.size,
      variant: o.variant,
      setActive: (d) => {
        e("update:modelValue", d), i();
      }
    }), J(() => {
      i();
    }), (d, p) => (u(), _("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [d.placement]: !0, [d.variant]: !0 }]),
      style: w({ "--color": c.value, "--transform": s.value, "--border": d.border + "px" })
    }, [
      h(d.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ot = /* @__PURE__ */ b(Lt, [["__scopeId", "data-v-7954ab38"]]), Ft = () => ({
  install: (t) => {
    pe(), t.component("t-app", _e), t.component("t-screen", re), t.component("t-swipe-screen", Ke), t.component("t-cable", Ne), t.component("t-toolbar", Je), t.component("t-content", We), t.component("t-card", Le), t.component("t-refresher", He), t.component("t-button", G), t.component("t-back-button", Ze), t.component("t-present", W), t.component("t-text", K), t.component("t-sheet", nt), t.component("t-pull-signal", ae), t.component("t-input", ct), t.component("t-textarea", dt), t.component("t-rich-text", mt), t.component("t-grid", gt), t.component("t-grid-item", $t), t.component("t-divider", wt), t.component("t-toggle-password", It), t.component("t-loading-icon", Q), t.component("t-alert", ne), t.component("t-avatar", zt), t.component("t-collapse", Dt), t.component("t-toast", se), t.component("t-switch", At), t.component("t-tab", Nt), t.component("t-tabs", Ot);
  }
});
export {
  X as blurCurrentActive,
  Ht as createAction,
  Yt as createAlert,
  Ut as createLoading,
  jt as createToast,
  Ft as createToife,
  q as isFormElement,
  Be as presentController,
  k as screenController,
  Ae as useKeyboard
};
