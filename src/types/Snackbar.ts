import {OptionsObject, SnackbarKey} from 'notistack';

export interface Snackbar {
  key: SnackbarKey,
  message: string,
  options: OptionsObject,
  dismissed: boolean
}

export interface SnackbarCloseAction {
  key: SnackbarKey,
  dismissAll?: boolean
}
