import { a as _sfc_main$1, _ as _sfc_main$6 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$5 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, a1 as useHead, a0 as useRoute, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, h as unref, j as h } from "./vendor.6548d360.js";
import { a as flexRowsAdvanced } from "./table.31d75fbb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { _ as _sfc_main$2 } from "./VTag.f234897b.js";
import { _ as _sfc_main$4 } from "./FlexTableDropdown.bdf5c6d6.js";
import { _ as _sfc_main$3 } from "./VAvatarStack.d8a5f95e.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mt-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Render functions (advanced)");
    useHead({
      title: "Render functions (advanced) - VFlexTable - Components - Vuero"
    });
    const collator = new Intl.Collator("en");
    const numberFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    const router = useRoute();
    const sortedData = computed(() => {
      switch (router.query.sort) {
        case "username:asc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(a.username, b.username));
        }
        case "username:desc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(b.username, a.username));
        }
        case "annual-earnings:asc": {
          return [...flexRowsAdvanced].sort((a, b) => a.annualEarnings > b.annualEarnings ? 1 : -1);
        }
        case "annual-earnings:desc": {
          return [...flexRowsAdvanced].sort((a, b) => a.annualEarnings > b.annualEarnings ? -1 : 1);
        }
        case "position:asc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(a.position, b.position));
        }
        case "position:desc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(b.position, a.position));
        }
        case "status:asc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(a.status, b.status));
        }
        case "status:desc": {
          return [...flexRowsAdvanced].sort((a, b) => collator.compare(b.status, a.status));
        }
        case "contacts:asc": {
          return [...flexRowsAdvanced].sort((a, b) => a.contacts.length > b.contacts.length ? 1 : -1);
        }
        case "contacts:desc": {
          return [...flexRowsAdvanced].sort((a, b) => a.contacts.length > b.contacts.length ? -1 : 1);
        }
        default: {
          return flexRowsAdvanced;
        }
      }
    });
    const exampleColumns = {
      username: {
        bold: true,
        renderHeader: () => h(_sfc_main$1, {
          label: "Name",
          id: "username"
        })
      },
      position: {
        renderHeader: () => h(_sfc_main$1, {
          label: "Position",
          id: "position"
        })
      },
      annualEarnings: {
        inverted: true,
        format: (value) => numberFormat.format(value),
        renderHeader: () => h(_sfc_main$1, {
          label: "Revenue",
          id: "annual-earnings"
        })
      },
      status: {
        label: "Status",
        renderRow: (row) => h(_sfc_main$2, {
          rounded: true,
          color: row.status === "Active" ? "success" : row.status === "New" ? "info" : row.status === "Suspended" ? "orange" : void 0
        }, {
          default() {
            return `${row.status}`;
          }
        }),
        renderHeader: () => h(_sfc_main$1, {
          label: "Status",
          id: "status"
        })
      },
      contacts: {
        renderHeader: () => h("span", {}, h(_sfc_main$1, {
          label: "Contacts",
          id: "contacts"
        })),
        renderRow: (row) => h(_sfc_main$3, {
          class: "is-pushed-mobile",
          size: "small",
          avatars: row.contacts,
          limit: 3
        })
      },
      actions: {
        label: "",
        align: "end",
        renderRow: (row) => h(_sfc_main$4, {
          onView: () => {
            console.log("viewing", row);
          },
          onProjects: () => {
            console.log("projects", row);
          },
          onSchedule: () => {
            console.log("schedule", row);
          },
          onRemove: () => {
            console.log("remove", row);
          }
        })
      }
    };
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$5;
      const _component_VFlexTableWithRenderDocumentation = resolveComponent("VFlexTableWithRenderDocumentation");
      const _component_VFlexTable = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "Vuero",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "VFlexTable",
              to: { name: "components-flextable" }
            },
            {
              label: "Render functions (advanced)",
              to: { name: "components-flextable-render" }
            }
          ]
        }, null, 8, ["items"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexTableWithRenderDocumentation, { class: "mt-5" }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexTable, {
                data: unref(sortedData),
                columns: unref(exampleColumns),
                rounded: ""
              }, null, 8, ["data", "columns"])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
