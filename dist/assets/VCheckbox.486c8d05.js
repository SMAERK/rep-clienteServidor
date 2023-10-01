import { d as defineComponent, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, _ as mergeProps, h as unref, r as renderSlot, x as createTextVNode, t as toDisplayString, g as normalizeClass } from "./vendor.6548d360.js";
var VCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["checked", "value"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { default: void 0 },
    label: { default: void 0 },
    color: { default: void 0 },
    modelValue: { default: () => [] },
    circle: { type: Boolean, default: false },
    solid: { type: Boolean, default: false },
    paddingless: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const checked = computed(() => props.modelValue.includes(props.value));
    function change() {
      const values = [...props.modelValue];
      if (checked.value) {
        values.splice(values.indexOf(props.value), 1);
      } else {
        values.push(props.value);
      }
      emit("update:modelValue", values);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["checkbox", [
          props.solid ? "is-solid" : "is-outlined",
          props.circle && "is-circle",
          props.color && `is-${props.color}`,
          props.paddingless && "is-paddingless"
        ]])
      }, [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          checked: unref(checked),
          value: props.value
        }, _ctx.$attrs, { onChange: change }), null, 16, _hoisted_1),
        _hoisted_2,
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(props.label), 1)
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
