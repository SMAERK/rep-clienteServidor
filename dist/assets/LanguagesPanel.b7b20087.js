import { d as defineComponent, m as useI18n, u as useStorage, Q as watch, o as openBlock, f as createElementBlock, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, t as toDisplayString, a3 as withDirectives, af as vModelRadio, ag as isRef, g as normalizeClass } from "./vendor.6548d360.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
var _imports_0 = "/images/icons/flags/mexico.svg";
var _imports_1 = "/assets/languages.7b1df35e.svg";
var _imports_2 = "/assets/languages-dark.e1954b48.svg";
var LanguagesPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "right-panel" };
const _hoisted_2 = { class: "right-panel-head" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "right-panel-body has-slimscroll" };
const _hoisted_6 = { class: "languages-boxes" };
const _hoisted_7 = { class: "language-box" };
const _hoisted_8 = { class: "language-option" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "img-wrap has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image",
    src: _imports_1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image",
    src: _imports_2,
    alt: ""
  })
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "languages-panel",
        class: normalizeClass([[unref(panels).active === "languages" && "is-active"], "right-panel-wrapper is-languages"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).close())
        }, null, 32),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h3", null, toDisplayString(unref(t)("select-language")), 1),
            createBaseVNode("a", {
              class: "close-panel",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).close())
            }, _hoisted_4, 32)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es-MX"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_9
                ])
              ])
            ]),
            _hoisted_10
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
