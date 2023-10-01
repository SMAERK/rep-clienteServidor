import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, h as unref, t as toDisplayString, g as normalizeClass, ae as createStaticVNode, F as Fragment, X as renderList, s as createVNode, k as ref, a2 as withKeys, W as withModifiers, w as withCtx, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$7 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$e } from "./UIWidgetToolbarIcon.7c1a99ff.js";
import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
import { _ as _sfc_main$d } from "./UIWidget.6c4793e7.js";
import { a as _sfc_main$9, _ as _sfc_main$c } from "./UIWidgetFollowerStats.3b047c4d.js";
import { a as followersStats, _ as _sfc_main$b } from "./followers.c0b11e85.js";
import { _ as _sfc_main$a } from "./ContactWidget.4ef19c97.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./WidgetDropdown.be0631d8.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./index.e178843f.js";
const _hoisted_1$6 = { class: "img-container" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$3 = ["src"];
const _hoisted_4$2 = /* @__PURE__ */ createStaticVNode('<div class="actions"><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:message-square"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:video"></i></a></div>', 1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    picture: null,
    badge: null,
    username: null,
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget call-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("img", {
            class: "main",
            src: props.picture,
            alt: ""
          }, null, 8, _hoisted_2$5),
          createBaseVNode("img", {
            class: "badge",
            src: props.badge,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 40, _hoisted_3$3)
        ]),
        createBaseVNode("h3", null, "Call " + toDisplayString(props.username) + "?", 1),
        _hoisted_4$2
      ], 2);
    };
  }
});
const _hoisted_1$5 = { class: "creative-list" };
const _hoisted_2$4 = { class: "meta" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    list: { default: () => [] },
    squared: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: normalizeClass(["creative-list-item", "is-" + item.color])
          }, [
            createVNode(_component_VAvatar, {
              picture: item.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"]),
            createBaseVNode("div", _hoisted_2$4, [
              createBaseVNode("span", null, toDisplayString(item.name), 1)
            ])
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "widget-toolbar" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Your Cart")
], -1);
const _hoisted_3$2 = { class: "right" };
const _hoisted_4$1 = { class: "cart-items" };
const _hoisted_5$1 = { class: "meta" };
const _hoisted_6$1 = { class: "text" };
const _hoisted_7 = { class: "price" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "cart-button" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button v-button is-primary is-raised is-bold is-fullwidth" }, " Start Checkout ")
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    products: null,
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$8;
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget cart-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          _hoisted_2$3,
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(_component_VTag, {
              label: props.products.length + " items",
              color: "orange",
              curved: ""
            }, null, 8, ["label"])
          ])
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.products, (product) => {
            return openBlock(), createElementBlock("div", {
              key: product.id,
              class: "cart-item"
            }, [
              createVNode(_component_VAvatar, {
                picture: product.picture,
                size: "large",
                squared: ""
              }, null, 8, ["picture"]),
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("span", _hoisted_6$1, toDisplayString(product.name), 1),
                createBaseVNode("span", _hoisted_7, "$" + toDisplayString(product.price), 1)
              ])
            ]);
          }), 128))
        ]),
        _hoisted_8
      ], 2);
    };
  }
});
const _hoisted_1$3 = { class: "social-buttons" };
const _hoisted_2$2 = ["onKeydown", "onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    buttons: { default: () => [] },
    activeTab: { default: 0 },
    rounded: { type: Boolean },
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const tab = ref(props.activeTab);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget social-buttons-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.buttons, (button, index) => {
            return openBlock(), createElementBlock("div", {
              key: button.id,
              class: "social-button"
            }, [
              createBaseVNode("a", {
                class: normalizeClass(["inner-button is-facebook", [
                  tab.value === index && "is-active",
                  "is-" + button.network,
                  props.rounded && "is-rounded"
                ]]),
                tabindex: "0",
                onKeydown: withKeys(withModifiers(($event) => tab.value = index, ["prevent"]), ["space"]),
                onClick: ($event) => tab.value = index
              }, [
                createBaseVNode("i", {
                  "aria-hidden": "true",
                  class: normalizeClass(button.icon)
                }, null, 2)
              ], 42, _hoisted_2$2)
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createStaticVNode('<div class="field"><div class="control"><input type="text" class="input" placeholder="Search..."><button class="searcv-button"><i aria-hidden="true" class="iconify" data-icon="feather:search"></i></button></div></div>', 1);
const _hoisted_2$1 = { class: "avatar-list" };
const _hoisted_3$1 = { class: "meta" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    avatars: null,
    squared: { type: Boolean },
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget avatar-list-widget", [props.straight && "is-straight"]])
      }, [
        _hoisted_1$2,
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.avatars, (avatar) => {
            return openBlock(), createElementBlock("div", {
              key: avatar.id,
              class: "avatar-list-item"
            }, [
              createVNode(_component_VAvatar, {
                picture: avatar.picture,
                squared: props.squared
              }, null, 8, ["picture", "squared"]),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("span", null, toDisplayString(avatar.name), 1)
              ])
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const avatarList = [
  {
    id: 0,
    picture: "https://vuero.cssninja.io/demo/avatars/26.jpg",
    name: "Courtney W."
  },
  {
    id: 1,
    picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
    name: "Alice C."
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "Erik K."
  }
];
const avatarListCreative = [
  {
    id: 0,
    picture: "https://vuero.cssninja.io/demo/avatars/26.jpg",
    name: "Courtney W.",
    color: "orange"
  },
  {
    id: 1,
    picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
    name: "Alice C.",
    color: "purple"
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "Erik K.",
    color: "green"
  }
];
const socialButtonList1 = [
  {
    id: 0,
    icon: "fab fa-facebook-f",
    network: "facebook"
  },
  {
    id: 1,
    icon: "fab fa-linkedin-in",
    network: "linkedin"
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    network: "twitter"
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    network: "instagram"
  }
];
const socialButtonList2 = [
  {
    id: 0,
    icon: "fab fa-invision",
    network: "invision"
  },
  {
    id: 1,
    icon: "fab fa-github",
    network: "github"
  },
  {
    id: 2,
    icon: "fab fa-atlassian",
    network: "atlassian"
  },
  {
    id: 3,
    icon: "fab fa-bootstrap",
    network: "bootstrap"
  }
];
const products = [
  {
    id: 0,
    picture: "https://fossil.scene7.com/is/image/FossilPartners/FTW4025_main?$sfcc_fos_large$",
    name: "5th Gen Connected Watch",
    price: 319.29
  },
  {
    id: 1,
    picture: "https://dyw7ncnq1en5l.cloudfront.net/optim/produits/1739/29391/fossil-q-founder_3ccf4c8115134000__450_400.jpg",
    name: "Leather Coated F-28 Analogic",
    price: 259.49
  }
];
var Widget1 = "/assets/1.548e52cf.svg";
var Widget2 = "/assets/2.9c72653d.svg";
var Widget3 = "/assets/3.5a3223fd.svg";
var Widget4 = "/assets/4.3595e752.svg";
var Widget5 = "/assets/5.00c50641.svg";
var Widget7 = "/assets/7.e98c4a2d.svg";
var Widget8 = "/assets/8.e0b8858e.svg";
const _hoisted_1$1 = { class: "columns is-multiline widget-demo-columns" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, " Vuero will be released very soon, probably around the end of the year of the Christmas holidays. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "hashtags" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#uikit"),
    /* @__PURE__ */ createBaseVNode("a", null, "#dashboards"),
    /* @__PURE__ */ createBaseVNode("a", null, "#bulma")
  ])
], -1);
const _hoisted_6 = { class: "column is-3" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_IllustrationWidget = _sfc_main$9;
      const _component_ContactWidget = _sfc_main$a;
      const _component_AvatarListWidget = _sfc_main$2;
      const _component_SocialButtonsWidget = _sfc_main$3;
      const _component_UIWidgetToolbarDropdown = _sfc_main$b;
      const _component_UIWidgetFollowerStats = _sfc_main$c;
      const _component_UIWidget = _sfc_main$d;
      const _component_CartWidget = _sfc_main$4;
      const _component_UIWidgetToolbarIcon = _sfc_main$e;
      const _component_UIWidgetCreativeList = _sfc_main$5;
      const _component_CallWidget = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v1",
            title: "You unlocked 2 new Achievements",
            text: "Congrats, your efforts have been rewarded. Keep up like this!",
            picture: unref(Widget1),
            "badge-left": unref(Widget2),
            "badge-right": unref(Widget3)
          }, null, 8, ["picture", "badge-left", "badge-right"]),
          createVNode(_component_ContactWidget, {
            picture: "/images/avatars/svg/vuero-1.svg",
            username: "Erik K.",
            email: "erikkovalsky@vuero.io",
            company: "Vuero Ltd.",
            position: "Product Manager",
            location: "Los Angeles, CA",
            phone: "+1 444-5156"
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "You unlocked 2 new Achievements",
            text: "Congrats, your efforts have been rewarded. Keep up like this!",
            picture: unref(Widget7)
          }, null, 8, ["picture"]),
          createVNode(_component_AvatarListWidget, {
            avatars: unref(avatarList),
            squared: ""
          }, null, 8, ["avatars"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "You unlocked 2 new Achievements",
            text: "Congrats, your efforts have been rewarded. Keep up like this!",
            picture: unref(Widget4)
          }, null, 8, ["picture"]),
          createVNode(_component_SocialButtonsWidget, { buttons: unref(socialButtonList1) }, null, 8, ["buttons"]),
          createVNode(_component_AvatarListWidget, { avatars: unref(avatarList) }, null, 8, ["avatars"]),
          createVNode(_component_UIWidget, { class: "followers-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Followers" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetFollowerStats, { channels: unref(followersStats) }, null, 8, ["channels"])
            ]),
            _: 1
          }),
          createVNode(_component_CartWidget, { products: unref(products) }, null, 8, ["products"])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, {
                title: "@cssninjaStudio",
                icon: "feather:twitter"
              })
            ]),
            body: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v3",
            title: "You unlocked 2 new Achievements",
            text: "Congrats, your efforts have been rewarded. Keep up like this!",
            picture: unref(Widget5)
          }, null, 8, ["picture"]),
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
          }),
          createVNode(_component_SocialButtonsWidget, {
            buttons: unref(socialButtonList2),
            rounded: ""
          }, null, 8, ["buttons"]),
          createVNode(_component_UIWidget, { class: "creative-list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Designers" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetCreativeList, {
                list: unref(avatarListCreative),
                squared: ""
              }, null, 8, ["list"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_UIWidget, { class: "creative-list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Designers" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetCreativeList, { list: unref(avatarListCreative) }, null, 8, ["list"])
            ]),
            _: 1
          }),
          createVNode(_component_CallWidget, {
            picture: "/@src/assets/illustrations/widgets/6.svg",
            badge: "https://vuero.cssninja.io/demo/avatars/7.jpg",
            username: "Alice"
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "You unlocked 2 new Achievements",
            text: "Congrats, your efforts have been rewarded. Keep up like this!",
            picture: unref(Widget8)
          }, null, 8, ["picture"])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Widgets Creative");
    useHead({
      title: "Widgets Creative - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_WidgetsCreative = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_WidgetsCreative)
      ]);
    };
  }
});
export { _sfc_main as default };
