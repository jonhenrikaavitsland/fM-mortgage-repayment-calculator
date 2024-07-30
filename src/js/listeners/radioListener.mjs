export function radioListener(type, index, types, child) {
  type.addEventListener('click', () => {
    type.classList.toggle('bg-limeOpacity');
    type.classList.remove('border-slate-900');
    type.classList.add('border-lime');
    child.checked = true;
    for (let i = 0; i < types.length; i++) {
      if (i !== index) {
        if (types[i].classList.contains('bg-limeOpacity'))
          types[i].classList.toggle('bg-limeOpacity');
        types[i].classList.remove('border-lime');
        types[i].classList.add('border-slate-900');
      }
    }
  });
}
