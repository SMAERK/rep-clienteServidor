import { _ as _sfc_main$8, a as _sfc_main$9 } from "./ListWidgetTopicList.90994674.js";
import { _ as _sfc_main$7 } from "./UIWidgetToolbarIcon.7c1a99ff.js";
import { _ as _sfc_main$6 } from "./UIWidget.6c4793e7.js";
import { _ as _sfc_main$5 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$4 } from "./VIconButton.f948e51d.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$2 } from "./VAvatarStack.d8a5f95e.js";
import { d as defineComponent, au as resolveDirective, o as openBlock, f as createElementBlock, q as createBaseVNode, a3 as withDirectives, s as createVNode, h as unref, w as withCtx, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./index.e178843f.js";
import "./VIconBox.298b3a59.js";
import "./via-placeholder.9af8280d.js";
const avatarStack1 = [
  {
    id: 12,
    picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
    initials: "JS",
    color: "info"
  },
  {
    id: 32,
    picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
    initials: "JH",
    color: "success"
  },
  {
    id: 40,
    picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
    initials: "JM",
    color: "warning"
  }
];
const topicList = [
  {
    id: 0,
    icon: "fa-solid:biking",
    color: "yellow",
    name: "Biking",
    category: "Sports"
  },
  {
    id: 1,
    icon: "fa-solid:running",
    color: "orange",
    name: "Running",
    category: "Sports"
  },
  {
    id: 2,
    icon: "fa-solid:skiing",
    color: "green",
    name: "Skiing",
    category: "Sports"
  },
  {
    id: 3,
    icon: "fa-solid:swimmer",
    color: "info",
    name: "Swimming",
    category: "Sports"
  },
  {
    id: 4,
    icon: "fa-solid:dumbbell",
    color: "purple",
    name: "Workout",
    category: "Sports"
  }
];
var LifestyleDashboardV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "lifestyle-dashboard lifestyle-dashboard-v2" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-title is-main"><div class="left"><h2 class="dark-inverted">Explore Hobbies</h2><p class="h-hidden-mobile"> Explore some of the best activities nearby in your region </p></div><div class="right"><a class="action-link" tabindex="0">View All</a></div></div>', 1);
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-9" };
const _hoisted_5 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_6 = { class: "column is-3" };
const _hoisted_7 = { class: "long-card has-background-image" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "long-card-overlay" }, null, -1);
const _hoisted_9 = {
  href: "#",
  class: "long-card-text-overlay"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Foot Trekks"),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-running"
  })
], -1);
const _hoisted_11 = { class: "bottom" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "28.3K", -1);
const _hoisted_13 = { class: "column is-3" };
const _hoisted_14 = { class: "long-card has-background-image" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "long-card-overlay" }, null, -1);
const _hoisted_16 = {
  href: "#",
  class: "long-card-text-overlay"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Rafting Trips"),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-ship"
  })
], -1);
const _hoisted_18 = { class: "bottom" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "8.1K", -1);
const _hoisted_20 = { class: "column is-3" };
const _hoisted_21 = { class: "long-card has-background-image" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "long-card-overlay" }, null, -1);
const _hoisted_23 = {
  href: "#",
  class: "long-card-text-overlay"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Climbing"),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-running"
  })
], -1);
const _hoisted_25 = { class: "bottom" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "19.7K", -1);
const _hoisted_27 = { class: "column is-3" };
const _hoisted_28 = { class: "long-card has-background-image" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "long-card-overlay" }, null, -1);
const _hoisted_30 = {
  href: "#",
  class: "long-card-text-overlay"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Biking"),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-biking"
  })
], -1);
const _hoisted_32 = { class: "bottom" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", null, "48.4K", -1);
const _hoisted_34 = { class: "column is-6" };
const _hoisted_35 = { class: "dashboard-list" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "dashboard-title" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Trending Now"),
    /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "Chek out the latest activities")
  ])
], -1);
const _hoisted_37 = { class: "inner-list" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star"
  })
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_42 = { class: "column is-6" };
const _hoisted_43 = { class: "dashboard-list" };
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-title"><div class="left"><h2 class="dark-inverted">Popular Now</h2><p class="h-hidden-mobile">Our popular best sellers</p></div><div class="right"><a class="action-link" tabindex="0">View All</a></div></div>', 1);
const _hoisted_45 = { class: "inner-list" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star"
  })
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "rating" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-star selected"
  })
], -1);
const _hoisted_50 = { class: "column is-3" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "text",
      class: "input",
      placeholder: "Search..."
    }),
    /* @__PURE__ */ createBaseVNode("button", { class: "searcv-button" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:search"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "topics" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#Trekking"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Climbing"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Biking")
  ])
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" You currently have more than "),
    /* @__PURE__ */ createBaseVNode("span", null, "10 unread messages"),
    /* @__PURE__ */ createTextVNode(" in your inbox. It could be a good time to check them out. ")
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const avatarStack1$1 = avatarStack1;
    const avatarStack2 = avatarStack1;
    const avatarStack3 = avatarStack1;
    const avatarStack4 = avatarStack1;
    const topicList$1 = topicList;
    return (_ctx, _cache) => {
      const _component_VAvatarStack = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_VIconButton = _sfc_main$4;
      const _component_VBlock = _sfc_main$5;
      const _component_UIWidget = _sfc_main$6;
      const _component_UIWidgetToolbarIcon = _sfc_main$7;
      const _component_listWidgetTopicList = _sfc_main$8;
      const _component_ListWidgetSingle = _sfc_main$9;
      const _directive_background = resolveDirective("background");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                withDirectives((openBlock(), createElementBlock("div", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("a", _hoisted_9, [
                    _hoisted_10,
                    createBaseVNode("div", _hoisted_11, [
                      _hoisted_12,
                      createVNode(_component_VAvatarStack, {
                        size: "small",
                        avatars: unref(avatarStack1$1)
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])), [
                  [_directive_background, {
                    src: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/1.jpg",
                    placeholder: "https://via.placeholder.com/800x600"
                  }]
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                withDirectives((openBlock(), createElementBlock("div", _hoisted_14, [
                  _hoisted_15,
                  createBaseVNode("a", _hoisted_16, [
                    _hoisted_17,
                    createBaseVNode("div", _hoisted_18, [
                      _hoisted_19,
                      createVNode(_component_VAvatarStack, {
                        size: "small",
                        avatars: unref(avatarStack2)
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])), [
                  [_directive_background, {
                    src: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/2.jpg",
                    placeholder: "https://via.placeholder.com/800x600"
                  }]
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                withDirectives((openBlock(), createElementBlock("div", _hoisted_21, [
                  _hoisted_22,
                  createBaseVNode("a", _hoisted_23, [
                    _hoisted_24,
                    createBaseVNode("div", _hoisted_25, [
                      _hoisted_26,
                      createVNode(_component_VAvatarStack, {
                        size: "small",
                        avatars: unref(avatarStack3)
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])), [
                  [_directive_background, {
                    src: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/3.jpg",
                    placeholder: "https://via.placeholder.com/800x600"
                  }]
                ])
              ]),
              createBaseVNode("div", _hoisted_27, [
                withDirectives((openBlock(), createElementBlock("div", _hoisted_28, [
                  _hoisted_29,
                  createBaseVNode("a", _hoisted_30, [
                    _hoisted_31,
                    createBaseVNode("div", _hoisted_32, [
                      _hoisted_33,
                      createVNode(_component_VAvatarStack, {
                        size: "small",
                        avatars: unref(avatarStack4)
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])), [
                  [_directive_background, {
                    src: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/4.jpg",
                    placeholder: "https://via.placeholder.com/800x600"
                  }]
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  _hoisted_36,
                  createBaseVNode("div", _hoisted_37, [
                    createVNode(_component_VBlock, {
                      title: "Extreme Foot Trekk",
                      subtitle: "Oct 31, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/1.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_38,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Rafting trip",
                      subtitle: "Oct 30, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/2.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_39,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Climbing Group [Pro]",
                      subtitle: "Oct 31, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/3.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_40,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Bicycle Madness Trek",
                      subtitle: "Oct 31, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/4.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_41,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  _hoisted_44,
                  createBaseVNode("div", _hoisted_45, [
                    createVNode(_component_VBlock, {
                      title: "Extreme Triathlon",
                      subtitle: "Nov 2, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/5.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_46,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Group Running",
                      subtitle: "Oct 29, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/6.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_47,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Suit Diving",
                      subtitle: "Oct 28, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/7.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_48,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VBlock, {
                      title: "Desert Trekk",
                      subtitle: "Oct 27, 2020",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/photos/dashboards/lifestyle/7.jpg",
                          squared: ""
                        })
                      ]),
                      action: withCtx(() => [
                        _hoisted_49,
                        createVNode(_component_VIconButton, {
                          icon: "feather:arrow-right",
                          circle: "",
                          "dark-outlined": ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_50, [
            createVNode(_component_UIWidget, { class: "search-widget" }, {
              body: withCtx(() => [
                _hoisted_51
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "text-widget" }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarIcon, {
                  title: "Messages",
                  icon: "feather:message-square"
                })
              ]),
              body: withCtx(() => [
                _hoisted_52
              ]),
              _: 1
            }),
            createVNode(_component_ListWidgetSingle, {
              title: "Hot Topics",
              class: "list-widget-v1 p-t-20 p-l-20 p-r-20 p-b-20"
            }, {
              default: withCtx(() => [
                createVNode(_component_listWidgetTopicList, { topics: unref(topicList$1) }, null, 8, ["topics"])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Hobbies");
    useHead({
      title: "Hobbies - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_LifestyleDashboardV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_LifestyleDashboardV2)
      ]);
    };
  }
});
export { _sfc_main as default };
