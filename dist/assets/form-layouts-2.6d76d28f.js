import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, k as ref, aF as useWindowScroll, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, g as normalizeClass, h as unref, s as createVNode, w as withCtx, W as withModifiers, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var FormLayoutSplit_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Request Payout")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Cancel ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Request Payout ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "form-section" };
const _hoisted_10 = { class: "left" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "Choose an amount", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "operator" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Or")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "radio-pills" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 20
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "$20")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 40
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "$40")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 60
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "$60")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 100
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "$100")
    ])
  ])
], -1);
const _hoisted_14 = { class: "right" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "Enter your own", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "number",
  min: "0",
  step: "10",
  placeholder: "Amount..."
}, null, -1);
const _hoisted_17 = { class: "form-section is-grey" };
const _hoisted_18 = { class: "left" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", null, "Personal Info", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "First Name *",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Last Name *",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("input", {
  type: "email",
  class: "input",
  placeholder: "Email Address *",
  autocomplete: "email",
  inputmode: "email"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("input", {
  type: "tel",
  class: "input",
  placeholder: "Phone Number *",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_24 = { class: "right" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h3", null, "Payout Details", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("label", null, "Notify me when funds are ready?", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("label", { class: "radio" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "radio",
    name: "notification_selection",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" Yes ")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", { class: "radio is-outlined is-primary" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "radio",
    name: "notification_selection"
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" No ")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const bankAccount = ref("");
    const transferFees = ref("");
    const { y } = useWindowScroll();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("form", {
        class: "form-layout is-split",
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
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                _hoisted_12,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
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
                _hoisted_15,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:dollar-sign" }, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
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
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        _hoisted_21
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
                        _hoisted_22
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:phone" }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_24, [
                _hoisted_25,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: bankAccount.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bankAccount.value = $event),
                          placeholder: "Bank Account",
                          options: ["AMEX **** 42", "HSBC **** 29"]
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
                        createVNode(_component_Multiselect, {
                          modelValue: transferFees.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => transferFees.value = $event),
                          placeholder: "Bank Account",
                          options: ["Super Fast - $3.00", "Regular - $0.50"]
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_26,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_27,
                        _hoisted_28
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
      ], 32);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Form Layouts 2");
    useHead({
      title: "Form Layouts 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FormLayoutSplit = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FormLayoutSplit)
      ]);
    };
  }
});
export { _sfc_main as default };
