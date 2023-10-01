import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass } from "./vendor.6548d360.js";
var VIconBox_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: void 0 },
    color: { default: void 0 },
    rounded: { type: Boolean },
    bordered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["v-icon", [
          props.size && "is-" + props.size,
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.bordered && "is-bordered"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
