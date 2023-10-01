import { u as useMarkdownToc, _ as __unplugin_components_1$1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$6, b as _sfc_main$8 } from "./VFlexTable.b8a1fcae.js";
import { _ as _sfc_main$7 } from "./VFlexPagination.ec5e6993.js";
import { d as defineComponent, i as useCssVars, h as unref, o as openBlock, f as createElementBlock, r as renderSlot, q as createBaseVNode, k as ref, a1 as useHead, z as resolveComponent, s as createVNode, g as normalizeClass, w as withCtx, a3 as withDirectives, a4 as vModelText, aB as vModelSelect, F as Fragment, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
import { _ as _export_sfc, C as CssUnitRe } from "./index.e178843f.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$3 } from "./VBreadcrumb.b45a5a1c.js";
import { u as users } from "./index.5f5b7c31.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./VFlex.c8e24668.js";
import "./via-placeholder.9af8280d.js";
var VTextEllipsis_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "text-ellipsis" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: "150px" },
    mobileWidth: { default: void 0 }
  },
  setup(__props) {
    var _a;
    const props = __props;
    useCssVars((_ctx) => ({
      "7c3941b6": props.width,
      "3b352760": unref(mobileWidthValue)
    }));
    const mobileWidthValue = (_a = props.mobileWidth) != null ? _a : props.width;
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VTextEllipsis: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (mobileWidthValue.match(CssUnitRe) === null) {
      console.warn(`VTextEllipsis: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7d7f983e"]]);
var VFlexTableToolbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "flex-table-toolbar" };
const _hoisted_2$1 = { class: "left" };
const _hoisted_3$1 = { class: "right" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      renderSlot(_ctx.$slots, "left")
    ]),
    createBaseVNode("div", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "right")
    ])
  ]);
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = ["onUpdate:modelValue"];
const _hoisted_4 = { class: "select is-rounded" };
const _hoisted_5 = ["onUpdate:modelValue"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("option", { value: 1 }, "1 results per page", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("option", { value: 10 }, "10 results per page", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("option", { value: 15 }, "15 results per page", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("option", { value: 25 }, "25 results per page", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("option", { value: 50 }, "50 results per page", -1);
const _hoisted_11 = [
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = ["title"];
const _hoisted_13 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VFlexTableWrapper");
    useHead({
      title: "VFlexTableWrapper - VFlexTable - Vuero"
    });
    const data = [];
    for (let i = 0; i < 1e3; i++) {
      data.push(...users);
    }
    const locationSorter = ({ order, a, b }) => {
      if (order === "asc") {
        return a.location.localeCompare(b.location);
      } else if (order === "desc") {
        return b.location.localeCompare(a.location);
      }
      return 0;
    };
    const userFilter = ({ searchTerm, row }) => {
      if (!searchTerm) {
        return true;
      }
      return row.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || row.bio.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    };
    const columns = {
      name: {
        label: "Username",
        media: true,
        grow: true,
        searchable: true,
        sortable: true,
        filter: userFilter
      },
      location: {
        label: "Location",
        sortable: true,
        searchable: true,
        sort: locationSorter
      },
      role: "Role"
    };
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_VFlexTableWrapperDocumentation = resolveComponent("VFlexTableWrapperDocumentation");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$4;
      const _component_VFlexTableToolbar = __unplugin_components_3;
      const _component_VAvatar = _sfc_main$5;
      const _component_VTextEllipsis = __unplugin_components_5;
      const _component_VFlexTable = _sfc_main$6;
      const _component_VFlexPagination = _sfc_main$7;
      const _component_VFlexTableWrapper = _sfc_main$8;
      const _component_VFlexTableWrapperPropsDocumentation = resolveComponent("VFlexTableWrapperPropsDocumentation");
      const _component_VFlexTableWrapperEventsDocumentation = resolveComponent("VFlexTableWrapperEventsDocumentation");
      const _component_VFlexTableWrapperSlotsDocumentation = resolveComponent("VFlexTableWrapperSlotsDocumentation");
      const _component_DocumentationToc = __unplugin_components_1$1;
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
              label: "VFlexTableWrapper",
              to: { name: "components-flextable-wrapper" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VFlexTableWrapperDocumentation),
            createVNode(_component_VFlexTableWrapper, {
              columns: unref(columns),
              data,
              class: "mt-4"
            }, {
              default: withCtx((wrapperState) => [
                createVNode(_component_VFlexTableToolbar, null, {
                  left: withCtx(() => [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:search" }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": ($event) => wrapperState.searchInput = $event,
                              type: "text",
                              class: "input is-rounded",
                              placeholder: "Filter..."
                            }, null, 8, _hoisted_3), [
                              [vModelText, wrapperState.searchInput]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  right: withCtx(() => [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4, [
                              withDirectives(createBaseVNode("select", {
                                "onUpdate:modelValue": ($event) => wrapperState.limit = $event
                              }, _hoisted_11, 8, _hoisted_5), [
                                [vModelSelect, wrapperState.limit]
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_VFlexTable, { rounded: "" }, {
                  "body-cell": withCtx(({ row, column }) => [
                    column.key === "name" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_VAvatar, {
                        size: "medium",
                        picture: row.medias.avatar,
                        badge: row.medias.badge,
                        initials: row.initials
                      }, null, 8, ["picture", "badge", "initials"]),
                      createBaseVNode("div", null, [
                        createBaseVNode("span", {
                          class: "dark-text",
                          title: row.name
                        }, toDisplayString(row.shortname), 9, _hoisted_12),
                        createVNode(_component_VTextEllipsis, {
                          width: "240px",
                          class: "light-text",
                          title: row.bio
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("small", null, toDisplayString(row.bio), 1)
                          ]),
                          _: 2
                        }, 1032, ["title"])
                      ])
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_VFlexPagination, {
                  "current-page": wrapperState.page,
                  "onUpdate:current-page": ($event) => wrapperState.page = $event,
                  class: "mt-6",
                  "item-per-page": wrapperState.limit,
                  "total-items": wrapperState.total,
                  "max-links-displayed": 5,
                  "no-router": ""
                }, null, 8, ["current-page", "onUpdate:current-page", "item-per-page", "total-items"])
              ]),
              _: 1
            }, 8, ["columns"]),
            createVNode(_component_VFlexTableWrapperPropsDocumentation, { class: "mt-6" }),
            createVNode(_component_VFlexTableWrapperEventsDocumentation, { class: "mt-6" }),
            createVNode(_component_VFlexTableWrapperSlotsDocumentation, { class: "mt-6" })
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
