/* eslint-disable */

import { createTheme, PaletteOptions } from '@mui/material';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';

import baseTheme from './base-theme';
import { ExtendedPaletteOptions } from './theme';

const CYAN = '#55BCC0';
const CREAM_WHITE = '#F7F7FC';
const LIGHT_GREY = '#A3A3A3';
const WHITE = '#FFFFFF';
const PINK = '#FF6682';

const nereusPalette: PaletteOptions & ExtendedPaletteOptions & TypographyPropsVariantOverrides = {
  widget: {
    'input-primary-text': '#FFFFFF',
    'input-secondary-text': '#211F45',
    'input-placeholder': '#211F45',
    'input-bg': '#211F45',
    'input-bg-01': '#312F69',
    'input-border': '#312F69',
    'input-border-error': '#D85F75',
    'input-border-warn': '#FF9C08',

    'bg-main': '#14142A',
    'bg-disabled': '#8E97CD',
    'bg-01': '#211F45',
    'bg-02': '#211F45',
    'bg-03': '#CA405C',
    'bg-03-hover': '#9F344A',
    'bg-04': '#211F45',
    'bg-04-hover': '#3E9194',
    'bg-05': '#211F45',
    'bg-05-hover': '#211F45',
    'bg-07': '#211F45',

    'bg-main-btn': '#7770E0',
    'bg-main-btn-hovered': '#211F45',

    'bg-alert-warn': '#2F2A23',
    'bg-alert-error': '#2A1F23',
    'bg-alert': '#211F45',

    'text-primary': '#F7F7FC',
    'text-primary-01': '#C0C9FF',
    'text-primary-02': '#F7F7FC', //network button && best quote
    'text-disabled': '#14142A',
    'text-secondary': '#C0C9FF',
    'text-successful': '#83D16F',

    'text-main-btn-00': '#F7F7FC',
    'text-main-btn-01': '#F7F7FC',
    'text-main-btn-02': '#4ED5D2', //CONNect wallet text

    'text-warn': '#4ED5D2',
    'text-error': '#4ED5D2',
    'text-alert': '#4ED5D2',

    'checkbox-00': CYAN,
    'checkbox-01': '#999999',
    'checkbox-02': WHITE,

    'border-00': '#434343',
    'border-01': '#211F45',
    'border-02': '#4ED5D2',
    'border-03': '#211F45',
    'border-gradient': '#565891',

    'btn-text': '#4ED5D2',
    'btn-text-hover': '#7BE1E4',
    'bg-btn-hover': '#211F45',

    'icon-01': CREAM_WHITE,
    'icon-02': '#857DFA',
    'icon-05': LIGHT_GREY,
    'icon-06': WHITE,
    'icon-07': '#211F45',
    'icon-08': PINK,
    'icon-09': '#211F45',
    'icon-10': CYAN,

    'bg-tooltip': '#565891',

    'skeleton-00': '#211F45',
    'skeleton-01': '#211F45',

  },
  gradientArbitrum: '#3A377A',
  gradientAvalanche: '#3A377A',
  gradientBnb: '#3A377A',
  gradientEth: '#3A377A',
  gradientFantom: '#3A377A',
  gradientGnosis: '#3A377A',
  gradientOptimism: '#3A377A',
  gradientPolygon: '#3A377A',
  fontFamily: 'Inter',
    // regular
    rxxlg24: true,
    rlg18: true,
    rm16: true,
    rsm14: true,
    rxs12: true,

    // medium
    mxlg20: true,
    mlg18: true,
    mm16: true,

    //semi-bold
    sblg18: true,
    sbm16: true,
};

const theme = createTheme(baseTheme, {
  palette: nereusPalette,
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          color: nereusPalette.widget['input-primary-text'],
        },
      },
    },
  },
});

export default theme;
