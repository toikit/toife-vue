import { createElementBlock as f, openBlock as c, renderSlot as b, defineComponent as T, ref as v, computed as S, reactive as Z, watch as D, onUnmounted as A, Fragment as V, withDirectives as Y, createCommentVNode as E, normalizeStyle as I, normalizeClass as x, vShow as U, createElementVNode as k, createVNode as ee, createBlock as z, withCtx as P, toDisplayString as B, renderList as W, createTextVNode as X, createApp as F, h as G, unref as R, onMounted as te, resolveDynamicComponent as le, markRaw as ce } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as ne, useRoute as ie } from "vue-router";
const O = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), L = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ue = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !O(e.target) && L();
  });
}, y = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, de = {}, pe = { class: "t-app" };
function fe(e, o) {
  return c(), f("div", pe, [
    b(e.$slots, "default")
  ]);
}
const me = /* @__PURE__ */ y(de, [["render", fe]]), ve = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: t }) {
    const n = v(0), s = v(!1), a = v(), l = v(), i = e, _ = t, p = S(() => s.value || i.keepalive), m = Z({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), g = (u) => {
      i.backdrop ? u?.backdropOpacity && (m["--t-present-backdrop-opacity"] = u.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", u?.transition && (m["--t-present-transition"] = u.transition, m["--t-present-transition"] = u.transition), u?.contentTransform && (m["--t-present-content-transform"] = u.contentTransform), u?.contentOpacity && (m["--t-present-content-opacity"] = u.contentOpacity);
    }, r = () => {
      g({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, d = () => {
      let u = "0px", w = "1";
      i.placement == "bottom" || i.placement == "right" ? u = "100%" : i.placement == "top" || i.placement == "left" ? u = "-100%" : i.placement == "center" && (u = "0px", w = "0"), g({
        contentTransform: u,
        transition: "0.2s",
        contentOpacity: w,
        backdropOpacity: "0"
      });
    };
    D(() => i.visible, () => {
      i.visible ? (s.value = !0, n.value = Se.getNewIndex(), setTimeout(() => {
        r();
      }, 50)) : (d(), setTimeout(() => {
        s.value = !1;
      }, 200));
    }), o({
      render: g,
      open: r,
      close: d
    });
    let h;
    return D(() => a.value, (u) => {
      u && (h = N(a.value, {
        beforeEvent(w) {
          return w.stopPropagation(), O(w.target) || (w.preventDefault(), L()), w.type == "pointerup";
        },
        up() {
          _("dismiss", "backdrop");
        }
      }));
    }), A(() => {
      h && h.destroy();
    }), d(), (u, w) => (c(), f(V, null, [
      p.value ? Y((c(), f("div", {
        key: 0,
        class: x(["t-present", { [u.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: I({ ...m, zIndex: n.value })
      }, [
        b(u.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [U, s.value]
      ]) : E("", !0),
      p.value ? Y((c(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: I({ ...m, zIndex: n.value - 1 })
      }, null, 4)), [
        [U, s.value]
      ]) : E("", !0)
    ], 64));
  }
}), q = /* @__PURE__ */ y(ve, [["__scopeId", "data-v-dc2a4bc9"]]), _e = /* @__PURE__ */ T({
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
    return (o, t) => (c(), f("span", {
      class: "t-loading-icon",
      style: I({
        width: e.size,
        height: e.size,
        borderTopColor: e.color
      }),
      role: "status",
      "aria-label": "Loading..."
    }, null, 4));
  }
}), K = /* @__PURE__ */ y(_e, [["__scopeId", "data-v-7c463303"]]), ye = {
  key: 0,
  class: "loader"
}, ge = /* @__PURE__ */ T({
  __name: "t-button",
  props: {
    color: { default: "" },
    size: { default: "standard" },
    rounded: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingType: { default: "spinner" },
    variant: { default: "default" },
    activeBackground: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = S(() => {
      let n;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? n = {
        "--color": "var(--t-color-status-" + o.color + "-text)",
        "--background-color": "var(--t-color-status-" + o.color + ")"
      } : n = {
        "--color": "var(--t-color-text)",
        "--background-color": o.color
      } : n = {
        "--color": "var(--t-color-text)",
        "--background-color": "transparent"
      }, n;
    });
    return (n, s) => (c(), f("button", {
      class: x(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }]),
      style: I(t.value)
    }, [
      Y(k("span", null, [
        b(n.$slots, "default", {}, void 0, !0)
      ], 512), [
        [U, !o.loading]
      ]),
      o.loading ? (c(), f("span", ye, [
        ee(K, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ y(ge, [["__scopeId", "data-v-cdfe6af8"]]), he = {
  key: 0,
  class: "t-alert-header"
}, be = { class: "t-alert-content" }, ke = { class: "t-alert-footer" }, $e = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: o, emit: t }) {
    const n = e, s = v(!1), a = t, l = v();
    let i;
    const _ = v(!1), p = () => {
      s.value = !0;
    }, m = (r) => {
      s.value = !1, r.handler && r.handler(), a("close", r?.data);
    }, g = (r) => {
      r == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (r) => {
      r && (i = N(l.value, {
        beforeEvent(d) {
          return d.stopPropagation(), O(d.target) || (d.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (r, d) => (c(), z(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: g
    }, {
      default: P(() => [
        k("div", {
          class: x(["t-alert", { pop: _.value }]),
          ref_key: "container",
          ref: l
        }, [
          b(r.$slots, "header", {}, () => [
            n.title ? (c(), f("div", he, B(n.title), 1)) : E("", !0)
          ], !0),
          b(r.$slots, "content", {}, () => [
            k("div", be, B(n.message), 1)
          ], !0),
          b(r.$slots, "footer", {}, () => [
            k("div", ke, [
              (c(!0), f(V, null, W(n.actions, (h) => (c(), z(M, {
                color: h.color,
                variant: h.variant,
                onClick: (u) => m(h)
              }, {
                default: P(() => [
                  X(B(h.text), 1)
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
}), oe = /* @__PURE__ */ y($e, [["__scopeId", "data-v-5b4773ce"]]), Lt = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const n = document.createElement("div"), s = v();
      t.appendChild(n);
      const a = F({
        render() {
          return G(oe, {
            ...e,
            ref: s,
            onClose: (l) => {
              setTimeout(() => {
                a.unmount(), n.remove();
              }, 300), o(l);
            }
          });
        }
      });
      a.mount(n), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), Te = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: o, emit: t }) {
    const n = e, s = v(!1), a = t, l = v();
    let i;
    const _ = v(!1), p = () => {
      s.value = !0;
    }, m = (r) => {
      s.value = !1, r.handler && r.handler(), a("close", r?.data);
    }, g = (r) => {
      r == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (r) => {
      r && (i = N(l.value, {
        beforeEvent(d) {
          return d.stopPropagation(), O(d.target) || (d.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (r, d) => (c(), z(q, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: s.value,
      onDismiss: g
    }, {
      default: P(() => [
        k("div", {
          class: x(["t-action", { pop: _.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), f(V, null, W(n.actions, (h) => (c(), f("div", null, [
            (c(!0), f(V, null, W(h, (u) => (c(), z(M, {
              color: u.color,
              size: u.size,
              variant: u.variant,
              onClick: (w) => m(u),
              block: ""
            }, {
              default: P(() => [
                X(B(u.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), we = /* @__PURE__ */ y(Te, [["__scopeId", "data-v-42000b04"]]), Xt = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let t = document.body.querySelector(".t-app");
      if (!t) return;
      const n = document.createElement("div"), s = v();
      t.appendChild(n);
      const a = F({
        render() {
          return G(we, {
            ...e,
            ref: s,
            onClose: (l) => {
              setTimeout(() => {
                a.unmount(), n.remove();
              }, 300), o(l);
            }
          });
        }
      });
      a.mount(n), setTimeout(() => {
        s.value?.open?.();
      }, 50);
    });
  }
}), Ie = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: t }) {
    const n = e, s = v(!1), a = v();
    let l;
    return o({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), D(() => a.value, (p) => {
      p && (l = N(a.value, {
        beforeEvent(m) {
          return m.stopPropagation(), O(m.target) || (m.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      l && l.destroy();
    }), (p, m) => (c(), z(q, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: s.value
    }, {
      default: P(() => [
        k("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          b(p.$slots, "default", {}, () => [
            ee(K, {
              type: n.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), xe = /* @__PURE__ */ y(Ie, [["__scopeId", "data-v-96624ceb"]]), qt = (e = {}) => {
  const o = v(), t = document.body.querySelector(".t-app");
  let n = null, s = null;
  return {
    open() {
      return new Promise((a) => {
        t && (s = document.createElement("div"), t.appendChild(s), n = F({
          render() {
            return G(xe, {
              ...e,
              ref: o
            });
          }
        }), n.mount(s), setTimeout(() => {
          o.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        o.value?.close?.(), setTimeout(() => {
          n?.unmount?.(), s?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, J = v(1e3), Se = {
  getNewIndex() {
    return J.value += 2, J.value;
  }
}, C = Z([]), Ee = (e) => {
  C.push(e);
}, ze = (e) => {
  e || C.pop();
}, $ = {
  screens: C,
  addScreen: Ee,
  removeScreen: ze,
  hasPrevious: S(() => C.length > 1),
  currentScreen: S(() => C[C.length - 1]),
  lastScreen: S(() => {
    if (!(C.length < 2))
      return C[C.length - 2];
  })
}, Ce = /* @__PURE__ */ T({
  __name: "t-toast",
  props: {
    message: {},
    space: { default: "0px" },
    placement: { default: "bottom" },
    duration: { default: 2e3 },
    color: { default: "secondary" },
    variant: { default: "default" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: t }) {
    const n = e, s = t, a = v(!1), l = v(!1), i = v(!1), _ = () => {
      l.value = !0, i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, n.duration + 10);
    }, p = () => {
      i.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, s("close");
      }, 300);
    }, m = S(() => ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? `var(--t-color-status-${n.color}-rgb)` : n.color);
    return o({
      open: _
    }), (g, r) => l.value ? (c(), f("div", {
      key: 0,
      class: x(["t-toast", { [n.placement]: !0, open: a.value, closing: i.value, ["variant-" + n.variant]: !0 }]),
      style: I({ "--space": n.space, "--color": m.value })
    }, B(n.message), 7)) : E("", !0);
  }
}), se = /* @__PURE__ */ y(Ce, [["__scopeId", "data-v-5b3334bc"]]), Yt = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const t = document.createElement("div"), n = v();
    o.appendChild(t);
    const s = F({
      render() {
        return G(se, {
          ...e,
          ref: n,
          onClose: () => {
            setTimeout(() => {
              s.unmount(), t.remove();
            }, 300);
          }
        });
      }
    });
    s.mount(t), setTimeout(() => {
      n.value?.open?.();
    }, 50);
  }
}), Be = v(0);
function Pe() {
  return {
    height: Be
  };
}
const De = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const o = e, { height: t } = Pe();
    return (n, s) => (c(), f("div", {
      class: x(["t-cable", { keyboard: o.keyboard && R(t) > 0, [o.placement]: !0 }]),
      style: I({ "--t-keyboard-height": R(t) + "px", "--t-keyboard-transition": R(t) > 0 ? "0.3s" : "0.1s" })
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Re = /* @__PURE__ */ y(De, [["__scopeId", "data-v-ecb72421"]]), Ne = {}, Ve = { class: "t-card" };
function Ae(e, o) {
  return c(), f("div", Ve, [
    b(e.$slots, "default")
  ]);
}
const Oe = /* @__PURE__ */ y(Ne, [["render", Ae]]), Le = {}, Xe = { class: "t-content" };
function qe(e, o) {
  return c(), f("div", Xe, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Ye = /* @__PURE__ */ y(Le, [["render", qe], ["__scopeId", "data-v-9a833657"]]), Q = 80, Ue = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: o }) {
    const t = o, n = v(0), s = v(!1), a = v();
    let l, i = !1;
    const _ = () => {
      s.value = !1, n.value = 0, l && l.cancel(), setTimeout(() => {
        i = !1;
      }, 2e3);
    }, p = () => {
      i = !0, s.value = !0, n.value = Q, t("refresh", _);
    };
    return D(() => a.value, () => {
      l && l.destroy();
      let m = a.value.closest(".t-screen");
      l = N(m, {
        options: {
          minDist: 60
        },
        move({ dy: g }) {
          s.value || i || g < 0 || (g >= 120 ? p() : n.value = g);
        },
        up({ dy: g }) {
          s.value || i || (g > Q ? p() : n.value = 0);
        },
        cancel() {
          s.value = !1, n.value = 0;
        }
      });
    }), A(() => {
      l && l.destroy();
    }), (m, g) => Y((c(), f("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: I({ height: `${n.value}px` })
    }, [
      k("img", {
        class: x({ spiner: s.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [U, n.value > 0]
    ]);
  }
}), We = /* @__PURE__ */ y(Ue, [["__scopeId", "data-v-7f97bb1a"]]), Fe = {}, Ge = { class: "t-screen" };
function He(e, o) {
  return c(), f("div", Ge, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ y(Fe, [["render", He], ["__scopeId", "data-v-66ea8649"]]), je = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: o }) {
    let t = {};
    const n = ne(), s = ie(), a = n.getRoutes(), l = v(!1), i = o;
    for (let r of a)
      t[r.name] = r.components;
    const _ = (r) => {
      r && $.addScreen({
        name: r,
        target: null,
        component: ce(t[r] || null)
      });
    }, p = (r, d) => {
      !d || $.screens[r].target || ($.screens[r].target = d.$el, r > 0 && (l.value = !0, d.$el.style.transform = "translateX(100vw)", d.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        d.$el.style.transition = "transform 0.35s ease", d.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), $.screens.length > 1 && ($.lastScreen.value.target.style.transitionOrigin = "left center", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          i("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      $.currentScreen.value.target.style.transition = "transform 0.35s ease", $.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", $.lastScreen.value.target.style.transition = "transform 0.35s ease", $.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        $.removeScreen(), i("change"), l.value = !1;
      }, 400);
    };
    _(s.name), D(() => s.name, (r, d) => {
      r != $.currentScreen.value.name && ($.lastScreen.value?.name == r ? m() : _(r));
    });
    const g = () => {
      l.value = !0;
      const r = $.currentScreen.value.target, d = $.lastScreen.value.target;
      r.style.transition = "transform 0.35s ease", r.style.transform = "translateX(0px)", d.style.transition = "transform 0.35s ease", d.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return te(() => {
      N(document, {
        pointerId: null,
        beforeEvent(r) {
          return l.value || $.screens.length < 2 ? !1 : (r.type == "pointerdown" && !this.pointerId && (this.pointerId = r.pointerId), this.pointerId == r.pointerId);
        },
        afterEvent(r) {
          (r.type == "pointerup" || r.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          r == "right" && n.back();
        },
        move({ dx: r }) {
          const d = window.innerWidth, h = r / d * 100, u = $.currentScreen.value.target, w = $.lastScreen?.value?.target;
          if (r > 0 && r <= d) {
            u.style.transition = "transform 0s ease", u.style.transform = `translateX(${r}px)`, w.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), w.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${h}))) scale(${0.5 + 0.5 / 100 * h}) perspective(100vw) rotateY(${30 - 30 / 100 * h}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * h}`);
            return;
          }
        },
        up({ dx: r }) {
          const d = window.innerWidth;
          r / d * 100 >= 50 ? n.back() : g();
        },
        cancel() {
          g();
        }
      });
    }), (r, d) => (c(), f(V, null, [
      (c(!0), f(V, null, W(R($).screens, (h, u) => (c(), z(re, {
        ref_for: !0,
        ref: (w) => p(u, w),
        style: I({ zIndex: u + (u == R($).screens.length - 1 ? 2 : 1) }),
        key: u
      }, {
        default: P(() => [
          (c(), z(le(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: I({ zIndex: R($).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ke = /* @__PURE__ */ y(je, [["__scopeId", "data-v-a048cc07"]]), Me = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e;
    return (t, n) => (c(), f("div", {
      class: x(["t-toolbar", { [o.placement]: !0 }]),
      style: I({ "--t-size-toolbar": o.size })
    }, [
      k("div", null, [
        b(t.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Je = /* @__PURE__ */ y(Me, [["__scopeId", "data-v-3b3a7896"]]), Qe = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const o = ne(), t = e, n = () => {
      $.hasPrevious.value ? o?.back?.() : t.to && o?.push?.(t.to);
    };
    return (s, a) => s.to || R($).hasPrevious ? (c(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: n
    }, [
      b(s.$slots, "default", {}, () => [
        a[0] || (a[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), Ze = /* @__PURE__ */ y(Qe, [["__scopeId", "data-v-ed626a3d"]]), et = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = S(() => {
      let n, s = o.color;
      return o.size == "standard" ? n = "var(--t-fs-10)" : o.size == "small" ? n = "var(--t-fs-08)" : o.size == "large" ? n = "var(--t-fs-12)" : n = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (s = `var(--t-color-status-${o.color})`), {
        "--color": s,
        "--font-size": n
      };
    });
    return (n, s) => (c(), f("span", {
      class: "t-text",
      style: I(t.value)
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), j = /* @__PURE__ */ y(et, [["__scopeId", "data-v-f0f94f05"]]), tt = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, t) => (c(), f("div", {
      class: x(["t-pull-bar", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ y(tt, [["__scopeId", "data-v-d2297b66"]]), nt = /* @__PURE__ */ T({
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
    closeButton: { type: Boolean, default: !0 }
  },
  emits: ["dismiss"],
  setup(e, { emit: o }) {
    const t = e, n = o, s = v(), a = v(), l = v(!1);
    let i = null;
    const _ = S(() => {
      if (t.placement == "bottom") return "down";
      if (t.placement == "top") return "up";
      if (t.placement == "left") return "left";
      if (t.placement == "right") return "right";
    }), p = (g) => {
      n("dismiss", g);
    }, m = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return D(() => s.value, (g) => {
      g && (i = N(s.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(r) {
          let d = !1, h = !1;
          return l.value || !t.gesture || t.placement == "center" ? d = !0 : this.pointerId ? (d = !0, h = this.pointerId == r.pointerId) : r.type == "pointerdown" && (this.pointerId = r.pointerId, d = !0, h = !0), d && (r.stopPropagation(), O(r.target) || (r.preventDefault(), L())), h;
        },
        afterEvent(r) {
          (r.type == "pointerup" || r.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: r }) {
          m(), r == _.value ? n("dismiss", "gesture") : a.value.open();
        },
        move({ dy: r, dx: d, d: h }) {
          if (h != _.value) return;
          let u = 0;
          t.placement == "bottom" || t.placement == "top" ? u = r : u = d, a.value.render({
            contentTransform: u + "px",
            transition: "0s"
          });
        },
        up({ dy: r, dx: d, d: h }) {
          if (m(), h != _.value) {
            a.value.open();
            return;
          }
          let u, w, H;
          t.placement == "bottom" || t.placement == "top" ? (u = s.value.offsetHeight, H = r) : (u = s.value.offsetWidth, H = d), w = H / u * 100, w > 50 ? n("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          m(), a.value.open();
        }
      }));
    }), A(() => {
      i && i.destroy();
    }), (g, r) => (c(), z(q, {
      ref_key: "present",
      ref: a,
      placement: t.placement,
      backdrop: g.backdrop,
      visible: t.visible,
      keepalive: t.keepalive,
      onDismiss: p
    }, {
      default: P(() => [
        t.gesture && t.placement != "center" ? (c(), z(ae, {
          key: 0,
          placement: t.placement
        }, null, 8, ["placement"])) : E("", !0),
        k("div", {
          class: x(["t-sheet", { fullscreen: t.fullscreen, [t.placement]: !0, rounded: g.rounded }]),
          style: I({ "--background": t.background }),
          ref_key: "sheet",
          ref: s
        }, [
          t.closeButton && t.placement == "center" ? (c(), f("button", {
            key: 0,
            class: "t-sheet-close",
            onClick: r[0] || (r[0] = (d) => p("close-button"))
          }, [
            b(g.$slots, "close-icon", {}, () => [
              r[1] || (r[1] = k("i", { class: "ri-close-large-line" }, null, -1))
            ], !0)
          ])) : E("", !0),
          b(g.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), ot = /* @__PURE__ */ y(nt, [["__scopeId", "data-v-d5772132"]]), st = { class: "t-input-label" }, rt = { class: "t-input-content" }, at = ["type", "placeholder", "value"], lt = /* @__PURE__ */ T({
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
    const t = e, n = o, s = (a) => {
      n("update:modelValue", a.target.value);
    };
    return (a, l) => (c(), f("div", {
      class: x(["t-input", { rounded: t.rounded, ["size-" + t.size]: !0 }])
    }, [
      k("label", null, [
        k("span", st, B(a.label), 1),
        k("div", rt, [
          b(a.$slots, "start", {}, void 0, !0),
          k("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: s
          }, null, 40, at),
          b(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      t.error ? (c(), z(j, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          X(B(t.error), 1)
        ]),
        _: 1
      })) : t.help ? (c(), z(j, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          X(B(t.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ y(lt, [["__scopeId", "data-v-75bf0d19"]]), it = {};
function ut(e, o) {
  return c(), f("textarea");
}
const dt = /* @__PURE__ */ y(it, [["render", ut]]), pt = {};
function ft(e, o) {
  return c(), f("div");
}
const mt = /* @__PURE__ */ y(pt, [["render", ft]]), vt = {}, _t = { class: "t-grid" };
function yt(e, o) {
  return c(), f("div", _t);
}
const gt = /* @__PURE__ */ y(vt, [["render", yt]]), ht = {}, bt = { class: "t-grid-item" };
function kt(e, o) {
  return c(), f("div", bt);
}
const $t = /* @__PURE__ */ y(ht, [["render", kt]]), Tt = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (t, n) => (c(), f("div", {
      class: x(["t-divider", { [o.type]: !0 }])
    }, null, 2));
  }
}), wt = /* @__PURE__ */ y(Tt, [["__scopeId", "data-v-816784be"]]), It = /* @__PURE__ */ T({
  __name: "t-toggle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, n = o, s = v(!1), a = v(), l = S(() => {
      let p = t.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (p = `var(--t-color-status-${t.color})`), {
        "--color": p
      };
    }), i = () => a.value?.parentElement?.querySelector?.("input");
    te(() => {
      let p = i();
      p && (s.value = p.type != "password", n("change", s.value));
    });
    const _ = () => {
      let p = i();
      p && (s.value = !s.value, s.value ? p.type = "text" : p.type = "password", n("change", s.value));
    };
    return (p, m) => (c(), f("button", {
      ref_key: "toggle",
      ref: a,
      class: "t-toggle-password",
      style: I(l.value),
      onClick: _
    }, [
      s.value ? b(p.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      s.value ? E("", !0) : b(p.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ y(It, [["__scopeId", "data-v-3268e9e3"]]), St = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, t = S(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (n, s) => (c(), f("div", {
      class: x(["t-avatar", { square: n.square }]),
      style: I({ "--size": t.value })
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Et = /* @__PURE__ */ y(St, [["__scopeId", "data-v-24384c2f"]]), zt = { class: "t-collapse-title" }, Ct = {
  key: 0,
  class: "icon"
}, Bt = {
  key: 1,
  class: "icon"
}, Pt = { class: "t-collapse-content" }, Dt = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, n = o, s = v(!1), a = v(""), l = v(), i = () => {
      s.value = !s.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, n("change", s.value);
    };
    return n("change", s.value), (_, p) => (c(), f("div", {
      class: x(["t-collapse", { open: s.value }]),
      style: I({ "--height": a.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: i
      }, [
        b(_.$slots, "icon"),
        k("div", zt, [
          b(_.$slots, "title", {}, () => [
            X(B(t.title), 1)
          ])
        ]),
        b(_.$slots, "toggle", {}, () => [
          s.value ? (c(), f("div", Ct, [...p[0] || (p[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), f("div", Bt, [...p[1] || (p[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", Pt, [
        k("div", {
          ref_key: "content",
          ref: l
        }, [
          b(_.$slots, "content", {}, () => [
            b(_.$slots, "default")
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
  setup(e, { emit: o }) {
    const t = e, n = o, s = () => {
      n("update:modelValue", !t.modelValue);
    }, a = S(() => ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? `var(--t-color-status-${t.color})` : t.color);
    return (l, i) => (c(), f("div", {
      class: x(["t-switch", { on: t.modelValue }]),
      style: I({ "--background-color": a.value }),
      onClick: s
    }, [...i[0] || (i[0] = [
      k("div", { class: "t-switch-icon" }, null, -1)
    ])], 6));
  }
}), Nt = /* @__PURE__ */ y(Rt, [["__scopeId", "data-v-ef10da22"]]), Ut = () => ({
  install: (e) => {
    ue(), e.component("t-app", me), e.component("t-screen", re), e.component("t-swipe-screen", Ke), e.component("t-cable", Re), e.component("t-toolbar", Je), e.component("t-content", Ye), e.component("t-card", Oe), e.component("t-refresher", We), e.component("t-button", M), e.component("t-back-button", Ze), e.component("t-present", q), e.component("t-text", j), e.component("t-sheet", ot), e.component("t-pull-signal", ae), e.component("t-input", ct), e.component("t-textarea", dt), e.component("t-rich-text", mt), e.component("t-grid", gt), e.component("t-grid-item", $t), e.component("t-divider", wt), e.component("t-toggle-password", xt), e.component("t-loading-icon", K), e.component("t-alert", oe), e.component("t-avatar", Et), e.component("t-collapse", Dt), e.component("t-toast", se), e.component("t-switch", Nt);
  }
});
export {
  L as blurCurrentActive,
  Xt as createAction,
  Lt as createAlert,
  qt as createLoading,
  Yt as createToast,
  Ut as createToife,
  O as isFormElement,
  Se as presentController,
  $ as screenController,
  Pe as useKeyboard
};
