import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass } from "./vendor.6548d360.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "darker" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["minimal-wrapper", [props.theme]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
