import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, F as Fragment, X as renderList, ay as normalizeStyle, r as renderSlot, a2 as withKeys, W as withModifiers, x as createTextVNode, t as toDisplayString, a1 as useHead, z as resolveComponent, s as createVNode } from "./vendor.6548d360.js";
import { _ as _sfc_main$2 } from "./VBreadcrumb.b45a5a1c.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var VAccordionImage_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "image-accordion" };
const _hoisted_2$1 = ["onKeydown", "onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { default: () => [] }
  },
  emits: ["select"],
  setup(__props, { emit }) {
    const props = __props;
    const toggle = (key) => {
      emit("select", key);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: "has-background-image",
              tabindex: "0",
              style: normalizeStyle({ backgroundImage: `url(${item.image})` })
            }, [
              renderSlot(_ctx.$slots, "accordion-item", {
                item,
                index: key,
                toggle
              }, () => [
                createBaseVNode("div", null, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: withKeys(withModifiers(($event) => toggle(key), ["prevent"]), ["space"]),
                    onClick: ($event) => toggle(key)
                  }, [
                    createBaseVNode("h2", null, [
                      renderSlot(_ctx.$slots, "accordion-item-summary", {
                        item,
                        index: key,
                        toggle
                      }, () => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ])
                    ]),
                    createBaseVNode("p", null, [
                      renderSlot(_ctx.$slots, "accordion-item-content", {
                        item,
                        index: key,
                        toggle
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ])
                  ], 40, _hoisted_2$1)
                ])
              ])
            ], 4);
          }), 128))
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "column is-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const data = [
      {
        image: "https://source.unsplash.com/FV3GConVSss/1600x900",
        title: "Office Part I",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        image: "https://source.unsplash.com/rRiAzFkJPMo/1600x900",
        title: "Office Part II",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        image: "https://source.unsplash.com/tvleqH3p1os/1600x900",
        title: "12 Great Landscapes",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        image: "https://source.unsplash.com/-Xv7k95vOFA/1600x900",
        title: "Team Meetup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        image: "https://source.unsplash.com/F6NvgzU3RfM/1600x900",
        title: "Purple Shades",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        image: "https://source.unsplash.com/5E5N49RWtbA/1600x900",
        title: "Blue Note",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ];
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VAccordionImage");
    useHead({
      title: "VAccordionImage - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$2;
      const _component_AccordionImageDocumentation = resolveComponent("AccordionImageDocumentation");
      const _component_VAccordionImage = _sfc_main$1;
      const _component_AccordionImagePropsDocumentation = resolveComponent("AccordionImagePropsDocumentation");
      const _component_AccordionImageSlotsDocumentation = resolveComponent("AccordionImageSlotsDocumentation");
      const _component_AccordionImageEventsDocumentation = resolveComponent("AccordionImageEventsDocumentation");
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
              label: "VAccordionImage",
              to: { name: "components-accordion-image" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_AccordionImageDocumentation)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VAccordionImage, { items: data })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_AccordionImagePropsDocumentation),
            createVNode(_component_AccordionImageSlotsDocumentation),
            createVNode(_component_AccordionImageEventsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
