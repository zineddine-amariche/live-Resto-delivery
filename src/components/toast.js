import React, { forwardRef, useImperativeHandle } from 'react';
import { ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showToast: (message) => {
    ToastAndroid.show(message)
    },
  }));

  return <Toast ref={(ref) => Toast.setRef(ref)} />;
});

export default ToastComponent;


// import React from 'react';
// import Toast from 'react-native-toast-message';

// const ToastComponent = () => {
//   return <Toast ref={(ref) => Toast.setRef(ref)} />;
// };

// export default ToastComponent;
