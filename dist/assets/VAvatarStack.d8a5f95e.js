import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, F as Fragment, X as renderList, p as createBlock, g as normalizeClass, q as createBaseVNode, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
const _hoisted_1 = { class: "avatar-stack" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("button", null, "XD", -1);
const _hoisted_3 = { class: "avatar is-more" };
const _hoisted_4 = { class: "inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    limit: { default: 5 },
    size: { default: void 0 },
    avatars: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatars.slice(0, props.limit), (avatar, index) => {
            return openBlock(), createBlock(_component_VAvatar, {
              key: index,
              size: props.size,
              picture: avatar.picture,
              initials: avatar.initials,
              color: avatar.color
            }, null, 8, ["size", "picture", "initials", "color"]);
          }), 128)),
          __props.avatars.length > props.limit ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["v-avatar", [__props.size && "is-" + props.size]])
          }, [
            _hoisted_2,
            createBaseVNode("span", _hoisted_3, [
              createBaseVNode("span", _hoisted_4, [
                createBaseVNode("span", null, "+" + toDisplayString(__props.avatars.length - props.limit), 1)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
