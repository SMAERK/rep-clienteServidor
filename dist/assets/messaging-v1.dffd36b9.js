import { _ as _sfc_main$n } from "./SearchPanel.54ae1913.js";
import { a as _sfc_main$h, b as _sfc_main$i, c as _sfc_main$j, d as _sfc_main$m, e as __unplugin_components_20, f as _sfc_main$p } from "./UserProfileDropdown.c528b802.js";
import { _ as _sfc_main$l } from "./LanguagesPanel.b7b20087.js";
import { _ as _sfc_main$k } from "./Sidebar.14a911d1.js";
import { _ as _sfc_main$g } from "./NotificationsMobileDropdown.98d004af.js";
import { d as defineComponent, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, w as withCtx, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, r as renderSlot, ab as createSharedComposable, C as defineStore, e as computed, g as normalizeClass, a5 as pushScopeId, a6 as popScopeId, ae as createStaticVNode, m as useI18n, x as createTextVNode, t as toDisplayString, y as createCommentVNode, ar as commonjsGlobal, Y as onMounted, F as Fragment, X as renderList, a3 as withDirectives, aI as vShow, p as createBlock, a1 as useHead, as as watchPostEffect, T as Transition } from "./vendor.6548d360.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { g as useApi, _ as _export_sfc, u as useDarkmode } from "./index.e178843f.js";
import { _ as __unplugin_components_19 } from "./VPageContent.f47e1c5e.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { _ as _sfc_main$o } from "./VIconWrap.8350d40c.js";
import { u as useSidebar } from "./sidebar.098cc062.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.8d409c39.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import "./UserPopoverContent.5da306fe.js";
import "./VBlock.64333f78.js";
import "./VIconBox.298b3a59.js";
import "./VField.b8c33879.js";
import "./VControl.eb555562.js";
import "./VAvatar.08652fea.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./VProgress.5bff1011.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./VIconButton.f948e51d.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1$f = { class: "sidebar-layout" };
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_5$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_6$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_8$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_9$7 = [
  _hoisted_8$8
];
const _hoisted_10$7 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1);
const _hoisted_11$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_12$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_13$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_15$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_16$4 = { class: "right-panel-trigger is-hidden-tablet" };
const _hoisted_17$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-search"
}, null, -1);
const _hoisted_18$2 = [
  _hoisted_17$4
];
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-x"
}, null, -1);
const _hoisted_20$2 = [
  _hoisted_19$2
];
const _hoisted_21$2 = { class: "is-hidden-tablet" };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:settings"
}, null, -1);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const panels = usePanels();
    const isMobileSidebarOpen = ref(false);
    return (_ctx, _cache) => {
      const _component_NotificationsMobileDropdown = _sfc_main$g;
      const _component_UserProfileDropdown = _sfc_main$h;
      const _component_MobileNavbar = _sfc_main$i;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_MobileSidebar = _sfc_main$j;
      const _component_Sidebar = _sfc_main$k;
      const _component_LanguagesPanel = _sfc_main$l;
      const _component_ActivityPanel = _sfc_main$m;
      const _component_SearchPanel = _sfc_main$n;
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        _hoisted_2$b,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          default: withCtx(() => [
            createVNode(_component_NotificationsMobileDropdown),
            createVNode(_component_UserProfileDropdown)
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[3] || (_cache[3] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-dashboards" } }, {
                default: withCtx(() => [
                  _hoisted_3$a
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-layouts" } }, {
                default: withCtx(() => [
                  _hoisted_4$9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements" } }, {
                default: withCtx(() => [
                  _hoisted_5$9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components" } }, {
                default: withCtx(() => [
                  _hoisted_6$9
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_7$8
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(panels).setActive("search"), ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => unref(panels).setActive("search"))
              }, _hoisted_9$7, 32)
            ]),
            _hoisted_10$7
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_Sidebar, {
          theme: props.theme
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-dashboards" } }, {
                default: withCtx(() => [
                  _hoisted_11$6
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-layouts" } }, {
                default: withCtx(() => [
                  _hoisted_12$5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements" } }, {
                default: withCtx(() => [
                  _hoisted_13$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components" } }, {
                default: withCtx(() => [
                  _hoisted_14$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_15$4
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", _hoisted_16$4, [
              createBaseVNode("a", {
                "data-content": "Search",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => unref(panels).setActive("search"), ["prevent"]), ["space"])),
                onClick: _cache[5] || (_cache[5] = ($event) => unref(panels).setActive("search"))
              }, _hoisted_18$2, 32),
              createBaseVNode("a", {
                class: "is-hidden is-inactive",
                tabindex: "0",
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
                onClick: _cache[7] || (_cache[7] = ($event) => unref(panels).close())
              }, _hoisted_20$2, 32)
            ]),
            createBaseVNode("li", _hoisted_21$2, [
              createVNode(_component_RouterLink, {
                id: "open-settings",
                to: { name: "sidebar-layouts-profile-settings" },
                "data-content": "Settings"
              }, {
                default: withCtx(() => [
                  _hoisted_22$2
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme"]),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_SearchPanel),
        renderSlot(_ctx.$slots, "default", { isMobileSidebarOpen: isMobileSidebarOpen.value })
      ]);
    };
  }
});
const useChatApi = createSharedComposable(() => {
  const api = useApi();
  const loading = ref(false);
  async function fetchConversations(start = 0, limit = 10) {
    loading.value = true;
    try {
      let count = 0;
      const { data: conversations, headers } = await api.get(`/api/conversations?_start=${start}&_limit=${limit}`);
      if ("X-Total-Count" in headers) {
        count = parseInt(headers["X-Total-Count"]);
      }
      return { conversations, count };
    } finally {
      loading.value = false;
    }
  }
  async function fetchMessages(conversationId, start = 0, limit = 20) {
    loading.value = true;
    try {
      let count = 0;
      const { data: messages, headers } = await api.get(`/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`);
      if ("X-Total-Count" in headers) {
        count = parseInt(headers["X-Total-Count"]);
      }
      return { messages, count };
    } finally {
      loading.value = false;
    }
  }
  return {
    loading,
    fetchConversations,
    fetchMessages
  };
});
const defaultConversation = {
  id: 0,
  name: "",
  lastMessage: "",
  unreadMessages: false,
  avatar: "/images/avatars/placeholder.jpg"
};
const useChat = defineStore("chat", () => {
  const api = useChatApi();
  const conversations = ref([]);
  const messages = ref([]);
  const selectedConversationId = ref(0);
  const addConversationOpen = ref(false);
  const mobileConversationDetailsOpen = ref(false);
  const selectedConversation = computed(() => {
    const conversation = conversations.value.find((item) => item.id === selectedConversationId.value);
    if (!conversation) {
      return defaultConversation;
    } else {
      return conversation;
    }
  });
  async function loadConversations(start = 0, limit = 10) {
    const response = await api.fetchConversations(start, limit);
    conversations.value = response.conversations;
  }
  async function selectConversastion(conversationId) {
    const response = await api.fetchMessages(conversationId);
    selectedConversationId.value = conversationId;
    messages.value = response.messages;
  }
  function unselectConversation() {
    selectedConversationId.value = 0;
    messages.value = [];
  }
  function setAddConversationOpen(value) {
    addConversationOpen.value = value;
  }
  function setMobileConversationDetailsOpen(value) {
    mobileConversationDetailsOpen.value = value;
  }
  return {
    conversations,
    messages,
    selectedConversation,
    selectedConversationId,
    addConversationOpen,
    mobileConversationDetailsOpen,
    loading: api.loading,
    loadConversations,
    setAddConversationOpen,
    setMobileConversationDetailsOpen,
    selectConversastion,
    unselectConversation
  };
});
var ChatSideFab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-8f561cca"), n = n(), popScopeId(), n);
const _hoisted_1$e = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1));
const _hoisted_2$a = [
  _hoisted_1$e
];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const chat = useChat();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass([[unref(chat).mobileConversationDetailsOpen && "is-mobile-active"], "chat-side-fab"]),
        "aria-label": "Close convesation details",
        tabindex: "0",
        onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(chat).setMobileConversationDetailsOpen(!unref(chat).mobileConversationDetailsOpen), ["prevent"]), ["space"])),
        onClick: _cache[1] || (_cache[1] = ($event) => unref(chat).setMobileConversationDetailsOpen(!unref(chat).mobileConversationDetailsOpen))
      }, _hoisted_2$a, 34);
    };
  }
});
var __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-8f561cca"]]);
var ChatPlaceholder_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$d = { class: "is-chat-placeholder animated preFadeInUp fadeInUp is-hidden" };
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("div", { class: "caption" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "Nothing to show"),
    /* @__PURE__ */ createBaseVNode("p", null, "Select an existing conversation or start a new one"),
    /* @__PURE__ */ createBaseVNode("a", {
      id: "new-chat",
      class: "button v-button is-solid is-outlined is-big is-rounded"
    }, " Start a new conversation ")
  ])
], -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, _hoisted_3$9);
    };
  }
});
var ChatMessageFieldWrapper_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$c = { class: "message-field-wrapper" };
const _hoisted_2$8 = { class: "control" };
const _hoisted_3$8 = { class: "add-content" };
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_5$8 = [
  _hoisted_4$8
];
const _hoisted_6$8 = /* @__PURE__ */ createBaseVNode("div", {
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
const _hoisted_7$7 = /* @__PURE__ */ createStaticVNode('<div class="add-emoji"><div class="button"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div></div><input id="chat-input" class="input is-rounded" type="text" placeholder="Write a message ..." aria-label="Write a message"><div class="send-message"><div class="button v-button is-primary is-raised is-rounded">Send</div></div>', 3);
const _hoisted_10$6 = /* @__PURE__ */ createBaseVNode("div", { class: "typing-indicator" }, null, -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", _hoisted_3$8, [
            createBaseVNode("div", {
              ref_key: "dropdownElement",
              ref: dropdownElement,
              class: "dropdown dropdown-trigger is-up"
            }, [
              createBaseVNode("div", null, [
                createBaseVNode("div", {
                  class: "button",
                  "aria-haspopup": "true",
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
                }, _hoisted_5$8)
              ]),
              _hoisted_6$8
            ], 512)
          ]),
          _hoisted_7$7
        ]),
        _hoisted_10$6
      ]);
    };
  }
});
var ChatBodyWrap_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {};
const _hoisted_1$b = { class: "chat-body-wrap" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3]]);
var ChatBody_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {};
const _hoisted_1$a = {
  id: "chat-body",
  class: "chat-body"
};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("ol", _hoisted_1$a, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2]]);
var ChatHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {};
const _hoisted_1$9 = { class: "chat-header" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
var ChatCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {};
const _hoisted_1$8 = { class: "is-chat animated preFadeInUp fadeInUp" };
function _sfc_render(_ctx, _cache) {
  const _component_ChatHeader = __unplugin_components_0$1;
  const _component_ChatBody = __unplugin_components_1;
  const _component_ChatBodyWrap = __unplugin_components_2;
  const _component_ChatMessageFieldWrapper = _sfc_main$c;
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_ChatHeader, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "header")
      ]),
      _: 3
    }),
    createVNode(_component_ChatBodyWrap, null, {
      default: withCtx(() => [
        createVNode(_component_ChatBody, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "body")
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "side")
      ]),
      _: 3
    }),
    createVNode(_component_ChatMessageFieldWrapper)
  ]);
}
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
const _hoisted_1$7 = { class: "toolbar ml-auto" };
const _hoisted_2$7 = { class: "toolbar-link" };
const _hoisted_3$7 = { class: "dark-mode ml-auto" };
const _hoisted_4$7 = ["checked"];
const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$7 = ["src"];
const _hoisted_7$6 = { class: "toolbar-notifications is-hidden-mobile" };
const _hoisted_8$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_9$6 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_10$5 = [
  _hoisted_8$7,
  _hoisted_9$6
];
const _hoisted_11$5 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_12$4 = { class: "dropdown-content" };
const _hoisted_13$3 = { class: "heading" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "Notifications")
], -1);
const _hoisted_15$3 = { class: "heading-right" };
const _hoisted_16$3 = /* @__PURE__ */ createTextVNode(" See all ");
const _hoisted_17$3 = { class: "notification-list" };
const _hoisted_18$1 = { class: "notification-item" };
const _hoisted_19$1 = { class: "img-left" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Alice C."),
    /* @__PURE__ */ createTextVNode(" left a comment.")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 hour ago")
], -1);
const _hoisted_21$1 = { class: "notification-item" };
const _hoisted_22$1 = { class: "img-left" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Joshua S."),
    /* @__PURE__ */ createTextVNode(" uploaded a file.")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_24$1 = { class: "notification-item" };
const _hoisted_25$1 = { class: "img-left" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Tara S."),
    /* @__PURE__ */ createTextVNode(" sent you a message.")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_27$1 = { class: "notification-item" };
const _hoisted_28$1 = { class: "img-left" };
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Melany W."),
    /* @__PURE__ */ createTextVNode(" left a comment.")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "3 hours ago")
], -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_31$1 = [
  _hoisted_30$1
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const panels = usePanels();
    const darkmode = useDarkmode();
    const { locale } = useI18n();
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    const localFlagSrc = computed(() => {
      switch (locale.value) {
        case "es-MX":
        default:
          return "/images/icons/flags/mexico.svg";
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("label", _hoisted_3$7, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: !unref(darkmode).isDark,
              tabindex: "0",
              onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
              onChange: _cache[1] || (_cache[1] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
            }, null, 40, _hoisted_4$7),
            _hoisted_5$7
          ])
        ]),
        createBaseVNode("a", {
          class: "toolbar-link right-panel-trigger",
          tabindex: "0",
          onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).setActive("languages"), ["prevent"]), ["space"])),
          onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).setActive("languages"))
        }, [
          createBaseVNode("img", {
            src: unref(localFlagSrc),
            alt: ""
          }, null, 8, _hoisted_6$7)
        ], 32),
        createBaseVNode("div", _hoisted_7$6, [
          createBaseVNode("div", {
            ref_key: "dropdownElement",
            ref: dropdownElement,
            class: "dropdown is-spaced is-dots is-right dropdown-trigger"
          }, [
            createBaseVNode("div", {
              class: "is-trigger",
              "aria-haspopup": "true",
              onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
            }, _hoisted_10$5),
            createBaseVNode("div", _hoisted_11$5, [
              createBaseVNode("div", _hoisted_12$4, [
                createBaseVNode("div", _hoisted_13$3, [
                  _hoisted_14$3,
                  createBaseVNode("div", _hoisted_15$3, [
                    createVNode(_component_RouterLink, {
                      class: "notification-link",
                      to: { name: "sidebar-layouts-profile-notifications" }
                    }, {
                      default: withCtx(() => [
                        _hoisted_16$3
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("ul", _hoisted_17$3, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_18$1, [
                      createBaseVNode("div", _hoisted_19$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                          onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_20$1
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_21$1, [
                      createBaseVNode("div", _hoisted_22$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: "https://vuero.cssninja.io/demo/avatars/12.jpg",
                          onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_23$1
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_24$1, [
                      createBaseVNode("div", _hoisted_25$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: "https://vuero.cssninja.io/demo/avatars/13.jpg",
                          onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_26$1
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_27$1, [
                      createBaseVNode("div", _hoisted_28$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
                          onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_29$1
                    ])
                  ])
                ])
              ])
            ])
          ], 512)
        ]),
        createBaseVNode("a", {
          id: "hide-chat-side",
          class: "toolbar-link",
          tabindex: "0",
          onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
          onClick: _cache[10] || (_cache[10] = ($event) => emit("close"))
        }, _hoisted_31$1, 32)
      ]);
    };
  }
});
var ChatSide_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "chat-side-header" };
const _hoisted_2$6 = { class: "chat-side-content is-single" };
const _hoisted_3$6 = { class: "user-pic" };
const _hoisted_4$6 = ["src"];
const _hoisted_5$6 = {
  key: 0,
  class: "user-name"
};
const _hoisted_6$6 = {
  key: 1,
  class: "user-job-title"
};
const _hoisted_7$5 = /* @__PURE__ */ createStaticVNode('<div class="side-actions"><a class="button v-button is-rounded"><span class="icon is-small"><i aria-hidden="true" class="fas fa-phone"></i></span><span>Audio Call</span></a><a class="button v-button is-rounded"><span class="icon is-small"><i aria-hidden="true" class="fas fa-video"></i></span><span>Video Call</span></a></div>', 1);
const _hoisted_8$6 = { class: "detail-photos" };
const _hoisted_9$5 = /* @__PURE__ */ createStaticVNode('<div class="detail-photo-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg> Shared photos </div>', 1);
const _hoisted_10$4 = { class: "detail-photo-grid" };
const _hoisted_11$4 = /* @__PURE__ */ createBaseVNode("a", { class: "view-more" }, "View More", -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const chat = useChat();
    return (_ctx, _cache) => {
      const _component_MessagingToolbar = _sfc_main$7;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(chat).mobileConversationDetailsOpen && "is-mobile-active"], "chat-side"])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createVNode(_component_MessagingToolbar, {
            onClose: _cache[0] || (_cache[0] = ($event) => unref(chat).setMobileConversationDetailsOpen(false))
          })
        ]),
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("img", {
              id: "user-details-image",
              src: unref(chat).selectedConversation.avatar,
              alt: "",
              onError: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 40, _hoisted_4$6)
          ]),
          unref(chat).selectedConversation.name ? (openBlock(), createElementBlock("h4", _hoisted_5$6, toDisplayString(unref(chat).selectedConversation.name), 1)) : createCommentVNode("", true),
          unref(chat).selectedConversation.lastMessage ? (openBlock(), createElementBlock("p", _hoisted_6$6, toDisplayString(unref(chat).selectedConversation.lastMessage), 1)) : createCommentVNode("", true),
          _hoisted_7$5,
          createBaseVNode("div", _hoisted_8$6, [
            _hoisted_9$5,
            createBaseVNode("div", _hoisted_10$4, [
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/1.jpg",
                alt: "",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/2.jpg",
                alt: "",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/3.jpg",
                alt: "",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/4.jpg",
                alt: "",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/5.jpg",
                alt: "",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/6.jpg",
                alt: "",
                onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/7.jpg",
                alt: "",
                onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/8.jpg",
                alt: "",
                onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/9.jpg",
                alt: "",
                onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/10.jpg",
                alt: "",
                onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/11.jpg",
                alt: "",
                onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32),
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/demo-apps/12.jpg",
                alt: "",
                onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(onceImageErrored)(event, "1600x900"))
              }, null, 32)
            ]),
            _hoisted_11$4
          ])
        ])
      ], 2);
    };
  }
});
var photoswipe$1 = { exports: {} };
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var PhotoSwipe2 = function(template, UiClass, items, options) {
      var framework = {
        features: null,
        bind: function(target, type, listener, unbind) {
          var methodName = (unbind ? "remove" : "add") + "EventListener";
          type = type.split(" ");
          for (var i = 0; i < type.length; i++) {
            if (type[i]) {
              target[methodName](type[i], listener, false);
            }
          }
        },
        isArray: function(obj) {
          return obj instanceof Array;
        },
        createEl: function(classes, tag) {
          var el = document.createElement(tag || "div");
          if (classes) {
            el.className = classes;
          }
          return el;
        },
        getScrollY: function() {
          var yOffset = window.pageYOffset;
          return yOffset !== void 0 ? yOffset : document.documentElement.scrollTop;
        },
        unbind: function(target, type, listener) {
          framework.bind(target, type, listener, true);
        },
        removeClass: function(el, className) {
          var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
          el.className = el.className.replace(reg, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        },
        addClass: function(el, className) {
          if (!framework.hasClass(el, className)) {
            el.className += (el.className ? " " : "") + className;
          }
        },
        hasClass: function(el, className) {
          return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
        },
        getChildByClass: function(parentEl, childClassName) {
          var node = parentEl.firstChild;
          while (node) {
            if (framework.hasClass(node, childClassName)) {
              return node;
            }
            node = node.nextSibling;
          }
        },
        arraySearch: function(array, value, key) {
          var i = array.length;
          while (i--) {
            if (array[i][key] === value) {
              return i;
            }
          }
          return -1;
        },
        extend: function(o1, o2, preventOverwrite) {
          for (var prop in o2) {
            if (o2.hasOwnProperty(prop)) {
              if (preventOverwrite && o1.hasOwnProperty(prop)) {
                continue;
              }
              o1[prop] = o2[prop];
            }
          }
        },
        easing: {
          sine: {
            out: function(k) {
              return Math.sin(k * (Math.PI / 2));
            },
            inOut: function(k) {
              return -(Math.cos(Math.PI * k) - 1) / 2;
            }
          },
          cubic: {
            out: function(k) {
              return --k * k * k + 1;
            }
          }
        },
        detectFeatures: function() {
          if (framework.features) {
            return framework.features;
          }
          var helperEl = framework.createEl(), helperStyle = helperEl.style, vendor = "", features = {};
          features.oldIE = document.all && !document.addEventListener;
          features.touch = "ontouchstart" in window;
          if (window.requestAnimationFrame) {
            features.raf = window.requestAnimationFrame;
            features.caf = window.cancelAnimationFrame;
          }
          features.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled;
          if (!features.pointerEvent) {
            var ua = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              if (v && v.length > 0) {
                v = parseInt(v[1], 10);
                if (v >= 1 && v < 8) {
                  features.isOldIOSPhone = true;
                }
              }
            }
            var match = ua.match(/Android\s([0-9\.]*)/);
            var androidversion = match ? match[1] : 0;
            androidversion = parseFloat(androidversion);
            if (androidversion >= 1) {
              if (androidversion < 4.4) {
                features.isOldAndroid = true;
              }
              features.androidVersion = androidversion;
            }
            features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
          }
          var styleChecks = ["transform", "perspective", "animationName"], vendors = ["", "webkit", "Moz", "ms", "O"], styleCheckItem, styleName;
          for (var i = 0; i < 4; i++) {
            vendor = vendors[i];
            for (var a = 0; a < 3; a++) {
              styleCheckItem = styleChecks[a];
              styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);
              if (!features[styleCheckItem] && styleName in helperStyle) {
                features[styleCheckItem] = styleName;
              }
            }
            if (vendor && !features.raf) {
              vendor = vendor.toLowerCase();
              features.raf = window[vendor + "RequestAnimationFrame"];
              if (features.raf) {
                features.caf = window[vendor + "CancelAnimationFrame"] || window[vendor + "CancelRequestAnimationFrame"];
              }
            }
          }
          if (!features.raf) {
            var lastTime = 0;
            features.raf = function(fn) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() {
                fn(currTime + timeToCall);
              }, timeToCall);
              lastTime = currTime + timeToCall;
              return id;
            };
            features.caf = function(id) {
              clearTimeout(id);
            };
          }
          features.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
          framework.features = features;
          return features;
        }
      };
      framework.detectFeatures();
      if (framework.features.oldIE) {
        framework.bind = function(target, type, listener, unbind) {
          type = type.split(" ");
          var methodName = (unbind ? "detach" : "attach") + "Event", evName, _handleEv = function() {
            listener.handleEvent.call(listener);
          };
          for (var i = 0; i < type.length; i++) {
            evName = type[i];
            if (evName) {
              if (typeof listener === "object" && listener.handleEvent) {
                if (!unbind) {
                  listener["oldIE" + evName] = _handleEv;
                } else {
                  if (!listener["oldIE" + evName]) {
                    return false;
                  }
                }
                target[methodName]("on" + evName, listener["oldIE" + evName]);
              } else {
                target[methodName]("on" + evName, listener);
              }
            }
          }
        };
      }
      var self = this;
      var DOUBLE_TAP_RADIUS = 25, NUM_HOLDERS = 3;
      var _options = {
        allowPanToNext: true,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: false,
        loop: true,
        pinchToClose: true,
        closeOnScroll: true,
        closeOnVerticalDrag: true,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: false,
        focus: true,
        escKey: true,
        arrowKeys: true,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function(el) {
          return el.tagName === "A";
        },
        getDoubleTapZoom: function(isMouseClick, item) {
          if (isMouseClick) {
            return 1;
          } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
          }
        },
        maxSpreadZoom: 1.33,
        modal: true,
        scaleMode: "fit"
      };
      framework.extend(_options, options);
      var _getEmptyPoint = function() {
        return { x: 0, y: 0 };
      };
      var _isOpen, _isDestroying, _closedByScroll, _currentItemIndex, _containerStyle, _containerShiftIndex, _currPanDist = _getEmptyPoint(), _startPanOffset = _getEmptyPoint(), _panOffset = _getEmptyPoint(), _upMoveEvents, _downEvents, _globalEventHandlers, _viewportSize = {}, _currZoomLevel, _startZoomLevel, _translatePrefix, _translateSufix, _updateSizeInterval, _itemsNeedUpdate, _currPositionIndex = 0, _offset = {}, _slideSize = _getEmptyPoint(), _itemHolders, _prevItemIndex, _indexDiff = 0, _dragStartEvent, _dragMoveEvent, _dragEndEvent, _dragCancelEvent, _transformKey, _pointerEventEnabled, _isFixedPosition = true, _likelyTouchDevice, _modules = [], _requestAF, _cancelAF, _initalClassName, _initalWindowScrollY, _oldIE, _currentWindowScrollY, _features, _windowVisibleSize = {}, _renderMaxResolution = false, _orientationChangeTimeout, _registerModule = function(name, module2) {
        framework.extend(self, module2.publicMethods);
        _modules.push(name);
      }, _getLoopedId = function(index) {
        var numSlides = _getNumItems();
        if (index > numSlides - 1) {
          return index - numSlides;
        } else if (index < 0) {
          return numSlides + index;
        }
        return index;
      }, _listeners = {}, _listen = function(name, fn) {
        if (!_listeners[name]) {
          _listeners[name] = [];
        }
        return _listeners[name].push(fn);
      }, _shout = function(name) {
        var listeners = _listeners[name];
        if (listeners) {
          var args = Array.prototype.slice.call(arguments);
          args.shift();
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].apply(self, args);
          }
        }
      }, _getCurrentTime = function() {
        return new Date().getTime();
      }, _applyBgOpacity = function(opacity) {
        _bgOpacity = opacity;
        self.bg.style.opacity = opacity * _options.bgOpacity;
      }, _applyZoomTransform = function(styleObj, x, y, zoom, item) {
        if (!_renderMaxResolution || item && item !== self.currItem) {
          zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
        }
        styleObj[_transformKey] = _translatePrefix + x + "px, " + y + "px" + _translateSufix + " scale(" + zoom + ")";
      }, _applyCurrentZoomPan = function(allowRenderResolution) {
        if (_currZoomElementStyle) {
          if (allowRenderResolution) {
            if (_currZoomLevel > self.currItem.fitRatio) {
              if (!_renderMaxResolution) {
                _setImageSize(self.currItem, false, true);
                _renderMaxResolution = true;
              }
            } else {
              if (_renderMaxResolution) {
                _setImageSize(self.currItem);
                _renderMaxResolution = false;
              }
            }
          }
          _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
        }
      }, _applyZoomPanToItem = function(item) {
        if (item.container) {
          _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
        }
      }, _setTranslateX = function(x, elStyle) {
        elStyle[_transformKey] = _translatePrefix + x + "px, 0px" + _translateSufix;
      }, _moveMainScroll = function(x, dragging) {
        if (!_options.loop && dragging) {
          var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x, delta2 = Math.round(x - _mainScrollPos.x);
          if (newSlideIndexOffset < 0 && delta2 > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta2 < 0) {
            x = _mainScrollPos.x + delta2 * _options.mainScrollEndFriction;
          }
        }
        _mainScrollPos.x = x;
        _setTranslateX(x, _containerStyle);
      }, _calculatePanOffset = function(axis, zoomLevel) {
        var m = _midZoomPoint[axis] - _offset[axis];
        return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
      }, _equalizePoints = function(p1, p22) {
        p1.x = p22.x;
        p1.y = p22.y;
        if (p22.id) {
          p1.id = p22.id;
        }
      }, _roundPoint = function(p3) {
        p3.x = Math.round(p3.x);
        p3.y = Math.round(p3.y);
      }, _mouseMoveTimeout = null, _onFirstMouseMove = function() {
        if (_mouseMoveTimeout) {
          framework.unbind(document, "mousemove", _onFirstMouseMove);
          framework.addClass(template, "pswp--has_mouse");
          _options.mouseUsed = true;
          _shout("mouseUsed");
        }
        _mouseMoveTimeout = setTimeout(function() {
          _mouseMoveTimeout = null;
        }, 100);
      }, _bindEvents = function() {
        framework.bind(document, "keydown", self);
        if (_features.transform) {
          framework.bind(self.scrollWrap, "click", self);
        }
        if (!_options.mouseUsed) {
          framework.bind(document, "mousemove", _onFirstMouseMove);
        }
        framework.bind(window, "resize scroll orientationchange", self);
        _shout("bindEvents");
      }, _unbindEvents = function() {
        framework.unbind(window, "resize scroll orientationchange", self);
        framework.unbind(window, "scroll", _globalEventHandlers.scroll);
        framework.unbind(document, "keydown", self);
        framework.unbind(document, "mousemove", _onFirstMouseMove);
        if (_features.transform) {
          framework.unbind(self.scrollWrap, "click", self);
        }
        if (_isDragging) {
          framework.unbind(window, _upMoveEvents, self);
        }
        clearTimeout(_orientationChangeTimeout);
        _shout("unbindEvents");
      }, _calculatePanBounds = function(zoomLevel, update) {
        var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
        if (update) {
          _currPanBounds = bounds;
        }
        return bounds;
      }, _getMinZoomLevel = function(item) {
        if (!item) {
          item = self.currItem;
        }
        return item.initialZoomLevel;
      }, _getMaxZoomLevel = function(item) {
        if (!item) {
          item = self.currItem;
        }
        return item.w > 0 ? _options.maxSpreadZoom : 1;
      }, _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
        if (destZoomLevel === self.currItem.initialZoomLevel) {
          destPanOffset[axis] = self.currItem.initialPosition[axis];
          return true;
        } else {
          destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
          if (destPanOffset[axis] > destPanBounds.min[axis]) {
            destPanOffset[axis] = destPanBounds.min[axis];
            return true;
          } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
            destPanOffset[axis] = destPanBounds.max[axis];
            return true;
          }
        }
        return false;
      }, _setupTransforms = function() {
        if (_transformKey) {
          var allow3dTransform = _features.perspective && !_likelyTouchDevice;
          _translatePrefix = "translate" + (allow3dTransform ? "3d(" : "(");
          _translateSufix = _features.perspective ? ", 0px)" : ")";
          return;
        }
        _transformKey = "left";
        framework.addClass(template, "pswp--ie");
        _setTranslateX = function(x, elStyle) {
          elStyle.left = x + "px";
        };
        _applyZoomPanToItem = function(item) {
          var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, s = item.container.style, w = zoomRatio * item.w, h = zoomRatio * item.h;
          s.width = w + "px";
          s.height = h + "px";
          s.left = item.initialPosition.x + "px";
          s.top = item.initialPosition.y + "px";
        };
        _applyCurrentZoomPan = function() {
          if (_currZoomElementStyle) {
            var s = _currZoomElementStyle, item = self.currItem, zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, w = zoomRatio * item.w, h = zoomRatio * item.h;
            s.width = w + "px";
            s.height = h + "px";
            s.left = _panOffset.x + "px";
            s.top = _panOffset.y + "px";
          }
        };
      }, _onKeyDown = function(e) {
        var keydownAction = "";
        if (_options.escKey && e.keyCode === 27) {
          keydownAction = "close";
        } else if (_options.arrowKeys) {
          if (e.keyCode === 37) {
            keydownAction = "prev";
          } else if (e.keyCode === 39) {
            keydownAction = "next";
          }
        }
        if (keydownAction) {
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
            self[keydownAction]();
          }
        }
      }, _onGlobalClick = function(e) {
        if (!e) {
          return;
        }
        if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, _updatePageScrollOffset = function() {
        self.setScrollOffset(0, framework.getScrollY());
      };
      var _animations = {}, _numAnimations = 0, _stopAnimation = function(name) {
        if (_animations[name]) {
          if (_animations[name].raf) {
            _cancelAF(_animations[name].raf);
          }
          _numAnimations--;
          delete _animations[name];
        }
      }, _registerStartAnimation = function(name) {
        if (_animations[name]) {
          _stopAnimation(name);
        }
        if (!_animations[name]) {
          _numAnimations++;
          _animations[name] = {};
        }
      }, _stopAllAnimations = function() {
        for (var prop in _animations) {
          if (_animations.hasOwnProperty(prop)) {
            _stopAnimation(prop);
          }
        }
      }, _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
        var startAnimTime = _getCurrentTime(), t;
        _registerStartAnimation(name);
        var animloop = function() {
          if (_animations[name]) {
            t = _getCurrentTime() - startAnimTime;
            if (t >= d) {
              _stopAnimation(name);
              onUpdate(endProp);
              if (onComplete) {
                onComplete();
              }
              return;
            }
            onUpdate((endProp - b) * easingFn(t / d) + b);
            _animations[name].raf = _requestAF(animloop);
          }
        };
        animloop();
      };
      var publicMethods = {
        shout: _shout,
        listen: _listen,
        viewportSize: _viewportSize,
        options: _options,
        isMainScrollAnimating: function() {
          return _mainScrollAnimating;
        },
        getZoomLevel: function() {
          return _currZoomLevel;
        },
        getCurrentIndex: function() {
          return _currentItemIndex;
        },
        isDragging: function() {
          return _isDragging;
        },
        isZooming: function() {
          return _isZooming;
        },
        setScrollOffset: function(x, y) {
          _offset.x = x;
          _currentWindowScrollY = _offset.y = y;
          _shout("updateScrollOffset", _offset);
        },
        applyZoomPan: function(zoomLevel, panX, panY, allowRenderResolution) {
          _panOffset.x = panX;
          _panOffset.y = panY;
          _currZoomLevel = zoomLevel;
          _applyCurrentZoomPan(allowRenderResolution);
        },
        init: function() {
          if (_isOpen || _isDestroying) {
            return;
          }
          var i;
          self.framework = framework;
          self.template = template;
          self.bg = framework.getChildByClass(template, "pswp__bg");
          _initalClassName = template.className;
          _isOpen = true;
          _features = framework.detectFeatures();
          _requestAF = _features.raf;
          _cancelAF = _features.caf;
          _transformKey = _features.transform;
          _oldIE = _features.oldIE;
          self.scrollWrap = framework.getChildByClass(template, "pswp__scroll-wrap");
          self.container = framework.getChildByClass(self.scrollWrap, "pswp__container");
          _containerStyle = self.container.style;
          self.itemHolders = _itemHolders = [
            { el: self.container.children[0], wrap: 0, index: -1 },
            { el: self.container.children[1], wrap: 0, index: -1 },
            { el: self.container.children[2], wrap: 0, index: -1 }
          ];
          _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "none";
          _setupTransforms();
          _globalEventHandlers = {
            resize: self.updateSize,
            orientationchange: function() {
              clearTimeout(_orientationChangeTimeout);
              _orientationChangeTimeout = setTimeout(function() {
                if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                  self.updateSize();
                }
              }, 500);
            },
            scroll: _updatePageScrollOffset,
            keydown: _onKeyDown,
            click: _onGlobalClick
          };
          var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
          if (!_features.animationName || !_features.transform || oldPhone) {
            _options.showAnimationDuration = _options.hideAnimationDuration = 0;
          }
          for (i = 0; i < _modules.length; i++) {
            self["init" + _modules[i]]();
          }
          if (UiClass) {
            var ui = self.ui = new UiClass(self, framework);
            ui.init();
          }
          _shout("firstUpdate");
          _currentItemIndex = _currentItemIndex || _options.index || 0;
          if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
            _currentItemIndex = 0;
          }
          self.currItem = _getItemAt(_currentItemIndex);
          if (_features.isOldIOSPhone || _features.isOldAndroid) {
            _isFixedPosition = false;
          }
          template.setAttribute("aria-hidden", "false");
          if (_options.modal) {
            if (!_isFixedPosition) {
              template.style.position = "absolute";
              template.style.top = framework.getScrollY() + "px";
            } else {
              template.style.position = "fixed";
            }
          }
          if (_currentWindowScrollY === void 0) {
            _shout("initialLayout");
            _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
          }
          var rootClasses = "pswp--open ";
          if (_options.mainClass) {
            rootClasses += _options.mainClass + " ";
          }
          if (_options.showHideOpacity) {
            rootClasses += "pswp--animate_opacity ";
          }
          rootClasses += _likelyTouchDevice ? "pswp--touch" : "pswp--notouch";
          rootClasses += _features.animationName ? " pswp--css_animation" : "";
          rootClasses += _features.svg ? " pswp--svg" : "";
          framework.addClass(template, rootClasses);
          self.updateSize();
          _containerShiftIndex = -1;
          _indexDiff = null;
          for (i = 0; i < NUM_HOLDERS; i++) {
            _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
          }
          if (!_oldIE) {
            framework.bind(self.scrollWrap, _downEvents, self);
          }
          _listen("initialZoomInEnd", function() {
            self.setContent(_itemHolders[0], _currentItemIndex - 1);
            self.setContent(_itemHolders[2], _currentItemIndex + 1);
            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "block";
            if (_options.focus) {
              template.focus();
            }
            _bindEvents();
          });
          self.setContent(_itemHolders[1], _currentItemIndex);
          self.updateCurrItem();
          _shout("afterInit");
          if (!_isFixedPosition) {
            _updateSizeInterval = setInterval(function() {
              if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
                self.updateSize();
              }
            }, 1e3);
          }
          framework.addClass(template, "pswp--visible");
        },
        close: function() {
          if (!_isOpen) {
            return;
          }
          _isOpen = false;
          _isDestroying = true;
          _shout("close");
          _unbindEvents();
          _showOrHide(self.currItem, null, true, self.destroy);
        },
        destroy: function() {
          _shout("destroy");
          if (_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
          }
          template.setAttribute("aria-hidden", "true");
          template.className = _initalClassName;
          if (_updateSizeInterval) {
            clearInterval(_updateSizeInterval);
          }
          framework.unbind(self.scrollWrap, _downEvents, self);
          framework.unbind(window, "scroll", self);
          _stopDragUpdateLoop();
          _stopAllAnimations();
          _listeners = null;
        },
        panTo: function(x, y, force) {
          if (!force) {
            if (x > _currPanBounds.min.x) {
              x = _currPanBounds.min.x;
            } else if (x < _currPanBounds.max.x) {
              x = _currPanBounds.max.x;
            }
            if (y > _currPanBounds.min.y) {
              y = _currPanBounds.min.y;
            } else if (y < _currPanBounds.max.y) {
              y = _currPanBounds.max.y;
            }
          }
          _panOffset.x = x;
          _panOffset.y = y;
          _applyCurrentZoomPan();
        },
        handleEvent: function(e) {
          e = e || window.event;
          if (_globalEventHandlers[e.type]) {
            _globalEventHandlers[e.type](e);
          }
        },
        goTo: function(index) {
          index = _getLoopedId(index);
          var diff = index - _currentItemIndex;
          _indexDiff = diff;
          _currentItemIndex = index;
          self.currItem = _getItemAt(_currentItemIndex);
          _currPositionIndex -= diff;
          _moveMainScroll(_slideSize.x * _currPositionIndex);
          _stopAllAnimations();
          _mainScrollAnimating = false;
          self.updateCurrItem();
        },
        next: function() {
          self.goTo(_currentItemIndex + 1);
        },
        prev: function() {
          self.goTo(_currentItemIndex - 1);
        },
        updateCurrZoomItem: function(emulateSetContent) {
          if (emulateSetContent) {
            _shout("beforeChange", 0);
          }
          if (_itemHolders[1].el.children.length) {
            var zoomElement = _itemHolders[1].el.children[0];
            if (framework.hasClass(zoomElement, "pswp__zoom-wrap")) {
              _currZoomElementStyle = zoomElement.style;
            } else {
              _currZoomElementStyle = null;
            }
          } else {
            _currZoomElementStyle = null;
          }
          _currPanBounds = self.currItem.bounds;
          _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
          _panOffset.x = _currPanBounds.center.x;
          _panOffset.y = _currPanBounds.center.y;
          if (emulateSetContent) {
            _shout("afterChange");
          }
        },
        invalidateCurrItems: function() {
          _itemsNeedUpdate = true;
          for (var i = 0; i < NUM_HOLDERS; i++) {
            if (_itemHolders[i].item) {
              _itemHolders[i].item.needsUpdate = true;
            }
          }
        },
        updateCurrItem: function(beforeAnimation) {
          if (_indexDiff === 0) {
            return;
          }
          var diffAbs = Math.abs(_indexDiff), tempHolder;
          if (beforeAnimation && diffAbs < 2) {
            return;
          }
          self.currItem = _getItemAt(_currentItemIndex);
          _renderMaxResolution = false;
          _shout("beforeChange", _indexDiff);
          if (diffAbs >= NUM_HOLDERS) {
            _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
            diffAbs = NUM_HOLDERS;
          }
          for (var i = 0; i < diffAbs; i++) {
            if (_indexDiff > 0) {
              tempHolder = _itemHolders.shift();
              _itemHolders[NUM_HOLDERS - 1] = tempHolder;
              _containerShiftIndex++;
              _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
              self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
            } else {
              tempHolder = _itemHolders.pop();
              _itemHolders.unshift(tempHolder);
              _containerShiftIndex--;
              _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
              self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
            }
          }
          if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
            var prevItem = _getItemAt(_prevItemIndex);
            if (prevItem.initialZoomLevel !== _currZoomLevel) {
              _calculateItemSize(prevItem, _viewportSize);
              _setImageSize(prevItem);
              _applyZoomPanToItem(prevItem);
            }
          }
          _indexDiff = 0;
          self.updateCurrZoomItem();
          _prevItemIndex = _currentItemIndex;
          _shout("afterChange");
        },
        updateSize: function(force) {
          if (!_isFixedPosition && _options.modal) {
            var windowScrollY = framework.getScrollY();
            if (_currentWindowScrollY !== windowScrollY) {
              template.style.top = windowScrollY + "px";
              _currentWindowScrollY = windowScrollY;
            }
            if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
              return;
            }
            _windowVisibleSize.x = window.innerWidth;
            _windowVisibleSize.y = window.innerHeight;
            template.style.height = _windowVisibleSize.y + "px";
          }
          _viewportSize.x = self.scrollWrap.clientWidth;
          _viewportSize.y = self.scrollWrap.clientHeight;
          _updatePageScrollOffset();
          _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
          _slideSize.y = _viewportSize.y;
          _moveMainScroll(_slideSize.x * _currPositionIndex);
          _shout("beforeResize");
          if (_containerShiftIndex !== void 0) {
            var holder, item, hIndex;
            for (var i = 0; i < NUM_HOLDERS; i++) {
              holder = _itemHolders[i];
              _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);
              hIndex = _currentItemIndex + i - 1;
              if (_options.loop && _getNumItems() > 2) {
                hIndex = _getLoopedId(hIndex);
              }
              item = _getItemAt(hIndex);
              if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                self.cleanSlide(item);
                self.setContent(holder, hIndex);
                if (i === 1) {
                  self.currItem = item;
                  self.updateCurrZoomItem(true);
                }
                item.needsUpdate = false;
              } else if (holder.index === -1 && hIndex >= 0) {
                self.setContent(holder, hIndex);
              }
              if (item && item.container) {
                _calculateItemSize(item, _viewportSize);
                _setImageSize(item);
                _applyZoomPanToItem(item);
              }
            }
            _itemsNeedUpdate = false;
          }
          _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
          _currPanBounds = self.currItem.bounds;
          if (_currPanBounds) {
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;
            _applyCurrentZoomPan(true);
          }
          _shout("resize");
        },
        zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
          if (centerPoint) {
            _startZoomLevel = _currZoomLevel;
            _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
            _equalizePoints(_startPanOffset, _panOffset);
          }
          var destPanBounds = _calculatePanBounds(destZoomLevel, false), destPanOffset = {};
          _modifyDestPanOffset("x", destPanBounds, destPanOffset, destZoomLevel);
          _modifyDestPanOffset("y", destPanBounds, destPanOffset, destZoomLevel);
          var initialZoomLevel = _currZoomLevel;
          var initialPanOffset = {
            x: _panOffset.x,
            y: _panOffset.y
          };
          _roundPoint(destPanOffset);
          var onUpdate = function(now) {
            if (now === 1) {
              _currZoomLevel = destZoomLevel;
              _panOffset.x = destPanOffset.x;
              _panOffset.y = destPanOffset.y;
            } else {
              _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
              _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
              _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
            }
            if (updateFn) {
              updateFn(now);
            }
            _applyCurrentZoomPan(now === 1);
          };
          if (speed) {
            _animateProp("customZoomTo", 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
          } else {
            onUpdate(1);
          }
        }
      };
      var MIN_SWIPE_DISTANCE = 30, DIRECTION_CHECK_OFFSET = 10;
      var _gestureStartTime, _gestureCheckSpeedTime, p = {}, p2 = {}, delta = {}, _currPoint = {}, _startPoint = {}, _currPointers = [], _startMainScrollPos = {}, _releaseAnimData, _posPoints = [], _tempPoint = {}, _isZoomingIn, _verticalDragInitiated, _oldAndroidTouchEndTimeout, _currZoomedItemIndex = 0, _centerPoint = _getEmptyPoint(), _lastReleaseTime = 0, _isDragging, _isMultitouch, _zoomStarted, _moved, _dragAnimFrame, _mainScrollShifted, _currentPoints, _isZooming, _startPointsDistance, _currPanBounds, _mainScrollPos = _getEmptyPoint(), _currZoomElementStyle, _mainScrollAnimating, _midZoomPoint = _getEmptyPoint(), _currCenterPoint = _getEmptyPoint(), _direction, _isFirstMove, _opacityChanged, _bgOpacity, _wasOverInitialZoom, _isEqualPoints = function(p1, p22) {
        return p1.x === p22.x && p1.y === p22.y;
      }, _isNearbyPoints = function(touch0, touch1) {
        return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
      }, _calculatePointsDistance = function(p1, p22) {
        _tempPoint.x = Math.abs(p1.x - p22.x);
        _tempPoint.y = Math.abs(p1.y - p22.y);
        return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
      }, _stopDragUpdateLoop = function() {
        if (_dragAnimFrame) {
          _cancelAF(_dragAnimFrame);
          _dragAnimFrame = null;
        }
      }, _dragUpdateLoop = function() {
        if (_isDragging) {
          _dragAnimFrame = _requestAF(_dragUpdateLoop);
          _renderMovement();
        }
      }, _canPan = function() {
        return !(_options.scaleMode === "fit" && _currZoomLevel === self.currItem.initialZoomLevel);
      }, _closestElement = function(el, fn) {
        if (!el || el === document) {
          return false;
        }
        if (el.getAttribute("class") && el.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) {
          return false;
        }
        if (fn(el)) {
          return el;
        }
        return _closestElement(el.parentNode, fn);
      }, _preventObj = {}, _preventDefaultEventBehaviour = function(e, isDown) {
        _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
        _shout("preventDragEvent", e, isDown, _preventObj);
        return _preventObj.prevent;
      }, _convertTouchToPoint = function(touch, p3) {
        p3.x = touch.pageX;
        p3.y = touch.pageY;
        p3.id = touch.identifier;
        return p3;
      }, _findCenterOfPoints = function(p1, p22, pCenter) {
        pCenter.x = (p1.x + p22.x) * 0.5;
        pCenter.y = (p1.y + p22.y) * 0.5;
      }, _pushPosPoint = function(time, x, y) {
        if (time - _gestureCheckSpeedTime > 50) {
          var o = _posPoints.length > 2 ? _posPoints.shift() : {};
          o.x = x;
          o.y = y;
          _posPoints.push(o);
          _gestureCheckSpeedTime = time;
        }
      }, _calculateVerticalDragOpacityRatio = function() {
        var yOffset = _panOffset.y - self.currItem.initialPosition.y;
        return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
      }, _ePoint1 = {}, _ePoint2 = {}, _tempPointsArr = [], _tempCounter, _getTouchPoints = function(e) {
        while (_tempPointsArr.length > 0) {
          _tempPointsArr.pop();
        }
        if (!_pointerEventEnabled) {
          if (e.type.indexOf("touch") > -1) {
            if (e.touches && e.touches.length > 0) {
              _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
              if (e.touches.length > 1) {
                _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
              }
            }
          } else {
            _ePoint1.x = e.pageX;
            _ePoint1.y = e.pageY;
            _ePoint1.id = "";
            _tempPointsArr[0] = _ePoint1;
          }
        } else {
          _tempCounter = 0;
          _currPointers.forEach(function(p3) {
            if (_tempCounter === 0) {
              _tempPointsArr[0] = p3;
            } else if (_tempCounter === 1) {
              _tempPointsArr[1] = p3;
            }
            _tempCounter++;
          });
        }
        return _tempPointsArr;
      }, _panOrMoveMainScroll = function(axis, delta2) {
        var panFriction, newOffset = _panOffset[axis] + delta2[axis], startOverDiff, dir = delta2[axis] > 0, newMainScrollPosition = _mainScrollPos.x + delta2.x, mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x, newPanPos, newMainScrollPos;
        if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
          panFriction = _options.panEndFriction;
        } else {
          panFriction = 1;
        }
        newOffset = _panOffset[axis] + delta2[axis] * panFriction;
        if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
          if (!_currZoomElementStyle) {
            newMainScrollPos = newMainScrollPosition;
          } else if (_direction === "h" && axis === "x" && !_zoomStarted) {
            if (dir) {
              if (newOffset > _currPanBounds.min[axis]) {
                panFriction = _options.panEndFriction;
                _currPanBounds.min[axis] - newOffset;
                startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
              }
              if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                newMainScrollPos = newMainScrollPosition;
                if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                  newMainScrollPos = _startMainScrollPos.x;
                }
              } else {
                if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                  newPanPos = newOffset;
                }
              }
            } else {
              if (newOffset < _currPanBounds.max[axis]) {
                panFriction = _options.panEndFriction;
                newOffset - _currPanBounds.max[axis];
                startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
              }
              if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                newMainScrollPos = newMainScrollPosition;
                if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                  newMainScrollPos = _startMainScrollPos.x;
                }
              } else {
                if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                  newPanPos = newOffset;
                }
              }
            }
          }
          if (axis === "x") {
            if (newMainScrollPos !== void 0) {
              _moveMainScroll(newMainScrollPos, true);
              if (newMainScrollPos === _startMainScrollPos.x) {
                _mainScrollShifted = false;
              } else {
                _mainScrollShifted = true;
              }
            }
            if (_currPanBounds.min.x !== _currPanBounds.max.x) {
              if (newPanPos !== void 0) {
                _panOffset.x = newPanPos;
              } else if (!_mainScrollShifted) {
                _panOffset.x += delta2.x * panFriction;
              }
            }
            return newMainScrollPos !== void 0;
          }
        }
        if (!_mainScrollAnimating) {
          if (!_mainScrollShifted) {
            if (_currZoomLevel > self.currItem.fitRatio) {
              _panOffset[axis] += delta2[axis] * panFriction;
            }
          }
        }
      }, _onDragStart = function(e) {
        if (e.type === "mousedown" && e.button > 0) {
          return;
        }
        if (_initialZoomRunning) {
          e.preventDefault();
          return;
        }
        if (_oldAndroidTouchEndTimeout && e.type === "mousedown") {
          return;
        }
        if (_preventDefaultEventBehaviour(e, true)) {
          e.preventDefault();
        }
        _shout("pointerDown");
        if (_pointerEventEnabled) {
          var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
          if (pointerIndex < 0) {
            pointerIndex = _currPointers.length;
          }
          _currPointers[pointerIndex] = { x: e.pageX, y: e.pageY, id: e.pointerId };
        }
        var startPointsList = _getTouchPoints(e), numPoints = startPointsList.length;
        _currentPoints = null;
        _stopAllAnimations();
        if (!_isDragging || numPoints === 1) {
          _isDragging = _isFirstMove = true;
          framework.bind(window, _upMoveEvents, self);
          _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
          _direction = null;
          _shout("firstTouchStart", startPointsList);
          _equalizePoints(_startPanOffset, _panOffset);
          _currPanDist.x = _currPanDist.y = 0;
          _equalizePoints(_currPoint, startPointsList[0]);
          _equalizePoints(_startPoint, _currPoint);
          _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
          _posPoints = [{
            x: _currPoint.x,
            y: _currPoint.y
          }];
          _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
          _calculatePanBounds(_currZoomLevel, true);
          _stopDragUpdateLoop();
          _dragUpdateLoop();
        }
        if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
          _startZoomLevel = _currZoomLevel;
          _zoomStarted = false;
          _isZooming = _isMultitouch = true;
          _currPanDist.y = _currPanDist.x = 0;
          _equalizePoints(_startPanOffset, _panOffset);
          _equalizePoints(p, startPointsList[0]);
          _equalizePoints(p2, startPointsList[1]);
          _findCenterOfPoints(p, p2, _currCenterPoint);
          _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
          _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
          _startPointsDistance = _calculatePointsDistance(p, p2);
        }
      }, _onDragMove = function(e) {
        e.preventDefault();
        if (_pointerEventEnabled) {
          var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
          if (pointerIndex > -1) {
            var p3 = _currPointers[pointerIndex];
            p3.x = e.pageX;
            p3.y = e.pageY;
          }
        }
        if (_isDragging) {
          var touchesList = _getTouchPoints(e);
          if (!_direction && !_moved && !_isZooming) {
            if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
              _direction = "h";
            } else {
              var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
              if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                _direction = diff > 0 ? "h" : "v";
                _currentPoints = touchesList;
              }
            }
          } else {
            _currentPoints = touchesList;
          }
        }
      }, _renderMovement = function() {
        if (!_currentPoints) {
          return;
        }
        var numPoints = _currentPoints.length;
        if (numPoints === 0) {
          return;
        }
        _equalizePoints(p, _currentPoints[0]);
        delta.x = p.x - _currPoint.x;
        delta.y = p.y - _currPoint.y;
        if (_isZooming && numPoints > 1) {
          _currPoint.x = p.x;
          _currPoint.y = p.y;
          if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
            return;
          }
          _equalizePoints(p2, _currentPoints[1]);
          if (!_zoomStarted) {
            _zoomStarted = true;
            _shout("zoomGestureStarted");
          }
          var pointsDistance = _calculatePointsDistance(p, p2);
          var zoomLevel = _calculateZoomLevel(pointsDistance);
          if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
            _wasOverInitialZoom = true;
          }
          var zoomFriction = 1, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
          if (zoomLevel < minZoomLevel) {
            if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
              var minusDiff = minZoomLevel - zoomLevel;
              var percent = 1 - minusDiff / (minZoomLevel / 1.2);
              _applyBgOpacity(percent);
              _shout("onPinchClose", percent);
              _opacityChanged = true;
            } else {
              zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
              if (zoomFriction > 1) {
                zoomFriction = 1;
              }
              zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
            }
          } else if (zoomLevel > maxZoomLevel) {
            zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
            if (zoomFriction > 1) {
              zoomFriction = 1;
            }
            zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
          }
          if (zoomFriction < 0) {
            zoomFriction = 0;
          }
          _findCenterOfPoints(p, p2, _centerPoint);
          _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
          _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
          _equalizePoints(_currCenterPoint, _centerPoint);
          _panOffset.x = _calculatePanOffset("x", zoomLevel);
          _panOffset.y = _calculatePanOffset("y", zoomLevel);
          _isZoomingIn = zoomLevel > _currZoomLevel;
          _currZoomLevel = zoomLevel;
          _applyCurrentZoomPan();
        } else {
          if (!_direction) {
            return;
          }
          if (_isFirstMove) {
            _isFirstMove = false;
            if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
              delta.x -= _currentPoints[0].x - _startPoint.x;
            }
            if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
              delta.y -= _currentPoints[0].y - _startPoint.y;
            }
          }
          _currPoint.x = p.x;
          _currPoint.y = p.y;
          if (delta.x === 0 && delta.y === 0) {
            return;
          }
          if (_direction === "v" && _options.closeOnVerticalDrag) {
            if (!_canPan()) {
              _currPanDist.y += delta.y;
              _panOffset.y += delta.y;
              var opacityRatio = _calculateVerticalDragOpacityRatio();
              _verticalDragInitiated = true;
              _shout("onVerticalDrag", opacityRatio);
              _applyBgOpacity(opacityRatio);
              _applyCurrentZoomPan();
              return;
            }
          }
          _pushPosPoint(_getCurrentTime(), p.x, p.y);
          _moved = true;
          _currPanBounds = self.currItem.bounds;
          var mainScrollChanged = _panOrMoveMainScroll("x", delta);
          if (!mainScrollChanged) {
            _panOrMoveMainScroll("y", delta);
            _roundPoint(_panOffset);
            _applyCurrentZoomPan();
          }
        }
      }, _onDragRelease = function(e) {
        if (_features.isOldAndroid) {
          if (_oldAndroidTouchEndTimeout && e.type === "mouseup") {
            return;
          }
          if (e.type.indexOf("touch") > -1) {
            clearTimeout(_oldAndroidTouchEndTimeout);
            _oldAndroidTouchEndTimeout = setTimeout(function() {
              _oldAndroidTouchEndTimeout = 0;
            }, 600);
          }
        }
        _shout("pointerUp");
        if (_preventDefaultEventBehaviour(e, false)) {
          e.preventDefault();
        }
        var releasePoint;
        if (_pointerEventEnabled) {
          var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
          if (pointerIndex > -1) {
            releasePoint = _currPointers.splice(pointerIndex, 1)[0];
            if (navigator.msPointerEnabled) {
              var MSPOINTER_TYPES = {
                4: "mouse",
                2: "touch",
                3: "pen"
              };
              releasePoint.type = MSPOINTER_TYPES[e.pointerType];
              if (!releasePoint.type) {
                releasePoint.type = e.pointerType || "mouse";
              }
            } else {
              releasePoint.type = e.pointerType || "mouse";
            }
          }
        }
        var touchList = _getTouchPoints(e), gestureType, numPoints = touchList.length;
        if (e.type === "mouseup") {
          numPoints = 0;
        }
        if (numPoints === 2) {
          _currentPoints = null;
          return true;
        }
        if (numPoints === 1) {
          _equalizePoints(_startPoint, touchList[0]);
        }
        if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
          if (!releasePoint) {
            if (e.type === "mouseup") {
              releasePoint = { x: e.pageX, y: e.pageY, type: "mouse" };
            } else if (e.changedTouches && e.changedTouches[0]) {
              releasePoint = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" };
            }
          }
          _shout("touchRelease", e, releasePoint);
        }
        var releaseTimeDiff = -1;
        if (numPoints === 0) {
          _isDragging = false;
          framework.unbind(window, _upMoveEvents, self);
          _stopDragUpdateLoop();
          if (_isZooming) {
            releaseTimeDiff = 0;
          } else if (_lastReleaseTime !== -1) {
            releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
          }
        }
        _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
        if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
          gestureType = "zoom";
        } else {
          gestureType = "swipe";
        }
        if (_isZooming && numPoints < 2) {
          _isZooming = false;
          if (numPoints === 1) {
            gestureType = "zoomPointerUp";
          }
          _shout("zoomGestureEnded");
        }
        _currentPoints = null;
        if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
          return;
        }
        _stopAllAnimations();
        if (!_releaseAnimData) {
          _releaseAnimData = _initDragReleaseAnimationData();
        }
        _releaseAnimData.calculateSwipeSpeed("x");
        if (_verticalDragInitiated) {
          var opacityRatio = _calculateVerticalDragOpacityRatio();
          if (opacityRatio < _options.verticalDragRange) {
            self.close();
          } else {
            var initalPanY = _panOffset.y, initialBgOpacity = _bgOpacity;
            _animateProp("verticalDrag", 0, 1, 300, framework.easing.cubic.out, function(now) {
              _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;
              _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
              _applyCurrentZoomPan();
            });
            _shout("onVerticalDrag", 1);
          }
          return;
        }
        if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
          var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
          if (itemChanged) {
            return;
          }
          gestureType = "zoomPointerUp";
        }
        if (_mainScrollAnimating) {
          return;
        }
        if (gestureType !== "swipe") {
          _completeZoomGesture();
          return;
        }
        if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
          _completePanGesture(_releaseAnimData);
        }
      }, _initDragReleaseAnimationData = function() {
        var lastFlickDuration, tempReleasePos;
        var s = {
          lastFlickOffset: {},
          lastFlickDist: {},
          lastFlickSpeed: {},
          slowDownRatio: {},
          slowDownRatioReverse: {},
          speedDecelerationRatio: {},
          speedDecelerationRatioAbs: {},
          distanceOffset: {},
          backAnimDestination: {},
          backAnimStarted: {},
          calculateSwipeSpeed: function(axis) {
            if (_posPoints.length > 1) {
              lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
              tempReleasePos = _posPoints[_posPoints.length - 2][axis];
            } else {
              lastFlickDuration = _getCurrentTime() - _gestureStartTime;
              tempReleasePos = _startPoint[axis];
            }
            s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
            s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
            if (s.lastFlickDist[axis] > 20) {
              s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
            } else {
              s.lastFlickSpeed[axis] = 0;
            }
            if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
              s.lastFlickSpeed[axis] = 0;
            }
            s.slowDownRatio[axis] = 0.95;
            s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
            s.speedDecelerationRatio[axis] = 1;
          },
          calculateOverBoundsAnimOffset: function(axis, speed) {
            if (!s.backAnimStarted[axis]) {
              if (_panOffset[axis] > _currPanBounds.min[axis]) {
                s.backAnimDestination[axis] = _currPanBounds.min[axis];
              } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                s.backAnimDestination[axis] = _currPanBounds.max[axis];
              }
              if (s.backAnimDestination[axis] !== void 0) {
                s.slowDownRatio[axis] = 0.7;
                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                  s.lastFlickSpeed[axis] = 0;
                  s.backAnimStarted[axis] = true;
                  _animateProp("bounceZoomPan" + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function(pos) {
                    _panOffset[axis] = pos;
                    _applyCurrentZoomPan();
                  });
                }
              }
            }
          },
          calculateAnimOffset: function(axis) {
            if (!s.backAnimStarted[axis]) {
              s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
              s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
              s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
              _panOffset[axis] += s.distanceOffset[axis];
            }
          },
          panAnimLoop: function() {
            if (_animations.zoomPan) {
              _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
              s.now = _getCurrentTime();
              s.timeDiff = s.now - s.lastNow;
              s.lastNow = s.now;
              s.calculateAnimOffset("x");
              s.calculateAnimOffset("y");
              _applyCurrentZoomPan();
              s.calculateOverBoundsAnimOffset("x");
              s.calculateOverBoundsAnimOffset("y");
              if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
                _panOffset.x = Math.round(_panOffset.x);
                _panOffset.y = Math.round(_panOffset.y);
                _applyCurrentZoomPan();
                _stopAnimation("zoomPan");
                return;
              }
            }
          }
        };
        return s;
      }, _completePanGesture = function(animData) {
        animData.calculateSwipeSpeed("y");
        _currPanBounds = self.currItem.bounds;
        animData.backAnimDestination = {};
        animData.backAnimStarted = {};
        if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
          animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
          animData.calculateOverBoundsAnimOffset("x");
          animData.calculateOverBoundsAnimOffset("y");
          return true;
        }
        _registerStartAnimation("zoomPan");
        animData.lastNow = _getCurrentTime();
        animData.panAnimLoop();
      }, _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData2) {
        var itemChanged;
        if (!_mainScrollAnimating) {
          _currZoomedItemIndex = _currentItemIndex;
        }
        var itemsDiff;
        if (gestureType === "swipe") {
          var totalShiftDist = _currPoint.x - _startPoint.x, isFastLastFlick = _releaseAnimData2.lastFlickDist.x < 10;
          if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x > 20)) {
            itemsDiff = -1;
          } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x < -20)) {
            itemsDiff = 1;
          }
        }
        var nextCircle;
        if (itemsDiff) {
          _currentItemIndex += itemsDiff;
          if (_currentItemIndex < 0) {
            _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
            nextCircle = true;
          } else if (_currentItemIndex >= _getNumItems()) {
            _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
            nextCircle = true;
          }
          if (!nextCircle || _options.loop) {
            _indexDiff += itemsDiff;
            _currPositionIndex -= itemsDiff;
            itemChanged = true;
          }
        }
        var animateToX = _slideSize.x * _currPositionIndex;
        var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
        var finishAnimDuration;
        if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData2.lastFlickSpeed.x > 0) {
          finishAnimDuration = 333;
        } else {
          finishAnimDuration = Math.abs(_releaseAnimData2.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData2.lastFlickSpeed.x) : 333;
          finishAnimDuration = Math.min(finishAnimDuration, 400);
          finishAnimDuration = Math.max(finishAnimDuration, 250);
        }
        if (_currZoomedItemIndex === _currentItemIndex) {
          itemChanged = false;
        }
        _mainScrollAnimating = true;
        _shout("mainScrollAnimStart");
        _animateProp("mainScroll", _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function() {
          _stopAllAnimations();
          _mainScrollAnimating = false;
          _currZoomedItemIndex = -1;
          if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
            self.updateCurrItem();
          }
          _shout("mainScrollAnimComplete");
        });
        if (itemChanged) {
          self.updateCurrItem(true);
        }
        return itemChanged;
      }, _calculateZoomLevel = function(touchesDistance) {
        return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
      }, _completeZoomGesture = function() {
        var destZoomLevel = _currZoomLevel, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
        if (_currZoomLevel < minZoomLevel) {
          destZoomLevel = minZoomLevel;
        } else if (_currZoomLevel > maxZoomLevel) {
          destZoomLevel = maxZoomLevel;
        }
        var destOpacity = 1, onUpdate, initialOpacity = _bgOpacity;
        if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
          self.close();
          return true;
        }
        if (_opacityChanged) {
          onUpdate = function(now) {
            _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
          };
        }
        self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
        return true;
      };
      _registerModule("Gestures", {
        publicMethods: {
          initGestures: function() {
            var addEventNames = function(pref, down, move, up, cancel) {
              _dragStartEvent = pref + down;
              _dragMoveEvent = pref + move;
              _dragEndEvent = pref + up;
              if (cancel) {
                _dragCancelEvent = pref + cancel;
              } else {
                _dragCancelEvent = "";
              }
            };
            _pointerEventEnabled = _features.pointerEvent;
            if (_pointerEventEnabled && _features.touch) {
              _features.touch = false;
            }
            if (_pointerEventEnabled) {
              if (navigator.msPointerEnabled) {
                addEventNames("MSPointer", "Down", "Move", "Up", "Cancel");
              } else {
                addEventNames("pointer", "down", "move", "up", "cancel");
              }
            } else if (_features.touch) {
              addEventNames("touch", "start", "move", "end", "cancel");
              _likelyTouchDevice = true;
            } else {
              addEventNames("mouse", "down", "move", "up");
            }
            _upMoveEvents = _dragMoveEvent + " " + _dragEndEvent + " " + _dragCancelEvent;
            _downEvents = _dragStartEvent;
            if (_pointerEventEnabled && !_likelyTouchDevice) {
              _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
            }
            self.likelyTouchDevice = _likelyTouchDevice;
            _globalEventHandlers[_dragStartEvent] = _onDragStart;
            _globalEventHandlers[_dragMoveEvent] = _onDragMove;
            _globalEventHandlers[_dragEndEvent] = _onDragRelease;
            if (_dragCancelEvent) {
              _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
            }
            if (_features.touch) {
              _downEvents += " mousedown";
              _upMoveEvents += " mousemove mouseup";
              _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
              _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
              _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
            }
            if (!_likelyTouchDevice) {
              _options.allowPanToNext = false;
            }
          }
        }
      });
      var _showOrHideTimeout, _showOrHide = function(item, img, out, completeFn) {
        if (_showOrHideTimeout) {
          clearTimeout(_showOrHideTimeout);
        }
        _initialZoomRunning = true;
        _initialContentSet = true;
        var thumbBounds;
        if (item.initialLayout) {
          thumbBounds = item.initialLayout;
          item.initialLayout = null;
        } else {
          thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
        }
        var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
        var onComplete = function() {
          _stopAnimation("initialZoom");
          if (!out) {
            _applyBgOpacity(1);
            if (img) {
              img.style.display = "block";
            }
            framework.addClass(template, "pswp--animated-in");
            _shout("initialZoom" + (out ? "OutEnd" : "InEnd"));
          } else {
            self.template.removeAttribute("style");
            self.bg.removeAttribute("style");
          }
          if (completeFn) {
            completeFn();
          }
          _initialZoomRunning = false;
        };
        if (!duration || !thumbBounds || thumbBounds.x === void 0) {
          _shout("initialZoom" + (out ? "Out" : "In"));
          _currZoomLevel = item.initialZoomLevel;
          _equalizePoints(_panOffset, item.initialPosition);
          _applyCurrentZoomPan();
          template.style.opacity = out ? 0 : 1;
          _applyBgOpacity(1);
          if (duration) {
            setTimeout(function() {
              onComplete();
            }, duration);
          } else {
            onComplete();
          }
          return;
        }
        var startAnimation = function() {
          var closeWithRaf = _closedByScroll, fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
          if (item.miniImg) {
            item.miniImg.style.webkitBackfaceVisibility = "hidden";
          }
          if (!out) {
            _currZoomLevel = thumbBounds.w / item.w;
            _panOffset.x = thumbBounds.x;
            _panOffset.y = thumbBounds.y - _initalWindowScrollY;
            self[fadeEverything ? "template" : "bg"].style.opacity = 1e-3;
            _applyCurrentZoomPan();
          }
          _registerStartAnimation("initialZoom");
          if (out && !closeWithRaf) {
            framework.removeClass(template, "pswp--animated-in");
          }
          if (fadeEverything) {
            if (out) {
              framework[(closeWithRaf ? "remove" : "add") + "Class"](template, "pswp--animate_opacity");
            } else {
              setTimeout(function() {
                framework.addClass(template, "pswp--animate_opacity");
              }, 30);
            }
          }
          _showOrHideTimeout = setTimeout(function() {
            _shout("initialZoom" + (out ? "Out" : "In"));
            if (!out) {
              _currZoomLevel = item.initialZoomLevel;
              _equalizePoints(_panOffset, item.initialPosition);
              _applyCurrentZoomPan();
              _applyBgOpacity(1);
              if (fadeEverything) {
                template.style.opacity = 1;
              } else {
                _applyBgOpacity(1);
              }
              _showOrHideTimeout = setTimeout(onComplete, duration + 20);
            } else {
              var destZoomLevel = thumbBounds.w / item.w, initialPanOffset = {
                x: _panOffset.x,
                y: _panOffset.y
              }, initialZoomLevel = _currZoomLevel, initalBgOpacity = _bgOpacity, onUpdate = function(now) {
                if (now === 1) {
                  _currZoomLevel = destZoomLevel;
                  _panOffset.x = thumbBounds.x;
                  _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                } else {
                  _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                  _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                  _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                }
                _applyCurrentZoomPan();
                if (fadeEverything) {
                  template.style.opacity = 1 - now;
                } else {
                  _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                }
              };
              if (closeWithRaf) {
                _animateProp("initialZoom", 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
              } else {
                onUpdate(1);
                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
              }
            }
          }, out ? 25 : 90);
        };
        startAnimation();
      };
      var _items, _tempPanAreaSize = {}, _imagesToAppendPool = [], _initialContentSet, _initialZoomRunning, _controllerDefaultOptions = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: false,
        preload: [1, 1],
        getNumItemsFn: function() {
          return _items.length;
        }
      };
      var _getItemAt, _getNumItems, _getZeroBounds = function() {
        return {
          center: { x: 0, y: 0 },
          max: { x: 0, y: 0 },
          min: { x: 0, y: 0 }
        };
      }, _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
        var bounds = item.bounds;
        bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
        bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
        bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
        bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y;
        bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
        bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
      }, _calculateItemSize = function(item, viewportSize, zoomLevel) {
        if (item.src && !item.loadError) {
          var isInitial = !zoomLevel;
          if (isInitial) {
            if (!item.vGap) {
              item.vGap = { top: 0, bottom: 0 };
            }
            _shout("parseVerticalMargin", item);
          }
          _tempPanAreaSize.x = viewportSize.x;
          _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
          if (isInitial) {
            var hRatio = _tempPanAreaSize.x / item.w;
            var vRatio = _tempPanAreaSize.y / item.h;
            item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
            var scaleMode = _options.scaleMode;
            if (scaleMode === "orig") {
              zoomLevel = 1;
            } else if (scaleMode === "fit") {
              zoomLevel = item.fitRatio;
            }
            if (zoomLevel > 1) {
              zoomLevel = 1;
            }
            item.initialZoomLevel = zoomLevel;
            if (!item.bounds) {
              item.bounds = _getZeroBounds();
            }
          }
          if (!zoomLevel) {
            return;
          }
          _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
          if (isInitial && zoomLevel === item.initialZoomLevel) {
            item.initialPosition = item.bounds.center;
          }
          return item.bounds;
        } else {
          item.w = item.h = 0;
          item.initialZoomLevel = item.fitRatio = 1;
          item.bounds = _getZeroBounds();
          item.initialPosition = item.bounds.center;
          return item.bounds;
        }
      }, _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
        if (item.loadError) {
          return;
        }
        if (img) {
          item.imageAppended = true;
          _setImageSize(item, img, item === self.currItem && _renderMaxResolution);
          baseDiv.appendChild(img);
          if (keepPlaceholder) {
            setTimeout(function() {
              if (item && item.loaded && item.placeholder) {
                item.placeholder.style.display = "none";
                item.placeholder = null;
              }
            }, 500);
          }
        }
      }, _preloadImage = function(item) {
        item.loading = true;
        item.loaded = false;
        var img = item.img = framework.createEl("pswp__img", "img");
        var onComplete = function() {
          item.loading = false;
          item.loaded = true;
          if (item.loadComplete) {
            item.loadComplete(item);
          } else {
            item.img = null;
          }
          img.onload = img.onerror = null;
          img = null;
        };
        img.onload = onComplete;
        img.onerror = function() {
          item.loadError = true;
          onComplete();
        };
        img.src = item.src;
        return img;
      }, _checkForError = function(item, cleanUp) {
        if (item.src && item.loadError && item.container) {
          if (cleanUp) {
            item.container.innerHTML = "";
          }
          item.container.innerHTML = _options.errorMsg.replace("%url%", item.src);
          return true;
        }
      }, _setImageSize = function(item, img, maxRes) {
        if (!item.src) {
          return;
        }
        if (!img) {
          img = item.container.lastChild;
        }
        var w = maxRes ? item.w : Math.round(item.w * item.fitRatio), h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
        if (item.placeholder && !item.loaded) {
          item.placeholder.style.width = w + "px";
          item.placeholder.style.height = h + "px";
        }
        img.style.width = w + "px";
        img.style.height = h + "px";
      }, _appendImagesPool = function() {
        if (_imagesToAppendPool.length) {
          var poolItem;
          for (var i = 0; i < _imagesToAppendPool.length; i++) {
            poolItem = _imagesToAppendPool[i];
            if (poolItem.holder.index === poolItem.index) {
              _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
            }
          }
          _imagesToAppendPool = [];
        }
      };
      _registerModule("Controller", {
        publicMethods: {
          lazyLoadItem: function(index) {
            index = _getLoopedId(index);
            var item = _getItemAt(index);
            if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
              return;
            }
            _shout("gettingData", index, item);
            if (!item.src) {
              return;
            }
            _preloadImage(item);
          },
          initController: function() {
            framework.extend(_options, _controllerDefaultOptions, true);
            self.items = _items = items;
            _getItemAt = self.getItemAt;
            _getNumItems = _options.getNumItemsFn;
            if (_getNumItems() < 3) {
              _options.loop = false;
            }
            _listen("beforeChange", function(diff) {
              var p3 = _options.preload, isNext = diff === null ? true : diff >= 0, preloadBefore = Math.min(p3[0], _getNumItems()), preloadAfter = Math.min(p3[1], _getNumItems()), i;
              for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                self.lazyLoadItem(_currentItemIndex + i);
              }
              for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                self.lazyLoadItem(_currentItemIndex - i);
              }
            });
            _listen("initialLayout", function() {
              self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
            });
            _listen("mainScrollAnimComplete", _appendImagesPool);
            _listen("initialZoomInEnd", _appendImagesPool);
            _listen("destroy", function() {
              var item;
              for (var i = 0; i < _items.length; i++) {
                item = _items[i];
                if (item.container) {
                  item.container = null;
                }
                if (item.placeholder) {
                  item.placeholder = null;
                }
                if (item.img) {
                  item.img = null;
                }
                if (item.preloader) {
                  item.preloader = null;
                }
                if (item.loadError) {
                  item.loaded = item.loadError = false;
                }
              }
              _imagesToAppendPool = null;
            });
          },
          getItemAt: function(index) {
            if (index >= 0) {
              return _items[index] !== void 0 ? _items[index] : false;
            }
            return false;
          },
          allowProgressiveImg: function() {
            return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
          },
          setContent: function(holder, index) {
            if (_options.loop) {
              index = _getLoopedId(index);
            }
            var prevItem = self.getItemAt(holder.index);
            if (prevItem) {
              prevItem.container = null;
            }
            var item = self.getItemAt(index), img;
            if (!item) {
              holder.el.innerHTML = "";
              return;
            }
            _shout("gettingData", index, item);
            holder.index = index;
            holder.item = item;
            var baseDiv = item.container = framework.createEl("pswp__zoom-wrap");
            if (!item.src && item.html) {
              if (item.html.tagName) {
                baseDiv.appendChild(item.html);
              } else {
                baseDiv.innerHTML = item.html;
              }
            }
            _checkForError(item);
            _calculateItemSize(item, _viewportSize);
            if (item.src && !item.loadError && !item.loaded) {
              item.loadComplete = function(item2) {
                if (!_isOpen) {
                  return;
                }
                if (holder && holder.index === index) {
                  if (_checkForError(item2, true)) {
                    item2.loadComplete = item2.img = null;
                    _calculateItemSize(item2, _viewportSize);
                    _applyZoomPanToItem(item2);
                    if (holder.index === _currentItemIndex) {
                      self.updateCurrZoomItem();
                    }
                    return;
                  }
                  if (!item2.imageAppended) {
                    if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                      _imagesToAppendPool.push({
                        item: item2,
                        baseDiv,
                        img: item2.img,
                        index,
                        holder,
                        clearPlaceholder: true
                      });
                    } else {
                      _appendImage(index, item2, baseDiv, item2.img, _mainScrollAnimating || _initialZoomRunning, true);
                    }
                  } else {
                    if (!_initialZoomRunning && item2.placeholder) {
                      item2.placeholder.style.display = "none";
                      item2.placeholder = null;
                    }
                  }
                }
                item2.loadComplete = null;
                item2.img = null;
                _shout("imageLoadComplete", index, item2);
              };
              if (framework.features.transform) {
                var placeholderClassName = "pswp__img pswp__img--placeholder";
                placeholderClassName += item.msrc ? "" : " pswp__img--placeholder--blank";
                var placeholder = framework.createEl(placeholderClassName, item.msrc ? "img" : "");
                if (item.msrc) {
                  placeholder.src = item.msrc;
                }
                _setImageSize(item, placeholder);
                baseDiv.appendChild(placeholder);
                item.placeholder = placeholder;
              }
              if (!item.loading) {
                _preloadImage(item);
              }
              if (self.allowProgressiveImg()) {
                if (!_initialContentSet && _features.transform) {
                  _imagesToAppendPool.push({
                    item,
                    baseDiv,
                    img: item.img,
                    index,
                    holder
                  });
                } else {
                  _appendImage(index, item, baseDiv, item.img, true, true);
                }
              }
            } else if (item.src && !item.loadError) {
              img = framework.createEl("pswp__img", "img");
              img.style.opacity = 1;
              img.src = item.src;
              _setImageSize(item, img);
              _appendImage(index, item, baseDiv, img);
            }
            if (!_initialContentSet && index === _currentItemIndex) {
              _currZoomElementStyle = baseDiv.style;
              _showOrHide(item, img || item.img);
            } else {
              _applyZoomPanToItem(item);
            }
            holder.el.innerHTML = "";
            holder.el.appendChild(baseDiv);
          },
          cleanSlide: function(item) {
            if (item.img) {
              item.img.onload = item.img.onerror = null;
            }
            item.loaded = item.loading = item.img = item.imageAppended = false;
          }
        }
      });
      var tapTimer, tapReleasePoint = {}, _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
        var e = document.createEvent("CustomEvent"), eDetail = {
          origEvent,
          target: origEvent.target,
          releasePoint,
          pointerType: pointerType || "touch"
        };
        e.initCustomEvent("pswpTap", true, true, eDetail);
        origEvent.target.dispatchEvent(e);
      };
      _registerModule("Tap", {
        publicMethods: {
          initTap: function() {
            _listen("firstTouchStart", self.onTapStart);
            _listen("touchRelease", self.onTapRelease);
            _listen("destroy", function() {
              tapReleasePoint = {};
              tapTimer = null;
            });
          },
          onTapStart: function(touchList) {
            if (touchList.length > 1) {
              clearTimeout(tapTimer);
              tapTimer = null;
            }
          },
          onTapRelease: function(e, releasePoint) {
            if (!releasePoint) {
              return;
            }
            if (!_moved && !_isMultitouch && !_numAnimations) {
              var p0 = releasePoint;
              if (tapTimer) {
                clearTimeout(tapTimer);
                tapTimer = null;
                if (_isNearbyPoints(p0, tapReleasePoint)) {
                  _shout("doubleTap", p0);
                  return;
                }
              }
              if (releasePoint.type === "mouse") {
                _dispatchTapEvent(e, releasePoint, "mouse");
                return;
              }
              var clickedTagName = e.target.tagName.toUpperCase();
              if (clickedTagName === "BUTTON" || framework.hasClass(e.target, "pswp__single-tap")) {
                _dispatchTapEvent(e, releasePoint);
                return;
              }
              _equalizePoints(tapReleasePoint, p0);
              tapTimer = setTimeout(function() {
                _dispatchTapEvent(e, releasePoint);
                tapTimer = null;
              }, 300);
            }
          }
        }
      });
      var _wheelDelta;
      _registerModule("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function() {
            if (_oldIE) {
              return;
            }
            if (_likelyTouchDevice) {
              _listen("mouseUsed", function() {
                self.setupDesktopZoom();
              });
            } else {
              self.setupDesktopZoom(true);
            }
          },
          setupDesktopZoom: function(onInit) {
            _wheelDelta = {};
            var events = "wheel mousewheel DOMMouseScroll";
            _listen("bindEvents", function() {
              framework.bind(template, events, self.handleMouseWheel);
            });
            _listen("unbindEvents", function() {
              if (_wheelDelta) {
                framework.unbind(template, events, self.handleMouseWheel);
              }
            });
            self.mouseZoomedIn = false;
            var hasDraggingClass, updateZoomable = function() {
              if (self.mouseZoomedIn) {
                framework.removeClass(template, "pswp--zoomed-in");
                self.mouseZoomedIn = false;
              }
              if (_currZoomLevel < 1) {
                framework.addClass(template, "pswp--zoom-allowed");
              } else {
                framework.removeClass(template, "pswp--zoom-allowed");
              }
              removeDraggingClass();
            }, removeDraggingClass = function() {
              if (hasDraggingClass) {
                framework.removeClass(template, "pswp--dragging");
                hasDraggingClass = false;
              }
            };
            _listen("resize", updateZoomable);
            _listen("afterChange", updateZoomable);
            _listen("pointerDown", function() {
              if (self.mouseZoomedIn) {
                hasDraggingClass = true;
                framework.addClass(template, "pswp--dragging");
              }
            });
            _listen("pointerUp", removeDraggingClass);
            if (!onInit) {
              updateZoomable();
            }
          },
          handleMouseWheel: function(e) {
            if (_currZoomLevel <= self.currItem.fitRatio) {
              if (_options.modal) {
                if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                  e.preventDefault();
                } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                  _closedByScroll = true;
                  self.close();
                }
              }
              return true;
            }
            e.stopPropagation();
            _wheelDelta.x = 0;
            if ("deltaX" in e) {
              if (e.deltaMode === 1) {
                _wheelDelta.x = e.deltaX * 18;
                _wheelDelta.y = e.deltaY * 18;
              } else {
                _wheelDelta.x = e.deltaX;
                _wheelDelta.y = e.deltaY;
              }
            } else if ("wheelDelta" in e) {
              if (e.wheelDeltaX) {
                _wheelDelta.x = -0.16 * e.wheelDeltaX;
              }
              if (e.wheelDeltaY) {
                _wheelDelta.y = -0.16 * e.wheelDeltaY;
              } else {
                _wheelDelta.y = -0.16 * e.wheelDelta;
              }
            } else if ("detail" in e) {
              _wheelDelta.y = e.detail;
            } else {
              return;
            }
            _calculatePanBounds(_currZoomLevel, true);
            var newPanX = _panOffset.x - _wheelDelta.x, newPanY = _panOffset.y - _wheelDelta.y;
            if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
              e.preventDefault();
            }
            self.panTo(newPanX, newPanY);
          },
          toggleDesktopZoom: function(centerPoint) {
            centerPoint = centerPoint || { x: _viewportSize.x / 2 + _offset.x, y: _viewportSize.y / 2 + _offset.y };
            var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
            var zoomOut = _currZoomLevel === doubleTapZoomLevel;
            self.mouseZoomedIn = !zoomOut;
            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
            framework[(!zoomOut ? "add" : "remove") + "Class"](template, "pswp--zoomed-in");
          }
        }
      });
      var _historyDefaultOptions = {
        history: true,
        galleryUID: 1
      };
      var _historyUpdateTimeout, _hashChangeTimeout, _hashAnimCheckTimeout, _hashChangedByScript, _hashChangedByHistory, _hashReseted, _initialHash, _historyChanged, _closedFromURL, _urlChangedOnce, _windowLoc, _supportsPushState, _getHash = function() {
        return _windowLoc.hash.substring(1);
      }, _cleanHistoryTimeouts = function() {
        if (_historyUpdateTimeout) {
          clearTimeout(_historyUpdateTimeout);
        }
        if (_hashAnimCheckTimeout) {
          clearTimeout(_hashAnimCheckTimeout);
        }
      }, _parseItemIndexFromURL = function() {
        var hash = _getHash(), params = {};
        if (hash.length < 5) {
          return params;
        }
        var i, vars = hash.split("&");
        for (i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }
          var pair = vars[i].split("=");
          if (pair.length < 2) {
            continue;
          }
          params[pair[0]] = pair[1];
        }
        if (_options.galleryPIDs) {
          var searchfor = params.pid;
          params.pid = 0;
          for (i = 0; i < _items.length; i++) {
            if (_items[i].pid === searchfor) {
              params.pid = i;
              break;
            }
          }
        } else {
          params.pid = parseInt(params.pid, 10) - 1;
        }
        if (params.pid < 0) {
          params.pid = 0;
        }
        return params;
      }, _updateHash = function() {
        if (_hashAnimCheckTimeout) {
          clearTimeout(_hashAnimCheckTimeout);
        }
        if (_numAnimations || _isDragging) {
          _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
          return;
        }
        if (_hashChangedByScript) {
          clearTimeout(_hashChangeTimeout);
        } else {
          _hashChangedByScript = true;
        }
        var pid = _currentItemIndex + 1;
        var item = _getItemAt(_currentItemIndex);
        if (item.hasOwnProperty("pid")) {
          pid = item.pid;
        }
        var newHash = _initialHash + "&gid=" + _options.galleryUID + "&pid=" + pid;
        if (!_historyChanged) {
          if (_windowLoc.hash.indexOf(newHash) === -1) {
            _urlChangedOnce = true;
          }
        }
        var newURL = _windowLoc.href.split("#")[0] + "#" + newHash;
        if (_supportsPushState) {
          if ("#" + newHash !== window.location.hash) {
            history[_historyChanged ? "replaceState" : "pushState"]("", document.title, newURL);
          }
        } else {
          if (_historyChanged) {
            _windowLoc.replace(newURL);
          } else {
            _windowLoc.hash = newHash;
          }
        }
        _historyChanged = true;
        _hashChangeTimeout = setTimeout(function() {
          _hashChangedByScript = false;
        }, 60);
      };
      _registerModule("History", {
        publicMethods: {
          initHistory: function() {
            framework.extend(_options, _historyDefaultOptions, true);
            if (!_options.history) {
              return;
            }
            _windowLoc = window.location;
            _urlChangedOnce = false;
            _closedFromURL = false;
            _historyChanged = false;
            _initialHash = _getHash();
            _supportsPushState = "pushState" in history;
            if (_initialHash.indexOf("gid=") > -1) {
              _initialHash = _initialHash.split("&gid=")[0];
              _initialHash = _initialHash.split("?gid=")[0];
            }
            _listen("afterChange", self.updateURL);
            _listen("unbindEvents", function() {
              framework.unbind(window, "hashchange", self.onHashChange);
            });
            var returnToOriginal = function() {
              _hashReseted = true;
              if (!_closedFromURL) {
                if (_urlChangedOnce) {
                  history.back();
                } else {
                  if (_initialHash) {
                    _windowLoc.hash = _initialHash;
                  } else {
                    if (_supportsPushState) {
                      history.pushState("", document.title, _windowLoc.pathname + _windowLoc.search);
                    } else {
                      _windowLoc.hash = "";
                    }
                  }
                }
              }
              _cleanHistoryTimeouts();
            };
            _listen("unbindEvents", function() {
              if (_closedByScroll) {
                returnToOriginal();
              }
            });
            _listen("destroy", function() {
              if (!_hashReseted) {
                returnToOriginal();
              }
            });
            _listen("firstUpdate", function() {
              _currentItemIndex = _parseItemIndexFromURL().pid;
            });
            var index = _initialHash.indexOf("pid=");
            if (index > -1) {
              _initialHash = _initialHash.substring(0, index);
              if (_initialHash.slice(-1) === "&") {
                _initialHash = _initialHash.slice(0, -1);
              }
            }
            setTimeout(function() {
              if (_isOpen) {
                framework.bind(window, "hashchange", self.onHashChange);
              }
            }, 40);
          },
          onHashChange: function() {
            if (_getHash() === _initialHash) {
              _closedFromURL = true;
              self.close();
              return;
            }
            if (!_hashChangedByScript) {
              _hashChangedByHistory = true;
              self.goTo(_parseItemIndexFromURL().pid);
              _hashChangedByHistory = false;
            }
          },
          updateURL: function() {
            _cleanHistoryTimeouts();
            if (_hashChangedByHistory) {
              return;
            }
            if (!_historyChanged) {
              _updateHash();
            } else {
              _historyUpdateTimeout = setTimeout(_updateHash, 800);
            }
          }
        }
      });
      framework.extend(self, publicMethods);
    };
    return PhotoSwipe2;
  });
})(photoswipe$1);
var PhotoSwipe = photoswipe$1.exports;
var photoswipeUiDefault = { exports: {} };
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var PhotoSwipeUI_Default2 = function(pswp, framework) {
      var ui = this;
      var _overlayUIUpdated = false, _controlsVisible = true, _fullscrenAPI, _controls, _captionContainer, _fakeCaptionContainer, _indexIndicator, _shareButton, _shareModal, _shareModalHidden = true, _initalCloseOnScrollValue, _isIdle, _listen, _loadingIndicator, _loadingIndicatorHidden, _loadingIndicatorTimeout, _galleryHasOneSlide, _options, _defaultUIOptions = {
        barsSize: { top: 44, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function(item, captionEl) {
          if (!item.title) {
            captionEl.children[0].innerHTML = "";
            return false;
          }
          captionEl.children[0].innerHTML = item.title;
          return true;
        },
        closeEl: true,
        captionEl: true,
        fullscreenEl: true,
        zoomEl: true,
        shareEl: true,
        counterEl: true,
        arrowEl: true,
        preloaderEl: true,
        tapToClose: false,
        tapToToggleControls: true,
        clickToCloseNonZoomable: true,
        shareButtons: [
          { id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" },
          { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" },
          { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" },
          { id: "download", label: "Download image", url: "{{raw_image_url}}", download: true }
        ],
        getImageURLForShare: function() {
          return pswp.currItem.src || "";
        },
        getPageURLForShare: function() {
          return window.location.href;
        },
        getTextForShare: function() {
          return pswp.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200
      }, _blockControlsTap;
      var _onControlsTap = function(e) {
        if (_blockControlsTap) {
          return true;
        }
        e = e || window.event;
        if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
          _onIdleMouseMove();
        }
        var target = e.target || e.srcElement, uiElement, clickedClass = target.getAttribute("class") || "", found;
        for (var i = 0; i < _uiElements.length; i++) {
          uiElement = _uiElements[i];
          if (uiElement.onTap && clickedClass.indexOf("pswp__" + uiElement.name) > -1) {
            uiElement.onTap();
            found = true;
          }
        }
        if (found) {
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          _blockControlsTap = true;
          var tapDelay = framework.features.isOldAndroid ? 600 : 30;
          setTimeout(function() {
            _blockControlsTap = false;
          }, tapDelay);
        }
      }, _fitControlsInViewport = function() {
        return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
      }, _togglePswpClass = function(el, cName, add) {
        framework[(add ? "add" : "remove") + "Class"](el, "pswp__" + cName);
      }, _countNumItems = function() {
        var hasOneSlide = _options.getNumItemsFn() === 1;
        if (hasOneSlide !== _galleryHasOneSlide) {
          _togglePswpClass(_controls, "ui--one-slide", hasOneSlide);
          _galleryHasOneSlide = hasOneSlide;
        }
      }, _toggleShareModalClass = function() {
        _togglePswpClass(_shareModal, "share-modal--hidden", _shareModalHidden);
      }, _toggleShareModal = function() {
        _shareModalHidden = !_shareModalHidden;
        if (!_shareModalHidden) {
          _toggleShareModalClass();
          setTimeout(function() {
            if (!_shareModalHidden) {
              framework.addClass(_shareModal, "pswp__share-modal--fade-in");
            }
          }, 30);
        } else {
          framework.removeClass(_shareModal, "pswp__share-modal--fade-in");
          setTimeout(function() {
            if (_shareModalHidden) {
              _toggleShareModalClass();
            }
          }, 300);
        }
        if (!_shareModalHidden) {
          _updateShareURLs();
        }
        return false;
      }, _openWindowPopup = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        pswp.shout("shareLinkClick", e, target);
        if (!target.href) {
          return false;
        }
        if (target.hasAttribute("download")) {
          return true;
        }
        window.open(target.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
        if (!_shareModalHidden) {
          _toggleShareModal();
        }
        return false;
      }, _updateShareURLs = function() {
        var shareButtonOut = "", shareButtonData, shareURL, image_url, page_url, share_text;
        for (var i = 0; i < _options.shareButtons.length; i++) {
          shareButtonData = _options.shareButtons[i];
          image_url = _options.getImageURLForShare(shareButtonData);
          page_url = _options.getPageURLForShare(shareButtonData);
          share_text = _options.getTextForShare(shareButtonData);
          shareURL = shareButtonData.url.replace("{{url}}", encodeURIComponent(page_url)).replace("{{image_url}}", encodeURIComponent(image_url)).replace("{{raw_image_url}}", image_url).replace("{{text}}", encodeURIComponent(share_text));
          shareButtonOut += '<a href="' + shareURL + '" target="_blank" class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? "download" : "") + ">" + shareButtonData.label + "</a>";
          if (_options.parseShareButtonOut) {
            shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
          }
        }
        _shareModal.children[0].innerHTML = shareButtonOut;
        _shareModal.children[0].onclick = _openWindowPopup;
      }, _hasCloseClass = function(target) {
        for (var i = 0; i < _options.closeElClasses.length; i++) {
          if (framework.hasClass(target, "pswp__" + _options.closeElClasses[i])) {
            return true;
          }
        }
      }, _idleInterval, _idleTimer, _idleIncrement = 0, _onIdleMouseMove = function() {
        clearTimeout(_idleTimer);
        _idleIncrement = 0;
        if (_isIdle) {
          ui.setIdle(false);
        }
      }, _onMouseLeaveWindow = function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName === "HTML") {
          clearTimeout(_idleTimer);
          _idleTimer = setTimeout(function() {
            ui.setIdle(true);
          }, _options.timeToIdleOutside);
        }
      }, _setupFullscreenAPI = function() {
        if (_options.fullscreenEl && !framework.features.isOldAndroid) {
          if (!_fullscrenAPI) {
            _fullscrenAPI = ui.getFullscreenAPI();
          }
          if (_fullscrenAPI) {
            framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
            ui.updateFullscreen();
            framework.addClass(pswp.template, "pswp--supports-fs");
          } else {
            framework.removeClass(pswp.template, "pswp--supports-fs");
          }
        }
      }, _setupLoadingIndicator = function() {
        if (_options.preloaderEl) {
          _toggleLoadingIndicator(true);
          _listen("beforeChange", function() {
            clearTimeout(_loadingIndicatorTimeout);
            _loadingIndicatorTimeout = setTimeout(function() {
              if (pswp.currItem && pswp.currItem.loading) {
                if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                  _toggleLoadingIndicator(false);
                }
              } else {
                _toggleLoadingIndicator(true);
              }
            }, _options.loadingIndicatorDelay);
          });
          _listen("imageLoadComplete", function(index, item) {
            if (pswp.currItem === item) {
              _toggleLoadingIndicator(true);
            }
          });
        }
      }, _toggleLoadingIndicator = function(hide) {
        if (_loadingIndicatorHidden !== hide) {
          _togglePswpClass(_loadingIndicator, "preloader--active", !hide);
          _loadingIndicatorHidden = hide;
        }
      }, _applyNavBarGaps = function(item) {
        var gap = item.vGap;
        if (_fitControlsInViewport()) {
          var bars = _options.barsSize;
          if (_options.captionEl && bars.bottom === "auto") {
            if (!_fakeCaptionContainer) {
              _fakeCaptionContainer = framework.createEl("pswp__caption pswp__caption--fake");
              _fakeCaptionContainer.appendChild(framework.createEl("pswp__caption__center"));
              _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
              framework.addClass(_controls, "pswp__ui--fit");
            }
            if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
              var captionSize = _fakeCaptionContainer.clientHeight;
              gap.bottom = parseInt(captionSize, 10) || 44;
            } else {
              gap.bottom = bars.top;
            }
          } else {
            gap.bottom = bars.bottom === "auto" ? 0 : bars.bottom;
          }
          gap.top = bars.top;
        } else {
          gap.top = gap.bottom = 0;
        }
      }, _setupIdle = function() {
        if (_options.timeToIdle) {
          _listen("mouseUsed", function() {
            framework.bind(document, "mousemove", _onIdleMouseMove);
            framework.bind(document, "mouseout", _onMouseLeaveWindow);
            _idleInterval = setInterval(function() {
              _idleIncrement++;
              if (_idleIncrement === 2) {
                ui.setIdle(true);
              }
            }, _options.timeToIdle / 2);
          });
        }
      }, _setupHidingControlsDuringGestures = function() {
        _listen("onVerticalDrag", function(now) {
          if (_controlsVisible && now < 0.95) {
            ui.hideControls();
          } else if (!_controlsVisible && now >= 0.95) {
            ui.showControls();
          }
        });
        var pinchControlsHidden;
        _listen("onPinchClose", function(now) {
          if (_controlsVisible && now < 0.9) {
            ui.hideControls();
            pinchControlsHidden = true;
          } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
            ui.showControls();
          }
        });
        _listen("zoomGestureEnded", function() {
          pinchControlsHidden = false;
          if (pinchControlsHidden && !_controlsVisible) {
            ui.showControls();
          }
        });
      };
      var _uiElements = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function(el) {
            _captionContainer = el;
          }
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function(el) {
            _shareModal = el;
          },
          onTap: function() {
            _toggleShareModal();
          }
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function(el) {
            _shareButton = el;
          },
          onTap: function() {
            _toggleShareModal();
          }
        },
        {
          name: "button--zoom",
          option: "zoomEl",
          onTap: pswp.toggleDesktopZoom
        },
        {
          name: "counter",
          option: "counterEl",
          onInit: function(el) {
            _indexIndicator = el;
          }
        },
        {
          name: "button--close",
          option: "closeEl",
          onTap: pswp.close
        },
        {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: pswp.prev
        },
        {
          name: "button--arrow--right",
          option: "arrowEl",
          onTap: pswp.next
        },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function() {
            if (_fullscrenAPI.isFullscreen()) {
              _fullscrenAPI.exit();
            } else {
              _fullscrenAPI.enter();
            }
          }
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function(el) {
            _loadingIndicator = el;
          }
        }
      ];
      var _setupUIElements = function() {
        var item, classAttr, uiElement;
        var loopThroughChildElements = function(sChildren) {
          if (!sChildren) {
            return;
          }
          var l = sChildren.length;
          for (var i = 0; i < l; i++) {
            item = sChildren[i];
            classAttr = item.className;
            for (var a = 0; a < _uiElements.length; a++) {
              uiElement = _uiElements[a];
              if (classAttr.indexOf("pswp__" + uiElement.name) > -1) {
                if (_options[uiElement.option]) {
                  framework.removeClass(item, "pswp__element--disabled");
                  if (uiElement.onInit) {
                    uiElement.onInit(item);
                  }
                } else {
                  framework.addClass(item, "pswp__element--disabled");
                }
              }
            }
          }
        };
        loopThroughChildElements(_controls.children);
        var topBar = framework.getChildByClass(_controls, "pswp__top-bar");
        if (topBar) {
          loopThroughChildElements(topBar.children);
        }
      };
      ui.init = function() {
        framework.extend(pswp.options, _defaultUIOptions, true);
        _options = pswp.options;
        _controls = framework.getChildByClass(pswp.scrollWrap, "pswp__ui");
        _listen = pswp.listen;
        _setupHidingControlsDuringGestures();
        _listen("beforeChange", ui.update);
        _listen("doubleTap", function(point) {
          var initialZoomLevel = pswp.currItem.initialZoomLevel;
          if (pswp.getZoomLevel() !== initialZoomLevel) {
            pswp.zoomTo(initialZoomLevel, point, 333);
          } else {
            pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
          }
        });
        _listen("preventDragEvent", function(e, isDown, preventObj) {
          var t = e.target || e.srcElement;
          if (t && t.getAttribute("class") && e.type.indexOf("mouse") > -1 && (t.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
            preventObj.prevent = false;
          }
        });
        _listen("bindEvents", function() {
          framework.bind(_controls, "pswpTap click", _onControlsTap);
          framework.bind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
          if (!pswp.likelyTouchDevice) {
            framework.bind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
          }
        });
        _listen("unbindEvents", function() {
          if (!_shareModalHidden) {
            _toggleShareModal();
          }
          if (_idleInterval) {
            clearInterval(_idleInterval);
          }
          framework.unbind(document, "mouseout", _onMouseLeaveWindow);
          framework.unbind(document, "mousemove", _onIdleMouseMove);
          framework.unbind(_controls, "pswpTap click", _onControlsTap);
          framework.unbind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
          framework.unbind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
          if (_fullscrenAPI) {
            framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
            if (_fullscrenAPI.isFullscreen()) {
              _options.hideAnimationDuration = 0;
              _fullscrenAPI.exit();
            }
            _fullscrenAPI = null;
          }
        });
        _listen("destroy", function() {
          if (_options.captionEl) {
            if (_fakeCaptionContainer) {
              _controls.removeChild(_fakeCaptionContainer);
            }
            framework.removeClass(_captionContainer, "pswp__caption--empty");
          }
          if (_shareModal) {
            _shareModal.children[0].onclick = null;
          }
          framework.removeClass(_controls, "pswp__ui--over-close");
          framework.addClass(_controls, "pswp__ui--hidden");
          ui.setIdle(false);
        });
        if (!_options.showAnimationDuration) {
          framework.removeClass(_controls, "pswp__ui--hidden");
        }
        _listen("initialZoomIn", function() {
          if (_options.showAnimationDuration) {
            framework.removeClass(_controls, "pswp__ui--hidden");
          }
        });
        _listen("initialZoomOut", function() {
          framework.addClass(_controls, "pswp__ui--hidden");
        });
        _listen("parseVerticalMargin", _applyNavBarGaps);
        _setupUIElements();
        if (_options.shareEl && _shareButton && _shareModal) {
          _shareModalHidden = true;
        }
        _countNumItems();
        _setupIdle();
        _setupFullscreenAPI();
        _setupLoadingIndicator();
      };
      ui.setIdle = function(isIdle) {
        _isIdle = isIdle;
        _togglePswpClass(_controls, "ui--idle", isIdle);
      };
      ui.update = function() {
        if (_controlsVisible && pswp.currItem) {
          ui.updateIndexIndicator();
          if (_options.captionEl) {
            _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);
            _togglePswpClass(_captionContainer, "caption--empty", !pswp.currItem.title);
          }
          _overlayUIUpdated = true;
        } else {
          _overlayUIUpdated = false;
        }
        if (!_shareModalHidden) {
          _toggleShareModal();
        }
        _countNumItems();
      };
      ui.updateFullscreen = function(e) {
        if (e) {
          setTimeout(function() {
            pswp.setScrollOffset(0, framework.getScrollY());
          }, 50);
        }
        framework[(_fullscrenAPI.isFullscreen() ? "add" : "remove") + "Class"](pswp.template, "pswp--fs");
      };
      ui.updateIndexIndicator = function() {
        if (_options.counterEl) {
          _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
        }
      };
      ui.onGlobalTap = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (_blockControlsTap) {
          return;
        }
        if (e.detail && e.detail.pointerType === "mouse") {
          if (_hasCloseClass(target)) {
            pswp.close();
            return;
          }
          if (framework.hasClass(target, "pswp__img")) {
            if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
              if (_options.clickToCloseNonZoomable) {
                pswp.close();
              }
            } else {
              pswp.toggleDesktopZoom(e.detail.releasePoint);
            }
          }
        } else {
          if (_options.tapToToggleControls) {
            if (_controlsVisible) {
              ui.hideControls();
            } else {
              ui.showControls();
            }
          }
          if (_options.tapToClose && (framework.hasClass(target, "pswp__img") || _hasCloseClass(target))) {
            pswp.close();
            return;
          }
        }
      };
      ui.onMouseOver = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        _togglePswpClass(_controls, "ui--over-close", _hasCloseClass(target));
      };
      ui.hideControls = function() {
        framework.addClass(_controls, "pswp__ui--hidden");
        _controlsVisible = false;
      };
      ui.showControls = function() {
        _controlsVisible = true;
        if (!_overlayUIUpdated) {
          ui.update();
        }
        framework.removeClass(_controls, "pswp__ui--hidden");
      };
      ui.supportsFullscreen = function() {
        var d = document;
        return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
      };
      ui.getFullscreenAPI = function() {
        var dE = document.documentElement, api, tF = "fullscreenchange";
        if (dE.requestFullscreen) {
          api = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: tF
          };
        } else if (dE.mozRequestFullScreen) {
          api = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + tF
          };
        } else if (dE.webkitRequestFullscreen) {
          api = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + tF
          };
        } else if (dE.msRequestFullscreen) {
          api = {
            enterK: "msRequestFullscreen",
            exitK: "msExitFullscreen",
            elementK: "msFullscreenElement",
            eventK: "MSFullscreenChange"
          };
        }
        if (api) {
          api.enter = function() {
            _initalCloseOnScrollValue = _options.closeOnScroll;
            _options.closeOnScroll = false;
            if (this.enterK === "webkitRequestFullscreen") {
              pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
            } else {
              return pswp.template[this.enterK]();
            }
          };
          api.exit = function() {
            _options.closeOnScroll = _initalCloseOnScrollValue;
            return document[this.exitK]();
          };
          api.isFullscreen = function() {
            return document[this.elementK];
          };
        }
        return api;
      };
    };
    return PhotoSwipeUI_Default2;
  });
})(photoswipeUiDefault);
var PhotoSwipeUI_Default = photoswipeUiDefault.exports;
var photoswipe = "";
var defaultSkin = "";
var VPhotosSwipe_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3f6b89c4"), n = n(), popScopeId(), n);
const _hoisted_1$5 = ["src"];
const _hoisted_2$5 = ["href", "data-size", "title", "onClick"];
const _hoisted_3$5 = ["src", "alt", "onErrorOnce"];
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "pswp__bg" }, null, -1));
const _hoisted_5$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "pswp__container" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pswp__item" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "pswp__item" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "pswp__item" })
], -1));
const _hoisted_6$5 = /* @__PURE__ */ createStaticVNode('<div class="pswp__top-bar" data-v-3f6b89c4><div class="pswp__counter" data-v-3f6b89c4></div><button class="pswp__button pswp__button--close" title="Close (Esc)" data-v-3f6b89c4></button><button class="pswp__button pswp__button--share" title="Share" data-v-3f6b89c4></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen" data-v-3f6b89c4></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out" data-v-3f6b89c4></button><div class="pswp__preloader" data-v-3f6b89c4><div class="pswp__preloader__icn" data-v-3f6b89c4><div class="pswp__preloader__cut" data-v-3f6b89c4><div class="pswp__preloader__donut" data-v-3f6b89c4></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap" data-v-3f6b89c4><div class="pswp__share-tooltip" data-v-3f6b89c4></div></div>', 2);
const _hoisted_8$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "pswp__caption" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pswp__caption__center" })
], -1));
let instances = 0;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    items: { default: () => [] },
    options: { default: () => ({}) },
    singleThumbnail: { type: Boolean },
    thumbnailRadius: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const galleryUID = ++instances;
    const angle = ref(0);
    const pswpElement = ref();
    const galleryElement = ref();
    const resolveImageSrc = async function(item) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onerror = function() {
          img.onerror = null;
          resolve(item.msrc);
        };
        img.onload = function() {
          img.onload = null;
          resolve(item.src);
        };
        img.style.display = "none";
        img.src = item.src;
      });
    };
    const parseThumbnailElements = async function(el) {
      var _a;
      let thumbElements = el.childNodes, numNodes = thumbElements.length, items = [], figureEl, linkEl, size, item;
      for (let i = 0; i < numNodes; i++) {
        figureEl = thumbElements[i];
        if (figureEl.nodeType !== 1) {
          continue;
        }
        linkEl = figureEl.children[0];
        if (!linkEl) {
          continue;
        }
        size = (_a = linkEl.getAttribute("data-size")) == null ? void 0 : _a.split("x");
        if (!size) {
          continue;
        }
        item = {
          src: linkEl.getAttribute("href"),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
          title: linkEl.getAttribute("title")
        };
        if (figureEl.children.length > 1) {
          item.title = figureEl.children[1].innerHTML;
        }
        if (linkEl.children.length > 0) {
          item.msrc = linkEl.children[0].getAttribute("src");
        }
        item.src = await resolveImageSrc(item);
        item.el = figureEl;
        items.push(item);
      }
      return items;
    };
    const closest = function closest2(el, fn) {
      return el && (fn(el) ? el : closest2(el.parentNode, fn));
    };
    const onThumbnailsClick = async function(e) {
      let eTarget = e.target;
      let clickedListItem = closest(eTarget, function(el) {
        return el.tagName && el.tagName.toUpperCase() === "FIGURE";
      });
      if (!clickedListItem) {
        return;
      }
      let childNodes = clickedListItem.parentNode.childNodes, numChildNodes = childNodes.length, nodeIndex = 0, index;
      for (let i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }
        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }
      if (galleryElement.value && index !== void 0 && index >= 0) {
        await openPhotoSwipe(index.toString(), galleryElement.value);
      }
      return false;
    };
    const photoswipeParseHash = function() {
      let hash = window.location.hash.substring(1), params = {};
      if (typeof hash !== "string" || hash.length < 5) {
        return params;
      }
      let vars = hash.split("&");
      for (let i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        let pair = vars[i].split("=");
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }
      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }
      return params;
    };
    const openPhotoSwipe = async function(index, galleryElement2, disableAnimation = false, fromURL = false) {
      if (!galleryElement2) {
        return;
      }
      if (!pswpElement.value) {
        return;
      }
      let gallery, options, items;
      items = await parseThumbnailElements(galleryElement2);
      options = {
        galleryUID,
        getThumbBoundsFn: function(index2) {
          let thumbnail = items[index2].el.getElementsByTagName("img")[0], pageYScroll = window.pageYOffset || document.documentElement.scrollTop, rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      };
      if (fromURL) {
        if (props.options.galleryPIDs) {
          for (let j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      }
      if (isNaN(options.index)) {
        return;
      }
      if (disableAnimation) {
        options.showAnimationDuration = 0;
      }
      gallery = new PhotoSwipe(pswpElement.value, PhotoSwipeUI_Default, items, Object.assign(options, props.options));
      gallery.listen("gettingData", function(index2, item) {
        if (item.w < 1 || item.h < 1) {
          let img = new Image();
          img.onload = function() {
            item.w = img.width;
            item.h = img.height;
            gallery.invalidateCurrItems();
            gallery.updateSize(true);
          };
          img.style.display = "none";
          img.src = item.src;
        }
      });
      gallery.init();
    };
    onMounted(() => {
      if (galleryElement.value) {
        let hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid === galleryUID) {
          openPhotoSwipe(hashData.pid.toString(), galleryElement.value, true, true);
        }
      }
    });
    const resetAngle = () => {
      if (pswpElement.value) {
        angle.value = 0;
        pswpElement.value.querySelectorAll(".pswp__img").forEach((i) => i.style.transform = `rotate(${angle.value}deg)`);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          ref_key: "galleryElement",
          ref: galleryElement,
          class: "my-gallery",
          itemscope: "",
          itemtype: "http://schema.org/ImageGallery"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
            return withDirectives((openBlock(), createElementBlock("figure", {
              key: index,
              class: "gallery-thumbnail",
              itemprop: "associatedMedia",
              itemscope: "",
              itemtype: "http://schema.org/ImageObject",
              src: item.src
            }, [
              createBaseVNode("a", {
                href: item.src,
                itemprop: "contentUrl",
                "data-size": "" + item.w + "x" + item.h,
                title: item.title,
                onClick: withModifiers(onThumbnailsClick, ["prevent"])
              }, [
                createBaseVNode("img", {
                  class: normalizeClass([__props.thumbnailRadius && `radius-${__props.thumbnailRadius}`]),
                  src: item.thumbnail,
                  alt: item.alt,
                  itemprop: "thumbnail",
                  onErrorOnce: (event) => unref(onceImageErrored)(event, `${item.w || "100"}x${item.h || "100"}`)
                }, null, 42, _hoisted_3$5)
              ], 8, _hoisted_2$5)
            ], 8, _hoisted_1$5)), [
              [vShow, index === 0 || !__props.singleThumbnail]
            ]);
          }), 128))
        ], 512),
        createBaseVNode("div", {
          ref_key: "pswpElement",
          ref: pswpElement,
          class: "pswp",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, [
          _hoisted_4$5,
          createBaseVNode("div", { class: "pswp__scroll-wrap" }, [
            _hoisted_5$5,
            createBaseVNode("div", { class: "pswp__ui pswp__ui--hidden" }, [
              _hoisted_6$5,
              createBaseVNode("button", {
                class: "pswp__button pswp__button--arrow--left",
                title: "Previous (arrow left)",
                onClick: resetAngle
              }),
              createBaseVNode("button", {
                class: "pswp__button pswp__button--arrow--right",
                title: "Next (arrow right)",
                onClick: resetAngle
              }),
              _hoisted_8$5
            ])
          ])
        ], 512)
      ], 64);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3f6b89c4"]]);
var ChatMsg_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = {
  key: 0,
  class: "divider-container"
};
const _hoisted_2$4 = { class: "divider" };
const _hoisted_3$4 = { class: "avatar" };
const _hoisted_4$4 = ["src"];
const _hoisted_5$4 = { class: "msg" };
const _hoisted_6$4 = { class: "msg-inner" };
const _hoisted_7$4 = { class: "avatar is-online" };
const _hoisted_8$4 = ["src"];
const _hoisted_9$4 = { class: "msg is-image" };
const _hoisted_10$3 = { class: "image-container" };
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "image-overlay" }, null, -1);
const _hoisted_12$3 = { class: "image-actions" };
const _hoisted_13$2 = { class: "actions-inner" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "action download" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "iconify",
    "data-icon": "feather:download"
  })
], -1);
const _hoisted_15$2 = ["href"];
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("span", {
  class: "iconify",
  "data-icon": "feather:maximize"
}, null, -1);
const _hoisted_17$2 = [
  _hoisted_16$2
];
const _hoisted_18 = { class: "avatar" };
const _hoisted_19 = ["src"];
const _hoisted_20 = { class: "msg is-link-image" };
const _hoisted_21 = { class: "image" };
const _hoisted_22 = ["src"];
const _hoisted_23 = { class: "link-badge" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "link-body" };
const _hoisted_26 = { class: "link-title" };
const _hoisted_27 = { class: "avatar is-online" };
const _hoisted_28 = ["src"];
const _hoisted_29 = { class: "msg is-link" };
const _hoisted_30 = { class: "link-meta" };
const _hoisted_31 = { href: "#" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    message: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VPhotosSwipe = __unplugin_components_0;
      const _component_VIconWrap = _sfc_main$o;
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([
          props.message.type === "system" && "divider-container",
          props.message.type !== "system" && props.message.sender
        ])
      }, [
        props.message.type === "system" ? (openBlock(), createElementBlock("li", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$4, [
            createBaseVNode("span", null, toDisplayString(props.message.content.text), 1)
          ])
        ])) : props.message.type === "msg" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3$4, [
            props.message.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: props.message.avatar,
              draggable: "false",
              alt: ""
            }, null, 8, _hoisted_4$4)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5$4, [
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("p", null, toDisplayString(props.message.content.text), 1)
            ]),
            createBaseVNode("time", null, toDisplayString(props.message.content.time), 1)
          ])
        ], 64)) : props.message.type === "image" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createBaseVNode("div", _hoisted_7$4, [
            props.message.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: props.message.avatar,
              draggable: "false",
              alt: ""
            }, null, 8, _hoisted_8$4)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9$4, [
            createBaseVNode("div", _hoisted_10$3, [
              props.message.content.image_url ? (openBlock(), createBlock(_component_VPhotosSwipe, {
                key: 0,
                items: [
                  {
                    src: props.message.content.image_url,
                    thumbnail: props.message.content.image_url,
                    w: 600,
                    h: 400,
                    alt: "optional alt attribute for thumbnail image"
                  }
                ],
                "thumbnail-radius": "full"
              }, null, 8, ["items"])) : createCommentVNode("", true),
              _hoisted_11$3,
              createBaseVNode("div", _hoisted_12$3, [
                createBaseVNode("div", _hoisted_13$2, [
                  _hoisted_14$2,
                  createBaseVNode("a", {
                    href: props.message.content.image_url,
                    class: "action messaging-popup",
                    "aria-label": "Maximize"
                  }, _hoisted_17$2, 8, _hoisted_15$2)
                ])
              ])
            ])
          ])
        ], 64)) : props.message.type === "imagelink" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createBaseVNode("div", _hoisted_18, [
            props.message.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: props.message.avatar,
              draggable: "false",
              alt: ""
            }, null, 8, _hoisted_19)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("figure", _hoisted_21, [
              createBaseVNode("img", {
                src: props.message.content.link_image,
                alt: ""
              }, null, 8, _hoisted_22),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("img", {
                  src: props.message.content.link_badge,
                  alt: ""
                }, null, 8, _hoisted_24)
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("span", _hoisted_26, toDisplayString(props.message.content.text), 1),
              createBaseVNode("small", null, toDisplayString(props.message.content.subtext), 1)
            ])
          ])
        ], 64)) : props.message.type === "link" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
          createBaseVNode("div", _hoisted_27, [
            props.message.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: props.message.avatar,
              draggable: "false",
              alt: ""
            }, null, 8, _hoisted_28)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_29, [
            createVNode(_component_VIconWrap, { icon: "feather:link" }),
            createBaseVNode("p", _hoisted_30, [
              createBaseVNode("span", null, toDisplayString(props.message.content.text), 1),
              createBaseVNode("a", _hoisted_31, toDisplayString(props.message.content.subtext), 1)
            ])
          ])
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var CollapsedMessaging_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "inner" };
const _hoisted_2$3 = { class: "collapsed-menu" };
const _hoisted_3$3 = { class: "menu-toggle has-chevron" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = { class: "collapsed-add" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$3 = { class: "collapsed-conversations" };
const _hoisted_10$2 = ["onKeydown", "onClick"];
const _hoisted_11$2 = { class: "user-container" };
const _hoisted_12$2 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { default: () => [] },
    selectedConversationId: { default: 0 }
  },
  emits: ["addConversation", "selectConversation"],
  setup(__props, { emit }) {
    const props = __props;
    const sidebar = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(sidebar).active !== "messages" && "is-active"], "collapsed-messaging"])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", {
              class: "vuero-hamburger nav-trigger push-resize messages-push",
              tabindex: "0",
              onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(sidebar).toggle("messages"), ["prevent"]), ["space"])),
              onClick: _cache[1] || (_cache[1] = ($event) => unref(sidebar).toggle("messages"))
            }, [
              createBaseVNode("span", _hoisted_3$3, [
                createBaseVNode("span", {
                  class: normalizeClass([[unref(sidebar).active !== "none" && "active"], "icon-box-toggle"])
                }, _hoisted_5$3, 2)
              ])
            ], 32)
          ]),
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("a", {
              class: "button collapse-add-button is-primary",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("addConversation"), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = () => emit("addConversation"))
            }, _hoisted_8$3, 32)
          ]),
          createBaseVNode("ul", _hoisted_9$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([props.selectedConversationId === conversation.id && "is-active"]),
                tabindex: "0",
                onKeydown: withKeys(withModifiers(() => emit("selectConversation", conversation.id), ["prevent"]), ["space"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_11$2, [
                  createBaseVNode("img", {
                    class: "is-user",
                    src: conversation.avatar,
                    alt: "",
                    onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                  }, null, 40, _hoisted_12$2)
                ])
              ], 42, _hoisted_10$2);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "mobile-subsidebar is-messaging" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Messages")
], -1);
const _hoisted_4$2 = {
  id: "mobile-conversations-list",
  class: "animated preFadeInUp fadeInUp"
};
const _hoisted_5$2 = ["onKeydown", "onClick"];
const _hoisted_6$2 = { class: "recent-user" };
const _hoisted_7$2 = { class: "user-container" };
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = { class: "recipient-meta" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { default: () => [] },
    selectedConversationId: { default: 0 }
  },
  emits: ["selectConversation"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("ul", _hoisted_4$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([props.selectedConversationId === conversation.id && "is-active"]),
                tabindex: "0",
                onKeydown: withKeys(withModifiers(() => emit("selectConversation", conversation.id), ["prevent"]), ["space"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_6$2, [
                  createBaseVNode("div", _hoisted_7$2, [
                    createBaseVNode("img", {
                      class: "is-user",
                      src: conversation.avatar,
                      alt: "",
                      onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 40, _hoisted_8$2)
                  ]),
                  createBaseVNode("div", _hoisted_9$2, [
                    createBaseVNode("span", null, toDisplayString(conversation.name), 1),
                    createBaseVNode("span", null, toDisplayString(conversation.lastMessage), 1)
                  ])
                ])
              ], 42, _hoisted_5$2);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var MessagesSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-messages" };
const _hoisted_2$1 = { class: "messages-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Chat", -1);
const _hoisted_4$1 = { class: "menu-toggle has-chevron" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _hoisted_7$1 = { class: "inner" };
const _hoisted_8$1 = { class: "is-new-conversation" };
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "New Conversation", -1);
const _hoisted_11$1 = [
  _hoisted_9$1,
  _hoisted_10$1
];
const _hoisted_12$1 = {
  id: "conversations-list",
  class: "animated preFadeInUp fadeInUp"
};
const _hoisted_13$1 = ["onKeydown", "onClick"];
const _hoisted_14$1 = { class: "recent-user" };
const _hoisted_15$1 = { class: "user-container" };
const _hoisted_16$1 = ["src"];
const _hoisted_17$1 = { class: "recipient-meta" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { default: () => [] },
    selectedConversationId: { default: 0 }
  },
  emits: ["addConversation", "selectConversation"],
  setup(__props, { emit }) {
    const props = __props;
    const sidebar = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "vuero-hamburger nav-trigger push-resize messages-push",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(sidebar).toggle("messages"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => unref(sidebar).toggle("messages"))
          }, [
            createBaseVNode("span", _hoisted_4$1, [
              createBaseVNode("span", {
                class: normalizeClass([[unref(sidebar).active !== "none" && "active"], "icon-box-toggle"])
              }, _hoisted_6$1, 2)
            ])
          ], 32)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("button", {
              id: "start-conversation",
              class: "button v-button is-primary is-raised is-rounded is-fullwidth",
              onClick: _cache[2] || (_cache[2] = () => emit("addConversation"))
            }, _hoisted_11$1)
          ]),
          createBaseVNode("ul", _hoisted_12$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([props.selectedConversationId === conversation.id && "is-active"]),
                tabindex: "0",
                onKeydown: withKeys(withModifiers(() => emit("selectConversation", conversation.id), ["prevent"]), ["space"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_14$1, [
                  createBaseVNode("div", _hoisted_15$1, [
                    createBaseVNode("img", {
                      class: "is-user",
                      src: conversation.avatar,
                      alt: "",
                      onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 40, _hoisted_16$1)
                  ]),
                  createBaseVNode("div", _hoisted_17$1, [
                    createBaseVNode("span", null, toDisplayString(conversation.name), 1),
                    createBaseVNode("span", null, toDisplayString(conversation.lastMessage), 1)
                  ])
                ])
              ], 42, _hoisted_13$1);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var messagingV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-title has-text-centered is-hidden" };
const _hoisted_2 = { class: "menu-toggle has-chevron" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5" }, "Messages", -1);
const _hoisted_6 = { class: "control" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "easy-autocomplete" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "users-autocpl",
    type: "text",
    class: "input",
    "aria-label": "To",
    placeholder: "Start typing a name"
  })
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "To:")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = {
  key: 0,
  class: "no-messages"
};
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
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "No messages yet"),
  /* @__PURE__ */ createBaseVNode("p", null, "Start the conversation by typing a message")
], -1);
const _hoisted_15 = [
  _hoisted_12,
  _hoisted_13,
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "loader is-loading" }, null, -1);
const _hoisted_17 = [
  _hoisted_16
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const chat = useChat();
    const layoutSwitcher = useLayoutSwitcher();
    const viewWrapper = useViewWrapper();
    const sidebar = useSidebar();
    const notyf = useNotyf();
    onMounted(async () => {
      sidebar.setActive("messages");
      try {
        await chat.loadConversations();
        const lastReadConversation = chat.conversations.find((conversation) => !conversation.unreadMessages);
        if (lastReadConversation) {
          chat.selectConversastion(lastReadConversation.id);
        } else {
          chat.selectConversastion(chat.conversations[0].id);
        }
      } catch (e) {
        notyf.error(e.message);
      }
    });
    function addConversation() {
      chat.unselectConversation();
      chat.setAddConversationOpen(!chat.addConversationOpen);
    }
    function selectConversation(id) {
      chat.setAddConversationOpen(false);
      chat.selectConversastion(id);
    }
    useHead({
      title: "Messaging chat - Sidebar - Vuero"
    });
    watchPostEffect(() => {
      viewWrapper.setPushed(sidebar.active === "messages");
    });
    return (_ctx, _cache) => {
      const _component_MessagesSubsidebar = _sfc_main$1;
      const _component_MessagesMobileSubsidebar = _sfc_main$2;
      const _component_CollapsedMessaging = _sfc_main$3;
      const _component_ChatMsg = _sfc_main$4;
      const _component_ChatSide = _sfc_main$6;
      const _component_ChatCard = __unplugin_components_5;
      const _component_ChatPlaceholder = _sfc_main$d;
      const _component_VPageContent = __unplugin_components_19;
      const _component_VPageContentWrapper = __unplugin_components_20;
      const _component_VViewWrapper = _sfc_main$p;
      const _component_ChatSideFab = __unplugin_components_10;
      const _component_MessagingLayout = _sfc_main$f;
      return openBlock(), createBlock(_component_MessagingLayout, {
        theme: unref(layoutSwitcher).sidebarLayoutTheme
      }, {
        default: withCtx(({ isMobileSidebarOpen }) => [
          createVNode(Transition, { name: "slide-x" }, {
            default: withCtx(() => [
              unref(sidebar).active === "messages" ? (openBlock(), createBlock(_component_MessagesSubsidebar, {
                key: 0,
                conversations: unref(chat).conversations,
                "selected-conversation-id": unref(chat).selectedConversationId,
                onAddConversation: addConversation,
                onSelectConversation: selectConversation
              }, null, 8, ["conversations", "selected-conversation-id"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, { name: "slide-x" }, {
            default: withCtx(() => [
              isMobileSidebarOpen ? (openBlock(), createBlock(_component_MessagesMobileSubsidebar, {
                key: 0,
                conversations: unref(chat).conversations,
                "selected-conversation-id": unref(chat).selectedConversationId,
                onSelectConversation: selectConversation
              }, null, 8, ["conversations", "selected-conversation-id"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1024),
          createVNode(_component_CollapsedMessaging, {
            conversations: unref(chat).conversations,
            "selected-conversation-id": unref(chat).selectedConversationId,
            onAddConversation: addConversation,
            onSelectConversation: _cache[0] || (_cache[0] = (id) => {
              unref(chat).setAddConversationOpen(false);
              unref(chat).selectConversastion(id);
            })
          }, null, 8, ["conversations", "selected-conversation-id"]),
          createVNode(_component_VViewWrapper, {
            id: "vuero-messaging",
            class: normalizeClass([unref(sidebar).active === "none" && "is-pushed-messages"])
          }, {
            default: withCtx(() => [
              createVNode(_component_VPageContentWrapper, null, {
                default: withCtx(() => [
                  createVNode(_component_VPageContent, { class: "chat-content" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        createBaseVNode("div", {
                          class: "vuero-hamburger nav-trigger push-resize",
                          tabindex: "0",
                          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(sidebar).toggle("messages"), ["prevent"]), ["space"])),
                          onClick: _cache[2] || (_cache[2] = ($event) => unref(sidebar).toggle("messages"))
                        }, [
                          createBaseVNode("span", _hoisted_2, [
                            createBaseVNode("span", {
                              class: normalizeClass([[unref(sidebar).active !== "none" && "active"], "icon-box-toggle"])
                            }, _hoisted_4, 2)
                          ])
                        ], 32),
                        _hoisted_5
                      ]),
                      createVNode(_component_ChatCard, null, {
                        header: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass([[!unref(chat).addConversationOpen && "is-hidden"], "is-autocomplete"])
                          }, [
                            createBaseVNode("div", _hoisted_6, [
                              _hoisted_7,
                              _hoisted_8,
                              createBaseVNode("div", {
                                class: "hide",
                                tabindex: "0",
                                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => unref(chat).setAddConversationOpen(false), ["prevent"]), ["space"])),
                                onClick: _cache[4] || (_cache[4] = ($event) => unref(chat).setAddConversationOpen(false))
                              }, _hoisted_10, 32)
                            ])
                          ], 2)
                        ]),
                        body: withCtx(() => [
                          unref(chat).messages.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_11, _hoisted_15)) : createCommentVNode("", true),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(chat).messages, (message) => {
                            return openBlock(), createBlock(_component_ChatMsg, {
                              key: message.id,
                              message
                            }, null, 8, ["message"]);
                          }), 128)),
                          createBaseVNode("li", {
                            class: normalizeClass(["chat-loader", [unref(chat).loading && "is-active"]])
                          }, _hoisted_17, 2)
                        ]),
                        side: withCtx(() => [
                          createVNode(_component_ChatSide)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ChatPlaceholder)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(_component_ChatSideFab)
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
