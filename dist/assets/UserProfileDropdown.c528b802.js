import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass, h as unref, k as ref, q as createBaseVNode, a2 as withKeys, W as withModifiers, s as createVNode, ae as createStaticVNode, a0 as useRoute, e as computed, j as h, T as Transition, m as useI18n, z as resolveComponent, w as withCtx, t as toDisplayString, p as createBlock, y as createCommentVNode, x as createTextVNode, au as resolveDirective, a3 as withDirectives, F as Fragment, $ as useRouter } from "./vendor.6548d360.js";
import { _ as _export_sfc, a as useUserSession, b as _sfc_main$d } from "./index.e178843f.js";
import { _ as _sfc_main$c } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$b } from "./VProgress.5bff1011.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { _ as _sfc_main$f } from "./VDropdown.38fc5e7d.js";
import { _ as _sfc_main$e } from "./VIconButton.f948e51d.js";
var VViewWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    topNav: { type: Boolean },
    full: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["view-wrapper", [
          props.topNav && "has-top-nav",
          props.full && "view-wrapper-full",
          unref(viewWrapper).isPushed && "is-pushed-full",
          unref(viewWrapper).isPushedBlock && "is-pushed-block"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var VPageContentWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {};
const _hoisted_1$8 = { class: "page-content-wrapper" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_20 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
var ActivityPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$7 = { class: "right-panel" };
const _hoisted_2$7 = { class: "right-panel-head" };
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("h3", null, "Activity", -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_5$7 = [
  _hoisted_4$7
];
const _hoisted_6$6 = { class: "tabs-wrapper is-triple-slider is-squared" };
const _hoisted_7$5 = { class: "tabs-inner" };
const _hoisted_8$5 = { class: "tabs" };
const _hoisted_9$4 = /* @__PURE__ */ createBaseVNode("span", null, "Team", -1);
const _hoisted_10$3 = [
  _hoisted_9$4
];
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("span", null, "Projects", -1);
const _hoisted_12$3 = [
  _hoisted_11$3
];
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("span", null, "Schedule", -1);
const _hoisted_14$3 = [
  _hoisted_13$3
];
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_16$3 = { class: "right-panel-body" };
const _hoisted_17$3 = /* @__PURE__ */ createStaticVNode('<div class="team-card"><div class="meta"><span>Joshua S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Las Vegas, NV </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Melany W.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> San Jose, CA </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Esteban C.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Miami, FL </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Tara S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> New York, NY </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>', 4);
const _hoisted_21$3 = [
  _hoisted_17$3
];
const _hoisted_22$3 = { class: "project-card" };
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("div", { class: "project-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "The slicer project"),
    /* @__PURE__ */ createBaseVNode("span", null, "getslicer.io")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-right"
    })
  ])
], -1);
const _hoisted_24$2 = { class: "project-foot" };
const _hoisted_25$2 = { class: "foot-stats" };
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("span", null, "5 / 24", -1);
const _hoisted_27$2 = { class: "avatar-stack" };
const _hoisted_28$2 = { class: "project-card" };
const _hoisted_29$2 = /* @__PURE__ */ createBaseVNode("div", { class: "project-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Metamovies reworked"),
    /* @__PURE__ */ createBaseVNode("span", null, "metamovies.co")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-right"
    })
  ])
], -1);
const _hoisted_30$2 = { class: "project-foot" };
const _hoisted_31$2 = { class: "foot-stats" };
const _hoisted_32$2 = /* @__PURE__ */ createBaseVNode("span", null, "28 / 31", -1);
const _hoisted_33$1 = { class: "avatar-stack" };
const _hoisted_34$1 = { class: "project-card" };
const _hoisted_35$1 = /* @__PURE__ */ createBaseVNode("div", { class: "project-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Fast Pizza redesign"),
    /* @__PURE__ */ createBaseVNode("span", null, "fastpizza.com")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-right"
    })
  ])
], -1);
const _hoisted_36$1 = { class: "project-foot" };
const _hoisted_37$1 = { class: "foot-stats" };
const _hoisted_38$1 = /* @__PURE__ */ createBaseVNode("span", null, "25 / 39", -1);
const _hoisted_39$1 = { class: "avatar-stack" };
const _hoisted_40$1 = { class: "icon-timeline" };
const _hoisted_41$1 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-item" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:phone-call"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
    /* @__PURE__ */ createBaseVNode("p", null, "Call Danny at Colby's"),
    /* @__PURE__ */ createBaseVNode("span", null, "Today - 11:30am")
  ])
], -1);
const _hoisted_42$1 = { class: "timeline-item" };
const _hoisted_43$1 = { class: "timeline-icon" };
const _hoisted_44$1 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Meeting with Alice"),
  /* @__PURE__ */ createBaseVNode("span", null, "Today - 01:00pm")
], -1);
const _hoisted_45 = /* @__PURE__ */ createStaticVNode('<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div>', 5);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    const activeTab = ref("team");
    return (_ctx, _cache) => {
      const _component_VProgress = _sfc_main$b;
      const _component_VAvatar = _sfc_main$c;
      return openBlock(), createElementBlock("div", {
        id: "activity-panel",
        class: normalizeClass([[unref(panels).active === "activity" && "is-active"], "right-panel-wrapper is-activity"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).close())
        }, null, 32),
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("div", _hoisted_2$7, [
            _hoisted_3$7,
            createBaseVNode("a", {
              class: "close-panel",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).close())
            }, _hoisted_5$7, 32)
          ]),
          createBaseVNode("div", _hoisted_6$6, [
            createBaseVNode("div", _hoisted_7$5, [
              createBaseVNode("div", _hoisted_8$5, [
                createBaseVNode("ul", null, [
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "team" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      tabindex: "0",
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeTab.value = "team", ["prevent"]), ["space"])),
                      onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "team")
                    }, _hoisted_10$3, 32)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "projects" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      tabindex: "0",
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => activeTab.value = "projects", ["prevent"]), ["space"])),
                      onClick: _cache[7] || (_cache[7] = ($event) => activeTab.value = "projects")
                    }, _hoisted_12$3, 32)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "schedule" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      tabindex: "0",
                      onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => activeTab.value = "schedule", ["prevent"]), ["space"])),
                      onClick: _cache[9] || (_cache[9] = ($event) => activeTab.value = "schedule")
                    }, _hoisted_14$3, 32)
                  ], 2),
                  _hoisted_15$3
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16$3, [
              createBaseVNode("div", {
                id: "team-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "team" && "is-active"]])
              }, _hoisted_21$3, 2),
              createBaseVNode("div", {
                id: "projects-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "projects" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_22$3, [
                  _hoisted_23$2,
                  createBaseVNode("div", _hoisted_24$2, [
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 31
                    }),
                    createBaseVNode("div", _hoisted_25$2, [
                      _hoisted_26$2,
                      createBaseVNode("div", _hoisted_27$2, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/5.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/images/avatars/svg/vuero-1.svg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_28$2, [
                  _hoisted_29$2,
                  createBaseVNode("div", _hoisted_30$2, [
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 84
                    }),
                    createBaseVNode("div", _hoisted_31$2, [
                      _hoisted_32$2,
                      createBaseVNode("div", _hoisted_33$1, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/18.jpg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_34$1, [
                  _hoisted_35$1,
                  createBaseVNode("div", _hoisted_36$1, [
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 60
                    }),
                    createBaseVNode("div", _hoisted_37$1, [
                      _hoisted_38$1,
                      createBaseVNode("div", _hoisted_39$1, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/25.jpg"
                        })
                      ])
                    ])
                  ])
                ])
              ], 2),
              createBaseVNode("div", {
                id: "schedule-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "schedule" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_40$1, [
                  _hoisted_41$1,
                  createBaseVNode("div", _hoisted_42$1, [
                    createBaseVNode("div", _hoisted_43$1, [
                      createBaseVNode("img", {
                        class: "avatar",
                        src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                        alt: "",
                        onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_44$1
                  ]),
                  _hoisted_45
                ])
              ], 2)
            ])
          ])
        ])
      ], 2);
    };
  }
});
var VCollapseLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent({
  props: {
    open: {
      type: [Boolean, String],
      default: void 0
    },
    collapseId: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(props, { slots, emit }) {
    var _a, _b, _c;
    const route = useRoute();
    const isOpenDefault = ref(props.open === true);
    const hasNestedLinkActive = ref(false);
    const isOpen = computed({
      get: () => {
        if (props.collapseId === void 0) {
          return isOpenDefault.value;
        }
        return props.collapseId === props.open;
      },
      set: (value) => {
        if (props.collapseId === void 0) {
          isOpenDefault.value = value;
        }
        if (props.collapseId === props.open) {
          emit("update:open");
        } else {
          emit("update:open", props.collapseId);
        }
      }
    });
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    const header = (_a = slots.header) == null ? void 0 : _a.call(slots);
    const slotContent = (_c = (_b = slots.default) == null ? void 0 : _b.call(slots)) != null ? _c : [];
    const currentRoute = route.name;
    const links = slotContent.map((child) => {
      var _a2, _b2;
      if (((_b2 = (_a2 = child.props) == null ? void 0 : _a2.to) == null ? void 0 : _b2.name) && currentRoute === child.props.to.name) {
        hasNestedLinkActive.value = true;
      }
      return h("li", {}, child);
    });
    return () => {
      const parentLink = h("a", {
        tabindex: 0,
        class: "parent-link",
        onClick: (e) => {
          e.preventDefault();
          toggle();
        },
        onKeydown(e) {
          if (e.code === "Space") {
            e.preventDefault();
            e.stopPropagation();
            toggle();
          }
        }
      }, header);
      const collapseWrap = h("div", { class: "collapse-wrap" }, parentLink);
      const content = hasNestedLinkActive.value || isOpen.value ? h("ul", {}, links) : void 0;
      return h("li", {
        class: [
          "collapse-links has-children",
          (hasNestedLinkActive.value || isOpen.value) && "active"
        ]
      }, [
        collapseWrap,
        h(Transition, {
          name: "collapse-links-transition",
          mode: "out-in",
          class: "collapse-content"
        }, {
          default() {
            return content;
          }
        })
      ]);
    };
  }
});
var __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-deeb3e4a"]]);
const _hoisted_1$6 = { class: "mobile-subsidebar" };
const _hoisted_2$6 = { class: "inner" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Dashboards")
], -1);
const _hoisted_4$6 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-user mr-3",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    ref("");
    useUserSession();
    JSON.parse(window.localStorage.user).role;
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          _hoisted_3$6,
          createBaseVNode("ul", _hoisted_4$6, [
            createVNode(_component_RouterLink, { to: `/users/management/` }, {
              default: withCtx(() => [
                _hoisted_5$6,
                createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.userManagement")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "mobile-subsidebar" };
const _hoisted_2$5 = { class: "inner" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Dashboards")
], -1);
const _hoisted_4$5 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-clipboard mr-3",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_6$5 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-clipboard mr-3",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_8$4 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-clipboard mr-3",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    ref("");
    useUserSession();
    JSON.parse(window.localStorage.user).role;
    const country = JSON.parse(window.localStorage.user).country;
    let rout = `/reports/bra/`;
    switch (country) {
      case 1:
        rout = `/reports/bra/`;
        break;
      case 2:
        rout = `/reports/mex/`;
        break;
    }
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          _hoisted_3$5,
          createBaseVNode("ul", _hoisted_4$5, [
            createVNode(_component_RouterLink, { to: unref(rout) }, {
              default: withCtx(() => [
                _hoisted_5$5,
                createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reportsConsult")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createBaseVNode("ul", _hoisted_6$5, [
            createVNode(_component_RouterLink, { to: unref(rout) }, {
              default: withCtx(() => [
                _hoisted_7$4,
                createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reportsConsultTurn")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createBaseVNode("ul", _hoisted_8$4, [
            createVNode(_component_RouterLink, { to: unref(rout) }, {
              default: withCtx(() => [
                _hoisted_9$3,
                createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reportsConsultClosedTurnedTurn")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "mobile-subsidebar" };
const _hoisted_2$4 = { class: "inner" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Dashboards")
], -1);
const _hoisted_4$4 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$4 = /* @__PURE__ */ createTextVNode(" Nema ");
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_8$3 = /* @__PURE__ */ createTextVNode(" Clube Mercosul ");
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_11$2 = /* @__PURE__ */ createTextVNode(" Minimed ");
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_14$2 = /* @__PURE__ */ createTextVNode(" Iex ");
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_17$2 = /* @__PURE__ */ createTextVNode(" Nema ");
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_20$2 = /* @__PURE__ */ createTextVNode(" Uello ");
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("ul", _hoisted_4$4, [
            hasPermissions("NEMA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 0,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[0] || (_cache[0] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_5$4,
                _hoisted_6$4
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/nema/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$3,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("CLUBE MERCOSUL") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 1,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[1] || (_cache[1] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_8$3,
                _hoisted_9$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/korsa/list`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_10$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("MINIMED") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 2,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_11$2,
                _hoisted_12$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/minimed/quotes/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("IEX") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 3,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[3] || (_cache[3] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_14$2,
                _hoisted_15$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/iex/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_16$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("NEMA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 4,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[4] || (_cache[4] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_17$2,
                _hoisted_18$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/nema/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("UELLO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 5,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[5] || (_cache[5] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_20$2,
                _hoisted_21$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/uello/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_22$2,
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
const _hoisted_1$3 = { class: "mobile-subsidebar" };
const _hoisted_2$3 = {
  class: "inner",
  style: { "width": "auto" }
};
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Dashboards")
], -1);
const _hoisted_4$3 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode(" Liverpool ");
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createTextVNode(" Costco ");
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" AP Mercados Masivos Tradicionales ");
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode(" AutoMarsh ");
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
const _hoisted_21$1 = /* @__PURE__ */ createTextVNode(" Grupo Chopo ");
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createTextVNode(" Suburbia ");
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27$1 = { class: "icon-text" };
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode(" Aon Explorer ");
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-dollar-card",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_33 = /* @__PURE__ */ createTextVNode(" Hogar Flex ");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" Acceso Salud ");
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_39 = /* @__PURE__ */ createTextVNode(" Empleados AIG ");
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createTextVNode(" Datastudio Hogar ");
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnir lnir-certificate",
  "aria-hidden": "true"
}, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale, t } = useI18n();
    const openSubsidebarLinks = ref("");
    const userSession = useUserSession();
    const rolUser = JSON.parse(window.localStorage.user).role;
    const hasPermissions = (permissionsCode) => {
      return userSession.hasPermissions(permissionsCode);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("ul", _hoisted_4$3, [
            hasPermissions("LIVERPOOL") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 0,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[0] || (_cache[0] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "liverpool"
            }, {
              header: withCtx(() => [
                _hoisted_5$3,
                _hoisted_6$3
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/liverpool/certificates/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$2,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.InsuredConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("COSTCO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 1,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[1] || (_cache[1] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "costco"
            }, {
              header: withCtx(() => [
                _hoisted_8$2,
                _hoisted_9$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/cotsco/quote/825`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_10$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AP MERCADOS MASIVOS TRADICIONALES") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 2,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "sise"
            }, {
              header: withCtx(() => [
                _hoisted_11$1,
                _hoisted_12$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/sise/policies/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.historyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/sise/products/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_14$1,
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
                    _hoisted_15$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.saleGeneration")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AUTOMARSH") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 3,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[3] || (_cache[3] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "automarsh"
            }, {
              header: withCtx(() => [
                _hoisted_16$1,
                _hoisted_17$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/automarsh/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_18$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/automarsh/payments/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.paymentsConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/automarsh/reports/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_20$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("GRUPO CHOPO") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 4,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[4] || (_cache[4] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "grupochopo"
            }, {
              header: withCtx(() => [
                _hoisted_21$1,
                _hoisted_22$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/grupochopo/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_23$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("SUBURBIA") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 5,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[5] || (_cache[5] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "suburbia"
            }, {
              header: withCtx(() => [
                _hoisted_24$1,
                _hoisted_25$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/suburbia/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_26$1,
                    createBaseVNode("span", _hoisted_27$1, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("AON EXPLORER") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 6,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[6] || (_cache[6] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "aon"
            }, {
              header: withCtx(() => [
                _hoisted_28$1,
                _hoisted_29$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_30$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/payments/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_31$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.paymentConsult")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: `/aonExplorer/reports/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_32$1,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("HOGAR") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 7,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[7] || (_cache[7] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "hogar"
            }, {
              header: withCtx(() => [
                _hoisted_33,
                _hoisted_34
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/hogar/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_35,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("ACCESO SALUD") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 8,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[8] || (_cache[8] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "salud"
            }, {
              header: withCtx(() => [
                _hoisted_36,
                _hoisted_37
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/salud/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_38,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.policyConsult")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("EMPLEADOS AIG") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 9,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[9] || (_cache[9] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "empleados"
            }, {
              header: withCtx(() => [
                _hoisted_39,
                _hoisted_40
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/empleados/reports`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_41,
                    createBaseVNode("span", null, toDisplayString(unref(t)("sidebar.subItems.reports")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["open"])) : createCommentVNode("", true),
            hasPermissions("DATASTUDIO HOGAR") ? (openBlock(), createBlock(_component_VCollapseLinks, {
              key: 10,
              open: openSubsidebarLinks.value,
              "onUpdate:open": _cache[10] || (_cache[10] = ($event) => openSubsidebarLinks.value = $event),
              "collapse-id": "hogar"
            }, {
              header: withCtx(() => [
                _hoisted_42,
                _hoisted_43
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: `/hogar/list/`,
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_44,
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
var MobileSidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "inner has-text-centered" };
const _hoisted_2$2 = { class: "icon-side-menu mx-4" };
const _hoisted_3$2 = {
  "aria-label": "Back to homepage",
  href: "/"
};
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify icon",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = { class: "mx-2" };
const _hoisted_7$1 = {
  key: 0,
  class: "mt-3"
};
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon is-5",
  "data-icon": "feather:shield"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "mx-2 icon-text" }, "P\xF3lizas", -1);
const _hoisted_11 = [
  _hoisted_8$1,
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = {
  key: 1,
  class: "mt-3"
};
const _hoisted_13 = ["data-content"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon is-5",
  "data-icon": "feather:shield"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "mx-2 icon-text" }, "Ap\xF3lices", -1);
const _hoisted_17 = [
  _hoisted_14,
  _hoisted_15,
  _hoisted_16
];
const _hoisted_18 = {
  key: 2,
  class: "mt-3"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon is-5",
  "data-icon": "feather:trending-up"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "mx-2 icon-text" }, "Reportes", -1);
const _hoisted_22 = [
  _hoisted_19,
  _hoisted_20,
  _hoisted_21
];
const _hoisted_23 = {
  key: 3,
  class: "mt-3"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "ic:outline-report"
}, null, -1);
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = {
  key: 4,
  class: "mt-3"
};
const _hoisted_27 = ["data-content"];
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg icon is-5",
  "data-icon": "feather:users"
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "mx-2 icon-text" }, "Usuarios", -1);
const _hoisted_31 = [
  _hoisted_28,
  _hoisted_29,
  _hoisted_30
];
const _hoisted_32 = { class: "bottom-icon-side-menu" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean },
    theme: { default: "color" },
    defaultSidebar: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    const { locale, t } = useI18n();
    const userSession = useUserSession();
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    const hasClearence = (clearenceCode) => {
      return userSession.hasClearence(clearenceCode);
    };
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = false;
        activeMobileSubsidebar.value = "";
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    return (_ctx, _cache) => {
      const _component_DashboardsMobileSubsidebarMex = _sfc_main$3;
      const _component_DashboardsMobileSubsidebarBra = _sfc_main$4;
      const _component_DashboardsMobileSubsidebarReports = _sfc_main$5;
      const _component_DashboardsMobileSubsidebarUsers = _sfc_main$6;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            activeMobileSubsidebar.value === "dashboard-mex" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebarMex, {
              key: 0,
              class: "mx-5"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            activeMobileSubsidebar.value === "dashboard-bra" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebarBra, {
              key: 0,
              class: "mx-5"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            activeMobileSubsidebar.value === "reports" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebarReports, {
              key: 0,
              class: "mx-5"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            activeMobileSubsidebar.value === "users" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebarUsers, {
              key: 0,
              class: "mx-5"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          class: normalizeClass([[props.isOpen && "is-active"], "mobile-main-sidebar"]),
          theme: "color",
          style: { "background-color": "rgb(2 25 111)", "width": "auto" }
        }, [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("ul", _hoisted_2$2, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                createBaseVNode("li", null, [
                  withDirectives((openBlock(), createElementBlock("a", _hoisted_3$2, _hoisted_5$2)), [
                    [
                      _directive_tooltip,
                      unref(t)("sidebar.titles.dashboardd"),
                      void 0,
                      {
                        top: true,
                        bottom: true
                      }
                    ]
                  ])
                ])
              ])
            ]),
            createBaseVNode("ul", _hoisted_6$2, [
              hasClearence("MEX") ? (openBlock(), createElementBlock("li", _hoisted_7$1, [
                withDirectives((openBlock(), createElementBlock("a", {
                  class: normalizeClass([activeMobileSubsidebar.value === "dashboard-mex" && "is-active"]),
                  "data-content": "Dashboard Mex",
                  "aria-label": "View dashboards",
                  tabindex: "0",
                  onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => switchSidebar("dashboard-mex"), ["prevent"]), ["space"])),
                  onClick: _cache[1] || (_cache[1] = ($event) => switchSidebar("dashboard-mex"))
                }, _hoisted_11, 34)), [
                  [
                    _directive_tooltip,
                    unref(t)("sidebar.titles.policies"),
                    void 0,
                    {
                      top: true,
                      center: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              hasClearence("BRA") ? (openBlock(), createElementBlock("li", _hoisted_12, [
                withDirectives((openBlock(), createElementBlock("a", {
                  class: normalizeClass([activeMobileSubsidebar.value === "dashboard-bra" && "is-active"]),
                  "data-content": unref(t)("sidebar.titles.policies"),
                  "aria-label": "View dashboards",
                  tabindex: "0",
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => switchSidebar("dashboard-bra"), ["prevent"]), ["space"])),
                  onClick: _cache[3] || (_cache[3] = ($event) => switchSidebar("dashboard-bra"))
                }, _hoisted_17, 42, _hoisted_13)), [
                  [
                    _directive_tooltip,
                    unref(t)("sidebar.titles.policies"),
                    void 0,
                    {
                      top: true,
                      center: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              hasClearence("ADM-REPO") ? (openBlock(), createElementBlock("li", _hoisted_18, [
                withDirectives((openBlock(), createElementBlock("a", {
                  class: normalizeClass([activeMobileSubsidebar.value === "reports" && "is-active"]),
                  "data-content": "Reports",
                  "aria-label": "View Reports",
                  tabindex: "0",
                  onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => switchSidebar("reports"), ["prevent"]), ["space"])),
                  onClick: _cache[5] || (_cache[5] = ($event) => switchSidebar("reports"))
                }, _hoisted_22, 34)), [
                  [
                    _directive_tooltip,
                    unref(t)("sidebar.titles.reports"),
                    void 0,
                    {
                      top: true,
                      center: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              hasClearence("ADM-REPO-MEX") ? (openBlock(), createElementBlock("li", _hoisted_23, [
                withDirectives((openBlock(), createElementBlock("a", {
                  class: normalizeClass([activeMobileSubsidebar.value === "reportsMx" && "is-active"]),
                  "data-content": "Reports Mx",
                  "aria-label": "View ReportsMx",
                  tabindex: "0",
                  onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => switchSidebar("reportsMx"), ["prevent"]), ["space"])),
                  onClick: _cache[7] || (_cache[7] = ($event) => switchSidebar("reportsMx"))
                }, _hoisted_25, 34)), [
                  [
                    _directive_tooltip,
                    unref(t)("sidebar.titles.reports"),
                    void 0,
                    {
                      top: true,
                      center: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              hasClearence("ADM-USER") ? (openBlock(), createElementBlock("li", _hoisted_26, [
                withDirectives((openBlock(), createElementBlock("a", {
                  class: normalizeClass([activeMobileSubsidebar.value === "users" && "is-active"]),
                  "data-content": unref(t)("sidebar.titles.users"),
                  "aria-label": "View Users",
                  tabindex: "0",
                  onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => switchSidebar("users"), ["prevent"]), ["space"])),
                  onClick: _cache[9] || (_cache[9] = ($event) => switchSidebar("users"))
                }, _hoisted_31, 42, _hoisted_27)), [
                  [
                    _directive_tooltip,
                    unref(t)("sidebar.titles.users"),
                    void 0,
                    {
                      top: true,
                      center: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("ul", _hoisted_32, [
              renderSlot(_ctx.$slots, "bottom-links")
            ])
          ])
        ], 2),
        props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "mobile-overlay",
          tabindex: "0",
          onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
          onClick: _cache[11] || (_cache[11] = ($event) => (emit("toggle"), activeMobileSubsidebar.value = ""))
        }, null, 32)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var MobileNavbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  class: "navbar mobile-navbar is-hidden-desktop is-hidden-tablet",
  "aria-label": "main navigation"
};
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { class: "navbar-brand" };
const _hoisted_4$1 = { class: "brand-start" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8 = [
  _hoisted_5$1,
  _hoisted_6$1,
  _hoisted_7
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", {
                class: normalizeClass(["navbar-burger", [props.isOpen && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("toggle"))
              }, _hoisted_8, 34)
            ]),
            renderSlot(_ctx.$slots, "brand")
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = ["onKeydown", "onClick"];
const _hoisted_2 = { class: "dropdown-head" };
const _hoisted_3 = { style: { "padding": "5%" } };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_6 = { class: "dropdown-item is-button" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { locale, t } = useI18n();
    const router = useRouter();
    useRoute();
    useUserSession();
    const user = ref(JSON.parse(localStorage.getItem("user")));
    const handleLogout = async () => {
      try {
        localStorage.setItem("user", "");
        router.push({
          name: "auth-login-1"
        });
      } catch (error) {
        console.log(error);
      }
    };
    const config = async () => {
      router.push({
        name: "users-config"
      });
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$c;
      const _component_VButton = _sfc_main$d;
      const _component_VIconButton = _sfc_main$e;
      const _component_VDropdown = _sfc_main$f;
      return openBlock(), createBlock(_component_VDropdown, {
        right: "",
        spaced: "",
        class: "user-dropdown profile-dropdown"
      }, {
        button: withCtx(({ toggle }) => [
          createBaseVNode("a", {
            tabindex: "0",
            class: "is-trigger dropdown-trigger",
            "aria-haspopup": "true",
            onKeydown: withKeys(withModifiers(toggle, ["prevent"]), ["space"]),
            onClick: toggle
          }, [
            createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" })
          ], 40, _hoisted_1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VAvatar, {
              size: "large",
              picture: "/images/avatars/svg/vuero-1.svg"
            }),
            createBaseVNode("span", _hoisted_3, [
              createTextVNode(toDisplayString(user.value.name) + " " + toDisplayString(user.value.lastName) + " ", 1),
              _hoisted_4,
              createTextVNode(" " + toDisplayString(user.value.role), 1)
            ])
          ]),
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VButton, {
              class: "logout-button mx-2",
              icon: "feather:log-out",
              color: "primary",
              role: "menuitem",
              raised: "",
              fullwidth: "",
              onClick: handleLogout
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("sidebar.profileDropdown.logout")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_VIconButton, {
              class: "mx-2",
              icon: "mdi:cog",
              color: "primary",
              onClick: config,
              outlined: ""
            })
          ])
        ]),
        _: 1
      });
    };
  }
});
export { __unplugin_components_9 as _, _sfc_main as a, _sfc_main$1 as b, _sfc_main$2 as c, _sfc_main$8 as d, __unplugin_components_20 as e, _sfc_main$a as f };
