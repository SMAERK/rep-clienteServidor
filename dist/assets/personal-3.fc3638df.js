import { _ as _sfc_main$8 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$7 } from "./UIWidget.6c4793e7.js";
import { _ as _sfc_main$6 } from "./VAvatarStack.d8a5f95e.js";
import { _ as _sfc_main$5 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$4 } from "./VIconBox.298b3a59.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { j as gauge, _ as _sfc_main$2 } from "./VBillboardJS.a97b3f73.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { k as ref, d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, h as unref, w as withCtx, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
var _imports_0 = "/assets/interviews.374f4830.svg";
const themeColors$1 = useThemeColors();
const interviewsOptions = {
  series: [
    {
      name: "Interviews",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.accent, themeColors$1.info, themeColors$1.orange],
  title: {
    text: "Interviews",
    align: "left"
  },
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
const progressGaugeOptions = ref({
  data: {
    columns: [["data", 91.4]],
    type: gauge()
  },
  gauge: {
    label: {
      extents: () => ""
    }
  },
  color: {
    pattern: [
      themeColors.accent,
      themeColors.info,
      themeColors.orange,
      themeColors.green
    ],
    threshold: {
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 90,
    width: 90
  },
  padding: {
    bottom: 0
  },
  legend: {
    show: false,
    position: "inset"
  }
});
const onprogressGaugeReady = (billboard) => {
  setTimeout(function() {
    billboard.load({
      columns: [["data", 10]]
    });
  }, 1e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 50]]
    });
  }, 2e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 70]]
    });
  }, 3e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 0]]
    });
  }, 4e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 100]]
    });
  }, 5e3);
};
const userStack = [
  {
    id: 5,
    picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
    initials: "ML",
    color: "info"
  },
  {
    id: 18,
    picture: "https://vuero.cssninja.io/demo/avatars/18.jpg",
    initials: "EC",
    color: "warning"
  },
  {
    id: 26,
    initials: "CW",
    color: "h-purple"
  },
  {
    id: 100,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 101,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 101,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 102,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 103,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 104,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 105,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 106,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 107,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 108,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 109,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 110,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 111,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 112,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 113,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 114,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 115,
    picture: void 0,
    initials: "SC",
    color: "success"
  }
];
var PersonalDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "personal-dashboard personal-dashboard-v3" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-8" };
const _hoisted_4 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = { class: "dashboard-card is-welcome" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "welcome-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Hi Erik K."),
  /* @__PURE__ */ createBaseVNode("p", null, " You have 6 interviews to conduct during this week. Your current progress is great. ")
], -1);
const _hoisted_8 = { class: "welcome-progress" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Your Progress"),
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, [
    /* @__PURE__ */ createTextVNode("Outstanding "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Party Popper"
    }, "\u{1F389}")
  ])
], -1);
const _hoisted_10 = { class: "button-wrap" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" View Schedule ");
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = { class: "stats-wrapper" };
const _hoisted_14 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = { class: "dashboard-card" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = { class: "dashboard-card" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:radio"
}, null, -1);
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = { class: "dashboard-card" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user-check"
}, null, -1);
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = { class: "dashboard-card" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:frown"
}, null, -1);
const _hoisted_27 = { class: "people" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Total Interviews"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "23 interviews"),
    /* @__PURE__ */ createTextVNode(" this month")
  ])
], -1);
const _hoisted_29 = { class: "right" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 h-hidden-mobile h-hidden-tablet-p" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: ""
  })
], -1);
const _hoisted_31 = { class: "column is-6" };
const _hoisted_32 = { class: "dashboard-card" };
const _hoisted_33 = { class: "column is-4" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-left"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "center" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "October 2020")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-right"
      })
    ])
  ])
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Mon"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Tue"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Wed"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Thu"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Fri"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sat"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Sun")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "29"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "30"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "31"),
      /* @__PURE__ */ createBaseVNode("td", null, "1"),
      /* @__PURE__ */ createBaseVNode("td", null, "2"),
      /* @__PURE__ */ createBaseVNode("td", null, "3"),
      /* @__PURE__ */ createBaseVNode("td", null, "4")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "5"),
      /* @__PURE__ */ createBaseVNode("td", null, "6"),
      /* @__PURE__ */ createBaseVNode("td", null, "7"),
      /* @__PURE__ */ createBaseVNode("td", null, "8"),
      /* @__PURE__ */ createBaseVNode("td", null, "9"),
      /* @__PURE__ */ createBaseVNode("td", null, "10"),
      /* @__PURE__ */ createBaseVNode("td", null, "11")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "12"),
      /* @__PURE__ */ createBaseVNode("td", null, "13"),
      /* @__PURE__ */ createBaseVNode("td", null, "14"),
      /* @__PURE__ */ createBaseVNode("td", null, "15"),
      /* @__PURE__ */ createBaseVNode("td", null, "16"),
      /* @__PURE__ */ createBaseVNode("td", null, "17"),
      /* @__PURE__ */ createBaseVNode("td", { class: "current-day" }, "18")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "19"),
      /* @__PURE__ */ createBaseVNode("td", null, "20"),
      /* @__PURE__ */ createBaseVNode("td", null, "21"),
      /* @__PURE__ */ createBaseVNode("td", null, "22"),
      /* @__PURE__ */ createBaseVNode("td", null, "23"),
      /* @__PURE__ */ createBaseVNode("td", null, "24"),
      /* @__PURE__ */ createBaseVNode("td", null, "25")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "26"),
      /* @__PURE__ */ createBaseVNode("td", null, "27"),
      /* @__PURE__ */ createBaseVNode("td", null, "28"),
      /* @__PURE__ */ createBaseVNode("td", null, "29"),
      /* @__PURE__ */ createBaseVNode("td", null, "30"),
      /* @__PURE__ */ createBaseVNode("td", null, "31"),
      /* @__PURE__ */ createBaseVNode("td", { class: "next-month" }, "1")
    ])
  ])
], -1);
const _hoisted_36 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_38 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_40 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStack$1 = userStack;
    return (_ctx, _cache) => {
      const _component_VBillboardJS = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VIconBox = _sfc_main$4;
      const _component_VBlock = _sfc_main$5;
      const _component_VAvatarStack = _sfc_main$6;
      const _component_UIWidget = _sfc_main$7;
      const _component_VAvatar = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_VBillboardJS, {
                      options: unref(progressGaugeOptions),
                      onReady: unref(onprogressGaugeReady)
                    }, null, 8, ["options", "onReady"]),
                    _hoisted_9
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_VButton, {
                      color: "primary",
                      size: "big",
                      fullwidth: "",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_VBlock, {
                          title: "62K",
                          subtitle: "Minutes",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "info",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_17
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(_component_VBlock, {
                          title: "263",
                          subtitle: "Interviews",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "purple",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_20
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(_component_VBlock, {
                          title: "49",
                          subtitle: "Approved",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "green",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_23
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_VBlock, {
                          title: "214",
                          subtitle: "Rejected",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "orange",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_26
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    _hoisted_28,
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VAvatarStack, {
                        avatars: unref(userStack$1),
                        limit: 3
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])
              ]),
              _hoisted_30,
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createVNode(unref(ApexChart), {
                    id: "interviews-chart",
                    height: unref(interviewsOptions).chart.height,
                    type: unref(interviewsOptions).chart.type,
                    series: unref(interviewsOptions).series,
                    options: unref(interviewsOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_33, [
            createVNode(_component_UIWidget, { class: "picker-widget" }, {
              header: withCtx(() => [
                _hoisted_34
              ]),
              body: withCtx(() => [
                _hoisted_35
              ]),
              _: 1
            }),
            createBaseVNode("a", _hoisted_36, [
              createVNode(_component_VBlock, {
                title: "Jonathan K.",
                subtitle: "08:00 - 09:00",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/32.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_37
                ]),
                _: 1
              })
            ]),
            createBaseVNode("a", _hoisted_38, [
              createVNode(_component_VBlock, {
                title: "Greta K.",
                subtitle: "10:30 - 11:00",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/19.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_39
                ]),
                _: 1
              })
            ]),
            createBaseVNode("a", _hoisted_40, [
              createVNode(_component_VBlock, {
                title: "Joshua S.",
                subtitle: "02:30 - 03:00",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/12.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_41
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
    viewWrapper.setPageTitle("Personal 3");
    useHead({
      title: "Personal 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_PersonalDashboardV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_PersonalDashboardV3)
      ]);
    };
  }
});
export { _sfc_main as default };
