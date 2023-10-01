import { _ as _sfc_main$4 } from "./VIconWrap.8350d40c.js";
import { _ as __unplugin_components_3 } from "./EditSettingItemDropdown.127a2714.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, aF as useWindowScroll, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, g as normalizeClass, h as unref, t as toDisplayString, F as Fragment, x as createTextVNode, a1 as useHead, p as createBlock } from "./vendor.6548d360.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Skills and Tools"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edit your skills and tools")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Go Back ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Save Changes ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Languages", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "How many languages do you speak?", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_15 = { class: "setting-list" };
const _hoisted_16 = ["onSubmit"];
const _hoisted_17 = { class: "field-wrap" };
const _hoisted_18 = { class: "columns is-multiline" };
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = { class: "multiselect-single-label" };
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "select-label-text" };
const _hoisted_23 = ["src"];
const _hoisted_24 = { class: "select-label-text" };
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = { class: "column is-12" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Write a quick comment...",
  autocomplete: "off"
}, null, -1);
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" Add Language ");
const _hoisted_30 = { class: "setting-item" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "English"),
  /* @__PURE__ */ createBaseVNode("span", null, "Native Speaker, fluent")
], -1);
const _hoisted_32 = { class: "end" };
const _hoisted_33 = { class: "setting-item is-create" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new language item")
], -1);
const _hoisted_35 = { class: "end" };
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" Add ");
const _hoisted_37 = { class: "fieldset" };
const _hoisted_38 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("h4", null, "Skills", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "Add your best skills", -1);
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_43 = { class: "setting-list" };
const _hoisted_44 = ["onSubmit"];
const _hoisted_45 = { class: "field-wrap" };
const _hoisted_46 = { class: "columns is-multiline" };
const _hoisted_47 = { class: "column is-6" };
const _hoisted_48 = { class: "multiselect-single-label" };
const _hoisted_49 = ["src"];
const _hoisted_50 = { class: "select-label-text" };
const _hoisted_51 = ["src"];
const _hoisted_52 = { class: "select-label-text" };
const _hoisted_53 = { class: "column is-6" };
const _hoisted_54 = { class: "column is-12" };
const _hoisted_55 = /* @__PURE__ */ createTextVNode(" Add Skill ");
const _hoisted_56 = { class: "setting-item" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Javascript"),
  /* @__PURE__ */ createBaseVNode("span", null, "7 years of experience")
], -1);
const _hoisted_58 = { class: "end" };
const _hoisted_59 = { class: "setting-item" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Html5"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ years of experience")
], -1);
const _hoisted_61 = { class: "end" };
const _hoisted_62 = { class: "setting-item" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "CSS3"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ years of experience")
], -1);
const _hoisted_64 = { class: "end" };
const _hoisted_65 = { class: "setting-item is-create" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new skill item")
], -1);
const _hoisted_67 = { class: "end" };
const _hoisted_68 = /* @__PURE__ */ createTextVNode(" Add ");
const _hoisted_69 = { class: "fieldset" };
const _hoisted_70 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("h4", null, "Tools", -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("p", null, "Add the tools you work with", -1);
const _hoisted_73 = [
  _hoisted_71,
  _hoisted_72
];
const _hoisted_74 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_75 = { class: "setting-list" };
const _hoisted_76 = ["onSubmit"];
const _hoisted_77 = { class: "field-wrap" };
const _hoisted_78 = { class: "columns is-multiline" };
const _hoisted_79 = { class: "column is-6" };
const _hoisted_80 = { class: "multiselect-single-label" };
const _hoisted_81 = ["src"];
const _hoisted_82 = { class: "select-label-text" };
const _hoisted_83 = ["src"];
const _hoisted_84 = { class: "select-label-text" };
const _hoisted_85 = { class: "column is-6" };
const _hoisted_86 = { class: "column is-12" };
const _hoisted_87 = /* @__PURE__ */ createTextVNode(" Add Tool ");
const _hoisted_88 = { class: "setting-item" };
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Illustrator"),
  /* @__PURE__ */ createBaseVNode("span", null, "Advanced level")
], -1);
const _hoisted_90 = { class: "end" };
const _hoisted_91 = { class: "setting-item" };
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Jira Software"),
  /* @__PURE__ */ createBaseVNode("span", null, "Intermediate level")
], -1);
const _hoisted_93 = { class: "end" };
const _hoisted_94 = { class: "setting-item" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "MS Office"),
  /* @__PURE__ */ createBaseVNode("span", null, "Expert level")
], -1);
const _hoisted_96 = { class: "end" };
const _hoisted_97 = { class: "setting-item is-create" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "New Item"),
  /* @__PURE__ */ createBaseVNode("span", null, "Add a new tool item")
], -1);
const _hoisted_99 = { class: "end" };
const _hoisted_100 = /* @__PURE__ */ createTextVNode(" Add ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isLoading = ref(false);
    const isEditingLanguages = ref(false);
    const isEditingSkills = ref(false);
    const isEditingTools = ref(false);
    const selectedLanguage = ref("");
    const selectedLanguageLevel = ref("");
    const selectedSkill = ref("");
    const selectedSkillLevel = ref("");
    const selectedTool = ref("");
    const selectedToolLevel = ref("");
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const addLanguage = async () => {
      isEditingLanguages.value = false;
      await onSave();
      selectedLanguage.value = "";
      selectedLanguageLevel.value = "";
    };
    const addSkill = async () => {
      isEditingSkills.value = false;
      await onSave();
      selectedSkill.value = "";
      selectedSkillLevel.value = "";
    };
    const addTool = async () => {
      isEditingTools.value = false;
      await onSave();
      selectedTool.value = "";
      selectedToolLevel.value = "";
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_EditSettingItemDropdown = __unplugin_components_3;
      const _component_VIconWrap = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "sidebar-layouts-profile-view" },
                  icon: "lnir lnir-arrow-left rem-100",
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
                  raised: "",
                  loading: isLoading.value,
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                  onClick: onSave
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading", "onKeydown"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            !isEditingLanguages.value ? (openBlock(), createElementBlock("div", _hoisted_10, _hoisted_13)) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isEditingLanguages.value = false, ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => isEditingLanguages.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_15, [
              isEditingLanguages.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addLanguage, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguage.value,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedLanguage.value = $event),
                                placeholder: "Select a language",
                                label: "name",
                                options: []
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_20, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_21),
                                    createBaseVNode("span", _hoisted_22, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_23),
                                  createBaseVNode("span", _hoisted_24, toDisplayString(option.name), 1)
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
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguageLevel.value,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedLanguageLevel.value = $event),
                                placeholder: "Select your level",
                                options: [
                                  {
                                    value: "1",
                                    label: "Level 1"
                                  },
                                  {
                                    value: "2",
                                    label: "Level 2"
                                  },
                                  {
                                    value: "3",
                                    label: "Level 3"
                                  },
                                  {
                                    value: "4",
                                    label: "Level 4"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:message-circle" }, {
                            default: withCtx(() => [
                              _hoisted_27
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_29
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
                  ])
                ])
              ], 40, _hoisted_16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_30, [
                  _hoisted_31,
                  createBaseVNode("div", _hoisted_32, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_34,
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => isEditingLanguages.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[5] || (_cache[5] = ($event) => isEditingLanguages.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_36
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_37, [
            !isEditingSkills.value ? (openBlock(), createElementBlock("div", _hoisted_38, _hoisted_41)) : (openBlock(), createElementBlock("div", _hoisted_42, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => isEditingSkills.value = false, ["prevent"]), ["space"])),
                onClick: _cache[7] || (_cache[7] = ($event) => isEditingSkills.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_43, [
              isEditingSkills.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addSkill, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_45, [
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("div", _hoisted_47, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkill.value,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedSkill.value = $event),
                                placeholder: "Select a Skill",
                                label: "name",
                                options: []
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_48, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_49),
                                    createBaseVNode("span", _hoisted_50, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_51),
                                  createBaseVNode("span", _hoisted_52, toDisplayString(option.name), 1)
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
                    createBaseVNode("div", _hoisted_53, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkillLevel.value,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedSkillLevel.value = $event),
                                placeholder: "Years of Exp.",
                                options: [
                                  {
                                    value: "1",
                                    label: "1 Year of exp."
                                  },
                                  {
                                    value: "2",
                                    label: "2 Year of exp."
                                  },
                                  {
                                    value: "3",
                                    label: "3 Year of exp."
                                  },
                                  {
                                    value: "4",
                                    label: "4 Year of exp."
                                  },
                                  {
                                    value: "5",
                                    label: "5 Year of exp."
                                  },
                                  {
                                    value: "6",
                                    label: "6 Year of exp."
                                  },
                                  {
                                    value: "7",
                                    label: "7 Year of exp."
                                  },
                                  {
                                    value: "8",
                                    label: "8 Year of exp."
                                  },
                                  {
                                    value: "9",
                                    label: "9 Year of exp."
                                  },
                                  {
                                    value: "+10",
                                    label: "+10 Year of exp."
                                  }
                                ]
                              }, null, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_54, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_55
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
                  ])
                ])
              ], 40, _hoisted_44)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_56, [
                  _hoisted_57,
                  createBaseVNode("div", _hoisted_58, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_59, [
                  _hoisted_60,
                  createBaseVNode("div", _hoisted_61, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_62, [
                  _hoisted_63,
                  createBaseVNode("div", _hoisted_64, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_65, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_66,
                  createBaseVNode("div", _hoisted_67, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => isEditingSkills.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[11] || (_cache[11] = ($event) => isEditingSkills.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_68
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_69, [
            !isEditingTools.value ? (openBlock(), createElementBlock("div", _hoisted_70, _hoisted_73)) : (openBlock(), createElementBlock("div", _hoisted_74, [
              createBaseVNode("a", {
                class: "action-link",
                tabindex: "0",
                onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => isEditingTools.value = false, ["prevent"]), ["space"])),
                onClick: _cache[13] || (_cache[13] = ($event) => isEditingTools.value = false)
              }, " Cancel ", 32)
            ])),
            createBaseVNode("div", _hoisted_75, [
              isEditingTools.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addTool, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_77, [
                  createBaseVNode("div", _hoisted_78, [
                    createBaseVNode("div", _hoisted_79, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedTool.value,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => selectedTool.value = $event),
                                placeholder: "Select a Tool",
                                label: "name",
                                options: []
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_80, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_81),
                                    createBaseVNode("span", _hoisted_82, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_83),
                                  createBaseVNode("span", _hoisted_84, toDisplayString(option.name), 1)
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
                    createBaseVNode("div", _hoisted_85, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedToolLevel.value,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => selectedToolLevel.value = $event),
                                placeholder: "Select your level",
                                options: [
                                  {
                                    value: "1",
                                    label: "Level 1"
                                  },
                                  {
                                    value: "2",
                                    label: "Level 2"
                                  },
                                  {
                                    value: "3",
                                    label: "Level 3"
                                  },
                                  {
                                    value: "4",
                                    label: "Level 4"
                                  },
                                  {
                                    value: "5",
                                    label: "Level 5"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_86, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_87
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
                  ])
                ])
              ], 40, _hoisted_76)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_88, [
                  _hoisted_89,
                  createBaseVNode("div", _hoisted_90, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_91, [
                  createVNode(_component_VIconWrap, { picture: "https://vuero.cssninja.io/demo/photos/tools/jira.svg" }),
                  _hoisted_92,
                  createBaseVNode("div", _hoisted_93, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_94, [
                  createVNode(_component_VIconWrap, { picture: "https://vuero.cssninja.io/demo/photos/tools/office.svg" }),
                  _hoisted_95,
                  createBaseVNode("div", _hoisted_96, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_97, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_98,
                  createBaseVNode("div", _hoisted_99, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      tabindex: "0",
                      onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => isEditingTools.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[17] || (_cache[17] = ($event) => isEditingTools.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_100
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ])
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Profile Edit 3");
    useHead({
      title: "Profile Edit 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_EditProfileSkills = _sfc_main$1;
      return openBlock(), createBlock(_component_EditProfileSkills);
    };
  }
});
export { _sfc_main as default };
