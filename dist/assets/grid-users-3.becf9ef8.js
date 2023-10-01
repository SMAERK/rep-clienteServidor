import { _ as _sfc_main$5 } from "./CircleChart.fbc0c236.js";
import { _ as _sfc_main$4 } from "./VPeity.6c42beba.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { d as defineComponent, k as ref, Y as onMounted, Z as onUnmounted, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, t as toDisplayString, g as normalizeClass, a2 as withKeys, W as withModifiers, ae as createStaticVNode, e as computed, w as withCtx, a3 as withDirectives, a4 as vModelText, h as unref, F as Fragment, X as renderList, aK as TransitionGroup, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.bdc25b05.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _imports_0, a as _imports_1 } from "./search-5-dark.23499973.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
import "./index.e178843f.js";
const _hoisted_1$2 = { class: "grid-item" };
const _hoisted_2$2 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "icon-tabs-wrapper" };
const _hoisted_4$1 = { class: "icon-tabs" };
const _hoisted_5$1 = { class: "icon-tabs-inner" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_7$1 = [
  _hoisted_6$1
];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:briefcase"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check-circle"
}, null, -1);
const _hoisted_11$1 = [
  _hoisted_10$1
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "icon-tabs-naver" }, null, -1);
const _hoisted_13 = { class: "chart-block" };
const _hoisted_14 = { class: "stats" };
const _hoisted_15 = { class: "dark-inverted" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "Viewers", -1);
const _hoisted_17 = { class: "chart-block" };
const _hoisted_18 = { class: "circle-chart-wrapper is-info" };
const _hoisted_19 = { class: "stats" };
const _hoisted_20 = { class: "dark-inverted" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Projects", -1);
const _hoisted_22 = { class: "chart-block" };
const _hoisted_23 = { class: "circle-chart-wrapper is-warning" };
const _hoisted_24 = { class: "stats" };
const _hoisted_25 = { class: "dark-inverted" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "Tasks", -1);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="buttons"><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span><span>Hire</span></button><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></span><span>Talk</span></button></div>', 1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: "posts" },
    user: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const tab = ref(props.activeTab);
    const getRandom = () => Math.round(Math.random() * 10);
    const values = ref([]);
    let interval;
    for (let i = 0; i < 20; i++) {
      values.value.push(getRandom());
    }
    onMounted(() => {
      interval = setInterval(() => {
        values.value.shift();
        values.value.push(getRandom());
      }, 1e3);
    });
    onUnmounted(() => {
      clearInterval(interval);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$3;
      const _component_VPeity = _sfc_main$4;
      const _component_CircleChart = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_VAvatar, {
          picture: __props.user.avatar,
          badge: __props.user.badge,
          size: "big"
        }, null, 8, ["picture", "badge"]),
        createBaseVNode("h3", _hoisted_2$2, toDisplayString(__props.user.fullName), 1),
        createBaseVNode("p", null, toDisplayString(__props.user.position), 1),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("a", {
                "data-target-section": "subsection-1",
                class: normalizeClass(["tab-item", [tab.value === "posts" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => tab.value = "posts", ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => tab.value = "posts")
              }, _hoisted_7$1, 34),
              createBaseVNode("a", {
                "data-target-section": "subsection-2",
                class: normalizeClass(["tab-item", [tab.value === "projects" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => tab.value = "projects", ["prevent"]), ["space"])),
                onClick: _cache[3] || (_cache[3] = ($event) => tab.value = "projects")
              }, _hoisted_9$1, 34),
              createBaseVNode("a", {
                "data-target-section": "subsection-3",
                class: normalizeClass(["tab-item", [tab.value === "tasks" && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => tab.value = "tasks", ["prevent"]), ["space"])),
                onClick: _cache[5] || (_cache[5] = ($event) => tab.value = "tasks")
              }, _hoisted_11$1, 34),
              _hoisted_12
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-1", [tab.value === "posts" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_13, [
              createVNode(_component_VPeity, {
                type: "line",
                height: 45,
                width: 100,
                "stroke-width": 1.6,
                stroke: "var(--primary)",
                values: values.value
              }, null, 8, ["stroke-width", "stroke", "values"]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("span", _hoisted_15, toDisplayString(values.value[values.value.length - 1]), 1),
                _hoisted_16
              ])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-2", [tab.value === "projects" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_CircleChart, {
                  value: __props.user.projects.progress,
                  size: 54
                }, null, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("span", _hoisted_20, toDisplayString(__props.user.projects.count), 1),
                _hoisted_21
              ])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-3", [tab.value === "tasks" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_CircleChart, {
                  value: __props.user.tasks.progress,
                  size: 54
                }, null, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("span", _hoisted_25, toDisplayString(__props.user.tasks.count), 1),
                _hoisted_26
              ])
            ])
          ], 2)
        ]),
        _hoisted_27
      ]);
    };
  }
});
const users = [];
var UsersGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "user-grid-toolbar is-reversed tabs-wrapper is-slider" };
const _hoisted_2$1 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "All", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "Team", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "user-grid user-grid-v3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: "all" }
  },
  setup(__props) {
    const props = __props;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const filteredData = computed(() => {
      if (!filters.value) {
        return users;
      } else {
        return users.filter((item) => {
          return item.username.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.position.match(new RegExp(filters.value, "i")) || item.badge.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_TabbedGridItem = _sfc_main$2;
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
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => tab.value = "all", ["prevent"]), ["space"])),
                    onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "all")
                  }, _hoisted_5, 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "team" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => tab.value = "team", ["prevent"]), ["space"])),
                    onClick: _cache[4] || (_cache[4] = ($event) => tab.value = "team")
                  }, _hoisted_7, 32)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_10,
              _hoisted_11
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", {
            id: "active-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "all" && "is-active"]])
          }, [
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    createVNode(_component_TabbedGridItem, { user: item }, null, 8, ["user"])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            id: "inactive-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "team" && "is-active"]])
          }, [
            createVNode(_component_VPlaceholderPage, {
              title: "No team members.",
              subtitle: "Looks like you don't have any team members yet. When you'll start\n              adding some to your team, they will be showing up in here."
            }, {
              image: withCtx(() => []),
              _: 1
            })
          ], 2)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Grid Users 3");
    useHead({
      title: "Grid Users 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_UsersGridV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_UsersGridV3, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
