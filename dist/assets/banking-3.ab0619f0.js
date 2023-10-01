import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { b as barOptions } from "./profitBarChart.d492afc3.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, h as unref, ae as createStaticVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const themeColors$1 = useThemeColors();
function generateDayWiseTimeSeries(s, count) {
  const values = [
    [
      0.4,
      0.3,
      1,
      0.9,
      2.9,
      1.9,
      2.5,
      0.9,
      1.2,
      0.7,
      1.9,
      0.5,
      1.3,
      0.9,
      1.7,
      0.2,
      0.7,
      0.5
    ],
    [
      0.2,
      0.3,
      0.8,
      0.7,
      2.2,
      1.6,
      2.3,
      0.7,
      1.1,
      0.5,
      1.2,
      0.5,
      1,
      0.4,
      1.5,
      0.2,
      0.6,
      2
    ]
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
const bitcoinChartOptions = {
  chart: {
    type: "area",
    height: 350,
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
  colors: [themeColors$1.green, themeColors$1.accent, themeColors$1.blue],
  stroke: {
    curve: "smooth",
    width: 3
  },
  title: {
    text: "Customer",
    align: "left"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Returning",
      data: generateDayWiseTimeSeries(0, 18)
    },
    {
      name: "NewComers",
      data: generateDayWiseTimeSeries(1, 18)
    },
    {
      name: "Abandonned",
      data: generateDayWiseTimeSeries(1, 13)
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
    },
    y: {
      formatter: function(val) {
        return val + "%";
      }
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};
const themeColors = useThemeColors();
const evolutionRadialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: "radialBar"
  },
  colors: [themeColors.accent, themeColors.orange, themeColors.orange],
  title: {
    text: "Theam Efficiency",
    align: "left"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: "13px",
          fontFamily: "Roboto, sans-serif",
          color: themeColors.lightText,
          formatter: function() {
            return [""];
          }
        },
        value: {
          color: themeColors.accent,
          offsetY: -20,
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500"
        }
      }
    }
  },
  labels: ["Median Ratio"]
};
var BankingDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "banking-dashboard banking-dashboard-v3" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-tiles"><div class="dashboard-tile"><span>Sales this Month</span><span class="dark-inverted">2,870</span></div><div class="dashboard-tile"><span>New Users</span><span class="dark-inverted">131</span></div><div class="dashboard-tile"><span>Earned Today</span><span class="dark-inverted">$398,49</span></div><div class="dashboard-tile"><span>Total Balanced</span><span class="dark-inverted">$6542,31</span></div></div>', 1);
const _hoisted_5 = { class: "dashboard-card" };
const _hoisted_6 = { class: "columns is-multiline" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = { class: "dashboard-card" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = { class: "dashboard-card" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Profit Evolution")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(ApexChart), {
                id: "currency-chart",
                height: unref(bitcoinChartOptions).chart.height,
                type: unref(bitcoinChartOptions).chart.type,
                series: unref(bitcoinChartOptions).series,
                options: unref(bitcoinChartOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(unref(ApexChart), {
                    id: "radial-chart",
                    height: unref(evolutionRadialOptions).chart.height,
                    type: unref(evolutionRadialOptions).chart.type,
                    series: unref(evolutionRadialOptions).series,
                    options: unref(evolutionRadialOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  _hoisted_11,
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
    viewWrapper.setPageTitle("Dashboards");
    useHead({
      title: "Dashboards - Creciendo Seguro"
    });
    return (_ctx, _cache) => {
      const _component_BankingDashboardV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_BankingDashboardV3)
      ]);
    };
  }
});
export { _sfc_main as default };
