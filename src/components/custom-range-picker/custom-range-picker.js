import './custom-range-picker.scss';
import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';

const customRangePickerInit = (func) => {
  const startInput = document.querySelector('.custom-range-picker__input--start');
  const finishInput = document.querySelector('.custom-range-picker__input--finish');

  let startInputPicker;
  let startInputValue;
  let finishInputPicker;
  let finishInputValue;

  if (startInput) {
    const datePicker = startInput;
    const container = datePicker.closest('.custom-range-picker__field');

    startInputPicker = flatpickr(datePicker, {
      locale: Russian,
      dateFormat: 'd.m.Y',
      disableMobile: true,
      allowInput: true,
      appendTo: container || undefined,
      onChange: (selectedDates, dateStr, instance) => {
        startInputValue = selectedDates[0].getTime();

        if (startInputValue > finishInputValue) {
          startInputPicker.setDate(finishInputValue, false, 'd.m.Y');
          finishInputPicker.setDate(startInputValue, false, 'd.m.Y');
        }
      },
      onBlur: (evt) => {
      },
    });
  }

  if (finishInput) {
    const datePicker = finishInput;
    const container = datePicker.closest('.custom-range-picker__field');

    finishInputPicker = flatpickr(datePicker, {
      locale: Russian,
      dateFormat: 'd.m.Y',
      disableMobile: true,
      allowInput: true,
      appendTo: container || undefined,
      onChange: (selectedDates, dateStr, instance) => {
        finishInputValue = selectedDates[0].getTime();

        if (startInputValue > finishInputValue) {
          startInputPicker.setDate(finishInputValue, false, 'd.m.Y');
          finishInputPicker.setDate(startInputValue, false, 'd.m.Y');
        }
      },
      onBlur: (evt) => {
      },
    });
  }
};

export default customRangePickerInit;
