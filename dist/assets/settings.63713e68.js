import { _ as _sfc_main$4 } from "./VSwitchBlock.3a146329.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, aF as useWindowScroll, k as ref, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, g as normalizeClass, h as unref, y as createCommentVNode, x as createTextVNode, a1 as useHead, p as createBlock } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Settings"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edit your account prefs and settings")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Go Back ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Save Changes ");
const _hoisted_8 = ["onSubmit"];
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Change Password"),
  /* @__PURE__ */ createBaseVNode("p", null, "For an improved account security")
], -1);
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "Old Password",
  autocomplete: "current-password"
}, null, -1);
const _hoisted_14 = { class: "column is-12" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "New Password",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_16 = { class: "column is-12" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "Repeat New Password",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_18 = { class: "fieldset" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "2 Factor Auth"),
  /* @__PURE__ */ createBaseVNode("p", null, "Enable or disable 2 factor auth")
], -1);
const _hoisted_20 = { class: "columns is-multiline" };
const _hoisted_21 = { class: "column is-12" };
const _hoisted_22 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Phone Number",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_24 = { class: "fieldset" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Notifications"),
  /* @__PURE__ */ createBaseVNode("p", null, "Configure how you receive notifications")
], -1);
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = { class: "fieldset" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Marketing"),
  /* @__PURE__ */ createBaseVNode("p", null, "Configure how you receive promotions")
], -1);
const _hoisted_30 = { class: "columns is-multiline" };
const _hoisted_31 = { class: "column is-12" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isLoading = ref(false);
    const twoFactor = ref(true);
    const notifications = ref(false);
    const notificationsLow = ref(false);
    const marketing = ref(false);
    const partners = ref(false);
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VSwitchBlock = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "sidebar-layouts-profile-view" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                  onClick: onSave
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading", "onKeydown"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("form", {
          class: "form-body",
          onSubmit: withModifiers(onSave, ["prevent"])
        }, [
          createBaseVNode("div", _hoisted_9, [
            _hoisted_10,
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:unlock" }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:lock" }, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:lock" }, {
                      default: withCtx(() => [
                        _hoisted_17
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            _hoisted_19,
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: twoFactor.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => twoFactor.value = $event),
                          label: "Enable / disable 2 factor",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              twoFactor.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:smartphone" }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            _hoisted_25,
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: notifications.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => notifications.value = $event),
                          label: "Disable all notifications",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: notificationsLow.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => notificationsLow.value = $event),
                          label: "Disable low priority notifications",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            _hoisted_29,
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: marketing.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => marketing.value = $event),
                          label: "Enable marketing emails",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: partners.value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => partners.value = $event),
                          label: "Enable partners emails",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 40, _hoisted_8)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Profile Edit 4");
    useHead({
      title: "Profile Edit 4 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_EditProfileSettings = _sfc_main$1;
      return openBlock(), createBlock(_component_EditProfileSettings);
    };
  }
});
export { _sfc_main as default };
