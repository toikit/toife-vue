import { blurCurrentActive, isFormElement } from "./element";

export default () => {
  // Chặn menu chuột phải / long press
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener('pointerup', (e) => {
    !isFormElement(e.target) && blurCurrentActive();
  });
}