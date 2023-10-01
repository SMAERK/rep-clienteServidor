import { _ as _sfc_main$6 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VIconButton.f948e51d.js";
import { _ as _sfc_main$3 } from "./VFilePond.c8927e5b.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, k as ref, aF as useWindowScroll, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a2 as withKeys, W as withModifiers, g as normalizeClass, h as unref, p as createBlock, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0 } from "./vuero-1.6aadf997.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./useThemeColors.b71015d4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "General Info"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edit your account's general information")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Go Back ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Save Changes ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Profile Picture"),
  /* @__PURE__ */ createBaseVNode("p", null, "This is how others will recognize you")
], -1);
const _hoisted_11 = { class: "fieldset" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Personal Info"),
  /* @__PURE__ */ createBaseVNode("p", null, "Others diserve to know you more")
], -1);
const _hoisted_13 = { class: "columns is-multiline" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "First Name",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Last Name",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Job Title",
  autocomplete: "organization-title"
}, null, -1);
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Location",
  autocomplete: "country-name"
}, null, -1);
const _hoisted_22 = { class: "column is-12" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("textarea", {
  class: "textarea",
  rows: "4",
  placeholder: "About / Bio",
  autocomplete: "off",
  autocapitalize: "off",
  spellcheck: "true"
}, null, -1);
const _hoisted_24 = { class: "fieldset" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Professional Info"),
  /* @__PURE__ */ createBaseVNode("p", null, "This can help you to win some opportunities")
], -1);
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = { class: "column is-6" };
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = { class: "column is-12" };
const _hoisted_32 = { class: "fieldset" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Social Profiles"),
  /* @__PURE__ */ createBaseVNode("p", null, "This can help others finding you on social media")
], -1);
const _hoisted_34 = { class: "columns is-multiline" };
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Facebook URL",
  inputmode: "url"
}, null, -1);
const _hoisted_37 = { class: "column is-6" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Twitter URL",
  inputmode: "url"
}, null, -1);
const _hoisted_39 = { class: "column is-6" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Dribbble URL",
  inputmode: "url"
}, null, -1);
const _hoisted_41 = { class: "column is-6" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Instagram URL",
  inputmode: "url"
}, null, -1);
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Github URL",
  inputmode: "url"
}, null, -1);
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Gitlab URL",
  inputmode: "url"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isUploading = ref(false);
    const isLoading = ref(false);
    const experience = ref("");
    const firstJob = ref("");
    const flexibility = ref("");
    const remote = ref("");
    const skills = ref(["software", "saas", "engineering"]);
    const skillsOptions = [
      { value: "software", label: "Software" },
      { value: "saas", label: "SaaS" },
      { value: "engineering", label: "Engineering" }
    ];
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const onAddFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file added", file);
    };
    const onRemoveFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file removed", file);
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VFilePond = _sfc_main$3;
      const _component_VIconButton = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$6;
      const _component_Multiselect = resolveComponent("Multiselect");
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
            _hoisted_10,
            createVNode(_component_VAvatar, {
              size: "xl",
              class: "profile-v-avatar"
            }, {
              avatar: withCtx(() => [
                !isUploading.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: "avatar",
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32)) : (openBlock(), createBlock(_component_VFilePond, {
                  key: 1,
                  class: "profile-filepond",
                  name: "profile_filepond",
                  "chunk-retry-delays": [500, 1e3, 3e3],
                  "label-idle": "<i class='lnil lnil-cloud-upload'></i>",
                  "accepted-file-types": ["image/png", "image/jpeg", "image/gif"],
                  "image-preview-height": 140,
                  "image-resize-target-width": 140,
                  "image-resize-target-height": 140,
                  "image-crop-aspect-ratio": "1:1",
                  "style-panel-layout": "compact circle",
                  "style-load-indicator-position": "center bottom",
                  "style-progress-indicator-position": "right bottom",
                  "style-button-remove-item-position": "left bottom",
                  "style-button-process-item-position": "right bottom",
                  onAddfile: onAddFile,
                  onRemovefile: onRemoveFile
                })),
                !isUploading.value ? (openBlock(), createBlock(_component_VIconButton, {
                  key: 2,
                  icon: "feather:edit-2",
                  class: "edit-button is-edit",
                  circle: "",
                  tabindex: "0",
                  onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => isUploading.value = true, ["prevent"]), ["space"])),
                  onClick: _cache[2] || (_cache[2] = ($event) => isUploading.value = true)
                })) : (openBlock(), createBlock(_component_VIconButton, {
                  key: 3,
                  icon: "feather:arrow-left",
                  class: "edit-button is-back",
                  circle: "",
                  tabindex: "0",
                  onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => isUploading.value = false, ["prevent"]), ["space"])),
                  onClick: _cache[4] || (_cache[4] = ($event) => isUploading.value = false)
                }))
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:user" }, {
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
                    createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                      default: withCtx(() => [
                        _hoisted_19
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
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
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            _hoisted_25,
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: experience.value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => experience.value = $event),
                          placeholder: "Experience",
                          options: ["0-2 years", "2-5 years", "5-10 years", "10+ years"]
                        }, null, 8, ["modelValue"])
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
                        createVNode(_component_Multiselect, {
                          modelValue: firstJob.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => firstJob.value = $event),
                          placeholder: "Is this your first job?",
                          options: ["Yes", "No"]
                        }, null, 8, ["modelValue"])
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
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: flexibility.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => flexibility.value = $event),
                          placeholder: "Are you flexible?",
                          options: ["Yes", "No"]
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_30, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: remote.value,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => remote.value = $event),
                          placeholder: "Do you work remotely?",
                          options: ["Yes", "No"]
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: skills.value,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => skills.value = $event),
                          mode: "tags",
                          searchable: true,
                          "create-tag": true,
                          options: skillsOptions,
                          placeholder: "Add tags"
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
          createBaseVNode("div", _hoisted_32, [
            _hoisted_33,
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-facebook-f" }, {
                      default: withCtx(() => [
                        _hoisted_36
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_37, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-twitter" }, {
                      default: withCtx(() => [
                        _hoisted_38
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_39, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-dribbble" }, {
                      default: withCtx(() => [
                        _hoisted_40
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_41, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-instagram" }, {
                      default: withCtx(() => [
                        _hoisted_42
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_43, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-github" }, {
                      default: withCtx(() => [
                        _hoisted_44
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_45, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-gitlab" }, {
                      default: withCtx(() => [
                        _hoisted_46
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
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Profile Edit 1");
    useHead({
      title: "Profile Edit 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_EditProfileGeneral = _sfc_main$1;
      return openBlock(), createBlock(_component_EditProfileGeneral);
    };
  }
});
export { _sfc_main as default };
