import { createElementBlock as u, openBlock as a, renderSlot as m, defineComponent as w, normalizeStyle as I, normalizeClass as S, computed as x, withDirectives as X, createCommentVNode as z, createElementVNode as k, vShow as R, createVNode as ne, ref as $, watch as C, onUnmounted as V, reactive as j, Fragment as L, createBlock as B, withCtx as D, toDisplayString as P, renderList as M, createTextVNode as A, onMounted as J, unref as O, resolveDynamicComponent as se, markRaw as oe } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as K, useRoute as re } from "vue-router";
const q = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), Y = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ae = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !q(e.target) && Y();
  });
}, g = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [o, r] of n)
    s[o] = r;
  return s;
}, le = {}, ce = { class: "t-app" };
function ie(e, n) {
  return a(), u("div", ce, [
    m(e.$slots, "default")
  ]);
}
const ue = /* @__PURE__ */ g(le, [["render", ie]]), de = /* @__PURE__ */ w({
  __name: "t-cable",
  props: {
    keyboard: { default: 0 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const n = e;
    return (s, o) => (a(), u("div", {
      class: S(["t-cable", { keyboard: n.keyboard > 0, [n.placement]: !0 }]),
      style: I({ "--t-keyboard-height": n.keyboard + "px", "--t-keyboard-transition": n.keyboard > 0 ? "0.3s" : "0.1s" })
    }, [
      m(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), pe = /* @__PURE__ */ g(de, [["__scopeId", "data-v-3a6a070c"]]), fe = /* @__PURE__ */ w({
  __name: "t-loading-icon",
  props: {
    size: {
      type: String,
      default: "24px"
    },
    color: {
      type: String,
      default: "var(--t-color-default-10)"
    }
  },
  setup(e) {
    return (n, s) => (a(), u("span", {
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
}), Q = /* @__PURE__ */ g(fe, [["__scopeId", "data-v-82ecd6f5"]]), me = {
  key: 0,
  class: "loader"
}, ve = /* @__PURE__ */ w({
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
    const n = e, s = x(() => {
      let o;
      return n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? o = {
        "--color": "var(--t-color-default-1)",
        "--background-color": "var(--t-color-" + n.color + "-6)"
      } : o = {
        "--color": "var(--t-color-default-1)",
        "--background-color": n.color
      } : o = {
        "--color": "var(--t-color-default-10)",
        "--background-color": "transparent"
      }, o;
    });
    return (o, r) => (a(), u("button", {
      class: S(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0, ["variant-" + n.variant]: !0 }]),
      style: I(s.value)
    }, [
      X(k("span", null, [
        m(o.$slots, "default", {}, void 0, !0)
      ], 512), [
        [R, !n.loading]
      ]),
      n.loading ? (a(), u("span", me, [
        ne(Q, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : z("", !0)
    ], 6));
  }
}), Z = /* @__PURE__ */ g(ve, [["__scopeId", "data-v-e6b432c9"]]), _e = /* @__PURE__ */ w({
  __name: "t-card",
  props: {
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e;
    return (s, o) => (a(), u("div", {
      class: S(["t-card", { shadow: n.shadow }])
    }, [
      m(s.$slots, "default")
    ], 2));
  }
}), ye = {}, he = { class: "t-content" };
function ge(e, n) {
  return a(), u("div", he, [
    m(e.$slots, "default", {}, void 0, !0)
  ]);
}
const be = /* @__PURE__ */ g(ye, [["render", ge], ["__scopeId", "data-v-ea276571"]]), G = 80, ke = /* @__PURE__ */ w({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: n }) {
    const s = n, o = $(0), r = $(!1), l = $();
    let d, p = !1;
    const b = () => {
      r.value = !1, o.value = 0, d && d.cancel(), setTimeout(() => {
        p = !1;
      }, 2e3);
    }, f = () => {
      p = !0, r.value = !0, o.value = G, s("refresh", b);
    };
    return C(() => l.value, () => {
      d && d.destroy();
      let v = l.value.closest(".t-screen");
      d = N(v, {
        options: {
          minDist: 60
        },
        move({ dy: _ }) {
          r.value || p || _ < 0 || (_ >= 120 ? f() : o.value = _);
        },
        up({ dy: _ }) {
          r.value || p || (_ > G ? f() : o.value = 0);
        },
        cancel() {
          r.value = !1, o.value = 0;
        }
      });
    }), V(() => {
      d && d.destroy();
    }), (v, _) => X((a(), u("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: l,
      style: I({ height: `${o.value}px` })
    }, [
      k("img", {
        class: S({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [R, o.value > 0]
    ]);
  }
}), $e = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-7f97bb1a"]]), we = {}, Te = { class: "t-screen" };
function Ie(e, n) {
  return a(), u("div", Te, [
    m(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ee = /* @__PURE__ */ g(we, [["render", Ie], ["__scopeId", "data-v-d749ca41"]]), Se = /* @__PURE__ */ w({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: n, emit: s }) {
    const o = $(0), r = $(!1), l = $(), d = $(), p = e, b = s, f = x(() => r.value || p.keepalive), v = j({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), _ = (c) => {
      p.backdrop ? c?.backdropOpacity && (v["--t-present-backdrop-opacity"] = c.backdropOpacity) : v["--t-present-backdrop-opacity"] = "0", c?.transition && (v["--t-present-transition"] = c.transition, v["--t-present-transition"] = c.transition), c?.contentTransform && (v["--t-present-content-transform"] = c.contentTransform), c?.contentOpacity && (v["--t-present-content-opacity"] = c.contentOpacity);
    }, t = () => {
      _({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, i = () => {
      let c = "0px", T = "1";
      p.placement == "bottom" || p.placement == "right" ? c = "100%" : p.placement == "top" || p.placement == "left" ? c = "-100%" : p.placement == "center" && (c = "0px", T = "0"), _({
        contentTransform: c,
        transition: "0.2s",
        contentOpacity: T,
        backdropOpacity: "0"
      });
    };
    C(() => p.visible, () => {
      p.visible ? (r.value = !0, o.value = Ce.getNewIndex(), setTimeout(() => {
        t();
      }, 50)) : (i(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), n({
      render: _,
      open: t,
      close: i
    });
    let y;
    return C(() => l.value, (c) => {
      c && (y = N(l.value, {
        beforeEvent(T) {
          return T.stopPropagation(), q(T.target) || (T.preventDefault(), Y()), T.type == "pointerup";
        },
        up() {
          b("dismiss", "backdrop");
        }
      }));
    }), V(() => {
      y && y.destroy();
    }), i(), (c, T) => (a(), u(L, null, [
      f.value ? X((a(), u("div", {
        key: 0,
        class: S(["t-present", { [c.placement]: !0 }]),
        ref_key: "present",
        ref: d,
        style: I({ ...v, zIndex: o.value })
      }, [
        m(c.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [R, r.value]
      ]) : z("", !0),
      f.value ? X((a(), u("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: l,
        style: I({ ...v, zIndex: o.value - 1 })
      }, null, 4)), [
        [R, r.value]
      ]) : z("", !0)
    ], 64));
  }
}), F = /* @__PURE__ */ g(Se, [["__scopeId", "data-v-e1a8315e"]]), ze = {
  key: 0,
  class: "t-alert-header"
}, Ee = { class: "t-alert-content" }, xe = { class: "t-alert-footer" }, Be = /* @__PURE__ */ w({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: n, emit: s }) {
    const o = e, r = $(!1), l = s, d = $();
    let p;
    const b = $(!1), f = () => {
      r.value = !0;
    }, v = (t) => {
      r.value = !1, t.handler && t.handler(), l("close", t?.data);
    }, _ = (t) => {
      t == "backdrop" && (b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300));
    };
    return n({
      open: f
    }), C(() => d.value, (t) => {
      t && (p = N(d.value, {
        beforeEvent(i) {
          return i.stopPropagation(), q(i.target) || (i.preventDefault(), Y()), !1;
        }
      }));
    }), V(() => {
      p && p.destroy();
    }), (t, i) => (a(), B(F, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: _
    }, {
      default: D(() => [
        k("div", {
          class: S(["t-alert", { pop: b.value }]),
          ref_key: "container",
          ref: d
        }, [
          m(t.$slots, "header", {}, () => [
            o.title ? (a(), u("div", ze, P(o.title), 1)) : z("", !0)
          ], !0),
          m(t.$slots, "content", {}, () => [
            k("div", Ee, P(o.message), 1)
          ], !0),
          m(t.$slots, "footer", {}, () => [
            k("div", xe, [
              (a(!0), u(L, null, M(o.actions, (y) => (a(), B(Z, {
                color: y.color,
                variant: y.variant,
                onClick: (c) => v(y)
              }, {
                default: D(() => [
                  A(P(y.text), 1)
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
}), Pe = /* @__PURE__ */ g(Be, [["__scopeId", "data-v-3bd5f2f6"]]), H = $(1e3), Ce = {
  getNewIndex() {
    return H.value += 2, H.value;
  }
}, E = j([]), De = (e) => {
  E.push(e);
}, Ne = (e) => {
  e || E.pop();
}, h = {
  screens: E,
  addScreen: De,
  removeScreen: Ne,
  hasPrevious: x(() => E.length > 1),
  currentScreen: x(() => E[E.length - 1]),
  lastScreen: x(() => {
    if (!(E.length < 2))
      return E[E.length - 2];
  })
}, Oe = /* @__PURE__ */ w({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: n }) {
    let s = {};
    const o = K(), r = re(), l = o.getRoutes(), d = $(!1), p = n;
    for (let t of l)
      s[t.name] = t.components;
    const b = (t) => {
      t && h.addScreen({
        name: t,
        target: null,
        component: oe(s[t] || null)
      });
    }, f = (t, i) => {
      !i || h.screens[t].target || (h.screens[t].target = i.$el, t > 0 && (d.value = !0, i.$el.style.transform = "translateX(100vw)", i.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        i.$el.style.transition = "transform 0.35s ease", i.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), h.screens.length > 1 && (h.lastScreen.value.target.style.transitionOrigin = "left center", h.lastScreen.value.target.style.transition = "transform 0.35s ease", h.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          p("change"), d.value = !1;
        }, 400);
      }, 100)));
    }, v = () => {
      h.currentScreen.value.target.style.transition = "transform 0.35s ease", h.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", h.lastScreen.value.target.style.transition = "transform 0.35s ease", h.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), d.value = !0, setTimeout(() => {
        h.removeScreen(), p("change"), d.value = !1;
      }, 400);
    };
    b(r.name), C(() => r.name, (t, i) => {
      t != h.currentScreen.value.name && (h.lastScreen.value?.name == t ? v() : b(t));
    });
    const _ = () => {
      d.value = !0;
      const t = h.currentScreen.value.target, i = h.lastScreen.value.target;
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", i.style.transition = "transform 0.35s ease", i.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        d.value = !1;
      }, 400);
    };
    return J(() => {
      N(document, {
        pointerId: null,
        beforeEvent(t) {
          return d.value || h.screens.length < 2 ? !1 : (t.type == "pointerdown" && !this.pointerId && (this.pointerId = t.pointerId), this.pointerId == t.pointerId);
        },
        afterEvent(t) {
          (t.type == "pointerup" || t.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: t }) {
          t == "right" && o.back();
        },
        move({ dx: t }) {
          const i = window.innerWidth, y = t / i * 100, c = h.currentScreen.value.target, T = h.lastScreen?.value?.target;
          if (t > 0 && t <= i) {
            c.style.transition = "transform 0s ease", c.style.transform = `translateX(${t}px)`, T.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), T.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${y}))) scale(${0.5 + 0.5 / 100 * y}) perspective(100vw) rotateY(${30 - 30 / 100 * y}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * y}`);
            return;
          }
        },
        up({ dx: t }) {
          const i = window.innerWidth;
          t / i * 100 >= 50 ? o.back() : _();
        },
        cancel() {
          _();
        }
      });
    }), (t, i) => (a(), u(L, null, [
      (a(!0), u(L, null, M(O(h).screens, (y, c) => (a(), B(ee, {
        ref_for: !0,
        ref: (T) => f(c, T),
        style: I({ zIndex: c + (c == O(h).screens.length - 1 ? 2 : 1) }),
        key: c
      }, {
        default: D(() => [
          (a(), B(se(y.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      k("div", {
        class: "t-swipe-backdrop",
        style: I({ zIndex: O(h).screens.length })
      }, null, 4)
    ], 64));
  }
}), Xe = /* @__PURE__ */ g(Oe, [["__scopeId", "data-v-a1b1d45a"]]), Re = /* @__PURE__ */ w({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const n = e;
    return (s, o) => (a(), u("div", {
      class: S(["t-toolbar", { [n.placement]: !0 }]),
      style: I({ "--t-size-toolbar": n.size })
    }, [
      k("div", null, [
        m(s.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Le = /* @__PURE__ */ g(Re, [["__scopeId", "data-v-c4ccb0ee"]]), Ae = /* @__PURE__ */ w({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const n = K(), s = e, o = () => {
      h.hasPrevious.value ? n.back() : s.to && n.push(s.to);
    };
    return (r, l) => r.to || O(h).hasPrevious ? (a(), u("button", {
      key: 0,
      class: "t-back-button",
      onClick: o
    }, [
      m(r.$slots, "default", {}, () => [
        l[0] || (l[0] = k("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : z("", !0);
  }
}), Ve = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-45c48e0f"]]), qe = /* @__PURE__ */ w({
  __name: "t-text",
  props: {
    color: { default: "default" },
    size: { default: "standard" }
  },
  setup(e) {
    const n = e, s = x(() => {
      let o, r = n.color;
      return n.size == "standard" ? o = "var(--t-fs-10)" : n.size == "small" ? o = "var(--t-fs-08)" : n.size == "large" ? o = "var(--t-fs-12)" : o = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (r = `var(--t-color-${n.color}-8)`), {
        "--color": r,
        "--font-size": o
      };
    });
    return (o, r) => (a(), u("span", {
      class: "t-text",
      style: I(s.value)
    }, [
      m(o.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), W = /* @__PURE__ */ g(qe, [["__scopeId", "data-v-12c8835a"]]), Ye = /* @__PURE__ */ w({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (n, s) => (a(), u("div", {
      class: S(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), te = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-b410cb84"]]), Ue = /* @__PURE__ */ w({
  __name: "t-sheet",
  props: {
    background: { default: "var(--t-color-default-3)" },
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
  setup(e, { emit: n }) {
    const s = e, o = n, r = $(), l = $(), d = $(!1);
    let p = null;
    const b = x(() => {
      if (s.placement == "bottom") return "down";
      if (s.placement == "top") return "up";
      if (s.placement == "left") return "left";
      if (s.placement == "right") return "right";
    }), f = (_) => {
      o("dismiss", _);
    }, v = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 300);
    };
    return C(() => r.value, (_) => {
      _ && (p = N(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(t) {
          let i = !1, y = !1;
          return d.value || !s.gesture || s.placement == "center" ? i = !0 : this.pointerId ? (i = !0, y = this.pointerId == t.pointerId) : t.type == "pointerdown" && (this.pointerId = t.pointerId, i = !0, y = !0), i && (t.stopPropagation(), q(t.target) || (t.preventDefault(), Y())), y;
        },
        afterEvent(t) {
          (t.type == "pointerup" || t.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: t }) {
          v(), t == b.value ? o("dismiss", "gesture") : l.value.open();
        },
        move({ dy: t, dx: i, d: y }) {
          if (y != b.value) return;
          let c = 0;
          s.placement == "bottom" || s.placement == "top" ? c = t : c = i, l.value.render({
            contentTransform: c + "px",
            transition: "0s"
          });
        },
        up({ dy: t, dx: i, d: y }) {
          if (v(), y != b.value) {
            l.value.open();
            return;
          }
          let c, T, U;
          s.placement == "bottom" || s.placement == "top" ? (c = r.value.offsetHeight, U = t) : (c = r.value.offsetWidth, U = i), T = U / c * 100, T > 50 ? o("dismiss", "gesture") : l.value.open();
        },
        cancel() {
          v(), l.value.open();
        }
      }));
    }), V(() => {
      p && p.destroy();
    }), (_, t) => (a(), B(F, {
      ref_key: "present",
      ref: l,
      placement: s.placement,
      backdrop: _.backdrop,
      visible: s.visible,
      keepalive: s.keepalive,
      onDismiss: f
    }, {
      default: D(() => [
        s.gesture && s.placement != "center" ? (a(), B(te, {
          key: 0,
          placement: s.placement
        }, null, 8, ["placement"])) : z("", !0),
        k("div", {
          class: S(["t-sheet", { fullscreen: s.fullscreen, [s.placement]: !0, rounded: _.rounded }]),
          style: I({ "--background": s.background }),
          ref_key: "sheet",
          ref: r
        }, [
          s.closeButton && s.placement == "center" ? (a(), u("button", {
            key: 0,
            class: "t-sheet-close",
            onClick: t[0] || (t[0] = (i) => f("close-button"))
          }, [
            m(_.$slots, "close-icon", {}, () => [
              t[1] || (t[1] = k("i", { class: "ri-close-large-line" }, null, -1))
            ], !0)
          ])) : z("", !0),
          m(_.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), We = /* @__PURE__ */ g(Ue, [["__scopeId", "data-v-cc940bf9"]]), Fe = { class: "t-input-label" }, Ge = { class: "t-input-content" }, He = ["type", "placeholder", "value"], je = /* @__PURE__ */ w({
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
  setup(e, { emit: n }) {
    const s = e, o = n, r = (l) => {
      o("update:modelValue", l.target.value);
    };
    return (l, d) => (a(), u("div", {
      class: S(["t-input", { rounded: s.rounded, ["size-" + s.size]: !0 }])
    }, [
      k("label", null, [
        k("span", Fe, P(l.label), 1),
        k("div", Ge, [
          m(l.$slots, "start", {}, void 0, !0),
          k("input", {
            type: l.type,
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: r
          }, null, 40, He),
          m(l.$slots, "end", {}, void 0, !0)
        ])
      ]),
      s.error ? (a(), B(W, {
        key: 0,
        color: "danger"
      }, {
        default: D(() => [
          A(P(s.error), 1)
        ]),
        _: 1
      })) : s.help ? (a(), B(W, {
        key: 1,
        color: "var(--t-color-default-7)"
      }, {
        default: D(() => [
          A(P(s.help), 1)
        ]),
        _: 1
      })) : z("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ g(je, [["__scopeId", "data-v-a7db63ef"]]), Je = {};
function Ke(e, n) {
  return a(), u("textarea");
}
const Qe = /* @__PURE__ */ g(Je, [["render", Ke]]), Ze = {};
function et(e, n) {
  return a(), u("div");
}
const tt = /* @__PURE__ */ g(Ze, [["render", et]]), nt = {}, st = { class: "t-grid" };
function ot(e, n) {
  return a(), u("div", st);
}
const rt = /* @__PURE__ */ g(nt, [["render", ot]]), at = {}, lt = { class: "t-grid-item" };
function ct(e, n) {
  return a(), u("div", lt);
}
const it = /* @__PURE__ */ g(at, [["render", ct]]), ut = /* @__PURE__ */ w({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const n = e;
    return (s, o) => (a(), u("div", {
      class: S(["t-divider", { [n.type]: !0 }])
    }, null, 2));
  }
}), dt = /* @__PURE__ */ g(ut, [["__scopeId", "data-v-0d783bfa"]]), pt = /* @__PURE__ */ w({
  __name: "t-toogle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const s = e, o = n, r = $(!1), l = $(), d = x(() => {
      let f = s.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(s.color) && (f = `var(--t-color-${s.color}-6)`), {
        "--color": f
      };
    }), p = () => l.value?.parentElement?.querySelector?.("input");
    J(() => {
      let f = p();
      f && (r.value = f.type != "password", o("change", r.value));
    });
    const b = () => {
      let f = p();
      f && (r.value = !r.value, r.value ? f.type = "text" : f.type = "password", o("change", r.value));
    };
    return (f, v) => (a(), u("button", {
      ref_key: "toogle",
      ref: l,
      class: "t-toogle-password",
      style: I(d.value),
      onClick: b
    }, [
      r.value ? m(f.$slots, "on", { key: 0 }, () => [
        v[0] || (v[0] = k("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : z("", !0),
      r.value ? z("", !0) : m(f.$slots, "off", { key: 1 }, () => [
        v[1] || (v[1] = k("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), ft = /* @__PURE__ */ g(pt, [["__scopeId", "data-v-2b04c3c9"]]), mt = /* @__PURE__ */ w({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const n = e, s = x(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (o, r) => (a(), u("div", {
      class: S(["t-avatar", { square: o.square }]),
      style: I({ "--size": s.value })
    }, [
      m(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), vt = /* @__PURE__ */ g(mt, [["__scopeId", "data-v-24384c2f"]]), _t = { class: "t-collapse-title" }, yt = {
  key: 0,
  class: "icon"
}, ht = {
  key: 1,
  class: "icon"
}, gt = { class: "t-collapse-content" }, bt = /* @__PURE__ */ w({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const s = e, o = n, r = $(!1), l = $(""), d = $(), p = () => {
      r.value = !r.value, l.value = `calc(${d.value.offsetHeight}px + 2rem)`, o("change", r.value);
    };
    return o("change", r.value), (b, f) => (a(), u("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: I({ "--height": l.value })
    }, [
      k("div", {
        class: "t-collapse-header",
        onClick: p
      }, [
        m(b.$slots, "icon"),
        k("div", _t, [
          m(b.$slots, "title", {}, () => [
            A(P(s.title), 1)
          ])
        ]),
        m(b.$slots, "toogle", {}, () => [
          r.value ? (a(), u("div", yt, [...f[0] || (f[0] = [
            k("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (a(), u("div", ht, [...f[1] || (f[1] = [
            k("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      k("div", gt, [
        k("div", {
          ref_key: "content",
          ref: d
        }, [
          m(b.$slots, "content", {}, () => [
            m(b.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Tt = () => ({
  install: (e) => {
    ae(), e.component("t-app", ue), e.component("t-screen", ee), e.component("t-swipe-screen", Xe), e.component("t-cable", pe), e.component("t-toolbar", Le), e.component("t-content", be), e.component("t-card", _e), e.component("t-refresher", $e), e.component("t-button", Z), e.component("t-back-button", Ve), e.component("t-present", F), e.component("t-text", W), e.component("t-sheet", We), e.component("t-pull-signal", te), e.component("t-input", Me), e.component("t-textarea", Qe), e.component("t-rich-text", tt), e.component("t-grid", rt), e.component("t-grid-item", it), e.component("t-divider", dt), e.component("t-toogle-password", ft), e.component("t-loading-icon", Q), e.component("t-alert", Pe), e.component("t-avatar", vt), e.component("t-collapse", bt);
  }
});
export {
  Tt as createToife
};
