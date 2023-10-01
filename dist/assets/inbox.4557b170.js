import { _ as _sfc_main$c } from "./MinimalLayout.a3e60ebf.js";
import { d as defineComponent, k as ref, o as openBlock, f as createElementBlock, q as createBaseVNode, h as unref, a2 as withKeys, W as withModifiers, g as normalizeClass, ae as createStaticVNode, B as watchEffect, a3 as withDirectives, aG as vModelCheckbox, F as Fragment, e as computed, Q as watch, a1 as useHead, z as resolveComponent, p as createBlock, w as withCtx, s as createVNode } from "./vendor.6548d360.js";
import { _ as _imports_0 } from "./vuero-1.6aadf997.js";
import { u as useDropdown } from "./useDropdown.145111f2.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { i as isMediumScreen } from "./responsive.0b9f8cd9.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { u as useDarkmode } from "./index.e178843f.js";
const _hoisted_1$b = { class: "header-area" };
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">Hop in for the next project review</span><span class="sender-email">&lt;kelly@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$b = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$a = [
  _hoisted_4$b
];
const _hoisted_6$b = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$b = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$b = [
  _hoisted_7$b
];
const _hoisted_9$b = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$a = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 16 2020, at 09:31am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi Erik,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Dat enim intervalla et relaxat. Et nemo nimium beatus est; Claudii libidini, qui tum erat summo ne imperio, dederetur. Duo Reges: constructio interrete. </p><p> Sedulo, inquam, faciam. Certe, nisi voluptatem tanti aestimaretis. <a href="http://loripsum.net/">Recte, inquit, intellegis.</a> Ergo, inquit, tibi Q. Recte, inquit, intellegis. </p><ul><li>Quid nunc honeste dicit?</li><li> Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. </li><li>Negabat igitur ullam esse artem, quae ipsa a se proficisceretur;</li></ul><p> Satis est ad hoc responsum. Quod iam a me expectare noli. Confecta res esset. Bonum integritas corporis: misera debilitas. Illum mallem levares, quo optimum atque humanissimum virum, Cn. Utrum igitur tibi litteram videor an totas paginas commovere? </p><p>Kelly</p></div><div class="attachments-list"><div class="attachment"><span>iteration-4.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$b = { class: "reply-box-wrap" };
const _hoisted_12$b = { class: "reply-bubble" };
const _hoisted_13$b = { class: "reply-as" };
const _hoisted_14$b = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$a = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$b = [
  _hoisted_15$a
];
const _hoisted_17$b = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$b = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$b, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/11.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$b,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$a)
            ]),
            _hoisted_6$b
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$b, 32)
        ]),
        createBaseVNode("div", _hoisted_9$b, [
          _hoisted_10$a,
          createBaseVNode("div", _hoisted_11$b, [
            createBaseVNode("div", _hoisted_12$b, [
              createBaseVNode("div", _hoisted_13$b, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$b,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$b)
                  ]),
                  _hoisted_17$b
                ], 512)
              ]),
              _hoisted_18$b
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$a = { class: "header-area" };
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">You didn&#39;t answer my last email !</span><span class="sender-email">&lt;sandrine@vuero.io&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>0</span></div>', 2);
const _hoisted_4$a = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$9 = [
  _hoisted_4$a
];
const _hoisted_6$a = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$a = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$a = [
  _hoisted_7$a
];
const _hoisted_9$a = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$9 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 17 2020, at 08:21am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi Mr. Kovalsky,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos commodius agimus. Si longus, levis; <a href="#">Summum en\xEDm bonum exposuit vacuitatem doloris;</a> Eadem fortitudinis ratio reperietur. Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. </p><ul><li>Sed residamus, inquit, si placet.</li><li>Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint.</li><li>Beatus autem esse in maximarum rerum timore nemo potest.</li><li>Illa argumenta propria videamus, cur omnia sint paria peccata.</li></ul><p>Sandrine</p></div></div>', 1);
const _hoisted_11$a = { class: "reply-box-wrap" };
const _hoisted_12$a = { class: "reply-bubble" };
const _hoisted_13$a = { class: "reply-as" };
const _hoisted_14$a = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$a = [
  _hoisted_15$9
];
const _hoisted_17$a = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$a = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/24.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$a,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$9)
            ]),
            _hoisted_6$a
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$a, 32)
        ]),
        createBaseVNode("div", _hoisted_9$a, [
          _hoisted_10$9,
          createBaseVNode("div", _hoisted_11$a, [
            createBaseVNode("div", _hoisted_12$a, [
              createBaseVNode("div", _hoisted_13$a, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$a,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$a)
                  ]),
                  _hoisted_17$a
                ], 512)
              ]),
              _hoisted_18$a
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$9 = { class: "header-area" };
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> Customer dashboard february bug report </span><span class="sender-email">&lt;edouard@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$8 = [
  _hoisted_4$9
];
const _hoisted_6$9 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$9 = [
  _hoisted_7$9
];
const _hoisted_9$9 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$8 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 17 2020, at 02:29pm</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Nunc haec primum fortasse audientis servire debemus.</a> At iste non dolendi status non vocatur voluptas. Quae duo sunt, unum facit. Etiam beatissimum? Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. </p><ul><li>Nam Pyrrho, Aristo, Erillus iam diu abiecti.</li><li>Maximas vero virtutes iacere omnis necesse est voluptate dominante.</li></ul><p>Nick</p></div><div class="attachments-list"><div class="attachment"><span>report.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$9 = { class: "reply-box-wrap" };
const _hoisted_12$9 = { class: "reply-bubble" };
const _hoisted_13$9 = { class: "reply-as" };
const _hoisted_14$9 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$8 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$9 = [
  _hoisted_15$8
];
const _hoisted_17$9 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$9 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/28.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$9,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$8)
            ]),
            _hoisted_6$9
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$9, 32)
        ]),
        createBaseVNode("div", _hoisted_9$9, [
          _hoisted_10$8,
          createBaseVNode("div", _hoisted_11$9, [
            createBaseVNode("div", _hoisted_12$9, [
              createBaseVNode("div", _hoisted_13$9, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$9,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$9)
                  ]),
                  _hoisted_17$9
                ], 512)
              ]),
              _hoisted_18$9
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$8 = { class: "header-area" };
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> New design ideas from the user experience team </span><span class="sender-email">&lt;alejandro@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$7 = [
  _hoisted_4$8
];
const _hoisted_6$8 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$8 = [
  _hoisted_7$8
];
const _hoisted_9$8 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$7 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 18 2020, at 10:16am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hey Erik,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Philosophi autem in suis lectulis plerumque moriuntur. Reguli reiciendam; Si autem id non concedatur, non continuo vita beata tollitur. <mark>Quod quidem nobis non saepe contingit.</mark></p><p><a href="http://loripsum.net/"> Illa tamen simplicia, vestra versuta.</a> Ea possunt paria non esse. Quid adiuvas? Praeclarae mortes sunt imperatoriae; </p><ul><li>Si enim ita est, vide ne facinus facias, cum mori suadeas.</li><li>In eo enim positum est id, quod dicimus esse expetendum.</li><li> Minime id quidem, inquam, alienum, multumque ad ea, quae quaerimus, explicatio tua ista profecerit. </li><li> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. </li></ul><p> Duo Reges: constructio interrete. Qui est in parvis malis. Paria sunt igitur. </p><p>Alejandro</p></div><div class="attachments-list"><div class="attachment"><span>landing-page.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>dashboard.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$8 = { class: "reply-box-wrap" };
const _hoisted_12$8 = { class: "reply-bubble" };
const _hoisted_13$8 = { class: "reply-as" };
const _hoisted_14$8 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$7 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$8 = [
  _hoisted_15$7
];
const _hoisted_17$8 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$8 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$8, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/39.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$8,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$7)
            ]),
            _hoisted_6$8
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$8, 32)
        ]),
        createBaseVNode("div", _hoisted_9$8, [
          _hoisted_10$7,
          createBaseVNode("div", _hoisted_11$8, [
            createBaseVNode("div", _hoisted_12$8, [
              createBaseVNode("div", _hoisted_13$8, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$8,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$8)
                  ]),
                  _hoisted_17$8
                ], 512)
              ]),
              _hoisted_18$8
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$7 = { class: "header-area" };
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">This month&#39;s lead generation report</span><span class="sender-email">&lt;irina@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$6 = [
  _hoisted_4$7
];
const _hoisted_6$7 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$7 = [
  _hoisted_7$7
];
const _hoisted_9$7 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$6 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 18 2020, at 11:12am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Quam nemo umquam voluptatem appellavit, appellat;</mark><mark>Sequitur disserendi ratio cognitioque naturae;</mark> Ea possunt paria non esse. Poterat autem inpune; </p><ul><li>Urgent tamen et nihil remittunt.</li><li>Miserum hominem! Si dolor summum malum est, dici aliter non potest.</li><li>Quid igitur dubitamus in tota eius natura quaerere quid sit effectum?</li></ul><p><a href="http://loripsum.net/">Duo Reges: constructio interrete.</a> Satis est ad hoc responsum. Primum in nostrane potestate est, quid meminerimus? <a href="http://loripsum.net/">Nihil sane.</a><a href="http://loripsum.net/">Sit sane ista voluptas.</a></p><p>Let me know when you have time to read it.</p></div><div class="attachments-list"><div class="attachment"><span>lead-report_february.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$7 = { class: "reply-box-wrap" };
const _hoisted_12$7 = { class: "reply-bubble" };
const _hoisted_13$7 = { class: "reply-as" };
const _hoisted_14$7 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$6 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$7 = [
  _hoisted_15$6
];
const _hoisted_17$7 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$7 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/23.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$7,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$6)
            ]),
            _hoisted_6$7
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$7, 32)
        ]),
        createBaseVNode("div", _hoisted_9$7, [
          _hoisted_10$6,
          createBaseVNode("div", _hoisted_11$7, [
            createBaseVNode("div", _hoisted_12$7, [
              createBaseVNode("div", _hoisted_13$7, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$7,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$7)
                  ]),
                  _hoisted_17$7
                ], 512)
              ]),
              _hoisted_18$7
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$6 = { class: "header-area" };
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> I got some new delightful stuff that you absolutely must see </span><span class="sender-email">&lt;carmen@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$5 = [
  _hoisted_4$6
];
const _hoisted_6$6 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$6 = [
  _hoisted_7$6
];
const _hoisted_9$6 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$5 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 19 2020, at 07:48pm</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hey Erik,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos commodius agimus. Si longus, levis; <a href="http://loripsum.net/"> Summum en\xEDm bonum exposuit vacuitatem doloris;</a> Eadem fortitudinis ratio reperietur. Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. </p><ul><li>Sed residamus, inquit, si placet.</li><li>Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint.</li><li>Beatus autem esse in maximarum rerum timore nemo potest.</li><li>Illa argumenta propria videamus, cur omnia sint paria peccata.</li></ul><p>Just call me after work.</p></div><div class="attachments-list"><div class="attachment"><span>stuff.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>cool_stuff.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$6 = { class: "reply-box-wrap" };
const _hoisted_12$6 = { class: "reply-bubble" };
const _hoisted_13$6 = { class: "reply-as" };
const _hoisted_14$6 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$6 = [
  _hoisted_15$5
];
const _hoisted_17$6 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$6 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/27.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$6,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$5)
            ]),
            _hoisted_6$6
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$6, 32)
        ]),
        createBaseVNode("div", _hoisted_9$6, [
          _hoisted_10$5,
          createBaseVNode("div", _hoisted_11$6, [
            createBaseVNode("div", _hoisted_12$6, [
              createBaseVNode("div", _hoisted_13$6, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$6,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$6)
                  ]),
                  _hoisted_17$6
                ], 512)
              ]),
              _hoisted_18$6
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$5 = { class: "header-area" };
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> Meeting with the new customer on Monday </span><span class="sender-email">&lt;elizabeth@vuero.io&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>0</span></div>', 2);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$4 = [
  _hoisted_4$5
];
const _hoisted_6$5 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$5 = [
  _hoisted_7$5
];
const _hoisted_9$5 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$4 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 19 2020, at 04:27pm</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi Mr. Kovalsky,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos commodius agimus. Si longus, levis; <a href="#">Summum en\xEDm bonum exposuit vacuitatem doloris;</a> Eadem fortitudinis ratio reperietur. Duo Reges: constructio interrete. Facile est hoc cernere in primis puerorum aetatulis. </p><ul><li>Sed residamus, inquit, si placet.</li><li>Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint.</li><li>Beatus autem esse in maximarum rerum timore nemo potest.</li><li>Illa argumenta propria videamus, cur omnia sint paria peccata.</li></ul><p>Elizabeth</p></div></div>', 1);
const _hoisted_11$5 = { class: "reply-box-wrap" };
const _hoisted_12$5 = { class: "reply-bubble" };
const _hoisted_13$5 = { class: "reply-as" };
const _hoisted_14$5 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "sl sl-icon-options"
  })
], -1);
const _hoisted_16$5 = [
  _hoisted_15$4
];
const _hoisted_17$5 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$5 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/21.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$5,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$4)
            ]),
            _hoisted_6$5
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$5, 32)
        ]),
        createBaseVNode("div", _hoisted_9$5, [
          _hoisted_10$4,
          createBaseVNode("div", _hoisted_11$5, [
            createBaseVNode("div", _hoisted_12$5, [
              createBaseVNode("div", _hoisted_13$5, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$5,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[5] || (_cache[5] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$5)
                  ]),
                  _hoisted_17$5
                ], 512)
              ]),
              _hoisted_18$5
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$4 = { class: "header-area" };
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> Don&#39;t forget to send me those budget notes</span><span class="sender-email">&lt;greta@vuero.io&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$3 = [
  _hoisted_4$4
];
const _hoisted_6$4 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$4 = [
  _hoisted_7$4
];
const _hoisted_9$4 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$3 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 20 2020, at 08:43am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hi Erik,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo genere perveniant ad extremum; Non potes, nisi retexueris illa. </p><ul><li>Si id dicis, vicimus.</li><li> Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; </li><li>Sed ille, ut dixi, vitiose.</li><li> Nam, ut paulo ante docui, augendae voluptatis finis est doloris omnis amotio. </li><li> Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis naturae quasi per caliginem cernitur; </li></ul><p><mark> Deinde disputat, quod cuiusque generis animantium statui deceat extremum.</mark> Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Qui est in parvis malis. Sit enim idem caecus, debilis. Hic nihil fuit, quod quaereremus. </p><p> Negat esse eam, inquit, propter se expetendam. Collatio igitur ista te nihil iuvat. Rationis enim perfectio est virtus; At certe gravius. Laboro autem non sine causa; Nam Pyrrho, Aristo, Erillus iam diu abiecti. </p><p> Nam quid possumus facere melius? Primum divisit ineleganter; Duo Reges: constructio interrete. Erat enim Polemonis. Equidem e Cn. </p><p>Greta Kroppfer</p></div></div>', 1);
const _hoisted_11$4 = { class: "reply-box-wrap" };
const _hoisted_12$4 = { class: "reply-bubble" };
const _hoisted_13$4 = { class: "reply-as" };
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "sl sl-icon-options"
  })
], -1);
const _hoisted_16$4 = [
  _hoisted_15$3
];
const _hoisted_17$4 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$4 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/19.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$4,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args), ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$3, 32)
            ]),
            _hoisted_6$4
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[4] || (_cache[4] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$4, 32)
        ]),
        createBaseVNode("div", _hoisted_9$4, [
          _hoisted_10$3,
          createBaseVNode("div", _hoisted_11$4, [
            createBaseVNode("div", _hoisted_12$4, [
              createBaseVNode("div", _hoisted_13$4, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$4,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      tabindex: "0",
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args), ["prevent"]), ["space"])),
                      onClick: _cache[7] || (_cache[7] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$4, 32)
                  ]),
                  _hoisted_17$4
                ], 512)
              ]),
              _hoisted_18$4
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$3 = { class: "header-area" };
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> I couldn&#39;t catch up on last time&#39;s dinner</span><span class="sender-email">&lt;jonathan@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>4</span></div>', 2);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$2 = [
  _hoisted_4$3
];
const _hoisted_6$3 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$3 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$2 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 22 2020, at 09:17am</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hello dude,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare conare, quaeso. Prave, nequiter, turpiter cenabat; <em>Quid igitur, inquit, eos responsuros putas?</em> Erit enim mecum, si tecum erit. </p><p> Ratio enim nostra consentit, pugnat oratio. Age sane, inquam. Duo Reges: constructio interrete. Beatus sibi videtur esse moriens. Sed ego in hoc resisto; <em>Idemne, quod iucunde?</em></p><p><strong>Tamen a proposito, inquam, aberramus.</strong> Quid de Pythagora?</p><p> Cur deinde Metrodori liberos commendas? Non dolere, inquam, istud quam vim habeat postea videro; Pauca mutat vel plura sane; Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; </p><p>Elie Daniels</p></div><div class="attachments-list"><div class="attachment"><span>presentation.ppt</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-1.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-2.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-3.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$3 = { class: "reply-box-wrap" };
const _hoisted_12$3 = { class: "reply-bubble" };
const _hoisted_13$3 = { class: "reply-as" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$3 = [
  _hoisted_15$2
];
const _hoisted_17$3 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/32.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$3,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args), ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$2, 32)
            ]),
            _hoisted_6$3
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[4] || (_cache[4] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$3, 32)
        ]),
        createBaseVNode("div", _hoisted_9$3, [
          _hoisted_10$2,
          createBaseVNode("div", _hoisted_11$3, [
            createBaseVNode("div", _hoisted_12$3, [
              createBaseVNode("div", _hoisted_13$3, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$3,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      tabindex: "0",
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args), ["prevent"]), ["space"])),
                      onClick: _cache[7] || (_cache[7] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$3, 32)
                  ]),
                  _hoisted_17$3
                ], 512)
              ]),
              _hoisted_18$3
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "header-area" };
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> Important project review next thursday </span><span class="sender-email">&lt;melany@vuero.io&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$1 = [
  _hoisted_4$2
];
const _hoisted_6$2 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>Bookmark</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>Share message</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>Mark as spam</span></a></div></div>', 1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _hoisted_9$2 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$1 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>Sent on</span><span>Oct 21 2020, at 02:33pm</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>Hey man,</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec igitur Epicuri non probo, inquam. Nihil sane. <strong>Efficiens dici potest.</strong><em>Urgent tamen et nihil remittunt.</em> Ea possunt paria non esse. Duo Reges: constructio interrete. </p><ul><li> Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. </li><li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li></ul><p> Tum Triarius: Posthac quidem, inquit, audacius. Quodsi ipsam honestatem undique pertectam atque absolutam. Comprehensum, quod cognitum non habet? </p><p><em>Nonne igitur tibi videntur, inquit, mala?</em> Poterat autem inpune; Nunc omni virtuti vitium contrario nomine opponitur. </p><p>Sincerely,</p><p>Melany Wallace - Cofounder</p></div><div class="attachments-list"><div class="attachment"><span>budget_draft.xlsx</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>project-notes.docx</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$2 = { class: "reply-box-wrap" };
const _hoisted_12$2 = { class: "reply-bubble" };
const _hoisted_13$2 = { class: "reply-as" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Reply as"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.io")
], -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$2 = [
  _hoisted_15$1
];
const _hoisted_17$2 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>Reset</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>Spelling</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>Mention</span></a></div></div>', 1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "Type your message..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "Send Message")
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean },
    mobileMessageOpen: { type: Boolean }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const props = __props;
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["inbox-message-details", [
          props.mobileMessageOpen && props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !props.selected && "is-hidden"
        ]])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(onceImageErrored)(event, "150x150"))
          }, null, 32),
          _hoisted_2$2,
          createBaseVNode("div", {
            ref_key: "dropdownElement1",
            ref: dropdownElement1,
            class: "dropdown inbox-dropdown dropdown-trigger is-right"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args), ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$1, 32)
            ]),
            _hoisted_6$2
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            tabindex: "0",
            onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => emit("update:mobileMessageOpen", false), ["prevent"]), ["space"])),
            onClick: _cache[4] || (_cache[4] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$2, 32)
        ]),
        createBaseVNode("div", _hoisted_9$2, [
          _hoisted_10$1,
          createBaseVNode("div", _hoisted_11$2, [
            createBaseVNode("div", _hoisted_12$2, [
              createBaseVNode("div", _hoisted_13$2, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_14$2,
                createBaseVNode("div", {
                  ref_key: "dropdownElement2",
                  ref: dropdownElement2,
                  class: "dropdown inbox-dropdown dropdown-trigger is-right"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      tabindex: "0",
                      onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args), ["prevent"]), ["space"])),
                      onClick: _cache[7] || (_cache[7] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$2, 32)
                  ]),
                  _hoisted_17$2
                ], 512)
              ]),
              _hoisted_18$2
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "message-checkbox" };
const _hoisted_2$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Jonathan Krugger</span><span class="email">&lt;jonathan@vuero.io&gt;</span><span class="subject"><strong>I couldn&#39;t catch up on last time&#39;s dinner</strong></span></div><div class="pushed">Oct 22</div>', 2);
const _hoisted_6$1 = { class: "message-checkbox" };
const _hoisted_7$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Melany Wallace</span><span class="email">&lt;melany@vuero.io&gt;</span><span class="subject">Important project review next thursday</span></div><div class="pushed">Oct 21</div>', 2);
const _hoisted_11$1 = { class: "message-checkbox" };
const _hoisted_12$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Greta Kroppfer</span><span class="email">&lt;greta@vuero.io&gt;</span><span class="subject">Don&#39;t forget to send me those budget notes</span></div><div class="pushed">Oct 20</div>', 2);
const _hoisted_16$1 = { class: "message-checkbox" };
const _hoisted_17$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_19$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Elizabeth Fisher</span><span class="email">&lt;elizabeth@vuero.io&gt;</span><span class="subject">Meeting with the new customer on Monday</span></div><div class="pushed">Oct 19</div>', 2);
const _hoisted_21$1 = { class: "message-checkbox" };
const _hoisted_22$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Carmen Escudero</span><span class="email">&lt;carmen@vuero.io&gt;</span><span class="subject"> I got some new delightful stuff that you absolutely must see </span></div><div class="pushed">Oct 19</div>', 2);
const _hoisted_26$1 = { class: "message-checkbox" };
const _hoisted_27$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_29$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Irina Vierbovsky</span><span class="email">&lt;irina@vuero.io&gt;</span><span class="subject">This month&#39;s lead generation report</span></div><div class="pushed">Oct 18</div>', 2);
const _hoisted_31$1 = { class: "message-checkbox" };
const _hoisted_32$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_34$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Alejandro Badajoz</span><span class="email">&lt;alejandro@vuero.io&gt;</span><span class="subject"> New design ideas from the user experience team </span></div><div class="pushed">Oct 18</div>', 2);
const _hoisted_36$1 = { class: "message-checkbox" };
const _hoisted_37$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_38$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_39$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Edouard Falant</span><span class="email">&lt;edouard@vuero.io&gt;</span><span class="subject">Customer dashboard february bug report</span></div><div class="pushed">Oct 17</div>', 2);
const _hoisted_41$1 = { class: "message-checkbox" };
const _hoisted_42$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_44$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Sandrine Coulart</span><span class="email">&lt;sandrine@vuero.io&gt;</span><span class="subject">You didn&#39;t answer my last email !</span></div><div class="pushed">Oct 17</div>', 2);
const _hoisted_46$1 = { class: "message-checkbox" };
const _hoisted_47$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_49$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">Kelly Marston</span><span class="email">&lt;kelly@vuero.io&gt;</span><span class="subject">Hop in for the next project review</span></div><div class="pushed">Oct 16</div>', 2);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    conversationId: { default: 0 },
    selectedConversationList: { default: () => [] }
  },
  emits: ["update:conversationId", "update:selectedConversationList"],
  setup(__props, { emit }) {
    const props = __props;
    const unread = ref(true);
    const internalSelection = ref(props.selectedConversationList);
    watchEffect(() => {
      emit("update:selectedConversationList", internalSelection.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 2 && "is-selected", unread.value && "is-unread"]]),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
            unread.value = false;
            emit("update:conversationId", 2);
          }, ["prevent"]), ["space"])),
          onClick: _cache[2] || (_cache[2] = () => {
            unread.value = false;
            emit("update:conversationId", 2);
          })
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("label", _hoisted_2$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 2
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_3$1
            ])
          ]),
          _hoisted_4$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 1 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(() => emit("update:conversationId", 1), ["prevent"]), ["space"])),
          onClick: _cache[5] || (_cache[5] = () => emit("update:conversationId", 1))
        }, [
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("label", _hoisted_7$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 1
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_8$1
            ])
          ]),
          _hoisted_9$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 3 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(() => emit("update:conversationId", 3), ["prevent"]), ["space"])),
          onClick: _cache[8] || (_cache[8] = () => emit("update:conversationId", 3))
        }, [
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("label", _hoisted_12$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 3
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_13$1
            ])
          ]),
          _hoisted_14$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 4 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(() => emit("update:conversationId", 4), ["prevent"]), ["space"])),
          onClick: _cache[11] || (_cache[11] = () => emit("update:conversationId", 4))
        }, [
          createBaseVNode("div", _hoisted_16$1, [
            createBaseVNode("label", _hoisted_17$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 4
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_18$1
            ])
          ]),
          _hoisted_19$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 5 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[13] || (_cache[13] = withKeys(withModifiers(() => emit("update:conversationId", 5), ["prevent"]), ["space"])),
          onClick: _cache[14] || (_cache[14] = () => emit("update:conversationId", 5))
        }, [
          createBaseVNode("div", _hoisted_21$1, [
            createBaseVNode("label", _hoisted_22$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 5
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_23$1
            ])
          ]),
          _hoisted_24$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 6 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(() => emit("update:conversationId", 6), ["prevent"]), ["space"])),
          onClick: _cache[17] || (_cache[17] = () => emit("update:conversationId", 6))
        }, [
          createBaseVNode("div", _hoisted_26$1, [
            createBaseVNode("label", _hoisted_27$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 6
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_28$1
            ])
          ]),
          _hoisted_29$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 7 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[19] || (_cache[19] = withKeys(withModifiers(() => emit("update:conversationId", 7), ["prevent"]), ["space"])),
          onClick: _cache[20] || (_cache[20] = () => emit("update:conversationId", 7))
        }, [
          createBaseVNode("div", _hoisted_31$1, [
            createBaseVNode("label", _hoisted_32$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 7
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_33$1
            ])
          ]),
          _hoisted_34$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 8 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[22] || (_cache[22] = withKeys(withModifiers(() => emit("update:conversationId", 8), ["prevent"]), ["space"])),
          onClick: _cache[23] || (_cache[23] = () => emit("update:conversationId", 8))
        }, [
          createBaseVNode("div", _hoisted_36$1, [
            createBaseVNode("label", _hoisted_37$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 8
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_38$1
            ])
          ]),
          _hoisted_39$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 9 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[25] || (_cache[25] = withKeys(withModifiers(() => emit("update:conversationId", 9), ["prevent"]), ["space"])),
          onClick: _cache[26] || (_cache[26] = () => emit("update:conversationId", 9))
        }, [
          createBaseVNode("div", _hoisted_41$1, [
            createBaseVNode("label", _hoisted_42$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 9
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_43$1
            ])
          ]),
          _hoisted_44$1
        ], 34),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 10 && "is-selected"]]),
          tabindex: "0",
          onKeydown: _cache[28] || (_cache[28] = withKeys(withModifiers(() => emit("update:conversationId", 10), ["prevent"]), ["space"])),
          onClick: _cache[29] || (_cache[29] = () => emit("update:conversationId", 10))
        }, [
          createBaseVNode("div", _hoisted_46$1, [
            createBaseVNode("label", _hoisted_47$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 10
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_48$1
            ])
          ]),
          _hoisted_49$1
        ], 34)
      ], 64);
    };
  }
});
var inbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "inbox-wrapper" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "header-area" };
const _hoisted_4 = { class: "inbox-title" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "Inbox", -1);
const _hoisted_6 = { class: "dark-mode" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-menu" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:refresh-cw"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Refresh")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:bell"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Notifications")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user-plus"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Invite People")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:settings"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Settings")
    ])
  ])
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = { class: "sidebar-inner" };
const _hoisted_15 = { class: "inner-menu" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("a", { class: "button compose-button is-fullwidth" }, "Compose", -1);
const _hoisted_17 = { class: "inbox-menu" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:mail"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Inbox", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "24", -1);
const _hoisted_21 = [
  _hoisted_18,
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:file-text"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Drafts", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "2", -1);
const _hoisted_25 = [
  _hoisted_22,
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:send"
}, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "Sent", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "7", -1);
const _hoisted_29 = [
  _hoisted_26,
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:trash-2"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "Trash", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "18", -1);
const _hoisted_33 = [
  _hoisted_30,
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:alert-octagon"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", null, "Spam", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "29", -1);
const _hoisted_37 = [
  _hoisted_34,
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = { class: "scroll-menu" };
const _hoisted_39 = { class: "title-wrap" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "Search Contacts..."
}, null, -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1);
const _hoisted_42 = [
  _hoisted_40,
  _hoisted_41
];
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = { class: "contact-list has-slimscroll" };
const _hoisted_48 = { class: "contact-block" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Alice Carasca"),
  /* @__PURE__ */ createBaseVNode("span", null, "alice@vuero.io")
], -1);
const _hoisted_50 = { class: "contact-block" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Melany Wallace"),
  /* @__PURE__ */ createBaseVNode("span", null, "melany@vuero.io")
], -1);
const _hoisted_52 = { class: "contact-block" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Esteban Castellanos"),
  /* @__PURE__ */ createBaseVNode("span", null, "esteban@vuero.io")
], -1);
const _hoisted_54 = { class: "contact-block" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Jonathan Krugger"),
  /* @__PURE__ */ createBaseVNode("span", null, "jonathan@vuero.io")
], -1);
const _hoisted_56 = { class: "contact-block" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Christie Dallas"),
  /* @__PURE__ */ createBaseVNode("span", null, "christie@vuero.io")
], -1);
const _hoisted_58 = { class: "inbox-messages" };
const _hoisted_59 = { class: "header-area" };
const _hoisted_60 = { class: "actions" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_62 = [
  _hoisted_61
];
const _hoisted_63 = ["onKeydown"];
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check"
}, null, -1);
const _hoisted_65 = [
  _hoisted_64
];
const _hoisted_66 = { class: "actions" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("div", { class: "control inbox-search has-icon" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "text",
    class: "input is-rounded",
    placeholder: "Search Inbox..."
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:search"
    })
  ])
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_69 = [
  _hoisted_68
];
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-menu" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Mark all as read")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:eye-off"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Hide read")
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:calendar"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Sort by date")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Sort by user")
    ])
  ])
], -1);
const _hoisted_71 = { class: "messages-list has-slimscroll" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "inbox-message-overlay" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "loader is-loading" })
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    const contactSearchOpen = ref(false);
    const activeTab = ref("inbox");
    const selectedConversationId = ref(1);
    const selectedConversationList = ref([]);
    const mobileMessageOpen = ref(true);
    const mobileSidebarOpen = ref(false);
    const isAllChecked = computed(() => {
      return selectedConversationList.value.length === 10;
    });
    const toggleSelection = () => {
      if (isAllChecked.value) {
        selectedConversationList.value.splice(0, selectedConversationList.value.length);
      } else {
        selectedConversationList.value.splice(0, selectedConversationList.value.length);
        selectedConversationList.value.push(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
    };
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    watch(selectedConversationId, () => {
      mobileMessageOpen.value = true;
    });
    useHead({
      title: "Apps 2 - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_InboxMessagesList = _sfc_main$1;
      const _component_Message1 = _sfc_main$2;
      const _component_Message2 = _sfc_main$3;
      const _component_Message3 = _sfc_main$4;
      const _component_Message4 = _sfc_main$5;
      const _component_Message5 = _sfc_main$6;
      const _component_Message6 = _sfc_main$7;
      const _component_Message7 = _sfc_main$8;
      const _component_Message8 = _sfc_main$9;
      const _component_Message9 = _sfc_main$a;
      const _component_Message10 = _sfc_main$b;
      const _component_MinimalLayout = _sfc_main$c;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", {
                class: normalizeClass(["inbox-sidebar", [mobileSidebarOpen.value && "mobile-active"]])
              }, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_RouterLink, {
                      to: { name: "index" },
                      class: "inbox-brand"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AnimatedLogo, {
                          width: "36px",
                          height: "36px"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_5,
                    createBaseVNode("label", _hoisted_6, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: !unref(darkmode).isDark,
                        onChange: _cache[0] || (_cache[0] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
                      }, null, 40, _hoisted_7),
                      _hoisted_8
                    ])
                  ]),
                  createBaseVNode("div", {
                    ref_key: "dropdownElement1",
                    ref: dropdownElement1,
                    class: "dropdown inbox-dropdown dropdown-trigger is-right"
                  }, [
                    createBaseVNode("div", null, [
                      createBaseVNode("button", {
                        class: "button",
                        onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
                      }, _hoisted_10)
                    ]),
                    _hoisted_11
                  ], 512),
                  createBaseVNode("a", {
                    class: "inbox-action inbox-close-sidebar-mobile",
                    "aria-label": "Close",
                    tabindex: "0",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => mobileSidebarOpen.value = false, ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => mobileSidebarOpen.value = false)
                  }, _hoisted_13, 32)
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    _hoisted_16,
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "inbox" && "is-active"]),
                            tabindex: "0",
                            onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => activeTab.value = "inbox", ["prevent"]), ["space"])),
                            onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "inbox")
                          }, _hoisted_21, 34)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "drafts" && "is-active"]),
                            tabindex: "0",
                            onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => activeTab.value = "drafts", ["prevent"]), ["space"])),
                            onClick: _cache[7] || (_cache[7] = ($event) => activeTab.value = "drafts")
                          }, _hoisted_25, 34)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "sent" && "is-active"]),
                            tabindex: "0",
                            onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => activeTab.value = "sent", ["prevent"]), ["space"])),
                            onClick: _cache[9] || (_cache[9] = ($event) => activeTab.value = "sent")
                          }, _hoisted_29, 34)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "trash" && "is-active"]),
                            tabindex: "0",
                            onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => activeTab.value = "trash", ["prevent"]), ["space"])),
                            onClick: _cache[11] || (_cache[11] = ($event) => activeTab.value = "trash")
                          }, _hoisted_33, 34)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "span" && "is-active"]),
                            tabindex: "0",
                            onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => activeTab.value = "span", ["prevent"]), ["space"])),
                            onClick: _cache[13] || (_cache[13] = ($event) => activeTab.value = "span")
                          }, _hoisted_37, 34)
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("div", _hoisted_39, [
                      createBaseVNode("h3", {
                        class: normalizeClass([contactSearchOpen.value && "is-hidden"])
                      }, "Contacts", 2),
                      createBaseVNode("div", {
                        class: normalizeClass([[!contactSearchOpen.value && "is-hidden"], "control has-icon"])
                      }, _hoisted_42, 2),
                      createBaseVNode("a", {
                        class: normalizeClass([[contactSearchOpen.value && "is-hidden"], "button searcv-button"]),
                        "aria-label": "Search"
                      }, [
                        createBaseVNode("span", {
                          class: "icon is-small",
                          tabindex: "0",
                          onKeydown: _cache[14] || (_cache[14] = withKeys(withModifiers(($event) => contactSearchOpen.value = true, ["prevent"]), ["space"])),
                          onClick: _cache[15] || (_cache[15] = ($event) => contactSearchOpen.value = true)
                        }, _hoisted_44, 32)
                      ], 2),
                      createBaseVNode("a", {
                        class: normalizeClass([[!contactSearchOpen.value && "is-hidden"], "button cancel-searcv-button"]),
                        "aria-label": "Close"
                      }, [
                        createBaseVNode("span", {
                          class: "icon is-small",
                          tabindex: "0",
                          onKeydown: _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => contactSearchOpen.value = true, ["prevent"]), ["space"])),
                          onClick: _cache[17] || (_cache[17] = ($event) => contactSearchOpen.value = false)
                        }, _hoisted_46, 32)
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_47, [
                      createBaseVNode("div", _hoisted_48, [
                        createBaseVNode("img", {
                          src: "https://vuero.cssninja.io/demo/avatars/7.jpg",
                          alt: "",
                          onErrorOnce: _cache[18] || (_cache[18] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32),
                        _hoisted_49
                      ]),
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("img", {
                          src: "https://vuero.cssninja.io/demo/avatars/25.jpg",
                          alt: "",
                          onErrorOnce: _cache[19] || (_cache[19] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32),
                        _hoisted_51
                      ]),
                      createBaseVNode("div", _hoisted_52, [
                        createBaseVNode("img", {
                          src: "https://vuero.cssninja.io/demo/avatars/18.jpg",
                          alt: "",
                          onErrorOnce: _cache[20] || (_cache[20] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32),
                        _hoisted_53
                      ]),
                      createBaseVNode("div", _hoisted_54, [
                        createBaseVNode("img", {
                          src: "https://vuero.cssninja.io/demo/avatars/32.jpg",
                          alt: "",
                          onErrorOnce: _cache[21] || (_cache[21] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32),
                        _hoisted_55
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("img", {
                          src: "https://vuero.cssninja.io/demo/avatars/38.jpg",
                          alt: "",
                          onErrorOnce: _cache[22] || (_cache[22] = (event) => unref(onceImageErrored)(event, "150x150"))
                        }, null, 32),
                        _hoisted_57
                      ])
                    ])
                  ])
                ])
              ], 2),
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("a", {
                      class: "inbox-action mobile-menu-action",
                      "aria-label": "Open messages list",
                      tabindex: "0",
                      onKeydown: _cache[23] || (_cache[23] = withKeys(withModifiers(($event) => mobileSidebarOpen.value = true, ["prevent"]), ["space"])),
                      onClick: _cache[24] || (_cache[24] = ($event) => mobileSidebarOpen.value = true)
                    }, _hoisted_62, 32),
                    createBaseVNode("a", {
                      class: normalizeClass(["inbox-action check-all-action", [unref(isAllChecked) && "is-checked"]]),
                      "aria-label": "Toggle selection",
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(toggleSelection, ["prevent"]), ["space"]),
                      onClick: toggleSelection
                    }, _hoisted_65, 42, _hoisted_63)
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    _hoisted_67,
                    createBaseVNode("div", {
                      ref_key: "dropdownElement2",
                      ref: dropdownElement2,
                      class: "dropdown inbox-dropdown dropdown-trigger is-right"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("button", {
                          class: "button",
                          onClick: _cache[25] || (_cache[25] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                        }, _hoisted_69)
                      ]),
                      _hoisted_70
                    ], 512)
                  ])
                ]),
                createBaseVNode("div", _hoisted_71, [
                  createVNode(_component_InboxMessagesList, {
                    conversationId: selectedConversationId.value,
                    "onUpdate:conversationId": _cache[26] || (_cache[26] = ($event) => selectedConversationId.value = $event),
                    selectedConversationList: selectedConversationList.value,
                    "onUpdate:selectedConversationList": _cache[27] || (_cache[27] = ($event) => selectedConversationList.value = $event)
                  }, null, 8, ["conversationId", "selectedConversationList"])
                ])
              ]),
              _hoisted_72,
              createVNode(_component_Message1, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[28] || (_cache[28] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 1
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message2, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[29] || (_cache[29] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 2
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message3, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[30] || (_cache[30] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 3
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message4, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[31] || (_cache[31] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 4
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message5, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[32] || (_cache[32] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 5
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message6, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[33] || (_cache[33] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 6
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message7, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[34] || (_cache[34] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 7
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message8, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[35] || (_cache[35] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 8
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message9, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[36] || (_cache[36] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 9
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message10, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[37] || (_cache[37] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 10
              }, null, 8, ["mobile-message-open", "selected"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
