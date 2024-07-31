setActive();

export function setActive() {
  listenFields();
}

export function listenFields() {
  const elements = document.querySelectorAll(`[data-active="input"]`);
  console.log('elements:', elements);
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.remove('border-slate-900');
      element.classList.add('border-lime');
    });
  });
}
