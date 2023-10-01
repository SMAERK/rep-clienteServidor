import { d as defineComponent, $ as useRouter, Y as onMounted, o as openBlock, f as createElementBlock } from "./vendor.6548d360.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    onMounted(() => {
      router.push({
        name: "sidebar-dashboards"
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export { _sfc_main as default };
