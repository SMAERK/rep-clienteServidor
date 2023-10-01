import { _ as _sfc_main$4 } from "./LanguagesPanel.b7b20087.js";
import { _ as _sfc_main$3 } from "./Toolbar.cbd734d2.js";
import { d as defineComponent, k as ref, m as useI18n, a1 as useHead, u as useStorage, Q as watch, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, t as toDisplayString, h as unref } from "./vendor.6548d360.js";
import _sfc_main$1 from "./LoginForm.511a1f45.js";
import _sfc_main$2 from "./ResetForm.6591658d.js";
import "./panels.9ed80fb9.js";
import "./index.e178843f.js";
import "./VField.b8c33879.js";
import "./VControl.eb555562.js";
import "./useNotyf.8a48e815.js";
import "./useThemeColors.b71015d4.js";
import "./index.c13a9b10.js";
import "./index.esm.8b858c3a.js";
var _imports_0 = "/images/logo.png";
const _hoisted_1 = { class: "auth-wrapper-inner is-single" };
const _hoisted_2 = { class: "auth-nav" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, null, -1);
const _hoisted_4 = { class: "center" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "min-width": "160px" },
  class: "mt-6 ml-5",
  alt: ""
}, null, -1);
const _hoisted_6 = { class: "toolbar ml-auto right" };
const _hoisted_7 = { class: "single-form-wrap" };
const _hoisted_8 = { class: "inner-wrap" };
const _hoisted_9 = { class: "auth-head" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 0,
  class: "form-card"
};
const _hoisted_13 = {
  key: 1,
  class: "form-card"
};
const _hoisted_14 = { class: "forgot-link has-text-centered" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const hasResetPassword = ref(false);
    const { locale, t } = useI18n();
    useHead({
      title: "AIG - Universal"
    });
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Toolbar = _sfc_main$3;
      const _component_LanguagesPanel = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "header-item"
            }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" })
          ])
        ]),
        createVNode(_component_LanguagesPanel),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("h2", null, toDisplayString(unref(t)("login.login-welcome")), 1),
              !hasResetPassword.value ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(unref(t)("login.login-initSesion")), 1)) : (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(unref(t)("config.ChangePassword")), 1))
            ]),
            !hasResetPassword.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createVNode(_sfc_main$1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
              createVNode(_sfc_main$2)
            ])),
            createBaseVNode("div", _hoisted_14, [
              !hasResetPassword.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = ($event) => hasResetPassword.value = true)
              }, toDisplayString(unref(t)("login.login-forgot")), 1)) : (openBlock(), createElementBlock("a", {
                key: 1,
                onClick: _cache[1] || (_cache[1] = ($event) => hasResetPassword.value = false)
              }, toDisplayString(unref(t)("login.login-initSesion")), 1))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
