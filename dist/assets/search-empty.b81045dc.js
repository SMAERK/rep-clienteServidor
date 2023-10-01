import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, g as normalizeClass, a2 as withKeys, W as withModifiers, ae as createStaticVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
var _imports_0 = "/assets/search-7.063cbb6c.svg";
var _imports_1 = "/assets/search-7-dark.21d246ce.svg";
var EmptySearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "search-results-wrapper" };
const _hoisted_2$1 = { class: "search-results-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  placeholder: "Search again..."
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "search-info" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "0 results found")
], -1);
const _hoisted_5 = { class: "tabs-inner" };
const _hoisted_6 = { class: "tabs is-disabled" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "All", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "People", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "Records", -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<div class="search-results-body"><div class="page-placeholder"><div class="placeholder-content"><img class="light-image" src="' + _imports_0 + '" alt=""><img class="dark-image" src="' + _imports_1 + '" alt=""><h3>We couldn&#39;t find any matching results.</h3><p class="is-larger"> Too bad. Looks like we couldn&#39;t find any matching results for the search terms you&#39;ve entered. Please try different search terms or criteria. </p></div></div></div>', 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => activeTab.value = "all", ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "all")
                  }, _hoisted_8, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "people" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => activeTab.value = "people", ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "people")
                  }, _hoisted_10, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "records" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeTab.value = "records", ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "records")
                  }, _hoisted_12, 32)
                ], 2),
                _hoisted_13
              ])
            ])
          ])
        ]),
        _hoisted_14
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-triple-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Search Empty");
    useHead({
      title: "Search Empty - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_EmptySearch = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_EmptySearch)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
