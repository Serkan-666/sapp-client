import { toast } from 'react-toastify';

const toastConfig = {
   position: 'top-right',
   autoClose: 3000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   theme: 'colored',
   style: {
      fontSize: '13px',
   },
};

const toastError = (message) => {
   toast.error(message, toastConfig);
};
const toastSuccess = (message) => {
   toast.success(message, toastConfig);
};

const toastWarning = (message) => {
   toast.warning(message, toastConfig);
};

const toastInfo = (message) => {
   toast.info(message, toastConfig);
};
export { toastError, toastSuccess, toastWarning, toastInfo };
