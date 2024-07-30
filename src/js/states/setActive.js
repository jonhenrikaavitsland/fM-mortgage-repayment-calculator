import { InputFieldsListener } from '../listeners/inputFieldsListener.js';

export function setActive() {
  const inputFields = document.querySelectorAll(`[data-active="input"]`);
  console.log(inputFields);

  inputFields.forEach((input) => {
    const parent = input.parentElement;
    const sibling = input.previousElementSibling || input.nextElementSibling;
    console.log(sibling);
    InputFieldsListener(input, 'focusin', parent, sibling);
    InputFieldsListener(input, 'focusout', parent, sibling);
  });
}
