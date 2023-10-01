import { _ as _sfc_main$2 } from "./HubCard.b84d0c6b.js";
import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var _imports_0 = "/assets/table.fdc7a792.svg";
var _imports_1 = "/assets/table-dark.42f87c7b.svg";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner card-hub" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "hub-wrapper" };
const _hoisted_5 = { class: "hub-header has-text-centered" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4 is-narrow is-thin" }, "Vuero Components", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, " This is the Vuero components library with detailed code examples. ", -1);
const _hoisted_8 = { class: "hub-body" };
const _hoisted_9 = { class: "body-inner" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "hub-footer" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "action-link",
      tabindex: "0"
    }, "Online Documentation")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Components Hub");
    useHead({
      title: "Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_HubCard = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VAvatar, {
                  size: "xl",
                  picture: "/images/avatars/svg/vuero-2.svg",
                  badge: "https://vuero.cssninja.io/demo/photos/misc/buoy.jpg"
                }),
                _hoisted_6,
                _hoisted_7
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_HubCard, {
                    title: "Content",
                    content: "Get familiar with the Vuero content styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-content" } }, {
                        default: withCtx(() => [
                          _hoisted_10
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Tags",
                    content: "Get familiar with the Vuero tags styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-tag" } }, {
                        default: withCtx(() => [
                          _hoisted_11
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Tabs",
                    content: "Get familiar with the Vuero nav tabs styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-tabs" } }, {
                        default: withCtx(() => [
                          _hoisted_12
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Cards",
                    content: "Get familiar with the Vuero card styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-card" } }, {
                        default: withCtx(() => [
                          _hoisted_13
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Avatars",
                    content: "Get familiar with the Vuero avatar styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-avatar" } }, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Accordions",
                    content: "Get familiar with the Vuero accordion styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-accordion" } }, {
                        default: withCtx(() => [
                          _hoisted_15
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Breadcrumbs",
                    content: "Get familiar with the Vuero breadcrumb styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-breadcrumb" } }, {
                        default: withCtx(() => [
                          _hoisted_16
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Icon Box",
                    content: "Get familiar with the Vuero icon boxes styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-icon-box" } }, {
                        default: withCtx(() => [
                          _hoisted_17
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Flex Table",
                    content: "Get familiar with the Vuero flex table styles. Code examples included."
                  }, {
                    icon: withCtx(() => [
                      _hoisted_19,
                      _hoisted_20
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-flextable" } }, {
                        default: withCtx(() => [
                          _hoisted_18
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Snacks",
                    content: "Get familiar with the Vuero snacks styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "components-snack" } }, {
                        default: withCtx(() => [
                          _hoisted_21
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _hoisted_22
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
