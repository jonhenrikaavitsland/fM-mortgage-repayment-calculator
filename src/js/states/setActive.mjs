import { InputFieldsListener } from '../listeners/inputFieldsListener.mjs';

export function setActive() {
  const inputFields = document.querySelectorAll(`[data-active="input"]`);

  inputFields.forEach((input) => {
    const wrapper = input.parentElement;
    const sibling = input.previousElementSibling || input.nextElementSibling;
    console.log(sibling);
    InputFieldsListener(input, 'focusin', wrapper, sibling);
    InputFieldsListener(input, 'focusout', wrapper, sibling);
  });
}
