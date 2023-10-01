import { _ as _sfc_main$2 } from "./VAvatar.08652fea.js";
import { d as defineComponent, au as resolveDirective, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, F as Fragment, X as renderList, p as createBlock, h as unref, g as normalizeClass, a3 as withDirectives, t as toDisplayString, y as createCommentVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
const members = {
  count: 10,
  list: [
    {
      id: 33,
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg",
      username: "Harvey M.",
      fullName: "Harvey Miller",
      initials: "HM",
      color: "success",
      location: "Los Angeles, CA",
      position: "Web Developer",
      bio: "This is a nice user description that we can use as demo content."
    },
    {
      id: 12,
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg",
      username: "Joshua S.",
      fullName: "Joshua Stevens",
      initials: "JS",
      color: "success",
      location: "Los Angeles, CA",
      position: "Backend Developer",
      bio: "This is a nice user description that we can use as demo content."
    },
    {
      id: 5,
      avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg",
      username: "Mary L.",
      fullName: "Mary Lebowski",
      initials: "ML",
      color: "h-yellow",
      location: "San Diego, CA",
      position: "Project Manager",
      bio: "This is a nice user description that we can use as demo content."
    },
    {
      id: 7,
      avatar: "https://vuero.cssninja.io/demo/avatars/7.jpg",
      username: "Alice C.",
      fullName: "Alice Carasca",
      initials: "AC",
      color: "info",
      location: "San Diego, CA",
      position: "Software Engineer",
      bio: "This is a nice user description that we can use as demo content."
    }
  ]
};
const featuredLeft = {
  id: 1,
  videos: [
    {
      id: 1,
      new: true,
      size: "large",
      poster: "https://source.unsplash.com/-VHQ0cw2euA/800x600",
      name: "The best ways to do a nice team building",
      duration: "01:43",
      author: {
        name: "Erik K.",
        avatar: "/images/avatars/svg/vuero-1.svg"
      },
      comments: 2
    },
    {
      id: 2,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/S2jw81lfrG0/800x600",
      name: "Bake beautiful and tasty cupcakes",
      duration: "05:17",
      author: {
        name: "Alice C.",
        avatar: "https://vuero.cssninja.io/demo/avatars/7.jpg"
      },
      comments: 3
    },
    {
      id: 3,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/7F65HDP0-E0/800x600",
      name: "My last trip to Rio de Janeiro in 3 min",
      duration: "03:12",
      author: {
        name: "Tara S.",
        avatar: "https://vuero.cssninja.io/demo/avatars/13.jpg"
      },
      comments: 0
    }
  ]
};
const featuredRight = {
  id: 2,
  videos: [
    {
      id: 4,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/W_MUqtuHwyY/800x600",
      name: "You must visit those places",
      duration: "04:24",
      author: {
        name: "Joshua S.",
        avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg"
      },
      comments: 5
    },
    {
      id: 5,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/h4i9G-de7Po/800x600",
      name: "The best workout guide for women",
      duration: "04:24",
      author: {
        name: "Greta K.",
        avatar: "https://vuero.cssninja.io/demo/avatars/19.jpg"
      },
      comments: 3
    },
    {
      id: 6,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/_CFv3bntQlQ/800x600",
      name: "10 incredible waves surfed by pros",
      duration: "07:11",
      author: {
        name: "Mary L.",
        avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg"
      },
      comments: 3
    },
    {
      id: 7,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/sp-p7uuT0tw/800x600",
      name: "Enchanting rain forests around the world",
      duration: "12:37",
      author: {
        name: "Esteban C.",
        avatar: "https://vuero.cssninja.io/demo/avatars/18.jpg"
      },
      comments: 9
    }
  ]
};
const feed = [
  {
    id: 8,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/jmURdhtm7Ng/800x600",
    name: "The ultimate guide to beard care",
    duration: "04:24",
    author: {
      name: "Joshua S.",
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg"
    },
    comments: 5
  },
  {
    id: 9,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/j7lTi6MtYgk/800x600",
    name: "Test driving the latest Tesla release",
    duration: "12:18",
    author: {
      name: "Mary L.",
      avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg"
    },
    comments: 4
  },
  {
    id: 10,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/RN6ts8IZ4_0/800x600",
    name: "5 places you should definitely check",
    duration: "06:19",
    author: {
      name: "Carmen E.",
      avatar: "https://vuero.cssninja.io/demo/avatars/27.jpg"
    },
    comments: 8
  },
  {
    id: 11,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/sS9AkuTE9aA/800x600",
    name: "Why you should plan first before shopping",
    duration: "03:49",
    author: {
      name: "Elizabeth F.",
      avatar: "https://vuero.cssninja.io/demo/avatars/21.jpg"
    },
    comments: 11
  },
  {
    id: 12,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/_h1IO0AHilM/800x600",
    name: "10 asian cities you should travel to",
    duration: "07:21",
    author: {
      name: "Irina V.",
      avatar: "https://vuero.cssninja.io/demo/avatars/23.jpg"
    },
    comments: 9
  },
  {
    id: 13,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/xTkxZN_DV8o/800x600",
    name: "Our awesome 6 months worlwide trip",
    duration: "15:39",
    author: {
      name: "Jeanne M.",
      avatar: "https://vuero.cssninja.io/demo/avatars/40.jpg"
    },
    comments: 2
  },
  {
    id: 14,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/ilvDG96PRWo/800x600",
    name: "Traditional blue houses in Morocco",
    duration: "11:16",
    author: {
      name: "Dwayne H.",
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg"
    },
    comments: 0
  },
  {
    id: 14,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/H8w5w4AiY1Q/800x600",
    name: "8 awesome activies to do with the family",
    duration: ".8:43",
    author: {
      name: "Jason G.",
      avatar: "https://vuero.cssninja.io/demo/avatars/16.jpg"
    },
    comments: 6
  },
  {
    id: 15,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/Oalh2MojUuk/800x600",
    name: "Choosing the right development method",
    duration: "07:16",
    author: {
      name: "Joshua S.",
      avatar: "https://vuero.cssninja.io/demo/avatars/12.jpg"
    },
    comments: 5
  },
  {
    id: 16,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/7okkFhxrxNw/800x600",
    name: "How peer programming improves productivity",
    duration: "11:17",
    author: {
      name: "Melany W.",
      avatar: "https://vuero.cssninja.io/demo/avatars/25.jpg"
    },
    comments: 12
  },
  {
    id: 17,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/Z9VQmkpxLNU/800x600",
    name: "An introduction to the art of rugby",
    duration: "11:17",
    author: {
      name: "Cl\xE9ment D.",
      avatar: "https://vuero.cssninja.io/demo/avatars/30.jpg"
    },
    comments: 3
  },
  {
    id: 18,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/8YG31Xn4dSw/800x600",
    name: "A guide to improving your customer calls",
    duration: "08:49",
    author: {
      name: "Harvey M.",
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg"
    },
    comments: 5
  }
];
var LifestyleDashboardV5_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "lifestyle-dashboard lifestyle-dashboard-v5" };
const _hoisted_2 = { class: "dashboard-title is-main" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Recent Videos"),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "Recent videos in this workspace")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "members" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h4", null, "Members", -1);
const _hoisted_7 = { class: "members-list" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("button", { class: "avatar is-fake is-squared" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_9 = { class: "media-feed" };
const _hoisted_10 = { class: "feed-group" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", { class: "group-title" }, "Today", -1);
const _hoisted_12 = { class: "group-content" };
const _hoisted_13 = { class: "columns" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "tag item-duration" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_19 = { class: "overlay-layer" };
const _hoisted_20 = { class: "overlay-content" };
const _hoisted_21 = { class: "inner-content" };
const _hoisted_22 = { class: "media-title" };
const _hoisted_23 = { class: "media-meta" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "meta-item is-hoverable" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_27 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_28 = {
  key: 1,
  class: "separator"
};
const _hoisted_29 = { class: "meta-item is-hoverable" };
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = { class: "columns is-multiline" };
const _hoisted_32 = { class: "tag item-duration" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_35 = { class: "overlay-layer" };
const _hoisted_36 = { class: "overlay-content" };
const _hoisted_37 = { class: "inner-content" };
const _hoisted_38 = { class: "media-title" };
const _hoisted_39 = { class: "media-meta" };
const _hoisted_40 = ["src"];
const _hoisted_41 = { class: "meta-item is-hoverable" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_43 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_44 = {
  key: 1,
  class: "separator"
};
const _hoisted_45 = { class: "meta-item is-hoverable" };
const _hoisted_46 = { class: "feed-group" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("h4", { class: "group-title" }, "Yesterday", -1);
const _hoisted_48 = { class: "group-content" };
const _hoisted_49 = { class: "columns is-multiline" };
const _hoisted_50 = { class: "tag item-duration" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_53 = { class: "overlay-layer" };
const _hoisted_54 = { class: "overlay-content" };
const _hoisted_55 = { class: "inner-content" };
const _hoisted_56 = { class: "media-title" };
const _hoisted_57 = { class: "media-meta" };
const _hoisted_58 = ["src"];
const _hoisted_59 = { class: "meta-item is-hoverable" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_61 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_62 = {
  key: 1,
  class: "separator"
};
const _hoisted_63 = { class: "meta-item is-hoverable" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _directive_background = resolveDirective("background");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_VAvatar, {
                  size: "small",
                  squared: ""
                }, {
                  avatar: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                }),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(members).list, (member) => {
                  return openBlock(), createBlock(_component_VAvatar, {
                    key: member.id,
                    picture: member.avatar,
                    size: "small",
                    squared: ""
                  }, null, 8, ["picture"]);
                }), 128)),
                createVNode(_component_VAvatar, {
                  size: "small",
                  initials: "+6",
                  squared: ""
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            _hoisted_11,
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(featuredLeft).videos, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["column", [
                          item.size === "large" && "is-12",
                          item.size === "regular" && "is-6"
                        ]])
                      }, [
                        withDirectives((openBlock(), createElementBlock("div", {
                          class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                        }, [
                          createBaseVNode("span", _hoisted_16, toDisplayString(item.duration), 1),
                          _hoisted_17,
                          _hoisted_18,
                          createBaseVNode("div", _hoisted_19, [
                            createBaseVNode("div", _hoisted_20, [
                              createBaseVNode("div", _hoisted_21, [
                                createBaseVNode("h3", _hoisted_22, toDisplayString(item.name), 1),
                                createBaseVNode("div", _hoisted_23, [
                                  createBaseVNode("img", {
                                    src: item.author.avatar,
                                    alt: ""
                                  }, null, 8, _hoisted_24),
                                  createBaseVNode("a", _hoisted_25, toDisplayString(item.author.name), 1),
                                  _hoisted_26,
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_27, "NEW")) : createCommentVNode("", true),
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_28, "|")) : createCommentVNode("", true),
                                  createBaseVNode("a", _hoisted_29, toDisplayString(item.comments) + " comments", 1)
                                ])
                              ])
                            ])
                          ])
                        ], 2)), [
                          [_directive_background, {
                            src: item.poster,
                            placeholder: "https://via.placeholder.com/800x600"
                          }]
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(featuredRight).videos, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["column", [
                          item.size === "large" && "is-12",
                          item.size === "regular" && "is-6"
                        ]])
                      }, [
                        withDirectives((openBlock(), createElementBlock("div", {
                          class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                        }, [
                          createBaseVNode("span", _hoisted_32, toDisplayString(item.duration), 1),
                          _hoisted_33,
                          _hoisted_34,
                          createBaseVNode("div", _hoisted_35, [
                            createBaseVNode("div", _hoisted_36, [
                              createBaseVNode("div", _hoisted_37, [
                                createBaseVNode("h3", _hoisted_38, toDisplayString(item.name), 1),
                                createBaseVNode("div", _hoisted_39, [
                                  createBaseVNode("img", {
                                    src: item.author.avatar,
                                    alt: ""
                                  }, null, 8, _hoisted_40),
                                  createBaseVNode("a", _hoisted_41, toDisplayString(item.author.name), 1),
                                  _hoisted_42,
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_43, "NEW")) : createCommentVNode("", true),
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_44, "|")) : createCommentVNode("", true),
                                  createBaseVNode("a", _hoisted_45, toDisplayString(item.comments) + " comments", 1)
                                ])
                              ])
                            ])
                          ])
                        ], 2)), [
                          [_directive_background, {
                            src: item.poster,
                            placeholder: "https://via.placeholder.com/800x600"
                          }]
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_46, [
            _hoisted_47,
            createBaseVNode("div", _hoisted_48, [
              createBaseVNode("div", _hoisted_49, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(feed), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    withDirectives((openBlock(), createElementBlock("div", {
                      class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                    }, [
                      createBaseVNode("span", _hoisted_50, toDisplayString(item.duration), 1),
                      _hoisted_51,
                      _hoisted_52,
                      createBaseVNode("div", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, [
                            createBaseVNode("h3", _hoisted_56, toDisplayString(item.name), 1),
                            createBaseVNode("div", _hoisted_57, [
                              createBaseVNode("img", {
                                src: item.author.avatar,
                                alt: ""
                              }, null, 8, _hoisted_58),
                              createBaseVNode("a", _hoisted_59, toDisplayString(item.author.name), 1),
                              _hoisted_60,
                              item.new ? (openBlock(), createElementBlock("span", _hoisted_61, "NEW")) : createCommentVNode("", true),
                              item.new ? (openBlock(), createElementBlock("span", _hoisted_62, "|")) : createCommentVNode("", true),
                              createBaseVNode("a", _hoisted_63, toDisplayString(item.comments) + " comments", 1)
                            ])
                          ])
                        ])
                      ])
                    ], 2)), [
                      [_directive_background, {
                        src: item.poster,
                        placeholder: "https://via.placeholder.com/800x600"
                      }]
                    ])
                  ]);
                }), 128))
              ])
            ])
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
    viewWrapper.setPageTitle("Video Dashboard");
    useHead({
      title: "Video Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_LifestyleDashboardV5 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_LifestyleDashboardV5)
      ]);
    };
  }
});
export { _sfc_main as default };
