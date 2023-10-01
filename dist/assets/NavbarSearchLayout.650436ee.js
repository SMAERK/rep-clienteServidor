import { a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$f, e as __unplugin_components_20, f as _sfc_main$h } from "./UserProfileDropdown.c528b802.js";
import { _ as __unplugin_components_19 } from "./VPageContent.f47e1c5e.js";
import { _ as _sfc_main$g } from "./TaskPanel.a47df64e.js";
import { _ as _sfc_main$e } from "./LanguagesPanel.b7b20087.js";
import { d as defineComponent, aF as useWindowScroll, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, r as renderSlot, y as createCommentVNode, g as normalizeClass, h as unref, a0 as useRoute, k as ref, Q as watch, z as resolveComponent, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, p as createBlock, T as Transition, t as toDisplayString, a3 as withDirectives, a4 as vModelText, F as Fragment, X as renderList, av as normalizeProps, aw as guardReactiveProps, a5 as pushScopeId, a6 as popScopeId } from "./vendor.6548d360.js";
import { _ as _sfc_main$d } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$c } from "./VDropdown.38fc5e7d.js";
import { _ as _sfc_main$b } from "./VIconButton.f948e51d.js";
import { _ as _sfc_main$a } from "./VAvatarStack.d8a5f95e.js";
import { _ as __unplugin_components_5, a as __unplugin_components_6, b as __unplugin_components_7, c as _sfc_main$9 } from "./LayoutsMobileSubsidebar.1ae070f2.js";
import { _ as _sfc_main$8 } from "./Toolbar.cbd734d2.js";
import { _ as _sfc_main$7 } from "./ToolbarNotification.e103f93b.js";
import { _ as _sfc_main$6 } from "./ProjectsQuickDropdown.2e79c221.js";
import { _ as _sfc_main$2 } from "./NotificationsMobileDropdown.98d004af.js";
import { _ as __unplugin_components_0$1 } from "./AnimatedLogo.9189a8f1.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import "./VProgress.5bff1011.js";
import "./via-placeholder.9af8280d.js";
import "./FileCardDropdown.ed362889.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VModal.8c95aa77.js";
import "./layoutSwitcher.8d409c39.js";
import "./VTag.f234897b.js";
var NavbarSearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "navbar-navbar-inner" };
const _hoisted_2$1 = { class: "left" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-6" }, "Page Title", -1);
const _hoisted_4$1 = { class: "center" };
const _hoisted_5$1 = { class: "right" };
const _hoisted_6$1 = {
  key: 0,
  class: "left"
};
const _hoisted_7$1 = { class: "welcome-text" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "/",
    class: "button"
  }, "Homepage")
], -1);
const _hoisted_9$1 = { class: "right" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const isScrolling = computed(() => y.value > 30);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-navbar-clean", [unref(isScrolling) && "is-scrolled", props.theme === "fade" && "is-transparent"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              _hoisted_3$1
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "search")
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            renderSlot(_ctx.$slots, "toolbar")
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["navbar-navbar-lower", [
            props.theme === "default" && "is-between",
            props.theme === "center" && "is-centered",
            props.theme === "fade" && "is-centered"
          ]])
        }, [
          props.theme !== "default" ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              renderSlot(_ctx.$slots, "subtitle")
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([
              props.theme === "default" && "left",
              props.theme === "center" && "center",
              props.theme === "fade" && "center"
            ])
          }, [
            renderSlot(_ctx.$slots, "links", {}, () => [
              _hoisted_8$1
            ])
          ], 2),
          createBaseVNode("div", _hoisted_9$1, [
            renderSlot(_ctx.$slots, "toolbar-bottom")
          ])
        ], 2)
      ], 2);
    };
  }
});
var NavbarSearchLayout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-586ff0fe"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "navbar-layout navbar-layout-search" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1));
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:box"
  })
], -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:cpu"
  })
], -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1));
const _hoisted_17 = { class: "title is-6" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "February 22, 2021", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_20 = [
  _hoisted_19
];
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-analytics-alt-1"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "New Dashboard"),
    /* @__PURE__ */ createBaseVNode("span", null, "Add a new dashboard")
  ])
], -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-users-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Invite"),
    /* @__PURE__ */ createBaseVNode("span", null, "Invite new members")
  ])
], -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-briefcase"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "New Project"),
    /* @__PURE__ */ createBaseVNode("span", null, "Add a new project")
  ])
], -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
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
    /* @__PURE__ */ createBaseVNode("span", null, "Manage team settings")
  ])
], -1));
const _hoisted_26 = { class: "centered-search" };
const _hoisted_27 = { class: "field" };
const _hoisted_28 = { class: "control has-icon" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = {
  key: 1,
  class: "search-results has-slimscroll is-active"
};
const _hoisted_33 = { class: "meta" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "Dashboard"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "Projects"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "Team"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "Reports"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "Settings")
], -1));
const _hoisted_35 = { class: "is-navbar-lg" };
const _hoisted_36 = { class: "page-title has-text-centered" };
const _hoisted_37 = { class: "title-wrap" };
const _hoisted_38 = { class: "title is-4" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_40 = [
  _hoisted_39
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    const panels = usePanels();
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const activeMobileSubsidebar = ref("dashboard");
    const filter = ref("");
    const users = [
      {
        picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
        initials: "JS",
        color: "info"
      },
      {
        picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
        initials: "JH",
        color: "info"
      },
      {
        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
        initials: "SM",
        color: "h-purple"
      }
    ];
    function getAvatarData(user) {
      return {
        picture: user.avatar,
        initials: user.initials,
        color: user.color
      };
    }
    const filteredData = computed(() => {
      if (!filter.value) {
        return [];
      }
      return Object.values(popovers).filter((user) => {
        return user.fullName.match(new RegExp(filter.value, "i")) || user.position.match(new RegExp(filter.value, "i"));
      });
    });
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$2;
      const _component_UserProfileDropdown = _sfc_main$3;
      const _component_MobileNavbar = _sfc_main$4;
      const _component_MobileSidebar = _sfc_main$5;
      const _component_LayoutsMobileSubsidebar = __unplugin_components_5;
      const _component_DashboardsMobileSubsidebar = resolveComponent("DashboardsMobileSubsidebar");
      const _component_ComponentsMobileSubsidebar = __unplugin_components_6;
      const _component_ElementsMobileSubsidebar = __unplugin_components_7;
      const _component_ProjectsQuickDropdown = _sfc_main$6;
      const _component_ToolbarNotification = _sfc_main$7;
      const _component_Toolbar = _sfc_main$8;
      const _component_LayoutSwitcher = _sfc_main$9;
      const _component_VAvatarStack = _sfc_main$a;
      const _component_VIconButton = _sfc_main$b;
      const _component_VDropdown = _sfc_main$c;
      const _component_VAvatar = _sfc_main$d;
      const _component_NavbarSearch = _sfc_main$1;
      const _component_LanguagesPanel = _sfc_main$e;
      const _component_ActivityPanel = _sfc_main$f;
      const _component_TaskPanel = _sfc_main$g;
      const _component_VPageContent = __unplugin_components_19;
      const _component_VPageContentWrapper = __unplugin_components_20;
      const _component_VViewWrapper = _sfc_main$h;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[11] || (_cache[11] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "layout" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "layout", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "layout")
              }, _hoisted_7, 34)
            ]),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
              tabindex: "0",
              onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "elements", ["prevent"]), ["space"])),
              onClick: _cache[6] || (_cache[6] = ($event) => activeMobileSubsidebar.value = "elements")
            }, _hoisted_9, 34),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
              tabindex: "0",
              onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "components", ["prevent"]), ["space"])),
              onClick: _cache[8] || (_cache[8] = ($event) => activeMobileSubsidebar.value = "components")
            }, _hoisted_11, 34),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                tabindex: "0",
                onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => unref(panels).setActive("search"), ["prevent"]), ["space"])),
                onClick: _cache[10] || (_cache[10] = ($event) => unref(panels).setActive("search"))
              }, _hoisted_14, 32)
            ]),
            _hoisted_15
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "layout" ? (openBlock(), createBlock(_component_LayoutsMobileSubsidebar, { key: 0 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebar, { key: 1 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "components" ? (openBlock(), createBlock(_component_ComponentsMobileSubsidebar, { key: 2 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "elements" ? (openBlock(), createBlock(_component_ElementsMobileSubsidebar, { key: 3 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_NavbarSearch, {
          theme: props.theme
        }, {
          title: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            _hoisted_16,
            createVNode(_component_ProjectsQuickDropdown),
            createBaseVNode("h1", _hoisted_17, toDisplayString(unref(viewWrapper).pageTitle), 1)
          ]),
          subtitle: withCtx(() => [
            _hoisted_18
          ]),
          toolbar: withCtx(() => [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
              default: withCtx(() => [
                createVNode(_component_ToolbarNotification),
                createBaseVNode("a", {
                  class: "toolbar-link right-panel-trigger",
                  tabindex: "0",
                  onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
                  onClick: _cache[13] || (_cache[13] = ($event) => unref(panels).setActive("activity"))
                }, _hoisted_20, 32)
              ]),
              _: 1
            }),
            createVNode(_component_LayoutSwitcher),
            createVNode(_component_UserProfileDropdown)
          ]),
          "toolbar-bottom": withCtx(() => [
            createVNode(_component_VAvatarStack, {
              avatars: users,
              limit: 3,
              size: "small"
            }),
            createVNode(_component_VDropdown, {
              spaced: "",
              right: ""
            }, {
              button: withCtx(({ open }) => [
                createVNode(_component_VIconButton, {
                  icon: "feather:plus",
                  circle: "",
                  onClick: open
                }, null, 8, ["onClick"])
              ]),
              content: withCtx(() => [
                _hoisted_21,
                _hoisted_22,
                _hoisted_23,
                _hoisted_24,
                _hoisted_25
              ]),
              _: 1
            })
          ]),
          search: withCtx(() => [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => filter.value = $event),
                    type: "text",
                    class: "input search-input",
                    placeholder: "Search records..."
                  }, null, 512), [
                    [vModelText, filter.value]
                  ]),
                  _hoisted_29,
                  filter.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "form-icon is-right",
                    tabindex: "0",
                    onKeydown: _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => filter.value = "", ["prevent"]), ["space"])),
                    onClick: _cache[16] || (_cache[16] = ($event) => filter.value = "")
                  }, _hoisted_31, 32)) : createCommentVNode("", true),
                  unref(filteredData).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (user, key) => {
                      return openBlock(), createElementBlock("div", {
                        key,
                        class: "search-result"
                      }, [
                        createVNode(_component_VAvatar, normalizeProps(guardReactiveProps(getAvatarData(user))), null, 16),
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("span", null, toDisplayString(user.username), 1),
                          createBaseVNode("span", null, toDisplayString(user.position), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          links: withCtx(() => [
            _hoisted_34
          ]),
          _: 1
        }, 8, ["theme"]),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_TaskPanel),
        createVNode(_component_VViewWrapper, { "top-nav": "" }, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_35, [
                      createBaseVNode("div", _hoisted_36, [
                        createBaseVNode("div", _hoisted_37, [
                          createBaseVNode("h1", _hoisted_38, toDisplayString(unref(viewWrapper).pageTitle), 1)
                        ]),
                        createVNode(_component_Toolbar, { class: "mobile-toolbar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ToolbarNotification),
                            createBaseVNode("a", {
                              class: "toolbar-link right-panel-trigger",
                              tabindex: "0",
                              onKeydown: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
                              onClick: _cache[18] || (_cache[18] = ($event) => unref(panels).setActive("activity"))
                            }, _hoisted_40, 32)
                          ]),
                          _: 1
                        })
                      ]),
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ])
                  ]),
                  _: 3
                }))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-586ff0fe"]]);
export { __unplugin_components_0 as default };
