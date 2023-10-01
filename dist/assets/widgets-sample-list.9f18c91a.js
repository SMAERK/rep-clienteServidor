import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, F as Fragment, X as renderList, q as createBaseVNode, h as unref, g as normalizeClass, t as toDisplayString, p as createBlock, w as withCtx, s as createVNode, a1 as useHead } from "./vendor.6548d360.js";
import { a as _sfc_main$8, _ as _sfc_main$b } from "./ListWidgetTopicList.90994674.js";
import { c as todoList1, d as todoList2, t as todoList3, a as todoList4, b as _sfc_main$9, _ as _sfc_main$a } from "./todoList.76b7e782.js";
import { _ as _sfc_main$6 } from "./VDropdown.38fc5e7d.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { _ as _sfc_main$7 } from "./VAvatar.08652fea.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VAvatarStack.d8a5f95e.js";
import "./VIconBox.298b3a59.js";
import "./VAnimatedCheckbox.ef1a08f3.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
var ListWidgetIconTimeline_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "icon-timeline" };
const _hoisted_2$4 = ["src"];
const _hoisted_3$4 = ["data-icon"];
const _hoisted_4$4 = { class: "timeline-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    items: { default: () => [] },
    squared: { type: Boolean },
    colored: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: "timeline-item"
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["timeline-icon", [props.squared && "is-squared", props.colored && "is-" + item.color]])
            }, [
              item.picture ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "avatar",
                src: item.picture,
                alt: "",
                onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 40, _hoisted_2$4)) : (openBlock(), createElementBlock("i", {
                key: 1,
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": item.icon
              }, null, 8, _hoisted_3$4))
            ], 2),
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("p", null, toDisplayString(item.title), 1),
              createBaseVNode("span", null, toDisplayString(item.time), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$4 = {};
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-download"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Download"),
    /* @__PURE__ */ createBaseVNode("span", null, "Download this file")
  ])
], -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-upload"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Upload"),
    /* @__PURE__ */ createBaseVNode("span", null, "Upload a new version")
  ])
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Permissions"),
    /* @__PURE__ */ createBaseVNode("span", null, "Manage file permissions")
  ])
], -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-share"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Share"),
    /* @__PURE__ */ createBaseVNode("span", null, "Share this file")
  ])
], -1);
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("a", {
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
    /* @__PURE__ */ createBaseVNode("span", null, "Delete"),
    /* @__PURE__ */ createBaseVNode("span", null, "Delete this file")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$6;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    dots: "",
    right: "",
    spaced: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$4,
      _hoisted_2$3,
      _hoisted_3$3,
      _hoisted_4$3,
      _hoisted_5$2,
      _hoisted_6$2,
      _hoisted_7$2
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
var ListWidgetFileList_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = ["src"];
const _hoisted_2$2 = { class: "flex-meta is-light" };
const _hoisted_3$2 = { href: "#" };
const _hoisted_4$2 = { class: "flex-end" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    files: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ListWidgetFileDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.files, (file) => {
          return openBlock(), createElementBlock("div", {
            key: file.id,
            class: "inner-list-item media-flex-center"
          }, [
            createBaseVNode("img", {
              class: "image-icon",
              src: file.icon,
              alt: ""
            }, null, 8, _hoisted_1$3),
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("a", _hoisted_3$2, toDisplayString(file.name), 1),
              createBaseVNode("span", null, toDisplayString(file.type), 1)
            ]),
            createBaseVNode("div", _hoisted_4$2, [
              createVNode(_component_ListWidgetFileDropdown)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
var ListWidgetUserList_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "flex-meta is-light" };
const _hoisted_2$1 = { href: "#" };
const _hoisted_3$1 = { class: "flex-end" };
const _hoisted_4$1 = ["data-content"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _hoisted_7$1 = ["data-content"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    users: { default: () => [] },
    squared: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.users, (user) => {
          return openBlock(), createElementBlock("div", {
            key: user.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VAvatar, {
              picture: user.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"]),
            createBaseVNode("div", _hoisted_1$2, [
              createBaseVNode("a", _hoisted_2$1, toDisplayString(user.name), 1),
              createBaseVNode("span", null, toDisplayString(user.position), 1)
            ]),
            createBaseVNode("div", _hoisted_3$1, [
              user.progress < 0 ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: "#",
                class: "go-icon is-down",
                "data-content": user.progress + "%"
              }, _hoisted_6$1, 8, _hoisted_4$1)) : (openBlock(), createElementBlock("a", {
                key: 1,
                href: "#",
                class: "go-icon is-up",
                "data-content": "+" + user.progress + "%"
              }, _hoisted_9$1, 8, _hoisted_7$1))
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const fileList1 = [];
const fileList2 = [];
const userList = [
  {
    id: 0,
    picture: "https://vuero.cssninja.io/demo/avatars/31.jpg",
    name: "Yasseene Amzi",
    position: "Business Analyst",
    progress: 18
  },
  {
    id: 1,
    picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
    name: "Mary Lebowski",
    position: "Project Manager",
    progress: 22
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "Erik Kovalsky",
    position: "Product Manager",
    progress: -12
  },
  {
    id: 3,
    picture: "https://vuero.cssninja.io/demo/avatars/32.jpg",
    name: "Jonathan Krugger",
    position: "Product Manager",
    progress: 32
  },
  {
    id: 4,
    picture: "https://vuero.cssninja.io/demo/avatars/21.jpg",
    name: "Elizabeth Fisher",
    position: "Mobile Developer",
    progress: -4
  },
  {
    id: 5,
    picture: "https://vuero.cssninja.io/demo/avatars/21.jpg",
    name: "Tara Svenson",
    position: "UI/UX Designer",
    progress: 32
  }
];
const topicList = [
  {
    id: 0,
    icon: "feather:chrome",
    color: "info",
    name: "Browsers",
    category: "Technology",
    users: [
      {
        id: 2,
        picture: "https://vuero.cssninja.io/demo/avatars/12.jpg"
      },
      {
        id: 5,
        picture: "https://vuero.cssninja.io/demo/avatars/22.jpg"
      },
      {
        id: 11,
        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  },
  {
    id: 1,
    icon: "feather:wind",
    color: "green",
    name: "Natural Ecosystems",
    category: "Environment",
    users: [
      {
        id: 1,
        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: 2,
    icon: "feather:cpu",
    color: "orange",
    name: "Computer Chips",
    category: "Technology",
    users: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
      },
      {
        id: 21,
        picture: "https://vuero.cssninja.io/demo/avatars/23.jpg"
      }
    ]
  },
  {
    id: 3,
    icon: "feather:music",
    color: "purple",
    name: "Modal Improvisation",
    category: "Music",
    users: [
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/18.jpg"
      },
      {
        id: 6,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
      },
      {
        id: 3,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  },
  {
    id: 4,
    icon: "feather:monitor",
    color: "yellow",
    name: "Old Movies",
    category: "Entertainment",
    users: [
      {
        id: 28,
        picture: "https://vuero.cssninja.io/demo/avatars/32.jpg"
      },
      {
        id: 20,
        picture: "https://vuero.cssninja.io/demo/avatars/22.jpg"
      }
    ]
  },
  {
    id: 5,
    icon: "feather:github",
    color: "purple",
    name: "Git Management",
    category: "Technology",
    users: [
      {
        id: 10,
        picture: "https://vuero.cssninja.io/demo/avatars/27.jpg"
      },
      {
        id: 16,
        picture: "https://vuero.cssninja.io/demo/avatars/16.jpg"
      },
      {
        id: 25,
        picture: "https://vuero.cssninja.io/demo/avatars/29.jpg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 105,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 106,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  }
];
const timeline = [
  {
    id: 0,
    icon: "feather:phone-call",
    picture: void 0,
    title: "Call Danny at Colby's",
    time: "Today - 11:30am",
    color: "primary"
  },
  {
    id: 1,
    icon: "feather:phone-call",
    picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
    title: "Meeting with Alice",
    time: "Today - 01:00pm",
    color: ""
  },
  {
    id: 2,
    icon: "feather:message-circle",
    picture: void 0,
    title: "Answer Annie's message",
    time: "Today - 01:45pm",
    color: "info"
  },
  {
    id: 3,
    icon: "feather:mail",
    picture: void 0,
    title: "Send new campaign",
    time: "Today - 02:30pm",
    color: "success"
  },
  {
    id: 4,
    icon: "feather:smile",
    picture: void 0,
    title: "Project review",
    time: "Today - 03:30pm",
    color: ""
  },
  {
    id: 5,
    icon: "feather:phone-call",
    picture: void 0,
    title: "Call Trisha Jackson",
    time: "Today - 05:00pm",
    color: "orange"
  },
  {
    id: 6,
    icon: "feather:feather",
    picture: void 0,
    title: "Write proposal for Don",
    time: "Today - 06:00pm",
    color: "yellow"
  }
];
const _hoisted_1$1 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_2 = { class: "column is-4" };
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = { class: "column is-4" };
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = { class: "column is-4" };
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_listWidgetUserList = _sfc_main$2;
      const _component_ListWidgetSingle = _sfc_main$8;
      const _component_listWidgetFileList = _sfc_main$3;
      const _component_ListWidgetTabbed = _sfc_main$9;
      const _component_ListWidgetTodoList = _sfc_main$a;
      const _component_listWidgetTopicList = _sfc_main$b;
      const _component_ListWidgetIconTimeline = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ListWidgetSingle, {
            title: "User Progress",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetUserList, { users: unref(userList) }, null, 8, ["users"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_ListWidgetSingle, {
            title: "User Progress",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetUserList, {
                users: unref(userList),
                squared: ""
              }, null, 8, ["users"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_ListWidgetTabbed, {
            title: "Files",
            straight: "",
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_listWidgetFileList, { files: unref(fileList1) }, null, 8, ["files"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_listWidgetFileList, { files: unref(fileList2) }, null, 8, ["files"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_ListWidgetSingle, {
            title: "Todo",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, {
                todos: unref(todoList1),
                color: "warning"
              }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_ListWidgetSingle, {
            title: "Todo",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, {
                todos: unref(todoList2),
                color: "info"
              }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_ListWidgetTabbed, {
            title: "Todo",
            straight: "",
            labels: ["All", "Mine"],
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, { todos: unref(todoList3) }, null, 8, ["todos"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, { todos: unref(todoList4) }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_ListWidgetSingle, {
            title: "Topics",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetTopicList, {
                topics: unref(topicList),
                rounded: ""
              }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_ListWidgetSingle, {
            title: "Topics",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_ListWidgetTabbed, {
            title: "Topics",
            straight: "",
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_ListWidgetSingle, {
            title: "Timeline",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, { items: unref(timeline) }, null, 8, ["items"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_ListWidgetSingle, {
            title: "Timeline",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, {
                items: unref(timeline),
                squared: ""
              }, null, 8, ["items"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(_component_ListWidgetSingle, {
            title: "Timeline",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, {
                items: unref(timeline),
                squared: "",
                colored: ""
              }, null, 8, ["items"])
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
    viewWrapper.setPageTitle("Widgets List");
    useHead({
      title: "Widgets List - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_WidgetsList = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_WidgetsList)
      ]);
    };
  }
});
export { _sfc_main as default };
