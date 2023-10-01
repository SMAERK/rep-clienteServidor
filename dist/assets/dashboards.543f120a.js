import { d as defineComponent, a0 as useRoute, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, s as createVNode, T as Transition, A as resolveDynamicComponent, h as unref, _ as mergeProps } from "./vendor.6548d360.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.8d409c39.js";
import "./index.e178843f.js";
var block0 = {};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const layoutSwitcher = useLayoutSwitcher();
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(resolveDynamicComponent(unref(layoutSwitcher).dynamicLayoutComponent), mergeProps(unref(layoutSwitcher).dynamicLayoutProps, {
        "close-on-change": "",
        "default-sidebar": "dashboard"
      }), {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "fade-fast",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
