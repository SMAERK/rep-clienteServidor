import { _ as _sfc_main$6 } from "./VAvatarStack.d8a5f95e.js";
import { _ as __unplugin_components_4 } from "./UserCardDropdown.f26fcac6.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, h as unref, F as Fragment, X as renderList, t as toDisplayString, x as createTextVNode, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
const projects = [
  {
    id: "1",
    name: "Delivery App Project",
    dueDate: "August 2020",
    updated: "3m ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/1.jpg",
    owner: {
      id: 7,
      avatar: "https://vuero.cssninja.io/demo/avatars/7.jpg",
      name: "Alice C.",
      initials: "AC",
      color: "info"
    },
    team: [
      {
        id: 27,
        picture: "https://vuero.cssninja.io/demo/avatars/27.jpg",
        name: "Carmen E.",
        initials: "CE",
        color: "h-yellow"
      },
      {
        id: 15,
        picture: "https://vuero.cssninja.io/demo/avatars/15.jpg",
        name: "Hilde V.",
        initials: "HV",
        color: "h-purple"
      },
      {
        id: 12,
        picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
        name: "Joshua S.",
        initials: "JS",
        color: "success"
      }
    ]
  },
  {
    id: "2",
    name: "Health and Fitness Dashboard",
    dueDate: "October 2020",
    updated: "5h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/2.png",
    owner: {
      id: 8,
      avatar: "/images/avatars/svg/vuero-1.svg",
      name: "Erik K.",
      initials: "EK",
      color: "info"
    },
    team: [
      {
        id: 13,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        name: "Tara S.",
        initials: "TS",
        color: "danger"
      },
      {
        id: 21,
        picture: "https://vuero.cssninja.io/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      }
    ]
  },
  {
    id: "3",
    name: "Learning Tracker Dashboard",
    dueDate: "September 2020",
    updated: "5h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/3.png",
    owner: {
      id: 25,
      avatar: "https://vuero.cssninja.io/demo/avatars/25.jpg",
      name: "Melany W.",
      initials: "MW",
      color: "info"
    },
    team: [
      {
        id: 14,
        picture: "https://vuero.cssninja.io/demo/avatars/14.jpg",
        name: "Ryan B.",
        initials: "RB",
        color: "info"
      }
    ]
  },
  {
    id: "4",
    name: "Banking and Finance Dashboard",
    dueDate: "October 2020",
    updated: "5h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/4.png",
    owner: {
      id: 23,
      avatar: "https://vuero.cssninja.io/demo/avatars/23.jpg",
      name: "Irina V.",
      initials: "IV",
      color: "success"
    },
    team: [
      {
        id: 13,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        name: "Tara S.",
        initials: "TS",
        color: "danger"
      },
      {
        id: 21,
        picture: "https://vuero.cssninja.io/demo/avatars/21.jpg",
        name: "Elizabet F.",
        initials: "EF",
        color: "warning"
      }
    ]
  },
  {
    id: "5",
    name: "Resume Management Mobile App",
    dueDate: "October 2020",
    updated: "2h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/5.png",
    owner: {
      id: 11,
      avatar: "https://vuero.cssninja.io/demo/avatars/11.jpg",
      name: "Kelly M.",
      initials: "KM",
      color: "h-orange"
    },
    team: [
      {
        id: 30,
        picture: "https://vuero.cssninja.io/demo/avatars/30.jpg",
        name: "Cl\xE9ment D.",
        initials: "CD",
        color: "info"
      },
      {
        id: 39,
        picture: "https://vuero.cssninja.io/demo/avatars/39.jpg",
        name: "Alejandro B.",
        initials: "AB",
        color: "h-purple"
      }
    ]
  },
  {
    id: "6",
    name: "Banking Landing Page",
    dueDate: "December 2020",
    updated: "3d ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/6.png",
    owner: {
      id: 9,
      avatar: "https://vuero.cssninja.io/demo/avatars/9.jpg",
      name: "Ana B.",
      initials: "AB",
      color: "success"
    },
    team: [
      {
        id: 15,
        picture: "https://vuero.cssninja.io/demo/avatars/15.jpg",
        name: "Hilde V.",
        initials: "HV",
        color: "info"
      },
      {
        id: 40,
        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
        name: "Jeanne M.",
        initials: "JM",
        color: "success"
      },
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        name: "Erik K.",
        initials: "EK",
        color: "h-purple"
      }
    ]
  },
  {
    id: "7",
    name: "Learning App Design",
    dueDate: "November 2020",
    updated: "1h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/7.png",
    owner: {
      id: 25,
      avatar: "https://vuero.cssninja.io/demo/avatars/25.jpg",
      name: "Melany W.",
      initials: "MW",
      color: "info"
    },
    team: [
      {
        id: 11,
        picture: "https://vuero.cssninja.io/demo/avatars/11.jpg",
        name: "Kelly M.",
        initials: "KM",
        color: "success"
      }
    ]
  },
  {
    id: "8",
    name: "Educational App Design",
    dueDate: "November 2020",
    updated: "4d ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/8.png",
    owner: {
      id: 5,
      avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg",
      name: "Mary L.",
      initials: "ML",
      color: "info"
    },
    team: [
      {
        id: 21,
        picture: "https://vuero.cssninja.io/demo/avatars/21.jpg",
        name: "Elizabeth F.",
        initials: "EF",
        color: "warning"
      },
      {
        id: 29,
        picture: "https://vuero.cssninja.io/demo/avatars/29.jpg",
        name: "Hakeem C.",
        initials: "HC",
        color: "danger"
      },
      {
        id: 33,
        picture: "https://vuero.cssninja.io/demo/avatars/33.jpg",
        name: "Harvey M.",
        initials: "HM",
        color: "success"
      }
    ]
  },
  {
    id: "9",
    name: "Banking Solution Website",
    dueDate: "October 2020",
    updated: "2h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/9.png",
    owner: {
      id: 27,
      avatar: "https://vuero.cssninja.io/demo/avatars/27.jpg",
      name: "Carmen E.",
      initials: "CE",
      color: "info"
    },
    team: [
      {
        id: 30,
        picture: "https://vuero.cssninja.io/demo/avatars/30.jpg",
        name: "Cl\xE9ment D.",
        initials: "CD",
        color: "h-purple"
      },
      {
        id: 19,
        picture: "https://vuero.cssninja.io/demo/avatars/19.jpg",
        name: "Greta K.",
        initials: "GK",
        color: "info"
      }
    ]
  },
  {
    id: "10",
    name: "HR Webapp Design",
    dueDate: "August 2020",
    updated: "2h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/10.png",
    owner: {
      id: 27,
      avatar: "https://vuero.cssninja.io/demo/avatars/27.jpg",
      name: "Carmen E.",
      initials: "CE",
      color: "info"
    },
    team: [
      {
        id: 24,
        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg",
        name: "Sandrine C.",
        initials: "SC",
        color: "success"
      },
      {
        id: 22,
        picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
        name: "Jimmy H.",
        initials: "JH",
        color: "info"
      }
    ]
  },
  {
    id: "11",
    name: "Ice Cream Delivery Dashboard",
    dueDate: "January 2021",
    updated: "2h ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/11.png",
    owner: {
      id: 13,
      avatar: "https://vuero.cssninja.io/demo/avatars/13.jpg",
      name: "Tara S.",
      initials: "TS",
      color: "danger"
    },
    team: [
      {
        id: 28,
        picture: "https://vuero.cssninja.io/demo/avatars/28.jpg",
        name: "Edouard F.",
        initials: "EF",
        color: "info"
      }
    ]
  },
  {
    id: "12",
    name: "Mobile App Landing Page",
    dueDate: "November 2020",
    updated: "4d ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/12.jpg",
    owner: {
      id: 12,
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg",
      name: "Joshua S.",
      initials: "JS",
      color: "info"
    },
    team: [
      {
        id: 119,
        picture: void 0,
        name: "Sarah Connor.",
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: "13",
    name: "Web Marketing Landing Page",
    dueDate: "November 2020",
    updated: "3m ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/13.png",
    owner: {
      id: 12,
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg",
      name: "Joshua S.",
      initials: "JS",
      color: "info"
    },
    team: [
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        name: "Erik K.",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 15,
        picture: "https://vuero.cssninja.io/demo/avatars/15.jpg",
        name: "Hilde V.",
        initials: "HV",
        color: "h-orange"
      },
      {
        id: 12,
        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
        name: "Jeanne M.",
        initials: "JM",
        color: "success"
      }
    ]
  },
  {
    id: "14",
    name: "Startup Landing Page",
    dueDate: "November 2020",
    updated: "3m ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/14.jpg",
    owner: {
      id: 15,
      avatar: "https://vuero.cssninja.io/demo/avatars/15.jpg",
      name: "Hilde V.",
      initials: "HV",
      color: "danger"
    },
    team: [
      {
        id: 31,
        picture: "https://vuero.cssninja.io/demo/avatars/31.jpg",
        name: "Yasseen A.",
        initials: "YA",
        color: "info"
      }
    ]
  },
  {
    id: "15",
    name: "Expense Management System",
    dueDate: "January 2021",
    updated: "2d ago",
    image: "https://vuero.cssninja.io/demo/photos/apps/15.png",
    owner: {
      id: 39,
      avatar: "https://vuero.cssninja.io/demo/avatars/39.jpg",
      name: "Alejandro B.",
      initials: "AB",
      color: "info"
    },
    team: [
      {
        id: 5,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        name: "Mary L.",
        initials: "ML",
        color: "info"
      },
      {
        id: 24,
        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg",
        name: "Sandrine C.",
        initials: "SC",
        color: "success"
      }
    ]
  }
];
var CardsGridV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "New Project", -1);
const _hoisted_5 = { class: "card-grid card-grid-v2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "card-grid-item" };
const _hoisted_9 = { class: "card" };
const _hoisted_10 = { class: "card-header" };
const _hoisted_11 = { class: "card-header-title" };
const _hoisted_12 = { class: "meta" };
const _hoisted_13 = { class: "dark-inverted" };
const _hoisted_14 = { class: "card-header-icon" };
const _hoisted_15 = { class: "card-image" };
const _hoisted_16 = { class: "image is-16by9" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "card-content" };
const _hoisted_19 = { class: "card-content-flex" };
const _hoisted_20 = { class: "card-info" };
const _hoisted_21 = { class: "dark-inverted" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:calendar"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("footer", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "card-footer-item"
  }, "View"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "card-footer-item"
  }, "Settings")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const projects$1 = projects;
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects$1;
      } else {
        return projects$1.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.dueDate.match(new RegExp(filters.value, "i")) || item.owner.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "All Projects",
      "Web Apps",
      "Mobile Apps",
      "Dashboards",
      "Landing Pages"
    ];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_UserCardDropdown = __unplugin_components_4;
      const _component_VAvatarStack = _sfc_main$6;
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
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "Select an option"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("header", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: item.owner.avatar
                          }, null, 8, ["picture"]),
                          createBaseVNode("div", _hoisted_12, [
                            createBaseVNode("span", _hoisted_13, toDisplayString(item.owner.name), 1),
                            createBaseVNode("span", null, "updated " + toDisplayString(item.updated), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_14, [
                          createVNode(_component_UserCardDropdown)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("figure", _hoisted_16, [
                          createBaseVNode("img", {
                            src: item.image,
                            alt: "",
                            onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "1280x960"))
                          }, null, 40, _hoisted_17)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("h3", _hoisted_21, toDisplayString(item.name), 1),
                            createBaseVNode("p", null, [
                              _hoisted_22,
                              createTextVNode(toDisplayString(item.dueDate), 1)
                            ])
                          ]),
                          createVNode(_component_VAvatarStack, {
                            avatars: item.team,
                            size: "small",
                            limit: 3
                          }, null, 8, ["avatars"])
                        ])
                      ]),
                      _hoisted_23
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Grid Cards 2");
    useHead({
      title: "Grid Cards 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_CardsGridV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CardsGridV2)
      ]);
    };
  }
});
export { _sfc_main as default };
