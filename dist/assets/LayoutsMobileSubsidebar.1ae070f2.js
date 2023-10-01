import { _ as _sfc_main$7 } from "./VModal.8c95aa77.js";
import { _ as _sfc_main$6 } from "./VIcon.de064b10.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, g as normalizeClass, F as Fragment, X as renderList, r as renderSlot, a2 as withKeys, W as withModifiers, p as createBlock, y as createCommentVNode, x as createTextVNode, t as toDisplayString, h as unref, s as createVNode, w as withCtx, T as Transition, z as resolveComponent } from "./vendor.6548d360.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.8d409c39.js";
import { _ as __unplugin_components_9 } from "./UserProfileDropdown.c528b802.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
const _hoisted_1$5 = { class: "tabs-inner" };
const _hoisted_2$4 = ["onKeydown", "onClick"];
const _hoisted_3$4 = {
  key: 0,
  class: "tab-naver"
};
const _hoisted_4$4 = { class: "tab-content is-active" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    tabs: null,
    selected: { default: void 0 },
    type: { default: void 0 },
    align: { default: void 0 },
    slider: { type: Boolean },
    slow: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const activeValue = ref(props.selected);
    const sliderClass = computed(() => {
      if (!props.slider) {
        return "";
      }
      if (props.type === "rounded") {
        if (props.tabs.length === 3) {
          return "is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-slider";
        }
        return "";
      }
      if (!props.type) {
        if (props.tabs.length === 3) {
          return "is-squared is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-squared is-slider";
        }
      }
      return "";
    });
    function toggle(value) {
      activeValue.value = value;
    }
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tabs-wrapper", [unref(sliderClass)]])
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", {
            class: normalizeClass(["tabs", [
              props.align === "centered" && "is-centered",
              props.align === "right" && "is-right",
              props.type === "rounded" && !props.slider && "is-toggle is-toggle-rounded",
              props.type === "toggle" && "is-toggle",
              props.type === "boxed" && "is-boxed"
            ]])
          }, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([activeValue.value === tab.value && "is-active"])
                }, [
                  renderSlot(_ctx.$slots, "tab-link", {
                    activeValue: activeValue.value,
                    tab,
                    index: key,
                    toggle
                  }, () => [
                    createBaseVNode("a", {
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(($event) => toggle(tab.value), ["prevent"]), ["space"]),
                      onClick: ($event) => toggle(tab.value)
                    }, [
                      tab.icon ? (openBlock(), createBlock(_component_VIcon, {
                        key: 0,
                        icon: tab.icon
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createBaseVNode("span", null, [
                        renderSlot(_ctx.$slots, "tab-link-label", {
                          activeValue: activeValue.value,
                          tab,
                          index: key
                        }, () => [
                          createTextVNode(toDisplayString(tab.label), 1)
                        ])
                      ])
                    ], 40, _hoisted_2$4)
                  ])
                ], 2);
              }), 128)),
              unref(sliderClass) ? (openBlock(), createElementBlock("li", _hoisted_3$4)) : createCommentVNode("", true)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_4$4, [
          createVNode(Transition, {
            name: props.slow ? "fade-slow" : "fade-fast",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "tab", { activeValue: activeValue.value })
            ]),
            _: 3
          }, 8, ["name"])
        ])
      ], 2);
    };
  }
});
var VMessage_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "message-body" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    color: { default: void 0 },
    closable: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["message", [props.color && `is-${props.color}`]])
      }, [
        props.closable ? (openBlock(), createElementBlock("a", {
          key: 0,
          "aria-label": "Dismiss",
          class: "delete",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("close"), ["prevent"]))
        }, null, 32)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$4, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var _imports_0 = "/images/icons/layouts/layout-7.svg";
var _imports_1 = "/images/icons/layouts/layout-7-dark.svg";
var _imports_2 = "/images/icons/layouts/layout-9.svg";
var _imports_3 = "/images/icons/layouts/layout-9-dark.svg";
var _imports_4 = "/images/icons/layouts/layout-5.svg";
var _imports_5 = "/images/icons/layouts/layout-5-dark.svg";
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:sidebar"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _hoisted_4$3 = { class: "has-slimscroll layout-selector" };
const _hoisted_5$3 = {
  key: 0,
  class: "columns is-multiline is-half-mobile-p"
};
const _hoisted_6$3 = { class: "column is-6" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Default theme", -1);
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("p", null, "Top nav with categories", -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_10$3 = { class: "column is-6" };
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Fade theme", -1);
const _hoisted_12$3 = /* @__PURE__ */ createBaseVNode("p", null, "Transparent top nav", -1);
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_14$3 = { class: "column is-6" };
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Colored theme", -1);
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("p", null, "Colored top nav", -1);
const _hoisted_17$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_18$3 = {
  key: 1,
  class: "columns is-multiline is-half-mobile-p"
};
const _hoisted_19$3 = { class: "column is-6" };
const _hoisted_20$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image-block",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_21$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image-block",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_22$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Default theme", -1);
const _hoisted_23$3 = /* @__PURE__ */ createBaseVNode("p", null, "Top nav dropdown variation", -1);
const _hoisted_24$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_25$3 = { class: "column is-6" };
const _hoisted_26$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image-block",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_27$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image-block",
  src: _imports_3,
  alt: ""
}, null, -1);
const _hoisted_28$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Colored theme", -1);
const _hoisted_29$3 = /* @__PURE__ */ createBaseVNode("p", null, "Colored with dropdowns", -1);
const _hoisted_30$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_31$3 = {
  key: 2,
  class: "columns is-multiline is-half-mobile-p"
};
const _hoisted_32$3 = { class: "column is-6" };
const _hoisted_33$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Default theme", -1);
const _hoisted_34$3 = /* @__PURE__ */ createBaseVNode("p", null, "Clean top nav variation", -1);
const _hoisted_35$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_36$3 = { class: "column is-6" };
const _hoisted_37$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Center theme", -1);
const _hoisted_38$3 = /* @__PURE__ */ createBaseVNode("p", null, "Centered variation", -1);
const _hoisted_39$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_40$3 = { class: "column is-6" };
const _hoisted_41$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Fade theme", -1);
const _hoisted_42$3 = /* @__PURE__ */ createBaseVNode("p", null, "Transparent variation", -1);
const _hoisted_43$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_44$3 = {
  key: 3,
  class: "columns is-multiline is-half-mobile-p"
};
const _hoisted_45$3 = { class: "column is-6" };
const _hoisted_46$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Default Sidebar", -1);
const _hoisted_47$3 = /* @__PURE__ */ createBaseVNode("p", null, "The good old default sidebar", -1);
const _hoisted_48$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_49$3 = { class: "column is-6" };
const _hoisted_50$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Colored Sidebar", -1);
const _hoisted_51$3 = /* @__PURE__ */ createBaseVNode("p", null, "Colored variation of sidebar", -1);
const _hoisted_52$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_53$3 = { class: "column is-6" };
const _hoisted_54$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Curved Sidebar", -1);
const _hoisted_55$3 = /* @__PURE__ */ createBaseVNode("p", null, "Sidebar with curved edges", -1);
const _hoisted_56$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_57$3 = { class: "column is-6" };
const _hoisted_58$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Curved Colored", -1);
const _hoisted_59$3 = /* @__PURE__ */ createBaseVNode("p", null, "Curved edges with color", -1);
const _hoisted_60$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_61$3 = { class: "column is-6" };
const _hoisted_62$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Sidebar Labels", -1);
const _hoisted_63$3 = /* @__PURE__ */ createBaseVNode("p", null, "Default labels displayed", -1);
const _hoisted_64$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_65$3 = { class: "column is-6" };
const _hoisted_66$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image-block",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_67$3 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image-block",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_68$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Hover Labels", -1);
const _hoisted_69$3 = /* @__PURE__ */ createBaseVNode("p", null, "Labels displayed on hover", -1);
const _hoisted_70$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_71$3 = { class: "column is-6" };
const _hoisted_72$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Floating Sidebar", -1);
const _hoisted_73$3 = /* @__PURE__ */ createBaseVNode("p", null, "Floating rounded variation", -1);
const _hoisted_74$3 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_75$3 = {
  key: 4,
  class: "columns is-multiline is-half-mobile-p"
};
const _hoisted_76$3 = { class: "column is-6" };
const _hoisted_77$2 = /* @__PURE__ */ createBaseVNode("h3", null, "Default Sideblock", -1);
const _hoisted_78$2 = /* @__PURE__ */ createBaseVNode("p", null, "The good old default sideblock", -1);
const _hoisted_79$2 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_80$2 = { class: "column is-6" };
const _hoisted_81$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Colored Sideblock", -1);
const _hoisted_82$1 = /* @__PURE__ */ createBaseVNode("p", null, "Colored variation of sideblock", -1);
const _hoisted_83$1 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_84$1 = { class: "column is-6" };
const _hoisted_85$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Curved Sideblock", -1);
const _hoisted_86$1 = /* @__PURE__ */ createBaseVNode("p", null, "Sideblock with curved edges", -1);
const _hoisted_87$1 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_88$1 = { class: "column is-6" };
const _hoisted_89$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Curved Colored", -1);
const _hoisted_90$1 = /* @__PURE__ */ createBaseVNode("p", null, "Curved edges with color", -1);
const _hoisted_91$1 = /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_92$1 = /* @__PURE__ */ createTextVNode(" Use this layout with ");
const _hoisted_93$1 = /* @__PURE__ */ createTextVNode(" component ");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const layoutSwitcher = useLayoutSwitcher();
    const isModalOpen = ref(false);
    const selectedSlug = computed(() => {
      switch (layoutSwitcher.dynamicLayoutId) {
        case "navbar-dropdown":
        case "navbar-dropdown-colored":
          return "dropdown";
        case "navbar-clean":
        case "navbar-clean-center":
        case "navbar-clean-fade":
          return "search";
        case "navbar-default":
        case "navbar-fade":
        case "navbar-colored":
          return "navbar";
        case "sideblock-default":
        case "sideblock-color":
        case "sideblock-color-curved":
        case "sideblock-curved":
          return "sideblock";
        default:
          return "sidebar";
      }
    });
    const layoutComponent = (slug) => {
      switch (slug) {
        case "dropdown":
          return "NavbarDropdownLayout";
        case "search":
          return "NavbarSearchLayout";
        case "sidebar":
          return "SidebarLayout";
        case "sideblock":
          return "SideblockLayout";
        case "navbar":
        default:
          return "NavbarLayout";
      }
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VMessage = _sfc_main$4;
      const _component_VTabs = _sfc_main$5;
      const _component_VModal = _sfc_main$7;
      return unref(layoutSwitcher).hasDynamicLayout ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("a", {
          "aria-label": "Open layout switcher",
          class: "icon-link",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isModalOpen.value = true, ["prevent"]), ["space"])),
          onClickPassive: _cache[1] || (_cache[1] = ($event) => isModalOpen.value = true)
        }, _hoisted_3$3, 32),
        createVNode(_component_VModal, {
          open: isModalOpen.value,
          title: "Select Layout",
          size: "medium",
          actions: "right",
          noscroll: "",
          tabs: "",
          onClose: _cache[40] || (_cache[40] = ($event) => isModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VTabs, {
              selected: unref(selectedSlug),
              tabs: [
                { label: "Navbar", value: "navbar" },
                {
                  label: "Navdrop",
                  value: "dropdown"
                },
                {
                  label: "Search",
                  value: "search"
                },
                { label: "Sidebar", value: "sidebar" },
                { label: "Sideblock", value: "sideblock" }
              ]
            }, {
              tab: withCtx(({ activeValue }) => [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_4$3, [
                    createVNode(Transition, {
                      name: "fade-fast",
                      mode: "out-in"
                    }, {
                      default: withCtx(() => [
                        activeValue === "navbar" ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
                          createBaseVNode("div", _hoisted_6$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-default" && "is-active"
                              ]]),
                              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-default");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[3] || (_cache[3] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-default");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_7$3,
                                _hoisted_8$3,
                                _hoisted_9$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_10$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-fade" && "is-active"
                              ]]),
                              onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-fade");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[5] || (_cache[5] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-fade");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_11$3,
                                _hoisted_12$3,
                                _hoisted_13$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_14$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-colored" && "is-active"
                              ]]),
                              onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-colored");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[7] || (_cache[7] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-colored");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_15$3,
                                _hoisted_16$3,
                                _hoisted_17$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ])
                        ])) : activeValue === "dropdown" ? (openBlock(), createElementBlock("div", _hoisted_18$3, [
                          createBaseVNode("div", _hoisted_19$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-dropdown" && "is-active"
                              ]]),
                              onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-dropdown");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[9] || (_cache[9] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-dropdown");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_20$3,
                                _hoisted_21$3,
                                _hoisted_22$3,
                                _hoisted_23$3,
                                _hoisted_24$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_25$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-dropdown-colored" && "is-active"
                              ]]),
                              onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-dropdown-colored");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[11] || (_cache[11] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-dropdown-colored");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_26$3,
                                _hoisted_27$3,
                                _hoisted_28$3,
                                _hoisted_29$3,
                                _hoisted_30$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ])
                        ])) : activeValue === "search" ? (openBlock(), createElementBlock("div", _hoisted_31$3, [
                          createBaseVNode("div", _hoisted_32$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-clean" && "is-active"
                              ]]),
                              onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[13] || (_cache[13] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_33$3,
                                _hoisted_34$3,
                                _hoisted_35$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_36$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-clean-center" && "is-active"
                              ]]),
                              onKeydown: _cache[14] || (_cache[14] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean-center");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[15] || (_cache[15] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean-center");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_37$3,
                                _hoisted_38$3,
                                _hoisted_39$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_40$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).navbarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "navbar-clean-fade" && "is-active"
                              ]]),
                              onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean-fade");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[17] || (_cache[17] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("navbar-clean-fade");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_41$3,
                                _hoisted_42$3,
                                _hoisted_43$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ])
                        ])) : activeValue === "sidebar" ? (openBlock(), createElementBlock("div", _hoisted_44$3, [
                          createBaseVNode("div", _hoisted_45$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-default" && "is-active"
                              ]]),
                              onKeydown: _cache[18] || (_cache[18] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-default");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[19] || (_cache[19] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-default");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_46$3,
                                _hoisted_47$3,
                                _hoisted_48$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_49$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-color" && "is-active"
                              ]]),
                              onKeydown: _cache[20] || (_cache[20] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-color");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[21] || (_cache[21] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-color");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_50$3,
                                _hoisted_51$3,
                                _hoisted_52$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_53$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-curved" && "is-active"
                              ]]),
                              onKeydown: _cache[22] || (_cache[22] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-curved");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[23] || (_cache[23] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-curved");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_54$3,
                                _hoisted_55$3,
                                _hoisted_56$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_57$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-color-curved" && "is-active"
                              ]]),
                              onKeydown: _cache[24] || (_cache[24] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-color-curved");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[25] || (_cache[25] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-color-curved");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_58$3,
                                _hoisted_59$3,
                                _hoisted_60$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_61$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-labels" && "is-active"
                              ]]),
                              onKeydown: _cache[26] || (_cache[26] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-labels");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[27] || (_cache[27] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-labels");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_62$3,
                                _hoisted_63$3,
                                _hoisted_64$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_65$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-labels-hover" && "is-active"
                              ]]),
                              onKeydown: _cache[28] || (_cache[28] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-labels-hover");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[29] || (_cache[29] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-labels-hover");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_66$3,
                                _hoisted_67$3,
                                _hoisted_68$3,
                                _hoisted_69$3,
                                _hoisted_70$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_71$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).dynamicLayoutId === "sidebar-float" && "is-active"
                              ]]),
                              onKeydown: _cache[30] || (_cache[30] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-float");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[31] || (_cache[31] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sidebar-float");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_72$3,
                                _hoisted_73$3,
                                _hoisted_74$3
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ])
                        ])) : activeValue === "sideblock" ? (openBlock(), createElementBlock("div", _hoisted_75$3, [
                          createBaseVNode("div", _hoisted_76$3, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).isSidebarRoute && unref(layoutSwitcher).dynamicLayoutId === "sideblock-default" && "is-active"
                              ]]),
                              onKeydown: _cache[32] || (_cache[32] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-default");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[33] || (_cache[33] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-default");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_77$2,
                                _hoisted_78$2,
                                _hoisted_79$2
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_80$2, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).isSidebarRoute && unref(layoutSwitcher).dynamicLayoutId === "sideblock-color" && "is-active"
                              ]]),
                              onKeydown: _cache[34] || (_cache[34] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-color");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[35] || (_cache[35] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-color");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_81$1,
                                _hoisted_82$1,
                                _hoisted_83$1
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_84$1, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).isSidebarRoute && unref(layoutSwitcher).dynamicLayoutId === "sideblock-curved" && "is-active"
                              ]]),
                              onKeydown: _cache[36] || (_cache[36] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-curved");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[37] || (_cache[37] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-curved");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_85$1,
                                _hoisted_86$1,
                                _hoisted_87$1
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ]),
                          createBaseVNode("div", _hoisted_88$1, [
                            createVNode(_component_RouterLink, {
                              to: unref(layoutSwitcher).sidebarLayoutLink,
                              class: normalizeClass(["layout-item", [
                                unref(layoutSwitcher).isSidebarRoute && unref(layoutSwitcher).dynamicLayoutId === "sideblock-color-curved" && "is-active"
                              ]]),
                              onKeydown: _cache[38] || (_cache[38] = withKeys(withModifiers(() => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-color-curved");
                                isModalOpen.value = false;
                              }, ["prevent"]), ["space"])),
                              onClickPassive: _cache[39] || (_cache[39] = () => {
                                unref(layoutSwitcher).setDynamicLayoutId("sideblock-color-curved");
                                isModalOpen.value = false;
                              })
                            }, {
                              default: withCtx(() => [
                                _hoisted_89$1,
                                _hoisted_90$1,
                                _hoisted_91$1
                              ]),
                              _: 1
                            }, 8, ["to", "class"])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode(_component_VMessage, null, {
                    default: withCtx(() => [
                      _hoisted_92$1,
                      createBaseVNode("code", null, toDisplayString(layoutComponent(activeValue)), 1),
                      _hoisted_93$1
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]),
              _: 1
            }, 8, ["selected"])
          ]),
          _: 1
        }, 8, ["open"])
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "mobile-subsidebar is-activity" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Elements")
], -1);
const _hoisted_4$2 = { class: "submenu" };
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode("Elements Hub");
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode("Colors");
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode("Helpers");
const _hoisted_8$2 = /* @__PURE__ */ createTextVNode(" Icons ");
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_11$2 = /* @__PURE__ */ createTextVNode(" Iconify ");
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_13$2 = /* @__PURE__ */ createTextVNode(" Line Icons Light ");
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_15$2 = /* @__PURE__ */ createTextVNode(" Line Icons Regular ");
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_17$2 = /* @__PURE__ */ createTextVNode(" Font Awesome 5 ");
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "Interaction")
], -1);
const _hoisted_19$2 = /* @__PURE__ */ createTextVNode(" VDropdown ");
const _hoisted_20$2 = /* @__PURE__ */ createTextVNode("VLoader");
const _hoisted_21$2 = /* @__PURE__ */ createTextVNode("VPlaceload");
const _hoisted_22$2 = /* @__PURE__ */ createTextVNode(" VPlaceloadText ");
const _hoisted_23$2 = /* @__PURE__ */ createTextVNode(" VPlaceloadAvatar ");
const _hoisted_24$2 = /* @__PURE__ */ createTextVNode(" VMessage ");
const _hoisted_25$2 = /* @__PURE__ */ createTextVNode("VModal");
const _hoisted_26$2 = /* @__PURE__ */ createTextVNode(" VProgress ");
const _hoisted_27$2 = /* @__PURE__ */ createTextVNode(" VTootlip ");
const _hoisted_28$2 = /* @__PURE__ */ createTextVNode(" Buttons ");
const _hoisted_29$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_30$2 = /* @__PURE__ */ createTextVNode(" VButton ");
const _hoisted_31$2 = /* @__PURE__ */ createTextVNode(" VAction ");
const _hoisted_32$2 = /* @__PURE__ */ createTextVNode(" VIconButton ");
const _hoisted_33$2 = /* @__PURE__ */ createTextVNode(" Inputs ");
const _hoisted_34$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_35$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_36$2 = /* @__PURE__ */ createTextVNode(" Inputs ");
const _hoisted_37$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_38$2 = /* @__PURE__ */ createTextVNode(" Input Addons ");
const _hoisted_39$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_40$2 = /* @__PURE__ */ createTextVNode(" Textarea ");
const _hoisted_41$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_42$2 = /* @__PURE__ */ createTextVNode(" Selects ");
const _hoisted_43$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_44$2 = /* @__PURE__ */ createTextVNode(" File Input ");
const _hoisted_45$2 = /* @__PURE__ */ createTextVNode(" VControl ");
const _hoisted_46$2 = /* @__PURE__ */ createTextVNode(" VField ");
const _hoisted_47$2 = /* @__PURE__ */ createTextVNode(" Switches ");
const _hoisted_48$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_49$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_50$2 = /* @__PURE__ */ createTextVNode(" VAnimatedCheckbox ");
const _hoisted_51$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_52$2 = /* @__PURE__ */ createTextVNode(" VCheckbox ");
const _hoisted_53$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_54$2 = /* @__PURE__ */ createTextVNode(" VRadio ");
const _hoisted_55$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_56$2 = /* @__PURE__ */ createTextVNode(" VSwitchBlock ");
const _hoisted_57$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_58$2 = /* @__PURE__ */ createTextVNode(" VSwitchSegment ");
const _hoisted_59$2 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_60$2 = /* @__PURE__ */ createTextVNode(" Addons ");
const _hoisted_61$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_62$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_63$2 = /* @__PURE__ */ createTextVNode(" VCalendar & VDatePicker ");
const _hoisted_64$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_65$2 = /* @__PURE__ */ createTextVNode(" VIMaskInput ");
const _hoisted_66$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_67$2 = /* @__PURE__ */ createTextVNode(" VFilePond ");
const _hoisted_68$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_69$2 = /* @__PURE__ */ createTextVNode(" VCreditCard ");
const _hoisted_70$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_71$2 = /* @__PURE__ */ createTextVNode(" @vueform/multiselect ");
const _hoisted_72$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_73$2 = /* @__PURE__ */ createTextVNode(" @vueform/slider ");
const _hoisted_74$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_75$2 = /* @__PURE__ */ createTextVNode(" CKEditor 5 ");
const _hoisted_76$2 = /* @__PURE__ */ createBaseVNode("div", { class: "bottom-action" }, null, -1);
function _sfc_render$2(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_VCollapseLinks = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      _hoisted_3$2,
      createBaseVNode("ul", _hoisted_4$2, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements" } }, {
            default: withCtx(() => [
              _hoisted_5$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-colors" } }, {
            default: withCtx(() => [
              _hoisted_6$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-helpers" } }, {
            default: withCtx(() => [
              _hoisted_7$2
            ]),
            _: 1
          })
        ]),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_8$2,
            _hoisted_9$2
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "elements-icons-iconify" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_10$2,
                _hoisted_11$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-icons-line-icons-light" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_12$2,
                _hoisted_13$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-icons-line-icons-regular" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_14$2,
                _hoisted_15$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-icons-font-awesome" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_16$2,
                _hoisted_17$2
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_18$2,
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-dropdown" } }, {
            default: withCtx(() => [
              _hoisted_19$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-loader" } }, {
            default: withCtx(() => [
              _hoisted_20$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-placeload" } }, {
            default: withCtx(() => [
              _hoisted_21$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-placeload-text" } }, {
            default: withCtx(() => [
              _hoisted_22$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-placeload-avatar" } }, {
            default: withCtx(() => [
              _hoisted_23$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-message" } }, {
            default: withCtx(() => [
              _hoisted_24$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-modal" } }, {
            default: withCtx(() => [
              _hoisted_25$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-progress" } }, {
            default: withCtx(() => [
              _hoisted_26$2
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "elements-tooltip" } }, {
            default: withCtx(() => [
              _hoisted_27$2
            ]),
            _: 1
          })
        ]),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_28$2,
            _hoisted_29$2
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "elements-button" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_30$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-action" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_31$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-icon-button" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_32$2
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_33$2,
            _hoisted_34$2
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "elements-forms-inputs" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_35$2,
                _hoisted_36$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-forms-addons" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_37$2,
                _hoisted_38$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-forms-textarea" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_39$2,
                _hoisted_40$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-forms-selects" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_41$2,
                _hoisted_42$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-forms-file" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_43$2,
                _hoisted_44$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-control" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_45$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-field" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_46$2
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_47$2,
            _hoisted_48$2
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "elements-animated-checkbox" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_49$2,
                _hoisted_50$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-checkbox" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_51$2,
                _hoisted_52$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-radio" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_53$2,
                _hoisted_54$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-switch-block" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_55$2,
                _hoisted_56$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-switch-segment" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_57$2,
                _hoisted_58$2
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_59$2,
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_60$2,
            _hoisted_61$2
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-calendar" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_62$2,
                _hoisted_63$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-imask-input" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_64$2,
                _hoisted_65$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-filepond" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_66$2,
                _hoisted_67$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-credit-card" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_68$2,
                _hoisted_69$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-vueform-multiselect" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_70$2,
                _hoisted_71$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-vueform-slider" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_72$2,
                _hoisted_73$2
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "elements-addons-ckeditor" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_74$2,
                _hoisted_75$2
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _hoisted_76$2
    ])
  ]);
}
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "mobile-subsidebar is-activity" };
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Components")
], -1);
const _hoisted_4$1 = { class: "submenu" };
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("Components Hub");
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Content");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("Table");
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "Display")
], -1);
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode("VAvatar");
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode(" VAvatarStack ");
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode("VBlock");
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode(" VIconBox ");
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" VIconWrap ");
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode(" VSnack ");
const _hoisted_15$1 = /* @__PURE__ */ createTextVNode("VTag");
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "Layout")
], -1);
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode(" VFlex ");
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("small", null, "& VFlexItem", -1);
const _hoisted_19$1 = /* @__PURE__ */ createTextVNode(" VGrid ");
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("small", null, "& VGridItem", -1);
const _hoisted_21$1 = /* @__PURE__ */ createTextVNode(" VBreadcrumb ");
const _hoisted_22$1 = /* @__PURE__ */ createTextVNode(" VTabs ");
const _hoisted_23$1 = /* @__PURE__ */ createTextVNode(" VFlexPagination ");
const _hoisted_24$1 = /* @__PURE__ */ createTextVNode(" VFlexTable ");
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_27$1 = /* @__PURE__ */ createTextVNode(" Basic usage ");
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_29$1 = /* @__PURE__ */ createTextVNode(" Customize columns ");
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createTextVNode(" Slots usage ");
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_33$1 = /* @__PURE__ */ createTextVNode(" Render functions ");
const _hoisted_34$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_35$1 = /* @__PURE__ */ createTextVNode(" VFlexTableWrapper ");
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_37$1 = /* @__PURE__ */ createTextVNode(" Async data ");
const _hoisted_38$1 = /* @__PURE__ */ createTextVNode(" Accordions ");
const _hoisted_39$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_40$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_41$1 = /* @__PURE__ */ createTextVNode(" VAccordion ");
const _hoisted_42$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_43$1 = /* @__PURE__ */ createTextVNode(" VCollapse ");
const _hoisted_44$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_45$1 = /* @__PURE__ */ createTextVNode(" VAccordionImage ");
const _hoisted_46$1 = /* @__PURE__ */ createTextVNode(" Cards ");
const _hoisted_47$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_49$1 = /* @__PURE__ */ createTextVNode(" VCard ");
const _hoisted_50$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_51$1 = /* @__PURE__ */ createTextVNode(" VCardAction ");
const _hoisted_52$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_53$1 = /* @__PURE__ */ createTextVNode(" VCardAdvanced ");
const _hoisted_54$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_55$1 = /* @__PURE__ */ createTextVNode(" VCardMedia ");
const _hoisted_56$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_57$1 = /* @__PURE__ */ createTextVNode(" VCardSocial ");
const _hoisted_58$1 = /* @__PURE__ */ createTextVNode(" Placeholders ");
const _hoisted_59$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_60$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_61$1 = /* @__PURE__ */ createTextVNode(" VPlaceholderPage ");
const _hoisted_62$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_63$1 = /* @__PURE__ */ createTextVNode(" VPlaceholderSection ");
const _hoisted_64$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_65$1 = /* @__PURE__ */ createTextVNode(" Plugins ");
const _hoisted_66$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_67$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_68$1 = /* @__PURE__ */ createTextVNode(" Notyf ");
const _hoisted_69$1 = /* @__PURE__ */ createTextVNode(" Placeholders ");
const _hoisted_70$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_71$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_72$1 = /* @__PURE__ */ createTextVNode(" Tippy ");
const _hoisted_73$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_74$1 = /* @__PURE__ */ createTextVNode(" VBillboardJS ");
const _hoisted_75$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_76$1 = /* @__PURE__ */ createTextVNode(" VPhotosSwipe ");
const _hoisted_77$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_78$1 = /* @__PURE__ */ createTextVNode(" VPlyr ");
const _hoisted_79$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_80$1 = /* @__PURE__ */ createTextVNode(" VSimpleDatatables ");
function _sfc_render$1(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_VTag = _sfc_main$8;
  const _component_VCollapseLinks = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _hoisted_3$1,
      createBaseVNode("ul", _hoisted_4$1, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components" } }, {
            default: withCtx(() => [
              _hoisted_5$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-content" } }, {
            default: withCtx(() => [
              _hoisted_6$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-table" } }, {
            default: withCtx(() => [
              _hoisted_7$1
            ]),
            _: 1
          })
        ]),
        _hoisted_8$1,
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-avatar" } }, {
            default: withCtx(() => [
              _hoisted_9$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-avatar-stack" } }, {
            default: withCtx(() => [
              _hoisted_10$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-block" } }, {
            default: withCtx(() => [
              _hoisted_11$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-icon-box" } }, {
            default: withCtx(() => [
              _hoisted_12$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-icon-wrap" } }, {
            default: withCtx(() => [
              _hoisted_13$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-snack" } }, {
            default: withCtx(() => [
              _hoisted_14$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-tag" } }, {
            default: withCtx(() => [
              _hoisted_15$1
            ]),
            _: 1
          })
        ]),
        _hoisted_16$1,
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-flex" } }, {
            default: withCtx(() => [
              _hoisted_17$1,
              _hoisted_18$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-grid" } }, {
            default: withCtx(() => [
              _hoisted_19$1,
              _hoisted_20$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-breadcrumb" } }, {
            default: withCtx(() => [
              _hoisted_21$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-tabs" } }, {
            default: withCtx(() => [
              _hoisted_22$1
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: { name: "components-pagination" } }, {
            default: withCtx(() => [
              _hoisted_23$1
            ]),
            _: 1
          })
        ]),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_24$1,
            createVNode(_component_VTag, {
              label: "v2.2",
              color: "primary",
              outlined: "",
              curved: ""
            }),
            _hoisted_25$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_26$1,
                _hoisted_27$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable-columns" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_28$1,
                _hoisted_29$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable-slots" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_30$1,
                _hoisted_31$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable-render" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_32$1,
                _hoisted_33$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable-wrapper" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_34$1,
                _hoisted_35$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-flextable-wrapper-async" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_36$1,
                _hoisted_37$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_38$1,
            _hoisted_39$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-accordion" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_40$1,
                _hoisted_41$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-collapse" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_42$1,
                _hoisted_43$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-accordion-image" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_44$1,
                _hoisted_45$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_46$1,
            _hoisted_47$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-card" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_48$1,
                _hoisted_49$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-card-action" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_50$1,
                _hoisted_51$1,
                createVNode(_component_VTag, {
                  label: "v1.1",
                  color: "primary",
                  outlined: "",
                  curved: ""
                })
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-card-advanced" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_52$1,
                _hoisted_53$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-card-media" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_54$1,
                _hoisted_55$1,
                createVNode(_component_VTag, {
                  label: "v1.1",
                  color: "primary",
                  outlined: "",
                  curved: ""
                })
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-card-social" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_56$1,
                _hoisted_57$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_58$1,
            _hoisted_59$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-placeholder-page" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_60$1,
                _hoisted_61$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-placeholder-section" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_62$1,
                _hoisted_63$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_64$1,
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_65$1,
            _hoisted_66$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-notif" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_67$1,
                _hoisted_68$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_69$1,
            _hoisted_70$1
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-tippy" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_71$1,
                _hoisted_72$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-billboard-js" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_73$1,
                _hoisted_74$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-photos-swipe" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_75$1,
                _hoisted_76$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-plyr" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_77$1,
                _hoisted_78$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "components-plugins-simple-datatables" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_79$1,
                _hoisted_80$1
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
const _hoisted_1 = { class: "mobile-subsidebar" };
const _hoisted_2 = { class: "inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Layouts")
], -1);
const _hoisted_4 = { class: "submenu" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Lists ");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "List View V1", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "List View V2", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "List View V3", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "List View V4", -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Flex Lists ");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", null, "Flex List V1", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", null, "Flex List V2", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Flex List V3", -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Datatable ");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "Datatable V1", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Datatable V2", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", null, "Datatable V3", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", null, "Datatable V4", -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode(" Form Layouts ");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "Form Layout V1", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", null, "Form Layout V2", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "Form Layout V3", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", null, "Form Layout V4", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "Form Layout V5", -1);
const _hoisted_45 = /* @__PURE__ */ createTextVNode(" Placeload ");
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", null, "Placeload V1", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("span", null, "Placeload V2", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", null, "Placeload V3", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "Placeload V4", -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_56 = /* @__PURE__ */ createTextVNode(" Card Grid ");
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("span", null, "Card Grid V1", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("span", null, "Card Grid V2", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", null, "Card Grid V3", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("span", null, "Card Grid V4", -1);
const _hoisted_66 = /* @__PURE__ */ createTextVNode(" Tile Grid ");
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("span", null, "Tile Grid V1", -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("span", null, "Tile Grid V2", -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("span", null, "Tile Grid V3", -1);
const _hoisted_74 = /* @__PURE__ */ createTextVNode(" User Grid ");
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("span", null, "User Grid V1", -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("span", null, "User Grid V2", -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("span", null, "User Grid V3", -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", null, "User Grid V4", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_85 = /* @__PURE__ */ createTextVNode(" Personal ");
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("span", null, "Profile", -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("span", null, "Edit Profile", -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-notification"
}, null, -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("span", null, "Notifications", -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cog"
}, null, -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("span", null, "Settings", -1);
const _hoisted_95 = /* @__PURE__ */ createTextVNode(" Pages ");
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_97 = /* @__PURE__ */ createTextVNode(" Pages ");
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("span", null, "Login v1", -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("span", null, "Login v2", -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("span", null, "Login v3", -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("span", null, "Signup v1", -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("span", null, "Signup v2", -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("span", null, "Signup Flow", -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-search-alt"
}, null, -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("span", null, "Search Results", -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-search-alt"
}, null, -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("span", null, "Empty Search", -1);
const _hoisted_115 = /* @__PURE__ */ createTextVNode(" Subpages ");
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-credit-card"
}, null, -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("span", null, "SaaS Billing", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("span", null, "Action Page V1", -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("span", null, "Action Page V2", -1);
const _hoisted_123 = /* @__PURE__ */ createTextVNode(" Projects ");
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("span", null, "Projects V1", -1);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify is-auto",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("span", null, "Projects V2", -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify is-auto",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("span", null, "Projects V3", -1);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify is-auto",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("span", null, "Project Details", -1);
const _hoisted_136 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify is-auto",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode("span", null, "Kanban Board", -1);
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify is-auto",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_140 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_141 = /* @__PURE__ */ createTextVNode(" Utility ");
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode("span", null, "Confirm Account", -1);
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-magnet"
}, null, -1);
const _hoisted_146 = /* @__PURE__ */ createBaseVNode("span", null, "Promotion Page", -1);
const _hoisted_147 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-calculator-alt"
}, null, -1);
const _hoisted_148 = /* @__PURE__ */ createBaseVNode("span", null, "Invoice", -1);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-checkmark-circle"
}, null, -1);
const _hoisted_150 = /* @__PURE__ */ createBaseVNode("span", null, "App Status", -1);
const _hoisted_151 = /* @__PURE__ */ createTextVNode(" Onboarding ");
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_153 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-door-alt"
}, null, -1);
const _hoisted_154 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding Welcome", -1);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train"
}, null, -1);
const _hoisted_156 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding V1", -1);
const _hoisted_157 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train-alt"
}, null, -1);
const _hoisted_158 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding V2", -1);
const _hoisted_159 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car"
}, null, -1);
const _hoisted_160 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding V3", -1);
const _hoisted_161 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car-alt"
}, null, -1);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding V4", -1);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train"
}, null, -1);
const _hoisted_164 = /* @__PURE__ */ createBaseVNode("span", null, "Onboarding V5", -1);
const _hoisted_165 = /* @__PURE__ */ createTextVNode(" Error Pages ");
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_167 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode("span", null, "Error 404 V1", -1);
const _hoisted_169 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode("span", null, "Error 404 V2", -1);
const _hoisted_171 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_172 = /* @__PURE__ */ createBaseVNode("span", null, "Error 404 V3", -1);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_174 = /* @__PURE__ */ createBaseVNode("span", null, "Error 404 V4", -1);
const _hoisted_175 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode("span", null, "Error 500 V1", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_VCollapseLinks = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("ul", _hoisted_4, [
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_5,
            _hoisted_6
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_7,
                _hoisted_8
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-view-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_9,
                _hoisted_10
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-view-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_11,
                _hoisted_12
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-view-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_13,
                _hoisted_14
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_15,
            _hoisted_16
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-flex-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_17,
                _hoisted_18
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-flex-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_19,
                _hoisted_20
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-flex-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_21,
                _hoisted_22
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_23,
            _hoisted_24
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-datatable-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_25,
                _hoisted_26
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-datatable-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_27,
                _hoisted_28
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-datatable-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_29,
                _hoisted_30
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-list-datatable-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_31,
                _hoisted_32
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_33,
            _hoisted_34
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-form-layouts-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_35,
                _hoisted_36
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-form-layouts-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_37,
                _hoisted_38
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-form-layouts-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_39,
                _hoisted_40
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-form-layouts-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_41,
                _hoisted_42
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-form-layouts-5" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_43,
                _hoisted_44
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_45,
            _hoisted_46
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-placeload-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_47,
                _hoisted_48
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-placeload-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_49,
                _hoisted_50
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-placeload-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_51,
                _hoisted_52
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-placeload-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_53,
                _hoisted_54
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_55,
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_56,
            _hoisted_57
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-cards-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_58,
                _hoisted_59
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-cards-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_60,
                _hoisted_61
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-cards-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_62,
                _hoisted_63
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-cards-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_64,
                _hoisted_65
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_66,
            _hoisted_67
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-tiles-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_68,
                _hoisted_69
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-tiles-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_70,
                _hoisted_71
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-tiles-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_72,
                _hoisted_73
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_74,
            _hoisted_75
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_76,
                _hoisted_77
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-users-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_78,
                _hoisted_79
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-users-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_80,
                _hoisted_81
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-grid-users-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_82,
                _hoisted_83
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_84,
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_85,
            _hoisted_86
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-profile-view" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_87,
                _hoisted_88
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-profile-edit" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_89,
                _hoisted_90
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-profile-notifications" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_91,
                _hoisted_92
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-profile-settings" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_93,
                _hoisted_94
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_95,
            _hoisted_96
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_97,
            _hoisted_98
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "auth-login-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_99,
                _hoisted_100
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "auth-login-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_101,
                _hoisted_102
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "auth-login-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_103,
                _hoisted_104
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "auth-signup-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_105,
                _hoisted_106
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "auth-signup-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_107,
                _hoisted_108
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "auth-signup-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_109,
                _hoisted_110
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-search-results" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_111,
                _hoisted_112
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-search-empty" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_113,
                _hoisted_114
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_115,
            _hoisted_116
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-saas-billing" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_117,
                _hoisted_118
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-action-page-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_119,
                _hoisted_120
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-action-page-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_121,
                _hoisted_122
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_123,
            _hoisted_124
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-projects-projects-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_125,
                _hoisted_126,
                _hoisted_127
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-projects-projects-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_128,
                _hoisted_129,
                _hoisted_130
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-projects-projects-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_131,
                _hoisted_132,
                _hoisted_133
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-projects-details" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_134,
                _hoisted_135,
                _hoisted_136
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-kanban-board" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_137,
                _hoisted_138,
                _hoisted_139
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_140,
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_141,
            _hoisted_142
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-utility-account-confirm" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_143,
                _hoisted_144
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-utility-promotion" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_145,
                _hoisted_146
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-utility-invoice" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_147,
                _hoisted_148
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "status" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_149,
                _hoisted_150
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_151,
            _hoisted_152
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-welcome" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_153,
                _hoisted_154
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-page-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_155,
                _hoisted_156
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-page-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_157,
                _hoisted_158
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-page-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_159,
                _hoisted_160
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-page-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_161,
                _hoisted_162
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "sidebar-layouts-onboarding-page-5" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_163,
                _hoisted_164
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_VCollapseLinks, null, {
          header: withCtx(() => [
            _hoisted_165,
            _hoisted_166
          ]),
          default: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "error-page-1" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_167,
                _hoisted_168
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "error-page-2" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_169,
                _hoisted_170
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "error-page-3" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_171,
                _hoisted_172
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "error-page-4" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_173,
                _hoisted_174
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "error-page-5" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_175,
                _hoisted_176
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_5 as _, __unplugin_components_6 as a, __unplugin_components_7 as b, _sfc_main$3 as c };
