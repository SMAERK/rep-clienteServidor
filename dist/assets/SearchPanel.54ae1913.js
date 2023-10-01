import { _ as _sfc_main$5 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$4 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$3 } from "./VIconBox.298b3a59.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, s as createVNode, w as withCtx, F as Fragment, X as renderList, av as normalizeProps, aw as guardReactiveProps, t as toDisplayString, y as createCommentVNode, a3 as withDirectives, a4 as vModelText, g as normalizeClass } from "./vendor.6548d360.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
var SearchPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "right-panel" };
const _hoisted_2 = { class: "right-panel-head" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "right-panel-body has-slimscroll" };
const _hoisted_6 = {
  key: 0,
  class: "is-active search-results has-slimscroll"
};
const _hoisted_7 = { class: "meta" };
const _hoisted_8 = { class: "recent" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h4", null, "Recently viewed", -1);
const _hoisted_10 = { class: "recent-block" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chrome"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:tv"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:twitter"
}, null, -1);
const _hoisted_14 = { class: "recent" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h4", null, "Recent Members", -1);
const _hoisted_16 = { class: "recent-block" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    const filter = ref("");
    const filteredData = computed(() => {
      if (!filter.value) {
        return [];
      }
      return Object.values(popovers).filter((user) => {
        return user.fullName.match(new RegExp(filter.value, "i")) || user.position.match(new RegExp(filter.value, "i"));
      });
    });
    function getAvatarData(user) {
      return {
        picture: user.avatar,
        initials: user.initials,
        color: user.color
      };
    }
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_VAvatar = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      const _component_UserPopoverContent = _sfc_main$5;
      const _component_Tippy = resolveComponent("Tippy");
      return openBlock(), createElementBlock("div", {
        id: "search-panel",
        class: normalizeClass([[unref(panels).active === "search" && "is-active"], "right-panel-wrapper is-search is-left"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).close())
        }, null, 32),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_AnimatedLogo, {
              width: "38px",
              height: "38px"
            }),
            createBaseVNode("a", {
              class: "close-panel",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).close())
            }, _hoisted_4, 32)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  extra: withCtx(() => [
                    unref(filteredData).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (user) => {
                        return openBlock(), createElementBlock("div", {
                          key: user.id,
                          class: "search-result"
                        }, [
                          createVNode(_component_VAvatar, normalizeProps(guardReactiveProps(getAvatarData(user))), null, 16),
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("span", null, toDisplayString(user.username), 1),
                            createBaseVNode("span", null, toDisplayString(user.position), 1)
                          ])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filter.value = $event),
                      type: "text",
                      class: "input is-rounded search-input",
                      placeholder: "Search..."
                    }, null, 512), [
                      [vModelText, filter.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VBlock, {
                  title: "Browser Support",
                  subtitle: "Blog post",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "info",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Twitch API",
                  subtitle: "Blog post",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "orange",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_12
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Browser Support",
                  subtitle: "Blog post",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "green",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VBlock, {
                  title: "Alice C.",
                  subtitle: "Software Engineer",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user7
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/7.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Tara S.",
                  subtitle: "UI/UX Designer",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Jimmy H.",
                  subtitle: "Project Manager",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user22
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "https://vuero.cssninja.io/demo/avatars/22.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
