import { _ as _sfc_main$3 } from "./MinimalLayout.a3e60ebf.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$1, c as __unplugin_components_2, d as __unplugin_components_3, e as __unplugin_components_4, f as __unplugin_components_5, g as __unplugin_components_6, h as __unplugin_components_7, i as __unplugin_components_8 } from "./app-2-dark.2a6348de.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, a1 as useHead, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, s as createVNode, x as createTextVNode } from "./vendor.6548d360.js";
import "./AnimatedLogo.9189a8f1.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VIconBox.298b3a59.js";
import "./responsive.0b9f8cd9.js";
import "./vue-scrollto.6b4fda56.js";
var marketing1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "landing-page-wrapper" };
const _hoisted_2 = {
  id: "Vuero-marketing",
  class: "hero marketing-hero is-left is-fullheight"
};
const _hoisted_3 = { class: "hero-body" };
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "columns is-vcentered" };
const _hoisted_6 = { class: "column is-5" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-1 is-bold" }, "Easier development. Beautiful projects", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", { class: "subtitle is-4 pt-2 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isto modo ne improbos quidem. ", -1);
const _hoisted_9 = { class: "buttons" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" 14-day Trial ");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-7" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-l hero-mockup",
    src: _imports_0,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-l hero-mockup",
    src: _imports_1,
    alt: ""
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { id: "backtotop" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    "aria-label": "back to top"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-angle-up"
    })
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "Vuero - A complete Vue 3 design system"
    });
    return (_ctx, _cache) => {
      const _component_LandingNavigation = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_MarketingFeaturesIcons = __unplugin_components_2;
      const _component_MarketingMockup = __unplugin_components_3;
      const _component_MarketingSideFeatures = __unplugin_components_4;
      const _component_MarketingAbout = __unplugin_components_5;
      const _component_MarketingPricings = __unplugin_components_6;
      const _component_MarketingCTA = __unplugin_components_7;
      const _component_LandingFooter = __unplugin_components_8;
      const _component_MinimalLayout = _sfc_main$3;
      return openBlock(), createBlock(_component_MinimalLayout, { theme: "light" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_LandingNavigation),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      _hoisted_7,
                      _hoisted_8,
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(_component_VButton, {
                          color: "primary",
                          bold: "",
                          rounded: "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_10
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VButton, {
                          color: "primary",
                          outlined: "",
                          bold: "",
                          rounded: "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_11
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _hoisted_12
                  ])
                ])
              ])
            ]),
            createVNode(_component_MarketingFeaturesIcons),
            createVNode(_component_MarketingMockup),
            createVNode(_component_MarketingSideFeatures),
            createVNode(_component_MarketingAbout),
            createVNode(_component_MarketingPricings),
            createVNode(_component_MarketingCTA),
            createVNode(_component_LandingFooter),
            _hoisted_13
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
