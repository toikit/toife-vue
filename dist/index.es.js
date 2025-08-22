import { createElementBlock as f, openBlock as c, renderSlot as h, defineComponent as T, ref as v, computed as z, reactive as Z, watch as D, onUnmounted as O, Fragment as A, withDirectives as Y, createCommentVNode as S, normalizeStyle as I, normalizeClass as x, vShow as U, createElementVNode as $, createVNode as ee, createBlock as E, withCtx as P, toDisplayString as C, renderList as W, createTextVNode as q, createApp as F, h as G, unref as R, onMounted as te, resolveDynamicComponent as le, markRaw as ce } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as ne, useRoute as ie } from "vue-router";
const L = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), X = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ue = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !L(e.target) && X();
  });
}, b = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, r] of o)
    n[t] = r;
  return n;
}, de = {}, pe = { class: "t-app" };
function fe(e, o) {
  return c(), f("div", pe, [
    h(e.$slots, "default")
  ]);
}
const me = /* @__PURE__ */ b(de, [["render", fe]]), ve = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: o, emit: n }) {
    const t = v(0), r = v(!1), a = v(), l = v(), d = e, _ = n, p = z(() => r.value || d.keepalive), m = Z({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), y = (i) => {
      d.backdrop ? i?.backdropOpacity && (m["--t-present-backdrop-opacity"] = i.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", i?.transition && (m["--t-present-transition"] = i.transition, m["--t-present-transition"] = i.transition), i?.contentTransform && (m["--t-present-content-transform"] = i.contentTransform), i?.contentOpacity && (m["--t-present-content-opacity"] = i.contentOpacity);
    }, s = () => {
      y({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, u = () => {
      let i = "0px", w = "1";
      d.placement == "bottom" || d.placement == "right" ? i = "100%" : d.placement == "top" || d.placement == "left" ? i = "-100%" : d.placement == "center" && (i = "0px", w = "0"), y({
        contentTransform: i,
        transition: "0.2s",
        contentOpacity: w,
        backdropOpacity: "0"
      });
    };
    D(() => d.visible, () => {
      d.visible ? (r.value = !0, t.value = Se.getNewIndex(), setTimeout(() => {
        s();
      }, 50)) : (u(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), o({
      render: y,
      open: s,
      close: u
    });
    let g;
    return D(() => a.value, (i) => {
      i && (g = N(a.value, {
        beforeEvent(w) {
          return w.stopPropagation(), L(w.target) || (w.preventDefault(), X()), w.type == "pointerup";
        },
        up() {
          _("dismiss", "backdrop");
        }
      }));
    }), O(() => {
      g && g.destroy();
    }), u(), (i, w) => (c(), f(A, null, [
      p.value ? Y((c(), f("div", {
        key: 0,
        class: x(["t-present", { [i.placement]: !0 }]),
        ref_key: "present",
        ref: l,
        style: I({ ...m, zIndex: t.value })
      }, [
        h(i.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [U, r.value]
      ]) : S("", !0),
      p.value ? Y((c(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: I({ ...m, zIndex: t.value - 1 })
      }, null, 4)), [
        [U, r.value]
      ]) : S("", !0)
    ], 64));
  }
}), V = /* @__PURE__ */ b(ve, [["__scopeId", "data-v-dc2a4bc9"]]), _e = /* @__PURE__ */ T({
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
    return (o, n) => (c(), f("span", {
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
}), K = /* @__PURE__ */ b(_e, [["__scopeId", "data-v-7c463303"]]), ye = {
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
    const o = e, n = z(() => {
      let t;
      return o.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) ? t = {
        "--color": "var(--t-color-text)",
        "--background-color": "var(--t-color-status-" + o.color + ")"
      } : t = {
        "--color": "var(--t-color-text)",
        "--background-color": o.color
      } : t = {
        "--color": "var(--t-color-text)",
        "--background-color": "transparent"
      }, t;
    });
    return (t, r) => (c(), f("button", {
      class: x(["t-button", { "active-background": o.activeBackground, rounded: o.rounded, block: o.block, ["size-" + o.size]: !0, ["variant-" + o.variant]: !0 }]),
      style: I(n.value)
    }, [
      Y($("span", null, [
        h(t.$slots, "default", {}, void 0, !0)
      ], 512), [
        [U, !o.loading]
      ]),
      o.loading ? (c(), f("span", ye, [
        ee(K, {
          color: "var(--color)",
          type: o.loadingType
        }, null, 8, ["type"])
      ])) : S("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ b(ge, [["__scopeId", "data-v-1f0bf045"]]), he = {
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
  setup(e, { expose: o, emit: n }) {
    const t = e, r = v(!1), a = n, l = v();
    let d;
    const _ = v(!1), p = () => {
      r.value = !0;
    }, m = (s) => {
      r.value = !1, s.handler && s.handler(), a("close", s?.data);
    }, y = (s) => {
      s == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (s) => {
      s && (d = N(l.value, {
        beforeEvent(u) {
          return u.stopPropagation(), L(u.target) || (u.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      d && d.destroy();
    }), (s, u) => (c(), E(V, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: P(() => [
        $("div", {
          class: x(["t-alert", { pop: _.value }]),
          ref_key: "container",
          ref: l
        }, [
          h(s.$slots, "header", {}, () => [
            t.title ? (c(), f("div", he, C(t.title), 1)) : S("", !0)
          ], !0),
          h(s.$slots, "content", {}, () => [
            $("div", be, C(t.message), 1)
          ], !0),
          h(s.$slots, "footer", {}, () => [
            $("div", ke, [
              (c(!0), f(A, null, W(t.actions, (g) => (c(), E(M, {
                color: g.color,
                variant: g.variant,
                onClick: (i) => m(g)
              }, {
                default: P(() => [
                  q(C(g.text), 1)
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
}), oe = /* @__PURE__ */ b($e, [["__scopeId", "data-v-0063c9df"]]), Rt = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let n = document.body.querySelector(".t-app");
      if (!n) return;
      const t = document.createElement("div"), r = v();
      n.appendChild(t);
      const a = F({
        render() {
          return G(oe, {
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
    const t = e, r = v(!1), a = n, l = v();
    let d;
    const _ = v(!1), p = () => {
      r.value = !0;
    }, m = (s) => {
      r.value = !1, s.handler && s.handler(), a("close", s?.data);
    }, y = (s) => {
      s == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return o({
      open: p
    }), D(() => l.value, (s) => {
      s && (d = N(l.value, {
        beforeEvent(u) {
          return u.stopPropagation(), L(u.target) || (u.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      d && d.destroy();
    }), (s, u) => (c(), E(V, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: P(() => [
        $("div", {
          class: x(["t-action", { pop: _.value }]),
          ref_key: "container",
          ref: l
        }, [
          (c(!0), f(A, null, W(t.actions, (g) => (c(), f("div", null, [
            (c(!0), f(A, null, W(g, (i) => (c(), E(M, {
              color: i.color,
              size: i.size,
              variant: i.variant,
              onClick: (w) => m(i),
              block: ""
            }, {
              default: P(() => [
                q(C(i.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), we = /* @__PURE__ */ b(Te, [["__scopeId", "data-v-42000b04"]]), Nt = (e = {}) => ({
  open() {
    return new Promise((o) => {
      let n = document.body.querySelector(".t-app");
      if (!n) return;
      const t = document.createElement("div"), r = v();
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
}), Ie = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = v(!1), a = v();
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
        beforeEvent(m) {
          return m.stopPropagation(), L(m.target) || (m.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      l && l.destroy();
    }), (p, m) => (c(), E(V, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: P(() => [
        $("div", {
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
}), xe = /* @__PURE__ */ b(Ie, [["__scopeId", "data-v-96624ceb"]]), At = (e = {}) => {
  const o = v(), n = document.body.querySelector(".t-app");
  let t = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        n && (r = document.createElement("div"), n.appendChild(r), t = F({
          render() {
            return G(xe, {
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
}, J = v(1e3), Se = {
  getNewIndex() {
    return J.value += 2, J.value;
  }
}, B = Z([]), Ee = (e) => {
  B.push(e);
}, ze = (e) => {
  e || B.pop();
}, k = {
  screens: B,
  addScreen: Ee,
  removeScreen: ze,
  hasPrevious: z(() => B.length > 1),
  currentScreen: z(() => B[B.length - 1]),
  lastScreen: z(() => {
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
    color: { default: "default" },
    variant: { default: "default" }
  },
  emits: ["close"],
  setup(e, { expose: o, emit: n }) {
    const t = e, r = n, a = v(!1), l = v(!1), d = v(!1), _ = () => {
      l.value = !0, d.value = !1, setTimeout(() => {
        a.value = !0;
      }, 10), setTimeout(() => {
        p();
      }, t.duration + 10);
    }, p = () => {
      d.value = !0, setTimeout(() => {
        l.value = !1, a.value = !1, r("close");
      }, 300);
    }, m = z(() => ["warning", "info", "danger", "primary", "secondary", "success", "default"].includes(t.color) ? `var(--t-color-status-${t.color}-rgb)` : t.color);
    return o({
      open: _
    }), (y, s) => l.value ? (c(), f("div", {
      key: 0,
      class: x(["t-toast", { [t.placement]: !0, open: a.value, closing: d.value, ["variant-" + t.variant]: !0 }]),
      style: I({ "--space": t.space, "--color": m.value })
    }, C(t.message), 7)) : S("", !0);
  }
}), se = /* @__PURE__ */ b(Be, [["__scopeId", "data-v-789f0d24"]]), Ot = (e = {}) => ({
  open() {
    let o = document.body.querySelector(".t-app");
    if (!o) return;
    const n = document.createElement("div"), t = v();
    o.appendChild(n);
    const r = F({
      render() {
        return G(se, {
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
}), Ce = v(0);
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
    return (t, r) => (c(), f("div", {
      class: x(["t-cable", { keyboard: o.keyboard && R(n) > 0, [o.placement]: !0 }]),
      style: I({ "--t-keyboard-height": R(n) + "px", "--t-keyboard-transition": R(n) > 0 ? "0.3s" : "0.1s" })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Re = /* @__PURE__ */ b(De, [["__scopeId", "data-v-ecb72421"]]), Ne = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    const o = e;
    return (n, t) => (c(), f("div", {
      class: x(["t-card", { shadow: o.shadow }])
    }, [
      h(n.$slots, "default")
    ], 2));
  }
}), Ae = {}, Oe = { class: "t-content" };
function Le(e, o) {
  return c(), f("div", Oe, [
    h(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Xe = /* @__PURE__ */ b(Ae, [["render", Le], ["__scopeId", "data-v-ea276571"]]), Q = 80, qe = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: o }) {
    const n = o, t = v(0), r = v(!1), a = v();
    let l, d = !1;
    const _ = () => {
      r.value = !1, t.value = 0, l && l.cancel(), setTimeout(() => {
        d = !1;
      }, 2e3);
    }, p = () => {
      d = !0, r.value = !0, t.value = Q, n("refresh", _);
    };
    return D(() => a.value, () => {
      l && l.destroy();
      let m = a.value.closest(".t-screen");
      l = N(m, {
        options: {
          minDist: 60
        },
        move({ dy: y }) {
          r.value || d || y < 0 || (y >= 120 ? p() : t.value = y);
        },
        up({ dy: y }) {
          r.value || d || (y > Q ? p() : t.value = 0);
        },
        cancel() {
          r.value = !1, t.value = 0;
        }
      });
    }), O(() => {
      l && l.destroy();
    }), (m, y) => Y((c(), f("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: I({ height: `${t.value}px` })
    }, [
      $("img", {
        class: x({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [U, t.value > 0]
    ]);
  }
}), Ve = /* @__PURE__ */ b(qe, [["__scopeId", "data-v-7f97bb1a"]]), Ye = {}, Ue = { class: "t-screen" };
function We(e, o) {
  return c(), f("div", Ue, [
    h(e.$slots, "default", {}, void 0, !0)
  ]);
}
const re = /* @__PURE__ */ b(Ye, [["render", We], ["__scopeId", "data-v-66ea8649"]]), Fe = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: o }) {
    let n = {};
    const t = ne(), r = ie(), a = t.getRoutes(), l = v(!1), d = o;
    for (let s of a)
      n[s.name] = s.components;
    const _ = (s) => {
      s && k.addScreen({
        name: s,
        target: null,
        component: ce(n[s] || null)
      });
    }, p = (s, u) => {
      !u || k.screens[s].target || (k.screens[s].target = u.$el, s > 0 && (l.value = !0, u.$el.style.transform = "translateX(100vw)", u.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        u.$el.style.transition = "transform 0.35s ease", u.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), k.screens.length > 1 && (k.lastScreen.value.target.style.transitionOrigin = "left center", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          d("change"), l.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      k.currentScreen.value.target.style.transition = "transform 0.35s ease", k.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), l.value = !0, setTimeout(() => {
        k.removeScreen(), d("change"), l.value = !1;
      }, 400);
    };
    _(r.name), D(() => r.name, (s, u) => {
      s != k.currentScreen.value.name && (k.lastScreen.value?.name == s ? m() : _(s));
    });
    const y = () => {
      l.value = !0;
      const s = k.currentScreen.value.target, u = k.lastScreen.value.target;
      s.style.transition = "transform 0.35s ease", s.style.transform = "translateX(0px)", u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        l.value = !1;
      }, 400);
    };
    return te(() => {
      N(document, {
        pointerId: null,
        beforeEvent(s) {
          return l.value || k.screens.length < 2 ? !1 : (s.type == "pointerdown" && !this.pointerId && (this.pointerId = s.pointerId), this.pointerId == s.pointerId);
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          s == "right" && t.back();
        },
        move({ dx: s }) {
          const u = window.innerWidth, g = s / u * 100, i = k.currentScreen.value.target, w = k.lastScreen?.value?.target;
          if (s > 0 && s <= u) {
            i.style.transition = "transform 0s ease", i.style.transform = `translateX(${s}px)`, w.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), w.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${g}))) scale(${0.5 + 0.5 / 100 * g}) perspective(100vw) rotateY(${30 - 30 / 100 * g}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * g}`);
            return;
          }
        },
        up({ dx: s }) {
          const u = window.innerWidth;
          s / u * 100 >= 50 ? t.back() : y();
        },
        cancel() {
          y();
        }
      });
    }), (s, u) => (c(), f(A, null, [
      (c(!0), f(A, null, W(R(k).screens, (g, i) => (c(), E(re, {
        ref_for: !0,
        ref: (w) => p(i, w),
        style: I({ zIndex: i + (i == R(k).screens.length - 1 ? 2 : 1) }),
        key: i
      }, {
        default: P(() => [
          (c(), E(le(g.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: I({ zIndex: R(k).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ge = /* @__PURE__ */ b(Fe, [["__scopeId", "data-v-a048cc07"]]), He = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const o = e;
    return (n, t) => (c(), f("div", {
      class: x(["t-toolbar", { [o.placement]: !0 }]),
      style: I({ "--t-size-toolbar": o.size })
    }, [
      $("div", null, [
        h(n.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), je = /* @__PURE__ */ b(He, [["__scopeId", "data-v-3b3a7896"]]), Ke = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const o = ne(), n = e, t = () => {
      k.hasPrevious.value ? o?.back?.() : n.to && o?.push?.(n.to);
    };
    return (r, a) => r.to || R(k).hasPrevious ? (c(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: t
    }, [
      h(r.$slots, "default", {}, () => [
        a[0] || (a[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : S("", !0);
  }
}), Me = /* @__PURE__ */ b(Ke, [["__scopeId", "data-v-ed626a3d"]]), Je = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "var(--t-color-text)" },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, n = z(() => {
      let t, r = o.color;
      return o.size == "standard" ? t = "var(--t-fs-10)" : o.size == "small" ? t = "var(--t-fs-08)" : o.size == "large" ? t = "var(--t-fs-12)" : t = o.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (r = `var(--t-color-status-${o.color})`), {
        "--color": r,
        "--font-size": t
      };
    });
    return (t, r) => (c(), f("span", {
      class: "t-text",
      style: I(n.value)
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), j = /* @__PURE__ */ b(Je, [["__scopeId", "data-v-f0f94f05"]]), Qe = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (o, n) => (c(), f("div", {
      class: x(["t-pull-bar", { [o.placement]: !0 }])
    }, null, 2));
  }
}), ae = /* @__PURE__ */ b(Qe, [["__scopeId", "data-v-0e72394a"]]), Ze = /* @__PURE__ */ T({
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
    const n = e, t = o, r = v(), a = v(), l = v(!1);
    let d = null;
    const _ = z(() => {
      if (n.placement == "bottom") return "down";
      if (n.placement == "top") return "up";
      if (n.placement == "left") return "left";
      if (n.placement == "right") return "right";
    }), p = (y) => {
      t("dismiss", y);
    }, m = () => {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 300);
    };
    return D(() => r.value, (y) => {
      y && (d = N(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(s) {
          let u = !1, g = !1;
          return l.value || !n.gesture || n.placement == "center" ? u = !0 : this.pointerId ? (u = !0, g = this.pointerId == s.pointerId) : s.type == "pointerdown" && (this.pointerId = s.pointerId, u = !0, g = !0), u && (s.stopPropagation(), L(s.target) || (s.preventDefault(), X())), g;
        },
        afterEvent(s) {
          (s.type == "pointerup" || s.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: s }) {
          m(), s == _.value ? t("dismiss", "gesture") : a.value.open();
        },
        move({ dy: s, dx: u, d: g }) {
          if (g != _.value) return;
          let i = 0;
          n.placement == "bottom" || n.placement == "top" ? i = s : i = u, a.value.render({
            contentTransform: i + "px",
            transition: "0s"
          });
        },
        up({ dy: s, dx: u, d: g }) {
          if (m(), g != _.value) {
            a.value.open();
            return;
          }
          let i, w, H;
          n.placement == "bottom" || n.placement == "top" ? (i = r.value.offsetHeight, H = s) : (i = r.value.offsetWidth, H = u), w = H / i * 100, w > 50 ? t("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          m(), a.value.open();
        }
      }));
    }), O(() => {
      d && d.destroy();
    }), (y, s) => (c(), E(V, {
      ref_key: "present",
      ref: a,
      placement: n.placement,
      backdrop: y.backdrop,
      visible: n.visible,
      keepalive: n.keepalive,
      onDismiss: p
    }, {
      default: P(() => [
        n.gesture && n.placement != "center" ? (c(), E(ae, {
          key: 0,
          placement: n.placement
        }, null, 8, ["placement"])) : S("", !0),
        $("div", {
          class: x(["t-sheet", { fullscreen: n.fullscreen, [n.placement]: !0, rounded: y.rounded }]),
          style: I({ "--background": n.background }),
          ref_key: "sheet",
          ref: r
        }, [
          n.closeButton && n.placement == "center" ? (c(), f("button", {
            key: 0,
            class: "t-sheet-close",
            onClick: s[0] || (s[0] = (u) => p("close-button"))
          }, [
            h(y.$slots, "close-icon", {}, () => [
              s[1] || (s[1] = $("i", { class: "ri-close-large-line" }, null, -1))
            ], !0)
          ])) : S("", !0),
          h(y.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), et = /* @__PURE__ */ b(Ze, [["__scopeId", "data-v-d3e50f27"]]), tt = { class: "t-input-label" }, nt = { class: "t-input-content" }, ot = ["type", "placeholder", "value"], st = /* @__PURE__ */ T({
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
    return (a, l) => (c(), f("div", {
      class: x(["t-input", { rounded: n.rounded, ["size-" + n.size]: !0 }])
    }, [
      $("label", null, [
        $("span", tt, C(a.label), 1),
        $("div", nt, [
          h(a.$slots, "start", {}, void 0, !0),
          $("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, ot),
          h(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      n.error ? (c(), E(j, {
        key: 0,
        color: "danger"
      }, {
        default: P(() => [
          q(C(n.error), 1)
        ]),
        _: 1
      })) : n.help ? (c(), E(j, {
        key: 1,
        color: "secondary"
      }, {
        default: P(() => [
          q(C(n.help), 1)
        ]),
        _: 1
      })) : S("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ b(st, [["__scopeId", "data-v-75bf0d19"]]), at = {};
function lt(e, o) {
  return c(), f("textarea");
}
const ct = /* @__PURE__ */ b(at, [["render", lt]]), it = {};
function ut(e, o) {
  return c(), f("div");
}
const dt = /* @__PURE__ */ b(it, [["render", ut]]), pt = {}, ft = { class: "t-grid" };
function mt(e, o) {
  return c(), f("div", ft);
}
const vt = /* @__PURE__ */ b(pt, [["render", mt]]), _t = {}, yt = { class: "t-grid-item" };
function gt(e, o) {
  return c(), f("div", yt);
}
const ht = /* @__PURE__ */ b(_t, [["render", gt]]), bt = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const o = e;
    return (n, t) => (c(), f("div", {
      class: x(["t-divider", { [o.type]: !0 }])
    }, null, 2));
  }
}), kt = /* @__PURE__ */ b(bt, [["__scopeId", "data-v-ea7dc220"]]), $t = /* @__PURE__ */ T({
  __name: "t-toogle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const n = e, t = o, r = v(!1), a = v(), l = z(() => {
      let p = n.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (p = `var(--t-color-status-${n.color})`), {
        "--color": p
      };
    }), d = () => a.value?.parentElement?.querySelector?.("input");
    te(() => {
      let p = d();
      p && (r.value = p.type != "password", t("change", r.value));
    });
    const _ = () => {
      let p = d();
      p && (r.value = !r.value, r.value ? p.type = "text" : p.type = "password", t("change", r.value));
    };
    return (p, m) => (c(), f("button", {
      ref_key: "toogle",
      ref: a,
      class: "t-toogle-password",
      style: I(l.value),
      onClick: _
    }, [
      r.value ? h(p.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : S("", !0),
      r.value ? S("", !0) : h(p.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), Tt = /* @__PURE__ */ b($t, [["__scopeId", "data-v-f133b8be"]]), wt = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const o = e, n = z(() => o.size == "small" ? "24px" : o.size == "standard" ? "40px" : o.size == "large" ? "60px" : o.size);
    return (t, r) => (c(), f("div", {
      class: x(["t-avatar", { square: t.square }]),
      style: I({ "--size": n.value })
    }, [
      h(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), It = /* @__PURE__ */ b(wt, [["__scopeId", "data-v-24384c2f"]]), xt = { class: "t-collapse-title" }, St = {
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
    const n = e, t = o, r = v(!1), a = v(""), l = v(), d = () => {
      r.value = !r.value, a.value = `calc(${l.value.offsetHeight}px + 2rem)`, t("change", r.value);
    };
    return t("change", r.value), (_, p) => (c(), f("div", {
      class: x(["t-collapse", { open: r.value }]),
      style: I({ "--height": a.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: d
      }, [
        h(_.$slots, "icon"),
        $("div", xt, [
          h(_.$slots, "title", {}, () => [
            q(C(n.title), 1)
          ])
        ]),
        h(_.$slots, "toogle", {}, () => [
          r.value ? (c(), f("div", St, [...p[0] || (p[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (c(), f("div", Et, [...p[1] || (p[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", zt, [
        $("div", {
          ref_key: "content",
          ref: l
        }, [
          h(_.$slots, "content", {}, () => [
            h(_.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Lt = () => ({
  install: (e) => {
    ue(), e.component("t-app", me), e.component("t-screen", re), e.component("t-swipe-screen", Ge), e.component("t-cable", Re), e.component("t-toolbar", je), e.component("t-content", Xe), e.component("t-card", Ne), e.component("t-refresher", Ve), e.component("t-button", M), e.component("t-back-button", Me), e.component("t-present", V), e.component("t-text", j), e.component("t-sheet", et), e.component("t-pull-signal", ae), e.component("t-input", rt), e.component("t-textarea", ct), e.component("t-rich-text", dt), e.component("t-grid", vt), e.component("t-grid-item", ht), e.component("t-divider", kt), e.component("t-toogle-password", Tt), e.component("t-loading-icon", K), e.component("t-alert", oe), e.component("t-avatar", It), e.component("t-collapse", Bt), e.component("t-toast", se);
  }
});
export {
  X as blurCurrentActive,
  Nt as createAction,
  Rt as createAlert,
  At as createLoading,
  Ot as createToast,
  Lt as createToife,
  L as isFormElement,
  Se as presentController,
  k as screenController,
  Pe as useKeyboard
};
