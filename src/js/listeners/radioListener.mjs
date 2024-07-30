export function radioListener(type, index, types, child) {
  type.addEventListener('click', () => {
    console.log(type);
    type.classList.add('bg-limeOpacity', 'border-lime');
    type.classList.remove('border-slate-900');
    child.checked = true;
    for (let i = 0; i < types.length; i++) {
      if (i !== index) {
        if (types[i].classList.contains('bg-limeOpacity')) {
          types[i].classList.remove('bg-limeOpacity');
          types[i].classList.remove('border-lime');
          types[i].classList.add('border-slate-900');
        }
      }
    }
  });
}
