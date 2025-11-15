import { blurCurrentActive, isFormElement } from "./element";

export const preventDefault = () => {
  // Chặn menu chuột phải / long press
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener('pointerup', (e) => {
    !isFormElement(e.target) && blurCurrentActive();
  });

  if ('virtualKeyboard' in navigator) {
    (navigator.virtualKeyboard as any).overlaysContent = true;
  }
}
