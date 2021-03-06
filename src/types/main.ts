export enum ACTION_TYPE {
  openModal = 'OPEN_MODAL',
  closeModal = 'CLOSE_MODAL',
  selectDateTime = 'SELECT_DATE_TIME',
  setLicensePlate = 'SET_LICENSE_PLATE',
  setLicenseError = 'SER_LICENSE_ERROR',
}

export enum MODAL_TYPE {
  info,
  driveInfo,
}

export type ModalData = {
  title: string;
  message: string;
  items?: Array<string>;
};

export type State = {
  modalData: ModalData;
  openModal: boolean;
  dateTime: Date | undefined;
  licensePlate: string;
  incorrectLicense: boolean;
}

export type Action =
 | { type: ACTION_TYPE.closeModal }
 | { type: ACTION_TYPE.setLicensePlate, payload: string }
 | { type: ACTION_TYPE.openModal, payload: ModalData }
 | { type: ACTION_TYPE.selectDateTime, payload: Date | undefined }
 | { type: ACTION_TYPE.setLicenseError, payload: boolean };