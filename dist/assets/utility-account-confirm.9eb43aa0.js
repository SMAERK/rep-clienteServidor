import { _ as _sfc_main$3 } from "./VLoader.74e9a6e7.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, $ as useRouter, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./useThemeColors.b71015d4.js";
var _imports_0 = "/assets/launch.7b56da61.svg";
var _imports_1 = "/assets/launch-dark.2b59c41f.svg";
var ConfirmAccount_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "confirm-account-wrapper" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "action-box" };
const _hoisted_4 = { class: "box-content" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Please confirm your account", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, " Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ", -1);
const _hoisted_9 = { class: "buttons" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Confirm Account ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const router = useRouter();
    const isLoading = ref(false);
    const confirm = async () => {
      isLoading.value = true;
      notyf.success("Your account is confirmed Erik !");
      await sleep();
      router.push({
        name: "sidebar-dashboards"
      });
      await sleep();
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VLoader = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VLoader, { active: isLoading.value }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  _hoisted_5,
                  _hoisted_6,
                  _hoisted_7,
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(confirm, ["prevent"]), ["space"]),
                      onClick: confirm
                    }, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 1
                    }, 8, ["onKeydown"])
                  ])
                ])
              ]),
              _: 1
            }, 8, ["active"])
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
    viewWrapper.setPageTitle("Utility Account Confirm");
    useHead({
      title: "Utility Account Confirm - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ConfirmAccount = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ConfirmAccount)
      ]);
    };
  }
});
export { _sfc_main as default };
