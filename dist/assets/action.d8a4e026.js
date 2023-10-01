import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline mb-6" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline mb-6" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" })
], -1);
const _hoisted_5 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCardAction");
    useHead({
      title: "VCardAction - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VCardActionDocumentation = resolveComponent("VCardActionDocumentation");
      const _component_VCardActionContentDocumentation = resolveComponent("VCardActionContentDocumentation");
      const _component_VCardActionPropsDocumentation = resolveComponent("VCardActionPropsDocumentation");
      const _component_VCardActionSlotsDocumentation = resolveComponent("VCardActionSlotsDocumentation");
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
              label: "VCardAction",
              to: { name: "components-card-action" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VCardActionDocumentation),
            _hoisted_3,
            createVNode(_component_VCardActionContentDocumentation),
            _hoisted_4,
            createVNode(_component_VCardActionPropsDocumentation),
            createVNode(_component_VCardActionSlotsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
