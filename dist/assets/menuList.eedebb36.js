import { _ as _sfc_main$1 } from "./VIconWrap.8350d40c.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, F as Fragment, X as renderList, s as createVNode, q as createBaseVNode, t as toDisplayString } from "./vendor.6548d360.js";
const _hoisted_1 = { class: "icon-list" };
const _hoisted_2 = { class: "item-meta" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VIconWrap = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: "icon-list-item"
          }, [
            createVNode(_component_VIconWrap, {
              icon: item.icon
            }, null, 8, ["icon"]),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("span", null, toDisplayString(item.label), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const iconList = [
  {
    id: 0,
    icon: "feather:circle",
    label: "Global"
  },
  {
    id: 1,
    icon: "feather:briefcase",
    label: "Business"
  },
  {
    id: 2,
    icon: "feather:play",
    label: "Entertainment"
  },
  {
    id: 3,
    icon: "feather:feather",
    label: "Design"
  },
  {
    id: 4,
    icon: "feather:file",
    label: "Documents"
  }
];
export { _sfc_main as _, iconList as i };
