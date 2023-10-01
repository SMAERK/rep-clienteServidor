import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "pb-6 mb-6" }, null, -1);
const _hoisted_4 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("vueform/slider");
    useHead({
      title: "vueform/slider - Addons - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_SliderBaseDocumentation = resolveComponent("SliderBaseDocumentation");
      const _component_SliderSquaredDocumentation = resolveComponent("SliderSquaredDocumentation");
      const _component_SliderCurvedDocumentation = resolveComponent("SliderCurvedDocumentation");
      const _component_SliderColorDocumentation = resolveComponent("SliderColorDocumentation");
      const _component_SliderMultipleDocumentation = resolveComponent("SliderMultipleDocumentation");
      const _component_SliderFormatDocumentation = resolveComponent("SliderFormatDocumentation");
      const _component_SliderMergingDocumentation = resolveComponent("SliderMergingDocumentation");
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
              label: "Addons"
            },
            {
              label: "vueform/slider",
              to: { name: "elements-addons-vueform-slider" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_SliderBaseDocumentation),
            createVNode(_component_SliderSquaredDocumentation),
            createVNode(_component_SliderCurvedDocumentation),
            createVNode(_component_SliderColorDocumentation),
            createVNode(_component_SliderMultipleDocumentation),
            createVNode(_component_SliderFormatDocumentation),
            createVNode(_component_SliderMergingDocumentation),
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
