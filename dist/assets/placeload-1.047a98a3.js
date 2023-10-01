import { _ as _export_sfc, b as _sfc_main$4, f as __unplugin_components_7 } from "./index.e178843f.js";
import { o as openBlock, f as createElementBlock, r as renderSlot, d as defineComponent, k as ref, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, F as Fragment, X as renderList, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$6 } from "./VPlaceloadText.2b6ef8c1.js";
import { _ as _sfc_main$5 } from "./VPlaceloadAvatar.a1323f34.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var VPlaceloadWrap_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "placeload-wrap is-flex" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var PlaceloadV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "list-info" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Loading records")
], -1);
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Approve ");
const _hoisted_5 = { class: "list-view list-view-v1" };
const _hoisted_6 = { class: "list-view-inner" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VPlaceloadAvatar = _sfc_main$5;
      const _component_VPlaceloadText = _sfc_main$6;
      const _component_VPlaceload = __unplugin_components_7;
      const _component_VPlaceloadWrap = __unplugin_components_6;
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
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VButton, {
              color: "primary",
              icon: "fas fa-check",
              elevated: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(), createElementBlock(Fragment, null, renderList(10, (key) => {
              return createBaseVNode("div", {
                key,
                class: "list-view-item"
              }, [
                createVNode(_component_VPlaceloadWrap, null, {
                  default: withCtx(() => [
                    createVNode(_component_VPlaceloadAvatar, { size: "medium" }),
                    createVNode(_component_VPlaceloadText, {
                      "last-line-width": "60%",
                      class: "mx-2"
                    }),
                    createVNode(_component_VPlaceload, {
                      class: "mx-2",
                      disabled: ""
                    }),
                    createVNode(_component_VPlaceload, { class: "mx-2 h-hidden-tablet-p" }),
                    createVNode(_component_VPlaceload, { class: "mx-2 h-hidden-tablet-p" }),
                    createVNode(_component_VPlaceload, { class: "mx-2" })
                  ]),
                  _: 1
                })
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
    viewWrapper.setPageTitle("Placeload List");
    useHead({
      title: "Placeload List - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_PlaceloadV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_PlaceloadV1)
      ]);
    };
  }
});
export { _sfc_main as default };
