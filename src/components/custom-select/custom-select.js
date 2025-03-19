import './custom-select.scss';
import Choices from 'choices.js';

const choicesInit = ({
  select,
  func,
}) => {
  if (select) {
    const choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: ['choices', 'custom-select__choices'],
      },
    });

    select.addEventListener('addItem', (event) => {
      if (func) {
        func(event);
      }
    });

    return choicesNolint;
  }
};

export default choicesInit;
