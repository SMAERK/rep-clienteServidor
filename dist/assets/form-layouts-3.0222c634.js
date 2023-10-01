import { b as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VCheckbox.486c8d05.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, t as toDisplayString, W as withModifiers, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var FormLayoutSeparate_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-body" };
const _hoisted_3 = { class: "form-section" };
const _hoisted_4 = { class: "form-section-inner has-padding-bottom" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "Personal Information", -1);
const _hoisted_6 = { class: "columns is-multiline" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("label", null, "First Name", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", null, "Last Name", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_13 = { class: "column is-12" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "Email Address", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("input", {
  type: "email",
  class: "input",
  placeholder: "",
  autocomplete: "email",
  inputmode: "email"
}, null, -1);
const _hoisted_16 = { class: "column is-12" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("label", null, "Street", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "street-address"
}, null, -1);
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("label", null, "City", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "",
  autocomplete: "address-level2"
}, null, -1);
const _hoisted_22 = { class: "column is-6" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("label", null, "Country", -1);
const _hoisted_24 = { class: "multiselect-single-label" };
const _hoisted_25 = ["src"];
const _hoisted_26 = { class: "select-label-text" };
const _hoisted_27 = ["src"];
const _hoisted_28 = { class: "select-label-text" };
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("label", null, "Phone", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("input", {
  type: "tel",
  class: "input",
  placeholder: "",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_32 = { class: "form-section" };
const _hoisted_33 = { class: "form-section-inner" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "Delivery", -1);
const _hoisted_35 = { class: "columns is-multiline" };
const _hoisted_36 = { class: "column is-12" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("label", null, "Delivery Fee", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "radio-boxes" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-box" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "delivery_type"
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-box-inner" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "fee" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "0")
      ]),
      /* @__PURE__ */ createBaseVNode("p", null, "3-4 weeks")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-box" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "delivery_type",
      checked: ""
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-box-inner" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "fee" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "5")
      ]),
      /* @__PURE__ */ createBaseVNode("p", null, "2-5 days")
    ])
  ])
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("Estimated delivery date: "),
    /* @__PURE__ */ createBaseVNode("span", null, "Oct 23")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Each package has a tracking number")
], -1);
const _hoisted_40 = { class: "form-section-outer" };
const _hoisted_41 = { class: "checkboxes" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "px-2" }, null, -1);
const _hoisted_43 = { class: "button-wrap" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" Confirm My Order ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const country = ref("");
    const options = ref(["Option 2"]);
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VCheckbox = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("form", {
        class: "form-layout is-separate",
        onSubmit: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_8,
                        createVNode(_component_VControl, { icon: "feather:user" }, {
                          default: withCtx(() => [
                            _hoisted_9
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_11,
                        createVNode(_component_VControl, { icon: "feather:user" }, {
                          default: withCtx(() => [
                            _hoisted_12
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_14,
                        createVNode(_component_VControl, { icon: "feather:mail" }, {
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
                        _hoisted_17,
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_18
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_20,
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_21
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(_component_VField, { class: "is-image-select" }, {
                      default: withCtx(() => [
                        _hoisted_23,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: country.value,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => country.value = $event),
                              placeholder: "Select a country",
                              autocomplete: "country",
                              label: "name",
                              options: [
                                {
                                  value: "english",
                                  name: "English",
                                  icon: "/images/icons/flags/united-states-of-america.svg"
                                },
                                {
                                  value: "german",
                                  name: "German",
                                  icon: "/images/icons/flags/icons8-portugal-96.png"
                                }
                              ]
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_24, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_25),
                                  createBaseVNode("span", _hoisted_26, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_27),
                                createBaseVNode("span", _hoisted_28, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_30,
                        createVNode(_component_VControl, { icon: "feather:phone" }, {
                          default: withCtx(() => [
                            _hoisted_31
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                _hoisted_34,
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_37,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_38,
                            _hoisted_39
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VCheckbox, {
                            modelValue: options.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => options.value = $event),
                            value: "Option 2",
                            label: "Create an account",
                            color: "primary",
                            circle: ""
                          }, null, 8, ["modelValue"]),
                          _hoisted_42,
                          createVNode(_component_VCheckbox, {
                            modelValue: options.value,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => options.value = $event),
                            value: "Option 1",
                            label: "Subscribe to our Newsletter",
                            color: "primary",
                            circle: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    bold: "",
                    raised: "",
                    fullwidth: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_44
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
    viewWrapper.setPageTitle("Form Layouts 3");
    useHead({
      title: "Form Layouts 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FormLayoutSeparate = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FormLayoutSeparate)
      ]);
    };
  }
});
export { _sfc_main as default };
