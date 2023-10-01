import { d as defineComponent, o as openBlock, f as createElementBlock, g as normalizeClass, a2 as withKeys, W as withModifiers, q as createBaseVNode, _ as mergeProps, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
var VSwitchBlock_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["checked"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, null, -1);
const _hoisted_3 = ["checked"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" }, null, -1);
const _hoisted_5 = {
  key: 2,
  class: "text"
};
let instances = 0;
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    label: { default: void 0 },
    color: { default: void 0 },
    thin: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const blockSwitchId = `block-switch-${++instances}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.label && "switch-block",
          props.thin && props.label && "thin-switch-block"
        ])
      }, [
        props.thin ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: blockSwitchId,
          class: normalizeClass(["thin-switch", [props.color && `is-${props.color}`]]),
          tabindex: "0",
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => emit("update:modelValue", !props.modelValue), ["prevent"]), ["space"]))
        }, [
          createBaseVNode("input", mergeProps({
            id: blockSwitchId,
            checked: props.modelValue,
            class: "input",
            type: "checkbox"
          }, _ctx.$attrs, {
            onChange: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !props.modelValue))
          }), null, 16, _hoisted_1),
          _hoisted_2
        ], 34)) : (openBlock(), createElementBlock("label", {
          key: 1,
          for: blockSwitchId,
          class: normalizeClass(["form-switch", [props.color && `is-${props.color}`]])
        }, [
          createBaseVNode("input", mergeProps({
            id: blockSwitchId,
            checked: props.modelValue,
            type: "checkbox",
            class: "is-switch"
          }, _ctx.$attrs, {
            onChange: _cache[2] || (_cache[2] = ($event) => emit("update:modelValue", !props.modelValue))
          }), null, 16, _hoisted_3),
          _hoisted_4
        ], 2)),
        props.label ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("label", { for: blockSwitchId }, [
            createBaseVNode("span", null, toDisplayString(props.label), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
