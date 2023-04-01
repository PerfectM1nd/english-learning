import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SnackbarKey} from 'notistack';

import {Snackbar, SnackbarCloseAction} from '$/types/Snackbar';

export interface snackbarState {
  notifications: Array<any>
}

const initialState: snackbarState = {
  notifications: []
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<Snackbar>) => {
      const notification = action.payload;
      state.notifications.push(notification);
    },
    closeSnackbar: (state, action: PayloadAction<SnackbarCloseAction>) => {
      state.notifications = state.notifications.map(notification => (
        (action.payload.dismissAll || notification.key === action.payload.key)
          ? {...notification, dismissed: true}
          : {...notification}
      ));
    },
    removeSnackbar: (state, action: PayloadAction<SnackbarKey>) => {
      state.notifications = state.notifications.filter(
        notification => notification.key !== action.payload,
      );
    }
  }
});

export const {showSnackbar, closeSnackbar, removeSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;
