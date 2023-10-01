import { _ as _sfc_main$5 } from "./VFlexTable.b8a1fcae.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$4 } from "./VField.b8c33879.js";
import { _ as _sfc_main$3 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$2 } from "./VAvatar.08652fea.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, h as unref, p as createBlock, a3 as withDirectives, a4 as vModelText, y as createCommentVNode, t as toDisplayString, ae as createStaticVNode, a1 as useHead } from "./vendor.6548d360.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
import "./via-placeholder.9af8280d.js";
var Invoice_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "invoice-wrapper" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="invoice-header"><div class="left"><h3>Invoice FC-456-14</h3></div><div class="right"><div class="controls"><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:printer"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:download-cloud"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-left"></i></a></div></div></div>', 1);
const _hoisted_3 = { class: "invoice-body" };
const _hoisted_4 = { class: "invoice-card" };
const _hoisted_5 = { class: "invoice-section is-flex is-bordered" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Tara Svenson"),
  /* @__PURE__ */ createBaseVNode("span", null, "tarasvenson@vuero.io"),
  /* @__PURE__ */ createBaseVNode("span", null, "+1 546-5491")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Invoice FC-456-14"),
  /* @__PURE__ */ createBaseVNode("span", null, "Issued: May 27, 2020"),
  /* @__PURE__ */ createBaseVNode("span", null, "Payment Due: June 27, 2015")
], -1);
const _hoisted_8 = { class: "invoice-section is-flex is-bordered" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Airbnb"),
  /* @__PURE__ */ createBaseVNode("span", null, "888 Brannan St, San Francisco,"),
  /* @__PURE__ */ createBaseVNode("span", null, "CA 94103, USA")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "end is-left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Description"),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod equidem non reprehendo. ")
], -1);
const _hoisted_11 = { class: "invoice-section" };
const _hoisted_12 = ["onUpdate:modelValue"];
const _hoisted_13 = {
  key: 0,
  class: "table-label"
};
const _hoisted_14 = {
  key: 1,
  class: "table-total is-bigger"
};
const _hoisted_15 = {
  key: 2,
  class: "table-value"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const data = ref([
      {
        name: "Website Redesign",
        unit: "hrs",
        quantity: 54,
        rate: 24
      },
      {
        name: "Logo Design",
        unit: "hrs",
        quantity: 12,
        rate: 24
      },
      {
        name: "Custom Illustrations",
        unit: "hrs",
        quantity: 7,
        rate: 32
      }
    ]);
    const vatRate = 0.1;
    const totalData = computed(() => {
      const subtotal = data.value.reduce((acc, item) => {
        return acc + item.quantity * item.rate;
      }, 0);
      const vatValue = subtotal * vatRate;
      const total = subtotal + vatValue;
      return [
        {
          label: "Subtotal",
          value: subtotal
        },
        {
          label: "Taxes",
          value: vatValue
        },
        {
          label: "Total",
          value: total
        }
      ];
    });
    const usdFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    const columns = {
      name: {
        label: "Description",
        grow: true,
        inverted: true
      },
      unit: {
        label: "Unit",
        align: "end"
      },
      quantity: "Quantity",
      rate: {
        label: "Rate",
        inverted: true,
        format: (value) => usdFormatter.format(value)
      },
      subtotal: {
        label: "Subtotal",
        inverted: true,
        format: (value, row) => usdFormatter.format(row.quantity * row.rate)
      }
    };
    const totalColumns = {
      label: {
        label: "",
        grow: "xl",
        align: "end"
      },
      value: {
        label: "",
        bold: true,
        format: (value) => usdFormatter.format(value)
      }
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _component_UserPopoverContent = _sfc_main$3;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VField = _sfc_main$4;
      const _component_VControl = __unplugin_components_1;
      const _component_VFlexTable = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_Tippy, {
                class: "has-help-cursor",
                interactive: "",
                placement: "bottom-start"
              }, {
                content: withCtx(() => [
                  createVNode(_component_UserPopoverContent, {
                    user: unref(popovers).user13
                  }, null, 8, ["user"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    size: "large",
                    picture: "https://vuero.cssninja.io/demo/avatars/13.jpg"
                  })
                ]),
                _: 1
              }),
              _hoisted_6,
              _hoisted_7
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VAvatar, {
                size: "large",
                class: "is-customer",
                picture: "https://vuero.cssninja.io/demo/photos/brands/airbnb.svg"
              }),
              _hoisted_9,
              _hoisted_10
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_VFlexTable, {
                data: data.value,
                columns: unref(columns),
                rounded: "",
                reactive: ""
              }, {
                "body-cell": withCtx(({ column, row }) => [
                  column.key === "quantity" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": ($event) => row[column.key] = $event,
                            class: "input",
                            type: "number",
                            min: "0"
                          }, null, 8, _hoisted_12), [
                            [vModelText, row[column.key]]
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data", "columns"]),
              createVNode(_component_VFlexTable, {
                subtable: "",
                data: unref(totalData),
                columns: unref(totalColumns)
              }, {
                "body-cell": withCtx(({ column, value, row }) => [
                  column.key === "label" ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(value), 1)) : column.key === "value" && row.label === "Total" ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(value), 1)) : (openBlock(), createElementBlock("span", _hoisted_15, toDisplayString(value), 1))
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
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Utility Invoice");
    useHead({
      title: "Utility Invoice - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_Invoice = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Invoice)
      ]);
    };
  }
});
export { _sfc_main as default };
