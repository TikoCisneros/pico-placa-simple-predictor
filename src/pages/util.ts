/* eslint-disable max-len */
import { MODAL_TYPE, ModalData } from '../types/main';

const buildModalData = (type: MODAL_TYPE, canDrive?: boolean) : ModalData => {
  if (type === MODAL_TYPE.driveInfo) {
    return {
      title: 'Quito`s Pico y Placa',
      message: 'Circulation restriction time is from 7:00AM to 9:30AM and from 4:00PM to 7:30PM, following the last license plate digit criteria:',
      items: [
        'Monday: 1 and 2',
        'Tuesday: 3 and 4',
        'Wednesday: 5 and 6',
        'Thursday: 7 and 8',
        'Friday: 9 and 0',
        'Saturday: No restrictions',
        'Sunday: No restrictions',
      ],
    };
  }

  return {
    title: canDrive ? 'Terrific!' : 'Sorry...',
    message: canDrive ? 'You can drive your car now.' : 'You can not drive your car.',
  };
};

export { buildModalData };