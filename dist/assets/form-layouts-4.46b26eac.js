import { _ as _sfc_main$6 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VCheckbox.486c8d05.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, k as ref, aF as useWindowScroll, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, g as normalizeClass, h as unref, s as createVNode, w as withCtx, _ as mergeProps, aJ as toHandlers, a2 as withKeys, W as withModifiers, t as toDisplayString, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var FormLayoutStacked_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-layout is-stacked" };
const _hoisted_2 = { class: "form-outer" };
const _hoisted_3 = { class: "form-header-inner" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Schedule a meeting")
], -1);
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Cancel ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Schedule ");
const _hoisted_9 = { class: "form-body" };
const _hoisted_10 = { class: "form-section" };
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "What is this meeting about?"
}, null, -1);
const _hoisted_14 = { class: "columns v-calendar-combo" };
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", null, "Meeting date", -1);
const _hoisted_17 = ["value"];
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", { class: "is-vhidden" }, "Meeting date", -1);
const _hoisted_20 = ["value"];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("label", null, "Meeting time", -1);
const _hoisted_22 = ["value"];
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("label", { class: "is-vhidden" }, "Meeting time", -1);
const _hoisted_24 = ["value"];
const _hoisted_25 = { class: "column is-12" };
const _hoisted_26 = { class: "form-section is-grey" };
const _hoisted_27 = { class: "form-section-header" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Meeting details")
], -1);
const _hoisted_29 = { class: "right" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Add People ");
const _hoisted_31 = { class: "form-section-inner is-horizontal" };
const _hoisted_32 = { class: "field is-horizontal" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Participants")
], -1);
const _hoisted_34 = { class: "field-body" };
const _hoisted_35 = { class: "participants" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("button", { class: "add-participant" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_37 = { class: "field is-horizontal" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Where")
], -1);
const _hoisted_39 = { class: "field-body" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "e.g. Conference room"
}, null, -1);
const _hoisted_41 = { class: "field is-horizontal" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Meeting URL")
], -1);
const _hoisted_43 = { class: "field-body" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "url",
  placeholder: "https://zoom.com/m/156546",
  inputmode: "url"
}, null, -1);
const _hoisted_45 = { class: "field is-horizontal" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Calendar")
], -1);
const _hoisted_47 = { class: "field-body" };
const _hoisted_48 = { class: "field is-horizontal" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Description")
], -1);
const _hoisted_50 = { class: "field-body" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("textarea", {
  class: "textarea",
  rows: "4",
  placeholder: "Tell us about any details you'd like us to know...",
  autocomplete: "off",
  autocapitalize: "off",
  spellcheck: "true"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("a", { class: "add-link" }, "Add Attachments", -1);
const _hoisted_53 = { class: "form-section is-grey" };
const _hoisted_54 = { class: "form-section-inner is-horizontal" };
const _hoisted_55 = { class: "field is-horizontal" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Color Code")
], -1);
const _hoisted_57 = { class: "field-body" };
const _hoisted_58 = { class: "color-codes" };
const _hoisted_59 = { class: "field is-horizontal" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Notifications")
], -1);
const _hoisted_61 = { class: "field-body" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("a", { class: "add-link" }, "Add Notification", -1);
const _hoisted_63 = { class: "multiselect-single-label" };
const _hoisted_64 = ["src"];
const _hoisted_65 = { class: "select-label-text" };
const _hoisted_66 = ["src"];
const _hoisted_67 = { class: "select-label-text" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const selectedColor = ref("");
    const calendarTarget = ref("");
    const notificationMedium = ref("");
    const notificationTarget = ref("");
    const date = ref({
      start: new Date(),
      end: new Date()
    });
    const { y } = useWindowScroll();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const options = ref(["All day"]);
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_VCheckbox = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(isStuck) && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, {
                    icon: "lnir lnir-arrow-left rem-100",
                    to: { name: "sidebar-layouts-profile-view" },
                    light: "",
                    "dark-outlined": ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    raised: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:slack" }, {
                        default: withCtx(() => [
                          _hoisted_13
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_VDatePicker, {
                  modelValue: date.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value = $event),
                  "is-range": "",
                  color: "green",
                  "trim-weeks": "",
                  class: "column is-6"
                }, {
                  default: withCtx(({ inputValue, inputEvents }) => [
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            _hoisted_16,
                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                              default: withCtx(() => [
                                createBaseVNode("input", mergeProps({
                                  placeholder: "Start Date",
                                  value: inputValue.start,
                                  class: "input form-datepicker"
                                }, toHandlers(inputEvents.start)), null, 16, _hoisted_17)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            _hoisted_19,
                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                              default: withCtx(() => [
                                createBaseVNode("input", mergeProps({
                                  placeholder: "End Date",
                                  value: inputValue.end,
                                  class: "input form-datepicker"
                                }, toHandlers(inputEvents.end)), null, 16, _hoisted_20)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_VDatePicker, {
                  modelValue: date.value.start,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => date.value.start = $event),
                  class: "column is-3",
                  color: "green",
                  mode: "time",
                  is24hr: ""
                }, {
                  default: withCtx(({ inputValue, inputEvents }) => [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_21,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("input", mergeProps({
                              class: "input form-timepicker",
                              value: inputValue
                            }, toHandlers(inputEvents)), null, 16, _hoisted_22)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_VDatePicker, {
                  modelValue: date.value.end,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => date.value.end = $event),
                  class: "column is-3",
                  color: "green",
                  mode: "time",
                  is24hr: ""
                }, {
                  default: withCtx(({ inputValue, inputEvents }) => [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_23,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("input", mergeProps({
                              class: "input form-timepicker",
                              value: inputValue
                            }, toHandlers(inputEvents)), null, 16, _hoisted_24)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createBaseVNode("div", _hoisted_25, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VCheckbox, {
                            modelValue: options.value,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => options.value = $event),
                            value: "All day",
                            label: "All day",
                            color: "primary",
                            circle: ""
                          }, null, 8, ["modelValue"]),
                          createVNode(_component_VCheckbox, {
                            modelValue: options.value,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => options.value = $event),
                            value: "Repeat every week",
                            label: "Repeat every week",
                            color: "primary",
                            circle: ""
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
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                _hoisted_28,
                createBaseVNode("div", _hoisted_29, [
                  createVNode(_component_VButton, { "dark-outlined": "" }, {
                    default: withCtx(() => [
                      _hoisted_30
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  _hoisted_33,
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_35, [
                              createVNode(_component_Tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user8
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user122
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, {
                                    color: "warning",
                                    initials: "BT"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user18
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/18.jpg" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user123
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, {
                                    color: "info",
                                    initials: "JD"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user7
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/7.jpg" })
                                ]),
                                _: 1
                              }),
                              _hoisted_36
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_37, [
                  _hoisted_38,
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_40
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_41, [
                  _hoisted_42,
                  createBaseVNode("div", _hoisted_43, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_44
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_45, [
                  _hoisted_46,
                  createBaseVNode("div", _hoisted_47, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: calendarTarget.value,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => calendarTarget.value = $event),
                              placeholder: "Pick a calendar",
                              options: ["My Calendar", "Team Calendar", "Company Calendar"]
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_48, [
                  _hoisted_49,
                  createBaseVNode("div", _hoisted_50, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_51,
                            _hoisted_52
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
            createBaseVNode("div", _hoisted_53, [
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", _hoisted_55, [
                  _hoisted_56,
                  createBaseVNode("div", _hoisted_57, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_58, [
                              createBaseVNode("div", {
                                class: normalizeClass([[selectedColor.value === "primary" && "is-active"], "color-code is-primary"]),
                                tabindex: "0",
                                onClick: _cache[6] || (_cache[6] = ($event) => selectedColor.value = "primary"),
                                onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => selectedColor.value = "primary", ["prevent"]), ["space"]))
                              }, null, 34),
                              createBaseVNode("div", {
                                class: normalizeClass([[selectedColor.value === "secondary" && "is-active"], "color-code is-secondary"]),
                                tabindex: "0",
                                onClick: _cache[8] || (_cache[8] = ($event) => selectedColor.value = "secondary"),
                                onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => selectedColor.value = "secondary", ["prevent"]), ["space"]))
                              }, null, 34),
                              createBaseVNode("div", {
                                class: normalizeClass([[selectedColor.value === "info" && "is-active"], "color-code is-info"]),
                                tabindex: "0",
                                onClick: _cache[10] || (_cache[10] = ($event) => selectedColor.value = "info"),
                                onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => selectedColor.value = "info", ["prevent"]), ["space"]))
                              }, null, 34),
                              createBaseVNode("div", {
                                class: normalizeClass([[selectedColor.value === "success" && "is-active"], "color-code is-success"]),
                                tabindex: "0",
                                onClick: _cache[12] || (_cache[12] = ($event) => selectedColor.value = "success"),
                                onKeydown: _cache[13] || (_cache[13] = withKeys(withModifiers(($event) => selectedColor.value = "success", ["prevent"]), ["space"]))
                              }, null, 34),
                              createBaseVNode("div", {
                                class: normalizeClass([[selectedColor.value === "purple" && "is-active"], "color-code is-purple"]),
                                tabindex: "0",
                                onClick: _cache[14] || (_cache[14] = ($event) => selectedColor.value = "purple"),
                                onKeydown: _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => selectedColor.value = "purple", ["prevent"]), ["space"]))
                              }, null, 34)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_59, [
                  _hoisted_60,
                  createBaseVNode("div", _hoisted_61, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: notificationMedium.value,
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => notificationMedium.value = $event),
                              placeholder: "Select a channel",
                              options: ["Email", "SMS", "Slack", "Project Board"]
                            }, null, 8, ["modelValue"]),
                            _hoisted_62
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VField, { class: "is-image-select" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: notificationTarget.value,
                              "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => notificationTarget.value = $event),
                              placeholder: "Select a target",
                              label: "name",
                              value: "name",
                              options: [
                                {
                                  name: "All",
                                  value: "",
                                  icon: "/images/avatars/placeholder.jpg"
                                },
                                {
                                  name: "Erik K.",
                                  value: "eric",
                                  icon: "/images/avatars/svg/vuero-1.svg"
                                },
                                {
                                  name: "Joshua S.",
                                  value: "joshua",
                                  icon: "https://vuero.cssninja.io/demo/avatars/12.jpg"
                                },
                                {
                                  name: "Melany W.",
                                  value: "melany",
                                  icon: "https://vuero.cssninja.io/demo/avatars/25.jpg"
                                },
                                {
                                  name: "Alice C.",
                                  value: "alice",
                                  icon: "https://vuero.cssninja.io/demo/avatars/7.jpg"
                                },
                                {
                                  name: "Esteban C.",
                                  value: "esteban",
                                  icon: "https://vuero.cssninja.io/demo/avatars/18.jpg"
                                }
                              ]
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_63, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_64),
                                  createBaseVNode("span", _hoisted_65, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_66),
                                createBaseVNode("span", _hoisted_67, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
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
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Form Layouts 4");
    useHead({
      title: "Form Layouts 4 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FormLayoutStacked = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FormLayoutStacked)
      ]);
    };
  }
});
export { _sfc_main as default };
