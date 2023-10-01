import { d as defineComponent, m as useI18n, e as computed, o as openBlock, f as createElementBlock, r as renderSlot } from "./vendor.6548d360.js";
import { u as useDarkmode } from "./index.e178843f.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
const _hoisted_1 = { class: "toolbar ml-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useDarkmode();
    const { locale } = useI18n();
    usePanels();
    computed(() => {
      locale.value = "es-MX";
      switch (locale.value) {
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/icons8-portugal-96.png";
        case 'es-MX"':
        default:
        case 'es-MX"':
          return "/images/icons/flags/mexico.svg";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export { _sfc_main as _ };
