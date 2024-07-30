export function InputFieldsListener(input, state, parent, sibling) {
  input.addEventListener(state, () => {
    parent.classList.toggle('border-slate-900');
    parent.classList.toggle('border-lime');
    sibling.classList.toggle('bg-slate-100');
    sibling.classList.toggle('bg-lime');
  });
}
