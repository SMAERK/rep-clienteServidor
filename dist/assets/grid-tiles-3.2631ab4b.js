import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.bdc25b05.js";
import { b as _sfc_main$3 } from "./index.e178843f.js";
import { _ as _sfc_main$2 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _imports_0, a as _imports_1 } from "./search-6-dark.b48abad5.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { d as defineComponent, k as ref, e as computed, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, g as normalizeClass, h as unref, a1 as useHead } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
const posts = [
  {
    id: "1",
    title: "How to serve coffee at the office the proper way",
    published: "30 minutes ago",
    image: "https://vuero.cssninja.io/demo/photos/11.jpg",
    author: {
      id: 39,
      avatar: "https://vuero.cssninja.io/demo/avatars/39.jpg",
      name: "Alejandro B.",
      initials: "AB",
      color: "info"
    }
  },
  {
    id: "2",
    title: "Teamwork can dramatically increase productivity",
    published: "4 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/12.jpg",
    author: {
      id: 15,
      avatar: "https://vuero.cssninja.io/demo/avatars/15.jpg",
      name: "Hilde V.",
      initials: "HV",
      color: "warning"
    }
  },
  {
    id: "3",
    title: "Is team building a scam or the next thing?",
    published: "5 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/13.jpg",
    author: {
      id: 24,
      avatar: "https://vuero.cssninja.io/demo/avatars/24.jpg",
      name: "Sandrine C.",
      initials: "SC",
      color: "h-purple"
    }
  },
  {
    id: "4",
    title: "3 things you should know when applying for developer jobs",
    published: "8 hours ago",
    image: "https://vuero.cssninja.io/demo/photos/14.jpg",
    author: {
      id: 27,
      avatar: "https://vuero.cssninja.io/demo/avatars/27.jpg",
      name: "Carmen E.",
      initials: "CE",
      color: "h-purple"
    }
  },
  {
    id: "5",
    title: "The construction business massively invests in mobile apps",
    published: "1 day ago",
    image: "https://vuero.cssninja.io/demo/photos/15.jpg",
    author: {
      id: 10,
      avatar: "https://vuero.cssninja.io/demo/avatars/10.jpg",
      name: "Henry G.",
      initials: "HG",
      color: "info"
    }
  },
  {
    id: "6",
    title: "Finding the right spot for your startup",
    published: "1 day ago",
    image: "https://vuero.cssninja.io/demo/photos/17.jpg",
    author: {
      id: 22,
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg",
      name: "Jimmy H.",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "7",
    title: "4 tips to make your business lunches awesome",
    published: "2 days ago",
    image: "https://vuero.cssninja.io/demo/photos/18.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio."
    ],
    author: {
      id: 22,
      avatar: "https://vuero.cssninja.io/demo/avatars/22.jpg",
      name: "Jimmy H.",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "8",
    title: "Setting up a design system for your app project",
    published: "2 days ago",
    image: "https://vuero.cssninja.io/demo/photos/18.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio."
    ],
    author: {
      id: 26,
      avatar: "https://vuero.cssninja.io/demo/avatars/26.jpg",
      name: "Courtney W.",
      initials: "CW",
      color: "info"
    }
  },
  {
    id: "9",
    title: "Setting up a design system for your app project",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/20.jpg",
    author: {
      id: 8,
      avatar: "/images/avatars/svg/vuero-1.svg",
      name: "Erik K.",
      initials: "EK",
      color: "info"
    }
  },
  {
    id: "10",
    title: "Have you considered product management training?",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/21.jpg",
    author: {
      id: 14,
      avatar: "https://vuero.cssninja.io/demo/avatars/14.jpg",
      name: "Ryan B.",
      initials: "RB",
      color: "info"
    }
  },
  {
    id: "11",
    title: "Using flashy colors in your websites and apps",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/22.jpg",
    author: {
      id: 9,
      avatar: "https://vuero.cssninja.io/demo/avatars/9.jpg",
      name: "Ana B.",
      initials: "AB",
      color: "info"
    }
  },
  {
    id: "12",
    title: "Why it pays to profile your customers",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/23.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio."
    ],
    author: {
      id: 40,
      avatar: "https://vuero.cssninja.io/demo/avatars/40.jpg",
      name: "Jeanne M.",
      initials: "JM",
      color: "info"
    }
  },
  {
    id: "13",
    title: "Building a consistent and talented team",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/24.jpg",
    author: {
      id: 19,
      avatar: "https://vuero.cssninja.io/demo/avatars/19.jpg",
      name: "Greta K.",
      initials: "GK",
      color: "info"
    }
  },
  {
    id: "14",
    title: "Building a consistent and talented team",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/25.jpg",
    author: {
      id: 28,
      avatar: "https://vuero.cssninja.io/demo/avatars/28.jpg",
      name: "Edouard F.",
      initials: "EF",
      color: "info"
    }
  },
  {
    id: "15",
    title: "What framework to choose to build a mobile app in 2020?",
    published: "3 days ago",
    image: "https://vuero.cssninja.io/demo/photos/26.jpg",
    author: {
      id: 5,
      avatar: "https://vuero.cssninja.io/demo/avatars/5.jpg",
      name: "Mary L.",
      initials: "ML",
      color: "info"
    }
  },
  {
    id: "16",
    title: "Diving into building an e-commerce brand - part 1",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/27.jpg",
    author: {
      id: 33,
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg",
      name: "Harvey M.",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "17",
    title: "Diving into building an e-commerce brand - part 2",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/28.jpg",
    author: {
      id: 33,
      avatar: "https://vuero.cssninja.io/demo/avatars/33.jpg",
      name: "Harvey M.",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "18",
    title: "How to make sure to reach the goals you set",
    published: "4 days ago",
    image: "https://vuero.cssninja.io/demo/photos/28.jpg",
    author: {
      id: 31,
      avatar: "https://vuero.cssninja.io/demo/avatars/31.jpg",
      name: "Yasseen A.",
      initials: "YA",
      color: "info"
    }
  }
];
var TilesGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input custom-text-filter",
  placeholder: "Search..."
}, null, -1);
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "Add User", -1);
const _hoisted_6 = { class: "tile-grid tile-grid-v3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_9 = { class: "tile is-ancestor" };
const _hoisted_10 = { class: "tile is-parent" };
const _hoisted_11 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_12 = { class: "tile-grid-item-inner" };
const _hoisted_13 = { class: "meta" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " How to serve coffee at the office the proper way "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_15 = { class: "tile-meta" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Alejandro B."),
  /* @__PURE__ */ createBaseVNode("span", null, "30 minutes ago")
], -1);
const _hoisted_17 = { class: "tile is-parent" };
const _hoisted_18 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_19 = { class: "tile-grid-item-inner" };
const _hoisted_20 = { class: "meta" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Teamwork can dramatically increase productivity "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_22 = { class: "tile-meta" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Hilde V."),
  /* @__PURE__ */ createBaseVNode("span", null, "4 hours ago")
], -1);
const _hoisted_24 = { class: "tile is-parent" };
const _hoisted_25 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_26 = { class: "tile-grid-item-inner" };
const _hoisted_27 = { class: "meta" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Is team building a scam or the next thing? "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_29 = { class: "tile-meta" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Sandrine C."),
  /* @__PURE__ */ createBaseVNode("span", null, "5 hours ago")
], -1);
const _hoisted_31 = { class: "tile is-ancestor" };
const _hoisted_32 = { class: "tile is-vertical is-8" };
const _hoisted_33 = { class: "tile" };
const _hoisted_34 = { class: "tile is-parent is-vertical" };
const _hoisted_35 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_36 = { class: "tile-grid-item-inner" };
const _hoisted_37 = { class: "meta" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " 3 things you should know when applying for developer jobs "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_39 = { class: "tile-meta" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Carmen E."),
  /* @__PURE__ */ createBaseVNode("span", null, "8 hours ago")
], -1);
const _hoisted_41 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_42 = { class: "tile-grid-item-inner" };
const _hoisted_43 = { class: "meta" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " The construction business massively invests in mobile apps "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_45 = { class: "tile-meta" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Henry G."),
  /* @__PURE__ */ createBaseVNode("span", null, "1 day ago")
], -1);
const _hoisted_47 = { class: "tile is-parent" };
const _hoisted_48 = {
  href: "#",
  class: "tile is-child tile-grid-item is-large"
};
const _hoisted_49 = { class: "tile-grid-item-inner" };
const _hoisted_50 = { class: "meta" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Finding the right spot for your startup "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_52 = { class: "tile-meta" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Jimmy H."),
  /* @__PURE__ */ createBaseVNode("span", null, "1 day ago")
], -1);
const _hoisted_54 = { class: "tile is-parent" };
const _hoisted_55 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_56 = { class: "tile-grid-item-inner" };
const _hoisted_57 = { class: "meta" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " 4 tips to make your business lunches awesome "),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile h-hidden-tablet-p" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_59 = { class: "tile-meta" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Jason G."),
  /* @__PURE__ */ createBaseVNode("span", null, "2 days ago")
], -1);
const _hoisted_61 = { class: "tile is-parent" };
const _hoisted_62 = {
  href: "#",
  class: "tile is-child tile-grid-item is-tall"
};
const _hoisted_63 = { class: "tile-grid-item-inner" };
const _hoisted_64 = { class: "meta" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Setting up a design system for your app project "),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile h-hidden-tablet-p" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_66 = { class: "tile-meta" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Courtney W."),
  /* @__PURE__ */ createBaseVNode("span", null, "2 days ago")
], -1);
const _hoisted_68 = { class: "tile is-ancestor" };
const _hoisted_69 = { class: "tile is-parent" };
const _hoisted_70 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_71 = { class: "tile-grid-item-inner" };
const _hoisted_72 = { class: "meta" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Foundation of a great E-Learning system "),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_74 = { class: "tile-meta" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, "Erik K."),
  /* @__PURE__ */ createBaseVNode("span", null, "2 days ago")
], -1);
const _hoisted_76 = { class: "tile is-parent is-6" };
const _hoisted_77 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_78 = { class: "tile-grid-item-inner" };
const _hoisted_79 = { class: "meta" };
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Why it pays to profile your customers "),
  /* @__PURE__ */ createBaseVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_81 = { class: "tile-meta" };
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Jeanne M."),
  /* @__PURE__ */ createBaseVNode("span", null, "3 days ago")
], -1);
const _hoisted_83 = { class: "tile is-ancestor" };
const _hoisted_84 = { class: "tile is-parent" };
const _hoisted_85 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_86 = { class: "tile-grid-item-inner" };
const _hoisted_87 = { class: "meta" };
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Using flashy colors in your websites and apps "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_89 = { class: "tile-meta" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, "Ana B."),
  /* @__PURE__ */ createBaseVNode("span", null, "3 days ago")
], -1);
const _hoisted_91 = { class: "tile is-parent" };
const _hoisted_92 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_93 = { class: "tile-grid-item-inner" };
const _hoisted_94 = { class: "meta" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Building a consistent and talented team "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_96 = { class: "tile-meta" };
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Greta K."),
  /* @__PURE__ */ createBaseVNode("span", null, "3 days ago")
], -1);
const _hoisted_98 = { class: "tile is-parent" };
const _hoisted_99 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_100 = { class: "tile-grid-item-inner" };
const _hoisted_101 = { class: "meta" };
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Diving into building an e-commerce brand - part 1 "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optime, inquam. Duo Reges constructio. ")
], -1);
const _hoisted_103 = { class: "tile-meta" };
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " Harvey M."),
  /* @__PURE__ */ createBaseVNode("span", null, "4 days ago")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return posts;
      } else {
        return posts.filter((item) => {
          return item.title.match(new RegExp(filters.value, "i")) || item.author.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = ["All Posts", "Recent Posts", "Older Posts", "Popular Posts"];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "Select an option"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_4,
                _hoisted_5
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_7,
              _hoisted_8
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("a", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/11.jpg",
                    alt: "",
                    onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_13, [
                    _hoisted_14,
                    createBaseVNode("div", _hoisted_15, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/39.jpg",
                        size: "small"
                      }),
                      _hoisted_16
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("a", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/12.jpg",
                    alt: "",
                    onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_20, [
                    _hoisted_21,
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/15.jpg",
                        size: "small"
                      }),
                      _hoisted_23
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("a", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/13.jpg",
                    alt: "",
                    onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_27, [
                    _hoisted_28,
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/24.jpg",
                        size: "small"
                      }),
                      _hoisted_30
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("a", _hoisted_35, [
                    createBaseVNode("div", _hoisted_36, [
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/14.jpg",
                        alt: "",
                        onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_37, [
                        _hoisted_38,
                        createBaseVNode("div", _hoisted_39, [
                          createVNode(_component_VAvatar, {
                            picture: "https://vuero.cssninja.io/demo/avatars/27.jpg",
                            size: "small"
                          }),
                          _hoisted_40
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("a", _hoisted_41, [
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/15.jpg",
                        alt: "",
                        onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_43, [
                        _hoisted_44,
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(_component_VAvatar, {
                            picture: "https://vuero.cssninja.io/demo/avatars/10.jpg",
                            size: "small"
                          }),
                          _hoisted_46
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("a", _hoisted_48, [
                    createBaseVNode("div", _hoisted_49, [
                      createBaseVNode("img", {
                        src: "https://vuero.cssninja.io/demo/photos/16.jpg",
                        alt: "",
                        onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(onceImageErrored)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_50, [
                        _hoisted_51,
                        createBaseVNode("div", _hoisted_52, [
                          createVNode(_component_VAvatar, {
                            picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
                            size: "small"
                          }),
                          _hoisted_53
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("a", _hoisted_55, [
                  createBaseVNode("div", _hoisted_56, [
                    createBaseVNode("img", {
                      src: "https://vuero.cssninja.io/demo/photos/18.jpg",
                      alt: "",
                      onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(onceImageErrored)(event, "400x300"))
                    }, null, 32),
                    createBaseVNode("div", _hoisted_57, [
                      _hoisted_58,
                      createBaseVNode("div", _hoisted_59, [
                        createVNode(_component_VAvatar, {
                          picture: "https://vuero.cssninja.io/demo/avatars/16.jpg",
                          size: "small"
                        }),
                        _hoisted_60
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("a", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/19.jpg",
                    alt: "",
                    onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_64, [
                    _hoisted_65,
                    createBaseVNode("div", _hoisted_66, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/26.jpg",
                        size: "small"
                      }),
                      _hoisted_67
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_68, [
            createBaseVNode("div", _hoisted_69, [
              createBaseVNode("a", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/20.jpg",
                    alt: "",
                    onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_72, [
                    _hoisted_73,
                    createBaseVNode("div", _hoisted_74, [
                      createVNode(_component_VAvatar, {
                        picture: "/images/avatars/svg/vuero-1.svg",
                        size: "small"
                      }),
                      _hoisted_75
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_76, [
              createBaseVNode("a", _hoisted_77, [
                createBaseVNode("div", _hoisted_78, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/23.jpg",
                    alt: "",
                    onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_79, [
                    _hoisted_80,
                    createBaseVNode("div", _hoisted_81, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/40.jpg",
                        size: "small"
                      }),
                      _hoisted_82
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_83, [
            createBaseVNode("div", _hoisted_84, [
              createBaseVNode("a", _hoisted_85, [
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/22.jpg",
                    alt: "",
                    onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_87, [
                    _hoisted_88,
                    createBaseVNode("div", _hoisted_89, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/9.jpg",
                        size: "small"
                      }),
                      _hoisted_90
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_91, [
              createBaseVNode("a", _hoisted_92, [
                createBaseVNode("div", _hoisted_93, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/24.jpg",
                    alt: "",
                    onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_94, [
                    _hoisted_95,
                    createBaseVNode("div", _hoisted_96, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/19.jpg",
                        size: "small"
                      }),
                      _hoisted_97
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_98, [
              createBaseVNode("a", _hoisted_99, [
                createBaseVNode("div", _hoisted_100, [
                  createBaseVNode("img", {
                    src: "https://vuero.cssninja.io/demo/photos/27.jpg",
                    alt: "",
                    onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(onceImageErrored)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_101, [
                    _hoisted_102,
                    createBaseVNode("div", _hoisted_103, [
                      createVNode(_component_VAvatar, {
                        picture: "https://vuero.cssninja.io/demo/avatars/33.jpg",
                        size: "small"
                      }),
                      _hoisted_104
                    ])
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
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Grid Tiles 3");
    useHead({
      title: "Grid Tiles 3 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_TilesGridV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_TilesGridV3)
      ]);
    };
  }
});
export { _sfc_main as default };
