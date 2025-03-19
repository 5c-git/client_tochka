/* eslint-disable */
import utils from "./utils.scss";
import main from "./main.scss";
import fonts from "./fonts.scss";
import {
  summonPopUp,
  removePopUp,
} from '../components/popUp/popUp';
import {
  validateForm, maskNumber, maskSimplePhone, maskPhone, maskInternationalPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput, focusFirstInput,
  initSelectValidation, initChoicesValidation,
} from '../components/validator/validator';
/* eslint-enable */

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const birthdayRegExp = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
const innRegExp = /^(([0 - 9]{12})| ([0 - 9]{10}))?$/;

// Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.
const body = document.querySelector('body');
const header = document.querySelector('.header__fixed');
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;

// Функция чтобы блочить экран и давать отступ.
const getPaddingOnBody = () => {
  const modal = document.querySelector('.Modal');
  const popUps = document.querySelectorAll('.popUp');
  const alertWrapper = document.querySelector('.alert-wrapper');

  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    if (modal) {
      modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }

    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }

    body.classList.add('static');
    checker = true;
  }
};

// Функция чтобы снимать блокировку экрана и убирать отступ.
const getPaddingFromBody = () => {
  const modal = document.querySelector('.Modal');
  const popUps = document.querySelectorAll('.popUp');
  const alertWrapper = document.querySelector('.alert-wrapper');

  if (checker) {
    body.style.paddingRight = '';
    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = '';
    }

    if (modal) {
      modal.style.paddingRight = '';
    }

    if (popUps) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = '';
      });
    }

    if (alertWrapper) {
      alertWrapper.style.paddingRight = '';
    }

    body.classList.remove('static');
    checker = false;
  }
};

// Функция чтобы перемешать массив.
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Функция чтобы ставить пробелы каждые 3 символа.
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
};

// автоматическая высота для textarea
function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = (values) => {
  const data = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};

const startTimer = (container, btn, tm) => {
  const button = btn;
  let time = tm;
  const timer = setInterval(() => {
    if (time < 1) {
      button.removeAttribute('disabled');
      container.style.display = 'none';
      clearInterval(timer);
    } else {
      time -= 1;
      container.style.display = '';
      container.querySelector('b').textContent = `00:${String(time).padStart(2, '0')}`;
    }
  }, 1000);

  return timer;
};

const debounce = (cb) => {
  const DEBOUNCE_INTERVAL = 500; // ms
  let lastTimeout = null;

  return () => {
    const parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(() => {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

const scrollToErrorField = (form) => {
  form.addEventListener('bouncerFormInvalid', () => {
    const firstError = form.querySelector('.validator__input--error');
    const scrollToFirstError = (error) => {
      error.style.scrollMarginTop = '140px';
      error.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    };

    setTimeout(() => {
      scrollToFirstError(firstError);
    }, 100);
  });
};

// Статус для системных сообщений "alert".
const setStatus = (status) => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'exclam':
      return 'alert--grey';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
};

// Функция чтобы навешивать вызов модального окна заявки по кнопке.
const activateRequestButtons = (func) => {
  const buttons = document.querySelectorAll('.button-request:not(.button-request--js)');

  buttons.forEach((button) => {
    if (!button.classList.contains('button-request--js')) {
      button.classList.add('button-request--js');

      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        const { type } = button.dataset;
        const info = button.dataset;

        if (!document.querySelector(`#modal--${type}`)) {
          console.log('Такого модального окна не существует.');

          return false;
        }

        if (type) {
          summonPopUp(`#modal--${type}`, true);
          setTextareaAutoHeight('.modal__form textarea');
          const modal = document.querySelector(`.modal--${type}`);

          if (!modal) {
            console.log('Такого модального окна не существует.');

            return false;
          }

          const form = modal.querySelector('form');

          for (const key in info) {
            form.insertAdjacentHTML('beforeend', `<input type="hidden" name="${key}" value="${info[key]}">`);
          }

          const validatedForm = validateForm(`.modal--${type} form`);
          maskPhone(`.modal--${type}`, 'input[type="tel"]');

          form.addEventListener('bouncerFormValid', debounce(() => {
            if (func) {
              const answer = func(form);
              if (answer.responseJSON) {
                if (answer.responseJSON.status === 'success') {
                  validatedForm.destroy();
                  removePopUp(`.modal--${type}`, true);

                  const alert = document.querySelector('#alert--request').content.querySelector('.alert');
                  alert.classList.add(setStatus('success'));

                  const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
                  container.innerHTML = answer.responseJSON.text;
                }
              }
            }
          }));
        }
      });
    }
  });
};

export {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  shuffle,
  numberSplitter,
  activateRequestButtons,
  phoneRegExp,
  innRegExp,
  birthdayRegExp,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  scrollToErrorField,
};
