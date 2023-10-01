import { u as useDarkmode, b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, $ as useRouter, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, h as unref, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "auth-wrapper-inner is-single" };
const _hoisted_2 = { class: "auth-nav" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, null, -1);
const _hoisted_4 = { class: "center" };
const _hoisted_5 = { class: "right" };
const _hoisted_6 = ["checked"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8 = { class: "single-form-wrap" };
const _hoisted_9 = { class: "inner-wrap" };
const _hoisted_10 = { class: "auth-head" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h2", null, "Join Us Now.", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "Start by creating your account", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" I already have an account ");
const _hoisted_14 = { class: "form-card" };
const _hoisted_15 = ["onSubmit"];
const _hoisted_16 = { class: "login-form" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "Name",
  autocomplete: "name"
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "Email Address",
  autocomplete: "email"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "password",
  placeholder: "Password",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "password",
  placeholder: "Repeat Password"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("label", {
  for: "send-promotional",
  class: "form-switch is-primary"
}, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "send-promotional",
    type: "checkbox",
    class: "is-switch"
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "setting-meta" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "send-promotional" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Receive promotional offers")
  ])
], -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Sign Up ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const router = useRouter();
    const notif = useNotyf();
    const isLoading = ref(false);
    const handleSignup = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        sleep(2e3);
        notif.dismissAll();
        notif.success("Welcome, Erik Kovalsky");
        router.push({ name: "sidebar-dashboards" });
        isLoading.value = false;
      }
    };
    useHead({
      title: "Auth Signup 3 - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "header-item"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("label", {
              class: "dark-mode ml-auto",
              tabindex: "0",
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"]))
            }, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(darkmode).isDark,
                onChange: _cache[0] || (_cache[0] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
              }, null, 40, _hoisted_6),
              _hoisted_7
            ], 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              _hoisted_12,
              createVNode(_component_RouterLink, { to: { name: "auth-login-3" } }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("form", {
                onSubmit: withModifiers(handleSignup, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          _hoisted_17
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:mail" }, {
                        default: withCtx(() => [
                          _hoisted_18
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:lock" }, {
                        default: withCtx(() => [
                          _hoisted_19
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:lock" }, {
                        default: withCtx(() => [
                          _hoisted_20
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { class: "setting-item" }, {
                        default: withCtx(() => [
                          _hoisted_21,
                          _hoisted_22
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { class: "login" }, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            color: "primary",
                            type: "submit",
                            bold: "",
                            fullwidth: "",
                            raised: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_23
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ], 40, _hoisted_15)
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
