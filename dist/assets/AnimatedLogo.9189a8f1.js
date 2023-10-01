import { d as defineComponent, $ as useRouter, k as ref, o as openBlock, f as createElementBlock } from "./vendor.6548d360.js";
import { _ as _export_sfc } from "./index.e178843f.js";
var _imports_0 = "/creciendoblanco.svg";
var AnimatedLogo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  src: _imports_0,
  alt: ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const isLoading = ref(false);
    router.beforeEach(() => {
      isLoading.value = true;
    });
    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", _hoisted_1);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-982a922e"]]);
export { __unplugin_components_0 as _ };
