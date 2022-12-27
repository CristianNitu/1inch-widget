import { useTheme } from '@mui/material';
import { CSSProperties } from 'react';
import React from 'react';

interface IconProps {
  style?: CSSProperties | undefined;
}

const SwitchTokensIcon = ({ style }: IconProps) => {
  const theme = useTheme();
  return (
    <svg
      style={{
        ...style,
        transition: 'transform .4s ease-in-out',
      }}
      id="switch-tokens"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={theme.palette.widget['bg-02']} />
      <circle cx="12" cy="12" r="11.5" stroke={theme.palette.widget['border-00']} strokeOpacity="0.5" />
      <path
        d="M12.0164 17L12.0164 7"
        stroke={theme.palette.widget['icon-10']}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0327 12.9663L12.0173 16.9996L8 12.9663"
        stroke={theme.palette.widget['icon-10']}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SwitchTokensIcon;
