import { e as _sfc_main$1 } from "./index.e178843f.js";
import { e as computed, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, t as toDisplayString, h as unref, r as renderSlot, x as createTextVNode } from "./vendor.6548d360.js";
const _hoisted_1 = { class: "columns is-multiline is-vcentered p-5 is-mobile" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-12 has-text-left has-text-weight-bold p-0" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "lnir lnir-clipboard is-size-5",
    "aria-hidden": "true"
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "pl-3 is-size-5" }, "Resumos")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-12 has-text-left has-text-weight-bold p-0 m-0 mt-5" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-size-5" }, "Participantes")
], -1);
const _hoisted_4 = { class: "column is-12 pl-0 pr-0" };
const _hoisted_5 = { class: "has-text-weight-bold is-2" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Nome: ");
const _hoisted_7 = { class: "has-text-weight-normal" };
const _hoisted_8 = { class: "has-text-weight-bold is-2" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Nome Empresarial : ");
const _hoisted_10 = { class: "has-text-weight-normal" };
const _hoisted_11 = { class: "has-text-weight-bold is-2" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Certificado: ");
const _hoisted_13 = { class: "has-text-weight-normal" };
const _hoisted_14 = { class: "has-text-weight-bold is-2" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Cuantidade de Participantes: ");
const _hoisted_16 = { class: "has-text-weight-normal" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-12 has-text-left has-text-weight-bold p-0 m-0" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-size-5" }, "Producto")
], -1);
const _hoisted_19 = { class: "column is-12 pl-0 pr-0" };
const _hoisted_20 = { class: "has-text-weight-bold is-2" };
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" Nome: ");
const _hoisted_22 = { class: "has-text-weight-normal" };
const _hoisted_23 = { class: "has-text-weight-bold is-2" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" Produto AIG : ");
const _hoisted_25 = { class: "has-text-weight-normal" };
const _hoisted_26 = { class: "has-text-weight-bold is-2" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Idade: ");
const _hoisted_28 = { class: "has-text-weight-normal" };
const _hoisted_29 = { class: "has-text-weight-bold is-2" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Beneficiarios Permitidos: ");
const _hoisted_31 = { class: "has-text-weight-normal" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-12 has-text-left has-text-weight-bold p-0 m-0" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-size-5" }, "Campa\xF1a")
], -1);
const _hoisted_34 = { class: "column is-12 pl-0 pr-0" };
const _hoisted_35 = { class: "has-text-weight-bold is-2" };
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" Nome: ");
const _hoisted_37 = { class: "has-text-weight-normal" };
const _hoisted_38 = { class: "has-text-weight-bold is-2" };
const _hoisted_39 = /* @__PURE__ */ createTextVNode(" Ano : ");
const _hoisted_40 = { class: "has-text-weight-normal" };
const _hoisted_41 = { class: "has-text-weight-bold is-2" };
const _hoisted_42 = /* @__PURE__ */ createTextVNode(" Vigencia: ");
const _hoisted_43 = { class: "has-text-weight-normal" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-12 has-text-left has-text-weight-bold p-0 m-0" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-size-5" }, "Plan")
], -1);
const _hoisted_46 = { class: "column is-12 pl-0 pr-0" };
const _hoisted_47 = { class: "has-text-weight-bold is-2" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" Cuantidade do plano: ");
const _hoisted_49 = { class: "has-text-weight-normal" };
const _sfc_main = {
  props: {
    data: { type: Object, required: false, default: () => {
    } },
    participants: { type: Number, required: false, default: () => {
    } },
    plans: { type: Number, required: false, default: () => {
    } }
  },
  setup(__props) {
    const props = __props;
    const data = computed(() => props.data);
    const participants = computed(() => props.participants);
    const plans = computed(() => props.plans);
    return (_ctx, _cache) => {
      const _component_VCard = _sfc_main$1;
      return openBlock(), createBlock(_component_VCard, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("h1", _hoisted_5, [
                _hoisted_6,
                createBaseVNode("span", _hoisted_7, toDisplayString(unref(data).sponsor.name || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_8, [
                _hoisted_9,
                createBaseVNode("span", _hoisted_10, toDisplayString(unref(data).sponsor.legal_sponsor_name || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_11, [
                _hoisted_12,
                createBaseVNode("span", _hoisted_13, toDisplayString(unref(data).sponsor.sponsor_policy || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_14, [
                _hoisted_15,
                createBaseVNode("span", _hoisted_16, toDisplayString(unref(participants) || 0), 1)
              ]),
              _hoisted_17
            ]),
            _hoisted_18,
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("h1", _hoisted_20, [
                _hoisted_21,
                createBaseVNode("span", _hoisted_22, toDisplayString(unref(data).product.name || "") + " (" + toDisplayString(unref(data).product.code) + ")", 1)
              ]),
              createBaseVNode("h1", _hoisted_23, [
                _hoisted_24,
                createBaseVNode("span", _hoisted_25, toDisplayString(unref(data).product.coverType || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_26, [
                _hoisted_27,
                createBaseVNode("span", _hoisted_28, toDisplayString(unref(data).product.minAgeSale || 0) + " - " + toDisplayString(unref(data).product.maxAgeSale || 0), 1)
              ]),
              createBaseVNode("h1", _hoisted_29, [
                _hoisted_30,
                createBaseVNode("span", _hoisted_31, toDisplayString(unref(data).product.allowedBeneficiaries || 0), 1)
              ]),
              _hoisted_32
            ]),
            _hoisted_33,
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("h1", _hoisted_35, [
                _hoisted_36,
                createBaseVNode("span", _hoisted_37, toDisplayString(unref(data).campaign.name || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_38, [
                _hoisted_39,
                createBaseVNode("span", _hoisted_40, toDisplayString(unref(data).campaign.year || ""), 1)
              ]),
              createBaseVNode("h1", _hoisted_41, [
                _hoisted_42,
                createBaseVNode("span", _hoisted_43, toDisplayString(unref(data).product.effectiveStart || "") + " - " + toDisplayString(unref(data).product.endOfTerm || ""), 1)
              ]),
              _hoisted_44
            ]),
            _hoisted_45,
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("h1", _hoisted_47, [
                _hoisted_48,
                createBaseVNode("span", _hoisted_49, toDisplayString(unref(plans) || 0), 1)
              ])
            ]),
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        _: 3
      });
    };
  }
};
export { _sfc_main as default };
