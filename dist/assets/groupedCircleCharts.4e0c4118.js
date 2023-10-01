import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, g as normalizeClass, r as renderSlot } from "./vendor.6548d360.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
var GroupedStatWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "chart-group" };
const _hoisted_4$1 = { class: "group" };
const _hoisted_5$1 = { class: "group-content" };
const _hoisted_6$1 = { class: "dark-inverted" };
const _hoisted_7 = { class: "group" };
const _hoisted_8 = { class: "group-content" };
const _hoisted_9 = { class: "dark-inverted" };
const _hoisted_10 = { class: "group" };
const _hoisted_11 = { class: "group-content" };
const _hoisted_12 = { class: "dark-inverted" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "Grouped stats widget" },
    values: { default: () => [] },
    labels: { default: () => [] },
    straight: { type: Boolean },
    gauge: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget grouped-stat-widget is-straight", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart1")
              ], 2),
              createBaseVNode("span", _hoisted_6$1, toDisplayString(props.values[0]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[0]), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart2")
              ], 2),
              createBaseVNode("span", _hoisted_9, toDisplayString(props.values[1]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[1]), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart3")
              ], 2),
              createBaseVNode("span", _hoisted_12, toDisplayString(props.values[2]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[2]), 1)
            ])
          ])
        ])
      ], 2);
    };
  }
});
var FlexStatWidget_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "stat-widget flex-stat-widget is-straight" };
const _hoisted_2 = { class: "chart-media" };
const _hoisted_3 = { class: "meta" };
const _hoisted_4 = { class: "dark-inverted" };
const _hoisted_5 = { class: "is-dark-primary" };
const _hoisted_6 = { class: "chart-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "Widget Title" },
    value: { default: "8,641.26" },
    text: { default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria." }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h4", _hoisted_4, toDisplayString(props.title), 1),
            createBaseVNode("span", _hoisted_5, "$" + toDisplayString(props.value), 1),
            createBaseVNode("p", null, toDisplayString(props.text), 1)
          ]),
          createBaseVNode("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ]);
    };
  }
});
const themeColors = useThemeColors();
const widgetRadialGroup1Options = {
  series: [31],
  chart: {
    height: 102,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info],
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
const widgetRadialGroup2Options = {
  series: [53],
  chart: {
    height: 102,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.orange],
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
const widgetRadialGroup3Options = {
  series: [84],
  chart: {
    height: 102,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
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
export { _sfc_main as _, widgetRadialGroup2Options as a, widgetRadialGroup3Options as b, _sfc_main$1 as c, widgetRadialGroup1Options as w };
