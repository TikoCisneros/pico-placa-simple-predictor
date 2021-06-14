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
  setLicenseError,
} from '../reducers/main';
import { buildModalData } from './util';
import { MODAL_TYPE } from '../types/main';
import { canItBeOnRoad } from '../common/licensePredictor';
import { isValidLicense } from '../common/util';
import { TODAY } from '../common/constants';

const Main: React.FC = () => {
  const [{
    licensePlate,
    openModal,
    modalData,
    dateTime,
    incorrectLicense,
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

  const analyzeRestrictions = () => {
    const canDrive = canItBeOnRoad(licensePlate, dateTime!);
    const data = buildModalData(MODAL_TYPE.info, canDrive);
    dispatch(showModalAction(data));
  };

  const handleCanDrive = () => {
    const isAnLicense = isValidLicense(licensePlate);
    dispatch(setLicenseError(!isAnLicense));

    if (isAnLicense) {
      analyzeRestrictions();
    }
  };

  const handleLicensePlateFocus = () => dispatch(setLicenseError(false));

  return (
    <Layout>
      <PredictorForm
        licensePlate={licensePlate}
        onLicensePlateChange={handleChangeLicense}
        dateTime={dateTime}
        onDateTimeSelect={handleDateTimeChange}
        onSeeRestrictionsClick={handleSeeRestrictions}
        onCanDriveClick={handleCanDrive}
        onLicensePlateFocus={handleLicensePlateFocus}
        error={incorrectLicense}
        minDate={TODAY}
      />
      <Modal {...modalData} open={openModal} onClose={handleCloseModal} />
    </Layout>
  );
};

export default Main;
