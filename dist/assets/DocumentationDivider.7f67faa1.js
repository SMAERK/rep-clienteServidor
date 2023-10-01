import { _ as _export_sfc } from "./index.e178843f.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, F as Fragment } from "./vendor.6548d360.js";
var DocumentationDivider_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["id", "name"];
const _hoisted_2 = ["data-content"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    id: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("a", {
          id: props.id,
          name: props.id,
          class: "is-invisible is-block zero-height"
        }, toDisplayString(props.title), 9, _hoisted_1),
        createBaseVNode("div", {
          class: "is-divider",
          "data-content": props.title
        }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd00c79a"]]);
export { __unplugin_components_7 as _ };
