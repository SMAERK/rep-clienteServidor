import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, ae as createStaticVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
var _imports_0 = "/images/avatars/svg/vuero-4.svg";
var _imports_1 = "/images/avatars/svg/vuero-2.svg";
var _imports_2 = "/images/avatars/svg/vuero-5.svg";
var _imports_3 = "/images/avatars/svg/vuero-9.svg";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];
const _hoisted_4 = { class: "navbar-dropdown is-boxed is-right" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>', 1);
const _hoisted_6 = { class: "inner has-slimscroll" };
const _hoisted_7 = { class: "notification-list" };
const _hoisted_8 = { class: "notification-item" };
const _hoisted_9 = { class: "img-left" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Alice C."),
    /* @__PURE__ */ createTextVNode(" left a comment. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 hour ago")
], -1);
const _hoisted_11 = { class: "notification-item" };
const _hoisted_12 = { class: "img-left" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Joshua S."),
    /* @__PURE__ */ createTextVNode(" uploaded a file. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_14 = { class: "notification-item" };
const _hoisted_15 = { class: "img-left" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Tara S."),
    /* @__PURE__ */ createTextVNode(" sent you a message. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_17 = { class: "notification-item" };
const _hoisted_18 = { class: "img-left" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
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
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: "navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
      }, [
        createBaseVNode("a", {
          class: "navbar-link is-arrowless",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
        }, _hoisted_3, 32),
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("ul", _hoisted_7, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_0,
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_10
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_1,
                      onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_13
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_2,
                      onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_16
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_3,
                      onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_19
                ])
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
});
export { _sfc_main as _ };
