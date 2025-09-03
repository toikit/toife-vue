import { createElementBlock as f, openBlock as c, renderSlot as b, defineComponent as $, ref as v, computed as z, reactive as te, watch as L, Fragment as A, withDirectives as O, createCommentVNode as I, normalizeStyle as w, normalizeClass as x, vShow as N, createElementVNode as k, createVNode as W, createBlock as B, withCtx as V, toDisplayString as M, renderList as q, createTextVNode as R, createApp as H, h as U, unref as E, onUnmounted as G, onMounted as K, resolveDynamicComponent as ie, markRaw as ue, inject as de, provide as pe } from "vue";
import { gesture as J } from "@toife/gesture";
import { useRouter as oe, useRoute as fe } from "vue-router";
const me = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), ve = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, _e = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !me(o.target) && ve();
  });
}, g = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, ge = {}, ye = { class: "t-app" };
function be(o, s) {
  return c(), f("div", ye, [
    b(o.$slots, "default")
  ]);
}
const he = /* @__PURE__ */ g(ge, [["render", be]]), ke = /* @__PURE__ */ $({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = v(0), n = v(!1), r = v(), i = v(), a = o, d = e, m = z(() => n.value || a.keepalive), _ = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (p) => {
      a.backdrop ? p?.backdropOpacity && (_["--t-present-backdrop-opacity"] = p.backdropOpacity) : _["--t-present-backdrop-opacity"] = "0", p?.transition && (_["--t-present-transition"] = p.transition, _["--t-present-transition"] = p.transition), p?.contentTransform && (_["--t-present-content-transform"] = p.contentTransform), p?.contentOpacity && (_["--t-present-content-opacity"] = p.contentOpacity);
    }, y = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, u = () => {
      let p = "0px", S = "1";
      a.placement == "bottom" || a.placement == "right" ? p = "100%" : a.placement == "top" || a.placement == "left" ? p = "-100%" : a.placement == "center" && (p = "0px", S = "0"), l({
        contentTransform: p,
        transition: "0.2s",
        contentOpacity: S,
        backdropOpacity: "0"
      });
    };
    L(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Pe.getNewIndex(), setTimeout(() => {
        y();
      }, 50)) : (u(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: y,
      close: u
    });
    const h = (p) => {
      p.preventDefault(), d("dismiss", "backdrop");
    };
    return u(), (p, S) => (c(), f(A, null, [
      m.value ? O((c(), f("div", {
        key: 0,
        class: x(["t-present", { [p.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: w({ ..._, zIndex: t.value })
      }, [
        b(p.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      m.value ? O((c(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: h,
        ref_key: "backdrop",
        ref: r,
        style: w({ ..._, zIndex: t.value - 1 })
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), D = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-3d0c3227"]]), $e = /* @__PURE__ */ $({
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
    return (s, e) => (c(), f("span", {
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
}), X = /* @__PURE__ */ g($e, [["__scopeId", "data-v-7c463303"]]), Te = {
  key: 0,
  class: "loader"
}, we = /* @__PURE__ */ $({
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
    const s = o, e = z(() => {
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
    return (t, n) => (c(), f("button", {
      class: x(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: w(e.value)
    }, [
      O(k("span", null, [
        b(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), f("span", Te, [
        W(X, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), j = /* @__PURE__ */ g(we, [["__scopeId", "data-v-48e285d7"]]), xe = {
  key: 0,
  class: "t-alert-header"
}, Se = { class: "t-alert-content" }, ze = { class: "t-alert-footer" }, Ie = /* @__PURE__ */ $({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), d = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, _ = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, y) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: V(() => [
        k("div", {
          class: x(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          b(l.$slots, "header", {}, () => [
            t.title ? (c(), f("div", xe, M(t.title), 1)) : I("", !0)
          ], !0),
          b(l.$slots, "content", {}, () => [
            k("div", Se, M(t.message), 1)
          ], !0),
          b(l.$slots, "footer", {}, () => [
            k("div", ze, [
              (c(!0), f(A, null, q(t.actions, (u) => (c(), B(j, {
                color: u.color,
                variant: u.variant,
                onClick: (h) => m(u)
              }, {
                default: V(() => [
                  R(M(u.text), 1)
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
}), se = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-05d0c578"]]), oo = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
      e.appendChild(t);
      const r = H({
        render() {
          return U(se, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s({ type: i, data: a });
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Be = /* @__PURE__ */ $({
  __name: "t-action",
  props: {
    actions: {},
    dismiss: {}
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1), r = e, i = v(), a = v(!1), d = () => {
      n.value = !0;
    }, m = (l) => {
      n.value = !1, l.handler && l.handler(), r("dismiss", "choose", l?.data);
    }, _ = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, y) => (c(), B(D, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: _
    }, {
      default: V(() => [
        k("div", {
          class: x(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), f(A, null, q(t.actions, (u) => (c(), f("div", null, [
            (c(!0), f(A, null, q(u, (h) => (c(), B(j, {
              color: h.color,
              size: h.size,
              variant: h.variant,
              onClick: (p) => m(h),
              block: ""
            }, {
              default: V(() => [
                R(M(h.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ce = /* @__PURE__ */ g(Be, [["__scopeId", "data-v-c6bccffb"]]), so = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
      e.appendChild(t);
      const r = H({
        render() {
          return U(Ce, {
            ...o,
            ref: n,
            onDismiss: (i, a) => {
              setTimeout(() => {
                r.unmount(), t.remove();
              }, 300), s({ type: i, data: a });
            }
          });
        }
      });
      r.mount(t), setTimeout(() => {
        n.value?.open?.();
      }, 50);
    });
  }
}), Ee = { class: "t-loading" }, Ve = /* @__PURE__ */ $({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = o, n = v(!1);
    return s({
      open: () => {
        n.value = !0;
      },
      close: () => {
        n.value = !1;
      }
    }), (a, d) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value
    }, {
      default: V(() => [
        k("div", Ee, [
          b(a.$slots, "default", {}, () => [
            W(X, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Me = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-8f84c14e"]]), no = (o = {}) => {
  const s = v(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = H({
          render() {
            return U(Me, {
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
}, Y = v(1e3), Pe = {
  getNewIndex() {
    return Y.value += 2, Y.value;
  }
}, C = te([]), Q = v(!0), Ae = (o) => {
  C.push(o);
}, Re = (o) => {
  o || C.pop();
}, De = () => {
  C.splice(0, C.length);
}, Oe = () => {
  Q.value = !1;
}, Ne = () => {
  Q.value = !0;
}, T = {
  screens: C,
  addScreen: Ae,
  removeScreen: Re,
  removeAllScreen: De,
  lockSwipe: Oe,
  unlockSwipe: Ne,
  swipeable: Q,
  hasPrevious: z(() => C.length > 1),
  currentScreen: z(() => C[C.length - 1]),
  lastScreen: z(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, qe = /* @__PURE__ */ $({
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
    const t = o, n = e, r = v(!1), i = v(!1), a = v(!1), d = () => {
      i.value = !0, a.value = !1, setTimeout(() => {
        r.value = !0;
      }, 10), setTimeout(() => {
        m();
      }, t.duration + 10);
    }, m = () => {
      a.value = !0, setTimeout(() => {
        i.value = !1, r.value = !1, n("dismiss");
      }, 300);
    }, _ = z(() => {
      let l;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "rgba(var(--t-color-status-" + t.color + "-rgb), 0.6)"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "rgba(var(--t-color-surface-rgb), 0.6)"
      }), t.variant == "text" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": t.color,
        "--background": "transparent"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), t.variant == "outline" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "0.55px solid var(--t-color-status-" + t.color + ")",
        "--color": "var(--t-color-status-" + t.color + ")",
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid " + t.color,
        "--color": t.color,
        "--background": "transparent"
      } : l = {
        "--border": "0.55px solid var(--t-color-text)",
        "--color": "var(--t-color-text)",
        "--background": "transparent"
      }), l;
    });
    return s({
      open: d
    }), (l, y) => i.value ? (c(), f("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: w({ "--space": t.space, ..._.value })
    }, M(t.message), 7)) : I("", !0);
  }
}), ne = /* @__PURE__ */ g(qe, [["__scopeId", "data-v-61960e03"]]), ro = (o = {}) => ({
  open() {
    let s = document.body.querySelector(".t-app");
    if (!s) return;
    const e = document.createElement("div"), t = v();
    s.appendChild(e);
    const n = H({
      render() {
        return U(ne, {
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
}), Le = v(0);
function re() {
  return {
    height: Le
  };
}
const We = /* @__PURE__ */ $({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = re();
    return (t, n) => (c(), f("div", {
      class: x(["t-cable", { keyboard: s.keyboard && E(e) > 0, [s.placement]: !0 }]),
      style: w({ "--t-keyboard-height": E(e) + "px", "--t-keyboard-transition": E(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), He = /* @__PURE__ */ g(We, [["__scopeId", "data-v-ecb72421"]]), Ue = /* @__PURE__ */ $({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = z(() => {
      let t;
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--background": s.color
      } : t = {
        "--background": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (c(), f("div", {
      class: "t-card",
      style: w(e.value)
    }, [
      b(t.$slots, "default")
    ], 4));
  }
}), Xe = {}, je = { class: "t-content" };
function Fe(o, s) {
  return c(), f("div", je, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ g(Xe, [["render", Fe], ["__scopeId", "data-v-3fd76212"]]), ee = 80, Ge = /* @__PURE__ */ $({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(o, { emit: s }) {
    const e = s, t = v(0), n = v(!1), r = v();
    let i, a = !1;
    const d = () => {
      n.value = !1, t.value = 0, i && i.cancel(), setTimeout(() => {
        a = !1;
      }, 2e3);
    }, m = () => {
      a = !0, n.value = !0, t.value = ee, e("refresh", d);
    };
    return L(() => r.value, () => {
      i && i.destroy();
      let _ = r.value.closest(".t-content");
      _ && (i = J(_, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaY: l, initialDirection: y }) {
          n.value || a || y != "down" || (l >= 120 ? (this.isMoving = !1, m()) : (l > 10 || this.isMoving) && (this.isMoving = !0, t.value = l > 0 ? l : 0));
        },
        up({ deltaY: l, initialDirection: y }) {
          this.isMoving = !1, !(n.value || a) && (l > ee && y == "down" ? m() : t.value = 0);
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), G(() => {
      i && i.destroy();
    }), (_, l) => O((c(), f("div", {
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
      [N, t.value > 0]
    ]);
  }
}), Ke = /* @__PURE__ */ g(Ge, [["__scopeId", "data-v-c6364c14"]]), Je = {}, Qe = { class: "t-screen" };
function Ze(o, s) {
  return c(), f("div", Qe, [
    b(o.$slots, "default", {}, void 0, !0)
  ]);
}
const le = /* @__PURE__ */ g(Je, [["render", Ze], ["__scopeId", "data-v-c2a3436c"]]), Ye = /* @__PURE__ */ $({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = oe(), n = fe(), r = t.getRoutes(), i = v(!1), a = s;
    for (let u of r)
      e[u.name] = u.components;
    const d = (u) => {
      u && T.addScreen({
        name: u,
        target: null,
        component: ue(e[u] || null)
      });
    }, m = (u, h) => {
      !h || T.screens[u].target || (T.screens[u].target = h.$el, u > 0 && (i.value = !0, h.$el.style.transform = "translateX(var(--t-app-width))", h.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        h.$el.style.transition = "transform 0.35s ease", h.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), T.screens.length > 1 && (T.lastScreen.value.target.style.transitionOrigin = "left center", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, _ = () => {
      T.currentScreen.value.target.style.transition = "transform 0.35s ease", T.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", T.lastScreen.value.target.style.transition = "transform 0.35s ease", T.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        T.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    d(n.name), L(() => n.name, (u, h) => {
      u != T.currentScreen.value.name && (T.lastScreen.value?.name == u ? _() : d(u));
    });
    const l = () => {
      i.value = !0;
      const u = T.currentScreen.value.target, h = T.lastScreen.value.target;
      u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(0px)", h.style.transition = "transform 0.35s ease", h.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let y;
    return K(() => {
      y = J(document.body, {
        isMoving: !1,
        beforeEvent(u) {
          return !(i.value || !T.swipeable.value || T.screens.length < 2);
        },
        fast({ initialDirection: u }) {
          u == "right" && t.back();
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaX: u, initialDirection: h }) {
          if (h != "right") return;
          const p = window.innerWidth, S = u / p * 100, P = T.currentScreen.value.target, Z = T.lastScreen?.value?.target;
          (u > 15 && u <= p || this.isMoving) && (u = u > 0 ? u : 0, this.isMoving = !0, P.style.transition = "transform 0s ease", P.style.transform = `translateX(${u}px)`, Z.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), Z.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${S}))) scale(${0.5 + 0.5 / 100 * S}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * S}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * S}`));
        },
        up({ deltaX: u, initialDirection: h }) {
          this.isMoving = !1, h != "right" && l();
          const p = window.innerWidth;
          u / p * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          this.isMoving = !1, l();
        }
      });
    }), G(() => {
      y && y.destroy(), T.removeAllScreen();
    }), (u, h) => (c(), f(A, null, [
      (c(!0), f(A, null, q(E(T).screens, (p, S) => (c(), B(le, {
        ref_for: !0,
        ref: (P) => m(S, P),
        style: w({ zIndex: S + (S == E(T).screens.length - 1 ? 2 : 1) }),
        key: S
      }, {
        default: V(() => [
          (c(), B(ie(p.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: w({ zIndex: E(T).screens.length })
      }, null, 4)
    ], 64));
  }
}), et = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-abea77ec"]]), tt = /* @__PURE__ */ $({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), f("div", {
      class: x(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: w({ "--t-size-toolbar": s.size })
    }, [
      k("div", null, [
        b(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), ot = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-db1924b1"]]), st = /* @__PURE__ */ $({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = oe(), e = o, t = () => {
      T.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || E(T).hasPrevious ? (c(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      b(n.$slots, "default", {}, () => [
        r[0] || (r[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), nt = /* @__PURE__ */ g(st, [["__scopeId", "data-v-ed626a3d"]]), rt = /* @__PURE__ */ $({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = z(() => {
      let t, n = s.color;
      return s.size == "standard" ? t = "var(--t-fs-10)" : s.size == "small" ? t = "var(--t-fs-08)" : s.size == "large" ? t = "var(--t-fs-12)" : t = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": t
      };
    });
    return (t, n) => (c(), f("span", {
      class: "t-text",
      style: w(e.value)
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), F = /* @__PURE__ */ g(rt, [["__scopeId", "data-v-f0f94f05"]]), at = /* @__PURE__ */ $({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), f("div", {
      class: x(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), ce = /* @__PURE__ */ g(at, [["__scopeId", "data-v-daa38c85"]]), lt = /* @__PURE__ */ $({
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
    const e = o, t = s, n = v(), r = v(), i = v(!1);
    let a = null;
    const d = z(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), m = (l) => {
      t("dismiss", l);
    }, _ = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return L(() => n.value, (l) => {
      l && (a = J(n.value, {
        isMoving: !1,
        options: {
          minDist: 30
        },
        beforeEvent(y) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: y }) {
          _(), y == d.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ deltaY: y, deltaX: u, initialDirection: h }) {
          if (h != d.value) return;
          let p = 0;
          e.placement == "bottom" || e.placement == "top" ? p = y : p = u, e.placement == "bottom" && (p = y > 0 ? y : 0), e.placement == "top" && (p = y < 0 ? y : 0), e.placement == "left" && (p = u < 0 ? y : 0), e.placement == "right" && (p = u > 0 ? y : 0), (e.placement == "bottom" && (p >= 10 || this.isMoving) || e.placement == "top" && (p <= -10 || this.isMoving) || e.placement == "left" && (p >= 10 || this.isMoving) || e.placement == "right" && (p <= -10 || this.isMoving)) && (this.isMoving = !0, r.value.render({
            contentTransform: p + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: y, deltaX: u, initialDirection: h }) {
          if (this.isMoving = !1, _(), h != d.value) {
            r.value.open();
            return;
          }
          let p, S, P;
          e.placement == "bottom" || e.placement == "top" ? (p = n.value.offsetHeight, P = y) : (p = n.value.offsetWidth, P = u), S = P / p * 100, S > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          this.isMoving = !1, _(), r.value.open();
        }
      }));
    }), G(() => {
      a && a.destroy();
    }), (l, y) => (c(), B(D, {
      ref_key: "present",
      ref: r,
      placement: e.placement,
      backdrop: l.backdrop,
      visible: e.visible,
      keepalive: e.keepalive,
      onDismiss: m
    }, {
      default: V(() => [
        e.gesture && e.placement != "center" ? (c(), B(ce, {
          key: 0,
          placement: e.placement
        }, null, 8, ["placement"])) : I("", !0),
        e.closeButton && e.placement == "center" ? (c(), f("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: y[0] || (y[0] = (u) => m("close-button"))
        }, [
          b(l.$slots, "close-icon", {}, () => [
            y[1] || (y[1] = k("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: w({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          b(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), ct = /* @__PURE__ */ g(lt, [["__scopeId", "data-v-0ff00a13"]]), it = { class: "t-input-label" }, ut = { class: "t-input-content" }, dt = ["type", "placeholder", "value"], pt = /* @__PURE__ */ $({
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
    return (r, i) => (c(), f("div", {
      class: x(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      k("label", null, [
        k("span", it, M(r.label), 1),
        k("div", ut, [
          b(r.$slots, "start", {}, void 0, !0),
          k("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, dt),
          b(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(F, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          R(M(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(F, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          R(M(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ g(pt, [["__scopeId", "data-v-1a9425cf"]]), mt = {};
function vt(o, s) {
  return c(), f("textarea");
}
const _t = /* @__PURE__ */ g(mt, [["render", vt]]), gt = {};
function yt(o, s) {
  return c(), f("div");
}
const bt = /* @__PURE__ */ g(gt, [["render", yt]]), ht = {}, kt = { class: "t-grid" };
function $t(o, s) {
  return c(), f("div", kt);
}
const Tt = /* @__PURE__ */ g(ht, [["render", $t]]), wt = {}, xt = { class: "t-grid-item" };
function St(o, s) {
  return c(), f("div", xt);
}
const zt = /* @__PURE__ */ g(wt, [["render", St]]), It = /* @__PURE__ */ $({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), f("div", {
      class: x(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), Bt = /* @__PURE__ */ g(It, [["__scopeId", "data-v-47ee8991"]]), Ct = /* @__PURE__ */ $({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(), i = z(() => {
      let m = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (m = `var(--t-color-status-${e.color})`), {
        "--color": m
      };
    }), a = () => r.value?.parentElement?.querySelector?.("input");
    K(() => {
      let m = a();
      m && (n.value = m.type != "password", t("change", n.value));
    });
    const d = () => {
      let m = a();
      m && (n.value = !n.value, n.value ? m.type = "text" : m.type = "password", t("change", n.value));
    };
    return (m, _) => (c(), f("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: w(i.value),
      onClick: d
    }, [
      n.value ? b(m.$slots, "on", { key: 0 }, () => [
        _[0] || (_[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : b(m.$slots, "off", { key: 1 }, () => [
        _[1] || (_[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Et = /* @__PURE__ */ g(Ct, [["__scopeId", "data-v-3268e9e3"]]), Vt = /* @__PURE__ */ $({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = z(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), f("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: w({ "--size": e.value })
    }, [
      b(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Mt = /* @__PURE__ */ g(Vt, [["__scopeId", "data-v-24384c2f"]]), Pt = { class: "t-collapse-title" }, At = {
  key: 0,
  class: "icon"
}, Rt = {
  key: 1,
  class: "icon"
}, Dt = { class: "t-collapse-content" }, Ot = /* @__PURE__ */ $({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(""), i = v(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (d, m) => (c(), f("div", {
      class: x(["t-collapse", { open: n.value }]),
      style: w({ "--height": r.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        b(d.$slots, "icon"),
        k("div", Pt, [
          b(d.$slots, "title", {}, () => [
            R(M(e.title), 1)
          ])
        ]),
        b(d.$slots, "toggle", {}, () => [
          n.value ? (c(), f("div", At, [...m[0] || (m[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), f("div", Rt, [...m[1] || (m[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Dt, [
        k("div", {
          ref_key: "content",
          ref: i
        }, [
          b(d.$slots, "content", {}, () => [
            b(d.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Nt = /* @__PURE__ */ $({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = z(() => {
      let i = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (i = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), i;
    });
    return (i, a) => (c(), f("div", {
      class: x(["t-switch", { on: e.modelValue }]),
      style: w(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), qt = /* @__PURE__ */ g(Nt, [["__scopeId", "data-v-3616970e"]]), Lt = /* @__PURE__ */ $({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = de("tabsState"), t = z(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), f("li", {
      class: x(["t-tab", { active: t.value }])
    }, [
      W(j, {
        variant: "text",
        onClick: n,
        size: E(e).size,
        color: t.value && E(e).variant == "text" ? E(e).color : void 0
      }, {
        default: V(() => [
          b(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Wt = /* @__PURE__ */ g(Lt, [["__scopeId", "data-v-36c12a50"]]), Ht = /* @__PURE__ */ $({
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
    const e = o, t = s, n = v("0px"), r = v(), i = z(() => {
      let d = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(d) && (d = `var(--t-color-status-${d})`), d;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, _ = d.offsetWidth / 2;
            n.value = m + _ - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, _ = d.offsetHeight / 2;
            n.value = m + _ - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return pe("tabsState", {
      active: z(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (d) => {
        t("update:modelValue", d), a();
      }
    }), K(() => {
      a();
    }), (d, m) => (c(), f("ul", {
      ref_key: "container",
      ref: r,
      class: x(["t-tabs", { [d.placement]: !0, [d.variant]: !0 }]),
      style: w({ "--color": i.value, "--transform": n.value, "--border": d.border + "px" })
    }, [
      b(d.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ut = /* @__PURE__ */ g(Ht, [["__scopeId", "data-v-65a2c74c"]]), Xt = /* @__PURE__ */ $({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(ae, null, {
      default: V(() => [
        W(X, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), jt = /* @__PURE__ */ g(Xt, [["__scopeId", "data-v-1436aa9f"]]), Ft = { key: 0 }, Gt = {
  key: 0,
  class: "t-checkbox-label"
}, Kt = /* @__PURE__ */ $({
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
  setup(o, { emit: s }) {
    const e = o, t = s, n = z(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = z(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), i = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else e.value === void 0 ? t("update:modelValue", !e.modelValue) : t("update:modelValue", e.value);
    };
    return (a, d) => (c(), f("div", {
      class: x(["t-checkbox", { active: r.value }]),
      style: w(n.value),
      onClick: i
    }, [
      k("div", {
        class: x(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), f("div", Ft)) : I("", !0),
        a.type == "check" ? b(a.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = k("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), f("span", Gt, M(e.label), 1)) : I("", !0)
    ], 6));
  }
}), Jt = /* @__PURE__ */ g(Kt, [["__scopeId", "data-v-d558d0b0"]]), Qt = /* @__PURE__ */ $({
  __name: "t-keyboard",
  setup(o) {
    const { height: s } = re();
    return (e, t) => (c(), f("div", {
      class: "t-keyboard",
      style: w({ "--height": E(s) + "px" })
    }, null, 4));
  }
}), Zt = /* @__PURE__ */ g(Qt, [["__scopeId", "data-v-5d3fa1da"]]), ao = () => ({
  install: (o) => {
    _e(), o.component("t-app", he), o.component("t-screen", le), o.component("t-swipe-screen", et), o.component("t-cable", He), o.component("t-toolbar", ot), o.component("t-content", ae), o.component("t-card", Ue), o.component("t-refresher", Ke), o.component("t-button", j), o.component("t-back-button", nt), o.component("t-present", D), o.component("t-text", F), o.component("t-sheet", ct), o.component("t-pull-signal", ce), o.component("t-input", ft), o.component("t-textarea", _t), o.component("t-rich-text", bt), o.component("t-grid", Tt), o.component("t-grid-item", zt), o.component("t-divider", Bt), o.component("t-toggle-password", Et), o.component("t-loading-icon", X), o.component("t-alert", se), o.component("t-avatar", Mt), o.component("t-collapse", Ot), o.component("t-toast", ne), o.component("t-switch", qt), o.component("t-tab", Wt), o.component("t-tabs", Ut), o.component("t-loading-app", jt), o.component("t-checkbox", Jt), o.component("t-keyboard", Zt);
  }
});
export {
  ve as blurCurrentActive,
  so as createAction,
  oo as createAlert,
  no as createLoading,
  ro as createToast,
  ao as createToife,
  me as isFormElement,
  Pe as presentController,
  T as screenController,
  re as useKeyboard
};
