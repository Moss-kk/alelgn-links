document.addEventListener('DOMContentLoaded', () => {
  const activeLinks = document.querySelectorAll('.link-card:not(.disabled)');

  activeLinks.forEach(link => {
    link.addEventListener('touchstart', () => {
      link.classList.add('active-touch');
    }, { passive: true });

    link.addEventListener('touchend', () => {
      setTimeout(() => {
        link.classList.remove('active-touch');
      }, 150);
    }, { passive: true });
  });
});