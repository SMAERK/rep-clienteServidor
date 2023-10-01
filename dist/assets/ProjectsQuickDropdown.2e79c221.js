import { _ as _sfc_main$2 } from "./VDropdown.38fc5e7d.js";
import { _ as _sfc_main$1 } from "./VAvatar.08652fea.js";
import { d as defineComponent, k as ref, o as openBlock, p as createBlock, w as withCtx, s as createVNode, a2 as withKeys, W as withModifiers, f as createElementBlock, X as renderList, q as createBaseVNode, t as toDisplayString, g as normalizeClass, F as Fragment } from "./vendor.6548d360.js";
const _hoisted_1 = ["onKeydown", "onClick"];
const _hoisted_2 = { class: "meta" };
const _hoisted_3 = { class: "dark-inverted" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const projects = [
      {
        initials: "D",
        color: "warning",
        name: "Delivery App Project",
        subtitle: "Food For Good"
      },
      {
        initials: "H",
        color: "h-green",
        name: "Health and Fitness Dashboard",
        subtitle: "Fit'n'Dance"
      },
      {
        initials: "LT",
        color: "info",
        name: "Learning Tracker Dashboard",
        subtitle: "Fit'n'Dance"
      },
      {
        initials: "B",
        color: "h-purple",
        name: "Banking and Finance Dashboard",
        subtitle: "VNeo Bank"
      }
    ];
    const selectedProject = ref(projects[1]);
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VDropdown = _sfc_main$2;
      return openBlock(), createBlock(_component_VDropdown, {
        class: "project-dropdown",
        spaced: ""
      }, {
        button: withCtx(({ toggle }) => [
          createVNode(_component_VAvatar, {
            size: "small",
            color: selectedProject.value.color,
            initials: selectedProject.value.initials,
            tabindex: "0",
            onKeydown: withKeys(withModifiers(toggle, ["prevent"]), ["space"]),
            onClick: toggle
          }, null, 8, ["color", "initials", "onKeydown", "onClick"])
        ]),
        content: withCtx(({ close }) => [
          (openBlock(), createElementBlock(Fragment, null, renderList(projects, (project) => {
            return createBaseVNode("a", {
              key: project.initials,
              class: normalizeClass(["dropdown-item dropdown-block", [project.initials === selectedProject.value.initials && "is-active"]]),
              tabindex: "0",
              onKeydown: withKeys(withModifiers(() => {
                selectedProject.value = project;
                close();
              }, ["prevent"]), ["space"]),
              onClick: () => {
                selectedProject.value = project;
                close();
              }
            }, [
              createVNode(_component_VAvatar, {
                size: "small",
                color: project.color,
                initials: project.initials
              }, null, 8, ["color", "initials"]),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("span", _hoisted_3, toDisplayString(project.name), 1),
                createBaseVNode("span", null, toDisplayString(project.subtitle), 1)
              ])
            ], 42, _hoisted_1);
          }), 64))
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as _ };
