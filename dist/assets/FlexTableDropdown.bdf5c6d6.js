import { _ as _sfc_main$1 } from "./VDropdown.38fc5e7d.js";
import { d as defineComponent, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, W as withModifiers } from "./vendor.6548d360.js";
const _hoisted_1 = ["onClick"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-eye"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "View"),
  /* @__PURE__ */ createBaseVNode("span", null, "View user details")
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-briefcase"
  })
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Projects"),
  /* @__PURE__ */ createBaseVNode("span", null, "View user projects")
], -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-calendar"
  })
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Schedule"),
  /* @__PURE__ */ createBaseVNode("span", null, "Schedule a meeting")
], -1);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-trash-can-alt"
  })
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Remove"),
  /* @__PURE__ */ createBaseVNode("span", null, "Remove from list")
], -1);
const _hoisted_17 = [
  _hoisted_15,
  _hoisted_16
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["view", "projects", "schedule", "remove"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      const _component_VDropdown = _sfc_main$1;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        class: "is-pushed-mobile",
        spaced: "",
        right: ""
      }, {
        content: withCtx(({ close }) => [
          createBaseVNode("a", {
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media",
            onClick: withModifiers(() => {
              emits("view");
              close();
            }, ["prevent"])
          }, _hoisted_4, 8, _hoisted_1),
          createBaseVNode("a", {
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media",
            onClick: withModifiers(() => {
              emits("projects");
              close();
            }, ["prevent"])
          }, _hoisted_8, 8, _hoisted_5),
          createBaseVNode("a", {
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media",
            onClick: withModifiers(() => {
              emits("schedule");
              close();
            }, ["prevent"])
          }, _hoisted_12, 8, _hoisted_9),
          _hoisted_13,
          createBaseVNode("a", {
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media",
            onClick: withModifiers(() => {
              emits("remove");
              close();
            }, ["prevent"])
          }, _hoisted_17, 8, _hoisted_14)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as _ };
