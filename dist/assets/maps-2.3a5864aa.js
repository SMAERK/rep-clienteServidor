import { _ as _sfc_main$3 } from "./MapsDashboard.bc0251df.js";
import { _ as _sfc_main$2 } from "./Toolbar.cbd734d2.js";
import { _ as _sfc_main$1 } from "./ToolbarNotification.e103f93b.js";
import { d as defineComponent, a1 as useHead, o as openBlock, p as createBlock, w as withCtx, s as createVNode, q as createBaseVNode, a2 as withKeys, W as withModifiers, h as unref, _ as mergeProps, A as resolveDynamicComponent } from "./vendor.6548d360.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.8d409c39.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { u as usePanels } from "./panels.9ed80fb9.js";
import "./VBlock.64333f78.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./useThemeColors.b71015d4.js";
import "./index.e178843f.js";
import "./useDropdown.145111f2.js";
const _hoisted_1 = { class: "content-section-header" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "title is-4 is-narrow" }, "Maps 2", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    const layoutSwitcher = useLayoutSwitcher();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Maps 1");
    useHead({
      title: "Maps 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ToolbarNotification = _sfc_main$1;
      const _component_Toolbar = _sfc_main$2;
      const _component_MapsDashboard = _sfc_main$3;
      return openBlock(), createBlock(resolveDynamicComponent(unref(layoutSwitcher).dynamicLayoutComponent), mergeProps(unref(layoutSwitcher).dynamicLayoutProps, {
        "close-on-change": "",
        "default-sidebar": "dashboard",
        nowrap: ""
      }), {
        default: withCtx(() => [
          createVNode(_component_MapsDashboard, { reversed: "" }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _hoisted_2,
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity",
                      tabindex: "0",
                      onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).setActive("activity"), ["prevent"]), ["space"])),
                      onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).setActive("activity"))
                    }, _hoisted_4, 32)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
export { _sfc_main as default };
