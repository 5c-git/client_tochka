const selectOne = window.Corners5ProjectLayout.choicesInit({
  select: document.querySelector('.custom-select__select'),
  func: (event) => {
    console.log(`id = ${event.detail.id}`);
    console.log(`value = ${event.detail.value}`);
    console.log(`label = ${event.detail.label}`);
  },
});

window.Corners5ProjectLayout.customRangePickerInit();

const filterForm = document.querySelector('.custom-filter__form');
if (filterForm) {
  filterForm.addEventListener('change', (evt) => {
    console.log(evt);
    console.log(`${evt.target.name} ${evt.target.value}`);
  });
}
