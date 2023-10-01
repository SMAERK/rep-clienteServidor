import _sfc_main$6 from "./SidebarLayout.6399bc9d.js";
import { _ as _sfc_main$5 } from "./VIconButton.f948e51d.js";
import { _ as _sfc_main$4 } from "./VTag.f234897b.js";
import { _ as _sfc_main$3 } from "./VPlaceloadText.2b6ef8c1.js";
import { a as useUserSession, b as _sfc_main$1, d as _sfc_main$2 } from "./index.e178843f.js";
import { d as defineComponent, $ as useRouter, ac as Notyf, m as useI18n, k as ref, aM as withAsyncContext, Q as watch, Y as onMounted, a1 as useHead, z as resolveComponent, au as resolveDirective, o as openBlock, p as createBlock, w as withCtx, s as createVNode, h as unref, y as createCommentVNode, f as createElementBlock, t as toDisplayString, F as Fragment, X as renderList, a3 as withDirectives, x as createTextVNode } from "./vendor.6548d360.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import { e as tryGetUsers, f as trySendEmail, h as tryActiveUsers } from "./index.c13a9b10.js";
import { h as hooks } from "./moment.17f8281e.js";
import "./UserProfileDropdown.c528b802.js";
import "./VAvatar.08652fea.js";
import "./via-placeholder.9af8280d.js";
import "./VProgress.5bff1011.js";
import "./panels.9ed80fb9.js";
import "./VDropdown.38fc5e7d.js";
import "./VIcon.de064b10.js";
import "./useDropdown.145111f2.js";
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
const consolePrefix = "SweetAlert2:";
const uniqueArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const toArray = (nodeList) => Array.prototype.slice.call(nodeList);
const warn = (message) => {
  console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
};
const error = (message) => {
  console.error(`${consolePrefix} ${message}`);
};
const previousWarnOnceMessages = [];
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
const warnAboutDeprecation = (deprecatedParam, useInstead) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
};
const callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const defaultParams = {
  title: "",
  titleText: "",
  text: "",
  html: "",
  footer: "",
  icon: void 0,
  iconColor: void 0,
  iconHtml: void 0,
  template: void 0,
  toast: false,
  showClass: {
    popup: "swal2-show",
    backdrop: "swal2-backdrop-show",
    icon: "swal2-icon-show"
  },
  hideClass: {
    popup: "swal2-hide",
    backdrop: "swal2-backdrop-hide",
    icon: "swal2-icon-hide"
  },
  customClass: {},
  target: "body",
  color: void 0,
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: void 0,
  preDeny: void 0,
  confirmButtonText: "OK",
  confirmButtonAriaLabel: "",
  confirmButtonColor: void 0,
  denyButtonText: "No",
  denyButtonAriaLabel: "",
  denyButtonColor: void 0,
  cancelButtonText: "Cancel",
  cancelButtonAriaLabel: "",
  cancelButtonColor: void 0,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: "&times;",
  closeButtonAriaLabel: "Close this dialog",
  loaderHtml: "",
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: void 0,
  imageWidth: void 0,
  imageHeight: void 0,
  imageAlt: "",
  timer: void 0,
  timerProgressBar: false,
  width: void 0,
  padding: void 0,
  background: void 0,
  input: void 0,
  inputPlaceholder: "",
  inputLabel: "",
  inputValue: "",
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: void 0,
  returnInputValueOnDeny: false,
  validationMessage: void 0,
  grow: false,
  position: "center",
  progressSteps: [],
  currentProgressStep: void 0,
  progressStepsDistance: void 0,
  willOpen: void 0,
  didOpen: void 0,
  didRender: void 0,
  willClose: void 0,
  didClose: void 0,
  didDestroy: void 0,
  scrollbarPadding: true
};
const updatableParams = [
  "allowEscapeKey",
  "allowOutsideClick",
  "background",
  "buttonsStyling",
  "cancelButtonAriaLabel",
  "cancelButtonColor",
  "cancelButtonText",
  "closeButtonAriaLabel",
  "closeButtonHtml",
  "color",
  "confirmButtonAriaLabel",
  "confirmButtonColor",
  "confirmButtonText",
  "currentProgressStep",
  "customClass",
  "denyButtonAriaLabel",
  "denyButtonColor",
  "denyButtonText",
  "didClose",
  "didDestroy",
  "footer",
  "hideClass",
  "html",
  "icon",
  "iconColor",
  "iconHtml",
  "imageAlt",
  "imageHeight",
  "imageUrl",
  "imageWidth",
  "preConfirm",
  "preDeny",
  "progressSteps",
  "returnFocus",
  "reverseButtons",
  "showCancelButton",
  "showCloseButton",
  "showConfirmButton",
  "showDenyButton",
  "text",
  "title",
  "titleText",
  "willClose"
];
const deprecatedParams = {};
const toastIncompatibleParams = [
  "allowOutsideClick",
  "allowEnterKey",
  "backdrop",
  "focusConfirm",
  "focusDeny",
  "focusCancel",
  "returnFocus",
  "heightAuto",
  "keydownListenerCapture"
];
const isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
const isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1;
};
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName];
};
const checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    warn(`Unknown parameter "${param}"`);
  }
};
const checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    warn(`The parameter "${param}" is incompatible with toasts`);
  }
};
const checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    warnAboutDeprecation(param, isDeprecatedParameter(param));
  }
};
const showWarningsForParams = (params) => {
  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }
  for (const param in params) {
    checkIfParamIsValid(param);
    if (params.toast) {
      checkIfToastParamIsValid(param);
    }
    checkIfParamIsDeprecated(param);
  }
};
const swalPrefix = "swal2-";
const prefix = (items) => {
  const result = {};
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};
const swalClasses = prefix([
  "container",
  "shown",
  "height-auto",
  "iosfix",
  "popup",
  "modal",
  "no-backdrop",
  "no-transition",
  "toast",
  "toast-shown",
  "show",
  "hide",
  "close",
  "title",
  "html-container",
  "actions",
  "confirm",
  "deny",
  "cancel",
  "default-outline",
  "footer",
  "icon",
  "icon-content",
  "image",
  "input",
  "file",
  "range",
  "select",
  "radio",
  "checkbox",
  "label",
  "textarea",
  "inputerror",
  "input-label",
  "validation-message",
  "progress-steps",
  "active-progress-step",
  "progress-step",
  "progress-step-line",
  "loader",
  "loading",
  "styled",
  "top",
  "top-start",
  "top-end",
  "top-left",
  "top-right",
  "center",
  "center-start",
  "center-end",
  "center-left",
  "center-right",
  "bottom",
  "bottom-start",
  "bottom-end",
  "bottom-left",
  "bottom-right",
  "grow-row",
  "grow-column",
  "grow-fullscreen",
  "rtl",
  "timer-progress-bar",
  "timer-progress-bar-container",
  "scrollbar-measure",
  "icon-success",
  "icon-warning",
  "icon-info",
  "icon-question",
  "icon-error",
  "no-war"
]);
const iconTypes = prefix(["success", "warning", "info", "question", "error"]);
const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
const elementBySelector = (selectorString) => {
  const container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};
const elementByClass = (className) => {
  return elementBySelector(`.${className}`);
};
const getPopup = () => elementByClass(swalClasses.popup);
const getIcon = () => elementByClass(swalClasses.icon);
const getTitle = () => elementByClass(swalClasses.title);
const getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
const getImage = () => elementByClass(swalClasses.image);
const getProgressSteps$1 = () => elementByClass(swalClasses["progress-steps"]);
const getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
const getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
const getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
const getInputLabel = () => elementByClass(swalClasses["input-label"]);
const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
const getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
const getActions = () => elementByClass(swalClasses.actions);
const getFooter = () => elementByClass(swalClasses.footer);
const getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
const getCloseButton = () => elementByClass(swalClasses.close);
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
const getFocusableElements = () => {
  const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((a, b) => {
    const tabindexA = parseInt(a.getAttribute("tabindex"));
    const tabindexB = parseInt(b.getAttribute("tabindex"));
    if (tabindexA > tabindexB) {
      return 1;
    } else if (tabindexA < tabindexB) {
      return -1;
    }
    return 0;
  });
  const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter((el) => el.getAttribute("tabindex") !== "-1");
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el) => isVisible$1(el));
};
const isModal = () => {
  return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
};
const isToast = () => {
  return getPopup() && hasClass(getPopup(), swalClasses.toast);
};
const isLoading = () => {
  return getPopup().hasAttribute("data-loading");
};
const states = {
  previousBodyPadding: null
};
const setInnerHtml = (elem, html) => {
  elem.textContent = "";
  if (html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, `text/html`);
    toArray(parsed.querySelector("head").childNodes).forEach((child) => {
      elem.appendChild(child);
    });
    toArray(parsed.querySelector("body").childNodes).forEach((child) => {
      elem.appendChild(child);
    });
  }
};
const hasClass = (elem, className) => {
  if (!className) {
    return false;
  }
  const classList = className.split(/\s+/);
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }
  return true;
};
const removeCustomClasses = (elem, params) => {
  toArray(elem.classList).forEach((className) => {
    if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
      elem.classList.remove(className);
    }
  });
};
const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params);
  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
      return warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
    }
    addClass(elem, params.customClass[className]);
  }
};
const getInput$1 = (popup, inputType) => {
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case "select":
    case "textarea":
    case "file":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputType]}`);
    case "checkbox":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
    case "radio":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
    case "range":
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
    default:
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
  }
};
const focusInput = (input) => {
  input.focus();
  if (input.type !== "file") {
    const val = input.value;
    input.value = "";
    input.value = val;
  }
};
const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === "string") {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach((className) => {
    if (Array.isArray(target)) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
const addClass = (target, classList) => {
  toggleClass(target, classList, true);
};
const removeClass = (target, classList) => {
  toggleClass(target, classList, false);
};
const getDirectChildByClass = (elem, className) => {
  const childNodes = toArray(elem.childNodes);
  for (let i = 0; i < childNodes.length; i++) {
    if (hasClass(childNodes[i], className)) {
      return childNodes[i];
    }
  }
};
const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value);
  }
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === "number" ? `${value}px` : value;
  } else {
    elem.style.removeProperty(property);
  }
};
const show = (elem, display = "flex") => {
  elem.style.display = display;
};
const hide = (elem) => {
  elem.style.display = "none";
};
const setStyle = (parent, selector, property, value) => {
  const el = parent.querySelector(selector);
  if (el) {
    el.style[property] = value;
  }
};
const toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem);
};
const isVisible$1 = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
const hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem);
  const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
  const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
  return animDuration > 0 || transDuration > 0;
};
const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = getTimerProgressBar();
  if (isVisible$1(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = "none";
      timerProgressBar.style.width = "100%";
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1e3}s linear`;
      timerProgressBar.style.width = "0%";
    }, 10);
  }
};
const stopTimerProgressBar = () => {
  const timerProgressBar = getTimerProgressBar();
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty("transition");
  timerProgressBar.style.width = "100%";
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
  timerProgressBar.style.removeProperty("transition");
  timerProgressBar.style.width = `${timerProgressBarPercent}%`;
};
const isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";
const RESTORE_FOCUS_TIMEOUT = 100;
const globalState = {};
const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
};
const restoreActiveElement = (returnFocus) => {
  return new Promise((resolve) => {
    if (!returnFocus) {
      return resolve();
    }
    const x = window.scrollX;
    const y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT);
    window.scrollTo(x, y);
  });
};
const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
const resetOldContainer = () => {
  const oldContainer = getContainer();
  if (!oldContainer) {
    return false;
  }
  oldContainer.remove();
  removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
  return true;
};
const resetValidationMessage$1 = () => {
  globalState.currentInstance.resetValidationMessage();
};
const addInputChangeListeners = () => {
  const popup = getPopup();
  const input = getDirectChildByClass(popup, swalClasses.input);
  const file = getDirectChildByClass(popup, swalClasses.file);
  const range = popup.querySelector(`.${swalClasses.range} input`);
  const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
  const select = getDirectChildByClass(popup, swalClasses.select);
  const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
  const textarea = getDirectChildByClass(popup, swalClasses.textarea);
  input.oninput = resetValidationMessage$1;
  file.onchange = resetValidationMessage$1;
  select.onchange = resetValidationMessage$1;
  checkbox.onchange = resetValidationMessage$1;
  textarea.oninput = resetValidationMessage$1;
  range.oninput = () => {
    resetValidationMessage$1();
    rangeOutput.value = range.value;
  };
  range.onchange = () => {
    resetValidationMessage$1();
    range.nextSibling.value = range.value;
  };
};
const getTarget = (target) => typeof target === "string" ? document.querySelector(target) : target;
const setupAccessibility = (params) => {
  const popup = getPopup();
  popup.setAttribute("role", params.toast ? "alert" : "dialog");
  popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
  if (!params.toast) {
    popup.setAttribute("aria-modal", "true");
  }
};
const setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === "rtl") {
    addClass(getContainer(), swalClasses.rtl);
  }
};
const init = (params) => {
  const oldContainerExisted = resetOldContainer();
  if (isNodeEnv()) {
    error("SweetAlert2 requires document to initialize");
    return;
  }
  const container = document.createElement("div");
  container.className = swalClasses.container;
  if (oldContainerExisted) {
    addClass(container, swalClasses["no-transition"]);
  }
  setInnerHtml(container, sweetHTML);
  const targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
  noWarMessageForRussians(container, params);
};
const noWarMessageForRussians = (container, params) => {
  if (params.toast) {
    return;
  }
  const message = getRandomElement([
    {
      text: "\u0428\u0412\u0410\u0420\u0426\u0415\u041D\u0415\u0413\u0413\u0415\u0420 \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F <br> \u043A \u0420\u0423\u0421\u0421\u041A\u041E\u041C\u0423 \u041D\u0410\u0420\u041E\u0414\u0423 \u043E \u0432\u043E\u0439\u043D\u0435",
      youtubeId: "fWClXZd9c78"
    },
    {
      text: "\u0420\u0423\u0421\u0421\u041A\u0418\u0419 \u041F\u0410\u0422\u0420\u0418\u041E\u0422 <br> \u043E\u0442\u043A\u0440\u044B\u043B \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0442\u0430\u0439\u043D\u0443 \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
      youtubeId: "_RjBNkn88yA"
    },
    {
      text: "\u0413\u0415\u0420\u041E\u0419 \u041D\u041E\u0412\u041E\u0420\u041E\u0421\u0421\u0418\u0418 \u0421\u0422\u0420\u0415\u041B\u041A\u041E\u0412 <br> \u0434\u0430\u043B \u043E\u0446\u0435\u043D\u043A\u0443 \u0445\u043E\u0434\u0443 \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
      youtubeId: "yUmzQT4C8JY"
    },
    {
      text: "\u0424\u0418\u041D\u0421\u041A\u0418\u0419 \u0414\u0420\u0423\u0413 \u0420\u041E\u0421\u0421\u0418\u0418 <br> \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u041F\u041E-\u0420\u0423\u0421\u0421\u041A\u0418 \u043E \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
      youtubeId: "hkCYb6edUrQ"
    }
  ]);
  if (navigator.language === "ru" && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    const noWar = document.createElement("div");
    noWar.className = swalClasses["no-war"];
    setInnerHtml(noWar, `<a href="https://www.youtube.com/watch?v=${message.youtubeId}" target="_blank">${message.text}</a>`);
    container.appendChild(noWar);
    container.style.paddingTop = "4em";
  }
};
const parseHtmlToContainer = (param, target) => {
  if (param instanceof HTMLElement) {
    target.appendChild(param);
  } else if (typeof param === "object") {
    handleObject(param, target);
  } else if (param) {
    setInnerHtml(target, param);
  }
};
const handleObject = (param, target) => {
  if (param.jquery) {
    handleJqueryElem(target, param);
  } else {
    setInnerHtml(target, param.toString());
  }
};
const handleJqueryElem = (target, elem) => {
  target.textContent = "";
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};
const animationEndEvent = (() => {
  if (isNodeEnv()) {
    return false;
  }
  const testEl = document.createElement("div");
  const transEndEventNames = {
    WebkitAnimation: "webkitAnimationEnd",
    animation: "animationend"
  };
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") {
      return transEndEventNames[i];
    }
  }
  return false;
})();
const measureScrollbar = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = swalClasses["scrollbar-measure"];
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};
const renderActions = (instance, params) => {
  const actions = getActions();
  const loader = getLoader();
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }
  applyCustomClass(actions, params, "actions");
  renderButtons(actions, loader, params);
  setInnerHtml(loader, params.loaderHtml);
  applyCustomClass(loader, params, "loader");
};
function renderButtons(actions, loader, params) {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  renderButton(confirmButton, "confirm", params);
  renderButton(denyButton, "deny", params);
  renderButton(cancelButton, "cancel", params);
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
  if (params.reverseButtons) {
    if (params.toast) {
      actions.insertBefore(cancelButton, confirmButton);
      actions.insertBefore(denyButton, confirmButton);
    } else {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    }
  }
}
function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
  }
  addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    addClass(confirmButton, swalClasses["default-outline"]);
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor;
    addClass(denyButton, swalClasses["default-outline"]);
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
    addClass(cancelButton, swalClasses["default-outline"]);
  }
}
function renderButton(button, buttonType, params) {
  toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
  setInnerHtml(button, params[`${buttonType}ButtonText`]);
  button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]);
  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, `${buttonType}Button`);
  addClass(button, params[`${buttonType}ButtonClass`]);
}
function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === "string") {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
  }
}
function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}
function handleGrowParam(container, grow) {
  if (grow && typeof grow === "string") {
    const growClass = `grow-${grow}`;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}
const renderContainer = (instance, params) => {
  const container = getContainer();
  if (!container) {
    return;
  }
  handleBackdropParam(container, params.backdrop);
  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow);
  applyCustomClass(container, params, "container");
};
var privateProps = {
  awaitingPromise: new WeakMap(),
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};
const inputTypes = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
const renderInput = (instance, params) => {
  const popup = getPopup();
  const innerParams = privateProps.innerParams.get(instance);
  const rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach((inputType) => {
    const inputClass = swalClasses[inputType];
    const inputContainer = getDirectChildByClass(popup, inputClass);
    setAttributes(inputType, params.inputAttributes);
    inputContainer.className = inputClass;
    if (rerender) {
      hide(inputContainer);
    }
  });
  if (params.input) {
    if (rerender) {
      showInput(params);
    }
    setCustomClass(params);
  }
};
const showInput = (params) => {
  if (!renderInputType[params.input]) {
    return error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
  }
  const inputContainer = getInputContainer(params.input);
  const input = renderInputType[params.input](inputContainer, params);
  show(input);
  setTimeout(() => {
    focusInput(input);
  });
};
const removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name;
    if (!["type", "value", "style"].includes(attrName)) {
      input.removeAttribute(attrName);
    }
  }
};
const setAttributes = (inputType, inputAttributes) => {
  const input = getInput$1(getPopup(), inputType);
  if (!input) {
    return;
  }
  removeAttributes(input);
  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr]);
  }
};
const setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input);
  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};
const setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};
const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    input.id = swalClasses.input;
    const label = document.createElement("label");
    const labelClass = swalClasses["input-label"];
    label.setAttribute("for", input.id);
    label.className = labelClass;
    addClass(label, params.customClass.inputLabel);
    label.innerText = params.inputLabel;
    prependTo.insertAdjacentElement("beforebegin", label);
  }
};
const getInputContainer = (inputType) => {
  const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getDirectChildByClass(getPopup(), inputClass);
};
const renderInputType = {};
renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
  if (typeof params.inputValue === "string" || typeof params.inputValue === "number") {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`);
  }
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};
renderInputType.file = (input, params) => {
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  return input;
};
renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector("input");
  const rangeOutput = range.querySelector("output");
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  setInputLabel(rangeInput, range, params);
  return range;
};
renderInputType.select = (select, params) => {
  select.textContent = "";
  if (params.inputPlaceholder) {
    const placeholder = document.createElement("option");
    setInnerHtml(placeholder, params.inputPlaceholder);
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }
  setInputLabel(select, select, params);
  return select;
};
renderInputType.radio = (radio) => {
  radio.textContent = "";
  return radio;
};
renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = getInput$1(getPopup(), "checkbox");
  checkbox.value = "1";
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  const label = checkboxContainer.querySelector("span");
  setInnerHtml(label, params.inputPlaceholder);
  return checkboxContainer;
};
renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);
  setInputLabel(textarea, textarea, params);
  const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
  setTimeout(() => {
    if ("MutationObserver" in window) {
      const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      const textareaResizeHandler = () => {
        const textareaWidth = textarea.offsetWidth + getMargin(textarea);
        if (textareaWidth > initialPopupWidth) {
          getPopup().style.width = `${textareaWidth}px`;
        } else {
          getPopup().style.width = null;
        }
      };
      new MutationObserver(textareaResizeHandler).observe(textarea, {
        attributes: true,
        attributeFilter: ["style"]
      });
    }
  });
  return textarea;
};
const renderContent = (instance, params) => {
  const htmlContainer = getHtmlContainer();
  applyCustomClass(htmlContainer, params, "htmlContainer");
  if (params.html) {
    parseHtmlToContainer(params.html, htmlContainer);
    show(htmlContainer, "block");
  } else if (params.text) {
    htmlContainer.textContent = params.text;
    show(htmlContainer, "block");
  } else {
    hide(htmlContainer);
  }
  renderInput(instance, params);
};
const renderFooter = (instance, params) => {
  const footer = getFooter();
  toggle(footer, params.footer);
  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  }
  applyCustomClass(footer, params, "footer");
};
const renderCloseButton = (instance, params) => {
  const closeButton = getCloseButton();
  setInnerHtml(closeButton, params.closeButtonHtml);
  applyCustomClass(closeButton, params, "closeButton");
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
};
const renderIcon = (instance, params) => {
  const innerParams = privateProps.innerParams.get(instance);
  const icon = getIcon();
  if (innerParams && params.icon === innerParams.icon) {
    setContent(icon, params);
    applyStyles(icon, params);
    return;
  }
  if (!params.icon && !params.iconHtml) {
    return hide(icon);
  }
  if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
    error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
    return hide(icon);
  }
  show(icon);
  setContent(icon, params);
  applyStyles(icon, params);
  addClass(icon, params.showClass.icon);
};
const applyStyles = (icon, params) => {
  for (const iconType in iconTypes) {
    if (params.icon !== iconType) {
      removeClass(icon, iconTypes[iconType]);
    }
  }
  addClass(icon, iconTypes[params.icon]);
  setColor(icon, params);
  adjustSuccessIconBackgroundColor();
  applyCustomClass(icon, params, "icon");
};
const adjustSuccessIconBackgroundColor = () => {
  const popup = getPopup();
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
  const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};
const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
const setContent = (icon, params) => {
  icon.textContent = "";
  if (params.iconHtml) {
    setInnerHtml(icon, iconContent(params.iconHtml));
  } else if (params.icon === "success") {
    setInnerHtml(icon, successIconHtml);
  } else if (params.icon === "error") {
    setInnerHtml(icon, errorIconHtml);
  } else {
    const defaultIconHtml = {
      question: "?",
      warning: "!",
      info: "i"
    };
    setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
  }
};
const setColor = (icon, params) => {
  if (!params.iconColor) {
    return;
  }
  icon.style.color = params.iconColor;
  icon.style.borderColor = params.iconColor;
  for (const sel of [
    ".swal2-success-line-tip",
    ".swal2-success-line-long",
    ".swal2-x-mark-line-left",
    ".swal2-x-mark-line-right"
  ]) {
    setStyle(icon, sel, "backgroundColor", params.iconColor);
  }
  setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
};
const iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;
const renderImage = (instance, params) => {
  const image = getImage();
  if (!params.imageUrl) {
    return hide(image);
  }
  show(image, "");
  image.setAttribute("src", params.imageUrl);
  image.setAttribute("alt", params.imageAlt);
  applyNumericalStyle(image, "width", params.imageWidth);
  applyNumericalStyle(image, "height", params.imageHeight);
  image.className = swalClasses.image;
  applyCustomClass(image, params, "image");
};
const createStepElement = (step) => {
  const stepEl = document.createElement("li");
  addClass(stepEl, swalClasses["progress-step"]);
  setInnerHtml(stepEl, step);
  return stepEl;
};
const createLineElement = (params) => {
  const lineEl = document.createElement("li");
  addClass(lineEl, swalClasses["progress-step-line"]);
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }
  return lineEl;
};
const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = getProgressSteps$1();
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }
  show(progressStepsContainer);
  progressStepsContainer.textContent = "";
  if (params.currentProgressStep >= params.progressSteps.length) {
    warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
  }
  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);
    if (index === params.currentProgressStep) {
      addClass(stepEl, swalClasses["active-progress-step"]);
    }
    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(params);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};
const renderTitle = (instance, params) => {
  const title = getTitle();
  toggle(title, params.title || params.titleText, "block");
  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }
  if (params.titleText) {
    title.innerText = params.titleText;
  }
  applyCustomClass(title, params, "title");
};
const renderPopup = (instance, params) => {
  const container = getContainer();
  const popup = getPopup();
  if (params.toast) {
    applyNumericalStyle(container, "width", params.width);
    popup.style.width = "100%";
    popup.insertBefore(getLoader(), getIcon());
  } else {
    applyNumericalStyle(popup, "width", params.width);
  }
  applyNumericalStyle(popup, "padding", params.padding);
  if (params.color) {
    popup.style.color = params.color;
  }
  if (params.background) {
    popup.style.background = params.background;
  }
  hide(getValidationMessage());
  addClasses$1(popup, params);
};
const addClasses$1 = (popup, params) => {
  popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ""}`;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }
  applyCustomClass(popup, params, "popup");
  if (typeof params.customClass === "string") {
    addClass(popup, params.customClass);
  }
  if (params.icon) {
    addClass(popup, swalClasses[`icon-${params.icon}`]);
  }
};
const render = (instance, params) => {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderProgressSteps(instance, params);
  renderIcon(instance, params);
  renderImage(instance, params);
  renderTitle(instance, params);
  renderCloseButton(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);
  if (typeof params.didRender === "function") {
    params.didRender(getPopup());
  }
};
const DismissReason = Object.freeze({
  cancel: "cancel",
  backdrop: "backdrop",
  close: "close",
  esc: "esc",
  timer: "timer"
});
const setAriaHidden = () => {
  const bodyChildren = toArray(document.body.children);
  bodyChildren.forEach((el) => {
    if (el === getContainer() || el.contains(getContainer())) {
      return;
    }
    if (el.hasAttribute("aria-hidden")) {
      el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden"));
    }
    el.setAttribute("aria-hidden", "true");
  });
};
const unsetAriaHidden = () => {
  const bodyChildren = toArray(document.body.children);
  bodyChildren.forEach((el) => {
    if (el.hasAttribute("data-previous-aria-hidden")) {
      el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden"));
      el.removeAttribute("data-previous-aria-hidden");
    } else {
      el.removeAttribute("aria-hidden");
    }
  });
};
const swalStringParams = ["swal-title", "swal-html", "swal-footer"];
const getTemplateParams = (params) => {
  const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
  if (!template) {
    return {};
  }
  const templateContent = template.content;
  showWarningsForElements(templateContent);
  const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
  return result;
};
const getSwalParams = (templateContent) => {
  const result = {};
  toArray(templateContent.querySelectorAll("swal-param")).forEach((param) => {
    showWarningsForAttributes(param, ["name", "value"]);
    const paramName = param.getAttribute("name");
    const value = param.getAttribute("value");
    if (typeof defaultParams[paramName] === "boolean" && value === "false") {
      result[paramName] = false;
    }
    if (typeof defaultParams[paramName] === "object") {
      result[paramName] = JSON.parse(value);
    }
  });
  return result;
};
const getSwalButtons = (templateContent) => {
  const result = {};
  toArray(templateContent.querySelectorAll("swal-button")).forEach((button) => {
    showWarningsForAttributes(button, ["type", "color", "aria-label"]);
    const type = button.getAttribute("type");
    result[`${type}ButtonText`] = button.innerHTML;
    result[`show${capitalizeFirstLetter(type)}Button`] = true;
    if (button.hasAttribute("color")) {
      result[`${type}ButtonColor`] = button.getAttribute("color");
    }
    if (button.hasAttribute("aria-label")) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
    }
  });
  return result;
};
const getSwalImage = (templateContent) => {
  const result = {};
  const image = templateContent.querySelector("swal-image");
  if (image) {
    showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
    if (image.hasAttribute("src")) {
      result.imageUrl = image.getAttribute("src");
    }
    if (image.hasAttribute("width")) {
      result.imageWidth = image.getAttribute("width");
    }
    if (image.hasAttribute("height")) {
      result.imageHeight = image.getAttribute("height");
    }
    if (image.hasAttribute("alt")) {
      result.imageAlt = image.getAttribute("alt");
    }
  }
  return result;
};
const getSwalIcon = (templateContent) => {
  const result = {};
  const icon = templateContent.querySelector("swal-icon");
  if (icon) {
    showWarningsForAttributes(icon, ["type", "color"]);
    if (icon.hasAttribute("type")) {
      result.icon = icon.getAttribute("type");
    }
    if (icon.hasAttribute("color")) {
      result.iconColor = icon.getAttribute("color");
    }
    result.iconHtml = icon.innerHTML;
  }
  return result;
};
const getSwalInput = (templateContent) => {
  const result = {};
  const input = templateContent.querySelector("swal-input");
  if (input) {
    showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
    result.input = input.getAttribute("type") || "text";
    if (input.hasAttribute("label")) {
      result.inputLabel = input.getAttribute("label");
    }
    if (input.hasAttribute("placeholder")) {
      result.inputPlaceholder = input.getAttribute("placeholder");
    }
    if (input.hasAttribute("value")) {
      result.inputValue = input.getAttribute("value");
    }
  }
  const inputOptions = templateContent.querySelectorAll("swal-input-option");
  if (inputOptions.length) {
    result.inputOptions = {};
    toArray(inputOptions).forEach((option) => {
      showWarningsForAttributes(option, ["value"]);
      const optionValue = option.getAttribute("value");
      const optionName = option.innerHTML;
      result.inputOptions[optionValue] = optionName;
    });
  }
  return result;
};
const getSwalStringParams = (templateContent, paramNames) => {
  const result = {};
  for (const i in paramNames) {
    const paramName = paramNames[i];
    const tag = templateContent.querySelector(paramName);
    if (tag) {
      showWarningsForAttributes(tag, []);
      result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
    }
  }
  return result;
};
const showWarningsForElements = (templateContent) => {
  const allowedElements = swalStringParams.concat([
    "swal-param",
    "swal-button",
    "swal-image",
    "swal-icon",
    "swal-input",
    "swal-input-option"
  ]);
  toArray(templateContent.children).forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    if (allowedElements.indexOf(tagName) === -1) {
      warn(`Unrecognized element <${tagName}>`);
    }
  });
};
const showWarningsForAttributes = (el, allowedAttributes) => {
  toArray(el.attributes).forEach((attribute) => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      warn([
        `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
        `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`
      ]);
    }
  });
};
var defaultInputValidators = {
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
  },
  url: (string, validationMessage) => {
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
  }
};
function setDefaultInputValidators(params) {
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}
function validateCustomTargetElement(params) {
  if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = "body";
  }
}
function setParameters(params) {
  setDefaultInputValidators(params);
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
  }
  validateCustomTargetElement(params);
  if (typeof params.title === "string") {
    params.title = params.title.split("\n").join("<br />");
  }
  init(params);
}
class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.started = new Date();
      this.id = setTimeout(this.callback, this.remaining);
    }
    return this.remaining;
  }
  stop() {
    if (this.running) {
      this.running = false;
      clearTimeout(this.id);
      this.remaining -= new Date().getTime() - this.started.getTime();
    }
    return this.remaining;
  }
  increase(n) {
    const running = this.running;
    if (running) {
      this.stop();
    }
    this.remaining += n;
    if (running) {
      this.start();
    }
    return this.remaining;
  }
  getTimerLeft() {
    if (this.running) {
      this.stop();
      this.start();
    }
    return this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const fixScrollbar = () => {
  if (states.previousBodyPadding !== null) {
    return;
  }
  if (document.body.scrollHeight > window.innerHeight) {
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
    document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
  }
};
const undoScrollbar = () => {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = `${states.previousBodyPadding}px`;
    states.previousBodyPadding = null;
  }
};
const iOSfix = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    const offset = document.body.scrollTop;
    document.body.style.top = `${offset * -1}px`;
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
    addBottomPaddingForTallPopups();
  }
};
const addBottomPaddingForTallPopups = () => {
  const ua = navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  if (iOSSafari) {
    const bottomPanelHeight = 44;
    if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
      getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
    }
  }
};
const lockBodyScroll = () => {
  const container = getContainer();
  let preventTouchMove;
  container.ontouchstart = (e) => {
    preventTouchMove = shouldPreventTouchMove(e);
  };
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
const shouldPreventTouchMove = (event) => {
  const target = event.target;
  const container = getContainer();
  if (isStylus(event) || isZoom(event)) {
    return false;
  }
  if (target === container) {
    return true;
  }
  if (!isScrollable(container) && target.tagName !== "INPUT" && target.tagName !== "TEXTAREA" && !(isScrollable(getHtmlContainer()) && getHtmlContainer().contains(target))) {
    return true;
  }
  return false;
};
const isStylus = (event) => {
  return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
};
const isZoom = (event) => {
  return event.touches && event.touches.length > 1;
};
const undoIOSfix = () => {
  if (hasClass(document.body, swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = "";
    document.body.scrollTop = offset * -1;
  }
};
const SHOW_CLASS_TIMEOUT = 10;
const openPopup = (params) => {
  const container = getContainer();
  const popup = getPopup();
  if (typeof params.willOpen === "function") {
    params.willOpen(popup);
  }
  const bodyStyles = window.getComputedStyle(document.body);
  const initialBodyOverflow = bodyStyles.overflowY;
  addClasses(container, popup, params);
  setTimeout(() => {
    setScrollingVisibility(container, popup);
  }, SHOW_CLASS_TIMEOUT);
  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
    setAriaHidden();
  }
  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }
  if (typeof params.didOpen === "function") {
    setTimeout(() => params.didOpen(popup));
  }
  removeClass(container, swalClasses["no-transition"]);
};
const swalOpenAnimationFinished = (event) => {
  const popup = getPopup();
  if (event.target !== popup) {
    return;
  }
  const container = getContainer();
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = "auto";
};
const setScrollingVisibility = (container, popup) => {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = "hidden";
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
  } else {
    container.style.overflowY = "auto";
  }
};
const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  iOSfix();
  if (scrollbarPadding && initialBodyOverflow !== "hidden") {
    fixScrollbar();
  }
  setTimeout(() => {
    container.scrollTop = 0;
  });
};
const addClasses = (container, popup, params) => {
  addClass(container, params.showClass.backdrop);
  popup.style.setProperty("opacity", "0", "important");
  show(popup, "grid");
  setTimeout(() => {
    addClass(popup, params.showClass.popup);
    popup.style.removeProperty("opacity");
  }, SHOW_CLASS_TIMEOUT);
  addClass([document.documentElement, document.body], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses["height-auto"]);
  }
};
const showLoading = (buttonToReplace) => {
  let popup = getPopup();
  if (!popup) {
    new Swal();
  }
  popup = getPopup();
  const loader = getLoader();
  if (isToast()) {
    hide(getIcon());
  } else {
    replaceButton(popup, buttonToReplace);
  }
  show(loader);
  popup.setAttribute("data-loading", true);
  popup.setAttribute("aria-busy", true);
  popup.focus();
};
const replaceButton = (popup, buttonToReplace) => {
  const actions = getActions();
  const loader = getLoader();
  if (!buttonToReplace && isVisible$1(getConfirmButton())) {
    buttonToReplace = getConfirmButton();
  }
  show(actions);
  if (buttonToReplace) {
    hide(buttonToReplace);
    loader.setAttribute("data-button-to-replace", buttonToReplace.className);
  }
  loader.parentNode.insertBefore(loader, buttonToReplace);
  addClass([popup, actions], swalClasses.loading);
};
const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === "select" || params.input === "radio") {
    handleInputOptions(instance, params);
  } else if (["text", "email", "number", "tel", "textarea"].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
    showLoading(getConfirmButton());
    handleInputValue(instance, params);
  }
};
const getInputValue = (instance, innerParams) => {
  const input = instance.getInput();
  if (!input) {
    return null;
  }
  switch (innerParams.input) {
    case "checkbox":
      return getCheckboxValue(input);
    case "radio":
      return getRadioValue(input);
    case "file":
      return getFileValue(input);
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};
const getCheckboxValue = (input) => input.checked ? 1 : 0;
const getRadioValue = (input) => input.checked ? input.value : null;
const getFileValue = (input) => input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
const handleInputOptions = (instance, params) => {
  const popup = getPopup();
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
  if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
    showLoading(getConfirmButton());
    asPromise(params.inputOptions).then((inputOptions) => {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (typeof params.inputOptions === "object") {
    processInputOptions(params.inputOptions);
  } else {
    error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
  }
};
const handleInputValue = (instance, params) => {
  const input = instance.getInput();
  hide(input);
  asPromise(params.inputValue).then((inputValue) => {
    input.value = params.input === "number" ? parseFloat(inputValue) || 0 : `${inputValue}`;
    show(input);
    input.focus();
    instance.hideLoading();
  }).catch((err) => {
    error(`Error in inputValue promise: ${err}`);
    input.value = "";
    show(input);
    input.focus();
    instance.hideLoading();
  });
};
const populateInputOptions = {
  select: (popup, inputOptions, params) => {
    const select = getDirectChildByClass(popup, swalClasses.select);
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach((inputOption) => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      if (Array.isArray(optionLabel)) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = optionValue;
        optgroup.disabled = false;
        select.appendChild(optgroup);
        optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
      } else {
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  },
  radio: (popup, inputOptions, params) => {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    inputOptions.forEach((inputOption) => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement("input");
      const radioLabelElement = document.createElement("label");
      radioInput.type = "radio";
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement("span");
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll("input");
    if (radios.length) {
      radios[0].focus();
    }
  }
};
const formatInputOptions = (inputOptions) => {
  const result = [];
  if (typeof Map !== "undefined" && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value;
      if (typeof valueFormatted === "object") {
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  } else {
    Object.keys(inputOptions).forEach((key) => {
      let valueFormatted = inputOptions[key];
      if (typeof valueFormatted === "object") {
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  }
  return result;
};
const isSelected = (optionValue, inputValue) => {
  return inputValue && inputValue.toString() === optionValue.toString();
};
function hideLoading() {
  const innerParams = privateProps.innerParams.get(this);
  if (!innerParams) {
    return;
  }
  const domCache = privateProps.domCache.get(this);
  hide(domCache.loader);
  if (isToast()) {
    if (innerParams.icon) {
      show(getIcon());
    }
  } else {
    showRelatedButton(domCache);
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute("aria-busy");
  domCache.popup.removeAttribute("data-loading");
  domCache.confirmButton.disabled = false;
  domCache.denyButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
const showRelatedButton = (domCache) => {
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
  if (buttonToReplace.length) {
    show(buttonToReplace[0], "inline-block");
  } else if (allButtonsAreHidden()) {
    hide(domCache.actions);
  }
};
function getInput(instance) {
  const innerParams = privateProps.innerParams.get(instance || this);
  const domCache = privateProps.domCache.get(instance || this);
  if (!domCache) {
    return null;
  }
  return getInput$1(domCache.popup, innerParams.input);
}
var privateMethods = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap()
};
const isVisible = () => {
  return isVisible$1(getPopup());
};
const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
const clickDeny = () => getDenyButton() && getDenyButton().click();
const clickCancel = () => getCancelButton() && getCancelButton().click();
const removeKeydownHandler = (globalState2) => {
  if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
    globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
      capture: globalState2.keydownListenerCapture
    });
    globalState2.keydownHandlerAdded = false;
  }
};
const addKeydownHandler = (instance, globalState2, innerParams, dismissWith) => {
  removeKeydownHandler(globalState2);
  if (!innerParams.toast) {
    globalState2.keydownHandler = (e) => keydownHandler(instance, e, dismissWith);
    globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
      capture: globalState2.keydownListenerCapture
    });
    globalState2.keydownHandlerAdded = true;
  }
};
const setFocus = (innerParams, index, increment) => {
  const focusableElements = getFocusableElements();
  if (focusableElements.length) {
    index = index + increment;
    if (index === focusableElements.length) {
      index = 0;
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }
    return focusableElements[index].focus();
  }
  getPopup().focus();
};
const arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
const arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
const keydownHandler = (instance, e, dismissWith) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams) {
    return;
  }
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  }
  if (e.key === "Enter") {
    handleEnter(instance, e, innerParams);
  } else if (e.key === "Tab") {
    handleTab(e, innerParams);
  } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
    handleArrows(e.key);
  } else if (e.key === "Escape") {
    handleEsc(e, innerParams, dismissWith);
  }
};
const handleEnter = (instance, e, innerParams) => {
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return;
  }
  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (["textarea", "file"].includes(innerParams.input)) {
      return;
    }
    clickConfirm();
    e.preventDefault();
  }
};
const handleTab = (e, innerParams) => {
  const targetElement = e.target;
  const focusableElements = getFocusableElements();
  let btnIndex = -1;
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }
  if (!e.shiftKey) {
    setFocus(innerParams, btnIndex, 1);
  } else {
    setFocus(innerParams, btnIndex, -1);
  }
  e.stopPropagation();
  e.preventDefault();
};
const handleArrows = (key) => {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
    return;
  }
  const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
  let buttonToFocus = document.activeElement;
  for (let i = 0; i < getActions().children.length; i++) {
    buttonToFocus = buttonToFocus[sibling];
    if (!buttonToFocus) {
      return;
    }
    if (isVisible$1(buttonToFocus) && buttonToFocus instanceof HTMLButtonElement) {
      break;
    }
  }
  if (buttonToFocus instanceof HTMLButtonElement) {
    buttonToFocus.focus();
  }
};
const handleEsc = (e, innerParams, dismissWith) => {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};
function removePopupAndResetState(instance, container, returnFocus, didClose) {
  if (isToast()) {
    triggerDidCloseAndDispose(instance, didClose);
  } else {
    restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
    removeKeydownHandler(globalState);
  }
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    container.setAttribute("style", "display:none !important");
    container.removeAttribute("class");
    container.innerHTML = "";
  } else {
    container.remove();
  }
  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    unsetAriaHidden();
  }
  removeBodyClasses();
}
function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
}
function close(resolveValue) {
  resolveValue = prepareResolveValue(resolveValue);
  const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  const didClose = triggerClosePopup(this);
  if (this.isAwaitingPromise()) {
    if (!resolveValue.isDismissed) {
      handleAwaitingPromise(this);
      swalPromiseResolve(resolveValue);
    }
  } else if (didClose) {
    swalPromiseResolve(resolveValue);
  }
}
function isAwaitingPromise() {
  return !!privateProps.awaitingPromise.get(this);
}
const triggerClosePopup = (instance) => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return false;
  }
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  const backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(instance, popup, innerParams);
  return true;
};
function rejectPromise(error2) {
  const rejectPromise2 = privateMethods.swalPromiseReject.get(this);
  handleAwaitingPromise(this);
  if (rejectPromise2) {
    rejectPromise2(error2);
  }
}
const handleAwaitingPromise = (instance) => {
  if (instance.isAwaitingPromise()) {
    privateProps.awaitingPromise.delete(instance);
    if (!privateProps.innerParams.get(instance)) {
      instance._destroy();
    }
  }
};
const prepareResolveValue = (resolveValue) => {
  if (typeof resolveValue === "undefined") {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    };
  }
  return Object.assign({
    isConfirmed: false,
    isDenied: false,
    isDismissed: false
  }, resolveValue);
};
const handlePopupAnimation = (instance, popup, innerParams) => {
  const container = getContainer();
  const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  if (typeof innerParams.willClose === "function") {
    innerParams.willClose(popup);
  }
  if (animationIsSupported) {
    animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
  } else {
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
  }
};
const animatePopup = (instance, popup, container, returnFocus, didClose) => {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
  popup.addEventListener(animationEndEvent, function(e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};
const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    if (typeof didClose === "function") {
      didClose.bind(instance.params)();
    }
    instance._destroy();
  });
};
function setButtonsDisabled(instance, buttons, disabled) {
  const domCache = privateProps.domCache.get(instance);
  buttons.forEach((button) => {
    domCache[button].disabled = disabled;
  });
}
function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }
  if (input.type === "radio") {
    const radiosContainer = input.parentNode.parentNode;
    const radios = radiosContainer.querySelectorAll("input");
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}
function enableButtons() {
  setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
}
function disableButtons() {
  setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}
function showValidationMessage(error2) {
  const domCache = privateProps.domCache.get(this);
  const params = privateProps.innerParams.get(this);
  setInnerHtml(domCache.validationMessage, error2);
  domCache.validationMessage.className = swalClasses["validation-message"];
  if (params.customClass && params.customClass.validationMessage) {
    addClass(domCache.validationMessage, params.customClass.validationMessage);
  }
  show(domCache.validationMessage);
  const input = this.getInput();
  if (input) {
    input.setAttribute("aria-invalid", true);
    input.setAttribute("aria-describedby", swalClasses["validation-message"]);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}
function resetValidationMessage() {
  const domCache = privateProps.domCache.get(this);
  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }
  const input = this.getInput();
  if (input) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    removeClass(input, swalClasses.inputerror);
  }
}
function getProgressSteps() {
  const domCache = privateProps.domCache.get(this);
  return domCache.progressSteps;
}
function update(params) {
  const popup = getPopup();
  const innerParams = privateProps.innerParams.get(this);
  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
  }
  const validUpdatableParams = filterValidParams(params);
  const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}
const filterValidParams = (params) => {
  const validUpdatableParams = {};
  Object.keys(params).forEach((param) => {
    if (isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`);
    }
  });
  return validUpdatableParams;
};
function _destroy() {
  const domCache = privateProps.domCache.get(this);
  const innerParams = privateProps.innerParams.get(this);
  if (!innerParams) {
    disposeWeakMaps(this);
    return;
  }
  if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  }
  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }
  if (typeof innerParams.didDestroy === "function") {
    innerParams.didDestroy();
  }
  disposeSwal(this);
}
const disposeSwal = (instance) => {
  disposeWeakMaps(instance);
  delete instance.params;
  delete globalState.keydownHandler;
  delete globalState.keydownTarget;
  delete globalState.currentInstance;
};
const disposeWeakMaps = (instance) => {
  if (instance.isAwaitingPromise()) {
    unsetWeakMaps(privateProps, instance);
    privateProps.awaitingPromise.set(instance, true);
  } else {
    unsetWeakMaps(privateMethods, instance);
    unsetWeakMaps(privateProps, instance);
  }
};
const unsetWeakMaps = (obj, instance) => {
  for (const i in obj) {
    obj[i].delete(instance);
  }
};
var instanceMethods = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  hideLoading,
  disableLoading: hideLoading,
  getInput,
  close,
  isAwaitingPromise,
  rejectPromise,
  handleAwaitingPromise,
  closePopup: close,
  closeModal: close,
  closeToast: close,
  enableButtons,
  disableButtons,
  enableInput,
  disableInput,
  showValidationMessage,
  resetValidationMessage,
  getProgressSteps,
  update,
  _destroy
});
const handleConfirmButtonClick = (instance) => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, "confirm");
  } else {
    confirm(instance, true);
  }
};
const handleDenyButtonClick = (instance) => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, "deny");
  } else {
    deny(instance, false);
  }
};
const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};
const handleConfirmOrDenyWithInput = (instance, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams.input) {
    return error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
  }
  const inputValue = getInputValue(instance, innerParams);
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type);
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else if (type === "deny") {
    deny(instance, inputValue);
  } else {
    confirm(instance, inputValue);
  }
};
const handleInputValidator = (instance, inputValue, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableInput();
  const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
  validationPromise.then((validationMessage) => {
    instance.enableButtons();
    instance.enableInput();
    if (validationMessage) {
      instance.showValidationMessage(validationMessage);
    } else if (type === "deny") {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  });
};
const deny = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance || globalThis);
  if (innerParams.showLoaderOnDeny) {
    showLoading(getDenyButton());
  }
  if (innerParams.preDeny) {
    privateProps.awaitingPromise.set(instance || globalThis, true);
    const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
    preDenyPromise.then((preDenyValue) => {
      if (preDenyValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        instance.closePopup({ isDenied: true, value: typeof preDenyValue === "undefined" ? value : preDenyValue });
      }
    }).catch((error2) => rejectWith(instance || globalThis, error2));
  } else {
    instance.closePopup({ isDenied: true, value });
  }
};
const succeedWith = (instance, value) => {
  instance.closePopup({ isConfirmed: true, value });
};
const rejectWith = (instance, error2) => {
  instance.rejectPromise(error2);
};
const confirm = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance || globalThis);
  if (innerParams.showLoaderOnConfirm) {
    showLoading();
  }
  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    privateProps.awaitingPromise.set(instance || globalThis, true);
    const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
    preConfirmPromise.then((preConfirmValue) => {
      if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
      }
    }).catch((error2) => rejectWith(instance || globalThis, error2));
  } else {
    succeedWith(instance, value);
  }
};
const handlePopupClick = (instance, domCache, dismissWith) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith);
  } else {
    handleModalMousedown(domCache);
    handleContainerMousedown(domCache);
    handleModalClick(instance, domCache, dismissWith);
  }
};
const handleToastClick = (instance, domCache, dismissWith) => {
  domCache.popup.onclick = () => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
      return;
    }
    dismissWith(DismissReason.close);
  };
};
const isAnyButtonShown = (innerParams) => {
  return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
};
let ignoreOutsideClick = false;
const handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function(e) {
      domCache.container.onmouseup = void 0;
      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};
const handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function(e) {
      domCache.popup.onmouseup = void 0;
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};
const handleModalClick = (instance, domCache, dismissWith) => {
  domCache.container.onclick = (e) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }
    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};
const isJqueryElement = (elem) => typeof elem === "object" && elem.jquery;
const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
const argsToParams = (args) => {
  const params = {};
  if (typeof args[0] === "object" && !isElement(args[0])) {
    Object.assign(params, args[0]);
  } else {
    ["title", "html", "icon"].forEach((name, index) => {
      const arg = args[index];
      if (typeof arg === "string" || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== void 0) {
        error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
      }
    });
  }
  return params;
};
function fire(...args) {
  const Swal2 = this;
  return new Swal2(...args);
}
function mixin(mixinParams) {
  class MixinSwal extends this {
    _main(params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
    }
  }
  return MixinSwal;
}
const getTimerLeft = () => {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
const stopTimer = () => {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};
const resumeTimer = () => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
const toggleTimer = () => {
  const timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
const increaseTimer = (n) => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
const isTimerRunning = () => {
  return globalState.timeout && globalState.timeout.isRunning();
};
let bodyClickListenerAdded = false;
const clickHandlers = {};
function bindClickHandler(attr = "data-swal-template") {
  clickHandlers[attr] = this;
  if (!bodyClickListenerAdded) {
    document.body.addEventListener("click", bodyClickListener);
    bodyClickListenerAdded = true;
  }
}
const bodyClickListener = (event) => {
  for (let el = event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute(attr);
      if (template) {
        clickHandlers[attr].fire({ template });
        return;
      }
    }
  }
};
var staticMethods = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  isValidParameter,
  isUpdatableParameter,
  isDeprecatedParameter,
  argsToParams,
  getContainer,
  getPopup,
  getTitle,
  getHtmlContainer,
  getImage,
  getIcon,
  getInputLabel,
  getCloseButton,
  getActions,
  getConfirmButton,
  getDenyButton,
  getCancelButton,
  getLoader,
  getFooter,
  getTimerProgressBar,
  getFocusableElements,
  getValidationMessage,
  isLoading,
  isVisible,
  clickConfirm,
  clickDeny,
  clickCancel,
  fire,
  mixin,
  showLoading,
  enableLoading: showLoading,
  getTimerLeft,
  stopTimer,
  resumeTimer,
  toggleTimer,
  increaseTimer,
  isTimerRunning,
  bindClickHandler
});
let currentInstance;
class SweetAlert {
  constructor(...args) {
    if (typeof window === "undefined") {
      return;
    }
    currentInstance = this;
    const outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    });
    const promise = this._main(this.params);
    privateProps.promise.set(this, promise);
  }
  _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));
    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
      if (isModal()) {
        unsetAriaHidden();
      }
    }
    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams);
    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    }
    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }
  then(onFulfilled) {
    const promise = privateProps.promise.get(this);
    return promise.then(onFulfilled);
  }
  finally(onFinally) {
    const promise = privateProps.promise.get(this);
    return promise.finally(onFinally);
  }
}
const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve, reject) => {
    const dismissWith = (dismiss) => {
      instance.closePopup({ isDismissed: true, dismiss });
    };
    privateMethods.swalPromiseResolve.set(instance, resolve);
    privateMethods.swalPromiseReject.set(instance, reject);
    domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);
    domCache.denyButton.onclick = () => handleDenyButtonClick(instance);
    domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);
    domCache.closeButton.onclick = () => dismissWith(DismissReason.close);
    handlePopupClick(instance, domCache, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);
    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    setupTimer(globalState, innerParams, dismissWith);
    initFocus(domCache, innerParams);
    setTimeout(() => {
      domCache.container.scrollTop = 0;
    });
  });
};
const prepareParams = (userParams, mixinParams) => {
  const templateParams = getTemplateParams(userParams);
  const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
  params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
  params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
  return params;
};
const populateDomCache = (instance) => {
  const domCache = {
    popup: getPopup(),
    container: getContainer(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    denyButton: getDenyButton(),
    cancelButton: getCancelButton(),
    loader: getLoader(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps$1()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};
const setupTimer = (globalState2, innerParams, dismissWith) => {
  const timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);
  if (innerParams.timer) {
    globalState2.timeout = new Timer(() => {
      dismissWith("timer");
      delete globalState2.timeout;
    }, innerParams.timer);
    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
      setTimeout(() => {
        if (globalState2.timeout && globalState2.timeout.running) {
          animateTimerProgressBar(innerParams.timer);
        }
      });
    }
  }
};
const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return;
  }
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }
  if (!focusButton(domCache, innerParams)) {
    setFocus(innerParams, -1, 1);
  }
};
const focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
    domCache.denyButton.focus();
    return true;
  }
  if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
    domCache.cancelButton.focus();
    return true;
  }
  if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
    domCache.confirmButton.focus();
    return true;
  }
  return false;
};
const blurActiveElement = () => {
  if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }
};
Object.assign(SweetAlert.prototype, instanceMethods);
Object.assign(SweetAlert, staticMethods);
Object.keys(instanceMethods).forEach((key) => {
  SweetAlert[key] = function(...args) {
    if (currentInstance) {
      return currentInstance[key](...args);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = "11.4.9";
const Swal = SweetAlert;
Swal.default = Swal;
var index_vue_vue_type_style_index_0_lang = "";
var block0 = {};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("ACTIVAR ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("INACTIVAR ");
const _hoisted_3 = {
  key: 0,
  id: "sticky"
};
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 2 };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 3 };
const _hoisted_8 = { key: 4 };
const _hoisted_9 = { key: 5 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const NewUser = JSON.parse(localStorage.getItem("user") || "");
    NewUser.isVisibleSelectRegional = "true";
    useUserSession().setUser(NewUser);
    const user = useUserSession();
    const router = useRouter();
    const notif = new Notyf();
    const viewWrapper = useViewWrapper();
    const { locale, t } = useI18n();
    const UserLocale = ref((_a = user.user) == null ? void 0 : _a.country);
    JSON.parse(window.localStorage.user).role;
    const selectedRows = ref([]);
    const selectedRowsId = ref([]);
    let isLoading2 = ref(true);
    const columns = ref([]);
    const rows = ref([]);
    ref("");
    const getUsers = async () => {
      var _a2;
      UserLocale.value = (_a2 = user.user) == null ? void 0 : _a2.country;
      rows.value = [];
      const response2 = await tryGetUsers();
      if (response2.status) {
        for (const e of response2.data) {
          rows.value.push({
            id: e.id,
            createdAt: e.createdAt,
            identification: e.identification,
            role: e.role,
            createdBy: e.createdBy,
            name: e.name,
            email: e.email,
            lastname: e.lastname,
            status: e.isActive
          });
        }
      }
      columns.value = [
        {
          label: t("users.list.tableColumns.fullname"),
          field: "name",
          sortable: false
        },
        {
          label: t("users.list.tableColumns.email"),
          field: "email",
          sortable: false
        },
        {
          label: t("users.list.tableColumns.role"),
          field: "role",
          sortable: false,
          thClass: "has-text-centered",
          tdClass: "has-text-centered"
        },
        {
          label: t("utils.vuegoodtable.columns.status"),
          field: "status",
          sortable: false,
          thClass: "has-text-centered",
          tdClass: "has-text-centered"
        }
      ];
      isLoading2.value = false;
    };
    const response = ([__temp, __restore] = withAsyncContext(() => tryGetUsers()), __temp = await __temp, __restore(), __temp);
    const handleUpdateStatus = async (userId, status) => {
      var _a2;
      if (((_a2 = user.user) == null ? void 0 : _a2.role) == "SUPERVISOR") {
        let userArray = [];
        for (const element of userId) {
          const users = response.data.find((e) => e.email == element);
          if (users) {
            userArray.push(users);
          }
        }
        const validateStatus = (nameUser, userStatus) => {
          if (userStatus === true && status == "ACTIVE") {
            return `Usuario ${nameUser} ya se encuentra Activo`;
          } else if (userStatus === false && status == "ACTIVE") {
            return "Listo para Activar";
          } else if (userStatus === true && status == "INACTIVE") {
            return "Listo para Inactivar";
          } else if (userStatus === false && status == "INACTIVE") {
            return `Este Usuario ${nameUser} ya se encuentra Inactivo`;
          }
        };
        let userDB = [];
        for (const e of userArray) {
          const messageOperator = validateStatus(e.name, e.isActive);
          if (messageOperator && messageOperator === "Listo para Activar" || messageOperator && messageOperator === "Listo para Inactivar") {
            userDB.push(messageOperator);
          }
        }
        if (userDB.length > 0) {
          Swal.fire({
            title: `${status == "ACTIVE" ? "Est\xE1 seguro que desea activar este usuario?" : "Est\xE1 seguro que desea inactivar este usuario?"}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#c4c4c4",
            confirmButtonText: "Si, quiero hacerlo!"
          }).then((result) => {
            if (result.isConfirmed) {
              const token = localStorage.getItem("token");
              const base64Url = token == null ? void 0 : token.split(".")[1];
              const base64 = base64Url == null ? void 0 : base64Url.replace(/-/g, "+").replace(/_/g, "/");
              const decodedToken = JSON.parse(atob(base64));
              const uid = decodedToken.user_id;
              const body = {
                emails: userId,
                uid,
                action: status
              };
              trySendEmail(body);
              if (response.status == true) {
                Swal.fire({
                  title: `${status == "ACTIVE" ? "Para continuar con la Activaci\xF3n, ingresa el codigo enviado a tu correo electronico" : "Para continuar con la Inactivaci\xF3n, ingresa el codigo enviado a tu correo electronico"}`,
                  icon: "question",
                  input: "text",
                  inputPlaceholder: "Codigo de Verificaci\xF3n",
                  confirmButtonText: "Enviar",
                  confirmButtonColor: "#d33",
                  showCancelButton: true
                }).then((result2) => {
                  if (result2.isConfirmed) {
                    Swal.fire({
                      title: "Cargando!",
                      text: "En unos segundos terminaremos",
                      didOpen: async () => {
                        Swal.showLoading();
                        const inputvalue = result2.value;
                        const body2 = {
                          otp: inputvalue,
                          uid: decodedToken.user_id
                        };
                        const response2 = await tryActiveUsers(body2);
                        Swal.close();
                        if (response2.status == true) {
                          notif.success({
                            message: "Usuario activado / desactivado con \xE9xito!",
                            dismissible: true,
                            duration: 5e3
                          });
                          setTimeout(() => {
                            location.reload();
                          }, 5e3);
                        } else {
                          notif.error({
                            message: "Codigo Incorrecto, vuelva intentarlo!",
                            dismissible: true,
                            duration: 5e3
                          });
                        }
                      }
                    });
                  }
                });
              }
            }
          });
        } else {
          const statusmsg = status == "ACTIVE" ? "ACTIVO" : "INACTIVO";
          Swal.fire({
            title: `Alguno de los usuarios seleccionados ya se encuentra ${statusmsg}, por favor intente nuevamente`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#c4c4c4"
          });
        }
      } else {
        notif.error("No cuenta con los permisos para esta acci\xF3n");
      }
    };
    const editUser = (value, data) => {
      var _a2, _b2;
      if (((_a2 = user.user) == null ? void 0 : _a2.role) == "visor" || ((_b2 = user.user) == null ? void 0 : _b2.role) == "broker") {
        notif.error("No cuenta con los permisos para esta acci\xF3n");
      } else {
        localStorage.setItem("dataUserSection", JSON.stringify(data));
        if (value === "edit") {
          router.push("/users/form/" + data.id);
        }
      }
    };
    const formatDate = (date) => {
      if (date == "N/A") {
        return date;
      } else {
        return hooks(date).format("DD/MM/YYYY");
      }
    };
    function selectionChanged(params) {
      selectedRows.value = params.selectedRows;
      selectedRowsId.value = selectedRows.value.map((e) => {
        return e.email;
      });
    }
    if (((_b = user.user) == null ? void 0 : _b.role) == "visor" || ((_c = user.user) == null ? void 0 : _c.role) == "broker") {
      Swal.fire({
        title: "No cuenta con permiso para esto.",
        icon: "error",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
          router.go(-1);
        } else {
          router.go(-1);
        }
      });
    } else {
      [__temp, __restore] = withAsyncContext(() => getUsers()), await __temp, __restore();
    }
    watch(() => {
      var _a2;
      return (_a2 = user.user) == null ? void 0 : _a2.country;
    }, async () => {
      isLoading2.value = true;
      await getUsers();
    });
    onMounted(async () => {
      useHead({
        title: `AIG - ${t("users.list.pageTitle")}`
      });
      viewWrapper.setPageTitle(t("users.list.pageTitle"));
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VButtons = _sfc_main$2;
      const _component_VPlaceloadText = _sfc_main$3;
      const _component_VTag = _sfc_main$4;
      const _component_VIconButton = _sfc_main$5;
      const _component_vue_good_table = resolveComponent("vue-good-table");
      const _component_SidebarLayout = _sfc_main$6;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_SidebarLayout, null, {
        default: withCtx(() => [
          createVNode(_component_VButtons, { class: "is-right" }, {
            default: withCtx(() => [
              selectedRows.value.length > 0 ? (openBlock(), createBlock(_component_VButton, {
                key: 0,
                style: { "color": "white", "background-color": "#0c7083" },
                color: "primary",
                raised: "",
                loading: unref(isLoading2),
                onClick: _cache[0] || (_cache[0] = ($event) => handleUpdateStatus(selectedRowsId.value, "ACTIVE"))
              }, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }, 8, ["loading"])) : createCommentVNode("", true),
              selectedRows.value.length > 0 ? (openBlock(), createBlock(_component_VButton, {
                key: 1,
                style: { "color": "white", "background-color": "#0c7083" },
                color: "primary",
                raised: "",
                loading: unref(isLoading2),
                onClick: _cache[1] || (_cache[1] = ($event) => handleUpdateStatus(selectedRowsId.value, "INACTIVE"))
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              }, 8, ["loading"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_VButtons, { class: "is-right" }),
          unref(isLoading2) ? (openBlock(), createBlock(_component_VPlaceloadText, {
            key: 0,
            lines: 20
          })) : (openBlock(), createBlock(_component_vue_good_table, {
            key: 1,
            columns: columns.value,
            rows: rows.value,
            "max-height": "650px",
            "sort-options": { enabled: true },
            "search-options": { enabled: true },
            "select-options": {
              enabled: true,
              disableSelectInfo: true,
              selectOnCheckboxOnly: true
            },
            onSelectedRowsChange: selectionChanged,
            "pagination-options": {
              enabled: true,
              position: "top",
              perPageDropdown: [10, 25, 50, 100, 200],
              dropdownAllowAll: true,
              setCurrentPage: 1,
              nextLabel: unref(t)("utils.vuegoodtable.config.next"),
              prevLabel: unref(t)("utils.vuegoodtable.config.previous"),
              rowsPerPageLabel: unref(t)("utils.vuegoodtable.config.rowsPerPage"),
              ofLabel: unref(t)("utils.vuegoodtable.config.of"),
              allLabel: "Todas"
            }
          }, {
            "table-row": withCtx((props) => [
              props.column.field === "name" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(props.row.name + " " + props.row.lastname), 1)) : createCommentVNode("", true),
              props.column.field === "role" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(_component_VTag, {
                  class: "has-text-weight-semibold has-background-grey-lighter",
                  style: { "width": "118 px" },
                  label: props.row.role == "visor" ? "Consulta" : props.row.role
                }, null, 8, ["label"])
              ])) : createCommentVNode("", true),
              props.column.field === "permissions" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                props.row.profile == "SEGURIDAD" ? (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode(_component_VTag, {
                    color: "primary",
                    label: "USER"
                  })
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props.row.permissions, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item,
                    class: "mb-1"
                  }, [
                    createVNode(_component_VTag, {
                      color: "primary",
                      label: item
                    }, null, 8, ["label"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              props.column.field === "deactivationDate" ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(formatDate(props.row.deactivationDate)), 1)) : createCommentVNode("", true),
              props.column.field === "status" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(_component_VTag, {
                  style: { "width": "60px" },
                  color: props.row.status == true ? "success" : "danger",
                  label: props.row.status == true ? unref(t)("utils.vuegoodtable.columns.statusUser.active") : unref(t)("utils.vuegoodtable.columns.statusUser.inactive")
                }, null, 8, ["color", "label"])
              ])) : createCommentVNode("", true),
              props.column.field === "action" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(_component_VButtons, { class: "is-centered" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(_component_VIconButton, {
                      color: "info",
                      outlined: "",
                      icon: "feather:edit",
                      disabled: props.row.status != true,
                      onClick: ($event) => editUser("edit", props.row)
                    }, null, 8, ["disabled", "onClick"]), [
                      [
                        _directive_tooltip,
                        "editar usuario",
                        void 0,
                        {
                          top: true,
                          right: true
                        }
                      ]
                    ])
                  ]),
                  _: 2
                }, 1024)
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["columns", "rows", "pagination-options"]))
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
