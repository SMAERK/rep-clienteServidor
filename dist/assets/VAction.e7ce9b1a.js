import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass } from "./vendor.6548d360.js";
var VAction_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    dark: { default: void 0 },
    active: { type: Boolean },
    rounded: { type: Boolean },
    hoverable: { type: Boolean },
    grey: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["button v-action", [
          props.active && "is-active",
          props.rounded && "is-rounded",
          props.dark && `is-dark-bg-${props.dark}`,
          props.hoverable && "is-hoverable",
          props.grey && "is-grey"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
