import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CustomSnackbar = ({ open, onClose, severity, message }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (open) {
      setProgress(100);
      const timer = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 1 : 0));
      }, 60); // 6000ms / 100 = 60ms per step

      return () => {
        clearInterval(timer);
      };
    }
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;