import React, { useReducer } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import Layout from '../components/common/layout';
import Modal from '../components/common/modal';
import PredictorForm from '../components/predictorForm';

import {
  initialState, reducer,
  closeModalAction,
  setDateTimeAction,
  setLicensePlateAction,
  showModalAction,
} from '../reducers/main';
import { buildModalData } from './util';
import { MODAL_TYPE } from '../types/main';
import { canItBeOnRoad } from '../common/util';

const Main: React.FC = () => {
  const [{
    licensePlate,
    openModal,
    modalData,
    dateTime,
  }, dispatch] = useReducer(reducer, initialState);

  const handleDateTimeChange = (newValue: MaterialUiPickersDate) => dispatch(setDateTimeAction(newValue?.toDate()));

  const handleCloseModal = () => dispatch(closeModalAction);

  const handleChangeLicense = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    dispatch(setLicensePlateAction(value));
  };

  const handleSeeRestrictions = () => {
    const data = buildModalData(MODAL_TYPE.driveInfo);
    dispatch(showModalAction(data));
  };

  const handleCanDrive = () => {
    const canDrive = canItBeOnRoad(licensePlate, dateTime!);
    const data = buildModalData(MODAL_TYPE.info, canDrive);
    dispatch(showModalAction(data));
  };

  return (
    <Layout>
      <PredictorForm
        licensePlate={licensePlate}
        onLicensePlateChange={handleChangeLicense}
        dateTime={dateTime}
        onDateTimeSelect={handleDateTimeChange}
        onSeeRestrictionsClick={handleSeeRestrictions}
        onCanDriveClick={handleCanDrive}
      />
      <Modal {...modalData} open={openModal} onClose={handleCloseModal} />
    </Layout>
  );
};

export default Main;
