import { d as defineComponent, o as openBlock, f as createElementBlock, t as toDisplayString, g as normalizeClass } from "./vendor.6548d360.js";
var VProgress_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["value", "max"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { default: void 0 },
    max: { default: 100 },
    size: { default: void 0 },
    color: { default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("progress", {
        class: normalizeClass(["progress", [props.size && `is-${props.size}`, props.color && `is-${props.color}`]]),
        value: props.value,
        max: props.max
      }, toDisplayString(props.value ? `${props.value / props.max * 100}%` : ""), 11, _hoisted_1);
    };
  }
});
export { _sfc_main as _ };
