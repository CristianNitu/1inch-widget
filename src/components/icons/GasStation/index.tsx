import { useTheme } from '@mui/material';
import React from 'react';

const GasStation = () => {
  const theme = useTheme();
  return (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 2C1.94599 2 1.5 2.446 1.5 3V19C1.5 19.5 2 20 2.5 20H11.5C12 20 12.5 19.5 12.5 19V14H13C13.5 14 13.5 14.5 13.5 14.5V16.5C13.5 17.5 14 18 15 18C16 18 16.5 17.5 16.5 16.5C16.5 15.3333 16.5 12 16.5 11C16.5 9.99999 14.5 8.99999 14.5 8V5H13.5L12.5 4V3C12.5 2.446 12.054 2 11.5 2H2.5ZM3.5 4H10.5V8H3.5V4ZM12.5 7H13.5C13.5 7 13.5 7.8333 13.5 8.5C13.5 9.49999 15.5 10.5 15.5 11.5V16.5C15.5 17 15 17 15 17C15 17 14.5 17 14.5 16.5C14.5 16.5 14.5 14.5 14.5 14C14.5 13.5 14 13 13.5 13C13.1667 13 12.5 13 12.5 13V7Z"
        fill={theme.palette.widget['icon-05']}
      />
    </svg>
  );
};

export default GasStation;
