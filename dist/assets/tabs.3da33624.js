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
    viewWrapper.setPageTitle("VTabs");
    useHead({
      title: "VTabs - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_TabsBaseDocumentation = resolveComponent("TabsBaseDocumentation");
      const _component_TabsCenteredDocumentation = resolveComponent("TabsCenteredDocumentation");
      const _component_TabsRightDocumentation = resolveComponent("TabsRightDocumentation");
      const _component_TabsIconifyDocumentation = resolveComponent("TabsIconifyDocumentation");
      const _component_TabsBoxedDocumentation = resolveComponent("TabsBoxedDocumentation");
      const _component_TabsToggleDocumentation = resolveComponent("TabsToggleDocumentation");
      const _component_TabsRoundedDocumentation = resolveComponent("TabsRoundedDocumentation");
      const _component_TabsSliderDoubleDocumentation = resolveComponent("TabsSliderDoubleDocumentation");
      const _component_TabsSliderDsquareDocumentation = resolveComponent("TabsSliderDsquareDocumentation");
      const _component_TabsSliderTripleDocumentation = resolveComponent("TabsSliderTripleDocumentation");
      const _component_TabsSliderTsquareDocumentation = resolveComponent("TabsSliderTsquareDocumentation");
      const _component_TabsPropsDocumentation = resolveComponent("TabsPropsDocumentation");
      const _component_TabsSlotsDocumentation = resolveComponent("TabsSlotsDocumentation");
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
              label: "VTabs",
              to: { name: "components-tabs" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_TabsBaseDocumentation),
            createVNode(_component_TabsCenteredDocumentation),
            createVNode(_component_TabsRightDocumentation),
            createVNode(_component_TabsIconifyDocumentation),
            createVNode(_component_TabsBoxedDocumentation),
            createVNode(_component_TabsToggleDocumentation),
            createVNode(_component_TabsRoundedDocumentation),
            createVNode(_component_TabsSliderDoubleDocumentation),
            createVNode(_component_TabsSliderDsquareDocumentation),
            createVNode(_component_TabsSliderTripleDocumentation),
            createVNode(_component_TabsSliderTsquareDocumentation),
            createVNode(_component_TabsPropsDocumentation),
            createVNode(_component_TabsSlotsDocumentation)
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
