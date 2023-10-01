import { _ as _sfc_main$a } from "./VPlaceholderSection.d614fe7b.js";
import { _ as _export_sfc, b as _sfc_main$9 } from "./index.e178843f.js";
import { _ as _sfc_main$8 } from "./VAnimatedCheckbox.ef1a08f3.js";
import { _ as _sfc_main$7 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$6 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$5 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$3 } from "./VDropdown.38fc5e7d.js";
import { o as openBlock, p as createBlock, w as withCtx, q as createBaseVNode, d as defineComponent, k as ref, z as resolveComponent, f as createElementBlock, s as createVNode, h as unref, ae as createStaticVNode, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$4 } from "./VAvatarStack.d8a5f95e.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-whiteboard-alt-2"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "View"),
    /* @__PURE__ */ createBaseVNode("span", null, "View project board")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Edit"),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit project")
  ])
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-checkmark-circle"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Tasks"),
    /* @__PURE__ */ createBaseVNode("span", null, "View pending tasks")
  ])
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-hierchy-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Team"),
    /* @__PURE__ */ createBaseVNode("span", null, "View project team")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$3;
  return openBlock(), createBlock(_component_VDropdown, {
    class: "end-action",
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1
    ]),
    _: 1
  });
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var _imports_0 = "/assets/chart-guy.78d9bd2b.svg";
var _imports_1 = "/assets/chart-guy-dark.e059893d.svg";
const themeColors$1 = useThemeColors();
const completionOptions = {
  series: [
    {
      name: "Pending",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "Completed",
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
      name: "Blocked",
      data: [78, 53, 36, 10, 14, 5, 2]
    }
  ],
  chart: {
    height: 295,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.accent, themeColors$1.info, themeColors$1.green],
  legend: {
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-09-19T00:00:00.000Z",
      "2020-09-20T01:30:00.000Z",
      "2020-09-21T02:30:00.000Z",
      "2020-09-22T03:30:00.000Z",
      "2020-09-23T04:30:00.000Z",
      "2020-09-24T05:30:00.000Z",
      "2020-09-25T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
const themeColors = useThemeColors();
const series = [
  {
    name: "Design",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: "Development",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },
  {
    name: "Management",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }
].map((s) => {
  return {
    name: s.name,
    data: s.data.map((d) => {
      return d - 70;
    })
  };
});
const barOptions = {
  chart: {
    height: 250,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.purple, themeColors.green],
  legend: {
    position: "top"
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "55%"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  series,
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val + 70;
      }
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val + "hrs";
      }
    }
  }
};
const avatarStack1 = [
  {
    id: 18,
    picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
    initials: "EC",
    color: "info"
  },
  {
    id: 16,
    picture: "https://vuero.cssninja.io/demo/avatars/16.jpg",
    initials: "JG",
    color: "success"
  },
  {
    id: 23,
    picture: "https://vuero.cssninja.io/demo/avatars/23.jpg",
    initials: "IV",
    color: "warning"
  }
];
var PersonalDashboardV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "personal-dashboard personal-dashboard-v2" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="column is-12"><div class="dashboard-header"><div class="user-meta is-dark-bordered-12"><h3 class="title is-4 is-narrow is-bold">Welcome back, Erik K.</h3><p class="light-text">It&#39;s really nice to see you again</p></div><div class="user-action"><h3 class="title is-2 is-narrow">3</h3><p class="light-text">Tasks are pending review</p><a class="action-link" tabindex="0">View Tasks</a></div><div class="cta h-hidden-tablet-p"><div class="media-flex inverted-text"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><p class="white-text">Start using our team and project management tools</p></div><a class="link inverted-text">Learn More</a></div></div></div>', 1);
const _hoisted_4 = { class: "column is-8" };
const _hoisted_5 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Active Projects"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_7 = { class: "active-projects" };
const _hoisted_8 = { class: "dashboard-card" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Task Completion"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "Reports")
], -1);
const _hoisted_10 = { class: "dashboard-card" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Team Efficiency"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "Reports")
], -1);
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "dashboard-card" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "My Team"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_15 = { class: "active-team" };
const _hoisted_16 = { class: "user-list" };
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">Esteban C.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">Sara Connor</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">Tara S.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">Naomi Liversky</div><div class="position">Frontend developer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_25 = { class: "dashboard-card" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Todo Today"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "action-link",
    tabindex: "0"
  }, "View All")
], -1);
const _hoisted_27 = { class: "active-list" };
const _hoisted_28 = { class: "checkboxes-list" };
const _hoisted_29 = { class: "list-item" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Call Mr. Markstrom"),
  /* @__PURE__ */ createBaseVNode("span", null, "Review the project initial wireframes")
], -1);
const _hoisted_31 = { class: "list-item" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Finish wireframes"),
  /* @__PURE__ */ createBaseVNode("span", null, "Make all requested changes and publish")
], -1);
const _hoisted_33 = { class: "list-item" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Update timesheets"),
  /* @__PURE__ */ createBaseVNode("span", null, "Update all the team timesheets")
], -1);
const _hoisted_35 = { class: "list-item" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Request payout"),
  /* @__PURE__ */ createBaseVNode("span", null, "send project invoice to client")
], -1);
const _hoisted_37 = { class: "dashboard-card" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createTextVNode(" Go Premium ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const avatarStack1$1 = avatarStack1;
    const avatarStack2 = avatarStack1;
    const avatarStack3 = avatarStack1;
    const avatarStack4 = avatarStack1;
    const democheck = ref(["value_2"]);
    return (_ctx, _cache) => {
      const _component_VAvatarStack = _sfc_main$4;
      const _component_ProjectWidgetDropdown = __unplugin_components_1;
      const _component_VBlock = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_UserPopoverContent = _sfc_main$7;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VAnimatedCheckbox = _sfc_main$8;
      const _component_VButton = _sfc_main$9;
      const _component_VPlaceholderSection = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_VBlock, {
                  title: "Delivery App Project",
                  subtitle: "Updated 30m ago",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack1$1),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Health and Fitness Dashboard",
                  subtitle: "Updated 5h ago",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack2),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Learning Tracker Dashboard",
                  subtitle: "Updated 7h ago",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack3),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "Banking App Dashboard",
                  subtitle: "Updated 10h ago",
                  center: ""
                }, {
                  icon: withCtx(() => []),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack4),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createVNode(unref(ApexChart), {
                id: "completion-chart",
                height: unref(completionOptions).chart.height,
                type: unref(completionOptions).chart.type,
                series: unref(completionOptions).series,
                options: unref(completionOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              createVNode(unref(ApexChart), {
                id: "efficiency-chart",
                height: unref(barOptions).chart.height,
                type: unref(barOptions).chart.type,
                series: unref(barOptions).series,
                options: unref(barOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              _hoisted_14,
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("ul", _hoisted_16, [
                  createBaseVNode("li", null, [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user18
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/18.jpg" })
                      ]),
                      _: 1
                    }),
                    _hoisted_17
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user120
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          initials: "SC",
                          color: "h-orange"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_19
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/13.jpg" })
                      ]),
                      _: 1
                    }),
                    _hoisted_21
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_Tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user121
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          initials: "NL",
                          color: "success"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_23
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              _hoisted_26,
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => democheck.value = $event),
                      value: "value_1"
                    }, null, 8, ["modelValue"]),
                    _hoisted_30
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => democheck.value = $event),
                      value: "value_2"
                    }, null, 8, ["modelValue"]),
                    _hoisted_32
                  ]),
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => democheck.value = $event),
                      value: "value_3"
                    }, null, 8, ["modelValue"]),
                    _hoisted_34
                  ]),
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => democheck.value = $event),
                      value: "value_4"
                    }, null, 8, ["modelValue"]),
                    _hoisted_36
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_37, [
              createVNode(_component_VPlaceholderSection, {
                title: "Go Premium",
                subtitle: "Unlock more features and business tools by going premium"
              }, {
                image: withCtx(() => [
                  _hoisted_38,
                  _hoisted_39
                ]),
                action: withCtx(() => [
                  createVNode(_component_VButton, {
                    color: "primary",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_40
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
    viewWrapper.setPageTitle("Personal 2");
    useHead({
      title: "Personal 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_PersonalDashboardV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_PersonalDashboardV2)
      ]);
    };
  }
});
export { _sfc_main as default };
