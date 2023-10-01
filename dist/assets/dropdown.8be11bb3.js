import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "demo-spacer" }, null, -1);
const _hoisted_4 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VDropdown");
    useHead({
      title: "VDropdown - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_DropdownDocumentation = resolveComponent("DropdownDocumentation");
      const _component_DropdownColorsDocumentation = resolveComponent("DropdownColorsDocumentation");
      const _component_DropdownButtonSlotDocumentation = resolveComponent("DropdownButtonSlotDocumentation");
      const _component_DropdownButtonHoverDocumentation = resolveComponent("DropdownButtonHoverDocumentation");
      const _component_DropdownModernDocumentation = resolveComponent("DropdownModernDocumentation");
      const _component_DropdownWithIconsDocumentation = resolveComponent("DropdownWithIconsDocumentation");
      const _component_DropdownWithImagesDocumentation = resolveComponent("DropdownWithImagesDocumentation");
      const _component_DropdownPropsDocumentation = resolveComponent("DropdownPropsDocumentation");
      const _component_DropdownSlotsDocumentation = resolveComponent("DropdownSlotsDocumentation");
      const _component_DropdownExposeDocumentation = resolveComponent("DropdownExposeDocumentation");
      const _component_DocumentationToc = __unplugin_components_1;
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
              label: "VDropdown",
              to: { name: "elements-dropdown" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_DropdownDocumentation),
            createVNode(_component_DropdownColorsDocumentation),
            createVNode(_component_DropdownButtonSlotDocumentation),
            createVNode(_component_DropdownButtonHoverDocumentation),
            createVNode(_component_DropdownModernDocumentation),
            createVNode(_component_DropdownWithIconsDocumentation),
            createVNode(_component_DropdownWithImagesDocumentation),
            createVNode(_component_DropdownPropsDocumentation),
            createVNode(_component_DropdownSlotsDocumentation),
            createVNode(_component_DropdownExposeDocumentation),
            _hoisted_3
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
