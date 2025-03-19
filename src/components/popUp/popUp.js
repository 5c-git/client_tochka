import './popUp.scss';
/* eslint-disable */
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';
/* eslint-enable */

const body = document.querySelector('body');
const activePopUps = [];

const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document
    .querySelector(`#${popUpName}`)
    .content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  if (!popup) {
    console.log('Такого модального окна не существует.');

    return false;
  }
  const closes = popup.querySelectorAll('.popUp__close');

  activePopUps.push(popup);

  if (fixer === true) {
    getPaddingOnBody();

    popup.querySelector('.popUp__overlay').addEventListener('click', () => {
      popup.remove();
      activePopUps.pop();
      getPaddingFromBody();
    });
  }

  if (closes.length > 0) {
    closes.forEach((close) => {
      close.addEventListener('click', () => {
        popup.remove();
        activePopUps.pop();
        if (fixer === true) {
          getPaddingFromBody();
        }
      });
    });
  }

  body.append(templateContent);
};

const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);

  if (!templateContent) {
    return;
  }

  if (fixer === true) {
    getPaddingFromBody();
  }

  templateContent.remove();
};

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    const lastActivePopUp = activePopUps.pop();
    if (lastActivePopUp !== undefined) {
      lastActivePopUp.remove();
      getPaddingFromBody();
    }
  }
});

export { summonPopUp, removePopUp };
