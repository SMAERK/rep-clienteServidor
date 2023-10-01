import { _ as _sfc_main$4 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$3 } from "./VIconWrap.8350d40c.js";
import { _ as _export_sfc, b as _sfc_main$2 } from "./index.e178843f.js";
import { o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, ae as createStaticVNode, x as createTextVNode, a5 as pushScopeId, a6 as popScopeId, d as defineComponent, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var _imports_0 = "/assets/promotion.9bcfa0a6.svg";
var _imports_1 = "/assets/promotion-dark.8b13d444.svg";
var Promotion_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-f3590570"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "promotion-page-wrapper" };
const _hoisted_2 = { class: "wrapper-outer" };
const _hoisted_3 = { class: "wrapper-inner" };
const _hoisted_4 = { class: "action-box" };
const _hoisted_5 = { class: "box-content" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<img class="light-image is-larger" src="' + _imports_0 + '" alt="" data-v-f3590570><img class="dark-image is-larger" src="' + _imports_1 + '" alt="" data-v-f3590570><h3 class="dark-inverted" data-v-f3590570> Empower your team to do greater things collaboratively </h3><div class="price" data-v-f3590570><span class="dark-inverted" data-v-f3590570>99</span><span data-v-f3590570>Per Month</span></div>', 4);
const _hoisted_10 = { class: "buttons" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Skip ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Upgrade ");
const _hoisted_13 = { class: "side-wrapper" };
const _hoisted_14 = { class: "side-inner" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "side-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Features to make it better"),
  /* @__PURE__ */ createBaseVNode("p", null, "Take a look at some incredible features")
], -1));
const _hoisted_16 = { class: "action-list" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Each team member on your account can create projects and tasks.", -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Add up to 5 addons to your main application to help you manage.", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, " Your application grows in parallel of your business, without any effort. ", -1));
function _sfc_render(_ctx, _cache) {
  const _component_VButton = _sfc_main$2;
  const _component_VIconWrap = _sfc_main$3;
  const _component_VBlock = _sfc_main$4;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VButton, { "dark-outlined": "" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              }),
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", _hoisted_14, [
          _hoisted_15,
          createBaseVNode("div", _hoisted_16, [
            createVNode(_component_VBlock, { title: "Includes 8 team seats" }, {
              icon: withCtx(() => [
                createVNode(_component_VIconWrap, {
                  icon: "feather:check",
                  dark: "3",
                  "dark-primary": "",
                  "dark-card-bordered": ""
                })
              ]),
              default: withCtx(() => [
                _hoisted_17
              ]),
              _: 1
            }),
            createVNode(_component_VBlock, { title: "Integrations" }, {
              icon: withCtx(() => [
                createVNode(_component_VIconWrap, {
                  icon: "feather:check",
                  dark: "3",
                  "dark-primary": "",
                  "dark-card-bordered": ""
                })
              ]),
              default: withCtx(() => [
                _hoisted_18
              ]),
              _: 1
            }),
            createVNode(_component_VBlock, { title: "Scale" }, {
              icon: withCtx(() => [
                createVNode(_component_VIconWrap, {
                  icon: "feather:check",
                  dark: "3",
                  "dark-primary": "",
                  "dark-card-bordered": ""
                })
              ]),
              default: withCtx(() => [
                _hoisted_19
              ]),
              _: 1
            })
          ])
        ])
      ])
    ])
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-f3590570"]]);
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Utility Promotion");
    useHead({
      title: "Utility Promotion - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_Promotion = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Promotion)
      ]);
    };
  }
});
export { _sfc_main as default };
