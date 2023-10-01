import { _ as _sfc_main$1 } from "./VTag.f234897b.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, F as Fragment, X as renderList, t as toDisplayString, s as createVNode } from "./vendor.6548d360.js";
var UIWidgetNotifications_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "widget-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    notifications: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.notifications, (notification) => {
            return openBlock(), createElementBlock("li", {
              key: notification.id
            }, [
              createBaseVNode("a", null, [
                createBaseVNode("span", null, toDisplayString(notification.category), 1),
                createVNode(_component_VTag, {
                  rounded: "",
                  label: notification.count
                }, null, 8, ["label"])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const notifications = [
  {
    id: 0,
    category: "Personal",
    count: 4
  },
  {
    id: 1,
    category: "Business",
    count: 9
  },
  {
    id: 2,
    category: "Family",
    count: 2
  }
];
export { _sfc_main as _, notifications as n };
