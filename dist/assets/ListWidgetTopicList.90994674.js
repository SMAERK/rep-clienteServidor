import { _ as _sfc_main$3 } from "./VDropdown.38fc5e7d.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, d as defineComponent, f as createElementBlock, t as toDisplayString, s as createVNode, r as renderSlot, g as normalizeClass, F as Fragment, X as renderList, y as createCommentVNode } from "./vendor.6548d360.js";
import { _ as _sfc_main$5 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$4 } from "./VIconBox.298b3a59.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-reload"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Reload"),
    /* @__PURE__ */ createBaseVNode("span", null, "Reload Widget")
  ])
], -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cogs"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Configure"),
    /* @__PURE__ */ createBaseVNode("span", null, "Configure widget")
  ])
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cog"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Settings"),
    /* @__PURE__ */ createBaseVNode("span", null, "Widget Settings")
  ])
], -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Remove"),
    /* @__PURE__ */ createBaseVNode("span", null, "Remove from view")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$3;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    dots: "",
    right: "",
    spaced: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2,
      _hoisted_3$2,
      _hoisted_4$1,
      _hoisted_5
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var ListWidgetSingle_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "inner-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "List Widget" },
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ListWidgetMainDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(props.title), 1),
          createVNode(_component_ListWidgetMainDropdown)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = ["data-icon"];
const _hoisted_2 = { class: "flex-meta is-light" };
const _hoisted_3 = { href: "#" };
const _hoisted_4 = {
  key: 0,
  class: "flex-end"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    topics: { default: () => [] },
    rounded: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$4;
      const _component_VAvatarStack = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.topics, (topic) => {
          return openBlock(), createElementBlock("div", {
            key: topic.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VIconBox, {
              rounded: props.rounded,
              color: topic.color
            }, {
              default: withCtx(() => [
                createBaseVNode("i", {
                  "aria-hidden": "true",
                  class: "iconify",
                  "data-icon": topic.icon
                }, null, 8, _hoisted_1)
              ]),
              _: 2
            }, 1032, ["rounded", "color"]),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("a", _hoisted_3, toDisplayString(topic.name), 1),
              createBaseVNode("span", null, toDisplayString(topic.category), 1)
            ]),
            topic.users ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createVNode(_component_VAvatarStack, {
                avatars: topic.users,
                size: "small",
                limit: 3
              }, null, 8, ["avatars"])
            ])) : createCommentVNode("", true)
          ]);
        }), 128))
      ]);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a };
