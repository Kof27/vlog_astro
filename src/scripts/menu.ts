document.querySelector('.hamburger')?.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    navLinks?.classList.toggle('expanded');
  });