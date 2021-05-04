import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

export default () => {
  error({
    title: 'Oh No!',
    text: 'There is too much countries we found. Please enter more letters!!!',
    stack: new Stack({
      dir1: 'down',
      modal: true,
      firstpos1: 25,
      overlayClose: false,
    }),
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: 'Ok',
              primary: true,
              click: notice => {
                notice.close();
              },
            },
          ],
        },
      ],
    ]),
  });
};
