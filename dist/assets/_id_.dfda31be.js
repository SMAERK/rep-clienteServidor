import _sfc_main$6 from "./SidebarLayout.6399bc9d.js";
import { _ as _sfc_main$5 } from "./VPlaceloadText.2b6ef8c1.js";
import { b as _sfc_main$2, d as _sfc_main$3, e as _sfc_main$4 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VFlexTable.b8a1fcae.js";
import { k as ref, a0 as useRoute, $ as useRouter, m as useI18n, e as computed, Y as onMounted, a1 as useHead, o as openBlock, p as createBlock, w as withCtx, s as createVNode, g as normalizeClass, h as unref, y as createCommentVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { e as tryGetUsers } from "./index.c13a9b10.js";
import "./moment.17f8281e.js";
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
var _id__vue_vue_type_style_index_0_lang = "";
var block0 = {};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("ACTIVAR");
const _sfc_main = {
  setup(__props) {
    const rows = ref([]);
    const route = useRoute();
    const viewWrapper = useViewWrapper();
    const router = useRouter();
    useNotyf();
    let isLoading = ref(false);
    useI18n();
    ref([]);
    ref([]);
    ref(false);
    ref({
      input: "DD/MM/YYYY"
    });
    ref(new Date());
    ref(substractDays(30));
    const processId = computed(() => route.params.id);
    function substractDays(days) {
      var res = new Date();
      res.setDate(res.getDate() - days);
      return res;
    }
    const getPolicy = async () => {
      console.log("se ejecuta el get policy");
      const params = JSON.parse(atob(processId.value));
      const response = await tryGetUsers();
      let userArray = [];
      rows.value = [];
      for (const element of params.data) {
        const users = response.data.find((e) => e.id == element);
        if (users) {
          userArray.push(users);
        }
      }
      const validateStatus = (userStatus) => {
        if (userStatus === true && params.action == "active") {
          return "Este Usuario ya se encuentra Activo";
        } else if (userStatus === false && params.action == "active") {
          return "Listo para Activar";
        } else if (userStatus === true && params.action == "inactive") {
          return "Listo para Inactivar";
        } else if (userStatus === false && params.action == "inactive") {
          return "Este Usuario ya se encuentra Inactivo";
        }
      };
      for (const e of userArray) {
        rows.value.push({
          id: e.id,
          createdAt: e.createdAt,
          identification: e.identification,
          role: e.role,
          createdBy: e.createdBy,
          name: e.name + " " + e.lastname,
          email: e.email,
          status: e.isActive == true ? "ACTIVO" : "INACTIVO",
          message: validateStatus(false)
        });
      }
    };
    const columns = {
      name: {
        label: "Nombre Completo"
      },
      email: {
        label: "E-mail"
      },
      role: "Rol",
      status: {
        label: "Status",
        align: "center"
      },
      message: {
        label: "Comentario",
        align: "center",
        bold: true,
        colorClass: "red"
      }
    };
    onMounted(async () => {
      viewWrapper.setPageTitle("Operarios");
      useHead({
        title: "LIVERPOOL - CONSULTA MASIVA"
      });
      await getPolicy();
    });
    return (_ctx, _cache) => {
      const _component_VFlexTable = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_VCard = _sfc_main$4;
      const _component_VPlaceloadText = _sfc_main$5;
      const _component_SidebarLayout = _sfc_main$6;
      return openBlock(), createBlock(_component_SidebarLayout, null, {
        default: withCtx(() => [
          createVNode(_component_VCard, {
            radius: "regular",
            elevated: "",
            class: "mb-5 p-b-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_VFlexTable, {
                columns,
                data: rows.value,
                class: normalizeClass(columns.colorClass)
              }, null, 8, ["data", "class"]),
              createVNode(_component_VButtons, { class: "is-right" }, {
                default: withCtx(() => [
                  createVNode(_component_VButton, {
                    style: { "color": "white", "background-color": "#0c7083" },
                    color: "primary",
                    raised: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/users/form/"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          unref(isLoading) ? (openBlock(), createBlock(_component_VPlaceloadText, {
            key: 0,
            lines: 20,
            center: "true",
            "last-line-width": "100%"
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
