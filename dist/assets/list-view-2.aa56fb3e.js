import { _ as _sfc_main$5 } from "./VFlexPagination.ec5e6993.js";
import { b as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, a2 as withKeys, W as withModifiers, h as unref, F as Fragment, X as renderList, t as toDisplayString, y as createCommentVNode, aK as TransitionGroup, p as createBlock, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VFlex.c8e24668.js";
var _imports_0 = "/assets/search-2.4f147bb8.svg";
var _imports_1 = "/assets/search-2-dark.84e80fe9.svg";
const retails = [
  {
    id: "1",
    picture: "https://vuero.cssninja.io/demo/photos/1.jpg",
    name: "1396 Redmond Street",
    location: "1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles, CA",
    rating: 4,
    details: {
      rooms: 5,
      beds: 3,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "2",
    picture: "https://vuero.cssninja.io/demo/photos/2.jpg",
    name: "24 Mulberry Street",
    location: "24 Mulberry Street, Suite 43, New York, NY",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      wifi: true,
      cleaning: true
    }
  },
  {
    id: "3",
    picture: "https://vuero.cssninja.io/demo/photos/3.jpg",
    name: "62 John Walberg Ave",
    location: "62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles, CA",
    rating: 5,
    details: {
      rooms: 4,
      beds: 2,
      bathrooms: 2
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "4",
    picture: "https://vuero.cssninja.io/demo/photos/4.jpg",
    name: "48 Manhattan Ave",
    location: "48 Manhattan Avenue, Suite G12, New York, NY",
    rating: 5,
    details: {
      rooms: 5,
      beds: 4,
      bathrooms: 3
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "5",
    picture: "https://vuero.cssninja.io/demo/photos/5.jpg",
    name: "12 Charity Street",
    location: "12 Charity Street, Apartment 49, Brooklynn, NY",
    rating: 4,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      cleaning: true
    }
  },
  {
    id: "6",
    picture: "https://vuero.cssninja.io/demo/photos/6.jpg",
    name: "23 Bakery Street",
    location: "23 Bakery Street, Suite 121, New York, NY",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
      otherGreatCoolThing: true
    }
  },
  {
    id: "7",
    picture: "https://vuero.cssninja.io/demo/photos/7.jpg",
    name: "1028 Pasadena Ave",
    location: "1028 Pasadena Avenue, Suite F 24, Los Angeles, CA",
    rating: 5,
    details: {
      rooms: 7,
      beds: 5,
      bathrooms: 3
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "8",
    picture: "https://vuero.cssninja.io/demo/photos/8.jpg",
    name: "54 Church Street",
    location: "54 Church Street, Apartment 2, New York, NY",
    rating: 5,
    details: {
      rooms: 2,
      beds: 1,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true
    }
  },
  {
    id: "9",
    picture: "https://vuero.cssninja.io/demo/photos/9.jpg",
    name: "112 Old City District",
    location: "112 Old City District, Apartment 5 Suite 42, New York, NY",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true
    }
  },
  {
    id: "10",
    picture: "https://vuero.cssninja.io/demo/photos/10.jpg",
    name: "51 St Leonard Street",
    location: "51 St Leonard Street, Suite 23, New York, NY",
    rating: 5,
    details: {
      rooms: 4,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true
    }
  }
];
var ViewListV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar" };
const _hoisted_2$1 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Active", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "Inactive", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "page-content-inner" };
const _hoisted_10 = { class: "list-view list-view-v2" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_13 = { class: "list-view-inner" };
const _hoisted_14 = { class: "list-view-item-inner" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "meta-left" };
const _hoisted_17 = { class: "rating" };
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
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_21 = { class: "icon-list" };
const _hoisted_22 = { key: 0 };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Parking", -1);
const _hoisted_25 = [
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = { key: 1 };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-signal"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Wifi", -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = { key: 2 };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-air-flow"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", null, "Heater", -1);
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = { key: 3 };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-sun"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "Cleaning", -1);
const _hoisted_37 = [
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = { key: 4 };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "4 more", -1);
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = { key: 5 };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "3 more", -1);
const _hoisted_45 = [
  _hoisted_43,
  _hoisted_44
];
const _hoisted_46 = { key: 6 };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", null, "2 more", -1);
const _hoisted_49 = [
  _hoisted_47,
  _hoisted_48
];
const _hoisted_50 = { key: 7 };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", null, "1 more", -1);
const _hoisted_53 = [
  _hoisted_51,
  _hoisted_52
];
const _hoisted_54 = { class: "meta-right" };
const _hoisted_55 = { class: "buttons" };
const _hoisted_56 = /* @__PURE__ */ createTextVNode("More Info");
const _hoisted_57 = /* @__PURE__ */ createTextVNode("Book Now");
const _hoisted_58 = { class: "list-view-inner" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("active");
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return retails;
      } else {
        return retails.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || "parking".match(new RegExp(filters.value, "i")) && item.comodities.parking || "wifi".match(new RegExp(filters.value, "i")) && item.comodities.wifi || "heater".match(new RegExp(filters.value, "i")) && item.comodities.heater || "cleaning".match(new RegExp(filters.value, "i")) && item.comodities.cleaning;
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VFlexPagination = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
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
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "active" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeTab.value = "active", ["prevent"]), ["space"])),
                    onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "active")
                  }, _hoisted_5, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "inactive" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeTab.value = "inactive", ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "inactive")
                  }, _hoisted_7, 32)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_11,
                _hoisted_12
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              id: "active-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "active" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_13, [
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
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("img", {
                            src: item.picture,
                            alt: ""
                          }, null, 8, _hoisted_15),
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("h3", null, [
                              createBaseVNode("span", null, toDisplayString(item.name), 1),
                              createBaseVNode("span", _hoisted_17, [
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 1 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 2 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 3 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 4 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 5 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2)
                              ])
                            ]),
                            createBaseVNode("p", null, [
                              _hoisted_18,
                              createBaseVNode("span", null, toDisplayString(item.location), 1)
                            ]),
                            createBaseVNode("span", null, [
                              createBaseVNode("span", null, toDisplayString(item.details.rooms > 1 ? `${item.details.rooms} rooms` : `${item.details.rooms} room`), 1),
                              _hoisted_19,
                              createBaseVNode("span", null, toDisplayString(item.details.beds > 1 ? `${item.details.beds} beds` : `${item.details.beds} bed`), 1),
                              _hoisted_20,
                              createBaseVNode("span", null, toDisplayString(item.details.bathrooms > 1 ? `${item.details.bathrooms} bathrooms` : `${item.details.bathrooms} bathroom`), 1)
                            ]),
                            createBaseVNode("div", _hoisted_21, [
                              item.comodities.parking ? (openBlock(), createElementBlock("span", _hoisted_22, _hoisted_25)) : createCommentVNode("", true),
                              item.comodities.wifi ? (openBlock(), createElementBlock("span", _hoisted_26, _hoisted_29)) : createCommentVNode("", true),
                              item.comodities.heater ? (openBlock(), createElementBlock("span", _hoisted_30, _hoisted_33)) : createCommentVNode("", true),
                              item.comodities.cleaning ? (openBlock(), createElementBlock("span", _hoisted_34, _hoisted_37)) : createCommentVNode("", true),
                              item.comodities.other && item.comodities.otherThing && item.comodities.otherCoolThing && item.comodities.otherGreatCoolThing ? (openBlock(), createElementBlock("span", _hoisted_38, _hoisted_41)) : item.comodities.other && item.comodities.otherThing && item.comodities.otherCoolThing ? (openBlock(), createElementBlock("span", _hoisted_42, _hoisted_45)) : item.comodities.other && item.comodities.otherThing ? (openBlock(), createElementBlock("span", _hoisted_46, _hoisted_49)) : item.comodities.other ? (openBlock(), createElementBlock("span", _hoisted_50, _hoisted_53)) : createCommentVNode("", true)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_54, [
                            createBaseVNode("div", _hoisted_55, [
                              createVNode(_component_VButton, { light: "" }, {
                                default: withCtx(() => [
                                  _hoisted_56
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VButton, {
                                color: "primary",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_57
                                ]),
                                _: 1
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
              class: normalizeClass(["tab-content", [activeTab.value === "inactive" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_58, [
                createVNode(_component_VPlaceholderPage, {
                  title: "There are no inactive properties.",
                  subtitle: "Looks like there are no inactive properties to display. You can\n                disable and also enable a property from the property settings.",
                  larger: ""
                }, {
                  image: withCtx(() => []),
                  _: 1
                })
              ])
            ], 2)
          ])
        ])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List View 2");
    useHead({
      title: "List View 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ViewListV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ViewListV2)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
