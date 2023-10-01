import { _ as __unplugin_components_2 } from "./FileCardDropdown.ed362889.js";
import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, s as createVNode, g as normalizeClass, x as createTextVNode, ae as createStaticVNode } from "./vendor.6548d360.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
var TaskPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "right-panel" };
const _hoisted_2 = { class: "right-panel-head" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "Task Details", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  class: "right-panel-body has-slimscroll",
  "data-simplebar": ""
};
const _hoisted_7 = { class: "task-group task-overview" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", null, "Overview", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "task-description" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Build a desktop and mobile landing page wireframe"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmus igitur ut conquiescere ne infantes quidem possint. Duo Reges: constructio interrete... "),
    /* @__PURE__ */ createBaseVNode("a", null, "See More")
  ])
], -1);
const _hoisted_10 = { class: "task-participants" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h5", null, "Participants", -1);
const _hoisted_12 = { class: "participants-inner" };
const _hoisted_13 = { class: "avatar-stack" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("button", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<div class="task-group"><h3>Statistics</h3><div class="task-stats"><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:clock"></i><span>5 days</span></div><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:file"></i><span>3 files</span></div><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i><span>54</span></div><a><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i><span>Add Checklist</span></a></div></div>', 1);
const _hoisted_16 = { class: "task-group" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h3", null, "Files", -1);
const _hoisted_18 = { class: "task-files" };
const _hoisted_19 = { class: "file-box" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Preliminary Sketches"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("3MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 5 days ago")
  ])
], -1);
const _hoisted_21 = { class: "file-box" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Project Budget"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("0.6MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 8 days ago")
  ])
], -1);
const _hoisted_23 = { class: "file-box" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "POC Demo"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("8.75MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 8 days ago")
  ])
], -1);
const _hoisted_25 = { class: "task-group" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("h3", null, "Messages", -1);
const _hoisted_27 = { class: "field has-textarea-addon" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "3",
    placeholder: "Send a quick message..."
  })
], -1);
const _hoisted_29 = { class: "control is-textarea-addon" };
const _hoisted_30 = { class: "start" };
const _hoisted_31 = { class: "avatar-stack" };
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<div class="end"><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></a><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i></a><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i></a><a class="button v-button is-primary is-bold is-raised">Send</a></div>', 1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_FileCardDropdown = __unplugin_components_2;
      return openBlock(), createElementBlock("div", {
        id: "task-panel",
        class: normalizeClass([[unref(panels).active === "task" && "is-active"], "right-panel-wrapper is-task"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).close())
        }, null, 32),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("a", {
              class: "close-panel",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).close())
            }, _hoisted_5, 32)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _hoisted_8,
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/7.jpg" }),
                    createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" }),
                    createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/5.jpg" })
                  ]),
                  _hoisted_14
                ])
              ])
            ]),
            _hoisted_15,
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  _hoisted_20,
                  createVNode(_component_FileCardDropdown)
                ]),
                createBaseVNode("div", _hoisted_21, [
                  _hoisted_22,
                  createVNode(_component_FileCardDropdown)
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _hoisted_24,
                  createVNode(_component_FileCardDropdown)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              _hoisted_26,
              createBaseVNode("div", _hoisted_27, [
                _hoisted_28,
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "/images/avatars/svg/vuero-1.svg"
                      })
                    ])
                  ]),
                  _hoisted_32
                ])
              ])
            ])
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
