import { _ as _sfc_main$6 } from "./UIWidgetToolbarFollowers.b9de412f.js";
import { _ as _sfc_main$5 } from "./VBillboardJS.a97b3f73.js";
import { f as followersList, _ as _sfc_main$4 } from "./followers.c0b11e85.js";
import { _ as _sfc_main$3 } from "./UIWidget.6c4793e7.js";
import { _ as __unplugin_components_2 } from "./WidgetDropdown.be0631d8.js";
import { _ as _sfc_main$2 } from "./VIconBox.298b3a59.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { d as asPercent } from "./apex-formatters.f2b3d967.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.107d1f23.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, t as toDisplayString, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VAvatarStack.d8a5f95e.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./index.e178843f.js";
import "./dayjs.min.7cfaa8e2.js";
var _imports_0 = "/assets/doctor.aa04a7c3.svg";
const themeColors$3 = useThemeColors();
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([baseval, y]);
    baseval += 864e5;
    i++;
  }
  return series;
}
const energyChartOptions = {
  series: [
    {
      name: "Tonic",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "Tantra",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "Vital",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 30, {
        min: 10,
        max: 60
      })
    }
  ],
  chart: {
    height: 280,
    type: "scatter",
    zoom: {
      type: "xy"
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$3.accent, themeColors$3.primary, themeColors$3.purple],
  dataLabels: {
    enabled: false,
    show: false
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  xaxis: {
    show: false,
    type: "datetime"
  },
  yaxis: {
    show: false,
    max: 70
  },
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "center"
  }
};
const themeColors$2 = useThemeColors();
const overallChartOptions = {
  series: [
    {
      name: "Condition (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    type: "area",
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight"
  },
  colors: [themeColors$2.primary],
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
const themeColors$1 = useThemeColors();
const oxygenChartOptions = {
  series: [
    {
      name: "Variation (pt)",
      data: [23, 26, 10, 7, 11, 18, 16]
    }
  ],
  chart: {
    height: 280,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top"
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: asPercent,
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    position: "top",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: asPercent
    }
  },
  colors: [themeColors$1.purple]
};
const themeColors = useThemeColors();
const progressChartOptions = {
  series: [
    {
      name: "Progress (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    type: "area",
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  colors: [themeColors.primary],
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
var LifestyleDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "lifestyle-dashboard lifestyle-dashboard-v3" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="illustration-header"><div class="header-image"><img src="' + _imports_0 + '" alt=""></div><div class="header-meta"><h3>Today&#39;s Summary</h3><p>Monitor your activity and keep improving your weak points.</p><div class="summary-stats"><div class="summary-stat"><span>900 kcal</span><span>Burnt today</span></div><div class="summary-stat"><span>2300 kcal</span><span>Eaten today</span></div><div class="summary-stat"><span>10,864</span><span>Steps walked</span></div><div class="summary-stat"><span>2% fat</span><span>Burnt today</span></div><div class="summary-stat h-hidden-tablet-p"><span>8.4 km</span><span>distance today</span></div></div></div></div>', 1);
const _hoisted_3 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = { class: "health-tile" };
const _hoisted_6 = { class: "tile-head" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-tint"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "114/90"),
  /* @__PURE__ */ createBaseVNode("span", null, "Min/Max")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Blood", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.", -1);
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = { class: "health-tile" };
const _hoisted_13 = { class: "tile-head" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-heart"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "112"),
  /* @__PURE__ */ createBaseVNode("span", null, "Bpm")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Heart Rate", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.", -1);
const _hoisted_18 = { class: "column is-3" };
const _hoisted_19 = { class: "health-tile" };
const _hoisted_20 = { class: "tile-head" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-pump-medical"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "12/14"),
  /* @__PURE__ */ createBaseVNode("span", null, "units")
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Blood Pressure", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.", -1);
const _hoisted_25 = { class: "column is-3" };
const _hoisted_26 = { class: "health-tile" };
const _hoisted_27 = { class: "tile-head" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-weight"
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "60.4"),
  /* @__PURE__ */ createBaseVNode("span", null, "lbs")
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Weight", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.", -1);
const _hoisted_32 = { class: "columns is-multiline" };
const _hoisted_33 = { class: "column is-9" };
const _hoisted_34 = { class: "columns is-multiline" };
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = { class: "dashboard-card" };
const _hoisted_37 = { class: "card-head" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Overall Condition", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" Your overall condition is very good. Make it even better. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "Read how")
  ])
], -1);
const _hoisted_40 = { class: "column is-6" };
const _hoisted_41 = { class: "dashboard-card" };
const _hoisted_42 = { class: "card-head" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Energy Report", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" Your energy seems a bit unstable. You can improve it. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "Read how")
  ])
], -1);
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = { class: "dashboard-card" };
const _hoisted_47 = { class: "card-head" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Oxygenation", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" Your oxygen seems a bit unstable. You can improve it. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "Read how")
  ])
], -1);
const _hoisted_50 = { class: "column is-6" };
const _hoisted_51 = { class: "dashboard-card" };
const _hoisted_52 = { class: "card-head" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Overall Progress", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" Your overall condition is very good. Make it even better. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "Read how")
  ])
], -1);
const _hoisted_55 = { class: "column is-3" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "text",
      class: "input",
      placeholder: "Search..."
    }),
    /* @__PURE__ */ createBaseVNode("button", { class: "searcv-button" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:search"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "topics" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#Health"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Cardio"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Nutrition")
  ])
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_59 = { class: "gauge-wrap" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Your score has been calculated based on the latest metrics")
], -1);
const _hoisted_61 = { class: "widget-content" };
const _hoisted_62 = /* @__PURE__ */ createTextVNode(" Great News! ");
const _hoisted_63 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_64 = /* @__PURE__ */ createTextVNode(" and ");
const _hoisted_65 = /* @__PURE__ */ createTextVNode(" are now friends with you. Take some time to look at their profile. ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$2;
      const _component_WidgetDropdown = __unplugin_components_2;
      const _component_UIWidget = _sfc_main$3;
      const _component_UIWidgetToolbarDropdown = _sfc_main$4;
      const _component_VBillboardJS = _sfc_main$5;
      const _component_UIWidgetToolbarFollowers = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }),
                _hoisted_8
              ]),
              _hoisted_9,
              _hoisted_10
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                }),
                _hoisted_15
              ]),
              _hoisted_16,
              _hoisted_17
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_21
                  ]),
                  _: 1
                }),
                _hoisted_22
              ]),
              _hoisted_23,
              _hoisted_24
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_28
                  ]),
                  _: 1
                }),
                _hoisted_29
              ]),
              _hoisted_30,
              _hoisted_31
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_32, [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("div", _hoisted_37, [
                    _hoisted_38,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_39,
                  createVNode(unref(ApexChart), {
                    id: "overall-chart",
                    height: unref(overallChartOptions).chart.height,
                    type: unref(overallChartOptions).chart.type,
                    series: unref(overallChartOptions).series,
                    options: unref(overallChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, [
                    _hoisted_43,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_44,
                  createVNode(unref(ApexChart), {
                    id: "energy-chart",
                    height: unref(energyChartOptions).chart.height,
                    type: unref(energyChartOptions).chart.type,
                    series: unref(energyChartOptions).series,
                    options: unref(energyChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    _hoisted_48,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_49,
                  createVNode(unref(ApexChart), {
                    id: "overall-chart",
                    height: unref(oxygenChartOptions).chart.height,
                    type: unref(oxygenChartOptions).chart.type,
                    series: unref(oxygenChartOptions).series,
                    options: unref(oxygenChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    _hoisted_53,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_54,
                  createVNode(unref(ApexChart), {
                    id: "progress-chart",
                    height: unref(progressChartOptions).chart.height,
                    type: unref(progressChartOptions).chart.type,
                    series: unref(progressChartOptions).series,
                    options: unref(progressChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_55, [
            createVNode(_component_UIWidget, { class: "search-widget" }, {
              body: withCtx(() => [
                _hoisted_56
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "picker-widget" }, {
              header: withCtx(() => [
                _hoisted_57
              ]),
              body: withCtx(() => [
                _hoisted_58
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "gauge-widget" }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "Gauge Widget" })
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_59, [
                  createVNode(_component_VBillboardJS, {
                    class: "gauge-holder",
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_60
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "text-widget" }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarFollowers, {
                  title: "New Friends",
                  avatars: unref(followersList)
                }, null, 8, ["avatars"])
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_61, [
                  createBaseVNode("p", null, [
                    _hoisted_62,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                    _hoisted_63,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                    _hoisted_64,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                    _hoisted_65
                  ])
                ])
              ]),
              _: 1
            })
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
    viewWrapper.setPageTitle("Health Dashboard");
    useHead({
      title: "Health Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_LifestyleDashboardV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_LifestyleDashboardV3)
      ]);
    };
  }
});
export { _sfc_main as default };
