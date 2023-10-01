var __defProp = Object.defineProperty;
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
import { _ as _sfc_main$1 } from "./VFlex.c8e24668.js";
import { d as defineComponent, m as useI18n, a0 as useRoute, e as computed, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, r as renderSlot, s as createVNode, g as normalizeClass, h as unref, a2 as withKeys, W as withModifiers, f as createElementBlock, y as createCommentVNode, X as renderList, x as createTextVNode, t as toDisplayString, F as Fragment } from "./vendor.6548d360.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Gehe zu Seite ", _interpolate(_named("page"))]);
        }
      },
      "en": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Goto page ", _interpolate(_named("page"))]);
        }
      },
      "es-MX": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "es": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "fr-FR": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Aller \xE0 la page ", _interpolate(_named("page"))]);
        }
      },
      "zh-CN": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u8F6C\u5230\u7B2C", _interpolate(_named("page")), "\u9875"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "pagination-list" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" 1 ");
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { key: 1 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = { key: 2 };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    itemPerPage: null,
    totalItems: null,
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 4 },
    noRouter: { type: Boolean },
    routerQueryKey: { default: "page" }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const route = useRoute();
    const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1);
    const totalPageDisplayed = computed(() => lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value);
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    const showLastLink = computed(() => lastPage.value > 1);
    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }
      const _page = Math.max(1, Math.min(page, lastPage.value));
      const query = __spreadValues({}, route.query);
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = _page <= 1 ? void 0 : _page;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    const handleLinkClick = (e, page = 1) => {
      const _page = Math.max(1, Math.min(page, lastPage.value));
      emits("update:currentPage", _page);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VFlex = _sfc_main$1;
      return openBlock(), createBlock(_component_VFlex, {
        role: "navigation",
        class: "flex-pagination pagination is-rounded",
        "aria-label": "pagination",
        "justify-content": "space-between"
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_1, [
            renderSlot(_ctx.$slots, "before-pagination"),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(1),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === 1 && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: 1 }),
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = (e) => handleLinkClick(e, 1))
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ]),
            unref(showLastLink) && (unref(pages).length === 0 || unref(pages)[0] > 2) ? (openBlock(), createElementBlock("li", _hoisted_3, _hoisted_5)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pages), (page) => {
              return openBlock(), createElementBlock("li", { key: page }, [
                createVNode(_component_RouterLink, {
                  to: paginatedLink(page),
                  tabindex: "0",
                  class: normalizeClass(["pagination-link", [__props.currentPage === page && "is-current"]]),
                  "aria-label": unref(t)("goto-page-title", { page }),
                  "aria-current": __props.currentPage === page ? "page" : void 0,
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                  onClick: (e) => handleLinkClick(e, page)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(page), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "aria-label", "aria-current", "class", "onClick"])
              ]);
            }), 128)),
            unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1 ? (openBlock(), createElementBlock("li", _hoisted_6, _hoisted_8)) : createCommentVNode("", true),
            unref(showLastLink) ? (openBlock(), createElementBlock("li", _hoisted_9, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(unref(lastPage)),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === unref(lastPage) && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: unref(lastPage) }),
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = (e) => handleLinkClick(e, unref(lastPage)))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(lastPage)), 1)
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "after-pagination")
          ]),
          renderSlot(_ctx.$slots, "before-navigation"),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage - 1),
            tabindex: "0",
            class: "pagination-previous has-chevron",
            onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[6] || (_cache[6] = (e) => handleLinkClick(e, __props.currentPage - 1))
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }, 8, ["to"]),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage + 1),
            tabindex: "0",
            class: "pagination-next has-chevron",
            onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[8] || (_cache[8] = (e) => handleLinkClick(e, __props.currentPage + 1))
          }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }, 8, ["to"]),
          renderSlot(_ctx.$slots, "after-navigation")
        ]),
        _: 3
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as _ };
