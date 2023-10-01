import { b as _sfc_main$4, d as _sfc_main$7 } from "./index.e178843f.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass, k as ref, z as resolveComponent, q as createBaseVNode, s as createVNode, w as withCtx, F as Fragment, X as renderList, t as toDisplayString, p as createBlock, h as unref, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$6 } from "./VTag.f234897b.js";
import { _ as _sfc_main$5 } from "./VCheckbox.486c8d05.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tags", [props.addons && "has-addons"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const jobs = [
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/airbnb.svg",
    title: "UI / UX Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/slack.svg",
    title: "Sr. Product Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/github.svg",
    title: "UI / UX Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/google.svg",
    title: "Product Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/facebook.svg",
    title: "UI / UX Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/tnw.svg",
    title: "Web Developer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/dribbble.svg",
    title: "UI Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/atlassian.svg",
    title: "UI / UX Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  },
  {
    logo: "https://vuero.cssninja.io/demo/photos/brands/gitlab.svg",
    title: "UI / UX Designer",
    description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    categories: [
      {
        name: "Full Time"
      },
      {
        name: "Min. 1 Year"
      },
      {
        name: "Senior Level"
      }
    ]
  }
];
var JobsDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "jobs-dashboard" };
const _hoisted_2 = { class: "jobs-dashboard-wrapper" };
const _hoisted_3 = { class: "search-menu" };
const _hoisted_4 = { class: "search-bar" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="search-location"><i class="iconify" data-icon="feather:map-pin"></i> Los Angeles, CA </div><div class="search-job"><i class="iconify" data-icon="feather:briefcase"></i><input type="text" placeholder="Job Type"></div><div class="search-salary"><i class="iconify" data-icon="feather:dollar-sign"></i><input type="text" placeholder="Salary Range"></div><button class="search-button">Search</button>', 4);
const _hoisted_9 = { class: "main-container" };
const _hoisted_10 = { class: "search-type" };
const _hoisted_11 = { class: "alert" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "alert-title" }, "Create Job Alert", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "alert-subtitle" }, "Create a job alert now and never miss a job", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Keywords"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Create Job Alert");
const _hoisted_16 = { class: "job-time" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "Type of Employment", -1);
const _hoisted_18 = { class: "job-wrapper" };
const _hoisted_19 = { class: "type-container" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "56", -1);
const _hoisted_21 = { class: "type-container" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "43", -1);
const _hoisted_23 = { class: "type-container" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "24", -1);
const _hoisted_25 = { class: "type-container" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "27", -1);
const _hoisted_27 = { class: "type-container" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "76", -1);
const _hoisted_29 = { class: "type-container" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "28", -1);
const _hoisted_31 = { class: "job-time" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "Seniority Level", -1);
const _hoisted_33 = { class: "job-wrapper" };
const _hoisted_34 = { class: "type-container" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "98", -1);
const _hoisted_36 = { class: "type-container" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "44", -1);
const _hoisted_38 = { class: "type-container" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "35", -1);
const _hoisted_40 = { class: "type-container" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "29", -1);
const _hoisted_42 = { class: "type-container" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "26", -1);
const _hoisted_44 = { class: "type-container" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "56", -1);
const _hoisted_46 = { class: "job-time" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "Salary Range", -1);
const _hoisted_48 = { class: "job-wrapper" };
const _hoisted_49 = { class: "type-container" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "49", -1);
const _hoisted_51 = { class: "type-container" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "67", -1);
const _hoisted_53 = { class: "type-container" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "24", -1);
const _hoisted_55 = { class: "type-container" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "27", -1);
const _hoisted_57 = { class: "type-container" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "76", -1);
const _hoisted_59 = { class: "type-container" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "22", -1);
const _hoisted_61 = { class: "type-container" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "18", -1);
const _hoisted_63 = { class: "searched-jobs" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("div", { class: "searched-bar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "searched-count" }, "Showing 46 Jobs"),
  /* @__PURE__ */ createBaseVNode("div", { class: "searched-link" }, [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "action-link",
      tabindex: "0"
    }, "View All")
  ])
], -1);
const _hoisted_65 = { class: "job-cards" };
const _hoisted_66 = { class: "job-card-header" };
const _hoisted_67 = ["src"];
const _hoisted_68 = { class: "job-card-title" };
const _hoisted_69 = { class: "job-card-subtitle" };
const _hoisted_70 = { class: "job-detail-buttons" };
const _hoisted_71 = { class: "job-card-buttons" };
const _hoisted_72 = /* @__PURE__ */ createTextVNode("Apply Now");
const _hoisted_73 = /* @__PURE__ */ createTextVNode("Messages");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const tagsValue = [];
    const tagsOptions = [
      { value: "web-developer", label: "Frontend" },
      { value: "uiux-designer", label: "UI/UX" },
      { value: "backend-developer", label: "Backend" }
    ];
    const jobType = ref(["job-type-2"]);
    const jobSeniority = ref(["job-seniority-3", "job-seniority-4"]);
    const jobSalary = ref(["job-salary-5", "job-salary-6"]);
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VCheckbox = _sfc_main$5;
      const _component_VTag = _sfc_main$6;
      const _component_VTags = _sfc_main$2;
      const _component_VButtons = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VField, { class: "is-autocomplete-select is-curved-select" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: tagsValue,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tagsValue = $event),
                        mode: "tags",
                        searchable: true,
                        "create-tag": true,
                        options: tagsOptions,
                        placeholder: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _hoisted_5
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                _hoisted_12,
                _hoisted_13,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                      default: withCtx(() => [
                        _hoisted_14
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  fullwidth: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_15
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16, [
                _hoisted_17,
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => jobType.value = $event),
                      value: "job-type-1",
                      label: "Full Time Jobs",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_20
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => jobType.value = $event),
                      value: "job-type-2",
                      label: "Part Time Jobs",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_22
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => jobType.value = $event),
                      value: "job-type-3",
                      label: "Remote Jobs",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_24
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => jobType.value = $event),
                      value: "job-type-4",
                      label: "Internship Jobs",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_26
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => jobType.value = $event),
                      value: "job-type-5",
                      label: "Contract",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_28
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => jobType.value = $event),
                      value: "job-type-6",
                      label: "Training Jobs",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_30
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_31, [
                _hoisted_32,
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-1",
                      label: "Student Level",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_35
                  ]),
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-2",
                      label: "Entry Level",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_37
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-3",
                      label: "Mid Level",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_39
                  ]),
                  createBaseVNode("div", _hoisted_40, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-4",
                      label: "Senior Level",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_41
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-5",
                      label: "Directors",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_43
                  ]),
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-6",
                      label: "Student Level",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_45
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                _hoisted_47,
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => jobSalary.value = $event),
                      value: "job-salary-1",
                      label: "$700 - $1000",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_50
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => jobSalary.value = $event),
                      value: "job-salary-2",
                      label: "$1000 - $1200",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_52
                  ]),
                  createBaseVNode("div", _hoisted_53, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => jobSalary.value = $event),
                      value: "job-salary-3",
                      label: "$1200 - $1400",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_54
                  ]),
                  createBaseVNode("div", _hoisted_55, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => jobSalary.value = $event),
                      value: "job-salary-4",
                      label: "$1500 - $1800",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_56
                  ]),
                  createBaseVNode("div", _hoisted_57, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => jobSalary.value = $event),
                      value: "job-salary-5",
                      label: "$2000 - $3000",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_58
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => jobSalary.value = $event),
                      value: "job-salary-6",
                      label: "$3000 - $4000",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_60
                  ]),
                  createBaseVNode("div", _hoisted_61, [
                    createVNode(_component_VCheckbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => jobSalary.value = $event),
                      value: "job-salary-7",
                      label: "$4000 - $5000",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_62
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_63, [
              _hoisted_64,
              createBaseVNode("div", _hoisted_65, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jobs), (job, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "job-card"
                  }, [
                    createBaseVNode("div", _hoisted_66, [
                      createBaseVNode("img", {
                        class: "job-card-logo",
                        src: job.logo,
                        alt: ""
                      }, null, 8, _hoisted_67)
                    ]),
                    createBaseVNode("div", _hoisted_68, toDisplayString(job.title), 1),
                    createBaseVNode("div", _hoisted_69, toDisplayString(job.description), 1),
                    createBaseVNode("div", _hoisted_70, [
                      createVNode(_component_VTags, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(job.categories, (category, catIndex) => {
                            return openBlock(), createBlock(_component_VTag, {
                              key: catIndex,
                              color: "solid",
                              label: category.name,
                              curved: ""
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_71, [
                      createVNode(_component_VButtons, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            color: "primary",
                            raised: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_72
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VButton, { "dark-outlined": "" }, {
                            default: withCtx(() => [
                              _hoisted_73
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]);
                }), 128))
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
    viewWrapper.setPageTitle("Jobs");
    useHead({
      title: "Jobs Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_JobsDashboard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_JobsDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
