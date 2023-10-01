import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, r as renderSlot, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
var VPlaceholderSection_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "section-placeholder" };
const _hoisted_2 = { class: "placeholder-content" };
const _hoisted_3 = { class: "dark-inverted" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "image"),
          createBaseVNode("h3", _hoisted_3, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "action")
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
