import { _ as _sfc_main$1 } from "./VDropdown.38fc5e7d.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode } from "./vendor.6548d360.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Edit"),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit this record")
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Delete"),
    /* @__PURE__ */ createBaseVNode("span", null, "Delete this record")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$1;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    class: "is-pushed-mobile",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1,
      _hoisted_2
    ]),
    _: 1
  });
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_3 as _ };
