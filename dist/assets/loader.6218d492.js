import { _ as _sfc_main$3 } from "./VLoader.74e9a6e7.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, w as withCtx } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mb-4" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = { class: "column is-4" };
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoaderActive = ref(false);
    const toggleLoaders = () => {
      isLoaderActive.value = !isLoaderActive.value;
    };
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VLoader");
    useHead({
      title: "VLoader - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VLoaderDocumentation = resolveComponent("VLoaderDocumentation");
      const _component_VButton = _sfc_main$2;
      const _component_VLoader = _sfc_main$3;
      const _component_VLoaderPropsDocumentation = resolveComponent("VLoaderPropsDocumentation");
      const _component_VLoaderSlotsDocumentation = resolveComponent("VLoaderSlotsDocumentation");
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
              label: "VLoader",
              to: { name: "elements-loader" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VLoaderDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                onClick: toggleLoaders
              }, {
                default: withCtx(() => [
                  !isLoaderActive.value ? (openBlock(), createElementBlock("span", _hoisted_5, "Show Loaders")) : (openBlock(), createElementBlock("span", _hoisted_6, "Hide Loaders"))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_VLoader, {
                  size: "small",
                  active: isLoaderActive.value,
                  grey: ""
                }, null, 8, ["active"])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_VLoader, {
                  card: "regular",
                  size: "small",
                  active: isLoaderActive.value
                }, null, 8, ["active"])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VLoader, {
                  card: "regular",
                  size: "small",
                  active: isLoaderActive.value,
                  translucent: ""
                }, null, 8, ["active"])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_VLoader, {
                  card: "smooth",
                  active: isLoaderActive.value
                }, null, 8, ["active"])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VLoader, {
                  card: "rounded",
                  size: "large",
                  active: isLoaderActive.value
                }, null, 8, ["active"])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VLoader, {
                  card: "rounded",
                  size: "xl",
                  active: isLoaderActive.value
                }, null, 8, ["active"])
              ])
            ]),
            createVNode(_component_VLoaderPropsDocumentation),
            createVNode(_component_VLoaderSlotsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
