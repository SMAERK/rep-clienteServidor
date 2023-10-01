import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, t as toDisplayString, g as normalizeClass } from "./vendor.6548d360.js";
var ContactWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "widget-content" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _hoisted_4 = { class: "company" };
const _hoisted_5 = { class: "contact-info" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:phone"
}, null, -1);
const _hoisted_8 = { class: "email" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    picture: { default: "https://via.placeholder.com/150x150" },
    username: { default: "John D." },
    email: { default: "john@gmail.com" },
    company: { default: "Acme Inc." },
    position: { default: "Developer" },
    location: { default: "New York, NY" },
    phone: { default: "+1 555 5554" },
    straight: { type: Boolean },
    reversed: { type: Boolean },
    squared: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget contact-widget", [props.straight && "is-straight", props.reversed && "is-reversed"]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VAvatar, {
              size: "medium",
              picture: props.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", null, toDisplayString(props.username), 1),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("span", null, toDisplayString(props.company), 1),
              createBaseVNode("p", null, toDisplayString(props.position), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("span", null, [
                _hoisted_6,
                createBaseVNode("span", null, toDisplayString(props.location), 1)
              ]),
              createBaseVNode("span", null, [
                _hoisted_7,
                createBaseVNode("span", null, toDisplayString(props.phone), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("p", _hoisted_8, toDisplayString(props.email), 1)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
