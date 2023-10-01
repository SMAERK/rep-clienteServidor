import { d as defineComponent, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, F as Fragment, X as renderList, r as renderSlot, p as createBlock, w as withCtx, g as normalizeClass, y as createCommentVNode, x as createTextVNode, t as toDisplayString } from "./vendor.6548d360.js";
var VBreadcrumb_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["aria-current"];
const _hoisted_2 = ["data-icon"];
const _hoisted_3 = ["content"];
const _hoisted_4 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_5 = ["content"];
const _hoisted_6 = ["href"];
const _hoisted_7 = ["data-icon"];
const _hoisted_8 = ["content"];
const _hoisted_9 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_10 = ["content"];
const _hoisted_11 = {
  key: 2,
  class: "breadcrumb-item"
};
const _hoisted_12 = ["data-icon"];
const _hoisted_13 = ["content"];
const _hoisted_14 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_15 = ["content"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    items: null,
    separator: { default: void 0 },
    align: { default: void 0 },
    withIcons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("nav", {
        role: "navigation",
        class: normalizeClass(["breadcrumb", [`has-${props.separator}-separator`, props.align && `is-${props.align}`]]),
        "aria-label": "breadcrumbs",
        itemscope: "",
        itemtype: "https://schema.org/BreadcrumbList"
      }, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              "aria-current": key === __props.items.length - 1 ? "page" : void 0,
              itemprop: "itemListElement",
              itemscope: "",
              itemtype: "https://schema.org/ListItem"
            }, [
              renderSlot(_ctx.$slots, "breadcrumb-item", {
                item,
                index: key
              }, () => [
                item.to ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  class: "breadcrumb-item",
                  itemprop: "item",
                  to: item.to
                }, {
                  default: withCtx(() => [
                    props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: normalizeClass(["icon is-small", [item.hideLabel && props.withIcons && !!item.icon && "is-solo"]])
                    }, [
                      createBaseVNode("i", {
                        "aria-hidden": "true",
                        class: "iconify",
                        "data-icon": item.icon
                      }, null, 8, _hoisted_2)
                    ], 2)) : createCommentVNode("", true),
                    item.hideLabel && props.withIcons && !!item.icon ? (openBlock(), createElementBlock("meta", {
                      key: 1,
                      itemprop: "name",
                      content: item.label
                    }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock("span", _hoisted_4, [
                      renderSlot(_ctx.$slots, "breadcrumb-item-label", {
                        item,
                        index: key
                      }, () => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ])
                    ])),
                    createBaseVNode("meta", {
                      itemprop: "position",
                      content: `${key + 1}`
                    }, null, 8, _hoisted_5)
                  ]),
                  _: 2
                }, 1032, ["to"])) : item.link ? (openBlock(), createElementBlock("a", {
                  key: 1,
                  class: "breadcrumb-item",
                  itemprop: "item",
                  href: item.link
                }, [
                  props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(["icon is-small", [item.hideLabel && props.withIcons && !!item.icon && "is-solo"]])
                  }, [
                    createBaseVNode("i", {
                      "aria-hidden": "true",
                      class: "iconify",
                      "data-icon": item.icon
                    }, null, 8, _hoisted_7)
                  ], 2)) : createCommentVNode("", true),
                  item.hideLabel && props.withIcons && !!item.icon ? (openBlock(), createElementBlock("meta", {
                    key: 1,
                    itemprop: "name",
                    content: item.label
                  }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("span", _hoisted_9, [
                    renderSlot(_ctx.$slots, "breadcrumb-item-label", {
                      item,
                      index: key
                    }, () => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ])
                  ])),
                  createBaseVNode("meta", {
                    itemprop: "position",
                    content: `${key + 1}`
                  }, null, 8, _hoisted_10)
                ], 8, _hoisted_6)) : (openBlock(), createElementBlock("span", _hoisted_11, [
                  props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(["icon is-small", [item.hideLabel && props.withIcons && !!item.icon && "is-solo"]])
                  }, [
                    createBaseVNode("i", {
                      "aria-hidden": "true",
                      class: "iconify",
                      "data-icon": item.icon
                    }, null, 8, _hoisted_12)
                  ], 2)) : createCommentVNode("", true),
                  item.hideLabel && props.withIcons && item.icon ? (openBlock(), createElementBlock("meta", {
                    key: 1,
                    itemprop: "name",
                    content: item.label
                  }, null, 8, _hoisted_13)) : (openBlock(), createElementBlock("span", _hoisted_14, [
                    renderSlot(_ctx.$slots, "breadcrumb-item-label", {
                      item,
                      index: key
                    }, () => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ])
                  ])),
                  createBaseVNode("meta", {
                    itemprop: "position",
                    content: `${key + 1}`
                  }, null, 8, _hoisted_15)
                ]))
              ])
            ], 8, _hoisted_1);
          }), 128))
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
