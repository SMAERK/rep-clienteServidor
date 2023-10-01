import { _ as _export_sfc, u as useDarkmode, a as useUserSession, b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, k as ref, $ as useRouter, a0 as useRoute, m as useI18n, u as useStorage, a1 as useHead, Q as watch, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, a5 as pushScopeId, a6 as popScopeId } from "./vendor.6548d360.js";
import { l as login } from "./index.c13a9b10.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import "./useThemeColors.b71015d4.js";
var _imports_0 = "/assets/logoCreciendo.39e38fd9.svg";
var _imports_1 = "/assets/creciendoseguro.ec51b3fc.svg";
var login1_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2b1a2a76"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "modern-login" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "underlay h-hidden-mobile h-hidden-tablet-p" }, null, -1));
const _hoisted_3 = { class: "columns is-gapless is-vcentered is-relative" };
const _hoisted_4 = { style: { "position": "relative" } };
const _hoisted_5 = { class: "hero-heading" };
const _hoisted_6 = ["checked"];
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, null, -1));
const _hoisted_8 = { class: "auth-logo" };
const _hoisted_9 = { class: "column is-relative is-6" };
const _hoisted_10 = { class: "hero is-fullheight is-image" };
const _hoisted_11 = {
  class: "hero-body",
  style: { "background-color": "#0c7083", "justify-content": "center" }
};
const _hoisted_12 = { class: "container" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "columns h-hidden-desktop",
  style: { "justify-content": "center" }
}, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "hero-image",
    src: _imports_0,
    alt: ""
  })
], -1));
const _hoisted_14 = {
  class: "column is-7",
  style: { "margin-left": "15%" }
};
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "auth-content",
  style: { "text-align": "center" }
}, [
  /* @__PURE__ */ createBaseVNode("h2", { style: { "color": "#ffff", "font-size": "25px" } }, "Inicio de sesion"),
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "#ffff" } }, "Ingrese su usuario y contrase\xF1a")
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_19 = { class: "auth-form-wrapper" };
const _hoisted_20 = ["onSubmit"];
const _hoisted_21 = { class: "login-form" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "color": "#0c7083" } }, " Ingresar ", -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 is-relative h-hidden-mobile h-hidden-tablet-p" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "container" }, [
    /* @__PURE__ */ createBaseVNode("div", {
      class: "columns",
      style: { "justify-content": "center" }
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        class: "hero-image",
        src: _imports_1,
        alt: ""
      })
    ])
  ])
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    ref(false);
    ref("login");
    const isLoading = ref(false);
    const darkmode = useDarkmode();
    const router = useRouter();
    const route = useRoute();
    const notif = useNotyf();
    const userSession = useUserSession();
    route.query.redirect;
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    const form = ref({
      email: "",
      password: ""
    });
    const handleLogin = async () => {
      try {
        isLoading.value = true;
        const response = await login({
          email: form.value.email,
          password: form.value.password
        });
        const dataUser = response.data;
        const token = response.token;
        const resfreshToken = response.refreshToken;
        if (dataUser) {
          localStorage.setItem("user", JSON.stringify(dataUser));
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", resfreshToken);
          userSession.setUser(dataUser);
          if (route.query.redirect)
            router.replace(route.query.redirect);
          else
            router.replace("/sidebar/dashboards/banking-3");
        } else {
          notif.error("Credenciales incorrectas");
        }
        isLoading.value = false;
      } catch (e) {
        console.error(e);
        isLoading.value = false;
      }
    };
    useHead({
      title: "Creciendo Seguro"
    });
    watch(locale, () => {
      defaultLocale.value = locale.value;
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
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  _hoisted_13,
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    _hoisted_16,
                    _hoisted_17,
                    _hoisted_18,
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.email = $event),
                                    class: "input",
                                    type: "text",
                                    placeholder: "Usuario",
                                    autocomplete: "username"
                                  }, null, 512), [
                                    [vModelText, form.value.email]
                                  ])
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
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.password = $event),
                                    class: "input",
                                    type: "password",
                                    placeholder: "Contrase\xF1a",
                                    autocomplete: "current-password"
                                  }, null, 512), [
                                    [vModelText, form.value.password]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "login" }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                loading: isLoading.value,
                                color: "white",
                                type: "submit",
                                bold: "",
                                fullwidth: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_22
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, _hoisted_20)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _hoisted_23
        ])
      ]);
    };
  }
});
var login1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b1a2a76"]]);
export { login1 as default };
