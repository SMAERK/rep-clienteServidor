import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceloadText.2b6ef8c1.js";
import { a as useUserSession, b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$1 } from "./VSwitchSegment.ee1417d0.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { a9 as reactive, d as defineComponent, m as useI18n, k as ref, e as computed, Q as watch, Y as onMounted, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, ag as isRef, t as toDisplayString, _ as mergeProps, aJ as toHandlers, F as Fragment, x as createTextVNode } from "./vendor.6548d360.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { a as tryGetGeneralDashboard } from "./index.c13a9b10.js";
import { h as hooks } from "./moment.17f8281e.js";
const themeColors$1 = useThemeColors();
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
const usersBarOptions = reactive({
  series: [],
  chart: {
    height: 235,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.accent, themeColors$1.primary],
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
const themeColors = useThemeColors();
const usersOptions = {
  series: [
    {
      name: "Montante Do Pr\xE9mio",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Montante Cancelado",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Total",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ],
  chart: {
    height: 180,
    type: "area",
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.primary, themeColors.accent, themeColors.info],
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2],
    curve: "smooth"
  },
  xaxis: {
    type: "numeric",
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }
  ],
  tooltip: {
    x: {
      show: false,
      format: "dd/MM/yy HH:mm"
    }
  }
};
var CompanyDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-4" };
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = {
  key: 0,
  class: "column is-4"
};
const _hoisted_5 = {
  key: 1,
  class: "column is-6"
};
const _hoisted_6 = ["value"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("a", { class: "button is-static" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Consultar");
const _hoisted_10 = { class: "column is-6 ml-auto" };
const _hoisted_11 = {
  key: 0,
  class: "business-dashboard company-dashboard"
};
const _hoisted_12 = { class: "company-header is-dark-card-bordered is-dark-bg-6" };
const _hoisted_13 = { class: "header-item is-dark-bordered-12" };
const _hoisted_14 = { class: "item-inner" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt is-dark-primary"
}, null, -1);
const _hoisted_16 = { class: "dark-inverted" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_18 = { class: "header-item is-dark-bordered-12" };
const _hoisted_19 = { class: "item-inner" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diamond-alt is-dark-primary"
}, null, -1);
const _hoisted_21 = { class: "dark-inverted" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_23 = { class: "header-item is-dark-bordered-12" };
const _hoisted_24 = { class: "item-inner" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-briefcase-alt is-dark-primary"
}, null, -1);
const _hoisted_26 = { class: "dark-inverted" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_28 = { class: "header-item is-dark-bordered-12" };
const _hoisted_29 = { class: "item-inner" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-ticket is-dark-primary"
}, null, -1);
const _hoisted_31 = { class: "dark-inverted" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_33 = { class: "columns is-multiline" };
const _hoisted_34 = { class: "column is-4" };
const _hoisted_35 = { class: "dashboard-card is-company" };
const _hoisted_36 = { class: "dark-inverted" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "description" }, [
  /* @__PURE__ */ createBaseVNode("p")
], -1);
const _hoisted_39 = { class: "company-stats is-dark-bordered-12" };
const _hoisted_40 = { class: "company-stat" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", null, "Regi\xF3n", -1);
const _hoisted_42 = { class: "dark-inverted" };
const _hoisted_43 = { class: "company-stat" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "Creado", -1);
const _hoisted_45 = { class: "dark-inverted" };
const _hoisted_46 = { class: "company-stat" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("span", null, "Estado", -1);
const _hoisted_48 = { class: "dark-inverted" };
const _hoisted_49 = { class: "column is-8" };
const _hoisted_50 = { class: "dashboard-card is-base-chart" };
const _hoisted_51 = { class: "content-box" };
const _hoisted_52 = { class: "revenue-stats is-dark-bordered-12" };
const _hoisted_53 = { class: "revenue-stat" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "Monto Prima", -1);
const _hoisted_55 = { class: "current" };
const _hoisted_56 = { class: "revenue-stat" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("span", null, "Monto Cancelado", -1);
const _hoisted_58 = { class: "dark-inverted" };
const _hoisted_59 = { class: "revenue-stat" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", null, "Total", -1);
const _hoisted_61 = { class: "dark-inverted" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-container" }, null, -1);
const _hoisted_63 = {
  key: 1,
  class: "business-dashboard company-dashboard"
};
const _hoisted_64 = { class: "company-header is-dark-card-bordered is-dark-bg-6" };
const _hoisted_65 = { class: "header-item is-dark-bordered-12" };
const _hoisted_66 = { class: "item-inner" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt is-dark-primary"
}, null, -1);
const _hoisted_68 = { class: "dark-inverted" };
const _hoisted_69 = { class: "header-item is-dark-bordered-12" };
const _hoisted_70 = { class: "item-inner" };
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diamond-alt is-dark-primary"
}, null, -1);
const _hoisted_72 = { class: "dark-inverted" };
const _hoisted_73 = { class: "header-item is-dark-bordered-12" };
const _hoisted_74 = { class: "item-inner" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-briefcase-alt is-dark-primary"
}, null, -1);
const _hoisted_76 = { class: "dark-inverted" };
const _hoisted_77 = { class: "header-item is-dark-bordered-12" };
const _hoisted_78 = { class: "item-inner" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-ticket is-dark-primary"
}, null, -1);
const _hoisted_80 = { class: "dark-inverted" };
const _hoisted_81 = { class: "columns is-multiline" };
const _hoisted_82 = { class: "column is-4" };
const _hoisted_83 = { class: "dashboard-card is-company" };
const _hoisted_84 = { class: "dark-inverted" };
const _hoisted_85 = { class: "description" };
const _hoisted_86 = { class: "company-stats is-dark-bordered-12" };
const _hoisted_87 = { class: "company-stat" };
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Brasil", -1);
const _hoisted_89 = { class: "company-stat" };
const _hoisted_90 = { class: "dark-inverted" };
const _hoisted_91 = { class: "company-stat" };
const _hoisted_92 = { class: "dark-inverted" };
const _hoisted_93 = { class: "column is-8" };
const _hoisted_94 = { class: "dashboard-card is-base-chart" };
const _hoisted_95 = { class: "content-box" };
const _hoisted_96 = { class: "revenue-stats is-dark-bordered-12" };
const _hoisted_97 = { class: "revenue-stat" };
const _hoisted_98 = { class: "current" };
const _hoisted_99 = { class: "revenue-stat" };
const _hoisted_100 = { class: "dark-inverted" };
const _hoisted_101 = { class: "revenue-stat" };
const _hoisted_102 = { class: "dark-inverted" };
const _hoisted_103 = { class: "chart-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const { locale, t } = useI18n();
    let isLoading = ref(false);
    let hasCustomizedRange = ref(false);
    const range = ref("last_30_days");
    const manualRange = ref({ start: new Date(), end: new Date() });
    const rangeOptions = ref([]);
    const selectedProducts = ref(["korsa", "iex", "nemaAgu", "uello"]);
    const productsOptions = ref([
      { value: "korsa", label: "Clube Mercosul" },
      { value: "iex", label: "Iex" },
      { value: "nemaCarioca", label: "Nema - Carioca" },
      { value: "nemaClub", label: "Nema - Club Simples" },
      { value: "nemaAgu", label: "Nema - Assoc. Iguatuense" },
      { value: "uello", label: "Uello" },
      { value: "supernova", label: "SuperNova" },
      { value: "hospital", label: "Hospital Card" },
      { value: "sollo", label: "Sollo / QualityLife" },
      { value: "james", label: "James" },
      { value: "pax", label: "Pax" },
      { value: "qualividad", label: "Qualividad" }
    ]);
    const data = ref({});
    const user = computed(() => userSession.user);
    const mappedData = computed(() => {
      const filteredData = Object.keys(data.value).filter((key) => selectedProducts.value.includes(key)).reduce((obj, key) => {
        obj[key] = data.value[key];
        return obj;
      }, []);
      const activePolicies = Object.values(filteredData).reduce((t2, { activePolicies: activePolicies2 }) => t2 + activePolicies2, 0);
      const canceledPolicies = Object.values(filteredData).reduce((t2, { canceledPolicies: canceledPolicies2 }) => t2 + canceledPolicies2, 0);
      const soldPolicies = Object.values(filteredData).reduce((t2, { soldPolicies: soldPolicies2 }) => t2 + soldPolicies2, 0);
      const totalActivePremium = Object.values(filteredData).reduce((t2, { totalActivePremium: totalActivePremium2 }) => t2 + totalActivePremium2, 0);
      const totalCanceledPremium = Object.values(filteredData).reduce((t2, { totalCanceledPremium: totalCanceledPremium2 }) => t2 + totalCanceledPremium2, 0);
      return {
        activePolicies,
        averageAge: 0,
        canceledPolicies,
        soldPolicies,
        totalActivePremium,
        totalCanceledPremium
      };
    });
    const handleConsultData = async (range2) => {
      isLoading.value = true;
      let response;
      if (hasCustomizedRange.value) {
        const startDate = manualRange.value.start.toLocaleDateString("en-US");
        const endDate = manualRange.value.end.toLocaleDateString("en-US");
        response = await tryGetGeneralDashboard(startDate, endDate);
      } else {
        const { startDate, endDate } = getDateRange(range2);
        response = await tryGetGeneralDashboard(startDate, endDate);
      }
      if (!response.status) {
        isLoading.value = false;
        return;
      }
      data.value = response.data;
      isLoading.value = false;
    };
    const getDateRange = (range2) => {
      let startDate;
      let endDate = new Date();
      const now = new Date();
      switch (range2) {
        case "today":
          startDate = new Date();
          break;
        case "yesterday":
          startDate = substractDays(1, new Date());
          break;
        case "last_7_days":
          startDate = substractDays(7, new Date());
          break;
        case "last_30_days":
          startDate = substractDays(30, new Date());
          break;
        case "last_90_days":
          startDate = substractDays(90, new Date());
          break;
        case "current_month":
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
          break;
        case "last_semester":
          startDate = new Date(now.getFullYear(), now.getMonth() - 6, 1);
          break;
      }
      return {
        startDate: startDate.toLocaleDateString("en-US"),
        endDate: endDate.toLocaleDateString("en-US")
      };
    };
    const formatDate = (date) => {
      return hooks(date._seconds * 1e3).format("DD/MM/YY");
    };
    function substractDays(days, date) {
      var res = date;
      res.setDate(res.getDate() - days);
      return res;
    }
    watch(range, async () => {
      if (!range.value) {
        return;
      }
      await handleConsultData(range.value);
    }, { immediate: true });
    watch(locale, () => {
      rangeOptions.value = [
        { value: "today", label: t("dashboard.options.today") },
        { value: "yesterday", label: t("dashboard.options.yesterday") },
        { value: "last_7_days", label: t("dashboard.options.last_7_days") },
        { value: "last_30_days", label: t("dashboard.options.last_30_days") },
        { value: "last_90_days", label: t("dashboard.options.last_90_days") },
        { value: "current_month", label: t("dashboard.options.currentMonth") },
        { value: "last_semester", label: t("dashboard.options.lastSemester") }
      ];
    }, { immediate: true });
    onMounted(async () => {
      setTimeout(() => {
        usersBarOptions.series = [
          {
            name: "Orders",
            data: barData
          }
        ];
      }, 1e3);
      setTimeout(() => {
        usersBarOptions.series = [
          ...usersBarOptions.series,
          {
            name: "Abandonned",
            data: barData2
          }
        ];
      }, 2500);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      const _component_VSwitchSegment = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VButton = _sfc_main$3;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_VPlaceloadText = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSwitchSegment, {
                      modelValue: unref(hasCustomizedRange),
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(hasCustomizedRange) ? hasCustomizedRange.value = $event : hasCustomizedRange = $event),
                      "label-true": unref(t)("dashboard.labels.manualRange"),
                      "label-false": unref(t)("dashboard.labels.selectRange"),
                      color: "primary",
                      onClick: _cache[1] || (_cache[1] = ($event) => isRef(hasCustomizedRange) ? hasCustomizedRange.value = !unref(hasCustomizedRange) : hasCustomizedRange = !unref(hasCustomizedRange))
                    }, null, 8, ["modelValue", "label-true", "label-false"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          !unref(hasCustomizedRange) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_component_VField, null, {
              default: withCtx(({ id }) => [
                createBaseVNode("label", null, toDisplayString(unref(t)("dashboard.labels.dateRange")), 1),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: range.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => range.value = $event),
                      attrs: { id },
                      options: rangeOptions.value,
                      placeholder: `** ${unref(t)("selectAnOption")} **`
                    }, null, 8, ["modelValue", "attrs", "options", "placeholder"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("label", null, toDisplayString(unref(t)("dashboard.labels.dateRange")), 1),
            createVNode(_component_VDatePicker, {
              modelValue: manualRange.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => manualRange.value = $event),
              "is-range": "",
              color: "green",
              "trim-weeks": "",
              masks: { input: "DD/MM/YYYY" }
            }, {
              default: withCtx(({ inputValue, inputEvents }) => [
                createVNode(_component_VField, { addons: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createBaseVNode("input", mergeProps({
                          value: inputValue.start,
                          class: "input"
                        }, toHandlers(inputEvents.start), { placeholder: "DD/MM/YYYY" }), null, 16, _hoisted_6)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createBaseVNode("input", mergeProps({
                          value: inputValue.end,
                          class: "input"
                        }, toHandlers(inputEvents.end), { placeholder: "DD/MM/YYYY" }), null, 16, _hoisted_8)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VButton, {
                          class: "ml-3",
                          color: "primary",
                          raised: "",
                          onClick: handleConsultData
                        }, {
                          default: withCtx(() => [
                            _hoisted_9
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])),
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_VField, null, {
              default: withCtx(({ id }) => [
                createBaseVNode("label", null, toDisplayString(unref(t)("dashboard.labels.products")), 1),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: selectedProducts.value,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedProducts.value = $event),
                      attrs: { id },
                      mode: "tags",
                      options: productsOptions.value,
                      placeholder: `** ${unref(t)("selectAnOption")} **`
                    }, null, 8, ["modelValue", "attrs", "options", "placeholder"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ])
        ]),
        unref(isLoading) ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                _hoisted_15,
                createBaseVNode("span", _hoisted_16, [
                  createVNode(_component_VPlaceloadText, {
                    class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                    lines: 2,
                    width: "75%",
                    "last-line-width": "75%"
                  })
                ]),
                _hoisted_17
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                _hoisted_20,
                createBaseVNode("span", _hoisted_21, [
                  createVNode(_component_VPlaceloadText, {
                    class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                    lines: 2,
                    width: "75%",
                    "last-line-width": "75%"
                  })
                ]),
                _hoisted_22
              ])
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                _hoisted_25,
                createBaseVNode("span", _hoisted_26, [
                  createVNode(_component_VPlaceloadText, {
                    class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                    lines: 2,
                    width: "75%",
                    "last-line-width": "75%"
                  })
                ]),
                _hoisted_27
              ])
            ]),
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                _hoisted_30,
                createBaseVNode("span", _hoisted_31, [
                  createVNode(_component_VPlaceloadText, {
                    class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                    lines: 2,
                    width: "75%",
                    "last-line-width": "75%"
                  })
                ]),
                _hoisted_32
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createVNode(_component_VAvatar, {
                  size: "large",
                  picture: "/images/avatars/svg/vuero-1.svg"
                }),
                createBaseVNode("h3", _hoisted_36, [
                  createVNode(_component_VPlaceloadText, {
                    class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                    lines: 3,
                    width: "75%",
                    "last-line-width": "75%"
                  })
                ]),
                _hoisted_37,
                _hoisted_38,
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", null, [
                      _hoisted_41,
                      createBaseVNode("span", _hoisted_42, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", null, [
                      _hoisted_44,
                      createBaseVNode("span", _hoisted_45, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("div", null, [
                      _hoisted_47,
                      createBaseVNode("span", _hoisted_48, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_49, [
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    createBaseVNode("div", _hoisted_53, [
                      _hoisted_54,
                      createBaseVNode("span", _hoisted_55, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_56, [
                      _hoisted_57,
                      createBaseVNode("span", _hoisted_58, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_59, [
                      _hoisted_60,
                      createBaseVNode("span", _hoisted_61, [
                        createVNode(_component_VPlaceloadText, {
                          class: "is-flex is-flex-direction-column is-align-items-center mt-4",
                          lines: 1,
                          width: "75%",
                          "last-line-width": "75%"
                        })
                      ])
                    ])
                  ])
                ]),
                _hoisted_62
              ])
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_63, [
          createBaseVNode("div", _hoisted_64, [
            createBaseVNode("div", _hoisted_65, [
              createBaseVNode("div", _hoisted_66, [
                _hoisted_67,
                createBaseVNode("span", _hoisted_68, toDisplayString(unref(mappedData).activePolicies), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.labels.totalActivePolicies")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_69, [
              createBaseVNode("div", _hoisted_70, [
                _hoisted_71,
                createBaseVNode("span", _hoisted_72, toDisplayString(unref(mappedData).soldPolicies), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.labels.totalSoldPolicies")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_73, [
              createBaseVNode("div", _hoisted_74, [
                _hoisted_75,
                createBaseVNode("span", _hoisted_76, toDisplayString(unref(mappedData).canceledPolicies), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.labels.totalCanceledPolicies")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_77, [
              createBaseVNode("div", _hoisted_78, [
                _hoisted_79,
                createBaseVNode("span", _hoisted_80, toDisplayString(unref(mappedData).averageAge), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.labels.ageAverage")), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_81, [
            createBaseVNode("div", _hoisted_82, [
              createBaseVNode("div", _hoisted_83, [
                createVNode(_component_VAvatar, {
                  size: "large",
                  picture: "/images/avatars/svg/vuero-1.svg"
                }),
                createBaseVNode("h3", _hoisted_84, toDisplayString((_a = unref(user)) == null ? void 0 : _a.name) + " " + toDisplayString((_b = unref(user)) == null ? void 0 : _b.lastname), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)(`config.parameters.users.${(_c = unref(user)) == null ? void 0 : _c.profile}`)), 1),
                createBaseVNode("div", _hoisted_85, [
                  createBaseVNode("p", null, toDisplayString(unref(t)("dashboard.title", { add: "@" })) + ", " + toDisplayString(unref(t)("dashboard.subtitle", { add: "@" })), 1)
                ]),
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("div", _hoisted_87, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.region")), 1),
                      _hoisted_88
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_89, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.created")), 1),
                      createBaseVNode("span", _hoisted_90, toDisplayString(formatDate((_d = unref(user)) == null ? void 0 : _d.createdAt)), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_91, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.status")), 1),
                      createBaseVNode("span", _hoisted_92, toDisplayString(((_e = unref(user)) == null ? void 0 : _e.status) == "active" ? unref(t)("dashboard.labels.active") : unref(t)("dashboard.labels.inactive")), 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_93, [
              createBaseVNode("div", _hoisted_94, [
                createBaseVNode("div", _hoisted_95, [
                  createBaseVNode("div", _hoisted_96, [
                    createBaseVNode("div", _hoisted_97, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.totalActivePremium")), 1),
                      createBaseVNode("span", _hoisted_98, toDisplayString(unref(mappedData).totalActivePremium.toFixed(2)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_99, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.totalCanceledPremium")), 1),
                      createBaseVNode("span", _hoisted_100, toDisplayString(unref(mappedData).totalCanceledPremium.toFixed(2)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_101, [
                      createBaseVNode("span", null, toDisplayString(unref(t)("dashboard.labels.total")), 1),
                      createBaseVNode("span", _hoisted_102, toDisplayString((unref(mappedData).totalActivePremium - unref(mappedData).totalCanceledPremium).toFixed(2)), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_103, [
                  createVNode(unref(ApexChart), {
                    id: "users-chart",
                    height: unref(usersOptions).chart.height,
                    type: unref(usersOptions).chart.type,
                    series: unref(usersOptions).series,
                    options: unref(usersOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ])
        ]))
      ], 64);
    };
  }
});
export { _sfc_main as _ };
