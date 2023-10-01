import { d as defineComponent, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, h as unref, a2 as withKeys, W as withModifiers, s as createVNode, w as withCtx, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
const _hoisted_1 = { class: "toolbar-notifications is-hidden-mobile" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_6 = { class: "dropdown-content" };
const _hoisted_7 = { class: "heading" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "Notifications")
], -1);
const _hoisted_9 = { class: "heading-right" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" See all ");
const _hoisted_11 = { class: "notification-list" };
const _hoisted_12 = { class: "notification-item" };
const _hoisted_13 = { class: "img-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Alice C."),
    /* @__PURE__ */ createTextVNode(" left a comment. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 hour ago")
], -1);
const _hoisted_15 = { class: "notification-item" };
const _hoisted_16 = { class: "img-left" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Joshua S."),
    /* @__PURE__ */ createTextVNode(" uploaded a file. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_18 = { class: "notification-item" };
const _hoisted_19 = { class: "img-left" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Tara S."),
    /* @__PURE__ */ createTextVNode(" sent you a message. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_21 = { class: "notification-item" };
const _hoisted_22 = { class: "img-left" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Melany W."),
    /* @__PURE__ */ createTextVNode(" left a comment. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "3 hours ago")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          ref_key: "dropdownElement",
          ref: dropdownElement,
          class: "dropdown is-spaced is-dots is-right dropdown-trigger"
        }, [
          createBaseVNode("div", {
            tabindex: "0",
            class: "is-trigger",
            "aria-haspopup": "true",
            onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args)),
            onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args), ["prevent"]), ["space"]))
          }, _hoisted_4, 32),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _hoisted_8,
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_RouterLink, {
                    class: "notification-link",
                    to: { name: "sidebar-layouts-profile-notifications" }
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("ul", _hoisted_11, [
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                        onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_14
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: "https://vuero.cssninja.io/demo/avatars/12.jpg",
                        onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_17
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
                        onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_20
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
                        onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_23
                  ])
                ])
              ])
            ])
          ])
        ], 512)
      ]);
    };
  }
});
export { _sfc_main as _ };
