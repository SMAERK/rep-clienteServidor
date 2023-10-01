import { _ as _sfc_main$4 } from "./VFlexPagination.ec5e6993.js";
import { _ as _sfc_main$3 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, a2 as withKeys, W as withModifiers, h as unref, F as Fragment, X as renderList, t as toDisplayString, aK as TransitionGroup, p as createBlock, y as createCommentVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
import "./VAvatar.08652fea.js";
import "./index.e178843f.js";
var _imports_2 = "/assets/cooking.49dcb438.svg";
var _imports_3 = "/assets/cooking-dark.933f7345.svg";
const recipes = [
  {
    id: "1",
    icon: "/images/illustrations/list-views/cake-1.svg",
    name: "Strawberry & Cream Cake",
    category: "Cakes",
    duration: "1h 45m",
    attachments: 3,
    author: {
      name: "Alice C.",
      avatar: "https://vuero.cssninja.io/demo/avatars/7.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: "2",
    icon: "/images/illustrations/list-views/cake-2.svg",
    name: "Orange & Lemon Cake",
    category: "Cakes",
    duration: "1h 15m",
    attachments: 2,
    author: {
      name: "Jimmy H.",
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/12.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/27.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "3",
    icon: "/images/illustrations/list-views/cake-3.svg",
    name: "Three Chocolates Cake",
    category: "Cakes",
    duration: "2h",
    attachments: 2,
    author: {
      name: "Hilde V.",
      avatar: "https://vuero.cssninja.io/demo/avatars/15.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/19.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/34.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "4",
    icon: "/images/illustrations/list-views/cake-4.svg",
    name: "Wedding Cake",
    category: "Cakes",
    duration: "3h 30m",
    attachments: 7,
    author: {
      name: "Courtney W.",
      avatar: "https://vuero.cssninja.io/demo/avatars/26.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/19.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/34.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "5",
    icon: "/images/illustrations/list-views/cake-5.svg",
    name: "Vanilla Waffles",
    category: "Waffles",
    duration: "1h 0m",
    attachments: 2,
    author: {
      name: "Ryan B.",
      avatar: "https://vuero.cssninja.io/demo/avatars/14.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "6",
    icon: "/images/illustrations/list-views/cake-6.svg",
    name: "Strawberry Slice",
    category: "Slices",
    duration: "1h 0m",
    attachments: 2,
    author: {
      name: "Alice C.",
      avatar: "https://vuero.cssninja.io/demo/avatars/7.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "7",
    icon: "/images/illustrations/list-views/cake-7.svg",
    name: "Marmelade Donuts",
    category: "Donuts",
    duration: "2h 15m",
    attachments: 2,
    author: {
      name: "Elizabeth F.",
      avatar: "https://vuero.cssninja.io/demo/avatars/21.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/18.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "8",
    icon: "/images/illustrations/list-views/cake-8.svg",
    name: "Peanut Butter Sandwich",
    category: "Sandwiches",
    duration: "15m",
    attachments: 1,
    author: {
      name: "Joshua S.",
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/28.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/36.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "9",
    icon: "/images/illustrations/list-views/cake-9.svg",
    name: "Peanut Butter Slice",
    category: "Slices",
    duration: "15m",
    attachments: 1,
    author: {
      name: "Joshua S.",
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/31.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/16.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "10",
    icon: "/images/illustrations/list-views/cake-9.svg",
    name: "Strawberry Spicy",
    category: "Slices",
    duration: "1h 15m",
    attachments: 1,
    author: {
      name: "Kelly M.",
      avatar: "https://vuero.cssninja.io/demo/avatars/11.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg"
      },
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/23.jpg"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  }
];
var ViewListV4_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar is-reversed" };
const _hoisted_2$1 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "All", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "Saved", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "list-view list-view-v4" };
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
const _hoisted_12 = { class: "list-view-inner" };
const _hoisted_13 = { class: "list-view-item-inner" };
const _hoisted_14 = { class: "pre-meta" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "meta-left" };
const _hoisted_17 = ["src"];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:archive"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:paperclip"
}, null, -1);
const _hoisted_23 = { class: "meta-right" };
const _hoisted_24 = { class: "network" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "Like this", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-primary is-outlined is-raised" }, " View Recipe "),
  /* @__PURE__ */ createBaseVNode("button", {
    class: "button is-light is-circle hint--bubble hint--primary hint--top",
    "data-hint": "Save"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:heart"
      })
    ])
  ])
], -1);
const _hoisted_27 = { class: "list-view-inner" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: "all" }
  },
  setup(__props) {
    const props = __props;
    const recipes$1 = recipes;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const filteredData = computed(() => {
      if (!filters.value) {
        return recipes$1;
      } else {
        return recipes$1.filter((item) => {
          return item.icon.match(new RegExp(filters.value, "i")) || item.name.match(new RegExp(filters.value, "i")) || item.category.match(new RegExp(filters.value, "i")) || item.duration.match(new RegExp(filters.value, "i")) || item.author.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VAvatarStack = _sfc_main$3;
      const _component_VFlexPagination = _sfc_main$4;
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
                  class: normalizeClass([tab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => tab.value = "all", ["prevent"]), ["space"])),
                    onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "all")
                  }, _hoisted_5, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "saved" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => tab.value = "saved", ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = ($event) => tab.value = "saved")
                  }, _hoisted_7, 32)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_10,
              _hoisted_11
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", {
            id: "active-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "all" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("h3", null, toDisplayString(item.name), 1)
                        ]),
                        createBaseVNode("img", {
                          class: "avatar",
                          src: item.icon,
                          alt: "",
                          onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 40, _hoisted_15),
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("h3", null, [
                            createBaseVNode("img", {
                              class: "avatar",
                              src: item.author.avatar,
                              alt: "",
                              onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
                            }, null, 40, _hoisted_17),
                            createBaseVNode("span", null, toDisplayString(item.author.name), 1)
                          ]),
                          createBaseVNode("span", null, [
                            _hoisted_18,
                            createBaseVNode("span", null, toDisplayString(item.category), 1),
                            _hoisted_19,
                            _hoisted_20,
                            createBaseVNode("span", null, toDisplayString(item.duration), 1),
                            _hoisted_21,
                            _hoisted_22,
                            createBaseVNode("span", null, toDisplayString(item.attachments) + " files", 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", _hoisted_24, [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.followers,
                              size: "small",
                              limit: 3
                            }, null, 8, ["avatars"]),
                            _hoisted_25
                          ]),
                          _hoisted_26
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
              key: 0,
              "item-per-page": 10,
              "total-items": 873,
              "current-page": 42,
              "max-links-displayed": 7
            })) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", {
            id: "inactive-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "saved" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_27, [
              createVNode(_component_VPlaceholderPage, {
                title: "No saved recipes.",
                subtitle: "Looks like you don't have any saved recipes for the moment.\n                Start by exploring the latest ones and add your favorites to the\n                saved recipes section.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_28,
                  _hoisted_29
                ]),
                _: 1
              })
            ])
          ], 2)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List View 4");
    useHead({
      title: "List View 4 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ViewListV4 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ViewListV4, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
