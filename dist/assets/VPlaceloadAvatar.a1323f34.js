import { d as defineComponent, o as openBlock, f as createElementBlock, g as normalizeClass } from "./vendor.6548d360.js";
var VPlaceloadAvatar_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: void 0 },
    rounded: { default: "full" },
    centered: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["placeload-avatar", [
          !props.disabled && `loads`,
          props.size && `is-${props.size}`,
          props.centered && `is-centered`,
          props.rounded && `is-rounded-${props.rounded}`
        ]])
      }, null, 2);
    };
  }
});
export { _sfc_main as _ };
