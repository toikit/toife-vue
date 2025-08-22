import { createElementBlock as f, openBlock as l, renderSlot as g, defineComponent as T, ref as v, computed as B, reactive as Z, watch as D, onUnmounted as O, Fragment as A, withDirectives as Y, createCommentVNode as E, normalizeStyle as I, normalizeClass as S, vShow as U, createElementVNode as $, createVNode as ee, createBlock as z, withCtx as C, toDisplayString as P, renderList as W, createTextVNode as q, createApp as H, h as j, unref as N, onMounted as te, resolveDynamicComponent as ae, markRaw as le } from "vue";
import { gesture as R } from "@toife/gesture";
import { useRouter as ne, useRoute as ce } from "vue-router";
const L = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), X = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ie = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !L(e.target) && X();
  });
}, b = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of n)
    o[s] = r;
  return o;
}, ue = {}, de = { class: "t-app" };
function pe(e, n) {
  return l(), f("div", de, [
    g(e.$slots, "default")
  ]);
}
const fe = /* @__PURE__ */ b(ue, [["render", pe]]), me = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: n, emit: o }) {
    const s = v(0), r = v(!1), a = v(), c = v(), p = e, _ = o, d = B(() => r.value || p.keepalive), m = Z({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), y = (i) => {
      p.backdrop ? i?.backdropOpacity && (m["--t-present-backdrop-opacity"] = i.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", i?.transition && (m["--t-present-transition"] = i.transition, m["--t-present-transition"] = i.transition), i?.contentTransform && (m["--t-present-content-transform"] = i.contentTransform), i?.contentOpacity && (m["--t-present-content-opacity"] = i.contentOpacity);
    }, t = () => {
      y({
        contentTransform: "0px",
        transition: "0.2s",
        backdropOpacity: "0.4",
        contentOpacity: "1"
      });
    }, u = () => {
      let i = "0px", w = "1";
      p.placement == "bottom" || p.placement == "right" ? i = "100%" : p.placement == "top" || p.placement == "left" ? i = "-100%" : p.placement == "center" && (i = "0px", w = "0"), y({
        contentTransform: i,
        transition: "0.2s",
        contentOpacity: w,
        backdropOpacity: "0"
      });
    };
    D(() => p.visible, () => {
      p.visible ? (r.value = !0, s.value = Se.getNewIndex(), setTimeout(() => {
        t();
      }, 50)) : (u(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), n({
      render: y,
      open: t,
      close: u
    });
    let h;
    return D(() => a.value, (i) => {
      i && (h = R(a.value, {
        beforeEvent(w) {
          return w.stopPropagation(), L(w.target) || (w.preventDefault(), X()), w.type == "pointerup";
        },
        up() {
          _("dismiss", "backdrop");
        }
      }));
    }), O(() => {
      h && h.destroy();
    }), u(), (i, w) => (l(), f(A, null, [
      d.value ? Y((l(), f("div", {
        key: 0,
        class: S(["t-present", { [i.placement]: !0 }]),
        ref_key: "present",
        ref: c,
        style: I({ ...m, zIndex: s.value })
      }, [
        g(i.$slots, "default", {}, void 0, !0)
      ], 6)), [
        [U, r.value]
      ]) : E("", !0),
      d.value ? Y((l(), f("div", {
        key: 1,
        class: "t-present-backdrop",
        ref_key: "backdrop",
        ref: a,
        style: I({ ...m, zIndex: s.value - 1 })
      }, null, 4)), [
        [U, r.value]
      ]) : E("", !0)
    ], 64));
  }
}), V = /* @__PURE__ */ b(me, [["__scopeId", "data-v-e1a8315e"]]), ve = /* @__PURE__ */ T({
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
    return (n, o) => (l(), f("span", {
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
}), K = /* @__PURE__ */ b(ve, [["__scopeId", "data-v-82ecd6f5"]]), _e = {
  key: 0,
  class: "loader"
}, ye = /* @__PURE__ */ T({
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
    const n = e, o = B(() => {
      let s;
      return n.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) ? s = {
        "--color": "var(--t-color-default-1)",
        "--background-color": "var(--t-color-" + n.color + "-6)"
      } : s = {
        "--color": "var(--t-color-default-1)",
        "--background-color": n.color
      } : s = {
        "--color": "var(--t-color-default-10)",
        "--background-color": "transparent"
      }, s;
    });
    return (s, r) => (l(), f("button", {
      class: S(["t-button", { "active-background": n.activeBackground, rounded: n.rounded, block: n.block, ["size-" + n.size]: !0, ["variant-" + n.variant]: !0 }]),
      style: I(o.value)
    }, [
      Y($("span", null, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [U, !n.loading]
      ]),
      n.loading ? (l(), f("span", _e, [
        ee(K, {
          color: "var(--color)",
          type: n.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), M = /* @__PURE__ */ b(ye, [["__scopeId", "data-v-e6b432c9"]]), he = {
  key: 0,
  class: "t-alert-header"
}, ge = { class: "t-alert-content" }, be = { class: "t-alert-footer" }, ke = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: n, emit: o }) {
    const s = e, r = v(!1), a = o, c = v();
    let p;
    const _ = v(!1), d = () => {
      r.value = !0;
    }, m = (t) => {
      r.value = !1, t.handler && t.handler(), a("close", t?.data);
    }, y = (t) => {
      t == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), D(() => c.value, (t) => {
      t && (p = R(c.value, {
        beforeEvent(u) {
          return u.stopPropagation(), L(u.target) || (u.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      p && p.destroy();
    }), (t, u) => (l(), z(V, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: C(() => [
        $("div", {
          class: S(["t-alert", { pop: _.value }]),
          ref_key: "container",
          ref: c
        }, [
          g(t.$slots, "header", {}, () => [
            s.title ? (l(), f("div", he, P(s.title), 1)) : E("", !0)
          ], !0),
          g(t.$slots, "content", {}, () => [
            $("div", ge, P(s.message), 1)
          ], !0),
          g(t.$slots, "footer", {}, () => [
            $("div", be, [
              (l(!0), f(A, null, W(s.actions, (h) => (l(), z(M, {
                color: h.color,
                variant: h.variant,
                onClick: (i) => m(h)
              }, {
                default: C(() => [
                  q(P(h.text), 1)
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
}), oe = /* @__PURE__ */ b(ke, [["__scopeId", "data-v-3bd5f2f6"]]), Pt = (e = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = v();
      o.appendChild(s);
      const a = H({
        render() {
          return j(oe, {
            ...e,
            ref: r,
            onClose: (c) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), n(c);
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), $e = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: n, emit: o }) {
    const s = e, r = v(!1), a = o, c = v();
    let p;
    const _ = v(!1), d = () => {
      r.value = !0;
    }, m = (t) => {
      r.value = !1, t.handler && t.handler(), a("close", t?.data);
    }, y = (t) => {
      t == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return n({
      open: d
    }), D(() => c.value, (t) => {
      t && (p = R(c.value, {
        beforeEvent(u) {
          return u.stopPropagation(), L(u.target) || (u.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      p && p.destroy();
    }), (t, u) => (l(), z(V, {
      placement: "bottom",
      backdrop: !0,
      keepalive: !1,
      visible: r.value,
      onDismiss: y
    }, {
      default: C(() => [
        $("div", {
          class: S(["t-action", { pop: _.value }]),
          ref_key: "container",
          ref: c
        }, [
          (l(!0), f(A, null, W(s.actions, (h) => (l(), f("div", null, [
            (l(!0), f(A, null, W(h, (i) => (l(), z(M, {
              color: i.color,
              size: i.size,
              variant: i.variant,
              onClick: (w) => m(i),
              block: ""
            }, {
              default: C(() => [
                q(P(i.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Te = /* @__PURE__ */ b($e, [["__scopeId", "data-v-e0e7ab15"]]), Dt = (e = {}) => ({
  open() {
    return new Promise((n) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = v();
      o.appendChild(s);
      const a = H({
        render() {
          return j(Te, {
            ...e,
            ref: r,
            onClose: (c) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), n(c);
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), we = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["close"],
  setup(e, { expose: n, emit: o }) {
    const s = e, r = v(!1), a = v();
    let c;
    return n({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), D(() => a.value, (d) => {
      d && (c = R(a.value, {
        beforeEvent(m) {
          return m.stopPropagation(), L(m.target) || (m.preventDefault(), X()), !1;
        }
      }));
    }), O(() => {
      c && c.destroy();
    }), (d, m) => (l(), z(V, {
      placement: "center",
      backdrop: !0,
      keepalive: !1,
      visible: r.value
    }, {
      default: C(() => [
        $("div", {
          class: "t-loading",
          ref_key: "container",
          ref: a
        }, [
          g(d.$slots, "default", {}, () => [
            ee(K, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Ie = /* @__PURE__ */ b(we, [["__scopeId", "data-v-4e03b942"]]), Nt = (e = {}) => {
  const n = v(), o = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        o && (r = document.createElement("div"), o.appendChild(r), s = H({
          render() {
            return j(Ie, {
              ...e,
              ref: n
            });
          }
        }), s.mount(r), setTimeout(() => {
          n.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        n.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), r?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, J = v(1e3), Se = {
  getNewIndex() {
    return J.value += 2, J.value;
  }
}, x = Z([]), ze = (e) => {
  x.push(e);
}, Ee = (e) => {
  e || x.pop();
}, k = {
  screens: x,
  addScreen: ze,
  removeScreen: Ee,
  hasPrevious: B(() => x.length > 1),
  currentScreen: B(() => x[x.length - 1]),
  lastScreen: B(() => {
    if (!(x.length < 2))
      return x[x.length - 2];
  })
}, xe = v(0);
function Be() {
  return {
    height: xe
  };
}
const Ce = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const n = e, { height: o } = Be();
    return (s, r) => (l(), f("div", {
      class: S(["t-cable", { keyboard: n.keyboard && N(o) > 0, [n.placement]: !0 }]),
      style: I({ "--t-keyboard-height": N(o) + "px", "--t-keyboard-transition": N(o) > 0 ? "0.3s" : "0.1s" })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Pe = /* @__PURE__ */ b(Ce, [["__scopeId", "data-v-ecb72421"]]), De = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-card", { shadow: n.shadow }])
    }, [
      g(o.$slots, "default")
    ], 2));
  }
}), Ne = {}, Re = { class: "t-content" };
function Ae(e, n) {
  return l(), f("div", Re, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Oe = /* @__PURE__ */ b(Ne, [["render", Ae], ["__scopeId", "data-v-ea276571"]]), Q = 80, Le = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: n }) {
    const o = n, s = v(0), r = v(!1), a = v();
    let c, p = !1;
    const _ = () => {
      r.value = !1, s.value = 0, c && c.cancel(), setTimeout(() => {
        p = !1;
      }, 2e3);
    }, d = () => {
      p = !0, r.value = !0, s.value = Q, o("refresh", _);
    };
    return D(() => a.value, () => {
      c && c.destroy();
      let m = a.value.closest(".t-screen");
      c = R(m, {
        options: {
          minDist: 60
        },
        move({ dy: y }) {
          r.value || p || y < 0 || (y >= 120 ? d() : s.value = y);
        },
        up({ dy: y }) {
          r.value || p || (y > Q ? d() : s.value = 0);
        },
        cancel() {
          r.value = !1, s.value = 0;
        }
      });
    }), O(() => {
      c && c.destroy();
    }), (m, y) => Y((l(), f("div", {
      class: "t-refresher",
      ref_key: "container",
      ref: a,
      style: I({ height: `${s.value}px` })
    }, [
      $("img", {
        class: S({ spiner: r.value }),
        src: "https://static.toikit.com/toikit/home_2.png?v=3",
        alt: "Loading...",
        style: { width: "22px", height: "22px" }
      }, null, 2)
    ], 4)), [
      [U, s.value > 0]
    ]);
  }
}), Xe = /* @__PURE__ */ b(Le, [["__scopeId", "data-v-7f97bb1a"]]), qe = {}, Ve = { class: "t-screen" };
function Ye(e, n) {
  return l(), f("div", Ve, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ b(qe, [["render", Ye], ["__scopeId", "data-v-d749ca41"]]), Ue = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: n }) {
    let o = {};
    const s = ne(), r = ce(), a = s.getRoutes(), c = v(!1), p = n;
    for (let t of a)
      o[t.name] = t.components;
    const _ = (t) => {
      t && k.addScreen({
        name: t,
        target: null,
        component: le(o[t] || null)
      });
    }, d = (t, u) => {
      !u || k.screens[t].target || (k.screens[t].target = u.$el, t > 0 && (c.value = !0, u.$el.style.transform = "translateX(100vw)", u.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        u.$el.style.transition = "transform 0.35s ease", u.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), k.screens.length > 1 && (k.lastScreen.value.target.style.transitionOrigin = "left center", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          p("change"), c.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      k.currentScreen.value.target.style.transition = "transform 0.35s ease", k.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), c.value = !0, setTimeout(() => {
        k.removeScreen(), p("change"), c.value = !1;
      }, 400);
    };
    _(r.name), D(() => r.name, (t, u) => {
      t != k.currentScreen.value.name && (k.lastScreen.value?.name == t ? m() : _(t));
    });
    const y = () => {
      c.value = !0;
      const t = k.currentScreen.value.target, u = k.lastScreen.value.target;
      t.style.transition = "transform 0.35s ease", t.style.transform = "translateX(0px)", u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        c.value = !1;
      }, 400);
    };
    return te(() => {
      R(document, {
        pointerId: null,
        beforeEvent(t) {
          return c.value || k.screens.length < 2 ? !1 : (t.type == "pointerdown" && !this.pointerId && (this.pointerId = t.pointerId), this.pointerId == t.pointerId);
        },
        afterEvent(t) {
          (t.type == "pointerup" || t.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: t }) {
          t == "right" && s.back();
        },
        move({ dx: t }) {
          const u = window.innerWidth, h = t / u * 100, i = k.currentScreen.value.target, w = k.lastScreen?.value?.target;
          if (t > 0 && t <= u) {
            i.style.transition = "transform 0s ease", i.style.transform = `translateX(${t}px)`, w.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), w.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${h}))) scale(${0.5 + 0.5 / 100 * h}) perspective(100vw) rotateY(${30 - 30 / 100 * h}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * h}`);
            return;
          }
        },
        up({ dx: t }) {
          const u = window.innerWidth;
          t / u * 100 >= 50 ? s.back() : y();
        },
        cancel() {
          y();
        }
      });
    }), (t, u) => (l(), f(A, null, [
      (l(!0), f(A, null, W(N(k).screens, (h, i) => (l(), z(se, {
        ref_for: !0,
        ref: (w) => d(i, w),
        style: I({ zIndex: i + (i == N(k).screens.length - 1 ? 2 : 1) }),
        key: i
      }, {
        default: C(() => [
          (l(), z(ae(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: I({ zIndex: N(k).screens.length })
      }, null, 4)
    ], 64));
  }
}), We = /* @__PURE__ */ b(Ue, [["__scopeId", "data-v-a1b1d45a"]]), Fe = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const n = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-toolbar", { [n.placement]: !0 }]),
      style: I({ "--t-size-toolbar": n.size })
    }, [
      $("div", null, [
        g(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), Ge = /* @__PURE__ */ b(Fe, [["__scopeId", "data-v-c4ccb0ee"]]), He = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const n = ne(), o = e, s = () => {
      k.hasPrevious.value ? n?.back?.() : o.to && n?.push?.(o.to);
    };
    return (r, a) => r.to || N(k).hasPrevious ? (l(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: s
    }, [
      g(r.$slots, "default", {}, () => [
        a[0] || (a[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), je = /* @__PURE__ */ b(He, [["__scopeId", "data-v-08e5f71e"]]), Ke = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "default" },
    size: { default: "standard" }
  },
  setup(e) {
    const n = e, o = B(() => {
      let s, r = n.color;
      return n.size == "standard" ? s = "var(--t-fs-10)" : n.size == "small" ? s = "var(--t-fs-08)" : n.size == "large" ? s = "var(--t-fs-12)" : s = n.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(n.color) && (r = `var(--t-color-${n.color}-8)`), {
        "--color": r,
        "--font-size": s
      };
    });
    return (s, r) => (l(), f("span", {
      class: "t-text",
      style: I(o.value)
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), G = /* @__PURE__ */ b(Ke, [["__scopeId", "data-v-12c8835a"]]), Me = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (n, o) => (l(), f("div", {
      class: S(["t-pull-bar", { [n.placement]: !0 }])
    }, null, 2));
  }
}), re = /* @__PURE__ */ b(Me, [["__scopeId", "data-v-b410cb84"]]), Je = /* @__PURE__ */ T({
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
    const o = e, s = n, r = v(), a = v(), c = v(!1);
    let p = null;
    const _ = B(() => {
      if (o.placement == "bottom") return "down";
      if (o.placement == "top") return "up";
      if (o.placement == "left") return "left";
      if (o.placement == "right") return "right";
    }), d = (y) => {
      s("dismiss", y);
    }, m = () => {
      c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 300);
    };
    return D(() => r.value, (y) => {
      y && (p = R(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(t) {
          let u = !1, h = !1;
          return c.value || !o.gesture || o.placement == "center" ? u = !0 : this.pointerId ? (u = !0, h = this.pointerId == t.pointerId) : t.type == "pointerdown" && (this.pointerId = t.pointerId, u = !0, h = !0), u && (t.stopPropagation(), L(t.target) || (t.preventDefault(), X())), h;
        },
        afterEvent(t) {
          (t.type == "pointerup" || t.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: t }) {
          m(), t == _.value ? s("dismiss", "gesture") : a.value.open();
        },
        move({ dy: t, dx: u, d: h }) {
          if (h != _.value) return;
          let i = 0;
          o.placement == "bottom" || o.placement == "top" ? i = t : i = u, a.value.render({
            contentTransform: i + "px",
            transition: "0s"
          });
        },
        up({ dy: t, dx: u, d: h }) {
          if (m(), h != _.value) {
            a.value.open();
            return;
          }
          let i, w, F;
          o.placement == "bottom" || o.placement == "top" ? (i = r.value.offsetHeight, F = t) : (i = r.value.offsetWidth, F = u), w = F / i * 100, w > 50 ? s("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          m(), a.value.open();
        }
      }));
    }), O(() => {
      p && p.destroy();
    }), (y, t) => (l(), z(V, {
      ref_key: "present",
      ref: a,
      placement: o.placement,
      backdrop: y.backdrop,
      visible: o.visible,
      keepalive: o.keepalive,
      onDismiss: d
    }, {
      default: C(() => [
        o.gesture && o.placement != "center" ? (l(), z(re, {
          key: 0,
          placement: o.placement
        }, null, 8, ["placement"])) : E("", !0),
        $("div", {
          class: S(["t-sheet", { fullscreen: o.fullscreen, [o.placement]: !0, rounded: y.rounded }]),
          style: I({ "--background": o.background }),
          ref_key: "sheet",
          ref: r
        }, [
          o.closeButton && o.placement == "center" ? (l(), f("button", {
            key: 0,
            class: "t-sheet-close",
            onClick: t[0] || (t[0] = (u) => d("close-button"))
          }, [
            g(y.$slots, "close-icon", {}, () => [
              t[1] || (t[1] = $("i", { class: "ri-close-large-line" }, null, -1))
            ], !0)
          ])) : E("", !0),
          g(y.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), Qe = /* @__PURE__ */ b(Je, [["__scopeId", "data-v-cc940bf9"]]), Ze = { class: "t-input-label" }, et = { class: "t-input-content" }, tt = ["type", "placeholder", "value"], nt = /* @__PURE__ */ T({
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
    const o = e, s = n, r = (a) => {
      s("update:modelValue", a.target.value);
    };
    return (a, c) => (l(), f("div", {
      class: S(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0 }])
    }, [
      $("label", null, [
        $("span", Ze, P(a.label), 1),
        $("div", et, [
          g(a.$slots, "start", {}, void 0, !0),
          $("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, tt),
          g(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (l(), z(G, {
        key: 0,
        color: "danger"
      }, {
        default: C(() => [
          q(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (l(), z(G, {
        key: 1,
        color: "var(--t-color-default-7)"
      }, {
        default: C(() => [
          q(P(o.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ b(nt, [["__scopeId", "data-v-a7db63ef"]]), st = {};
function rt(e, n) {
  return l(), f("textarea");
}
const at = /* @__PURE__ */ b(st, [["render", rt]]), lt = {};
function ct(e, n) {
  return l(), f("div");
}
const it = /* @__PURE__ */ b(lt, [["render", ct]]), ut = {}, dt = { class: "t-grid" };
function pt(e, n) {
  return l(), f("div", dt);
}
const ft = /* @__PURE__ */ b(ut, [["render", pt]]), mt = {}, vt = { class: "t-grid-item" };
function _t(e, n) {
  return l(), f("div", vt);
}
const yt = /* @__PURE__ */ b(mt, [["render", _t]]), ht = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const n = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-divider", { [n.type]: !0 }])
    }, null, 2));
  }
}), gt = /* @__PURE__ */ b(ht, [["__scopeId", "data-v-0d783bfa"]]), bt = /* @__PURE__ */ T({
  __name: "t-toogle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const o = e, s = n, r = v(!1), a = v(), c = B(() => {
      let d = o.color;
      return ["warning", "info", "danger", "primary", "secondary", "success"].includes(o.color) && (d = `var(--t-color-${o.color}-6)`), {
        "--color": d
      };
    }), p = () => a.value?.parentElement?.querySelector?.("input");
    te(() => {
      let d = p();
      d && (r.value = d.type != "password", s("change", r.value));
    });
    const _ = () => {
      let d = p();
      d && (r.value = !r.value, r.value ? d.type = "text" : d.type = "password", s("change", r.value));
    };
    return (d, m) => (l(), f("button", {
      ref_key: "toogle",
      ref: a,
      class: "t-toogle-password",
      style: I(c.value),
      onClick: _
    }, [
      r.value ? g(d.$slots, "on", { key: 0 }, () => [
        m[0] || (m[0] = $("i", { class: "ri-eye-line" }, null, -1))
      ], !0) : E("", !0),
      r.value ? E("", !0) : g(d.$slots, "off", { key: 1 }, () => [
        m[1] || (m[1] = $("i", { class: "ri-eye-off-line" }, null, -1))
      ], !0)
    ], 4));
  }
}), kt = /* @__PURE__ */ b(bt, [["__scopeId", "data-v-2b04c3c9"]]), $t = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const n = e, o = B(() => n.size == "small" ? "24px" : n.size == "standard" ? "40px" : n.size == "large" ? "60px" : n.size);
    return (s, r) => (l(), f("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: I({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Tt = /* @__PURE__ */ b($t, [["__scopeId", "data-v-24384c2f"]]), wt = { class: "t-collapse-title" }, It = {
  key: 0,
  class: "icon"
}, St = {
  key: 1,
  class: "icon"
}, zt = { class: "t-collapse-content" }, Et = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const o = e, s = n, r = v(!1), a = v(""), c = v(), p = () => {
      r.value = !r.value, a.value = `calc(${c.value.offsetHeight}px + 2rem)`, s("change", r.value);
    };
    return s("change", r.value), (_, d) => (l(), f("div", {
      class: S(["t-collapse", { open: r.value }]),
      style: I({ "--height": a.value })
    }, [
      $("div", {
        class: "t-collapse-header",
        onClick: p
      }, [
        g(_.$slots, "icon"),
        $("div", wt, [
          g(_.$slots, "title", {}, () => [
            q(P(o.title), 1)
          ])
        ]),
        g(_.$slots, "toogle", {}, () => [
          r.value ? (l(), f("div", It, [...d[0] || (d[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (l(), f("div", St, [...d[1] || (d[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", zt, [
        $("div", {
          ref_key: "content",
          ref: c
        }, [
          g(_.$slots, "content", {}, () => [
            g(_.$slots, "default")
          ])
        ], 512)
      ])
    ], 6));
  }
}), Rt = () => ({
  install: (e) => {
    ie(), e.component("t-app", fe), e.component("t-screen", se), e.component("t-swipe-screen", We), e.component("t-cable", Pe), e.component("t-toolbar", Ge), e.component("t-content", Oe), e.component("t-card", De), e.component("t-refresher", Xe), e.component("t-button", M), e.component("t-back-button", je), e.component("t-present", V), e.component("t-text", G), e.component("t-sheet", Qe), e.component("t-pull-signal", re), e.component("t-input", ot), e.component("t-textarea", at), e.component("t-rich-text", it), e.component("t-grid", ft), e.component("t-grid-item", yt), e.component("t-divider", gt), e.component("t-toogle-password", kt), e.component("t-loading-icon", K), e.component("t-alert", oe), e.component("t-avatar", Tt), e.component("t-collapse", Et);
  }
});
export {
  X as blurCurrentActive,
  Dt as createAction,
  Pt as createAlert,
  Nt as createLoading,
  Rt as createToife,
  L as isFormElement,
  Se as presentController,
  k as screenController,
  Be as useKeyboard
};
