export function radioListener(type) {
  type.addEventListener('click', () => {
    console.log(type);
    if (!type.classList.contains('testToggle')) {
      type.classList.remove('border-slate-900');
      type.classList.add('testToggle', 'border-lime');
    } else {
      type.classList.remove('testToggle', 'border-lime');
      type.classList.add('border-slate-900');
    }
  });
}
