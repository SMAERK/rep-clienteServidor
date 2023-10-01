import { _ as _sfc_main$2 } from "./VAction.e7ce9b1a.js";
import { aC as require$$0, ar as commonjsGlobal, d as defineComponent, i as useCssVars, h as unref, e as computed, ad as useCssVar, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, y as createCommentVNode, a5 as pushScopeId, a6 as popScopeId, a1 as useHead, z as resolveComponent } from "./vendor.6548d360.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VBreadcrumb.b45a5a1c.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var vueAccessibleColorPicker = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    e(exports, require$$0);
  }(commonjsGlobal, function(n, e) {
    function t(n2, e2, t2) {
      return Math.max(e2, Math.min(n2, t2));
    }
    function r(n2, e2 = 2) {
      return n2.toFixed(e2).replace(/0+$/, "").replace(/\.$/, "");
    }
    function a(n2) {
      if (n2.endsWith("."))
        return NaN;
      return (parseFloat(n2) % 360 + 360) % 360 / 360;
    }
    function o(n2) {
      return r(360 * n2);
    }
    function c(n2) {
      if (!n2.endsWith("%"))
        return NaN;
      const e2 = n2.substring(0, n2.length - 1);
      if (e2.endsWith("."))
        return NaN;
      const r2 = parseFloat(e2);
      return Number.isNaN(r2) ? NaN : t(r2, 0, 100) / 100;
    }
    function i(n2) {
      return r(100 * n2) + "%";
    }
    function l(n2) {
      if (n2.endsWith("%"))
        return c(n2);
      if (n2.endsWith("."))
        return NaN;
      const e2 = parseFloat(n2);
      return Number.isNaN(e2) ? NaN : t(e2, 0, 255) / 255;
    }
    function s(n2) {
      return r(255 * n2);
    }
    function u(n2) {
      return n2.endsWith("%") ? c(n2) : t(parseFloat(n2), 0, 1);
    }
    function p(n2) {
      return String(n2);
    }
    const d = { hsl: { h: { to: o, from: a }, s: { to: i, from: c }, l: { to: i, from: c }, a: { to: p, from: u } }, hwb: { h: { to: o, from: a }, w: { to: i, from: c }, b: { to: i, from: c }, a: { to: p, from: u } }, rgb: { r: { to: s, from: l }, g: { to: s, from: l }, b: { to: s, from: l }, a: { to: p, from: u } } };
    function v(n2) {
      const e2 = n2.replace(/^#/, ""), t2 = [], r2 = e2.length > 4 ? 2 : 1;
      for (let n3 = 0; n3 < e2.length; n3 += r2) {
        const a3 = e2.slice(n3, n3 + r2);
        t2.push(a3.repeat(r2 % 2 + 1));
      }
      t2.length === 3 && t2.push("ff");
      const a2 = t2.map((n3) => parseInt(n3, 16) / 255);
      return { r: a2[0], g: a2[1], b: a2[2], a: a2[3] };
    }
    function h(n2) {
      const e2 = n2.l < 0.5 ? n2.l * (1 + n2.s) : n2.l + n2.s - n2.l * n2.s, t2 = 2 * n2.l - e2;
      return { r: f(t2, e2, n2.h + 1 / 3), g: f(t2, e2, n2.h), b: f(t2, e2, n2.h - 1 / 3), a: n2.a };
    }
    function f(n2, e2, t2) {
      return t2 < 0 ? t2 += 1 : t2 > 1 && (t2 -= 1), t2 < 1 / 6 ? n2 + 6 * (e2 - n2) * t2 : t2 < 0.5 ? e2 : t2 < 2 / 3 ? n2 + (e2 - n2) * (2 / 3 - t2) * 6 : n2;
    }
    function g(n2) {
      return { r: b(5, n2), g: b(3, n2), b: b(1, n2), a: n2.a };
    }
    function b(n2, e2) {
      const t2 = (n2 + 6 * e2.h) % 6;
      return e2.v - e2.v * e2.s * Math.max(0, Math.min(t2, 4 - t2, 1));
    }
    function m(n2) {
      return { h: n2.h, s: n2.b === 1 ? 0 : 1 - n2.w / (1 - n2.b), v: 1 - n2.b, a: n2.a };
    }
    function y(n2) {
      const e2 = Math.min(n2.r, n2.g, n2.b), t2 = Math.max(n2.r, n2.g, n2.b);
      let r2;
      return r2 = t2 === e2 ? 0 : t2 === n2.r ? (0 + (n2.g - n2.b) / (t2 - e2)) / 6 : t2 === n2.g ? (2 + (n2.b - n2.r) / (t2 - e2)) / 6 : (4 + (n2.r - n2.g) / (t2 - e2)) / 6, r2 < 0 && (r2 += 1), { h: r2, w: e2, b: 1 - t2, a: n2.a };
    }
    function k(n2) {
      const e2 = y(n2), t2 = e2.w, r2 = 1 - e2.b, a2 = (r2 + t2) / 2;
      let o2;
      return o2 = r2 === 0 || t2 === 1 ? 0 : (r2 - a2) / Math.min(a2, 1 - a2), { h: e2.h, s: o2, l: a2, a: n2.a };
    }
    function x(n2) {
      return "#" + Object.values(n2).map((n3) => {
        const e2 = 255 * n3, t2 = Math.round(e2).toString(16);
        return t2.length === 1 ? "0" + t2 : t2;
      }).join("");
    }
    const w = { hex: [["hsl", function(n2) {
      return k(v(n2));
    }], ["hsv", function(n2) {
      return E(v(n2));
    }], ["hwb", function(n2) {
      return y(v(n2));
    }], ["rgb", v]], hsl: [["hex", function(n2) {
      return x(h(n2));
    }], ["hsv", function(n2) {
      const e2 = n2.l + n2.s * Math.min(n2.l, 1 - n2.l), t2 = e2 === 0 ? 0 : 2 - 2 * n2.l / e2;
      return { h: n2.h, s: t2, v: e2, a: n2.a };
    }], ["hwb", function(n2) {
      return y(h(n2));
    }], ["rgb", h]], hsv: [["hex", function(n2) {
      return x(g(n2));
    }], ["hsl", function(n2) {
      const e2 = n2.v - n2.v * n2.s / 2, t2 = Math.min(e2, 1 - e2), r2 = t2 === 0 ? 0 : (n2.v - e2) / t2;
      return { h: n2.h, s: r2, l: e2, a: n2.a };
    }], ["hwb", function(n2) {
      return { h: n2.h, w: (1 - n2.s) * n2.v, b: 1 - n2.v, a: n2.a };
    }], ["rgb", g]], hwb: [["hex", function(n2) {
      return x(N(n2));
    }], ["hsl", function(n2) {
      return k(N(n2));
    }], ["hsv", m], ["rgb", N]], rgb: [["hex", x], ["hsl", k], ["hsv", E], ["hwb", y]] };
    function N(n2) {
      return g(m(n2));
    }
    function E(n2) {
      return m(y(n2));
    }
    function $(n2) {
      const e2 = {};
      for (const t2 in n2)
        e2[t2] = n2[t2];
      return e2;
    }
    const C = { hex: (n2, e2) => e2 ? n2.substring(0, n2.length - (n2.length - 1) / 4) : n2, hsl: (n2, e2) => `hsl(${r(360 * n2.h)} ${r(100 * n2.s)}% ${r(100 * n2.l)}%` + (e2 ? ")" : ` / ${r(n2.a)})`), hwb: (n2, e2) => `hwb(${r(360 * n2.h)} ${r(100 * n2.w)}% ${r(100 * n2.b)}%` + (e2 ? ")" : ` / ${r(n2.a)})`), rgb: (n2, e2) => `rgb(${r(255 * n2.r)} ${r(255 * n2.g)} ${r(255 * n2.b)}` + (e2 ? ")" : ` / ${r(n2.a)})`) };
    function S(n2, e2, t2) {
      return C[e2](n2, t2);
    }
    function z(n2) {
      return !!n2.startsWith("#") && (!![3, 4, 6, 8].includes(n2.length - 1) && /^#[0-9A-Fa-f]+$/.test(n2));
    }
    function T(n2) {
      if (typeof n2 != "string") {
        const e3 = function(n3) {
          return Object.prototype.hasOwnProperty.call(n3, "r") ? "rgb" : Object.prototype.hasOwnProperty.call(n3, "w") ? "hwb" : Object.prototype.hasOwnProperty.call(n3, "v") ? "hsv" : "hsl";
        }(n2);
        return { format: e3, color: n2 };
      }
      if (z(n2))
        return { format: "hex", color: n2 };
      if (!n2.includes("(")) {
        const e3 = document.createElement("canvas").getContext("2d");
        e3.fillStyle = n2;
        const t3 = e3.fillStyle;
        return t3 === "#000000" && n2 !== "black" ? null : { format: "hex", color: t3 };
      }
      const [e2, t2] = n2.split("("), r2 = e2.substring(0, 3), a2 = t2.replace(/[,/)]/g, " ").replace(/\s+/g, " ").trim().split(" ");
      a2.length === 3 && a2.push("1");
      const o2 = r2.split("").concat("a"), c2 = Object.fromEntries(o2.map((n3, e3) => [n3, d[r2][n3].from(a2[e3])]));
      return { format: r2, color: c2 };
    }
    const A = ["hex", "hsl", "hwb", "rgb"], V = ["show", "hide"], L = { class: "vacp-range-input-group" }, M = ["for"], F = { class: "vacp-range-input-label-text vacp-range-input-label-text--hue" }, B = e.createTextVNode("Hue"), j = ["id", "value"], I = ["for"], P = { class: "vacp-range-input-label-text vacp-range-input-label-text--alpha" }, O = e.createTextVNode("Alpha"), W = ["id", "value"], q = e.createTextVNode(" Copy color "), D = { class: "vacp-color-inputs" }, H = { class: "vacp-color-input-group" }, R = ["for"], U = e.createElementVNode("span", { class: "vacp-color-input-label-text" }, " Hex ", -1), K = ["id", "value"], _ = ["id", "for", "onInput"], X = { class: "vacp-color-input-label-text" }, Y = ["id", "value", "onInput"], J = e.createTextVNode(" Switch format ");
    var G = { props: { color: { type: [String, Object], required: false, default: null }, id: { type: String, required: false, default: "color-picker" }, visibleFormats: { type: Array, required: false, default: () => A, validator: (n2) => n2.length > 0 && n2.every((n3) => A.includes(n3)) }, defaultFormat: { type: String, required: false, default: "hsl", validator: (n2) => A.includes(n2) }, alphaChannel: { type: String, required: false, default: "show", validator: (n2) => V.includes(n2) } }, emits: ["color-change"], setup(n2, { emit: r2 }) {
      const a2 = n2, o2 = e.ref(null), c2 = e.ref(null), i2 = e.ref(null), l2 = e.ref(false), s2 = e.ref(a2.defaultFormat), u2 = e.reactive({ hex: "#ffffffff", hsl: { h: 0, s: 0, l: 1, a: 1 }, hsv: { h: 0, s: 0, v: 1, a: 1 }, hwb: { h: 0, w: 1, b: 0, a: 1 }, rgb: { r: 1, g: 1, b: 1, a: 1 } }), p2 = e.computed(() => {
        const n3 = Object.keys(u2[s2.value]);
        return s2.value !== "hex" && a2.alphaChannel === "hide" ? n3.slice(0, 3) : n3;
      }), v2 = e.computed(() => a2.alphaChannel === "hide" && [5, 7].includes(u2.hex.length) ? u2.hex.substring(0, u2.hex.length - (u2.hex.length - 1) / 4) : u2.hex);
      function h2() {
        const n3 = a2.visibleFormats.findIndex((n4) => n4 === s2.value), e2 = n3 === a2.visibleFormats.length - 1 ? 0 : n3 + 1;
        s2.value = a2.visibleFormats[e2];
      }
      function f2(n3) {
        l2.value = true, m2(n3);
      }
      function g2(n3) {
        l2.value = true, y2(n3);
      }
      function b2() {
        l2.value = false;
      }
      function m2(n3) {
        n3.buttons === 1 && l2.value !== false && c2.value instanceof HTMLElement && k2(c2.value, n3.clientX, n3.clientY);
      }
      function y2(n3) {
        l2.value !== false && c2.value instanceof HTMLElement && (n3.preventDefault(), k2(c2.value, n3.touches[0].clientX, n3.touches[0].clientY));
      }
      function k2(n3, e2, r3) {
        const a3 = function(n4, e3, r4) {
          const a4 = n4.getBoundingClientRect(), o4 = e3 - a4.left, c3 = r4 - a4.top;
          return { x: t(o4 / a4.width, 0, 1), y: t(1 - c3 / a4.height, 0, 1) };
        }(n3, e2, r3), o3 = $(u2.hsv);
        o3.s = a3.x, o3.v = a3.y, V2("hsv", o3);
      }
      function x2(n3) {
        if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(n3.key))
          return;
        n3.preventDefault();
        const e2 = ["ArrowLeft", "ArrowDown"].includes(n3.key) ? -1 : 1, r3 = ["ArrowLeft", "ArrowRight"].includes(n3.key) ? "s" : "v", a3 = n3.shiftKey ? 10 : 1, o3 = u2.hsv[r3] + e2 * a3 * 0.01, c3 = $(u2.hsv);
        c3[r3] = t(o3, 0, 1), V2("hsv", c3);
      }
      function N2(n3) {
        if (n3 === null)
          return;
        const e2 = T(n3);
        e2 !== null && V2(e2.format, e2.color);
      }
      function E2(n3) {
        const e2 = n3.currentTarget, t2 = $(u2.hsv);
        t2.h = parseInt(e2.value) / 360, V2("hsv", t2);
      }
      function C2(n3) {
        const e2 = n3.currentTarget, t2 = $(u2.hsv);
        t2.a = parseInt(e2.value) / 100, V2("hsv", t2);
      }
      function A2(n3, e2, t2) {
        const r3 = n3.target, a3 = $(u2[e2]), o3 = d[e2][t2].from(r3.value);
        Number.isNaN(o3) || o3 === void 0 || (a3[t2] = o3, V2(e2, a3));
      }
      function V2(n3, e2) {
        let t2 = e2;
        if (a2.alphaChannel === "hide") {
          if (typeof e2 != "string")
            e2.a = 1, t2 = e2;
          else if ([5, 9].includes(e2.length)) {
            const n4 = (e2.length - 1) / 4;
            t2 = e2.substring(0, e2.length - n4) + "f".repeat(n4);
          }
        }
        if (!function(n4, e3) {
          if (typeof n4 == "string" || typeof e3 == "string")
            return n4 === e3;
          for (const t3 in n4)
            if (n4[t3] !== e3[t3])
              return false;
          return true;
        }(u2[n3], t2)) {
          u2[n3] = t2;
          const e3 = function(n4) {
            for (const [e4, t3] of w[n4])
              u2[e4] = t3(u2[n4]);
            o2.value instanceof HTMLElement && c2.value instanceof HTMLElement && i2.value instanceof HTMLElement && function(n5, e4, t3, r3) {
              n5.style.setProperty("--vacp-hsl-h", String(r3.hsl.h)), n5.style.setProperty("--vacp-hsl-s", String(r3.hsl.s)), n5.style.setProperty("--vacp-hsl-l", String(r3.hsl.l)), n5.style.setProperty("--vacp-hsl-a", String(r3.hsl.a)), e4.setAttribute("style", "\n    position: relative;\n    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */\n    background-image:\n      linear-gradient(to top, #000, transparent),  /* 2. */\n      linear-gradient(to right, #fff, transparent) /* 2. */\n    ;\n  "), t3.setAttribute("style", `
    box-sizing: border-box;
    position: absolute;
    left: ${100 * r3.hsv.s}%;   /* 3. */
    bottom: ${100 * r3.hsv.v}%; /* 3. */
  `);
            }(o2.value, c2.value, i2.value, u2);
            return function(n5, e4) {
              const t3 = a2.alphaChannel === "hide";
              return { colors: n5, cssColor: S(n5[e4], e4, t3) };
            }(u2, s2.value);
          }(n3);
          r2("color-change", e3);
        }
      }
      function G2() {
        const n3 = u2[s2.value], e2 = a2.alphaChannel === "hide";
        !function(n4) {
          if (typeof document.queryCommandSupported != "function" || !document.queryCommandSupported("copy"))
            return false;
          const e3 = document.createElement("textarea");
          let t2;
          e3.textContent = n4, e3.style.position = "fixed", document.body.appendChild(e3), e3.select();
          try {
            t2 = document.execCommand("copy");
          } catch {
            t2 = false;
          } finally {
            document.body.removeChild(e3);
          }
        }(S(n3, s2.value, e2));
      }
      function Q2(n3, e2) {
        return d[n3][e2].to(u2[n3][e2]);
      }
      function Z(n3) {
        if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(n3.key) || !n3.shiftKey)
          return;
        const e2 = n3.currentTarget, r3 = parseFloat(e2.step), a3 = ["ArrowLeft", "ArrowDown"].includes(n3.key) ? -1 : 1, o3 = t(parseFloat(e2.value) + a3 * r3 * 10, parseInt(e2.min), parseInt(e2.max));
        e2.value = String(o3 - a3 * r3);
      }
      return e.watch(() => a2.color, (n3) => {
        N2(n3);
      }), e.onMounted(() => {
        document.addEventListener("mousemove", m2, { passive: false }), document.addEventListener("touchmove", y2, { passive: false }), document.addEventListener("mouseup", b2), document.addEventListener("touchend", b2), N2(a2.color);
      }), e.onBeforeUnmount(() => {
        document.removeEventListener("mousemove", m2), document.removeEventListener("touchmove", y2), document.removeEventListener("mouseup", b2), document.removeEventListener("touchend", b2);
      }), (t2, r3) => (e.openBlock(), e.createElementBlock("div", { ref_key: "colorPicker", ref: o2, class: "vacp-color-picker" }, [e.createElementVNode("div", { ref_key: "colorSpace", ref: c2, class: "vacp-color-space", onMousedown: f2, onTouchstart: g2 }, [e.createElementVNode("div", { ref_key: "thumb", ref: i2, class: "vacp-color-space-thumb", tabindex: "0", "aria-label": "Color space thumb", onKeydown: x2 }, null, 544)], 544), e.createElementVNode("div", L, [e.createElementVNode("label", { class: "vacp-range-input-label vacp-range-input-label--hue", for: `${n2.id}-hue-slider` }, [e.createElementVNode("span", F, [e.renderSlot(t2.$slots, "hue-range-input-label", {}, () => [B])]), e.createElementVNode("input", { id: `${n2.id}-hue-slider`, class: "vacp-range-input vacp-range-input--hue", value: 360 * e.unref(u2).hsv.h, type: "range", min: "0", max: "360", step: "1", onKeydownPassive: Z, onInput: E2 }, null, 40, j)], 8, M), n2.alphaChannel === "show" ? (e.openBlock(), e.createElementBlock("label", { key: 0, class: "vacp-range-input-label vacp-range-input-label--alpha", for: `${n2.id}-alpha-slider` }, [e.createElementVNode("span", P, [e.renderSlot(t2.$slots, "alpha-range-input-label", {}, () => [O])]), e.createElementVNode("input", { id: `${n2.id}-alpha-slider`, class: "vacp-range-input vacp-range-input--alpha", value: 100 * e.unref(u2).hsv.a, type: "range", min: "0", max: "100", step: "1", onKeydownPassive: Z, onInput: C2 }, null, 40, W)], 8, I)) : e.createCommentVNode("", true)]), e.createElementVNode("button", { class: "vacp-copy-button", type: "button", onClick: G2 }, [e.renderSlot(t2.$slots, "copy-button", {}, () => [q])]), e.createElementVNode("div", D, [e.createElementVNode("div", H, [s2.value === "hex" ? (e.openBlock(), e.createElementBlock("label", { key: 0, class: "vacp-color-input-label", for: `${n2.id}-color-hex` }, [U, e.createElementVNode("input", { id: `${n2.id}-color-hex`, class: "vacp-color-input", type: "text", value: e.unref(v2), onInput: r3[0] || (r3[0] = (n3) => function(n4) {
        const e2 = n4.target;
        z(e2.value) && V2("hex", e2.value);
      }(n3)) }, null, 40, K)], 8, R)) : (e.openBlock(true), e.createElementBlock(e.Fragment, { key: 1 }, e.renderList(e.unref(p2), (t3) => (e.openBlock(), e.createElementBlock("label", { id: `${n2.id}-color-${s2.value}-${t3}`, key: `${n2.id}-color-${s2.value}-${t3}`, class: "vacp-color-input-label", for: `${n2.id}-color-${s2.value}`, onInput: (n3) => A2(n3, s2.value, t3) }, [e.createElementVNode("span", X, e.toDisplayString(t3.toUpperCase()), 1), e.createElementVNode("input", { id: `${n2.id}-color-${s2.value}`, class: "vacp-color-input", type: "text", value: Q2(s2.value, t3), onInput: (n3) => A2(n3, s2.value, t3) }, null, 40, Y)], 40, _))), 128))]), n2.visibleFormats.length > 1 ? (e.openBlock(), e.createElementBlock("button", { key: 0, class: "vacp-format-switch-button", type: "button", onClick: h2 }, [e.renderSlot(t2.$slots, "format-switch-button", {}, () => [J])])) : e.createCommentVNode("", true)])], 512));
    } };
    !function(n2, e2) {
      e2 === void 0 && (e2 = {});
      var t2 = e2.insertAt;
      if (n2 && typeof document != "undefined") {
        var r2 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style");
        a2.type = "text/css", t2 === "top" && r2.firstChild ? r2.insertBefore(a2, r2.firstChild) : r2.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = n2 : a2.appendChild(document.createTextNode(n2));
      }
    }('\n/*\nThis style block is unscoped intentionally.\n\nThis is done to have a lower specificity for its selectors which in turn makes it easier to override their styles.\n\nThe specificity for `.vacp-color-space[data-v-76c97bd2]` is 20 while the specifcitity for `.vacp-color-space` is 10.\n*/\n.vacp-color-picker {\n  --vacp-color: hsl(\n    calc(var(--vacp-hsl-h) * 360)\n    calc(var(--vacp-hsl-s) * 100%)\n    calc(var(--vacp-hsl-l) * 100%)\n    / var(--vacp-hsl-a)\n  );\n  --vacp-focus-color: dodgerblue;\n  --vacp-color-space-width: 300px;\n  --vacp-spacing: 6px;\n  --vacp-tiled-background-image: linear-gradient(\n      45deg,\n      #eee 25%,\n      transparent 25%,\n      transparent 75%,\n      #eee 75%,\n      #eee\n    ),\n    linear-gradient(\n      45deg,\n      #eee 25%,\n      transparent 25%,\n      transparent 75%,\n      #eee 75%,\n      #eee\n    )\n  ;\n\n  max-width: var(--vacp-color-space-width);\n  padding: var(--vacp-spacing);\n  display: grid;\n  grid-gap: var(--vacp-spacing);\n  grid-template-columns: 1fr min-content;\n  grid-template-areas:\n    "color-space  color-space"\n    "range-inputs copy-button"\n    "color-inputs color-inputs"\n  ;\n  font-size: 0.8em;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  background-color: #fff;\n}\n.vacp-color-picker *,\n.vacp-color-picker *::before,\n.vacp-color-picker *::after {\n  box-sizing: border-box;\n}\n.vacp-color-picker button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.vacp-color-picker :focus {\n  outline: 2px solid var(--vacp-focus-color);\n}\n.vacp-color-space {\n  grid-area: color-space;\n\n  overflow: hidden;\n  height: calc(var(--vacp-color-space-width) * 0.6);\n}\n.vacp-color-space-thumb {\n  --vacp-thumb-size: calc(var(--vacp-spacing) * 4);\n\n  width: var(--vacp-thumb-size);\n  height: var(--vacp-thumb-size);\n  margin-left: calc(-1 * var(--vacp-thumb-size) / 2);\n  margin-bottom: calc(-1 * var(--vacp-thumb-size) / 2);\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px #000;\n}\n\n/*\n1. Don\u2019t fully remove a focus outline or border. This is important to maintain a focus style in Windows\u2019 high contrast mode.\n*/\n.vacp-color-space-thumb:focus {\n  outline-color: transparent; /* 1. */\n  box-shadow: 0 0 0 1px #000, 0 0 0 3px var(--vacp-focus-color);\n}\n.vacp-range-input-label {\n  --vacp-slider-track-width: 100%;\n  --vacp-slider-track-height: calc(var(--vacp-spacing) * 3);\n  --vacp-slider-thumb-size: calc(var(--vacp-slider-track-height) + var(--vacp-spacing));\n\n  display: block;\n}\n.vacp-range-input-group {\n  grid-area: range-inputs;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.vacp-range-input-group > :not(:first-child) {\n  margin-top: var(--vacp-spacing);\n}\n.vacp-range-input,\n.vacp-range-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n.vacp-range-input {\n  display: block;\n  width: var(--vacp-slider-track-width);\n  height: var(--vacp-slider-track-height);\n  margin-right: 0;\n  margin-left: 0;\n  margin-top: calc(var(--vacp-spacing) / 2);\n  margin-bottom: calc(var(--vacp-spacing) / 2);\n  padding: 0;\n  border: none;\n  background: none;\n}\n.vacp-range-input:focus {\n  outline: none;\n}\n\n/* Resets one of these annoying custom focus styles in Firefox. */\n.vacp-range-input::-moz-focus-outer {\n  border: none;\n}\n.vacp-range-input--alpha {\n  background-color: #fff;\n  background-image: var(--vacp-tiled-background-image);\n  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);\n  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);\n}\n\n/*\nRange input: Tracks\n*/\n.vacp-range-input::-moz-range-track {\n  display: block;\n  box-sizing: border-box;\n  height: var(--vacp-slider-track-height);\n  border: none;\n}\n.vacp-range-input::-webkit-slider-runnable-track {\n  width: var(--vacp-slider-track-width);\n  height: var(--vacp-slider-track-height);\n  border: none;\n}\n.vacp-range-input::-ms-track {\n  width: var(--vacp-slider-track-width);\n  height: var(--vacp-slider-track-height);\n  border: none;\n}\n.vacp-range-input:focus::-moz-range-track {\n  border: 1px solid var(--vacp-focus-color);\n  outline: 2px solid var(--vacp-focus-color);\n}\n.vacp-range-input:focus::-webkit-slider-runnable-track {\n  border: 1px solid var(--vacp-focus-color);\n  outline: 2px solid var(--vacp-focus-color);\n}\n.vacp-range-input:focus::-ms-track {\n  border: 1px solid var(--vacp-focus-color);\n  outline: 2px solid var(--vacp-focus-color);\n}\n.vacp-range-input--alpha::-moz-range-track {\n  background-image: linear-gradient(to right, transparent, var(--vacp-color));\n}\n.vacp-range-input--alpha::-webkit-slider-runnable-track {\n  background-image: linear-gradient(to right, transparent, var(--vacp-color));\n}\n.vacp-range-input--alpha::-ms-track {\n  background-image: linear-gradient(to right, transparent, var(--vacp-color));\n}\n.vacp-range-input--hue::-moz-range-track {\n  background-image: linear-gradient(\n    to right,\n    /*   0\xB0 */ #f00 calc(100% *   0/360),\n    /*  60\xB0 */ #ff0 calc(100% *  60/360),\n    /* 120\xB0 */ #0f0 calc(100% * 120/360),\n    /* 180\xB0 */ #0ff calc(100% * 180/360),\n    /* 240\xB0 */ #00f calc(100% * 240/360),\n    /* 300\xB0 */ #f0f calc(100% * 300/360),\n    /* 360\xB0 */ #f00 calc(100% * 360/360)\n  );\n}\n.vacp-range-input--hue::-webkit-slider-runnable-track {\n  background-image: linear-gradient(\n    to right,\n    /*   0\xB0 */ #f00 calc(100% *   0/360),\n    /*  60\xB0 */ #ff0 calc(100% *  60/360),\n    /* 120\xB0 */ #0f0 calc(100% * 120/360),\n    /* 180\xB0 */ #0ff calc(100% * 180/360),\n    /* 240\xB0 */ #00f calc(100% * 240/360),\n    /* 300\xB0 */ #f0f calc(100% * 300/360),\n    /* 360\xB0 */ #f00 calc(100% * 360/360)\n  );\n}\n.vacp-range-input--hue::-ms-track {\n  background-image: linear-gradient(\n    to right,\n    /*   0\xB0 */ #f00 calc(100% *   0/360),\n    /*  60\xB0 */ #ff0 calc(100% *  60/360),\n    /* 120\xB0 */ #0f0 calc(100% * 120/360),\n    /* 180\xB0 */ #0ff calc(100% * 180/360),\n    /* 240\xB0 */ #00f calc(100% * 240/360),\n    /* 300\xB0 */ #f0f calc(100% * 300/360),\n    /* 360\xB0 */ #f00 calc(100% * 360/360)\n  );\n}\n\n/*\nRange input: thumbs\n*/\n.vacp-range-input::-moz-range-thumb {\n  box-sizing: border-box;\n  width: var(--vacp-slider-thumb-size);\n  height: var(--vacp-slider-thumb-size);\n  border: 3px solid #fff;\n  border-radius: 50%;\n  background-color: transparent;\n  box-shadow: 0 0 0 1px #000;\n  transform: rotate(0);\n}\n.vacp-range-input::-webkit-slider-thumb {\n  width: var(--vacp-slider-thumb-size);\n  height: var(--vacp-slider-thumb-size);\n  margin-top: calc((var(--vacp-slider-track-height) - var(--vacp-slider-thumb-size)) / 2);\n  border: 3px solid #fff;\n  border-radius: 50%;\n  background-color: transparent;\n  box-shadow: 0 0 0 1px #000;\n  transform: rotate(0);\n}\n.vacp-range-input::-ms-thumb {\n  width: var(--vacp-slider-thumb-size);\n  height: var(--vacp-slider-thumb-size);\n  margin-top: 0;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  background-color: transparent;\n  box-shadow: 0 0 0 1px #000;\n  transform: rotate(0);\n}\n.vacp-copy-button {\n  grid-area: copy-button;\n  justify-self: center;\n  align-self: center;\n\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(var(--vacp-spacing) * 6);\n  height: calc(var(--vacp-spacing) * 6);\n  border: 1px solid transparent;\n  border-radius: 50%;\n  color: #fff;\n\n  /* Tiled background */\n  background-color: #fff;\n  background-image:\n    linear-gradient(var(--vacp-color), var(--vacp-color)),\n    var(--vacp-tiled-background-image)\n  ;\n  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);\n  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);\n}\n.vacp-copy-button:enabled:not(:hover) svg {\n  display: none;\n}\n\n/*\n1. Justification for removing the outline: The focus styles are maintained using a solid border style. This maintains a focus style in Windows\u2019 high contrast mode which would be lost with a combination of `outline: none` and a box shadow because box shadows are removed in high contrast mode.\n*/\n.vacp-copy-button:enabled:focus {\n  outline: none; /* 1. */\n  box-shadow: 0 0 0 2px var(--vacp-focus-color);\n  border-color: var(--vacp-focus-color);\n}\n.vacp-copy-button:enabled:hover {\n  background-color: var(--vacp-color);\n  background-image: linear-gradient(rgb(0 0 0 / 0.25), rgb(0 0 0 / 0.25));\n}\n.vacp-color-inputs {\n  grid-area: color-inputs;\n  display: flex;\n  align-items: center;\n}\n.vacp-color-inputs > :not(:first-child) {\n  margin-left: var(--vacp-spacing);\n}\n.vacp-color-input-group {\n  flex-grow: 1;\n  display: flex;\n}\n.vacp-color-input-label {\n  flex-grow: 1;\n  text-align: center;\n}\n.vacp-color-input-label:not(:first-child) {\n  margin-left: var(--vacp-spacing);\n}\n.vacp-color-input {\n  width: 100%;\n  margin: 0;\n  margin-top: calc(var(--vacp-spacing) / 2);\n  padding: var(--vacp-spacing);\n  border: 1px solid #ccc;\n  font: inherit;\n  text-align: center;\n  color: inherit;\n  background-color: #fff;\n}\n.vacp-color-input:enabled:focus {\n  border-color: var(--vacp-focus-color);\n}\n.vacp-format-switch-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: var(--vacp-spacing);\n  border: 1px solid transparent;\n  font: inherit;\n  color: inherit;\n  background-color: #fff;\n}\n.vacp-format-switch-button:enabled:focus {\n  border-color: var(--vacp-focus-color);\n}\n.vacp-format-switch-button:enabled:hover {\n  background-color: #eee;\n}\n');
    var Q = { install(n2) {
      n2.component("ColorPicker", G);
    } };
    n.ColorPicker = G, n.default = Q, Object.defineProperty(n, "__esModule", { value: true });
  });
})(vueAccessibleColorPicker, vueAccessibleColorPicker.exports);
var DocumentationColor_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-596c0b20"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "color-card" };
const _hoisted_2$1 = { class: "color-card-header" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "color-dot is-primary" }, null, -1));
const _hoisted_4$1 = { class: "meta" };
const _hoisted_5$1 = { class: "actions" };
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = { key: 0 };
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider" }, null, -1));
const _hoisted_10$1 = { class: "color-picker" };
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Hue", -1));
const _hoisted_12$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Alpha", -1));
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Copy color", -1));
const _hoisted_14$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify is-clickable",
  "aria-hidden": "true",
  "data-icon": "feather:copy"
}, null, -1));
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Switch format", -1));
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify rem-120 is-clickable",
  "aria-hidden": "true",
  "data-icon": "fluent:chevron-up-down-20-filled"
}, null, -1));
const _hoisted_17$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider" }, null, -1));
const _hoisted_18$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Hue", -1));
const _hoisted_19$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Saturation", -1));
const _hoisted_20$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Luminance", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    color: null
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "1baeb724": unref(colorHslCss)
    }));
    const colorVarName = computed(() => `--${props.color}`);
    const colorHueVarName = computed(() => `--${props.color}-h`);
    const colorSaturationVarName = computed(() => `--${props.color}-s`);
    const colorLuminanceVarName = computed(() => `--${props.color}-l`);
    const colorVar = useCssVar(colorVarName.value);
    const colorHueVar = useCssVar(colorHueVarName.value);
    const colorSaturationVar = useCssVar(colorSaturationVarName.value);
    const colorLuminanceVar = useCssVar(colorLuminanceVarName.value);
    const colorHslCss = computed(() => `hsl(${colorHueVar.value}, ${colorSaturationVar.value}, ${colorLuminanceVar.value})`);
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    function updateColor({ colors }) {
      const { h, s, l } = colors.hsl;
      colorHueVar.value = `${Math.round(h * 360)}`;
      colorSaturationVar.value = `${Math.round(s * 100)}%`;
      colorLuminanceVar.value = `${Math.round(l * 100)}%`;
    }
    return (_ctx, _cache) => {
      const _component_VAction = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("span", null, "var(" + toDisplayString(unref(colorVarName)) + ")", 1),
            createBaseVNode("span", null, toDisplayString(unref(colorVar)), 1)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_VAction, {
              tabindex: "0",
              onKeydown: withKeys(withModifiers(toggle, ["prevent"]), ["space"]),
              onClick: toggle
            }, {
              default: withCtx(() => [
                isOpen.value ? (openBlock(), createElementBlock("span", _hoisted_6$1, "Close")) : (openBlock(), createElementBlock("span", _hoisted_7$1, "Customize"))
              ]),
              _: 1
            }, 8, ["onKeydown"])
          ])
        ]),
        isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
          _hoisted_9$1,
          createBaseVNode("div", _hoisted_10$1, [
            createVNode(unref(vueAccessibleColorPicker.exports.ColorPicker), {
              id: props.color,
              class: "hide-alpha hide-copy",
              color: `hsl(${unref(colorHueVar)}, ${unref(colorSaturationVar)}, ${unref(colorLuminanceVar)})`,
              onColorChange: updateColor
            }, {
              "hue-range-input-label": withCtx(() => [
                _hoisted_11$1
              ]),
              "alpha-range-input-label": withCtx(() => [
                _hoisted_12$1
              ]),
              "copy-button": withCtx(() => [
                _hoisted_13$1,
                _hoisted_14$1
              ]),
              "format-switch-button": withCtx(() => [
                _hoisted_15$1,
                _hoisted_16$1
              ]),
              _: 1
            }, 8, ["id", "color"])
          ]),
          _hoisted_17$1,
          createBaseVNode("dl", null, [
            createBaseVNode("dt", null, [
              _hoisted_18$1,
              createBaseVNode("small", null, "var(" + toDisplayString(unref(colorHueVarName)) + ")", 1)
            ]),
            createBaseVNode("dd", null, toDisplayString(unref(colorHueVar)), 1)
          ]),
          createBaseVNode("dl", null, [
            createBaseVNode("dt", null, [
              _hoisted_19$1,
              createBaseVNode("small", null, "var(" + toDisplayString(unref(colorSaturationVarName)) + ")", 1)
            ]),
            createBaseVNode("dd", null, toDisplayString(unref(colorSaturationVar)), 1)
          ]),
          createBaseVNode("dl", null, [
            createBaseVNode("dt", null, [
              _hoisted_20$1,
              createBaseVNode("small", null, "var(" + toDisplayString(unref(colorLuminanceVarName)) + ")", 1)
            ]),
            createBaseVNode("dd", null, toDisplayString(unref(colorLuminanceVar)), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-596c0b20"]]);
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = { class: "column is-4" };
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = { class: "column is-4" };
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = { class: "column is-4" };
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = { class: "column is-4" };
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = { class: "column is-4" };
const _hoisted_20 = { class: "columns is-multiline" };
const _hoisted_21 = { class: "column is-4" };
const _hoisted_22 = { class: "column is-4" };
const _hoisted_23 = { class: "column is-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Colors");
    useHead({
      title: "Colors - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_ColorsDocumentation = resolveComponent("ColorsDocumentation");
      const _component_DocumentationColor = __unplugin_components_1;
      const _component_ThemeDocumentation = resolveComponent("ThemeDocumentation");
      const _component_ThemingDocumentation = resolveComponent("ThemingDocumentation");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "Vuero",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "Elements",
              to: { name: "elements" }
            },
            {
              label: "Colors",
              to: { name: "elements-colors" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_ColorsDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_DocumentationColor, { color: "primary" })
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_DocumentationColor, { color: "secondary" })
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_DocumentationColor, { color: "dark" })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_DocumentationColor, { color: "success" })
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_DocumentationColor, { color: "warning" })
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_DocumentationColor, { color: "danger" })
              ])
            ]),
            createVNode(_component_ThemeDocumentation),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_DocumentationColor, { color: "purple" })
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_DocumentationColor, { color: "blue" })
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_DocumentationColor, { color: "light-blue" })
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(_component_DocumentationColor, { color: "red" })
              ]),
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_DocumentationColor, { color: "orange" })
              ]),
              createBaseVNode("div", _hoisted_17, [
                createVNode(_component_DocumentationColor, { color: "yellow" })
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_DocumentationColor, { color: "pink" })
              ]),
              createBaseVNode("div", _hoisted_19, [
                createVNode(_component_DocumentationColor, { color: "green" })
              ])
            ]),
            createVNode(_component_ThemingDocumentation),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_DocumentationColor, { color: "primary-grey" })
              ]),
              createBaseVNode("div", _hoisted_22, [
                createVNode(_component_DocumentationColor, { color: "placeholder" })
              ]),
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_DocumentationColor, { color: "smoke-white" })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
