import { d as defineComponent, o as openBlock, f as createElementBlock, t as toDisplayString, y as createCommentVNode, q as createBaseVNode, _ as mergeProps, g as normalizeClass } from "./vendor.6548d360.js";
var VSwitchSegment_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "switch-segment" };
const _hoisted_2 = ["checked"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" }, null, -1);
let instances = 0;
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    labelTrue: { default: void 0 },
    labelFalse: { default: void 0 },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const blockSwitchId = `segment-switch-${++instances}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        props.labelFalse ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "is-label",
          for: blockSwitchId
        }, toDisplayString(props.labelFalse), 1)) : createCommentVNode("", true),
        createBaseVNode("label", {
          for: blockSwitchId,
          class: normalizeClass(["form-switch", [props.color && `is-${props.color}`]])
        }, [
          createBaseVNode("input", mergeProps({
            id: blockSwitchId,
            checked: props.modelValue
          }, _ctx.$attrs, {
            type: "checkbox",
            class: "is-switch",
            onChange: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !props.modelValue))
          }), null, 16, _hoisted_2),
          _hoisted_3
        ], 2),
        props.labelTrue ? (openBlock(), createElementBlock("label", {
          key: 1,
          class: "is-label",
          for: blockSwitchId
        }, toDisplayString(props.labelTrue), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
export { _sfc_main as _ };
