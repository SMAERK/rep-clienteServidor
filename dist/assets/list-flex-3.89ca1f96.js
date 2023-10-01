import { _ as _sfc_main$6 } from "./VFlexPagination.ec5e6993.js";
import { c as _sfc_main$4, _ as _sfc_main$5 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, a2 as withKeys, W as withModifiers, h as unref, p as createBlock, aK as TransitionGroup, F as Fragment, X as renderList, t as toDisplayString, x as createTextVNode, y as createCommentVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
import "./index.e178843f.js";
var _imports_2 = "/assets/courses.7100fca1.svg";
var _imports_3 = "/assets/courses-dark.4da1d24a.svg";
const classes = [
  {
    id: 0,
    name: "Introduction to Html5",
    picture: "https://vuero.cssninja.io/demo/photos/courses/1.jpg",
    category: "Web Development",
    difficulty: 1,
    price: 26,
    skill: {
      icon: "lnil lnil-html5",
      name: "Html5"
    },
    author: {
      id: 8,
      picture: "/images/avatars/svg/vuero-1.svg",
      username: "Erik K.",
      initials: "EK",
      color: "info"
    }
  },
  {
    id: 1,
    name: "Mastering VueJS and Typescript",
    picture: "https://vuero.cssninja.io/demo/photos/courses/2.png",
    category: "Web Development",
    difficulty: 4,
    price: 12,
    skill: {
      icon: "lnir lnir-nodejs",
      name: "NodeJS"
    },
    author: {
      id: 12,
      picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
      username: "Joshua S.",
      initials: "JS",
      color: "info"
    }
  },
  {
    id: 2,
    name: "Discovering CSS3 and Stylesheets",
    picture: "https://vuero.cssninja.io/demo/photos/courses/3.jpg",
    category: "Web Development",
    difficulty: 2,
    price: 16,
    skill: {
      icon: "lnir lnir-css3",
      name: "CSS3"
    },
    author: {
      id: 12,
      picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
      username: "Mary L.",
      initials: "ML",
      color: "info"
    }
  },
  {
    id: 3,
    name: "Get Started with Laravel 6",
    picture: "https://vuero.cssninja.io/demo/photos/courses/4.png",
    category: "Web Development",
    difficulty: 3,
    price: 0,
    skill: {
      icon: "lnir lnir-laravel",
      name: "Laravel"
    },
    author: {
      id: 18,
      picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
      username: "Esteban C.",
      initials: "EC",
      color: "info"
    }
  },
  {
    id: 4,
    name: "Python Basics for Beginners",
    picture: "https://vuero.cssninja.io/demo/photos/courses/5.jpeg",
    category: "Web Development",
    difficulty: 1,
    price: 8,
    skill: {
      icon: "lnir lnir-python",
      name: "Python"
    },
    author: {
      id: 18,
      picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
      username: "Esteban C.",
      initials: "EC",
      color: "info"
    }
  },
  {
    id: 5,
    name: "Mastering State with React Hooks",
    picture: "https://vuero.cssninja.io/demo/photos/courses/6.jpg",
    category: "Web Development",
    difficulty: 4,
    price: 25,
    skill: {
      icon: "lnir lnir-react",
      name: "ReactJS"
    },
    author: {
      id: 30,
      picture: "https://vuero.cssninja.io/demo/avatars/30.jpg",
      username: "Cl\xE9ment D.",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 6,
    name: "Setting up an Express Server",
    picture: "https://vuero.cssninja.io/demo/photos/courses/7.png",
    category: "Web Development",
    difficulty: 3,
    price: 12,
    skill: {
      icon: "lnir lnir-nodejs",
      name: "NodeJS"
    },
    author: {
      id: 38,
      picture: "https://vuero.cssninja.io/demo/avatars/38.jpg",
      username: "Christie D.",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 7,
    name: "Learning to use Kubernetes",
    picture: "https://vuero.cssninja.io/demo/photos/courses/9.jpg",
    category: "Web Development",
    difficulty: 5,
    price: 34,
    skill: {
      icon: "lnir lnir-chrome",
      name: "Kubernetes"
    },
    author: {
      id: 30,
      picture: "https://vuero.cssninja.io/demo/avatars/30.jpg",
      username: "Cl\xE9ment D.",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 8,
    name: "Another Angular Crash Course",
    picture: "https://vuero.cssninja.io/demo/photos/courses/11.jpg",
    category: "Web Development",
    difficulty: 4,
    price: 22,
    skill: {
      icon: "lnir lnir-angular",
      name: "Angular"
    },
    author: {
      id: 34,
      picture: "https://vuero.cssninja.io/demo/avatars/34.jpg",
      username: "Daniel R.",
      initials: "DR",
      color: "info"
    }
  },
  {
    id: 9,
    name: "learning Advanced Docker Concepts",
    picture: "https://vuero.cssninja.io/demo/photos/courses/12.jpg",
    category: "Web Development",
    difficulty: 5,
    price: 35,
    skill: {
      icon: "lnir lnir-docker",
      name: "Docker"
    },
    author: {
      id: 30,
      picture: "https://vuero.cssninja.io/demo/avatars/30.jpg",
      username: "Cl\xE9ment D.",
      initials: "CD",
      color: "info"
    }
  }
];
var FlexListV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-flex-toolbar is-reversed" };
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
const _hoisted_9 = { class: "flex-list-wrapper flex-list-v3" };
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
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "item-name dark-inverted" };
const _hoisted_15 = { class: "item-meta" };
const _hoisted_16 = { class: "flex-media" };
const _hoisted_17 = { class: "meta" };
const _hoisted_18 = { class: "light-text" };
const _hoisted_19 = { class: "light-text no-push" };
const _hoisted_20 = { class: "dot-levels" };
const _hoisted_21 = { class: "button v-button has-dot dark-outlined is-pushed-mobile" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Purchase ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle dot"
}, null, -1);
const _hoisted_24 = {
  key: 2,
  class: "tab-content is-active"
};
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-larger",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-larger",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: "all" }
  },
  setup(__props) {
    const props = __props;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const columns = {
      picture: {
        label: "Course",
        grow: "lg"
      },
      category: "Category",
      skill: "Main Skill",
      difficulty: "Difficulty",
      actions: {
        label: "Actions",
        align: "end"
      }
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return classes;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return classes.filter((item) => {
          return item.name.match(filterRe) || item.category.match(filterRe) || item.skill.name.match(filterRe) || item.author.username.match(filterRe);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_VFlexTableCell = _sfc_main$4;
      const _component_VFlexTable = _sfc_main$5;
      const _component_VFlexPagination = _sfc_main$6;
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
          tab.value === "all" && !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
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
          })) : tab.value === "all" && unref(filteredData).length ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createVNode(_component_VFlexTable, {
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
                            createBaseVNode("img", {
                              class: "media",
                              src: item.picture,
                              alt: "",
                              onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x110"))
                            }, null, 40, _hoisted_13),
                            createBaseVNode("div", null, [
                              createBaseVNode("span", _hoisted_14, toDisplayString(item.name), 1),
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode("div", _hoisted_16, [
                                  createVNode(_component_VAvatar, {
                                    picture: item.author.picture,
                                    size: "small"
                                  }, null, 8, ["picture"]),
                                  createBaseVNode("div", _hoisted_17, [
                                    createBaseVNode("span", null, "by " + toDisplayString(item.author.username), 1)
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_18, toDisplayString(item.category), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("i", {
                              "aria-hidden": "true",
                              class: normalizeClass(["cell-icon is-pushed-mobile", item.skill.icon])
                            }, null, 2),
                            createBaseVNode("span", _hoisted_19, toDisplayString(item.skill.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_20, [
                              createBaseVNode("i", {
                                class: normalizeClass(["fas fa-circle dot active", item.difficulty >= 1 ? "active" : ""]),
                                "aria-hidden": "true"
                              }, null, 2),
                              createBaseVNode("i", {
                                class: normalizeClass(["fas fa-circle dot", item.difficulty >= 2 ? "active" : ""]),
                                "aria-hidden": "true"
                              }, null, 2),
                              createBaseVNode("i", {
                                class: normalizeClass(["fas fa-circle dot", item.difficulty >= 3 ? "active" : ""]),
                                "aria-hidden": "true"
                              }, null, 2),
                              createBaseVNode("i", {
                                class: normalizeClass(["fas fa-circle dot", item.difficulty >= 4 ? "active" : ""]),
                                "aria-hidden": "true"
                              }, null, 2),
                              createBaseVNode("i", {
                                class: normalizeClass(["fas fa-circle dot", item.difficulty === 5 ? "active" : ""]),
                                "aria-hidden": "true"
                              }, null, 2)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, { columns: { align: "end" } }, {
                          default: withCtx(() => [
                            createBaseVNode("a", _hoisted_21, [
                              _hoisted_22,
                              _hoisted_23,
                              createTextVNode(" $" + toDisplayString(item.price), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data", "columns"]),
            unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
              key: 0,
              "item-per-page": 10,
              "total-items": 873,
              "current-page": 42,
              "max-links-displayed": 7
            })) : createCommentVNode("", true)
          ])) : tab.value === "saved" && unref(filteredData).length ? (openBlock(), createElementBlock("div", _hoisted_24, [
            createVNode(_component_VPlaceholderPage, {
              title: "No saved courses.",
              subtitle: "Looks like you don't have any saved courses yet. You can add a\n              course to your saved courses by visiting the course details and\n              clicking on the bookmark button."
            }, {
              image: withCtx(() => [
                _hoisted_25,
                _hoisted_26
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
    const activeTab = ref("all");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List Flex 3");
    useHead({
      title: "List Flex 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FlexListV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_FlexListV3, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
