import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VButton");
    useHead({
      title: "VButton - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VButtonBaseDocumentation = resolveComponent("VButtonBaseDocumentation");
      const _component_VButtonLinkDocumentation = resolveComponent("VButtonLinkDocumentation");
      const _component_VButtonColorsDocumentation = resolveComponent("VButtonColorsDocumentation");
      const _component_VButtonColorsLightDocumentation = resolveComponent("VButtonColorsLightDocumentation");
      const _component_VButtonColorsOutlinedDocumentation = resolveComponent("VButtonColorsOutlinedDocumentation");
      const _component_VButtonPlaceloadDocumentation = resolveComponent("VButtonPlaceloadDocumentation");
      const _component_VButtonElevatedDocumentation = resolveComponent("VButtonElevatedDocumentation");
      const _component_VButtonDisabledDocumentation = resolveComponent("VButtonDisabledDocumentation");
      const _component_VButtonFaDocumentation = resolveComponent("VButtonFaDocumentation");
      const _component_VButtonFeatherDocumentation = resolveComponent("VButtonFeatherDocumentation");
      const _component_VButtonGroupDocumentation = resolveComponent("VButtonGroupDocumentation");
      const _component_VButtonAddonsDocumentation = resolveComponent("VButtonAddonsDocumentation");
      const _component_VButtonPropsDocumentation = resolveComponent("VButtonPropsDocumentation");
      const _component_VButtonSlotsDocumentation = resolveComponent("VButtonSlotsDocumentation");
      const _component_VButtonsPropsDocumentation = resolveComponent("VButtonsPropsDocumentation");
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
              label: "Buttons"
            },
            {
              label: "VButton",
              to: { name: "elements-button" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VButtonBaseDocumentation),
            createVNode(_component_VButtonLinkDocumentation),
            createVNode(_component_VButtonColorsDocumentation),
            createVNode(_component_VButtonColorsLightDocumentation),
            createVNode(_component_VButtonColorsOutlinedDocumentation),
            createVNode(_component_VButtonPlaceloadDocumentation),
            createVNode(_component_VButtonElevatedDocumentation),
            createVNode(_component_VButtonDisabledDocumentation),
            createVNode(_component_VButtonFaDocumentation),
            createVNode(_component_VButtonFeatherDocumentation),
            createVNode(_component_VButtonGroupDocumentation),
            createVNode(_component_VButtonAddonsDocumentation),
            createVNode(_component_VButtonPropsDocumentation),
            createVNode(_component_VButtonSlotsDocumentation),
            createVNode(_component_VButtonsPropsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
