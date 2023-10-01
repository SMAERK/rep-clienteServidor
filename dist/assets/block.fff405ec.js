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
    viewWrapper.setPageTitle("VBlock");
    useHead({
      title: "VBlock - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VBlockBaseDocumentation = resolveComponent("VBlockBaseDocumentation");
      const _component_VBlockIconDocumentation = resolveComponent("VBlockIconDocumentation");
      const _component_VBlockCenterDocumentation = resolveComponent("VBlockCenterDocumentation");
      const _component_VBlockIconCenterDocumentation = resolveComponent("VBlockIconCenterDocumentation");
      const _component_VBlockBaseResponsiveDocumentation = resolveComponent("VBlockBaseResponsiveDocumentation");
      const _component_VBlockCenterResponsiveDocumentation = resolveComponent("VBlockCenterResponsiveDocumentation");
      const _component_VBlockPropsDocumentation = resolveComponent("VBlockPropsDocumentation");
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
              label: "VBlock",
              to: { name: "components-block" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VBlockBaseDocumentation),
            createVNode(_component_VBlockIconDocumentation),
            createVNode(_component_VBlockCenterDocumentation),
            createVNode(_component_VBlockIconCenterDocumentation),
            createVNode(_component_VBlockBaseResponsiveDocumentation),
            createVNode(_component_VBlockCenterResponsiveDocumentation),
            createVNode(_component_VBlockPropsDocumentation)
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
