import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { e as _sfc_main$3 } from "./index.e178843f.js";
import { r as radar, _ as _sfc_main$2 } from "./VBillboardJS.a97b3f73.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, k as ref, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, y as createCommentVNode } from "./vendor.6548d360.js";
import { s as splineSimple } from "./splineSimple.5eb03d2d.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "columns is-mutliline" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const themeColors = useThemeColors();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VBillboardJS");
    useHead({
      title: "VBillboardJS - Plugins - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VBillboardJsDocumentation = resolveComponent("VBillboardJsDocumentation");
      const _component_VBillboardJS = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_VBillboardJsPropsDocumentation = resolveComponent("VBillboardJsPropsDocumentation");
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
              label: "Plugins"
            },
            {
              label: "VBillboardJS",
              to: { name: "components-plugins-billboard-js" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_VBillboardJsDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_VBillboardJS, {
                      options: {
                        data: {
                          x: "x",
                          columns: [
                            ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
                            ["data1", 330, 350, 200, 380, 150],
                            ["data2", 130, 100, 30, 200, 80],
                            ["data3", 230, 153, 85, 300, 250]
                          ],
                          colors: {
                            data1: unref(themeColors).accent,
                            data2: unref(themeColors).primary,
                            data3: unref(themeColors).info,
                            data4: unref(themeColors).purple
                          },
                          type: unref(radar)(),
                          labels: true
                        },
                        radar: {
                          axis: {
                            max: 400
                          },
                          level: {
                            depth: 4
                          },
                          direction: {
                            clockwise: true
                          }
                        },
                        size: {
                          height: 280
                        },
                        padding: {
                          bottom: 20
                        },
                        title: {
                          text: "Radar Chart",
                          position: "left",
                          padding: {
                            bottom: 20,
                            right: 20,
                            top: 0,
                            left: 20
                          }
                        },
                        legend: {
                          position: "inset"
                        }
                      }
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VCard, { type: "smooth" }, {
                  default: withCtx(() => [
                    createVNode(_component_VBillboardJS, {
                      options: unref(splineSimple).options
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_VBillboardJsPropsDocumentation)
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
