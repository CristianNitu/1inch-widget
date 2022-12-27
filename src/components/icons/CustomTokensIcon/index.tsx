import { useTheme } from '@mui/material';
import React from 'react';

const CustomTokensIcon = () => {
  const theme = useTheme();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.625 12C15.625 13.6569 14.2259 15 12.5 15C10.7741 15 9.375 13.6569 9.375 12C9.375 10.3431 10.7741 9 12.5 9C14.2259 9 15.625 10.3431 15.625 12ZM13.5417 12C13.5417 12.5523 13.0753 13 12.5 13C11.9247 13 11.4583 12.5523 11.4583 12C11.4583 11.4477 11.9247 11 12.5 11C13.0753 11 13.5417 11.4477 13.5417 12Z"
        fill={theme.palette.widget['icon-05']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9167 12C22.9167 17.5228 18.253 22 12.5 22C6.74707 22 2.08337 17.5228 2.08337 12C2.08337 6.47715 6.74707 2 12.5 2C18.253 2 22.9167 6.47715 22.9167 12ZM20.8334 12C20.8334 16.4183 17.1024 20 12.5 20C7.89767 20 4.16671 16.4183 4.16671 12C4.16671 7.58172 7.89767 4 12.5 4C17.1024 4 20.8334 7.58172 20.8334 12Z"
        fill={theme.palette.widget['icon-05']}
      />
    </svg>
  );
};
export default CustomTokensIcon;
