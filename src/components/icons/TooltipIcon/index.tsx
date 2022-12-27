import { useTheme } from '@mui/material';
import React from 'react';

const TooltipIcon = () => {
  const theme = useTheme();
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12C9.31 12 12 9.31 12 6C12 2.69 9.31 0 6 0ZM6 11C3.24 11 1 8.76 1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6C11 8.76 8.76 11 6 11Z"
        fill={theme.palette.widget['icon-02']}
      />
      <path
        d="M6 4.85001C5.72 4.85001 5.5 5.07001 5.5 5.35001V8.75001C5.5 9.03001 5.72 9.25001 6 9.25001C6.28 9.25001 6.5 9.03001 6.5 8.75001V5.35001C6.5 5.08001 6.28 4.85001 6 4.85001Z"
        fill={theme.palette.widget['icon-02']}
      />
      <path
        d="M6.01 2.8C5.75 2.78 5.51 3.05 5.5 3.32C5.5 3.33 5.5 3.39 5.5 3.4C5.5 3.67 5.71 3.87 5.99 3.88H6C6.27 3.88 6.49 3.64 6.5 3.38C6.5 3.37 6.5 3.27 6.5 3.27C6.5 2.98 6.29 2.8 6.01 2.8Z"
        fill={theme.palette.widget['icon-02']}
      />
    </svg>
  );
};

export default TooltipIcon;
