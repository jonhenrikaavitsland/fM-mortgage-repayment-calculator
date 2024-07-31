import { InputFieldsListener } from '../listeners/inputFieldsListener.mjs';

export function setActive() {
  const inputFields = document.querySelectorAll(`[data-active="input"]`);

  inputFields.forEach((input) => {
    const wrapper = input.parentElement;
    const sibling = input.previousElementSibling || input.nextElementSibling;
    InputFieldsListener(input, 'focus', wrapper, sibling);
    InputFieldsListener(input, 'blur', wrapper, sibling);
  });
}
