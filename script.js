
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

document.querySelectorAll('.nav-drop > button').forEach(button => {
  button.addEventListener('click', (event) => {
    if (window.innerWidth <= 1180) {
      event.preventDefault();
      const current = button.closest('.nav-drop');
      document.querySelectorAll('.nav-drop.open').forEach(other => {
        if (other !== current) other.classList.remove('open');
      });
      current?.classList.toggle('open');
    }
  });
});
