import { _ as _sfc_main$5 } from "./VModal.8c95aa77.js";
import { _ as _sfc_main$4 } from "./VAvatar.08652fea.js";
import { _ as _sfc_main$3 } from "./VSwitchBlock.3a146329.js";
import { b as _sfc_main$2 } from "./index.e178843f.js";
import { _ as _sfc_main$1 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as __unplugin_components_0 } from "./AnimatedLogo.9189a8f1.js";
import { d as defineComponent, k as ref, $ as useRouter, a1 as useHead, Y as onMounted, Z as onUnmounted, z as resolveComponent, o as openBlock, f as createElementBlock, q as createBaseVNode, s as createVNode, w as withCtx, g as normalizeClass, W as withModifiers, a2 as withKeys, F as Fragment, X as renderList, h as unref, ae as createStaticVNode, x as createTextVNode } from "./vendor.6548d360.js";
import { t as tns } from "./tiny-slider.d87e9682.js";
import { o as onceImageErrored } from "./via-placeholder.9af8280d.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useNotyf } from "./useNotyf.8a48e815.js";
import "./useThemeColors.b71015d4.js";
var _imports_0 = "/assets/vuero-signup.7a9b164d.webp";
var signup1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "signup-nav" };
const _hoisted_2 = { class: "signup-nav-inner" };
const _hoisted_3 = {
  id: "vuero-signup",
  class: "signup-wrapper"
};
const _hoisted_4 = { class: "steps-container" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Profile Pic", -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:shield"
  })
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Account", -1);
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Done", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = ["value"];
const _hoisted_15 = { class: "hero is-fullheight" };
const _hoisted_16 = { class: "hero-body" };
const _hoisted_17 = { class: "container" };
const _hoisted_18 = { class: "column is-4 is-offset-1" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "main-signup-title",
  class: "title is-3 signup-title"
}, " Become a Vuero ", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "main-signup-subtitle",
  class: "subtitle signup-subtitle"
}, " And simply join an unmatched design experience. ", -1);
const _hoisted_21 = { class: "signup-card" };
const _hoisted_22 = { class: "columns is-multiline" };
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "First Name", -1);
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "Last Name", -1);
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "email"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "Email Address", -1);
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<div class="column is-12"><div class="signup-type"><div class="box-wrap"><input type="radio" name="signup_type" checked><div class="signup-box"><i aria-hidden="true" class="lnil lnil-coffee-cup"></i><div class="meta"><span>Free</span><span>Nice to get started</span></div></div></div><div class="box-wrap"><input type="radio" name="signup_type"><div class="signup-box"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="meta"><span>Paid</span><span>Get a lot more features</span></div></div></div></div></div>', 1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "control is-agree" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode(" By continuing you agree to our "),
    /* @__PURE__ */ createBaseVNode("a", { href: "#" }, "Terms"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("a", { href: "#" }, "Privacy")
  ])
], -1);
const _hoisted_34 = { class: "button-wrap has-help" };
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" Or ");
const _hoisted_37 = /* @__PURE__ */ createTextVNode(" Sign In ");
const _hoisted_38 = /* @__PURE__ */ createTextVNode(" to your account. ");
const _hoisted_39 = { class: "signup-profile-wrapper" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, " Add a profile picture ", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h2", { class: "subtitle signup-subtitle has-text-centered" }, " This is your visual identity. ", -1);
const _hoisted_42 = { class: "picture-selector" };
const _hoisted_43 = { class: "image-container" };
const _hoisted_44 = ["src"];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "divider-container" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Or select an avatar")
  ])
], -1);
const _hoisted_48 = { class: "image-wrapper" };
const _hoisted_49 = ["src"];
const _hoisted_50 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" Continue ");
const _hoisted_52 = { class: "column is-4 is-offset-4 username-form" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, "Pick a username", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("h2", { class: "subtitle signup-subtitle has-text-centered" }, " Your username is how others will find you on Vuero so pick a good one. You can change it later. ", -1);
const _hoisted_55 = ["onSubmit"];
const _hoisted_56 = { class: "columns is-multiline" };
const _hoisted_57 = { class: "column is-12" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "username"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "Username", -1);
const _hoisted_60 = { class: "column is-12" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "Password", -1);
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "Confirm Password", -1);
const _hoisted_66 = { class: "column is-12" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("label", { for: "send-marketing" }, [
  /* @__PURE__ */ createBaseVNode("span", null, " Send me marketing and transaction emails ")
], -1);
const _hoisted_68 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_69 = /* @__PURE__ */ createTextVNode(" Done ");
const _hoisted_70 = { class: "has-text-centered" };
const _hoisted_71 = { class: "upload-demo-wrap" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("small", { class: "help-text" }, "Use the slider to resize the image", -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("div", { class: "file" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "file-label" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      class: "file-input",
      type: "file",
      name: "resume"
    }),
    /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
      /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "fas fa-cloud-upload-alt"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
    ])
  ])
], -1);
const _hoisted_75 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let slider;
    const sliderElement = ref();
    const router = useRouter();
    const notif = useNotyf();
    const step = ref(0);
    const selectedAvatar = ref(2);
    const isLoading = ref(false);
    const resizeValue = ref(70);
    const uploadModalOpen = ref(false);
    const avatars = [
      "/images/avatars/svg/vuero-1.svg",
      "/images/avatars/svg/vuero-2.svg",
      "/images/avatars/svg/vuero-3.svg",
      "/images/avatars/svg/vuero-4.svg",
      "/images/avatars/svg/vuero-5.svg",
      "/images/avatars/svg/vuero-6.svg",
      "/images/avatars/svg/vuero-7.svg",
      "/images/avatars/svg/vuero-8.svg",
      "/images/avatars/svg/vuero-9.svg",
      "/images/avatars/svg/vuero-10.svg",
      "/images/avatars/svg/vuero-11.svg",
      "/images/avatars/svg/vuero-12.svg"
    ];
    const handleSignup = async () => {
      if (!isLoading.value) {
        step.value++;
        isLoading.value = true;
        sleep(2e3);
        notif.dismissAll();
        notif.success("Welcome, Erik Kovalsky");
        router.push({ name: "sidebar-dashboards" });
        isLoading.value = false;
      }
    };
    const onAvatarChanged = (info) => {
      const indexPrev = info.indexCached;
      const indexCurrent = info.index;
      info.slideItems[indexPrev].classList.remove("active");
      info.slideItems[indexCurrent].classList.add("active");
      if (info.displayIndex) {
        selectedAvatar.value = info.displayIndex - 1;
      }
    };
    useHead({
      title: "Auth Signup 1 - Vuero"
    });
    onMounted(() => {
      if (sliderElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: false,
          nav: false,
          mouseDrag: true,
          startIndex: 2,
          fixedWidth: 100,
          gutter: 40,
          slideBy: 1,
          swipeAngle: false,
          center: false,
          loop: true,
          edgePadding: 325
        });
        slider.events.on("indexChanged", onAvatarChanged);
        onAvatarChanged(slider.getInfo());
      }
    });
    onUnmounted(() => {
      if (slider) {
        slider.events.off("indexChanged", onAvatarChanged);
        slider.destroy();
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VSwitchBlock = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_Slider = resolveComponent("Slider");
      const _component_VModal = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "logo"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "36px",
                  height: "36px"
                })
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", {
            class: normalizeClass(["signup-steps", [step.value === 0 && "is-hidden"]])
          }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", {
                class: normalizeClass(["step-icon is-active", [step.value >= 1 && "is-active", step.value < 1 && "is-inactive"]])
              }, _hoisted_7, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [step.value >= 2 && "is-active", step.value < 2 && "is-inactive"]])
              }, _hoisted_10, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [step.value >= 3 && "is-active", step.value < 3 && "is-inactive"]])
              }, _hoisted_13, 2),
              createBaseVNode("progress", {
                class: "progress",
                value: step.value - 1,
                max: 2
              }, "25%", 8, _hoisted_14)
            ])
          ], 2),
          createBaseVNode("img", {
            class: normalizeClass([[step.value > 0 && "is-hidden"], "card-bg"]),
            src: _imports_0,
            alt: ""
          }, null, 2),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 0 && "is-hidden"]])
                }, [
                  createBaseVNode("div", _hoisted_18, [
                    _hoisted_19,
                    _hoisted_20,
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("form", {
                        class: "signup-form is-mobile-spaced",
                        onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
                        }, ["prevent"]))
                      }, [
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    _hoisted_24,
                                    _hoisted_25
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_26, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    _hoisted_27,
                                    _hoisted_28
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_29, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    _hoisted_30,
                                    _hoisted_31
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _hoisted_32
                        ]),
                        _hoisted_33,
                        createBaseVNode("div", _hoisted_34, [
                          createVNode(_component_VButton, {
                            color: "primary",
                            size: "big",
                            bold: "",
                            fullwidth: "",
                            rounded: "",
                            onClick: _cache[0] || (_cache[0] = ($event) => step.value++)
                          }, {
                            default: withCtx(() => [
                              _hoisted_35
                            ]),
                            _: 1
                          }),
                          createBaseVNode("span", null, [
                            _hoisted_36,
                            createVNode(_component_RouterLink, { to: { name: "auth-login-1" } }, {
                              default: withCtx(() => [
                                _hoisted_37
                              ]),
                              _: 1
                            }),
                            _hoisted_38
                          ])
                        ])
                      ], 32)
                    ])
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 1 && "is-hidden"]])
                }, [
                  createBaseVNode("form", {
                    class: "column is-8",
                    onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
                    }, ["prevent"]))
                  }, [
                    createBaseVNode("div", _hoisted_39, [
                      _hoisted_40,
                      _hoisted_41,
                      createBaseVNode("div", _hoisted_42, [
                        createBaseVNode("div", _hoisted_43, [
                          createBaseVNode("img", {
                            src: avatars[selectedAvatar.value],
                            alt: ""
                          }, null, 8, _hoisted_44),
                          createBaseVNode("div", {
                            class: "upload-button",
                            role: "button",
                            tabindex: "0",
                            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                            onClick: _cache[3] || (_cache[3] = ($event) => uploadModalOpen.value = true)
                          }, _hoisted_46, 32)
                        ])
                      ])
                    ]),
                    _hoisted_47,
                    createBaseVNode("div", {
                      ref_key: "sliderElement",
                      ref: sliderElement,
                      class: "avatar-carousel resized-mobile"
                    }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(avatars, (avatar, key) => {
                        return createBaseVNode("div", {
                          key,
                          class: "carousel-item"
                        }, [
                          createBaseVNode("div", _hoisted_48, [
                            createBaseVNode("img", {
                              src: avatar,
                              alt: "",
                              onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                            }, null, 40, _hoisted_49)
                          ])
                        ]);
                      }), 64))
                    ], 512),
                    createBaseVNode("div", _hoisted_50, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        size: "big",
                        rounded: "",
                        lower: "",
                        onClick: _cache[5] || (_cache[5] = ($event) => step.value++)
                      }, {
                        default: withCtx(() => [
                          _hoisted_51
                        ]),
                        _: 1
                      })
                    ])
                  ], 32)
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 2 && "is-hidden"]])
                }, [
                  createBaseVNode("div", _hoisted_52, [
                    _hoisted_53,
                    _hoisted_54,
                    createBaseVNode("form", {
                      class: "signup-form",
                      onSubmit: withModifiers(handleSignup, ["prevent"])
                    }, [
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("div", _hoisted_57, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  _hoisted_58,
                                  _hoisted_59
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_60, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  _hoisted_61,
                                  _hoisted_62
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_63, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  _hoisted_64,
                                  _hoisted_65
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_66, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { class: "has-switch" }, {
                                default: withCtx(() => [
                                  _hoisted_67,
                                  createVNode(_component_VSwitchBlock, {
                                    color: "success",
                                    checked: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_68, [
                        createVNode(_component_VButton, {
                          size: "big",
                          color: "primary",
                          type: "submit",
                          rounded: "",
                          primary: "",
                          lower: "",
                          loading: isLoading.value
                        }, {
                          default: withCtx(() => [
                            _hoisted_69
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ], 40, _hoisted_55)
                  ])
                ], 2)
              ])
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Upload and crop your picture",
          actions: "center",
          size: "small",
          onClose: _cache[8] || (_cache[8] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_70, [
              createBaseVNode("div", _hoisted_71, [
                createVNode(_component_VAvatar, { size: "big" })
              ]),
              _hoisted_72,
              createVNode(_component_VField, { class: "resize-handler" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Slider, {
                        modelValue: resizeValue.value,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => resizeValue.value = $event),
                        tooltips: false
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          cancel: withCtx(() => [
            _hoisted_73
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_74
                  ]),
                  _: 1
                }),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      class: "upload-result",
                      size: "big",
                      outlined: "",
                      disabled: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_75
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
export { _sfc_main as default };
