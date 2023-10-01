import { b as _sfc_main$1 } from "./index.e178843f.js";
import { _ as __unplugin_components_0 } from "./SVGErrorPlaceholder.097875b3.js";
import { d as defineComponent, a1 as useHead, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode } from "./vendor.6548d360.js";
var page1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "error-container" };
const _hoisted_2 = { class: "error-wrapper" };
const _hoisted_3 = { class: "error-inner has-text-centered" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-number dark-inverted" }, "404", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "We couldn't find that page", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, " Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists. ", -1);
const _hoisted_7 = { class: "button-wrap" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Take me Back ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "Error Page 1 - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_SVGErrorPlaceholder = __unplugin_components_0;
      const _component_VButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createVNode(_component_SVGErrorPlaceholder),
            _hoisted_5,
            _hoisted_6,
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
              }, {
                default: withCtx(() => [
                  _hoisted_8
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
