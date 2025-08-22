import { blurCurrentActive, isFormElement } from "./element";

export default () => {
  // Chặn menu chuột phải / long press
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Chặn double click selection
  document.addEventListener("dblclick", (e) => e.preventDefault());

  // Chặn luôn selection khi user cố tình
  document.addEventListener("selectstart", (e) => e.preventDefault());

  document.addEventListener("gesturestart", (e) => e.preventDefault());

  document.addEventListener('pointerup', (e) => {
    !isFormElement(e.target) && blurCurrentActive();
  });
}