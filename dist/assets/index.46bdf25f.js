import _sfc_main$4 from "./SidebarLayout.6399bc9d.js";
import { b as _sfc_main$1, e as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { m as useI18n, $ as useRouter, k as ref, u as useStorage, a9 as reactive, e as computed, Q as watch, Y as onMounted, a1 as useHead, o as openBlock, p as createBlock, w as withCtx, s as createVNode, x as createTextVNode, t as toDisplayString, h as unref, q as createBaseVNode, W as withModifiers, a3 as withDirectives, a4 as vModelText, g as normalizeClass } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { u as useVuelidate, r as required, e as email, m as minLength, s as sameAs } from "./index.esm.8b858c3a.js";
import "./UserProfileDropdown.c528b802.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VProgress.5bff1011.js";
import "./panels.9ed80fb9.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VIconButton.f948e51d.js";
import "./VPageContent.f47e1c5e.js";
import "./Toolbar.cbd734d2.js";
import "./TaskPanel.a47df64e.js";
import "./FileCardDropdown.ed362889.js";
import "./SearchPanel.54ae1913.js";
import "./UserPopoverContent.5da306fe.js";
import "./VBlock.64333f78.js";
import "./VIconBox.298b3a59.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./LanguagesPanel.b7b20087.js";
import "./Sidebar.14a911d1.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-6" };
const _hoisted_3 = ["onSubmit"];
const _hoisted_4 = { class: "login-form mt-5" };
const _hoisted_5 = { class: "columns is-multiline" };
const _hoisted_6 = { class: "column is-12" };
const _hoisted_7 = { class: "column is-12" };
const _hoisted_8 = ["placeholder"];
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = ["placeholder"];
const _hoisted_11 = {
  class: "mx-auto",
  style: { "width": "50%" }
};
const _hoisted_12 = { class: "column is-6 mt-3 mb-3" };
const _hoisted_13 = { class: "column mt-5 card has-background-light" };
const _hoisted_14 = { class: "content mt-3 mb-5" };
const _hoisted_15 = { class: "title is-5 is-narrow is-bold" };
const _sfc_main = {
  setup(__props) {
    const { locale, t } = useI18n();
    const router = useRouter();
    const notif = useNotyf();
    const isLoading = ref(false);
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    const viewWrapper = useViewWrapper();
    const thisEmail = JSON.parse(useStorage("user").value).email;
    const form = reactive({
      email: thisEmail,
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
      viewWrapper.setPageTitle(`AIG MX - ${t("config.title")}`);
    });
    onMounted(async () => {
      useHead({
        title: `AIG MX - ${t("config.title")}`
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_SidebarLayout = _sfc_main$4;
      return openBlock(), createBlock(_component_SidebarLayout, null, {
        default: withCtx(() => [
          createVNode(_component_VButton, {
            class: "mb-5",
            raised: "",
            icon: "fas fa-arrow-left",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(router).go(-1))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("utils.buttons.goBack")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_VCard, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("form", {
                    onSubmit: withModifiers(handleReset, ["prevent"])
                  }, [
                    createBaseVNode("h3", null, toDisplayString(unref(t)("config.ChangePassword")), 1),
                    createBaseVNode("p", null, toDisplayString(unref(t)("config.text")), 1),
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:mail" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(v$).email.$model = $event),
                                    class: normalizeClass(["input", { "is-danger": unref(v$).email.$error }]),
                                    type: "email",
                                    placeholder: "E-mail",
                                    autocomplete: "email",
                                    disabled: ""
                                  }, null, 2), [
                                    [vModelText, unref(v$).email.$model]
                                  ]),
                                  createBaseVNode("p", {
                                    class: normalizeClass(["help is-danger", { "is-hidden": !unref(v$).email.$error }])
                                  }, " This email is invalid ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(v$).password.$model = $event),
                                    class: normalizeClass([{ "is-danger": unref(v$).password.$error }, "input"]),
                                    type: "password",
                                    placeholder: unref(t)("config.newPassword")
                                  }, null, 10, _hoisted_8), [
                                    [vModelText, unref(v$).password.$model]
                                  ]),
                                  createBaseVNode("p", {
                                    class: normalizeClass(["help is-danger", { "is-hidden": !unref(v$).password.$error }])
                                  }, " This password is invalid ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(v$).confirmPassword.$model = $event),
                                    class: normalizeClass([{ "is-danger": unref(v$).confirmPassword.$error }, "input"]),
                                    type: "password",
                                    placeholder: unref(t)("config.confirmPassword")
                                  }, null, 10, _hoisted_10), [
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
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { class: "login is-vcentered" }, {
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
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ], 40, _hoisted_3)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("h2", _hoisted_15, toDisplayString(unref(t)("config.parameters.title")), 1),
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, toDisplayString(unref(t)("config.parameters.containsUppercase")), 1),
                        createBaseVNode("li", null, toDisplayString(unref(t)("config.parameters.containsLowercase")), 1),
                        createBaseVNode("li", null, toDisplayString(unref(t)("config.parameters.containsSpecial")), 1),
                        createBaseVNode("li", null, toDisplayString(unref(t)("config.parameters.containsNumber")), 1),
                        createBaseVNode("li", null, toDisplayString(unref(t)("config.parameters.characterMin")), 1)
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
