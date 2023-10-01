import { _ as _sfc_main$8 } from "./VBlock.64333f78.js";
import { b as _sfc_main$7 } from "./index.e178843f.js";
import { _ as _sfc_main$6 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$5 } from "./VIconWrap.8350d40c.js";
import { _ as _sfc_main$4 } from "./VField.b8c33879.js";
import { _ as _sfc_main$3 } from "./VTag.f234897b.js";
import { _ as _sfc_main$2 } from "./VCheckbox.486c8d05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, g as normalizeClass, a2 as withKeys, W as withModifiers, F as Fragment, X as renderList, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var FacetSearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "search-results-wrapper" };
const _hoisted_2$1 = { class: "search-results-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  placeholder: "Search again..."
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "search-info" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "54 results found")
], -1);
const _hoisted_5 = { class: "tabs-inner" };
const _hoisted_6 = { class: "tabs" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "All", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "People", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "Records", -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_14 = { class: "search-results-body" };
const _hoisted_15 = { class: "columns" };
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = { class: "filter-box" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Publication", -1);
const _hoisted_19 = { class: "control-end" };
const _hoisted_20 = { class: "control-end" };
const _hoisted_21 = { class: "control-end" };
const _hoisted_22 = { class: "filter-box" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Type", -1);
const _hoisted_24 = { class: "control-end" };
const _hoisted_25 = { class: "control-end" };
const _hoisted_26 = { class: "control-end" };
const _hoisted_27 = { class: "control-end" };
const _hoisted_28 = { class: "control-end" };
const _hoisted_29 = { class: "filter-box" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Topics", -1);
const _hoisted_31 = { class: "control-end" };
const _hoisted_32 = { class: "control-end" };
const _hoisted_33 = { class: "control-end" };
const _hoisted_34 = { class: "control-end" };
const _hoisted_35 = { class: "control-end" };
const _hoisted_36 = { class: "column is-8" };
const _hoisted_37 = { class: "search-results-group" };
const _hoisted_38 = { class: "group-header" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("h4", null, "People", -1);
const _hoisted_40 = { class: "search-results-list" };
const _hoisted_41 = /* @__PURE__ */ createTextVNode(" Profile ");
const _hoisted_42 = { class: "search-results-group" };
const _hoisted_43 = { class: "group-header" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("h4", null, "Records", -1);
const _hoisted_45 = { class: "search-results-list" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" Details ");
const _hoisted_47 = { class: "search-results-group" };
const _hoisted_48 = { class: "search-results-list" };
const _hoisted_49 = /* @__PURE__ */ createTextVNode(" Profile ");
const _hoisted_50 = { class: "search-results-group" };
const _hoisted_51 = { class: "search-results-list" };
const _hoisted_52 = /* @__PURE__ */ createTextVNode(" Details ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const people = [
      {
        name: "Alice Carasca",
        role: "Software Engineer",
        avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg"
      },
      {
        name: "Mary Lebowski",
        role: "Project Manager",
        avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg"
      },
      {
        name: "Ryan Brentman",
        role: "Web Developer",
        avatar: "https://vuero.cssninja.io/demo/avatars/14.jpg"
      },
      {
        name: "Irina Vierbovsky",
        role: "Project Manager",
        avatar: "https://vuero.cssninja.io/demo/avatars/23.jpg"
      },
      {
        name: "Jonathan Krugger",
        role: "Product Manager",
        avatar: "https://vuero.cssninja.io/demo/avatars/32.jpg"
      },
      {
        name: "Alejandro Badajoz",
        role: "Business Analyst",
        avatar: "https://vuero.cssninja.io/demo/avatars/39.jpg"
      },
      {
        name: "Greta Kroppfer",
        role: "Sales Manager",
        avatar: "https://vuero.cssninja.io/demo/avatars/19.jpg"
      }
    ];
    const records = [
      {
        name: "Delivery App Project",
        date: "August 2020",
        preview: "https://vuero.cssninja.io/demo/photos/apps/1.jpg"
      },
      {
        name: "Health and Fitness Dashboard",
        date: "October 2020",
        preview: "https://vuero.cssninja.io/demo/photos/apps/2.png"
      },
      {
        name: "Tech Summit Expenses",
        date: "XLS file",
        squared: true
      },
      {
        name: "Learning Tracker Dashboard",
        date: "September 2020",
        preview: "https://vuero.cssninja.io/demo/photos/apps/3.png"
      },
      {
        name: "Learning Tracker Dashboard",
        date: "September 2020",
        preview: "https://vuero.cssninja.io/demo/photos/apps/4.png"
      },
      {
        name: "Project Outline",
        date: "DOCX file",
        squared: true
      },
      {
        name: "2020 Projects Digest",
        date: "PDF file",
        squared: true
      },
      {
        name: "Resume Management Mobile App",
        date: "October 2020",
        preview: "https://vuero.cssninja.io/demo/photos/apps/5.png"
      },
      {
        name: "Website Homepage Redesign",
        date: "AI file",
        squared: true
      }
    ];
    const activeTab = ref("all");
    const options = ref(["Newest"]);
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VCheckbox = _sfc_main$2;
      const _component_VTag = _sfc_main$3;
      const _component_VField = _sfc_main$4;
      const _component_VIconWrap = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VButton = _sfc_main$7;
      const _component_VBlock = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => activeTab.value = "all", ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "all")
                  }, _hoisted_8, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "people" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => activeTab.value = "people", ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "people")
                  }, _hoisted_10, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "records" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeTab.value = "records", ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "records")
                  }, _hoisted_12, 32)
                ], 2),
                _hoisted_13
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                _hoisted_18,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => options.value = $event),
                          value: "Newest",
                          label: "Newest",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_19, [
                          createVNode(_component_VTag, {
                            label: "23",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => options.value = $event),
                          value: "Recently updated",
                          label: "Recently updated",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(_component_VTag, {
                            label: "31",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => options.value = $event),
                          value: "Upvoted",
                          label: "Upvoted",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(_component_VTag, {
                            label: "12",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_22, [
                _hoisted_23,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => options.value = $event),
                          value: "User profile",
                          label: "User profile",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_24, [
                          createVNode(_component_VTag, {
                            label: "19",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => options.value = $event),
                          value: "Project",
                          label: "Project",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_25, [
                          createVNode(_component_VTag, {
                            label: "174",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => options.value = $event),
                          value: "Blog Post",
                          label: "Blog Post",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_26, [
                          createVNode(_component_VTag, {
                            label: "71",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => options.value = $event),
                          value: "Wireframes",
                          label: "Wireframes",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_27, [
                          createVNode(_component_VTag, {
                            label: "54",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => options.value = $event),
                          value: "Files",
                          label: "Files",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_28, [
                          createVNode(_component_VTag, {
                            label: "8",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_29, [
                _hoisted_30,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => options.value = $event),
                          value: "Engineering",
                          label: "Engineering",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_31, [
                          createVNode(_component_VTag, {
                            label: "45",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => options.value = $event),
                          value: "Management",
                          label: "Management",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_32, [
                          createVNode(_component_VTag, {
                            label: "12",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => options.value = $event),
                          value: "Software",
                          label: "Software",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_33, [
                          createVNode(_component_VTag, {
                            label: "36",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => options.value = $event),
                          value: "Human Resources",
                          label: "Human Resources",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_34, [
                          createVNode(_component_VTag, {
                            label: "3",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCheckbox, {
                          modelValue: options.value,
                          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => options.value = $event),
                          value: "Finance",
                          label: "Finance",
                          color: "primary",
                          circle: ""
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_35, [
                          createVNode(_component_VTag, {
                            label: "7",
                            rounded: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", {
                class: normalizeClass(["tab-content", [activeTab.value === "all" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_VIconWrap, { icon: "feather:user" }),
                    _hoisted_39
                  ]),
                  createBaseVNode("div", _hoisted_40, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(people, (person, index) => {
                      return createBaseVNode("div", {
                        key: index,
                        class: "search-results-item"
                      }, [
                        createVNode(_component_VBlock, {
                          title: person.name,
                          subtitle: person.role,
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VAvatar, {
                              size: "medium",
                              picture: person.avatar
                            }, null, 8, ["picture"])
                          ]),
                          action: withCtx(() => [
                            createVNode(_component_VButton, { "dark-outlined": "" }, {
                              default: withCtx(() => [
                                _hoisted_41
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "subtitle"])
                      ]);
                    }), 64))
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createBaseVNode("div", _hoisted_43, [
                    createVNode(_component_VIconWrap, { icon: "feather:file-text" }),
                    _hoisted_44
                  ]),
                  createBaseVNode("div", _hoisted_45, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(records, (record, index) => {
                      return createBaseVNode("div", {
                        key: index,
                        class: "search-results-item"
                      }, [
                        createVNode(_component_VBlock, {
                          title: record.name,
                          subtitle: record.date,
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VAvatar, {
                              size: "medium",
                              picture: record.preview,
                              squared: record.squared
                            }, null, 8, ["picture", "squared"])
                          ]),
                          action: withCtx(() => [
                            createVNode(_component_VButton, { "dark-outlined": "" }, {
                              default: withCtx(() => [
                                _hoisted_46
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "subtitle"])
                      ]);
                    }), 64))
                  ])
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["tab-content", [activeTab.value === "people" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("div", _hoisted_48, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(people, (person, index) => {
                      return createBaseVNode("div", {
                        key: index,
                        class: "search-results-item"
                      }, [
                        createVNode(_component_VBlock, {
                          title: person.name,
                          subtitle: person.role,
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VAvatar, {
                              size: "medium",
                              picture: person.avatar
                            }, null, 8, ["picture"])
                          ]),
                          action: withCtx(() => [
                            createVNode(_component_VButton, { "dark-outlined": "" }, {
                              default: withCtx(() => [
                                _hoisted_49
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "subtitle"])
                      ]);
                    }), 64))
                  ])
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["tab-content", [activeTab.value === "records" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_50, [
                  createBaseVNode("div", _hoisted_51, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(records, (record, index) => {
                      return createBaseVNode("div", {
                        key: index,
                        class: "search-results-item"
                      }, [
                        createVNode(_component_VBlock, {
                          title: record.name,
                          subtitle: record.date,
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VAvatar, {
                              size: "medium",
                              picture: record.preview,
                              squared: record.squared
                            }, null, 8, ["picture", "squared"])
                          ]),
                          action: withCtx(() => [
                            createVNode(_component_VButton, { "dark-outlined": "" }, {
                              default: withCtx(() => [
                                _hoisted_52
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "subtitle"])
                      ]);
                    }), 64))
                  ])
                ])
              ], 2)
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-triple-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Search Results");
    useHead({
      title: "Search Results - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FacetSearch = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_FacetSearch)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
