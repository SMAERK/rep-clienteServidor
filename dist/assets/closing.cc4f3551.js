import _sfc_main$3 from "./SidebarLayout.6399bc9d.js";
import { _ as _export_sfc, a as useUserSession, b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VPlaceloadText.2b6ef8c1.js";
import { $ as useRouter, a1 as useHead, k as ref, e as computed, Q as watch, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, s as createVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { g as generateExcel, c as tryGetClosingShift } from "./index.c13a9b10.js";
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
import "./VField.b8c33879.js";
import "./VControl.eb555562.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./LanguagesPanel.b7b20087.js";
import "./Sidebar.14a911d1.js";
import "./useThemeColors.b71015d4.js";
var closing_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Empleados AIG",
  setup() {
    const viewWrapper = useViewWrapper();
    useRouter();
    const notyf = useNotyf();
    viewWrapper.setPageTitle("Cierre de Turnos");
    useUserSession();
    useHead({
      title: "CRECIENDO SEGURO"
    });
    let isLoading = ref(false);
    const today = ref(substractDays(30, new Date()));
    const endDate = ref(new Date());
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
        name: "OPERADOR",
        station: "ESTACI\xD3N",
        startAt: "FECHA INICIO",
        endAt: "FECHA FIN"
      };
      records.forEach((element) => {
        element.name = element.name;
        element.station = element.station;
        element.startAt = hooks(element.startAt).format("YYYY/MM/DD hh:ss");
        element.endAt = hooks(element.endAt).format("YYYY/MM/DD hh:ss");
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
        fileLink.setAttribute("download", "Reportes_Cierre_Turnos_" + new Date().toLocaleDateString() + ".xlsx");
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
      }
    ]);
    const rows = ref([]);
    async function getAllTurn() {
      console.log("ingresa aqui");
      isLoading.value = true;
      const accessTokenCore = localStorage.getItem("token");
      const { turns } = await tryGetClosingShift(accessTokenCore);
      const Turns = turns;
      shifts.value = Turns;
      rows.value = [];
      if (Turns.length) {
        Turns.forEach((doc) => {
          const mappedData = {
            name: doc.name,
            startAt: hooks(doc.startAt).format("YYYY/MM/DD hh:ss"),
            endAt: hooks(doc.endAt).format("YYYY/MM/DD hh:ss"),
            station: doc.station
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
    watch(range.value, async (newValue) => await getAllTurn(), { immediate: true });
    return {
      formatDate,
      getAllTurn,
      downloadExcel,
      isLoading,
      columns,
      range,
      rows,
      shifts,
      userData,
      productsDataOptions,
      iniciatives
    };
  }
};
const _hoisted_1 = { class: "mr-2" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Exportar Excel ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VPlaceloadText = _sfc_main$1;
  const _component_VButton = _sfc_main$2;
  const _component_vue_good_table = resolveComponent("vue-good-table");
  const _component_SidebarLayout = _sfc_main$3;
  return openBlock(), createBlock(_component_SidebarLayout, null, {
    default: withCtx(() => [
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
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VButton, {
              style: { "height": "33px", "color": "white", "background-color": "#0c7083" },
              color: "primary",
              icon: "feather:download",
              raised: "",
              loading: _ctx.isDownloading,
              disabled: $setup.rows.length == 0,
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.downloadExcel())
            }, {
              default: withCtx(() => [
                _hoisted_2
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
var closing = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { closing as default };
