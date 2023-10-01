import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$2, d as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { _ as _imports_0, a as _imports_1 } from "./search-1-dark.119fdb96.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, y as createCommentVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Go to the catalog");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Search everywhere");
const _hoisted_7 = { class: "pt-6" };
const _hoisted_8 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VPlaceholderPage");
    useHead({
      title: "VPlaceholderPage - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VPlaceholderPagePropsDocumentation = resolveComponent("VPlaceholderPagePropsDocumentation");
      const _component_VPlaceholderPageSlotsDocumentation = resolveComponent("VPlaceholderPageSlotsDocumentation");
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
              label: "VPlaceholderPage",
              to: { name: "components-placeholder-page" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VPlaceholderPage, {
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              action: withCtx(() => [
                createVNode(_component_VButtons, { align: "centered" }, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, null, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1
                    }),
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
            }),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VPlaceholderPagePropsDocumentation),
              createVNode(_component_VPlaceholderPageSlotsDocumentation)
            ])
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
