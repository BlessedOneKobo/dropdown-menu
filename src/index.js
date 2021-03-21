function hideOtherDropdowns(dropdownList, clickedMenu) {
  Array.prototype.forEach.call(dropdownList, (dropdown) => {
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!menu || menu === clickedMenu) {
      return;
    }

    menu.classList.remove('visible');
  });
}

export default function initNavbar (navbarId) {
  const navbarElm = document.getElementById(navbarId);

  if (!navbarElm) {
    throw new Error(`initNavbar: navbarElm '#${navbarId}' not found`);
  }

  const menuToggle = navbarElm.querySelector('.is-toggle');

  if (!menuToggle) {
    throw new Error(`initNavbar: Element with 'is-toggle' class not found`);
  }

  const nav = navbarElm.querySelector('nav');

  if (!nav) {
    throw new Error(`initNavbar: 'nav' Element not found`);
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('visible');

    const link = menuToggle.querySelector('a');

    if (menuToggle.classList.contains('close')) {
      link.textContent = 'Close';
      menuToggle.classList.remove('close');
      menuToggle.classList.add('open');
    } else {
      link.textContent = 'Menu';
      menuToggle.classList.remove('open');
      menuToggle.classList.add('close');
    }

    nav.classList.toggle('visible');
  });

  const dropdownList = navbarElm.querySelectorAll('.is-dropdown');

  Array.prototype.forEach.call(dropdownList, (dropdown) => {
    dropdown.addEventListener('click', (event) => {
      const menu = dropdown.querySelector('.dropdown-menu');

      if (!menu) {
        return;
      }

      hideOtherDropdowns(dropdownList, menu);
      menu.classList.toggle('visible');
    });
  });
}