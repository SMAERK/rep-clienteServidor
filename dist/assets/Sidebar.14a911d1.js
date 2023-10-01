import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, r as renderSlot, g as normalizeClass, h as unref } from "./vendor.6548d360.js";
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "sidebar-brand" };
const _hoisted_2 = { class: "sidebar-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "naver" }, null, -1);
const _hoisted_4 = { class: "icon-menu has-slimscroll" };
const _hoisted_5 = { class: "bottom-menu" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const themeClasses = computed(() => {
      switch (props.theme) {
        case "color":
          return "is-colored";
        case "labels":
          return "has-labels";
        case "labels-hover":
          return "has-labels has-hover-labels";
        case "float":
          return !props.isOpen ? "is-float" : "is-float is-bordered";
        case "curved":
          return !props.isOpen ? "is-curved" : "";
        case "color-curved":
          return !props.isOpen ? "is-colored is-curved" : "is-colored";
        default:
          return "";
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["main-sidebar", [unref(themeClasses)]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_RouterLink, { to: { name: "index" } }, {
            default: withCtx(() => [
              createVNode(_component_AnimatedLogo, { width: "36px" })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("ul", _hoisted_4, [
            renderSlot(_ctx.$slots, "links")
          ]),
          createBaseVNode("ul", _hoisted_5, [
            renderSlot(_ctx.$slots, "bottom-links")
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
