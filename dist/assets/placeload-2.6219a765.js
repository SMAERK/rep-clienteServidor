import { c as _sfc_main$7, _ as _sfc_main$9 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$8 } from "./VAvatarStack.d8a5f95e.js";
import { b as _sfc_main$3, d as _sfc_main$4, f as __unplugin_components_7 } from "./index.e178843f.js";
import { _ as _sfc_main$6 } from "./VPlaceloadText.2b6ef8c1.js";
import { _ as _sfc_main$5 } from "./VPlaceloadAvatar.a1323f34.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, F as Fragment, X as renderList, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
var PlaceloadV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Add User ");
const _hoisted_3 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", {
  class: "flex-table-header",
  "data-filter-hide": ""
}, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-grow" }, "User"),
  /* @__PURE__ */ createBaseVNode("span", null, "Location"),
  /* @__PURE__ */ createBaseVNode("span", null, "Industry"),
  /* @__PURE__ */ createBaseVNode("span", null, "Status"),
  /* @__PURE__ */ createBaseVNode("span", null, "Relations"),
  /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "Actions")
], -1);
const _hoisted_5 = { class: "flex-list-inner" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VButtons = _sfc_main$4;
      const _component_VPlaceloadAvatar = _sfc_main$5;
      const _component_VPlaceloadText = _sfc_main$6;
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VPlaceload = __unplugin_components_7;
      const _component_VAvatarStack = _sfc_main$8;
      const _component_VFlexTable = _sfc_main$9;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:search" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                    class: "input custom-text-filter",
                    placeholder: "Search..."
                  }, null, 512), [
                    [vModelText, filters.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                icon: "fas fa-plus",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VFlexTable, { rounded: "" }, {
            header: withCtx(() => [
              _hoisted_4
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                (openBlock(), createElementBlock(Fragment, null, renderList(10, (key) => {
                  return createBaseVNode("div", {
                    key,
                    class: "flex-table-item"
                  }, [
                    createVNode(_component_VFlexTableCell, { columns: { media: true, grow: true } }, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceloadAvatar, { size: "medium" }),
                        createVNode(_component_VPlaceloadText, {
                          lines: 2,
                          width: "80%",
                          "last-line-width": "60%",
                          class: "mx-2"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceload, { class: "mx-1" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceload, { class: "mx-1" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceload, { class: "mx-1" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_VAvatarStack, { class: "is-pushed-mobile" }, {
                          default: withCtx(() => [
                            createVNode(_component_VPlaceloadAvatar, {
                              size: "small",
                              class: "mx-1"
                            }),
                            createVNode(_component_VPlaceloadAvatar, {
                              size: "small",
                              class: "mx-1"
                            }),
                            createVNode(_component_VPlaceloadAvatar, {
                              size: "small",
                              class: "mx-1"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceload, { class: "mx-1" })
                      ]),
                      _: 1
                    })
                  ]);
                }), 64))
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Placeload Table");
    useHead({
      title: "Placeload Table - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_PlaceloadV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_PlaceloadV2)
      ]);
    };
  }
});
export { _sfc_main as default };
