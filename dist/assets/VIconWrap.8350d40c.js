import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { d as defineComponent, e as computed, o as openBlock, f as createElementBlock, h as unref, g as normalizeClass, y as createCommentVNode, r as renderSlot } from "./vendor.6548d360.js";
var VIconWrap_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["src"];
const _hoisted_2 = ["data-icon"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    icon: { default: void 0 },
    picture: { default: void 0 },
    color: { default: void 0 },
    size: { default: void 0 },
    dark: { default: "3" },
    hasLargeIcon: { type: Boolean },
    hasBackground: { type: Boolean },
    placeholder: { type: Boolean },
    darkPrimary: { type: Boolean },
    darkCardBordered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["icon-wrap", [
          props.color && !props.hasBackground && `has-text-${props.color}`,
          props.color && props.hasBackground && `has-background-${props.color}`,
          props.color && props.color !== "white" && props.hasBackground && `has-text-white`,
          props.color && props.color === "white" && props.hasBackground && `has-text-black`,
          props.size && `is-${props.size}`,
          props.dark && !props.hasBackground && `is-dark-bg-${props.dark}`,
          props.darkPrimary && "is-dark-primary",
          props.darkCardBordered && "is-dark-card-bordered",
          props.hasLargeIcon && "has-large-icon",
          props.picture && "has-img",
          props.placeholder && "is-placeholder"
        ]])
      }, [
        props.picture ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: props.picture,
          alt: "",
          onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "32x32"))
        }, null, 40, _hoisted_1)) : unref(isIconify) ? (openBlock(), createElementBlock("i", {
          key: 1,
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": props.icon
        }, null, 8, _hoisted_2)) : props.icon ? (openBlock(), createElementBlock("i", {
          key: 2,
          "aria-hidden": "true",
          class: normalizeClass(props.icon)
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
