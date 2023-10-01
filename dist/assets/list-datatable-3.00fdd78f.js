import { _ as _sfc_main$3 } from "./VSimpleDatatables.f197f002.js";
import { _ as __unplugin_components_2 } from "./WidgetDropdown.be0631d8.js";
import { _ as _sfc_main$2 } from "./VAvatar.08652fea.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, s as createVNode, f as createElementBlock, X as renderList, t as toDisplayString, h as unref, F as Fragment, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./index.e178843f.js";
import "./via-placeholder.9af8280d.js";
const datatableV3 = [];
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
const _hoisted_9 = { class: "checkbox is-primary is-outlined is-circle" };
const _hoisted_10 = ["id"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "has-dark-text dark-inverted is-font-alt is-weight-600 rem-90" };
const _hoisted_14 = { class: "light-text" };
const _hoisted_15 = { class: "light-text" };
const _hoisted_16 = { class: "flex-media" };
const _hoisted_17 = { class: "meta" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VAvatar = _sfc_main$2;
      const _component_WidgetDropdown = __unplugin_components_2;
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datatableV3), (row, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", _hoisted_9, [
                        createBaseVNode("input", {
                          id: `row-checkbox-${index}`,
                          type: "checkbox"
                        }, null, 8, _hoisted_10),
                        _hoisted_11
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("img", {
                    class: "file-icon",
                    src: row[0],
                    alt: ""
                  }, null, 8, _hoisted_12)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_13, toDisplayString(row[1]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_14, toDisplayString(row[2]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_15, toDisplayString(row[3]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_VAvatar, {
                      picture: row[4],
                      size: "small"
                    }, null, 8, ["picture"]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("span", null, toDisplayString(row[5]), 1),
                      createBaseVNode("span", null, toDisplayString(row[6]), 1)
                    ])
                  ])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_WidgetDropdown)
                ])
              ]);
            }), 128))
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
    viewWrapper.setPageTitle("List Datatable 3");
    useHead({
      title: "List Datatable 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_DatatableV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_DatatableV3)
      ]);
    };
  }
});
export { _sfc_main as default };
