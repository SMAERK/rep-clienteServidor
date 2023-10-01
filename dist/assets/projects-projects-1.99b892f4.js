var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _sfc_main$6 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$5 } from "./VProgress.5bff1011.js";
import { _ as __unplugin_components_0 } from "./ProjectsToolbar.bf856e55.js";
import { _ as _imports_0 } from "./company1.6cff99f5.js";
import { d as defineComponent, a0 as useRoute, e as computed, j as h, R as RouterLink, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, h as unref, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$2 } from "./VTag.f234897b.js";
import { _ as _sfc_main$4 } from "./FlexTableDropdown.bdf5c6d6.js";
import { _ as _sfc_main$3 } from "./VAvatarStack.d8a5f95e.js";
import { a as flexRowsAdvanced } from "./table.31d75fbb.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VAvatar.08652fea.js";
import "./index.e178843f.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
var ProjectsViewV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "all-projects" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", { class: "section-heading" }, "Recently viewed", -1);
const _hoisted_3 = { class: "columns is-multiline project-grid is-flex-tablet-p is-half-tablet-p" };
const _hoisted_4 = { class: "column is-one-fifth" };
const _hoisted_5 = { class: "project-grid-item" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", null, "The Slicer project", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Design project", -1);
const _hoisted_8 = { class: "column is-one-fifth" };
const _hoisted_9 = { class: "project-grid-item" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h3", null, "Metamovies reworked", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, "Design project", -1);
const _hoisted_12 = { class: "column is-one-fifth" };
const _hoisted_13 = { class: "project-grid-item" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h3", null, "Supreme Flights app", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "Software project", -1);
const _hoisted_16 = { class: "column is-one-fifth" };
const _hoisted_17 = { class: "project-grid-item" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h3", null, "Fastpizza delivery app", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, "Software project", -1);
const _hoisted_20 = { class: "column is-one-fifth" };
const _hoisted_21 = { class: "project-grid-item" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h3", null, "Drop website redesign", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "Design project", -1);
const _hoisted_24 = { class: "columns" };
const _hoisted_25 = { class: "column is-12" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
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
    const SortColumnComponent = defineComponent({
      props: {
        label: {
          type: String,
          required: true
        },
        id: {
          type: String,
          required: true
        }
      },
      setup(props) {
        const currentRoute = useRoute();
        return () => h(RouterLink, {
          to: __spreadProps(__spreadValues({}, currentRoute), {
            query: {
              sort: currentRoute.query.sort === `${props.id}:asc` ? `${props.id}:desc` : currentRoute.query.sort === `${props.id}:desc` ? void 0 : `${props.id}:asc`
            }
          })
        }, {
          default() {
            const icon = h("span", { key: `${currentRoute.query.sort}`, class: "is-inline" }, h("span", {
              class: "iconify is-inline",
              "data-icon": currentRoute.query.sort === `${props.id}:asc` ? "fa:sort-asc" : currentRoute.query.sort === `${props.id}:desc` ? "fa:sort-desc" : "fa:sort"
            }));
            return [props.label, icon];
          }
        });
      }
    });
    const exampleColumns = {
      username: {
        bold: true,
        renderHeader: () => h("span", {}, h(SortColumnComponent, {
          label: "Name",
          id: "username"
        }))
      },
      position: {
        renderHeader: () => h("span", {}, h(SortColumnComponent, {
          label: "Position",
          id: "position"
        }))
      },
      annualEarnings: {
        inverted: true,
        format: (value) => numberFormat.format(value),
        renderHeader: () => h("span", {}, h(SortColumnComponent, {
          label: "Revenue",
          id: "annual-earnings"
        }))
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
        renderHeader: () => h("span", {}, h(SortColumnComponent, {
          label: "Status",
          id: "status"
        }))
      },
      contacts: {
        renderHeader: () => h("span", {}, h(SortColumnComponent, {
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
      const _component_ProjectsToolbar = __unplugin_components_0;
      const _component_VProgress = _sfc_main$5;
      const _component_VFlexTable = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ProjectsToolbar),
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("a", _hoisted_5, [
              _hoisted_6,
              _hoisted_7,
              createVNode(_component_VProgress, {
                size: "tiny",
                value: 31
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("a", _hoisted_9, [
              _hoisted_10,
              _hoisted_11,
              createVNode(_component_VProgress, {
                size: "tiny",
                value: 84
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("a", _hoisted_13, [
              createBaseVNode("img", {
                class: "project-avatar",
                src: _imports_0,
                alt: "",
                onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
              }, null, 32),
              _hoisted_14,
              _hoisted_15,
              createVNode(_component_VProgress, {
                size: "tiny",
                value: 45
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("a", _hoisted_17, [
              _hoisted_18,
              _hoisted_19,
              createVNode(_component_VProgress, {
                size: "tiny",
                value: 90
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("a", _hoisted_21, [
              _hoisted_22,
              _hoisted_23,
              createVNode(_component_VProgress, {
                size: "tiny",
                value: 12
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createVNode(_component_VFlexTable, {
              data: unref(sortedData),
              columns: unref(exampleColumns),
              rounded: ""
            }, null, 8, ["data", "columns"])
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
    viewWrapper.setPageTitle("Projects projects");
    useHead({
      title: "Projects projects - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ProjectsViewV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ProjectsViewV1)
      ]);
    };
  }
});
export { _sfc_main as default };
