import { a as useUserSession } from "./index.e178843f.js";
import { d as defineComponent, m as useI18n, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, h as unref, a1 as useHead, s as createVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var EcommerceDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "ecommerce-dashboard ecommerce-dashboard-v1" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = { class: "start" };
const _hoisted_4 = { class: "dark-inverted" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const { locale, t } = useI18n();
    const user = ref(userSession.user);
    JSON.parse(window.localStorage.user).role;
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", _hoisted_4, toDisplayString(unref(t)("dashboard.title", { add: "@" })) + ", " + toDisplayString((_a = user.value) == null ? void 0 : _a.name) + " " + toDisplayString((_b = user.value) == null ? void 0 : _b.lastname), 1),
            createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.subtitle", { add: "@" })), 1)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Ecommerce 1");
    useHead({
      title: "Ecommerce 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_EcommerceDashboardV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_EcommerceDashboardV1)
      ]);
    };
  }
});
export { _sfc_main as default };
