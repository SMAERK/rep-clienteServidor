import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as __unplugin_components_7 } from "./DocumentationDivider.7f67faa1.js";
import { _ as _sfc_main$2 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, y as createCommentVNode } from "./vendor.6548d360.js";
import { b as flexRowsBasic, f as flexRowsContacts } from "./table.31d75fbb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "mt-4 mb-4" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { class: "mt-4" };
const _hoisted_6 = { class: "mt-4" };
const _hoisted_7 = { class: "mt-4 mb-4" };
const _hoisted_8 = { class: "mt-4" };
const _hoisted_9 = { class: "mt-4" };
const _hoisted_10 = { class: "mt-4" };
const _hoisted_11 = { class: "mt-4" };
const _hoisted_12 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const rowClick = (row) => {
      console.log(row);
    };
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VFlexTable");
    useHead({
      title: "VFlexTable - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexTableBaseDocumentation = resolveComponent("VFlexTableBaseDocumentation");
      const _component_VFlexTable = _sfc_main$2;
      const _component_DocumentationDivider = __unplugin_components_7;
      const _component_VFlexTablePrintObjectsDocumentation = resolveComponent("VFlexTablePrintObjectsDocumentation");
      const _component_VFlexTablePropsDocumentation = resolveComponent("VFlexTablePropsDocumentation");
      const _component_VFlexTableEventsDocumentation = resolveComponent("VFlexTableEventsDocumentation");
      const _component_VFlexTableSlotsDocumentation = resolveComponent("VFlexTableSlotsDocumentation");
      const _component_DocumentationToc = __unplugin_components_1;
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
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VFlexTableBaseDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VFlexTable, { data: unref(flexRowsBasic) }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "no-header",
              title: "Without header"
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                "no-header": ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "separators",
              title: "With separators"
            }),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                separators: ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "rounded",
              title: "Rounded"
            }),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                rounded: ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "compact",
              title: "Compact"
            }),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                compact: ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "all-options",
              title: "All options together"
            }),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                "no-header": "",
                compact: "",
                rounded: "",
                separators: "",
                clickable: "",
                onRowClick: rowClick
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "subtable",
              title: "SubTable"
            }),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VFlexTable, {
                data: unref(flexRowsBasic),
                subtable: ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_VFlexTablePrintObjectsDocumentation, { class: "mt-6" }),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts),
                "print-objects": ""
              }, null, 8, ["data"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "without-print-object",
              title: "Without print-objects"
            }),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts)
              }, null, 8, ["data"])
            ]),
            createVNode(_component_VFlexTablePropsDocumentation, { class: "mt-6" }),
            createVNode(_component_VFlexTableEventsDocumentation, { class: "mt-6" }),
            createVNode(_component_VFlexTableSlotsDocumentation, { class: "mt-6" })
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
