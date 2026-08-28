const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '86px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0';
      nav.style.padding = '16px 24px 22px';
      nav.style.background = 'rgba(7,9,10,.98)';
      nav.style.borderBottom = '1px solid #242b2f';
    }
  });
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
