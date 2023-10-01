import { a9 as reactive, k as ref, d as defineComponent, e as computed, aa as inject, j as h } from "./vendor.6548d360.js";
import { _ as _export_sfc } from "./index.e178843f.js";
let fieldId = 0;
const useVFieldSymbol = Symbol();
function useVField() {
  const id = ref(`field-${fieldId++}`);
  return reactive({
    id
  });
}
var VControl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "VControl",
  props: {
    icon: {
      type: String,
      default: void 0
    },
    isValid: {
      type: Boolean,
      default: void 0
    },
    hasError: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    expanded: {
      type: Boolean,
      default: void 0
    },
    fullwidth: {
      type: Boolean,
      default: void 0
    },
    textaddon: {
      type: Boolean,
      default: void 0
    },
    nogrow: {
      type: Boolean,
      default: void 0
    },
    subcontrol: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    const vField = inject(useVFieldSymbol, {
      id: ""
    });
    const controlClasees = computed(() => [
      "control",
      props.icon && "has-icon",
      props.loading && "is-loading",
      props.expanded && "is-expanded",
      props.fullwidth && "is-fullwidth",
      props.nogrow && "is-nogrow",
      props.textaddon && "is-textarea-addon",
      props.isValid && "has-validation has-success",
      props.hasError && "has-validation has-error",
      props.subcontrol && "subcontrol"
    ]);
    let formIcon = null;
    if (props.icon) {
      if (isIconify.value) {
        formIcon = h("div", { class: "form-icon" }, h("i", { "aria-hidden": true, "data-icon": props.icon, class: "iconify" }));
      } else {
        formIcon = h("div", { class: "form-icon" }, h("i", { "aria-hidden": true, class: props.icon }));
      }
    }
    let validationIcon = null;
    if (props.isValid) {
      validationIcon = h("div", { class: "validation-icon is-success" }, h("i", {
        "aria-hidden": true,
        "data-icon": "feather:check",
        class: "iconify"
      }));
    } else if (props.hasError) {
      validationIcon = h("div", { class: "validation-icon is-error" }, h("i", {
        "aria-hidden": true,
        "data-icon": "feather:x",
        class: "iconify"
      }));
    }
    return () => {
      var _a, _b, _c;
      const slotDefault = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const slotExtra = (_b = slots.extra) == null ? void 0 : _b.call(slots);
      if (((_c = slotDefault == null ? void 0 : slotDefault[0]) == null ? void 0 : _c.props) && vField.id) {
        slotDefault[0].props.id = vField.id;
      }
      return h("div", {
        class: controlClasees.value
      }, [slotDefault, formIcon, validationIcon, slotExtra]);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3f22898"]]);
export { __unplugin_components_1 as _, useVFieldSymbol as a, useVField as u };
