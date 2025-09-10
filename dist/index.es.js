import { createElementBlock as p, openBlock as c, renderSlot as h, defineComponent as b, ref as v, computed as x, reactive as te, watch as L, Fragment as R, withDirectives as O, createCommentVNode as I, normalizeStyle as T, normalizeClass as S, vShow as N, createElementVNode as $, createVNode as W, createBlock as B, withCtx as V, toDisplayString as M, renderList as q, createTextVNode as A, createApp as H, h as U, unref as E, onUnmounted as G, onMounted as K, resolveDynamicComponent as ie, markRaw as ue, inject as de, provide as pe } from "vue";
import { gesture as J } from "@toife/gesture";
import { useRouter as oe, useRoute as fe } from "vue-router";
const me = (o) => o && (o.tagName == "INPUT" || o.tagName == "TEXTAREA" || o.isContentEditable), ve = () => {
  const o = document.activeElement;
  o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && o.blur();
}, _e = () => {
  document.addEventListener("contextmenu", (o) => o.preventDefault()), document.addEventListener("selectstart", (o) => o.preventDefault()), document.addEventListener("pointerup", (o) => {
    !me(o.target) && ve();
  });
}, _ = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, ye = {}, ge = { class: "t-app" };
function he(o, s) {
  return c(), p("div", ge, [
    h(o.$slots, "default")
  ]);
}
const be = /* @__PURE__ */ _(ye, [["render", he]]), ke = /* @__PURE__ */ b({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(o, { expose: s, emit: e }) {
    const t = v(0), n = v(!1), r = v(), i = v(), a = o, d = e, m = x(() => n.value || a.keepalive), y = te({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), l = (f) => {
      a.backdrop ? f?.backdropOpacity && (y["--t-present-backdrop-opacity"] = f.backdropOpacity) : y["--t-present-backdrop-opacity"] = "0", f?.transition && (y["--t-present-transition"] = f.transition, y["--t-present-transition"] = f.transition), f?.contentTransform && (y["--t-present-content-transform"] = f.contentTransform), f?.contentOpacity && (y["--t-present-content-opacity"] = f.contentOpacity);
    }, g = () => {
      l({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, u = () => {
      let f = "0px", z = "1";
      a.placement == "bottom" || a.placement == "right" ? f = "100%" : a.placement == "top" || a.placement == "left" ? f = "-100%" : a.placement == "center" && (f = "0px", z = "0"), l({
        contentTransform: f,
        transition: "0.2s",
        contentOpacity: z,
        backdropOpacity: "0"
      });
    };
    L(() => a.visible, () => {
      a.visible ? (n.value = !0, t.value = Re.getNewIndex(), setTimeout(() => {
        g();
      }, 50)) : (u(), setTimeout(() => {
        n.value = !1;
      }, 200));
    }), s({
      render: l,
      open: g,
      close: u
    });
    const k = (f) => {
      f.preventDefault(), d("dismiss", "backdrop");
    };
    return u(), (f, z) => (c(), p(R, null, [
      m.value ? O((c(), p("div", {
        key: 0,
        class: S(["t-present", { [f.placement]: !0 }]),
        ref_key: "present",
        ref: i,
        style: T({ ...y, zIndex: t.value })
      }, [
        h(f.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [N, n.value]
      ]) : I("", !0),
      m.value ? O((c(), p("div", {
        key: 1,
        class: "t-present-backdrop",
        onClick: k,
        ref_key: "backdrop",
        ref: r,
        style: T({ ...y, zIndex: t.value - 1 })
      }, null, 4)), [
        [N, n.value]
      ]) : I("", !0)
    ], 64));
  }
}), D = /* @__PURE__ */ _(ke, [["__scopeId", "data-v-3d0c3227"]]), $e = /* @__PURE__ */ b({
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
    return (s, e) => (c(), p("span", {
      class: "t-loading-icon",
      style: T({
        width: o.size,
        height: o.size,
        borderTopColor: o.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), X = /* @__PURE__ */ _($e, [["__scopeId", "data-v-7c463303"]]), we = { class: "t-button-content" }, Te = {
  key: 0,
  class: "loader"
}, xe = /* @__PURE__ */ b({
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
    const s = o, e = x(() => {
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
    return (t, n) => (c(), p("button", {
      class: S(["t-button", { "active-background": s.activeBackground, rounded: s.rounded, block: s.block, ["size-" + s.size]: !0 }]),
      style: T(e.value)
    }, [
      O($("span", we, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [N, !s.loading]
      ]),
      s.loading ? (c(), p("span", Te, [
        W(X, {
          color: "var(--color)",
          type: s.loadingType
        }, null, 8, ["type"])
      ])) : I("", !0)
    ], 6));
  }
}), j = /* @__PURE__ */ _(xe, [["__scopeId", "data-v-185a9e49"]]), Se = {
  key: 0,
  class: "t-alert-header"
}, ze = { class: "t-alert-content" }, Ie = { class: "t-alert-footer" }, Be = /* @__PURE__ */ b({
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
    }, y = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, g) => (c(), B(D, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-alert", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          h(l.$slots, "header", {}, () => [
            t.title ? (c(), p("div", Se, M(t.title), 1)) : I("", !0)
          ], !0),
          h(l.$slots, "content", {}, () => [
            $("div", ze, M(t.message), 1)
          ], !0),
          h(l.$slots, "footer", {}, () => [
            $("div", Ie, [
              (c(!0), p(R, null, q(t.actions, (u) => (c(), B(j, {
                color: u.color,
                variant: u.variant,
                onClick: (k) => m(u)
              }, {
                default: V(() => [
                  A(M(u.text), 1)
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
}), se = /* @__PURE__ */ _(Be, [["__scopeId", "data-v-05d0c578"]]), lo = (o = {}) => ({
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
}), Ce = /* @__PURE__ */ b({
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
    }, y = (l) => {
      t.dismiss && t.dismiss.includes(l) ? (n.value = !1, r("dismiss", l)) : l == "backdrop" && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 300));
    };
    return s({
      open: d
    }), (l, g) => (c(), B(D, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: n.value,
      onDismiss: y
    }, {
      default: V(() => [
        $("div", {
          class: S(["t-action", { pop: a.value }]),
          ref_key: "container",
          ref: i
        }, [
          (c(!0), p(R, null, q(t.actions, (u) => (c(), p("div", null, [
            (c(!0), p(R, null, q(u, (k) => (c(), B(j, {
              color: k.color,
              size: k.size,
              variant: k.variant,
              onClick: (f) => m(k),
              block: ""
            }, {
              default: V(() => [
                A(M(k.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Ee = /* @__PURE__ */ _(Ce, [["__scopeId", "data-v-c6bccffb"]]), co = (o = {}) => ({
  open() {
    return new Promise((s) => {
      let e = document.body.querySelector(".t-app");
      if (!e) return;
      const t = document.createElement("div"), n = v();
      e.appendChild(t);
      const r = H({
        render() {
          return U(Ee, {
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
}), Ve = { class: "t-loading" }, Me = /* @__PURE__ */ b({
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
        $("div", Ve, [
          h(a.$slots, "default", {}, () => [
            W(X, {
              type: t.type
            }, null, 8, ["type"])
          ], !0)
        ])
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Pe = /* @__PURE__ */ _(Me, [["__scopeId", "data-v-8f84c14e"]]), io = (o = {}) => {
  const s = v(), e = document.body.querySelector(".t-app");
  let t = null, n = null;
  return {
    open() {
      return new Promise((r) => {
        e && (n = document.createElement("div"), e.appendChild(n), t = H({
          render() {
            return U(Pe, {
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
}, Y = v(1e3), Re = {
  getNewIndex() {
    return Y.value += 2, Y.value;
  }
}, C = te([]), Q = v(!0), Ae = (o) => {
  C.push(o);
}, De = (o) => {
  o || C.pop();
}, Oe = () => {
  C.splice(0, C.length);
}, Ne = () => {
  Q.value = !1;
}, qe = () => {
  Q.value = !0;
}, w = {
  screens: C,
  addScreen: Ae,
  removeScreen: De,
  removeAllScreen: Oe,
  lockSwipe: Ne,
  unlockSwipe: qe,
  swipeable: Q,
  hasPrevious: x(() => C.length > 1),
  currentScreen: x(() => C[C.length - 1]),
  lastScreen: x(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Le = /* @__PURE__ */ b({
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
    }, y = x(() => {
      let l;
      return t.variant == "default" && (t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? l = {
        "--border": "none",
        "--color": "var(--t-color-status-" + t.color + "-text)",
        "--background": "var(--t-color-status-" + t.color + ")"
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": t.color
      } : l = {
        "--border": "none",
        "--color": "var(--t-color-text)",
        "--background": "var(--t-color-surface)"
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
    }), (l, g) => i.value ? (c(), p("div", {
      key: 0,
      class: S(["t-toast", { [t.placement]: !0, open: r.value, closing: a.value }]),
      style: T({ "--space": t.space, ...y.value })
    }, M(t.message), 7)) : I("", !0);
  }
}), ne = /* @__PURE__ */ _(Le, [["__scopeId", "data-v-7754026e"]]), uo = (o = {}) => ({
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
}), We = v(0);
function re() {
  return {
    height: We
  };
}
const He = /* @__PURE__ */ b({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(o) {
    const s = o, { height: e } = re();
    return (t, n) => (c(), p("div", {
      class: S(["t-cable", { keyboard: s.keyboard && E(e) > 0, [s.placement]: !0 }]),
      style: T({ "--t-keyboard-height": E(e) + "px", "--t-keyboard-transition": E(e) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ue = /* @__PURE__ */ _(He, [["__scopeId", "data-v-ecb72421"]]), Xe = /* @__PURE__ */ b({
  __name: "t-card",
  props: {
    color: { default: null }
  },
  setup(o) {
    const s = o, e = x(() => {
      let t;
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--background": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--background": s.color
      } : t = {
        "--background": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (c(), p("div", {
      class: "t-card",
      style: T(e.value)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), je = {}, Fe = { class: "t-content" };
function Ge(o, s) {
  return c(), p("div", Fe, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const ae = /* @__PURE__ */ _(je, [["render", Ge], ["__scopeId", "data-v-3fd76212"]]), ee = 80, Ke = /* @__PURE__ */ b({
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
      let y = r.value.closest(".t-content");
      y && (i = J(y, {
        isMoving: !1,
        options: {
          minDist: 60
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaY: l, initialDirection: g }) {
          n.value || a || g != "down" || (l >= 120 ? (this.isMoving = !1, m()) : (l > 10 || this.isMoving) && (this.isMoving = !0, t.value = l > 0 ? l : 0));
        },
        up({ deltaY: l, initialDirection: g }) {
          this.isMoving = !1, !(n.value || a) && (l > ee && g == "down" ? m() : t.value = 0);
        },
        cancel() {
          this.isMoving = !1, !(n.value || a) && (n.value = !1, t.value = 0);
        }
      }, {
        passive: !1
      }));
    }), G(() => {
      i && i.destroy();
    }), (y, l) => O((c(), p("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: r,
      style: T({ height: `${t.value}px` })
    }, [
      $("img", {
        class: S({ spiner: n.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [N, t.value > 0]
    ]);
  }
}), Je = /* @__PURE__ */ _(Ke, [["__scopeId", "data-v-c6364c14"]]), Qe = {}, Ze = { class: "t-screen" };
function Ye(o, s) {
  return c(), p("div", Ze, [
    h(o.$slots, "default", {}, void 0, !0)
  ]);
}
const le = /* @__PURE__ */ _(Qe, [["render", Ye], ["__scopeId", "data-v-c2a3436c"]]), et = /* @__PURE__ */ b({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(o, { emit: s }) {
    let e = {};
    const t = oe(), n = fe(), r = t.getRoutes(), i = v(!1), a = s;
    for (let u of r)
      e[u.name] = u.components;
    const d = (u) => {
      u && w.addScreen({
        name: u,
        target: null,
        component: ue(e[u] || null)
      });
    }, m = (u, k) => {
      !k || w.screens[u].target || (w.screens[u].target = k.$el, u > 0 && (i.value = !0, k.$el.style.transform = "translateX(var(--t-app-width))", k.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        k.$el.style.transition = "transform 0.35s ease", k.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), w.screens.length > 1 && (w.lastScreen.value.target.style.transitionOrigin = "left center", w.lastScreen.value.target.style.transition = "transform 0.35s ease", w.lastScreen.value.target.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)"), setTimeout(() => {
          a("change"), i.value = !1;
        }, 400);
      }, 100)));
    }, y = () => {
      w.currentScreen.value.target.style.transition = "transform 0.35s ease", w.currentScreen.value.target.style.transform = "translateX(var(--t-app-width)) scale(1)", w.lastScreen.value.target.style.transition = "transform 0.35s ease", w.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(var(--t-app-width)) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), i.value = !0, setTimeout(() => {
        w.removeScreen(), a("change"), i.value = !1;
      }, 400);
    };
    d(n.name), L(() => n.name, (u, k) => {
      u != w.currentScreen.value.name && (w.lastScreen.value?.name == u ? y() : d(u));
    });
    const l = () => {
      i.value = !0;
      const u = w.currentScreen.value.target, k = w.lastScreen.value.target;
      u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(0px)", k.style.transition = "transform 0.35s ease", k.style.transform = "translateX(calc(var(--t-app-width) / 100 * 30 * -1)) scale(0.5) perspective(var(--t-app-width)) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        i.value = !1;
      }, 400);
    };
    let g;
    return K(() => {
      g = J(document.body, {
        isMoving: !1,
        beforeEvent(u) {
          return !(i.value || !w.swipeable.value || w.screens.length < 2);
        },
        fast({ initialDirection: u }) {
          u == "right" && t.back();
        },
        down() {
          this.isMoving = !1;
        },
        move({ deltaX: u, initialDirection: k }) {
          if (k != "right") return;
          const f = window.innerWidth, z = u / f * 100, P = w.currentScreen.value.target, Z = w.lastScreen?.value?.target;
          (u > 15 && u <= f || this.isMoving) && (u = u > 0 ? u : 0, this.isMoving = !0, P.style.transition = "transform 0s ease", P.style.transform = `translateX(${u}px)`, Z.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), Z.style.transform = `translateX(calc((var(--t-app-width) / 100 * 30 * -1) + ((var(--t-app-width) / 100 * 30) / 100 * ${z}))) scale(${0.5 + 0.5 / 100 * z}) perspective(var(--t-app-width)) rotateY(${30 - 30 / 100 * z}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * z}`));
        },
        up({ deltaX: u, initialDirection: k }) {
          this.isMoving = !1, k != "right" && l();
          const f = window.innerWidth;
          u / f * 100 >= 50 ? t.back() : l();
        },
        cancel() {
          this.isMoving = !1, l();
        }
      });
    }), G(() => {
      g && g.destroy(), w.removeAllScreen();
    }), (u, k) => (c(), p(R, null, [
      (c(!0), p(R, null, q(E(w).screens, (f, z) => (c(), B(le, {
        ref_for: !0,
        ref: (P) => m(z, P),
        style: T({ zIndex: z + (z == E(w).screens.length - 1 ? 2 : 1) }),
        key: z
      }, {
        default: V(() => [
          (c(), B(ie(f.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: T({ zIndex: E(w).screens.length })
      }, null, 4)
    ], 64));
  }
}), tt = /* @__PURE__ */ _(et, [["__scopeId", "data-v-abea77ec"]]), ot = /* @__PURE__ */ b({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    safe: { type: Boolean, default: !0 },
    size: { default: "50px" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), p("div", {
      class: S(["t-toolbar", { [s.placement]: !0, safe: s.safe }]),
      style: T({ "--t-size-toolbar": s.size })
    }, [
      $("div", null, [
        h(e.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), st = /* @__PURE__ */ _(ot, [["__scopeId", "data-v-db1924b1"]]), nt = /* @__PURE__ */ b({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(o) {
    const s = oe(), e = o, t = () => {
      w.hasPrevious.value ? s?.back?.() : e.to && s?.push?.(e.to);
    };
    return (n, r) => n.to || E(w).hasPrevious ? (c(), p("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(n.$slots, "default", {}, () => [
        r[0] || (r[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : I("", !0);
  }
}), rt = /* @__PURE__ */ _(nt, [["__scopeId", "data-v-ed626a3d"]]), at = /* @__PURE__ */ b({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = x(() => {
      let t, n = s.color;
      return s.size == "standard" ? t = "var(--t-fs-10)" : s.size == "small" ? t = "var(--t-fs-08)" : s.size == "large" ? t = "var(--t-fs-12)" : t = s.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (n = `var(--t-color-status-${s.color})`), {
        "--color": n,
        "--font-size": t
      };
    });
    return (t, n) => (c(), p("span", {
      class: "t-text",
      style: T(e.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), F = /* @__PURE__ */ _(at, [["__scopeId", "data-v-f0f94f05"]]), lt = /* @__PURE__ */ b({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(o) {
    return (s, e) => (c(), p("div", {
      class: S(["t-pull-bar", { [s.placement]: !0 }])
    }, null, 2));
  }
}), ce = /* @__PURE__ */ _(lt, [["__scopeId", "data-v-daa38c85"]]), ct = /* @__PURE__ */ b({
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
    const d = x(() => {
      if (e.placement == "bottom") return "down";
      if (e.placement == "top") return "up";
      if (e.placement == "left") return "left";
      if (e.placement == "right") return "right";
    }), m = (l) => {
      t("dismiss", l);
    }, y = () => {
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
        beforeEvent(g) {
          return !(i.value || !e.gesture || e.placement == "center");
        },
        down() {
          this.isMoving = !1;
        },
        fast({ initialDirection: g }) {
          y(), g == d.value ? t("dismiss", "gesture") : r.value.open();
        },
        move({ deltaY: g, deltaX: u, initialDirection: k }) {
          if (k != d.value) return;
          let f = 0;
          e.placement == "bottom" || e.placement == "top" ? f = g : f = u, e.placement == "bottom" && (f = g > 0 ? g : 0), e.placement == "top" && (f = g < 0 ? g : 0), e.placement == "left" && (f = u < 0 ? g : 0), e.placement == "right" && (f = u > 0 ? g : 0), (e.placement == "bottom" && (f >= 10 || this.isMoving) || e.placement == "top" && (f <= -10 || this.isMoving) || e.placement == "left" && (f >= 10 || this.isMoving) || e.placement == "right" && (f <= -10 || this.isMoving)) && (this.isMoving = !0, r.value.render({
            contentTransform: f + "px",
            transition: "0s"
          }));
        },
        up({ deltaY: g, deltaX: u, initialDirection: k }) {
          if (this.isMoving = !1, y(), k != d.value) {
            r.value.open();
            return;
          }
          let f, z, P;
          e.placement == "bottom" || e.placement == "top" ? (f = n.value.offsetHeight, P = g) : (f = n.value.offsetWidth, P = u), z = P / f * 100, z > 50 ? t("dismiss", "gesture") : r.value.open();
        },
        cancel() {
          this.isMoving = !1, y(), r.value.open();
        }
      }));
    }), G(() => {
      a && a.destroy();
    }), (l, g) => (c(), B(D, {
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
        e.closeButton && e.placement == "center" ? (c(), p("button", {
          key: 1,
          class: "t-sheet-close",
          onClick: g[0] || (g[0] = (u) => m("close-button"))
        }, [
          h(l.$slots, "close-icon", {}, () => [
            g[1] || (g[1] = $("i", { class: "ri-close-large-line" }, null, -1))
          ], !0)
        ])) : I("", !0),
        $("div", {
          class: S(["t-sheet", { fullscreen: e.fullscreen, [e.placement]: !0, rounded: l.rounded, radius: e.radius }]),
          style: T({ "--background": e.background }),
          ref_key: "sheet",
          ref: n
        }, [
          h(l.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), it = /* @__PURE__ */ _(ct, [["__scopeId", "data-v-0ff00a13"]]), ut = { class: "t-input-label" }, dt = { class: "t-input-content" }, pt = ["type", "placeholder", "value"], ft = /* @__PURE__ */ b({
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
    return (r, i) => (c(), p("div", {
      class: S(["t-input", { rounded: e.rounded, ["size-" + e.size]: !0, ["variant-" + e.variant]: !0 }])
    }, [
      $("label", null, [
        $("span", ut, M(r.label), 1),
        $("div", dt, [
          h(r.$slots, "start", {}, void 0, !0),
          $("input", {
            type: r.type,
            placeholder: r.placeholder,
            value: r.modelValue,
            onInput: n
          }, null, 40, pt),
          h(r.$slots, "end", {}, void 0, !0)
        ])
      ]),
      e.error ? (c(), B(F, {
        key: 0,
        color: "danger"
      }, {
        default: V(() => [
          A(M(e.error), 1)
        ]),
        _: 1
      })) : e.help ? (c(), B(F, {
        key: 1,
        color: "secondary"
      }, {
        default: V(() => [
          A(M(e.help), 1)
        ]),
        _: 1
      })) : I("", !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ _(ft, [["__scopeId", "data-v-1a9425cf"]]), vt = {};
function _t(o, s) {
  return c(), p("textarea");
}
const yt = /* @__PURE__ */ _(vt, [["render", _t]]), gt = {};
function ht(o, s) {
  return c(), p("div");
}
const bt = /* @__PURE__ */ _(gt, [["render", ht]]), kt = {}, $t = { class: "t-grid" };
function wt(o, s) {
  return c(), p("div", $t);
}
const Tt = /* @__PURE__ */ _(kt, [["render", wt]]), xt = {}, St = { class: "t-grid-item" };
function zt(o, s) {
  return c(), p("div", St);
}
const It = /* @__PURE__ */ _(xt, [["render", zt]]), Bt = /* @__PURE__ */ b({
  __name: "t-divider",
  props: {
    direction: { default: "horizontal" }
  },
  setup(o) {
    const s = o;
    return (e, t) => (c(), p("div", {
      class: S(["t-divider", { [s.direction]: !0 }])
    }, null, 2));
  }
}), Ct = /* @__PURE__ */ _(Bt, [["__scopeId", "data-v-47ee8991"]]), Et = /* @__PURE__ */ b({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(), i = x(() => {
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
    return (m, y) => (c(), p("button", {
      ref_key: "toggle",
      ref: r,
      class: "t-toggle-password",
      style: T(i.value),
      onClick: d
    }, [
      n.value ? h(m.$slots, "on", { key: 0 }, () => [
        y[0] || (y[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : I("", !0),
      n.value ? I("", !0) : h(m.$slots, "off", { key: 1 }, () => [
        y[1] || (y[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Vt = /* @__PURE__ */ _(Et, [["__scopeId", "data-v-3268e9e3"]]), Mt = /* @__PURE__ */ b({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(o) {
    const s = o, e = x(() => s.size == "small" ? "24px" : s.size == "standard" ? "40px" : s.size == "large" ? "60px" : s.size);
    return (t, n) => (c(), p("div", {
      class: S(["t-avatar", { square: t.square }]),
      style: T({ "--size": e.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Pt = /* @__PURE__ */ _(Mt, [["__scopeId", "data-v-24384c2f"]]), Rt = { class: "t-collapse-title" }, At = {
  key: 0,
  class: "icon"
}, Dt = {
  key: 1,
  class: "icon"
}, Ot = { class: "t-collapse-content" }, Nt = /* @__PURE__ */ b({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = v(!1), r = v(""), i = v(), a = () => {
      n.value = !n.value, r.value = `calc(${i.value.offsetHeight}px + 2rem)`, t("change", n.value);
    };
    return t("change", n.value), (d, m) => (c(), p("div", {
      class: S(["t-collapse", { open: n.value }]),
      style: T({ "--height": r.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: a
      }, [
        h(d.$slots, "icon"),
        $("div", Rt, [
          h(d.$slots, "title", {}, () => [
            A(M(e.title), 1)
          ])
        ]),
        h(d.$slots, "toggle", {}, () => [
          n.value ? (c(), p("div", At, [...m[0] || (m[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), p("div", Dt, [...m[1] || (m[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", Ot, [
        $("div", {
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
}), qt = /* @__PURE__ */ b({
  __name: "t-switch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: s }) {
    const e = o, t = s, n = () => {
      t("update:modelValue", !e.modelValue);
    }, r = x(() => {
      let i = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (i = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), i;
    });
    return (i, a) => (c(), p("div", {
      class: S(["t-switch", { on: e.modelValue }]),
      style: T(r.value),
      onClick: n
    }, [...a[0] || (a[0] = [
      $("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Lt = /* @__PURE__ */ _(qt, [["__scopeId", "data-v-3616970e"]]), Wt = /* @__PURE__ */ b({
  __name: "t-tab",
  props: {
    value: {}
  },
  setup(o) {
    const s = o, e = de("tabsState"), t = x(() => e.active.value === s.value), n = () => {
      e.setActive(s.value);
    };
    return (r, i) => (c(), p("li", {
      class: S(["t-tab", { active: t.value }])
    }, [
      W(j, {
        variant: "text",
        onClick: n,
        size: E(e).size,
        color: t.value && E(e).variant == "text" ? E(e).color : void 0
      }, {
        default: V(() => [
          h(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
}), Ht = /* @__PURE__ */ _(Wt, [["__scopeId", "data-v-36c12a50"]]), Ut = /* @__PURE__ */ b({
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
    const e = o, t = s, n = v("0px"), r = v(), i = x(() => {
      let d = e.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(d) && (d = `var(--t-color-status-${d})`), d;
    }), a = () => {
      setTimeout(() => {
        if (e.placement.startsWith("top-") || e.placement.startsWith("bottom-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().left - r.value.getBoundingClientRect().left + r.value.scrollLeft, y = d.offsetWidth / 2;
            n.value = m + y - e.border / 2 + "px";
          }
        } else if (e.placement.startsWith("left-") || e.placement.startsWith("right-")) {
          let d = r.value.querySelector(".active");
          if (d) {
            let m = d.getBoundingClientRect().top - r.value.getBoundingClientRect().top + r.value.scrollTop, y = d.offsetHeight / 2;
            n.value = m + y - e.border / 2 + "px";
          }
        }
      }, 50);
    };
    return pe("tabsState", {
      active: x(() => e.modelValue),
      color: i.value,
      size: e.size,
      variant: e.variant,
      setActive: (d) => {
        t("update:modelValue", d), a();
      }
    }), K(() => {
      a();
    }), (d, m) => (c(), p("ul", {
      ref_key: "container",
      ref: r,
      class: S(["t-tabs", { [d.placement]: !0, [d.variant]: !0 }]),
      style: T({ "--color": i.value, "--transform": n.value, "--border": d.border + "px" })
    }, [
      h(d.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Xt = /* @__PURE__ */ _(Ut, [["__scopeId", "data-v-65a2c74c"]]), jt = /* @__PURE__ */ b({
  __name: "t-loading-app",
  setup(o) {
    return (s, e) => (c(), B(ae, null, {
      default: V(() => [
        W(X, { type: "spinner" })
      ]),
      _: 1
    }));
  }
}), Ft = /* @__PURE__ */ _(jt, [["__scopeId", "data-v-1436aa9f"]]), Gt = { key: 0 }, Kt = {
  key: 0,
  class: "t-checkbox-label"
}, Jt = /* @__PURE__ */ b({
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
    const e = o, t = s, n = x(() => {
      let a = {
        "--background": e.color,
        "--color": "#ffffff"
      };
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(e.color) && (a = {
        "--background": `var(--t-color-status-${e.color})`,
        "--color": `var(--t-color-status-${e.color}-text)`
      }), a;
    }), r = x(() => e.multiple ? e.modelValue.includes(e.value) : e.value === void 0 ? e.modelValue : e.modelValue == e.value), i = () => {
      if (e.multiple) {
        let a = e.modelValue;
        e.modelValue.includes(e.value) ? a.splice(a.indexOf(e.value), 1) : a.push(e.value), t("update:modelValue", a);
      } else e.value === void 0 ? t("update:modelValue", !e.modelValue) : t("update:modelValue", e.value);
    };
    return (a, d) => (c(), p("div", {
      class: S(["t-checkbox", { active: r.value }]),
      style: T(n.value),
      onClick: i
    }, [
      $("div", {
        class: S(`t-checkbox-${a.type}`)
      }, [
        a.type == "radio" ? (c(), p("div", Gt)) : I("", !0),
        a.type == "check" ? h(a.$slots, "icon", { key: 1 }, () => [
          d[0] || (d[0] = $("i", { class: "ri-check-line" }, null, -1))
        ], !0) : I("", !0)
      ], 2),
      a.label ? (c(), p("span", Kt, M(e.label), 1)) : I("", !0)
    ], 6));
  }
}), Qt = /* @__PURE__ */ _(Jt, [["__scopeId", "data-v-d558d0b0"]]), Zt = /* @__PURE__ */ b({
  __name: "t-keyboard",
  setup(o) {
    const { height: s } = re();
    return (e, t) => (c(), p("div", {
      class: "t-keyboard",
      style: T({ "--height": E(s) + "px" })
    }, null, 4));
  }
}), Yt = /* @__PURE__ */ _(Zt, [["__scopeId", "data-v-5d3fa1da"]]), eo = /* @__PURE__ */ b({
  __name: "t-skeleton",
  props: {
    width: { default: "100%" },
    height: { default: "1rem" },
    radius: { default: "8px" },
    color: { default: null }
  },
  setup(o) {
    const s = o, e = x(() => ({
      "--width": s.width,
      "--height": s.height,
      "--radius": s.radius
    }));
    return (t, n) => (c(), p("div", {
      class: "t-skeleton",
      style: T(e.value)
    }, null, 4));
  }
}), to = /* @__PURE__ */ _(eo, [["__scopeId", "data-v-877bbdb5"]]), oo = /* @__PURE__ */ b({
  __name: "t-ripple",
  props: {
    color: { default: "primary" }
  },
  setup(o) {
    const s = o, e = x(() => {
      let t = {};
      return s.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) ? t = {
        "--color": "var(--t-color-status-" + s.color + ")"
      } : t = {
        "--color": s.color
      } : t = {
        "--color": "var(--t-color-surface)"
      }, t;
    });
    return (t, n) => (c(), p("div", {
      class: "t-ripple",
      style: T(e.value)
    }, null, 4));
  }
}), so = /* @__PURE__ */ _(oo, [["__scopeId", "data-v-42cb3d71"]]), po = () => ({
  install: (o) => {
    _e(), o.component("t-app", be), o.component("t-screen", le), o.component("t-swipe-screen", tt), o.component("t-cable", Ue), o.component("t-toolbar", st), o.component("t-content", ae), o.component("t-card", Xe), o.component("t-refresher", Je), o.component("t-button", j), o.component("t-back-button", rt), o.component("t-present", D), o.component("t-text", F), o.component("t-sheet", it), o.component("t-pull-signal", ce), o.component("t-input", mt), o.component("t-textarea", yt), o.component("t-rich-text", bt), o.component("t-grid", Tt), o.component("t-grid-item", It), o.component("t-divider", Ct), o.component("t-toggle-password", Vt), o.component("t-loading-icon", X), o.component("t-alert", se), o.component("t-avatar", Pt), o.component("t-collapse", Nt), o.component("t-toast", ne), o.component("t-switch", Lt), o.component("t-tab", Ht), o.component("t-tabs", Xt), o.component("t-loading-app", Ft), o.component("t-checkbox", Qt), o.component("t-keyboard", Yt), o.component("t-skeleton", to), o.component("t-ripple", so);
  }
});
export {
  ve as blurCurrentActive,
  co as createAction,
  lo as createAlert,
  io as createLoading,
  uo as createToast,
  po as createToife,
  me as isFormElement,
  Re as presentController,
  w as screenController,
  re as useKeyboard
};
