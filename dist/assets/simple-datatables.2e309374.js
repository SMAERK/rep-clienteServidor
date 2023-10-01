import { u as useMarkdownToc, _ as __unplugin_components_1 } from "./useMarkdownToc.9d73245a.js";
import { _ as _sfc_main$3 } from "./VTag.f234897b.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.f197f002.js";
import { _ as _sfc_main$1 } from "./VBreadcrumb.b45a5a1c.js";
import { a9 as reactive, d as defineComponent, k as ref, Y as onMounted, al as onBeforeUnmount, a1 as useHead, z as resolveComponent, o as openBlock, f as createElementBlock, s as createVNode, q as createBaseVNode, g as normalizeClass, h as unref, w as withCtx, F as Fragment, X as renderList, t as toDisplayString, y as createCommentVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./vue-scrollto.6b4fda56.js";
import "./index.e178843f.js";
const optionsBase = {
  searchable: false,
  sortable: false,
  perPageSelect: false,
  data: {
    headings: ["Name", "Ext.", "City", "Start Date", "Completion"],
    data: [
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"],
      ["Deirdre Bridges", 1579, "Eberswalde-Finow", "2014/26/08", "44%"],
      ["Daniel Baldwin", 6095, "Moircy", "2000/11/01", "33%"],
      ["Phelan Kane", 9519, "Germersheim", "1999/16/04", "77%"],
      ["Quentin Salas", 1339, "Los Andes", "2011/26/01", "49%"],
      ["Armand Suarez", 6583, "Funtua", "1999/06/11", "9%"],
      ["Gretchen Rogers", 5393, "Moxhe", "1998/26/10", "24%"],
      ["Harding Thompson", 2824, "Abeokuta", "2008/06/08", "10%"],
      ["Mira Rocha", 4393, "Port Harcourt", "2002/04/10", "14%"],
      ["Drew Phillips", 2931, "Goes", "2011/18/10", "58%"],
      ["Emerald Warner", 6205, "Chiavari", "2002/08/04", "58%"],
      ["Colin Burch", 7457, "Anamur", "2004/02/01", "34%"],
      ["Russell Haynes", 8916, "Frascati", "2015/28/04", "18%"],
      ["Brennan Brooks", 9011, "Olmu\xE9", "2000/18/04", "2%"],
      ["Kane Anthony", 8075, "LaSalle", "2006/21/05", "93%"],
      ["Scarlett Hurst", 1019, "Brampton", "2015/07/01", "94%"],
      ["James Scott", 3008, "Meux", "2007/30/05", "55%"],
      ["Desiree Ferguson", 9054, "Gojra", "2009/15/02", "81%"],
      ["Elaine Bishop", 9160, "Petr\xF3polis", "2008/23/12", "48%"],
      ["Hilda Nelson", 6307, "Posina", "2004/23/05", "76%"],
      ["Evangeline Beasley", 3820, "Caplan", "2009/12/03", "62%"],
      ["Wyatt Riley", 5694, "Cavaion Veronese", "2012/19/02", "67%"],
      ["Wyatt Mccarthy", 3547, "Patan", "2014/23/06", "9%"],
      ["Cairo Rice", 6273, "Ostra Vetere", "2016/27/02", "13%"],
      ["Sylvia Peters", 6829, "Arrah", "2015/03/02", "13%"],
      ["Kasper Craig", 5515, "Firenze", "2015/26/04", "56%"],
      ["Leigh Ruiz", 5112, "Lac Ste. Anne", "2001/09/02", "28%"],
      ["Athena Aguirre", 5741, "Romeral", "2010/24/03", "15%"],
      ["Riley Nunez", 5533, "Sart-Eustache", "2003/26/02", "30%"],
      ["Lois Talley", 9393, "Dorchester", "2014/05/01", "51%"],
      ["Hop Bass", 1024, "Westerlo", "2012/25/09", "85%"],
      ["Kalia Diaz", 9184, "Ichalkaranji", "2013/26/06", "92%"],
      ["Maia Pate", 6682, "Louvain-la-Neuve", "2011/23/04", "50%"],
      ["Macaulay Pruitt", 4457, "Fraser-Fort George", "2015/03/08", "92%"],
      ["Danielle Oconnor", 9464, "Neuwied", "2001/05/10", "17%"],
      ["Kato Carr", 4842, "Faridabad", "2012/11/05", "96%"],
      ["Malachi Mejia", 7133, "Vorst", "2007/25/04", "26%"],
      ["Dominic Carver", 3476, "Pointe-aux-Trembles", "2014/14/03", "71%"],
      ["Paki Santos", 4424, "Cache Creek", "2001/18/11", "82%"],
      ["Ross Hodges", 1862, "Trazegnies", "2010/19/09", "87%"],
      ["Hilda Whitley", 3514, "New Sarepta", "2011/05/07", "94%"],
      ["Roth Cherry", 4006, "Flin Flon", "2008/02/09", "8%"],
      ["Lareina Jones", 8642, "East Linton", "2009/07/08", "21%"],
      ["Joshua Weiss", 2289, "Saint-L\xE9onard", "2010/15/01", "52%"],
      ["Kiona Lowery", 5952, "Inuvik", "2002/17/12", "72%"],
      ["Nina Rush", 7567, "Bo\u2018lhe", "2008/27/01", "6%"],
      ["Palmer Parker", 2e3, "Stade", "2012/24/07", "58%"],
      ["Vielka Olsen", 3745, "Vrasene", "2016/08/01", "70%"],
      ["Meghan Cunningham", 8604, "S\xF6ke", "2007/16/02", "59%"],
      ["Iola Shaw", 6447, "Albany", "2014/05/03", "88%"],
      ["Imelda Cole", 4564, "Haasdonk", "2007/16/11", "79%"],
      ["Jerry Beach", 6801, "Gattatico", "1999/07/07", "36%"],
      ["Garrett Rocha", 3938, "Gavorrano", "2000/06/08", "71%"],
      ["Derek Kerr", 1724, "Gualdo Cattaneo", "2014/21/01", "89%"],
      ["Shad Hudson", 5944, "Salamanca", "2014/10/12", "98%"],
      ["Daryl Ayers", 8276, "Barchi", "2012/12/11", "88%"],
      ["Caleb Livingston", 3094, "Fatehpur", "2014/13/02", "8%"],
      ["Sydney Meyer", 4576, "Neubrandenburg", "2015/06/02", "22%"],
      ["Lani Lawrence", 8501, "Turnhout", "2008/07/05", "16%"],
      ["Allegra Shepherd", 2576, "Meeuwen-Gruitrode", "2004/19/04", "41%"],
      ["Fallon Reyes", 3178, "Monceau-sur-Sambre", "2005/15/02", "16%"],
      ["Karen Whitley", 4357, "Sluis", "2003/02/05", "23%"],
      ["Stewart Stephenson", 5350, "Villa Faraldi", "2003/05/07", "65%"],
      ["Ursula Reynolds", 7544, "Southampton", "1999/16/12", "61%"],
      ["Adrienne Winters", 4425, "Laguna Blanca", "2014/15/09", "24%"],
      ["Francesca Brock", 1337, "Oban", "2000/12/06", "90%"],
      ["Ursa Davenport", 7629, "New Plymouth", "2013/27/06", "37%"],
      ["Mark Brock", 3310, "Veenendaal", "2006/08/09", "41%"],
      ["Dale Rush", 5050, "Chicoutimi", "2000/27/03", "2%"],
      ["Shellie Murphy", 3845, "Marlborough", "2013/13/11", "72%"],
      ["Porter Nicholson", 4539, "Bismil", "2012/22/10", "23%"],
      ["Oliver Huber", 1265, "Hannache", "2002/11/01", "94%"],
      ["Calista Maynard", 3315, "Pozzuolo del Friuli", "2006/23/03", "5%"],
      ["Lois Vargas", 6825, "Cumberland", "1999/25/04", "50%"],
      ["Hermione Dickson", 2785, "Woodstock", "2001/22/03", "2%"],
      ["Dalton Jennings", 5416, "Dudzele", "2015/09/02", "74%"],
      ["Cathleen Kramer", 3380, "Crowsnest Pass", "2012/27/07", "53%"],
      ["Zachery Morgan", 6730, "Collines-de-l'Outaouais", "2006/04/09", "51%"],
      ["Yoko Freeman", 4077, "Lidk\xF6ping", "2002/27/12", "48%"],
      ["Chaim Waller", 4240, "North Shore", "2010/25/07", "25%"],
      ["Berk Johnston", 4532, "Vergnies", "2016/23/02", "93%"],
      ["Tad Munoz", 2902, "Saint-Nazaire", "2010/09/05", "65%"],
      ["Vivien Dominguez", 5653, "Bargagli", "2001/09/01", "86%"],
      ["Carissa Lara", 3241, "Sherborne", "2015/07/12", "72%"],
      ["Hammett Gordon", 8101, "Wah", "1998/06/09", "20%"],
      ["Walker Nixon", 6901, "Metz", "2011/12/11", "41%"],
      ["Nathan Espinoza", 5956, "Strathcona County", "2002/25/01", "47%"],
      ["Kelly Cameron", 4836, "Fontaine-Valmont", "1999/02/07", "24%"],
      ["Kyra Moses", 3796, "Quenast", "1998/07/07", "68%"],
      ["Grace Bishop", 8340, "Rodez", "2012/02/10", "4%"],
      ["Haviva Hernandez", 8136, "Suwa\u0142ki", "2000/30/01", "16%"],
      ["Alisa Horn", 9853, "Ucluelet", "2007/01/11", "39%"],
      ["Zelenia Roman", 7516, "Redwater", "2012/03/03", "31%"],
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"]
    ]
  }
};
const optionsReactive = reactive({
  perPageSelect: [10, 20, 30, 40, 50, 100],
  perPage: 10,
  data: {
    headings: ["Name", "Ext.", "City", "Start Date", "Completion"],
    data: [
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"],
      ["Deirdre Bridges", 1579, "Eberswalde-Finow", "2014/26/08", "44%"],
      ["Daniel Baldwin", 6095, "Moircy", "2000/11/01", "33%"],
      ["Phelan Kane", 9519, "Germersheim", "1999/16/04", "77%"],
      ["Quentin Salas", 1339, "Los Andes", "2011/26/01", "49%"],
      ["Armand Suarez", 6583, "Funtua", "1999/06/11", "9%"],
      ["Gretchen Rogers", 5393, "Moxhe", "1998/26/10", "24%"],
      ["Harding Thompson", 2824, "Abeokuta", "2008/06/08", "10%"],
      ["Mira Rocha", 4393, "Port Harcourt", "2002/04/10", "14%"],
      ["Drew Phillips", 2931, "Goes", "2011/18/10", "58%"],
      ["Emerald Warner", 6205, "Chiavari", "2002/08/04", "58%"],
      ["Colin Burch", 7457, "Anamur", "2004/02/01", "34%"]
    ]
  }
});
function renderIcon(data) {
  return `
    <div class="media-flex-center">
      <img class="drinks-icon" src="/images/icons/datatable/${data}.svg" alt="">
      <div class="flex-meta">
        <span class="is-capitalize">${data}</span>
      </div>
    </div>
  `;
}
function renderYesNo(data) {
  return data == "true" ? '<div class="has-text-centered"><span class="positive-icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span></div>' : '<div class="has-text-centered"><span class="negative-icon"><i aria-hidden="true" class="iconify" data-icon="feather:x"></i></span></div>';
}
function renderHighLow(data) {
  if (data > 0) {
    return `<span class="price dark-inverted">${data}</span>`;
  } else if (data == 0) {
    return `<span class="price price-free dark-inverted">${data}</span>`;
  }
}
function renderStock(data) {
  return `<span class="light-text">${data}</span>`;
}
function renderStatus$1(data) {
  if (data === "available") {
    return `<span class="tag is-primary is-elevated is-curved is-capitalize">${data}</span>`;
  } else if (data === "new") {
    return `<span class="tag is-info is-elevated is-curved is-capitalize">${data}</span>`;
  }
  if (data === "unavailable") {
    return `<span class="tag is-danger is-elevated is-curved is-capitalize">${data}</span>`;
  }
}
function renderProfit(data) {
  if (data > 0) {
    return `<div class="has-text-centered"><span class="positive-icon light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i> +${data}%</span></div>`;
  } else if (data < 0) {
    return `<div class="has-text-centered"><span class="negative-icon is-danger light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i> -${data}%</span></div>`;
  }
}
function renderButton$1(data, cell, row) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`;
}
const optionsAdvanced = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 5,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderIcon },
    { select: 2, render: renderYesNo },
    { select: 3, render: renderHighLow },
    { select: 4, render: renderStock },
    { select: 5, render: renderStatus$1 },
    { select: 6, render: renderProfit },
    { select: 7, render: renderButton$1, sortable: false }
  ],
  data: {
    headings: [
      "ID",
      "Drink",
      "Caffeinated",
      "Price",
      "Stock",
      "Status",
      "Profit",
      "Actions"
    ],
    data: [
      [574, "milk", false, 1.45, 978, "available", 2.5, true],
      [984, "coffee", true, 2.49, 1261, "available", 4.3, true],
      [312, "cola", true, 1.49, 153, "new", 2.6, true],
      [312, "soda", true, 1.49, 648, "available", -1.25, true],
      [312, "beer", false, 3.25, 928, "available", 5.12, true],
      [312, "juice", false, 1.72, 117, "available", -2.1, true],
      [312, "water", false, 1.21, 19, "new", 3, true],
      [312, "smoothie", false, 3.49, 265, "unavailable", 3.61, true],
      [312, "infusion", false, 1.89, 897, "available", -1.24, true],
      [312, "cocktail", false, 3.49, 119, "available", -2.45, true],
      [312, "latte", true, 2.49, 457, "new", 3, true],
      [312, "cosmopolitan", false, 4.49, 98, "available", 1.48, true],
      [312, "lemonade", true, 1.25, 1221, "available", -1.28, true],
      [312, "milkshake", false, 2.49, 158, "available", 2.3, true],
      [312, "wine", false, 4.49, 619, "new", 5.8, true],
      [312, "tea", false, 1.25, 481, "available", 1.3, true],
      [312, "mojito", true, 4.49, 762, "unavailable", 4.9, true],
      [312, "sangria", false, 1.49, 456, "available", 12.3, true]
    ]
  }
};
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
const optionsUsers = {
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
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "mb-6" };
const _hoisted_4 = { class: "mb-6" };
const _hoisted_5 = { class: "mb-6" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Name"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Ext."),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "City"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      "data-type": "date",
      "data-format": "YYYY/MM/DD"
    }, "Start Date"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      "data-sort": "asc"
    }, "Completion")
  ])
], -1);
const _hoisted_7 = { class: "mb-6" };
const _hoisted_8 = { class: "mb-6" };
const _hoisted_9 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let interval;
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const randomUpdate = () => {
      const max = optionsReactive.data.data.length;
      const index = Math.floor(Math.random() * max);
      const percent = parseInt(`${optionsReactive.data.data[index][4]}`.replace("%", ""));
      if (percent < 100) {
        optionsReactive.data.data[index][1] = Math.floor(Math.random() * 5e3);
        optionsReactive.data.data[index][4] = `${percent + 1}%`;
      }
    };
    onMounted(() => {
      interval = setInterval(randomUpdate, 400);
    });
    onBeforeUnmount(() => {
      if (interval) {
        clearInterval(interval);
      }
    });
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("VSimpleDatatables");
    useHead({
      title: "VSimpleDatatables - Plugins - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_DatatableBaseDocumentation = resolveComponent("DatatableBaseDocumentation");
      const _component_VSimpleDatatables = _sfc_main$2;
      const _component_DatatableReactiveDocumentation = resolveComponent("DatatableReactiveDocumentation");
      const _component_DatatableSlotDocumentation = resolveComponent("DatatableSlotDocumentation");
      const _component_VTag = _sfc_main$3;
      const _component_DatatableAdvancedDocumentation = resolveComponent("DatatableAdvancedDocumentation");
      const _component_DatatableUsersDocumentation = resolveComponent("DatatableUsersDocumentation");
      const _component_DocumentationToc = __unplugin_components_1;
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
              label: "Plugins"
            },
            {
              label: "VSimpleDatatables",
              to: { name: "components-plugins-simple-datatables" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref_key: "markdownContainer",
            ref: markdownContainer,
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_DatatableBaseDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsBase) }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableReactiveDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VSimpleDatatables, {
                options: unref(optionsReactive),
                autoupdate: ""
              }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableSlotDocumentation),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VSimpleDatatables, null, {
                default: withCtx(() => [
                  _hoisted_6,
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(optionsBase).data.data, (row, index) => {
                      return openBlock(), createElementBlock("tr", { key: index }, [
                        createBaseVNode("td", null, toDisplayString(row[0]), 1),
                        createBaseVNode("td", null, [
                          createBaseVNode("strong", null, toDisplayString(row[1]), 1)
                        ]),
                        createBaseVNode("td", null, toDisplayString(row[2]), 1),
                        createBaseVNode("td", null, toDisplayString(row[3]), 1),
                        createBaseVNode("td", null, [
                          createVNode(_component_VTag, {
                            color: row[4] === "100%" ? "primary" : "light",
                            label: row[4]
                          }, null, 8, ["color", "label"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            createVNode(_component_DatatableAdvancedDocumentation),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsAdvanced) }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableUsersDocumentation),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsUsers) }, null, 8, ["options"])
            ])
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
