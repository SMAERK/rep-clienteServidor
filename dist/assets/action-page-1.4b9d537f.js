import { b as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$2 } from "./VAvatar.08652fea.js";
import { d as defineComponent, $ as useRouter, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, a2 as withKeys, W as withModifiers, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
import "./useThemeColors.b71015d4.js";
var ActionPageV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "action-page-wrapper action-page-v1" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "action-box" };
const _hoisted_4 = { class: "box-content" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, [
  /* @__PURE__ */ createTextVNode(" Jason G. has invited you to the "),
  /* @__PURE__ */ createBaseVNode("span", { class: "is-dark-primary" }, "Banking Solution Website"),
  /* @__PURE__ */ createTextVNode(" project. ")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "sender-message is-dark-card-bordered is-dark-bg-4" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Message from Jason"),
  /* @__PURE__ */ createBaseVNode("p", null, " Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ")
], -1);
const _hoisted_7 = { class: "people-wrap" };
const _hoisted_8 = { class: "people" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "people-text" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "And 5 others are already members of this project")
], -1);
const _hoisted_10 = { class: "buttons" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Decline ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Accept ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const router = useRouter();
    const isLoading = ref(false);
    const accept = async () => {
      isLoading.value = true;
      notyf.success("Invitation for Banking Solution Website accepted");
      await sleep();
      router.push({
        name: "sidebar-dashboards-banking-1"
      });
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _component_UserPopoverContent = _sfc_main$3;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VAvatar, {
                size: "big",
                picture: "https://vuero.cssninja.io/demo/avatars/16.jpg",
                badge: "https://vuero.cssninja.io/demo/photos/apps/9.png"
              }),
              _hoisted_5,
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_Tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user21
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "https://vuero.cssninja.io/demo/avatars/21.jpg"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user120
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        color: "h-purple",
                        initials: "SC"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user39
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "https://vuero.cssninja.io/demo/avatars/39.jpg"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_9
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VButton, { "dark-outlined": "" }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  loading: isLoading.value,
                  raised: "",
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(accept, ["prevent"]), ["space"]),
                  onClick: accept
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                }, 8, ["loading", "onKeydown"])
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
    viewWrapper.setPageTitle("Action Page");
    useHead({
      title: "Action Page - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ActionPageV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ActionPageV1)
      ]);
    };
  }
});
export { _sfc_main as default };
