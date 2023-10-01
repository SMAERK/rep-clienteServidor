import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, h as unref, F as Fragment, X as renderList, t as toDisplayString, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const posts = [
  {
    id: "1",
    title: "How to serve coffee at the office the proper way",
    published: "30 minutes ago",
    image: "https://vuero.cssninja.io/demo/photos/11.jpg",
    author: {
      id: 39,
      avatar: "https://vuero.cssninja.io/demo/avatars/39.jpg",
      name: "Alejandro B.",
      initials: "AB",
      color: "info"
    }
  },
  {
    id: "2",
    title: "Teamwork can dramatically increase productivity",
    published: "4 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/12.jpg",
    author: {
      id: 15,
      avatar: "https://vuero.cssninja.io/demo/avatars/15.jpg",
      name: "Hilde V.",
      initials: "HV",
      color: "warning"
    }
  },
  {
    id: "3",
    title: "Is team building a scam or the next thing?",
    published: "5 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/13.jpg",
    author: {
      id: 24,
      avatar: "https://vuero.cssninja.io/demo/avatars/24.jpg",
      name: "Sandrine C.",
      initials: "SC",
      color: "h-purple"
    }
  },
  {
    id: "4",
    title: "3 things you should know when applying for developer jobs",
    published: "8 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/14.jpg",
    author: {
      id: 27,
      avatar: "https://vuero.cssninja.io/demo/avatars/27.jpg",
      name: "Carmen E.",
      initials: "CE",
      color: "h-purple"
    }
  },
  {
    id: "5",
    title: "The construction business massively invests in mobile apps",
    published: "1 day ago",
    image: "https://vuero.cssninja.io/demo/photos/15.jpg",
    author: {
      id: 10,
      avatar: "https://vuero.cssninja.io/demo/avatars/10.jpg",
      name: "Henry G.",
      initials: "HG",
      color: "info"
    }
  },
  {
    id: "6",
    title: "Finding the right spot for your startup",
    published: "1 day ago",
    image: "https://vuero.cssninja.io/demo/photos/17.jpg",
    author: {
      id: 22,
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg",
      name: "Jimmy H.",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "7",
    title: "4 tips to make your business lunches awesome",
    published: "2 days ago",
    image: "https://vuero.cssninja.io/demo/photos/18.jpg",
    author: {
      id: 22,
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg",
      name: "Jimmy H.",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "8",
    title: "Setting up a design system for your app project",
    published: "2 days ago",
    image: "https://vuero.cssninja.io/demo/photos/18.jpg",
    author: {
      id: 26,
      avatar: "https://vuero.cssninja.io/demo/avatars/26.jpg",
      name: "Courtney W.",
      initials: "CW",
      color: "info"
    }
  },
  {
    id: "9",
    title: "Setting up a design system for your app project",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/20.jpg",
    author: {
      id: 8,
      avatar: "/images/avatars/svg/vuero-1.svg",
      name: "Erik K.",
      initials: "EK",
      color: "info"
    }
  },
  {
    id: "10",
    title: "Have you considered product management training?",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/21.jpg",
    author: {
      id: 14,
      avatar: "https://vuero.cssninja.io/demo/avatars/14.jpg",
      name: "Ryan B.",
      initials: "RB",
      color: "info"
    }
  },
  {
    id: "11",
    title: "Using flashy colors in your websites and apps",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/22.jpg",
    author: {
      id: 9,
      avatar: "https://vuero.cssninja.io/demo/avatars/9.jpg",
      name: "Ana B.",
      initials: "AB",
      color: "info"
    }
  },
  {
    id: "12",
    title: "Why it pays to profile your customers",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/23.jpg",
    author: {
      id: 40,
      avatar: "https://vuero.cssninja.io/demo/avatars/40.jpg",
      name: "Jeanne M.",
      initials: "JM",
      color: "info"
    }
  },
  {
    id: "13",
    title: "Building a consistent and talented team",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/24.jpg",
    author: {
      id: 19,
      avatar: "https://vuero.cssninja.io/demo/avatars/19.jpg",
      name: "Greta K.",
      initials: "GK",
      color: "info"
    }
  },
  {
    id: "14",
    title: "Building a consistent and talented team",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/25.jpg",
    author: {
      id: 28,
      avatar: "https://vuero.cssninja.io/demo/avatars/28.jpg",
      name: "Edouard F.",
      initials: "EF",
      color: "info"
    }
  },
  {
    id: "15",
    title: "What framework to choose to build a mobile app in 2020?",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/26.jpg",
    author: {
      id: 5,
      avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg",
      name: "Mary L.",
      initials: "ML",
      color: "info"
    }
  },
  {
    id: "16",
    title: "Diving into building an e-commerce brand - part 1",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/27.jpg",
    author: {
      id: 33,
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg",
      name: "Harvey M.",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "17",
    title: "Diving into building an e-commerce brand - part 2",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/28.jpg",
    author: {
      id: 33,
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg",
      name: "Harvey M.",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "18",
    title: "How to make sure to reach the goals you set",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/29.jpg",
    author: {
      id: 31,
      avatar: "https://vuero.cssninja.io/demo/avatars/31.jpg",
      name: "Yasseen A.",
      initials: "YA",
      color: "info"
    }
  }
];
var CardsGridV4_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "New Post", -1);
const _hoisted_5 = { class: "card-grid card-grid-v4" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = {
  href: "#",
  class: "card-grid-item"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "card-grid-item-content" };
const _hoisted_11 = { class: "dark-inverted" };
const _hoisted_12 = { class: "card-grid-item-footer" };
const _hoisted_13 = { class: "meta" };
const _hoisted_14 = { class: "dark-inverted" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return posts;
      } else {
        return posts.filter((item) => {
          return item.title.match(new RegExp(filters.value, "i")) || item.author.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = ["All Posts", "Recent Posts", "Older Posts", "Popular Posts"];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
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
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "Select an option"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-3"
                }, [
                  createBaseVNode("a", _hoisted_8, [
                    createBaseVNode("img", {
                      src: item.image,
                      alt: "",
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "400x300"))
                    }, null, 40, _hoisted_9),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("h3", _hoisted_11, toDisplayString(item.title), 1)
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_VAvatar, {
                        picture: item.author.avatar,
                        size: "small"
                      }, null, 8, ["picture"]),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(item.author.name), 1),
                        createBaseVNode("span", null, toDisplayString(item.published), 1)
                      ])
                    ])
                  ])
                ]);
              }), 128))
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
    viewWrapper.setPageTitle("Grid Cards 4");
    useHead({
      title: "Grid Cards 4 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_CardsGridV4 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CardsGridV4)
      ]);
    };
  }
});
export { _sfc_main as default };
