import { _ as _sfc_main$2 } from "./HubCard.b84d0c6b.js";
import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var _imports_0 = "/assets/dropdown.0ea4214f.svg";
var _imports_1 = "/assets/dropdown-dark.14e8f58b.svg";
var _imports_2 = "/assets/modal.5c47e35f.svg";
var _imports_3 = "/assets/modal-dark.cc586944.svg";
var _imports_4 = "/assets/checkboxes.baebc2e8.svg";
var _imports_5 = "/assets/checkboxes-dark.e9b8c886.svg";
var _imports_6 = "/assets/switches.8ade99a6.svg";
var _imports_7 = "/assets/switches-dark.11451f91.svg";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner card-hub" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "hub-wrapper" };
const _hoisted_5 = { class: "hub-header has-text-centered" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4 is-narrow is-thin" }, "Vuero Elements", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, " This is the Vuero elements library with detailed code examples. ", -1);
const _hoisted_8 = { class: "hub-body" };
const _hoisted_9 = { class: "body-inner" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_6,
  alt: ""
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_7,
  alt: ""
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "hub-footer" }, [
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
    viewWrapper.setPageTitle("Elements Hub");
    useHead({
      title: "Elements - Vuero"
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
                  picture: "/images/avatars/svg/vuero-1.svg",
                  badge: "https://vuero.cssninja.io/demo/photos/misc/buoy.jpg"
                }),
                _hoisted_6,
                _hoisted_7
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_HubCard, {
                    title: "Buttons",
                    content: "Get familiar with the Vuero button styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-button" } }, {
                        default: withCtx(() => [
                          _hoisted_10
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Icons",
                    content: "Get familiar with the Vuero icon libraries. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-icons-line-icons-light" } }, {
                        default: withCtx(() => [
                          _hoisted_11
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Dropdowns",
                    content: "Get familiar with the Vuero dropdown styles. Code examples included."
                  }, {
                    icon: withCtx(() => [
                      _hoisted_13,
                      _hoisted_14
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-dropdown" } }, {
                        default: withCtx(() => [
                          _hoisted_12
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Modals",
                    content: "Get familiar with the Vuero modal styles. Code examples included."
                  }, {
                    icon: withCtx(() => [
                      _hoisted_16,
                      _hoisted_17
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-modal" } }, {
                        default: withCtx(() => [
                          _hoisted_15
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Progress",
                    content: "Get familiar with the Vuero progress bar styles. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-progress" } }, {
                        default: withCtx(() => [
                          _hoisted_18
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Forms",
                    content: "Get familiar with the Vuero form elements. Code examples included."
                  }, {
                    icon: withCtx(() => []),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-forms-inputs" } }, {
                        default: withCtx(() => [
                          _hoisted_19
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Checkboxes",
                    content: "Get familiar with the Vuero checkboxes styles. Code examples included."
                  }, {
                    icon: withCtx(() => [
                      _hoisted_21,
                      _hoisted_22
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-checkbox" } }, {
                        default: withCtx(() => [
                          _hoisted_20
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HubCard, {
                    title: "Switches",
                    content: "Get familiar with the Vuero switches styles. Code examples included."
                  }, {
                    icon: withCtx(() => [
                      _hoisted_24,
                      _hoisted_25
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: { name: "elements-switch-block" } }, {
                        default: withCtx(() => [
                          _hoisted_23
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _hoisted_26
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
