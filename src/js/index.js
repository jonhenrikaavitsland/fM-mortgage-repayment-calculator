import { setActive } from './states/setActive.js';

setActive();
chooseType();

export function chooseType() {
  const types = document.querySelectorAll(`[data-active="radio"]`);
  types.forEach((type, index) => {
    const childInput = type.children[0];
    const childDiv = type.children[1];
    console.log(childDiv);
    console.log(childInput);

    type.addEventListener('click', () => {
      type.classList.toggle('bg-limeOpacity');
      type.classList.remove('border-slate-900');
      type.classList.add('border-lime');
      childInput.checked = true;
      for (let i = 0; i < types.length; i++) {
        if (i !== index) {
          if (types[i].classList.contains('bg-limeOpacity'))
            types[i].classList.toggle('bg-limeOpacity');
          types[i].classList.remove('border-lime');
          types[i].classList.add('border-slate-900');
        }
      }
    });
  });
}
