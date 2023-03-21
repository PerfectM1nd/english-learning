import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSnackbar} from 'notistack';
import {RootState} from '@/app/store';
import {removeSnackbar} from '@/features/snackbar/snackbarSlice';

let displayed: Array<any> = [];

const useNotifier = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.snackbar.notifications || []);
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();

  const storeDisplayed = (id: string | number) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = displayed.filter(key => id !== key);
  };

  React.useEffect(() => {
    for (const {key, message, options = {}, dismissed = false} of notifications) {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        continue;
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) continue;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey: string | number) => {
          // remove this snackbar from redux store
          dispatch(removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
        onClick: () => closeSnackbar(key),
        onTouchMove: () => closeSnackbar(key),
        style: {
          cursor: 'pointer'
        }
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    }
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useNotifier;
