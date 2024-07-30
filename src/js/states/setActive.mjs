import { InputFieldsListener } from '../listeners/inputFieldsListener.mjs';

export function setActive() {
  const inputFields = document.querySelectorAll(`[data-active="input"]`);

  inputFields.forEach((input) => {
    const wrapper = input.parentElement;
    console.log('Parent:', wrapper);
    const sibling = input.previousElementSibling || input.nextElementSibling;
    console.log(sibling);
    InputFieldsListener(input, 'focus', wrapper, sibling);
    InputFieldsListener(input, 'blur', wrapper, sibling);
  });
}
