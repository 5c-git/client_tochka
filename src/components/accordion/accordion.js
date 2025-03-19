import './accordion.scss';

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.accordion--active');
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector('.accordion__inner');
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});

const accordionsInit = () => {
  const accordions = document.querySelectorAll('.accordion:not(.accordion--js)');
  if (accordions.length > 0) {
    accordions.forEach((accordion) => {
      if (!accordion.classList.contains('accordion--js')) {
        const button = accordion.querySelector('.accordion__toggle');
        const innerList = accordion.querySelectorAll('.accordion__inner');

        button.addEventListener('click', () => {
          // Проверяем открыт ли блок, по которому кликнули.
          if (accordion.classList.contains('accordion--active')) {
            accordion.classList.remove('accordion--active');
            innerList.forEach((inner) => {
              inner.style.maxHeight = '';
            });
          } else {
            // Находим все открытые блоки чтобы скрыть их.
            document.querySelectorAll('.accordion--active').forEach((item) => {
              const activeAccordion = item;
              activeAccordion.classList.remove('accordion--active');
              item.querySelector('.accordion__inner').style.maxHeight = '';
            });

            accordion.classList.add('accordion--active');
            innerList.forEach((inner) => {
              inner.style.maxHeight = `${inner.scrollHeight}px`;
            });
          }
        });
      }
    });
  }
};

accordionsInit();

export default accordionsInit;
