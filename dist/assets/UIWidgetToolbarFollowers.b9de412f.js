import { _ as _sfc_main$1 } from "./VAvatarStack.d8a5f95e.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, s as createVNode } from "./vendor.6548d360.js";
var UIWidgetToolbarFollowers_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "widget-toolbar" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "UI Widget" },
    avatars: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatarStack = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", null, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VAvatarStack, {
            avatars: props.avatars,
            limit: 3,
            size: "small"
          }, null, 8, ["avatars"])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
