const flexRowsBasic = [
  {
    emoji: "\u{1F6B4}\u200D\u2642\uFE0F",
    color: "yellow",
    name: "Biking",
    category: "Sports"
  },
  {
    emoji: "\u{1F3C3}\u200D\u2640\uFE0F",
    color: "orange",
    name: "Running",
    category: "Sports"
  },
  {
    emoji: "\u{1F3BF}",
    color: "green",
    name: "Skiing",
    category: "Sports"
  },
  {
    emoji: "\u{1F3CA}",
    color: "info",
    name: "Swimming",
    category: "Sports"
  },
  {
    emoji: "\u{1F938}",
    color: "purple",
    name: "Cartwheeling",
    category: "Sports"
  }
];
const flexRowsContacts = [
  {
    id: 0,
    company: "Grubspot",
    type: "New Lead",
    industry: "Software",
    status: "Active",
    contacts: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "danger"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      }
    ]
  },
  {
    id: 1,
    company: "PhaseBit",
    type: "Confirmed",
    industry: "Cryptocurrency",
    status: "New",
    contacts: [
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    company: "Kokolint",
    type: "New Lead",
    industry: "Software",
    status: "Active",
    contacts: [
      {
        id: 12,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 9,
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    company: "VScope X",
    type: "Canceled",
    industry: "Software",
    status: "Disabled",
    contacts: [
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        initials: "TS",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    company: "MediHelp",
    type: "Confirmed",
    industry: "Software",
    status: "Suspended",
    contacts: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "https://vuero.cssninja.io/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  }
];
const flexRowsAdvanced = [
  {
    id: 0,
    username: "Erik K.",
    position: "Product Manager",
    picture: "/images/avatars/svg/vuero-1.svg",
    location: "Las Vegas, NV",
    industry: "Software",
    annualEarnings: 115e3,
    status: "Active",
    contacts: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 3,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "danger"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      }
    ]
  },
  {
    id: 1,
    username: "Jimmy H.",
    position: "Project Manager",
    picture: "https://vuero.cssninja.io/demo/avatars/22.jpg",
    location: "Los Angeles, CA",
    industry: "Business",
    annualEarnings: 11e4,
    status: "New",
    contacts: [
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    username: "Melany W.",
    position: "Web Developer",
    picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
    location: "San Jose, CA",
    industry: "Design",
    status: "Active",
    annualEarnings: 9e4,
    contacts: [
      {
        id: 12,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 9,
        picture: "https://vuero.cssninja.io/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    username: "Joshua S.",
    position: "Backend Developer",
    picture: "https://vuero.cssninja.io/demo/avatars/12.jpg",
    location: "Las Vegas, NV",
    industry: "Accounting",
    status: "Disabled",
    annualEarnings: 16e4,
    contacts: [
      {
        id: 7,
        picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
        initials: "TS",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    username: "Tina C.",
    position: "Business Analyst",
    picture: "https://vuero.cssninja.io/demo/avatars/13.jpg",
    location: "Los Angeles, CA",
    industry: "Finance",
    status: "Suspended",
    annualEarnings: 247e3,
    contacts: [
      {
        id: 0,
        picture: "https://vuero.cssninja.io/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "https://vuero.cssninja.io/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "https://vuero.cssninja.io/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  }
];
export { flexRowsAdvanced as a, flexRowsBasic as b, flexRowsContacts as f };
