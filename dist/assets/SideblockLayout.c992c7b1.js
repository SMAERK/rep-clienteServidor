import { a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, _ as __unplugin_components_9, d as _sfc_main$a, e as __unplugin_components_20, f as _sfc_main$f } from "./UserProfileDropdown.c528b802.js";
import { _ as __unplugin_components_19 } from "./VPageContent.f47e1c5e.js";
import { _ as _sfc_main$e } from "./Toolbar.cbd734d2.js";
import { _ as _sfc_main$d } from "./ToolbarNotification.e103f93b.js";
import { _ as _sfc_main$c } from "./TaskPanel.a47df64e.js";
import { _ as _sfc_main$b } from "./SearchPanel.54ae1913.js";
import { _ as _sfc_main$9 } from "./LanguagesPanel.b7b20087.js";
import { d as defineComponent, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, r as renderSlot, g as normalizeClass, h as unref, m as useI18n, aF as useWindowScroll, k as ref, B as watchEffect, z as resolveComponent, a2 as withKeys, W as withModifiers, s as createVNode, w as withCtx, a0 as useRoute, as as watchPostEffect, Y as onMounted, Q as watch, p as createBlock, y as createCommentVNode, T as Transition, t as toDisplayString, x as createTextVNode } from "./vendor.6548d360.js";
import { _ as __unplugin_components_5, a as __unplugin_components_6, b as __unplugin_components_7, c as _sfc_main$8 } from "./LayoutsMobileSubsidebar.1ae070f2.js";
import { _ as _sfc_main$7 } from "./VTag.f234897b.js";
import { u as useDarkmode } from "./index.e178843f.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { _ as _sfc_main$3 } from "./NotificationsMobileDropdown.98d004af.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VProgress.5bff1011.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VIconButton.f948e51d.js";
import "./FileCardDropdown.ed362889.js";
import "./UserPopoverContent.5da306fe.js";
import "./VBlock.64333f78.js";
import "./VIconBox.298b3a59.js";
import "./VField.b8c33879.js";
import "./VControl.eb555562.js";
import "./userPopovers.0b86b3bb.js";
import "./VModal.8c95aa77.js";
import "./layoutSwitcher.8d409c39.js";
var Sideblock_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "sidebar-block-header" };
const _hoisted_2$2 = { class: "sidebar-block-inner" };
const _hoisted_3$2 = { class: "sidebar-block-footer" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const themeClasses = computed(() => {
      switch (props.theme) {
        case "color":
          return "is-colored";
        case "curved":
          return "is-curved";
        case "color-curved":
          return "is-colored is-curved";
        default:
          return "";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["sidebar-block is-active", [unref(themeClasses)]])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          renderSlot(_ctx.$slots, "header")
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("ul", null, [
            renderSlot(_ctx.$slots, "links")
          ])
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "bottom-links")
        ])
      ], 2);
    };
  }
});
var CircularMenu_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-bars"
}, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-times"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_1$1,
  _hoisted_2$1
];
const _hoisted_4$1 = { class: "items-wrapper" };
const _hoisted_5$1 = { class: "menu-item is-flex" };
const _hoisted_6$1 = { class: "dark-mode" };
const _hoisted_7$1 = ["checked"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_12$1 = [
  _hoisted_11$1
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const panels = usePanels();
    const { locale } = useI18n();
    const { y } = useWindowScroll();
    const isOpen = ref(false);
    const isScrolling = ref(false);
    watchEffect(() => {
      if (y.value <= 30) {
        isOpen.value = false;
      }
      isScrolling.value = y.value > 30;
    });
    const localFlagSrc = computed(() => {
      switch (locale.value) {
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/icons8-portugal-96.png";
        case "en":
        default:
          return "/images/icons/flags/united-states-of-america.svg";
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        id: "circular-menu",
        class: normalizeClass([[isScrolling.value && "is-active", isOpen.value && "active"], "circular-menu"])
      }, [
        createBaseVNode("a", {
          class: "floating-btn",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isOpen.value = !isOpen.value, ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => isOpen.value = !isOpen.value)
        }, _hoisted_3$1, 32),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("label", _hoisted_6$1, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(darkmode).isDark,
                onChange: _cache[2] || (_cache[2] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
              }, null, 40, _hoisted_7$1),
              _hoisted_8$1
            ])
          ]),
          createBaseVNode("a", {
            class: "menu-item is-flex right-panel-trigger",
            tabindex: "0",
            onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => unref(panels).setActive("languages"), ["prevent"]), ["space"])),
            onClick: _cache[4] || (_cache[4] = ($event) => unref(panels).setActive("languages"))
          }, [
            createBaseVNode("img", {
              src: unref(localFlagSrc),
              alt: ""
            }, null, 8, _hoisted_9$1)
          ], 32),
          createVNode(_component_RouterLink, {
            to: { name: "sidebar-layouts-profile-notifications" },
            class: "menu-item is-flex"
          }, {
            default: withCtx(() => [
              _hoisted_10$1
            ]),
            _: 1
          }),
          createBaseVNode("a", {
            class: "menu-item is-flex",
            tabindex: "0",
            onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
            onClick: _cache[6] || (_cache[6] = ($event) => unref(panels).setActive("activity"))
          }, _hoisted_12$1, 32)
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "View settings",
    href: "#"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", null, "Vuero", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:grid"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Dashboard ");
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:briefcase"
  })
], -1);
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Projects ");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:message-circle"
  })
], -1);
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Messages ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { class: "badge" }, "3", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:book"
  })
], -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode(" Collections ");
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:users"
  })
], -1);
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Users ");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:briefcase"
  })
], -1);
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" Reports ");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-analytics-alt-1" }, null, -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", null, "Financial report", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-pie-chart" }, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("span", null, "Stocks report", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-stats-up" }, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "Growth report", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:mail"
  })
], -1);
const _hoisted_38 = /* @__PURE__ */ createTextVNode(" Inbox ");
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:settings"
  })
], -1);
const _hoisted_41 = /* @__PURE__ */ createTextVNode(" Settings ");
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-home" }, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "General", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-lock-alt" }, null, -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("span", null, "Security", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", { class: "lnil lnil-coin" }, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", null, "Transactions", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:zap"
  })
], -1);
const _hoisted_50 = /* @__PURE__ */ createTextVNode(" Starters ");
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("span", null, "Regular Sidebar", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("span", null, "Curved Sidebar", -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("span", null, "Colored Sidebar", -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("span", null, "Curved Colored", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("span", null, "Curved Colored Sidebar", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", null, "Labels Sidebar", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("span", null, "Labels Hover Sidebar", -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("span", null, "Float Sidebar", -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("hr", { class: "navbar-divider" }, null, -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("span", null, "Regular Sideblock", -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("span", null, "Curved Sideblock", -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("span", null, "Colored Sideblock", -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("span", null, "Curved Colored", -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("hr", { class: "navbar-divider" }, null, -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("span", null, "Regular Navbar", -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("span", null, "Fading Navbar", -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", null, "Colored Navbar", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("span", null, "Dropdown Navbar", -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("span", null, "Colored Dropdown", -1);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("span", null, "Clean Navbar", -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("span", null, "Clean Center Navbar", -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("span", null, "Clean Fade Navbar", -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-search"
}, null, -1);
const _hoisted_95 = [
  _hoisted_94
];
const _hoisted_96 = { class: "page-title has-text-centered" };
const _hoisted_97 = { class: "menu-toggle has-chevron" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_99 = [
  _hoisted_98
];
const _hoisted_100 = { class: "title-wrap" };
const _hoisted_101 = { class: "title is-4" };
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_103 = [
  _hoisted_102
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    defaultSideblock: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    const panels = usePanels();
    const route = useRoute();
    const openSideblockLinks = ref("");
    const isMobileSideblockOpen = ref(false);
    const isDesktopSideblockOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSideblock);
    watchPostEffect(() => {
      var _a;
      viewWrapper.setPushedBlock((_a = isDesktopSideblockOpen.value) != null ? _a : false);
    });
    onMounted(() => {
      viewWrapper.setPushed(false);
    });
    watch(() => route.fullPath, () => {
      isMobileSideblockOpen.value = false;
      if (props.closeOnChange && isDesktopSideblockOpen.value) {
        isDesktopSideblockOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$3;
      const _component_UserProfileDropdown = _sfc_main$4;
      const _component_MobileNavbar = _sfc_main$5;
      const _component_MobileSidebar = _sfc_main$6;
      const _component_LayoutsMobileSubsidebar = __unplugin_components_5;
      const _component_DashboardsMobileSubsidebar = resolveComponent("DashboardsMobileSubsidebar");
      const _component_ComponentsMobileSubsidebar = __unplugin_components_6;
      const _component_ElementsMobileSubsidebar = __unplugin_components_7;
      const _component_CircularMenu = _sfc_main$1;
      const _component_VCollapseLinks = __unplugin_components_9;
      const _component_VTag = _sfc_main$7;
      const _component_LayoutSwitcher = _sfc_main$8;
      const _component_Sideblock = _sfc_main$2;
      const _component_LanguagesPanel = _sfc_main$9;
      const _component_ActivityPanel = _sfc_main$a;
      const _component_SearchPanel = _sfc_main$b;
      const _component_TaskPanel = _sfc_main$c;
      const _component_ToolbarNotification = _sfc_main$d;
      const _component_Toolbar = _sfc_main$e;
      const _component_VPageContent = __unplugin_components_19;
      const _component_VPageContentWrapper = __unplugin_components_20;
      const _component_VViewWrapper = _sfc_main$f;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSideblockOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSideblockOpen.value = !isMobileSideblockOpen.value)
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
          "is-open": isMobileSideblockOpen.value,
          onToggle: _cache[11] || (_cache[11] = ($event) => isMobileSideblockOpen.value = !isMobileSideblockOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "aria-label": "Display dashboard content",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Display layout content",
                class: normalizeClass([activeMobileSubsidebar.value === "layout" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "layout", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "layout")
              }, _hoisted_7, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Display element content",
                class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "elements", ["prevent"]), ["space"])),
                onClick: _cache[6] || (_cache[6] = ($event) => activeMobileSubsidebar.value = "elements")
              }, _hoisted_9, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Display components content",
                class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "components", ["prevent"]), ["space"])),
                onClick: _cache[8] || (_cache[8] = ($event) => activeMobileSubsidebar.value = "components")
              }, _hoisted_11, 34)
            ]),
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
                "aria-label": "Display search panel",
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
            isMobileSideblockOpen.value && activeMobileSubsidebar.value === "layout" ? (openBlock(), createBlock(_component_LayoutsMobileSubsidebar, { key: 0 })) : isMobileSideblockOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebar, { key: 1 })) : isMobileSideblockOpen.value && activeMobileSubsidebar.value === "components" ? (openBlock(), createBlock(_component_ComponentsMobileSubsidebar, { key: 2 })) : isMobileSideblockOpen.value && activeMobileSubsidebar.value === "elements" ? (openBlock(), createBlock(_component_ElementsMobileSubsidebar, { key: 3 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_CircularMenu),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSideblockOpen.value ? (openBlock(), createBlock(_component_Sideblock, {
              key: 0,
              theme: props.theme
            }, {
              header: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "index" },
                  class: "sidebar-block-logo"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, { width: "36px" })
                  ]),
                  _: 1
                }),
                _hoisted_16
              ]),
              links: withCtx(() => [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_17,
                      _hoisted_18
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-personal-2" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_19,
                      _hoisted_20
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-human-ressources" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_21,
                      _hoisted_22,
                      _hoisted_23
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-personal-3" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_24,
                      _hoisted_25
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-profile-view" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_26,
                      _hoisted_27
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_VCollapseLinks, {
                  open: openSideblockLinks.value,
                  "onUpdate:open": _cache[12] || (_cache[12] = ($event) => openSideblockLinks.value = $event),
                  "collapse-id": "reports"
                }, {
                  header: withCtx(() => [
                    _hoisted_28,
                    _hoisted_29,
                    _hoisted_30
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-dashboards-analytics" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_31,
                        _hoisted_32
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-dashboards-company" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_33,
                        _hoisted_34
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-layouts-list-view-3" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_35,
                        _hoisted_36
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["open"]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "inbox" },
                    class: "single-link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_37,
                      _hoisted_38
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_39,
                createVNode(_component_VCollapseLinks, {
                  open: openSideblockLinks.value,
                  "onUpdate:open": _cache[13] || (_cache[13] = ($event) => openSideblockLinks.value = $event),
                  "collapse-id": "settings"
                }, {
                  header: withCtx(() => [
                    _hoisted_40,
                    _hoisted_41,
                    _hoisted_42
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-layouts" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_43,
                        _hoisted_44
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-dashboards-stocks" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_45,
                        _hoisted_46
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "sidebar-dashboards-sales" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_47,
                        _hoisted_48
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["open"]),
                createVNode(_component_VCollapseLinks, {
                  open: openSideblockLinks.value,
                  "onUpdate:open": _cache[14] || (_cache[14] = ($event) => openSideblockLinks.value = $event),
                  "collapse-id": "starters"
                }, {
                  header: withCtx(() => [
                    _hoisted_49,
                    _hoisted_50,
                    _hoisted_51
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-1" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_52,
                        _hoisted_53
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-2" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_54,
                        _hoisted_55
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-3" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_56,
                        _hoisted_57
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-4" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_58,
                        _hoisted_59
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-4" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_60,
                        _hoisted_61
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-5" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_62,
                        _hoisted_63
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-6" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_64,
                        _hoisted_65
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sidebar-blank-page-7" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_66,
                        _hoisted_67
                      ]),
                      _: 1
                    }),
                    _hoisted_68,
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sideblock-blank-page-1" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_69,
                        _hoisted_70,
                        createVNode(_component_VTag, {
                          class: "ml-2",
                          label: "v2.2",
                          color: "primary",
                          size: "tiny",
                          outlined: "",
                          curved: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sideblock-blank-page-2" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_71,
                        _hoisted_72,
                        createVNode(_component_VTag, {
                          class: "ml-2",
                          label: "v2.2",
                          color: "primary",
                          size: "tiny",
                          outlined: "",
                          curved: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sideblock-blank-page-3" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_73,
                        _hoisted_74,
                        createVNode(_component_VTag, {
                          class: "ml-2",
                          label: "v2.2",
                          color: "primary",
                          size: "tiny",
                          outlined: "",
                          curved: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-sideblock-blank-page-4" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_75,
                        _hoisted_76,
                        createVNode(_component_VTag, {
                          class: "ml-2",
                          label: "v2.2",
                          color: "primary",
                          size: "tiny",
                          outlined: "",
                          curved: ""
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_77,
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-1" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_78,
                        _hoisted_79
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-2" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_80,
                        _hoisted_81
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-3" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_82,
                        _hoisted_83
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-4" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_84,
                        _hoisted_85
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-5" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_86,
                        _hoisted_87
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-6" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_88,
                        _hoisted_89
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-7" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_90,
                        _hoisted_91
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterLink, {
                      to: { name: "starters-navbar-blank-page-8" },
                      class: "is-submenu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_92,
                        _hoisted_93
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["open"])
              ]),
              "bottom-links": withCtx(() => [
                createVNode(_component_UserProfileDropdown, { up: "" }),
                createVNode(_component_LayoutSwitcher),
                createBaseVNode("a", {
                  class: "search-link",
                  "aria-label": "Display search panel",
                  "data-content": "Search",
                  tabindex: "0",
                  onKeydown: _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => unref(panels).setActive("search"), ["prevent"]), ["space"])),
                  onClick: _cache[16] || (_cache[16] = ($event) => unref(panels).setActive("search"))
                }, _hoisted_95, 32)
              ]),
              _: 1
            }, 8, ["theme"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_SearchPanel),
        createVNode(_component_TaskPanel),
        createVNode(_component_VViewWrapper, { full: "" }, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_96, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => isDesktopSideblockOpen.value = !isDesktopSideblockOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[18] || (_cache[18] = ($event) => isDesktopSideblockOpen.value = !isDesktopSideblockOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_97, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSideblockOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_99, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_100, [
                        createBaseVNode("h1", _hoisted_101, toDisplayString(unref(viewWrapper).pageTitle), 1)
                      ]),
                      createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                        default: withCtx(() => [
                          createVNode(_component_ToolbarNotification),
                          createBaseVNode("a", {
                            class: "toolbar-link right-panel-trigger",
                            "aria-label": "View activity panel",
                            tabindex: "0",
                            onKeydown: _cache[19] || (_cache[19] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
                            onClick: _cache[20] || (_cache[20] = ($event) => unref(panels).setActive("activity"))
                          }, _hoisted_103, 32)
                        ]),
                        _: 1
                      })
                    ]),
                    renderSlot(_ctx.$slots, "default")
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
export { _sfc_main as default };
