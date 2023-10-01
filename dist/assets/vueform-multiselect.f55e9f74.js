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
    viewWrapper.setPageTitle("vueform/multiselect");
    useHead({
      title: "vueform/multiselect - Addons - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_MultiselectAutocompleteDocumentation = resolveComponent("MultiselectAutocompleteDocumentation");
      const _component_MultiselectBaseDocumentation = resolveComponent("MultiselectBaseDocumentation");
      const _component_MultiselectMultipleObjectDocumentation = resolveComponent("MultiselectMultipleObjectDocumentation");
      const _component_MultiselectMultipleCustomLabelDocumentation = resolveComponent("MultiselectMultipleCustomLabelDocumentation");
      const _component_MultiselectDisabledOptionDocumentation = resolveComponent("MultiselectDisabledOptionDocumentation");
      const _component_MultiselectTagsBaseDocumentation = resolveComponent("MultiselectTagsBaseDocumentation");
      const _component_MultiselectSelectSlotDocumentation = resolveComponent("MultiselectSelectSlotDocumentation");
      const _component_MultiselectSelectSlotSearchDocumentation = resolveComponent("MultiselectSelectSlotSearchDocumentation");
      const _component_MultiselectSelectSlotUsersDocumentation = resolveComponent("MultiselectSelectSlotUsersDocumentation");
      const _component_MultiselectSelectSlotIconsDocumentation = resolveComponent("MultiselectSelectSlotIconsDocumentation");
      const _component_MultiselectTagsImageSlotDocumentation = resolveComponent("MultiselectTagsImageSlotDocumentation");
      const _component_MultiselectTagsCustomSlotDocumentation = resolveComponent("MultiselectTagsCustomSlotDocumentation");
      const _component_MultiselectTagsImagesStackedDocumentation = resolveComponent("MultiselectTagsImagesStackedDocumentation");
      const _component_MultiselectTagsUsersStackedDocumentation = resolveComponent("MultiselectTagsUsersStackedDocumentation");
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
              label: "vueform/multiselect",
              to: { name: "elements-addons-vueform-multiselect" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_MultiselectAutocompleteDocumentation),
            createVNode(_component_MultiselectBaseDocumentation),
            createVNode(_component_MultiselectMultipleObjectDocumentation),
            createVNode(_component_MultiselectMultipleCustomLabelDocumentation),
            createVNode(_component_MultiselectDisabledOptionDocumentation),
            createVNode(_component_MultiselectTagsBaseDocumentation),
            createVNode(_component_MultiselectSelectSlotDocumentation),
            createVNode(_component_MultiselectSelectSlotSearchDocumentation),
            createVNode(_component_MultiselectSelectSlotUsersDocumentation),
            createVNode(_component_MultiselectSelectSlotIconsDocumentation),
            createVNode(_component_MultiselectTagsImageSlotDocumentation),
            createVNode(_component_MultiselectTagsCustomSlotDocumentation),
            createVNode(_component_MultiselectTagsImagesStackedDocumentation),
            createVNode(_component_MultiselectTagsUsersStackedDocumentation),
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
