import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, Y as onMounted, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, y as createCommentVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "buttons mb-6" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Success Toast ");
const _hoisted_5 = { class: "buttons mb-6" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Error Toast ");
const _hoisted_7 = { class: "buttons mb-6" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Info Toast");
const _hoisted_9 = { class: "buttons mb-6" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Warning Toast ");
const _hoisted_11 = { class: "buttons mb-6" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Primary Toast ");
const _hoisted_13 = { class: "buttons mb-6" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Purple Toast ");
const _hoisted_15 = { class: "buttons mb-6" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Blue Toast");
const _hoisted_17 = { class: "buttons mb-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Green Toast ");
const _hoisted_19 = { class: "buttons mb-6" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Orange Toast ");
const _hoisted_21 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const notyf = useNotyf();
    onMounted(() => {
      notyf.success("This toast is displayed when the page is mounted");
    });
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("notyf");
    useHead({
      title: "Notyf - Plugins - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_NotyfSuccessDocumentation = resolveComponent("NotyfSuccessDocumentation");
      const _component_VButton = _sfc_main$2;
      const _component_NotyfErrorDocumentation = resolveComponent("NotyfErrorDocumentation");
      const _component_NotyfInfoDocumentation = resolveComponent("NotyfInfoDocumentation");
      const _component_NotyfWarningDocumentation = resolveComponent("NotyfWarningDocumentation");
      const _component_NotyfPrimaryDocumentation = resolveComponent("NotyfPrimaryDocumentation");
      const _component_NotyfPurpleDocumentation = resolveComponent("NotyfPurpleDocumentation");
      const _component_NotyfBlueDocumentation = resolveComponent("NotyfBlueDocumentation");
      const _component_NotyfGreenDocumentation = resolveComponent("NotyfGreenDocumentation");
      const _component_NotyfOrangeDocumentation = resolveComponent("NotyfOrangeDocumentation");
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
              label: "Plugins"
            },
            {
              label: "Notif",
              to: { name: "components-plugins-notif" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_NotyfSuccessDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(notyf).success("Success Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfErrorDocumentation),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(notyf).error("Error Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfInfoDocumentation),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[2] || (_cache[2] = ($event) => unref(notyf).info("Info Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfWarningDocumentation),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[3] || (_cache[3] = ($event) => unref(notyf).warning("Warning Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfPrimaryDocumentation),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[4] || (_cache[4] = ($event) => unref(notyf).primary("Primary Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfPurpleDocumentation),
            createBaseVNode("div", _hoisted_13, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[5] || (_cache[5] = ($event) => unref(notyf).purple("Purple Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfBlueDocumentation),
            createBaseVNode("div", _hoisted_15, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[6] || (_cache[6] = ($event) => unref(notyf).blue("Blue Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_16
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfGreenDocumentation),
            createBaseVNode("div", _hoisted_17, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[7] || (_cache[7] = ($event) => unref(notyf).green("Green Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            createVNode(_component_NotyfOrangeDocumentation),
            createBaseVNode("div", _hoisted_19, [
              createVNode(_component_VButton, {
                bold: "",
                onClick: _cache[8] || (_cache[8] = ($event) => unref(notyf).orange("Orange Toast"))
              }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              })
            ])
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_21, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
