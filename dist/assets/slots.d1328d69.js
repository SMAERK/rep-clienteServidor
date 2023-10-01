import { _ as __unplugin_components_7 } from "./DocumentationDivider.7f67faa1.js";
import { _ as _sfc_main$6 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$5 } from "./VAction.e7ce9b1a.js";
import { _ as _sfc_main$4 } from "./VTag.f234897b.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$3 } from "./VField.b8c33879.js";
import { _ as _sfc_main$2 } from "./VCheckbox.486c8d05.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, a1 as useHead, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, w as withCtx, p as createBlock, h as unref, y as createCommentVNode, F as Fragment, a3 as withDirectives, a4 as vModelText, a2 as withKeys, W as withModifiers, x as createTextVNode, t as toDisplayString } from "./vendor.6548d360.js";
import { f as flexRowsContacts } from "./table.31d75fbb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = ["onUpdate:modelValue"];
const _hoisted_6 = ["onKeydown", "onClick"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify is-inline ml-1",
  "data-icon": "feather:edit-3",
  role: "img",
  "aria-label": "edit"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Contact manager ");
const _hoisted_9 = { class: "mt-4" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Contact manager ");
const _hoisted_11 = { class: "mt-4" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Contact manager ");
const _hoisted_13 = { class: "mt-4" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Contact manager ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Slots usage");
    useHead({
      title: "Slots usage - VFlexTable - Components - Vuero"
    });
    const VFocus = {
      mounted(el) {
        el.focus();
      }
    };
    const selectedRows = ref([]);
    const editCompanyIndex = ref();
    const isAllSelected = computed(() => flexRowsContacts.length === selectedRows.value.length);
    const columns = {
      select: {
        label: "",
        cellClass: "is-flex-grow-0"
      },
      company: {
        label: "Company",
        grow: true
      },
      type: "Type",
      industry: "Industry",
      status: "Status",
      contacts: {
        label: "",
        align: "end"
      }
    };
    function toggleSelection() {
      if (isAllSelected.value) {
        selectedRows.value = [];
      } else {
        selectedRows.value = flexRowsContacts.map((_, index) => index);
      }
    }
    function clickOnRow(row) {
      if (selectedRows.value.includes(row.id)) {
        selectedRows.value = selectedRows.value.filter((i) => i !== row.id);
      } else {
        selectedRows.value = [...selectedRows.value, row.id];
      }
    }
    function contactUser(row) {
      alert(`Contacting "${row.company}" ...`);
    }
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexTableWithSlotsDocumentation = resolveComponent("VFlexTableWithSlotsDocumentation");
      const _component_VCheckbox = _sfc_main$2;
      const _component_VField = _sfc_main$3;
      const _component_VControl = __unplugin_components_1;
      const _component_VTag = _sfc_main$4;
      const _component_VAction = _sfc_main$5;
      const _component_VFlexTable = _sfc_main$6;
      const _component_DocumentationDivider = __unplugin_components_7;
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
              label: "Slots usage",
              to: { name: "components-flextable-slots" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexTableWithSlotsDocumentation, { class: "mt-5" }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsContacts),
                columns: unref(columns),
                compact: "",
                rounded: "",
                reactive: ""
              }, {
                "header-column": withCtx(({ column }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    class: "ml-2 mr-3",
                    checked: unref(isAllSelected),
                    name: "all_selected",
                    color: "primary",
                    square: "",
                    onClick: toggleSelection
                  }, null, 8, ["checked"])) : createCommentVNode("", true)
                ]),
                "body-cell": withCtx(({ row, column, index, value }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedRows.value = $event),
                    value: row.id,
                    name: "selection",
                    square: ""
                  }, null, 8, ["modelValue", "value"])) : column.key === "company" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    editCompanyIndex.value === index ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": ($event) => row[column.key] = $event,
                              type: "text",
                              class: "input is-primary-focus",
                              onBlur: _cache[1] || (_cache[1] = ($event) => editCompanyIndex.value = void 0),
                              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => editCompanyIndex.value = void 0, ["prevent"]), ["space"]))
                            }, null, 40, _hoisted_5), [
                              [vModelText, row[column.key]],
                              [VFocus]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(), createElementBlock("a", {
                      key: 1,
                      class: "is-overlay-desktop is-flex is-pushed-mobile is-align-items-center mx-3-desktop edit-icon-link is-clickable",
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(($event) => editCompanyIndex.value = index, ["prevent"]), ["space"]),
                      onClick: ($event) => editCompanyIndex.value = index
                    }, [
                      createTextVNode(toDisplayString(value) + " ", 1),
                      _hoisted_7
                    ], 40, _hoisted_6))
                  ], 64)) : column.key === "status" ? (openBlock(), createBlock(_component_VTag, {
                    key: 2,
                    rounded: "",
                    color: value === "Suspended" ? "orange" : value === "New" ? "info" : value === "Active" ? "primary" : void 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])) : column.key === "contacts" ? (openBlock(), createBlock(_component_VAction, {
                    key: 3,
                    hoverable: "",
                    onClick: ($event) => contactUser(row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "with-reactive",
              title: "With reactive props"
            }),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsContacts),
                columns: unref(columns),
                compact: "",
                rounded: "",
                reactive: ""
              }, {
                "header-column": withCtx(({ column }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    class: "ml-2 mr-3",
                    checked: unref(isAllSelected),
                    name: "all_selected",
                    color: "primary",
                    square: "",
                    onClick: toggleSelection
                  }, null, 8, ["checked"])) : createCommentVNode("", true)
                ]),
                "body-cell": withCtx(({ row, column, value }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedRows.value = $event),
                    value: row.id,
                    name: "selection",
                    square: ""
                  }, null, 8, ["modelValue", "value"])) : column.key === "status" ? (openBlock(), createBlock(_component_VTag, {
                    key: 1,
                    rounded: "",
                    color: value === "Suspended" ? "orange" : value === "New" ? "info" : value === "Active" ? "primary" : void 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])) : createCommentVNode("", true),
                  column.key === "contacts" ? (openBlock(), createBlock(_component_VAction, {
                    key: 2,
                    hoverable: "",
                    onClick: ($event) => contactUser(row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "without-reactive",
              title: "Without reactive props"
            }),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsContacts),
                columns: unref(columns),
                compact: "",
                rounded: ""
              }, {
                "header-column": withCtx(({ column }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    class: "ml-2 mr-3",
                    checked: unref(isAllSelected),
                    name: "all_selected",
                    color: "primary",
                    square: "",
                    onClick: toggleSelection
                  }, null, 8, ["checked"])) : createCommentVNode("", true)
                ]),
                "body-cell": withCtx(({ row, column, value }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedRows.value = $event),
                    value: row.id,
                    name: "selection",
                    square: ""
                  }, null, 8, ["modelValue", "value"])) : column.key === "status" ? (openBlock(), createBlock(_component_VTag, {
                    key: 1,
                    rounded: "",
                    color: value === "Suspended" ? "orange" : value === "New" ? "info" : value === "Active" ? "primary" : void 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])) : column.key === "contacts" ? (openBlock(), createBlock(_component_VAction, {
                    key: 2,
                    hoverable: "",
                    onClick: ($event) => contactUser(row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_12
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "with-clickable",
              title: "With clickable props"
            }),
            createBaseVNode("div", _hoisted_13, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsContacts),
                columns: unref(columns),
                clickable: "",
                compact: "",
                rounded: "",
                onRowClick: clickOnRow
              }, {
                "header-column": withCtx(({ column }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    class: "ml-2 mr-3",
                    checked: unref(isAllSelected),
                    name: "all_selected",
                    color: "primary",
                    square: "",
                    onClick: toggleSelection
                  }, null, 8, ["checked"])) : createCommentVNode("", true)
                ]),
                "body-cell": withCtx(({ row, column, value }) => [
                  column.key === "select" ? (openBlock(), createBlock(_component_VCheckbox, {
                    key: 0,
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedRows.value = $event),
                    value: row.id,
                    name: "selection",
                    square: ""
                  }, null, 8, ["modelValue", "value"])) : column.key === "status" ? (openBlock(), createBlock(_component_VTag, {
                    key: 1,
                    rounded: "",
                    color: value === "Suspended" ? "orange" : value === "New" ? "info" : value === "Active" ? "primary" : void 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])) : column.key === "contacts" ? (openBlock(), createBlock(_component_VAction, {
                    key: 2,
                    onClick: withModifiers(($event) => contactUser(row), ["stop"])
                  }, {
                    default: withCtx(() => [
                      _hoisted_14
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
