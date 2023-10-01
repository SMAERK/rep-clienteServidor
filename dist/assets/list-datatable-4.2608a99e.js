import { _ as _sfc_main$3 } from "./VSimpleDatatables.f197f002.js";
import { _ as _sfc_main$2 } from "./VPlaceholderSection.d614fe7b.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { d as defineComponent, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, s as createVNode, h as unref, f as createElementBlock, y as createCommentVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
const datatableV4 = [];
const _hoisted_1$1 = {
  scope: "col",
  "data-sortable": "false"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox is-primary is-outlined is-circle" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "head-checkbox",
    type: "checkbox"
  }),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, "Type", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Name", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Size", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Version", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Last Updated", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, null, -1);
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { colspan: "7" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderSection = _sfc_main$2;
      const _component_VSimpleDatatables = _sfc_main$3;
      return openBlock(), createBlock(_component_VSimpleDatatables, null, {
        default: withCtx(() => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", _hoisted_1$1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ]),
              _hoisted_3,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8
            ])
          ]),
          createBaseVNode("tbody", null, [
            unref(datatableV4).length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_9, [
              createBaseVNode("td", _hoisted_10, [
                createVNode(_component_VPlaceholderSection, {
                  title: "No data to show",
                  subtitle: "There is currently no data to show in this list."
                }, {
                  image: withCtx(() => [
                    _hoisted_11,
                    _hoisted_12
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List Datatable 4");
    useHead({
      title: "List Datatable 4 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_DatatableV4 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_DatatableV4)
      ]);
    };
  }
});
export { _sfc_main as default };
