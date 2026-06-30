document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';

      const img = document.createElement('img');
      img.src = link.href;

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});
