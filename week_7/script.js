document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const btn  = document.getElementById('halloween-mode-toggle');

  if (!btn) {
    console.warn('[theme] No #halloween-mode-toggle found. Is the id correct and the button in the DOM?');
    return;
  }
  console.log('[theme] Toggle button found.');

  function updateLabel() {
    const isHall = root.classList.contains('halloween');
    btn.textContent = isHall ? '💡 Normal Mode' : '🎃 Halloween Mode';
  }

  updateLabel();

  btn.addEventListener('click', function () {
    const isHall = root.classList.toggle('halloween');
    try { localStorage.setItem('theme', isHall ? 'halloween' : 'normal'); } catch (e) {}
    updateLabel();
    console.log('[theme] Toggled. Now:', isHall ? 'halloween' : 'normal');
  });
});
