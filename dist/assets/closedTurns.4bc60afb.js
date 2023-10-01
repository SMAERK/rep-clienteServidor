import _sfc_main$6 from "./SidebarLayout.6399bc9d.js";
import { _ as _sfc_main$5 } from "./VTag.f234897b.js";
import { _ as _sfc_main$4 } from "./VPlaceloadText.2b6ef8c1.js";
import { _ as _export_sfc, a as useUserSession, b as _sfc_main$2, e as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { $ as useRouter, a1 as useHead, k as ref, e as computed, Q as watch, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, s as createVNode, q as createBaseVNode, a3 as withDirectives, aB as vModelSelect, f as createElementBlock, F as Fragment, X as renderList, y as createCommentVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { g as generateExcel, b as tryGetClosingTurns } from "./index.c13a9b10.js";
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
import "./VBlock.64333f78.js";
import "./VIconBox.298b3a59.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./LanguagesPanel.b7b20087.js";
import "./Sidebar.14a911d1.js";
import "./useThemeColors.b71015d4.js";
var closedTurns_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Empleados AIG",
  setup() {
    const viewWrapper = useViewWrapper();
    useRouter();
    const notyf = useNotyf();
    viewWrapper.setPageTitle("Venta de Turnos");
    useUserSession();
    useHead({
      title: "CRECIENDO SEGURO"
    });
    let isLoading = ref(false);
    const today = ref(substractDays(30, new Date()));
    const endDate = ref(new Date());
    const shifts = ref();
    ref();
    const userData = ref({});
    const productsDataOptions = ref([]);
    const iniciatives = ref("");
    const policies = ref([]);
    const isDownloading = ref(false);
    ref("");
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
        name: "OPERADOR",
        station: "ESTACI\xD3N",
        startAt: "FECHA CREACI\xD3N",
        endAtt: "FECHA FIN",
        totalturnSales: "TOTAL TURNOS",
        totalcashSales: "TOTAL EFECTIVO",
        totatlcSales: "TOTAL TC",
        tcPolicies: "TOTAL POLIZAS VENDIDAS",
        totalpolicies: "DETALLE POLIZAS VENDIDAS"
      };
      records.forEach((element) => {
        element.name = element.name;
        element.station = element.station;
        element.startAt = hooks(element.startAt).format("YYYY/MM/DD hh:ss");
        element.endAt = hooks(element.endAt).format("YYYY/MM/DD hh:ss");
        element.totalturnSales = element.turnSales;
        element.totalcashSales = element.cashSales;
        element.totatlcSales = element.tcSales;
        element.tcPolicies = element.totalspolicies;
        element.totalpolicies = element.tpolicies;
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
        fileLink.setAttribute("download", "Reportes_Venta_Turnos_" + new Date().toLocaleDateString() + ".xlsx");
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
        label: "Operador",
        field: "name",
        sortable: false
      },
      {
        label: "Estaci\xF3n",
        field: "station",
        sortable: false
      },
      {
        label: "Fecha Inicio ",
        field: "startAt",
        sortable: false
      },
      {
        label: "Fecha Fin",
        field: "endAt",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Total Turnos",
        field: "turnSales",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Total Efectivo ",
        field: "cashSales",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Total TC",
        field: "tcSales",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Total Polizas Vendidas",
        field: "totalspolicies",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        sortable: false
      },
      {
        label: "Detalle Polizas Vendidas",
        field: "policies",
        thClass: "has-text-centered",
        tdClass: "has-text-centered",
        formatFn: format(),
        sortable: false
      }
    ]);
    const rows = ref([]);
    function format(value) {
      return "$" + value;
    }
    async function getAllTurn(stations) {
      isLoading.value = true;
      const accessTokenCore = localStorage.getItem("token");
      const body = {
        stationId: stations ? stations : ""
      };
      const { shifts: shifts2 } = await tryGetClosingTurns(accessTokenCore, body);
      const closed = shifts2;
      rows.value = [];
      const options2 = { style: "currency", currency: "USD" };
      if (closed.length) {
        closed.forEach((doc) => {
          policies.value = [];
          const mappedData = {
            name: doc.turn.name,
            startAt: hooks(doc.turn.startAt).format("YYYY/MM/DD hh:ss"),
            endAt: hooks(doc.turn.endAt).format("YYYY/MM/DD hh:ss"),
            station: doc.turn.station,
            turnSales: new Intl.NumberFormat("en-US", options2).format(doc.AllTurnSales),
            cashSales: new Intl.NumberFormat("en-US", options2).format(doc.allCashSales),
            tcSales: new Intl.NumberFormat("en-US", options2).format(doc.allTCsales),
            totalspolicies: doc.policiesSoldByTurn,
            tpolicies: doc.policies
          };
          if (mappedData.tpolicies.length > 0) {
            for (const policiesData of mappedData.tpolicies) {
              let policiesConcat = policiesData.csId;
              policies.value.push(policiesConcat);
            }
          }
          mappedData.tpolicies = policies.value;
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
    watch(range.value, async (newValue) => await getAllTurn(), { immediate: true });
    return {
      formatDate,
      getAllTurn,
      downloadExcel,
      isLoading,
      columns,
      range,
      rows,
      policies,
      shifts,
      userData,
      productsDataOptions,
      iniciatives
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-3" }, "Listado de Ventas", -1);
const _hoisted_2 = { class: "columns is-multiline mt-3 mb-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", null, null, -1);
const _hoisted_5 = { class: "select" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  selected: ""
}, "Seleccione una Iniciativa", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("option", { value: "Tropigas Villa Juana" }, "Tropigas Villa Juana", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("option", { value: "Tropigas Sans Souci" }, "Tropigas Sans Souci", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("option", { value: "Tropigas Las Palmas" }, "Tropigas Las Palmas", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("option", { value: "Tropigas Sabana Perdida" }, "Tropigas Sabana Perdida", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("option", { value: "Tropigas Zona Universitaria" }, "Tropigas Zona Universitaria", -1);
const _hoisted_12 = [
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10,
  _hoisted_11
];
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Consultar");
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "mr-2" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Exportar Excel ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VControl = __unplugin_components_1;
  const _component_VField = _sfc_main$1;
  const _component_VButton = _sfc_main$2;
  const _component_VCard = _sfc_main$3;
  const _component_VPlaceloadText = _sfc_main$4;
  const _component_VTag = _sfc_main$5;
  const _component_vue_good_table = resolveComponent("vue-good-table");
  const _component_SidebarLayout = _sfc_main$6;
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
                  createVNode(_component_VControl, {
                    class: "has-icons-left",
                    icon: "fas fa-building"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_5, [
                        withDirectives(createBaseVNode("select", {
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.stations = $event),
                          style: { "height": "38px" }
                        }, _hoisted_12, 512), [
                          [vModelSelect, _ctx.stations]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_13, [
              createVNode(_component_VButton, {
                style: { "background-color": "#0c7083" },
                color: "primary",
                raised: "",
                icon: "feather:zoom-in",
                loading: $setup.isLoading,
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.getAllTurn(_ctx.stations))
              }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ])
        ]),
        _: 1
      }),
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
          initialSortBy: { field: "startAt", type: "desc" }
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
        "table-row": withCtx((props) => [
          props.column.field === "policies" ? (openBlock(), createElementBlock("div", _hoisted_15, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.row.tpolicies, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item,
                class: "mb-1"
              }, [
                createVNode(_component_VTag, {
                  style: { "background-color": "#0c7083", "color": "white" },
                  label: item
                }, null, 8, ["label"])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        "table-actions": withCtx(() => [
          createBaseVNode("div", _hoisted_16, [
            createVNode(_component_VButton, {
              style: { "height": "33px", "color": "white", "background-color": "#0c7083" },
              color: "primary",
              icon: "feather:download",
              raised: "",
              loading: _ctx.isDownloading,
              disabled: $setup.rows.length == 0,
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.downloadExcel())
            }, {
              default: withCtx(() => [
                _hoisted_17
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
var closedTurns = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { closedTurns as default };
