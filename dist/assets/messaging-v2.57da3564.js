import { _ as _sfc_main$g } from "./MinimalLayout.a3e60ebf.js";
import { _ as _sfc_main$d } from "./VAvatar.08652fea.js";
import { _ as _imports_0 } from "./vuero-1.6aadf997.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, h as unref, x as createTextVNode, F as Fragment, X as renderList, g as normalizeClass, a2 as withKeys, W as withModifiers, s as createVNode, t as toDisplayString, k as ref, e as computed, a1 as useHead, p as createBlock, w as withCtx } from "./vendor.6548d360.js";
import { _ as _sfc_main$f } from "./Toolbar.cbd734d2.js";
import { _ as _sfc_main$e } from "./ToolbarNotification.e103f93b.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import "./index.e178843f.js";
const _hoisted_1$c = {
  id: "navbar-conversation-11",
  class: "chat-area-content"
};
const _hoisted_2$c = { class: "chat-area-header" };
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$c = [
  _hoisted_3$c
];
const _hoisted_5$c = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Greta K.", -1);
const _hoisted_6$c = { class: "chat-area-group" };
const _hoisted_7$b = { class: "chat-area-main" };
const _hoisted_8$b = { class: "chat-msg" };
const _hoisted_9$b = { class: "chat-msg-profile" };
const _hoisted_10$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 7:48pm", -1);
const _hoisted_11$b = { class: "chat-msg-content" };
const _hoisted_12$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Here are some screenshots.", -1);
const _hoisted_13$b = { class: "chat-msg-text" };
const _hoisted_14$b = { class: "chat-msg-text" };
const _hoisted_15$b = { class: "chat-msg-text" };
const _hoisted_16$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Hope you like them.", -1);
const _hoisted_17$7 = { class: "chat-msg owner" };
const _hoisted_18$7 = { class: "chat-msg-profile" };
const _hoisted_19$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 10:21pm", -1);
const _hoisted_20$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "They look great!"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Thanks for sharing this!")
], -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$c, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$c),
          _hoisted_5$c,
          createBaseVNode("div", _hoisted_6$c, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
              alt: "",
              "data-user-popover": "6",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$b, [
          createBaseVNode("div", _hoisted_8$b, [
            createBaseVNode("div", _hoisted_9$b, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
                alt: "",
                "data-user-popover": "6",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$b
            ]),
            createBaseVNode("div", _hoisted_11$b, [
              _hoisted_12$b,
              createBaseVNode("div", _hoisted_13$b, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/15.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_14$b, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/9.png",
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_15$b, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/7.png",
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_16$7
            ])
          ]),
          createBaseVNode("div", _hoisted_17$7, [
            createBaseVNode("div", _hoisted_18$7, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_19$6
            ]),
            _hoisted_20$5
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$b = {
  id: "navbar-conversation-10",
  class: "chat-area-content"
};
const _hoisted_2$b = { class: "chat-area-header" };
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_3$b
];
const _hoisted_5$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Greta K.", -1);
const _hoisted_6$b = { class: "chat-area-group" };
const _hoisted_7$a = { class: "chat-area-main" };
const _hoisted_8$a = { class: "chat-msg" };
const _hoisted_9$a = { class: "chat-msg-profile" };
const _hoisted_10$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 5:19pm", -1);
const _hoisted_11$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I had a great time yesterday."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Thank you for you clean presentation, it was stunning. ")
], -1);
const _hoisted_12$a = { class: "chat-msg owner" };
const _hoisted_13$a = { class: "chat-msg-profile" };
const _hoisted_14$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 6:32pm", -1);
const _hoisted_15$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Wow, don't mention it."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "So happy it made you feel like that.")
], -1);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("div", _hoisted_2$b, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$b),
          _hoisted_5$b,
          createBaseVNode("div", _hoisted_6$b, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/19.jpg",
              alt: "",
              "data-user-popover": "17",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$a, [
          createBaseVNode("div", _hoisted_8$a, [
            createBaseVNode("div", _hoisted_9$a, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/19.jpg",
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$a
            ]),
            _hoisted_11$a
          ]),
          createBaseVNode("div", _hoisted_12$a, [
            createBaseVNode("div", _hoisted_13$a, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_14$a
            ]),
            _hoisted_15$a
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$a = {
  id: "navbar-conversation-9",
  class: "chat-area-content"
};
const _hoisted_2$a = { class: "chat-area-header" };
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_3$a
];
const _hoisted_5$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Jimmy H.", -1);
const _hoisted_6$a = { class: "chat-area-group" };
const _hoisted_7$9 = { class: "chat-area-main" };
const _hoisted_8$9 = { class: "chat-msg" };
const _hoisted_9$9 = { class: "chat-msg-profile" };
const _hoisted_10$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:12am", -1);
const _hoisted_11$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "We sould sync sometime today."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "When are you available?")
], -1);
const _hoisted_12$9 = { class: "chat-msg owner" };
const _hoisted_13$9 = { class: "chat-msg-profile" };
const _hoisted_14$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:13am", -1);
const _hoisted_15$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Probably in the afternoon."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I'll let you know.")
], -1);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$a, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$a),
          _hoisted_5$a,
          createBaseVNode("div", _hoisted_6$a, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/22.jpg",
              alt: "",
              "data-user-popover": "5",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$9, [
          createBaseVNode("div", _hoisted_8$9, [
            createBaseVNode("div", _hoisted_9$9, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/22.jpg",
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$9
            ]),
            _hoisted_11$9
          ]),
          createBaseVNode("div", _hoisted_12$9, [
            createBaseVNode("div", _hoisted_13$9, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_14$9
            ]),
            _hoisted_15$9
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$9 = {
  id: "navbar-conversation-8",
  class: "chat-area-content"
};
const _hoisted_2$9 = { class: "chat-area-header" };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_3$9
];
const _hoisted_5$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Melany W.", -1);
const _hoisted_6$9 = { class: "chat-area-group" };
const _hoisted_7$8 = { class: "chat-area-main" };
const _hoisted_8$8 = { class: "chat-msg" };
const _hoisted_9$8 = { class: "chat-msg-profile" };
const _hoisted_10$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:43pm", -1);
const _hoisted_11$8 = { class: "chat-msg-content" };
const _hoisted_12$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Just finished implementing this one.", -1);
const _hoisted_13$8 = { class: "chat-msg-text" };
const _hoisted_14$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I has some issues with the headers tough.", -1);
const _hoisted_15$8 = { class: "chat-msg owner" };
const _hoisted_16$6 = { class: "chat-msg-profile" };
const _hoisted_17$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:43pmpm", -1);
const _hoisted_18$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Just in time, thanks."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "You have an open PR for that one?")
], -1);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$9),
          _hoisted_5$9,
          createBaseVNode("div", _hoisted_6$9, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
              alt: "",
              "data-user-popover": "4",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$8, [
          createBaseVNode("div", _hoisted_8$8, [
            createBaseVNode("div", _hoisted_9$8, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
                alt: "",
                "data-user-popover": "7",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$8
            ]),
            createBaseVNode("div", _hoisted_11$8, [
              _hoisted_12$8,
              createBaseVNode("div", _hoisted_13$8, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/13.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$8
            ])
          ]),
          createBaseVNode("div", _hoisted_15$8, [
            createBaseVNode("div", _hoisted_16$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_17$6
            ]),
            _hoisted_18$6
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$8 = {
  id: "navbar-conversation-7",
  class: "chat-area-content"
};
const _hoisted_2$8 = { class: "chat-area-header" };
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_3$8
];
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Mary L.", -1);
const _hoisted_6$8 = { class: "chat-area-group" };
const _hoisted_7$7 = { class: "chat-area-main" };
const _hoisted_8$7 = { class: "chat-msg" };
const _hoisted_9$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-profile" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "chat-msg-img",
    src: "https://vuero.cssninja.io/demo/avatars/18.jpg",
    alt: "",
    "data-user-popover": "7"
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 2:32pm")
], -1);
const _hoisted_10$7 = { class: "chat-msg-content" };
const _hoisted_11$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Look at those screens, just finished them.", -1);
const _hoisted_12$7 = { class: "chat-msg-text" };
const _hoisted_13$7 = { class: "chat-msg-text" };
const _hoisted_14$7 = { class: "chat-msg-text" };
const _hoisted_15$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I can send you the files.", -1);
const _hoisted_16$5 = { class: "chat-msg owner" };
const _hoisted_17$5 = { class: "chat-msg-profile" };
const _hoisted_18$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 2:37pm", -1);
const _hoisted_19$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Looks great."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Let me review this in details.")
], -1);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$8),
          _hoisted_5$8,
          createBaseVNode("div", _hoisted_6$8, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/18.jpg",
              alt: "",
              "data-user-popover": "7",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$7, [
          createBaseVNode("div", _hoisted_8$7, [
            _hoisted_9$7,
            createBaseVNode("div", _hoisted_10$7, [
              _hoisted_11$7,
              createBaseVNode("div", _hoisted_12$7, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/4.png",
                  alt: "",
                  onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_13$7, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/7.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_14$7, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/6.png",
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_15$7
            ])
          ]),
          createBaseVNode("div", _hoisted_16$5, [
            createBaseVNode("div", _hoisted_17$5, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_18$5
            ]),
            _hoisted_19$5
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$7 = {
  id: "navbar-conversation-6",
  class: "chat-area-content"
};
const _hoisted_2$7 = { class: "chat-area-header" };
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_3$7
];
const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Mary L.", -1);
const _hoisted_6$7 = { class: "chat-area-group" };
const _hoisted_7$6 = { class: "chat-area-main" };
const _hoisted_8$6 = { class: "chat-msg" };
const _hoisted_9$6 = { class: "chat-msg-profile" };
const _hoisted_10$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 12:14pm", -1);
const _hoisted_11$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Hey Erik!."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Still down for that movie?")
], -1);
const _hoisted_12$6 = { class: "chat-msg owner" };
const _hoisted_13$6 = { class: "chat-msg-profile" };
const _hoisted_14$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 12:14pm", -1);
const _hoisted_15$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Of course, yeah!"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Can't wait!")
], -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$7),
          _hoisted_5$7,
          createBaseVNode("div", _hoisted_6$7, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/5.jpg",
              alt: "",
              "data-user-popover": "5",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$6, [
          createBaseVNode("div", _hoisted_8$6, [
            createBaseVNode("div", _hoisted_9$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/5.jpg",
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$6
            ]),
            _hoisted_11$6
          ]),
          createBaseVNode("div", _hoisted_12$6, [
            createBaseVNode("div", _hoisted_13$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_14$6
            ]),
            _hoisted_15$6
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$6 = {
  id: "navbar-conversation-5",
  class: "chat-area-content"
};
const _hoisted_2$6 = { class: "chat-area-header" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_3$6
];
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Irina V.", -1);
const _hoisted_6$6 = { class: "chat-area-group" };
const _hoisted_7$5 = { class: "chat-area-main" };
const _hoisted_8$5 = { class: "chat-msg" };
const _hoisted_9$5 = { class: "chat-msg-profile" };
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 11:12am", -1);
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Do you have a moment?"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I need some help on something Iam working on.")
], -1);
const _hoisted_12$5 = { class: "chat-msg owner" };
const _hoisted_13$5 = { class: "chat-msg-profile" };
const _hoisted_14$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 11:14am", -1);
const _hoisted_15$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Sure"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I'll drop by your office.")
], -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$6),
          _hoisted_5$6,
          createBaseVNode("div", _hoisted_6$6, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/23.jpg",
              alt: "",
              "data-user-popover": "21",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$5, [
          createBaseVNode("div", _hoisted_8$5, [
            createBaseVNode("div", _hoisted_9$5, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/23.jpg",
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$5
            ]),
            _hoisted_11$5
          ]),
          createBaseVNode("div", _hoisted_12$5, [
            createBaseVNode("div", _hoisted_13$5, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_14$5
            ]),
            _hoisted_15$5
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = {
  id: "navbar-conversation-4",
  class: "chat-area-content"
};
const _hoisted_2$5 = { class: "chat-area-header" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$5
];
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Alice C.", -1);
const _hoisted_6$5 = { class: "chat-area-group" };
const _hoisted_7$4 = { class: "chat-area-main" };
const _hoisted_8$4 = { class: "chat-msg" };
const _hoisted_9$4 = { class: "chat-msg-profile" };
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 10:11am", -1);
const _hoisted_11$4 = { class: "chat-msg-content" };
const _hoisted_12$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Hey erik I have a couple of screens to show you. ", -1);
const _hoisted_13$4 = { class: "chat-msg-text" };
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "This one is pretty colorful, I like it.", -1);
const _hoisted_15$4 = { class: "chat-msg-text" };
const _hoisted_16$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I like the curves in this one.", -1);
const _hoisted_17$4 = { class: "chat-msg owner" };
const _hoisted_18$4 = { class: "chat-msg-profile" };
const _hoisted_19$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 10:44am", -1);
const _hoisted_20$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Looks Good."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Want to sync?")
], -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$5),
          _hoisted_5$5,
          createBaseVNode("div", _hoisted_6$5, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
              alt: "",
              "data-user-popover": "0",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$4, [
          createBaseVNode("div", _hoisted_8$4, [
            createBaseVNode("div", _hoisted_9$4, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$4
            ]),
            createBaseVNode("div", _hoisted_11$4, [
              _hoisted_12$4,
              createBaseVNode("div", _hoisted_13$4, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/11.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400X300"))
                }, null, 32)
              ]),
              _hoisted_14$4,
              createBaseVNode("div", _hoisted_15$4, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/9.png",
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "400X300"))
                }, null, 32)
              ]),
              _hoisted_16$4
            ])
          ]),
          createBaseVNode("div", _hoisted_17$4, [
            createBaseVNode("div", _hoisted_18$4, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_19$4
            ]),
            _hoisted_20$4
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = {
  id: "navbar-conversation-3",
  class: "chat-area-content"
};
const _hoisted_2$4 = { class: "chat-area-header" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_3$4
];
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Work Group", -1);
const _hoisted_6$4 = { class: "chat-area-group" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("span", null, "4")
], -1);
const _hoisted_8$3 = { class: "chat-area-main" };
const _hoisted_9$3 = { class: "chat-msg" };
const _hoisted_10$3 = { class: "chat-msg-profile" };
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:15pm", -1);
const _hoisted_12$3 = { class: "chat-msg-content" };
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Just found this marketing tool.", -1);
const _hoisted_14$3 = { class: "chat-msg-text" };
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Features look nice. We could give it a try? Anyone want to review? ", -1);
const _hoisted_16$3 = { class: "chat-msg owner" };
const _hoisted_17$3 = { class: "chat-msg-profile" };
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:15pm", -1);
const _hoisted_19$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Sure, I'll take a look real quick."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Iam also going to look at the available plans.")
], -1);
const _hoisted_20$3 = { class: "chat-msg" };
const _hoisted_21$3 = { class: "chat-msg-profile" };
const _hoisted_22$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:27pm", -1);
const _hoisted_23$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" I know this one, we were using it in my previous company. It's reliable and fast "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Smiling Face with Smiling Eyes"
    }, "\u{1F60A}"),
    /* @__PURE__ */ createTextVNode(". ")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " I mean it's worth a try and we're in need right now. ")
], -1);
const _hoisted_24$3 = { class: "chat-msg owner" };
const _hoisted_25$3 = { class: "chat-msg-profile" };
const _hoisted_26$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:31pm", -1);
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Yeah but I need to test some use cases."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Can't sign up before being sure.")
], -1);
const _hoisted_28$1 = { class: "chat-msg" };
const _hoisted_29 = { class: "chat-msg-profile" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:32pm", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Haha, don't be scare Erik")
], -1);
const _hoisted_32 = { class: "chat-msg" };
const _hoisted_33 = { class: "chat-msg-profile" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:32pm", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" Yay, Erik going chicken mode again "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Faces with Tears of Joy"
    }, "\u{1F602}\u{1F602}\u{1F602}")
  ])
], -1);
const _hoisted_36 = { class: "chat-msg owner" };
const _hoisted_37 = { class: "chat-msg-profile" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:33pm", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" Omg, I just can't help it "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Face with Tears of Joy"
    }, "\u{1F602}")
  ])
], -1);
const _hoisted_40 = { class: "chat-msg" };
const _hoisted_41 = { class: "chat-msg-profile" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 4:39pm", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" This is getting funnier and funnier. You gotta love dat team "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Smiling Face with Hearts"
    }, "\u{1F970}")
  ])
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$4),
          _hoisted_5$4,
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0,
              alt: "",
              "data-user-popover": "3",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32),
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
              alt: "",
              "data-user-popover": "6",
              onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32),
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/19.jpg",
              alt: "",
              "data-user-popover": "17",
              onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32),
            _hoisted_7$3
          ])
        ]),
        createBaseVNode("div", _hoisted_8$3, [
          createBaseVNode("div", _hoisted_9$3, [
            createBaseVNode("div", _hoisted_10$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
                alt: "",
                "data-user-popover": "6",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_11$3
            ]),
            createBaseVNode("div", _hoisted_12$3, [
              _hoisted_13$3,
              createBaseVNode("div", _hoisted_14$3, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/demo-apps/1.jpg",
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_15$3
            ])
          ]),
          createBaseVNode("div", _hoisted_16$3, [
            createBaseVNode("div", _hoisted_17$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_18$3
            ]),
            _hoisted_19$3
          ]),
          createBaseVNode("div", _hoisted_20$3, [
            createBaseVNode("div", _hoisted_21$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/19.jpg",
                alt: "",
                "data-user-popover": "17",
                onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_22$3
            ]),
            _hoisted_23$3
          ]),
          createBaseVNode("div", _hoisted_24$3, [
            createBaseVNode("div", _hoisted_25$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_26$3
            ]),
            _hoisted_27$2
          ]),
          createBaseVNode("div", _hoisted_28$1, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/12.jpg",
                alt: "",
                "data-user-popover": "2",
                onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_30
            ]),
            _hoisted_31
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_34
            ]),
            _hoisted_35
          ]),
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_38
            ]),
            _hoisted_39
          ]),
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/32.jpg",
                alt: "",
                "data-user-popover": "28",
                onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_42
            ]),
            _hoisted_43
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = {
  id: "navbar-conversation-2",
  class: "chat-area-content"
};
const _hoisted_2$3 = { class: "chat-area-header" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Alejandro B.", -1);
const _hoisted_6$3 = { class: "chat-area-group" };
const _hoisted_7$2 = { class: "chat-area-main" };
const _hoisted_8$2 = { class: "chat-msg" };
const _hoisted_9$2 = { class: "chat-msg-profile" };
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:34am", -1);
const _hoisted_11$2 = { class: "chat-msg-content" };
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Hey Erik, I have some feedback to share with you. ", -1);
const _hoisted_13$2 = { class: "chat-msg-text" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Although, Iam not a specialist, but I reviewed those and they look great. ", -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "We should make a couple of changes though.", -1);
const _hoisted_16$2 = { class: "chat-msg owner" };
const _hoisted_17$2 = { class: "chat-msg-profile" };
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:42am", -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " Sounds good. Wanna meet or just go through it here? "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I mean Iam free right now.")
], -1);
const _hoisted_20$2 = { class: "chat-msg" };
const _hoisted_21$2 = { class: "chat-msg-profile" };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:43am", -1);
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Nah, I have a meeting that starts in 5."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Let's schedule something for this afternoon."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "And send me a calendar invite.")
], -1);
const _hoisted_24$2 = { class: "chat-msg owner" };
const _hoisted_25$2 = { class: "chat-msg-profile" };
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 9:43am", -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Sounds good. Will do."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Done.")
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$3),
          _hoisted_5$3,
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/39.jpg",
              alt: "",
              "data-user-popover": "33",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/39.jpg",
                alt: "",
                "data-user-popover": "33",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$2
            ]),
            createBaseVNode("div", _hoisted_11$2, [
              _hoisted_12$2,
              createBaseVNode("div", _hoisted_13$2, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/12.jpg",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$2,
              _hoisted_15$2
            ])
          ]),
          createBaseVNode("div", _hoisted_16$2, [
            createBaseVNode("div", _hoisted_17$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_18$2
            ]),
            _hoisted_19$2
          ]),
          createBaseVNode("div", _hoisted_20$2, [
            createBaseVNode("div", _hoisted_21$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/39.jpg",
                alt: "",
                "data-user-popover": "33",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_22$2
            ]),
            _hoisted_23$2
          ]),
          createBaseVNode("div", _hoisted_24$2, [
            createBaseVNode("div", _hoisted_25$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_26$2
            ]),
            _hoisted_27$1
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = {
  id: "navbar-conversation-1",
  class: "chat-area-content"
};
const _hoisted_2$2 = { class: "chat-area-header" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_3$2
];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "Kelly M.", -1);
const _hoisted_6$2 = { class: "chat-area-group" };
const _hoisted_7$1 = { class: "chat-area-main" };
const _hoisted_8$1 = { class: "chat-msg" };
const _hoisted_9$1 = { class: "chat-msg-profile" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 1:03pm", -1);
const _hoisted_11$1 = { class: "chat-msg-content" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "hey Erik, what's up?", -1);
const _hoisted_13$1 = { class: "chat-msg-text" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " I think it's time to review those slides we talked about. ", -1);
const _hoisted_15$1 = { class: "chat-msg owner" };
const _hoisted_16$1 = { class: "chat-msg-profile" };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 1:22pm", -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" Yeah I know, well I feel a bit miserable about that "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Faces with Tears of Joy"
    }, "\u{1F602}"),
    /* @__PURE__ */ createTextVNode(". ")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "I was working on that till 4:00 am.")
], -1);
const _hoisted_19$1 = { class: "chat-msg" };
const _hoisted_20$1 = { class: "chat-msg-profile" };
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 1:22pm", -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Oh my god! Don't push youself that much!"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "You got to take some rest tomorrow."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "What time was our meeting scheduled for?")
], -1);
const _hoisted_23$1 = { class: "chat-msg owner" };
const _hoisted_24$1 = { class: "chat-msg-profile" };
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "Sent at 1:23pm", -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "3:15 pm I believe."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "Let me check the schedule")
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$2),
          _hoisted_5$2,
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: "https://vuero.cssninja.io/demo/avatars/11.jpg",
              alt: "",
              "data-user-popover": "13",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/11.jpg",
                alt: "",
                "data-user-popover": "13",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_10$1
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              _hoisted_12$1,
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("img", {
                  src: "https://vuero.cssninja.io/demo/photos/apps/7.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$1
            ])
          ]),
          createBaseVNode("div", _hoisted_15$1, [
            createBaseVNode("div", _hoisted_16$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_17$1
            ]),
            _hoisted_18$1
          ]),
          createBaseVNode("div", _hoisted_19$1, [
            createBaseVNode("div", _hoisted_20$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: "https://vuero.cssninja.io/demo/avatars/11.jpg",
                alt: "",
                "data-user-popover": "13",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_21$1
            ]),
            _hoisted_22$1
          ]),
          createBaseVNode("div", _hoisted_23$1, [
            createBaseVNode("div", _hoisted_24$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_25$1
            ]),
            _hoisted_26$1
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = ["onKeydown", "onClick"];
const _hoisted_2$1 = { class: "conversation-detail" };
const _hoisted_3$1 = { class: "conversation-username" };
const _hoisted_4$1 = { class: "conversation-content" };
const _hoisted_5$1 = { class: "conversation-message" };
const _hoisted_6$1 = { class: "conversation-date" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { default: () => [] },
    conversationId: { default: 0 },
    mobileConversationListOpen: { type: Boolean }
  },
  emits: ["toggleMobileConversation", "update:conversationId"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$d;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[props.mobileConversationListOpen && "is-active"], "conversation-area"]),
        "data-simplebar": ""
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.conversations, (conversation) => {
          return openBlock(), createElementBlock("div", {
            key: conversation.id,
            class: normalizeClass(["conversation", [props.conversationId === conversation.id && "active"]]),
            tabindex: "0",
            onKeydown: withKeys(withModifiers(() => {
              emit("update:conversationId", conversation.id);
              emit("toggleMobileConversation");
            }, ["prevent"]), ["space"]),
            onClick: () => {
              emit("update:conversationId", conversation.id);
              emit("toggleMobileConversation");
            }
          }, [
            createVNode(_component_VAvatar, {
              picture: conversation.avatar.picture,
              color: conversation.avatar.color,
              initials: conversation.avatar.initials
            }, null, 8, ["picture", "color", "initials"]),
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, toDisplayString(conversation.name), 1),
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("span", _hoisted_5$1, toDisplayString(conversation.lastMessagePreview), 1),
                createBaseVNode("span", _hoisted_6$1, toDisplayString(conversation.lastMessage), 1)
              ])
            ])
          ], 42, _hoisted_1$1);
        }), 128))
      ], 2);
    };
  }
});
var messagingV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "chat-app-wrapper" };
const _hoisted_2 = { class: "chat-app-header" };
const _hoisted_3 = { class: "logo" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "search-bar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "control has-icon" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "text",
        class: "input search-input",
        placeholder: "Search...",
        "aria-label": "Search"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:search"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "search-results has-slimscroll" })
    ])
  ])
], -1);
const _hoisted_5 = { class: "user-settings" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "profile-avatar" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-down"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("p", { class: "is-size-7" }, "Erik Kovalsky")
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Profile")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Edit Profile")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:box"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Projects")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:settings"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Settings")
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:log-out"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Sign Out")
    ])
  ])
], -1);
const _hoisted_11 = { class: "wrapper" };
const _hoisted_12 = {
  class: "chat-area is-active",
  "data-simplebar": ""
};
const _hoisted_13 = { class: "chat-area-footer" };
const _hoisted_14 = { class: "add-content" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:video"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "Video"),
        /* @__PURE__ */ createBaseVNode("span", null, "Embed a video")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:image"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "Images"),
        /* @__PURE__ */ createBaseVNode("span", null, "Upload pictures")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:link"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "Link"),
        /* @__PURE__ */ createBaseVNode("span", null, "Post a link")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:file"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "File"),
        /* @__PURE__ */ createBaseVNode("span", null, "Upload a file")
      ])
    ])
  ])
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "add-emoji" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:smile"
    })
  ])
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  placeholder: "Type something here...",
  "aria-label": "Add new message"
}, null, -1);
const _hoisted_20 = {
  class: "detail-area",
  "data-simplebar": ""
};
const _hoisted_21 = { class: "chat-side-content is-single" };
const _hoisted_22 = {
  id: "user-details-name",
  class: "user-name"
};
const _hoisted_23 = {
  id: "user-details-title",
  class: "user-job-title"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "side-actions" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-phone"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Audio Call")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-video"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Video Call")
  ])
], -1);
const _hoisted_25 = { class: "detail-photos" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "detail-photo-title" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-image"
  }, [
    /* @__PURE__ */ createBaseVNode("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }),
    /* @__PURE__ */ createBaseVNode("path", { d: "M21 15l-5-5L5 21" })
  ]),
  /* @__PURE__ */ createTextVNode(" Shared photos ")
], -1);
const _hoisted_27 = { class: "detail-photo-grid" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("a", { class: "view-more" }, "View More", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const conversations = [
      {
        id: 1,
        name: "Kelly Marston",
        role: "Product Manager",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/11.jpg"
        },
        lastMessage: "20m",
        lastMessagePreview: "What time was our meeting scheduled for?"
      },
      {
        id: 2,
        name: "Alejandro Badajoz",
        role: "Business Analyst",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/39.jpg"
        },
        lastMessage: "24m",
        lastMessagePreview: "Nah, I have a meeting that starts in 5."
      },
      {
        id: 3,
        name: "Work Group",
        role: "7 people are chatting",
        avatar: {
          color: "h-purple",
          initials: "WG"
        },
        lastMessage: "31m",
        lastMessagePreview: "This is getting funnier and funnier. You gotta love dat team \u{1F970}"
      },
      {
        id: 4,
        name: "Alice Carasca",
        role: "Software Engineer",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
        },
        lastMessage: "47m",
        lastMessagePreview: "I like the curves in this one."
      },
      {
        id: 5,
        name: "Irina Vierbovsky",
        role: "Project Manager",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/23.jpg"
        },
        lastMessage: "56m",
        lastMessagePreview: "I need some help on something Iam working on."
      },
      {
        id: 6,
        name: "Mary Lebowski",
        role: "Project Manager",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/5.jpg"
        },
        lastMessage: "1h",
        lastMessagePreview: "Still down for that movie?"
      },
      {
        id: 7,
        name: "Esteban Castellanos",
        role: "UI/UX Designer",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/18.jpg"
        },
        lastMessage: "1h",
        lastMessagePreview: "I can send you the files."
      },
      {
        id: 8,
        name: "Melany Wallace",
        role: "Web Developer",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/25.jpg"
        },
        lastMessage: "2h",
        lastMessagePreview: "I has some issues with the headers tough."
      },
      {
        id: 9,
        name: "Jimmy Hector",
        role: "Project Manager",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/22.jpg"
        },
        lastMessage: "3h",
        lastMessagePreview: "When are you available?"
      },
      {
        id: 10,
        name: "Greta Kroppfer",
        role: "Sales Manager",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/19.jpg"
        },
        lastMessage: "3h",
        lastMessagePreview: "Thank you for you clean presentation, it was stunning."
      },
      {
        id: 11,
        name: "Tara Svenson",
        role: "UI/UX Designer",
        avatar: {
          picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
        },
        lastMessage: "9h",
        lastMessagePreview: "Hope you like them."
      }
    ];
    const panels = usePanels();
    const selectedConversationId = ref(3);
    const mobileConversationListOpen = ref(false);
    const selectedConversation = computed(() => {
      const conversation = conversations.find((item) => item.id === selectedConversationId.value);
      if (conversation) {
        return conversation;
      }
      return conversations[0];
    });
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    useHead({
      title: "Messaging chat - Navbar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_ToolbarNotification = _sfc_main$e;
      const _component_Toolbar = _sfc_main$f;
      const _component_WebappConversationList = _sfc_main$1;
      const _component_WebappConversation1 = _sfc_main$2;
      const _component_WebappConversation2 = _sfc_main$3;
      const _component_WebappConversation3 = _sfc_main$4;
      const _component_WebappConversation4 = _sfc_main$5;
      const _component_WebappConversation5 = _sfc_main$6;
      const _component_WebappConversation6 = _sfc_main$7;
      const _component_WebappConversation7 = _sfc_main$8;
      const _component_WebappConversation8 = _sfc_main$9;
      const _component_WebappConversation9 = _sfc_main$a;
      const _component_WebappConversation10 = _sfc_main$b;
      const _component_WebappConversation11 = _sfc_main$c;
      const _component_VAvatar = _sfc_main$d;
      const _component_MinimalLayout = _sfc_main$g;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity",
                      tabindex: "0",
                      onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
                      onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).setActive("activity"))
                    }, _hoisted_7, 32)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  ref_key: "dropdownElement1",
                  ref: dropdownElement1,
                  class: "dropdown is-right dropdown-trigger user-dropdown"
                }, [
                  createBaseVNode("div", {
                    tabindex: "0",
                    class: "is-trigger",
                    "aria-haspopup": "true",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args), ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("img", {
                        class: "avatar",
                        src: _imports_0,
                        alt: "",
                        onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_9
                  ], 32),
                  _hoisted_10
                ], 512)
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_WebappConversationList, {
                conversationId: selectedConversationId.value,
                "onUpdate:conversationId": _cache[5] || (_cache[5] = ($event) => selectedConversationId.value = $event),
                "mobile-conversation-list-open": mobileConversationListOpen.value,
                conversations,
                onToggleMobileCsonversation: _cache[6] || (_cache[6] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
              }, null, 8, ["conversationId", "mobile-conversation-list-open"]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_WebappConversation1, {
                  class: normalizeClass([selectedConversationId.value === 1 && "is-active"]),
                  onToggleMobileCsonversation: _cache[7] || (_cache[7] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation2, {
                  class: normalizeClass([selectedConversationId.value === 2 && "is-active"]),
                  onToggleMobileCsonversation: _cache[8] || (_cache[8] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation3, {
                  class: normalizeClass([selectedConversationId.value === 3 && "is-active"]),
                  onToggleMobileCsonversation: _cache[9] || (_cache[9] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation4, {
                  class: normalizeClass([selectedConversationId.value === 4 && "is-active"]),
                  onToggleMobileCsonversation: _cache[10] || (_cache[10] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation5, {
                  class: normalizeClass([selectedConversationId.value === 5 && "is-active"]),
                  onToggleMobileCsonversation: _cache[11] || (_cache[11] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation6, {
                  class: normalizeClass([selectedConversationId.value === 6 && "is-active"]),
                  onToggleMobileCsonversation: _cache[12] || (_cache[12] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation7, {
                  class: normalizeClass([selectedConversationId.value === 7 && "is-active"]),
                  onToggleMobileCsonversation: _cache[13] || (_cache[13] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation8, {
                  class: normalizeClass([selectedConversationId.value === 8 && "is-active"]),
                  onToggleMobileCsonversation: _cache[14] || (_cache[14] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation9, {
                  class: normalizeClass([selectedConversationId.value === 9 && "is-active"]),
                  onToggleMobileCsonversation: _cache[15] || (_cache[15] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation10, {
                  class: normalizeClass([selectedConversationId.value === 10 && "is-active"]),
                  onToggleMobileCsonversation: _cache[16] || (_cache[16] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation11, {
                  class: normalizeClass([selectedConversationId.value === 11 && "is-active"]),
                  onToggleMobileCsonversation: _cache[17] || (_cache[17] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      ref_key: "dropdownElement2",
                      ref: dropdownElement2,
                      class: "dropdown dropdown-trigger is-up"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", {
                          class: "button",
                          "aria-haspopup": "true",
                          onClick: _cache[18] || (_cache[18] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                        }, _hoisted_16)
                      ]),
                      _hoisted_17
                    ], 512)
                  ]),
                  _hoisted_18,
                  _hoisted_19
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createVNode(_component_VAvatar, {
                    picture: unref(selectedConversation).avatar.picture,
                    color: unref(selectedConversation).avatar.color,
                    initials: unref(selectedConversation).avatar.initials
                  }, null, 8, ["picture", "color", "initials"]),
                  createBaseVNode("h4", _hoisted_22, toDisplayString(unref(selectedConversation).name), 1),
                  createBaseVNode("p", _hoisted_23, toDisplayString(unref(selectedConversation).role), 1),
                  _hoisted_24,
                  createBaseVNode("div", _hoisted_25, [
                    _hoisted_26,
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/1.jpg",
                        alt: "",
                        onErrorOnce: _cache[19] || (_cache[19] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/2.jpg",
                        alt: "",
                        onErrorOnce: _cache[20] || (_cache[20] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/3.jpg",
                        alt: "",
                        onErrorOnce: _cache[21] || (_cache[21] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/4.jpg",
                        alt: "",
                        onErrorOnce: _cache[22] || (_cache[22] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/5.jpg",
                        alt: "",
                        onErrorOnce: _cache[23] || (_cache[23] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/6.jpg",
                        alt: "",
                        onErrorOnce: _cache[24] || (_cache[24] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/7.jpg",
                        alt: "",
                        onErrorOnce: _cache[25] || (_cache[25] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/8.jpg",
                        alt: "",
                        onErrorOnce: _cache[26] || (_cache[26] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/9.jpg",
                        alt: "",
                        onErrorOnce: _cache[27] || (_cache[27] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/10.jpg",
                        alt: "",
                        onErrorOnce: _cache[28] || (_cache[28] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/11.jpg",
                        alt: "",
                        onErrorOnce: _cache[29] || (_cache[29] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/demo-apps/12.jpg",
                        alt: "",
                        onErrorOnce: _cache[30] || (_cache[30] = (event) => unref(onceImageErrored)(event, "1600x900"))
                      }, null, 32)
                    ]),
                    _hoisted_28
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
