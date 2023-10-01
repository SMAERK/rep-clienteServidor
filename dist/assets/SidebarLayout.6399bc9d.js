import { _ as __unplugin_components_9, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$b, e as __unplugin_components_20, f as _sfc_main$f } from "./UserProfileDropdown.c528b802.js";
import { _ as __unplugin_components_19 } from "./VPageContent.f47e1c5e.js";
import { _ as _sfc_main$e } from "./Toolbar.cbd734d2.js";
import { _ as _sfc_main$d } from "./TaskPanel.a47df64e.js";
import { _ as _sfc_main$c } from "./SearchPanel.54ae1913.js";
import { _ as _sfc_main$a } from "./LanguagesPanel.b7b20087.js";
import { d as defineComponent, m as useI18n, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, h as unref, a2 as withKeys, W as withModifiers, s as createVNode, w as withCtx, $ as useRouter, p as createBlock, y as createCommentVNode, x as createTextVNode, a0 as useRoute, as as watchPostEffect, Q as watch, g as normalizeClass, at as KeepAlive, T as Transition, r as renderSlot } from "./vendor.6548d360.js";
import { a as useUserSession } from "./index.e178843f.js";
import { _ as _sfc_main$9 } from "./Sidebar.14a911d1.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
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
var UsersSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "sidebar-panel is-generic" };
const _hoisted_2$5 = { class: "subpanel-header" };
const _hoisted_3$5 = { class: "no-mb" };
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_4$5
];
const _hoisted_6$5 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-user mr-3",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    ref("");
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("h3", _hoisted_3$5, toDisplayString(unref(t)("sidebar.titles.users")), 1),
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$5, 32)
        ]),
        createBaseVNode("div", _hoisted_6$5, [
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: `/users/management/` }, {
                default: withCtx(() => [
                  _hoisted_7$5,
                  createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.userManagement")), 1)
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
var ReportSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "sidebar-panel is-generic" };
const _hoisted_2$4 = { class: "subpanel-header" };
const _hoisted_3$4 = { class: "no-mb" };
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_4$4
];
const _hoisted_6$4 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-clipboard mr-3",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_8$4 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-clipboard mr-3",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    ref("");
    useRouter();
    let rout = `/reports`;
    let rout2 = `/reports/closedTurns`;
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("h3", _hoisted_3$4, toDisplayString(unref(t)("sidebar.titles.reports")), 1),
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$4, 32)
        ]),
        createBaseVNode("div", _hoisted_6$4, [
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                to: unref(rout),
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.isVisibleSelectRegion())
              }, {
                default: withCtx(() => [
                  _hoisted_7$4,
                  createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reportsConsult")), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])
          ]),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                to: unref(rout2),
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.isVisibleSelectRegion())
              }, {
                default: withCtx(() => [
                  _hoisted_8$4,
                  createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reportsConsultClosedTurn")), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])
          ])
        ])
      ]);
    };
  }
});
var TracingSubsidebarMex_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "sidebar-panel is-generic" };
const _hoisted_2$3 = { class: "subpanel-header" };
const _hoisted_3$3 = { class: "no-mb" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode(" Grupo Herradura ");
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-empty-file",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-clipboard",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    const openSubsidebarLinks = ref("");
    const userSession = useUserSession();
    JSON.parse(window.localStorage.user).role;
    const hasPermissions = (permissionsCode) => {
      return userSession.hasPermissions(permissionsCode);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("h3", _hoisted_3$3, toDisplayString(unref(t)("sidebar.titles.tracing")), 1),
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$3, 32)
        ]),
        createBaseVNode("div", _hoisted_6$3, [
          createBaseVNode("ul", null, [
            hasPermissions("GRUPO HERRADURA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 0,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "grupoherradura"
            }, {
              header: withCtx(() => [
                _hoisted_7$3,
                _hoisted_8$3
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/herradura/tracing/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$3,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.tracingFileLoad")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/herradura/summary/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_10$3,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.summary")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
var DashboardsSubsidebarBra_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "sidebar-panel is-generic" };
const _hoisted_2$2 = { class: "subpanel-header" };
const _hoisted_3$2 = { class: "no-mb" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(" Clube Mercosul ");
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createTextVNode(" Hospital Card ");
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_13$2 = /* @__PURE__ */ createTextVNode(" Iex ");
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_16$2 = /* @__PURE__ */ createTextVNode(" Minimed ");
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("span", null, "Nova Cota\xE7\xE3o", -1);
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("span", null, "Relat\xF3rio", -1);
const _hoisted_22$2 = /* @__PURE__ */ createTextVNode(" Nema ");
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_25$1 = /* @__PURE__ */ createTextVNode(" Sollo / QualityLife ");
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode(" SuperNova ");
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createTextVNode(" Uello ");
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34$1 = /* @__PURE__ */ createTextVNode(" Autogest\xE3o ");
const _hoisted_35$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-add-files",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37$1 = /* @__PURE__ */ createTextVNode(" Pax ");
const _hoisted_38$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_39$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_40$1 = /* @__PURE__ */ createTextVNode(" Qualivida ");
const _hoisted_41$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_42$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_43$1 = /* @__PURE__ */ createTextVNode(" James ");
const _hoisted_44$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_45$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const openSubsidebarLinks = ref("");
    const { locale, t } = useI18n();
    const userSession = useUserSession();
    JSON.parse(window.localStorage.user).role;
    const hasPermissions = (permissionsCode) => {
      return userSession.hasPermissions(permissionsCode);
    };
    const isVisibleSelectRegion = () => {
      const NewUser = JSON.parse(localStorage.getItem("user") || "");
      NewUser.isVisibleSelectRegional = "false";
      useUserSession().setUser(NewUser);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("h3", _hoisted_3$2, toDisplayString(unref(t)("sidebar.titles.policies")), 1),
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$2, 32)
        ]),
        createBaseVNode("div", _hoisted_6$2, [
          createBaseVNode("ul", null, [
            hasPermissions("CLUBE MERCOSUL") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 0,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "korsa",
              onClick: _cache[3] || (_cache[3] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_7$2,
                _hoisted_8$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/korsa/list`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("HOSPITAL CARD") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 1,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[4] || (_cache[4] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "hospitalcard",
              onClick: _cache[5] || (_cache[5] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_10$2,
                _hoisted_11$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/hospitalCard/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_12$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("IEX") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 2,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[6] || (_cache[6] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "iex",
              onClick: _cache[7] || (_cache[7] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_13$2,
                _hoisted_14$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/iex/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("MINIMED") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 3,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[8] || (_cache[8] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "minimed",
              onClick: _cache[9] || (_cache[9] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_16$2,
                _hoisted_17$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/minimed/new/form`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_18$2,
                    _hoisted_19$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/minimed/new/certificates/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_20$2,
                    _hoisted_21$2
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("NEMA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 4,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[10] || (_cache[10] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "nema",
              onClick: _cache[11] || (_cache[11] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_22$2,
                _hoisted_23$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/nema/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_24$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("SOLLO/QUALITYLIFE") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 5,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[12] || (_cache[12] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sollo",
              onClick: _cache[13] || (_cache[13] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_25$1,
                _hoisted_26$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/solloQualityLife/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_27$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("SUPERNOVA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 6,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[14] || (_cache[14] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "supernova",
              onClick: _cache[15] || (_cache[15] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_28$1,
                _hoisted_29$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/superNova/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_30$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("UELLO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 7,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[16] || (_cache[16] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "uello",
              onClick: _cache[17] || (_cache[17] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_31$1,
                _hoisted_32$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/uello/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_33$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AUTO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 8,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[18] || (_cache[18] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "Autogest\xE3o",
              onClick: _cache[19] || (_cache[19] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_34$1,
                _hoisted_35$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/auto-management`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_36$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.novo")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("PAX") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 9,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[20] || (_cache[20] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "pax",
              onClick: _cache[21] || (_cache[21] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_37$1,
                _hoisted_38$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/pax/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_39$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("QUALIVIDA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 10,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[22] || (_cache[22] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "qualivida",
              onClick: _cache[23] || (_cache[23] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_40$1,
                _hoisted_41$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/qualivida/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_42$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("QUALIVIDA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 11,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[24] || (_cache[24] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "JAMES",
              onClick: _cache[25] || (_cache[25] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_43$1,
                _hoisted_44$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/james`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_45$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
var DashboardsSubsidebarMex_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-generic" };
const _hoisted_2$1 = { class: "subpanel-header" };
const _hoisted_3$1 = { class: "no-mb" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Liverpool TMK ");
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode(" Liverpool TA ");
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" Costco ");
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode(" AP Mercados Masivos Tradicionales ");
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$1 = /* @__PURE__ */ createTextVNode(" AutoMarsh ");
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" Grupo Chopo ");
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" Suburbia ");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" Aon Explorer ");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-dollar-card",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37 = /* @__PURE__ */ createTextVNode(" Hogar Flex ");
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createTextVNode(" Acceso Salud ");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_43 = /* @__PURE__ */ createTextVNode(" Empleados AIG ");
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" Federacion Mexicana ");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_49 = /* @__PURE__ */ createTextVNode(" Datastudio Hogar ");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    const openSubsidebarLinks = ref("");
    const userSession = useUserSession();
    const rolUser = JSON.parse(window.localStorage.user).role;
    const hasPermissions = (permissionsCode) => {
      return userSession.hasPermissions(permissionsCode);
    };
    const isVisibleSelectRegion = () => {
      const NewUser = JSON.parse(localStorage.getItem("user") || "");
      NewUser.isVisibleSelectRegional = "false";
      useUserSession().setUser(NewUser);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("h3", _hoisted_3$1, toDisplayString(unref(t)("sidebar.titles.policies")), 1),
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$1, 32)
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("ul", null, [
            hasPermissions("LIVERPOOL") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 0,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => openSubsidebarLinks.value = $event),
              onClick: _cache[3] || (_cache[3] = ($event) => isVisibleSelectRegion()),
              "collapse-id": "liverpool"
            }, {
              header: withCtx(() => [
                _hoisted_7$1,
                _hoisted_8$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/liverpool/certificates/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.InsuredConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("LIVERPOOL-TA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 1,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[4] || (_cache[4] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "liverpool-ta",
              onClick: _cache[5] || (_cache[5] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_10$1,
                _hoisted_11$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/liverpool-ta/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_12$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.InsuredConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("COSTCO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 2,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[6] || (_cache[6] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "costco",
              onClick: _cache[7] || (_cache[7] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_13$1,
                _hoisted_14$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/cotsco/quote/825`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AP MERCADOS MASIVOS TRADICIONALES") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 3,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[8] || (_cache[8] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise",
              onClick: _cache[9] || (_cache[9] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_16$1,
                _hoisted_17$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/sise/policies/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_18$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.historyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/sise/products/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.productsConsult")), 1)
                  ]),
                  _: 1
                }),
                unref(rolUser) != "visor" && unref(rolUser) != "broker" ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: `/sise/sales/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_20$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.saleGeneration")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AUTOMARSH") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 4,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[10] || (_cache[10] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "automarsh",
              onClick: _cache[11] || (_cache[11] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_21$1,
                _hoisted_22$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/automarsh/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_23$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/automarsh/payments/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_24,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.paymentsConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/automarsh/reports/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_25,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("GRUPO CHOPO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 5,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[12] || (_cache[12] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "grupochopo",
              onClick: _cache[13] || (_cache[13] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_26,
                _hoisted_27
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/grupochopo/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_28,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("SUBURBIA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 6,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[14] || (_cache[14] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "suburbia",
              onClick: _cache[15] || (_cache[15] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_29,
                _hoisted_30
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/suburbia/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_31,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AON EXPLORER") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 7,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[16] || (_cache[16] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "aon",
              onClick: _cache[17] || (_cache[17] = ($event) => isVisibleSelectRegion())
            }, {
              header: withCtx(() => [
                _hoisted_32,
                _hoisted_33
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_34,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/payments/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_35,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.paymentConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/reports/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_36,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("HOGAR") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 8,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[18] || (_cache[18] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "hogar"
            }, {
              header: withCtx(() => [
                _hoisted_37,
                _hoisted_38
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/hogar/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_39,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("ACCESO SALUD") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 9,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[19] || (_cache[19] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "salud"
            }, {
              header: withCtx(() => [
                _hoisted_40,
                _hoisted_41
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/salud/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_42,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("EMPLEADOS AIG") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 10,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[20] || (_cache[20] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "empleados"
            }, {
              header: withCtx(() => [
                _hoisted_43,
                _hoisted_44
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/empleados/reports`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_45,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("FEDERACION MEX") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 11,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[21] || (_cache[21] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "federacion"
            }, {
              header: withCtx(() => [
                _hoisted_46,
                _hoisted_47
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/federacion/reports`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_48,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("DATASTUDIO HOGAR") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 12,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[22] || (_cache[22] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "empleados"
            }, {
              header: withCtx(() => [
                _hoisted_49,
                _hoisted_50
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/datastudiohogar/reports`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_51,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
var SidebarLayout_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = {
  id: "open-messages",
  href: "/sidebar/dashboards/banking-3",
  "data-content": "Home"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  "aria-label": "View dashboards",
  class: "iconify sidebar-svg",
  tabindex: "0",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = { class: "icon-text hoverText" };
const _hoisted_8 = { class: "has-text-centered" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon",
  "data-icon": "feather:trending-up"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11 = { class: "icon-text hoverText" };
const _hoisted_12 = { class: "has-text-centered" };
const _hoisted_13 = ["data-content"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon",
  "data-icon": "feather:users"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_16 = { class: "icon-text hoverText" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("li", { class: "is-hidden-touch" }, null, -1);
const _hoisted_18 = { class: "page-title has-text-centered" };
const _hoisted_19 = { class: "menu-toggle has-chevron" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = { class: "title-wrap" };
const _hoisted_23 = { class: "title is-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "color" },
    defaultSidebar: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { locale, t } = useI18n();
    ((_a = useUserSession().user) == null ? void 0 : _a.isVisibleSelectRegional) == "true" ? true : false;
    useUserSession();
    const viewWrapper = useViewWrapper();
    usePanels();
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    const selectedRegion = ref("");
    ref([]);
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value;
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    watchPostEffect(() => {
      var _a2;
      viewWrapper.setPushed((_a2 = isDesktopSidebarOpen.value) != null ? _a2 : false);
    });
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
      if (props.closeOnChange && isDesktopSidebarOpen.value) {
        isDesktopSidebarOpen.value = false;
      }
    });
    watch(() => selectedRegion.value, () => {
      const user = JSON.parse(localStorage.getItem("user") || "");
      user.country = parseInt(selectedRegion.value);
      useUserSession().setUser(user);
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_UserProfileDropdown = _sfc_main$6;
      const _component_MobileNavbar = _sfc_main$7;
      const _component_MobileSidebar = _sfc_main$8;
      const _component_Sidebar = _sfc_main$9;
      const _component_DashboardsSubsidebarMex = _sfc_main$1;
      const _component_DashboardsSubsidebarBra = _sfc_main$2;
      const _component_TracingSubsidebarMex = _sfc_main$3;
      const _component_ReportSubsidebar = _sfc_main$4;
      const _component_UsersSubsidebar = _sfc_main$5;
      const _component_LanguagesPanel = _sfc_main$a;
      const _component_ActivityPanel = _sfc_main$b;
      const _component_SearchPanel = _sfc_main$c;
      const _component_TaskPanel = _sfc_main$d;
      const _component_Toolbar = _sfc_main$e;
      const _component_VPageContent = __unplugin_components_19;
      const _component_VPageContentWrapper = __unplugin_components_20;
      const _component_VViewWrapper = _sfc_main$f;
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
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[1] || (_cache[1] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => []),
          "bottom-links": withCtx(() => []),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_Sidebar, {
          theme: "color",
          "is-open": isDesktopSidebarOpen.value,
          style: { "width": "auto", "text-align": "center" }
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", _hoisted_4, [
                _hoisted_5,
                _hoisted_6,
                createBaseVNode("span", _hoisted_7, toDisplayString(unref(t)("sidebar.titles.home")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_8, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "reports" && "is-active"]),
                "data-content": "Reports",
                "aria-label": "View Reports",
                tabindex: "0",
                onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => switchSidebar("reports"), ["prevent"]), ["space"])),
                onClick: _cache[3] || (_cache[3] = ($event) => switchSidebar("reports"))
              }, [
                _hoisted_9,
                _hoisted_10,
                createBaseVNode("span", _hoisted_11, toDisplayString(unref(t)("sidebar.titles.reports")), 1)
              ], 34)
            ]),
            createBaseVNode("li", _hoisted_12, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "users" && "is-active"]),
                "data-content": unref(t)("sidebar.titles.users"),
                "aria-label": "View Users",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => switchSidebar("users"), ["prevent"]), ["space"])),
                onClick: _cache[5] || (_cache[5] = ($event) => switchSidebar("users"))
              }, [
                _hoisted_14,
                _hoisted_15,
                createBaseVNode("span", _hoisted_16, toDisplayString(unref(t)("sidebar.titles.users")), 1)
              ], 42, _hoisted_13)
            ])
          ]),
          "bottom-links": withCtx(() => [
            _hoisted_17,
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            (openBlock(), createBlock(KeepAlive, null, [
              isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard-mex" ? (openBlock(), createBlock(_component_DashboardsSubsidebarMex, {
                key: 0,
                onClose: _cache[6] || (_cache[6] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard-bra" ? (openBlock(), createBlock(_component_DashboardsSubsidebarBra, {
                key: 1,
                onClose: _cache[7] || (_cache[7] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "tracing-mex" ? (openBlock(), createBlock(_component_TracingSubsidebarMex, {
                key: 2,
                onClose: _cache[8] || (_cache[8] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "reports" ? (openBlock(), createBlock(_component_ReportSubsidebar, {
                key: 3,
                onClose: _cache[9] || (_cache[9] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "users" ? (openBlock(), createBlock(_component_UsersSubsidebar, {
                key: 4,
                onClose: _cache[10] || (_cache[10] = ($event) => isDesktopSidebarOpen.value = false)
              })) : createCommentVNode("", true)
            ], 1024))
          ]),
          _: 1
        }),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_SearchPanel),
        createVNode(_component_TaskPanel),
        createVNode(_component_VViewWrapper, null, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[12] || (_cache[12] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_19, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_21, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("h1", _hoisted_23, toDisplayString(unref(viewWrapper).pageTitle), 1)
                      ]),
                      createVNode(_component_Toolbar, { class: "desktop-toolbar" })
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
