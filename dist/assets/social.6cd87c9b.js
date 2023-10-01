import { _ as _sfc_main$4 } from "./VBlock.64333f78.js";
import { _ as _sfc_main$3 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$2 } from "./VIcon.de064b10.js";
import { d as defineComponent, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, h as unref, g as normalizeClass, a2 as withKeys, W as withModifiers, s as createVNode, y as createCommentVNode, w as withCtx, p as createBlock, r as renderSlot, F as Fragment, X as renderList, a1 as useHead, z as resolveComponent } from "./vendor.6548d360.js";
import { _ as _sfc_main$5 } from "./VBreadcrumb.b45a5a1c.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
const _hoisted_1$1 = { class: "card v-card" };
const _hoisted_2$1 = { class: "card-header" };
const _hoisted_3$1 = { class: "card-header-title" };
const _hoisted_4$1 = ["aria-label"];
const _hoisted_5$1 = { class: "card-content" };
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = ["onKeydown", "onClick"];
const _hoisted_8$1 = { class: "card-footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    network: null,
    hashtags: { default: () => [] },
    avatar: { default: void 0 },
    username: { default: void 0 },
    shareLabel: { default: "Share" },
    likeLabel: { default: "Like" }
  },
  emits: ["iconClick", "share", "like", "hashtagClick"],
  setup(__props, { emit }) {
    const props = __props;
    const icon = computed(() => {
      switch (props.network) {
        case "facebook":
          return "fa-brands:facebook-f";
        case "twitter":
          return "fa-brands:twitter";
        case "linkedin":
          return "fa-brands:linkedin-in";
        case "tumblr":
          return "fa-brands:tumblr";
        case "github":
          return "fa-brands:github-alt";
        case "dribbble":
          return "fa-brands:dribbble";
        case "google-plus":
          return "fa-brands:google-plus-g";
        case "youtube":
          return "fa-brands:youtube";
        case "reddit":
          return "fa-brands:reddit-alien";
        case "invision":
          return "fa-brands:invision";
        case "amazon":
          return "fa-brands:amazon";
        case "instagram":
          return "fa-brands:instagram";
      }
      return "";
    });
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("header", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, toDisplayString(props.title), 1),
          unref(icon) ? (openBlock(), createElementBlock("a", {
            key: 0,
            class: normalizeClass(["card-header-icon", [props.network && `text-${props.network}`]]),
            "aria-label": `View on ${props.network}`,
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("iconClick"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("iconClick"))
          }, [
            createVNode(_component_VIcon, { icon: unref(icon) }, null, 8, ["icon"])
          ], 42, _hoisted_4$1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          createVNode(_component_VBlock, {
            title: props.username,
            class: "pb-3"
          }, {
            icon: withCtx(() => [
              props.avatar ? (openBlock(), createBlock(_component_VAvatar, {
                key: 0,
                size: "medium",
                picture: props.avatar,
                squared: ""
              }, null, 8, ["picture"])) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default"),
              props.hashtags.length ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.hashtags, (hashtag, index) => {
                  return openBlock(), createElementBlock("a", {
                    key: index,
                    class: normalizeClass(["px-1", [__props.network && `text-${__props.network}`]]),
                    tabindex: "0",
                    onKeydown: withKeys(withModifiers(($event) => emit("hashtagClick", hashtag), ["prevent"]), ["space"]),
                    onClick: ($event) => emit("hashtagClick", hashtag)
                  }, toDisplayString(hashtag), 43, _hoisted_7$1);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["title"])
        ]),
        createBaseVNode("footer", _hoisted_8$1, [
          props.shareLabel ? (openBlock(), createElementBlock("a", {
            key: 0,
            class: normalizeClass([[__props.network && `hover-bg-${__props.network}`], "card-footer-item"]),
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("share"), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("share"))
          }, toDisplayString(props.shareLabel), 35)) : createCommentVNode("", true),
          props.likeLabel ? (openBlock(), createElementBlock("a", {
            key: 1,
            class: normalizeClass([[__props.network && `hover-text-${__props.network}`], "card-footer-item"]),
            tabindex: "0",
            onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => emit("like"), ["prevent"]), ["space"])),
            onClick: _cache[5] || (_cache[5] = ($event) => emit("like"))
          }, toDisplayString(props.likeLabel), 35)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", -1);
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", -1);
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", -1);
const _hoisted_10 = { class: "column is-12 mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VCardSocial");
    useHead({
      title: "VCardSocial - Components - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$5;
      const _component_VCardSocialDocumentation = resolveComponent("VCardSocialDocumentation");
      const _component_VCardSocial = _sfc_main$1;
      const _component_VCardSocialPropsDocumentation = resolveComponent("VCardSocialPropsDocumentation");
      const _component_VCardSocialSlotsDocumentation = resolveComponent("VCardSocialSlotsDocumentation");
      const _component_VCardSocialEventsDocumentation = resolveComponent("VCardSocialEventsDocumentation");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "Vuero",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "Components",
              to: { name: "components" }
            },
            {
              label: "Cards"
            },
            {
              label: "VCardSocial",
              to: { name: "components-card-social" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VCardSocialDocumentation)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VCardSocial, {
              title: "Featured Tweet",
              network: "twitter",
              avatar: "https://vuero.cssninja.io/demo/avatars/19.jpg",
              username: "@gretak",
              hashtags: ["#bulmaio", "#css", "#responsive"],
              "share-label": "Retweet",
              "like-label": "Save"
            }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VCardSocial, {
              title: "Featured Story",
              network: "instagram",
              avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg",
              username: "Mary L.",
              hashtags: ["#bulmaio", "#css", "#responsive"]
            }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VCardSocial, {
              title: "Featured Post",
              network: "facebook",
              avatar: "https://vuero.cssninja.io/demo/avatars/36.jpg",
              username: "Benoit L.",
              hashtags: ["#bulmaio", "#css", "#responsive"]
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_VCardSocialPropsDocumentation),
            createVNode(_component_VCardSocialSlotsDocumentation),
            createVNode(_component_VCardSocialEventsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
