import { _ as _sfc_main$6 } from "./VPlaceloadText.2b6ef8c1.js";
import { _ as _sfc_main$5 } from "./VPlaceloadAvatar.a1323f34.js";
import { b as _sfc_main$3, d as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, F as Fragment, X as renderList, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var PlaceloadV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "user-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Add User", -1);
const _hoisted_4 = { class: "user-grid user-grid-v1" };
const _hoisted_5 = { class: "columns is-multiline" };
const _hoisted_6 = { class: "grid-item" };
const _hoisted_7 = { class: "people" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("loading ...");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("loading ...");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const valueSingle = ref(0);
    const optionsSingle = [
      "All",
      "UI/UX Design",
      "Web Development",
      "Software Eng.",
      "Business"
    ];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VButtons = _sfc_main$4;
      const _component_VPlaceloadAvatar = _sfc_main$5;
      const _component_VPlaceloadText = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
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
          }),
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VField, { class: "h-hidden-mobile" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: valueSingle.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                        options: optionsSingle,
                        "max-height": 145,
                        placeholder: "Select an option"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  _hoisted_2,
                  _hoisted_3
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            (openBlock(), createElementBlock(Fragment, null, renderList(20, (key) => {
              return createBaseVNode("div", {
                key,
                class: "column is-3"
              }, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VPlaceloadAvatar, {
                    size: "big",
                    centered: "",
                    class: "mb-2"
                  }),
                  createVNode(_component_VPlaceloadText, {
                    class: "mb-4",
                    width: "80%",
                    lines: 3,
                    "last-line-width": "60%",
                    centered: ""
                  }),
                  createBaseVNode("div", _hoisted_7, [
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
                    }),
                    createVNode(_component_VPlaceloadAvatar, {
                      size: "small",
                      class: "mx-1"
                    })
                  ]),
                  createVNode(_component_VButtons, null, {
                    default: withCtx(() => [
                      createVNode(_component_VButton, {
                        placeload: "100%",
                        "dark-outlined": ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_8
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VButton, {
                        placeload: "100%",
                        "dark-outlined": ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_9
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Placeload Grid");
    useHead({
      title: "Placeload Grid - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_PlaceloadV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_PlaceloadV3)
      ]);
    };
  }
});
export { _sfc_main as default };
