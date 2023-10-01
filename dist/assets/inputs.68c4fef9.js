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
    viewWrapper.setPageTitle("Inputs");
    useHead({
      title: "Inputs - Forms Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_InputBasicDocumentation = resolveComponent("InputBasicDocumentation");
      const _component_InputHelpDocumentation = resolveComponent("InputHelpDocumentation");
      const _component_InputRoundedDocumentation = resolveComponent("InputRoundedDocumentation");
      const _component_InputFocusDocumentation = resolveComponent("InputFocusDocumentation");
      const _component_InputFaDocumentation = resolveComponent("InputFaDocumentation");
      const _component_InputLineDocumentation = resolveComponent("InputLineDocumentation");
      const _component_InputFeatherDocumentation = resolveComponent("InputFeatherDocumentation");
      const _component_InputLoadingDocumentation = resolveComponent("InputLoadingDocumentation");
      const _component_InputDisabledDocumentation = resolveComponent("InputDisabledDocumentation");
      const _component_InputValidationDocumentation = resolveComponent("InputValidationDocumentation");
      const _component_InputValidationRoundedDocumentation = resolveComponent("InputValidationRoundedDocumentation");
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
              label: "Forms"
            },
            {
              label: "Inputs",
              to: { name: "elements-forms-inputs" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_InputBasicDocumentation),
            createVNode(_component_InputHelpDocumentation),
            createVNode(_component_InputRoundedDocumentation),
            createVNode(_component_InputFocusDocumentation),
            createVNode(_component_InputFaDocumentation),
            createVNode(_component_InputLineDocumentation),
            createVNode(_component_InputFeatherDocumentation),
            createVNode(_component_InputLoadingDocumentation),
            createVNode(_component_InputDisabledDocumentation),
            createVNode(_component_InputValidationDocumentation),
            createVNode(_component_InputValidationRoundedDocumentation)
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
