import { _ as _sfc_main$2 } from "./VIcon.de064b10.js";
import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, X as renderList, g as normalizeClass, r as renderSlot, q as createBaseVNode, x as createTextVNode, t as toDisplayString, p as createBlock, y as createCommentVNode, a2 as withKeys, W as withModifiers, F as Fragment, a1 as useHead, z as resolveComponent, s as createVNode } from "./vendor.6548d360.js";
import { _ as _sfc_main$3 } from "./VBreadcrumb.b45a5a1c.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var VCollapse_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["open"];
const _hoisted_2$1 = ["onKeydown", "onClick"];
const _hoisted_3$1 = { class: "collapse-icon" };
const _hoisted_4$1 = { class: "collapse-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { default: () => [] },
    itemOpen: { default: void 0 },
    withChevron: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const internalItemOpen = ref(props.itemOpen);
    const toggle = (key) => {
      if (internalItemOpen.value === key) {
        internalItemOpen.value = void 0;
        return;
      }
      internalItemOpen.value = key;
    };
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$2;
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, key) => {
        return openBlock(), createElementBlock("details", {
          key,
          class: normalizeClass([[__props.withChevron && "has-chevron", !__props.withChevron && "has-plus"], "collapse"]),
          open: internalItemOpen.value === key || void 0
        }, [
          renderSlot(_ctx.$slots, "collapse-item", {
            item,
            index: key,
            toggle
          }, () => [
            createBaseVNode("summary", {
              class: "collapse-header",
              tabindex: "0",
              onKeydown: withKeys(withModifiers(() => toggle(key), ["prevent"]), ["space"]),
              onClick: withModifiers(() => toggle(key), ["prevent"])
            }, [
              createBaseVNode("h3", null, [
                renderSlot(_ctx.$slots, "collapse-item-summary", {
                  item,
                  index: key,
                  toggle
                }, () => [
                  createTextVNode(toDisplayString(item.title), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_3$1, [
                __props.withChevron ? (openBlock(), createBlock(_component_VIcon, {
                  key: 0,
                  icon: "feather:chevron-down"
                })) : !__props.withChevron ? (openBlock(), createBlock(_component_VIcon, {
                  key: 1,
                  icon: "feather:plus"
                })) : createCommentVNode("", true)
              ])
            ], 40, _hoisted_2$1),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("p", null, [
                renderSlot(_ctx.$slots, "collapse-item-content", {
                  item,
                  index: key,
                  toggle
                }, () => [
                  createTextVNode(toDisplayString(item.content), 1)
                ])
              ])
            ])
          ])
        ], 10, _hoisted_1$1);
      }), 128);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = { class: "column is-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const data = [
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
    ];
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCollapse");
    useHead({
      title: "VCollapse - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_AccordionCollapseDocumentation = resolveComponent("AccordionCollapseDocumentation");
      const _component_VCollapse = _sfc_main$1;
      const _component_AccordionCollapsePropsDocumentation = resolveComponent("AccordionCollapsePropsDocumentation");
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
              label: "Accordions"
            },
            {
              label: "VCollapse",
              to: { name: "components-collapse" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_AccordionCollapseDocumentation)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VCollapse, { items: data })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VCollapse, {
              items: data,
              "with-chevron": ""
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_AccordionCollapsePropsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
