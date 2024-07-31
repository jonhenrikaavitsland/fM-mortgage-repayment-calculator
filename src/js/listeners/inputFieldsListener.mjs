export function InputFieldsListener(input, state, parent, sibling) {
  input.addEventListener(state, () => {
    if (!input.classList.contains('testToggle')) {
      input.classList.add('testToggle');
      parent.classList.remove('border-slate-900');
      parent.classList.add('border-lime');
      sibling.classList.remove('bg-slate-100');
      sibling.classList.add('bg-lime');
    } else {
      input.classList.remove('testToggle');
      parent.classList.add('border-slate-900');
      parent.classList.remove('border-lime');
      sibling.classList.remove('bg-lime');
      sibling.classList.add('bg-slate-100');
    }
  });
}
