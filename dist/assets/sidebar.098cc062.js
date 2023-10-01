import { C as defineStore, k as ref } from "./vendor.6548d360.js";
const useSidebar = defineStore("sidebar", () => {
  const active = ref("none");
  function toggle(sidebarId) {
    if (active.value === sidebarId) {
      active.value = "none";
    } else {
      active.value = sidebarId;
    }
  }
  function setActive(sidebarId) {
    active.value = sidebarId;
  }
  function close() {
    active.value = "none";
  }
  return {
    active,
    toggle,
    setActive,
    close
  };
});
export { useSidebar as u };
