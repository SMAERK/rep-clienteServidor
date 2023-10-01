import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, null, -1);
const _hoisted_7 = { class: "column is-12 mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCardMedia");
    useHead({
      title: "VCardMedia - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VCardMediaDocumentation = resolveComponent("VCardMediaDocumentation");
      const _component_VCardMediaPropsDocumentation = resolveComponent("VCardMediaPropsDocumentation");
      const _component_VCardMediaSlotsDocumentation = resolveComponent("VCardMediaSlotsDocumentation");
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
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "Cards"
            },
            {
              label: "VCardMedia",
              to: { name: "components-card-media" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VCardMediaDocumentation)
          ]),
          _hoisted_4,
          _hoisted_5,
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VCardMediaPropsDocumentation),
            createVNode(_component_VCardMediaSlotsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
