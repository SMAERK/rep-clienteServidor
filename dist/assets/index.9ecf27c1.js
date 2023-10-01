import { _ as _sfc_main$a } from "./VFlexPagination.ec5e6993.js";
import { _ as _sfc_main$3 } from "./VDropdown.38fc5e7d.js";
import { _ as _export_sfc, b as _sfc_main$5 } from "./index.e178843f.js";
import { o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, d as defineComponent, k as ref, e as computed, f as createElementBlock, s as createVNode, a3 as withDirectives, a4 as vModelText, h as unref, t as toDisplayString, g as normalizeClass, F as Fragment, X as renderList, aK as TransitionGroup, y as createCommentVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$9 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
import { _ as _sfc_main$7 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as _sfc_main$4 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _imports_0, a as _imports_1 } from "./search-1-dark.119fdb96.js";
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
      class: "lnil lnil-user-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Profile"),
    /* @__PURE__ */ createBaseVNode("span", null, "View profile")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-bubble"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Message"),
    /* @__PURE__ */ createBaseVNode("span", null, "Send Message")
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
      class: "lnil lnil-travel"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Transfer"),
    /* @__PURE__ */ createBaseVNode("span", null, "Transfer to other list")
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
      class: "lnil lnil-trash"
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
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1
    ]),
    _: 1
  });
}
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const users = [];
var ViewListV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Approve ");
const _hoisted_7 = { class: "page-content-inner" };
const _hoisted_8 = { class: "list-view list-view-v1" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "list-view-inner" };
const _hoisted_12 = { class: "list-view-item-inner" };
const _hoisted_13 = { class: "meta-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_15 = { class: "meta-right" };
const _hoisted_16 = { class: "tags" };
const _hoisted_17 = { class: "stats" };
const _hoisted_18 = { class: "stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Projects", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_21 = { class: "stat" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Replies", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_24 = { class: "stat" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "Posts", -1);
const _hoisted_26 = { class: "network" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "in Team", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const users$1 = users;
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users$1;
      } else {
        return users$1.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      const _component_VTag = _sfc_main$8;
      const _component_VAvatarStack = _sfc_main$9;
      const _component_ListViewV1Dropdown = __unplugin_components_7;
      const _component_VFlexPagination = _sfc_main$a;
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
          createBaseVNode("div", _hoisted_2, [
            unref(filteredData).length === 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "1 record found")) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(filteredData).length) + " records found", 1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VButton, {
              color: "primary",
              icon: "fas fa-check",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_9,
                _hoisted_10
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_11, [
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
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(_component_VAvatar, {
                          picture: item.medias.avatar,
                          size: "large",
                          badge: item.medias.flag
                        }, null, 8, ["picture", "badge"]),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("h3", null, toDisplayString(item.name), 1),
                          createBaseVNode("span", null, [
                            _hoisted_14,
                            createBaseVNode("span", null, toDisplayString(item.location), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_component_VTag, {
                              label: item.role,
                              color: item.roleColor,
                              rounded: "",
                              elevated: ""
                            }, null, 8, ["label", "color"])
                          ]),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("span", null, toDisplayString(item.stats.projects), 1),
                              _hoisted_19
                            ]),
                            _hoisted_20,
                            createBaseVNode("div", _hoisted_21, [
                              createBaseVNode("span", null, toDisplayString(item.stats.replies), 1),
                              _hoisted_22
                            ]),
                            _hoisted_23,
                            createBaseVNode("div", _hoisted_24, [
                              createBaseVNode("span", null, toDisplayString(item.stats.posts), 1),
                              _hoisted_25
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_26, [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.teams,
                              limit: 3,
                              size: "small"
                            }, null, 8, ["avatars"]),
                            _hoisted_27
                          ]),
                          createVNode(_component_ListViewV1Dropdown)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ]),
          unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
            key: 0,
            "item-per-page": 10,
            "total-items": 873,
            "current-page": 42,
            "max-links-displayed": 5
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List View 1");
    useHead({
      title: "List View 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ViewListV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ViewListV1)
      ]);
    };
  }
});
export { _sfc_main as default };
