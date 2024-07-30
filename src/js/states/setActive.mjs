import { InputFieldsListener } from '../listeners/inputFieldsListener.mjs';

export function setActive() {
  const inputFields = document.querySelectorAll(`[data-active="input"]`);

  inputFields.forEach((input) => {
    const parent = input.parentElement;
    const sibling = input.previousElementSibling || input.nextElementSibling;
    InputFieldsListener(input, 'focusin', parent, sibling);
    InputFieldsListener(input, 'focusout', parent, sibling);
  });
}
