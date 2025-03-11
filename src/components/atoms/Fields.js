import React from 'react';
import TextField from '@mui/material/TextField';

export default function Field({
  label,
  value,
  variant = 'filled',
  onChange,
  error = false,
  helperText = '',
  ...props
}) {
  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
}