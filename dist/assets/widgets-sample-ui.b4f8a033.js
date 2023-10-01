import { n as notifications, _ as _sfc_main$f } from "./notificationList.cbf10ce3.js";
import { _ as _sfc_main$7 } from "./VAvatar.08652fea.js";
import { d as defineComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, t as toDisplayString, F as Fragment, X as renderList, k as ref, g as normalizeClass, a2 as withKeys, W as withModifiers, p as createBlock, h as unref, w as withCtx, x as createTextVNode, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$e } from "./UIWidgetToolbarIcon.7c1a99ff.js";
import { i as iconList, _ as _sfc_main$d } from "./menuList.eedebb36.js";
import { _ as _sfc_main$8 } from "./VTag.f234897b.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { _ as _sfc_main$c } from "./UIWidgetToolbarFollowers.b9de412f.js";
import { _ as _sfc_main$b } from "./UIWidget.6c4793e7.js";
import { _ as _sfc_main$a } from "./VBillboardJS.a97b3f73.js";
import { f as followersList, _ as _sfc_main$9 } from "./followers.c0b11e85.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.107d1f23.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./VIconWrap.8350d40c.js";
import "./VAvatarStack.d8a5f95e.js";
import "./WidgetDropdown.be0631d8.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./index.e178843f.js";
const _hoisted_1$6 = { class: "widget-content" };
const _hoisted_2$5 = { class: "sender-block" };
const _hoisted_3$3 = { class: "sender-block-inner" };
const _hoisted_4$2 = { class: "meta" };
const _hoisted_5$2 = { class: "exerpt" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", null, "Where are we in terms of design? We need to review the new screens.", -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "Design Project" },
    user: { default: "Alice C." },
    picture: { default: "https://vuero.cssninja.io/demo/avatars/7.jpg" },
    time: { default: "28 minutes ago" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$3, [
            createVNode(_component_VAvatar, {
              picture: props.picture
            }, null, 8, ["picture"]),
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("span", null, toDisplayString(props.user) + " just sent you an inbox message.", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createBaseVNode("h5", null, [
              _hoisted_6$2,
              createBaseVNode("span", null, toDisplayString(props.title), 1)
            ]),
            _hoisted_7$1,
            createBaseVNode("small", null, toDisplayString(props.time), 1)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "calendar-widget-inner" };
const _hoisted_2$4 = { class: "date" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    days: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.days, (day) => {
          return openBlock(), createElementBlock("div", {
            key: day.id,
            class: "calendar-square"
          }, [
            createBaseVNode("div", _hoisted_2$4, [
              createBaseVNode("span", null, toDisplayString(day.date), 1),
              createBaseVNode("span", null, toDisplayString(day.name), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
var UIWidgetToolbarIcons_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "icon-toolbar" };
const _hoisted_2$3 = ["onKeydown", "onClick"];
const _hoisted_3$2 = ["data-icon"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { default: 0 },
    tabs: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const currentTab = ref(props.activeTab);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tabs, (tab, index) => {
          return openBlock(), createElementBlock("div", {
            key: tab.id,
            class: "toolbar-icon"
          }, [
            createBaseVNode("a", {
              class: normalizeClass(["inner-icon", { "is-active": currentTab.value === index }]),
              tabindex: "0",
              onKeydown: withKeys(withModifiers(($event) => currentTab.value = index, ["prevent"]), ["space"]),
              onClick: ($event) => currentTab.value = index
            }, [
              createBaseVNode("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": tab.icon
              }, null, 8, _hoisted_3$2)
            ], 42, _hoisted_2$3)
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "widget-content" };
const _hoisted_2$2 = { class: "tags" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    tags: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.tags, (tag) => {
            return openBlock(), createBlock(_component_VTag, {
              key: tag.id,
              color: tag.color,
              curved: "",
              outlined: !tag.popular,
              label: tag.title
            }, null, 8, ["color", "outlined", "label"]);
          }), 128))
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "widget-content" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "widget-meta" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:play-circle"
}, null, -1);
const _hoisted_5$1 = { class: "views" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:eye"
}, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "A nice and short little movie" },
    picture: { default: "https://via.placeholder.com/400x300" },
    views: { default: "" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("img", {
          src: props.picture,
          alt: "",
          onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "400x300"))
        }, null, 40, _hoisted_2$1),
        createBaseVNode("div", _hoisted_3$1, [
          _hoisted_4$1,
          createBaseVNode("h4", null, toDisplayString(props.title), 1),
          createBaseVNode("span", _hoisted_5$1, [
            _hoisted_6$1,
            createBaseVNode("span", null, toDisplayString(props.views), 1)
          ])
        ])
      ]);
    };
  }
});
const tagList1 = [
  {
    id: 0,
    title: "Politics",
    popular: false,
    color: "primary"
  },
  {
    id: 1,
    title: "Economy",
    popular: true,
    color: "primary"
  },
  {
    id: 2,
    title: "Finance",
    popular: false,
    color: "primary"
  },
  {
    id: 3,
    title: "Environment",
    popular: false,
    color: "primary"
  },
  {
    id: 4,
    title: "Food",
    popular: false,
    color: "primary"
  },
  {
    id: 5,
    title: "Technology",
    popular: true,
    color: "primary"
  }
];
const tagList2 = [
  {
    id: 0,
    title: "Family",
    popular: false,
    color: "primary"
  },
  {
    id: 1,
    title: "Home",
    popular: true,
    color: "primary"
  },
  {
    id: 2,
    title: "Health",
    popular: false,
    color: "primary"
  },
  {
    id: 3,
    title: "Business",
    popular: false,
    color: "primary"
  },
  {
    id: 4,
    title: "Personal",
    popular: false,
    color: "primary"
  },
  {
    id: 5,
    title: "Utility",
    popular: true,
    color: "primary"
  }
];
const tabs = [
  {
    id: 0,
    icon: "feather:activity"
  },
  {
    id: 1,
    icon: "feather:search"
  },
  {
    id: 2,
    icon: "feather:file-text"
  },
  {
    id: 3,
    icon: "feather:home"
  }
];
const days = [
  {
    id: 0,
    name: "Monday",
    date: "22"
  },
  {
    id: 1,
    name: "Tuesday",
    date: "23"
  },
  {
    id: 2,
    name: "Wednesday",
    date: "24"
  },
  {
    id: 3,
    name: "Thursday",
    date: "25"
  }
];
const themeColors = useThemeColors();
const trendWidgetChartOptions = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    height: "200px",
    width: "100%",
    type: "line",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.purple, themeColors.orange],
  grid: {
    show: false,
    padding: {
      left: -20,
      right: 0
    }
  },
  padding: {
    bottom: 0,
    left: 0,
    right: 0
  },
  legend: {
    show: false,
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
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false,
      offsetX: -40
    }
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
const _hoisted_1$1 = { class: "columns is-multiline widget-demo-columns" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "gauge-wrap" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Your score has been calculated based on the latest metrics")
], -1);
const _hoisted_5 = { class: "widget-content" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Great News! ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" and ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" are now following you. Take some time to look at their profile. ");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "text",
      class: "input",
      placeholder: "Search..."
    }),
    /* @__PURE__ */ createBaseVNode("button", { class: "searcv-button" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:search"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "topics" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#Politics"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Movies"),
    /* @__PURE__ */ createBaseVNode("a", null, "#Tech")
  ])
], -1);
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_14 = { class: "column is-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" You have an upcoming payment for your recurring subscription fee due on "),
    /* @__PURE__ */ createBaseVNode("span", null, "Sept 20, 2020"),
    /* @__PURE__ */ createTextVNode(". ")
  ])
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "progress-wrap" }, [
  /* @__PURE__ */ createBaseVNode("progress", {
    class: "progress is-primary is-tiny",
    max: "100"
  }, "55%")
], -1);
const _hoisted_17 = { class: "column is-3" };
const _hoisted_18 = { class: "widget-content" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "stat-number" }, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createTextVNode("$1638,42 "),
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:trending-up"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Earned from Sales")
  ])
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" You currently have more than "),
    /* @__PURE__ */ createBaseVNode("span", null, "10 unread messages"),
    /* @__PURE__ */ createTextVNode(" in your inbox. It could be a good time to check them out. ")
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_UIWidgetToolbarDropdown = _sfc_main$9;
      const _component_VBillboardJS = _sfc_main$a;
      const _component_UIWidget = _sfc_main$b;
      const _component_UIWidgetToolbarFollowers = _sfc_main$c;
      const _component_UIWidgetMovie = _sfc_main$2;
      const _component_UIWidgetTagList = _sfc_main$3;
      const _component_UIWidgetToolbarIcons = _sfc_main$4;
      const _component_UIWidgetDays = _sfc_main$5;
      const _component_UIWidgetIconList = _sfc_main$d;
      const _component_UIWidgetToolbarIcon = _sfc_main$e;
      const _component_UIWidgetInboxMessage = _sfc_main$6;
      const _component_UIWidgetNotifications = _sfc_main$f;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_UIWidget, { class: "gauge-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Gauge Widget" })
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_VBillboardJS, {
                  class: "gauge-holder",
                  options: unref(personalScoreGaugeOptions),
                  onReady: unref(onPersonalScoreGaugeReady)
                }, null, 8, ["options", "onReady"])
              ]),
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarFollowers, {
                title: "New Followers",
                avatars: unref(followersList)
              }, null, 8, ["avatars"])
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("p", null, [
                  _hoisted_6,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                  _hoisted_7,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                  _hoisted_8,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                  _hoisted_9
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "search-widget" }, {
            body: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "video-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetMovie, {
                picture: "https://vuero.cssninja.io/demo/photos/widgets/1.jpg",
                views: "38,274"
              })
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "tags-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetTagList, { tags: unref(tagList1) }, null, 8, ["tags"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_UIWidget, { class: "icon-toolbar-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcons, { tabs: unref(tabs) }, null, 8, ["tabs"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "calendar-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetDays, { days: unref(days) }, null, 8, ["days"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "picker-widget" }, {
            header: withCtx(() => [
              _hoisted_12
            ]),
            body: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "icon-list-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetIconList, { list: unref(iconList) }, null, 8, ["list"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_14, [
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, { title: "Payment" })
            ]),
            body: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "image-widget" }, {
            body: withCtx(() => [
              createBaseVNode("img", {
                src: "https://vuero.cssninja.io/demo/photos/widgets/2.jpg",
                alt: "",
                onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "400x300"))
              }, null, 32),
              _hoisted_16
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "inbox-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Inbox" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetInboxMessage)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_17, [
          createVNode(_component_UIWidget, { class: "tags-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Labels" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetTagList, { tags: unref(tagList2) }, null, 8, ["tags"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "Labels" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetNotifications, { notifications: unref(notifications) }, null, 8, ["notifications"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "stats-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "" })
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(unref(ApexChart), {
                  id: "trend-chart",
                  class: "stat-chart",
                  height: unref(trendWidgetChartOptions).chart.height,
                  type: unref(trendWidgetChartOptions).chart.type,
                  series: unref(trendWidgetChartOptions).series,
                  options: unref(trendWidgetChartOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, {
                title: "Messages",
                icon: "feather:message-square"
              })
            ]),
            body: withCtx(() => [
              _hoisted_20
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
    viewWrapper.setPageTitle("Widgets UI");
    useHead({
      title: "Widgets UI - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_WidgetsUI = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_WidgetsUI)
      ]);
    };
  }
});
export { _sfc_main as default };
