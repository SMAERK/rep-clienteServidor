import { b as _sfc_main$5 } from "./index.e178843f.js";
import { _ as _sfc_main$4 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { g as gaugeOptions } from "./goalChart.dfe48889.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { c as creativityRadialOptions, e as engagmentRadialOptions, p as popularityRadialOptions } from "./groupedSocialCharts.45b95979.js";
import { k as ref, d as defineComponent, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, h as unref, w as withCtx, ag as isRef, t as toDisplayString, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
const themeColors = useThemeColors();
const incomeOptions = {
  series: [
    {
      name: "Returning",
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45]
    },
    {
      name: "NewComers",
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
    },
    {
      name: "Abandoned",
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
    }
  ],
  chart: {
    height: 300,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.info, themeColors.orange],
  title: {
    text: "Customer",
    align: "left"
  },
  legend: {
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-10-19T00:00:00.000Z",
      "2020-10-20T01:30:00.000Z",
      "2020-10-21T02:30:00.000Z",
      "2020-10-22T03:30:00.000Z",
      "2020-10-23T04:30:00.000Z",
      "2020-10-24T05:30:00.000Z",
      "2020-10-25T06:30:00.000Z",
      "2020-10-26T06:30:00.000Z",
      "2020-10-27T06:30:00.000Z",
      "2020-10-28T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
const selectSlotValue = ["default"];
const selectSlotOptions = [
  {
    value: "default",
    name: "Select an account",
    icon: "/images/avatars/svg/vuero-1.svg"
  },
  {
    value: "4156 1000 56565 17",
    name: "4156 1000 56565 17"
  },
  {
    value: "2247 2427 89975 12",
    name: "2247 2427 89975 12"
  },
  {
    value: "2247 2427 89975 19",
    name: "2247 2427 89975 19"
  }
];
const valueSingle = ref(0);
const optionsSingle = [
  "Last 10 days",
  "Last month",
  "Last 3 months",
  "Last 6 months"
];
var BankingDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "banking-dashboard banking-dashboard-v1" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12 is-full-tablet-p" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = { class: "stat-widget grouped-stat-widget is-straight" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Social Points")
], -1);
const _hoisted_8 = { class: "chart-group" };
const _hoisted_9 = { class: "group" };
const _hoisted_10 = { class: "group-content" };
const _hoisted_11 = { class: "chart-container" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ 234", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "Creativity", -1);
const _hoisted_14 = { class: "group" };
const _hoisted_15 = { class: "group-content" };
const _hoisted_16 = { class: "chart-container" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+37%", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, "Engagement", -1);
const _hoisted_19 = { class: "group" };
const _hoisted_20 = { class: "group-content" };
const _hoisted_21 = { class: "chart-container" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+82%", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "Popularity", -1);
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = { class: "dashboard-card is-income" };
const _hoisted_26 = { class: "column is-4" };
const _hoisted_27 = { class: "dashboard-card" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Goal Overview")
], -1);
const _hoisted_29 = { class: "radial-wrap" };
const _hoisted_30 = /* @__PURE__ */ createStaticVNode('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>', 1);
const _hoisted_31 = { class: "column is-6" };
const _hoisted_32 = { class: "dashboard-card is-contacts" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Send Money To")
], -1);
const _hoisted_34 = { class: "people-wrap" };
const _hoisted_35 = { class: "people" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "actions" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "See all Contacts"),
  /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary-hover" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-right"
    })
  ])
], -1);
const _hoisted_37 = { class: "transfer-form" };
const _hoisted_38 = { class: "multiselect-single-label" };
const _hoisted_39 = ["src"];
const _hoisted_40 = { class: "select-label-text" };
const _hoisted_41 = ["src"];
const _hoisted_42 = { class: "select-label-text" };
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<div class="field"><label>Amount</label><div class="field has-addons"><div class="control"><span class="select currency-select"><select><option>$</option><option>\xA3</option><option>\u20AC</option></select></span></div><div class="control is-expanded"><input class="input" type="text" placeholder="Amount of money"></div></div></div><p class="context-text">Funds will reach destination tomorrow.</p>', 2);
const _hoisted_45 = { class: "submit-wrap" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" Send Money ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_UserPopoverContent = _sfc_main$4;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(unref(ApexChart), {
                            id: "widget-group-radial-1",
                            height: unref(creativityRadialOptions).chart.height,
                            type: unref(creativityRadialOptions).chart.type,
                            series: unref(creativityRadialOptions).series,
                            options: unref(creativityRadialOptions)
                          }, null, 8, ["height", "type", "series", "options"])
                        ]),
                        _hoisted_12,
                        _hoisted_13
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          createVNode(unref(ApexChart), {
                            id: "widget-group-radial-2",
                            height: unref(engagmentRadialOptions).chart.height,
                            type: unref(engagmentRadialOptions).chart.type,
                            series: unref(engagmentRadialOptions).series,
                            options: unref(engagmentRadialOptions)
                          }, null, 8, ["height", "type", "series", "options"])
                        ]),
                        _hoisted_17,
                        _hoisted_18
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(unref(ApexChart), {
                            id: "widget-group-radial-3",
                            height: unref(popularityRadialOptions).chart.height,
                            type: unref(popularityRadialOptions).chart.type,
                            series: unref(popularityRadialOptions).series,
                            options: unref(popularityRadialOptions)
                          }, null, 8, ["height", "type", "series", "options"])
                        ]),
                        _hoisted_22,
                        _hoisted_23
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(_component_VField, { class: "is-minimal-select" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(valueSingle),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                            options: unref(optionsSingle),
                            placeholder: "Select an option",
                            "max-height": 145
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ApexChart), {
                    id: "income-chart",
                    height: unref(incomeOptions).chart.height,
                    type: unref(incomeOptions).chart.type,
                    series: unref(incomeOptions).series,
                    options: unref(incomeOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  _hoisted_28,
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(unref(ApexChart), {
                      id: "goal-gauge",
                      height: unref(gaugeOptions).chart.height,
                      type: unref(gaugeOptions).chart.type,
                      series: unref(gaugeOptions).series,
                      options: unref(gaugeOptions)
                    }, null, 8, ["height", "type", "series", "options"]),
                    _hoisted_30
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  _hoisted_33,
                  createBaseVNode("div", _hoisted_34, [
                    createBaseVNode("div", _hoisted_35, [
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user122
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "warning",
                            initials: "BT",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user18
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user123
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "info",
                            initials: "JD",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user7
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _hoisted_36
                  ]),
                  createBaseVNode("div", _hoisted_37, [
                    createVNode(_component_VField, { class: "is-image-select has-curved-images" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: unref(selectSlotValue),
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectSlotValue) ? selectSlotValue.value = $event : null),
                              placeholder: "Select a language",
                              label: "name",
                              "max-height": 145,
                              options: unref(selectSlotOptions)
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_38, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_39),
                                  createBaseVNode("span", _hoisted_40, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_41),
                                createBaseVNode("span", _hoisted_42, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_43,
                    createBaseVNode("div", _hoisted_45, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        size: "big",
                        fullwidth: "",
                        raised: "",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_46
                        ]),
                        _: 1
                      })
                    ])
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
    viewWrapper.setPageTitle("Banking 1");
    useHead({
      title: "Banking 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_BankingDashboardV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_BankingDashboardV1)
      ]);
    };
  }
});
export { _sfc_main as default };
