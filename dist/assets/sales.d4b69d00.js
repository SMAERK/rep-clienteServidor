import { _ as _sfc_main$5 } from "./UIWidget.6c4793e7.js";
import { _ as _sfc_main$4 } from "./VBillboardJS.a97b3f73.js";
import { _ as __unplugin_components_2 } from "./WidgetDropdown.be0631d8.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VAvatar.08652fea.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { s as spark1, a as spark2, b as spark3, c as spark4, r as revenueOptions } from "./revenueAreaChart.fbe33e35.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { a9 as reactive, d as defineComponent, Y as onMounted, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, x as createTextVNode, ae as createStaticVNode, a1 as useHead } from "./vendor.6548d360.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.107d1f23.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./via-placeholder.9af8280d.js";
const themeColors$2 = useThemeColors();
const salesRevenuesRadialOptions = {
  series: [65],
  chart: {
    height: 155,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$2.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "75%"
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: "12px",
          fontWeight: 400,
          offsetY: 5,
          color: themeColors$2.lightText
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          color: themeColors$2.info,
          fontSize: "16px",
          offsetY: 5
        }
      }
    }
  },
  labels: ["Progress"]
};
const themeColors$1 = useThemeColors();
const radialGroup1Options = {
  series: [31],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const radialGroup2Options = {
  series: [53],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.purple],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const radialGroup3Options = {
  series: [84],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.green],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const themeColors = useThemeColors();
const barData = [
  {
    x: "Jan",
    y: 322
  },
  {
    x: "Feb",
    y: 459
  },
  {
    x: "Mar",
    y: 212
  },
  {
    x: "Apr",
    y: 345
  },
  {
    x: "May",
    y: 111
  },
  {
    x: "Jun",
    y: 189
  },
  {
    x: "Jul",
    y: 498
  },
  {
    x: "Aug",
    y: 612
  },
  {
    x: "Sep",
    y: 451
  },
  {
    x: "Oct",
    y: 248
  },
  {
    x: "Nov",
    y: 306
  },
  {
    x: "Dec",
    y: 366
  }
];
const barData2 = [
  {
    x: "Jan",
    y: 25
  },
  {
    x: "Feb",
    y: 49
  },
  {
    x: "Mar",
    y: 36
  },
  {
    x: "Apr",
    y: 84
  },
  {
    x: "May",
    y: 64
  },
  {
    x: "Jun",
    y: 131
  },
  {
    x: "Jul",
    y: 48
  },
  {
    x: "Aug",
    y: 144
  },
  {
    x: "Sep",
    y: 96
  },
  {
    x: "Oct",
    y: 11
  },
  {
    x: "Nov",
    y: 31
  },
  {
    x: "Dec",
    y: 8
  }
];
const salesBarOptions = reactive({
  series: [],
  chart: {
    height: 205,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.green],
  dataLabels: {
    enabled: false
  },
  noData: {
    text: "Loading..."
  },
  xaxis: {
    type: "category",
    tickPlacement: "on",
    labels: {
      rotate: -45,
      rotateAlways: true
    }
  }
});
var SalesDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "finance-dashboard sales-dashboard" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "start" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Welcome back, Erik Kovalsky"),
  /* @__PURE__ */ createBaseVNode("p", null, "We're very happy to see you again on your dashboard.")
], -1);
const _hoisted_4 = { class: "end" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("View Reports");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Transactions");
const _hoisted_7 = { class: "spark-tiles" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-3" };
const _hoisted_10 = { class: "spark-tile" };
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = { class: "spark-tile" };
const _hoisted_13 = { class: "column is-3" };
const _hoisted_14 = { class: "spark-tile" };
const _hoisted_15 = { class: "column is-3" };
const _hoisted_16 = { class: "spark-tile" };
const _hoisted_17 = { class: "column is-7" };
const _hoisted_18 = { class: "dashboard-card" };
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="card-head"><h3 class="dark-inverted">Revenue Overview</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>', 2);
const _hoisted_21 = { class: "column is-5" };
const _hoisted_22 = { class: "dashboard-card flex-chart" };
const _hoisted_23 = { class: "chart-media" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Sales Revenue"),
  /* @__PURE__ */ createBaseVNode("span", { class: "is-dark-primary" }, "$8,641.26"),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria. ")
], -1);
const _hoisted_25 = { class: "chart-container" };
const _hoisted_26 = { class: "dashboard-card flex-chart" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Additional Stats")
], -1);
const _hoisted_28 = { class: "chart-group" };
const _hoisted_29 = { class: "group" };
const _hoisted_30 = { class: "group-content" };
const _hoisted_31 = { class: "chart-container" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "264", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "New Deals", -1);
const _hoisted_34 = { class: "group" };
const _hoisted_35 = { class: "group-content" };
const _hoisted_36 = { class: "chart-container" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "1,203", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "Proposals", -1);
const _hoisted_39 = { class: "group" };
const _hoisted_40 = { class: "group-content" };
const _hoisted_41 = { class: "chart-container" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "3,078", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "Closed Deals", -1);
const _hoisted_44 = { class: "column is-3" };
const _hoisted_45 = { class: "widget gauge-widget is-straight" };
const _hoisted_46 = { class: "widget-toolbar" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "is-bigger" }, "Personal Score")
], -1);
const _hoisted_48 = { class: "right" };
const _hoisted_49 = { class: "gauge-wrap" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", {
  id: "gauge-holder",
  class: "gauge-holder"
}, null, -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Your score has been calculated based on the latest metrics")
], -1);
const _hoisted_52 = { class: "column is-6" };
const _hoisted_53 = { class: "dashboard-card" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Orders Summary")
], -1);
const _hoisted_55 = { class: "column is-3" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-left"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "center" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-right"
      })
    ])
  ])
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Mon"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Tue"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Wed"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Thu"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Fri"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sat"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sun")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "29"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "30"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "31"),
      /* @__PURE__ */ createBaseVNode("td", null, "1"),
      /* @__PURE__ */ createBaseVNode("td", null, "2"),
      /* @__PURE__ */ createBaseVNode("td", null, "3"),
      /* @__PURE__ */ createBaseVNode("td", null, "4")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "5"),
      /* @__PURE__ */ createBaseVNode("td", null, "6"),
      /* @__PURE__ */ createBaseVNode("td", null, "7"),
      /* @__PURE__ */ createBaseVNode("td", null, "8"),
      /* @__PURE__ */ createBaseVNode("td", null, "9"),
      /* @__PURE__ */ createBaseVNode("td", null, "10"),
      /* @__PURE__ */ createBaseVNode("td", null, "11")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "12"),
      /* @__PURE__ */ createBaseVNode("td", null, "13"),
      /* @__PURE__ */ createBaseVNode("td", null, "14"),
      /* @__PURE__ */ createBaseVNode("td", null, "15"),
      /* @__PURE__ */ createBaseVNode("td", null, "16"),
      /* @__PURE__ */ createBaseVNode("td", null, "17"),
      /* @__PURE__ */ createBaseVNode("td", { class: "current-day" }, "18")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "19"),
      /* @__PURE__ */ createBaseVNode("td", null, "20"),
      /* @__PURE__ */ createBaseVNode("td", null, "21"),
      /* @__PURE__ */ createBaseVNode("td", null, "22"),
      /* @__PURE__ */ createBaseVNode("td", null, "23"),
      /* @__PURE__ */ createBaseVNode("td", null, "24"),
      /* @__PURE__ */ createBaseVNode("td", null, "25")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "26"),
      /* @__PURE__ */ createBaseVNode("td", null, "27"),
      /* @__PURE__ */ createBaseVNode("td", null, "28"),
      /* @__PURE__ */ createBaseVNode("td", null, "29"),
      /* @__PURE__ */ createBaseVNode("td", null, "30"),
      /* @__PURE__ */ createBaseVNode("td", null, "31"),
      /* @__PURE__ */ createBaseVNode("td", { class: "next-month" }, "1")
    ])
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    onMounted(() => {
      setTimeout(() => {
        salesBarOptions.series = [
          {
            name: "Orders",
            data: barData
          }
        ];
      }, 1e3);
      setTimeout(() => {
        salesBarOptions.series = [
          ...salesBarOptions.series,
          {
            name: "Abandonned",
            data: barData2
          }
        ];
      }, 2500);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_WidgetDropdown = __unplugin_components_2;
      const _component_VBillboardJS = _sfc_main$4;
      const _component_UIWidget = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            size: "large",
            picture: "/images/avatars/svg/vuero-1.svg"
          }),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VButton, { dark: "3" }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(ApexChart), {
                  id: "spark1",
                  height: unref(spark1).chart.height,
                  type: unref(spark1).chart.type,
                  series: unref(spark1).series,
                  options: unref(spark1)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(unref(ApexChart), {
                  id: "spark2",
                  height: unref(spark2).chart.height,
                  type: unref(spark2).chart.type,
                  series: unref(spark2).series,
                  options: unref(spark2)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(ApexChart), {
                  id: "spark3",
                  height: unref(spark3).chart.height,
                  type: unref(spark3).chart.type,
                  series: unref(spark3).series,
                  options: unref(spark3)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createVNode(unref(ApexChart), {
                  id: "spark4",
                  height: unref(spark4).chart.height,
                  type: unref(spark4).chart.type,
                  series: unref(spark4).series,
                  options: unref(spark4)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(unref(ApexChart), {
                  id: "revenue-chart",
                  height: unref(revenueOptions).chart.height,
                  type: unref(revenueOptions).chart.type,
                  series: unref(revenueOptions).series,
                  options: unref(revenueOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  _hoisted_24,
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(ApexChart), {
                      id: "radial-circle",
                      height: unref(salesRevenuesRadialOptions).chart.height,
                      type: unref(salesRevenuesRadialOptions).chart.type,
                      series: unref(salesRevenuesRadialOptions).series,
                      options: unref(salesRevenuesRadialOptions)
                    }, null, 8, ["height", "type", "series", "options"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                _hoisted_27,
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-1",
                          height: unref(radialGroup1Options).chart.height,
                          type: unref(radialGroup1Options).chart.type,
                          series: unref(radialGroup1Options).series,
                          options: unref(radialGroup1Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_32,
                      _hoisted_33
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_34, [
                    createBaseVNode("div", _hoisted_35, [
                      createBaseVNode("div", _hoisted_36, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-2",
                          height: unref(radialGroup2Options).chart.height,
                          type: unref(radialGroup2Options).chart.type,
                          series: unref(radialGroup2Options).series,
                          options: unref(radialGroup2Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_37,
                      _hoisted_38
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-3",
                          height: unref(radialGroup3Options).chart.height,
                          type: unref(radialGroup3Options).chart.type,
                          series: unref(radialGroup3Options).series,
                          options: unref(radialGroup3Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_42,
                      _hoisted_43
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  _hoisted_47,
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(_component_WidgetDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_49, [
                  _hoisted_50,
                  createVNode(_component_VBillboardJS, {
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_51
              ])
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                _hoisted_54,
                createVNode(unref(ApexChart), {
                  id: "bar-chart",
                  height: unref(salesBarOptions).chart.height,
                  type: unref(salesBarOptions).chart.type,
                  series: unref(salesBarOptions).series,
                  options: unref(salesBarOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_55, [
              createVNode(_component_UIWidget, {
                class: "picker-widget",
                straight: ""
              }, {
                header: withCtx(() => [
                  _hoisted_56
                ]),
                body: withCtx(() => [
                  _hoisted_57
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
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Sales Dashboard");
    useHead({
      title: "Sales Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_SalesDashboard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_SalesDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
