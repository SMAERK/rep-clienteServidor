var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _sfc_main$i } from "./MinimalLayout.a3e60ebf.js";
import { b as _sfc_main$a, _ as _export_sfc, u as useDarkmode } from "./index.e178843f.js";
import { C as defineStore, k as ref, a9 as reactive, e as computed, d as defineComponent, $ as useRouter, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, x as createTextVNode, B as watchEffect, h as unref, t as toDisplayString, a2 as withKeys, W as withModifiers, p as createBlock, F as Fragment, X as renderList, a3 as withDirectives, aG as vModelCheckbox, y as createCommentVNode, a4 as vModelText, aK as TransitionGroup, g as normalizeClass, Z as onUnmounted, Q as watch, U as nextTick, ae as createStaticVNode, z as resolveComponent, _ as mergeProps, aJ as toHandlers, a5 as pushScopeId, a6 as popScopeId, a0 as useRoute, a1 as useHead } from "./vendor.6548d360.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { _ as _sfc_main$e } from "./VLoader.74e9a6e7.js";
import { _ as _sfc_main$d } from "./VBlock.64333f78.js";
import { _ as _sfc_main$c } from "./VIconBox.298b3a59.js";
import { _ as _sfc_main$b } from "./VAvatar.08652fea.js";
import { d as dayjs } from "./dayjs.min.7cfaa8e2.js";
import { _ as _sfc_main$g } from "./VIconButton.f948e51d.js";
import { _ as _sfc_main$f } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { _ as _sfc_main$h } from "./VFilePond.c8927e5b.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { _ as __unplugin_components_0$1 } from "./AnimatedLogo.9189a8f1.js";
import { _ as _imports_0$4 } from "./vuero-1.6aadf997.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import "./useThemeColors.b71015d4.js";
var _imports_0$3 = "/assets/finish.8f68c59b.svg";
var _imports_1$1 = "/assets/finish-dark.c07859f1.svg";
const useWizard = defineStore("wizard", () => {
  const step = ref(1);
  const loading = ref(false);
  const data = reactive({
    name: "",
    description: "",
    relatedTo: "UI/UX Design",
    logo: null,
    timeFrame: ref({
      start: new Date(),
      end: new Date()
    }),
    budget: "< 5K",
    attachments: [],
    teammates: [],
    tools: [],
    customer: null
  });
  const stepTitle = computed(() => {
    switch (step.value) {
      case 2:
        return "Project Info";
      case 3:
        return "Project Details";
      case 4:
        return "Project Files";
      case 5:
        return "Team Members";
      case 6:
        return "Project Tools";
      case 7:
        return "Preview";
      case 8:
        return "Finish";
      case 1:
      default:
        return "Project Type";
    }
  });
  function setLoading(value) {
    loading.value = value;
  }
  function setStep(value) {
    step.value = value;
  }
  async function save() {
    loading.value = true;
    await sleep(2e3);
    loading.value = false;
  }
  function reset() {
    data.name = "";
    data.description = "";
    data.relatedTo = "UI/UX Design";
    data.logo = null;
    data.timeFrame = {
      start: new Date(),
      end: new Date()
    };
    data.budget = "< 5K";
    data.attachments = [];
    data.teammates = [];
    data.tools = [];
    data.customer = null;
  }
  return {
    step,
    loading,
    stepTitle,
    data,
    setLoading,
    setStep,
    save,
    reset
  };
});
const _hoisted_1$9 = { class: "step-content" };
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Congrats! You're all set."),
  /* @__PURE__ */ createBaseVNode("p", null, "Awesome, you just finished creating this project.")
], -1);
const _hoisted_3$9 = { class: "page-placeholder end-placeholder" };
const _hoisted_4$8 = { class: "placeholder-content" };
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0$3,
  alt: ""
}, null, -1);
const _hoisted_6$8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1$1,
  alt: ""
}, null, -1);
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("h3", null, "Get ready for next steps.", -1);
const _hoisted_8$8 = /* @__PURE__ */ createBaseVNode("p", null, " You, and the team members you've added can already start working and creating tasks. ", -1);
const _hoisted_9$7 = { class: "button-wrap" };
const _hoisted_10$7 = /* @__PURE__ */ createTextVNode(" View Project ");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const wizard = useWizard();
    const validateStep = async () => {
      router.push({
        name: "navbar-layouts-projects-details"
      });
      wizard.reset();
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        _hoisted_2$9,
        createBaseVNode("div", _hoisted_3$9, [
          createBaseVNode("div", _hoisted_4$8, [
            _hoisted_5$8,
            _hoisted_6$8,
            _hoisted_7$8,
            _hoisted_8$8,
            createBaseVNode("div", _hoisted_9$7, [
              createVNode(_component_VButton, {
                color: "primary",
                rounded: "",
                bold: "",
                elevated: "",
                onClick: validateStep
              }, {
                default: withCtx(() => [
                  _hoisted_10$7
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$8 = { class: "step-content" };
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Make sure everything is good"),
  /* @__PURE__ */ createBaseVNode("p", null, "You can go back to previous steps if you need to edit anything.")
], -1);
const _hoisted_3$8 = { class: "project-preview-header" };
const _hoisted_4$7 = { class: "title is-4 is-narrow is-thin" };
const _hoisted_5$7 = { key: 0 };
const _hoisted_6$7 = { key: 1 };
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_8$7 = [
  _hoisted_7$7
];
const _hoisted_9$6 = { class: "project-preview-body" };
const _hoisted_10$6 = { class: "columns is-multiline" };
const _hoisted_11$6 = { class: "column is-12 is-tablet-100" };
const _hoisted_12$6 = { class: "edit-box" };
const _hoisted_13$6 = /* @__PURE__ */ createBaseVNode("h4", null, "Description", -1);
const _hoisted_14$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_15$4 = [
  _hoisted_14$5
];
const _hoisted_16$4 = { key: 0 };
const _hoisted_17$4 = { key: 1 };
const _hoisted_18$4 = { class: "column is-6 is-tablet-50" };
const _hoisted_19$4 = { class: "edit-box" };
const _hoisted_20$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_21$4 = [
  _hoisted_20$4
];
const _hoisted_22$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-vector-pen"
}, null, -1);
const _hoisted_23$4 = { class: "column is-6 is-tablet-50" };
const _hoisted_24$4 = { class: "edit-box" };
const _hoisted_25$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_26$4 = [
  _hoisted_25$4
];
const _hoisted_27$2 = {
  key: 1,
  class: "edit-box-placeholder is-media"
};
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("span", null, "No selected customer", -1);
const _hoisted_29$1 = [
  _hoisted_28$2
];
const _hoisted_30$1 = { class: "column is-4 is-tablet-33" };
const _hoisted_31$1 = { class: "edit-box" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = { class: "estimated-budget" };
const _hoisted_35 = { class: "inner-block" };
const _hoisted_36 = { class: "budget" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, "Estimated Budget", -1);
const _hoisted_38 = { class: "column is-4 is-tablet-33" };
const _hoisted_39 = { class: "edit-box" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_41 = [
  _hoisted_40
];
const _hoisted_42 = { class: "estimated-due-date" };
const _hoisted_43 = { class: "inner-block" };
const _hoisted_44 = { class: "date" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", null, "Estimated Due Date", -1);
const _hoisted_46 = { class: "column is-4 is-tablet-33" };
const _hoisted_47 = { class: "edit-box" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_49 = [
  _hoisted_48
];
const _hoisted_50 = { class: "attachments-count" };
const _hoisted_51 = { class: "inner-block" };
const _hoisted_52 = { class: "attachments" };
const _hoisted_53 = { key: 0 };
const _hoisted_54 = { key: 1 };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, "Attachments", -1);
const _hoisted_56 = { class: "column is-6 is-tablet-50" };
const _hoisted_57 = { class: "edit-box" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("h4", null, "Team", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_60 = [
  _hoisted_59
];
const _hoisted_61 = {
  key: 0,
  class: "edit-box-placeholder is-media"
};
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("span", null, "No selected teammate", -1);
const _hoisted_63 = [
  _hoisted_62
];
const _hoisted_64 = {
  key: 1,
  class: "media-list"
};
const _hoisted_65 = { class: "column is-6 is-tablet-50" };
const _hoisted_66 = { class: "edit-box" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("h4", null, "Tools", -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_69 = [
  _hoisted_68
];
const _hoisted_70 = {
  key: 0,
  class: "edit-box-placeholder is-list"
};
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("span", null, "No selected tools", -1);
const _hoisted_72 = [
  _hoisted_71
];
const _hoisted_73 = {
  key: 1,
  class: "media-list"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const wizard = useWizard();
    const capitalize = (string) => {
      return string.slice(0, 1).toUpperCase() + string.slice(1);
    };
    const projectInitial = computed(() => {
      return wizard.data.name.slice(0, 1).toUpperCase() || "P";
    });
    const formatedDueDate = computed(() => {
      return dayjs(wizard.data.timeFrame.end).format("MMM D, YYYY");
    });
    const projectPicture = ref("");
    watchEffect(async () => {
      try {
        projectPicture.value = await new Promise((resolve, reject) => {
          if (wizard.data.logo) {
            const reader = new FileReader();
            reader.readAsDataURL(wizard.data.logo);
            reader.onload = () => {
              var _a;
              return resolve(((_a = reader.result) == null ? void 0 : _a.toString()) || "");
            };
            reader.onerror = (error) => reject(error);
          } else {
            projectPicture.value = "";
          }
        });
      } catch (error) {
        projectPicture.value = "";
      }
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$b;
      const _component_VIconBox = _sfc_main$c;
      const _component_VBlock = _sfc_main$d;
      const _component_VLoader = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _hoisted_2$8,
        createVNode(_component_VLoader, {
          size: "xl",
          class: "project-preview-wrapper",
          active: unref(wizard).loading,
          grey: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$8, [
              createVNode(_component_VAvatar, {
                color: "h-green",
                size: "big",
                initials: unref(projectInitial),
                picture: projectPicture.value
              }, null, 8, ["initials", "picture"]),
              createBaseVNode("h3", _hoisted_4$7, [
                unref(wizard).data.name ? (openBlock(), createElementBlock("span", _hoisted_5$7, toDisplayString(unref(wizard).data.name), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$7, "Project Title Goes Here")),
                createBaseVNode("a", {
                  class: "edit-icon",
                  tabindex: "0",
                  onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(wizard).setStep(2), ["prevent"]), ["space"])),
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(wizard).setStep(2))
                }, _hoisted_8$7, 32)
              ])
            ]),
            createBaseVNode("div", _hoisted_9$6, [
              createBaseVNode("div", _hoisted_10$6, [
                createBaseVNode("div", _hoisted_11$6, [
                  createBaseVNode("div", _hoisted_12$6, [
                    _hoisted_13$6,
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(wizard).setStep(2), ["prevent"]), ["space"])),
                      onClick: _cache[3] || (_cache[3] = ($event) => unref(wizard).setStep(2))
                    }, _hoisted_15$4, 32),
                    unref(wizard).data.description ? (openBlock(), createElementBlock("p", _hoisted_16$4, toDisplayString(unref(wizard).data.description), 1)) : (openBlock(), createElementBlock("p", _hoisted_17$4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Tamen a proposito, inquam, aberramus. Deinde dolorem quem maximum? Quae duo sunt, unum facit. Quod vestri non item. "))
                  ])
                ]),
                createBaseVNode("div", _hoisted_18$4, [
                  createBaseVNode("div", _hoisted_19$4, [
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => unref(wizard).setStep(1), ["prevent"]), ["space"])),
                      onClick: _cache[5] || (_cache[5] = ($event) => unref(wizard).setStep(1))
                    }, _hoisted_21$4, 32),
                    createVNode(_component_VBlock, {
                      title: unref(wizard).data.relatedTo,
                      subtitle: "Project Type",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VIconBox, {
                          size: "medium",
                          color: "warning",
                          rounded: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_22$4
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_23$4, [
                  createBaseVNode("div", _hoisted_24$4, [
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => unref(wizard).setStep(3), ["prevent"]), ["space"])),
                      onClick: _cache[7] || (_cache[7] = ($event) => unref(wizard).setStep(3))
                    }, _hoisted_26$4, 32),
                    unref(wizard).data.customer ? (openBlock(), createBlock(_component_VBlock, {
                      key: 0,
                      title: unref(wizard).data.customer.name,
                      subtitle: "Project Customer",
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: unref(wizard).data.customer.logo
                        }, null, 8, ["picture"])
                      ]),
                      _: 1
                    }, 8, ["title"])) : (openBlock(), createElementBlock("div", _hoisted_27$2, _hoisted_29$1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_30$1, [
                  createBaseVNode("div", _hoisted_31$1, [
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => unref(wizard).setStep(3), ["prevent"]), ["space"])),
                      onClick: _cache[9] || (_cache[9] = ($event) => unref(wizard).setStep(3))
                    }, _hoisted_33, 32),
                    createBaseVNode("div", _hoisted_34, [
                      createBaseVNode("div", _hoisted_35, [
                        createBaseVNode("div", _hoisted_36, [
                          createBaseVNode("span", null, toDisplayString(unref(wizard).data.budget), 1)
                        ]),
                        _hoisted_37
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => unref(wizard).setStep(3), ["prevent"]), ["space"])),
                      onClick: _cache[11] || (_cache[11] = ($event) => unref(wizard).setStep(3))
                    }, _hoisted_41, 32),
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("div", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, [
                          createBaseVNode("span", null, toDisplayString(unref(formatedDueDate)), 1)
                        ]),
                        _hoisted_45
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => unref(wizard).setStep(4), ["prevent"]), ["space"])),
                      onClick: _cache[13] || (_cache[13] = ($event) => unref(wizard).setStep(4))
                    }, _hoisted_49, 32),
                    createBaseVNode("div", _hoisted_50, [
                      createBaseVNode("div", _hoisted_51, [
                        createBaseVNode("div", _hoisted_52, [
                          unref(wizard).data.attachments.length ? (openBlock(), createElementBlock("span", _hoisted_53, toDisplayString(unref(wizard).data.attachments.length), 1)) : (openBlock(), createElementBlock("span", _hoisted_54, "No"))
                        ]),
                        _hoisted_55
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  createBaseVNode("div", _hoisted_57, [
                    _hoisted_58,
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[14] || (_cache[14] = withKeys(withModifiers(($event) => unref(wizard).setStep(5), ["prevent"]), ["space"])),
                      onClick: _cache[15] || (_cache[15] = ($event) => unref(wizard).setStep(5))
                    }, _hoisted_60, 32),
                    unref(wizard).data.teammates.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_61, _hoisted_63)) : (openBlock(), createElementBlock("div", _hoisted_64, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(wizard).data.teammates, (teammate) => {
                        return openBlock(), createElementBlock("div", {
                          key: teammate.name,
                          class: "media-list-item"
                        }, [
                          createVNode(_component_VBlock, {
                            title: teammate.name,
                            subtitle: capitalize(teammate.role),
                            center: ""
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_VAvatar, {
                                picture: teammate.picture
                              }, null, 8, ["picture"])
                            ]),
                            _: 2
                          }, 1032, ["title", "subtitle"])
                        ]);
                      }), 128))
                    ]))
                  ])
                ]),
                createBaseVNode("div", _hoisted_65, [
                  createBaseVNode("div", _hoisted_66, [
                    _hoisted_67,
                    createBaseVNode("a", {
                      class: "edit-icon",
                      tabindex: "0",
                      onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => unref(wizard).setStep(6), ["prevent"]), ["space"])),
                      onClick: _cache[17] || (_cache[17] = ($event) => unref(wizard).setStep(6))
                    }, _hoisted_69, 32),
                    unref(wizard).data.tools.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_70, _hoisted_72)) : (openBlock(), createElementBlock("div", _hoisted_73, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(wizard).data.tools, (tool) => {
                        return openBlock(), createElementBlock("div", {
                          key: tool.name,
                          class: "media-list-item"
                        }, [
                          createVNode(_component_VBlock, {
                            title: tool.name,
                            subtitle: tool.description,
                            center: ""
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_VAvatar, {
                                picture: tool.logo
                              }, null, 8, ["picture"])
                            ]),
                            _: 2
                          }, 1032, ["title", "subtitle"])
                        ]);
                      }), 128))
                    ]))
                  ])
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["active"])
      ]);
    };
  }
});
const customers = [];
const users = [];
const tools = [];
const _hoisted_1$7 = { class: "step-content" };
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "What tools will you be using?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Choose a set of tools that you'll be using in this project.")
], -1);
const _hoisted_3$7 = { class: "tools-wrapper" };
const _hoisted_4$6 = { class: "columns is-multiline" };
const _hoisted_5$6 = { class: "tool-card" };
const _hoisted_6$6 = ["value"];
const _hoisted_7$6 = { class: "tool-card-inner" };
const _hoisted_8$6 = /* @__PURE__ */ createBaseVNode("div", { class: "checkmark" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const wizard = useWizard();
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$b;
      const _component_VBlock = _sfc_main$d;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        _hoisted_2$7,
        createBaseVNode("div", _hoisted_3$7, [
          createBaseVNode("div", _hoisted_4$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tools), (tool) => {
              return openBlock(), createElementBlock("div", {
                key: tool.name,
                class: "column is-4"
              }, [
                createBaseVNode("div", _hoisted_5$6, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(wizard).data.tools = $event),
                    type: "checkbox",
                    value: tool
                  }, null, 8, _hoisted_6$6), [
                    [vModelCheckbox, unref(wizard).data.tools]
                  ]),
                  createBaseVNode("div", _hoisted_7$6, [
                    createVNode(_component_VBlock, {
                      title: tool.name,
                      subtitle: tool.description,
                      center: ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: tool.logo
                        }, null, 8, ["picture"])
                      ]),
                      action: withCtx(() => [
                        _hoisted_8$6
                      ]),
                      _: 2
                    }, 1032, ["title", "subtitle"])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var _imports_0$2 = "/assets/team-placeholder.93d06b8a.svg";
const _hoisted_1$6 = { class: "step-content" };
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Who will be working on this project?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Start by adding members to your team")
], -1);
const _hoisted_3$6 = {
  key: 0,
  class: "page-placeholder is-people"
};
const _hoisted_4$5 = { class: "placeholder-content" };
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-rounded",
  src: _imports_0$2,
  alt: ""
}, null, -1);
const _hoisted_6$5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-rounded",
  src: _imports_0$2,
  alt: ""
}, null, -1);
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("h3", null, "Invite People", -1);
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("p", { class: "is-larger" }, " You can already start adding files to your project if you have them handy. But don't worry, you'll be able to add and manage files later. ", -1);
const _hoisted_9$5 = {
  key: 1,
  class: "project-team-wrapper"
};
const _hoisted_10$5 = { class: "project-team-header" };
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4 is-narrow is-thin" }, "Erik Kovalsky", -1);
const _hoisted_12$5 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "You are the project owner", -1);
const _hoisted_13$5 = { class: "project-team-body" };
const _hoisted_14$4 = { class: "members-list" };
const _hoisted_15$3 = { class: "actions" };
const _hoisted_16$3 = { class: "actions" };
const _hoisted_17$3 = { class: "permissions" };
const _hoisted_18$3 = { class: "permission-levels" };
const _hoisted_19$3 = ["onKeydown", "onClick"];
const _hoisted_20$3 = ["onKeydown", "onClick"];
const _hoisted_21$3 = ["onKeydown", "onClick"];
const _hoisted_22$3 = ["onKeydown", "onClick"];
const _hoisted_23$3 = ["value"];
const _hoisted_24$3 = {
  key: 2,
  class: "empty-wrap has-text-centered"
};
const _hoisted_25$3 = /* @__PURE__ */ createBaseVNode("span", null, "No team members yet", -1);
const _hoisted_26$3 = [
  _hoisted_25$3
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const search = ref("");
    const isAddingMembers = ref(false);
    const filteredUsers = ref([]);
    const wizard = useWizard();
    const addTeammate = (teammate) => {
      wizard.data.teammates.push(__spreadProps(__spreadValues({}, teammate), {
        role: "reader"
      }));
      search.value = "";
    };
    const setTeammateRole = (teammate, role) => {
      const index = wizard.data.teammates.findIndex((item) => {
        return item.name === teammate.name;
      });
      if (index > -1) {
        wizard.data.teammates[index].role = role;
      }
    };
    const removeTeammate = (teammate) => {
      const index = wizard.data.teammates.findIndex((item) => {
        return item.name === teammate.name;
      });
      if (index > -1) {
        wizard.data.teammates.splice(index, 1);
      }
    };
    const getRoleLevel = (teammate) => {
      switch (teammate.role) {
        case "collaborator":
          return 1;
        case "manager":
          return 2;
        case "owner":
          return 3;
        case "reader":
        default:
          return 0;
      }
    };
    watchEffect(() => {
      if (!search.value) {
        filteredUsers.value = [];
        return;
      }
      filteredUsers.value = users.filter((item) => {
        return !wizard.data.teammates.find((_item) => {
          return item.name === _item.name;
        });
      }).filter((item) => item.name.match(new RegExp(search.value, "i")));
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$f;
      const _component_VAvatar = _sfc_main$b;
      const _component_VIconButton = _sfc_main$g;
      const _component_VBlock = _sfc_main$d;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _hoisted_2$6,
        !isAddingMembers.value ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
          createBaseVNode("div", _hoisted_4$5, [
            _hoisted_5$5,
            _hoisted_6$5,
            _hoisted_7$5,
            _hoisted_8$5,
            createBaseVNode("a", {
              class: "action-link toggle-members-link",
              tabindex: "0",
              onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isAddingMembers.value = true, ["prevent"]), ["space"])),
              onClick: _cache[1] || (_cache[1] = ($event) => isAddingMembers.value = true)
            }, " Add Members ", 32)
          ])
        ])) : createCommentVNode("", true),
        isAddingMembers.value ? (openBlock(), createElementBlock("div", _hoisted_9$5, [
          createBaseVNode("div", _hoisted_10$5, [
            _hoisted_11$5,
            _hoisted_12$5,
            createVNode(_component_VField, { class: "mt-4" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.value = $event),
                      class: "input",
                      placeholder: "Search teammates..."
                    }, null, 512), [
                      [vModelText, search.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_13$5, [
            createBaseVNode("div", _hoisted_14$4, [
              filteredUsers.value.length > 0 ? (openBlock(), createBlock(TransitionGroup, {
                key: 0,
                name: "list",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filteredUsers.value, (teammate) => {
                    return openBlock(), createBlock(_component_VBlock, {
                      key: teammate.name,
                      class: "invited-member",
                      title: "Invite",
                      subtitle: teammate.name
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: teammate.picture
                        }, null, 8, ["picture"])
                      ]),
                      action: withCtx(() => [
                        createBaseVNode("div", _hoisted_15$3, [
                          createVNode(_component_VIconButton, {
                            icon: "fas fa-plus",
                            class: "cancel-button hint--top hint--bubble hint--primary",
                            "aria-label": `Invite ${teammate.name}`,
                            circle: "",
                            onClick: ($event) => addTeammate(teammate)
                          }, null, 8, ["aria-label", "onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["subtitle"]);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(wizard).data.teammates.length > 0 ? (openBlock(), createBlock(TransitionGroup, {
                key: 1,
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(wizard).data.teammates, (teammate) => {
                    return openBlock(), createBlock(_component_VBlock, {
                      key: teammate.name,
                      class: "invited-member",
                      title: "Invited",
                      subtitle: teammate.name
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: teammate.picture
                        }, null, 8, ["picture"])
                      ]),
                      action: withCtx(() => [
                        createBaseVNode("div", _hoisted_16$3, [
                          createBaseVNode("div", _hoisted_17$3, [
                            createBaseVNode("div", _hoisted_18$3, [
                              createBaseVNode("div", {
                                class: "permission-level hint--bubble hint--primary hint--top",
                                "aria-label": "Reader",
                                tabindex: "0",
                                onKeydown: withKeys(withModifiers(($event) => setTeammateRole(teammate, "reader"), ["prevent"]), ["space"]),
                                onClick: ($event) => setTeammateRole(teammate, "reader")
                              }, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["permission-level-inner", [getRoleLevel(teammate) >= 0 && "is-active"]])
                                }, null, 2)
                              ], 40, _hoisted_19$3),
                              createBaseVNode("div", {
                                class: "permission-level hint--bubble hint--primary hint--top",
                                "aria-label": "Collaborator",
                                tabindex: "0",
                                onKeydown: withKeys(withModifiers(($event) => setTeammateRole(teammate, "collaborator"), ["prevent"]), ["space"]),
                                onClick: ($event) => setTeammateRole(teammate, "collaborator")
                              }, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["permission-level-inner", [getRoleLevel(teammate) >= 1 && "is-active"]])
                                }, null, 2)
                              ], 40, _hoisted_20$3),
                              createBaseVNode("div", {
                                class: "permission-level hint--bubble hint--primary hint--top",
                                "aria-label": "Manager",
                                tabindex: "0",
                                onKeydown: withKeys(withModifiers(($event) => setTeammateRole(teammate, "manager"), ["prevent"]), ["space"]),
                                onClick: ($event) => setTeammateRole(teammate, "manager")
                              }, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["permission-level-inner", [getRoleLevel(teammate) >= 2 && "is-active"]])
                                }, null, 2)
                              ], 40, _hoisted_21$3),
                              createBaseVNode("div", {
                                class: "permission-level hint--bubble hint--primary hint--top",
                                "aria-label": "Owner",
                                tabindex: "0",
                                onKeydown: withKeys(withModifiers(($event) => setTeammateRole(teammate, "owner"), ["prevent"]), ["space"]),
                                onClick: ($event) => setTeammateRole(teammate, "owner")
                              }, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["permission-level-inner", [getRoleLevel(teammate) >= 3 && "is-active"]])
                                }, null, 2)
                              ], 40, _hoisted_22$3),
                              createBaseVNode("progress", {
                                class: "progress permissions-progress is-primary is-tiny",
                                value: getRoleLevel(teammate),
                                max: 3
                              }, " 0% ", 8, _hoisted_23$3)
                            ])
                          ]),
                          createVNode(_component_VIconButton, {
                            icon: "fas fa-times",
                            class: "cancel-button hint--top hint--bubble hint--primary",
                            "aria-label": "Cancel Invite",
                            circle: "",
                            onClick: ($event) => removeTeammate(teammate)
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["subtitle"]);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createElementBlock("div", _hoisted_24$3, _hoisted_26$3))
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var _imports_0$1 = "/assets/upload-placeholder.d69a513e.svg";
var objectExtend = extend;
function extend() {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == "boolean") {
    deep = args.shift();
  }
  var result = args[0];
  if (isUnextendable(result)) {
    throw new Error("extendee must be an object");
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(true, Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key]) ? result[key] : base, value);
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}
function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
}
function isUnextendable(val) {
  return !val || typeof val != "object" && typeof val != "function";
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
class $4040acfd8584338d$export$2e2bcd8739ae039 {
  on(event, fn) {
    this._callbacks = this._callbacks || {};
    if (!this._callbacks[event])
      this._callbacks[event] = [];
    this._callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    this._callbacks = this._callbacks || {};
    let callbacks = this._callbacks[event];
    if (callbacks)
      for (let callback of callbacks)
        callback.apply(this, args);
    if (this.element)
      this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
        args
      }));
    return this;
  }
  makeEvent(eventName, detail) {
    let params = {
      bubbles: true,
      cancelable: true,
      detail
    };
    if (typeof window.CustomEvent === "function")
      return new CustomEvent(eventName, params);
    else {
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
  }
  off(event, fn) {
    if (!this._callbacks || arguments.length === 0) {
      this._callbacks = {};
      return this;
    }
    let callbacks = this._callbacks[event];
    if (!callbacks)
      return this;
    if (arguments.length === 1) {
      delete this._callbacks[event];
      return this;
    }
    for (let i = 0; i < callbacks.length; i++) {
      let callback = callbacks[i];
      if (callback === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  }
}
var $fd6031f88dce2e32$exports = {};
$fd6031f88dce2e32$exports = '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail=""></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size=""></span></div>\n    <div class="dz-filename"><span data-dz-name=""></span></div>\n  </div>\n  <div class="dz-progress">\n    <span class="dz-upload" data-dz-uploadprogress=""></span>\n  </div>\n  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>\n  <div class="dz-success-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>\n    </svg>\n  </div>\n</div>\n';
let $4ca367182776f80b$var$defaultOptions = {
  url: null,
  method: "post",
  withCredentials: false,
  timeout: null,
  parallelUploads: 2,
  uploadMultiple: false,
  chunking: false,
  forceChunking: false,
  chunkSize: 2097152,
  parallelChunkUploads: false,
  retryChunks: false,
  retryChunksLimit: 3,
  maxFilesize: 256,
  paramName: "file",
  createImageThumbnails: true,
  maxThumbnailFilesize: 10,
  thumbnailWidth: 120,
  thumbnailHeight: 120,
  thumbnailMethod: "crop",
  resizeWidth: null,
  resizeHeight: null,
  resizeMimeType: null,
  resizeQuality: 0.8,
  resizeMethod: "contain",
  filesizeBase: 1e3,
  maxFiles: null,
  headers: null,
  defaultHeaders: true,
  clickable: true,
  ignoreHiddenFiles: true,
  acceptedFiles: null,
  acceptedMimeTypes: null,
  autoProcessQueue: true,
  autoQueue: true,
  addRemoveLinks: false,
  previewsContainer: null,
  disablePreviews: false,
  hiddenInputContainer: "body",
  capture: null,
  renameFilename: null,
  renameFile: null,
  forceFallback: false,
  dictDefaultMessage: "Drop files here to upload",
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
  dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
  dictInvalidFileType: "You can't upload files of this type.",
  dictResponseError: "Server responded with {{statusCode}} code.",
  dictCancelUpload: "Cancel upload",
  dictUploadCanceled: "Upload canceled.",
  dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
  dictRemoveFile: "Remove file",
  dictRemoveFileConfirmation: null,
  dictMaxFilesExceeded: "You can not upload any more files.",
  dictFileSizeUnits: {
    tb: "TB",
    gb: "GB",
    mb: "MB",
    kb: "KB",
    b: "b"
  },
  init() {
  },
  params(files, xhr, chunk) {
    if (chunk)
      return {
        dzuuid: chunk.file.upload.uuid,
        dzchunkindex: chunk.index,
        dztotalfilesize: chunk.file.size,
        dzchunksize: this.options.chunkSize,
        dztotalchunkcount: chunk.file.upload.totalChunkCount,
        dzchunkbyteoffset: chunk.index * this.options.chunkSize
      };
  },
  accept(file, done) {
    return done();
  },
  chunksUploaded: function(file, done) {
    done();
  },
  binaryBody: false,
  fallback() {
    let messageElement;
    this.element.className = `${this.element.className} dz-browser-not-supported`;
    for (let child of this.element.getElementsByTagName("div"))
      if (/(^| )dz-message($| )/.test(child.className)) {
        messageElement = child;
        child.className = "dz-message";
        break;
      }
    if (!messageElement) {
      messageElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement('<div class="dz-message"><span></span></div>');
      this.element.appendChild(messageElement);
    }
    let span = messageElement.getElementsByTagName("span")[0];
    if (span) {
      if (span.textContent != null)
        span.textContent = this.options.dictFallbackMessage;
      else if (span.innerText != null)
        span.innerText = this.options.dictFallbackMessage;
    }
    return this.element.appendChild(this.getFallbackForm());
  },
  resize(file, width, height, resizeMethod) {
    let info = {
      srcX: 0,
      srcY: 0,
      srcWidth: file.width,
      srcHeight: file.height
    };
    let srcRatio = file.width / file.height;
    if (width == null && height == null) {
      width = info.srcWidth;
      height = info.srcHeight;
    } else if (width == null)
      width = height * srcRatio;
    else if (height == null)
      height = width / srcRatio;
    width = Math.min(width, info.srcWidth);
    height = Math.min(height, info.srcHeight);
    let trgRatio = width / height;
    if (info.srcWidth > width || info.srcHeight > height) {
      if (resizeMethod === "crop") {
        if (srcRatio > trgRatio) {
          info.srcHeight = file.height;
          info.srcWidth = info.srcHeight * trgRatio;
        } else {
          info.srcWidth = file.width;
          info.srcHeight = info.srcWidth / trgRatio;
        }
      } else if (resizeMethod === "contain") {
        if (srcRatio > trgRatio)
          height = width / srcRatio;
        else
          width = height * srcRatio;
      } else
        throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
    }
    info.srcX = (file.width - info.srcWidth) / 2;
    info.srcY = (file.height - info.srcHeight) / 2;
    info.trgWidth = width;
    info.trgHeight = height;
    return info;
  },
  transformFile(file, done) {
    if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/))
      return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
    else
      return done(file);
  },
  previewTemplate: /* @__PURE__ */ $parcel$interopDefault($fd6031f88dce2e32$exports),
  drop(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragstart(e) {
  },
  dragend(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragenter(e) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragover(e) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragleave(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  paste(e) {
  },
  reset() {
    return this.element.classList.remove("dz-started");
  },
  addedfile(file) {
    if (this.element === this.previewsContainer)
      this.element.classList.add("dz-started");
    if (this.previewsContainer && !this.options.disablePreviews) {
      file.previewElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(this.options.previewTemplate.trim());
      file.previewTemplate = file.previewElement;
      this.previewsContainer.appendChild(file.previewElement);
      for (var node of file.previewElement.querySelectorAll("[data-dz-name]"))
        node.textContent = file.name;
      for (node of file.previewElement.querySelectorAll("[data-dz-size]"))
        node.innerHTML = this.filesize(file.size);
      if (this.options.addRemoveLinks) {
        file._removeLink = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
        file.previewElement.appendChild(file._removeLink);
      }
      let removeFileEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING)
          return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictCancelUploadConfirmation, () => this.removeFile(file));
        else {
          if (this.options.dictRemoveFileConfirmation)
            return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictRemoveFileConfirmation, () => this.removeFile(file));
          else
            return this.removeFile(file);
        }
      };
      for (let removeLink of file.previewElement.querySelectorAll("[data-dz-remove]"))
        removeLink.addEventListener("click", removeFileEvent);
    }
  },
  removedfile(file) {
    if (file.previewElement != null && file.previewElement.parentNode != null)
      file.previewElement.parentNode.removeChild(file.previewElement);
    return this._updateMaxFilesReachedClass();
  },
  thumbnail(file, dataUrl) {
    if (file.previewElement) {
      file.previewElement.classList.remove("dz-file-preview");
      for (let thumbnailElement of file.previewElement.querySelectorAll("[data-dz-thumbnail]")) {
        thumbnailElement.alt = file.name;
        thumbnailElement.src = dataUrl;
      }
      return setTimeout(() => file.previewElement.classList.add("dz-image-preview"), 1);
    }
  },
  error(file, message) {
    if (file.previewElement) {
      file.previewElement.classList.add("dz-error");
      if (typeof message !== "string" && message.error)
        message = message.error;
      for (let node of file.previewElement.querySelectorAll("[data-dz-errormessage]"))
        node.textContent = message;
    }
  },
  errormultiple() {
  },
  processing(file) {
    if (file.previewElement) {
      file.previewElement.classList.add("dz-processing");
      if (file._removeLink)
        return file._removeLink.innerHTML = this.options.dictCancelUpload;
    }
  },
  processingmultiple() {
  },
  uploadprogress(file, progress, bytesSent) {
    if (file.previewElement)
      for (let node of file.previewElement.querySelectorAll("[data-dz-uploadprogress]"))
        node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = `${progress}%`;
  },
  totaluploadprogress() {
  },
  sending() {
  },
  sendingmultiple() {
  },
  success(file) {
    if (file.previewElement)
      return file.previewElement.classList.add("dz-success");
  },
  successmultiple() {
  },
  canceled(file) {
    return this.emit("error", file, this.options.dictUploadCanceled);
  },
  canceledmultiple() {
  },
  complete(file) {
    if (file._removeLink)
      file._removeLink.innerHTML = this.options.dictRemoveFile;
    if (file.previewElement)
      return file.previewElement.classList.add("dz-complete");
  },
  completemultiple() {
  },
  maxfilesexceeded() {
  },
  maxfilesreached() {
  },
  queuecomplete() {
  },
  addedfiles() {
  }
};
var $4ca367182776f80b$export$2e2bcd8739ae039 = $4ca367182776f80b$var$defaultOptions;
class $3ed269f2f0fb224b$export$2e2bcd8739ae039 extends $4040acfd8584338d$export$2e2bcd8739ae039 {
  static initClass() {
    this.prototype.Emitter = $4040acfd8584338d$export$2e2bcd8739ae039;
    this.prototype.events = [
      "drop",
      "dragstart",
      "dragend",
      "dragenter",
      "dragover",
      "dragleave",
      "addedfile",
      "addedfiles",
      "removedfile",
      "thumbnail",
      "error",
      "errormultiple",
      "processing",
      "processingmultiple",
      "uploadprogress",
      "totaluploadprogress",
      "sending",
      "sendingmultiple",
      "success",
      "successmultiple",
      "canceled",
      "canceledmultiple",
      "complete",
      "completemultiple",
      "reset",
      "maxfilesexceeded",
      "maxfilesreached",
      "queuecomplete"
    ];
    this.prototype._thumbnailQueue = [];
    this.prototype._processingThumbnail = false;
  }
  getAcceptedFiles() {
    return this.files.filter((file) => file.accepted).map((file) => file);
  }
  getRejectedFiles() {
    return this.files.filter((file) => !file.accepted).map((file) => file);
  }
  getFilesWithStatus(status) {
    return this.files.filter((file) => file.status === status).map((file) => file);
  }
  getQueuedFiles() {
    return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED);
  }
  getUploadingFiles() {
    return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING);
  }
  getAddedFiles() {
    return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED);
  }
  getActiveFiles() {
    return this.files.filter((file) => file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED).map((file) => file);
  }
  init() {
    if (this.element.tagName === "form")
      this.element.setAttribute("enctype", "multipart/form-data");
    if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message"))
      this.element.appendChild($3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
    if (this.clickableElements.length) {
      let setupHiddenFileInput = () => {
        if (this.hiddenFileInput)
          this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = document.createElement("input");
        this.hiddenFileInput.setAttribute("type", "file");
        if (this.options.maxFiles === null || this.options.maxFiles > 1)
          this.hiddenFileInput.setAttribute("multiple", "multiple");
        this.hiddenFileInput.className = "dz-hidden-input";
        if (this.options.acceptedFiles !== null)
          this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
        if (this.options.capture !== null)
          this.hiddenFileInput.setAttribute("capture", this.options.capture);
        this.hiddenFileInput.setAttribute("tabindex", "-1");
        this.hiddenFileInput.style.visibility = "hidden";
        this.hiddenFileInput.style.position = "absolute";
        this.hiddenFileInput.style.top = "0";
        this.hiddenFileInput.style.left = "0";
        this.hiddenFileInput.style.height = "0";
        this.hiddenFileInput.style.width = "0";
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
        this.hiddenFileInput.addEventListener("change", () => {
          let { files } = this.hiddenFileInput;
          if (files.length)
            for (let file of files)
              this.addFile(file);
          this.emit("addedfiles", files);
          setupHiddenFileInput();
        });
      };
      setupHiddenFileInput();
    }
    this.URL = window.URL !== null ? window.URL : window.webkitURL;
    for (let eventName of this.events)
      this.on(eventName, this.options[eventName]);
    this.on("uploadprogress", () => this.updateTotalUploadProgress());
    this.on("removedfile", () => this.updateTotalUploadProgress());
    this.on("canceled", (file) => this.emit("complete", file));
    this.on("complete", (file) => {
      if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0)
        return setTimeout(() => this.emit("queuecomplete"), 0);
    });
    const containsFiles = function(e) {
      if (e.dataTransfer.types)
        for (var i = 0; i < e.dataTransfer.types.length; i++) {
          if (e.dataTransfer.types[i] === "Files")
            return true;
        }
      return false;
    };
    let noPropagation = function(e) {
      if (!containsFiles(e))
        return;
      e.stopPropagation();
      if (e.preventDefault)
        return e.preventDefault();
      else
        return e.returnValue = false;
    };
    this.listeners = [
      {
        element: this.element,
        events: {
          dragstart: (e) => {
            return this.emit("dragstart", e);
          },
          dragenter: (e) => {
            noPropagation(e);
            return this.emit("dragenter", e);
          },
          dragover: (e) => {
            let efct;
            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {
            }
            e.dataTransfer.dropEffect = efct === "move" || efct === "linkMove" ? "move" : "copy";
            noPropagation(e);
            return this.emit("dragover", e);
          },
          dragleave: (e) => {
            return this.emit("dragleave", e);
          },
          drop: (e) => {
            noPropagation(e);
            return this.drop(e);
          },
          dragend: (e) => {
            return this.emit("dragend", e);
          }
        }
      }
    ];
    this.clickableElements.forEach((clickableElement) => {
      return this.listeners.push({
        element: clickableElement,
        events: {
          click: (evt) => {
            if (clickableElement !== this.element || evt.target === this.element || $3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside(evt.target, this.element.querySelector(".dz-message")))
              this.hiddenFileInput.click();
            return true;
          }
        }
      });
    });
    this.enable();
    return this.options.init.call(this);
  }
  destroy() {
    this.disable();
    this.removeAllFiles(true);
    if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : void 0) {
      this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
      this.hiddenFileInput = null;
    }
    delete this.element.dropzone;
    return $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.splice($3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.indexOf(this), 1);
  }
  updateTotalUploadProgress() {
    let totalUploadProgress;
    let totalBytesSent = 0;
    let totalBytes = 0;
    let activeFiles = this.getActiveFiles();
    if (activeFiles.length) {
      for (let file of this.getActiveFiles()) {
        totalBytesSent += file.upload.bytesSent;
        totalBytes += file.upload.total;
      }
      totalUploadProgress = 100 * totalBytesSent / totalBytes;
    } else
      totalUploadProgress = 100;
    return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
  }
  _getParamName(n) {
    if (typeof this.options.paramName === "function")
      return this.options.paramName(n);
    else
      return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ""}`;
  }
  _renameFile(file) {
    if (typeof this.options.renameFile !== "function")
      return file.name;
    return this.options.renameFile(file);
  }
  getFallbackForm() {
    let existingFallback, form;
    if (existingFallback = this.getExistingFallback())
      return existingFallback;
    let fieldsString = '<div class="dz-fallback">';
    if (this.options.dictFallbackText)
      fieldsString += `<p>${this.options.dictFallbackText}</p>`;
    fieldsString += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : void 0} /><input type="submit" value="Upload!"></div>`;
    let fields = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(fieldsString);
    if (this.element.tagName !== "FORM") {
      form = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
      form.appendChild(fields);
    } else {
      this.element.setAttribute("enctype", "multipart/form-data");
      this.element.setAttribute("method", this.options.method);
    }
    return form != null ? form : fields;
  }
  getExistingFallback() {
    let getFallback = function(elements) {
      for (let el of elements) {
        if (/(^| )fallback($| )/.test(el.className))
          return el;
      }
    };
    for (let tagName of [
      "div",
      "form"
    ]) {
      var fallback;
      if (fallback = getFallback(this.element.getElementsByTagName(tagName)))
        return fallback;
    }
  }
  setupEventListeners() {
    return this.listeners.map((elementListeners) => (() => {
      let result = [];
      for (let event in elementListeners.events) {
        let listener = elementListeners.events[event];
        result.push(elementListeners.element.addEventListener(event, listener, false));
      }
      return result;
    })());
  }
  removeEventListeners() {
    return this.listeners.map((elementListeners) => (() => {
      let result = [];
      for (let event in elementListeners.events) {
        let listener = elementListeners.events[event];
        result.push(elementListeners.element.removeEventListener(event, listener, false));
      }
      return result;
    })());
  }
  disable() {
    this.clickableElements.forEach((element) => element.classList.remove("dz-clickable"));
    this.removeEventListeners();
    this.disabled = true;
    return this.files.map((file) => this.cancelUpload(file));
  }
  enable() {
    delete this.disabled;
    this.clickableElements.forEach((element) => element.classList.add("dz-clickable"));
    return this.setupEventListeners();
  }
  filesize(size) {
    let selectedSize = 0;
    let selectedUnit = "b";
    if (size > 0) {
      let units = [
        "tb",
        "gb",
        "mb",
        "kb",
        "b"
      ];
      for (let i = 0; i < units.length; i++) {
        let unit = units[i];
        let cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
        if (size >= cutoff) {
          selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
          selectedUnit = unit;
          break;
        }
      }
      selectedSize = Math.round(10 * selectedSize) / 10;
    }
    return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
  }
  _updateMaxFilesReachedClass() {
    if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
      if (this.getAcceptedFiles().length === this.options.maxFiles)
        this.emit("maxfilesreached", this.files);
      return this.element.classList.add("dz-max-files-reached");
    } else
      return this.element.classList.remove("dz-max-files-reached");
  }
  drop(e) {
    if (!e.dataTransfer)
      return;
    this.emit("drop", e);
    let files = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++)
      files[i] = e.dataTransfer.files[i];
    if (files.length) {
      let { items } = e.dataTransfer;
      if (items && items.length && items[0].webkitGetAsEntry != null)
        this._addFilesFromItems(items);
      else
        this.handleFiles(files);
    }
    this.emit("addedfiles", files);
  }
  paste(e) {
    if ($3ed269f2f0fb224b$var$__guard__(e != null ? e.clipboardData : void 0, (x) => x.items) == null)
      return;
    this.emit("paste", e);
    let { items } = e.clipboardData;
    if (items.length)
      return this._addFilesFromItems(items);
  }
  handleFiles(files) {
    for (let file of files)
      this.addFile(file);
  }
  _addFilesFromItems(items) {
    return (() => {
      let result = [];
      for (let item of items) {
        var entry;
        if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile)
            result.push(this.addFile(item.getAsFile()));
          else if (entry.isDirectory)
            result.push(this._addFilesFromDirectory(entry, entry.name));
          else
            result.push(void 0);
        } else if (item.getAsFile != null) {
          if (item.kind == null || item.kind === "file")
            result.push(this.addFile(item.getAsFile()));
          else
            result.push(void 0);
        } else
          result.push(void 0);
      }
      return result;
    })();
  }
  _addFilesFromDirectory(directory, path) {
    let dirReader = directory.createReader();
    let errorHandler = (error) => $3ed269f2f0fb224b$var$__guardMethod__(console, "log", (o) => o.log(error));
    var readEntries = () => {
      return dirReader.readEntries((entries) => {
        if (entries.length > 0) {
          for (let entry of entries) {
            if (entry.isFile)
              entry.file((file) => {
                if (this.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".")
                  return;
                file.fullPath = `${path}/${file.name}`;
                return this.addFile(file);
              });
            else if (entry.isDirectory)
              this._addFilesFromDirectory(entry, `${path}/${entry.name}`);
          }
          readEntries();
        }
        return null;
      }, errorHandler);
    };
    return readEntries();
  }
  accept(file, done) {
    if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576)
      done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
    else if (!$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile(file, this.options.acceptedFiles))
      done(this.options.dictInvalidFileType);
    else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
      done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
      this.emit("maxfilesexceeded", file);
    } else
      this.options.accept.call(this, file, done);
  }
  addFile(file) {
    file.upload = {
      uuid: $3ed269f2f0fb224b$export$2e2bcd8739ae039.uuidv4(),
      progress: 0,
      total: file.size,
      bytesSent: 0,
      filename: this._renameFile(file)
    };
    this.files.push(file);
    file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED;
    this.emit("addedfile", file);
    this._enqueueThumbnail(file);
    this.accept(file, (error) => {
      if (error) {
        file.accepted = false;
        this._errorProcessing([
          file
        ], error);
      } else {
        file.accepted = true;
        if (this.options.autoQueue)
          this.enqueueFile(file);
      }
      this._updateMaxFilesReachedClass();
    });
  }
  enqueueFiles(files) {
    for (let file of files)
      this.enqueueFile(file);
    return null;
  }
  enqueueFile(file) {
    if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED && file.accepted === true) {
      file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
      if (this.options.autoProcessQueue)
        return setTimeout(() => this.processQueue(), 0);
    } else
      throw new Error("This file can't be queued because it has already been processed or was rejected.");
  }
  _enqueueThumbnail(file) {
    if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
      this._thumbnailQueue.push(file);
      return setTimeout(() => this._processThumbnailQueue(), 0);
    }
  }
  _processThumbnailQueue() {
    if (this._processingThumbnail || this._thumbnailQueue.length === 0)
      return;
    this._processingThumbnail = true;
    let file = this._thumbnailQueue.shift();
    return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (dataUrl) => {
      this.emit("thumbnail", file, dataUrl);
      this._processingThumbnail = false;
      return this._processThumbnailQueue();
    });
  }
  removeFile(file) {
    if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING)
      this.cancelUpload(file);
    this.files = $3ed269f2f0fb224b$var$without(this.files, file);
    this.emit("removedfile", file);
    if (this.files.length === 0)
      return this.emit("reset");
  }
  removeAllFiles(cancelIfNecessary) {
    if (cancelIfNecessary == null)
      cancelIfNecessary = false;
    for (let file of this.files.slice())
      if (file.status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || cancelIfNecessary)
        this.removeFile(file);
    return null;
  }
  resizeImage(file, width, height, resizeMethod, callback) {
    return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas) => {
      if (canvas == null)
        return callback(file);
      else {
        let { resizeMimeType } = this.options;
        if (resizeMimeType == null)
          resizeMimeType = file.type;
        let resizedDataURL = canvas.toDataURL(resizeMimeType, this.options.resizeQuality);
        if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg")
          resizedDataURL = $3ed269f2f0fb224b$var$ExifRestore.restore(file.dataURL, resizedDataURL);
        return callback($3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob(resizedDataURL));
      }
    });
  }
  createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      file.dataURL = fileReader.result;
      if (file.type === "image/svg+xml") {
        if (callback != null)
          callback(fileReader.result);
        return;
      }
      this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
    };
    fileReader.readAsDataURL(file);
  }
  displayExistingFile(mockFile, imageUrl, callback, crossOrigin, resizeThumbnail = true) {
    this.emit("addedfile", mockFile);
    this.emit("complete", mockFile);
    if (!resizeThumbnail) {
      this.emit("thumbnail", mockFile, imageUrl);
      if (callback)
        callback();
    } else {
      let onDone = (thumbnail) => {
        this.emit("thumbnail", mockFile, thumbnail);
        if (callback)
          callback();
      };
      mockFile.dataURL = imageUrl;
      this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
    }
  }
  createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
    let img = document.createElement("img");
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
    img.onload = () => {
      let loadExif = (callback2) => callback2(1);
      if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation)
        loadExif = (callback2) => EXIF.getData(img, function() {
          return callback2(EXIF.getTag(this, "Orientation"));
        });
      return loadExif((orientation) => {
        file.width = img.width;
        file.height = img.height;
        let resizeInfo = this.options.resize.call(this, file, width, height, resizeMethod);
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = resizeInfo.trgWidth;
        canvas.height = resizeInfo.trgHeight;
        if (orientation > 4) {
          canvas.width = resizeInfo.trgHeight;
          canvas.height = resizeInfo.trgWidth;
        }
        switch (orientation) {
          case 2:
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            break;
          case 3:
            ctx.translate(canvas.width, canvas.height);
            ctx.rotate(Math.PI);
            break;
          case 4:
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
            break;
          case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
          case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -canvas.width);
            break;
          case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(canvas.height, -canvas.width);
            ctx.scale(-1, 1);
            break;
          case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-canvas.height, 0);
            break;
        }
        $3ed269f2f0fb224b$var$drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
        let thumbnail = canvas.toDataURL("image/png");
        if (callback != null)
          return callback(thumbnail, canvas);
      });
    };
    if (callback != null)
      img.onerror = callback;
    return img.src = file.dataURL;
  }
  processQueue() {
    let { parallelUploads } = this.options;
    let processingLength = this.getUploadingFiles().length;
    let i = processingLength;
    if (processingLength >= parallelUploads)
      return;
    let queuedFiles = this.getQueuedFiles();
    if (!(queuedFiles.length > 0))
      return;
    if (this.options.uploadMultiple)
      return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
    else
      while (i < parallelUploads) {
        if (!queuedFiles.length)
          return;
        this.processFile(queuedFiles.shift());
        i++;
      }
  }
  processFile(file) {
    return this.processFiles([
      file
    ]);
  }
  processFiles(files) {
    for (let file of files) {
      file.processing = true;
      file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
      this.emit("processing", file);
    }
    if (this.options.uploadMultiple)
      this.emit("processingmultiple", files);
    return this.uploadFiles(files);
  }
  _getFilesWithXhr(xhr) {
    return this.files.filter((file) => file.xhr === xhr).map((file) => file);
  }
  cancelUpload(file) {
    if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) {
      let groupedFiles = this._getFilesWithXhr(file.xhr);
      for (let groupedFile of groupedFiles)
        groupedFile.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
      if (typeof file.xhr !== "undefined")
        file.xhr.abort();
      for (let groupedFile1 of groupedFiles)
        this.emit("canceled", groupedFile1);
      if (this.options.uploadMultiple)
        this.emit("canceledmultiple", groupedFiles);
    } else if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED) {
      file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
      this.emit("canceled", file);
      if (this.options.uploadMultiple)
        this.emit("canceledmultiple", [
          file
        ]);
    }
    if (this.options.autoProcessQueue)
      return this.processQueue();
  }
  resolveOption(option, ...args) {
    if (typeof option === "function")
      return option.apply(this, args);
    return option;
  }
  uploadFile(file) {
    return this.uploadFiles([
      file
    ]);
  }
  uploadFiles(files) {
    this._transformFiles(files, (transformedFiles) => {
      if (this.options.chunking) {
        let transformedFile = transformedFiles[0];
        files[0].upload.chunked = this.options.chunking && (this.options.forceChunking || transformedFile.size > this.options.chunkSize);
        files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / this.options.chunkSize);
      }
      if (files[0].upload.chunked) {
        let file = files[0];
        let transformedFile = transformedFiles[0];
        file.upload.chunks = [];
        let handleNextChunk = () => {
          let chunkIndex = 0;
          while (file.upload.chunks[chunkIndex] !== void 0)
            chunkIndex++;
          if (chunkIndex >= file.upload.totalChunkCount)
            return;
          let start = chunkIndex * this.options.chunkSize;
          let end = Math.min(start + this.options.chunkSize, transformedFile.size);
          let dataBlock = {
            name: this._getParamName(0),
            data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
            filename: file.upload.filename,
            chunkIndex
          };
          file.upload.chunks[chunkIndex] = {
            file,
            index: chunkIndex,
            dataBlock,
            status: $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING,
            progress: 0,
            retries: 0
          };
          this._uploadData(files, [
            dataBlock
          ]);
        };
        file.upload.finishedChunkUpload = (chunk, response) => {
          let allFinished = true;
          chunk.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
          chunk.dataBlock = null;
          chunk.response = chunk.xhr.responseText;
          chunk.responseHeaders = chunk.xhr.getAllResponseHeaders();
          chunk.xhr = null;
          for (let i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] === void 0)
              return handleNextChunk();
            if (file.upload.chunks[i].status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS)
              allFinished = false;
          }
          if (allFinished)
            this.options.chunksUploaded(file, () => {
              this._finished(files, response, null);
            });
        };
        if (this.options.parallelChunkUploads)
          for (let i = 0; i < file.upload.totalChunkCount; i++)
            handleNextChunk();
        else
          handleNextChunk();
      } else {
        let dataBlocks = [];
        for (let i = 0; i < files.length; i++)
          dataBlocks[i] = {
            name: this._getParamName(i),
            data: transformedFiles[i],
            filename: files[i].upload.filename
          };
        this._uploadData(files, dataBlocks);
      }
    });
  }
  _getChunk(file, xhr) {
    for (let i = 0; i < file.upload.totalChunkCount; i++) {
      if (file.upload.chunks[i] !== void 0 && file.upload.chunks[i].xhr === xhr)
        return file.upload.chunks[i];
    }
  }
  _uploadData(files, dataBlocks) {
    let xhr = new XMLHttpRequest();
    for (let file of files)
      file.xhr = xhr;
    if (files[0].upload.chunked)
      files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
    let method = this.resolveOption(this.options.method, files, dataBlocks);
    let url = this.resolveOption(this.options.url, files, dataBlocks);
    xhr.open(method, url, true);
    let timeout = this.resolveOption(this.options.timeout, files);
    if (timeout)
      xhr.timeout = this.resolveOption(this.options.timeout, files);
    xhr.withCredentials = !!this.options.withCredentials;
    xhr.onload = (e) => {
      this._finishedUploading(files, xhr, e);
    };
    xhr.ontimeout = () => {
      this._handleUploadError(files, xhr, `Request timedout after ${this.options.timeout / 1e3} seconds`);
    };
    xhr.onerror = () => {
      this._handleUploadError(files, xhr);
    };
    let progressObj = xhr.upload != null ? xhr.upload : xhr;
    progressObj.onprogress = (e) => this._updateFilesUploadProgress(files, xhr, e);
    let headers = this.options.defaultHeaders ? {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest"
    } : {};
    if (this.options.binaryBody)
      headers["Content-Type"] = files[0].type;
    if (this.options.headers)
      objectExtend(headers, this.options.headers);
    for (let headerName in headers) {
      let headerValue = headers[headerName];
      if (headerValue)
        xhr.setRequestHeader(headerName, headerValue);
    }
    if (this.options.binaryBody) {
      for (let file of files)
        this.emit("sending", file, xhr);
      if (this.options.uploadMultiple)
        this.emit("sendingmultiple", files, xhr);
      this.submitRequest(xhr, null, files);
    } else {
      let formData = new FormData();
      if (this.options.params) {
        let additionalParams = this.options.params;
        if (typeof additionalParams === "function")
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        for (let key in additionalParams) {
          let value = additionalParams[key];
          if (Array.isArray(value))
            for (let i = 0; i < value.length; i++)
              formData.append(key, value[i]);
          else
            formData.append(key, value);
        }
      }
      for (let file of files)
        this.emit("sending", file, xhr, formData);
      if (this.options.uploadMultiple)
        this.emit("sendingmultiple", files, xhr, formData);
      this._addFormElementData(formData);
      for (let i = 0; i < dataBlocks.length; i++) {
        let dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }
      this.submitRequest(xhr, formData, files);
    }
  }
  _transformFiles(files, done) {
    let transformedFiles = [];
    let doneCounter = 0;
    for (let i = 0; i < files.length; i++)
      this.options.transformFile.call(this, files[i], (transformedFile) => {
        transformedFiles[i] = transformedFile;
        if (++doneCounter === files.length)
          done(transformedFiles);
      });
  }
  _addFormElementData(formData) {
    if (this.element.tagName === "FORM")
      for (let input of this.element.querySelectorAll("input, textarea, select, button")) {
        let inputName = input.getAttribute("name");
        let inputType = input.getAttribute("type");
        if (inputType)
          inputType = inputType.toLowerCase();
        if (typeof inputName === "undefined" || inputName === null)
          continue;
        if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
          for (let option of input.options)
            if (option.selected)
              formData.append(inputName, option.value);
        } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked)
          formData.append(inputName, input.value);
      }
  }
  _updateFilesUploadProgress(files, xhr, e) {
    if (!files[0].upload.chunked)
      for (let file of files) {
        if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total)
          continue;
        if (e) {
          file.upload.progress = 100 * e.loaded / e.total;
          file.upload.total = e.total;
          file.upload.bytesSent = e.loaded;
        } else {
          file.upload.progress = 100;
          file.upload.bytesSent = file.upload.total;
        }
        this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
      }
    else {
      let file = files[0];
      let chunk = this._getChunk(file, xhr);
      if (e) {
        chunk.progress = 100 * e.loaded / e.total;
        chunk.total = e.total;
        chunk.bytesSent = e.loaded;
      } else {
        chunk.progress = 100;
        chunk.bytesSent = chunk.total;
      }
      file.upload.progress = 0;
      file.upload.total = 0;
      file.upload.bytesSent = 0;
      for (let i = 0; i < file.upload.totalChunkCount; i++)
        if (file.upload.chunks[i] && typeof file.upload.chunks[i].progress !== "undefined") {
          file.upload.progress += file.upload.chunks[i].progress;
          file.upload.total += file.upload.chunks[i].total;
          file.upload.bytesSent += file.upload.chunks[i].bytesSent;
        }
      file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
      this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
    }
  }
  _finishedUploading(files, xhr, e) {
    let response;
    if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED)
      return;
    if (xhr.readyState !== 4)
      return;
    if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
      response = xhr.responseText;
      if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json"))
        try {
          response = JSON.parse(response);
        } catch (error) {
          e = error;
          response = "Invalid JSON response from server.";
        }
    }
    this._updateFilesUploadProgress(files, xhr);
    if (!(200 <= xhr.status && xhr.status < 300))
      this._handleUploadError(files, xhr, response);
    else if (files[0].upload.chunked)
      files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
    else
      this._finished(files, response, e);
  }
  _handleUploadError(files, xhr, response) {
    if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED)
      return;
    if (files[0].upload.chunked && this.options.retryChunks) {
      let chunk = this._getChunk(files[0], xhr);
      if (chunk.retries++ < this.options.retryChunksLimit) {
        this._uploadData(files, [
          chunk.dataBlock
        ]);
        return;
      } else
        console.warn("Retried this chunk too often. Giving up.");
    }
    this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
  }
  submitRequest(xhr, formData, files) {
    if (xhr.readyState != 1) {
      console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
      return;
    }
    if (this.options.binaryBody) {
      if (files[0].upload.chunked) {
        const chunk = this._getChunk(files[0], xhr);
        xhr.send(chunk.dataBlock.data);
      } else
        xhr.send(files[0]);
    } else
      xhr.send(formData);
  }
  _finished(files, responseText, e) {
    for (let file of files) {
      file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
      this.emit("success", file, responseText, e);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("successmultiple", files, responseText, e);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue)
      return this.processQueue();
  }
  _errorProcessing(files, message, xhr) {
    for (let file of files) {
      file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR;
      this.emit("error", file, message, xhr);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("errormultiple", files, message, xhr);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue)
      return this.processQueue();
  }
  static uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  constructor(el, options) {
    super();
    let fallback, left;
    this.element = el;
    this.clickableElements = [];
    this.listeners = [];
    this.files = [];
    if (typeof this.element === "string")
      this.element = document.querySelector(this.element);
    if (!this.element || this.element.nodeType == null)
      throw new Error("Invalid dropzone element.");
    if (this.element.dropzone)
      throw new Error("Dropzone already attached.");
    $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.push(this);
    this.element.dropzone = this;
    let elementOptions = (left = $3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(this.element)) != null ? left : {};
    this.options = objectExtend(true, {}, $4ca367182776f80b$export$2e2bcd8739ae039, elementOptions, options != null ? options : {});
    this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
    if (this.options.forceFallback || !$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported())
      return this.options.fallback.call(this);
    if (this.options.url == null)
      this.options.url = this.element.getAttribute("action");
    if (!this.options.url)
      throw new Error("No URL provided.");
    if (this.options.acceptedFiles && this.options.acceptedMimeTypes)
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    if (this.options.uploadMultiple && this.options.chunking)
      throw new Error("You cannot set both: uploadMultiple and chunking.");
    if (this.options.binaryBody && this.options.uploadMultiple)
      throw new Error("You cannot set both: binaryBody and uploadMultiple.");
    if (this.options.acceptedMimeTypes) {
      this.options.acceptedFiles = this.options.acceptedMimeTypes;
      delete this.options.acceptedMimeTypes;
    }
    if (this.options.renameFilename != null)
      this.options.renameFile = (file) => this.options.renameFilename.call(this, file.name, file);
    if (typeof this.options.method === "string")
      this.options.method = this.options.method.toUpperCase();
    if ((fallback = this.getExistingFallback()) && fallback.parentNode)
      fallback.parentNode.removeChild(fallback);
    if (this.options.previewsContainer !== false) {
      if (this.options.previewsContainer)
        this.previewsContainer = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.previewsContainer, "previewsContainer");
      else
        this.previewsContainer = this.element;
    }
    if (this.options.clickable) {
      if (this.options.clickable === true)
        this.clickableElements = [
          this.element
        ];
      else
        this.clickableElements = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements(this.options.clickable, "clickable");
    }
    this.init();
  }
}
$3ed269f2f0fb224b$export$2e2bcd8739ae039.initClass();
$3ed269f2f0fb224b$export$2e2bcd8739ae039.options = {};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement = function(element) {
  if (element.getAttribute("id"))
    return $3ed269f2f0fb224b$export$2e2bcd8739ae039.options[$3ed269f2f0fb224b$var$camelize(element.getAttribute("id"))];
  else
    return void 0;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances = [];
$3ed269f2f0fb224b$export$2e2bcd8739ae039.forElement = function(element) {
  if (typeof element === "string")
    element = document.querySelector(element);
  if ((element != null ? element.dropzone : void 0) == null)
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  return element.dropzone;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.discover = function() {
  let dropzones;
  if (document.querySelectorAll)
    dropzones = document.querySelectorAll(".dropzone");
  else {
    dropzones = [];
    let checkElements = (elements) => (() => {
      let result = [];
      for (let el of elements)
        if (/(^| )dropzone($| )/.test(el.className))
          result.push(dropzones.push(el));
        else
          result.push(void 0);
      return result;
    })();
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }
  return (() => {
    let result = [];
    for (let dropzone2 of dropzones)
      if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(dropzone2) !== false)
        result.push(new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzone2));
      else
        result.push(void 0);
    return result;
  })();
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = [
  /opera.*(Macintosh|Windows Phone).*version\/12/i
];
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported = function() {
  let capableBrowser = true;
  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a")))
      capableBrowser = false;
    else {
      if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers !== void 0)
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = $3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers;
      for (let regex of $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers)
        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
    }
  } else
    capableBrowser = false;
  return capableBrowser;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob = function(dataURI) {
  let byteString = atob(dataURI.split(",")[1]);
  let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--)
    ia[i] = byteString.charCodeAt(i);
  return new Blob([
    ab
  ], {
    type: mimeString
  });
};
const $3ed269f2f0fb224b$var$without = (list, rejectedItem) => list.filter((item) => item !== rejectedItem).map((item) => item);
const $3ed269f2f0fb224b$var$camelize = (str) => str.replace(/[\-_](\w)/g, (match) => match.charAt(1).toUpperCase());
$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement = function(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside = function(element, container) {
  if (element === container)
    return true;
  while (element = element.parentNode) {
    if (element === container)
      return true;
  }
  return false;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement = function(el, name) {
  let element;
  if (typeof el === "string")
    element = document.querySelector(el);
  else if (el.nodeType != null)
    element = el;
  if (element == null)
    throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`);
  return element;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements = function(els, name) {
  let el, elements;
  if (els instanceof Array) {
    elements = [];
    try {
      for (el of els)
        elements.push(this.getElement(el, name));
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    for (el of document.querySelectorAll(els))
      elements.push(el);
  } else if (els.nodeType != null)
    elements = [
      els
    ];
  if (elements == null || !elements.length)
    throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
  return elements;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm = function(question, accepted, rejected) {
  if (window.confirm(question))
    return accepted();
  else if (rejected != null)
    return rejected();
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile = function(file, acceptedFiles) {
  if (!acceptedFiles)
    return true;
  acceptedFiles = acceptedFiles.split(",");
  let mimeType = file.type;
  let baseMimeType = mimeType.replace(/\/.*$/, "");
  for (let validType of acceptedFiles) {
    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1)
        return true;
    } else if (/\/\*$/.test(validType)) {
      if (baseMimeType === validType.replace(/\/.*$/, ""))
        return true;
    } else {
      if (mimeType === validType)
        return true;
    }
  }
  return false;
};
if (typeof jQuery !== "undefined" && jQuery !== null)
  jQuery.fn.dropzone = function(options) {
    return this.each(function() {
      return new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this, options);
    });
  };
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED = "added";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED = "queued";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ACCEPTED = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING = "uploading";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.PROCESSING = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED = "canceled";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR = "error";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS = "success";
let $3ed269f2f0fb224b$var$detectVerticalSquash = function(img) {
  img.naturalWidth;
  let ih = img.naturalHeight;
  let canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  let { data } = ctx.getImageData(1, 0, 1, ih);
  let sy = 0;
  let ey = ih;
  let py = ih;
  while (py > sy) {
    let alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0)
      ey = py;
    else
      sy = py;
    py = ey + sy >> 1;
  }
  let ratio = py / ih;
  if (ratio === 0)
    return 1;
  else
    return ratio;
};
var $3ed269f2f0fb224b$var$drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  let vertSquashRatio = $3ed269f2f0fb224b$var$detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};
class $3ed269f2f0fb224b$var$ExifRestore {
  static initClass() {
    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  static encode64(input) {
    let output = "";
    let chr1 = void 0;
    let chr2 = void 0;
    let chr3 = "";
    let enc1 = void 0;
    let enc2 = void 0;
    let enc3 = void 0;
    let enc4 = "";
    let i = 0;
    while (true) {
      chr1 = input[i++];
      chr2 = input[i++];
      chr3 = input[i++];
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2))
        enc3 = enc4 = 64;
      else if (isNaN(chr3))
        enc4 = 64;
      output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
      if (!(i < input.length))
        break;
    }
    return output;
  }
  static restore(origFileBase64, resizedFileBase64) {
    if (!origFileBase64.match("data:image/jpeg;base64,"))
      return resizedFileBase64;
    let rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
    let segments = this.slice2Segments(rawImage);
    let image = this.exifManipulation(resizedFileBase64, segments);
    return `data:image/jpeg;base64,${this.encode64(image)}`;
  }
  static exifManipulation(resizedFileBase64, segments) {
    let exifArray = this.getExifArray(segments);
    let newImageArray = this.insertExif(resizedFileBase64, exifArray);
    let aBuffer = new Uint8Array(newImageArray);
    return aBuffer;
  }
  static getExifArray(segments) {
    let seg = void 0;
    let x = 0;
    while (x < segments.length) {
      seg = segments[x];
      if (seg[0] === 255 & seg[1] === 225)
        return seg;
      x++;
    }
    return [];
  }
  static insertExif(resizedFileBase64, exifArray) {
    let imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
    let buf = this.decode64(imageData);
    let separatePoint = buf.indexOf(255, 3);
    let mae = buf.slice(0, separatePoint);
    let ato = buf.slice(separatePoint);
    let array = mae;
    array = array.concat(exifArray);
    array = array.concat(ato);
    return array;
  }
  static slice2Segments(rawImageArray) {
    let head = 0;
    let segments = [];
    while (true) {
      var length;
      if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218)
        break;
      if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216)
        head += 2;
      else {
        length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
        let endPoint = head + length + 2;
        let seg = rawImageArray.slice(head, endPoint);
        segments.push(seg);
        head = endPoint;
      }
      if (head > rawImageArray.length)
        break;
    }
    return segments;
  }
  static decode64(input) {
    let chr1 = void 0;
    let chr2 = void 0;
    let chr3 = "";
    let enc1 = void 0;
    let enc2 = void 0;
    let enc3 = void 0;
    let enc4 = "";
    let i = 0;
    let buf = [];
    let base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input))
      console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (true) {
      enc1 = this.KEY_STR.indexOf(input.charAt(i++));
      enc2 = this.KEY_STR.indexOf(input.charAt(i++));
      enc3 = this.KEY_STR.indexOf(input.charAt(i++));
      enc4 = this.KEY_STR.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      buf.push(chr1);
      if (enc3 !== 64)
        buf.push(chr2);
      if (enc4 !== 64)
        buf.push(chr3);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
      if (!(i < input.length))
        break;
    }
    return buf;
  }
}
$3ed269f2f0fb224b$var$ExifRestore.initClass();
function $3ed269f2f0fb224b$var$__guard__(value, transform) {
  return typeof value !== "undefined" && value !== null ? transform(value) : void 0;
}
function $3ed269f2f0fb224b$var$__guardMethod__(obj, methodName, transform) {
  if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function")
    return transform(obj, methodName);
  else
    return void 0;
}
var dropzone = "";
const _hoisted_1$5 = { class: "step-content" };
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Add files to this project"),
  /* @__PURE__ */ createBaseVNode("p", null, "Or you can skip this step. You can always add more files later.")
], -1);
const _hoisted_3$5 = {
  key: 0,
  class: "page-placeholder is-files"
};
const _hoisted_4$4 = { class: "placeholder-content" };
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-rounded",
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-rounded",
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("h3", null, "Upload project files", -1);
const _hoisted_8$4 = /* @__PURE__ */ createBaseVNode("p", { class: "is-larger" }, " You can already start adding files to your project if you have them handy. But don't worry, you'll be able to add and manage files later. ", -1);
const _hoisted_9$4 = {
  key: 1,
  class: "uploader"
};
const _hoisted_10$4 = { class: "uploader-toolbar" };
const _hoisted_11$4 = { class: "left" };
const _hoisted_12$4 = { class: "uploader-actions" };
const _hoisted_13$4 = { class: "uploader-action" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_15$2 = [
  _hoisted_14$3
];
const _hoisted_16$2 = { class: "uploader-action" };
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:upload"
}, null, -1);
const _hoisted_18$2 = [
  _hoisted_17$2
];
const _hoisted_19$2 = { class: "uploader-action" };
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_21$2 = [
  _hoisted_20$2
];
const _hoisted_22$2 = { class: "right" };
const _hoisted_23$2 = { class: "fileupload-process" };
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("div", {
  class: "progress-bar progress-bar-success",
  "data-dz-uploadprogress": ""
}, null, -1);
const _hoisted_25$2 = [
  _hoisted_24$2
];
const _hoisted_26$2 = /* @__PURE__ */ createStaticVNode('<div class="uploader-container"><div class="upload-wrapper"><div class="upload-box fileinput-button"><div class="uploader-label"><i aria-hidden="true" class="lnil lnil-cloud-upload"></i><h3>Upload photos/videos</h3></div></div></div></div>', 1);
const _hoisted_27$1 = { class: "preview-box" };
const _hoisted_28$1 = { class: "preview" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "list-item-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", {
    class: "name",
    "data-dz-name": ""
  }),
  /* @__PURE__ */ createBaseVNode("p", {
    class: "error text-danger",
    "data-dz-errormessage": ""
  })
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "list-item-progress" }, [
  /* @__PURE__ */ createBaseVNode("p", {
    class: "size",
    "data-dz-size": ""
  }),
  /* @__PURE__ */ createBaseVNode("div", {
    class: "progress active",
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": "0"
  }, [
    /* @__PURE__ */ createBaseVNode("div", {
      class: "progress-bar progress-bar-success",
      "data-dz-uploadprogress": ""
    })
  ])
], -1);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<div class="list-item-actions"><button class="list-item-action start hint--bubble hint--primary hint--top" data-hint="Upload File"><i aria-hidden="true" class="iconify" data-icon="feather:play"></i></button><button data-dz-remove class="list-item-action cancel hint--bubble hint--primary hint--top" data-hint="Cancel"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-left"></i></button><button data-dz-remove class="list-item-action delete"><i aria-hidden="true" class="iconify" data-icon="feather:trash-2"></i></button></div>', 1);
$3ed269f2f0fb224b$export$2e2bcd8739ae039.autoDiscover = false;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isUploading = ref(false);
    const previewTemplateElement = ref();
    const previewContainerElement = ref();
    const totalProgressElement = ref();
    const addUploadElement = ref();
    const startUploadElement = ref();
    const cancelUploadElement = ref();
    const dropzone2 = ref();
    const previewTemplate = ref("");
    let isInit = false;
    const wizard = useWizard();
    const initDropzone = () => {
      if (isInit) {
        return;
      }
      isInit = true;
      dropzone2.value = new $3ed269f2f0fb224b$export$2e2bcd8739ae039(document.body, {
        url: "https://www.cssninja.io/upload.php",
        thumbnailWidth: 800,
        thumbnailHeight: 600,
        parallelUploads: 2,
        previewTemplate: previewTemplate.value,
        autoQueue: false,
        previewsContainer: previewContainerElement.value,
        clickable: ".fileinput-button"
      });
      dropzone2.value.on("complete", (file) => {
        const attachment = {
          name: file.name,
          size: file.size,
          dataURL: file.dataURL,
          type: file.type,
          upload: {
            uuid: file.upload.uuid,
            url: file.upload.url
          }
        };
        wizard.data.attachments.push(attachment);
      });
      dropzone2.value.on("removedfile", (file) => {
        const fileIndex = wizard.data.attachments.findIndex((item) => {
          return item.upload.uuid === file.upload.uuid;
        });
        if (fileIndex !== -1) {
          wizard.data.attachments.splice(fileIndex, 1);
        }
      });
      dropzone2.value.on("addedfile", (file) => {
        const startElement = file.previewElement.querySelector(".start");
        if (startElement) {
          startElement.onclick = () => {
            dropzone2.value.enqueueFile(file);
          };
        }
      });
      dropzone2.value.on("totaluploadprogress", (progress) => {
        if (totalProgressElement.value) {
          totalProgressElement.value.style.width = `${progress}%`;
        }
      });
      dropzone2.value.on("sending", (file) => {
        const startElement = file.previewElement.querySelector(".start");
        if (totalProgressElement.value) {
          totalProgressElement.value.style.opacity = "1";
        }
        if (startElement) {
          startElement.disabled = true;
        }
      });
      dropzone2.value.on("queuecomplete", (progress) => {
        if (totalProgressElement.value) {
          totalProgressElement.value.style.opacity = "0";
        }
      });
      if (startUploadElement.value) {
        startUploadElement.value.onclick = () => {
          if (dropzone2.value) {
            const files = dropzone2.value.getAddedFiles();
            dropzone2.value.enqueueFiles(files);
          }
        };
      }
      if (cancelUploadElement.value) {
        cancelUploadElement.value.onclick = () => {
          if (dropzone2.value) {
            dropzone2.value.removeAllFiles(true);
          }
          wizard.data.attachments.splice(0, wizard.data.attachments.length);
        };
      }
      const minSteps = 6;
      const maxSteps = 60;
      const timeBetweenSteps = 100;
      const bytesPerStep = 1024 * 1024;
      dropzone2.value.uploadFiles = async (files) => {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));
          for (let step = 0; step < totalSteps; step++) {
            const duration = timeBetweenSteps * (step + 1);
            await sleep(duration);
            file.upload = __spreadProps(__spreadValues({}, file.upload), {
              progress: 100 * (step + 1) / totalSteps,
              bytesSent: (step + 1) * file.size / totalSteps
            });
            dropzone2.value.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
            if (file.upload.progress >= 100) {
              file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
              file.upload = {
                url: `https://fake-uploads.cssninja.io/${file.name}`
              };
              dropzone2.value.emit("success", file, "success", null);
              dropzone2.value.emit("complete", file);
              dropzone2.value.processQueue();
            }
          }
        }
      };
    };
    onUnmounted(() => {
      if (dropzone2.value) {
        dropzone2.value.destroy();
        isInit = false;
      }
    });
    watch(isUploading, () => {
      if (isUploading.value) {
        nextTick(() => {
          if (previewTemplateElement.value) {
            previewTemplate.value = previewTemplateElement.value.outerHTML;
            previewTemplateElement.value.remove();
          }
        });
      }
    });
    watch(previewTemplate, () => {
      if (previewTemplate.value) {
        initDropzone();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _hoisted_2$5,
        !isUploading.value ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$4, [
            _hoisted_5$4,
            _hoisted_6$4,
            _hoisted_7$4,
            _hoisted_8$4,
            createBaseVNode("a", {
              class: "action-link toggle-uploader-link",
              tabindex: "0",
              onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => isUploading.value = true, ["prevent"]), ["space"])),
              onClick: _cache[1] || (_cache[1] = ($event) => isUploading.value = true)
            }, " Add Files ", 32)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_9$4, [
          createBaseVNode("div", _hoisted_10$4, [
            createBaseVNode("div", _hoisted_11$4, [
              createBaseVNode("div", _hoisted_12$4, [
                createBaseVNode("div", _hoisted_13$4, [
                  createBaseVNode("span", {
                    ref_key: "addUploadElement",
                    ref: addUploadElement,
                    class: "inner-action fileinput-button hint--bubble hint--primary hint--top",
                    "data-hint": "Add Files"
                  }, _hoisted_15$2, 512)
                ]),
                createBaseVNode("div", _hoisted_16$2, [
                  createBaseVNode("button", {
                    ref_key: "startUploadElement",
                    ref: startUploadElement,
                    type: "submit",
                    class: "inner-action start hint--bubble hint--primary hint--top",
                    "data-hint": "Upload All"
                  }, _hoisted_18$2, 512)
                ]),
                createBaseVNode("div", _hoisted_19$2, [
                  createBaseVNode("button", {
                    ref_key: "cancelUploadElement",
                    ref: cancelUploadElement,
                    type: "reset",
                    class: "inner-action cancel hint--bubble hint--primary hint--top",
                    "data-hint": "Remove All"
                  }, _hoisted_21$2, 512)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_22$2, [
              createBaseVNode("div", _hoisted_23$2, [
                createBaseVNode("div", {
                  ref_key: "totalProgressElement",
                  ref: totalProgressElement,
                  class: "progress progress-striped active",
                  role: "progressbar",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                  "aria-valuenow": "0"
                }, _hoisted_25$2, 512)
              ])
            ])
          ]),
          _hoisted_26$2,
          createBaseVNode("div", {
            ref_key: "previewContainerElement",
            ref: previewContainerElement,
            class: "template-list"
          }, [
            createBaseVNode("div", {
              ref_key: "previewTemplateElement",
              ref: previewTemplateElement,
              class: "template-list-item"
            }, [
              createBaseVNode("div", _hoisted_27$1, [
                createBaseVNode("div", _hoisted_28$1, [
                  createBaseVNode("img", {
                    "data-dz-thumbnail": "",
                    alt: "",
                    onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                  }, null, 32)
                ]),
                _hoisted_29,
                _hoisted_30,
                _hoisted_31
              ])
            ], 512)
          ], 512)
        ]))
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "step-content" };
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Add more details"),
  /* @__PURE__ */ createBaseVNode("p", null, "Add useful details to your project. You can edit this later.")
], -1);
const _hoisted_3$4 = { class: "project-customer" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("h4", null, "Customer", -1);
const _hoisted_5$3 = { class: "project-dates" };
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("h4", null, "Project Time Frame", -1);
const _hoisted_7$3 = { class: "project-dates-inner" };
const _hoisted_8$3 = { class: "project-date" };
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "date-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:map-pin"
  })
], -1);
const _hoisted_10$3 = ["value"];
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_12$3 = { class: "project-date" };
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "date-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:flag"
  })
], -1);
const _hoisted_14$2 = ["value"];
const _hoisted_15$1 = { class: "project-budget" };
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Project Budget", -1);
const _hoisted_17$1 = { class: "project-budget-inner" };
const _hoisted_18$1 = { class: "budget-item" };
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("span", null, "< 5K", -1);
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("span", null, "< 30K", -1);
const _hoisted_22$1 = [
  _hoisted_21$1
];
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("span", null, "< 100K", -1);
const _hoisted_24$1 = [
  _hoisted_23$1
];
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("span", null, "100K+", -1);
const _hoisted_26$1 = [
  _hoisted_25$1
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const search = ref("");
    const wizard = useWizard();
    const filteredCustomers = computed(() => {
      if (!search.value) {
        return [];
      }
      return customers.filter((item) => {
        return item.name.match(new RegExp(search.value, "i")) || item.location.match(new RegExp(search.value, "i"));
      }).splice(0, 4);
    });
    const selectCustomer = (customer) => {
      wizard.data.customer = customer;
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$f;
      const _component_VAvatar = _sfc_main$b;
      const _component_VIconButton = _sfc_main$g;
      const _component_VBlock = _sfc_main$d;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _hoisted_2$4,
        createBaseVNode("div", _hoisted_3$4, [
          _hoisted_4$3,
          !unref(wizard).data.customer ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:search" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                    class: "input",
                    placeholder: "search..."
                  }, null, 512), [
                    [vModelText, search.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(wizard).data.customer ? (openBlock(), createBlock(_component_VBlock, {
            key: 1,
            title: unref(wizard).data.customer.name,
            subtitle: unref(wizard).data.customer.location,
            center: ""
          }, {
            icon: withCtx(() => [
              createVNode(_component_VAvatar, {
                size: "medium",
                picture: unref(wizard).data.customer.logo
              }, null, 8, ["picture"])
            ]),
            action: withCtx(() => [
              createVNode(_component_VIconButton, {
                size: "small",
                icon: "feather:x",
                circle: "",
                onClick: _cache[1] || (_cache[1] = ($event) => selectCustomer(null))
              })
            ]),
            _: 1
          }, 8, ["title", "subtitle"])) : unref(filteredCustomers).length > 0 ? (openBlock(), createBlock(TransitionGroup, {
            key: 2,
            name: "list",
            tag: "div"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredCustomers), (customer) => {
                return openBlock(), createBlock(_component_VBlock, {
                  key: customer.name,
                  title: customer.name,
                  subtitle: customer.location,
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      size: "medium",
                      picture: customer.logo
                    }, null, 8, ["picture"])
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VIconButton, {
                      size: "small",
                      icon: "feather:plus",
                      circle: "",
                      onClick: ($event) => selectCustomer(customer)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["title", "subtitle"]);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$3, [
          _hoisted_6$3,
          createVNode(_component_VDatePicker, {
            modelValue: unref(wizard).data.timeFrame,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(wizard).data.timeFrame = $event),
            "is-range": "",
            color: "green",
            "trim-weeks": ""
          }, {
            default: withCtx(({ inputValue, inputEvents }) => [
              createBaseVNode("div", _hoisted_7$3, [
                createBaseVNode("div", _hoisted_8$3, [
                  _hoisted_9$3,
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("input", mergeProps({
                        value: inputValue.start,
                        class: "input form-datepicker",
                        placeholder: "Start Date"
                      }, toHandlers(inputEvents.start)), null, 16, _hoisted_10$3)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _hoisted_11$3,
                createBaseVNode("div", _hoisted_12$3, [
                  _hoisted_13$3,
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("input", mergeProps({
                        value: inputValue.end,
                        class: "input form-datepicker",
                        placeholder: "End Date"
                      }, toHandlers(inputEvents.end)), null, 16, _hoisted_14$2)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_15$1, [
          _hoisted_16$1,
          createBaseVNode("div", _hoisted_17$1, [
            createBaseVNode("div", _hoisted_18$1, [
              createBaseVNode("a", {
                class: normalizeClass(["budget-item-inner", [unref(wizard).data.budget === "< 5K" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => unref(wizard).data.budget = "< 5K", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => unref(wizard).data.budget = "< 5K")
              }, _hoisted_20$1, 34),
              createBaseVNode("a", {
                class: normalizeClass(["budget-item-inner", [unref(wizard).data.budget === "< 30K" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => unref(wizard).data.budget = "< 30K", ["prevent"]), ["space"])),
                onClick: _cache[6] || (_cache[6] = ($event) => unref(wizard).data.budget = "< 30K")
              }, _hoisted_22$1, 34),
              createBaseVNode("a", {
                class: normalizeClass(["budget-item-inner", [unref(wizard).data.budget === "< 100K" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => unref(wizard).data.budget = "< 100K", ["prevent"]), ["space"])),
                onClick: _cache[8] || (_cache[8] = ($event) => unref(wizard).data.budget = "< 100K")
              }, _hoisted_24$1, 34),
              createBaseVNode("a", {
                class: normalizeClass(["budget-item-inner", [unref(wizard).data.budget === "100K+" && "is-active"]]),
                tabindex: "0",
                onClick: _cache[9] || (_cache[9] = ($event) => unref(wizard).data.budget = "100K+"),
                onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => unref(wizard).data.budget = "100K+", ["prevent"]), ["space"]))
              }, _hoisted_26$1, 34)
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "step-content" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "What is this project about?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Manage better by adding all relevant project information")
], -1);
const _hoisted_3$3 = { class: "project-info" };
const _hoisted_4$2 = { class: "project-info-head" };
const _hoisted_5$2 = { class: "project-avatar-upload" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("span", null, "Upload a project logo"),
  /* @__PURE__ */ createBaseVNode("span", null, "File size cannot exceed 2MB")
], -1);
const _hoisted_7$2 = { class: "project-info" };
const _hoisted_8$2 = { class: "project-name" };
const _hoisted_9$2 = { class: "project-description p-t-10" };
const _hoisted_10$2 = {
  key: 0,
  class: "help"
};
const _hoisted_11$2 = {
  key: 1,
  class: "help"
};
const _hoisted_12$2 = {
  key: 2,
  class: "help"
};
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("label", null, "Related Industries", -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const wizard = useWizard();
    const onAddFile = (error, fileInfo) => {
      if (error) {
        notyf.error(`${error.main}: ${error.sub}`);
        console.error(error);
        return;
      }
      const _file = fileInfo.file;
      if (_file) {
        wizard.data.logo = _file;
      }
    };
    const onRemoveFile = (error, fileInfo) => {
      if (error) {
        notyf.error(error);
        console.error(error);
        return;
      }
      console.log(fileInfo);
      wizard.data.logo = null;
    };
    return (_ctx, _cache) => {
      const _component_VFilePond = _sfc_main$h;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$f;
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _hoisted_2$3,
        createBaseVNode("div", _hoisted_3$3, [
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, [
              createVNode(_component_VFilePond, {
                size: "small",
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
              }),
              _hoisted_6$2
            ]),
            createBaseVNode("div", _hoisted_7$2, [
              createBaseVNode("div", _hoisted_8$2, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(wizard).data.name = $event),
                          class: "input",
                          placeholder: "Project Name"
                        }, null, 512), [
                          [vModelText, unref(wizard).data.name]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_9$2, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("textarea", {
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(wizard).data.description = $event),
                          class: "textarea",
                          rows: "4",
                          placeholder: "Describe your project..."
                        }, null, 512), [
                          [vModelText, unref(wizard).data.description]
                        ]),
                        unref(wizard).data.description.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_10$2, " Minimum of 50 characters ")) : unref(wizard).data.description.length === 49 ? (openBlock(), createElementBlock("p", _hoisted_11$2, toDisplayString(50 - unref(wizard).data.description.length) + " character remaining ", 1)) : unref(wizard).data.description.length < 50 ? (openBlock(), createElementBlock("p", _hoisted_12$2, toDisplayString(50 - unref(wizard).data.description.length) + " characters remaining ", 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_13$2,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: unref(wizard).data.relatedTo,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(wizard).data.relatedTo = $event),
                          label: "value",
                          placeholder: "Enter something",
                          options: [
                            {
                              value: "UI/UX Design"
                            },
                            {
                              value: "Web Development"
                            },
                            {
                              value: "Marketing"
                            }
                          ]
                        }, null, 8, ["modelValue"])
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
var _imports_0 = "/assets/4.3595e752.svg";
var _imports_1 = "/assets/type-2.674e96ce.svg";
var _imports_2 = "/assets/type-3.a89f77bf.svg";
const _hoisted_1$2 = { class: "step-content" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "step-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "Select a project type")
], -1);
const _hoisted_3$2 = { class: "wizard-types" };
const _hoisted_4$1 = { class: "columns" };
const _hoisted_5$1 = { class: "column is-4" };
const _hoisted_6$1 = { class: "wizard-card" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "UI/UX Design", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("p", null, "Some short explanation about the type goes here.", -1);
const _hoisted_10$1 = { class: "button-wrap" };
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "learn-more-link" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "dark-inverted-hover"
  }, "Or Learn More")
], -1);
const _hoisted_13$1 = { class: "column is-4" };
const _hoisted_14$1 = { class: "wizard-card" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Web Development", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "Some short explanation about the type goes here.", -1);
const _hoisted_18 = { class: "button-wrap" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "learn-more-link" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "dark-inverted-hover"
  }, "Or Learn More")
], -1);
const _hoisted_21 = { class: "column is-4" };
const _hoisted_22 = { class: "wizard-card" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Marketing", -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "Some short explanation about the type goes here.", -1);
const _hoisted_26 = { class: "button-wrap" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "learn-more-link" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "dark-inverted-hover"
  }, "Or Learn More")
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const wizard = useWizard();
    const validateStep = (relatedTo) => {
      wizard.data.relatedTo = relatedTo;
      wizard.setStep(2);
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _hoisted_2$2,
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6$1, [
                _hoisted_7$1,
                _hoisted_8$1,
                _hoisted_9$1,
                createBaseVNode("div", _hoisted_10$1, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    class: "type-select-button",
                    rounded: "",
                    elevated: "",
                    bold: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => validateStep("UI/UX Design"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_11$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_12$1
              ])
            ]),
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("div", _hoisted_14$1, [
                _hoisted_15,
                _hoisted_16,
                _hoisted_17,
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    class: "type-select-button",
                    rounded: "",
                    elevated: "",
                    bold: "",
                    onClick: _cache[1] || (_cache[1] = ($event) => validateStep("Web Development"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_20
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                _hoisted_23,
                _hoisted_24,
                _hoisted_25,
                createBaseVNode("div", _hoisted_26, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    class: "type-select-button",
                    rounded: "",
                    elevated: "",
                    bold: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => validateStep("Marketing"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_27
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_28
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var WizardV1Navigation_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0ceb5062"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "wizard-navigation" };
const _hoisted_2$1 = { class: "title-wrap" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-down"
}, null, -1));
const _hoisted_4 = [
  _hoisted_3$1
];
const _hoisted_5 = {
  id: "wizard-navigation-dropdown",
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_6 = { class: "dropdown-content" };
const _hoisted_7 = { class: "navbar-item is-dark-mode" };
const _hoisted_8 = { class: "navbar-icon" };
const _hoisted_9 = { class: "dark-mode" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, null, -1));
const _hoisted_12 = { class: "profile-avatar" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-down"
}, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("p", { class: "is-size-7 dark-inverted" }, "Erik Kovalsky")
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Profile")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Edit Profile")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:box"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Projects")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:settings"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Settings")
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:log-out"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Sign Out")
    ])
  ])
], -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    const wizard = useWizard();
    const setStep = (target) => {
      if (wizard.step >= target) {
        wizard.setStep(target);
        dropdown1.close();
      }
    };
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("nav", _hoisted_1$1, [
        createVNode(_component_RouterLink, {
          to: { name: "index" },
          class: "wizard-brand"
        }, {
          default: withCtx(() => [
            createVNode(_component_AnimatedLogo, {
              width: "38px",
              height: "38px"
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          class: "navbar-item is-wizard-title",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
        }, [
          createBaseVNode("span", _hoisted_2$1, [
            createTextVNode(" Step " + toDisplayString(unref(wizard).step) + ": ", 1),
            createBaseVNode("span", null, toDisplayString(unref(wizard).stepTitle), 1)
          ])
        ]),
        createBaseVNode("div", {
          ref_key: "dropdownElement1",
          ref: dropdownElement1,
          class: "dropdown wizard-dropdown dropdown-trigger"
        }, [
          createBaseVNode("div", {
            tabindex: "0",
            class: "is-trigger",
            onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args)),
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args), ["prevent"]), ["space"]))
          }, _hoisted_4, 32),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 1 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => setStep(1), ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => setStep(1))
              }, " Step 1: " + toDisplayString(unref(wizard).stepTitle), 35),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 2 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => setStep(2), ["prevent"]), ["space"])),
                onClick: _cache[6] || (_cache[6] = ($event) => setStep(2))
              }, " Step 2: Project Info ", 34),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 3 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => setStep(3), ["prevent"]), ["space"])),
                onClick: _cache[8] || (_cache[8] = ($event) => setStep(3))
              }, " Step 3: Project Details ", 34),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 4 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => setStep(4), ["prevent"]), ["space"])),
                onClick: _cache[10] || (_cache[10] = ($event) => setStep(4))
              }, " Step 4: Project Files ", 34),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 5 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => setStep(5), ["prevent"]), ["space"])),
                onClick: _cache[12] || (_cache[12] = ($event) => setStep(5))
              }, " Step 5: Team Members ", 34),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 6 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[13] || (_cache[13] = withKeys(withModifiers(($event) => setStep(6), ["prevent"]), ["space"])),
                onClick: _cache[14] || (_cache[14] = ($event) => setStep(6))
              }, " Step 6: Project Tools ", 34),
              createBaseVNode("a", {
                class: normalizeClass([[unref(wizard).step < 7 && "is-disabled"], "dropdown-item kill-drop"]),
                tabindex: "0",
                onKeydown: _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => setStep(7), ["prevent"]), ["space"])),
                onClick: _cache[16] || (_cache[16] = ($event) => setStep(7))
              }, " Step 7: Preview ", 34)
            ])
          ])
        ], 512),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("label", _hoisted_9, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(darkmode).isDark,
                onChange: _cache[17] || (_cache[17] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
              }, null, 40, _hoisted_10),
              _hoisted_11
            ])
          ])
        ]),
        createBaseVNode("div", {
          ref_key: "dropdownElement2",
          ref: dropdownElement2,
          class: "dropdown is-right dropdown-trigger user-dropdown"
        }, [
          createBaseVNode("div", {
            tabindex: "0",
            class: "is-trigger",
            "aria-haspopup": "true",
            onClick: _cache[19] || (_cache[19] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args)),
            onKeydown: _cache[20] || (_cache[20] = withKeys(withModifiers((...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args), ["prevent"]), ["space"]))
          }, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("img", {
                class: "avatar",
                src: _imports_0$4,
                alt: "",
                onErrorOnce: _cache[18] || (_cache[18] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32)
            ]),
            _hoisted_13
          ], 32),
          _hoisted_14
        ], 512)
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0ceb5062"]]);
var wizardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["value"];
const _hoisted_2 = { class: "wizard-v1-wrapper" };
const _hoisted_3 = { class: "wizard-buttons-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const wizard = useWizard();
    const previousStep = () => {
      if (wizard.step > 1) {
        wizard.setStep(wizard.step - 1);
      }
    };
    const validateStep = async () => {
      if (wizard.step < 7) {
        wizard.setStep(wizard.step + 1);
      } else if (wizard.step === 7) {
        await wizard.save();
        wizard.setStep(wizard.step + 1);
      } else {
        router.push({
          name: "navbar-layouts-projects-details"
        });
        wizard.reset();
      }
    };
    useHead({
      title: `${wizard.stepTitle} - Wizard V1 - Vuero`
    });
    watch(() => wizard.step, () => {
      router.push({
        query: {
          step: wizard.step
        }
      });
    });
    watchEffect(() => {
      const step = route.query.step;
      if (step) {
        wizard.setStep(parseInt(step));
      }
    });
    return (_ctx, _cache) => {
      const _component_WizardV1Navigation = __unplugin_components_0;
      const _component_WizardV1Step1 = _sfc_main$2;
      const _component_WizardV1Step2 = _sfc_main$3;
      const _component_WizardV1Step3 = _sfc_main$4;
      const _component_WizardV1Step4 = _sfc_main$5;
      const _component_WizardV1Step5 = _sfc_main$6;
      const _component_WizardV1Step6 = _sfc_main$7;
      const _component_WizardV1Step7 = _sfc_main$8;
      const _component_WizardV1Step8 = _sfc_main$9;
      const _component_MinimalLayout = _sfc_main$i;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createVNode(_component_WizardV1Navigation, {
            step: unref(wizard).step,
            "onUpdate:step": _cache[0] || (_cache[0] = ($event) => unref(wizard).step = $event),
            title: unref(wizard).stepTitle
          }, null, 8, ["step", "title"]),
          createBaseVNode("progress", {
            id: "wizard-progress",
            class: "progress is-smaller is-primary wizard-progress",
            value: unref(wizard).step / 8 * 100,
            max: "100"
          }, null, 8, _hoisted_1),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", {
              id: "wizard-step-0",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 1 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step1, {
                onNext: _cache[1] || (_cache[1] = ($event) => unref(wizard).setStep(2))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-1",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 2 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step2, {
                onNext: _cache[2] || (_cache[2] = ($event) => unref(wizard).setStep(3)),
                onPrev: _cache[3] || (_cache[3] = ($event) => unref(wizard).setStep(1))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-2",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 3 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step3, {
                onNext: _cache[4] || (_cache[4] = ($event) => unref(wizard).setStep(4)),
                onPrev: _cache[5] || (_cache[5] = ($event) => unref(wizard).setStep(2))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-3",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 4 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step4, {
                onNext: _cache[6] || (_cache[6] = ($event) => unref(wizard).setStep(5)),
                onPrev: _cache[7] || (_cache[7] = ($event) => unref(wizard).setStep(3))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-4",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 5 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step5, {
                onNext: _cache[8] || (_cache[8] = ($event) => unref(wizard).setStep(6)),
                onPrev: _cache[9] || (_cache[9] = ($event) => unref(wizard).setStep(4))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-5",
              class: normalizeClass(["inner-wrapper", [unref(wizard).step === 6 && "is-active"]])
            }, [
              createVNode(_component_WizardV1Step6, {
                onNext: _cache[10] || (_cache[10] = ($event) => unref(wizard).setStep(7)),
                onPrev: _cache[11] || (_cache[11] = ($event) => unref(wizard).setStep(5))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-6",
              class: normalizeClass([[unref(wizard).step === 7 && "is-active"], "inner-wrapper"]),
              "data-step-title": "Preview"
            }, [
              createVNode(_component_WizardV1Step7, {
                onNext: _cache[12] || (_cache[12] = ($event) => unref(wizard).setStep(8)),
                onPrev: _cache[13] || (_cache[13] = ($event) => unref(wizard).setStep(6))
              })
            ], 2),
            createBaseVNode("div", {
              id: "wizard-step-7",
              class: normalizeClass([[unref(wizard).step === 8 && "is-active"], "inner-wrapper"]),
              "data-step-title": "Finish"
            }, [
              createVNode(_component_WizardV1Step8)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["wizard-buttons", [unref(wizard).step > 1 && unref(wizard).step < 8 && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("button", {
                  class: normalizeClass([[
                    unref(wizard).step === 2 && "is-light",
                    unref(wizard).step > 2 && "is-primary is-elevated"
                  ], "button v-button is-bold wizard-button-previous"]),
                  onClick: previousStep
                }, " Previous ", 2),
                createBaseVNode("button", {
                  class: normalizeClass([[
                    unref(wizard).step === 8 && "is-light",
                    unref(wizard).step < 8 && "is-primary is-elevated"
                  ], "button v-button is-bold wizard-button-next"]),
                  onClick: validateStep
                }, toDisplayString(unref(wizard).step === 7 ? "Validate" : "Next"), 3)
              ])
            ], 2)
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
