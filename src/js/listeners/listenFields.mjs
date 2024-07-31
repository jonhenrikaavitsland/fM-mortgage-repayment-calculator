export function listenFields() {
  const elements = document.querySelectorAll(`[data-active="input"]`);
  console.log('elements:', elements);
  elements.forEach((element) => {
    const infoElement = element.querySelector(`[data-active="info"]`);
    console.log('info:', infoElement);
    element.addEventListener('click', () => {
      elements.forEach((otherElement) => {
        if (otherElement !== element) {
          otherElement.classList.remove('border-lime');
          otherElement.classList.add('border-slate-900');
          const otherInfo = otherElement.querySelector(`[data-active="info"]`);
          if (otherInfo) {
            otherInfo.classList.remove('bg-lime');
            otherInfo.classList.add('bg-slate-100');
          }
        }
      });
      if (infoElement) {
        infoElement.classList.remove('bg-slate-100');
        infoElement.classList.add('bg-lime');
        element.classList.remove('border-slate-900');
        element.classList.add('border-lime');
      }
    });
  });
}
