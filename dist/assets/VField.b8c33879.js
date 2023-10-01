import { u as useVField, a as useVFieldSymbol } from "./VControl.eb555562.js";
import { d as defineComponent, a7 as useSlots, e as computed, a8 as provide, o as openBlock, f as createElementBlock, h as unref, F as Fragment, q as createBaseVNode, r as renderSlot, x as createTextVNode, t as toDisplayString, g as normalizeClass } from "./vendor.6548d360.js";
const _hoisted_1 = { class: "field-label is-normal" };
const _hoisted_2 = ["for"];
const _hoisted_3 = { class: "field-body" };
const _hoisted_4 = ["for"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: { default: void 0 },
    addons: { type: Boolean },
    textaddon: { type: Boolean },
    grouped: { type: Boolean },
    multiline: { type: Boolean },
    horizontal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const vField = useVField();
    const slots = useSlots();
    const hasLabel = computed(() => {
      var _a;
      return Boolean(((_a = slots == null ? void 0 : slots.label) == null ? void 0 : _a.call(slots)) || props.label);
    });
    provide(useVFieldSymbol, vField);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", [
          props.addons && "has-addons",
          props.textaddon && "has-textarea-addon",
          props.grouped && "is-grouped",
          props.grouped && props.multiline && "is-grouped-multiline",
          props.horizontal && "is-horizontal"
        ]])
      }, [
        unref(hasLabel) && props.horizontal ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("label", {
              class: "label",
              for: unref(vField).id
            }, [
              renderSlot(_ctx.$slots, "label", {}, () => [
                createTextVNode(toDisplayString(props.label), 1)
              ])
            ], 8, _hoisted_2)
          ]),
          createBaseVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : unref(hasLabel) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("label", {
            class: "label",
            for: unref(vField).id
          }, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(props.label), 1)
            ])
          ], 8, _hoisted_4),
          renderSlot(_ctx.$slots, "default")
        ], 64)) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 2);
    };
  }
});
export { _sfc_main as _ };
