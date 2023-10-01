import { _ as _sfc_main$c } from "./VFlexPagination.ec5e6993.js";
import { c as _sfc_main$7, _ as _sfc_main$b } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$a } from "./FlexTableDropdown.bdf5c6d6.js";
import { _ as _sfc_main$9 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
import { _ as _sfc_main$6 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$3, d as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, h as unref, p as createBlock, y as createCommentVNode, F as Fragment, X as renderList, t as toDisplayString, x as createTextVNode, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./via-placeholder.9af8280d.js";
const users = [
  {
    id: 0,
    username: "Erik K.",
    position: "Product Manager",
    picture: "/images/avatars/svg/vuero-1.svg",
    location: "Las Vegas, NV",
    industry: "Software",
    status: "Online",
    contacts: [
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
    username: "Jimmy H.",
    position: "Project Manager",
    picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
    location: "Los Angeles, CA",
    industry: "Business",
    status: "Working",
    contacts: [
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
    username: "Melany W.",
    position: "Web Developer",
    picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
    location: "San Jose, CA",
    industry: "Design",
    status: "Online",
    contacts: [
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
    username: "Joshua S.",
    position: "Backend Developer",
    picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
    location: "Las Vegas, NV",
    industry: "Accounting",
    status: "Suspended",
    contacts: [
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        initials: "TS",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    username: "Tara S.",
    position: "UI/UX Designer",
    picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
    location: "Los Angeles, CA",
    industry: "Finance",
    status: "Working",
    contacts: [
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
    id: 5,
    username: "Greta K.",
    position: "Sales Manager",
    picture: "https://vuero.cssninja.io/demo/avatars/19.jpg",
    location: "Berlin, Germany",
    industry: "Business",
    status: "Online",
    contacts: [
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
    username: "Kelly M.",
    position: "Product Manager",
    picture: "https://vuero.cssninja.io/demo/avatars/11.jpg",
    location: "London, UK",
    industry: "Software",
    status: "Online",
    contacts: [
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
    id: 8,
    username: "Alan T.",
    position: "Software Engineer",
    picture: void 0,
    color: "h-yellow",
    initials: "AT",
    location: "San Francisco, CA",
    industry: "Software",
    status: "Offline",
    contacts: [
      {
        id: 25,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "MW",
        color: "info"
      }
    ]
  },
  {
    id: 9,
    username: "Courtney W.",
    position: "Web Developer",
    picture: "https://vuero.cssninja.io/demo/avatars/26.jpg",
    location: "Melbourne, Australia",
    industry: "Software",
    status: "Offline",
    contacts: [
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
var FlexListV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Add User ");
const _hoisted_3 = { class: "page-content-inner" };
const _hoisted_4 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = { class: "item-name dark-inverted" };
const _hoisted_8 = { class: "item-meta" };
const _hoisted_9 = { class: "light-text" };
const _hoisted_10 = { class: "light-text" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const page = ref(42);
    const filters = ref("");
    const users$1 = users;
    const columns = {
      username: {
        label: "User",
        grow: true,
        media: true
      },
      location: "Location",
      industry: "Industry",
      status: "Status",
      contacts: "Relations",
      actions: {
        label: "Actions",
        align: "end"
      }
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return users$1;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return users$1.filter((item) => {
          return item.username.match(filterRe) || item.position.match(filterRe) || item.industry.match(filterRe) || item.status.match(filterRe) || item.location.match(filterRe);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VButtons = _sfc_main$4;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VTag = _sfc_main$8;
      const _component_VAvatarStack = _sfc_main$9;
      const _component_FlexTableDropdown = _sfc_main$a;
      const _component_VFlexTable = _sfc_main$b;
      const _component_VFlexPagination = _sfc_main$c;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
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
              })
            ]),
            _: 1
          }),
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                icon: "fas fa-plus",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
              key: 0,
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_5,
                _hoisted_6
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
              key: 1,
              data: unref(filteredData),
              columns: unref(columns),
              compact: ""
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
                              picture: item.picture,
                              badge: item.badge,
                              color: item.color,
                              initials: item.initials,
                              size: "medium"
                            }, null, 8, ["picture", "badge", "color", "initials"]),
                            createBaseVNode("div", null, [
                              createBaseVNode("span", _hoisted_7, toDisplayString(item.username), 1),
                              createBaseVNode("span", _hoisted_8, [
                                createBaseVNode("span", null, toDisplayString(item.position), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_9, toDisplayString(item.location), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_10, toDisplayString(item.industry), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            item.status === "Online" ? (openBlock(), createBlock(_component_VTag, {
                              key: 0,
                              color: "success",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            item.status === "Working" ? (openBlock(), createBlock(_component_VTag, {
                              key: 1,
                              color: "info",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            item.status === "Suspended" ? (openBlock(), createBlock(_component_VTag, {
                              key: 2,
                              color: "danger",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            item.status === "Offline" ? (openBlock(), createBlock(_component_VTag, {
                              key: 3,
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.contacts,
                              size: "small",
                              limit: 3,
                              class: "is-pushed-mobile"
                            }, null, 8, ["avatars"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                          default: withCtx(() => [
                            createVNode(_component_FlexTableDropdown)
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
              key: 2,
              "current-page": page.value,
              "onUpdate:current-page": _cache[1] || (_cache[1] = ($event) => page.value = $event),
              "item-per-page": 10,
              "total-items": 873,
              "max-links-displayed": 7,
              "no-router": ""
            }, null, 8, ["current-page"])) : createCommentVNode("", true)
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
    viewWrapper.setPageTitle("List Flex 1");
    useHead({
      title: "List Flex 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FlexListV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FlexListV1)
      ]);
    };
  }
});
export { _sfc_main as default };
