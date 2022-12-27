import { useTheme } from '@mui/material';
import React from 'react';

const SentArray = () => {
  const theme = useTheme();
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="45" r="43.5" stroke={theme.palette.widget['icon-07']} strokeWidth="3" />
      <path
        d="M47.5607 16.9393C46.9749 16.3535 46.0251 16.3535 45.4393 16.9393L35.8934 26.4852C35.3076 27.071 35.3076 28.0208 35.8934 28.6066C36.4792 29.1923 37.4289 29.1923 38.0147 28.6066L46.5 20.1213L54.9853 28.6066C55.5711 29.1923 56.5208 29.1923 57.1066 28.6066C57.6924 28.0208 57.6924 27.071 57.1066 26.4852L47.5607 16.9393ZM48 76.5048L48 18H45L45 76.5048H48Z"
        fill={theme.palette.widget['icon-07']}
      />
    </svg>
  );
};

export default SentArray;
