import { n as notifications, _ as _sfc_main$7 } from "./notificationList.cbf10ce3.js";
import { f as followersList, _ as _sfc_main$6 } from "./followers.c0b11e85.js";
import { _ as _sfc_main$5 } from "./UIWidgetToolbarFollowers.b9de412f.js";
import { _ as _sfc_main$4 } from "./UIWidget.6c4793e7.js";
import { _ as _sfc_main$3 } from "./ContactWidget.4ef19c97.js";
import { _ as _sfc_main$2 } from "./VProgress.5bff1011.js";
import { _ as _sfc_main$1 } from "./VIconBox.298b3a59.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { g as gaugeOptions } from "./goalChart.dfe48889.js";
import { b as barOptions } from "./profitBarChart.d492afc3.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, t as toDisplayString, ae as createStaticVNode, x as createTextVNode } from "./vendor.6548d360.js";
const themeColors$1 = useThemeColors();
const revenueOptions = {
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
  colors: [themeColors$1.green],
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
const themeColors = useThemeColors();
const optionsCircle = {
  series: [65],
  chart: {
    height: 160,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "75%"
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "14px",
          fontWeight: 500,
          offsetY: -10,
          color: themeColors.lightText
        },
        value: {
          show: true,
          fontWeight: 600,
          color: themeColors.purple,
          fontSize: "16px",
          offsetY: -5
        }
      }
    }
  },
  labels: ["Growth"]
};
var AnalyticsDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "finance-dashboard analytics-dashboard" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-9" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "dashboard-tile" };
const _hoisted_7 = { class: "tile-head" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Transactions", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-gem"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+6.4% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>since last month</span></div>', 2);
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "dashboard-tile" };
const _hoisted_14 = { class: "tile-head" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Subscriptions", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-user-plus"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-2.1% <i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i></span><span>going down</span></div>', 2);
const _hoisted_19 = { class: "column is-4" };
const _hoisted_20 = { class: "dashboard-tile" };
const _hoisted_21 = { class: "tile-head" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Referals", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-bullhorn"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+4.2% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>going up</span></div>', 2);
const _hoisted_26 = { class: "column is-8" };
const _hoisted_27 = { class: "dashboard-card" };
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<div class="card-head"><h3 class="dark-inverted">Revenue</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>', 2);
const _hoisted_30 = { class: "column is-4" };
const _hoisted_31 = { class: "dashboard-card" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Goal Overview")
], -1);
const _hoisted_33 = { class: "radial-wrap" };
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>', 1);
const _hoisted_35 = { class: "column is-4" };
const _hoisted_36 = { class: "dashboard-card" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Sales")
], -1);
const _hoisted_38 = { class: "progress-block" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "value" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "78%")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "progress-foot" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-h-green" }, [
    /* @__PURE__ */ createTextVNode("+6.4% "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:trending-up"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "since last month")
], -1);
const _hoisted_41 = { class: "column is-8" };
const _hoisted_42 = { class: "dashboard-card" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Profit")
], -1);
const _hoisted_44 = { class: "column is-3" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_47 = { class: "widget-content" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" Great News! ");
const _hoisted_49 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_50 = /* @__PURE__ */ createTextVNode(" and ");
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" are now following you. Take some time to look at their profile. ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$1;
      const _component_VProgress = _sfc_main$2;
      const _component_ContactWidget = _sfc_main$3;
      const _component_UIWidget = _sfc_main$4;
      const _component_UIWidgetToolbarFollowers = _sfc_main$5;
      const _component_UIWidgetToolbarDropdown = _sfc_main$6;
      const _component_UIWidgetNotifications = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createVNode(_component_VIconBox, {
                      color: "primary",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_10
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    createVNode(_component_VIconBox, {
                      color: "orange",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_17
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    _hoisted_22,
                    createVNode(_component_VIconBox, {
                      color: "green",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_24
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  _hoisted_28,
                  createVNode(unref(ApexChart), {
                    id: "revenue-chart",
                    height: unref(revenueOptions).chart.height,
                    type: unref(revenueOptions).chart.type,
                    series: unref(revenueOptions).series,
                    options: unref(revenueOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  _hoisted_32,
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(unref(ApexChart), {
                      id: "goal-gauge",
                      height: unref(gaugeOptions).chart.height,
                      type: unref(gaugeOptions).chart.type,
                      series: unref(gaugeOptions).series,
                      options: unref(gaugeOptions)
                    }, null, 8, ["height", "type", "series", "options"]),
                    _hoisted_34
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, [
                    _hoisted_39,
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 78
                    }),
                    _hoisted_40,
                    createVNode(unref(ApexChart), {
                      id: "radial-circle",
                      class: "circle-chart-wrapper",
                      height: unref(optionsCircle).chart.height,
                      type: unref(optionsCircle).chart.type,
                      series: unref(optionsCircle).series,
                      options: unref(optionsCircle)
                    }, null, 8, ["height", "type", "series", "options"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("div", _hoisted_42, [
                  _hoisted_43,
                  createVNode(unref(ApexChart), {
                    id: "profit-chart",
                    height: unref(barOptions).chart.height,
                    type: unref(barOptions).chart.type,
                    series: unref(barOptions).series,
                    options: unref(barOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            createVNode(_component_ContactWidget, {
              picture: "/images/avatars/svg/vuero-1.svg",
              username: "Erik K.",
              email: "erikkovalsky@vuero.io",
              company: "Vuero Ltd.",
              position: "Product Manager",
              location: "Los Angeles, CA",
              phone: "+1 444-5156",
              squared: "",
              reversed: "",
              straight: ""
            }),
            createVNode(_component_UIWidget, {
              class: "picker-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                _hoisted_45
              ]),
              body: withCtx(() => [
                _hoisted_46
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, {
              class: "text-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarFollowers, {
                  title: "New Followers",
                  avatars: unref(followersList)
                }, null, 8, ["avatars"])
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("p", null, [
                    _hoisted_48,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                    _hoisted_49,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                    _hoisted_50,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                    _hoisted_51
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, {
              class: "list-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "Notifications" })
              ]),
              body: withCtx(() => [
                createVNode(_component_UIWidgetNotifications, { notifications: unref(notifications) }, null, 8, ["notifications"])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
