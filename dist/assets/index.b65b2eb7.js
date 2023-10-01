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
    viewWrapper.setPageTitle("VAvatar");
    useHead({
      title: "VAvatar - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_AvatarDefaultDocumentation = resolveComponent("AvatarDefaultDocumentation");
      const _component_AvatarSquareDocumentation = resolveComponent("AvatarSquareDocumentation");
      const _component_AvatarHandleFallbackDocumentation = resolveComponent("AvatarHandleFallbackDocumentation");
      const _component_AvatarDotDocumentation = resolveComponent("AvatarDotDocumentation");
      const _component_AvatarDotSquaredDocumentation = resolveComponent("AvatarDotSquaredDocumentation");
      const _component_AvatarDotColorsDocumentation = resolveComponent("AvatarDotColorsDocumentation");
      const _component_AvatarBadgeDocumentation = resolveComponent("AvatarBadgeDocumentation");
      const _component_AvatarFakeDocumentation = resolveComponent("AvatarFakeDocumentation");
      const _component_AvatarFakeSquareDocumentation = resolveComponent("AvatarFakeSquareDocumentation");
      const _component_AvatarFakeBadgeDocumentation = resolveComponent("AvatarFakeBadgeDocumentation");
      const _component_AvatarFakeColorDocumentation = resolveComponent("AvatarFakeColorDocumentation");
      const _component_AvatarFakeSquaredColorDocumentation = resolveComponent("AvatarFakeSquaredColorDocumentation");
      const _component_AvatarPropsDocumentation = resolveComponent("AvatarPropsDocumentation");
      const _component_AvatarSlotsDocumentation = resolveComponent("AvatarSlotsDocumentation");
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
              label: "VAvatar",
              to: { name: "components-avatar" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_AvatarDefaultDocumentation),
            createVNode(_component_AvatarSquareDocumentation),
            createVNode(_component_AvatarHandleFallbackDocumentation),
            createVNode(_component_AvatarDotDocumentation),
            createVNode(_component_AvatarDotSquaredDocumentation),
            createVNode(_component_AvatarDotColorsDocumentation),
            createVNode(_component_AvatarBadgeDocumentation),
            createVNode(_component_AvatarFakeDocumentation),
            createVNode(_component_AvatarFakeSquareDocumentation),
            createVNode(_component_AvatarFakeBadgeDocumentation),
            createVNode(_component_AvatarFakeColorDocumentation),
            createVNode(_component_AvatarFakeSquaredColorDocumentation),
            createVNode(_component_AvatarPropsDocumentation),
            createVNode(_component_AvatarSlotsDocumentation)
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
