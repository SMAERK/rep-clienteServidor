import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, F as Fragment, X as renderList, g as normalizeClass, r as renderSlot, q as createBaseVNode, x as createTextVNode, t as toDisplayString, a2 as withKeys, W as withModifiers, Y as onMounted, a1 as useHead, z as resolveComponent, h as unref, s as createVNode } from "./vendor.6548d360.js";
import { _ as _sfc_main$3 } from "./VBreadcrumb.b45a5a1c.js";
import { _ as _sfc_main$2 } from "./Toolbar.cbd734d2.js";
import { u as useSidebar } from "./sidebar.098cc062.js";
import "./index.e178843f.js";
import "./panels.9ed80fb9.js";
var VAccordion_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["open"];
const _hoisted_2$1 = ["onKeydown", "onClick"];
const _hoisted_3$1 = { class: "accordion-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { default: () => [] },
    openItems: { default: () => [] },
    exclusive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const internalOpenItems = ref(props.openItems);
    const toggle = (key) => {
      const wasOpen = internalOpenItems.value.includes(key);
      if (props.exclusive) {
        internalOpenItems.value.splice(0, internalOpenItems.value.length);
        if (!wasOpen) {
          internalOpenItems.value.push(key);
        }
        return;
      }
      if (wasOpen) {
        internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
      } else {
        internalOpenItems.value.push(key);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["single-accordion", [__props.exclusive && "is-exclusive"]])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, key) => {
          var _a, _b, _c;
          return openBlock(), createElementBlock("details", {
            key,
            class: normalizeClass(["accordion-item", [((_a = internalOpenItems.value) == null ? void 0 : _a.includes(key)) && "is-active"]]),
            open: (_c = (_b = internalOpenItems.value) == null ? void 0 : _b.includes(key)) != null ? _c : void 0
          }, [
            renderSlot(_ctx.$slots, "accordion-item", {
              item,
              index: key,
              toggle
            }, () => [
              createBaseVNode("summary", {
                class: "accordion-header",
                tabindex: "0",
                onKeydown: withKeys(withModifiers(() => toggle(key), ["prevent"]), ["space"]),
                onClick: withModifiers(() => toggle(key), ["prevent"])
              }, [
                renderSlot(_ctx.$slots, "accordion-item-summary", {
                  item,
                  index: key,
                  toggle
                }, () => [
                  createTextVNode(toDisplayString(item.title), 1)
                ])
              ], 40, _hoisted_2$1),
              createBaseVNode("div", _hoisted_3$1, [
                renderSlot(_ctx.$slots, "accordion-item-content", {
                  item,
                  index: key,
                  toggle
                }, () => [
                  createTextVNode(toDisplayString(item.content), 1)
                ])
              ])
            ])
          ], 10, _hoisted_1$1);
        }), 128))
      ], 2);
    };
  }
});
const _hoisted_1 = { class: "page-title has-text-centered" };
const _hoisted_2 = { class: "menu-toggle has-chevron" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-top" }),
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-center" }),
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-bottom" })
], -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "title is-4" }, "VAccordion")
], -1);
const _hoisted_6 = { class: "page-content-inner" };
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "column is-12" };
const _hoisted_9 = { class: "column is-6 is-full-tablet" };
const _hoisted_10 = { class: "column is-6 is-full-tablet" };
const _hoisted_11 = { class: "column is-12 mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const sidebar = useSidebar();
    onMounted(() => {
      sidebar.setActive("components");
    });
    useHead({
      title: "V-Accordion - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_Toolbar = _sfc_main$2;
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_AccordionDefaultDocumentation = resolveComponent("AccordionDefaultDocumentation");
      const _component_VAccordion = _sfc_main$1;
      const _component_AccordionPropsDocumentation = resolveComponent("AccordionPropsDocumentation");
      const _component_AccordionSlotsDocumentation = resolveComponent("AccordionSlotsDocumentation");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "vuero-hamburger nav-trigger push-resize",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(sidebar).toggle("components"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => unref(sidebar).toggle("components"))
          }, [
            createBaseVNode("span", _hoisted_2, [
              createBaseVNode("span", {
                class: normalizeClass([[unref(sidebar).active !== "none" && "active"], "icon-box-toggle"])
              }, _hoisted_4, 2)
            ])
          ], 32),
          _hoisted_5,
          createVNode(_component_Toolbar)
        ]),
        createBaseVNode("div", _hoisted_6, [
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
                label: "Accordions"
              },
              {
                label: "V-Accordion",
                to: { name: "components-accordion" }
              }
            ]
          }),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_AccordionDefaultDocumentation)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VAccordion, { items: [
                {
                  title: "Accordion Item 1",
                  content: "Sed ut perspiciatis unde omnis iste ..."
                },
                {
                  title: "Accordion Item 2",
                  content: "Sed ut perspiciatis unde omnis iste ..."
                },
                {
                  title: "Accordion Item 3",
                  content: "Sed ut perspiciatis unde omnis iste ..."
                }
              ] }, null, 8, ["items"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VAccordion, {
                items: [
                  {
                    title: "Accordion Item 1",
                    content: "Sed ut perspiciatis unde omnis iste ..."
                  },
                  {
                    title: "Accordion Item 2",
                    content: "Sed ut perspiciatis unde omnis iste ..."
                  },
                  {
                    title: "Accordion Item 3",
                    content: "Sed ut perspiciatis unde omnis iste ..."
                  }
                ],
                exclusive: ""
              }, null, 8, ["items"])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_AccordionPropsDocumentation),
              createVNode(_component_AccordionSlotsDocumentation)
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
