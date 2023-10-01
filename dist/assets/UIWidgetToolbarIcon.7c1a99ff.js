import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString } from "./vendor.6548d360.js";
var UIWidgetToolbarIcon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "widget-toolbar" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _hoisted_4 = { class: "right-icon has-indicator" };
const _hoisted_5 = ["data-icon"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "UI Widget" },
    icon: { default: "feather:bell" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", null, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("a", _hoisted_4, [
            createBaseVNode("i", {
              "aria-hidden": "true",
              class: "iconify",
              "data-icon": props.icon
            }, null, 8, _hoisted_5)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
