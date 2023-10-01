import { _ as __unplugin_components_4 } from "./DocumentationDemoCard.41e9dc38.js";
import { _ as _sfc_main$3 } from "./VFlex.c8e24668.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { d as defineComponent, aE as useClipboard, aF as useWindowScroll, k as ref, e as computed, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, w as withCtx, g as normalizeClass, h as unref, a3 as withDirectives, a4 as vModelText, F as Fragment, X as renderList, a2 as withKeys, W as withModifiers, t as toDisplayString, T as Transition, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
const iconifyFeather = [
  { name: "activity", dataIcon: "feather:activity" },
  { name: "airplay", dataIcon: "feather:airplay" },
  { name: "alert-circle", dataIcon: "feather:alert-circle" },
  { name: "alert-octagon", dataIcon: "feather:alert-octagon" },
  { name: "alert-triangle", dataIcon: "feather:alert-triangle" },
  { name: "align-center", dataIcon: "feather:align-center" },
  { name: "align-justify", dataIcon: "feather:align-justify" },
  { name: "align-left", dataIcon: "feather:align-left" },
  { name: "align-right", dataIcon: "feather:align-right" },
  { name: "anchor", dataIcon: "feather:anchor" },
  { name: "aperture", dataIcon: "feather:aperture" },
  { name: "archive", dataIcon: "feather:archive" },
  { name: "arrow-down-circle", dataIcon: "feather:arrow-down-circle" },
  { name: "arrow-down-left", dataIcon: "feather:arrow-down-left" },
  { name: "arrow-down-right", dataIcon: "feather:arrow-down-right" },
  {
    name: "arrow-down",
    dataIcon: "feather:arrow-down"
  },
  { name: "arrow-left-circle", dataIcon: "feather:arrow-left-circle" },
  {
    name: "arrow-left",
    dataIcon: "feather:arrow-left"
  },
  { name: "arrow-right-circle", dataIcon: "feather:arrow-right-circle" },
  {
    name: "arrow-right",
    dataIcon: "feather:arrow-right"
  },
  { name: "arrow-up-circle", dataIcon: "feather:arrow-up-circle" },
  { name: "arrow-up-left", dataIcon: "feather:arrow-up-left" },
  { name: "arrow-up-right", dataIcon: "feather:arrow-up-right" },
  { name: "arrow-up", dataIcon: "feather:arrow-up" },
  { name: "at-sign", dataIcon: "feather:at-sign" },
  { name: "award", dataIcon: "feather:award" },
  { name: "bar-chart-2", dataIcon: "feather:bar-chart-2" },
  { name: "bar-chart", dataIcon: "feather:bar-chart" },
  { name: "battery-charging", dataIcon: "feather:battery-charging" },
  { name: "battery", dataIcon: "feather:battery" },
  { name: "bell-off", dataIcon: "feather:bell-off" },
  { name: "bell", dataIcon: "feather:bell" },
  { name: "bluetooth", dataIcon: "feather:bluetooth" },
  { name: "bold", dataIcon: "feather:bold" },
  { name: "book-open", dataIcon: "feather:book-open" },
  { name: "book", dataIcon: "feather:book" },
  { name: "bookmark", dataIcon: "feather:bookmark" },
  { name: "box", dataIcon: "feather:box" },
  { name: "briefcase", dataIcon: "feather:briefcase" },
  { name: "calendar", dataIcon: "feather:calendar" },
  { name: "camera-off", dataIcon: "feather:camera-off" },
  { name: "camera", dataIcon: "feather:camera" },
  { name: "cast", dataIcon: "feather:cast" },
  { name: "check-circle", dataIcon: "feather:check-circle" },
  {
    name: "check-square",
    dataIcon: "feather:check-square"
  },
  { name: "check", dataIcon: "feather:check" },
  { name: "chevron-down", dataIcon: "feather:chevron-down" },
  { name: "chevron-left", dataIcon: "feather:chevron-left" },
  { name: "chevron-right", dataIcon: "feather:chevron-right" },
  { name: "chevron-up", dataIcon: "feather:chevron-up" },
  { name: "chevrons-down", dataIcon: "feather:chevrons-down" },
  { name: "chevrons-left", dataIcon: "feather:chevrons-left" },
  { name: "chevrons-right", dataIcon: "feather:chevrons-right" },
  { name: "chevrons-up", dataIcon: "feather:chevrons-up" },
  { name: "chrome", dataIcon: "feather:chrome" },
  { name: "circle", dataIcon: "feather:circle" },
  { name: "clipboard", dataIcon: "feather:clipboard" },
  { name: "clock", dataIcon: "feather:clock" },
  { name: "cloud-drizzle", dataIcon: "feather:cloud-drizzle" },
  { name: "cloud-lightning", dataIcon: "feather:cloud-lightning" },
  { name: "cloud-off", dataIcon: "feather:cloud-off" },
  { name: "cloud-rain", dataIcon: "feather:cloud-rain" },
  { name: "cloud-snow", dataIcon: "feather:cloud-snow" },
  { name: "code", dataIcon: "feather:code" },
  { name: "codepen", dataIcon: "feather:codepen" },
  { name: "codesandbox", dataIcon: "feather:codesandbox" },
  { name: "coffee", dataIcon: "feather:coffee" },
  { name: "columns", dataIcon: "feather:columns" },
  { name: "command", dataIcon: "feather:command" },
  { name: "compass", dataIcon: "feather:compass" },
  { name: "copy", dataIcon: "feather:copy" },
  { name: "corner-down-left", dataIcon: "feather:corner-down-left" },
  { name: "corner-down-right", dataIcon: "feather:corner-down-right" },
  { name: "corner-left-down", dataIcon: "feather:corner-left-down" },
  { name: "corner-left-up", dataIcon: "feather:corner-left-up" },
  { name: "corner-right-down", dataIcon: "feather:corner-right-down" },
  {
    name: "corner-right-up",
    dataIcon: "feather:corner-right-up"
  },
  {
    name: "corner-up-left",
    dataIcon: "feather:corner-up-left"
  },
  {
    name: "corner-up-right",
    dataIcon: "feather:corner-up-right"
  },
  {
    name: "cpu",
    dataIcon: "feather:cpu"
  },
  { name: "credit-card", dataIcon: "feather:credit-card" },
  { name: "crop", dataIcon: "feather:crop" },
  { name: "crosshair", dataIcon: "feather:crosshair" },
  { name: "database", dataIcon: "feather:database" },
  { name: "delete", dataIcon: "feather:delete" },
  { name: "disc", dataIcon: "feather:disc" },
  { name: "dollar-sign", dataIcon: "feather:dollar-sign" },
  { name: "download-cloud", dataIcon: "feather:download-cloud" },
  { name: "download", dataIcon: "feather:download" },
  { name: "droplet", dataIcon: "feather:droplet" },
  { name: "edit-2", dataIcon: "feather:edit-2" },
  { name: "edit-3", dataIcon: "feather:edit-3" },
  { name: "edit", dataIcon: "feather:edit" },
  { name: "external-link", dataIcon: "feather:external-link" },
  { name: "eye-off", dataIcon: "feather:eye-off" },
  { name: "eye", dataIcon: "feather:eye" },
  { name: "facebook", dataIcon: "feather:facebook" },
  { name: "fast-forward", dataIcon: "feather:fast-forward" },
  { name: "feather", dataIcon: "feather:feather" },
  { name: "figma", dataIcon: "feather:figma" },
  { name: "file-minus", dataIcon: "feather:file-minus" },
  {
    name: "file-plus",
    dataIcon: "feather:file-plus"
  },
  { name: "file-text", dataIcon: "feather:file-text" },
  { name: "file", dataIcon: "feather:file" },
  { name: "film", dataIcon: "feather:film" },
  { name: "filter", dataIcon: "feather:filter" },
  { name: "flag", dataIcon: "feather:flag" },
  { name: "folder-minus", dataIcon: "feather:folder-minus" },
  { name: "folder-plus", dataIcon: "feather:folder-plus" },
  { name: "folder", dataIcon: "feather:folder" },
  { name: "framer", dataIcon: "feather:framer" },
  { name: "frown", dataIcon: "feather:frown" },
  { name: "gift", dataIcon: "feather:gift" },
  {
    name: "git=branch",
    dataIcon: "feather:git-branch"
  },
  { name: "git-commit", dataIcon: "feather:git-commit" },
  { name: "git-merge", dataIcon: "feather:git-merge" },
  { name: "git-pull-request", dataIcon: "feather:git-pull-request" },
  {
    name: "github",
    dataIcon: "feather:github"
  },
  { name: "gitlab", dataIcon: "feather:gitlab" },
  { name: "globe", dataIcon: "feather:globe" },
  { name: "grid", dataIcon: "feather:grid" },
  {
    name: "hard-drive",
    dataIcon: "feather:hard-drive"
  },
  { name: "hash", dataIcon: "feather:hash" },
  { name: "headphones", dataIcon: "feather:headphones" },
  { name: "heart", dataIcon: "feather:heart" },
  { name: "help-circle", dataIcon: "feather:help-circle" },
  { name: "hexagon", dataIcon: "feather:hexagon" },
  { name: "home", dataIcon: "feather:home" },
  { name: "image", dataIcon: "feather:image" },
  { name: "inbox", dataIcon: "feather:inbox" },
  { name: "info", dataIcon: "feather:info" },
  { name: "instagram", dataIcon: "feather:instagram" },
  { name: "italic", dataIcon: "feather:italic" },
  { name: "key", dataIcon: "feather:key" },
  {
    name: "layers",
    dataIcon: "feather:layers"
  },
  { name: "layout", dataIcon: "feather:layout" },
  { name: "life-buoy", dataIcon: "feather:life-buoy" },
  { name: "link-2", dataIcon: "feather:link-2" },
  { name: "link", dataIcon: "feather:link" },
  { name: "linkedin", dataIcon: "feather:linkedin" },
  { name: "list", dataIcon: "feather:list" },
  { name: "loader", dataIcon: "feather:loader" },
  { name: "lock", dataIcon: "feather:lock" },
  { name: "log-in", dataIcon: "feather:log-in" },
  { name: "log-out", dataIcon: "feather:log-out" },
  { name: "mail", dataIcon: "feather:mail" },
  { name: "map-pin", dataIcon: "feather:map-pin" },
  { name: "map", dataIcon: "feather:map" },
  {
    name: "maximize-2",
    dataIcon: "feather:maximize-2"
  },
  { name: "maximize", dataIcon: "feather:maximize" },
  { name: "meh", dataIcon: "feather:meh" },
  { name: "menu", dataIcon: "feather:menu" },
  { name: "message-circle", dataIcon: "feather:message-circle" },
  { name: "message-square", dataIcon: "feather:message-square" },
  { name: "mic-off", dataIcon: "feather:mic-off" },
  { name: "mic", dataIcon: "feather:mic" },
  {
    name: "minimize-2",
    dataIcon: "feather:minimize-2"
  },
  { name: "minimize", dataIcon: "feather:minimize" },
  { name: "minus-circle", dataIcon: "feather:minus-circle" },
  { name: "minus-square", dataIcon: "feather:minus-square" },
  { name: "minus", dataIcon: "feather:minus" },
  { name: "monitor", dataIcon: "feather:monitor" },
  { name: "moon", dataIcon: "feather:moon" },
  { name: "more-horizontal", dataIcon: "feather:more-horizontal" },
  { name: "more-vertical", dataIcon: "feather:more-vertical" },
  { name: "mouse-pointer", dataIcon: "feather:mouse-pointer" },
  { name: "move", dataIcon: "feather:move" },
  { name: "music", dataIcon: "feather:music" },
  { name: "navigation-2", dataIcon: "feather:navigation-2" },
  {
    name: "navigation",
    dataIcon: "feather:navigation"
  },
  { name: "octagon", dataIcon: "feather:octagon" },
  { name: "package", dataIcon: "feather:package" },
  { name: "paperclip", dataIcon: "feather:paperclip" },
  { name: "pause-circle", dataIcon: "feather:pause-circle" },
  { name: "pause", dataIcon: "feather:pause" },
  { name: "pen-tool", dataIcon: "feather:pen-tool" },
  { name: "percent", dataIcon: "feather:percent" },
  { name: "phone-call", dataIcon: "feather:phone-call" },
  { name: "phone-forwarded", dataIcon: "feather:phone-forwarded" },
  { name: "phone-incoming", dataIcon: "feather:phone-incoming" },
  { name: "phone-missed", dataIcon: "feather:phone-missed" },
  { name: "phone-off", dataIcon: "feather:phone-off" },
  { name: "phone-outgoing", dataIcon: "feather:phone-outgoing" },
  { name: "phone", dataIcon: "feather:phone" },
  { name: "pie-chart", dataIcon: "feather:pie-chart" },
  { name: "play-circle", dataIcon: "feather:play-circle" },
  { name: "play", dataIcon: "feather:play" },
  { name: "plus-circle", dataIcon: "feather:plus-circle" },
  { name: "layers", dataIcon: "feather:layers" },
  { name: "plus", dataIcon: "feather:plus" },
  { name: "pocket", dataIcon: "feather:pocket" },
  { name: "power", dataIcon: "feather:power" },
  { name: "printer", dataIcon: "feather:printer" },
  { name: "radio", dataIcon: "feather:radio" },
  { name: "refresh-cw", dataIcon: "feather:refresh-cw" },
  {
    name: "refresh-ccw",
    dataIcon: "feather:refresh-ccw"
  },
  { name: "repeat", dataIcon: "feather:repeat" },
  { name: "rewind", dataIcon: "feather:rewind" },
  { name: "rotate-ccw", dataIcon: "feather:rotate-ccw" },
  { name: "rotate-cw", dataIcon: "feather:rotate-cw" },
  { name: "rss", dataIcon: "feather:rss" },
  { name: "save", dataIcon: "feather:save" },
  { name: "scissors", dataIcon: "feather:scissors" },
  { name: "search", dataIcon: "feather:search" },
  { name: "send", dataIcon: "feather:send" },
  { name: "server", dataIcon: "feather:server" },
  { name: "settings", dataIcon: "feather:settings" },
  { name: "share-2", dataIcon: "feather:share-2" },
  { name: "share", dataIcon: "feather:share" },
  { name: "shield-off", dataIcon: "feather:shield-off" },
  { name: "shield", dataIcon: "feather:shield" },
  { name: "shopping-bag", dataIcon: "feather:shopping-bag" },
  { name: "shopping-cart", dataIcon: "feather:shopping-cart" },
  { name: "shuffle", dataIcon: "feather:shuffle" },
  { name: "sidebar", dataIcon: "feather:sidebar" },
  { name: "skip-back", dataIcon: "feather:skip-back" },
  { name: "skip-forward", dataIcon: "feather:skip-forward" },
  { name: "slack", dataIcon: "feather:slack" },
  { name: "slash", dataIcon: "feather:slash" },
  { name: "sliders", dataIcon: "feather:sliders" },
  { name: "smartphone", dataIcon: "feather:smartphone" },
  { name: "smile", dataIcon: "feather:smile" },
  { name: "speaker", dataIcon: "feather:speaker" },
  { name: "square", dataIcon: "feather:square" },
  { name: "star", dataIcon: "feather:star" },
  { name: "stop-circle", dataIcon: "feather:stop-circle" },
  { name: "sun", dataIcon: "feather:sun" },
  { name: "sunrise", dataIcon: "feather:sunrise" },
  { name: "sunset", dataIcon: "feather:sunset" },
  { name: "tablet", dataIcon: "feather:tablet" },
  { name: "tag", dataIcon: "feather:tag" },
  { name: "target", dataIcon: "feather:target" },
  { name: "terminal", dataIcon: "feather:terminal" },
  { name: "thermometer", dataIcon: "feather:thermometer" },
  { name: "thumbs-down", dataIcon: "feather:thumbs-down" },
  { name: "thumbs-up", dataIcon: "feather:thumbs-up" },
  { name: "toggle-left", dataIcon: "feather:toggle-left" },
  { name: "toggle-right", dataIcon: "feather:toggle-right" },
  { name: "tool", dataIcon: "feather:tool" },
  { name: "trash-2", dataIcon: "feather:trash-2" },
  { name: "trash", dataIcon: "feather:trash" },
  { name: "trello", dataIcon: "feather:trello" },
  { name: "trending-up", dataIcon: "feather:trending-up" },
  { name: "trending-down", dataIcon: "feather:trending-down" },
  { name: "triangle", dataIcon: "feather:triangle" },
  { name: "truck", dataIcon: "feather:truck" },
  { name: "tv", dataIcon: "feather:tv" },
  {
    name: "twitter",
    dataIcon: "feather:twitter"
  },
  { name: "twitch", dataIcon: "feather:twitch" },
  { name: "type", dataIcon: "feather:type" },
  { name: "umbrella", dataIcon: "feather:umbrella" },
  { name: "underline", dataIcon: "feather:underline" },
  { name: "unlock", dataIcon: "feather:unlock" },
  { name: "upload-cloud", dataIcon: "feather:upload-cloud" },
  { name: "upload", dataIcon: "feather:upload" },
  { name: "user-check", dataIcon: "feather:user-check" },
  { name: "user-plus", dataIcon: "feather:user-plus" },
  { name: "user-minus", dataIcon: "feather:user-minus" },
  { name: "user-x", dataIcon: "feather:user-x" },
  { name: "user", dataIcon: "feather:user" },
  { name: "users", dataIcon: "feather:users" },
  { name: "video-off", dataIcon: "feather:video-off" },
  { name: "video", dataIcon: "feather:video" },
  { name: "voicemail", dataIcon: "feather:voicemail" },
  { name: "volume-1", dataIcon: "feather:volume-1" },
  { name: "volume-2", dataIcon: "feather:volume-2" },
  { name: "volume-x", dataIcon: "feather:volume-x" },
  { name: "volume", dataIcon: "feather:volume" },
  { name: "watch", dataIcon: "feather:watch" },
  { name: "wifi-off", dataIcon: "feather:wifi-off" },
  { name: "wifi", dataIcon: "feather:wifi" },
  { name: "wind", dataIcon: "feather:wind" },
  { name: "x-circle", dataIcon: "feather:x-circle" },
  { name: "x-octagon", dataIcon: "feather:x-octagon" },
  { name: "x-square", dataIcon: "feather:x-square" },
  { name: "x", dataIcon: "feather:x" },
  { name: "youtube", dataIcon: "feather:youtube" },
  { name: "zap-off", dataIcon: "feather:zap-off" },
  { name: "zap", dataIcon: "feather:zap" },
  { name: "zoom-in", dataIcon: "feather:zoom-in" },
  { name: "zoom-out", dataIcon: "feather:zoom-out" }
];
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "demo-icon-list" };
const _hoisted_5 = ["onKeydown", "onClick"];
const _hoisted_6 = ["data-icon"];
const _hoisted_7 = { class: "textFilter-match" };
const _hoisted_8 = {
  key: 0,
  class: "is-copied"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { text, copy, copied } = useClipboard();
    const { y } = useWindowScroll();
    const filter = ref("");
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const filteredIcons = computed(() => {
      if (filter.value === "") {
        return iconifyFeather;
      }
      return iconifyFeather.filter((icon) => {
        return icon.name.match(new RegExp(filter.value, "i"));
      });
    });
    function getSnippet(icon) {
      return `<i class="iconify" data-icon="feather:${icon.name}" aria-hidden="true"></i>`;
    }
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Iconify Icons");
    useHead({
      title: "Iconify Icons - Elements - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_IconsIconifyDocumentation = resolveComponent("IconsIconifyDocumentation");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VFlex = _sfc_main$3;
      const _component_DocumentationDemoCard = __unplugin_components_4;
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
              label: "Elements",
              to: { name: "elements" }
            },
            {
              label: "Icons"
            },
            {
              label: "Iconify",
              to: { name: "elements-icons-iconify" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_IconsIconifyDocumentation),
            createVNode(_component_DocumentationDemoCard, null, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(["card-inner", { "is-scrolling": unref(isScrolling) }])
                }, [
                  createVNode(_component_VFlex, {
                    "justify-content": "flex-end",
                    class: "demo-icon-search py-4 px-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:search" }, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event),
                                type: "search",
                                class: "input is-rounded",
                                placeholder: "Search feather icons ..."
                              }, null, 512), [
                                [vModelText, filter.value]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("ul", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredIcons), (icon) => {
                      return openBlock(), createElementBlock("li", {
                        key: icon.name,
                        class: "textFilter-target is-copy-trigger",
                        tabindex: "0",
                        onKeydown: withKeys(withModifiers(($event) => unref(copy)(getSnippet(icon)), ["prevent"]), ["space"]),
                        onClick: ($event) => unref(copy)(getSnippet(icon))
                      }, [
                        createBaseVNode("i", {
                          "aria-hidden": "true",
                          class: "iconify",
                          "data-icon": icon.dataIcon
                        }, null, 8, _hoisted_6),
                        createBaseVNode("p", _hoisted_7, toDisplayString(icon.name), 1),
                        createVNode(Transition, { name: "fade-fast" }, {
                          default: withCtx(() => [
                            unref(copied) && unref(text) === getSnippet(icon) ? (openBlock(), createElementBlock("span", _hoisted_8, " copied! ")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, _hoisted_5);
                    }), 128))
                  ])
                ], 2)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
