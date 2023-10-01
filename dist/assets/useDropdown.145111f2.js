import { a9 as reactive, k as ref, ax as onClickOutside, B as watchEffect } from "./vendor.6548d360.js";
function useDropdown(container) {
  const isOpen = ref(false);
  onClickOutside(container, () => {
    isOpen.value = false;
  });
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  watchEffect(() => {
    if (!container.value) {
      return;
    }
    if (isOpen.value) {
      container.value.classList.add("is-active");
    } else {
      container.value.classList.remove("is-active");
    }
  });
  return reactive({
    isOpen,
    open,
    close,
    toggle
  });
}
export { useDropdown as u };
