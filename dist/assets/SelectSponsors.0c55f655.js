import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, e as computed, k as ref, o as openBlock, f as createElementBlock, h as unref, s as createVNode, w as withCtx, q as createBaseVNode, a3 as withDirectives, aB as vModelSelect, F as Fragment, X as renderList, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "" };
const _hoisted_2 = {
  key: 0,
  class: "column"
};
const _hoisted_3 = { class: "select" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  selected: ""
}, "Seleccione un Reporte", -1);
const _hoisted_5 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    isVisible: { type: Boolean, default: false },
    data: { type: Array, default: [] },
    loading: { type: Boolean, default: "" }
  },
  emits: ["dataSelected", "getReport"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const isVisible = computed(() => props.isVisible);
    const data = computed(() => props.data);
    computed(() => props.loading);
    const data_selected = ref("");
    const emitData = (type) => {
      if (type == "sponsor")
        emits("dataSelected", data_selected.value);
      if (type == "report")
        emits("getReport");
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(isVisible) ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, {
                class: "has-icons-left",
                icon: "fas fa-building"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data_selected.value = $event),
                      style: { "height": "38px" },
                      onChange: _cache[1] || (_cache[1] = ($event) => emitData("sponsor"))
                    }, [
                      _hoisted_4,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data), (sponsor, idx) => {
                        return openBlock(), createElementBlock("option", {
                          key: idx,
                          value: sponsor
                        }, toDisplayString(sponsor), 9, _hoisted_5);
                      }), 128))
                    ], 544), [
                      [vModelSelect, data_selected.value]
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export { _sfc_main as default };
