import _sfc_main$8 from "./SidebarLayout.6399bc9d.js";
import { _ as _sfc_main$7 } from "./VPlaceloadText.2b6ef8c1.js";
import { _ as _sfc_main$6 } from "./VLoader.74e9a6e7.js";
import { _ as _sfc_main$5 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$4 } from "./VIconBox.298b3a59.js";
import { _ as _export_sfc, a as useUserSession, b as _sfc_main$2, e as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { $ as useRouter, a1 as useHead, k as ref, e as computed, Q as watch, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, s as createVNode, q as createBaseVNode, a3 as withDirectives, aB as vModelSelect, _ as mergeProps, aJ as toHandlers, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { g as generateExcel, d as tryGetPoliciesReport } from "./index.c13a9b10.js";
import { h as hooks } from "./moment.17f8281e.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import "./UserProfileDropdown.c528b802.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VProgress.5bff1011.js";
import "./panels.9ed80fb9.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VIconButton.f948e51d.js";
import "./VPageContent.f47e1c5e.js";
import "./Toolbar.cbd734d2.js";
import "./TaskPanel.a47df64e.js";
import "./FileCardDropdown.ed362889.js";
import "./SearchPanel.54ae1913.js";
import "./UserPopoverContent.5da306fe.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./LanguagesPanel.b7b20087.js";
import "./Sidebar.14a911d1.js";
import "./useThemeColors.b71015d4.js";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Empleados AIG",
  setup() {
    const viewWrapper = useViewWrapper();
    useRouter();
    const notyf = useNotyf();
    viewWrapper.setPageTitle("Reporte");
    useUserSession();
    useHead({
      title: "CRECIENDO SEGURO"
    });
    let isLoading = ref(false);
    const today = ref(substractDays(30, new Date()));
    const endDate = ref(new Date());
    const totalPolicySales = ref();
    const policiesSold = ref();
    const shifts = ref();
    const userData = ref({});
    const productsDataOptions = ref([]);
    const iniciatives = ref("");
    const isDownloading = ref(false);
    const users = computed(() => localStorage.getItem("user"));
    JSON.parse(users.value);
    const downloadExcel = async () => {
      await downloadReport();
    };
    const downloadReport = async () => {
      isDownloading.value = true;
      let labels = {};
      let records = rows.value;
      labels = {
        csId: "POLIZA",
        type: "TIPO DE VEHICULO",
        brand: "MARCA",
        model: "MODELO",
        yearPlate: "A\xD1O",
        fullName: "NOMBRE",
        ownerId: "ID del Propietario",
        months: "TIPO DE PLAN",
        createdAt: "FECHA CREACI\xD3N",
        chasis: "CHASIS",
        payMethod: "TIPO DE COBRO",
        price: "COSTO",
        status: "STATUS"
      };
      records.forEach((element) => {
        element.csId = element.csId;
        element.fullName = element.fullName;
        element.months = element.months;
        element.createdAt = element.createdAt;
        element.payMethod = element.payMethod;
        element.status = element.status == "ACTIVE" ? "ACTIVA" : "N/A";
        element.type = element.type;
        element.model = element.model;
        element.brand = element.brand;
        element.yearPlate = element.yearPlate;
        element.ownerId = element.ownerId;
        element.price = element.price;
        element.chasis = element.chasis;
      });
      const accessTokenCore = localStorage.getItem("token");
      const body = {
        records,
        labels,
        type: "DATASTUDIO"
      };
      await generateExcel(accessTokenCore, body).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data], {
          type: "application/vnd.ms-excel"
        }));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reportes_Polizas_" + new Date().toLocaleDateString() + ".xlsx");
        document.body.appendChild(fileLink);
        isDownloading.value = false;
        fileLink.click();
      });
    };
    const range = ref({
      start: today.value,
      end: endDate.value
    });
    const columns = ref([
      {
        label: "Poliza",
        field: "csId",
        sortable: false
      },
      {
        label: "Tipo Vehiculo",
        field: "type",
        sortable: false
      },
      {
        label: "Marca",
        field: "brand",
        sortable: false
      },
      {
        label: "Modelo",
        field: "model",
        sortable: false
      },
      {
        label: "A\xF1o",
        field: "yearPlate",
        sortable: false
      },
      {
        label: "Nombre",
        field: "fullName",
        sortable: false
      },
      {
        label: "ID del Propietario",
        field: "ownerId",
        sortable: false
      },
      {
        label: "Tipo de Plan",
        field: "months",
        sortable: false
      },
      {
        label: "Fecha Creaci\xF3n",
        field: "createdAt",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Tipo de Cobro",
        field: "payMethod",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: true
      },
      {
        label: "Costo",
        field: "price",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: true
      },
      {
        label: "Status",
        field: "status",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      }
    ]);
    const rows = ref([]);
    async function getAllPolicies(start, end) {
      isLoading.value = true;
      const accessTokenCore = localStorage.getItem("token");
      const body = {
        from: range.value.start,
        to: range.value.end,
        stationId: "",
        name: ""
      };
      const { data } = await tryGetPoliciesReport(accessTokenCore, body);
      const policies = data.policies;
      totalPolicySales.value = data.totalPolicySales;
      policiesSold.value = data.policiesSold;
      shifts.value = data.shifts;
      rows.value = [];
      const options2 = { style: "currency", currency: "USD" };
      if (policies.length) {
        policies.forEach((doc) => {
          const mappedData = {
            fullName: doc.ownerName,
            id: doc.uid,
            createdAt: doc.createdAt,
            payMethod: doc.payMethod,
            status: doc.status,
            csId: doc.csId,
            months: `(${doc.months}) meses`,
            type: doc.type,
            model: doc.model,
            brand: doc.brand,
            model: doc.model,
            yearPlate: doc.yearPlate,
            ownerId: doc.ownerId,
            price: new Intl.NumberFormat("en-US", options2).format(doc.price),
            chasis: doc.chassis
          };
          rows.value.push(mappedData);
        });
      } else {
        notyf.warning({
          message: "No encontr\xF3 data en ese rango fecha, favor utilizar otro rango!",
          duration: 7500,
          dismissible: true
        });
      }
      isLoading.value = false;
    }
    function substractDays(days, date) {
      var res = date;
      res.setDate(res.getDate() - days);
      return res;
    }
    const formatDate = (date) => {
      return hooks(date).format("DD/MM/YYYY");
    };
    watch(range.value, async (newValue) => await getAllPolicies(range.value.start, range.value.end), { immediate: true });
    return {
      formatDate,
      getAllPolicies,
      downloadExcel,
      isLoading,
      columns,
      range,
      rows,
      totalPolicySales,
      policiesSold,
      shifts,
      userData,
      productsDataOptions,
      iniciatives
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-3" }, "Listado de Reporte", -1);
const _hoisted_2 = { class: "columns is-multiline mt-3 mb-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  placeholder: "Filtrar por nombre",
  required: ""
}, null, -1);
const _hoisted_6 = { class: "column is-2" };
const _hoisted_7 = { class: "select" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  selected: ""
}, "TIPO DE COBRO", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "column is-2" };
const _hoisted_11 = { class: "select" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  selected: ""
}, "ESTACIONES", -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = { class: "column is-3" };
const _hoisted_15 = ["value"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("a", { class: "button is-static" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_17 = ["value"];
const _hoisted_18 = { class: "column is-2" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Buscar");
const _hoisted_20 = { class: "columns" };
const _hoisted_21 = { class: "column is-4" };
const _hoisted_22 = { class: "dashboard-card" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:list"
}, null, -1);
const _hoisted_24 = { class: "column is-4" };
const _hoisted_25 = { class: "dashboard-card" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_27 = { class: "column is-4" };
const _hoisted_28 = { class: "dashboard-card" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:dollar-sign"
}, null, -1);
const _hoisted_30 = { class: "mr-2" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" Exportar Excel ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VControl = __unplugin_components_1;
  const _component_VField = _sfc_main$1;
  const _component_VDatePicker = resolveComponent("VDatePicker");
  const _component_VButton = _sfc_main$2;
  const _component_VCard = _sfc_main$3;
  const _component_VIconBox = _sfc_main$4;
  const _component_VBlock = _sfc_main$5;
  const _component_VLoader = _sfc_main$6;
  const _component_VPlaceloadText = _sfc_main$7;
  const _component_vue_good_table = resolveComponent("vue-good-table");
  const _component_SidebarLayout = _sfc_main$8;
  return openBlock(), createBlock(_component_SidebarLayout, null, {
    default: withCtx(() => [
      createVNode(_component_VCard, {
        radius: "regular",
        elevated: "",
        class: "mb-5 p-b-10"
      }, {
        default: withCtx(() => [
          _hoisted_1,
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VField, null, {
                default: withCtx(() => [
                  _hoisted_4,
                  createVNode(_component_VControl, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_VField, null, {
                default: withCtx(() => [
                  createVNode(_component_VControl, {
                    class: "has-icons-left",
                    icon: "fas fa-building"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_7, [
                        withDirectives(createBaseVNode("select", {
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.iniciatives = $event),
                          style: { "height": "38px" }
                        }, _hoisted_9, 512), [
                          [vModelSelect, $setup.iniciatives]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VField, null, {
                default: withCtx(() => [
                  createVNode(_component_VControl, {
                    class: "has-icons-left",
                    icon: "fas fa-building"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        withDirectives(createBaseVNode("select", {
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.iniciatives = $event),
                          style: { "height": "38px" }
                        }, _hoisted_13, 512), [
                          [vModelSelect, $setup.iniciatives]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(_component_VDatePicker, {
                modelValue: $setup.range,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.range = $event),
                "is-range": "",
                color: "green",
                "trim-weeks": ""
              }, {
                default: withCtx(({ inputValue, inputEvents }) => [
                  createVNode(_component_VField, { addons: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("input", mergeProps({
                            value: inputValue.start,
                            class: "input"
                          }, toHandlers(inputEvents.start)), null, 16, _hoisted_15)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_16
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("input", mergeProps({
                            value: inputValue.end,
                            class: "input"
                          }, toHandlers(inputEvents.end)), null, 16, _hoisted_17)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VButton, {
                    style: { "background-color": "#0c7083" },
                    color: "primary",
                    raised: "",
                    loading: $setup.isLoading,
                    disabled: !$setup.range.start,
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.getAllPolicies($setup.range.start, $setup.range.end))
                  }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_20, [
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createVNode(_component_VLoader, {
              size: "small",
              active: $setup.isLoading,
              style: { "font-size": "1.95rem !important" }
            }, {
              default: withCtx(() => [
                createVNode(_component_VBlock, {
                  title: $setup.shifts,
                  subtitle: "Turnos",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "info",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createVNode(_component_VLoader, {
              size: "small",
              active: $setup.isLoading
            }, {
              default: withCtx(() => [
                createVNode(_component_VBlock, {
                  title: $setup.policiesSold,
                  subtitle: "Polizas Vendidas",
                  center: "",
                  style: { "font-size": "1.95rem !important" }
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "info",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_26
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ]),
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createVNode(_component_VLoader, {
              size: "small",
              active: $setup.isLoading
            }, {
              default: withCtx(() => [
                createVNode(_component_VBlock, {
                  title: $setup.totalPolicySales,
                  subtitle: "Dinero Recaudado",
                  center: "",
                  style: { "font-size": "1.95rem !important" }
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "green",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_29
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ])
      ]),
      $setup.isLoading ? (openBlock(), createBlock(_component_VPlaceloadText, {
        key: 0,
        lines: 20
      })) : (openBlock(), createBlock(_component_vue_good_table, {
        key: 1,
        color: _ctx.primary,
        columns: $setup.columns,
        rows: $setup.rows,
        "sort-options": {
          enabled: true,
          initialSortBy: { field: "createdAt", type: "desc" }
        },
        "pagination-options": {
          enabled: true,
          position: "top",
          perPageDropdown: [10, 50, 100, 200],
          dropdownAllowAll: true,
          setCurrentPage: 1,
          nextLabel: "Siguiente",
          prevLabel: "Anterior",
          rowsPerPageLabel: "FILAS POR P\xC1GINA",
          ofLabel: "De",
          allLabel: "Todas"
        }
      }, {
        "table-actions": withCtx(() => [
          createBaseVNode("div", _hoisted_30, [
            createVNode(_component_VButton, {
              style: { "height": "33px", "color": "white", "background-color": "#0c7083" },
              color: "primary",
              icon: "feather:download",
              raised: "",
              loading: _ctx.isDownloading,
              disabled: $setup.rows.length == 0,
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.downloadExcel())
            }, {
              default: withCtx(() => [
                _hoisted_31
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        _: 1
      }, 8, ["color", "columns", "rows"]))
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
