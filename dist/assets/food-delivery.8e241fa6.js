import { i as iconList, _ as _sfc_main$b } from "./menuList.eedebb36.js";
import { _ as _sfc_main$a } from "./ContactWidget.4ef19c97.js";
import { _ as _sfc_main$9 } from "./UIWidgetToolbarIcon.7c1a99ff.js";
import { _ as _sfc_main$6, a as _sfc_main$8 } from "./UIWidgetFollowerStats.3b047c4d.js";
import { _ as _sfc_main$7 } from "./UIWidget.6c4793e7.js";
import { a as followersStats, _ as _sfc_main$5 } from "./followers.c0b11e85.js";
import { b as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$2 } from "./VPlaceholderSection.d614fe7b.js";
import { d as defineComponent, k as ref, Y as onMounted, Z as onUnmounted, o as openBlock, f as createElementBlock, q as createBaseVNode, F as Fragment, X as renderList, a2 as withKeys, W as withModifiers, t as toDisplayString, h as unref, g as normalizeClass, s as createVNode, w as withCtx, x as createTextVNode, ae as createStaticVNode, a1 as useHead } from "./vendor.6548d360.js";
import { t as tns } from "./tiny-slider.d87e9682.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VIconWrap.8350d40c.js";
import "./WidgetDropdown.be0631d8.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
var _imports_0 = "/assets/header.aaad1ac5.svg";
var _imports_1 = "/assets/cart-placeholder.f1c5932f.svg";
var FoodWidget = "/assets/widget.bce5cf66.svg";
const foodPills = [];
const restaurants = [];
var foodDelivery = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  foodPills,
  restaurants
});
var FoodDeliveryApp_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "food-delivery-dashboard" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "header-image" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "header-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, [
      /* @__PURE__ */ createTextVNode(" $0 delivery for 30 days! "),
      /* @__PURE__ */ createBaseVNode("span", {
        role: "img",
        "aria-label": "Party Popper"
      }, "\u{1F389}")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, "$0 delivery fee for orders over $10 for 30 days"),
    /* @__PURE__ */ createBaseVNode("a", {
      class: "action-link",
      tabindex: "0"
    }, [
      /* @__PURE__ */ createBaseVNode("span", null, "Learn More"),
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-arrow-right"
      })
    ])
  ])
], -1);
const _hoisted_4 = { class: "left-body" };
const _hoisted_5 = { class: "restaurants" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "restaurants-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "Restaurants")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" })
], -1);
const _hoisted_7 = { class: "food-pills" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-right"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = ["onKeydown", "onClick"];
const _hoisted_13 = { class: "food-pill-icon" };
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "restaurants-list" };
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "restaurants-list-item" };
const _hoisted_18 = { class: "image-container" };
const _hoisted_19 = ["src"];
const _hoisted_20 = { class: "timer" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Min", -1);
const _hoisted_22 = { class: "meta-container" };
const _hoisted_23 = { class: "meta-icon" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "meta-content" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_27 = { class: "rating" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-star"
}, null, -1);
const _hoisted_29 = { class: "ml-1" };
const _hoisted_30 = { class: "right fixed-parent" };
const _hoisted_31 = { class: "sticky-panel fixed-child" };
const _hoisted_32 = { class: "widget icon-toolbar-widget" };
const _hoisted_33 = { class: "icon-toolbar" };
const _hoisted_34 = { class: "toolbar-icon" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:shopping-cart"
}, null, -1);
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = { class: "toolbar-icon" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "toolbar-icon" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_42 = [
  _hoisted_41
];
const _hoisted_43 = { class: "toolbar-icon" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:settings"
}, null, -1);
const _hoisted_45 = [
  _hoisted_44
];
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<div class="widget-toolbar"><div class="left"><h3 class="is-bigger">My Order</h3></div><div class="right"><span class="tag is-curved">0 items</span></div></div>', 1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_49 = { class: "cart-items has-slimscroll is-hidden" };
const _hoisted_50 = { class: "cart-item" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " Double XL Burger "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "$15.50 x 1")
], -1);
const _hoisted_52 = { class: "cart-item" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " Cherry Cupcakes "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "$8.00 x 3")
], -1);
const _hoisted_54 = { class: "cart-item" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " Extra Fries "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "$7.90 x 2")
], -1);
const _hoisted_56 = { class: "cart-button" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "total" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "label" }, "Total"),
  /* @__PURE__ */ createBaseVNode("span", null, "$0.00")
], -1);
const _hoisted_58 = /* @__PURE__ */ createTextVNode(" Start Checkout ");
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Erik Kovalsky"),
  /* @__PURE__ */ createBaseVNode("p", null, "38, Suite B2 Parkman Avenue"),
  /* @__PURE__ */ createBaseVNode("p", null, "Los Angeles, CA")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeSection = ref("cart");
    let slider;
    const sliderElement = ref();
    const nextButtonElement = ref();
    const prevButtonElement = ref();
    const onIndexChanged = (info) => {
      const indexPrev = info.indexCached;
      const indexCurrent = info.index;
      info.slideItems[indexPrev].classList.remove("active");
      info.slideItems[indexCurrent].classList.add("active");
    };
    onMounted(() => {
      if (sliderElement.value && nextButtonElement.value && prevButtonElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: true,
          nav: false,
          mouseDrag: true,
          nextButton: nextButtonElement.value,
          prevButton: prevButtonElement.value,
          fixedWidth: 98,
          swipeAngle: false,
          items: 1,
          center: false,
          loop: true
        });
        slider.events.on("indexChanged", onIndexChanged);
      }
    });
    const goTo = (index) => {
      if (slider) {
        slider.goTo(index);
      }
    };
    onUnmounted(() => {
      if (slider) {
        slider.events.off("indexChanged", onIndexChanged);
        slider.destroy();
      }
    });
    return (_ctx, _cache) => {
      const _component_VPlaceholderSection = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_UIWidgetToolbarDropdown = _sfc_main$5;
      const _component_UIWidgetFollowerStats = _sfc_main$6;
      const _component_UIWidget = _sfc_main$7;
      const _component_IllustrationWidget = _sfc_main$8;
      const _component_UIWidgetToolbarIcon = _sfc_main$9;
      const _component_ContactWidget = _sfc_main$a;
      const _component_UIWidgetIconList = _sfc_main$b;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", {
                  ref_key: "prevButtonElement",
                  ref: prevButtonElement,
                  class: "slick-custom is-prev slick-arrow"
                }, _hoisted_9, 512),
                createBaseVNode("div", {
                  ref_key: "nextButtonElement",
                  ref: nextButtonElement,
                  class: "slick-custom is-next slick-arrow"
                }, _hoisted_11, 512),
                createBaseVNode("div", {
                  ref_key: "sliderElement",
                  ref: sliderElement,
                  class: "food-pills-inner pill-carousel"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(foodDelivery).foodPills, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: "food-pill",
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(($event) => goTo(index), ["prevent"]), ["space"]),
                      onClick: ($event) => goTo(index)
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("img", {
                          src: item.icon,
                          alt: ""
                        }, null, 8, _hoisted_14)
                      ]),
                      createBaseVNode("span", null, toDisplayString(item.label), 1)
                    ], 40, _hoisted_12);
                  }), 128))
                ], 512)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(foodDelivery).restaurants, (restaurant) => {
                    return openBlock(), createElementBlock("div", {
                      key: restaurant.id,
                      class: "column is-4"
                    }, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          createBaseVNode("img", {
                            src: restaurant.picture,
                            alt: "",
                            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "800x450"))
                          }, null, 40, _hoisted_19),
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("div", null, [
                              createBaseVNode("span", null, toDisplayString(restaurant.deliveryTime), 1),
                              _hoisted_21
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, [
                            createBaseVNode("img", {
                              src: restaurant.icon,
                              alt: "",
                              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "                            "))
                            }, null, 40, _hoisted_24)
                          ]),
                          createBaseVNode("div", _hoisted_25, [
                            createBaseVNode("h4", null, toDisplayString(restaurant.name), 1),
                            createBaseVNode("p", null, [
                              createBaseVNode("span", null, toDisplayString(restaurant.category), 1),
                              _hoisted_26,
                              createBaseVNode("span", _hoisted_27, [
                                _hoisted_28,
                                createBaseVNode("span", _hoisted_29, toDisplayString(restaurant.rating), 1)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "cart" && "is-active"]]),
                    tabindex: "0",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => activeSection.value = "cart", ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => activeSection.value = "cart")
                  }, _hoisted_36, 34)
                ]),
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "activity" && "is-active"]]),
                    tabindex: "0",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeSection.value = "activity", ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => activeSection.value = "activity")
                  }, _hoisted_39, 34)
                ]),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "address" && "is-active"]]),
                    tabindex: "0",
                    onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => activeSection.value = "address", ["prevent"]), ["space"])),
                    onClick: _cache[7] || (_cache[7] = ($event) => activeSection.value = "address")
                  }, _hoisted_42, 34)
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "settings" && "is-active"]]),
                    tabindex: "0",
                    onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => activeSection.value = "settings", ["prevent"]), ["space"])),
                    onClick: _cache[9] || (_cache[9] = ($event) => activeSection.value = "settings")
                  }, _hoisted_45, 34)
                ])
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["widget cart-widget side-section", [activeSection.value === "cart" && "is-active"]])
            }, [
              _hoisted_46,
              createVNode(_component_VPlaceholderSection, {
                title: "No Items",
                subtitle: "Your cart is currently empty. Start adding products."
              }, {
                image: withCtx(() => [
                  _hoisted_47,
                  _hoisted_48
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("div", _hoisted_50, [
                  createVNode(_component_VAvatar, {
                    picture: "https://vuero.cssninja.io/demo/photos/food/1.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_51
                ]),
                createBaseVNode("div", _hoisted_52, [
                  createVNode(_component_VAvatar, {
                    picture: "https://vuero.cssninja.io/demo/photos/food/2.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_53
                ]),
                createBaseVNode("div", _hoisted_54, [
                  createVNode(_component_VAvatar, {
                    picture: "https://vuero.cssninja.io/demo/photos/food/3.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_55
                ])
              ]),
              createBaseVNode("div", _hoisted_56, [
                _hoisted_57,
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  bold: "",
                  fullwidth: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_58
                  ]),
                  _: 1
                })
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "activity" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "followers-widget" }, {
                header: withCtx(() => [
                  createVNode(_component_UIWidgetToolbarDropdown, { title: "Followers" })
                ]),
                body: withCtx(() => [
                  createVNode(_component_UIWidgetFollowerStats, { channels: unref(followersStats) }, null, 8, ["channels"])
                ]),
                _: 1
              }),
              createVNode(_component_IllustrationWidget, {
                class: "illustration-widget-v2",
                title: "You unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!",
                picture: unref(FoodWidget)
              }, null, 8, ["picture"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "address" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "text-widget" }, {
                header: withCtx(() => [
                  createVNode(_component_UIWidgetToolbarIcon, {
                    title: "Deliver to",
                    icon: "feather:map-pin"
                  })
                ]),
                body: withCtx(() => [
                  _hoisted_59
                ]),
                _: 1
              }),
              createVNode(_component_ContactWidget, {
                picture: "/images/avatars/svg/vuero-1.svg",
                username: "Erik K.",
                email: "erikkovalsky@vuero.io",
                company: "Vuero Ltd.",
                position: "Product Manager",
                location: "Los Angeles, CA",
                phone: "+1 444-5156",
                squared: "",
                reversed: ""
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "settings" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "icon-list-widget" }, {
                body: withCtx(() => [
                  createVNode(_component_UIWidgetIconList, { list: unref(iconList) }, null, 8, ["list"])
                ]),
                _: 1
              })
            ], 2)
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
    viewWrapper.setPageTitle("Food Delivery App");
    useHead({
      title: "Food Delivery App - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FoodDeliveryApp = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FoodDeliveryApp)
      ]);
    };
  }
});
export { _sfc_main as default };
