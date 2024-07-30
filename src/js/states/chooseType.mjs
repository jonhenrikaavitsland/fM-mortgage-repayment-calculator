import { radioListener } from '../listeners/radioListener.mjs';

export function chooseType() {
  const types = document.querySelectorAll(`[data-active="radio"]`);
  types.forEach((type, index) => {
    const childInput = type.children[0];

    radioListener(type, index, types, childInput);
  });
}
