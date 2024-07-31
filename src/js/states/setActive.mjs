import { listenFields } from '../listeners/listenFields.mjs';

export function setActive() {
  listenFields();
  listenType();
}

export function listenType() {
  const types = document.querySelectorAll('[data-active="radio"]');

  types.forEach((type) => {
    const input = type.querySelector('input');

    type.addEventListener('click', () => {
      types.forEach((otherType) => {
        if (otherType !== type) {
          otherType.classList.remove('border-lime', 'bg-lime/50');
          otherType.classList.add('border-slate-900');
          const otherInput = otherType.querySelector('input');
          if (otherInput) {
            otherInput.checked = false;
          }
        }
      });

      if (input) {
        input.checked = true;
      }
      type.classList.remove('border-slate-900');
      type.classList.add('border-lime', 'bg-lime/50');
    });
  });
}
