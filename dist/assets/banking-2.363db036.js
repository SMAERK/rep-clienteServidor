import { b as _sfc_main$5 } from "./index.e178843f.js";
import { _ as _sfc_main$4 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$3 } from "./VIconBox.298b3a59.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, Y as onMounted, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, s as createVNode, w as withCtx, h as unref, ag as isRef, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { t as tns } from "./tiny-slider.d87e9682.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const themeColors = useThemeColors();
function generateDayWiseTimeSeries(s, count) {
  const values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2]
  ];
  let i = 0;
  const series = [];
  let x = new Date("11 Nov 2020").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 864e5;
    i++;
  }
  return series;
}
const expensesOptions = {
  chart: {
    type: "area",
    height: 220,
    foreColor: "#999",
    stacked: true,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    }
  },
  colors: [themeColors.green, themeColors.accent, themeColors.orange],
  stroke: {
    curve: "smooth",
    width: 3
  },
  title: {
    text: "",
    align: "left"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Cash Expenses",
      data: generateDayWiseTimeSeries(0, 18)
    },
    {
      name: "Card Expenses",
      data: generateDayWiseTimeSeries(1, 18)
    }
  ],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    }
  },
  grid: {
    show: false,
    padding: {
      left: -5,
      right: 5
    }
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "left"
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};
const valueSingle = 0;
const optionsSingle = [
  "Last 10 days",
  "Last month",
  "Last 3 months",
  "Last 6 months"
];
var BankingDashboardV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "banking-dashboard banking-dashboard-v2" };
const _hoisted_2 = { class: "dashboard-card is-card-panel" };
const _hoisted_3 = { class: "columns is-gapless" };
const _hoisted_4 = { class: "column is-8" };
const _hoisted_5 = { class: "inner-box has-bounds" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "My Cards")
], -1);
const _hoisted_7 = { class: "cards-wrapper" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "controls" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button is-large" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-medium" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:plus"
      })
    ])
  ])
], -1);
const _hoisted_9 = { class: "cards-carousel" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "$6,341.14"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 4986")
  ])
], -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "$2,211.27"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 3619")
  ])
], -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "$1,228.49"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 5818")
  ])
], -1);
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "$3,412,16"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 7652")
  ])
], -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = { class: "inner-box" };
const _hoisted_20 = { class: "box-title" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h3", null, "Balance", -1);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<div class="card-balance-wrap"><div class="card-balance"><span>$6,341.14</span><span>**** **** **** 4986</span></div><div class="card-balance-stats"><div class="card-balance-stat"><div class="stat-title"><span>Income</span></div><div class="stat-block"><div class="stat-icon is-up"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></div><div class="stat-text"><span>+ 2,324.12</span></div></div></div><div class="card-balance-stat"><div class="stat-title"><span>Expense</span></div><div class="stat-block"><div class="stat-icon is-down"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></div><div class="stat-text"><span>+ 518.41</span></div></div></div></div></div>', 1);
const _hoisted_23 = { class: "dashboard-card is-card-panel is-grey" };
const _hoisted_24 = { class: "columns is-gapless" };
const _hoisted_25 = { class: "column is-8" };
const _hoisted_26 = { class: "inner-box" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Monthly Summary")
], -1);
const _hoisted_28 = { class: "columns" };
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<div class="column is-4"><div class="monthly-summary-wrap"><div class="monthly-summary"><div class="monthly-summary-item"><span>Income</span><span class="is-income">+$5,000.00</span></div><div class="monthly-summary-item"><span>Expenses</span><span class="is-expense">-$263.19</span></div></div></div></div>', 1);
const _hoisted_30 = { class: "column is-8" };
const _hoisted_31 = { class: "chart-wrapper" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("a", {
  class: "action-link",
  tabindex: "0"
}, "All Reports", -1);
const _hoisted_33 = { class: "column is-4" };
const _hoisted_34 = { class: "inner-box" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Transactions"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_36 = { class: "transactions" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-service"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- $41.49", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ $263.39", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cart-alt"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- $92.00", -1);
const _hoisted_43 = { class: "button-wrap" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode("New");
const _hoisted_45 = /* @__PURE__ */ createTextVNode("Settings");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let slider;
    const sliderElement = ref();
    onMounted(() => {
      if (sliderElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: false,
          nav: true,
          mouseDrag: true,
          items: 1.9,
          center: false,
          loop: false,
          responsive: {
            320: {
              items: 1.7
            },
            700: {
              items: 1.9
            },
            900: {
              items: 1.9
            }
          }
        });
      }
    });
    const goto = (index) => {
      if (slider) {
        slider.goTo(index);
      }
    };
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                createBaseVNode("div", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", {
                      ref_key: "sliderElement",
                      ref: sliderElement,
                      class: "cards-carousel-inner"
                    }, [
                      createBaseVNode("div", {
                        class: "cards-carousel-item",
                        tabindex: "0",
                        onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => goto(0), ["prevent"]), ["space"])),
                        onClick: _cache[1] || (_cache[1] = ($event) => goto(0))
                      }, _hoisted_11, 32),
                      createBaseVNode("div", {
                        class: "cards-carousel-item",
                        tabindex: "0",
                        onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => goto(1), ["prevent"]), ["space"])),
                        onClick: _cache[3] || (_cache[3] = ($event) => goto(1))
                      }, _hoisted_13, 32),
                      createBaseVNode("div", {
                        class: "cards-carousel-item",
                        tabindex: "0",
                        onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => goto(2), ["prevent"]), ["space"])),
                        onClick: _cache[5] || (_cache[5] = ($event) => goto(2))
                      }, _hoisted_15, 32),
                      createBaseVNode("div", {
                        class: "cards-carousel-item",
                        tabindex: "0",
                        onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => goto(3), ["prevent"]), ["space"])),
                        onClick: _cache[7] || (_cache[7] = ($event) => goto(3))
                      }, _hoisted_17, 32)
                    ], 512)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  _hoisted_21,
                  createVNode(_component_VField, { class: "is-minimal-select" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(valueSingle),
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                            options: unref(optionsSingle),
                            placeholder: "Select an option",
                            "max-height": 145
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_22
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _hoisted_27,
                createBaseVNode("div", _hoisted_28, [
                  _hoisted_29,
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      _hoisted_32,
                      createVNode(unref(ApexChart), {
                        id: "timeline-chart",
                        height: unref(expensesOptions).chart.height,
                        type: unref(expensesOptions).chart.type,
                        series: unref(expensesOptions).series,
                        options: unref(expensesOptions)
                      }, null, 8, ["height", "type", "series", "options"])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _hoisted_35,
                createBaseVNode("div", _hoisted_36, [
                  createVNode(_component_VBlock, {
                    title: "Food Delivery",
                    subtitle: "Oct 23, 2020 - 8:46pm",
                    center: "",
                    lighter: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_VIconBox, {
                        color: "green",
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_37
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_38
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VBlock, {
                    title: "Market Earnings",
                    subtitle: "Oct 18, 2020 - 9:11am",
                    center: "",
                    lighter: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_VIconBox, {
                        color: "orange",
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_39
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_40
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VBlock, {
                    title: "Online Order",
                    subtitle: "Oct 16, 2020 - 2:13pm",
                    center: "",
                    lighter: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_VIconBox, {
                        color: "purple",
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_41
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_42
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    fullwidth: "",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_44
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, { fullwidth: "" }, {
                    default: withCtx(() => [
                      _hoisted_45
                    ]),
                    _: 1
                  })
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
    viewWrapper.setPageTitle("Banking 2");
    useHead({
      title: "Banking 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_BankingDashboardV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_BankingDashboardV2)
      ]);
    };
  }
});
export { _sfc_main as default };
