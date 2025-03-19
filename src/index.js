// SvgSprite compiler
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/icons/', true, /\.svg$/));
// UTILS
import './utils/utils.js';

// LIBS SCSS
import 'choices.js/src/styles/choices.scss';
import 'flatpickr/dist/themes/light.css';
//------------------------------------------------------------

// LIBS JS
//------------------------------------------------------------
//------------------------------------------------------------

// 100vh hack for mobile-browsers
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
// usage in css
// height: calc(var(--vh, 1vh) * 100);
// 100vh hack for mobile-browsers
//------------------------------------------------------------

// Удалить перед передачей кодеру.
import './components/widget/widget';

// обязательный функционал для каждого проекта
// Core components
import './components/window/window.js';
import './components/popUp/popUp.js';
// import './components/validator/validator.js';
import './components/button/button.js';
// Core components

// наработанный полезный функционал(необязательный для каждого проекта)
//Functional components

// Bitrix components

//компоненты необходимые практически на каждом проекте
//Basic components
import './components/modal/modal';
import './components/header/header';
import './components/footer/footer';

//Basic components
import './components/custom-icon/custom-icon';
import './components/custom-header/custom-header';
import './components/custom-layout/custom-layout';
import './components/custom-account-add/custom-account-add';
import './components/custom-account-card/custom-account-card';
import './components/custom-field/custom-field';
import './components/custom-bill-card/custom-bill-card';
import './components/custom-checkbox/custom-checkbox';
import './components/custom-tabs/custom-tabs';
import './components/custom-module-card/custom-module-card';
import './components/custom-pagination/custom-pagination';
import './components/custom-table/custom-table';
import './components/custom-filter/custom-filter';
import './components/custom-select/custom-select';
import './components/custom-range-picker/custom-range-picker';