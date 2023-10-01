import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode } from "./vendor.6548d360.js";
var ProjectsToolbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "projects-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "control has-icon" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    class: "input",
    placeholder: "Search..."
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:search"
    })
  ])
], -1);
const _hoisted_3 = { class: "avatar-stack" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-primary is-raised is-bold" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "New Project")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VAvatar = _sfc_main$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "https://vuero.cssninja.io/demo/avatars/12.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/images/avatars/svg/vuero-1.svg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "https://vuero.cssninja.io/demo/avatars/22.jpg"
      })
    ]),
    _hoisted_4
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_0 as _ };
