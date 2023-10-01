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
    viewWrapper.setPageTitle("VIconWrap");
    useHead({
      title: "VIconWrap - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_IconWrapDefaultDocumentation = resolveComponent("IconWrapDefaultDocumentation");
      const _component_IconWrapColorsDocumentation = resolveComponent("IconWrapColorsDocumentation");
      const _component_IconWrapSizesDocumentation = resolveComponent("IconWrapSizesDocumentation");
      const _component_IconWrapDarkDocumentation = resolveComponent("IconWrapDarkDocumentation");
      const _component_IconWrapTooltipsDocumentation = resolveComponent("IconWrapTooltipsDocumentation");
      const _component_IconWrapPropsDocumentation = resolveComponent("IconWrapPropsDocumentation");
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
              label: "VIconWrap",
              to: { name: "components-icon-wrap" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_IconWrapDefaultDocumentation),
            createVNode(_component_IconWrapColorsDocumentation),
            createVNode(_component_IconWrapSizesDocumentation),
            createVNode(_component_IconWrapDarkDocumentation),
            createVNode(_component_IconWrapTooltipsDocumentation),
            createVNode(_component_IconWrapPropsDocumentation)
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
