import { _ as _sfc_main$2 } from "./VFlexPagination.ec5e6993.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, a0 as useRoute, e as computed, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, h as unref } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { class: "mt-4 mb-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const currentPage = computed(() => {
      try {
        return Number.parseInt(route.query.page) || 1;
      } catch {
      }
      return 1;
    });
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VFlexPagination");
    useHead({
      title: "VFlexPagination - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexPaginationBaseDocumentation = resolveComponent("VFlexPaginationBaseDocumentation");
      const _component_VFlexPagination = _sfc_main$2;
      const _component_VFlexPaginationPropsDocumentation = resolveComponent("VFlexPaginationPropsDocumentation");
      const _component_VFlexPaginationEventsDocumentation = resolveComponent("VFlexPaginationEventsDocumentation");
      const _component_VFlexPaginationSlotsDocumentation = resolveComponent("VFlexPaginationSlotsDocumentation");
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
              label: "VFlexPagination",
              to: { name: "components-pagination" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexPaginationBaseDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexPagination, {
                "item-per-page": 8,
                "total-items": 512,
                "current-page": unref(currentPage)
              }, null, 8, ["current-page"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VFlexPagination, {
                "item-per-page": 8,
                "total-items": 512,
                "current-page": unref(currentPage),
                "max-links-displayed": 6
              }, null, 8, ["current-page"])
            ]),
            createVNode(_component_VFlexPaginationPropsDocumentation),
            createVNode(_component_VFlexPaginationEventsDocumentation),
            createVNode(_component_VFlexPaginationSlotsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
