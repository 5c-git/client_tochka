import {
  validateForm,
  maskNumber,
  maskSimplePhone,
  maskPhone,
  maskInternationalPhone,
  initPasswordEye,
  initAgreeCheckbox,
  initFileLoadInput,
  focusFirstInput,
  initSelectValidation,
  initChoicesValidation,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import accordionsInit from '../accordion/accordion';
import choicesInit from '../custom-select/custom-select';
import customRangePickerInit from '../custom-range-picker/custom-range-picker';

window.Corners5ProjectLayout = {
  validation: {
    validateForm,
    maskSimplePhone,
    maskNumber,
    maskPhone,
    maskInternationalPhone,
    initPasswordEye,
    initAgreeCheckbox,
    initFileLoadInput,
    focusFirstInput,
    initSelectValidation,
    initChoicesValidation,
  },
  summonPopUp,
  removePopUp,
  accordionsInit,
  choicesInit,
  customRangePickerInit,
};
