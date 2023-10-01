import { _ as _export_sfc, b as _sfc_main$2 } from "./index.e178843f.js";
import { o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode, d as defineComponent, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var _imports_0 = "/assets/set3-1.57f7b9ec.svg";
var _imports_1 = "/assets/set3-1-dark.c4e9f2b1.svg";
var _imports_2 = "/assets/set3-2.3cc56660.svg";
var _imports_3 = "/assets/set3-2-dark.f2d35672.svg";
var _imports_4 = "/assets/set3-3.ce07820a.svg";
var _imports_5 = "/assets/set3-3-dark.d6aceba8.svg";
var OnboardingV2_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "onboarding-wrapper onboarding-v2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Looks like you're new here"),
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Welcome to Vuero. What would you like to do?")
], -1);
const _hoisted_3 = { class: "onboarding-wrap" };
const _hoisted_4 = { class: "onboarding-wrap-inner" };
const _hoisted_5 = { class: "onboarding-card" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "onboarding-content" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Plan a Trip", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim vivunt. ", -1);
const _hoisted_11 = { class: "button-wrap" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Explore ");
const _hoisted_13 = { class: "onboarding-card" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _hoisted_16 = { class: "onboarding-content" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Book a Flight", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim vivunt. ", -1);
const _hoisted_19 = { class: "button-wrap" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Book Now ");
const _hoisted_21 = { class: "onboarding-card" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_24 = { class: "onboarding-content" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Browse Destinations", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim vivunt. ", -1);
const _hoisted_27 = { class: "button-wrap" };
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" Browse ");
function _sfc_render(_ctx, _cache) {
  const _component_VButton = _sfc_main$2;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, [
          _hoisted_6,
          _hoisted_7,
          createBaseVNode("div", _hoisted_8, [
            _hoisted_9,
            _hoisted_10,
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_VButton, {
                color: "primary",
                rounded: "",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          _hoisted_14,
          _hoisted_15,
          createBaseVNode("div", _hoisted_16, [
            _hoisted_17,
            _hoisted_18,
            createBaseVNode("div", _hoisted_19, [
              createVNode(_component_VButton, {
                color: "primary",
                rounded: "",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          _hoisted_22,
          _hoisted_23,
          createBaseVNode("div", _hoisted_24, [
            _hoisted_25,
            _hoisted_26,
            createBaseVNode("div", _hoisted_27, [
              createVNode(_component_VButton, {
                color: "primary",
                rounded: "",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_28
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ])
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Onboarding Page 2");
    useHead({
      title: "Onboarding Page 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_OnboardingV2 = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_OnboardingV2)
      ]);
    };
  }
});
export { _sfc_main as default };
