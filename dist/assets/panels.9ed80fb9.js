import { C as defineStore, u as useStorage } from "./vendor.6548d360.js";
const usePanels = defineStore("panels", () => {
  const active = useStorage("active-panel", "none");
  function setActive(panelId) {
    active.value = panelId;
  }
  function close() {
    active.value = "none";
  }
  return {
    active,
    setActive,
    close
  };
});
export { usePanels as u };
