import {Action, Dispatch} from '@reduxjs/toolkit';

import {showSnackbar} from '$/features/snackbar/snackbarSlice';

export const showInfoSnackbar = (dispatch: Dispatch<Action>, message: string) => {
  dispatch(showSnackbar({
    key: Date.now() + Math.random(),
    message: message,
    dismissed: false,
    options: {
      variant: 'info',
      autoHideDuration: 4000
    }
  }));
};

export const showSuccessSnackbar = (dispatch: Dispatch<Action>, message: string) => {
  dispatch(showSnackbar({
    key: Date.now() + Math.random(),
    message: message,
    dismissed: false,
    options: {
      variant: 'success',
      autoHideDuration: 4000
    }
  }));
};

export const showErrorSnackbar = (dispatch: Dispatch<Action>, message: string) => {
  dispatch(showSnackbar({
    key: Date.now() + Math.random(),
    message: message,
    dismissed: false,
    options: {
      variant: 'error',
      autoHideDuration: 4000
    }
  }));
};

export const showNetworkError = (dispatch: Dispatch<Action>) => {
  dispatch(showSnackbar({
    key: Date.now() + Math.random(),
    message: 'Ошибка соединения с сервером',
    dismissed: false,
    options: {
      variant: 'error',
      autoHideDuration: 4000
    }
  }));
};
