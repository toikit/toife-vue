import { createElementBlock as f, openBlock as l, renderSlot as g, defineComponent as T, normalizeStyle as I, normalizeClass as S, computed as B, withDirectives as Y, createCommentVNode as E, createElementVNode as $, vShow as U, createVNode as Z, ref as v, watch as D, onUnmounted as A, reactive as ee, Fragment as R, createBlock as z, withCtx as C, toDisplayString as P, renderList as W, createTextVNode as X, createApp as H, h as j, onMounted as te, unref as V, resolveDynamicComponent as ae, markRaw as le } from "vue";
import { gesture as N } from "@toife/gesture";
import { useRouter as ne, useRoute as ce } from "vue-router";
const O = (e) => e && (e.tagName == "INPUT" || e.tagName == "TEXTAREA" || e.isContentEditable), L = () => {
  const e = document.activeElement;
  e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) && e.blur();
}, ie = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault()), document.addEventListener("dblclick", (e) => e.preventDefault()), document.addEventListener("selectstart", (e) => e.preventDefault()), document.addEventListener("gesturestart", (e) => e.preventDefault()), document.addEventListener("pointerup", (e) => {
    !O(e.target) && L();
  });
}, b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, ue = {}, de = { class: "t-app" };
function pe(e, t) {
  return l(), f("div", de, [
    g(e.$slots, "default")
  ]);
}
const fe = /* @__PURE__ */ b(ue, [["render", pe]]), me = /* @__PURE__ */ T({
  __name: "t-cable",
  props: {
    keyboard: { default: 0 },
    placement: { default: "bottom" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-cable", { keyboard: t.keyboard > 0, [t.placement]: !0 }]),
      style: I({ "--t-keyboard-height": t.keyboard + "px", "--t-keyboard-transition": t.keyboard > 0 ? "0.3s" : "0.1s" })
    }, [
      g(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ve = /* @__PURE__ */ b(me, [["__scopeId", "data-v-3a6a070c"]]), _e = /* @__PURE__ */ T({
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
    return (t, o) => (l(), f("span", {
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
}), M = /* @__PURE__ */ b(_e, [["__scopeId", "data-v-82ecd6f5"]]), ye = {
  key: 0,
  class: "loader"
}, he = /* @__PURE__ */ T({
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
    const t = e, o = B(() => {
      let s;
      return t.color ? ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) ? s = {
        "--color": "var(--t-color-default-1)",
        "--background-color": "var(--t-color-" + t.color + "-6)"
      } : s = {
        "--color": "var(--t-color-default-1)",
        "--background-color": t.color
      } : s = {
        "--color": "var(--t-color-default-10)",
        "--background-color": "transparent"
      }, s;
    });
    return (s, r) => (l(), f("button", {
      class: S(["t-button", { "active-background": t.activeBackground, rounded: t.rounded, block: t.block, ["size-" + t.size]: !0, ["variant-" + t.variant]: !0 }]),
      style: I(o.value)
    }, [
      Y($("span", null, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 512), [
        [U, !t.loading]
      ]),
      t.loading ? (l(), f("span", ye, [
        Z(M, {
          color: "var(--color)",
          type: t.loadingType
        }, null, 8, ["type"])
      ])) : E("", !0)
    ], 6));
  }
}), J = /* @__PURE__ */ b(he, [["__scopeId", "data-v-e6b432c9"]]), ge = /* @__PURE__ */ T({
  __name: "t-card",
  props: {
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-card", { shadow: t.shadow }])
    }, [
      g(o.$slots, "default")
    ], 2));
  }
}), be = {}, ke = { class: "t-content" };
function $e(e, t) {
  return l(), f("div", ke, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Te = /* @__PURE__ */ b(be, [["render", $e], ["__scopeId", "data-v-ea276571"]]), K = 80, we = /* @__PURE__ */ T({
  __name: "t-refresher",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const o = t, s = v(0), r = v(!1), a = v();
    let c, p = !1;
    const _ = () => {
      r.value = !1, s.value = 0, c && c.cancel(), setTimeout(() => {
        p = !1;
      }, 2e3);
    }, d = () => {
      p = !0, r.value = !0, s.value = K, o("refresh", _);
    };
    return D(() => a.value, () => {
      c && c.destroy();
      let m = a.value.closest(".t-screen");
      c = N(m, {
        options: {
          minDist: 60
        },
        move({ dy: y }) {
          r.value || p || y < 0 || (y >= 120 ? d() : s.value = y);
        },
        up({ dy: y }) {
          r.value || p || (y > K ? d() : s.value = 0);
        },
        cancel() {
          r.value = !1, s.value = 0;
        }
      });
    }), A(() => {
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
}), Ie = /* @__PURE__ */ b(we, [["__scopeId", "data-v-7f97bb1a"]]), Se = {}, ze = { class: "t-screen" };
function Ee(e, t) {
  return l(), f("div", ze, [
    g(e.$slots, "default", {}, void 0, !0)
  ]);
}
const oe = /* @__PURE__ */ b(Se, [["render", Ee], ["__scopeId", "data-v-d749ca41"]]), xe = /* @__PURE__ */ T({
  __name: "t-present",
  props: {
    keepalive: { type: Boolean, default: !0 },
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !0 },
    placement: { default: "bottom" }
  },
  emits: ["dismiss"],
  setup(e, { expose: t, emit: o }) {
    const s = v(0), r = v(!1), a = v(), c = v(), p = e, _ = o, d = B(() => r.value || p.keepalive), m = ee({
      "--t-present-backdrop-opacity": "0.4",
      "--t-present-transition": "0.2s",
      "--t-present-content-transform": "0px",
      "--t-present-content-opacity": "1"
    }), y = (i) => {
      p.backdrop ? i?.backdropOpacity && (m["--t-present-backdrop-opacity"] = i.backdropOpacity) : m["--t-present-backdrop-opacity"] = "0", i?.transition && (m["--t-present-transition"] = i.transition, m["--t-present-transition"] = i.transition), i?.contentTransform && (m["--t-present-content-transform"] = i.contentTransform), i?.contentOpacity && (m["--t-present-content-opacity"] = i.contentOpacity);
    }, n = () => {
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
      p.visible ? (r.value = !0, s.value = Le.getNewIndex(), setTimeout(() => {
        n();
      }, 50)) : (u(), setTimeout(() => {
        r.value = !1;
      }, 200));
    }), t({
      render: y,
      open: n,
      close: u
    });
    let h;
    return D(() => a.value, (i) => {
      i && (h = N(a.value, {
        beforeEvent(w) {
          return w.stopPropagation(), O(w.target) || (w.preventDefault(), L()), w.type == "pointerup";
        },
        up() {
          _("dismiss", "backdrop");
        }
      }));
    }), A(() => {
      h && h.destroy();
    }), u(), (i, w) => (l(), f(R, null, [
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
}), q = /* @__PURE__ */ b(xe, [["__scopeId", "data-v-e1a8315e"]]), Be = {
  key: 0,
  class: "t-alert-header"
}, Ce = { class: "t-alert-content" }, Pe = { class: "t-alert-footer" }, De = /* @__PURE__ */ T({
  __name: "t-alert",
  props: {
    title: {},
    message: {},
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, r = v(!1), a = o, c = v();
    let p;
    const _ = v(!1), d = () => {
      r.value = !0;
    }, m = (n) => {
      r.value = !1, n.handler && n.handler(), a("close", n?.data);
    }, y = (n) => {
      n == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return t({
      open: d
    }), D(() => c.value, (n) => {
      n && (p = N(c.value, {
        beforeEvent(u) {
          return u.stopPropagation(), O(u.target) || (u.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      p && p.destroy();
    }), (n, u) => (l(), z(q, {
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
          g(n.$slots, "header", {}, () => [
            s.title ? (l(), f("div", Be, P(s.title), 1)) : E("", !0)
          ], !0),
          g(n.$slots, "content", {}, () => [
            $("div", Ce, P(s.message), 1)
          ], !0),
          g(n.$slots, "footer", {}, () => [
            $("div", Pe, [
              (l(!0), f(R, null, W(s.actions, (h) => (l(), z(J, {
                color: h.color,
                variant: h.variant,
                onClick: (i) => m(h)
              }, {
                default: C(() => [
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
}), se = /* @__PURE__ */ b(De, [["__scopeId", "data-v-3bd5f2f6"]]), Bt = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = v();
      o.appendChild(s);
      const a = H({
        render() {
          return j(se, {
            ...e,
            ref: r,
            onClose: (c) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), t(c);
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Ne = /* @__PURE__ */ T({
  __name: "t-action",
  props: {
    actions: {}
  },
  emits: ["close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, r = v(!1), a = o, c = v();
    let p;
    const _ = v(!1), d = () => {
      r.value = !0;
    }, m = (n) => {
      r.value = !1, n.handler && n.handler(), a("close", n?.data);
    }, y = (n) => {
      n == "backdrop" && (_.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300));
    };
    return t({
      open: d
    }), D(() => c.value, (n) => {
      n && (p = N(c.value, {
        beforeEvent(u) {
          return u.stopPropagation(), O(u.target) || (u.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      p && p.destroy();
    }), (n, u) => (l(), z(q, {
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
          (l(!0), f(R, null, W(s.actions, (h) => (l(), f("div", null, [
            (l(!0), f(R, null, W(h, (i) => (l(), z(J, {
              color: i.color,
              size: i.size,
              variant: i.variant,
              onClick: (w) => m(i),
              block: ""
            }, {
              default: C(() => [
                X(P(i.text), 1)
              ]),
              _: 2
            }, 1032, ["color", "size", "variant", "onClick"]))), 256))
          ]))), 256))
        ], 2)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), Re = /* @__PURE__ */ b(Ne, [["__scopeId", "data-v-e0e7ab15"]]), Ct = (e = {}) => ({
  open() {
    return new Promise((t) => {
      let o = document.body.querySelector(".t-app");
      if (!o) return;
      const s = document.createElement("div"), r = v();
      o.appendChild(s);
      const a = H({
        render() {
          return j(Re, {
            ...e,
            ref: r,
            onClose: (c) => {
              setTimeout(() => {
                a.unmount(), s.remove();
              }, 300), t(c);
            }
          });
        }
      });
      a.mount(s), setTimeout(() => {
        r.value?.open?.();
      }, 50);
    });
  }
}), Ae = /* @__PURE__ */ T({
  __name: "t-loading",
  props: {
    type: { default: "spinner" }
  },
  emits: ["close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, r = v(!1), a = v();
    let c;
    return t({
      open: () => {
        r.value = !0;
      },
      close: () => {
        r.value = !1;
      }
    }), D(() => a.value, (d) => {
      d && (c = N(a.value, {
        beforeEvent(m) {
          return m.stopPropagation(), O(m.target) || (m.preventDefault(), L()), !1;
        }
      }));
    }), A(() => {
      c && c.destroy();
    }), (d, m) => (l(), z(q, {
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
            Z(M, {
              type: s.type
            }, null, 8, ["type"])
          ], !0)
        ], 512)
      ]),
      _: 3
    }, 8, ["visible"]));
  }
}), Oe = /* @__PURE__ */ b(Ae, [["__scopeId", "data-v-4e03b942"]]), Pt = (e = {}) => {
  const t = v(), o = document.body.querySelector(".t-app");
  let s = null, r = null;
  return {
    open() {
      return new Promise((a) => {
        o && (r = document.createElement("div"), o.appendChild(r), s = H({
          render() {
            return j(Oe, {
              ...e,
              ref: t
            });
          }
        }), s.mount(r), setTimeout(() => {
          t.value?.open?.(), a(!0);
        }, 50));
      });
    },
    close() {
      return new Promise((a) => {
        t.value?.close?.(), setTimeout(() => {
          s?.unmount?.(), r?.remove?.(), a(!0);
        }, 300);
      });
    }
  };
}, Q = v(1e3), Le = {
  getNewIndex() {
    return Q.value += 2, Q.value;
  }
}, x = ee([]), Xe = (e) => {
  x.push(e);
}, qe = (e) => {
  e || x.pop();
}, k = {
  screens: x,
  addScreen: Xe,
  removeScreen: qe,
  hasPrevious: B(() => x.length > 1),
  currentScreen: B(() => x[x.length - 1]),
  lastScreen: B(() => {
    if (!(x.length < 2))
      return x[x.length - 2];
  })
}, Ve = /* @__PURE__ */ T({
  __name: "t-swipe-screen",
  emits: ["change"],
  setup(e, { emit: t }) {
    let o = {};
    const s = ne(), r = ce(), a = s.getRoutes(), c = v(!1), p = t;
    for (let n of a)
      o[n.name] = n.components;
    const _ = (n) => {
      n && k.addScreen({
        name: n,
        target: null,
        component: le(o[n] || null)
      });
    }, d = (n, u) => {
      !u || k.screens[n].target || (k.screens[n].target = u.$el, n > 0 && (c.value = !0, u.$el.style.transform = "translateX(100vw)", u.$el.transitionOrigin = "center", document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), setTimeout(() => {
        u.$el.style.transition = "transform 0.35s ease", u.$el.style.transform = "translateX(0px)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), k.screens.length > 1 && (k.lastScreen.value.target.style.transitionOrigin = "left center", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)"), setTimeout(() => {
          p("change"), c.value = !1;
        }, 400);
      }, 100)));
    }, m = () => {
      k.currentScreen.value.target.style.transition = "transform 0.35s ease", k.currentScreen.value.target.style.transform = "translateX(100vw) scale(1)", k.lastScreen.value.target.style.transition = "transform 0.35s ease", k.lastScreen.value.target.style.transform = "translateX(0px) scale(1) perspective(100vw) rotateY(0deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0"), c.value = !0, setTimeout(() => {
        k.removeScreen(), p("change"), c.value = !1;
      }, 400);
    };
    _(r.name), D(() => r.name, (n, u) => {
      n != k.currentScreen.value.name && (k.lastScreen.value?.name == n ? m() : _(n));
    });
    const y = () => {
      c.value = !0;
      const n = k.currentScreen.value.target, u = k.lastScreen.value.target;
      n.style.transition = "transform 0.35s ease", n.style.transform = "translateX(0px)", u.style.transition = "transform 0.35s ease", u.style.transform = "translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0.35s"), document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", "0.5"), setTimeout(() => {
        c.value = !1;
      }, 400);
    };
    return te(() => {
      N(document, {
        pointerId: null,
        beforeEvent(n) {
          return c.value || k.screens.length < 2 ? !1 : (n.type == "pointerdown" && !this.pointerId && (this.pointerId = n.pointerId), this.pointerId == n.pointerId);
        },
        afterEvent(n) {
          (n.type == "pointerup" || n.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: n }) {
          n == "right" && s.back();
        },
        move({ dx: n }) {
          const u = window.innerWidth, h = n / u * 100, i = k.currentScreen.value.target, w = k.lastScreen?.value?.target;
          if (n > 0 && n <= u) {
            i.style.transition = "transform 0s ease", i.style.transform = `translateX(${n}px)`, w.style.transition = "transform 0s ease", document.documentElement.style.setProperty("--t-screen-backdrop-duration", "0s"), w.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${h}))) scale(${0.5 + 0.5 / 100 * h}) perspective(100vw) rotateY(${30 - 30 / 100 * h}deg)`, document.documentElement.style.setProperty("--t-swipe-backdrop-opacity", `${0.5 - 0.5 / 100 * h}`);
            return;
          }
        },
        up({ dx: n }) {
          const u = window.innerWidth;
          n / u * 100 >= 50 ? s.back() : y();
        },
        cancel() {
          y();
        }
      });
    }), (n, u) => (l(), f(R, null, [
      (l(!0), f(R, null, W(V(k).screens, (h, i) => (l(), z(oe, {
        ref_for: !0,
        ref: (w) => d(i, w),
        style: I({ zIndex: i + (i == V(k).screens.length - 1 ? 2 : 1) }),
        key: i
      }, {
        default: C(() => [
          (l(), z(ae(h.component.default)))
        ]),
        _: 2
      }, 1032, ["style"]))), 128)),
      $("div", {
        class: "t-swipe-backdrop",
        style: I({ zIndex: V(k).screens.length })
      }, null, 4)
    ], 64));
  }
}), Ye = /* @__PURE__ */ b(Ve, [["__scopeId", "data-v-a1b1d45a"]]), Ue = /* @__PURE__ */ T({
  __name: "t-toolbar",
  props: {
    placement: { default: "bottom" },
    size: { default: "50px" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-toolbar", { [t.placement]: !0 }]),
      style: I({ "--t-size-toolbar": t.size })
    }, [
      $("div", null, [
        g(o.$slots, "default", {}, void 0, !0)
      ])
    ], 6));
  }
}), We = /* @__PURE__ */ b(Ue, [["__scopeId", "data-v-c4ccb0ee"]]), Fe = /* @__PURE__ */ T({
  __name: "t-back-button",
  props: {
    to: {}
  },
  setup(e) {
    const t = ne(), o = e, s = () => {
      k.hasPrevious.value ? t.back() : o.to && t.push(o.to);
    };
    return (r, a) => r.to || V(k).hasPrevious ? (l(), f("button", {
      key: 0,
      class: "t-back-button",
      onClick: s
    }, [
      g(r.$slots, "default", {}, () => [
        a[0] || (a[0] = $("i", { class: "ri-arrow-left-s-line" }, null, -1))
      ], !0)
    ])) : E("", !0);
  }
}), Ge = /* @__PURE__ */ b(Fe, [["__scopeId", "data-v-45c48e0f"]]), He = /* @__PURE__ */ T({
  __name: "t-text",
  props: {
    color: { default: "default" },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = B(() => {
      let s, r = t.color;
      return t.size == "standard" ? s = "var(--t-fs-10)" : t.size == "small" ? s = "var(--t-fs-08)" : t.size == "large" ? s = "var(--t-fs-12)" : s = t.size, ["warning", "info", "danger", "primary", "secondary", "success"].includes(t.color) && (r = `var(--t-color-${t.color}-8)`), {
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
}), G = /* @__PURE__ */ b(He, [["__scopeId", "data-v-12c8835a"]]), je = /* @__PURE__ */ T({
  __name: "t-pull-signal",
  props: {
    placement: { default: "bottom" }
  },
  setup(e) {
    return (t, o) => (l(), f("div", {
      class: S(["t-pull-bar", { [t.placement]: !0 }])
    }, null, 2));
  }
}), re = /* @__PURE__ */ b(je, [["__scopeId", "data-v-b410cb84"]]), Me = /* @__PURE__ */ T({
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
  setup(e, { emit: t }) {
    const o = e, s = t, r = v(), a = v(), c = v(!1);
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
      y && (p = N(r.value, {
        options: {
          minDist: 30
        },
        pointerId: null,
        beforeEvent(n) {
          let u = !1, h = !1;
          return c.value || !o.gesture || o.placement == "center" ? u = !0 : this.pointerId ? (u = !0, h = this.pointerId == n.pointerId) : n.type == "pointerdown" && (this.pointerId = n.pointerId, u = !0, h = !0), u && (n.stopPropagation(), O(n.target) || (n.preventDefault(), L())), h;
        },
        afterEvent(n) {
          (n.type == "pointerup" || n.type == "pointercancel") && (this.pointerId = null);
        },
        fast({ d: n }) {
          m(), n == _.value ? s("dismiss", "gesture") : a.value.open();
        },
        move({ dy: n, dx: u, d: h }) {
          if (h != _.value) return;
          let i = 0;
          o.placement == "bottom" || o.placement == "top" ? i = n : i = u, a.value.render({
            contentTransform: i + "px",
            transition: "0s"
          });
        },
        up({ dy: n, dx: u, d: h }) {
          if (m(), h != _.value) {
            a.value.open();
            return;
          }
          let i, w, F;
          o.placement == "bottom" || o.placement == "top" ? (i = r.value.offsetHeight, F = n) : (i = r.value.offsetWidth, F = u), w = F / i * 100, w > 50 ? s("dismiss", "gesture") : a.value.open();
        },
        cancel() {
          m(), a.value.open();
        }
      }));
    }), A(() => {
      p && p.destroy();
    }), (y, n) => (l(), z(q, {
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
            onClick: n[0] || (n[0] = (u) => d("close-button"))
          }, [
            g(y.$slots, "close-icon", {}, () => [
              n[1] || (n[1] = $("i", { class: "ri-close-large-line" }, null, -1))
            ], !0)
          ])) : E("", !0),
          g(y.$slots, "default", {}, void 0, !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["placement", "backdrop", "visible", "keepalive"]));
  }
}), Je = /* @__PURE__ */ b(Me, [["__scopeId", "data-v-cc940bf9"]]), Ke = { class: "t-input-label" }, Qe = { class: "t-input-content" }, Ze = ["type", "placeholder", "value"], et = /* @__PURE__ */ T({
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
  setup(e, { emit: t }) {
    const o = e, s = t, r = (a) => {
      s("update:modelValue", a.target.value);
    };
    return (a, c) => (l(), f("div", {
      class: S(["t-input", { rounded: o.rounded, ["size-" + o.size]: !0 }])
    }, [
      $("label", null, [
        $("span", Ke, P(a.label), 1),
        $("div", Qe, [
          g(a.$slots, "start", {}, void 0, !0),
          $("input", {
            type: a.type,
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: r
          }, null, 40, Ze),
          g(a.$slots, "end", {}, void 0, !0)
        ])
      ]),
      o.error ? (l(), z(G, {
        key: 0,
        color: "danger"
      }, {
        default: C(() => [
          X(P(o.error), 1)
        ]),
        _: 1
      })) : o.help ? (l(), z(G, {
        key: 1,
        color: "var(--t-color-default-7)"
      }, {
        default: C(() => [
          X(P(o.help), 1)
        ]),
        _: 1
      })) : E("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ b(et, [["__scopeId", "data-v-a7db63ef"]]), nt = {};
function ot(e, t) {
  return l(), f("textarea");
}
const st = /* @__PURE__ */ b(nt, [["render", ot]]), rt = {};
function at(e, t) {
  return l(), f("div");
}
const lt = /* @__PURE__ */ b(rt, [["render", at]]), ct = {}, it = { class: "t-grid" };
function ut(e, t) {
  return l(), f("div", it);
}
const dt = /* @__PURE__ */ b(ct, [["render", ut]]), pt = {}, ft = { class: "t-grid-item" };
function mt(e, t) {
  return l(), f("div", ft);
}
const vt = /* @__PURE__ */ b(pt, [["render", mt]]), _t = /* @__PURE__ */ T({
  __name: "t-divider",
  props: {
    type: { default: "horizontal" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (l(), f("div", {
      class: S(["t-divider", { [t.type]: !0 }])
    }, null, 2));
  }
}), yt = /* @__PURE__ */ b(_t, [["__scopeId", "data-v-0d783bfa"]]), ht = /* @__PURE__ */ T({
  __name: "t-toogle-password",
  props: {
    color: { default: "warning" }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = v(!1), a = v(), c = B(() => {
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
}), gt = /* @__PURE__ */ b(ht, [["__scopeId", "data-v-2b04c3c9"]]), bt = /* @__PURE__ */ T({
  __name: "t-avatar",
  props: {
    square: { type: Boolean, default: !1 },
    size: { default: "standard" }
  },
  setup(e) {
    const t = e, o = B(() => t.size == "small" ? "24px" : t.size == "standard" ? "40px" : t.size == "large" ? "60px" : t.size);
    return (s, r) => (l(), f("div", {
      class: S(["t-avatar", { square: s.square }]),
      style: I({ "--size": o.value })
    }, [
      g(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), kt = /* @__PURE__ */ b(bt, [["__scopeId", "data-v-24384c2f"]]), $t = { class: "t-collapse-title" }, Tt = {
  key: 0,
  class: "icon"
}, wt = {
  key: 1,
  class: "icon"
}, It = { class: "t-collapse-content" }, St = /* @__PURE__ */ T({
  __name: "t-collapse",
  props: {
    title: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = v(!1), a = v(""), c = v(), p = () => {
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
        $("div", $t, [
          g(_.$slots, "title", {}, () => [
            X(P(o.title), 1)
          ])
        ]),
        g(_.$slots, "toogle", {}, () => [
          r.value ? (l(), f("div", Tt, [...d[0] || (d[0] = [
            $("i", { class: "ri-arrow-up-s-line" }, null, -1)
          ])])) : (l(), f("div", wt, [...d[1] || (d[1] = [
            $("i", { class: "ri-arrow-down-s-line" }, null, -1)
          ])]))
        ])
      ]),
      $("div", It, [
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
}), Dt = () => ({
  install: (e) => {
    ie(), e.component("t-app", fe), e.component("t-screen", oe), e.component("t-swipe-screen", Ye), e.component("t-cable", ve), e.component("t-toolbar", We), e.component("t-content", Te), e.component("t-card", ge), e.component("t-refresher", Ie), e.component("t-button", J), e.component("t-back-button", Ge), e.component("t-present", q), e.component("t-text", G), e.component("t-sheet", Je), e.component("t-pull-signal", re), e.component("t-input", tt), e.component("t-textarea", st), e.component("t-rich-text", lt), e.component("t-grid", dt), e.component("t-grid-item", vt), e.component("t-divider", yt), e.component("t-toogle-password", gt), e.component("t-loading-icon", M), e.component("t-alert", se), e.component("t-avatar", kt), e.component("t-collapse", St);
  }
});
export {
  L as blurCurrentActive,
  Ct as createAction,
  Bt as createAlert,
  Pt as createLoading,
  Dt as createToife,
  O as isFormElement,
  Le as presentController,
  k as screenController
};
