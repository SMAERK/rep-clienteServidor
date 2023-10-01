import { a as useUserSession, b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, $ as useRouter, a0 as useRoute, k as ref, m as useI18n, u as useStorage, Q as watch, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, h as unref, t as toDisplayString, x as createTextVNode, W as withModifiers } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { t as tryLogin } from "./index.c13a9b10.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "login-form" };
const _hoisted_3 = ["placeholder"];
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", {
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
const _hoisted_6 = { class: "setting-meta" };
const _hoisted_7 = { for: "remember-me" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const notif = useNotyf();
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(false);
    const redirect = route.query.redirect;
    const email = ref("");
    const password = ref("");
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    const handleLogin = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        const result = await tryLogin(email.value, password.value);
        isLoading.value = false;
        if (result.status && result.data.user.status == "active") {
          switch (result.data.user.country) {
            case 1:
              locale.value = "de";
              break;
            case 2:
              locale.value = "es-MX";
              break;
          }
          result.data.user.isVisibleSelectRegional = "true";
          userSession.setToken(result.data.token);
          userSession.setUser(result.data.user);
          localStorage.setItem("user", JSON.stringify(result.data.user));
          localStorage.setItem("token", JSON.stringify(result.data.token));
          notif.dismissAll();
          notif.success(t("dashboard.title", { add: "@" }));
          if (redirect) {
            router.push(redirect);
          } else {
            router.push({
              name: "app"
            });
          }
        } else if (result.status && result.data.user.status == "inactive") {
          notif.error({
            message: "Su usuario ha sido deshabilitado, comuniquese con un administrador!",
            duration: 7e3
          });
        } else {
          notif.error(t("auth.user.emails"));
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("form", {
        onSubmit: withModifiers(handleLogin, ["prevent"])
      }, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:user" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
                    class: "input is-primary-focus",
                    type: "text",
                    placeholder: unref(t)("login.login-email"),
                    autocomplete: "email"
                  }, null, 8, _hoisted_3), [
                    [vModelText, email.value]
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
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                    class: "input is-primary-focus",
                    type: "password",
                    placeholder: unref(t)("login.login-password"),
                    autocomplete: "current-password"
                  }, null, 8, _hoisted_4), [
                    [vModelText, password.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VControl, { class: "setting-item" }, {
            default: withCtx(() => [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("label", _hoisted_7, [
                  createBaseVNode("span", null, toDisplayString(unref(t)("login.login-remember")), 1)
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_VControl, { class: "login" }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                loading: isLoading.value,
                type: "submit",
                color: "primary",
                bold: "",
                fullwidth: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("login.login-go")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ])
      ], 40, _hoisted_1);
    };
  }
});
export { _sfc_main as default };
