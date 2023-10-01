import { b as _sfc_main$1 } from "./index.e178843f.js";
import { d as defineComponent, a1 as useHead, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode } from "./vendor.6548d360.js";
var _imports_0 = "/assets/error-3.35932380.svg";
var _imports_1 = "/assets/error-3-dark.3a44403a.svg";
var page3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "error-container" };
const _hoisted_2 = { class: "error-wrapper" };
const _hoisted_3 = { class: "error-inner has-text-centered" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "We couldn't find that page", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, " Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists. ", -1);
const _hoisted_8 = { class: "button-wrap" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Take me Back ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "Error Page 3 - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            _hoisted_5,
            _hoisted_6,
            _hoisted_7,
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                rounded: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
              }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
