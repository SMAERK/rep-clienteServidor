import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$4 } from "./VAvatarStack.d8a5f95e.js";
import { f as __unplugin_components_7$1 } from "./index.e178843f.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as __unplugin_components_7 } from "./DocumentationDivider.7f67faa1.js";
import { _ as _sfc_main$2 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, F as Fragment, t as toDisplayString, p as createBlock, y as createCommentVNode } from "./vendor.6548d360.js";
import { f as flexRowsContacts, a as flexRowsAdvanced } from "./table.31d75fbb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "mt-4" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { class: "mt-4" };
const _hoisted_6 = { class: "mt-4" };
const _hoisted_7 = { class: "mt-4" };
const _hoisted_8 = { class: "mt-4" };
const _hoisted_9 = { class: "item-name" };
const _hoisted_10 = { class: "item-meta" };
const _hoisted_11 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Customize columns");
    useHead({
      title: "Customize columns - VFlexTable - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexTableColumnsDocumentation = resolveComponent("VFlexTableColumnsDocumentation");
      const _component_VFlexTable = _sfc_main$2;
      const _component_DocumentationDivider = __unplugin_components_7;
      const _component_VFlexTableScrollableDocumentation = resolveComponent("VFlexTableScrollableDocumentation");
      const _component_VFlexTableMediaDocumentation = resolveComponent("VFlexTableMediaDocumentation");
      const _component_VAvatar = _sfc_main$3;
      const _component_VPlaceload = __unplugin_components_7$1;
      const _component_VAvatarStack = _sfc_main$4;
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
            },
            {
              label: "Customize columns",
              to: { name: "components-flextable-columns" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VFlexTableColumnsDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts),
                columns: {
                  id: {
                    label: "Identifier (inverted)",
                    inverted: true,
                    format: (value) => `ID-0000${value}`
                  },
                  company: {
                    label: "Company (bold)",
                    bold: true
                  },
                  type: "Type",
                  status: {
                    label: "Status (center)",
                    align: "center"
                  },
                  contacts: {
                    label: "Contacts (end)",
                    align: "end",
                    format: (value) => value.map((r) => r.initials).join(", ")
                  }
                }
              }, null, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "grow",
              title: "Grow"
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts),
                columns: {
                  id: {
                    label: "Identifier",
                    inverted: true,
                    format: (value) => `ID-0000${value}`
                  },
                  company: {
                    label: "Company",
                    bold: true
                  },
                  type: "Type",
                  status: {
                    label: "Status",
                    align: "center"
                  },
                  contacts: {
                    label: "Contacts (grow)",
                    align: "end",
                    grow: true,
                    format: (value) => value.map((r) => r.initials).join(", ")
                  }
                }
              }, null, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "grow-lg",
              title: "Grow (large)"
            }),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts),
                columns: {
                  id: {
                    label: "Identifier",
                    inverted: true,
                    format: (value) => `ID-0000${value}`
                  },
                  company: {
                    label: "Company",
                    bold: true
                  },
                  type: "Type",
                  status: {
                    label: "Status",
                    align: "center"
                  },
                  contacts: {
                    label: "Contacts (grow: lg)",
                    align: "end",
                    grow: "lg",
                    format: (value) => value.map((r) => r.initials).join(", ")
                  }
                }
              }, null, 8, ["data", "columns"])
            ]),
            createVNode(_component_DocumentationDivider, {
              id: "grow-xl",
              title: "Grow (xl)"
            }),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsContacts),
                columns: {
                  id: {
                    label: "Identifier",
                    inverted: true,
                    format: (value) => `ID-0000${value}`
                  },
                  company: {
                    label: "Company",
                    bold: true
                  },
                  type: "Type",
                  status: {
                    label: "Status",
                    align: "center"
                  },
                  contacts: {
                    label: "Contacts (grow: xl)",
                    align: "end",
                    grow: "xl",
                    format: (value) => value.map((r) => r.initials).join(", ")
                  }
                }
              }, null, 8, ["data", "columns"])
            ]),
            createVNode(_component_VFlexTableScrollableDocumentation, { class: "mt-6" }),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                "print-objects": "",
                data: unref(flexRowsContacts),
                columns: {
                  id: {
                    label: "Identifier",
                    inverted: true,
                    format: (value) => `ID-0000${value}`
                  },
                  company: {
                    label: "Company",
                    bold: true,
                    grow: true
                  },
                  contacts: {
                    label: "Contacts (scrollX & scrollY)",
                    grow: true,
                    scrollX: true,
                    scrollY: true,
                    cellClass: "max-h-280"
                  }
                }
              }, null, 8, ["data", "columns"])
            ]),
            createVNode(_component_VFlexTableMediaDocumentation, { class: "mt-6" }),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VFlexTable, {
                rounded: "",
                data: unref(flexRowsAdvanced),
                columns: {
                  username: {
                    label: "User (media)",
                    grow: true,
                    media: true
                  },
                  position: "Position",
                  status: {
                    label: "Status"
                  },
                  contacts: {
                    label: "Contacts",
                    align: "end",
                    format: (value) => value.map((r) => r.initials).join(", ")
                  }
                }
              }, {
                "body-cell": withCtx(({ row, column, value }) => [
                  column.key === "username" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createVNode(_component_VAvatar, {
                      size: "medium",
                      picture: row.picture,
                      badge: row.badge
                    }, null, 8, ["picture", "badge"]),
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_9, toDisplayString(row.name), 1),
                      createBaseVNode("span", _hoisted_10, [
                        createBaseVNode("strong", null, toDisplayString(value), 1)
                      ])
                    ])
                  ], 64)) : column.key === "status" ? (openBlock(), createBlock(_component_VPlaceload, {
                    key: 1,
                    "mobile-width": "30%"
                  })) : column.key === "contacts" ? (openBlock(), createBlock(_component_VAvatarStack, {
                    key: 2,
                    class: "is-pushed-mobile",
                    size: "small",
                    avatars: row.contacts,
                    title: value,
                    limit: 3
                  }, null, 8, ["avatars", "title"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"])
            ])
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_11, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
