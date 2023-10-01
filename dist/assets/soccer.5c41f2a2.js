import { _ as _export_sfc, b as _sfc_main$2 } from "./index.e178843f.js";
import { z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, ae as createStaticVNode, x as createTextVNode, d as defineComponent, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
var SoccerDashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "soccer-dashboard" };
const _hoisted_2 = { class: "soccer-dashboard-inner" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "live-match" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="head"><h3 class="title is-5">UEFA Champions League</h3><div class="league"><div class="left"><span>Group C</span><span>Match 3 of 6</span></div><div class="right"><div class="live-block"><i class="iconify" data-icon="feather:video"></i><span>Live Now</span></div></div></div></div><div class="match"><div class="left"><span class="team-name">Barcelona</span></div><div class="center"><span class="score">4</span><span class="separator">:</span><span class="score">0</span></div><div class="right"><span class="team-name">PSG</span></div></div>', 2);
const _hoisted_8 = { class: "action" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Watch Now");
const _hoisted_10 = { class: "leagues" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5" }, "Available leagues")
], -1);
const _hoisted_12 = { class: "leagues-list" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "league-name" }, "Ligue 1"),
  /* @__PURE__ */ createBaseVNode("span", { class: "league-country" }, "France")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "8 matches")
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "league-name" }, "La Liga"),
  /* @__PURE__ */ createBaseVNode("span", { class: "league-country" }, "Spain")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "8 matches")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "league-name" }, "Liga"),
  /* @__PURE__ */ createBaseVNode("span", { class: "league-country" }, "Portugal")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "8 matches")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "league-name" }, "Bundesliga"),
  /* @__PURE__ */ createBaseVNode("span", { class: "league-country" }, "Germany")
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "8 matches")
], -1);
const _hoisted_21 = { class: "column is-8" };
const _hoisted_22 = { class: "dashboard-cta" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "dashboard-cta-img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    alt: "",
    src: "https://vuero.cssninja.io/demo/photos/soccer/player.png"
  })
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("h2", { class: "dashboard-cta-title" }, "Win awesome prizes in our contest", -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", { class: "dashboard-cta-text" }, " Predict who will win and how a match will end and get a chance to win incredible cash prizes. ", -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Learn More");
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="matches-card"><div class="matches-card-header"><ul class="header-nav"><li class="nav-item"><a class="nav-link is-active">All</a></li><li class="nav-item"><a class="nav-link">Live</a></li><li class="nav-item"><a class="nav-link">Finished</a></li><li class="nav-item"><a class="nav-link">Scheduled</a></li></ul></div><div class="matches-card-body"><table class="table"><thead><tr><th>Time</th><th>Match</th><th>Stadium</th><th>Details</th></tr></thead><tbody><tr><td><div class="match-time-row"><span class="match-time">-- : --</span><span class="tag is-live"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Live </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>Barcelona</span></div><p class="score-result score-result-vertical"><span class="score-goals">4</span><span class="score-separator">:</span><span class="score-goals">0</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Camp Nou</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr><tr><td><div class="match-time-row"><span class="match-time">10:30</span><span class="tag"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Scheduled </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>Real Madrid</span></div><p class="score-result score-result-vertical"><span class="score-goals">1</span><span class="score-separator">:</span><span class="score-goals">0</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Bernabeu</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr><tr><td><div class="match-time-row"><span class="match-time">12:00</span><span class="tag"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Scheduled </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>Arsenal</span></div><p class="score__result score__result--vertical score__result--not-started"><span class="score-goals">-</span><span class="score-separator">:</span><span class="score-goals">-</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Arsenal</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr><tr><td><div class="match-time-row"><span class="match-time">14:00</span><span class="tag"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Scheduled </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>Everton</span></div><p class="score__result score__result--vertical score__result--not-started"><span class="score-goals">-</span><span class="score-separator">:</span><span class="score-goals">-</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Goodison Park</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr><tr><td><div class="match-time-row"><span class="match-time">16:00</span><span class="tag"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Scheduled </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>Valladolid</span></div><p class="score__result score__result--vertical score__result--not-started"><span class="score-goals">-</span><span class="score-separator">:</span><span class="score-goals">-</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Jos\xE9-Zorrilla</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr><tr><td><div class="match-time-row"><span class="match-time">18:00</span><span class="tag"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"></circle></svg> Scheduled </span></div></td><td class="score-cell"><div class="score score-vertical"><div class="score-team score-team-vertical"><span>PSG</span></div><p class="score__result score__result--vertical score__result--not-started"><span class="score-goals">-</span><span class="score-separator">:</span><span class="score-goals">-</span></p><div class="score-team score-team-vertical"></div></div></td><td><span class="stadium">Parc des Princes</span></td><td><a class="table-action"><i class="iconify" data-icon="feather:align-right"></i></a></td></tr></tbody></table></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_VButton = _sfc_main$2;
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VButton, {
                color: "primary",
                fullwidth: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            _hoisted_11,
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-dashboards-soccer" },
                class: "league-item"
              }, {
                default: withCtx(() => [
                  _hoisted_13,
                  _hoisted_14
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-dashboards-soccer" },
                class: "league-item"
              }, {
                default: withCtx(() => [
                  _hoisted_15,
                  _hoisted_16
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-dashboards-soccer" },
                class: "league-item"
              }, {
                default: withCtx(() => [
                  _hoisted_17,
                  _hoisted_18
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-dashboards-soccer" },
                class: "league-item"
              }, {
                default: withCtx(() => [
                  _hoisted_19,
                  _hoisted_20
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            _hoisted_23,
            _hoisted_24,
            _hoisted_25,
            createVNode(_component_VButton, {
              color: "light",
              bold: "",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_26
              ]),
              _: 1
            })
          ]),
          _hoisted_27
        ])
      ])
    ])
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Soccer");
    useHead({
      title: "Soccer Dashboard - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_SoccerDashboard = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_SoccerDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
