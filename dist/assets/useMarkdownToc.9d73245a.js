var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { d as defineComponent, a0 as useRoute, $ as useRouter, e as computed, Y as onMounted, o as openBlock, f as createElementBlock, q as createBaseVNode, F as Fragment, X as renderList, g as normalizeClass, h as unref, W as withModifiers, a2 as withKeys, t as toDisplayString, a5 as pushScopeId, a6 as popScopeId, k as ref, B as watchEffect } from "./vendor.6548d360.js";
import { V as VueScrollTo } from "./vue-scrollto.6b4fda56.js";
import { _ as _export_sfc } from "./index.e178843f.js";
var DocumentationToc_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-588a4254"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "toc" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", { class: "toc-title" }, "Contents", -1));
const _hoisted_3 = ["href", "onClick", "onKeydown"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Back To Top", -1));
const _hoisted_5 = [
  _hoisted_4
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    toc: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const isActiveAnchor = computed(() => {
      return (id) => {
        if (`#${id}` === route.hash) {
          return true;
        }
        return false;
      };
    });
    const onTocClick = (id) => {
      VueScrollTo.scrollTo(id ? `#${id}` : "#app", 500, { offset: -30 });
      router.replace(__spreadProps(__spreadValues({}, route), {
        hash: `#${id}`
      }));
    };
    onMounted(() => {
      if (route.hash && !route.hash.startsWith("#&")) {
        VueScrollTo.scrollTo(route.hash, 0, { offset: -30 });
      } else {
        VueScrollTo.scrollTo("#app", 0, { offset: -30 });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.toc, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id,
              class: normalizeClass([`toc-level-${item.level}`])
            }, [
              createBaseVNode("a", {
                href: `#${item.id}`,
                class: normalizeClass([unref(isActiveAnchor)(item.id) && "is-active"]),
                onClick: withModifiers(() => onTocClick(item.id), ["prevent"]),
                onKeydown: withKeys(withModifiers(() => onTocClick(item.id), ["prevent"]), ["space"])
              }, toDisplayString(item.title), 43, _hoisted_3)
            ], 2);
          }), 128)),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              class: "back-to-top",
              href: "#",
              onClick: _cache[0] || (_cache[0] = withModifiers(() => onTocClick(), ["prevent"])),
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => onTocClick(), ["prevent"]), ["space"]))
            }, _hoisted_5, 32)
          ])
        ])
      ]);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-588a4254"]]);
const HEADER_SELECTORS = [
  "h1[id]",
  "h2[id]",
  "h3[id]",
  "h4[id]",
  "h5[id]",
  "h6[id]",
  "a[name]"
];
function useMarkdownToc(container) {
  const toc = ref([]);
  watchEffect(() => {
    if (container.value) {
      const anchors = container.value.querySelectorAll(HEADER_SELECTORS.join(", "));
      anchors.forEach((anchor) => {
        toc.value.push({
          id: anchor.id,
          level: parseInt(anchor.tagName.replace(/[a-z]+/i, "") || "1"),
          title: anchor.textContent || ""
        });
      });
    }
  });
  return toc;
}
export { __unplugin_components_1 as _, useMarkdownToc as u };
