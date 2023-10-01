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
    viewWrapper.setPageTitle("VSnack");
    useHead({
      title: "VSnack - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VSnackBaseDocumentation = resolveComponent("VSnackBaseDocumentation");
      const _component_VSnackWhiteDocumentation = resolveComponent("VSnackWhiteDocumentation");
      const _component_VSnackFeatherDocumentation = resolveComponent("VSnackFeatherDocumentation");
      const _component_VSnackFeatherSolidDocumentation = resolveComponent("VSnackFeatherSolidDocumentation");
      const _component_VSnackFaDocumentation = resolveComponent("VSnackFaDocumentation");
      const _component_VSnackFaSolidDocumentation = resolveComponent("VSnackFaSolidDocumentation");
      const _component_VSnackLineDocumentation = resolveComponent("VSnackLineDocumentation");
      const _component_VSnackLineSolidDocumentation = resolveComponent("VSnackLineSolidDocumentation");
      const _component_VSnackSmallImageDocumentation = resolveComponent("VSnackSmallImageDocumentation");
      const _component_VSnackSmallIconDocumentation = resolveComponent("VSnackSmallIconDocumentation");
      const _component_VSnackPropsDocumentation = resolveComponent("VSnackPropsDocumentation");
      const _component_VSnackSnackDocumentation = resolveComponent("VSnackSnackDocumentation");
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
              label: "VSnack",
              to: { name: "components-snack" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VSnackBaseDocumentation),
            createVNode(_component_VSnackWhiteDocumentation),
            createVNode(_component_VSnackFeatherDocumentation),
            createVNode(_component_VSnackFeatherSolidDocumentation),
            createVNode(_component_VSnackFaDocumentation),
            createVNode(_component_VSnackFaSolidDocumentation),
            createVNode(_component_VSnackLineDocumentation),
            createVNode(_component_VSnackLineSolidDocumentation),
            createVNode(_component_VSnackSmallImageDocumentation),
            createVNode(_component_VSnackSmallIconDocumentation),
            createVNode(_component_VSnackPropsDocumentation),
            createVNode(_component_VSnackSnackDocumentation)
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
