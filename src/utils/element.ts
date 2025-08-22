export const isFormElement = (target:any) => {
  return target &&
    (target.tagName == "INPUT" ||
    target.tagName == "TEXTAREA" ||
    target.isContentEditable)
}

export const blurCurrentActive = () => {
  const active = document.activeElement as HTMLElement | null;
  if (
    active &&
    (active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable)
  ) {
    active.blur();
  }
}