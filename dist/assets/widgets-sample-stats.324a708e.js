import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
import { _ as _sfc_main$7 } from "./VAvatar.08652fea.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, X as renderList, q as createBaseVNode, s as createVNode, t as toDisplayString, F as Fragment, p as createBlock, g as normalizeClass, r as renderSlot, w as withCtx, h as unref, a1 as useHead } from "./vendor.6548d360.js";
import { w as widgetRadialGroup1Options, a as widgetRadialGroup2Options, b as widgetRadialGroup3Options, _ as _sfc_main$9, c as _sfc_main$a } from "./groupedCircleCharts.4e0c4118.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { s as spark1, a as spark2, b as spark3, c as spark4, r as revenueOptions } from "./revenueAreaChart.fbe33e35.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1$5 = { class: "is-media" };
const _hoisted_2$4 = { class: "double-line" };
const _hoisted_3$4 = { class: "dark-inverted" };
const _hoisted_4$4 = { class: "double-line" };
const _hoisted_5$4 = { class: "dark-inverted" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("span", null, "Monthly Income", -1);
const _hoisted_7$2 = { class: "avatars" };
const _hoisted_8$1 = { class: "rating-wrap" };
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", null, "Rating", -1);
const _hoisted_10$1 = { class: "rating" };
const _hoisted_11$1 = { class: "tag-wrap" };
const _hoisted_12$1 = { class: "is-end" };
const _hoisted_13$1 = { class: "buttons" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:edit-2"
  })
], -1);
const _hoisted_15$1 = [
  _hoisted_14$1
];
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:eye"
  })
], -1);
const _hoisted_17 = [
  _hoisted_16$1
];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:trash-2"
  })
], -1);
const _hoisted_19 = [
  _hoisted_18
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    rows: null,
    squared: { type: Boolean },
    circled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      const _component_VTag = _sfc_main$8;
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.rows, (row) => {
        return openBlock(), createElementBlock("tr", {
          key: row.id
        }, [
          createBaseVNode("td", _hoisted_1$5, [
            createVNode(_component_VAvatar, {
              picture: row.picture,
              initials: row.initials,
              size: "medium",
              color: row.color,
              squared: props.squared
            }, null, 8, ["picture", "initials", "color", "squared"])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_2$4, [
              createBaseVNode("span", _hoisted_3$4, toDisplayString(row.name), 1),
              createBaseVNode("span", null, "Member since " + toDisplayString(row.membership), 1)
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("span", _hoisted_5$4, "$" + toDisplayString(row.income), 1),
              _hoisted_6$2
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_7$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row.skills, (skill) => {
                return openBlock(), createBlock(_component_VAvatar, {
                  key: skill.id,
                  picture: skill.icon,
                  size: "small"
                }, null, 8, ["picture"]);
              }), 128))
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_8$1, [
              _hoisted_9$1,
              createBaseVNode("div", _hoisted_10$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(5, (star, index) => {
                  return createBaseVNode("i", {
                    key: index,
                    class: normalizeClass(["fas fa-star", row.rating - index > 0 && "selected"]),
                    "aria-hidden": "true"
                  }, null, 2);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(_component_VTag, {
                class: normalizeClass([
                  row.status === "Approved" && "is-green",
                  row.status === "Pending" && "is-info",
                  row.status === "Suspended" && "is-orange"
                ]),
                label: row.status,
                elevated: ""
              }, null, 8, ["class", "label"])
            ])
          ]),
          createBaseVNode("td", _hoisted_12$1, [
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_15$1, 2),
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_17, 2),
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_19, 2)
            ])
          ])
        ]);
      }), 128);
    };
  }
});
var TableWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "widget-head" };
const _hoisted_2$3 = { class: "dark-inverted" };
const _hoisted_3$3 = { class: "button v-button is-primary is-elevated" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_5$3 = { class: "table is-hoverable is-fullwidth" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    data: null,
    title: { default: "Widget Title" },
    actionLabel: { default: "Add Item" },
    straight: { type: Boolean },
    squared: { type: Boolean },
    circled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_TableWidgetRowMembers = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget table-widget-v1", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("h3", _hoisted_2$3, toDisplayString(props.title), 1),
          createBaseVNode("button", _hoisted_3$3, [
            _hoisted_4$3,
            createBaseVNode("span", null, toDisplayString(props.actionLabel), 1)
          ])
        ]),
        createBaseVNode("table", _hoisted_5$3, [
          createBaseVNode("tbody", null, [
            createVNode(_component_TableWidgetRowMembers, {
              rows: props.data,
              squared: props.squared,
              circled: props.circled
            }, null, 8, ["rows", "squared", "circled"])
          ])
        ])
      ], 2);
    };
  }
});
var SocialStatWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "follow-block" };
const _hoisted_2$2 = { class: "follow-count" };
const _hoisted_3$2 = { class: "dark-inverted" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", null, "Based on your latest stats", -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "go-icon"
}, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:chevron-right"
  })
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    icon: null,
    value: null,
    straight: { type: Boolean },
    squared: { type: Boolean },
    colored: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget followers-stat-widget-v1", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", {
            class: normalizeClass(["follow-icon", [props.squared && "is-squared", props.colored && "is-primary"]])
          }, [
            createBaseVNode("i", {
              "aria-hidden": "true",
              class: normalizeClass(props.icon)
            }, null, 2)
          ], 2),
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("span", _hoisted_3$2, toDisplayString(props.value) + " Followers", 1),
            _hoisted_4$2
          ]),
          _hoisted_5$2
        ])
      ], 2);
    };
  }
});
var LineStatWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "line-stats" };
const _hoisted_4$1 = { class: "line-stat" };
const _hoisted_5$1 = { class: "current" };
const _hoisted_6$1 = { class: "line-stat" };
const _hoisted_7$1 = { class: "dark-inverted" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "Line stats widget" },
    currentLabel: { default: "Current Label" },
    currentValue: { default: "$75,648.43" },
    previousLabel: { default: "Previous Label" },
    previousValue: { default: "$91,512.18" },
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget line-stats-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("span", null, toDisplayString(props.currentLabel), 1),
            createBaseVNode("span", _hoisted_5$1, toDisplayString(props.currentValue), 1)
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("span", null, toDisplayString(props.previousLabel), 1),
            createBaseVNode("span", _hoisted_7$1, toDisplayString(props.previousValue), 1)
          ])
        ]),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var SparkStatWidget_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget spark-tile-widget", [props.straight && "is-straight"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const themeColors$3 = useThemeColors();
const lineStatsChartOptions = {
  series: [
    {
      name: "Revenue",
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
    }
  ],
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$3.accent],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
const themeColors$2 = useThemeColors();
const flexRadialChartCircleOptions = {
  series: [65],
  chart: {
    height: 150,
    type: "radialBar",
    offsetX: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$2.purple],
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
          color: themeColors$2.purple,
          fontSize: "16px",
          offsetY: 5
        }
      }
    }
  },
  labels: ["Progress"]
};
const themeColors$1 = useThemeColors();
const flexRadialChartStripesOptions = {
  series: [65],
  chart: {
    height: 180,
    type: "radialBar",
    offsetX: -15,
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.info, themeColors$1.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          fontWeight: "600",
          color: themeColors$1.lightText,
          show: false
        },
        value: {
          offsetY: 5,
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500",
          color: void 0,
          formatter: function(val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ["(30 days)"]
};
const themeColors = useThemeColors();
const widgetGaugeGroup1Options = {
  series: [57],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  labels: ["Average Results"]
};
const widgetGaugeGroup2Options = {
  series: [36],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.orange],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  labels: ["Average Results"]
};
const widgetGaugeGroup3Options = {
  series: [88],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  labels: ["Average Results"]
};
const memberList = [];
const _hoisted_1$1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = { class: "column is-3" };
const _hoisted_6 = { class: "column is-6" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = { class: "column is-6" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = { class: "column is-12" };
const _hoisted_16 = { class: "column is-12" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_SparkStatWidget = _sfc_main$2;
      const _component_LineStatWidget = _sfc_main$3;
      const _component_FlexStatWidget = _sfc_main$9;
      const _component_GroupedStatWidget = _sfc_main$a;
      const _component_SocialStatWidget = _sfc_main$4;
      const _component_TableWidget = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark1",
                height: unref(spark1).chart.height,
                type: unref(spark1).chart.type,
                series: unref(spark1).series,
                options: unref(spark1)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark2",
                height: unref(spark2).chart.height,
                type: unref(spark2).chart.type,
                series: unref(spark2).series,
                options: unref(spark2)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark3",
                height: unref(spark3).chart.height,
                type: unref(spark3).chart.type,
                series: unref(spark3).series,
                options: unref(spark3)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark4",
                height: unref(spark4).chart.height,
                type: unref(spark4).chart.type,
                series: unref(spark4).series,
                options: unref(spark4)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_LineStatWidget, {
            title: "Revenue",
            "current-label": "This Month",
            "current-value": "$75,648.43",
            "previous-label": "Last Month",
            "previous-value": "$91,512.18",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "line-stats-widget-chart",
                height: unref(lineStatsChartOptions).chart.height,
                type: unref(lineStatsChartOptions).chart.type,
                series: unref(lineStatsChartOptions).series,
                options: unref(lineStatsChartOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_LineStatWidget, {
            title: "Revenue",
            "current-label": "This Month",
            "current-value": "$75,648.43",
            "previous-label": "Last Month",
            "previous-value": "$91,512.18",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "line-stats-area-chart",
                height: unref(revenueOptions).chart.height,
                type: unref(revenueOptions).chart.type,
                series: unref(revenueOptions).series,
                options: unref(revenueOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_FlexStatWidget, {
            title: "Sales Revenue",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "flex-stat-circle",
                height: unref(flexRadialChartCircleOptions).chart.height,
                type: unref(flexRadialChartCircleOptions).chart.type,
                series: unref(flexRadialChartCircleOptions).series,
                options: unref(flexRadialChartCircleOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_FlexStatWidget, {
            title: "Sales Revenue",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "flex-stat-radial",
                height: unref(flexRadialChartStripesOptions).chart.height,
                type: unref(flexRadialChartStripesOptions).chart.type,
                series: unref(flexRadialChartStripesOptions).series,
                options: unref(flexRadialChartStripesOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_GroupedStatWidget, {
            title: "Additional Stats",
            values: ["264", "1,203", "3,078"],
            labels: ["New Deals", "Proposals", "Closed Deals"]
          }, {
            chart1: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-1",
                height: unref(widgetRadialGroup1Options).chart.height,
                type: unref(widgetRadialGroup1Options).chart.type,
                series: unref(widgetRadialGroup1Options).series,
                options: unref(widgetRadialGroup1Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart2: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-2",
                height: unref(widgetRadialGroup2Options).chart.height,
                type: unref(widgetRadialGroup2Options).chart.type,
                series: unref(widgetRadialGroup2Options).series,
                options: unref(widgetRadialGroup2Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart3: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-3",
                height: unref(widgetRadialGroup3Options).chart.height,
                type: unref(widgetRadialGroup3Options).chart.type,
                series: unref(widgetRadialGroup3Options).series,
                options: unref(widgetRadialGroup3Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_GroupedStatWidget, {
            title: "Additional Stats",
            values: ["264", "1,203", "3,078"],
            labels: ["New Deals", "Proposals", "Closed Deals"],
            gauge: ""
          }, {
            chart1: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-1",
                height: unref(widgetGaugeGroup1Options).chart.height,
                type: unref(widgetGaugeGroup1Options).chart.type,
                series: unref(widgetGaugeGroup1Options).series,
                options: unref(widgetGaugeGroup1Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart2: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-2",
                height: unref(widgetGaugeGroup2Options).chart.height,
                type: unref(widgetGaugeGroup2Options).chart.type,
                series: unref(widgetGaugeGroup2Options).series,
                options: unref(widgetGaugeGroup2Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart3: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-3",
                height: unref(widgetGaugeGroup3Options).chart.height,
                type: unref(widgetGaugeGroup3Options).chart.type,
                series: unref(widgetGaugeGroup3Options).series,
                options: unref(widgetGaugeGroup3Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: ""
          })
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: "",
            squared: ""
          })
        ]),
        createBaseVNode("div", _hoisted_14, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: "",
            colored: ""
          })
        ]),
        createBaseVNode("div", _hoisted_15, [
          createVNode(_component_TableWidget, {
            title: "Members",
            "action-label": "Add Member",
            data: unref(memberList),
            straight: "",
            squared: ""
          }, null, 8, ["data"])
        ]),
        createBaseVNode("div", _hoisted_16, [
          createVNode(_component_TableWidget, {
            title: "Members",
            "action-label": "Add Member",
            data: unref(memberList),
            straight: "",
            circled: ""
          }, null, 8, ["data"])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Widgets Stats");
    useHead({
      title: "Widgets Stats - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_WidgetsStats = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_WidgetsStats)
      ]);
    };
  }
});
export { _sfc_main as default };
