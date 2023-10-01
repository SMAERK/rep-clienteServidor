import { C as defineStore, k as ref } from "./vendor.6548d360.js";
const useViewWrapper = defineStore("viewWrapper", () => {
  const isPushed = ref(false);
  const isPushedBlock = ref(false);
  const pageTitle = ref("Welcome");
  function setPushed(value) {
    isPushed.value = value;
  }
  function setPushedBlock(value) {
    isPushedBlock.value = value;
  }
  function setPageTitle(value) {
    pageTitle.value = value;
  }
  return {
    isPushed,
    isPushedBlock,
    pageTitle,
    setPushed,
    setPushedBlock,
    setPageTitle
  };
});
export { useViewWrapper as u };
