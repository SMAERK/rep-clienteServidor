import { c as __vitePreload } from "./index.e178843f.js";
import { C as defineStore, a0 as useRoute, e as computed, J as defineAsyncComponent, k as ref } from "./vendor.6548d360.js";
const useLayoutSwitcher = defineStore("layoutSwitcher", () => {
  const route = useRoute();
  const isNavbarRoute = computed(() => {
    var _a, _b;
    return (_b = (_a = route == null ? void 0 : route.fullPath) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "/navbar/");
  });
  const isSidebarRoute = computed(() => {
    var _a, _b;
    return (_b = (_a = route == null ? void 0 : route.fullPath) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "/sidebar/");
  });
  const hasDynamicLayout = computed(() => isNavbarRoute.value || isSidebarRoute.value);
  const navbarLayoutLink = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = route == null ? void 0 : route.fullPath) == null ? void 0 : _a.replace) == null ? void 0 : _b.call(_a, "sidebar", "navbar")) != null ? _c : "";
  });
  const sidebarLayoutLink = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = route == null ? void 0 : route.fullPath) == null ? void 0 : _a.replace) == null ? void 0 : _b.call(_a, "navbar", "sidebar")) != null ? _c : "";
  });
  const NavbarLayout = defineAsyncComponent({
    loader: () => __vitePreload(() => import("./NavbarLayout.cfb80182.js"), true ? ["assets/NavbarLayout.cfb80182.js","assets/NavbarLayout.2637606c.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/index.e178843f.js","assets/index.827ef7e2.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0),
    delay: 0,
    suspensible: false
  });
  const NavbarDropdownLayout = defineAsyncComponent({
    loader: () => __vitePreload(() => import("./NavbarDropdownLayout.fbb48f23.js"), true ? ["assets/NavbarDropdownLayout.fbb48f23.js","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/index.e178843f.js","assets/index.827ef7e2.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0),
    delay: 0,
    suspensible: false
  });
  const NavbarSearchLayout = defineAsyncComponent({
    loader: () => __vitePreload(() => import("./NavbarSearchLayout.650436ee.js"), true ? ["assets/NavbarSearchLayout.650436ee.js","assets/NavbarSearchLayout.f0b6c548.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/index.e178843f.js","assets/index.827ef7e2.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/VAvatarStack.d8a5f95e.js","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0),
    delay: 0,
    suspensible: false
  });
  const navbarComponents = {
    "navbar-default": NavbarLayout,
    "navbar-fade": NavbarLayout,
    "navbar-colored": NavbarLayout,
    "navbar-dropdown": NavbarDropdownLayout,
    "navbar-dropdown-colored": NavbarDropdownLayout,
    "navbar-clean": NavbarSearchLayout,
    "navbar-clean-center": NavbarSearchLayout,
    "navbar-clean-fade": NavbarSearchLayout
  };
  const navbarComponentsIds = Object.keys(navbarComponents);
  const navbarLayoutId = ref("navbar-default");
  const navbarLayoutComponent = computed(() => {
    return navbarComponents[navbarLayoutId.value] || NavbarLayout;
  });
  const navbarLayoutTheme = computed(() => {
    switch (navbarLayoutId.value) {
      case "navbar-fade":
      case "navbar-clean-fade":
        return "fade";
      case "navbar-colored":
      case "navbar-dropdown-colored":
        return "colored";
      case "navbar-clean-center":
        return "center";
      default:
        return "default";
    }
  });
  const SidebarLayout = defineAsyncComponent({
    loader: () => __vitePreload(() => import("./SidebarLayout.6399bc9d.js"), true ? ["assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/index.e178843f.js","assets/index.827ef7e2.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0),
    delay: 0,
    suspensible: false
  });
  const SideblockLayout = defineAsyncComponent({
    loader: () => __vitePreload(() => import("./SideblockLayout.c992c7b1.js"), true ? ["assets/SideblockLayout.c992c7b1.js","assets/SideblockLayout.432d8433.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/index.e178843f.js","assets/index.827ef7e2.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/NotificationsMobileDropdown.98d004af.js"] : void 0),
    delay: 0,
    suspensible: false
  });
  const sidebarComponents = {
    "sidebar-default": SidebarLayout,
    "sidebar-color": SidebarLayout,
    "sidebar-color-curved": SidebarLayout,
    "sidebar-curved": SidebarLayout,
    "sidebar-float": SidebarLayout,
    "sidebar-labels": SidebarLayout,
    "sidebar-labels-hover": SidebarLayout,
    "sideblock-default": SideblockLayout,
    "sideblock-color": SideblockLayout,
    "sideblock-color-curved": SideblockLayout,
    "sideblock-curved": SideblockLayout
  };
  const sidebarComponentsIds = Object.keys(sidebarComponents);
  const sidebarLayoutId = ref("sidebar-default");
  const sidebarLayoutComponent = computed(() => {
    return sidebarComponents[sidebarLayoutId.value] || SidebarLayout;
  });
  const sidebarLayoutTheme = computed(() => {
    switch (sidebarLayoutId.value) {
      case "sidebar-float":
        return "float";
      case "sidebar-labels":
        return "labels";
      case "sidebar-labels-hover":
        return "labels-hover";
      case "sidebar-color":
      case "sideblock-color":
        return "color";
      case "sidebar-curved":
      case "sideblock-curved":
        return "curved";
      case "sideblock-color-curved":
      case "sidebar-color-curved":
        return "color-curved";
      case "sidebar-default":
      case "sideblock-default":
      default:
        return "default";
    }
  });
  const dynamicLayoutId = computed({
    get: () => {
      if (isNavbarRoute.value) {
        return navbarLayoutId.value;
      } else {
        return sidebarLayoutId.value;
      }
    },
    set: (value) => {
      if (navbarComponentsIds.includes(value)) {
        navbarLayoutId.value = value;
        return;
      }
      if (sidebarComponentsIds.includes(value)) {
        sidebarLayoutId.value = value;
        return;
      }
    }
  });
  const dynamicLayoutComponent = computed(() => {
    if (isNavbarRoute.value) {
      return navbarLayoutComponent.value;
    } else {
      return sidebarLayoutComponent.value;
    }
  });
  const dynamicLayoutProps = computed(() => {
    if (isNavbarRoute.value) {
      return {
        theme: navbarLayoutTheme.value,
        key: navbarLayoutId.value
      };
    } else {
      return {
        theme: sidebarLayoutTheme.value,
        key: sidebarLayoutId.value
      };
    }
  });
  function setDynamicLayoutId(theme) {
    dynamicLayoutId.value = theme;
  }
  return {
    dynamicLayoutComponent,
    dynamicLayoutProps,
    dynamicLayoutId,
    setDynamicLayoutId,
    sidebarLayoutId,
    sidebarLayoutComponent,
    sidebarLayoutTheme,
    navbarLayoutId,
    navbarLayoutComponent,
    navbarLayoutTheme,
    isNavbarRoute,
    isSidebarRoute,
    navbarLayoutLink,
    sidebarLayoutLink,
    hasDynamicLayout
  };
});
export { useLayoutSwitcher as u };
