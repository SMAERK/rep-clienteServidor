import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, k as ref, aF as useWindowScroll, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, g as normalizeClass, h as unref, s as createVNode, w as withCtx, _ as mergeProps, aJ as toHandlers, W as withModifiers, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var FormLayout_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Emitir Certificado")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Cancel ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Generar Certificado ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "form-fieldset" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n personal"),
  /* @__PURE__ */ createBaseVNode("p", null, "Ingrese la informaci\xF3n del asegurado principal")
], -1);
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", null, "Nombre", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", null, "Apellido", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", null, "Email", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("input", {
  type: "email",
  class: "input",
  placeholder: "",
  autocomplete: "email",
  inputmode: "email"
}, null, -1);
const _hoisted_21 = { class: "form-fieldset" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n de la compa\xF1ia"),
  /* @__PURE__ */ createBaseVNode("p", null, "Ingrese la informaci\xF3n de la empresa del asegurado")
], -1);
const _hoisted_23 = { class: "columns is-multiline" };
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("label", null, "Nombre compa\xF1ia", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "organization"
}, null, -1);
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", null, "Tel\xE9fono compa\xF1ia", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("input", {
  type: "tel",
  class: "input",
  placeholder: "",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_30 = { class: "form-fieldset" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Seleccione producto"),
  /* @__PURE__ */ createBaseVNode("p", null, "Que producto o plan desea seleciconar")
], -1);
const _hoisted_32 = { class: "columns is-multiline" };
const _hoisted_33 = { class: "column is-6" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("label", null, "Productos o planes", -1);
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("label", null, "Fecha de inicio cobertura", -1);
const _hoisted_37 = ["value"];
const _hoisted_38 = { class: "column is-12" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("label", null, "Comentario", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("textarea", {
  class: "textarea",
  rows: "4",
  placeholder: "Deje aqui el comentario del asegurado...",
  autocomplete: "off",
  autocapitalize: "off",
  spellcheck: "true"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    ref("");
    ref("");
    const productToDemo = ref("");
    const date = ref(new Date());
    const { y } = useWindowScroll();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VDatePicker = resolveComponent("VDatePicker");
      return openBlock(), createElementBlock("form", {
        class: "form-layout",
        onSubmit: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(isStuck) && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_VButton, {
                    icon: "lnir lnir-arrow-left rem-100",
                    to: { name: "sidebar-layouts-profile-view" },
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
                    raised: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_13,
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_16,
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          _hoisted_17
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_19,
                      createVNode(_component_VControl, { icon: "feather:mail" }, {
                        default: withCtx(() => [
                          _hoisted_20
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              _hoisted_22,
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_25,
                      createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                        default: withCtx(() => [
                          _hoisted_26
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_27, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_28,
                      createVNode(_component_VControl, { icon: "feather:phone" }, {
                        default: withCtx(() => [
                          _hoisted_29
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_30, [
              _hoisted_31,
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_34,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: productToDemo.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => productToDemo.value = $event),
                            placeholder: "Seleccione una opci\xF3n",
                            options: ["Plan A", "Plan B", "Plan C"]
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_35, [
                  createVNode(_component_VDatePicker, {
                    modelValue: date.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => date.value = $event),
                    color: "green",
                    "trim-weeks": ""
                  }, {
                    default: withCtx(({ inputValue, inputEvents }) => [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          _hoisted_36,
                          createVNode(_component_VControl, { icon: "feather:calendar" }, {
                            default: withCtx(() => [
                              createBaseVNode("input", mergeProps({
                                class: "input",
                                type: "text",
                                placeholder: "Seleccionar una fecha",
                                value: inputValue
                              }, toHandlers(inputEvents)), null, 16, _hoisted_37)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_39,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_40
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ], 32);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Form Layouts 1");
    useHead({
      title: "Form Layouts 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FormLayout = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FormLayout)
      ]);
    };
  }
});
export { _sfc_main as default };
