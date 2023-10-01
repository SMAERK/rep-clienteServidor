import { _ as _sfc_main$a } from "./VFlexPagination.ec5e6993.js";
import { c as _sfc_main$6, _ as _sfc_main$9 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$3 } from "./VDropdown.38fc5e7d.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, d as defineComponent, k as ref, e as computed, f as createElementBlock, s as createVNode, a3 as withDirectives, a4 as vModelText, g as normalizeClass, a2 as withKeys, W as withModifiers, h as unref, y as createCommentVNode, F as Fragment, X as renderList, t as toDisplayString, x as createTextVNode, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$8 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$7 } from "./VTag.f234897b.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./via-placeholder.9af8280d.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
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
    /* @__PURE__ */ createBaseVNode("span", null, "View"),
    /* @__PURE__ */ createBaseVNode("span", null, "View project details")
  ])
], -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Edit"),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit project details")
  ])
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-add-files"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "New Task"),
    /* @__PURE__ */ createBaseVNode("span", null, "Add a new task")
  ])
], -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
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
    /* @__PURE__ */ createBaseVNode("span", null, "Remove from list")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$3;
  return openBlock(), createBlock(_component_VDropdown, {
    class: "is-pushed-mobile",
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1
    ]),
    _: 1
  });
}
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var _imports_2 = "/assets/projects.37c3a67c.svg";
var _imports_3 = "/assets/projects-dark.e90dd83a.svg";
const projects = [
  {
    id: 0,
    name: "Website Redesign",
    customer: "Blake & Mortimer",
    duration: "3 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/1.png",
    industry: "HR Vetting",
    status: "In Progress",
    team: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
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
      }
    ]
  },
  {
    id: 1,
    name: "Mobile App Rework",
    customer: "Pollos Hermanos",
    duration: "2 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/2.png",
    industry: "Food",
    status: "In Progress",
    team: [
      {
        id: 148,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    name: "ERP Solution Development",
    customer: "Best Mart",
    duration: "6 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/3.png",
    industry: "Distribution",
    status: "Paused",
    team: [
      {
        id: 127,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      },
      {
        id: 19,
        picture: "https://vuero.cssninja.io/demo/avatars/19.jpg",
        initials: "GK",
        color: "h-yellow"
      },
      {
        id: 148,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 149,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    name: "Website Proof Of Concept",
    customer: "Los Fragueros",
    duration: "1 month",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/4.png",
    industry: "Clothing",
    status: "In Progress",
    team: [
      {
        id: 188,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 187,
        picture: void 0,
        initials: "AT",
        color: "h-yellow"
      },
      {
        id: 5,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  },
  {
    id: 4,
    name: "Add an Accouting Module",
    customer: "WorkForce",
    duration: "3 weeks",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/5.png",
    industry: "Software",
    status: "In Progress",
    team: [
      {
        id: 18,
        picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
        initials: "EC",
        color: "info"
      }
    ]
  },
  {
    id: 5,
    name: "New UX Exploration",
    customer: "WorkForce",
    duration: "3 weeks",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/6.png",
    industry: "Software",
    status: "In Progress",
    team: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "https://vuero.cssninja.io/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 152,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 154,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 6,
    name: "Ordering App Development",
    customer: "Find Your Stuff",
    duration: "5 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/7.png",
    industry: "Retail",
    status: "In Progress",
    team: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: void 0,
        initials: "AT",
        color: "h-yellow"
      },
      {
        id: 17,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 152,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 7,
    name: "Learning App for Children",
    customer: "Coding Kids",
    duration: "2 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/8.png",
    industry: "Education",
    status: "In Progress",
    team: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: void 0,
        initials: "BV",
        color: "h-purple"
      },
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 8,
    name: "App Wireframe Implementation",
    customer: "Freako",
    duration: "2 weeks",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/9.png",
    industry: "Retail",
    status: "In Progress",
    team: [
      {
        id: 25,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 13,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        initials: "TS",
        color: "info"
      },
      {
        id: 17,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  },
  {
    id: 9,
    name: "Corporate Social Network",
    customer: "Publicis",
    duration: "5 months",
    picture: "https://vuero.cssninja.io/demo/photos/abstracts/9.png",
    industry: "Media",
    status: "In Progress",
    team: [
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 165,
        picture: void 0,
        initials: "JD",
        color: "info"
      },
      {
        id: 27,
        picture: "https://vuero.cssninja.io/demo/avatars/27.jpg",
        initials: "CE",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  }
];
var FlexListV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-flex-toolbar is-reversed" };
const _hoisted_2$1 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Active", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "Closed", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "flex-list-wrapper flex-list-v2" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_12 = {
  key: 1,
  class: "tab-content is-active"
};
const _hoisted_13 = { class: "item-name dark-inverted" };
const _hoisted_14 = { class: "item-meta" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_16 = { class: "light-text" };
const _hoisted_17 = { class: "light-text" };
const _hoisted_18 = {
  key: 2,
  class: "tab-content is-active"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-larger",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-larger",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: "active" }
  },
  setup(__props) {
    const props = __props;
    const projects$1 = projects;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const columns = {
      picture: {
        label: "Project",
        grow: true,
        media: true
      },
      customer: "Customer",
      industry: "Industry",
      status: "Status",
      team: {
        label: "Team",
        cellClass: "h-hidden-tablet-p"
      },
      actions: {
        label: "Actions",
        align: "end"
      }
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects$1;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return projects$1.filter((item) => {
          return item.name.match(filterRe) || item.customer.match(filterRe) || item.industry.match(filterRe) || item.status.match(filterRe) || item.duration.match(filterRe);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VFlexTableCell = _sfc_main$6;
      const _component_VTag = _sfc_main$7;
      const _component_VAvatarStack = _sfc_main$8;
      const _component_ProjectListDropdown = __unplugin_components_6;
      const _component_VFlexTable = _sfc_main$9;
      const _component_VFlexPagination = _sfc_main$a;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "Search..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "active" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => tab.value = "active", ["prevent"]), ["space"])),
                    onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "active")
                  }, _hoisted_5, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "closed" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => tab.value = "closed", ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = ($event) => tab.value = "closed")
                  }, _hoisted_7, 32)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          tab.value === "active" && unref(filteredData).length === 0 ? (openBlock(), createBlock(_component_VPlaceholderPage, {
            key: 0,
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_10,
              _hoisted_11
            ]),
            _: 1
          })) : createCommentVNode("", true),
          tab.value === "active" ? (openBlock(), createElementBlock("div", _hoisted_12, [
            unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
              key: 0,
              data: unref(filteredData),
              columns: unref(columns),
              rounded: ""
            }, {
              body: withCtx(() => [
                createVNode(TransitionGroup, {
                  name: "list",
                  tag: "div",
                  class: "flex-list-inner"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "flex-table-item"
                      }, [
                        createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                          default: withCtx(() => [
                            createVNode(_component_VAvatar, {
                              picture: item.picture
                            }, null, 8, ["picture"]),
                            createBaseVNode("div", null, [
                              createBaseVNode("span", _hoisted_13, toDisplayString(item.name), 1),
                              createBaseVNode("span", _hoisted_14, [
                                createBaseVNode("span", null, [
                                  _hoisted_15,
                                  createTextVNode(toDisplayString(item.duration), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_16, toDisplayString(item.customer), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_17, toDisplayString(item.industry), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_VTag, { rounded: "" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, { class: "h-hidden-tablet-p" }, {
                          default: withCtx(() => [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.team,
                              size: "small",
                              limit: 3,
                              class: "is-pushed-mobile"
                            }, null, 8, ["avatars"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                          default: withCtx(() => [
                            createVNode(_component_ProjectListDropdown)
                          ]),
                          _: 1
                        })
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data", "columns"])) : createCommentVNode("", true),
            unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
              key: 1,
              "item-per-page": 10,
              "total-items": 873,
              "current-page": 42,
              "max-links-displayed": 7
            })) : createCommentVNode("", true)
          ])) : tab.value === "closed" ? (openBlock(), createElementBlock("div", _hoisted_18, [
            createVNode(_component_VPlaceholderPage, {
              title: "No closed projects.",
              subtitle: "Looks like you don't have any closed project yet. When you'll\n              start closing off projects, they will be showing up in here."
            }, {
              image: withCtx(() => [
                _hoisted_19,
                _hoisted_20
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("active");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List Flex 2");
    useHead({
      title: "List Flex 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FlexListV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_FlexListV2, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
