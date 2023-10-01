import { u as useDarkmode, a as useUserSession, b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, k as ref, $ as useRouter, a0 as useRoute, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, s as createVNode, w as withCtx, ae as createStaticVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>', 1);
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "hero is-fullheight is-white" };
const _hoisted_5 = { class: "hero-heading" };
const _hoisted_6 = ["checked"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8 = { class: "auth-logo" };
const _hoisted_9 = { class: "hero-body" };
const _hoisted_10 = { class: "container" };
const _hoisted_11 = { class: "columns" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = { class: "auth-content" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", null, "Welcome Back.", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "Please sign in to your account", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" I do not have an account yet ");
const _hoisted_17 = { class: "auth-form-wrapper" };
const _hoisted_18 = ["onSubmit"];
const _hoisted_19 = { class: "login-form" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "Username",
  autocomplete: "username"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "password",
  placeholder: "Password",
  autocomplete: "current-password"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("label", {
  for: "remember-me",
  class: "form-switch is-primary"
}, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "remember-me",
    type: "checkbox",
    class: "is-switch"
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "setting-meta" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "remember-me" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Remember Me")
  ])
], -1);
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" Sign In ");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("a", null, "Forgot Password?")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const darkmode = useDarkmode();
    const router = useRouter();
    const route = useRoute();
    const notif = useNotyf();
    const userSession = useUserSession();
    const redirect = route.query.redirect;
    const handleLogin = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        await sleep(2e3);
        userSession.setToken("logged-in");
        notif.dismissAll();
        notif.success("Welcome back, Erik Kovalsky");
        if (redirect) {
          router.push(redirect);
        } else {
          router.push({
            name: "app"
          });
        }
        isLoading.value = false;
      }
    };
    useHead({
      title: "Auth Login 2 - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
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
              ], 32),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_RouterLink, { to: { name: "index" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, {
                      width: "36px",
                      height: "36px"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      _hoisted_14,
                      _hoisted_15,
                      createVNode(_component_RouterLink, { to: { name: "auth-signup-2" } }, {
                        default: withCtx(() => [
                          _hoisted_16
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_19, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
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
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  _hoisted_21
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "setting-item" }, {
                            default: withCtx(() => [
                              _hoisted_22,
                              _hoisted_23
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "login" }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                loading: isLoading.value,
                                color: "primary",
                                type: "submit",
                                bold: "",
                                fullwidth: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_24
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          _hoisted_25
                        ])
                      ], 40, _hoisted_18)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
