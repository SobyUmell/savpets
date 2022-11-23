
let placeholder = document.querySelectorAll('input');

for (let i = 0; i < placeholder.length; i++) {
  placeholder[i].addEventListener('click', () => {
    placeholder[i].classList.toggle('_active-input');
  })
}