/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import Button from '../button';
import { COLOR_ATTRIB } from '../../../common/constants';
import Items from './items';

export type ModalProps = {
  open: boolean;
  title: string;
  message: string;
  items?: Array<string>;
  onClose: () => void;
};

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) => (<Slide direction="up" ref={ref} {...props} />));

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  message,
  items,
  onClose,
}) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={onClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {message}
      </DialogContentText>
      {items && <Items data={items} />}
    </DialogContent>
    <DialogActions>
      <Button label="Ok" onClick={onClose} color={COLOR_ATTRIB.secondary} contained />
    </DialogActions>
  </Dialog>
);

export default Modal;
