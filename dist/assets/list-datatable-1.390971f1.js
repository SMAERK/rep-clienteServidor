import { _ as _sfc_main$2 } from "./VSimpleDatatables.f197f002.js";
import { d as defineComponent, o as openBlock, p as createBlock, h as unref, a1 as useHead, f as createElementBlock, s as createVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
function renderPicture(data) {
  return `
          <div class="v-avatar">
              <img class="avatar" src="${data}" alt="">
          </div>
      `;
}
function renderName(data) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`;
}
function renderPosition(data) {
  return `<span class="light-text">${data}</span>`;
}
function renderStatus(data) {
  return `
          <div class="status is-${data}">
              <i aria-hidden="true" class="fas fa-circle"></i>
              <span class="is-capitalize">${data}</span>
          </div>
      `;
}
function renderButton(data, cell, row) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`;
}
const datatableV1 = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false }
  ],
  data: {
    headings: ["ID", "Picture", "Name", "Position", "Status", "Actions"],
    data: [
      [
        0,
        "/images/avatars/svg/vuero-1.svg",
        "Erik Kovalsky",
        "Product Manager",
        "busy",
        true
      ],
      [
        1,
        "https://vuero.cssninja.io/demo/avatars/7.jpg",
        "Alice Carasca",
        "Software Engineer",
        "offline",
        true
      ],
      [
        2,
        "https://vuero.cssninja.io/demo/avatars/13.jpg",
        "Tara Svenson",
        "UI/UX Designer",
        "offline",
        true
      ],
      [
        3,
        "https://vuero.cssninja.io/demo/avatars/5.jpg",
        "Mary Lebowski",
        "Project Manager",
        "available",
        true
      ],
      [
        4,
        "/images/avatars/placeholder-f.jpg",
        "Kaylee Jennings",
        "Web Developer",
        "available",
        true
      ],
      [
        5,
        "https://vuero.cssninja.io/demo/avatars/27.jpg",
        "Carmen Escudero",
        "HR Manager",
        "offline",
        true
      ],
      [
        6,
        "https://vuero.cssninja.io/demo/avatars/22.jpg",
        "Dwayne Hicks",
        "Product Manager",
        "offline",
        true
      ],
      [
        7,
        "/images/avatars/placeholder-m.jpg",
        "Paul Morris",
        "Backend Developer",
        "available",
        true
      ],
      [
        8,
        "https://vuero.cssninja.io/demo/avatars/23.jpg",
        "Irina Vierbovsky",
        "Project Manager",
        "available",
        true
      ],
      [
        9,
        "https://vuero.cssninja.io/demo/avatars/28.jpg",
        "Edouard Falant",
        "Web Developer",
        "busy",
        true
      ],
      [
        10,
        "/images/avatars/placeholder-f.jpg",
        "Shana Williams",
        "Sales Manager",
        "offline",
        true
      ],
      [
        11,
        "/images/avatars/placeholder-m.jpg",
        "Benjamin Hoffman",
        "Product Manager",
        "offline",
        true
      ],
      [
        12,
        "https://vuero.cssninja.io/demo/avatars/39.jpg",
        "Alejandro Badajoz",
        "Web Developer",
        "busy",
        true
      ],
      [
        13,
        "https://vuero.cssninja.io/demo/avatars/21.jpg",
        "Elizabeth Fisher",
        "Mobile Developer",
        "available",
        true
      ],
      [
        14,
        "https://vuero.cssninja.io/demo/avatars/37.jpg",
        "Helmut Fritz",
        "Product Manager",
        "available",
        true
      ],
      [
        15,
        "https://vuero.cssninja.io/demo/avatars/31.jpg",
        "Yasseen Amzi",
        "Business Analyst",
        "offline",
        true
      ]
    ]
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VSimpleDatatables = _sfc_main$2;
      return openBlock(), createBlock(_component_VSimpleDatatables, { options: unref(datatableV1) }, null, 8, ["options"]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("List Datatable 1");
    useHead({
      title: "List Datatable 1 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_DatatableV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_DatatableV1)
      ]);
    };
  }
});
export { _sfc_main as default };
