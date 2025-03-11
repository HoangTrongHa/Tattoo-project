import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextArea({
  label,
  value,
  onChange,
  variant = 'filled',
  rows = 4,
  error = false,
  helperText = '',
  ...props
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      multiline
      rows={rows}
      variant={variant}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
}