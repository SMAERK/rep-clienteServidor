import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, t as toDisplayString, g as normalizeClass, a2 as withKeys, W as withModifiers, r as renderSlot, Q as watch, F as Fragment, X as renderList, s as createVNode } from "./vendor.6548d360.js";
import { _ as _sfc_main$2 } from "./VAnimatedCheckbox.ef1a08f3.js";
var ListWidgetTabbed_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "tabbed-controls" };
const _hoisted_4$1 = ["onKeydown"];
const _hoisted_5 = ["onKeydown"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "tabbed-naver" }, null, -1);
const _hoisted_7 = { class: "inner-list" };
const _hoisted_8 = { class: "inner-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "List Widget" },
    labels: { default: () => ["Recent", "Popular"] },
    straight: { type: Boolean },
    toggled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const state = ref(props.toggled);
    const toggleTabs = () => {
      state.value = !state.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget tabbed-widget", [__props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(__props.title), 1),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("a", {
              class: normalizeClass(["tabbed-control", [!state.value && "is-active"]]),
              tabindex: "0",
              onKeydown: withKeys(withModifiers(toggleTabs, ["prevent"]), ["space"]),
              onClick: toggleTabs
            }, [
              createBaseVNode("span", null, toDisplayString(__props.labels[0]), 1)
            ], 42, _hoisted_4$1),
            createBaseVNode("a", {
              class: normalizeClass(["tabbed-control", [state.value && "is-active"]]),
              tabindex: "0",
              onKeydown: withKeys(withModifiers(toggleTabs, ["prevent"]), ["space"]),
              onClick: toggleTabs
            }, [
              createBaseVNode("span", null, toDisplayString(__props.labels[1]), 1)
            ], 42, _hoisted_5),
            _hoisted_6
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [!state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_7, [
            renderSlot(_ctx.$slots, "tab1")
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_8, [
            renderSlot(_ctx.$slots, "tab2")
          ])
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1 = { class: "flex-meta is-light" };
const _hoisted_2 = { href: "#" };
const _hoisted_3 = { class: "flex-end" };
const _hoisted_4 = { class: "tag is-rounded" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    todos: { default: () => [] },
    modelValue: { default: () => [] },
    color: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const completed = ref(props.modelValue);
    watch(completed, () => {
      var _a;
      emit("update:modelValue", (_a = completed.value) != null ? _a : []);
    });
    return (_ctx, _cache) => {
      const _component_VAnimatedCheckbox = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.todos, (todo) => {
          return openBlock(), createElementBlock("div", {
            key: todo.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VAnimatedCheckbox, {
              modelValue: completed.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => completed.value = $event),
              value: todo.title,
              color: __props.color
            }, null, 8, ["modelValue", "value", "color"]),
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("a", _hoisted_2, toDisplayString(todo.title), 1),
              createBaseVNode("span", null, toDisplayString(todo.time), 1)
            ]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("span", _hoisted_4, toDisplayString(todo.status), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const todoList1 = ref([
  {
    id: 0,
    completed: true,
    title: "Call Mike R.",
    time: "at 8:30am",
    status: "Pending"
  },
  {
    id: 1,
    completed: false,
    title: "Finish document review",
    time: "at 11:30am",
    status: "Pending"
  },
  {
    id: 2,
    completed: false,
    title: "Project Meeting",
    time: "at 12:00pm",
    status: "Pending"
  },
  {
    id: 3,
    completed: false,
    title: "Meet with Kacey M.",
    time: "at 3:00pm",
    status: "Pending"
  },
  {
    id: 4,
    completed: false,
    title: "Review final draft",
    time: "at 6:00pm",
    status: "Pending"
  }
]);
const todoList2 = ref([
  {
    id: 0,
    completed: true,
    title: "Call Mike R.",
    time: "at 8:30am",
    status: "Pending"
  },
  {
    id: 1,
    completed: false,
    title: "Finish document review",
    time: "at 11:30am",
    status: "Pending"
  },
  {
    id: 2,
    completed: true,
    title: "Project Meeting",
    time: "at 12:00pm",
    status: "Pending"
  },
  {
    id: 3,
    completed: true,
    title: "Meet with Kacey M.",
    time: "at 3:00pm",
    status: "Pending"
  },
  {
    id: 4,
    completed: false,
    title: "Review final draft",
    time: "at 6:00pm",
    status: "Pending"
  }
]);
const todoList3 = ref([
  {
    id: 0,
    completed: true,
    title: "Call Mike R.",
    time: "at 8:30am",
    status: "Pending"
  },
  {
    id: 1,
    completed: false,
    title: "Finish document review",
    time: "at 11:30am",
    status: "Pending"
  },
  {
    id: 2,
    completed: false,
    title: "Project Meeting",
    time: "at 12:00pm",
    status: "Pending"
  },
  {
    id: 3,
    completed: false,
    title: "Meet with Kacey M.",
    time: "at 3:00pm",
    status: "Pending"
  },
  {
    id: 4,
    completed: false,
    title: "Review final draft",
    time: "at 6:00pm",
    status: "Pending"
  }
]);
const todoList4 = ref([
  {
    id: 0,
    completed: true,
    title: "Call Mike R.",
    time: "at 8:30am",
    status: "Pending"
  },
  {
    id: 1,
    completed: false,
    title: "Finish document review",
    time: "at 11:30am",
    status: "Pending"
  },
  {
    id: 2,
    completed: true,
    title: "Project Meeting",
    time: "at 12:00pm",
    status: "Pending"
  },
  {
    id: 3,
    completed: true,
    title: "Meet with Kacey M.",
    time: "at 3:00pm",
    status: "Pending"
  },
  {
    id: 4,
    completed: false,
    title: "Review final draft",
    time: "at 6:00pm",
    status: "Pending"
  }
]);
export { _sfc_main as _, todoList4 as a, _sfc_main$1 as b, todoList1 as c, todoList2 as d, todoList3 as t };
