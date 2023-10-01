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
    viewWrapper.setPageTitle("VIconBox");
    useHead({
      title: "VIconBox - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_IconBoxDefaultDocumentation = resolveComponent("IconBoxDefaultDocumentation");
      const _component_IconBoxColorsDocumentation = resolveComponent("IconBoxColorsDocumentation");
      const _component_IconBoxSquaredBorderDocumentation = resolveComponent("IconBoxSquaredBorderDocumentation");
      const _component_IconBoxRoundedDocumentation = resolveComponent("IconBoxRoundedDocumentation");
      const _component_IconBoxRoundedBorderDocumentation = resolveComponent("IconBoxRoundedBorderDocumentation");
      const _component_IconBoxFeatherDocumentation = resolveComponent("IconBoxFeatherDocumentation");
      const _component_IconBoxFaDocumentation = resolveComponent("IconBoxFaDocumentation");
      const _component_IconBoxPropsDocumentation = resolveComponent("IconBoxPropsDocumentation");
      const _component_IconBoxSlotsDocumentation = resolveComponent("IconBoxSlotsDocumentation");
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
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "VIconBox",
              to: { name: "components-icon-box" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_IconBoxDefaultDocumentation),
            createVNode(_component_IconBoxColorsDocumentation),
            createVNode(_component_IconBoxSquaredBorderDocumentation),
            createVNode(_component_IconBoxRoundedDocumentation),
            createVNode(_component_IconBoxRoundedBorderDocumentation),
            createVNode(_component_IconBoxFeatherDocumentation),
            createVNode(_component_IconBoxFaDocumentation),
            createVNode(_component_IconBoxPropsDocumentation),
            createVNode(_component_IconBoxSlotsDocumentation)
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
