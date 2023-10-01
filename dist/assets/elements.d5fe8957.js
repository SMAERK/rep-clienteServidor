import _sfc_main$1 from "./SidebarLayout.6399bc9d.js";
import { d as defineComponent, z as resolveComponent, o as openBlock, p as createBlock, w as withCtx, s as createVNode, T as Transition, A as resolveDynamicComponent, h as unref } from "./vendor.6548d360.js";
import { u as useLayoutSwitcher } from "./layoutSwitcher.8d409c39.js";
import "./UserProfileDropdown.c528b802.js";
import "./viewWrapper.d4aba839.js";
import "./index.e178843f.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VProgress.5bff1011.js";
import "./panels.9ed80fb9.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
import "./VIconButton.f948e51d.js";
import "./VPageContent.f47e1c5e.js";
import "./Toolbar.cbd734d2.js";
import "./TaskPanel.a47df64e.js";
import "./FileCardDropdown.ed362889.js";
import "./SearchPanel.54ae1913.js";
import "./UserPopoverContent.5da306fe.js";
import "./VBlock.64333f78.js";
import "./VIconBox.298b3a59.js";
import "./VField.b8c33879.js";
import "./VControl.eb555562.js";
import "./AnimatedLogo.9189a8f1.js";
import "./userPopovers.0b86b3bb.js";
import "./LanguagesPanel.b7b20087.js";
import "./Sidebar.14a911d1.js";
var elements_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const layoutSwitcher = useLayoutSwitcher();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_SidebarLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_SidebarLayout, {
        theme: unref(layoutSwitcher).sidebarLayoutTheme,
        "open-on-mounted": "",
        "default-sidebar": "elements"
      }, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
