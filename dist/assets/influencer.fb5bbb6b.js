import { _ as _sfc_main$a } from "./VPlaceholderPage.bdc25b05.js";
import { _ as _export_sfc } from "./index.e178843f.js";
import { o as openBlock, f as createElementBlock, s as createVNode, w as withCtx, d as defineComponent, r as renderSlot, g as normalizeClass, q as createBaseVNode, h as unref, x as createTextVNode, ae as createStaticVNode, z as resolveComponent, ag as isRef, p as createBlock, k as ref, a2 as withKeys, W as withModifiers, y as createCommentVNode, a1 as useHead, am as Teleport } from "./vendor.6548d360.js";
import { _ as _sfc_main$c } from "./VIconBox.298b3a59.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { _ as _sfc_main$b } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { w as widgetRadialGroup1Options, a as widgetRadialGroup2Options, b as widgetRadialGroup3Options, _ as _sfc_main$d, c as _sfc_main$e } from "./groupedCircleCharts.4e0c4118.js";
import { A as ApexChart } from "./vue3-apexcharts.common.94adc8f7.js";
import { c as creativityRadialOptions, e as engagmentRadialOptions, p as popularityRadialOptions } from "./groupedSocialCharts.45b95979.js";
import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { d as asPercent } from "./apex-formatters.f2b3d967.js";
import { _ as _sfc_main$f } from "./VDropdown.38fc5e7d.js";
import { _ as _sfc_main$g } from "./VTag.f234897b.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./dayjs.min.7cfaa8e2.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
const _sfc_main$9 = {};
const _hoisted_1$8 = {
  id: "brands-tab",
  class: "tab-content is-active"
};
function _sfc_render$2(_ctx, _cache) {
  const _component_VPlaceholderPage = _sfc_main$a;
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_VPlaceholderPage, {
      title: "No brands to show.",
      subtitle: "Too bad. Looks like Clarissa enabled her brand privacy setting. You won't be\n          able to see the brands she's working with unless you contact her directly."
    }, {
      image: withCtx(() => []),
      _: 1
    })
  ]);
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2]]);
var OverviewCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    metrics: { type: Boolean },
    heatmap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["overview-card", [props.metrics && "is-metrics", props.heatmap && "is-heatmap"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Heatmap_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$7 = { class: "heatmap-wrapper" };
const _hoisted_2$7 = { class: "heatmap-title" };
const _hoisted_3$6 = { class: "title-avatar" };
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Clarissa generally posts media on: "),
    /* @__PURE__ */ createBaseVNode("span", null, "Mondays at 11am"),
    /* @__PURE__ */ createTextVNode(", "),
    /* @__PURE__ */ createBaseVNode("span", null, "Thursdays at 3pm"),
    /* @__PURE__ */ createTextVNode(", "),
    /* @__PURE__ */ createBaseVNode("span", null, "Fridays at 4pm"),
    /* @__PURE__ */ createTextVNode(" ... ")
  ])
], -1);
const _hoisted_5$4 = /* @__PURE__ */ createStaticVNode('<div class="heatmap-inner"><div class="heatmap-row"><div class="heatmap-row-label"><span>Mon</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-3"><i aria-hidden="true" class="fas fa-fire"></i></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Tue</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Wed</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Thu</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-3"><i aria-hidden="true" class="fas fa-fire"></i></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Fri</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-3"><i aria-hidden="true" class="fas fa-fire"></i></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Sat</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span>Sun</span></div><div class="heatmap-row-content"><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-1"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item heat-2"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div><div class="heatmap-row-item"></div></div></div><div class="heatmap-row"><div class="heatmap-row-label"><span></span></div><div class="heatmap-row-content"><div class="heatmap-row-item is-time"><span>12am</span></div><div class="heatmap-row-item is-time"><span>1am</span></div><div class="heatmap-row-item is-time"><span>2am</span></div><div class="heatmap-row-item is-time"><span>3am</span></div><div class="heatmap-row-item is-time"><span>4am</span></div><div class="heatmap-row-item is-time"><span>5am</span></div><div class="heatmap-row-item is-time"><span>6am</span></div><div class="heatmap-row-item is-time"><span>7am</span></div><div class="heatmap-row-item is-time"><span>8am</span></div><div class="heatmap-row-item is-time"><span>9am</span></div><div class="heatmap-row-item is-time"><span>10am</span></div><div class="heatmap-row-item is-time"><span>11am</span></div><div class="heatmap-row-item is-time"><span>12pm</span></div><div class="heatmap-row-item is-time"><span>1pm</span></div><div class="heatmap-row-item is-time"><span>2pm</span></div><div class="heatmap-row-item is-time"><span>3pm</span></div><div class="heatmap-row-item is-time"><span>4pm</span></div><div class="heatmap-row-item is-time"><span>5pm</span></div><div class="heatmap-row-item is-time"><span>6pm</span></div><div class="heatmap-row-item is-time"><span>7pm</span></div><div class="heatmap-row-item is-time"><span>8pm</span></div><div class="heatmap-row-item is-time"><span>9pm</span></div><div class="heatmap-row-item is-time"><span>10pm</span></div><div class="heatmap-row-item is-time"><span>11pm</span></div></div></div></div>', 1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("img", {
              src: "https://vuero.cssninja.io/demo/photos/faces/girl1.jpg",
              alt: "",
              onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32)
          ]),
          _hoisted_4$5
        ]),
        _hoisted_5$4
      ]);
    };
  }
});
const valueSingle = 1;
const optionsSingle = ["Last week", "Last 30 days", "Last 60 days", "Last 90 days"];
const _hoisted_1$6 = {
  id: "content-tab",
  class: "tab-content is-active"
};
const _hoisted_2$6 = { class: "body-title" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("h3", null, "Content Stats", -1);
const _hoisted_4$4 = { class: "columns is-multiline" };
const _hoisted_5$3 = { class: "column is-12 h-hidden-mobile" };
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Posting Habits")
], -1);
const _hoisted_7$3 = { class: "column is-4" };
const _hoisted_8$2 = { class: "card-head" };
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("h4", null, "Post Day", -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-calendar-day"
}, null, -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric is-smaller" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Monday")
], -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-down" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Best day to post.")
], -1);
const _hoisted_13$2 = { class: "column is-4" };
const _hoisted_14$2 = { class: "card-head" };
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("h4", null, "hashtags", -1);
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fab fa-slack-hash"
}, null, -1);
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric is-smaller" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "#Music")
], -1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-down" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Most used hashtag.")
], -1);
const _hoisted_19$2 = { class: "column is-4" };
const _hoisted_20$2 = { class: "card-head" };
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("h4", null, "Filters", -1);
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-camera"
}, null, -1);
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric is-smaller" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Normal")
], -1);
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-down" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Most used filter.")
], -1);
const _hoisted_25$2 = { class: "column is-12" };
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-flex-tablet-p" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-3" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "metric" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-head" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Avg. Payout per Post")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric is-smaller" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "$640.42")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-foot is-up" }, [
        /* @__PURE__ */ createBaseVNode("span", null, [
          /* @__PURE__ */ createBaseVNode("span", null, [
            /* @__PURE__ */ createBaseVNode("i", {
              "aria-hidden": "true",
              class: "iconify",
              "data-icon": "feather:arrow-right"
            }),
            /* @__PURE__ */ createTextVNode(" +0.8%")
          ]),
          /* @__PURE__ */ createTextVNode(" more than usual. ")
        ])
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-3" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "metric" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-head" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Lowest Payout")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric is-smaller" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "$451.32")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-foot is-down" }, [
        /* @__PURE__ */ createBaseVNode("span", null, [
          /* @__PURE__ */ createBaseVNode("span", null, [
            /* @__PURE__ */ createBaseVNode("i", {
              "aria-hidden": "true",
              class: "iconify",
              "data-icon": "feather:arrow-right"
            }),
            /* @__PURE__ */ createTextVNode(" -0.2%")
          ]),
          /* @__PURE__ */ createTextVNode(" less than ususal. ")
        ])
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-3" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "metric" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-head" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Highest Payout")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric is-smaller" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "$731.87")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-foot is-up" }, [
        /* @__PURE__ */ createBaseVNode("span", null, [
          /* @__PURE__ */ createBaseVNode("span", null, [
            /* @__PURE__ */ createBaseVNode("i", {
              "aria-hidden": "true",
              class: "iconify",
              "data-icon": "feather:arrow-right"
            }),
            /* @__PURE__ */ createTextVNode(" +1.2%")
          ]),
          /* @__PURE__ */ createTextVNode(" more than ususal. ")
        ])
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-3" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "metric" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-head" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Lifetime Earnings")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric is-smaller" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "$23.4K")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "metric-foot is-up" }, [
        /* @__PURE__ */ createBaseVNode("span", null, [
          /* @__PURE__ */ createBaseVNode("span", null, [
            /* @__PURE__ */ createBaseVNode("i", {
              "aria-hidden": "true",
              class: "iconify",
              "data-icon": "feather:arrow-right"
            }),
            /* @__PURE__ */ createTextVNode(" +4.2%")
          ]),
          /* @__PURE__ */ createTextVNode(" more than ususal. ")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_27$2 = { class: "column is-4" };
const _hoisted_28$2 = { class: "card v-card" };
const _hoisted_29$2 = /* @__PURE__ */ createStaticVNode('<header class="card-header"><div class="post-stats"><span>Most Liked Posts</span><div class="post-stat"><i aria-hidden="true" class="fas fa-heart text-h-red"></i><span class="count dark-inverted">15.9K</span></div></div></header>', 1);
const _hoisted_30$2 = { class: "card-image" };
const _hoisted_31$1 = { class: "image is-4by3" };
const _hoisted_32$1 = { class: "card-content post-group-wrap" };
const _hoisted_33$1 = { class: "post-group" };
const _hoisted_34$1 = { class: "column is-4" };
const _hoisted_35$1 = { class: "card v-card" };
const _hoisted_36$1 = /* @__PURE__ */ createStaticVNode('<header class="card-header"><div class="post-stats"><span>Most Commented Posts</span><div class="post-stat"><i aria-hidden="true" class="fas fa-comment text-h-yellow"></i><span class="count dark-inverted">2.3K</span></div></div></header>', 1);
const _hoisted_37$1 = { class: "card-image" };
const _hoisted_38$1 = { class: "image is-4by3" };
const _hoisted_39$1 = { class: "card-content post-group-wrap" };
const _hoisted_40$1 = { class: "post-group" };
const _hoisted_41$1 = { class: "column is-4" };
const _hoisted_42$1 = { class: "card v-card" };
const _hoisted_43$1 = /* @__PURE__ */ createStaticVNode('<header class="card-header"><div class="post-stats"><span>Most Engaging Posts</span><div class="post-stat"><i aria-hidden="true" class="fas fa-hand-paper text-h-green"></i><span class="count dark-inverted">51.6%</span></div></div></header>', 1);
const _hoisted_44$1 = { class: "card-image" };
const _hoisted_45$1 = { class: "image is-4by3" };
const _hoisted_46$1 = { class: "card-content post-group-wrap" };
const _hoisted_47$1 = { class: "post-group" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$b;
      const _component_Heatmap = _sfc_main$7;
      const _component_OverviewCard = _sfc_main$8;
      const _component_VIconBox = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          _hoisted_3$5,
          createVNode(_component_VField, { class: "is-minimal-select" }, {
            default: withCtx(() => [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_Multiselect, {
                    id: "content-stats-select",
                    modelValue: unref(valueSingle),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                    options: unref(optionsSingle),
                    placeholder: "Select an option",
                    "max-height": 145
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4$4, [
          createBaseVNode("div", _hoisted_5$3, [
            createVNode(_component_OverviewCard, { heatmap: "" }, {
              default: withCtx(() => [
                _hoisted_6$3,
                createVNode(_component_Heatmap)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_7$3, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_8$2, [
                  _hoisted_9$2,
                  createVNode(_component_VIconBox, {
                    color: "green",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_10$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_11$2,
                _hoisted_12$2
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_13$2, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_14$2, [
                  _hoisted_15$2,
                  createVNode(_component_VIconBox, {
                    color: "info",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_16$2
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_17$2,
                _hoisted_18$2
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_19$2, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_20$2, [
                  _hoisted_21$2,
                  createVNode(_component_VIconBox, {
                    color: "orange",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_22$2
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_23$2,
                _hoisted_24$2
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_25$2, [
            createVNode(_component_OverviewCard, { metrics: "" }, {
              default: withCtx(() => [
                _hoisted_26$2
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_27$2, [
            createBaseVNode("div", _hoisted_28$2, [
              _hoisted_29$2,
              createBaseVNode("div", _hoisted_30$2, [
                createBaseVNode("figure", _hoisted_31$1, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/30.jpg",
                    alt: "",
                    onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "1280x960"))
                  }, null, 32)
                ])
              ]),
              createBaseVNode("div", _hoisted_32$1, [
                createBaseVNode("div", _hoisted_33$1, [
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/33.jpg",
                      alt: "",
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/34.jpg",
                      alt: "",
                      onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/35.jpeg",
                      alt: "",
                      onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/36.jpg",
                      alt: "",
                      onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_34$1, [
            createBaseVNode("div", _hoisted_35$1, [
              _hoisted_36$1,
              createBaseVNode("div", _hoisted_37$1, [
                createBaseVNode("figure", _hoisted_38$1, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/31.png",
                    alt: "",
                    onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "1280x960"))
                  }, null, 32)
                ])
              ]),
              createBaseVNode("div", _hoisted_39$1, [
                createBaseVNode("div", _hoisted_40$1, [
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/33.jpg",
                      alt: "",
                      onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/34.jpg",
                      alt: "",
                      onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/35.jpeg",
                      alt: "",
                      onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/36.jpg",
                      alt: "",
                      onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_41$1, [
            createBaseVNode("div", _hoisted_42$1, [
              _hoisted_43$1,
              createBaseVNode("div", _hoisted_44$1, [
                createBaseVNode("figure", _hoisted_45$1, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/32.jpg",
                    alt: "",
                    onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(onceImageErrored)(event, "1280x960"))
                  }, null, 32)
                ])
              ]),
              createBaseVNode("div", _hoisted_46$1, [
                createBaseVNode("div", _hoisted_47$1, [
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/33.jpg",
                      alt: "",
                      onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/34.jpg",
                      alt: "",
                      onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/35.jpeg",
                      alt: "",
                      onErrorOnce: _cache[14] || (_cache[14] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ]),
                  createBaseVNode("a", null, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/36.jpg",
                      alt: "",
                      onErrorOnce: _cache[15] || (_cache[15] = (event) => unref(onceImageErrored)(event, "1280x960"))
                    }, null, 32)
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var block0 = ".cloud-container {\n  position: relative;\n  height: 455px;\n  text-align: center;\n}\n.cloud-container ul {\n  margin-top: 1.5rem;\n  list-style-type: none;\n}\n.cloud-container ul li {\n  display: inline-block;\n}\n.cloud-container ul li a {\n  text-decoration: none;\n  line-height: 1.8em;\n  font-family: var(--font);\n  color: var(--dark-text);\n  transition: background-color 0.3s, box-shadow 0.3s;\n}\n.cloud-container ul li a.size1 {\n  color: var(--light-text);\n  padding: 6px;\n  border-radius: 0.5rem;\n}\n.cloud-container ul li a.size1:hover, .cloud-container ul li a.size1:focus {\n  background-color: var(--primary);\n  box-shadow: var(--primary-box-shadow);\n  color: var(--white);\n}\n.cloud-container ul li a.size2 {\n  font-size: 1.25rem;\n  padding: 12px;\n  border-radius: 0.5rem;\n}\n.cloud-container ul li a.size2:hover, .cloud-container ul li a.size2:focus {\n  background-color: var(--danger);\n  box-shadow: var(--danger-box-shadow);\n  color: var(--white);\n}\n.cloud-container ul li a.size3 {\n  font-size: 1.5rem;\n  padding: 18px;\n  border-radius: 0.75rem;\n  color: var(--dark-text-light-18);\n}\n.cloud-container ul li a.size3:hover, .cloud-container ul li a.size3:focus {\n  background-color: var(--yellow);\n  box-shadow: var(--yellow-box-shadow);\n  color: var(--white);\n}\n.cloud-container ul li a.size4 {\n  padding: 10px 16px;\n  font-size: 1.75rem;\n  border-radius: 0.75rem;\n}\n.cloud-container ul li a.size4:hover, .cloud-container ul li a.size4:focus {\n  background-color: var(--green);\n  box-shadow: var(--green-box-shadow);\n  color: var(--white);\n}\n.cloud-container ul li a.size5 {\n  padding: 8px 14px;\n  font-size: 2rem;\n  border-radius: 0.75rem;\n}\n.cloud-container ul li a.size5:hover, .cloud-container ul li a.size5:focus {\n  background-color: var(--info);\n  box-shadow: var(--info-box-shadow);\n  color: var(--white);\n}\n.cloud-container ul li a.size6 {\n  padding: 24px;\n  font-size: 2.5rem;\n  border-radius: 0.75rem;\n}\n.cloud-container ul li a.size6:hover, .cloud-container ul li a.size6:focus {\n  background-color: var(--purple);\n  box-shadow: var(--purple-box-shadow);\n  color: var(--white);\n}\n\n.is-dark .cloud-container ul li a {\n  color: var(--white);\n}\n.is-dark .cloud-container ul li a.size-1 {\n  color: var(--light-text) !important;\n}\n.is-dark .cloud-container ul li a.size-3 {\n  color: var(--dark-text-light-25) !important;\n}\n.is-dark .cloud-container ul li a.size-4 {\n  color: var(--dark-dark-text) !important;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n  .cloud-container {\n    width: 400px !important;\n    height: 495px !important;\n  }\n  .cloud-container .cloud {\n    width: 400px !important;\n  }\n  .cloud-container .cloud-element {\n    font-size: 1.5em !important;\n  }\n  .cloud-container .cloud-element.size-2 {\n    font-size: 2rem !important;\n  }\n  .cloud-container .cloud-element.size-3 {\n    font-size: 3rem !important;\n  }\n}";
const _sfc_main$5 = {};
const _hoisted_1$5 = { class: "cloud-container" };
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<ul><li><a class="size1" href="#">adobe</a></li><li><a class="size2" href="#">animation</a></li><li><a class="size3" href="#">arts</a></li><li><a class="size4" href="#">bizarre</a></li><li><a class="size5" href="#">blogs</a></li><li><a class="size6" href="#">books</a></li><li><a class="size1" href="#">comics</a></li><li><a class="size2" href="#">computer-graphics</a></li><li><a class="size3" href="#">cooking</a></li><li><a class="size4" href="#">cyberculture</a></li><li><a class="size5" href="#">design</a></li><li><a class="size6" href="#">drawing</a></li><li><a class="size1" href="#">fine-arts</a></li><li><a class="size2" href="#">graphic-design</a></li><li><a class="size3" href="#">humor</a></li><li><a class="size4" href="#">illustration</a></li><li><a class="size5" href="#">indesign</a></li><li><a class="size6" href="#">internet</a></li><li><a class="size1" href="#">movies</a></li><li><a class="size2" href="#">mac-os</a></li><li><a class="size3" href="#">multimedia</a></li><li><a class="size4" href="#">online-games</a></li><li><a class="size5" href="#">photography</a></li><li><a class="size6" href="#">web-design</a></li><li><a class="size1" href="#">css</a></li></ul>', 1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, _hoisted_3$4);
}
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
const themeColors$1 = useThemeColors();
const reputationChartOptions = {
  series: [65],
  chart: {
    height: 140,
    type: "radialBar",
    offsetX: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors$1.primary],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "75%"
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: "12px",
          fontWeight: 400,
          offsetY: 5,
          color: themeColors$1.lightText
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          color: themeColors$1.primary,
          fontSize: "16px",
          offsetY: 5
        }
      }
    }
  },
  labels: ["Progress"]
};
const themeColors = useThemeColors();
const influenceChartOptions = {
  series: [65],
  chart: {
    height: 170,
    type: "radialBar",
    offsetX: -15,
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.yellow, themeColors.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          fontWeight: "600",
          color: themeColors.lightText,
          show: false
        },
        value: {
          offsetY: 5,
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500",
          color: void 0,
          formatter: asPercent
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ["(30 days)"]
};
const _hoisted_1$4 = {
  id: "overview-tab",
  class: "tab-content is-active"
};
const _hoisted_2$4 = { class: "body-title" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Instagram Stats", -1);
const _hoisted_4$3 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_5$2 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_6$2 = { class: "card-head" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("h4", null, "Content Posts (30 days)", -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fab fa-instagram"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "112")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-down" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" -0.4%")
    ]),
    /* @__PURE__ */ createTextVNode(" less than usual. ")
  ])
], -1);
const _hoisted_11$1 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_12$1 = { class: "card-head" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Followers (30 days)", -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-users"
}, null, -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "14.3k")
], -1);
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-up" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" 22.7%")
    ]),
    /* @__PURE__ */ createTextVNode(" follower growth. ")
  ])
], -1);
const _hoisted_17$1 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_18$1 = { class: "card-head" };
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Following (30 days)", -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-user-plus"
}, null, -1);
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "44")
], -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-up" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" 1.4%")
    ]),
    /* @__PURE__ */ createTextVNode(" following growth. ")
  ])
], -1);
const _hoisted_23$1 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_24$1 = { class: "card-head" };
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Likes (30 days)", -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-heart"
}, null, -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "140.8K")
], -1);
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-up" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" 3.6%")
    ]),
    /* @__PURE__ */ createTextVNode(" likes growth. ")
  ])
], -1);
const _hoisted_29$1 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_30$1 = { class: "card-head" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h4", null, "Comments (30 days)", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-comment"
}, null, -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "9.3K")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-down" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" -1.1%")
    ]),
    /* @__PURE__ */ createTextVNode(" less than usual. ")
  ])
], -1);
const _hoisted_35 = { class: "column is-4 is-half-tablet-p" };
const _hoisted_36 = { class: "card-head" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h4", null, "Profile Views (30 days)", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-glasses"
}, null, -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "card-metric" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "12.1k")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "card-foot is-up" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:arrow-right"
      }),
      /* @__PURE__ */ createTextVNode(" 22.7%")
    ]),
    /* @__PURE__ */ createTextVNode(" more profile views. ")
  ])
], -1);
const _hoisted_41 = { class: "column is-6 is-full-tablet-p" };
const _hoisted_42 = { class: "stat-widget flex-stat-widget is-straight" };
const _hoisted_43 = { class: "chart-media" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Reputation Growth"),
  /* @__PURE__ */ createBaseVNode("span", { class: "is-dark-primary" }, "+ 2,654"),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria. ")
], -1);
const _hoisted_45 = { class: "chart-container" };
const _hoisted_46 = { class: "stat-widget grouped-stat-widget is-straight" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Social Points")
], -1);
const _hoisted_48 = { class: "chart-group" };
const _hoisted_49 = { class: "group" };
const _hoisted_50 = { class: "group-content" };
const _hoisted_51 = { class: "chart-container" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ 234", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, "Creativity", -1);
const _hoisted_54 = { class: "group" };
const _hoisted_55 = { class: "group-content" };
const _hoisted_56 = { class: "chart-container" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+37%", -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", null, "Engagement", -1);
const _hoisted_59 = { class: "group" };
const _hoisted_60 = { class: "group-content" };
const _hoisted_61 = { class: "chart-container" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+82%", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("p", null, "Popularity", -1);
const _hoisted_64 = { class: "column is-6 h-hidden-mobile h-hidden-tablet-p" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Recent Hashtags")
], -1);
const _hoisted_66 = { class: "column is-12 is-full-tablet-p" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$b;
      const _component_VIconBox = _sfc_main$c;
      const _component_OverviewCard = _sfc_main$8;
      const _component_FlexStatWidget = _sfc_main$d;
      const _component_CloudContainer = __unplugin_components_5;
      const _component_GroupedStatWidget = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$3,
          createVNode(_component_VField, { class: "is-minimal-select" }, {
            default: withCtx(() => [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_Multiselect, {
                    id: "instagram-stats-select",
                    modelValue: unref(valueSingle),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                    options: unref(optionsSingle),
                    placeholder: "Select an option",
                    "max-height": 145
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4$3, [
          createBaseVNode("div", _hoisted_5$2, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6$2, [
                  _hoisted_7$2,
                  createVNode(_component_VIconBox, {
                    color: "purple",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_8$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_9$1,
                _hoisted_10
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_11$1, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_12$1, [
                  _hoisted_13$1,
                  createVNode(_component_VIconBox, {
                    color: "info",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_14$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_15$1,
                _hoisted_16$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_17$1, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_18$1, [
                  _hoisted_19$1,
                  createVNode(_component_VIconBox, {
                    color: "yellow",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_20$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_21$1,
                _hoisted_22$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_23$1, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_24$1, [
                  _hoisted_25$1,
                  createVNode(_component_VIconBox, {
                    color: "red",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_26$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_27$1,
                _hoisted_28$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_29$1, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_30$1, [
                  _hoisted_31,
                  createVNode(_component_VIconBox, {
                    color: "yellow",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_32
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_33,
                _hoisted_34
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_35, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_36, [
                  _hoisted_37,
                  createVNode(_component_VIconBox, {
                    color: "success",
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_38
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_39,
                _hoisted_40
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_41, [
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                _hoisted_44,
                createBaseVNode("div", _hoisted_45, [
                  createVNode(unref(ApexChart), {
                    id: "flex-stat-circle",
                    height: unref(reputationChartOptions).chart.height,
                    type: unref(reputationChartOptions).chart.type,
                    series: unref(reputationChartOptions).series,
                    options: unref(reputationChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_46, [
              _hoisted_47,
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("div", _hoisted_49, [
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("div", _hoisted_51, [
                      createVNode(unref(ApexChart), {
                        id: "widget-group-radial-1",
                        height: unref(creativityRadialOptions).chart.height,
                        type: unref(creativityRadialOptions).chart.type,
                        series: unref(creativityRadialOptions).series,
                        options: unref(creativityRadialOptions)
                      }, null, 8, ["height", "type", "series", "options"])
                    ]),
                    _hoisted_52,
                    _hoisted_53
                  ])
                ]),
                createBaseVNode("div", _hoisted_54, [
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(unref(ApexChart), {
                        id: "widget-group-radial-2",
                        height: unref(engagmentRadialOptions).chart.height,
                        type: unref(engagmentRadialOptions).chart.type,
                        series: unref(engagmentRadialOptions).series,
                        options: unref(engagmentRadialOptions)
                      }, null, 8, ["height", "type", "series", "options"])
                    ]),
                    _hoisted_57,
                    _hoisted_58
                  ])
                ]),
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("div", _hoisted_61, [
                      createVNode(unref(ApexChart), {
                        id: "widget-group-radial-3",
                        height: unref(popularityRadialOptions).chart.height,
                        type: unref(popularityRadialOptions).chart.type,
                        series: unref(popularityRadialOptions).series,
                        options: unref(popularityRadialOptions)
                      }, null, 8, ["height", "type", "series", "options"])
                    ]),
                    _hoisted_62,
                    _hoisted_63
                  ])
                ])
              ])
            ]),
            createVNode(_component_FlexStatWidget, {
              title: "Influence Growth",
              straight: ""
            }, {
              default: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "flex-stat-radial",
                  height: unref(influenceChartOptions).chart.height,
                  type: unref(influenceChartOptions).chart.type,
                  series: unref(influenceChartOptions).series,
                  options: unref(influenceChartOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_64, [
            createVNode(_component_OverviewCard, null, {
              default: withCtx(() => [
                _hoisted_65,
                createVNode(_component_CloudContainer)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_66, [
            createVNode(_component_GroupedStatWidget, {
              title: "Additional Stats",
              values: ["264", "1,203", "3,078"],
              labels: ["New Deals", "Proposals", "Closed Deals"]
            }, {
              chart1: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-1",
                  height: unref(widgetRadialGroup1Options).chart.height,
                  type: unref(widgetRadialGroup1Options).chart.type,
                  series: unref(widgetRadialGroup1Options).series,
                  options: unref(widgetRadialGroup1Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart2: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-2",
                  height: unref(widgetRadialGroup2Options).chart.height,
                  type: unref(widgetRadialGroup2Options).chart.type,
                  series: unref(widgetRadialGroup2Options).series,
                  options: unref(widgetRadialGroup2Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              chart3: withCtx(() => [
                createVNode(unref(ApexChart), {
                  id: "group-radial-3",
                  height: unref(widgetRadialGroup3Options).chart.height,
                  type: unref(widgetRadialGroup3Options).chart.type,
                  series: unref(widgetRadialGroup3Options).series,
                  options: unref(widgetRadialGroup3Options)
                }, null, 8, ["height", "type", "series", "options"])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _sfc_main$3 = {};
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-whiteboard-alt-2"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Reports"),
    /* @__PURE__ */ createBaseVNode("span", null, "View detailed reports")
  ])
], -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
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
    /* @__PURE__ */ createBaseVNode("span", null, "Edit this profile")
  ])
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-bubble"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Message"),
    /* @__PURE__ */ createBaseVNode("span", null, "Send a direct message")
  ])
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-gift-alt-1"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Gift"),
    /* @__PURE__ */ createBaseVNode("span", null, "send a gift")
  ])
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cog"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Settings"),
    /* @__PURE__ */ createBaseVNode("span", null, "Configure settings")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = _sfc_main$f;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    class: "end-action",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3,
      _hoisted_3$2,
      _hoisted_4$2,
      _hoisted_5$1,
      _hoisted_6$1,
      _hoisted_7$1
    ]),
    _: 1
  });
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
var DashboardHeaderWrapper_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "dashboard-header-wrapper" };
const _hoisted_2$2 = { class: "dashboard-header" };
const _hoisted_3$1 = { class: "avatar-container" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("button", { class: "button is-circle" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:plus"
    })
  ])
], -1);
const _hoisted_5 = { class: "header-meta" };
const _hoisted_6 = { class: "username-wrap" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "username" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "sweet_candy13"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-star"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Clarissa Geller")
], -1);
const _hoisted_8 = { class: "badges" };
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="meta-stats"><div class="meta-stat"><span>1247</span><span>Posts</span></div><div class="meta-stat"><span>38.3K</span><span>Followers</span></div><div class="meta-stat"><span>329</span><span>Following</span></div></div><div class="meta-description"><p> Artist, musician, songwriter, influencer, these are the many names people give me. But for you Iam simply Clarissa. *Forever with all my friends* // Latest video can be found here youtu.be/8Tcee5Cyz </p></div>', 2);
const _hoisted_11 = { class: "meta-achievements" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-achievement is-danger" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-fire"
  })
], -1);
const _hoisted_13 = { class: "v-popover-content is-text" };
const _hoisted_14 = { class: "popover-head" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-fire"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "On Fire", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "popover-body" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-achievement is-primary" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-medal"
  })
], -1);
const _hoisted_19 = { class: "v-popover-content is-text" };
const _hoisted_20 = { class: "popover-head" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-medal"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Post Veteran", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "popover-body" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-achievement is-yellow" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-trophy"
  })
], -1);
const _hoisted_25 = { class: "v-popover-content is-text" };
const _hoisted_26 = { class: "popover-head" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-medal"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Social Champion", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "popover-body" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
], -1);
const _hoisted_30 = { class: "end" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$g;
      const _component_VIconBox = _sfc_main$c;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_InfluencerDropdown = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("img", {
              src: "https://vuero.cssninja.io/demo/photos/faces/girl1.jpg",
              alt: "",
              onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
            }, null, 32),
            _hoisted_4$1
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_VTag, {
                  rounded: "",
                  color: "info",
                  label: "Music"
                }),
                createVNode(_component_VTag, {
                  rounded: "",
                  color: "primary",
                  label: "Lifestyle"
                })
              ])
            ]),
            _hoisted_9,
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_Tippy, null, {
                content: withCtx(() => [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(_component_VIconBox, {
                        size: "small",
                        color: "danger"
                      }, {
                        default: withCtx(() => [
                          _hoisted_15
                        ]),
                        _: 1
                      }),
                      _hoisted_16
                    ]),
                    _hoisted_17
                  ])
                ]),
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              }),
              createVNode(_component_Tippy, null, {
                content: withCtx(() => [
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(_component_VIconBox, {
                        size: "small",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          _hoisted_21
                        ]),
                        _: 1
                      }),
                      _hoisted_22
                    ]),
                    _hoisted_23
                  ])
                ]),
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              }),
              createVNode(_component_Tippy, null, {
                content: withCtx(() => [
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VIconBox, {
                        size: "small",
                        color: "yellow"
                      }, {
                        default: withCtx(() => [
                          _hoisted_27
                        ]),
                        _: 1
                      }),
                      _hoisted_28
                    ]),
                    _hoisted_29
                  ])
                ]),
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_30, [
            createVNode(_component_InfluencerDropdown)
          ])
        ])
      ]);
    };
  }
});
var LifestyleDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "lifestyle-dashboard lifestyle-dashboard-v1" };
const _hoisted_2$1 = { class: "tabs-wrapper" };
const _hoisted_3 = { class: "tabs-inner" };
const _hoisted_4 = { class: "tabs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("overview");
    return (_ctx, _cache) => {
      const _component_DashboardHeaderWrapper = _sfc_main$2;
      const _component_LifestyleOverviewTab = _sfc_main$4;
      const _component_LifestyleContentTab = _sfc_main$6;
      const _component_LifestyleBrandsTab = __unplugin_components_3;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_DashboardHeaderWrapper),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "overview" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => activeTab.value = "overview", ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "overview")
                  }, "Overview", 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "content" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => activeTab.value = "content", ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "content")
                  }, "Content", 32)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "brands" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    tabindex: "0",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeTab.value = "brands", ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "brands")
                  }, "Brands", 32)
                ], 2)
              ])
            ])
          ]),
          activeTab.value === "overview" ? (openBlock(), createBlock(_component_LifestyleOverviewTab, { key: 0 })) : activeTab.value === "content" ? (openBlock(), createBlock(_component_LifestyleContentTab, { key: 1 })) : activeTab.value === "brands" ? (openBlock(), createBlock(_component_LifestyleBrandsTab, { key: 2 })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "lifestyle-dashboard-bg" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Influencer Dashboard");
    useHead({
      title: "Influencer Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_LifestyleDashboardV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(Teleport, { to: "[data-teleport-bg]" }, [
          _hoisted_2
        ])),
        createVNode(_component_LifestyleDashboardV1)
      ]);
    };
  }
});
export { _sfc_main as default };
