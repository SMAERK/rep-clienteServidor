import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { e as _sfc_main$3, b as _sfc_main$4, d as _sfc_main$5 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VPlaceholderSection.d614fe7b.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, y as createCommentVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "columns is-vcentered" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("View plans");
const _hoisted_7 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VPlaceholderSection");
    useHead({
      title: "VPlaceholderSection - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VPlaceholderSection = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VButtons = _sfc_main$5;
      const _component_VPlaceholderSectionPropsDocumentation = resolveComponent("VPlaceholderSectionPropsDocumentation");
      const _component_VPlaceholderSectionSlotsDocumentation = resolveComponent("VPlaceholderSectionSlotsDocumentation");
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
              label: "VPlaceholderSection",
              to: { name: "components-placeholder-section" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_VPlaceholderSection, {
                      title: "You were invited",
                      subtitle: "Jimmy H. invited you to join the Heartman & Sons project."
                    }, {
                      image: withCtx(() => []),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VPlaceholderSection, {
                  title: "Go Premium",
                  subtitle: "Unlock more features and business tools by going premium"
                }, {
                  action: withCtx(() => [
                    createVNode(_component_VButtons, { align: "centered" }, {
                      default: withCtx(() => [
                        createVNode(_component_VButton, { color: "primary" }, {
                          default: withCtx(() => [
                            _hoisted_6
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_VPlaceholderSectionPropsDocumentation),
            createVNode(_component_VPlaceholderSectionSlotsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
