import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass } from "./vendor.6548d360.js";
var UIWidget_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget", [props.straight && "is-straight"]])
      }, [
        renderSlot(_ctx.$slots, "header"),
        renderSlot(_ctx.$slots, "body")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
