import { _ as __unplugin_components_2 } from "./WidgetDropdown.be0631d8.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, s as createVNode } from "./vendor.6548d360.js";
var UIWidgetToolbarDropdown_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "widget-toolbar" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "UI Widget" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_WidgetDropdown = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", null, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_WidgetDropdown)
        ])
      ]);
    };
  }
});
const followersList = [
  {
    id: 0,
    picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
    name: "Alice"
  },
  {
    id: 1,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "Erik"
  },
  {
    id: 2,
    picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
    name: "Mary"
  }
];
const followersStats = [
  {
    id: 0,
    icon: "fab fa-facebook-f",
    count: "22K"
  },
  {
    id: 1,
    icon: "fab fa-twitter",
    count: "38K"
  },
  {
    id: 2,
    icon: "fab fa-instagram",
    count: "5K"
  }
];
export { _sfc_main as _, followersStats as a, followersList as f };
