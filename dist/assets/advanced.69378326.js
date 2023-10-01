import { _ as __unplugin_components_2 } from "./WidgetDropdown.be0631d8.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, r as renderSlot, g as normalizeClass, a1 as useHead, z as resolveComponent, s as createVNode, w as withCtx, h as unref, x as createTextVNode } from "./vendor.6548d360.js";
import { b as _sfc_main$6 } from "./index.e178843f.js";
import { _ as _sfc_main$5 } from "./VTag.f234897b.js";
import { _ as _sfc_main$4 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$3 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$2 } from "./VBreadcrumb.b45a5a1c.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1$1 = { class: "card-head" };
const _hoisted_2$1 = { class: "left" };
const _hoisted_3$1 = { class: "right" };
const _hoisted_4$1 = { class: "card-body" };
const _hoisted_5$1 = { class: "card-foot" };
const _hoisted_6$1 = { class: "left" };
const _hoisted_7$1 = { class: "right" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    radius: { default: "regular" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.radius === "regular" && "s-card-advanced",
          props.radius === "smooth" && "r-card-advanced",
          props.radius === "rounded" && "l-card-advanced"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "header-left")
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            renderSlot(_ctx.$slots, "header-right")
          ])
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "content")
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            renderSlot(_ctx.$slots, "footer-left")
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            renderSlot(_ctx.$slots, "footer-right")
          ])
        ])
      ], 2);
    };
  }
});
const userStack2 = [
  {
    id: 5,
    picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
    initials: "JS",
    color: "info"
  },
  {
    id: 22,
    picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
    initials: "JH",
    color: "info"
  },
  {
    id: 40,
    picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
    initials: "SM",
    color: "h-purple"
  },
  {
    id: 3,
    picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
    initials: "ML",
    color: "danger"
  },
  {
    id: 4,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 5,
    picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
    initials: "VD",
    color: "warning"
  },
  {
    id: 6,
    picture: "https://vuero.cssninja.io/demo/avatars/39.jpg",
    initials: "GE",
    color: "info"
  },
  {
    id: 0,
    picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
    initials: "AC",
    color: "info"
  }
];
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_6 = { class: "tags" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Action");
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = { class: "tags" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Action");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-6" }, "A Card Title", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ", -1);
const _hoisted_15 = { class: "column is-12 mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStack2$1 = userStack2;
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCardAdvanced");
    useHead({
      title: "VCardAdvanced - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$2;
      const _component_VCardAdvancedDocumentation = resolveComponent("VCardAdvancedDocumentation");
      const _component_VBlock = _sfc_main$3;
      const _component_VAvatarStack = _sfc_main$4;
      const _component_VTag = _sfc_main$5;
      const _component_VButton = _sfc_main$6;
      const _component_VCardAdvanced = _sfc_main$1;
      const _component_WidgetDropdown = __unplugin_components_2;
      const _component_VCardAdvancedPropsDocumentation = resolveComponent("VCardAdvancedPropsDocumentation");
      const _component_VCardAdvancedSlotsDocumentation = resolveComponent("VCardAdvancedSlotsDocumentation");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "Vuero",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "Cards"
            },
            {
              label: "VCardAdvanced",
              to: { name: "components-card-advanced" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VCardAdvancedDocumentation)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VCardAdvanced, null, {
              "header-left": withCtx(() => [
                createVNode(_component_VBlock, {
                  title: "Anna B.",
                  subtitle: "UX Designer",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  _: 1
                })
              ]),
              "header-right": withCtx(() => [
                createVNode(_component_VAvatarStack, {
                  avatars: unref(userStack2$1),
                  limit: 1,
                  size: "small"
                }, null, 8, ["avatars"])
              ]),
              content: withCtx(() => [
                _hoisted_5
              ]),
              "footer-left": withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VTag, {
                    label: "Business",
                    color: "solid",
                    rounded: ""
                  })
                ])
              ]),
              "footer-right": withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VCardAdvanced, { radius: "smooth" }, {
              "header-left": withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_VTag, {
                    label: "Business",
                    color: "solid",
                    rounded: ""
                  })
                ])
              ]),
              "header-right": withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_10
                  ]),
                  _: 1
                })
              ]),
              content: withCtx(() => [
                _hoisted_11
              ]),
              "footer-left": withCtx(() => [
                createVNode(_component_VBlock, {
                  title: "Anna B.",
                  subtitle: "UX Designer",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  _: 1
                })
              ]),
              "footer-right": withCtx(() => [
                createVNode(_component_VAvatarStack, {
                  avatars: unref(userStack2$1),
                  limit: 1,
                  size: "small"
                }, null, 8, ["avatars"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_12, [
            createVNode(_component_VCardAdvanced, { radius: "rounded" }, {
              "header-left": withCtx(() => [
                _hoisted_13
              ]),
              "header-right": withCtx(() => [
                createVNode(_component_WidgetDropdown)
              ]),
              content: withCtx(() => [
                _hoisted_14
              ]),
              "footer-left": withCtx(() => [
                createVNode(_component_VBlock, {
                  title: "Anna B.",
                  subtitle: "UX Designer",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  _: 1
                })
              ]),
              "footer-right": withCtx(() => [
                createVNode(_component_VAvatarStack, {
                  avatars: unref(userStack2$1),
                  limit: 1,
                  size: "small"
                }, null, 8, ["avatars"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_15, [
            createVNode(_component_VCardAdvancedPropsDocumentation),
            createVNode(_component_VCardAdvancedSlotsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
