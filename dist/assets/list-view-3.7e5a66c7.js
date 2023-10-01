import { _ as _sfc_main$5 } from "./VFlexPagination.ec5e6993.js";
import { _ as _sfc_main$4 } from "./VIconButton.f948e51d.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, a2 as withKeys, W as withModifiers, h as unref, F as Fragment, X as renderList, t as toDisplayString, aK as TransitionGroup, p as createBlock, y as createCommentVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
var _imports_2 = "/assets/thinking-canvas.6e639b9a.svg";
var _imports_3 = "/assets/thinking-canvas-dark.3bdce730.svg";
const offers = [
  {
    id: "1",
    logo: "https://vuero.cssninja.io/demo/photos/brands/airbnb.svg",
    title: "Node JS Fullstack Developer wanted \u{1F44C}",
    location: "San Diego",
    duration: "Full Time",
    requirements: "3 Years Exp."
  },
  {
    id: "2",
    logo: "https://vuero.cssninja.io/demo/photos/brands/hubspot.svg",
    title: "Project Manager for React Native Project",
    location: "Los Angeles",
    duration: "Part Time",
    requirements: "2 Years Exp."
  },
  {
    id: "3",
    logo: "https://vuero.cssninja.io/demo/photos/brands/slack.svg",
    title: "UI/UX Designer to Consolidate the UX Team \u{1F4AA}\u{1F4AA}",
    location: "Los Angeles",
    duration: "Full Time",
    requirements: "3 Years Exp."
  },
  {
    id: "4",
    logo: "https://vuero.cssninja.io/demo/photos/brands/gitlab.svg",
    title: "IT Team Senior DevOps Manager",
    location: "Los Angeles",
    duration: "Full Time",
    requirements: "10 Years Exp."
  },
  {
    id: "5",
    logo: "https://vuero.cssninja.io/demo/photos/brands/google.svg",
    title: "Fullstack Developer With Solid MongoDB Skills",
    location: "San Francisco",
    duration: "Full Time",
    requirements: "5 Years Exp."
  },
  {
    id: "6",
    logo: "https://vuero.cssninja.io/demo/photos/brands/facebook.svg",
    title: "Fullstack Javascript and Node JS Developer",
    location: "Pasadena",
    duration: "Full Time",
    requirements: "4 Years Exp."
  },
  {
    id: "7",
    logo: "https://vuero.cssninja.io/demo/photos/brands/tnw.svg",
    title: "Product Owner for React Native Project",
    location: "Los Angeles",
    duration: "Full Time",
    requirements: "2 Years Exp."
  },
  {
    id: "8",
    logo: "https://vuero.cssninja.io/demo/photos/brands/dribbble.svg",
    title: "UI/UX Designer With Html5 and Sass Skills \u{1F44D}",
    location: "San Diego",
    duration: "Full Time",
    requirements: "4 Years Exp."
  },
  {
    id: "9",
    logo: "https://vuero.cssninja.io/demo/photos/brands/atlassian.svg",
    title: "Experienced Senior UX Team Manager",
    location: "Melbourne",
    duration: "Full Time",
    requirements: "10 Years Exp."
  },
  {
    id: "10",
    logo: "https://vuero.cssninja.io/demo/photos/brands/github.svg",
    title: "Fullstack Javascript and Node JS Developer",
    location: "Los Angeles",
    duration: "Part Time",
    requirements: "1 Year Exp."
  },
  {
    id: "11",
    logo: "https://vuero.cssninja.io/demo/photos/brands/airbnb.svg",
    title: "Node JS Fullstack Developer wanted \u{1F44C}",
    location: "San Diego",
    duration: "Full Time",
    requirements: "3 Years Exp."
  },
  {
    id: "12",
    logo: "https://vuero.cssninja.io/demo/photos/brands/airbnb.svg",
    title: "Node JS Fullstack Developer wanted \u{1F44C}",
    location: "San Diego",
    duration: "Full Time",
    requirements: "3 Years Exp."
  }
];
var ViewListV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar is-reversed" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1);
const _hoisted_3 = { class: "tabs-inner" };
const _hoisted_4 = { class: "tabs" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "All", -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "Saved", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_10 = { class: "page-content-inner" };
const _hoisted_11 = { class: "list-view list-view-v3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_14 = { class: "list-view-inner" };
const _hoisted_15 = { class: "list-view-item-inner" };
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "meta-left" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
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
  "data-icon": "feather:check-circle"
}, null, -1);
const _hoisted_23 = { class: "meta-right" };
const _hoisted_24 = { class: "buttons" };
const _hoisted_25 = /* @__PURE__ */ createTextVNode(" Apply Now ");
const _hoisted_26 = { class: "list-view-inner" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return offers;
      } else {
        return offers.filter((item) => {
          return item.logo.match(new RegExp(filters.value, "i")) || item.title.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.duration.match(new RegExp(filters.value, "i")) || item.requirements.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VIconButton = _sfc_main$4;
      const _component_VFlexPagination = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "Search...",
                "data-filter-target": ".list-view-item"
              }, null, 512), [
                [vModelText, filters.value]
              ]),
              _hoisted_2$1
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeTab.value = "all", ["prevent"]), ["space"])),
                    onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "all")
                  }, _hoisted_6, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "saved" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeTab.value = "saved", ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "saved")
                  }, _hoisted_8, 32)
                ], 2),
                _hoisted_9
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_12,
                _hoisted_13
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              id: "active-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "all" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(TransitionGroup, {
                  name: "list-complete",
                  tag: "div"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "list-view-item"
                      }, [
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("img", {
                            class: "avatar",
                            src: item.logo,
                            alt: "",
                            onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                          }, null, 40, _hoisted_16),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("h3", null, toDisplayString(item.title), 1),
                            createBaseVNode("span", null, [
                              _hoisted_18,
                              createBaseVNode("span", null, toDisplayString(item.location), 1),
                              _hoisted_19,
                              _hoisted_20,
                              createBaseVNode("span", null, toDisplayString(item.duration), 1),
                              _hoisted_21,
                              _hoisted_22,
                              createBaseVNode("span", null, toDisplayString(item.requirements), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            createBaseVNode("div", _hoisted_24, [
                              createVNode(_component_VButton, {
                                color: "primary",
                                outlined: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_25
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VIconButton, {
                                icon: "feather:bookmark",
                                class: "hint--bubble hint--primary hint--top",
                                "data-hint": "Save",
                                light: "",
                                circle: ""
                              })
                            ])
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
              class: normalizeClass(["tab-content", [activeTab.value === "saved" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_VPlaceholderPage, {
                  title: "No saved jobs.",
                  subtitle: "Looks like you don't have any saved jobs for the moment. It's\n                  also possible that some of your saved items expired."
                }, {
                  image: withCtx(() => [
                    _hoisted_27,
                    _hoisted_28
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List View 3");
    useHead({
      title: "List View 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ViewListV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ViewListV3)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
