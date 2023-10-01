import { b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { m as useI18n, k as ref, u as useStorage, a9 as reactive, e as computed, Q as watch, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, h as unref, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, x as createTextVNode, W as withModifiers } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { u as useVuelidate, r as required, e as email, m as minLength, s as sameAs } from "./index.esm.8b858c3a.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "login-form mt-5" };
const _hoisted_3 = ["placeholder"];
const _hoisted_4 = ["placeholder"];
const _sfc_main = {
  setup(__props) {
    const { locale, t } = useI18n();
    const notif = useNotyf();
    const isLoading = ref(false);
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    const form = reactive({
      email: "",
      password: "",
      confirmPassword: ""
    });
    const v$ = useVuelidate({
      email: { required, email },
      password: {
        required,
        minLength: minLength(8),
        containsUppercase: function(value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function(value) {
          return /[a-z]/.test(value);
        },
        containsNumber: function(value) {
          return /[0-9]/.test(value);
        },
        containsSpecial: function(value) {
          return /[#?!@$%^&*-]/.test(value);
        }
      },
      confirmPassword: { required, sameAs: sameAs(computed(() => form.password)) }
    }, form);
    async function handleReset() {
      if (!await v$.value.$validate()) {
        return;
      }
      isLoading.value = true;
      const body = {
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword
      };
      try {
        await tryResetPassword(body);
        notif.success("Contrase\xF1a cambiada exitosamente!");
      } catch (error) {
        notif.error("E-mail no encontrado o inv\xE1lido");
      } finally {
        isLoading.value = false;
        window.location.reload();
      }
    }
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("form", {
        onSubmit: withModifiers(handleReset, ["prevent"])
      }, [
        createBaseVNode("p", null, toDisplayString(unref(t)("config.text")), 1),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:mail" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(v$).email.$model = $event),
                    class: normalizeClass(["input", { "is-danger": unref(v$).email.$error }]),
                    type: "email",
                    placeholder: "E-mail",
                    autocomplete: "email"
                  }, null, 2), [
                    [vModelText, unref(v$).email.$model]
                  ]),
                  createBaseVNode("p", {
                    class: normalizeClass(["help is-danger", { "is-hidden": !unref(v$).email.$error }])
                  }, " This email is invalid ", 2)
                ]),
                _: 1
              }),
              createVNode(_component_VControl, {
                icon: "feather:lock",
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(v$).password.$model = $event),
                    class: normalizeClass([{ "is-danger": unref(v$).password.$error }, "input"]),
                    type: "password",
                    placeholder: unref(t)("config.newPassword")
                  }, null, 10, _hoisted_3), [
                    [vModelText, unref(v$).password.$model]
                  ]),
                  createBaseVNode("p", {
                    class: normalizeClass(["help is-danger", { "is-hidden": !unref(v$).password.$error }])
                  }, " This password is invalid ", 2)
                ]),
                _: 1
              }),
              createVNode(_component_VControl, {
                icon: "feather:lock",
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(v$).confirmPassword.$model = $event),
                    class: normalizeClass([{ "is-danger": unref(v$).confirmPassword.$error }, "input"]),
                    type: "password",
                    placeholder: unref(t)("config.confirmPassword")
                  }, null, 10, _hoisted_4), [
                    [vModelText, unref(v$).confirmPassword.$model]
                  ]),
                  createBaseVNode("p", {
                    class: normalizeClass(["help is-danger", { "is-hidden": !unref(v$).confirmPassword.$error }])
                  }, " This password is invalid ", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VControl, { class: "login mt-5" }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                loading: isLoading.value,
                disabled: unref(v$).$invalid || isLoading.value,
                type: "submit",
                icon: "fas fa-unlock",
                color: "primary",
                fullwidth: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("config.ChangePassword")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ]),
            _: 1
          })
        ])
      ], 40, _hoisted_1);
    };
  }
};
export { _sfc_main as default };
