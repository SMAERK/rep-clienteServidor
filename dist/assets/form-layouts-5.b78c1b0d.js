import { _ as _sfc_main$5 } from "./VIconButton.f948e51d.js";
import { b as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VSwitchSegment.ee1417d0.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, $ as useRouter, k as ref, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, g as normalizeClass, W as withModifiers, h as unref, a2 as withKeys, s as createVNode, w as withCtx, y as createCommentVNode, T as Transition, x as createTextVNode, U as nextTick, a1 as useHead } from "./vendor.6548d360.js";
import { V as VueScrollTo } from "./vue-scrollto.6b4fda56.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./useThemeColors.b71015d4.js";
var _imports_0 = "/assets/1.0b0d7590.svg";
var FormLayoutStepper_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "mobile-steps is-active" };
const _hoisted_2 = { class: "steps has-content-centered is-thin is-horizontal is-short" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 1", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 2", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 3", -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 4", -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "Step 5", -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = { class: "stepper-form" };
const _hoisted_19 = { class: "form-sections" };
const _hoisted_20 = {
  key: 0,
  id: "form-step-0",
  class: "form-section is-active"
};
const _hoisted_21 = { class: "form-section-title" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "General Information", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = { class: "form-section-inner" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "What is this shipment about?"
}, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("button", { class: "input-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  }),
  /* @__PURE__ */ createBaseVNode("span", null, "Add shipment group")
], -1);
const _hoisted_28 = { class: "fieldset" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Group name"
}, null, -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Group description"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "checkbox",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" Fragile ")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-separator" }, null, -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-label" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Control Service")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("label", null, "Type", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("label", null, "Additional Notes", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Add some additional notes"
}, null, -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("label", null, "Method", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("label", null, "Quantity (units)", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("input", {
  type: "number",
  class: "input",
  placeholder: "Enter a quantity"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("label", null, "Duration (days)", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("input", {
  type: "number",
  class: "input",
  placeholder: "Enter a storage duration"
}, null, -1);
const _hoisted_42 = { class: "buttons" };
const _hoisted_43 = /* @__PURE__ */ createTextVNode("Add Shipment");
const _hoisted_44 = { class: "form-section-output" };
const _hoisted_45 = { class: "output" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:archive"
}, null, -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("span", null, "15 i9 Laptops - b2", -1);
const _hoisted_48 = { class: "action" };
const _hoisted_49 = {
  key: 0,
  id: "form-step-1",
  class: "form-section is-active"
};
const _hoisted_50 = { class: "form-section-title" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("span", null, "Shipment Owner", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_53 = [
  _hoisted_52
];
const _hoisted_54 = { class: "form-section-inner" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Owning company name"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("button", { class: "input-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  }),
  /* @__PURE__ */ createBaseVNode("span", null, "Add contact")
], -1);
const _hoisted_57 = { class: "fieldset" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Full name"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Email address"
}, null, -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "checkbox",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" Primary ")
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Phone number"
}, null, -1);
const _hoisted_62 = { class: "form-section-output" };
const _hoisted_63 = { class: "output" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("span", null, "Erik Kovalsky", -1);
const _hoisted_66 = { class: "action" };
const _hoisted_67 = { class: "output" };
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("span", null, "Elsa Walker", -1);
const _hoisted_70 = { class: "action" };
const _hoisted_71 = {
  key: 0,
  id: "form-step-2",
  class: "form-section is-active"
};
const _hoisted_72 = { class: "form-section-title" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("span", null, "Shipment Taxes", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_75 = [
  _hoisted_74
];
const _hoisted_76 = { class: "form-section-inner" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Company Tax ID"
}, null, -1);
const _hoisted_78 = { class: "columns" };
const _hoisted_79 = { class: "column is-6" };
const _hoisted_80 = { class: "column is-6" };
const _hoisted_81 = {
  key: 0,
  id: "form-step-3",
  class: "form-section is-active"
};
const _hoisted_82 = { class: "form-section-title" };
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", null, "Options", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_85 = [
  _hoisted_84
];
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("div", { class: "form-section-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "options" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-consulting"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "Double check"),
        /* @__PURE__ */ createBaseVNode("p", null, "Second control pass")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-tie"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "Agent"),
        /* @__PURE__ */ createBaseVNode("p", null, "Dedicated agent")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-handshake"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "Insurance"),
        /* @__PURE__ */ createBaseVNode("p", null, "Level 1-3 goods")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-licencse"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "Extension"),
        /* @__PURE__ */ createBaseVNode("p", null, "License extension")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-pie-chart-alt"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "BI Reports"),
        /* @__PURE__ */ createBaseVNode("p", null, "Custom made reports")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "option" }, [
      /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:check"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "option-inner" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-customer"
        }),
        /* @__PURE__ */ createBaseVNode("h4", null, "Metrics"),
        /* @__PURE__ */ createBaseVNode("p", null, "Setup live metrics")
      ])
    ])
  ])
], -1);
const _hoisted_87 = {
  key: 0,
  id: "form-step-4",
  class: "form-section is-active"
};
const _hoisted_88 = { class: "form-section-title" };
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("span", null, "Validation", -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_91 = [
  _hoisted_90
];
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("div", { class: "form-section-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "validation-box" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "box-content" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Excellent"),
      /* @__PURE__ */ createBaseVNode("p", null, " Before submitting the form, make sure you've filled all the required fields. Once submitted, you won't be able to change the info for this shipment. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "box-illustration" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_0,
        alt: ""
      })
    ])
  ])
], -1);
const _hoisted_93 = { class: "navigation-buttons" };
const _hoisted_94 = { class: "buttons is-right" };
const _hoisted_95 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_96 = { class: "form-stepper" };
const _hoisted_97 = {
  key: 0,
  class: "steps is-vertical is-thin is-short"
};
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "STEP 1"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "General Information")
], -1);
const _hoisted_100 = [
  _hoisted_98,
  _hoisted_99
];
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "STEP 2"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Shipment Owner")
], -1);
const _hoisted_103 = [
  _hoisted_101,
  _hoisted_102
];
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "STEP 3"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Shipment Taxes")
], -1);
const _hoisted_106 = [
  _hoisted_104,
  _hoisted_105
];
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "STEP 4"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Options")
], -1);
const _hoisted_109 = [
  _hoisted_107,
  _hoisted_108
];
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("div", { class: "steps-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "step-number" }, "STEP 5"),
  /* @__PURE__ */ createBaseVNode("p", { class: "step-info" }, "Validation")
], -1);
const _hoisted_112 = [
  _hoisted_110,
  _hoisted_111
];
const _hoisted_113 = {
  key: 1,
  class: "form-help"
};
const _hoisted_114 = {
  key: 0,
  id: "help-section-0",
  class: "form-help-inner is-active"
};
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_116 = [
  _hoisted_115
];
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("h3", null, "General Information", -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_120 = {
  key: 1,
  id: "help-section-1",
  class: "form-help-inner is-active"
};
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_122 = [
  _hoisted_121
];
const _hoisted_123 = /* @__PURE__ */ createBaseVNode("h3", null, "Shipment Owner", -1);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_126 = {
  key: 2,
  id: "help-section-2",
  class: "form-help-inner is-active"
};
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_128 = [
  _hoisted_127
];
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("h3", null, "Shipment Taxes", -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ", -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_132 = {
  key: 3,
  id: "help-section-3",
  class: "form-help-inner is-active"
};
const _hoisted_133 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_134 = [
  _hoisted_133
];
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("h3", null, "Options", -1);
const _hoisted_136 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _hoisted_138 = {
  key: 4,
  id: "help-section-4",
  class: "form-help-inner is-active"
};
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_140 = [
  _hoisted_139
];
const _hoisted_141 = /* @__PURE__ */ createBaseVNode("h3", null, "Validation", -1);
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ", -1);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("div", { class: "list-wrap" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Some nice list item")
    ])
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const notyf = useNotyf();
    const { scrollTo } = VueScrollTo;
    const currentStep = ref(0);
    const isLoading = ref(false);
    const currentHelp = ref(-1);
    const controlType = ref("");
    const storageType = ref("");
    const taxType = ref("");
    const taxStatements = ref("");
    const validateStep = async () => {
      if (currentStep.value === 4) {
        if (isLoading.value) {
          return;
        }
        isLoading.value = true;
        notyf.success("Your shipment is successfully stored!");
        await sleep(1e3);
        router.push({
          name: "sidebar-dashboards"
        });
        return;
      }
      isLoading.value = true;
      await sleep(400);
      currentStep.value += 1;
      nextTick(() => {
        scrollTo(`#form-step-${currentStep.value}`, 1e3);
        isLoading.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VSwitchSegment = _sfc_main$3;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VButton = _sfc_main$4;
      const _component_VIconButton = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("ul", _hoisted_2, [
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 0 && "is-active"], "steps-segment"])
            }, [
              _hoisted_3,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_5)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 1 && "is-active"], "steps-segment"])
            }, [
              _hoisted_6,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_8)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 2 && "is-active"], "steps-segment"])
            }, [
              _hoisted_9,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_11)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 3 && "is-active"], "steps-segment"])
            }, [
              _hoisted_12,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[3] || (_cache[3] = withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_14)
            ], 2),
            createBaseVNode("li", {
              class: normalizeClass([[currentStep.value === 4 && "is-active"], "steps-segment"])
            }, [
              _hoisted_15,
              createBaseVNode("a", {
                href: "#",
                class: "steps-content",
                onClick: _cache[4] || (_cache[4] = withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -150 }), ["prevent"]))
              }, _hoisted_17)
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            currentStep.value >= 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
              createBaseVNode("h3", _hoisted_21, [
                _hoisted_22,
                createBaseVNode("button", {
                  class: "help-button",
                  tabindex: "0",
                  onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => currentHelp.value === 0 ? currentHelp.value = -1 : currentHelp.value = 0, ["prevent"]), ["space"])),
                  onClick: _cache[6] || (_cache[6] = ($event) => currentHelp.value === 0 ? currentHelp.value = -1 : currentHelp.value = 0)
                }, _hoisted_24, 32)
              ]),
              createBaseVNode("div", _hoisted_25, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_26
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
                        _hoisted_27
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_28, [
                  createVNode(_component_VField, { grouped: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { expanded: "" }, {
                        default: withCtx(() => [
                          _hoisted_29
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { subcontrol: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VSwitchSegment, {
                            color: "primary",
                            "label-true": "Other",
                            "label-false": "Ground"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, { grouped: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { expanded: "" }, {
                        default: withCtx(() => [
                          _hoisted_30
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { subcontrol: "" }, {
                        default: withCtx(() => [
                          _hoisted_31
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _hoisted_32,
                  createVNode(_component_VField, { grouped: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { expanded: "" }, {
                        default: withCtx(() => [
                          _hoisted_33
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { subcontrol: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VSwitchSegment, {
                            "label-true": "ON",
                            "label-false": "OFF"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_34,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: controlType.value,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => controlType.value = $event),
                            options: ["X-REF Quality", "SERPA Check", "AMF Check"],
                            placeholder: "Select a control type"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_35,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_36
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_37,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: storageType.value,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => storageType.value = $event),
                            options: [
                              "LVL 1 Security warehouse",
                              "LVL 2 Security warehouse",
                              "LVL 3 Security warehouse"
                            ],
                            placeholder: "Select a storage"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_38,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_39
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_40,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_41
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_42, [
                        createVNode(_component_VButton, null, {
                          default: withCtx(() => [
                            _hoisted_43
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("div", _hoisted_45, [
                  _hoisted_46,
                  _hoisted_47,
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(_component_VIconButton, { icon: "feather:trash-2" })
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 1 ? (openBlock(), createElementBlock("div", _hoisted_49, [
                  createBaseVNode("h3", _hoisted_50, [
                    _hoisted_51,
                    createBaseVNode("button", {
                      class: "help-button",
                      onKeydown: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => currentHelp.value === 1 ? currentHelp.value = -1 : currentHelp.value = 1, ["prevent"]), ["space"])),
                      onClick: _cache[10] || (_cache[10] = ($event) => currentHelp.value === 1 ? currentHelp.value = -1 : currentHelp.value = 1)
                    }, _hoisted_53, 32)
                  ]),
                  createBaseVNode("div", _hoisted_54, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_55
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
                            _hoisted_56
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_57, [
                      createVNode(_component_VField, { grouped: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { expanded: "" }, {
                            default: withCtx(() => [
                              _hoisted_58
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { subcontrol: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VSwitchSegment, {
                                "label-true": "Ground",
                                "label-false": "Other"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VField, { grouped: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { expanded: "" }, {
                            default: withCtx(() => [
                              _hoisted_59
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { subcontrol: "" }, {
                            default: withCtx(() => [
                              _hoisted_60
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VField, { grouped: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { expanded: "" }, {
                            default: withCtx(() => [
                              _hoisted_61
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { subcontrol: "" })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_62, [
                    createBaseVNode("div", _hoisted_63, [
                      _hoisted_64,
                      _hoisted_65,
                      createBaseVNode("div", _hoisted_66, [
                        createVNode(_component_VIconButton, { icon: "feather:trash-2" })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_67, [
                      _hoisted_68,
                      _hoisted_69,
                      createBaseVNode("div", _hoisted_70, [
                        createVNode(_component_VIconButton, { icon: "feather:trash-2" })
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 2 ? (openBlock(), createElementBlock("div", _hoisted_71, [
                  createBaseVNode("h3", _hoisted_72, [
                    _hoisted_73,
                    createBaseVNode("button", {
                      class: "help-button",
                      onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => currentHelp.value === 2 ? currentHelp.value = -1 : currentHelp.value = 2, ["prevent"]), ["space"])),
                      onClick: _cache[12] || (_cache[12] = ($event) => currentHelp.value === 2 ? currentHelp.value = -1 : currentHelp.value = 2)
                    }, _hoisted_75, 32)
                  ]),
                  createBaseVNode("div", _hoisted_76, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_77
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_78, [
                      createBaseVNode("div", _hoisted_79, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Multiselect, {
                                  modelValue: taxType.value,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => taxType.value = $event),
                                  options: ["VAT", "RFC", "SFC"],
                                  placeholder: "Tax Type"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_80, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Multiselect, {
                                  modelValue: taxStatements.value,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => taxStatements.value = $event),
                                  options: ["W-12 Form", "W-12a Form", "Z-Form"],
                                  placeholder: "Tax Statements"
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
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 3 ? (openBlock(), createElementBlock("div", _hoisted_81, [
                  createBaseVNode("h3", _hoisted_82, [
                    _hoisted_83,
                    createBaseVNode("button", {
                      class: "help-button",
                      onKeydown: _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => currentHelp.value === 3 ? currentHelp.value = -1 : currentHelp.value = 3, ["prevent"]), ["space"])),
                      onClick: _cache[16] || (_cache[16] = ($event) => currentHelp.value === 3 ? currentHelp.value = -1 : currentHelp.value = 3)
                    }, _hoisted_85, 32)
                  ]),
                  _hoisted_86
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade-slow" }, {
              default: withCtx(() => [
                currentStep.value >= 4 ? (openBlock(), createElementBlock("div", _hoisted_87, [
                  createBaseVNode("h3", _hoisted_88, [
                    _hoisted_89,
                    createBaseVNode("button", {
                      class: "help-button",
                      onKeydown: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => currentHelp.value === 4 ? currentHelp.value = -1 : currentHelp.value = 4, ["prevent"]), ["space"])),
                      onClick: _cache[18] || (_cache[18] = ($event) => currentHelp.value === 4 ? currentHelp.value = -1 : currentHelp.value = 4)
                    }, _hoisted_91, 32)
                  ]),
                  _hoisted_92
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_93, [
              createBaseVNode("div", _hoisted_94, [
                createVNode(_component_VButton, {
                  color: "primary",
                  bold: "",
                  loading: isLoading.value,
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(validateStep, ["prevent"]), ["space"]),
                  onClick: validateStep
                }, {
                  default: withCtx(() => [
                    _hoisted_95
                  ]),
                  _: 1
                }, 8, ["loading", "onKeydown"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_96, [
            currentHelp.value === -1 ? (openBlock(), createElementBlock("ul", _hoisted_97, [
              createBaseVNode("li", {
                id: "step-segment-0",
                class: normalizeClass([[currentStep.value === 0 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[19] || (_cache[19] = withKeys(withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[20] || (_cache[20] = withModifiers(($event) => currentStep.value >= 0 && unref(scrollTo)("#form-step-0", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_100, 34),
              createBaseVNode("li", {
                id: "step-segment-1",
                class: normalizeClass([[currentStep.value === 1 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[21] || (_cache[21] = withKeys(withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[22] || (_cache[22] = withModifiers(($event) => currentStep.value >= 1 && unref(scrollTo)("#form-step-1", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_103, 34),
              createBaseVNode("li", {
                id: "step-segment-2",
                class: normalizeClass([[currentStep.value === 2 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[23] || (_cache[23] = withKeys(withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[24] || (_cache[24] = withModifiers(($event) => currentStep.value >= 2 && unref(scrollTo)("#form-step-2", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_106, 34),
              createBaseVNode("li", {
                id: "step-segment-3",
                class: normalizeClass([[currentStep.value === 3 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[25] || (_cache[25] = withKeys(withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[26] || (_cache[26] = withModifiers(($event) => currentStep.value >= 3 && unref(scrollTo)("#form-step-3", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_109, 34),
              createBaseVNode("li", {
                id: "step-segment-4",
                class: normalizeClass([[currentStep.value === 4 && "is-active"], "steps-segment"]),
                tabindex: "0",
                onKeydown: _cache[27] || (_cache[27] = withKeys(withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -20 }), ["prevent"]), ["space"])),
                onClick: _cache[28] || (_cache[28] = withModifiers(($event) => currentStep.value >= 4 && unref(scrollTo)("#form-step-4", 800, { offset: -20 }), ["prevent"]))
              }, _hoisted_112, 34)
            ])) : (openBlock(), createElementBlock("div", _hoisted_113, [
              currentHelp.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_114, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[29] || (_cache[29] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[30] || (_cache[30] = ($event) => currentHelp.value = -1)
                }, _hoisted_116, 32),
                _hoisted_117,
                _hoisted_118,
                _hoisted_119
              ])) : createCommentVNode("", true),
              currentHelp.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_120, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[31] || (_cache[31] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[32] || (_cache[32] = ($event) => currentHelp.value = -1)
                }, _hoisted_122, 32),
                _hoisted_123,
                _hoisted_124,
                _hoisted_125
              ])) : createCommentVNode("", true),
              currentHelp.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_126, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[33] || (_cache[33] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[34] || (_cache[34] = ($event) => currentHelp.value = -1)
                }, _hoisted_128, 32),
                _hoisted_129,
                _hoisted_130,
                _hoisted_131
              ])) : createCommentVNode("", true),
              currentHelp.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_132, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[35] || (_cache[35] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[36] || (_cache[36] = ($event) => currentHelp.value = -1)
                }, _hoisted_134, 32),
                _hoisted_135,
                _hoisted_136,
                _hoisted_137
              ])) : createCommentVNode("", true),
              currentHelp.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_138, [
                createBaseVNode("button", {
                  class: "close-help-button",
                  tabindex: "0",
                  onKeydown: _cache[37] || (_cache[37] = withKeys(withModifiers(($event) => currentHelp.value = -1, ["prevent"]), ["space"])),
                  onClick: _cache[38] || (_cache[38] = ($event) => currentHelp.value = -1)
                }, _hoisted_140, 32),
                _hoisted_141,
                _hoisted_142,
                _hoisted_143
              ])) : createCommentVNode("", true)
            ]))
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
    viewWrapper.setPageTitle("Form Layouts 5");
    useHead({
      title: "Form Layouts 5 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_FormLayoutStepper = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FormLayoutStepper)
      ]);
    };
  }
});
export { _sfc_main as default };
