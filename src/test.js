import initNavbar from './index';
import './reset.css';
import './style.css';

const navbarHtml = `
  <div class="brand">
    <h1>Brand</h1>
  </div>
  <div class="menu">
    <nav>
      <div class="item">
        <a href="#">Home</a>
      </div>
      <div class="item">
        <a href="#">About</a>
      </div>
      <div class="item is-dropdown">
        <a href="#">Media & News <span class="icon-more">&rsaquo;</span></a>
        <div class="dropdown-menu">
          <a href="#">CNN</a>
          <a href="#">Fox</a>
        </div>
      </div>
      <div class="item">
        <a href="#">Careers</a>
      </div>
      <div class="item is-dropdown">
        <a href="#">Connect <span class="icon-more">&rsaquo;</span></a>
        <div class="dropdown-menu">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        </a>
      </div>
    </nav>
  </div>
  <div class="is-toggle close">
    <a href="#">Menu</a>
  </div>
`

const navbarElm = document.createElement('div');
navbarElm.setAttribute('id', 'navbar1');
navbarElm.className = 'navbar';
navbarElm.innerHTML = navbarHtml;
document.body.appendChild(navbarElm);

initNavbar(navbarElm.getAttribute('id'));