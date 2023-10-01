import { C as CssUnitRe, f as __unplugin_components_7 } from "./index.e178843f.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, F as Fragment, X as renderList, p as createBlock, s as createVNode } from "./vendor.6548d360.js";
var VPlaceloadText_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "content-shape-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: "100%" },
    lastLineWidth: { default: "100%" },
    lines: { default: 2 },
    disabled: { type: Boolean },
    centered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VPlaceloadText: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (props.lastLineWidth.match(CssUnitRe) === null) {
      console.warn(`VPlaceloadText: invalid "${props.lastLineWidth}" lastLineWidth. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      const _component_VPlaceload = __unplugin_components_7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.lines - 1, (line) => {
          return openBlock(), createBlock(_component_VPlaceload, {
            key: line,
            width: props.width,
            centered: props.centered
          }, null, 8, ["width", "centered"]);
        }), 128)),
        createVNode(_component_VPlaceload, {
          width: props.lastLineWidth,
          centered: props.centered
        }, null, 8, ["width", "centered"])
      ]);
    };
  }
});
export { _sfc_main as _ };
