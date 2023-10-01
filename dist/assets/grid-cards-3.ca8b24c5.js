import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, g as normalizeClass, h as unref, F as Fragment, X as renderList, y as createCommentVNode, t as toDisplayString, p as createBlock, _ as mergeProps, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
const projects = [];
var CardsGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "New Project", -1);
const _hoisted_5 = { class: "card-grid card-grid-v3" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "card-grid-item" };
const _hoisted_9 = {
  key: 0,
  class: "h-toggle"
};
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "toggler" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "active" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "inactive" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "description" };
const _hoisted_14 = { class: "people" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:eye"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "View")
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit")
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects;
      } else {
        return projects.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.remaining.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "All Projects",
      "Web Apps",
      "Mobile Apps",
      "Dashboards",
      "Landing Pages"
    ];
    function getAvatarData(user) {
      return {
        picture: user == null ? void 0 : user.picture,
        initials: user == null ? void 0 : user.initials,
        color: user == null ? void 0 : user.color
      };
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "Search..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "Select an option"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    item.lockable ? (openBlock(), createElementBlock("label", _hoisted_9, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: item.locked
                      }, null, 8, _hoisted_10),
                      _hoisted_11
                    ])) : createCommentVNode("", true),
                    createVNode(_component_VAvatar, {
                      size: "large",
                      picture: item.image,
                      badge: item.badge,
                      squared: ""
                    }, null, 8, ["picture", "badge"]),
                    createBaseVNode("h3", _hoisted_12, toDisplayString(item.name), 1),
                    createBaseVNode("p", null, toDisplayString(item.remaining) + " remaining", 1),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("p", null, toDisplayString(item.description), 1)
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.team, (user) => {
                        return openBlock(), createBlock(_component_VAvatar, mergeProps({
                          key: user.id,
                          size: "small"
                        }, getAvatarData(user)), null, 16);
                      }), 128))
                    ]),
                    _hoisted_15
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Grid Cards 3");
    useHead({
      title: "Grid Cards 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_CardsGridV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CardsGridV3)
      ]);
    };
  }
});
export { _sfc_main as default };
