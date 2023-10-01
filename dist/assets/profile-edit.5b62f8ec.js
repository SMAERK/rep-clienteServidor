import { _ as _sfc_main$1 } from "./VBlock.64333f78.js";
import { z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, T as Transition, p as createBlock, A as resolveDynamicComponent } from "./vendor.6548d360.js";
import { _ as _export_sfc } from "./index.e178843f.js";
var profileEdit_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "account-box is-navigation" };
const _hoisted_6 = { class: "account-menu" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "General", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown-alt"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "Experience", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-quill"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "Skills", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cog"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", null, "Settings", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_19 = { class: "column is-8" };
function _sfc_render(_ctx, _cache) {
  const _component_VBlock = _sfc_main$1;
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VBlock, {
              title: "Erik Kovalsky",
              subtitle: "Product Manager",
              center: ""
            }, {
              icon: withCtx(() => []),
              _: 1
            }),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_7,
                  _hoisted_8,
                  _hoisted_9
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-experience" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_10,
                  _hoisted_11,
                  _hoisted_12
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-skills" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_13,
                  _hoisted_14,
                  _hoisted_15
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-settings" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_16,
                  _hoisted_17,
                  _hoisted_18
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "in-out"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
var profileEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { profileEdit as default };
