import { TODAY, EMPTY_STRING } from '../common/constants';
import {
  Action,
  State,
  ACTION_TYPE,
  ModalData,
} from '../types/main';

export const initialState: State = {
  modalData: { title: EMPTY_STRING, message: EMPTY_STRING },
  openModal: false,
  dateTime: TODAY,
  licensePlate: EMPTY_STRING,
  incorrectLicense: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPE.setLicenseError:
      return {
        ...state,
        incorrectLicense: action.payload,
      };
    case ACTION_TYPE.setLicensePlate:
      return {
        ...state,
        licensePlate: action.payload,
      };
    case ACTION_TYPE.closeModal:
      return {
        ...state,
        openModal: false,
      };
    case ACTION_TYPE.openModal:
      return {
        ...state,
        openModal: true,
        modalData: action.payload,
      };
    case ACTION_TYPE.selectDateTime:
      return {
        ...state,
        dateTime: action.payload,
      };
    default:
      return state;
  }
};

export const setDateTimeAction = (dateTime: Date | undefined): Action => ({
  type: ACTION_TYPE.selectDateTime,
  payload: dateTime,
});

export const setLicensePlateAction = (value: string): Action => ({
  type: ACTION_TYPE.setLicensePlate,
  payload: value,
});

export const closeModalAction: Action = {
  type: ACTION_TYPE.closeModal,
};

export const showModalAction = (data: ModalData): Action => ({
  type: ACTION_TYPE.openModal,
  payload: data,
});

export const setLicenseError = (value: boolean): Action => ({
  type: ACTION_TYPE.setLicenseError,
  payload: value,
});