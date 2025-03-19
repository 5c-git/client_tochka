import './validator.scss';
import Inputmask from 'inputmask';
import Bouncer from 'formbouncerjs';

import Choices from 'choices.js';

const validateForm = (form) => {
  const forma = document.querySelector(`${form}`);

  const validator = new Bouncer(form, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,
    messageAfterField: false,
    patterns: {
      email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]|[А-Яа-я])+)/,
    },
    customValidations: {
      required(field) {
        const selector = field.classList.contains('validator__required');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;

        if (field.value !== '') {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      text(field) {
        const selector = field.classList.contains('validator__text');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;

        // Разрешены только буквы и тире
        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/);
        if (field.value.match(textRegexp)
          && field.value.length >= 2
          && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      textarea(field) {
        const selector = field.classList.contains('validator__textarea');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');
        const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
        const trimmedValue = cuttedSpacesValue.trim();
        field.value = trimmedValue;

        // Разрешены буквы, цифры, спец.симболы
        const textRegexp = new RegExp(/^([a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[\]:;;&lt;&gt;?",.@#№'&quot;„;“;“;”;‘;’;(?!…)«;»;/|/\\/]+\s?)*$/);

        if (field.value.match(textRegexp) && field.value !== '') {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }

        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      select(field) {
        const selector = field.classList.contains('validator__select');

        if (!selector) return false;

        if (field.options[field.selectedIndex].value !== '') {
          field.parentElement.classList.remove('validator__input--error');
          return false;
        }
        field.parentElement.classList.add('validator__input--error');
        return true;
      },
      choices(field) {
        const selector = field.classList.contains('validator__choices');

        if (!selector) return false;

        const description = field.parentElement.parentElement.parentElement.querySelector('.validator__description');
        const select = field.parentElement;

        if (field.options[field.selectedIndex].value !== '') {
          select.classList.remove('validator__input--error');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        select.classList.add('validator__input--error');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      number(field) {
        const selector = field.classList.contains('validator__number');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length >= 1
          && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      minmax(field) {
        const selector = field.classList.contains('validator__minmax');
        const min = field.getAttribute('minlength');
        const max = field.getAttribute('maxlength');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length >= min
          && field.value.length <= max) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      email(field) {
        const selector = field.classList.contains('validator__mail');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');
        // const cuttedSpacesValue = field.value.replace(/\s+/g, '');
        const trimmedValue = field.value.trim();
        field.value = '';
        field.value = trimmedValue;

        // const regexp = new RegExp(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/);

        const regexp = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9_-]|[0-9А-Яа-я])+)/);
        if (field.value.match(regexp)) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      ruPhone(field) {
        const selector = field.classList.contains('validator__phone');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');

        if (field.value.length === 10) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      intPhone(field) {
        const selector = field.classList.contains('validator__country-phone');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');
        if (field.value.length === field.getAttribute('data-mask').length) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      password(field) {
        const selector = field.classList.contains('validator__password');

        if (!selector) return false;

        const description = field.parentElement.parentElement.querySelector('.validator__description');

        field.value.replace(/\s/g, '');
        if (field.value.length >= 8 && field.value.length <= 225) {
          field.classList.add('validator__input--valid');
          description.classList.remove('validator__description--error');
          description.classList.add('validator__description--valid');
          return false;
        }
        field.classList.remove('validator__input--valid');
        description.classList.add('validator__description--error');
        description.classList.remove('validator__description--valid');
        return true;
      },
      passwordMatch(field) {
        const selector = field.getAttribute('data-bouncer-match');

        if (!selector) return false;

        field.value = field.value.replace(/\s/g, '');
        const otherField = field.form.querySelector(selector);
        if (!otherField) return false;
        return otherField.value !== field.value;
      },
    },
    messages: {
      fallback: 'Поле обязательно для заполнения!',
      missingValue: {
        default: 'Поле обязательно для заполнения!',
      },
      patternMismatch: {
        default: 'Значение поля не удовлетворяет требованиям!',
      },
      wrongLength: {
        over: 'wrongLength over',
        under: 'wrongLength under',
      },
      outOfRange: {
        over: 'outOfRange over',
        under: 'outOfRange under',
      },
      text: 'Неправильно!',
      textarea: 'Неправильно!',
      number: 'Допускаются только цифры!',
      ruPhone: 'Введи телефон!',
      intPhone: 'Выбери и введи междонародный телефон!',
      password: 'Пароль должен содержать минимум 8 символов, латинские символы верхнего и нижнего регистров, знаки пунктуации',
      passwordMatch: 'Значения полей не совпадают!',
    },
  });

  forma.addEventListener('reset', () => {
    forma.querySelectorAll('.validator__description').forEach((description) => {
      description.classList.remove('validator__description--error');
      description.classList.remove('validator__description--valid');
    });

    forma.querySelectorAll('.validator__input--valid').forEach((input) => {
      input.classList.remove('validator__input--valid');
    });

    forma.querySelectorAll('.validator__input--error').forEach((input) => {
      input.classList.remove('validator__input--error');
    });
  });

  return validator;
};

const maskNumber = (form, maxNumber) => {
  const numberMask = new Inputmask(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: '',
  });

  const inputsContainer = document.querySelector(`${form}`);
  const inputs = inputsContainer.querySelectorAll('.validator__number');

  inputs.forEach((input) => {
    numberMask.mask(input);
  });
};

const maskSimplePhone = (form) => {
  /* eslint-disable */
  const mask = function () {
    let matrix = '+7 (___) ___ ____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
    });
  };
  /* eslint-enable */

  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__simple-phone');

  inputs.forEach((phone) => {
    phone.addEventListener('input', mask);
  });
};

const maskPhone = (form) => {
  const phoneMask = new Inputmask('+7 [(999) 999-99-99]', {
    autoUnmask: true,
    showMaskOnHover: false,
  });

  const phonesContainer = document.querySelector(`${form}`);
  const inputs = phonesContainer.querySelectorAll('.validator__phone');

  inputs.forEach((phone) => {
    phoneMask.mask(phone);

    // phone.addEventListener('paste', (evt) => {
    //   evt.preventDefault();
    //   const initialValue = (evt.clipboardData || window.clipboardData).getData('text');
    //   let serializedValue = initialValue.replace(/[^-0-9]/gim, '');

    //   if (Number(serializedValue.charAt(0)) === 7) {
    //     serializedValue = serializedValue.slice(1);
    //   } if (Number(serializedValue.charAt(0)) === 8) {
    //     serializedValue = serializedValue.slice(1);
    //   }
    //   phone.value = Number(serializedValue);
    // });
  });
};

const maskInternationalPhone = (form) => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector('.validator__country-phone');
  const firstPhoneMask = hashContainer.querySelector('.validator__country-mask').getAttribute('data-mask');

  countryPhone.setAttribute('data-mask', firstPhoneMask.replace(/[^9]/g, ''));

  let phoneMask = new Inputmask(firstPhoneMask, {
    autoUnmask: true,
  });

  phoneMask.mask(countryPhone);

  const options = [];

  const optionsData = hashContainer.querySelectorAll('.validator__country-mask');

  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute('data-value'),
      label: option.getAttribute('data-country'),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute('data-mask'),
        flag: option.getAttribute('data-flag'),
      },
    });
  });

  const choicesSelect = hashContainer.querySelector('.validator__country-select');

  const choicesNolint = new Choices(choicesSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: 'choices validator__countries',
    },
    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ''}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} 
            ${data.disabled ? 'aria-disabled="true"' : ''}> 
            <p class='choices__flag' style='background-image: url(${options[(data.choiceId - 1)].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[(data.id - 1)].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
      };
    },
  });

  choicesSelect.addEventListener('choice', (evt) => {
    countryPhone.setAttribute('data-mask', evt.detail.choice.customProperties.mask.replace(/[^9]/g, ''));
    countryPhone.inputmask.remove();
    countryPhone.value = '';
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new Inputmask(evt.detail.choice.customProperties.mask, {
      autoUnmask: true,
    });
    phoneMask.mask(countryPhone);
  });
};

const initPasswordEye = (form) => {
  const eyeContainer = document.querySelector(`${form}`);
  const eyes = eyeContainer.querySelectorAll('.validator__eye');
  const passwords = eyeContainer.querySelectorAll('.validator__password');

  eyes.forEach((eye, index) => {
    eye.addEventListener('click', () => {
      eye.classList.toggle('validator__eye--open');
      if (passwords[index].type === 'password') {
        passwords[index].type = 'text';
      } else {
        passwords[index].type = 'password';
      }
    });
  });
};

const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png', '.pdf'];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector('.validator__file-container');
  const loadInput = filesContainer.querySelector('.validator__file-input');
  const sizeWarning = filesContainer.querySelector('.validator__size-warning');
  const loadedFilesContainer = filesForm.querySelector('.validator__loaded-files');
  const cleaner = filesForm.querySelector('.validator__cleaner');
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = 'none';

  const cleanFucntion = () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
  };

  filesForm.addEventListener('reset', () => {
    cleanFucntion();
  });

  cleaner.addEventListener('click', () => {
    cleanFucntion();
  });

  loadInput.addEventListener('change', () => {
    const files = Object.values(loadInput.files);

    loadedFilesContainer.innerHTML = '';

    let totalSize = 0;

    files.forEach((file) => {
      totalSize += file.size;
    });

    if (totalSize > 0) {
      cleaner.style.display = 'grid';
    } else {
      cleaner.style.display = 'none';
    }

    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        // submitButton.classList.add('validator__submit--disabled');
        // submitButton.disabled = true;

        loadInput.value = '';
        cleaner.style.display = 'none';

        sizeWarning.classList.add('validator__size-warning--exeeded');
        sizeWarning.textContent = 'Недопустимый тип файлов!';

        return;
      }
    }

    if (totalSize < 5242880 && files.length <= 3) {
      sizeWarning.classList.remove('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Фотография разворота с ФИО, файл форматом jpeg, gif, png, pdf до 5 MB.';

      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;КБ</p>
          </div>
          `;

        loadedFilesContainer.insertAdjacentHTML('beforeend', fileTemplate);
      });

      // submitButton.classList.remove('validator__submit--disabled');
      // submitButton.disabled = false;
    } else if (totalSize > 5242880) {
      // submitButton.classList.add('validator__submit--disabled');
      // submitButton.disabled = true;

      loadInput.value = '';
      cleaner.style.display = 'none';

      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Размер файлов не должен превышать 5 МБ!';
    } else if (files.length > 3) {
      // submitButton.classList.add('validator__submit--disabled');
      // submitButton.disabled = true;

      loadInput.value = '';
      cleaner.style.display = 'none';

      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Превышен лимит количества файлов!';
    }
  });
};

const initSelectValidation = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__select');

  nativeSelects.forEach((select) => {
    select.addEventListener('change', () => {
      if (select.parentElement.classList.contains('validator__input--error')) {
        select.parentElement.classList.remove('validator__input--error');
      }
    });
  });
};

const initChoicesValidation = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const nativeSelects = formContainer.querySelectorAll('.validator__choices');

  nativeSelects.forEach((select) => {
    const field = select.parentElement.parentElement.parentElement;
    const description = field.querySelector('.validator__description');
    const customSelect = field.querySelector('.choices__inner');
    select.addEventListener('change', () => {
      if (customSelect.classList.contains('validator__input--error')) {
        customSelect.classList.remove('validator__input--error');
        description.classList.remove('validator__description--error');
      }
    });
  });
};

const focusFirstInput = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector('input');
  input.focus();
};

const initAgreeCheckbox = (form) => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector('.validator__legal');
  const checkbox = checkboxContainer.querySelector('.validator__agree');
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');

  checkboxLabel.addEventListener('click', () => {
    const isExeeded = checkboxContainer.querySelector('.validator__size-warning--exeeded');

    if (isExeeded) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      checkbox.setAttribute('checked', false);
    } else {
      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
      checkbox.setAttribute('checked', true);
    }
  });
};

export {
  validateForm, maskNumber, maskSimplePhone, maskPhone, maskInternationalPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput, focusFirstInput,
  initSelectValidation, initChoicesValidation,
};
